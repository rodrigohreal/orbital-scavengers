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
const smootherStep = (t) => t * t * t * (t * (t * 6 - 15) + 10); // Even smoother (quintic)

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
    cameraPosVelocity: new THREE.Vector3(0, 0, 0), // For momentum-based smoothing
    cameraTargetVelocity: new THREE.Vector3(0, 0, 0),
    engineIntensity: 0,
    prevProgress: 0,
    // For smooth time tracking (independent of 1-second timer steps)
    missionStartTime: 0,
    isMissionActive: false,
    smoothProgress: 0,
    // Transition states for beginning/end smoothness
    transitionPhase: 'idle', // 'idle', 'starting', 'active', 'ending'
    transitionProgress: 0,
    lastPhase: -1, // Track phase changes to smooth transitions
    // Mission end camera transition - for smooth cinematic ending
    endingCameraStartPos: new THREE.Vector3(0, 3, 12),
    endingCameraStartTarget: new THREE.Vector3(0, 0, 0),
    endingProgress: 0, // 0 to 1 animation progress for ending sequence
    frozenProgress: 0 // Freeze mission progress when ending starts
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

    // 7. PARTICULAS (Fuego Motor) - Enhanced particle system with type-specific effects
    // Standard particle geometries
    const pGeoCore = new THREE.SphereGeometry(0.15, 6, 6);
    const pGeoOuter = new THREE.SphereGeometry(0.25, 4, 4);
    const pGeoSpark = new THREE.SphereGeometry(0.08, 4, 4);
    
    // Special effect geometries
    const pGeoRing = new THREE.TorusGeometry(0.5, 0.025, 12, 48); // Plasma rings - larger, thinner, smoother
    const pGeoRingTrail = new THREE.SphereGeometry(0.08, 6, 6); // Ring trail dots - slightly larger
    const pGeoBolt = new THREE.BoxGeometry(0.4, 0.03, 0.03); // Electric bolts
    
    // Create a proper 5-pointed star shape for starburst particles
    const createStarGeometry = (outerRadius = 0.2, innerRadius = 0.08, points = 5, depth = 0.06) => {
      const starShape = new THREE.Shape();
      const angleStep = (Math.PI * 2) / points;
      const halfAngle = angleStep / 2;
      
      for (let i = 0; i < points; i++) {
        const outerAngle = i * angleStep - Math.PI / 2; // Start from top
        const innerAngle = outerAngle + halfAngle;
        
        const outerX = Math.cos(outerAngle) * outerRadius;
        const outerY = Math.sin(outerAngle) * outerRadius;
        const innerX = Math.cos(innerAngle) * innerRadius;
        const innerY = Math.sin(innerAngle) * innerRadius;
        
        if (i === 0) {
          starShape.moveTo(outerX, outerY);
        } else {
          starShape.lineTo(outerX, outerY);
        }
        starShape.lineTo(innerX, innerY);
      }
      starShape.closePath();
      
      // Extrude the star shape to give it depth
      const extrudeSettings = { depth, bevelEnabled: false };
      return new THREE.ExtrudeGeometry(starShape, extrudeSettings);
    };
    
    const pGeoStar = createStarGeometry(0.18, 0.07, 5, 0.05); // 5-pointed star
    const pGeoFragment = new THREE.BoxGeometry(0.15, 0.03, 0.03); // Star fragments
    const pGeoSpiral = new THREE.ConeGeometry(0.08, 0.2, 4); // Spiral particles
    const pGeoNova = new THREE.IcosahedronGeometry(0.2, 0); // Nova burst particles
    
    const createFireMaterial = (color, opacity = 0.9) => new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    // Pool de partículas - standard particles for all types
    particles.current = [];
    
    // Standard fire particles (core, outer, spark) - 100 particles
    for(let i=0; i<100; i++) {
        const type = i < 35 ? 'core' : (i < 70 ? 'outer' : 'spark');
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
            effectType: 'standard',
            baseScale: type === 'core' ? 0.8 : (type === 'outer' ? 1.2 : 0.5)
        });
    }
    
    // Ring particles (expanding plasma rings) - 40 particles for dense effect
    for(let i=0; i<40; i++) {
        const type = i < 20 ? 'ring' : 'ringTrail';
        const geo = type === 'ring' ? pGeoRing : pGeoRingTrail;
        // Use vibrant pink color for initial material
        const m = new THREE.Mesh(geo, createFireMaterial(0xff00aa, 0.95));
        m.visible = false;
        if(type === 'ring') m.rotation.x = Math.PI / 2; // Face the direction of travel
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: 1.8,
            velocity: new THREE.Vector3(),
            type,
            effectType: 'rings',
            baseScale: type === 'ring' ? 1.0 : 1.0,
            startScale: 0.15,
            endScale: 3.5
        });
    }
    
    // Electric particles (lightning bolts) - 30 particles
    for(let i=0; i<30; i++) {
        const type = i < 15 ? 'bolt' : 'electricSpark';
        const geo = type === 'bolt' ? pGeoBolt : pGeoSpark;
        const m = new THREE.Mesh(geo, createFireMaterial(0x00eeff, 0.95));
        m.visible = false;
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: 0.4,
            velocity: new THREE.Vector3(),
            type,
            effectType: 'electric',
            baseScale: type === 'bolt' ? 1.5 : 0.6,
            jitterOffset: new THREE.Vector3()
        });
    }
    
    // Starburst particles - 40 particles for better effect
    for(let i=0; i<40; i++) {
        const type = i < 20 ? 'star' : 'fragment';
        const geo = type === 'star' ? pGeoStar : pGeoFragment;
        const m = new THREE.Mesh(geo, createFireMaterial(0xffdd00, 0.95));
        m.visible = false;
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: type === 'star' ? 1.5 : 1.0, // Stars live longer
            velocity: new THREE.Vector3(),
            type,
            effectType: 'starburst',
            baseScale: type === 'star' ? 1.2 : 0.6,
            spinSpeed: (Math.random() - 0.5) * 15
        });
    }
    
    // Spiral particles - 60 particles for continuous trail effect
    for(let i=0; i<60; i++) {
        const mat = createFireMaterial(0xaa00ff, 0.85).clone();
        mat.blending = THREE.NormalBlending; // Use NormalBlending to avoid white blowout, keep it purple
        const m = new THREE.Mesh(pGeoSpiral, mat);
        m.visible = false;
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: 1.2,
            velocity: new THREE.Vector3(),
            type: 'spiral',
            effectType: 'spiral',
            baseScale: 0.8,
            angle: (i / 60) * Math.PI * 2,
            spiralRadius: 0
        });
    }
    
    // Nova particles - 25 particles
    for(let i=0; i<25; i++) {
        const type = i < 10 ? 'novaCore' : 'novaBurst';
        const geo = type === 'novaCore' ? pGeoNova : pGeoOuter;
        const m = new THREE.Mesh(geo, createFireMaterial(0xff3300, 0.9));
        m.visible = false;
        scene.add(m);
        particles.current.push({ 
            mesh: m, 
            life: 0, 
            maxLife: 0.8,
            velocity: new THREE.Vector3(),
            type,
            effectType: 'nova',
            baseScale: type === 'novaCore' ? 1.2 : 0.8,
            burstAngle: (i / 25) * Math.PI * 2
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
            // Detect mission start - smooth ramp-up
            if (!state.isMissionActive) {
                state.isMissionActive = true;
                state.missionStartTime = performance.now();
                state.transitionPhase = 'starting';
                state.transitionProgress = 0;
                // Don't reset smoothProgress immediately - let it blend from current value
            }
            
            // Smooth transition into mission
            if (state.transitionPhase === 'starting') {
                state.transitionProgress = Math.min(state.transitionProgress + dt * 2.0, 1.0);
                if (state.transitionProgress >= 1.0) {
                    state.transitionPhase = 'active';
                }
            }
            
            // Calculate smooth progress based on elapsed time
            const elapsedMs = performance.now() - state.missionStartTime;
            const elapsedSeconds = elapsedMs / 1000;
            const rawProgress = Math.min(elapsedSeconds / duration, 0.995); // Cap just below 1
            
            // Ultra-smooth interpolation to target progress with variable smoothing
            // Slower smoothing at start/end for buttery transitions
            const progressSmoothing = state.transitionPhase === 'starting' ? 3.0 : 8.0;
            state.smoothProgress = damp(state.smoothProgress, rawProgress, progressSmoothing, dt);
            progress = state.smoothProgress;
        } else {
            // Mission ended or idle
            if (state.isMissionActive) {
                state.isMissionActive = false;
                state.transitionPhase = 'ending';
                state.transitionProgress = 0;
                state.endingProgress = 0;
                // Capture current camera state for smooth transition
                state.endingCameraStartPos.copy(state.cameraPos);
                state.endingCameraStartTarget.copy(state.cameraTarget);
                // Freeze the progress value at the moment of ending
                state.frozenProgress = state.smoothProgress;
            }
            
            // Smooth transition out of mission
            if (state.transitionPhase === 'ending') {
                // Slower transition for cinematic feel (takes ~2.5 seconds)
                state.transitionProgress = Math.min(state.transitionProgress + dt * 0.4, 1.0);
                state.endingProgress = Math.min(state.endingProgress + dt * 0.5, 1.0);
                
                // Use quintic easing for ultra-smooth ending
                const endingEase = smootherStep(state.transitionProgress);
                // Slowly decay the frozen progress for ship animation
                state.smoothProgress = THREE.MathUtils.lerp(state.frozenProgress, 0, endingEase);
                
                if (state.transitionProgress >= 1.0 && state.endingProgress >= 1.0) {
                    state.transitionPhase = 'idle';
                    state.smoothProgress = 0;
                }
            } else if (state.transitionPhase === 'idle') {
                state.smoothProgress = damp(state.smoothProgress, 0, 2.0, dt);
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

                // Adaptive smoothing based on transition phase
                const isTransitioning = state.transitionPhase === 'starting' || state.transitionPhase === 'ending';
                const adaptivePosSmooth = isTransitioning ? posSmooth * 0.6 : posSmooth;
                const adaptiveRotSmooth = isTransitioning ? rotSmooth * 0.6 : rotSmooth;
                
                // Ultra-smooth position interpolation using damping
                state.shipPos.x = damp(state.shipPos.x, targetX, adaptivePosSmooth, dt);
                state.shipPos.y = damp(state.shipPos.y, targetY, adaptivePosSmooth, dt);
                state.shipPos.z = damp(state.shipPos.z, targetZ, adaptivePosSmooth, dt);
                
                shipRef.current.position.copy(state.shipPos);
                
                // Handle rotation Y wrapping for smooth transitions
                let currentRotY = state.shipRot.y;
                let deltaRotY = targetRotY - currentRotY;
                // Normalize to -PI to PI
                while(deltaRotY > Math.PI) deltaRotY -= Math.PI * 2;
                while(deltaRotY < -Math.PI) deltaRotY += Math.PI * 2;
                
                state.shipRot.y = damp(currentRotY, currentRotY + deltaRotY, adaptiveRotSmooth, dt);
                state.shipRot.z = damp(state.shipRot.z, targetRotZ, adaptiveRotSmooth, dt);
                state.shipRot.x = damp(state.shipRot.x, targetRotX, adaptiveRotSmooth, dt);
                
                shipRef.current.rotation.y = state.shipRot.y;
                shipRef.current.rotation.z = state.shipRot.z;
                shipRef.current.rotation.x = state.shipRot.x;

            } else {
                // IDLE or ENDING: Smooth exhibition rotation
                // Adaptive smoothing - much slower during mission-end transition for cinematic feel
                const isEndingTransition = state.transitionPhase === 'ending';
                const endingEase = isEndingTransition ? smootherStep(state.endingProgress) : 1.0;
                
                // During ending: start very slow, gradually speed up to normal idle speed
                const idleSmooth = isEndingTransition ? 0.8 + endingEase * 2.2 : 3.0;
                const rotSpeed = isEndingTransition ? 0.002 + endingEase * 0.006 : 0.008;
                
                state.shipRot.y += rotSpeed * dtScale;
                
                // Smooth floating motion with multiple frequencies
                const floatY = Math.sin(time * 1.5) * 0.4 + Math.sin(time * 2.3) * 0.15;
                const floatX = Math.sin(time * 1.1) * 0.1;
                
                // During ending transition, gradually blend toward idle float position
                // This prevents sudden jumps when transitioning from mission position
                const targetFloatY = floatY;
                const targetFloatX = floatX;
                const targetZ = 0;
                
                // Use slower damping during ending for buttery smooth transition
                const posSmoothing = isEndingTransition ? idleSmooth * 0.5 : idleSmooth;
                state.shipPos.y = damp(state.shipPos.y, targetFloatY, posSmoothing, dt);
                state.shipPos.z = damp(state.shipPos.z, targetZ, posSmoothing * 0.5, dt);
                state.shipPos.x = damp(state.shipPos.x, targetFloatX, posSmoothing, dt);
                
                // Smooth rotation blending during ending
                const rotSmoothing = isEndingTransition ? idleSmooth * 0.6 : idleSmooth * 0.7;
                state.shipRot.z = damp(state.shipRot.z, Math.sin(time * 0.8) * 0.05, rotSmoothing, dt);
                state.shipRot.x = damp(state.shipRot.x, Math.sin(time * 1.2) * 0.03, rotSmoothing, dt);
                
                shipRef.current.position.copy(state.shipPos);
                shipRef.current.rotation.y = state.shipRot.y;
                shipRef.current.rotation.z = state.shipRot.z;
                shipRef.current.rotation.x = state.shipRot.x;
            }
        }

        // -- CÁMARA (ULTRA SMOOTH with phase blending) --
        if (cameraRef.current) {
            // Adaptive smoothing - slower during transitions for buttery feel
            const isTransitioning = state.transitionPhase === 'starting' || state.transitionPhase === 'ending';
            const baseCamSmooth = isTransitioning ? 1.5 : 2.5;
            
            // Calculate target camera for each phase (we'll blend between them)
            const calcPhaseCamera = (phase, shipZ, shipY) => {
                switch(phase) {
                    case 0: // Outbound travel
                        return {
                            pos: new THREE.Vector3(
                                20 + Math.sin(time * 0.3) * 2,
                                12 + Math.sin(time * 0.5) * 1.5,
                                shipZ + 35
                            ),
                            target: new THREE.Vector3(0, shipY, shipZ - 20)
                        };
                    case 1: // Orbital/mining view
                        return {
                            pos: new THREE.Vector3(
                                30 + Math.sin(time * 0.4) * 2,
                                20 + Math.sin(time * 0.6) * 1.5,
                                -170
                            ),
                            target: new THREE.Vector3(0, 8, -220)
                        };
                    case 2: // Takeoff/turn
                        return {
                            pos: new THREE.Vector3(25, 30, -100),
                            target: new THREE.Vector3(0, shipY, shipZ)
                        };
                    case 3: // Return journey
                        return {
                            pos: new THREE.Vector3(
                                -20 - Math.sin(time * 0.3) * 2,
                                10 + Math.sin(time * 0.5) * 1.5,
                                shipZ - 35
                            ),
                            target: new THREE.Vector3(0, shipY, shipZ + 20)
                        };
                    default: // Idle
                        return {
                            pos: new THREE.Vector3(
                                Math.sin(time * 0.2) * 2,
                                3 + Math.sin(time * 0.3) * 0.5,
                                12 + Math.sin(time * 0.25) * 1
                            ),
                            target: new THREE.Vector3(shipY * 0.1, shipY * 0.5, -5)
                        };
                }
            };
            
            let targetCamPos;
            let targetLookAt;
            let camSmooth = baseCamSmooth;
            
            if (isMining) {
                const shipZ = state.shipPos.z;
                const shipY = state.shipPos.y;
                
                // Determine current phase with smooth blending zones
                // Phase boundaries with overlap for blending
                const phase0End = 0.33;   // Outbound ends
                const phase1Start = 0.30; // Orbital starts (overlap for blend)
                const phase1End = 0.57;   // Orbital ends
                const phase2Start = 0.54; // Takeoff starts (overlap)
                const phase2End = 0.72;   // Takeoff ends
                const phase3Start = 0.68; // Return starts (overlap)
                
                // Calculate blended camera positions
                if (progress < phase1Start) {
                    // Pure outbound
                    const cam = calcPhaseCamera(0, shipZ, shipY);
                    targetCamPos = cam.pos;
                    targetLookAt = cam.target;
                } else if (progress < phase0End) {
                    // Blend outbound -> orbital
                    const t = smootherStep((progress - phase1Start) / (phase0End - phase1Start));
                    const cam0 = calcPhaseCamera(0, shipZ, shipY);
                    const cam1 = calcPhaseCamera(1, shipZ, shipY);
                    targetCamPos = cam0.pos.clone().lerp(cam1.pos, t);
                    targetLookAt = cam0.target.clone().lerp(cam1.target, t);
                    camSmooth = baseCamSmooth * 0.7; // Slower during blend
                } else if (progress < phase2Start) {
                    // Pure orbital
                    const cam = calcPhaseCamera(1, shipZ, shipY);
                    targetCamPos = cam.pos;
                    targetLookAt = cam.target;
                } else if (progress < phase1End) {
                    // Blend orbital -> takeoff
                    const t = smootherStep((progress - phase2Start) / (phase1End - phase2Start));
                    const cam1 = calcPhaseCamera(1, shipZ, shipY);
                    const cam2 = calcPhaseCamera(2, shipZ, shipY);
                    targetCamPos = cam1.pos.clone().lerp(cam2.pos, t);
                    targetLookAt = cam1.target.clone().lerp(cam2.target, t);
                    camSmooth = baseCamSmooth * 0.7;
                } else if (progress < phase3Start) {
                    // Pure takeoff with internal interpolation
                    const phaseP = smoothStep((progress - phase1End) / (phase3Start - phase1End));
                    const cam2 = calcPhaseCamera(2, shipZ, shipY);
                    targetCamPos = cam2.pos.clone();
                    targetCamPos.z = THREE.MathUtils.lerp(-100, -50, phaseP);
                    targetLookAt = cam2.target;
                } else if (progress < phase2End) {
                    // Blend takeoff -> return
                    const t = smootherStep((progress - phase3Start) / (phase2End - phase3Start));
                    const cam2 = calcPhaseCamera(2, shipZ, shipY);
                    const cam3 = calcPhaseCamera(3, shipZ, shipY);
                    cam2.pos.z = -50; // Use end position of takeoff phase
                    targetCamPos = cam2.pos.clone().lerp(cam3.pos, t);
                    targetLookAt = cam2.target.clone().lerp(cam3.target, t);
                    camSmooth = baseCamSmooth * 0.7;
                } else {
                    // Return journey - approaching home
                    const cam3 = calcPhaseCamera(3, state.shipPos.z, state.shipPos.y);
                    targetCamPos = cam3.pos;
                    targetLookAt = cam3.target;
                }
                
            } else if (state.transitionPhase === 'ending') {
                // CINEMATIC MISSION END TRANSITION
                // Smoothly animate from captured ending position to idle position
                const endEase = smootherStep(state.endingProgress);
                
                // Calculate the idle camera position (where we want to end up)
                const idleCam = calcPhaseCamera(-1, state.shipPos.z, state.shipPos.y);
                
                // Smoothly interpolate from starting position to idle position
                targetCamPos = state.endingCameraStartPos.clone().lerp(idleCam.pos, endEase);
                targetLookAt = state.endingCameraStartTarget.clone().lerp(
                    new THREE.Vector3(state.shipPos.x, state.shipPos.y * 0.5, state.shipPos.z - 5),
                    endEase
                );
                
                // Use slower smoothing during the ending for buttery feel
                camSmooth = baseCamSmooth * 0.4 * (1 + endEase); // Gets slightly faster as we approach idle
                
            } else {
                // Idle state - gentle movement
                const idleCam = calcPhaseCamera(-1, state.shipPos.z, state.shipPos.y);
                targetCamPos = idleCam.pos;
                targetLookAt = new THREE.Vector3(
                    state.shipPos.x,
                    state.shipPos.y * 0.5,
                    state.shipPos.z - 5
                );
            }
            
            // Apply momentum-based smoothing for extra fluidity
            const targetVelocity = targetCamPos.clone().sub(state.cameraPos);
            state.cameraPosVelocity.lerp(targetVelocity, camSmooth * dt * 2);
            state.cameraPos.add(state.cameraPosVelocity.clone().multiplyScalar(dt * camSmooth));
            cameraRef.current.position.copy(state.cameraPos);
            
            // Smooth look-at target with momentum
            const targetLookVelocity = targetLookAt.clone().sub(state.cameraTarget);
            state.cameraTargetVelocity.lerp(targetLookVelocity, camSmooth * 1.2 * dt * 2);
            state.cameraTarget.add(state.cameraTargetVelocity.clone().multiplyScalar(dt * camSmooth * 1.2));
            cameraRef.current.lookAt(state.cameraTarget);
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

        // -- PARTÍCULAS (FUEGO ULTRA SMOOTH CON EFECTOS POR TIPO) --
        const pList = particles.current;
        const landed = (progress > 0.43 && progress < 0.57);
        
        // Smooth spawn rates
        const baseSpawnRate = isMining ? 0.95 : 0.6;
        const spawnRate = landed ? 0.3 : baseSpawnRate;
        const fireIntensity = isMining ? 2.5 : 1.0;
        
        // Get nozzle fire colors and type from prop
        const nozzleColors = window.nozzleFireColors || ['#ff6600', '#ffaa00', '#ffffff'];
        const nozzleType = window.nozzleFireType || 'standard';
        const hexToNumber = (hex) => parseInt(hex.replace('#', ''), 16);
        
        // Color gradient based on nozzle fire selection
        const coreColor = hexToNumber(nozzleColors[2]);
        const midColor = hexToNumber(nozzleColors[1]);
        const outerColor = hexToNumber(nozzleColors[0]);
        
        // Spawn particles based on nozzle type
        const spawnCount = Math.random() < spawnRate ? (isMining ? 4 : 2) : 0;
        
        for(let s = 0; s < spawnCount; s++) {
            // Find available particle matching the current nozzle type
            // Mix special effects with standard particles (60% special, 40% standard when not standard type)
            const targetEffect = nozzleType === 'standard' ? 'standard' : 
                                (s === 0 || Math.random() < 0.6 ? nozzleType : 'standard');
            
            const p = pList.find(x => x.life <= 0 && x.effectType === targetEffect);
            if(p && shipRef.current) {
                p.life = p.maxLife;
                p.mesh.visible = true;
                
                // Base nozzle position
                const nozzleOffset = -1.8 - Math.random() * 0.3;
                
                // Type-specific spawn behavior
                switch(p.effectType) {
                    case 'rings': {
                        // Plasma rings - spawn at nozzle and expand outward like the CSS animation
                        const offset = new THREE.Vector3(nozzleOffset + 0.5, 0, 0);
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        // Orient ring perpendicular to travel direction (face the exhaust)
                        p.mesh.rotation.copy(shipRef.current.rotation);
                        p.mesh.rotation.y += Math.PI / 2;
                        
                        // Velocity - rings travel outward from engine
                        const baseSpeed = isMining ? 1.2 : 0.4;
                        const vel = new THREE.Vector3(-baseSpeed, 0, 0);
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                        
                        // Initialize ring expansion properties
                        p.maxLife = isMining ? 1.8 : 1.2; // Longer life for visible expansion
                        p.life = p.maxLife;
                        p.startScale = 0.15; // Start very small
                        p.endScale = isMining ? 4.0 : 2.5; // Expand to large size
                        p.mesh.scale.set(p.startScale, p.startScale, p.startScale * 0.4);
                        
                        // Ring trails follow behind with slight spread
                        if(p.type === 'ringTrail') {
                            p.maxLife = isMining ? 1.0 : 0.7;
                            p.life = p.maxLife;
                            const trailSpread = 0.25;
                            p.mesh.position.y += (Math.random() - 0.5) * trailSpread;
                            p.mesh.position.z += (Math.random() - 0.5) * trailSpread;
                            // Trail particles are faster but smaller
                            p.velocity.multiplyScalar(1.3);
                        }
                        break;
                    }
                    
                    case 'electric': {
                        // Electric bolts with random jitter
                        const spread = p.type === 'bolt' ? 0.15 : 0.25;
                        const offset = new THREE.Vector3(
                            nozzleOffset,
                            (Math.random() - 0.5) * spread,
                            (Math.random() - 0.5) * spread
                        );
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        // Random rotation for bolts
                        p.mesh.rotation.set(
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            Math.random() * Math.PI
                        );
                        
                        const baseSpeed = isMining ? 0.9 : 0.3;
                        const vel = new THREE.Vector3(
                            -baseSpeed - Math.random() * 0.3,
                            (Math.random() - 0.5) * 0.4,
                            (Math.random() - 0.5) * 0.4
                        );
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                        
                        // Store jitter for animation
                        if(p.jitterOffset) p.jitterOffset.set(0, 0, 0);
                        break;
                    }
                    
                    case 'starburst': {
                        // Stars burst outward in random directions
                        const spread = p.type === 'star' ? 0.15 : 0.25;
                        const offset = new THREE.Vector3(
                            nozzleOffset,
                            (Math.random() - 0.5) * spread,
                            (Math.random() - 0.5) * spread
                        );
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        // Orient stars to face camera initially for better visibility
                        if(p.type === 'star') {
                            // Random initial rotation to show star shape
                            p.mesh.rotation.set(
                                Math.random() * Math.PI * 2,
                                Math.random() * Math.PI * 2,
                                Math.random() * Math.PI * 2
                            );
                        }
                        
                        const baseSpeed = isMining ? 0.6 : 0.25;
                        const spreadSpeed = p.type === 'fragment' ? 0.4 : 0.2;
                        const vel = new THREE.Vector3(
                            -baseSpeed - Math.random() * 0.25,
                            (Math.random() - 0.5) * spreadSpeed,
                            (Math.random() - 0.5) * spreadSpeed
                        );
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                        
                        // Faster spin speed to showcase the star shape
                        p.spinSpeed = (Math.random() - 0.5) * 20;
                        
                        // Larger initial scale for better visibility
                        const initScale = (p.type === 'star' ? 1.5 : 0.8) * fireIntensity;
                        p.mesh.scale.setScalar(initScale);
                        break;
                    }
                    
                    case 'spiral': {
                        // Spiral particles - Double Helix structure
                        const isStream1 = s % 2 === 0; // Alternate streams
                        const angleBase = isStream1 ? 0 : Math.PI;
                        const angle = angleBase + (Math.random() * 0.5);
                        
                        const offset = new THREE.Vector3(nozzleOffset, 0, 0);
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        const baseSpeed = isMining ? 0.9 : 0.4;
                        const vel = new THREE.Vector3(-baseSpeed, 0, 0);
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                        
                        p.angle = angle;
                        p.angleSpeed = 12; // Fast consistent rotation
                        p.spiralRadius = 0.1;
                        p.spiralExpansion = 0.3;
                        
                        // Scale variation
                        p.baseScale = p.baseScale * (0.8 + Math.random() * 0.4);
                        break;
                    }
                    
                    case 'nova': {
                        // Nova bursts outward explosively
                        const burstAngle = p.burstAngle || Math.random() * Math.PI * 2;
                        const burstPitch = (Math.random() - 0.5) * Math.PI * 0.5;
                        
                        const offset = new THREE.Vector3(nozzleOffset + 0.2, 0, 0);
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        const baseSpeed = isMining ? 0.7 : 0.25;
                        const burstSpeed = p.type === 'novaCore' ? baseSpeed * 0.8 : baseSpeed * 1.2;
                        const vel = new THREE.Vector3(
                            -burstSpeed + Math.cos(burstAngle) * 0.2,
                            Math.sin(burstPitch) * burstSpeed * 0.5,
                            Math.sin(burstAngle) * burstSpeed * 0.5
                        );
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                        break;
                    }
                    
                    default: {
                        // Standard fire particles
                        const spread = p.type === 'core' ? 0.1 : (p.type === 'outer' ? 0.25 : 0.15);
                        const offset = new THREE.Vector3(
                            nozzleOffset,
                            (Math.random() - 0.5) * spread,
                            (Math.random() - 0.5) * spread
                        );
                        offset.applyEuler(shipRef.current.rotation);
                        p.mesh.position.copy(shipRef.current.position).add(offset);
                        
                        const baseSpeed = (isMining ? 0.6 : 0.15) * (p.type === 'core' ? 1.2 : 1.0);
                        const turbulence = p.type === 'spark' ? 0.15 : 0.08;
                        const vel = new THREE.Vector3(
                            -baseSpeed - Math.random() * 0.15,
                            (Math.random() - 0.5) * turbulence,
                            (Math.random() - 0.5) * turbulence
                        );
                        vel.applyEuler(shipRef.current.rotation);
                        p.velocity.copy(vel);
                    }
                }
                
                // Set color based on particle type and effect
                // Special effects use vibrant colors (not white) for visual impact
                let color;
                if(p.effectType === 'rings') {
                    // Rings: outer color (bright pink #ff00aa), trails: mid color (lighter pink #ff66cc)
                    color = p.type === 'ring' ? outerColor : midColor;
                } else if(p.effectType === 'starburst') {
                    // Starburst: stars use midColor (yellow), fragments use outerColor (gold)
                    // Avoid white core to match the vibrant CSS preview
                    color = p.type === 'star' ? midColor : outerColor;
                } else if(p.effectType === 'electric') {
                    // Electric: bolts use midColor (cyan), sparks use outerColor (bright cyan)
                    color = p.type === 'bolt' ? midColor : outerColor;
                } else if(p.effectType === 'spiral') {
                    // Spiral: Strictly purple shades (Deep Purple to Light Purple)
                    // Avoid blending to white
                    color = Math.random() > 0.4 ? outerColor : midColor;
                } else if(p.effectType === 'nova') {
                    // Nova: core uses midColor (orange), bursts use outerColor (red-orange)
                    color = p.type === 'novaCore' ? midColor : outerColor;
                } else {
                    // Standard fire uses all three colors
                    color = p.type === 'core' ? coreColor : 
                           (p.type === 'outer' ? midColor : outerColor);
                }
                p.mesh.material.color.setHex(color);
                p.mesh.material.opacity = 1;
            }
        }
        
        // Update existing particles with type-specific behavior
        pList.forEach(p => {
            if(p.life > 0) {
                const lifeRatio = p.life / p.maxLife;
                const decayRate = 0.025 * dtScale * (p.type === 'spark' || p.type === 'electricSpark' ? 1.5 : 1.0);
                p.life -= decayRate;
                
                // Type-specific update behavior
                switch(p.effectType) {
                    case 'rings': {
                        // Plasma rings - smooth physics matching CSS animation
                        const progress = 1 - lifeRatio; // 0 at start, 1 at end
                        
                        // Slight deceleration as rings travel
                        p.velocity.multiplyScalar(0.985);
                        p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                        
                        if(p.type === 'ring') {
                            // Ring expansion curve: start small, expand smoothly to large
                            // Using eased curve for smooth expansion (like CSS scale 0.3 → 3)
                            const startScale = p.startScale || 0.15;
                            const endScale = p.endScale || 3.0;
                            const expansionCurve = easeOutQuart(progress); // Fast start, smooth end
                            const currentScale = startScale + (endScale - startScale) * expansionCurve;
                            
                            // Keep ring thin as it expands (like a real plasma ring)
                            p.mesh.scale.set(currentScale, currentScale, currentScale * 0.15);
                            
                            // Opacity: fade in fast (0-15%), stay bright (15-70%), fade out (70-100%)
                            let opacity;
                            if(progress < 0.15) {
                                opacity = smoothStep(progress / 0.15) * 0.95; // Quick fade in
                            } else if(progress < 0.7) {
                                opacity = 0.9 - (progress - 0.15) * 0.2; // Slight fade during travel
                            } else {
                                opacity = 0.7 * (1 - smoothStep((progress - 0.7) / 0.3)); // Fade out
                            }
                            p.mesh.material.opacity = opacity * fireIntensity * 0.4;
                        } else {
                            // Ring trails - smaller glowing particles following behind
                            const trailScale = smoothStep(lifeRatio) * fireIntensity * p.baseScale * 1.2;
                            p.mesh.scale.setScalar(trailScale);
                            
                            // Trails fade out smoothly
                            p.mesh.material.opacity = lifeRatio * lifeRatio * 0.8;
                        }
                        break;
                    }
                    
                    case 'electric': {
                        // Electric particles jitter chaotically
                        if(p.type === 'bolt') {
                            // Bolts flicker and jitter
                            p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                            
                            // Random jitter
                            const jitter = 0.1;
                            p.mesh.position.x += (Math.random() - 0.5) * jitter;
                            p.mesh.position.y += (Math.random() - 0.5) * jitter;
                            p.mesh.position.z += (Math.random() - 0.5) * jitter;
                            
                            // Random rotation for chaotic look
                            p.mesh.rotation.x += (Math.random() - 0.5) * 0.5;
                            p.mesh.rotation.y += (Math.random() - 0.5) * 0.5;
                            
                            // Scale fluctuates
                            const flicker = 0.5 + Math.random() * 1.5;
                            p.mesh.scale.set(p.baseScale * flicker, p.baseScale * 0.5, p.baseScale * 0.5);
                            
                            // Opacity flickers
                            p.mesh.material.opacity = Math.random() > 0.3 ? lifeRatio : lifeRatio * 0.3;
                        } else {
                            // Sparks move erratically
                            p.velocity.x += (Math.random() - 0.5) * 0.05;
                            p.velocity.y += (Math.random() - 0.5) * 0.05;
                            p.velocity.z += (Math.random() - 0.5) * 0.05;
                            p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                            
                            const scaleCurve = smoothStep(lifeRatio) * fireIntensity * p.baseScale;
                            p.mesh.scale.setScalar(scaleCurve);
                            p.mesh.material.opacity = lifeRatio;
                        }
                        break;
                    }
                    
                    case 'starburst': {
                        // Stars spin as they travel - slower deceleration for longer travel
                        p.velocity.multiplyScalar(0.985);
                        p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                        
                        // Spin the star/fragment - more dramatic for stars
                        if(p.type === 'star') {
                            p.mesh.rotation.x += p.spinSpeed * dtScale * 0.15;
                            p.mesh.rotation.y += p.spinSpeed * dtScale * 0.2;
                            p.mesh.rotation.z += p.spinSpeed * dtScale * 0.12;
                        } else {
                            p.mesh.rotation.x += p.spinSpeed * dtScale * 0.1;
                            p.mesh.rotation.y += p.spinSpeed * dtScale * 0.15;
                            p.mesh.rotation.z += p.spinSpeed * dtScale * 0.08;
                        }
                        
                        // Star particles stay larger for better visibility
                        const starMultiplier = p.type === 'star' ? 1.8 : 1.0;
                        const scaleCurve = smoothStep(lifeRatio) * fireIntensity * p.baseScale * starMultiplier;
                        p.mesh.scale.setScalar(scaleCurve);
                        
                        // Stars glow brighter
                        p.mesh.material.opacity = lifeRatio * lifeRatio * (p.type === 'star' ? 1.0 : 0.85);
                        break;
                    }
                    
                    case 'spiral': {
                        // Spiral particles - Continuous lines/trails
                        p.velocity.multiplyScalar(0.98); 
                        p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                        
                        // Update spiral motion
                        p.angle += p.angleSpeed * dtScale;
                        p.spiralRadius += p.spiralExpansion * dtScale;
                        
                        // Calculate orbital offset
                        const orbitForce = 0.15 * dtScale;
                        const dX = Math.cos(p.angle) * orbitForce * p.spiralRadius;
                        const dY = Math.sin(p.angle) * orbitForce * p.spiralRadius;
                        
                        p.mesh.position.x += dX; 
                        p.mesh.position.y += dY; 
                        
                        // Orient the "line" (stretched cone) along the spiral tangent
                        // Cone points Y-up. Rotate X to align with tangent of circle in YZ plane
                        p.mesh.rotation.x = p.angle + (Math.PI / 2);
                        p.mesh.rotation.z = 0; // Keep clean spiral
                        
                        // Stretch to look like a line
                        const scaleCurve = smoothStep(lifeRatio) * fireIntensity * p.baseScale;
                        // Scale X/Z thin, Scale Y long (length of trail)
                        p.mesh.scale.set(0.5 * scaleCurve, 6.0 * scaleCurve, 0.5 * scaleCurve);
                        
                        // Pulse opacity - keep it visible and purple
                        p.mesh.material.opacity = lifeRatio * (0.8 + Math.sin(p.angle * 3) * 0.2);
                        break;
                    }
                    
                    case 'nova': {
                        // Nova particles burst and fade quickly
                        p.velocity.multiplyScalar(0.94);
                        p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                        
                        // Nova particles scale up then down
                        const novaCurve = Math.sin(lifeRatio * Math.PI);
                        const scaleCurve = novaCurve * fireIntensity * p.baseScale * 1.5;
                        p.mesh.scale.setScalar(scaleCurve);
                        
                        // Bright at start, quick fade
                        p.mesh.material.opacity = lifeRatio * lifeRatio * lifeRatio;
                        break;
                    }
                    
                    default: {
                        // Standard fire particle behavior
                        p.velocity.multiplyScalar(0.98);
                        p.velocity.y -= 0.002 * dtScale;
                        
                        p.velocity.x += (Math.random() - 0.5) * 0.01;
                        p.velocity.y += (Math.random() - 0.5) * 0.008;
                        p.velocity.z += (Math.random() - 0.5) * 0.008;
                        
                        p.mesh.position.add(p.velocity.clone().multiplyScalar(dtScale));
                        
                        const scaleCurve = smoothStep(lifeRatio) * fireIntensity * p.baseScale;
                        p.mesh.scale.setScalar(scaleCurve);
                        p.mesh.material.opacity = lifeRatio * lifeRatio;
                    }
                }
                
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

  // Sync nozzle fire colors and type
  useEffect(() => {
    window.nozzleFireColors = nozzleFire?.colors || ['#ff6600', '#ffaa00', '#ffffff'];
    window.nozzleFireType = nozzleFire?.type || 'standard';
  }, [nozzleFire]);

  return <div ref={mountRef} id="canvas-container" className="absolute top-0 left-0 w-full h-full z-0 bg-black" />;
};

export default Scene3D;

