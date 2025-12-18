import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Importaciones para efectos profesionales (Post-Processing)
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// Importador de GLTF/GLB
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { PLANETS } from '../data/planets';

// Smooth easing functions for buttery animations
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const smoothStep = (t) => t * t * (3 - 2 * t);

// Smooth damping function (frame-rate independent)
const damp = (current, target, smoothing, dt) => {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-smoothing * dt));
};

const Scene3D = ({ missionState, level, totalDuration, timeLeft, planet, spaceshipModel, nozzleFire }) => {
  const mountRef = useRef(null);
  const shipRef = useRef(null);
  const planetRef = useRef(null);
  const starsRef = useRef(null);
  const warpRef = useRef(null);
  const shootingStarsRef = useRef([]);
  const engineLightRef = useRef(null);
  const cameraRef = useRef(null);
  const clockRef = useRef(null);
  
  // Smooth animation state
  const animState = useRef({
    shipPos: new THREE.Vector3(0, 0, 0),
    shipRot: new THREE.Euler(0, Math.PI / 2, 0),
    shipVelocity: new THREE.Vector3(0, 0, 0),
    cameraPos: new THREE.Vector3(0, 3, 12),
    cameraTarget: new THREE.Vector3(0, 0, 0),
    engineIntensity: 0,
    prevProgress: 0,
    // For smooth time tracking (independent of 1-second timer steps)
    missionStartTime: 0,
    isMissionActive: false,
    smoothProgress: 0
  });
  
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
    const modelPath = `${import.meta.env.BASE_URL}${spaceshipModel || 'nave.glb'}`;
    console.log(`Intentando cargar modelo desde: ${modelPath}`);
    
    loader.load(
        modelPath,
        (gltf) => {
            console.log(`${spaceshipModel || 'nave.glb'} cargado con éxito!`, gltf);
            // ÉXITO: Usar modelo cargado
            const loadedShip = gltf.scene;
            
            // Debug: Calcular Bounding Box para ver tamaño
            const box = new THREE.Box3().setFromObject(loadedShip);
            const size = box.getSize(new THREE.Vector3());
            console.log(`Tamaño de ${spaceshipModel || 'nave.glb'}:`, size);

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
                console.log(`Escalando ${spaceshipModel || 'nave.glb'} por factor:`, scaleFactor);
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
            console.error(`Error al cargar ${spaceshipModel || 'nave.glb'}:`, error);
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

    // 6. ESTRELLAS (Parallax Background)
    const starGroup = new THREE.Group();
    const createStarLayer = (count, size, speedFactor, color = 0xffffff) => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        for(let i=0; i<count*3; i++) {
            pos[i] = (Math.random()-0.5) * 1500;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.8, sizeAttenuation: true });
        const mesh = new THREE.Points(geo, mat);
        mesh.userData = { speedFactor };
        return mesh;
    };
    
    // Create 3 layers for parallax
    const starsFar = createStarLayer(2000, 0.6, 0.2); // Slow, far
    const starsMid = createStarLayer(1500, 1.0, 0.5); // Medium
    const starsNear = createStarLayer(500, 2.0, 1.0); // Fast, near (fewer)
    
    starGroup.add(starsFar, starsMid, starsNear);
    scene.add(starGroup);
    starsRef.current = starGroup;

    // 6.1 WARP EFFECT (Lines)
    const warpGroup = new THREE.Group();
    const warpCount = 200;
    const warpGeo = new THREE.BufferGeometry();
    const warpPos = new Float32Array(warpCount * 6); // 2 points per line
    
    for(let i=0; i<warpCount; i++) {
        let x = (Math.random() - 0.5) * 500;
        let y = (Math.random() - 0.5) * 500;
        // Keep center clear
        if(Math.abs(x) < 50 && Math.abs(y) < 50) {
             x += (x > 0 ? 50 : -50);
             y += (y > 0 ? 50 : -50);
        }
        const z = (Math.random() - 0.5) * 1000;
        const len = 100 + Math.random() * 200;
        
        // Start point
        warpPos[i*6] = x; warpPos[i*6+1] = y; warpPos[i*6+2] = z;
        // End point
        warpPos[i*6+3] = x; warpPos[i*6+4] = y; warpPos[i*6+5] = z + len;
    }
    
    warpGeo.setAttribute('position', new THREE.BufferAttribute(warpPos, 3));
    const warpMat = new THREE.LineBasicMaterial({ 
        color: 0x88ccff, 
        transparent: true, 
        opacity: 0.0,
        blending: THREE.AdditiveBlending 
    });
    const warpLines = new THREE.LineSegments(warpGeo, warpMat);
    warpGroup.add(warpLines);
    // Add a "tunnel" mesh for extra warp feeling
    const tunnelGeo = new THREE.CylinderGeometry(40, 40, 1000, 16, 1, true);
    const tunnelMat = new THREE.MeshBasicMaterial({ 
        color: 0x4400ff, 
        transparent: true, 
        opacity: 0, 
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        wireframe: true 
    });
    const tunnel = new THREE.Mesh(tunnelGeo, tunnelMat);
    tunnel.rotation.x = Math.PI / 2;
    warpGroup.add(tunnel);
    
    scene.add(warpGroup);
    warpRef.current = { group: warpGroup, lines: warpLines, tunnel: tunnel, speed: 0 };

    // 6.2 SHOOTING STARS
    const shootingStarsPool = [];
    const shStarGeo = new THREE.ConeGeometry(0.2, 80, 8); // Long thin cone
    shStarGeo.rotateX(Math.PI / 2); // Point along Z
    const shStarMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
    
    // Create pool
    for(let i=0; i<5; i++) {
        const mesh = new THREE.Mesh(shStarGeo, shStarMat.clone());
        mesh.visible = false;
        scene.add(mesh);
        shootingStarsPool.push({ mesh, active: false, life: 0, velocity: new THREE.Vector3() });
    }
    shootingStarsRef.current = shootingStarsPool;

    // 7. PARTICULAS (Fuego Motor) - Enhanced particle system
    // Multiple particle layers for richer fire effect
    const pGeoCore = new THREE.SphereGeometry(0.15, 6, 6);
    const pGeoOuter = new THREE.SphereGeometry(0.25, 4, 4);
    const pGeoSpark = new THREE.SphereGeometry(0.08, 4, 4);
    
    const createFireMaterial = (color, opacity = 0.9) => new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // Pool de partículas - increased for smoother fire
    particles.current = [];
    for(let i=0; i<150; i++) {
        const type = i < 50 ? 'core' : (i < 100 ? 'outer' : 'spark');
        const geo = type === 'core' ? pGeoCore : (type === 'outer' ? pGeoOuter : pGeoSpark);
        const color = type === 'core' ? 0xffffff : (type === 'outer' ? 0xffaa00 : 0xff5500);
        const m = new THREE.Mesh(geo, createFireMaterial(color, type === 'core' ? 1.0 : 0.8));
        m.visible = false;
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: 1,
            velocity: new THREE.Vector3(),
            type,
            baseScale: type === 'core' ? 0.8 : (type === 'outer' ? 1.2 : 0.5)
        });
    }

    // Cámara Inicial
    camera.position.set(0, 3, 12);
    camera.lookAt(0, 0, 0);
    
    // Initialize clock for delta time
    clockRef.current = new THREE.Clock();
    
    // Initialize animation state
    animState.current.shipPos.set(0, 0, 0);
    animState.current.cameraPos.copy(camera.position);

    // --- LOOP DE ANIMACIÓN ---
    let animId;
    const animate = () => {
        animId = requestAnimationFrame(animate);
        
        // Delta time for frame-rate independent animations
        const dt = Math.min(clockRef.current.getDelta(), 0.1); // Cap to prevent jumps
        const dtScale = dt * 60; // Normalize to 60fps
        
        const isMining = window.missionActive;
        const duration = window.totalTime || 1;
        const time = Date.now() * 0.001;
        const state = animState.current;
        
        // SMOOTH PROGRESS CALCULATION - Uses internal timing instead of stepped timer
        let progress = 0;
        
        if (isMining) {
            // Detect mission start
            if (!state.isMissionActive) {
                state.isMissionActive = true;
                state.missionStartTime = performance.now();
                state.smoothProgress = 0;
            }
            
            // Calculate smooth progress based on elapsed time
            const elapsedMs = performance.now() - state.missionStartTime;
            const elapsedSeconds = elapsedMs / 1000;
            const rawProgress = Math.min(elapsedSeconds / duration, 0.999); // Cap just below 1
            
            // Ultra-smooth interpolation to target progress
            state.smoothProgress = damp(state.smoothProgress, rawProgress, 6.0, dt);
            progress = state.smoothProgress;
        } else {
            // Mission ended or idle
            if (state.isMissionActive) {
                state.isMissionActive = false;
                // Smoothly finish to 1.0 if mission just ended
                state.smoothProgress = damp(state.smoothProgress, 0, 3.0, dt);
            }
            progress = state.smoothProgress;
        }

        // -- ANIMACIÓN NAVE (ULTRA SMOOTH) --
        if(shipRef.current) {
            let targetZ = 0;
            let targetY = 0;
            let targetX = 0;
            let targetRotY = 0;
            let targetRotZ = 0;
            let targetRotX = 0;
            
            // Smoothing factors (higher = faster response)
            const posSmooth = 4.0;
            const rotSmooth = 3.0;

            if (isMining) {
                // Durante la misión, ejecutamos el ciclo de vuelo
                // Planet surface is at Z = -240 (planet at -300, radius 60)
                const approachZ = -200;  // Stop before planet
                const orbitY = 15;       // Orbit height

                // Ensure visibility is reset
                shipRef.current.visible = true;

                // FASE 1: VIAJE DE IDA (0% - 35%) - Travel to planet
                if(progress < 0.35) {
                    const phaseP = easeInOutCubic(progress / 0.35);
                    targetZ = approachZ * phaseP;
                    // Gentle arc trajectory - rise then level out
                    const arcHeight = Math.sin(phaseP * Math.PI) * 12;
                    targetY = orbitY * phaseP + arcHeight;
                    // Ship faces forward (negative Z direction)
                    targetRotY = Math.PI / 2;
                    // Subtle nose pitch following the arc
                    targetRotX = Math.cos(phaseP * Math.PI) * 0.12;
                    // Gentle banking during cruise
                    targetRotZ = Math.sin(time * 1.2) * 0.06;
                } 
                // FASE 2: ORBITA/SUPERFICIE (35% - 70%) - HANDOFF TO SURFACE SCENE
                else if(progress < 0.7) {
                    // Ship waits in orbit (or is hidden)
                    // We hide it to let SurfaceScene take over visually
                    shipRef.current.visible = false;
                    
                    // Keep target coords stable just in case
                    targetZ = approachZ;
                    targetY = orbitY;
                }
                // FASE 5: REGRESO A CASA (70% - 100%) - Return journey
                else {
                    shipRef.current.visible = true;
                    
                    const phaseP = easeInOutCubic((progress - 0.7) / 0.3);
                    // Travel from near planet back to origin
                    const startZ = approachZ; // Start return from approach point
                    const startY = orbitY;
                    targetZ = startZ * (1 - phaseP);
                    // Gentle descent arc back home
                    const arcHeight = Math.sin(phaseP * Math.PI) * 8;
                    targetY = startY * (1 - phaseP) + arcHeight;
                    // Ship faces home (positive Z direction, so -PI/2)
                    targetRotY = -Math.PI / 2;
                    // Subtle nose movements following the arc
                    targetRotX = Math.cos(phaseP * Math.PI) * 0.08;
                    // Gentle cruise banking
                    targetRotZ = Math.sin(time * 1.0) * 0.04 * (1 - phaseP);
                }

                // Ultra-smooth position interpolation using damping
                state.shipPos.x = damp(state.shipPos.x, targetX, posSmooth, dt);
                state.shipPos.y = damp(state.shipPos.y, targetY, posSmooth, dt);
                state.shipPos.z = damp(state.shipPos.z, targetZ, posSmooth, dt);
                
                shipRef.current.position.copy(state.shipPos);
                
                // Handle rotation Y wrapping for smooth transitions
                let currentRotY = state.shipRot.y;
                let deltaRotY = targetRotY - currentRotY;
                // Normalize to -PI to PI
                while(deltaRotY > Math.PI) deltaRotY -= Math.PI * 2;
                while(deltaRotY < -Math.PI) deltaRotY += Math.PI * 2;
                
                state.shipRot.y = damp(currentRotY, currentRotY + deltaRotY, rotSmooth, dt);
                state.shipRot.z = damp(state.shipRot.z, targetRotZ, rotSmooth, dt);
                state.shipRot.x = damp(state.shipRot.x, targetRotX, rotSmooth, dt);
                
                shipRef.current.rotation.y = state.shipRot.y;
                shipRef.current.rotation.z = state.shipRot.z;
                shipRef.current.rotation.x = state.shipRot.x;

            } else {
                // IDLE: Smooth exhibition rotation
                state.shipRot.y += 0.008 * dtScale;
                
                // Smooth floating motion with multiple frequencies
                const floatY = Math.sin(time * 1.5) * 0.4 + Math.sin(time * 2.3) * 0.15;
                const floatX = Math.sin(time * 1.1) * 0.1;
                
                state.shipPos.y = damp(state.shipPos.y, floatY, 3.0, dt);
                state.shipPos.z = damp(state.shipPos.z, 0, 2.0, dt);
                state.shipPos.x = damp(state.shipPos.x, floatX, 3.0, dt);
                state.shipRot.z = damp(state.shipRot.z, Math.sin(time * 0.8) * 0.05, 2.0, dt);
                state.shipRot.x = damp(state.shipRot.x, Math.sin(time * 1.2) * 0.03, 2.0, dt);
                
                shipRef.current.position.copy(state.shipPos);
                shipRef.current.rotation.y = state.shipRot.y;
                shipRef.current.rotation.z = state.shipRot.z;
                shipRef.current.rotation.x = state.shipRot.x;
            }
        }

        // -- CÁMARA (ULTRA SMOOTH) --
        if (cameraRef.current) {
            const camSmooth = 2.5;
            
            if (isMining) {
                // Dynamic camera that follows the action smoothly
                let targetCamPos;
                let targetLookAt;
                
                if(progress < 0.35) {
                    // Follow from side during outbound travel
                    const shipZ = state.shipPos.z;
                    const followDist = 35;
                    targetCamPos = new THREE.Vector3(
                        20 + Math.sin(time * 0.3) * 2,
                        12 + Math.sin(time * 0.5) * 1.5,
                        shipZ + followDist
                    );
                    targetLookAt = new THREE.Vector3(0, state.shipPos.y, shipZ - 20);
                } else if(progress < 0.55) {
                    // Closer orbital view during landing/mining
                    targetCamPos = new THREE.Vector3(
                        30 + Math.sin(time * 0.4) * 2,
                        20 + Math.sin(time * 0.6) * 1.5,
                        -170
                    );
                    targetLookAt = new THREE.Vector3(0, 8, -220);
                } else if(progress < 0.7) {
                    // Pull out for takeoff and turn
                    const phaseP = (progress - 0.55) / 0.15;
                    targetCamPos = new THREE.Vector3(
                        35 - phaseP * 10,
                        25 + phaseP * 5,
                        -150 + phaseP * 50
                    );
                    targetLookAt = new THREE.Vector3(0, state.shipPos.y, state.shipPos.z);
                } else {
                    // Follow from side during return journey
                    const shipZ = state.shipPos.z;
                    const returnP = (progress - 0.7) / 0.3;
                    targetCamPos = new THREE.Vector3(
                        -20 - Math.sin(time * 0.3) * 2,
                        12 + Math.sin(time * 0.5) * 1.5 - returnP * 5,
                        shipZ - 35
                    );
                    targetLookAt = new THREE.Vector3(0, state.shipPos.y, shipZ + 20);
                }
                
                // Smooth camera position
                state.cameraPos.x = damp(state.cameraPos.x, targetCamPos.x, camSmooth, dt);
                state.cameraPos.y = damp(state.cameraPos.y, targetCamPos.y, camSmooth, dt);
                state.cameraPos.z = damp(state.cameraPos.z, targetCamPos.z, camSmooth, dt);
                cameraRef.current.position.copy(state.cameraPos);
                
                // Smooth look-at target
                state.cameraTarget.x = damp(state.cameraTarget.x, targetLookAt.x, camSmooth * 1.5, dt);
                state.cameraTarget.y = damp(state.cameraTarget.y, targetLookAt.y, camSmooth * 1.5, dt);
                state.cameraTarget.z = damp(state.cameraTarget.z, targetLookAt.z, camSmooth * 1.5, dt);
                cameraRef.current.lookAt(state.cameraTarget);
                
            } else {
                // Smooth idle camera with gentle movement
                const idlePos = new THREE.Vector3(
                    Math.sin(time * 0.2) * 2,
                    3 + Math.sin(time * 0.3) * 0.5,
                    12 + Math.sin(time * 0.25) * 1
                );
                
                state.cameraPos.x = damp(state.cameraPos.x, idlePos.x, camSmooth, dt);
                state.cameraPos.y = damp(state.cameraPos.y, idlePos.y, camSmooth, dt);
                state.cameraPos.z = damp(state.cameraPos.z, idlePos.z, camSmooth, dt);
                cameraRef.current.position.copy(state.cameraPos);
                
                if(shipRef.current) {
                    const lookTarget = new THREE.Vector3(
                        state.shipPos.x,
                        state.shipPos.y * 0.5,
                        state.shipPos.z - 5
                    );
                    state.cameraTarget.x = damp(state.cameraTarget.x, lookTarget.x, 3.0, dt);
                    state.cameraTarget.y = damp(state.cameraTarget.y, lookTarget.y, 3.0, dt);
                    state.cameraTarget.z = damp(state.cameraTarget.z, lookTarget.z, 3.0, dt);
                    cameraRef.current.lookAt(state.cameraTarget);
                }
            }
        }

        // -- PLANETA (smooth rotation with subtle wobble) --
        if(planetRef.current) {
            planetRef.current.rotation.y += 0.0008 * dtScale;
            // Subtle axial tilt wobble
            planetRef.current.rotation.x = Math.sin(time * 0.1) * 0.02;
        }

        // -- ESTRELLAS & WARP & SHOOTING STARS --
        
        // 1. Calculate Global Speed Factor
        let targetSpeed = 0.5; // Base idle speed
        const isLanded = (progress > 0.42 && progress < 0.58);
        const isTurning = (progress > 0.55 && progress < 0.72);
        
        if(isMining) {
            if(isLanded) {
                targetSpeed = 0.1; 
            } else if(isTurning) {
                targetSpeed = 0.5;
            } else if(progress < 0.35) {
                // Outbound - accelerate
                targetSpeed = 8.0 * easeInOutCubic(progress / 0.35);
            } else if(progress > 0.7) {
                // Return - accelerate
                const returnP = (progress - 0.7) / 0.3;
                targetSpeed = 8.0 * (1 - easeInOutCubic(returnP) * 0.5);
            } else {
                targetSpeed = 2.0;
            }
        }
        
        // Smoothly interpolate speed
        if (!starsRef.current.userData.speed) starsRef.current.userData.speed = 0.1;
        const currentSpeed = THREE.MathUtils.lerp(starsRef.current.userData.speed, targetSpeed, 0.03);
        starsRef.current.userData.speed = currentSpeed;
        
        // 2. Animate Star Layers (Parallax)
        if(starsRef.current) {
            starsRef.current.children.forEach(layer => {
                const s = layer.userData.speedFactor * currentSpeed;
                const pos = layer.geometry.attributes.position.array;
                const count = pos.length / 3;
                for(let i=0; i<count; i++) {
                    pos[i*3+2] += s * dtScale * 10; 
                    if(pos[i*3+2] > 200) pos[i*3+2] -= 1500; // Reset to far back
                }
                layer.geometry.attributes.position.needsUpdate = true;
            });
        }
        
        // 3. Animate Warp Effect
        if (warpRef.current) {
             const { lines, tunnel } = warpRef.current;
             
             // Warp threshold (Disable on return trip to avoid visual glitches)
             const isWarping = currentSpeed > 3.0 && progress < 0.5;
             const targetOpacity = isWarping ? Math.min((currentSpeed - 3.0) * 0.2, 0.8) : 0;
             
             // Update Lines
             lines.material.opacity = damp(lines.material.opacity, targetOpacity, 5.0, dt);
             if (lines.material.opacity > 0.01) {
                 const pos = lines.geometry.attributes.position.array;
                 const count = pos.length / 6;
                 const warpSpeed = currentSpeed * 20; // Faster than stars
                 
                 for(let i=0; i<count; i++) {
                     // Move both start and end Z
                     pos[i*6+2] += warpSpeed * dtScale;
                     pos[i*6+5] += warpSpeed * dtScale;
                     
                     // Wrap
                     if(pos[i*6+2] > 200) {
                         const len = pos[i*6+5] - pos[i*6+2];
                         const zStart = -800 - Math.random() * 200;
                         pos[i*6+2] = zStart;
                         pos[i*6+5] = zStart + len;
                     }
                 }
                 lines.geometry.attributes.position.needsUpdate = true;
             }
             
             // Update Tunnel
             tunnel.material.opacity = damp(tunnel.material.opacity, isWarping ? 0.3 : 0, 2.0, dt);
             tunnel.rotation.z += currentSpeed * 0.005 * dtScale;
        }

        // 4. Shooting Stars
        const shootingStars = shootingStarsRef.current;
        // Spawn chance
        if (Math.random() < 0.02 * (isMining ? 2 : 1)) {
            const available = shootingStars.find(s => !s.active);
            if (available) {
                available.active = true;
                available.life = 1.0;
                
                // Random position
                const startX = (Math.random() - 0.5) * 400;
                const startY = (Math.random() - 0.5) * 200 + 50;
                const startZ = -400; // Start far away
                
                available.mesh.position.set(startX, startY, startZ);
                // Random trajectory coming towards camera/crossing
                available.velocity = new THREE.Vector3(
                    (Math.random() - 0.5) * 20, 
                    (Math.random() - 0.5) * 10, 
                    200 + Math.random() * 100 // Fast Z movement
                );
                
                available.mesh.visible = true;
                available.mesh.material.opacity = 1;
                
                // Orient to velocity
                available.mesh.lookAt(
                    available.mesh.position.x + available.velocity.x,
                    available.mesh.position.y + available.velocity.y,
                    available.mesh.position.z + available.velocity.z
                );
            }
        }
        
        // Update Active Shooting Stars
        shootingStars.forEach(s => {
            if (s.active) {
                s.mesh.position.add(s.velocity.clone().multiplyScalar(dt * 2)); // Move fast
                s.life -= dt * 1.5;
                s.mesh.material.opacity = s.life;
                
                if (s.life <= 0 || s.mesh.position.z > 100) {
                    s.active = false;
                    s.mesh.visible = false;
                }
            }
        });

        // -- PARTÍCULAS (FUEGO ULTRA SMOOTH) --
        const pList = particles.current;
        const landed = (progress > 0.43 && progress < 0.57);
        
        // Smooth spawn rates
        const baseSpawnRate = isMining ? 0.95 : 0.6;
        const spawnRate = landed ? 0.3 : baseSpawnRate;
        const fireIntensity = isMining ? 2.5 : 1.0;
        
        // Get nozzle fire colors from prop (convert hex string to number)
        const nozzleColors = window.nozzleFireColors || ['#ff6600', '#ffaa00', '#ffffff'];
        const hexToNumber = (hex) => parseInt(hex.replace('#', ''), 16);
        
        // Color gradient based on nozzle fire selection
        const coreColor = hexToNumber(nozzleColors[2]);
        const midColor = hexToNumber(nozzleColors[1]);
        const outerColor = hexToNumber(nozzleColors[0]);
        
        // Spawn multiple particles per frame for denser fire
        const spawnCount = Math.random() < spawnRate ? (isMining ? 3 : 2) : 0;
        
        for(let s = 0; s < spawnCount; s++) {
            const p = pList.find(x => x.life <= 0);
            if(p && shipRef.current) {
                p.maxLife = 0.8 + Math.random() * 0.4;
                p.life = p.maxLife;
                p.mesh.visible = true;
                
                // Randomized spawn position around engine nozzle
                const nozzleOffset = -1.8 - Math.random() * 0.3;
                const spread = p.type === 'core' ? 0.1 : (p.type === 'outer' ? 0.25 : 0.15);
                const offset = new THREE.Vector3(
                    nozzleOffset,
                    (Math.random() - 0.5) * spread,
                    (Math.random() - 0.5) * spread
                );
                offset.applyEuler(shipRef.current.rotation);
                p.mesh.position.copy(shipRef.current.position).add(offset);
                
                // Velocity with turbulence
                const baseSpeed = (isMining ? 0.6 : 0.15) * (p.type === 'core' ? 1.2 : 1.0);
                const turbulence = p.type === 'spark' ? 0.15 : 0.08;
                const vel = new THREE.Vector3(
                    -baseSpeed - Math.random() * 0.15,
                    (Math.random() - 0.5) * turbulence,
                    (Math.random() - 0.5) * turbulence
                );
                vel.applyEuler(shipRef.current.rotation);
                p.velocity.copy(vel);
                
                // Set color based on particle type
                const color = p.type === 'core' ? coreColor : (p.type === 'outer' ? midColor : outerColor);
                p.mesh.material.color.setHex(color);
                p.mesh.material.opacity = 1;
            }
        }
        
        // Update existing particles with smooth decay
        pList.forEach(p => {
            if(p.life > 0) {
                const lifeRatio = p.life / p.maxLife;
                const decayRate = 0.025 * dtScale * (p.type === 'spark' ? 1.5 : 1.0);
                p.life -= decayRate;
                
                // Smooth velocity with slight drag and gravity
                p.velocity.multiplyScalar(0.98);
                p.velocity.y -= 0.002 * dtScale; // Subtle gravity
                
                // Add subtle turbulence
                p.velocity.x += (Math.random() - 0.5) * 0.01;
                p.velocity.y += (Math.random() - 0.5) * 0.008;
                p.velocity.z += (Math.random() - 0.5) * 0.008;
                
                p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                
                // Smooth scale curve
                const scaleCurve = smoothStep(lifeRatio) * fireIntensity * p.baseScale;
                p.mesh.scale.setScalar(scaleCurve);
                
                // Smooth opacity fade
                const opacityCurve = lifeRatio * lifeRatio;
                p.mesh.material.opacity = opacityCurve;
                
                if(p.life <= 0) p.mesh.visible = false;
            }
        });

        // Luz Motor (smooth pulsing)
        if (engineLightRef.current && shipRef.current) {
            // Target intensity with smooth pulsing
            const basePulse = Math.sin(time * 8) * 0.3 + Math.sin(time * 13) * 0.15;
            let targetIntensity = landed ? 1.5 : (isMining ? 10 + basePulse * 3 : 3 + basePulse);
            
            // Smooth intensity transition
            state.engineIntensity = damp(state.engineIntensity, targetIntensity, 4.0, dt);
            engineLightRef.current.intensity = state.engineIntensity;
            
            // Smooth color transition - use nozzle fire mid color for engine light
            const targetColor = midColor;
            const currentColor = new THREE.Color(engineLightRef.current.color);
            const targetColorObj = new THREE.Color(targetColor);
            currentColor.lerp(targetColorObj, 0.05);
            engineLightRef.current.color.copy(currentColor);
            
            // Update light position to follow ship engine
            const lightOffset = new THREE.Vector3(-2.5, 0, 0);
            lightOffset.applyEuler(shipRef.current.rotation);
            engineLightRef.current.position.copy(shipRef.current.position).add(lightOffset);
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
  }, [level, planet, spaceshipModel]);

  // Sync Vars
  useEffect(() => {
    window.missionActive = (missionState === 'mining');
    window.totalTime = totalDuration;
    window.currentTime = timeLeft;
  }, [missionState, totalDuration, timeLeft]);

  // Sync nozzle fire colors
  useEffect(() => {
    window.nozzleFireColors = nozzleFire?.colors || ['#ff6600', '#ffaa00', '#ffffff'];
  }, [nozzleFire]);

  return <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full z-0 bg-black" />;
};

export default Scene3D;

