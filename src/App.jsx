import { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
// Importaciones para efectos profesionales (Post-Processing)
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

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
  { name: "Tuerca Oxidada", val: 5, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔩", chance: 0.20 },
  { name: "Cable Pelado", val: 8, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔌", chance: 0.18 },
  { name: "Lata Espacial", val: 3, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🥫", chance: 0.18 },
  { name: "Fragmento Metálico", val: 4, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "⚙️", chance: 0.16 },
  { name: "Residuo Plástico", val: 2, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🧩", chance: 0.15 },
  { name: "Cristal Roto", val: 6, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "💎", chance: 0.14 },
  { name: "Tornillo Suelto", val: 3, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "🔧", chance: 0.13 },
  { name: "Chapa Abollada", val: 7, rarity: "Común", style: "text-gray-400", border: "border-gray-600", icon: "📦", chance: 0.12 },
  { name: "Placa de Acero", val: 25, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🛡️", chance: 0.12 },
  { name: "Batería de Iones", val: 40, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🔋", chance: 0.10 },
  { name: "Sensor Óptico", val: 35, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "👁️", chance: 0.09 },
  { name: "Conductor de Energía", val: 50, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "⚡", chance: 0.08 },
  { name: "Aleación Refinada", val: 60, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "🔬", chance: 0.07 },
  { name: "Núcleo de Plasma", val: 80, rarity: "Poco Común", style: "text-emerald-400", border: "border-emerald-500", icon: "⚛️", chance: 0.06 },
  { name: "Chip Cuántico", val: 150, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "💾", chance: 0.07 },
  { name: "Motor de Iones", val: 200, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "🛸", chance: 0.06 },
  { name: "Cristal de Energía", val: 300, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "💠", chance: 0.05 },
  { name: "Dispositivo Holográfico", val: 400, rarity: "Raro", style: "text-blue-400", border: "border-blue-500", icon: "📡", chance: 0.04 },
  { name: "Motor WARP", val: 750, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🚀", chance: 0.04 },
  { name: "Núcleo Estelar", val: 1200, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "⭐", chance: 0.03 },
  { name: "Artefacto Antiguo", val: 2000, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🏺", chance: 0.025 },
  { name: "Generador de Campo", val: 3500, rarity: "Épico", style: "text-purple-400", border: "border-purple-500", icon: "🌀", chance: 0.02 },
  { name: "Antimateria", val: 5000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "⚛️", chance: 0.015 },
  { name: "Huevo Dragón", val: 8000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🥚", chance: 0.01 },
  { name: "Fragmento de Agujero Negro", val: 15000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "🕳️", chance: 0.008 },
  { name: "Esencia Cósmica", val: 25000, rarity: "Legendario", style: "text-yellow-400", border: "border-yellow-500", icon: "✨", chance: 0.005 },
  { name: "Partícula Dios", val: 50000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "🌌", chance: 0.002 },
  { name: "Corazón de Estrella", val: 100000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "❤️", chance: 0.001 },
  { name: "Fragmento del Big Bang", val: 250000, rarity: "Mítico", style: "text-rose-500", border: "border-rose-600", icon: "💥", chance: 0.0005 }
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
    // Variables para el nuevo comportamiento
    let previousRotY = 0; // Para el banking
    let orbitAngle = 0; // Para la órbita elíptica
    let warpProgress = 0; // Para la aceleración progresiva tipo warp
    const CINEMATIC_EASING = 0.025; // Easing más lento para la cámara cinematográfica
    
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

    // 4. NAVE (Estilo Toon Morado)
    const shipGroup = new THREE.Group();
    shipRef.current = shipGroup; // Asignar la referencia
    // Materiales
    const purpleMat = new THREE.MeshToonMaterial({ color: 0x8A2BE2 });
    const blackMat = new THREE.MeshToonMaterial({ color: 0x111111 });
    const glassMat = new THREE.MeshToonMaterial({ color: 0x88ccff, transparent: true, opacity: 0.7 });

    // Cuerpo principal
    const bodyGeo = new THREE.BoxGeometry(3, 1.5, 1);
    const body = new THREE.Mesh(bodyGeo, purpleMat);
    shipGroup.add(body);
    
    // Cabina de cristal
    const cabGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.2, 8);
    const cab = new THREE.Mesh(cabGeo, glassMat);
    cab.rotation.x = Math.PI / 2;
    cab.position.set(1.5, 0.4, 0);
    shipGroup.add(cab);

    // Alas (estilo simple)
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(-1.5, 0);
    wingShape.lineTo(-1.5, 0.5);
    wingShape.lineTo(0, 0.2);
    const extrudeSettings = { depth: 0.1, bevelEnabled: false };
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, extrudeSettings);
    
    const wingLeft = new THREE.Mesh(wingGeo, blackMat);
    wingLeft.rotation.z = Math.PI/2;
    wingLeft.rotation.x = Math.PI/6;
    wingLeft.position.set(1.0, 0.4, 0.25);
    shipGroup.add(wingLeft);

    const wingRight = wingLeft.clone();
    wingRight.rotation.x = -Math.PI/6;
    wingRight.position.set(1.0, 0.4, -0.25);
    shipGroup.add(wingRight);

    // Aleta Superior
    const finShape = new THREE.Shape();
    finShape.moveTo(0,0);
    finShape.quadraticCurveTo(0.5, 0.5, 0.5, 1.0);
    finShape.lineTo(-0.8, 0.8);
    finShape.quadraticCurveTo(-0.5, 0.4, -0.8, 0);

    const fin = new THREE.Mesh(new THREE.ExtrudeGeometry(finShape, { depth: 0.1, bevelEnabled: false }), purpleMat);
    fin.rotation.y = Math.PI/2;
    fin.position.set(-1.0, 1.25, 0);
    shipGroup.add(fin);
    
    // Motor (Luz)
    const engineLight = new THREE.PointLight(0xffaa00, 5, 50); // Color, Intensidad, Distancia
    engineLight.position.set(-1.5, 0, 0);
    shipGroup.add(engineLight);
    engineLightRef.current = engineLight;

    shipGroup.rotation.y = Math.PI * 0.5; // Orientar la nave hacia -Z (hacia el frente)
    scene.add(shipGroup);

    // 5. PLANETA / DESTINO
    const targetPlanet = PLANETS[planet];
    const noiseTexture = createNoiseTexture(targetPlanet.style.planetColor1, targetPlanet.style.planetColor2);

    const planetGeo = new THREE.SphereGeometry(6, 64, 64);
    const planetMat = new THREE.MeshStandardMaterial({ 
        map: noiseTexture,
        roughness: 0.8,
        metalness: 0.1
    });
    const planetMesh = new THREE.Mesh(planetGeo, planetMat);
    planetRef.current = planetMesh;
    planetMesh.position.set(0, 0, 0); // Centro de la escena
    scene.add(planetMesh);

    // Atmósfera (Utiliza el color del planeta)
    const atmosphereMat = new THREE.MeshBasicMaterial({
        color: targetPlanet.style.atmosphereColor,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide 
    });
    const atmosphereMesh = new THREE.Mesh(new THREE.SphereGeometry(6.3, 64, 64), atmosphereMat);
    scene.add(atmosphereMesh);

    // Anillos (Opcional, según configuración del planeta)
    if (targetPlanet.style.hasRings) {
      const ringGeo = new THREE.RingGeometry(8, 10, 64);
      const ringMat = new THREE.MeshBasicMaterial({ 
          color: targetPlanet.style.ringColor, 
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.4
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      scene.add(ringMesh);
    }
    
    // 6. FONDO DE ESTRELLAS (Partículas)
    const starGeo = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
        // Distribución en un cubo grande alrededor de la escena
        starPositions[i] = (Math.random() - 0.5) * 1000; // X
        starPositions[i + 1] = (Math.random() - 0.5) * 1000; // Y
        starPositions[i + 2] = (Math.random() - 0.5) * 1000; // Z
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, sizeAttenuation: true });
    starsRef.current = new THREE.Points(starGeo, starMat);
    scene.add(starsRef.current);


    // 7. PARTÍCULAS DE MINERÍA/EFECTO WARP (Simulación de escombros/velocidad)
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

    // Cámara Inicial (Será ajustada inmediatamente por la animación)
    camera.position.set(0, 3, 12);
    camera.lookAt(0, 0, 0);

    // --- LOOP DE ANIMACIÓN ---
    let animId;
    const animate = () => {
        animId = requestAnimationFrame(animate);
        const time = performance.now() * 0.001;

        const isMining = window.missionActive;

        // Aceleración progresiva tipo warp: Easing de 0 a 1 o de 1 a 0
        warpProgress = THREE.MathUtils.lerp(warpProgress, isMining ? 1 : 0, 0.02);

        // -- ANIMACIÓN DE LA NAVE --
        if (shipRef.current && engineLightRef.current) {
            let targetBank = 0; // Para el roll automático

            if (!isMining) {
                // Modo IDLE (Órbita alrededor del planeta)
                // Reiniciar la posición XZ de la nave si se estaba moviendo
                shipRef.current.position.x = THREE.MathUtils.lerp(shipRef.current.position.x, 0, 0.08);
                shipRef.current.position.z = THREE.MathUtils.lerp(shipRef.current.position.z, 0, 0.08);

                // --- Órbita real elíptica ---
                orbitAngle += 0.005; // Velocidad de órbita
                
                const a = 15; // Semieje mayor
                const e = 0.5; // Excentricidad (0.5 hace una elipse notable)

                // Fórmula de órbita (simulación simple)
                const r = a / (1 + e * Math.cos(orbitAngle));
                
                shipRef.current.position.x = r * Math.cos(orbitAngle);
                shipRef.current.position.z = r * Math.sin(orbitAngle);
                shipRef.current.position.y = 1.5 + Math.sin(time * 0.5) * 0.2; // Movimiento vertical suave

                shipRef.current.lookAt(0, 0, 0); // La nave mira al centro de la órbita (el planeta)

                // Resetear roll y pitch
                shipRef.current.rotation.x = THREE.MathUtils.lerp(shipRef.current.rotation.x, 0, 0.05);
                targetBank = 0; // Sin banking en órbita

                // Luz del motor en estado normal
                engineLightRef.current.intensity = THREE.MathUtils.lerp(engineLightRef.current.intensity, 5, 0.1);
                
            } else {
                // Modo VIAJE/MINERÍA
                // La nave se centra para el efecto warp
                shipRef.current.position.x = THREE.MathUtils.lerp(shipRef.current.position.x, 0, 0.1);
                shipRef.current.position.z = THREE.MathUtils.lerp(shipRef.current.position.z, 0, 0.1);
                shipRef.current.position.y = THREE.MathUtils.lerp(shipRef.current.position.y, 0, 0.1);
                
                // YAW (Giro en Y)
                const currentY = shipRef.current.rotation.y;
                let targetRotY = currentY + (0.05 * Math.sin(time * 0.0005));
                
                // Normalizar para evitar giros locos
                if (Math.abs(targetRotY - currentY) > Math.PI) {
                    if (targetRotY > currentY) targetRotY -= 2 * Math.PI; 
                    else targetRotY += 2 * Math.PI;
                }
                
                // Interpolación
                shipRef.current.rotation.y = THREE.MathUtils.lerp(currentY, targetRotY, 0.04);
                
                // --- Banking automático (roll al girar) ---
                let deltaRotY = shipRef.current.rotation.y - previousRotY;
                if (deltaRotY > Math.PI) deltaRotY -= 2 * Math.PI;
                if (deltaRotY < -Math.PI) deltaRotY += 2 * Math.PI;
                
                // targetBank es proporcional a la velocidad de giro (delta)
                targetBank = THREE.MathUtils.clamp(-deltaRotY * 30, -0.7, 0.7); // Factor negativo para un roll natural
                
                // Pitch (Cabeceo) al acelerar
                const pitch = -0.1 * warpProgress; // Pitch se aplica gradualmente con el warp
                shipRef.current.rotation.x = THREE.MathUtils.lerp(shipRef.current.rotation.x, pitch, 0.05);

                // Luz del motor: Aumenta la intensidad con el progreso del warp
                engineLightRef.current.intensity = THREE.MathUtils.lerp(engineLightRef.current.intensity, 25 * warpProgress + 5, 0.05);
            }

            // Actualiza la posición anterior para el banking en el siguiente frame
            previousRotY = shipRef.current.rotation.y;

            // BANKING (Roll en Z)
            shipRef.current.rotation.z = THREE.MathUtils.lerp(shipRef.current.rotation.z, targetBank, 0.08); 
        }

        // -- PARTÍCULAS (Se ven más rápido en modo warp) --
        particles.current.forEach(p => {
            if (isMining) {
                if (p.life <= 0) {
                    p.mesh.visible = true;
                    p.life = Math.random() * 50 + 20;
                    // Generar en un cono detrás del motor
                    const angle = (Math.random() - 0.5) * Math.PI * 0.2;
                    const r = Math.random() * 0.5;
                    p.mesh.position.set(-1.5 + Math.cos(angle) * r, Math.sin(angle) * r, (Math.random() - 0.5) * 0.5);
                    p.mesh.position.applyQuaternion(shipRef.current.quaternion); // Alinear con la rotación de la nave
                    p.mesh.position.add(shipRef.current.position);
                    p.velocity.set(0, 0, -20); // Velocidad inicial alta
                    p.velocity.applyQuaternion(shipRef.current.quaternion);
                    // Añadir un poco de aleatoriedad
                    p.velocity.x += (Math.random() - 0.5) * 2;
                    p.velocity.y += (Math.random() - 0.5) * 2;
                    p.velocity.z += (Math.random() - 0.5) * 2;
                }
                
                // La velocidad aumenta con el progreso del warp
                const speedMultiplier = 1 + warpProgress * 2;
                p.mesh.position.addScaledVector(p.velocity, 0.01 * speedMultiplier);
                p.mesh.material.opacity = p.life / 70;
                p.life--;
            } else {
                p.life = 0;
                p.mesh.visible = false;
            }
        });

        // -- CÁMARA --
        if (cameraRef.current && shipRef.current) {
            // --- Cámara cinematográfica con easing ---
            const SHIP_POS = shipRef.current.position;
            const CAMERA_EASING = isMining ? CINEMATIC_EASING : 0.05; // Un poco más rápida en idle para que siga el orbit

            if (!isMining) {
                // Modo IDLE: La cámara sigue a la nave orbitando
                const idealZOffset = 15;
                const idealY = 3; 

                // Calcular posición ideal de la cámara como si mirara la nave desde 'detrás'
                const cameraDirection = SHIP_POS.clone().sub(new THREE.Vector3(0,0,0)).normalize().multiplyScalar(idealZOffset);
                const idealPosition = SHIP_POS.clone().add(cameraDirection.multiplyScalar(-1)); // Posición detrás del punto de órbita
                idealPosition.y = idealY; // Mantener altura
                
                // Interpolación suave de la posición
                cameraRef.current.position.lerp(idealPosition, CINEMATIC_EASING);
                cameraRef.current.lookAt(SHIP_POS.x, SHIP_POS.y, SHIP_POS.z); // Siempre mira a la nave

            } else {
                // Modo Viaje/Minería
                
                // --- Aceleración progresiva tipo warp: Aumentar la distancia ideal con el progreso
                const idealZ = SHIP_POS.z + 12 + (15 * warpProgress); // De 12 a 27 unidades de distancia
                const idealY = 4 + (1 * warpProgress); // Subir la cámara un poco (de 4 a 5)
                const idealX = SHIP_POS.x + (Math.sin(time * 0.5) * 0.5); // Movimiento lateral suave

                cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, idealZ, CINEMATIC_EASING);
                cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, idealY, CINEMATIC_EASING);
                cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, idealX, CINEMATIC_EASING);
                
                cameraRef.current.lookAt(SHIP_POS.x, SHIP_POS.y, SHIP_POS.z);
            }
        }

        // Animación del planeta (rotación)
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.001;
        }

        composer.render();
    };

    animate();

    // -- RESIZE --
    const handleResize = () => {
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
  }, [level, planet]); // Dependencias

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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-green-500/50 max-w-sm w-full text-white text-center font-orbitron transform scale-100 transition-all duration-300">
      <div className="text-3xl mb-4 font-extrabold text-green-400">¡Misión Exitosa!</div>
      <p className="text-sm mb-6 text-gray-400">Has minado un nuevo recurso:</p>
      
      <div className="flex items-center justify-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700 mb-6">
        <div className={`text-4xl w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 shadow-inner`}>{item.icon}</div>
        <div>
          <h3 className={`font-bold text-lg leading-tight ${item.style}`}>{item.name}</h3>
          <span className={`text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-0.5 rounded mt-1 inline-block text-gray-400`}>{item.rarity}</span>
        </div>
        <div className="text-right">
          <div className="text-xl font-mono text-white font-bold tracking-tight">+{item.val.toLocaleString()}₡</div>
          <div className="text-xs text-gray-500 mt-1 font-mono">Valor</div>
        </div>
      </div>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-bold tracking-widest bg-green-600 hover:bg-green-500 transition-all active:scale-95 shadow-lg shadow-green-500/30"
      >
        RECLAMAR
      </button>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [credits, setCredits] = useState(500);
  const [droneLevel, setDroneLevel] = useState(1);
  const [inventory, setInventory] = useState([]);
  const [missionState, setMissionState] = useState('idle'); // 'idle', 'mining', 'reward'
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalDuration, setTotalDuration] = useState(10);
  const [rewardItem, setRewardItem] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'shop', 'inventory'
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [unlockedPlanets, setUnlockedPlanets] = useState([0]);

  // Manejo del temporizador de la misión
  useEffect(() => {
    let interval = null;
    if (missionState === 'mining' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && missionState === 'mining') {
      clearInterval(interval);
      claim();
      setMissionState('reward');
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
            weight *= (1 + levelFactor * 0.5);
            weight *= planetMultiplier * 0.5;
        }
        if(i.rarity === "Raro") {
            weight *= (1 + levelFactor * 1.0);
            weight *= planetMultiplier * 1.0;
        }
        if(i.rarity === "Épico") {
            weight *= (1 + levelFactor * 1.5);
            weight *= planetMultiplier * 1.5;
        }
        if(i.rarity === "Legendario" || i.rarity === "Mítico") {
            weight *= (1 + levelFactor * 2.0);
            weight *= planetMultiplier * 2.0;
        }
        
        return { ...i, adjustedChance: Math.max(0.00001, weight) };
    });

    const totalChance = adjustedItems.reduce((sum, i) => sum + i.adjustedChance, 0);
    let cumulativeChance = 0;
    
    // Reroll hasta que se seleccione un item
    for(let i of adjustedItems) {
      cumulativeChance += i.adjustedChance / totalChance;
      if (roll <= cumulativeChance) {
        item = i;
        break;
      }
    }

    setRewardItem(item);
    setInventory(i => [...i, item]);
  };

  const closeReward = () => {
    setRewardItem(null);
    setMissionState('idle');
  };

  const sellItem = (item, all = false) => {
    if(all) {
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

  const buyPlanet = (planetId, cost) => {
    if(credits >= cost) {
      setCredits(c => c - cost);
      setUnlockedPlanets(prev => [...prev, planetId]);
    }
  }

  const changePlanet = (direction) => {
    setSelectedPlanet(prev => {
        let newIdx = prev + direction;
        if(newIdx < 0) newIdx = PLANETS.length - 1;
        if(newIdx >= PLANETS.length) newIdx = 0;
        return newIdx;
    });
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
  const canUpgrade = credits >= droneLevel * 250;
  const isMining = missionState === 'mining';

  // --- RENDERIZADO ---
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      
      {/* 3D Scene */}
      <Scene3D 
        missionState={missionState} 
        level={droneLevel} 
        totalDuration={totalDuration} 
        timeLeft={timeLeft} 
        planet={selectedPlanet}
      />

      {/* Reward Modal */}
      {rewardItem && <RewardModal item={rewardItem} onClose={closeReward} />}

      {/* Overlay UI */}
      <div className="absolute inset-0 z-10 flex flex-col p-4 pointer-events-none">
        
        {/* Top Bar: Stats */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex flex-col bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-xl font-bold font-mono text-yellow-400">
              <Icons.Coins size={16} className="text-yellow-400" />
              {credits.toLocaleString()} ₡
            </div>
            <div className="mt-1 text-sm font-orbitron text-gray-400 leading-none">
                CRÉDITOS
            </div>
          </div>
          <div className="flex flex-col items-end bg-black/50 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg">
            <div className="text-lg font-bold font-orbitron text-blue-400 leading-none">
              NIVEL DRON
            </div>
            <div className="text-3xl font-bold font-mono text-blue-400">
              {droneLevel}
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex-1 flex flex-col justify-center items-center">
            {missionState === 'mining' && (
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-blue-500/50 shadow-2xl shadow-blue-500/30 text-center font-orbitron animate-pulse">
                    <div className="text-4xl font-extrabold text-blue-400 mb-2">VIAJANDO</div>
                    <div className="text-xl font-mono text-white tracking-widest">
                        {timeLeft} / {totalDuration}s
                    </div>
                </div>
            )}

            {missionState === 'reward' && (
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-green-500/50 shadow-2xl shadow-green-500/30 text-center font-orbitron">
                    <div className="text-4xl font-extrabold text-green-400 mb-2">RECOMPENSA</div>
                    <div className="text-xl font-mono text-white tracking-widest">
                        Reclamando...
                    </div>
                </div>
            )}
        </div>

        {/* Bottom Panel: Tabs and Controls */}
        <div className="flex-0 pointer-events-auto">
          
          {/* Main Content Area based on Tab */}
          {activeTab === 'home' && (
            <div className="bg-black/70 backdrop-blur-xl p-4 rounded-t-3xl border-t border-white/10 shadow-2xl max-w-md mx-auto">
                <h2 className="text-center text-xl font-orbitron font-bold text-white mb-4 leading-none">
                    DESTINO: <span className="text-purple-400">{currentPlanet.name}</span>
                </h2>
                
                {/* Planet Status/Controls */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    {/* Upgrade Button */}
                    <button onClick={upgrade} disabled={!canUpgrade || isMining} className={`flex-1 py-3 px-2 rounded-xl border font-bold text-sm leading-tight font-orbitron transition-all ${
                        canUpgrade && !isMining
                            ? 'bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/30'
                            : 'bg-gray-700/50 border-gray-700 text-gray-400 cursor-not-allowed'
                    }`}>
                        MEJORAR DRON <br/> 
                        <span className="font-mono text-xs block mt-1">
                            {canUpgrade ? (droneLevel * 250).toLocaleString() + ' ₡' : 'MAX/SIN FONDOS'}
                        </span>
                    </button>

                    {/* Unlock Planet Button */}
                    {!isPlanetUnlocked && (
                        <button onClick={() => buyPlanet(currentPlanet.id, currentPlanet.cost)} disabled={credits < currentPlanet.cost || isMining} className={`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-xl border font-bold text-sm leading-tight font-orbitron transition-all ${
                            credits >= currentPlanet.cost && !isMining
                                ? 'bg-purple-600 hover:bg-purple-500 border-b-4 border-purple-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30'
                                : 'bg-gray-700/50 border-gray-700 text-gray-500 cursor-not-allowed'
                        }`} >
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
                    <button onClick={() => changePlanet(-1)} disabled={missionState === 'mining'} className={`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${missionState === 'mining' ? 'opacity-30 border-gray-800 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95'}`} >
                        <Icons.ArrowLeft size={20} />
                    </button>
                    
                    <div className="flex-1">
                        {missionState === 'idle' && (
                            <button 
                                onClick={startMission} 
                                disabled={!isPlanetUnlocked} 
                                className={`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${
                                    isPlanetUnlocked 
                                        ? 'bg-green-600 text-white border-green-800 hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] shadow-green-500/50' 
                                        : 'bg-gray-700/50 text-gray-400 border-gray-800 cursor-not-allowed'
                                }`}
                            >
                                INICIAR MISIÓN ({Math.max(5, 10 - Math.floor(droneLevel/5))}s)
                            </button>
                        )}
                        {missionState === 'mining' && (
                            <button 
                                disabled 
                                className="w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base bg-yellow-600/50 text-white border-yellow-800 cursor-not-allowed animate-pulse"
                            >
                                VIAJANDO...
                            </button>
                        )}
                        {missionState === 'reward' && (
                            <button 
                                onClick={closeReward} 
                                className="w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base bg-green-600 text-white border-green-800 hover:bg-green-500 hover:scale-[1.02] active:scale-[0.98] shadow-green-500/50"
                            >
                                RECLAMAR
                            </button>
                        )}
                    </div>

                    <button onClick={() => changePlanet(1)} disabled={missionState === 'mining'} className={`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${missionState === 'mining' ? 'opacity-30 border-gray-800 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95'}`} >
                        <Icons.ArrowRight size={20} />
                    </button>
                </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-black/70 backdrop-blur-xl p-4 rounded-t-3xl border-t border-white/10 shadow-2xl max-w-md mx-auto h-[250px] overflow-y-auto">
                <h2 className="text-center text-xl font-orbitron font-bold text-white mb-4 leading-none">INVENTARIO</h2>
                
                {groupedInv.length === 0 && (
                    <div className="text-center text-gray-500 mt-8 font-orbitron">Inventario vacío. ¡A minar!</div>
                )}
                
                <div className="space-y-3">
                    {groupedInv.map(item => (
                        <div key={item.name} className={`flex items-center gap-3 bg-gray-800 p-3 rounded-xl border ${item.border} border-l-4`}>
                            <div className={`text-2xl w-10 h-10 flex items-center justify-center rounded border border-white/5`}>{item.icon}</div>
                            
                            <div className="flex-1">
                                <h3 className={`font-bold text-base leading-tight ${item.style}`}>{item.name}</h3>
                                <span className="text-xs text-gray-400 font-mono">x{item.count}</span>
                            </div>
                            
                            <div className="text-right">
                                <div className="text-sm font-mono text-white tracking-tight">{item.total.toLocaleString()}₡</div>
                                <div className="text-xs text-gray-500 mt-0.5">Valor total</div>
                            </div>

                            <button onClick={() => sellItem(item, true)} className="text-red-400 hover:text-red-300 transition-colors p-1 rounded-full hover:bg-gray-700/50">
                                <Icons.Trash size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          )}
          
          {/* Nav Bar */}
          <nav className="flex justify-around bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50 py-2 max-w-lg mx-auto rounded-t-lg">
            
            {/* Nav: Nave (Shop) */}
            <button onClick={() => setActiveTab('shop')} className={`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${activeTab==='shop'?'text-blue-400 -translate-y-1':'text-gray-600 hover:text-gray-400'}`} disabled>
              <Icons.Bolt className="w-6 h-6" />
              <span className="text-[9px] font-bold tracking-widest font-orbitron">NAVE</span>
            </button>

            {/* Nav: Home (Main Button) */}
            <div className="relative -top-8">
              <button onClick={() => setActiveTab('home')} className={`w-20 h-20 rounded-full flex items-center justify-center border-[6px] border-black shadow-2xl transition-all duration-300 ${activeTab === 'home' ? 'bg-blue-600 scale-110 shadow-blue-500/50' : 'bg-gray-800 hover:bg-gray-700'}`}>
                <Icons.Home className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Nav: Inventory */}
            <button onClick={() => setActiveTab('inventory')} className={`flex-1 flex flex-col items-center gap-1 transition-all duration-300 ${activeTab==='inventory'?'text-yellow-400 -translate-y-1':'text-gray-600 hover:text-gray-400'}`}>
              <div className="relative">
                <Icons.Bag className="w-6 h-6" />
                {inventory.length > 0 && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-lg border border-gray-900"></span>}
              </div>
              <span className="text-[9px] font-bold tracking-widest font-orbitron">INVENTARIO</span>
            </button>
          </nav>
        </div>
        
      </div>
    </div>
  );
}