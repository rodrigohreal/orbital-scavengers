import { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
// Importaciones para efectos profesionales (Post-Processing)
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// Importador de GLTF/GLB
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// --- ICONOS SVG ---
const Icons = {
  Bolt: ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Home: ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Bag: ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  Trash: ({ size = 16, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Coins: ({ size = 16, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    </svg>
  ),
  Lock: ({ size = 16, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  ArrowLeft: ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  ArrowRight: ({ size = 24, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

// --- BASE DE DATOS ---
const ITEMS_DB = [
  // Común
  { name: "Tuerca Oxidada", val: 5, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔩", chance: 0.20 },
  { name: "Cable Pelado", val: 8, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔌", chance: 0.18 },
  { name: "Lata Espacial", val: 3, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🥫", chance: 0.18 },
  { name: "Fragmento Metálico", val: 4, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "⚙️", chance: 0.16 },
  { name: "Residuo Plástico", val: 2, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🧩", chance: 0.15 },
  { name: "Cristal Roto", val: 6, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "💎", chance: 0.14 },
  { name: "Tornillo Suelto", val: 3, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔧", chance: 0.13 },
  { name: "Chapa Abollada", val: 7, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "📦", chance: 0.12 },
  { name: "Restos de Comida", val: 1, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🦴", chance: 0.15 },
  { name: "Papel Aluminio", val: 2, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🗞️", chance: 0.14 },
  { name: "Vidrio Opaco", val: 4, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🥃", chance: 0.13 },
  { name: "Muelle Viejo", val: 5, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "➰", chance: 0.12 },
  { name: "Tubo de Cobre", val: 7, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🎺", chance: 0.11 },

  // Poco Común
  { name: "Placa de Acero", val: 25, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🛡️", chance: 0.12 },
  { name: "Batería de Iones", val: 40, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🔋", chance: 0.10 },
  { name: "Sensor Óptico", val: 35, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "👁️", chance: 0.09 },
  { name: "Conductor de Energía", val: 50, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "⚡", chance: 0.08 },
  { name: "Aleación Refinada", val: 60, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🔬", chance: 0.07 },
  { name: "Núcleo de Plasma", val: 80, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "⚛️", chance: 0.06 },
  { name: "Circuito Impreso", val: 30, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "📟", chance: 0.08 },
  { name: "Lente de Cámara", val: 45, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "📷", chance: 0.07 },
  { name: "Bobina Tesla", val: 55, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🌀", chance: 0.07 },
  { name: "Engranaje Titanio", val: 65, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "⚙️", chance: 0.06 },
  { name: "Fibra Óptica", val: 70, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🧵", chance: 0.06 },

  // Raro
  { name: "Chip Cuántico", val: 150, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "💾", chance: 0.07 },
  { name: "Motor de Iones", val: 200, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "🛸", chance: 0.06 },
  { name: "Cristal de Energía", val: 300, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "💠", chance: 0.05 },
  { name: "Dispositivo Holográfico", val: 400, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "📡", chance: 0.04 },
  { name: "Procesador Cuántico", val: 180, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "💻", chance: 0.05 },
  { name: "Celda de Combustible", val: 250, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "⛽", chance: 0.05 },
  { name: "Mapa Estelar", val: 320, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "🗺️", chance: 0.04 },
  { name: "Dron Espía", val: 350, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "🚁", chance: 0.04 },
  { name: "Armadura Nanotech", val: 380, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "🥋", chance: 0.04 },

  // Épico
  { name: "Motor WARP", val: 750, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🚀", chance: 0.04 },
  { name: "Núcleo Estelar", val: 1200, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "⭐", chance: 0.03 },
  { name: "Artefacto Antiguo", val: 2000, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🏺", chance: 0.025 },
  { name: "Generador de Campo", val: 3500, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🌀", chance: 0.02 },
  { name: "Generador de Escudos", val: 900, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🛡️", chance: 0.03 },
  { name: "Motor de Curvatura", val: 1500, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🌌", chance: 0.025 },
  { name: "Inteligencia Artificial", val: 2200, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🧠", chance: 0.02 },
  { name: "Cañón de Plasma", val: 2800, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🔫", chance: 0.02 },
  { name: "Cristal Kyber", val: 3200, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🔮", chance: 0.02 },

  // Legendario
  { name: "Antimateria", val: 5000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "⚛️", chance: 0.015 },
  { name: "Huevo Dragón", val: 8000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🥚", chance: 0.01 },
  { name: "Fragmento de Agujero Negro", val: 15000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🕳️", chance: 0.008 },
  { name: "Esencia Cósmica", val: 25000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "✨", chance: 0.005 },
  { name: "Corona Galáctica", val: 6000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "👑", chance: 0.01 },
  { name: "Llave Maestra Alienígena", val: 9000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🗝️", chance: 0.009 },
  { name: "Semilla de Vida", val: 12000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🌱", chance: 0.008 },
  { name: "Esfera de Dyson (Plano)", val: 18000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "☀️", chance: 0.007 },
  { name: "Materia Oscura Concentrada", val: 22000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "⚫", chance: 0.006 },

  // Mítico
  { name: "Partícula Dios", val: 50000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "🌌", chance: 0.002 },
  { name: "Corazón de Estrella", val: 100000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "❤️", chance: 0.001 },
  { name: "Fragmento del Big Bang", val: 250000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "💥", chance: 0.0005 },
  { name: "Huevo de Fénix Cósmico", val: 60000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "🔥", chance: 0.0015 },
  { name: "Tridente de Poseidón Espacial", val: 80000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "🔱", chance: 0.0012 },
  { name: "Gema del Infinito", val: 150000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "💎", chance: 0.0008 },
  { name: "Orbe de la Creación", val: 200000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "🌐", chance: 0.0006 },
  { name: "Reloj del Tiempo Absoluto", val: 300000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "⏳", chance: 0.0004 }
];

// --- CONFIGURACIÓN DE PLANETAS ---
const PLANETS = [
  { 
    id: 0, 
    name: "Sistema Solar", 
    cost: 0, 
    rarityMultiplier: 1.0,
    style: {
      planetColor1: "#1e3c72",
      planetColor2: "#2a5298",
      atmosphereColor: 0x4488ff,
      ringColor: 0x88ccff,
      hasRings: true
    }
  },
  { 
    id: 1, 
    name: "Nebulosa Roja", 
    cost: 10000, 
    rarityMultiplier: 1.5,
    style: {
      planetColor1: "#7a1f1f",
      planetColor2: "#a83232",
      atmosphereColor: 0xff4444,
      ringColor: 0xff6666,
      hasRings: false
    }
  },
  { 
    id: 2, 
    name: "Cúmulo Estelar", 
    cost: 30000, 
    rarityMultiplier: 2.0,
    style: {
      planetColor1: "#4a1e7a",
      planetColor2: "#6b2d9f",
      atmosphereColor: 0xaa44ff,
      ringColor: 0xcc66ff,
      hasRings: true
    }
  },
  { 
    id: 3, 
    name: "Galaxia Remota", 
    cost: 50000, 
    rarityMultiplier: 2.5,
    style: {
      planetColor1: "#1e4a3c",
      planetColor2: "#2d6b5a",
      atmosphereColor: 0x44ff88,
      ringColor: 0x66ffaa,
      hasRings: true
    }
  },
  { 
    id: 4, 
    name: "Agujero Negro", 
    cost: 100000, 
    rarityMultiplier: 3.5,
    style: {
      planetColor1: "#0a0a0a",
      planetColor2: "#1a1a1a",
      atmosphereColor: 0x4400ff,
      ringColor: 0x6600ff,
      hasRings: true
    }
  }
];

// --- ESCENA 3D ---
const Scene3D = ({ missionState, level, totalDuration, timeLeft, planet }) => {
  const mountRef = useRef(null);
  const shipRef = useRef(null);
  const planetRef = useRef(null);
  const starsRef = useRef(null);
  const engineLightRef = useRef(null);
  const cameraRef = useRef(null);
  
  // Variables para suavizar animaciones
  const particles = useRef([]);

  // Texturas procedurales
  const createNoiseTexture = (c1, c2) => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = c1; ctx.fillRect(0,0,size,size);
    for(let i=0; i<300; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = Math.random() * 40 + 5;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.fillStyle = c2; ctx.globalAlpha = 0.2; ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    // 1. SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a20, 0.005); 

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    // Limpieza y montaje
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. BLOOM (Resplandor)
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.2;
    bloomPass.strength = 1.2; // Intensidad del brillo
    bloomPass.radius = 0.5;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // 3. ILUMINACIÓN
    const ambientLight = new THREE.HemisphereLight(0x404060, 0x000000, 3);
    scene.add(ambientLight);
    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.position.set(10, 10, 10);
    scene.add(sunLight);
    const rimLight = new THREE.SpotLight(0x9d4edd, 10);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // 4. NAVE (Lógica Dual: GLB o Procedural)
    const shipContainer = new THREE.Group();
    scene.add(shipContainer);
    shipRef.current = shipContainer; // Referencia principal para animar

    // Función: Crear Nave Procedural (Fallback)
    const createProceduralShip = () => {
        const shipGroup = new THREE.Group();
        // Materiales
        const purpleMat = new THREE.MeshToonMaterial({ color: 0x8A2BE2 });
        const blackMat = new THREE.MeshToonMaterial({ color: 0x111111 });
        const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x88ccff, roughness: 0.2, metalness: 0.9, transmission: 0.9, transparent: true });
        const silverMat = new THREE.MeshStandardMaterial({ color: 0xC0C0C0, metalness: 0.8, roughness: 0.3 });

        // Cuerpo (Esfera alargada)
        const bodyGeo = new THREE.SphereGeometry(1, 32, 32);
        const body = new THREE.Mesh(bodyGeo, purpleMat);
        body.scale.set(1.8, 1, 1);
        shipGroup.add(body);

        // Bandas Negras (Toroides)
        const band1 = new THREE.Mesh(new THREE.TorusGeometry(0.98, 0.06, 16, 64), blackMat);
        band1.rotation.y = Math.PI/2;
        shipGroup.add(band1);
        
        const band2 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 16, 64), blackMat);
        band2.rotation.y = Math.PI/2;
        band2.position.x = 0.8;
        shipGroup.add(band2);
        
        const band3 = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 16, 64), blackMat);
        band3.rotation.y = Math.PI/2;
        band3.position.x = -0.8;
        shipGroup.add(band3);
        
        const band4 = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.06, 16, 64), blackMat);
        band4.rotation.x = Math.PI/2;
        band4.scale.set(1.8, 1, 1);
        shipGroup.add(band4);

        // Cabina
        const winLeft = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.4, 4, 8), glassMat);
        winLeft.rotation.z = Math.PI/2;
        winLeft.rotation.x = Math.PI/6;
        winLeft.position.set(1.0, 0.4, 0.25);
        shipGroup.add(winLeft);
        const winRight = winLeft.clone();
        winRight.position.set(1.0, 0.4, -0.25);
        shipGroup.add(winRight);

        // Aleta Superior
        const finShape = new THREE.Shape();
        finShape.moveTo(0,0); finShape.quadraticCurveTo(0.5, 0.5, 0.5, 1.0); finShape.lineTo(-0.8, 0.8); finShape.quadraticCurveTo(-0.5, 0.4, -0.8, 0);
        const fin = new THREE.Mesh(new THREE.ExtrudeGeometry(finShape, { depth: 0.1, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05 }), purpleMat);
        fin.position.set(-0.5, 0.85, -0.05); shipGroup.add(fin);

        // Alas Laterales
        const wingGeo = new THREE.BoxGeometry(1.0, 0.1, 0.8);
        const wingL = new THREE.Mesh(wingGeo, purpleMat);
        wingL.position.set(-0.5, -0.5, 0.8); wingL.rotation.set(0.5, 0, 0.2); shipGroup.add(wingL);
        const wingR = new THREE.Mesh(wingGeo, purpleMat);
        wingR.position.set(-0.5, -0.5, -0.8); wingR.rotation.set(-0.5, 0, 0.2); shipGroup.add(wingR);

        // Motor
        const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 0.6, 32), silverMat);
        engine.rotation.z = Math.PI/2;
        engine.position.set(-1.8, 0, 0);
        shipGroup.add(engine);

        // Ajuste de rotación inicial para que mire hacia +X (estándar del contenedor)
        // La nave procedural se construyó mirando a X+, así que está bien.
        // Solo necesitamos rotarla si el contenedor espera otra cosa, pero en el anim loop rotamos shipRef.current.
        // shipGroup está dentro de shipRef.current.
        
        return shipGroup;
    };

    // Intentar cargar GLB, si falla usar Procedural
    const loader = new GLTFLoader();
    const modelPath = `${import.meta.env.BASE_URL}nave.glb`;
    console.log(`Intentando cargar modelo desde: ${modelPath}`);
    
    loader.load(
        modelPath,
        (gltf) => {
            console.log("nave.glb cargado con éxito!", gltf);
            // ÉXITO: Usar modelo cargado
            const loadedShip = gltf.scene;
            
            // Debug: Calcular Bounding Box para ver tamaño
            const box = new THREE.Box3().setFromObject(loadedShip);
            const size = box.getSize(new THREE.Vector3());
            console.log("Tamaño de nave.glb:", size);

            // Ajustar escala y rotación si es necesario para coincidir con la lógica
            // Asumimos que la nave en el GLB mira hacia algun lado. 
            // Normalmente en Threejs "adelante" es -Z, pero nuestra lógica anima asumiendo X o Z.
            // Para simplificar, rotamos el modelo cargado para que "mire" hacia +X que es donde ponemos el fuego del motor (-X es atras).
            // Esto depende de cómo fue exportado el GLB. Ajuste genérico:
            loadedShip.rotation.y = 0; // A veces vienen mirando al revés
            
            // Normalizar escala si es muy grande o muy pequeña
            // Queremos que mida aprox 2-3 unidades de largo
            const maxDim = Math.max(size.x, size.y, size.z);
            const targetSize = 3.45;
            if(maxDim > 0) {
                const scaleFactor = targetSize / maxDim;
                loadedShip.scale.set(scaleFactor, scaleFactor, scaleFactor);
                console.log("Escalando nave.glb por factor:", scaleFactor);
            } else {
                loadedShip.scale.set(0.5, 0.5, 0.5); // Fallback
            }
            
            shipContainer.clear(); // Limpiar contenedor por si habia algo
            shipContainer.add(loadedShip);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% cargado');
        },
        (error) => {
            // ERROR: Usar nave procedural
            console.error("Error al cargar nave.glb:", error);
            console.log("Usando nave por defecto (fallback).");
            const defaultShip = createProceduralShip();
            shipContainer.clear();
            shipContainer.add(defaultShip);
        }
    );

    // Inicialmente no mostramos nada mientras carga el GLB. Si falla, el loader usará createProceduralShip.
    
    // Rotación inicial del contenedor general (igual que antes)
    shipContainer.rotation.y = Math.PI / 2;


    // Luz Motor (PointLight) - Se agrega a la escena, pero se mueve con la nave en el loop
    const engLight = new THREE.PointLight(0xffaa00, 0, 10);
    engLight.position.set(-2.5, 0, 0); scene.add(engLight);
    engineLightRef.current = engLight;

    // 5. PLANETA LEJANO
    const planetGroup = new THREE.Group();
    const planetId = planet?.id ?? 0;
    const planetData = PLANETS[planetId] || PLANETS[0];
    const pTex = createNoiseTexture(planetData.style.planetColor1, planetData.style.planetColor2);
    const planetMat = new THREE.MeshStandardMaterial({ map: pTex, roughness: 0.8 });
    const planetMesh = new THREE.Mesh(new THREE.SphereGeometry(60, 64, 64), planetMat);
    planetGroup.add(planetMesh);
    
    // Atmósfera
    const atmoMat = new THREE.MeshBasicMaterial({ color: planetData.style.atmosphereColor, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending, side: THREE.BackSide });
    const atmo = new THREE.Mesh(new THREE.SphereGeometry(64, 64, 64), atmoMat);
    planetGroup.add(atmo);

    // Anillos (solo si el planeta los tiene)
    if (planetData.style.hasRings) {
      const ringGeo = new THREE.RingGeometry(80, 110, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: planetData.style.ringColor, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
      const rings = new THREE.Mesh(ringGeo, ringMat);
      rings.rotation.x = Math.PI / 2.5;
      planetGroup.add(rings);
    }

    // Posición: Lejos en el eje Z negativo
    planetGroup.position.set(0, 10, -300);
    scene.add(planetGroup);
    planetRef.current = planetGroup;

    // 6. ESTRELLAS (Fondo)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPos = new Float32Array(starCount * 3);
    for(let i=0; i<starCount*3; i++) starPos[i] = (Math.random()-0.5) * 1000;
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 1.0 });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    starsRef.current = stars;

    // 7. PARTICULAS (Fuego Motor)
    // Usamos AdditiveBlending para que se vean brillantes y no se oculten
    const pGeo = new THREE.SphereGeometry(0.2, 4, 4);
    const pMat = new THREE.MeshBasicMaterial({ 
        color: 0xffaa00, 
        transparent: true, 
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false // CRUCIAL para que no se oculten entre sí o con el fondo incorrectamente
    });

    // Pool de partículas
    particles.current = [];
    for(let i=0; i<80; i++) {
        const m = new THREE.Mesh(pGeo, pMat.clone());
        m.visible = false;
        scene.add(m);
        particles.current.push({ mesh: m, life: 0, velocity: new THREE.Vector3() });
    }

    // Cámara Inicial
    camera.position.set(0, 3, 12);
    camera.lookAt(0, 0, 0);

    // --- LOOP DE ANIMACIÓN ---
    let animId;
    const animate = () => {
        animId = requestAnimationFrame(animate);
        
        const isMining = window.missionActive;
        const duration = window.totalTime || 1;
        const remaining = window.currentTime || 0;
        const progress = 1 - (remaining / duration);
        const time = Date.now() * 0.001;

        // -- ANIMACIÓN NAVE --
        if(shipRef.current) {
            let targetZ = 0;
            let targetY = 0;
            let targetRotY = 0;
            let targetRotZ = 0; // Rotación de "Verticalidad" (Morro arriba)
            let targetBank = 0;

            if (isMining) {
                // Durante la misión, ejecutamos el ciclo de vuelo y aterrizaje
                
                // Coordenadas de "Aterrizaje"
                // Planeta en Z = -300, Radio 60. Superficie aprox en Z = -240.
                const surfaceZ = -238; 
                const hoverHeight = 10; // Altura de la superficie en Y

                // FASE 1: IDA (0% - 40%) - Viajar hacia el planeta lejano
                if(progress < 0.4) {
                    const phaseP = progress / 0.4;
                    // Moverse de Z=0 a Z=-220 (Cerca del planeta)
                    targetZ = -220 * phaseP;
                    // Vuelo lineal (sin arco irreal hacia arriba)
                    targetY = 10 * phaseP; 
                    targetRotY = Math.PI / 2; // Volar recto
                    targetBank = 0;
                } 
                // FASE 2: APROXIMACIÓN Y ATERRIZAJE VERTICAL (40% - 50%)
                else if(progress < 0.5) {
                    const phaseP = (progress - 0.4) / 0.1;
                    targetZ = -220 + (surfaceZ - (-220)) * phaseP;
                    targetY = 10; // Altura final
                    targetRotY = Math.PI / 2; 
                    // ROTACIÓN VERTICAL: Girar 90 grados en Z local para que el morro apunte arriba
                    targetRotZ = (Math.PI / 2) * phaseP; 
                }
                // FASE 3: MINADO EN SUPERFICIE (50% - 60%)
                else if(progress < 0.6) {
                    targetZ = surfaceZ;
                    targetY = 10;
                    targetRotY = Math.PI / 2;
                    targetRotZ = Math.PI / 2; // Mantener vertical
                    // Vibración
                    shipRef.current.position.x = (Math.random()-0.5) * 0.2;
                }
                // FASE 4: DESPEGUE (60% - 70%)
                else if(progress < 0.7) {
                    const phaseP = (progress - 0.6) / 0.1;
                    targetZ = surfaceZ + 20 * phaseP; // Alejarse un poco
                    targetY = 10 + 20 * phaseP; // Subir
                    targetRotY = Math.PI / 2;
                    // Volver a horizontal
                    targetRotZ = (Math.PI / 2) * (1 - phaseP);
                }
                // FASE 5: REGRESO (70% - 100%)
                else {
                    const returnProgress = (progress - 0.7) / 0.3;
                    // De la posición de despegue (surfaceZ + 20 = -218) a 0
                    targetZ = (surfaceZ + 20) * (1 - returnProgress);
                    // Regreso lineal descendente
                    targetY = 30 * (1 - returnProgress);
                    targetRotY = Math.PI / 2 + Math.PI; // Vuelta completa para mirar a casa
                    targetRotZ = 0;
                }

                // Interpolaciones directas para suavidad
                shipRef.current.position.z = THREE.MathUtils.lerp(shipRef.current.position.z, targetZ, 0.08);
                shipRef.current.position.y = THREE.MathUtils.lerp(shipRef.current.position.y, targetY, 0.08);
                
                // Gestión de rotación Y (Evitar giros de 360 innecesarios)
                let currentY = shipRef.current.rotation.y;
                if (Math.abs(targetRotY - currentY) > Math.PI) {
                     if (targetRotY > currentY) currentY += 2 * Math.PI;
                     else currentY -= 2 * Math.PI;
                }
                shipRef.current.rotation.y = THREE.MathUtils.lerp(currentY, targetRotY, 0.05);
                
                // Rotación Z (Verticalidad)
                shipRef.current.rotation.z = THREE.MathUtils.lerp(shipRef.current.rotation.z, targetRotZ, 0.05);

                // Reset X
                shipRef.current.rotation.x = THREE.MathUtils.lerp(shipRef.current.rotation.x, 0, 0.1);

            } else {
                // IDLE: Rotación continua de exhibición en base
                targetZ = 0;
                shipRef.current.rotation.y += 0.005; // ROTACIÓN CONTINUA
                shipRef.current.position.y = Math.sin(time * 2) * 0.5; 
                shipRef.current.position.z = THREE.MathUtils.lerp(shipRef.current.position.z, 0, 0.05);
                shipRef.current.rotation.z = THREE.MathUtils.lerp(shipRef.current.rotation.z, 0, 0.05);
                shipRef.current.rotation.x = 0;
            }
        }

        // -- CÁMARA (LÓGICA ACTUALIZADA) --
        if (cameraRef.current) {
            if (isMining) {
                // CÁMARA FIJA DE MISIÓN:
                // Se coloca a un lado y atrás para ver todo el recorrido (Z=0 a Z=-300)
                // Posición: X=40 (Lado), Y=20 (Arriba), Z=20 (Atrás del inicio)
                const fixedPos = new THREE.Vector3(40, 20, 20);
                cameraRef.current.position.lerp(fixedPos, 0.05);
                
                // Mirar hacia un punto medio del trayecto para encuadrar planeta y nave
                const lookAtTarget = new THREE.Vector3(0, 0, -100);
                cameraRef.current.lookAt(lookAtTarget);
            } else {
                // Cámara de exhibición (Idle)
                cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, 12, 0.05);
                cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, 3, 0.05);
                cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, 0, 0.05);
                if(shipRef.current) {
                    cameraRef.current.lookAt(shipRef.current.position.x, 0, shipRef.current.position.z - 10);
                }
            }
        }

        // -- PLANETA --
        if(planetRef.current) planetRef.current.rotation.y += 0.0005;

        // -- ESTRELLAS (Efecto velocidad solo si no estamos aterrizados) --
        if(starsRef.current) {
            // Detener estrellas si estamos en el suelo (40% - 70%)
            const landed = (progress > 0.4 && progress < 0.7);
            const speed = (isMining && !landed) ? 2 : 0.1;
            const pos = starsRef.current.geometry.attributes.position.array;
            for(let i=0; i<3000; i++) {
                pos[i*3] -= speed;
                if(pos[i*3] < -500) pos[i*3] = 500;
            }
            starsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // -- PARTÍCULAS (FUEGO) --
        const pList = particles.current;
        // Si está aterrizado (vertical), apagar motor principal visualmente o reducir mucho
        const landed = (progress > 0.45 && progress < 0.65);
        const spawnRate = (isMining && !landed) ? 0.8 : (landed ? 0.1 : 0.3);
        const fireScale = isMining ? 2.0 : 0.8;
        const fireColor = isMining ? 0x00ffff : 0xff5500;
        
        // Spawnear nuevas
        if(Math.random() < spawnRate) {
            const p = pList.find(x => x.life <= 0);
            if(p && shipRef.current) {
                p.life = 1;
                p.mesh.visible = true;
                
                // Nacer en el motor (-1.8 en X local)
                // OJO: Si cargamos un GLB, hay que ver donde esta el motor. 
                // Asumimos que esta en -X (hacia atras).
                const offset = new THREE.Vector3(-1.8, 0, 0); 
                offset.applyEuler(shipRef.current.rotation);
                p.mesh.position.copy(shipRef.current.position).add(offset);
                
                // Velocidad relativa a la rotación de la nave
                // Si la nave está vertical, el fuego debe ir hacia abajo (Y-)
                const speed = isMining ? 0.8 : 0.2;
                const vel = new THREE.Vector3(-speed - Math.random()*0.2, (Math.random()-0.5)*0.1, (Math.random()-0.5)*0.1);
                vel.applyEuler(shipRef.current.rotation);
                p.velocity.copy(vel);

                p.mesh.material.color.setHex(fireColor);
                p.mesh.material.opacity = 1; 
            }
        }
        
        // Actualizar existentes
        pList.forEach(p => {
            if(p.life > 0) {
                p.life -= 0.03;
                p.mesh.position.add(p.velocity);
                p.mesh.scale.setScalar(p.life * fireScale); 
                p.mesh.material.opacity = p.life;
                if(p.life <= 0) p.mesh.visible = false;
            }
        });

        // Luz Motor
        if (engineLightRef.current) {
            // Apagar luz si está aterrizado
            const intensity = landed ? 0.5 : (isMining ? 8 : 2 + Math.sin(time * 5));
            engineLightRef.current.intensity = THREE.MathUtils.lerp(engineLightRef.current.intensity, intensity, 0.1);
            engineLightRef.current.color.setHex(fireColor);
        }

        composer.render();
    };
    animate();

    const handleResize = () => {
        if (!cameraRef.current || !mountRef.current) return;
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animId);
        if(mountRef.current) mountRef.current.innerHTML = '';
        renderer.dispose();
    };
  }, [level, planet]);

  // Sync Vars
  useEffect(() => {
    window.missionActive = (missionState === 'mining');
    window.totalTime = totalDuration;
    window.currentTime = timeLeft;
  }, [missionState, totalDuration, timeLeft]);

  return <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full z-0 bg-black" />;
};

// --- MODAL RECOMPENSA ---
const RewardModal = ({ item, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-[pop_0.4s_ease-out] p-4" onClick={onClose}>
    <div className={`relative bg-gray-900/90 border-2 ${item.border} rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]`} onClick={e => e.stopPropagation()}>
      <div className={`absolute inset-0 rounded-3xl opacity-20 bg-gradient-to-tr from-transparent via-${item.style.split('-')[1]}-500 to-transparent animate-pulse pointer-events-none`}></div>
      <h2 className="text-2xl font-bold text-white mb-8 font-orbitron tracking-[0.2em] border-b border-white/10 pb-4">RECOMPENSA</h2>
      <div className="text-9xl mb-6 animate-bounce drop-shadow-2xl">{item.icon}</div>
      <div className="space-y-2 mb-8">
        <h3 className={`text-3xl font-bold font-orbitron ${item.style} drop-shadow-md`}>{item.name}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border ${item.border} ${item.style}`}>
          {item.rarity}
        </span>
      </div>
      <div className="bg-black/50 rounded-2xl p-4 mb-8 border border-white/5">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Valor Estimado</p>
        <p className="text-4xl font-mono font-bold text-yellow-400 drop-shadow-lg">+{item.val.toLocaleString()} ₡</p>
      </div>
      <button onClick={onClose} className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg tracking-widest font-orbitron shadow-xl active:scale-95 transition-all">
        ACEPTAR
      </button>
    </div>
  </div>
);

// --- APP PRINCIPAL ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [credits, setCredits] = useState(() => parseInt(localStorage.getItem('os_ultra_credits')) || 500);
  const [droneLevel, setDroneLevel] = useState(() => parseInt(localStorage.getItem('os_ultra_level')) || 1);
  const [inventory, setInventory] = useState(() => JSON.parse(localStorage.getItem('os_ultra_inv')) || []);
  const [missionState, setMissionState] = useState('idle'); 
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [reward, setReward] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(() => {
    const saved = localStorage.getItem('os_ultra_planet');
    return saved ? parseInt(saved) : 0;
  });
  const [unlockedPlanets, setUnlockedPlanets] = useState(() => {
    const saved = localStorage.getItem('os_ultra_unlocked_planets');
    return saved ? JSON.parse(saved) : [0]; // Planet 0 (Sistema Solar) is always unlocked
  });

  useEffect(() => {
    localStorage.setItem('os_ultra_credits', credits);
    localStorage.setItem('os_ultra_level', droneLevel);
    localStorage.setItem('os_ultra_inv', JSON.stringify(inventory));
    localStorage.setItem('os_ultra_planet', selectedPlanet);
    localStorage.setItem('os_ultra_unlocked_planets', JSON.stringify(unlockedPlanets));
  }, [credits, droneLevel, inventory, selectedPlanet, unlockedPlanets]);

  useEffect(() => {
    let interval;
    if (missionState === 'mining' && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (missionState === 'mining' && timeLeft === 0) {
      setMissionState('ready');
      if(navigator.vibrate) navigator.vibrate(200);
    }
    return () => clearInterval(interval);
  }, [missionState, timeLeft]);

  const startMission = () => {
    const duration = Math.max(5, 10 - Math.floor(droneLevel/5));
    setTotalDuration(duration);
    setTimeLeft(duration);
    setMissionState('mining');
  };

  const claim = () => {
    const roll = Math.random();
    let item = ITEMS_DB[0];
    const levelFactor = droneLevel * 0.1;
    const currentPlanet = PLANETS[selectedPlanet];
    const planetMultiplier = currentPlanet?.rarityMultiplier || 1.0;
    
    const adjustedItems = ITEMS_DB.map(i => {
      let weight = i.chance;
      // Apply planet multiplier (more expensive planets = higher rare item chances)
      if(i.rarity === "Común") {
        weight /= (1 + levelFactor);
        weight /= planetMultiplier; // Reduce common items on better planets
      }
      if(i.rarity === "Poco Común") {
        weight *= (1 + levelFactor * 0.3);
        weight *= planetMultiplier * 0.5; // Slight boost
      }
      if(i.rarity === "Raro" || i.rarity === "Épico") {
        weight *= (1 + levelFactor * 0.5);
        weight *= planetMultiplier; // Good boost
      }
      if(i.rarity === "Legendario") {
        weight *= (1 + levelFactor);
        weight *= planetMultiplier * 1.5; // Strong boost
      }
      if(i.rarity === "Mítico") {
        weight *= (1 + levelFactor * 1.5);
        weight *= planetMultiplier * 2.0; // Very strong boost
      }
      return { ...i, weight };
    });
    let totalWeight = adjustedItems.reduce((sum, i) => sum + i.weight, 0);
    let random = roll * totalWeight;
    for(let i of adjustedItems) {
      random -= i.weight;
      if(random <= 0) { item = i; break; }
    }
    const newItem = { ...item, id: Date.now() };
    setInventory(prev => [...prev, newItem]);
    setReward(newItem);
    setMissionState('idle');
  };

  const unlockPlanet = (planetId) => {
    const planet = PLANETS[planetId];
    if (!planet || unlockedPlanets.includes(planetId)) return;
    if (credits >= planet.cost) {
      setCredits(prev => prev - planet.cost);
      setUnlockedPlanets(prev => [...prev, planetId]);
      setSelectedPlanet(planetId);
    }
  };

  // --- NAVIGATION ---
  const changePlanet = (dir) => {
    if (missionState === 'mining') return;
    setSelectedPlanet(prev => {
        const next = prev + dir;
        if (next < 0) return PLANETS.length - 1;
        if (next >= PLANETS.length) return 0;
        return next;
    });
  };

  const sellEverything = () => {
    if(inventory.length === 0) return;
    const totalVal = inventory.reduce((acc, item) => acc + item.val, 0);
    setCredits(prev => prev + totalVal);
    setInventory([]);
  };

  const sellItem = (item, all = false) => {
    if (all) {
      const toSell = inventory.filter(i => i.name === item.name);
      const keep = inventory.filter(i => i.name !== item.name);
      const val = toSell.reduce((a, b) => a + b.val, 0);
      setCredits(prev => prev + val);
      setInventory(keep);
    } else {
      const idx = inventory.findIndex(i => i.name === item.name);
      if (idx > -1) {
        const copy = [...inventory];
        copy.splice(idx, 1);
        setCredits(prev => prev + item.val);
        setInventory(copy);
      }
    }
  };

  const upgrade = () => {
    const cost = droneLevel * 250;
    if(credits >= cost) {
      setCredits(c => c - cost);
      setDroneLevel(l => l + 1);
    }
  }

  const groupedInv = useMemo(() => {
    const map = {};
    inventory.forEach(i => {
      if(!map[i.name]) map[i.name] = { ...i, count: 0, total: 0 };
      map[i.name].count++;
      map[i.name].total += i.val;
    });
    return Object.values(map).sort((a,b) => b.val - a.val);
  }, [inventory]);

  const currentPlanet = PLANETS[selectedPlanet];
  const isPlanetUnlocked = unlockedPlanets.includes(currentPlanet.id);
  const canAffordPlanet = credits >= currentPlanet.cost;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none">
      <Scene3D missionState={missionState} level={droneLevel} totalDuration={totalDuration} timeLeft={timeLeft} planet={currentPlanet} />
      
      {/* UI LAYER */}
      <div className="absolute inset-0 flex flex-col justify-between z-10 pointer-events-none">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="h-full flex flex-col justify-between p-4 pb-28 pointer-events-none">
            
            {/* Status Bars - Top Right */}
            <div className="flex gap-3 justify-end pointer-events-auto">
              <div className="glass-panel px-4 py-2.5 rounded-2xl border-l-4 border-blue-500/80 bg-black/70 backdrop-blur-xl shadow-lg animate-[slideUp_0.5s_ease-out]">
                <span className="text-gray-400 text-[10px] uppercase block tracking-wider font-bold mb-0.5">CRÉDITOS</span>
                <span className="text-xl font-bold font-mono text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">{credits.toLocaleString()} ₡</span>
              </div>
              <div className="glass-panel px-4 py-2.5 rounded-2xl text-xs font-bold text-gray-300 border border-white/10 bg-black/70 backdrop-blur-xl shadow-lg font-orbitron flex items-center animate-[slideUp_0.5s_ease-out]">
                MK-{droneLevel}
              </div>
            </div>

            {/* Mission Control Panel - Bottom Center */}
            <div className="w-full max-w-md mx-auto glass-panel p-5 rounded-3xl border border-blue-500/30 pointer-events-auto shadow-2xl bg-black/80 backdrop-blur-xl animate-[slideUp_0.6s_ease-out]">
              
              {/* Header Area: Planet Info OR Buy Button */}
              <div className="mb-4 text-center min-h-[60px] flex flex-col justify-center items-center">
                {isPlanetUnlocked ? (
                  <>
                    <p className={`text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 ${missionState === 'mining' ? 'text-yellow-400 animate-pulse' : 'text-cyan-400'}`}>
                      {missionState === 'idle' ? '• SISTEMAS ONLINE •' : missionState === 'mining' ? '>>> VELOCIDAD LUZ <<<' : '• DESTINO ALCANZADO •'}
                    </p>
                    <h3 className="text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md">
                      {currentPlanet.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Multiplicador: {currentPlanet.rarityMultiplier.toFixed(1)}x
                    </p>
                  </>
                ) : (
                  <button
                    onClick={() => unlockPlanet(currentPlanet.id)}
                    disabled={!canAffordPlanet}
                    className={`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        canAffordPlanet 
                        ? 'bg-yellow-600 hover:bg-yellow-500 border-yellow-400 text-white animate-pulse'
                        : 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Icons.Lock size={14} />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px]">COMPRAR {currentPlanet.name}</span>
                        <span className="text-sm font-mono">{currentPlanet.cost.toLocaleString()} ₡</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Control Row: Arrows & Main Button */}
              <div className="flex items-center gap-3">
                  <button 
                    onClick={() => changePlanet(-1)}
                    disabled={missionState === 'mining'}
                    className={`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${missionState === 'mining' ? 'opacity-30 border-gray-800 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95'}`}
                  >
                    <Icons.ArrowLeft size={20} />
                  </button>

                  <div className="flex-1">
                    {missionState === 'idle' && (
                        <button 
                            onClick={startMission} 
                            disabled={!isPlanetUnlocked}
                            className={`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${
                                isPlanetUnlocked
                                ? 'bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 text-white border-blue-800 active:border-b-0 active:translate-y-1 hover:shadow-blue-500/50'
                                : 'bg-gray-800 text-gray-500 border-gray-900 cursor-not-allowed'
                            }`}
                        >
                            {isPlanetUnlocked ? 'INICIAR MISIÓN' : 'BLOQUEADO'}
                        </button>
                    )}

                    {missionState === 'mining' && (
                        <div className="w-full bg-gray-900/80 h-14 rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-inner backdrop-blur-sm">
                        <div 
                            className="h-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse transition-all duration-1000" 
                            style={{ width: `${((1 - timeLeft/totalDuration)*100)}%` }} 
                        />
                        <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-900 font-mono tracking-wider text-lg drop-shadow-lg">
                            T-{timeLeft}s
                        </span>
                        </div>
                    )}

                    {missionState === 'ready' && (
                        <button onClick={claim} className="w-full bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-300 py-4 rounded-2xl font-bold text-gray-900 tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.6)] animate-pulse active:scale-95 transition-all border-b-4 border-green-700 font-orbitron text-base">
                        RECUPERAR CARGA
                        </button>
                    )}
                  </div>

                  <button 
                    onClick={() => changePlanet(1)}
                    disabled={missionState === 'mining'}
                    className={`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${missionState === 'mining' ? 'opacity-30 border-gray-800 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95'}`}
                  >
                    <Icons.ArrowRight size={20} />
                  </button>
              </div>

            </div>
          </div>
        )}

        {/* INVENTORY TAB */}
        {activeTab === 'inventory' && (
          <div className="h-full bg-black/90 backdrop-blur-xl p-4 pt-12 pb-32 overflow-y-auto pointer-events-auto animate-[slideUp_0.4s_ease-out]">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-white font-orbitron tracking-wider">BODEGA</h2>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Capacidad: {inventory.length} items</p>
              </div>
              {inventory.length > 0 && (
                <button onClick={sellEverything} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-lg border border-red-500/30 active:scale-95 transition-all flex items-center gap-2">
                  <Icons.Trash size={14} className="inline"/> VENDER TODO
                </button>
              )}
            </div>
            
            {groupedInv.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-600">
                <div className="text-6xl mb-4 opacity-20">📦</div>
                <p className="font-bold uppercase tracking-widest">Bodega Vacía</p>
              </div>
            ) : (
              <div className="grid gap-3">
                {groupedInv.map(item => (
                  <div key={item.name} className={`bg-gray-900/40 border-l-4 ${item.border} p-4 rounded-r-xl flex flex-col gap-3 relative overflow-hidden group`}>
                    <div className="flex justify-between items-start relative z-10">
                      <div className="flex gap-4 items-center">
                        <div className="text-4xl bg-black/50 w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner">{item.icon}</div>
                        <div>
                          <h3 className={`font-bold text-lg leading-tight ${item.style}`}>{item.name}</h3>
                          <span className={`text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400`}>{item.rarity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-mono text-white font-bold tracking-tight">+{item.val.toLocaleString()}₡</div>
                        <div className="text-xs text-gray-500 mt-1 font-mono">x{item.count}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-2">
                        <button onClick={() => sellItem(item)} className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors"><Icons.Coins size={14} className="text-yellow-500"/> Vender 1</button>
                        <button onClick={() => sellItem(item, true)} className="flex-1 bg-blue-500/10 hover:bg-blue-500/20 py-2 rounded-lg text-xs font-bold text-blue-300 flex items-center justify-center gap-2 border border-blue-500/20 transition-colors"><Icons.Trash size={14}/> Vender Todo</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SHOP TAB */}
        {activeTab === 'shop' && (
          <div className="h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col">
            <h2 className="text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest">INGENIERÍA</h2>
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">Mejoras de Dron & Sistemas</p>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-xs aspect-square mb-8">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full bg-gray-900/50 rounded-full border border-blue-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                  <div className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">🛸</div>
                </div>
              </div>
              <div className="w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10">
                <div className="flex justify-between items-end mb-4">
                  <div><h3 className="text-lg font-bold text-white font-orbitron">Interceptor MK-{droneLevel + 1}</h3><p className="text-xs text-blue-400 uppercase tracking-widest">Próxima Generación</p></div>
                  <div className="text-right"><span className="block text-[10px] text-gray-500 uppercase">Costo</span><span className={`font-mono font-bold text-lg ${credits >= droneLevel*250 ? 'text-green-400' : 'text-red-400'}`}>{(droneLevel * 250).toLocaleString()} ₡</span></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6"><div className="bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center"><span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Velocidad</span><span className="text-green-400 font-bold text-xl">+5%</span></div><div className="bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center"><span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Suerte</span><span className="text-yellow-400 font-bold text-xl">+2%</span></div></div>
                <button onClick={upgrade} disabled={credits < droneLevel * 250} className={`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${credits >= droneLevel*250 ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700'}`}>{credits >= droneLevel * 250 ? 'INSTALAR MEJORA' : 'CRÉDITOS INSUFICIENTES'}</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DOCK INFERIOR */}
      <div className="absolute bottom-6 w-full px-6 z-50 pointer-events-auto">
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-full p-2 flex justify-between items-center h-20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 relative">
          <button onClick={() => setActiveTab('shop')} className={`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${activeTab==='shop'?'text-blue-400 -translate-y-1':'text-gray-600 hover:text-gray-400'}`}>
            <Icons.Bolt className="w-6 h-6" />
            <span className="text-[9px] font-bold tracking-widest font-orbitron">NAVE</span>
          </button>
          <div className="relative -top-8">
            <button onClick={() => setActiveTab('home')} className={`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${activeTab === 'home' ? 'bg-blue-600 scale-110 shadow-blue-500/50' : 'bg-gray-800 hover:bg-gray-700'}`}>
              <Icons.Home className="w-8 h-8 text-white" />
            </button>
          </div>
          <button onClick={() => setActiveTab('inventory')} className={`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${activeTab==='inventory'?'text-yellow-400 -translate-y-1':'text-gray-600 hover:text-gray-400'}`}>
            <div className="relative">
              <Icons.Bag className="w-6 h-6" />
              {inventory.length > 0 && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping border border-black"></span>}
            </div>
            <span className="text-[9px] font-bold tracking-widest font-orbitron">CARGA</span>
          </button>
        </div>
      </div>

      {/* MODAL */}
      {reward && <RewardModal item={reward} onClose={() => setReward(null)} />}
    </div>
  );
}