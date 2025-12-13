# data_drones.py

# Diccionario de niveles de Drones (1 al 20).
# Recuerda reemplazar las URLs de 'image' con los file_id de Telegram
# cuando tengas tus imágenes generadas por IA para una carga instantánea.

DRONE_EVOLUTION = {
    # --- NIVEL 1-5: ERA INDUSTRIAL (Chatarra y Funcionalidad) ---
    1: {
        "name": "MK-1 'Mosquito'",
        "description": "Chatarra reciclada. Apenas vuela, pero es tuyo.",
        "upgrade_cost": 500,
        "luck_bonus": 0.0,
        "image": "https://img.freepik.com/premium-photo/small-rusty-robot-floating-space-low-poly-style-3d-render_118086-4587.jpg" 
    },
    2: {
        "name": "MK-2 'Explorador'",
        "description": "Batería mejorada y sensores de proximidad.",
        "upgrade_cost": 1200,
        "luck_bonus": 0.05,
        "image": "https://img.freepik.com/premium-photo/futuristic-drone-space-exploration-3d-rendering_357568-624.jpg"
    },
    3: {
        "name": "MK-3 'Minero'",
        "description": "Equipado con un taladro de diamante industrial.",
        "upgrade_cost": 2500,
        "luck_bonus": 0.10,
        "image": "https://img.freepik.com/premium-photo/sci-fi-drone-mining-asteroid-space-digital-art_1029473-8374.jpg"
    },
    4: {
        "name": "MK-4 'Cazador'",
        "description": "Motores de iones y radar de largo alcance.",
        "upgrade_cost": 5000,
        "luck_bonus": 0.15,
        "image": "https://img.freepik.com/premium-photo/advanced-space-drone-with-glowing-blue-lights_357568-1250.jpg"
    },
    5: {
        "name": "MK-5 'Predator'",
        "description": "Tecnología militar adaptada. Letal y eficiente.",
        "upgrade_cost": 10000,
        "luck_bonus": 0.20,
        "image": "https://img.freepik.com/premium-photo/futuristic-combat-drone-space-battle-background_1029473-5561.jpg"
    },

    # --- NIVEL 6-10: ERA MILITAR AVANZADA (Aleaciones y Potencia) ---
    6: {
        "name": "MK-6 'Titán'",
        "description": "Blindaje de Titanio Puro. Casi indestructible.",
        "upgrade_cost": 2,
        "luck_bonus": 0.25,
        "image": "https://img.freepik.com/premium-photo/giant-space-robot-mining-asteroid-cinematic-lighting_1029473-4421.jpg"
    },
    7: {
        "name": "MK-7 'Espectro'",
        "description": "Módulo de camuflaje óptico para evitar piratas.",
        "upgrade_cost": 35000,
        "luck_bonus": 0.30,
        "image": "https://placeholder.com/drone_mk7.jpg"
    },
    8: {
        "name": "MK-8 'Valkiria'",
        "description": "Propulsores de fusión fría. Velocidad extrema.",
        "upgrade_cost": 50000,
        "luck_bonus": 0.35,
        "image": "https://placeholder.com/drone_mk8.jpg"
    },
    9: {
        "name": "MK-9 'Destructor'",
        "description": "Cañones láser integrados para minar a distancia.",
        "upgrade_cost": 75000,
        "luck_bonus": 0.40,
        "image": "https://placeholder.com/drone_mk9.jpg"
    },
    10: {
        "name": "MK-10 'Behemoth'",
        "description": "Una fortaleza volante con bodega expandida.",
        "upgrade_cost": 100000,
        "luck_bonus": 0.45,
        "image": "https://placeholder.com/drone_mk10.jpg"
    },

    # --- NIVEL 11-15: ERA FUTURISTA (Energía y Cuántica) ---
    11: {
        "name": "MK-11 'Plasma'",
        "description": "Usa arcos de energía pura para desintegrar roca.",
        "upgrade_cost": 150000,
        "luck_bonus": 0.50,
        "image": "https://placeholder.com/drone_mk11.jpg"
    },
    12: {
        "name": "MK-12 'Quantum'",
        "description": "Procesador cuántico que predice dónde hay oro.",
        "upgrade_cost": 220000,
        "luck_bonus": 0.55,
        "image": "https://placeholder.com/drone_mk12.jpg"
    },
    13: {
        "name": "MK-13 'Void'",
        "description": "Extrae energía del vacío del espacio.",
        "upgrade_cost": 300000,
        "luck_bonus": 0.60,
        "image": "https://placeholder.com/drone_mk13.jpg"
    },
    14: {
        "name": "MK-14 'Celestial'",
        "description": "Diseño elegante con tecnología antigravedad.",
        "upgrade_cost": 450000,
        "luck_bonus": 0.65,
        "image": "https://placeholder.com/drone_mk14.jpg"
    },
    15: {
        "name": "MK-15 'Nebula'",
        "description": "Recubierto de polvo estelar. Brilla en la oscuridad.",
        "upgrade_cost": 600000,
        "luck_bonus": 0.70,
        "image": "https://placeholder.com/drone_mk15.jpg"
    },

    # --- NIVEL 16-20: ERA CÓSMICA (Tecnología Divina) ---
    16: {
        "name": "MK-16 'Singularidad'",
        "description": "Contiene un micro-agujero negro para almacenamiento infinito.",
        "upgrade_cost": 800000,
        "luck_bonus": 0.75,
        "image": "https://placeholder.com/drone_mk16.jpg"
    },
    17: {
        "name": "MK-17 'Horizonte'",
        "description": "Puede viajar al horizonte de sucesos y volver.",
        "upgrade_cost": 1200000,
        "luck_bonus": 0.80,
        "image": "https://placeholder.com/drone_mk17.jpg"
    },
    18: {
        "name": "MK-18 'Quasar'",
        "description": "Emite tanta luz como una galaxia activa.",
        "upgrade_cost": 2000000,
        "luck_bonus": 0.85,
        "image": "https://placeholder.com/drone_mk18.jpg"
    },
    19: {
        "name": "MK-19 'Supernova'",
        "description": "Poder explosivo concentrado en recolección pacífica.",
        "upgrade_cost": 3500000,
        "luck_bonus": 0.90,
        "image": "https://placeholder.com/drone_mk19.jpg"
    },
    20: {
        "name": "MK-20 'OMEGA'",
        "description": "La forma de vida mecánica definitiva. El fin de la evolución.",
        "upgrade_cost": 5000000,
        "luck_bonus": 1.0, # Doble de suerte base
        "image": "https://placeholder.com/drone_mk20.jpg"
    }
}

def get_drone_info(level):
    # Si el nivel del usuario es mayor al que tenemos definido,
    # devuelve el máximo disponible para evitar errores.
    max_level = max(DRONE_EVOLUTION.keys())
    effective_level = min(level, max_level)
    return DRONE_EVOLUTION[effective_level]