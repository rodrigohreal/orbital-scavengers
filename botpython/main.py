import asyncio
import logging
import random
import time
import json
import os
from contextlib import suppress

from aiogram import Bot, Dispatcher, F
from aiogram.types import (
    Message, 
    CallbackQuery, 
    InlineKeyboardMarkup, 
    InlineKeyboardButton,
    ReplyKeyboardMarkup, 
    KeyboardButton,
    BotCommand
)
from aiogram.utils.keyboard import InlineKeyboardBuilder
from aiogram.filters import Command
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.exceptions import TelegramBadRequest

# Importamos nuestros datos externos
from data_items import ALL_ITEMS
from data_drones import get_drone_info

# --- CONFIGURACIÓN ---
API_TOKEN = '8584487418:AAGatDAhFi10Jbi6X3uFW7NXiuqo_c9VxRs'  # <--- ¡PEGA TU TOKEN AQUÍ!
DB_FILE = 'users_data.json'

# Configuración Base
BASE_MISSION_TIME = 15     # Segundos base
AUTOPILOT_RATE = 60        # Segundos por ítem en piloto automático

# Configuración de Paginación
ITEMS_PER_PAGE = 5

# Textos de Ambientación
FLAVOR_LOGS = [
    "Esquivando basura espacial...",
    "Hackeos de seguridad en proceso...",
    "El radar detecta señales débiles...",
    "Navegando campo de asteroides...",
    "Huyendo de piratas espaciales...",
    "Analizando restos de una supernova...",
    "Calibrando sensores de largo alcance...",
]

# Configuración de Planetas (Licencias)
PLANETS = {
    1: {"name": "Tierra", "cost": 0, "multiplier": 1.0},
    2: {"name": "Luna", "cost": 5000, "multiplier": 1.2}, 
    3: {"name": "Marte", "cost": 15000, "multiplier": 1.5},
    4: {"name": "Júpiter", "cost": 50000, "multiplier": 2.0},
    5: {"name": "Saturno", "cost": 100000, "multiplier": 3.0}, # Agregué uno más para que se vea mejor la lista
}

logging.basicConfig(level=logging.INFO)

bot = Bot(token=API_TOKEN)
dp = Dispatcher(storage=MemoryStorage())

# --- PERSISTENCIA ---
users_db = {}

def load_users_data():
    global users_db
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                users_db = {int(k): v for k, v in data.items()}
            logging.info("✅ Base de datos cargada.")
        except Exception as e:
            logging.error(f"❌ Error cargando DB: {e}")

def save_users_data():
    try:
        with open(DB_FILE, 'w', encoding='utf-8') as f:
            json.dump(users_db, f, indent=4, ensure_ascii=False)
    except Exception as e:
        logging.error(f"❌ Error guardando DB: {e}")

def get_user(user_id, first_name):
    if user_id not in users_db:
        users_db[user_id] = {
            "name": first_name,
            "credits": 500,
            "stars": 0,
            "drone_level": 1,
            "inventory": [],
            "planet_level": 1, 
            
            # Estado Misión
            "mining_end_time": 0,
            "is_mining": False,
            "mission_sector": 0,
            
            # Estado Autopiloto
            "autopilot_end_time": 0,
            "autopilot_start_time": 0,
            
            # Boosts
            "speed_boost_end_time": 0,
            "speed_boost_value": 0,
            
            # Control de Mensajes
            "last_message_id": None,
            "last_drone_img_id": None 
        }
        save_users_data()
    return users_db[user_id]

# --- LÓGICA AUXILIAR ---

def get_mission_duration(user):
    current_time = time.time()
    if user.get("speed_boost_end_time", 0) > current_time:
        return user["speed_boost_value"]
    return BASE_MISSION_TIME

def generate_loot(drone_level):
    roll = random.random()
    cumulative = 0
    found_item = ALL_ITEMS[0]
    
    drone_info = get_drone_info(drone_level)
    luck_bonus = drone_info.get("luck_bonus", 0)
    
    total_chance = sum(i["chance"] for i in ALL_ITEMS)
    target = roll * total_chance
    
    for item in ALL_ITEMS:
        cumulative += item["chance"]
        if target <= cumulative + (luck_bonus * 100):
            found_item = item
            break
    return found_item

async def delete_old_drone_img(chat_id, user):
    """Borra la imagen anterior del dron si existe."""
    if user.get("last_drone_img_id"):
        with suppress(TelegramBadRequest):
            await bot.delete_message(chat_id, user["last_drone_img_id"])
        user["last_drone_img_id"] = None

# --- UI GENERATORS ---

def get_main_menu_text(user):
    inv_value = sum(item['value'] for item in user['inventory'])
    drone_info = get_drone_info(user['drone_level'])
    planet = PLANETS.get(user.get('planet_level', 1))
    current_time = time.time()
    
    # Estado Boost
    boost_status = ""
    if user.get("speed_boost_end_time", 0) > current_time:
        rem_boost = int(user["speed_boost_end_time"] - current_time)
        boost_status = f"\n⚡ **TURBO:** {user['speed_boost_value']}s ({rem_boost // 60}m rest)"
    
    # Estado Autopiloto
    auto_status = ""
    if user.get("autopilot_end_time", 0) > current_time:
        auto_status = "\n🤖 **Piloto:** TRABAJANDO..."
    elif user.get("autopilot_end_time", 0) > 0:
        auto_status = "\n🤖 **Piloto:** ¡TERMINADO! (Recoger)"

    return (
        f"👨‍🚀 **CAPITÁN {user['name'].upper()}**\n"
        f"━━━━━━━━━━━━━━━━━━━━\n"
        f"💳 **Créditos:** {user['credits']} ₡\n"
        f"🛸 **Nave:** {drone_info['name']} (Nvl {user['drone_level']})\n"
        f"🌍 **Licencia:** {planet['name']}\n"
        f"📦 **Bodega:** {len(user['inventory'])} ítems (Valor: {inv_value} ₡)\n"
        f"━━━━━━━━━━━━━━━━━━━━"
        f"{boost_status}"
        f"{auto_status}"
    )

def main_menu_keyboard(user):
    current_time = time.time()
    
    # Lógica Dinámica del Botón Misión
    if user["is_mining"]:
        if current_time > user["mining_end_time"]:
            mission_text = "🎁 RECLAMAR CARGA"
            mission_callback = "claim" 
        else:
            mission_text = "⏳ EN PROGRESO..."
            mission_callback = "mission"
    else:
        duration = get_mission_duration(user)
        mission_text = f"🚀 MISIÓN ({duration}s)"
        mission_callback = "mission"
    
    kb = InlineKeyboardBuilder()
    
    kb.row(InlineKeyboardButton(text=mission_text, callback_data=mission_callback))
    
    kb.row(
        InlineKeyboardButton(text="🎒 Inventario", callback_data="inventory:0"),
        InlineKeyboardButton(text="💰 Vender Todo", callback_data="sell_all")
    )
    
    kb.row(
        InlineKeyboardButton(text="⚡ Tienda Premium", callback_data="shop"), 
        InlineKeyboardButton(text="🛠 Taller / Mejoras", callback_data="upgrade")
    )
    
    kb.row(InlineKeyboardButton(text="📷 Ver Diseño Dron", callback_data="show_drone_img"))

    kb.row(
        InlineKeyboardButton(text="🏆 Ranking", callback_data="ranking"),
        InlineKeyboardButton(text="🔄 Actualizar", callback_data="refresh")
    )
    
    return kb.as_markup()

async def delete_old_menu(chat_id, user):
    if user.get("last_message_id"):
        with suppress(TelegramBadRequest):
            await bot.delete_message(chat_id, user["last_message_id"])

# --- HANDLERS ---

@dp.message(Command("start"))
@dp.message(F.text == "🖥 ABRIR TERMINAL")
async def cmd_start(message: Message):
    user = get_user(message.from_user.id, message.from_user.first_name)
    await delete_old_menu(message.chat.id, user)
    await delete_old_drone_img(message.chat.id, user)
    
    with suppress(TelegramBadRequest): await message.delete()

    text = get_main_menu_text(user)
    sent_msg = await message.answer(text, reply_markup=main_menu_keyboard(user), parse_mode="Markdown")
    
    user["last_message_id"] = sent_msg.message_id
    save_users_data()
    
    kb = ReplyKeyboardMarkup(keyboard=[[KeyboardButton(text="🖥 ABRIR TERMINAL")]], resize_keyboard=True, persistent=True)
    if message.text == "/start":
        temp = await message.answer("...", reply_markup=kb)
        await asyncio.sleep(0.1)
        await temp.delete()

# --- 1. LÓGICA DE MISIÓN CON AUTO-ACTUALIZACIÓN ---
@dp.callback_query(F.data == "mission")
async def handle_mission(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    current_time = time.time()
    
    if user["is_mining"]:
        # Si el usuario presiona el botón MIENTRAS está minando
        time_left = int(user["mining_end_time"] - current_time)
        if time_left > 0:
            sector = user.get("mission_sector", 99)
            flavor = random.choice(FLAVOR_LOGS)
            await callback.answer(f"⚠️ Dron en Sector {sector}. {time_left}s restantes.", show_alert=True)
        else:
            # Si el tiempo ya pasó, redirigir a reclamar
            await handle_claim(callback)
    else:
        # INICIAR NUEVA MISIÓN
        duration = get_mission_duration(user)
        user["mining_end_time"] = current_time + duration
        user["is_mining"] = True
        user["mission_sector"] = random.randint(100, 999) 
        save_users_data()
        
        # 1. Editamos mensaje a "En Progreso"
        await callback.message.edit_text(
            f"🚀 **LANZAMIENTO CONFIRMADO**\n\n"
            f"📍 **Destino:** Sector {user['mission_sector']}\n"
            f"⏱ **Duración:** {duration} segundos.\n\n"
            f"_(Espera el aviso automático...)_", 
            reply_markup=main_menu_keyboard(user),
            parse_mode="Markdown"
        )
        
        # 2. ESPERAMOS EL TIEMPO (Sin bloquear al bot)
        await asyncio.sleep(duration)
        
        # 3. VERIFICACIÓN Y ACTUALIZACIÓN AUTOMÁTICA
        # Recargamos usuario por seguridad
        user = users_db[callback.from_user.id]
        
        # Si sigue en estado de minería y no ha reclamado
        if user["is_mining"]:
            # Intentamos actualizar el mensaje a "RECLAMAR"
            # Usamos suppress por si el usuario cambió de menú (ej: se fue al inventario)
            with suppress(TelegramBadRequest):
                await callback.message.edit_text(
                    f"✅ **¡MISIÓN COMPLETADA!**\n\n"
                    f"El dron ha regresado del Sector {user['mission_sector']}.\n"
                    f"La bodega está llena.",
                    # El teclado ya tendrá el botón "RECLAMAR" porque el tiempo pasó
                    reply_markup=main_menu_keyboard(user), 
                    parse_mode="Markdown"
                )

@dp.callback_query(F.data == "claim")
async def handle_claim(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    
    if not user["is_mining"] or time.time() < user["mining_end_time"]:
        await handle_refresh(callback)
        return

    item = generate_loot(user["drone_level"])
    user["inventory"].append(item)
    user["is_mining"] = False
    save_users_data()
    
    text = (
        f"🎉 **MISIÓN COMPLETADA**\n"
        f"📍 Regreso del Sector {user.get('mission_sector', '???')}\n\n"
        f"🎁 **Objeto:** {item['name']}\n"
        f"💎 **Rareza:** {item['rarity']}\n"
        f"💰 **Valor Base:** {item['value']} ₡"
    )
    kb = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="✅ Guardar en Bodega", callback_data="refresh")]])
    await callback.message.edit_text(text, reply_markup=kb, parse_mode="Markdown")

# --- 2. TIENDA PREMIUM & LICENCIAS (VISUALIZACIÓN MEJORADA) ---
@dp.callback_query(F.data == "shop")
async def handle_shop(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    current_planet = user.get("planet_level", 1)
    
    # Generamos la lista de licencias con estados
    licenses_text = ""
    for lvl, p_data in PLANETS.items():
        if lvl == current_planet:
            status = "✅ ACTUAL"
        elif lvl == current_planet + 1:
            status = f"🔓 DISPONIBLE ({p_data['cost']}₡)"
        elif lvl < current_planet:
            status = "✅ COMPRADO"
        else:
            status = "🔒 BLOQUEADO"
        licenses_text += f"• {p_data['name']}: {status}\n"

    text = (
        "⚡ **TIENDA DE SUMINISTROS** ⚡\n"
        f"💳 Saldo: {user['credits']} ₡\n\n"
        "**🌍 LICENCIAS PLANETARIAS:**\n"
        f"{licenses_text}\n"
        "_(Aumentan el valor de venta de tus objetos)_\n\n"
        "**🚀 BOOSTS:**\n"
        "Acelera tus misiones durante 15 minutos."
    )
    
    kb = InlineKeyboardBuilder()
    
    # Boosts
    kb.button(text="⚡ Turbo (10s) [500₡]", callback_data="buy_boost:10")
    kb.button(text="🔥 Hyper (5s) [1000₡]", callback_data="buy_boost:5")
    
    # Botón de Compra de Licencia (Solo aparece el siguiente nivel)
    if current_planet < len(PLANETS):
        next_p = PLANETS[current_planet + 1]
        kb.button(text=f"🌍 Comprar: {next_p['name']}", callback_data=f"buy_license:{current_planet + 1}")

    # Piloto Automático
    kb.button(text="🤖 Piloto Auto (30m) [2000₡]", callback_data="buy_autopilot")
    
    # CORRECCIÓN: Botón Ver Estado solo si tiene piloto activo o historial
    if user.get("autopilot_start_time", 0) > 0:
        kb.button(text="📡 Ver Estado Piloto", callback_data="check_autopilot")
    
    kb.adjust(1)
    kb.row(InlineKeyboardButton(text="🔙 Volver", callback_data="refresh"))
    
    await callback.message.edit_text(text, reply_markup=kb.as_markup(), parse_mode="Markdown")

@dp.callback_query(F.data.startswith("buy_license:"))
async def buy_license(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    target_lvl = int(callback.data.split(":")[1])
    planet_data = PLANETS[target_lvl]
    
    if user["credits"] >= planet_data["cost"]:
        user["credits"] -= planet_data["cost"]
        user["planet_level"] = target_lvl
        save_users_data()
        await callback.answer(f"¡Licencia para {planet_data['name']} adquirida! Ventas x{planet_data['multiplier']}")
        await handle_shop(callback)
    else:
        await callback.answer("❌ Créditos insuficientes", show_alert=True)

@dp.callback_query(F.data.startswith("buy_boost:"))
async def buy_boost(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    seconds = int(callback.data.split(":")[1])
    price = 500 if seconds == 10 else 1000
    
    if user["credits"] >= price:
        user["credits"] -= price
        user["speed_boost_value"] = seconds
        user["speed_boost_end_time"] = time.time() + (15 * 60)
        save_users_data()
        await callback.answer(f"¡TURBO ACTIVADO! Misiones de {seconds}s.")
        await handle_refresh(callback)
    else:
        await callback.answer("❌ Créditos insuficientes", show_alert=True)

# ... (Handlers de Piloto Automático se mantienen igual) ...
@dp.callback_query(F.data == "buy_autopilot")
async def buy_autopilot(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    price = 2000
    if user.get("autopilot_end_time", 0) > time.time():
        await callback.answer("❌ Ya activo", show_alert=True)
        return
    if user["credits"] >= price:
        user["credits"] -= price
        user["autopilot_start_time"] = time.time()
        user["autopilot_end_time"] = time.time() + (30 * 60)
        save_users_data()
        await callback.answer("🤖 ¡Piloto Desplegado!")
        await handle_refresh(callback) # Refrescamos para que pueda ver el botón de estado si quiere
    else:
        await callback.answer("❌ Créditos insuficientes", show_alert=True)

@dp.callback_query(F.data == "check_autopilot")
async def check_autopilot(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    now = time.time()
    end = user.get("autopilot_end_time", 0)
    start = user.get("autopilot_start_time", 0)
    
    if start == 0:
        await callback.answer("Sin piloto activo.", show_alert=True)
        return

    effective_end = min(now, end)
    items_count = int((effective_end - start) // AUTOPILOT_RATE)
    
    if now < end:
        await callback.answer(f"🤖 Trabajando... {items_count} objetos encontrados.", show_alert=True)
    else:
        # Cobrar
        for _ in range(items_count):
            item = generate_loot(1) 
            user["inventory"].append(item)
        
        user["autopilot_end_time"] = 0
        user["autopilot_start_time"] = 0
        save_users_data()
        await callback.message.edit_text(f"🤖 **PILOTO REGRESÓ**\nTrajo {items_count} objetos.", reply_markup=InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="🔙 Volver", callback_data="refresh")]]), parse_mode="Markdown")


# --- 3. MEJORAS Y VISUALIZACIÓN DE DRON ---
@dp.callback_query(F.data == "upgrade")
async def handle_upgrade(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    drone = get_drone_info(user['drone_level'])
    next_drone = get_drone_info(user['drone_level'] + 1)
    is_max = user['drone_level'] >= 20
    
    text = (
        f"🛠 **TALLER DE INGENIERÍA**\n\n"
        f"🛸 **Actual:** {drone['name']} (Nvl {user['drone_level']})\n"
        f"📝 *{drone['description']}*\n\n"
    )
    
    kb = InlineKeyboardBuilder()
    
    if not is_max:
        cost = drone['upgrade_cost']
        text += f"🆙 **Siguiente:** {next_drone['name']}\n💰 **Costo:** {cost} ₡"
        kb.button(text=f"Mejorar ({cost}₡)", callback_data="confirm_upgrade")
    
    kb.button(text="📷 Ver Diseño Dron", callback_data="show_drone_img")
    kb.button(text="🔙 Volver", callback_data="refresh")
    kb.adjust(1)
    
    await callback.message.edit_text(text, reply_markup=kb.as_markup(), parse_mode="Markdown")

@dp.callback_query(F.data == "show_drone_img")
async def show_drone_img(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    drone = get_drone_info(user['drone_level'])
    
    await delete_old_drone_img(callback.message.chat.id, user)
    
    sent_msg = await callback.message.answer_photo(
        photo=drone['image'],
        caption=f"🛸 **{drone['name']}**\n{drone['description']}"
    )
    
    user["last_drone_img_id"] = sent_msg.message_id
    save_users_data()
    
    await cmd_start(callback.message)

@dp.callback_query(F.data == "confirm_upgrade")
async def confirm_upgrade(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    drone = get_drone_info(user['drone_level'])
    cost = drone['upgrade_cost']
    
    if user["credits"] >= cost:
        user["credits"] -= cost
        user["drone_level"] += 1
        save_users_data()
        await callback.answer("¡Nave mejorada! 🦾")
        await handle_upgrade(callback)
    else:
        await callback.answer("❌ Fondos insuficientes", show_alert=True)

# --- 4. INVENTARIO (TEXTO CORREGIDO) ---
@dp.callback_query(F.data.startswith("inventory:"))
async def handle_inventory(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    
    if not user["inventory"]:
        await callback.answer("Bodega vacía", show_alert=True)
        return

    page = int(callback.data.split(":")[1])
    
    grouped = {}
    for item in user["inventory"]:
        if item['name'] not in grouped: grouped[item['name']] = {"count": 0, "val": item['value']}
        grouped[item['name']]["count"] += 1
    
    sorted_items = sorted(grouped.items(), key=lambda x: x[1]['val'], reverse=True)
    
    total_items = len(sorted_items)
    start_idx = page * ITEMS_PER_PAGE
    end_idx = start_idx + ITEMS_PER_PAGE
    current_page_items = sorted_items[start_idx:end_idx]
    
    kb = InlineKeyboardBuilder()
    
    text = f"🎒 **BODEGA (Pág {page+1})**\n\n"
    
    for name, data in current_page_items:
        text += f"• {name} (x{data['count']})\n"
        # CORRECCIÓN DE TEXTO PARA QUE QUEPA EN EL BOTÓN
        kb.button(text=f"💰 {name} (+{data['val']}₡)", callback_data=f"sell_one:{name}:{page}")
    
    # Navegación
    nav_row = []
    if page > 0:
        nav_row.append(InlineKeyboardButton(text="⬅️ Ant.", callback_data=f"inventory:{page-1}"))
    if end_idx < total_items:
        nav_row.append(InlineKeyboardButton(text="Sig. ➡️", callback_data=f"inventory:{page+1}"))
    
    kb.row(*nav_row)
    kb.row(InlineKeyboardButton(text="🔙 Volver", callback_data="refresh"))
    
    await callback.message.edit_text(text, reply_markup=kb.as_markup(), parse_mode="Markdown")

@dp.callback_query(F.data.startswith("sell_one:"))
async def sell_one(callback: CallbackQuery):
    parts = callback.data.split(":")
    name = parts[1]
    page = int(parts[2])
    
    user = users_db[callback.from_user.id]
    planet_mult = PLANETS.get(user.get("planet_level", 1), {}).get("multiplier", 1.0)
    
    for i, item in enumerate(user["inventory"]):
        if item['name'] == name:
            removed = user["inventory"].pop(i)
            sale_price = int(removed['value'] * planet_mult)
            user["credits"] += sale_price
            save_users_data()
            
            await callback.answer(f"+{sale_price}₡ (x{planet_mult})")
            callback.data = f"inventory:{page}"
            await handle_inventory(callback)
            return
    
    callback.data = f"inventory:{page}"
    await handle_inventory(callback)

@dp.callback_query(F.data == "sell_all")
async def sell_all(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    planet_mult = PLANETS.get(user.get("planet_level", 1), {}).get("multiplier", 1.0)
    
    base_val = sum(i['value'] for i in user["inventory"])
    total_val = int(base_val * planet_mult)
    
    if total_val > 0:
        user["credits"] += total_val
        user["inventory"] = []
        save_users_data()
        await callback.answer(f"¡Vendido por {total_val}₡! (Bonus x{planet_mult})")
    else:
        await callback.answer("Nada que vender")
    await handle_refresh(callback)

# --- RANKING Y REFRESH ---
@dp.callback_query(F.data == "ranking")
async def handle_ranking(callback: CallbackQuery):
    sorted_users = sorted(users_db.values(), key=lambda x: (x['drone_level'], x['credits']), reverse=True)
    top_10 = sorted_users[:10]
    text = "🏆 **RANKING GALÁCTICO** 🏆\n\n"
    for i, u in enumerate(top_10, 1):
        medal = "🥇" if i==1 else "🥈" if i==2 else "🥉" if i==3 else f"{i}."
        text += f"{medal} **{u['name']}** - Nvl {u['drone_level']} ({u['credits']}₡)\n"
    kb = InlineKeyboardMarkup(inline_keyboard=[[InlineKeyboardButton(text="🔙 Volver", callback_data="refresh")]])
    await callback.message.edit_text(text, reply_markup=kb, parse_mode="Markdown")

@dp.callback_query(F.data == "refresh")
async def handle_refresh(callback: CallbackQuery):
    user = users_db[callback.from_user.id]
    with suppress(TelegramBadRequest):
        await callback.message.edit_text(
            get_main_menu_text(user),
            reply_markup=main_menu_keyboard(user),
            parse_mode="Markdown"
        )

async def main():
    load_users_data()
    await bot.set_my_commands([BotCommand(command="start", description="Reiniciar")])
    print("🚀 Orbital Scavengers [CORREGIDO] Iniciado...")
    try:
        await dp.start_polling(bot)
    finally:
        save_users_data()

if __name__ == "__main__":
    asyncio.run(main())