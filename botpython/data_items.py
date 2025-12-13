# data_items.py

RARITY_COMMON = "⚪️ COMÚN"
RARITY_UNCOMMON = "🟢 UNCOMMON"
RARITY_RARE = "🔵 RARO"
RARITY_EPIC = "🟣 ÉPICO"
RARITY_LEGENDARY = "🟠 LEGENDARIO"
RARITY_MYTHIC = "🔴 MÍTICO"

# Lista de ~100 objetos con probabilidades ajustadas
ALL_ITEMS = [
    # --- BASURA (COMÚN - 45%) ---
    {"id": "c01", "name": "Tuerca Oxidada", "value": 1, "chance": 100, "rarity": RARITY_COMMON},
    {"id": "c02", "name": "Cable Quemado", "value": 2, "chance": 95, "rarity": RARITY_COMMON},
    {"id": "c03", "name": "Lata de Refresco", "value": 2, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c04", "name": "Bota Flotante", "value": 3, "chance": 85, "rarity": RARITY_COMMON},
    {"id": "c05", "name": "Envase de Fideos", "value": 1, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c06", "name": "Tornillo Suelto", "value": 1, "chance": 100, "rarity": RARITY_COMMON},
    {"id": "c07", "name": "Plástico Derretido", "value": 2, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c08", "name": "Papel de Aluminio", "value": 1, "chance": 95, "rarity": RARITY_COMMON},
    {"id": "c09", "name": "Vidrio Roto", "value": 2, "chance": 85, "rarity": RARITY_COMMON},
    {"id": "c10", "name": "Resorte Viejo", "value": 3, "chance": 80, "rarity": RARITY_COMMON},
    {"id": "c11", "name": "Filtro de Aire", "value": 4, "chance": 75, "rarity": RARITY_COMMON},
    {"id": "c12", "name": "Trozo de Goma", "value": 2, "chance": 85, "rarity": RARITY_COMMON},
    {"id": "c13", "name": "Cartón Espacial", "value": 1, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c14", "name": "Tapa de Escotilla", "value": 5, "chance": 70, "rarity": RARITY_COMMON},
    {"id": "c15", "name": "Fusible Quemado", "value": 3, "chance": 80, "rarity": RARITY_COMMON},
    {"id": "c16", "name": "Pila Agotada", "value": 2, "chance": 85, "rarity": RARITY_COMMON},
    {"id": "c17", "name": "Chip Frito", "value": 4, "chance": 75, "rarity": RARITY_COMMON},
    {"id": "c18", "name": "Pasta Dental", "value": 1, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c19", "name": "Revista Vieja", "value": 3, "chance": 70, "rarity": RARITY_COMMON},
    {"id": "c20", "name": "Botella de O2", "value": 5, "chance": 65, "rarity": RARITY_COMMON},
    {"id": "c21", "name": "Guante Roto", "value": 4, "chance": 70, "rarity": RARITY_COMMON},
    {"id": "c22", "name": "Casco Agrietado", "value": 6, "chance": 60, "rarity": RARITY_COMMON},
    {"id": "c23", "name": "Cinta Adhesiva", "value": 2, "chance": 80, "rarity": RARITY_COMMON},
    {"id": "c24", "name": "Taza Astillada", "value": 1, "chance": 90, "rarity": RARITY_COMMON},
    {"id": "c25", "name": "Bolígrafo Seco", "value": 1, "chance": 95, "rarity": RARITY_COMMON},

    # --- INDUSTRIAL (POCO COMÚN - 30%) ---
    {"id": "u01", "name": "Engranaje Titanio", "value": 15, "chance": 50, "rarity": RARITY_UNCOMMON},
    {"id": "u02", "name": "Batería de Iones", "value": 20, "chance": 45, "rarity": RARITY_UNCOMMON},
    {"id": "u03", "name": "Placa de Acero", "value": 18, "chance": 48, "rarity": RARITY_UNCOMMON},
    {"id": "u04", "name": "Lente Óptico", "value": 25, "chance": 40, "rarity": RARITY_UNCOMMON},
    {"id": "u05", "name": "Fluido Hidráulico", "value": 22, "chance": 42, "rarity": RARITY_UNCOMMON},
    {"id": "u06", "name": "Bobina de Cobre", "value": 16, "chance": 50, "rarity": RARITY_UNCOMMON},
    {"id": "u07", "name": "Micro-Motor", "value": 30, "chance": 35, "rarity": RARITY_UNCOMMON},
    {"id": "u08", "name": "Panel Solar Roto", "value": 28, "chance": 38, "rarity": RARITY_UNCOMMON},
    {"id": "u09", "name": "Antena", "value": 35, "chance": 30, "rarity": RARITY_UNCOMMON},
    {"id": "u10", "name": "Tanque H2", "value": 40, "chance": 28, "rarity": RARITY_UNCOMMON},
    {"id": "u11", "name": "Sellador Vacío", "value": 12, "chance": 55, "rarity": RARITY_UNCOMMON},
    {"id": "u12", "name": "Imán Industrial", "value": 25, "chance": 40, "rarity": RARITY_UNCOMMON},
    {"id": "u13", "name": "Teclado Mecánico", "value": 32, "chance": 32, "rarity": RARITY_UNCOMMON},
    {"id": "u14", "name": "Pantalla LCD", "value": 38, "chance": 30, "rarity": RARITY_UNCOMMON},
    {"id": "u15", "name": "Taladro Láser", "value": 45, "chance": 25, "rarity": RARITY_UNCOMMON},
    {"id": "u16", "name": "Rodamiento", "value": 14, "chance": 50, "rarity": RARITY_UNCOMMON},
    {"id": "u17", "name": "Pistón", "value": 20, "chance": 45, "rarity": RARITY_UNCOMMON},
    {"id": "u18", "name": "Válvula de Presión", "value": 26, "chance": 40, "rarity": RARITY_UNCOMMON},
    {"id": "u19", "name": "Sensor Térmico", "value": 35, "chance": 30, "rarity": RARITY_UNCOMMON},
    {"id": "u20", "name": "Cable de Fibra", "value": 22, "chance": 45, "rarity": RARITY_UNCOMMON},

    # --- TECNOLOGÍA (RARO - 15%) ---
    {"id": "r01", "name": "CPU Cuántica", "value": 100, "chance": 15, "rarity": RARITY_RARE},
    {"id": "r02", "name": "Brazo Robótico", "value": 120, "chance": 12, "rarity": RARITY_RARE},
    {"id": "r03", "name": "SSD Encriptado", "value": 110, "chance": 14, "rarity": RARITY_RARE},
    {"id": "r04", "name": "Célula Energía", "value": 150, "chance": 10, "rarity": RARITY_RARE},
    {"id": "r05", "name": "Escáner Bio", "value": 130, "chance": 11, "rarity": RARITY_RARE},
    {"id": "r06", "name": "Dron Espía", "value": 180, "chance": 8, "rarity": RARITY_RARE},
    {"id": "r07", "name": "Módulo IA", "value": 200, "chance": 7, "rarity": RARITY_RARE},
    {"id": "r08", "name": "Pistola Plasma", "value": 220, "chance": 6, "rarity": RARITY_RARE},
    {"id": "r09", "name": "Generador Escudo", "value": 250, "chance": 5, "rarity": RARITY_RARE},
    {"id": "r10", "name": "Mapa Estelar", "value": 140, "chance": 10, "rarity": RARITY_RARE},
    {"id": "r11", "name": "Motor de Iones", "value": 160, "chance": 9, "rarity": RARITY_RARE},
    {"id": "r12", "name": "Nanobots", "value": 190, "chance": 7, "rarity": RARITY_RARE},
    {"id": "r13", "name": "Holo-Proyector", "value": 130, "chance": 12, "rarity": RARITY_RARE},
    {"id": "r14", "name": "Traductor Universal", "value": 170, "chance": 8, "rarity": RARITY_RARE},
    {"id": "r15", "name": "Traje de Vacío", "value": 210, "chance": 6, "rarity": RARITY_RARE},

    # --- ARTEFACTOS (ÉPICO - 8%) ---
    {"id": "e01", "name": "Glifo Luminoso", "value": 500, "chance": 4, "rarity": RARITY_EPIC},
    {"id": "e02", "name": "Cráneo Cristal", "value": 600, "chance": 3, "rarity": RARITY_EPIC},
    {"id": "e03", "name": "Semilla Cósmica", "value": 700, "chance": 3, "rarity": RARITY_EPIC},
    {"id": "e04", "name": "Metal Líquido", "value": 800, "chance": 2, "rarity": RARITY_EPIC},
    {"id": "e05", "name": "Huevo de Bestia", "value": 900, "chance": 2, "rarity": RARITY_EPIC},
    {"id": "e06", "name": "Llave Dimensión", "value": 1000, "chance": 1, "rarity": RARITY_EPIC},
    {"id": "e07", "name": "Sarcófago", "value": 1200, "chance": 1, "rarity": RARITY_EPIC},
    {"id": "e08", "name": "Espada de Luz", "value": 1500, "chance": 1, "rarity": RARITY_EPIC},

    # --- ANOMALÍAS (LEGENDARIO - 2%) ---
    {"id": "l01", "name": "Fragmento de Sol", "value": 5000, "chance": 0.5, "rarity": RARITY_LEGENDARY},
    {"id": "l02", "name": "Motor Curvatura", "value": 7500, "chance": 0.3, "rarity": RARITY_LEGENDARY},
    {"id": "l03", "name": "Corona Real", "value": 10000, "chance": 0.2, "rarity": RARITY_LEGENDARY},
    {"id": "l04", "name": "Planos DeathStar", "value": 15000, "chance": 0.1, "rarity": RARITY_LEGENDARY},

    # --- UNIQUE (MÍTICO - 0.01%) ---
    {"id": "m01", "name": "EL BIG BANG", "value": 100000, "chance": 0.01, "rarity": RARITY_MYTHIC},
]