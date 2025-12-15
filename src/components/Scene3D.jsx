import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Importaciones para efectos profesionales (Post-Processing)
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
// Importador de GLTF/GLB
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { PLANETS } from '../data/planets';

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
                // Posición: X=40 (Lado), Y=20 (Arriba), Z=20 (Arriba del inicio)
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

export default Scene3D;

