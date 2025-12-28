import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// Smooth easing functions
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const smoothStep = (t) => t * t * (3 - 2 * t);
const smootherStep = (t) => t * t * t * (t * (t * 6 - 15) + 10); // Quintic for ultra-smooth

const damp = (current, target, smoothing, dt) => {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-smoothing * dt));
};

const SurfaceScene = ({ missionState, timeLeft, totalDuration, planet, spaceshipModel }) => {
  const mountRef = useRef(null);
  const shipRef = useRef(null);
  const cameraRef = useRef(null);
  const clockRef = useRef(null);
  const particles = useRef([]);
  const laserRef = useRef(null);
  const skyRef = useRef(null);
  const _shockwaveRef = useRef(null);
  const trailRef = useRef(null);
  const noseGlowRef = useRef(null);
  
  const animState = useRef({
    shipPos: new THREE.Vector3(0, 50, 0),
    shipRot: new THREE.Euler(0, 0, 0),
    cameraPos: new THREE.Vector3(0, 5, 20),
    cameraTarget: new THREE.Vector3(0, 5, 0),
    cameraPosVelocity: new THREE.Vector3(0, 0, 0), // Momentum-based smoothing
    cameraTargetVelocity: new THREE.Vector3(0, 0, 0),
    cameraFov: 60,
    cameraFovVelocity: 0,
    engineIntensity: 0,
    shakeIntensity: 0,
    missionStartTime: 0,
    isMissionActive: false,
    smoothProgress: 0,
    opacity: 0,
    opacityVelocity: 0, // For smoother opacity transitions
    shockwaveTime: -1,
    transitionPhase: 'idle', // 'idle', 'entering', 'active', 'exiting'
    transitionProgress: 0,
    exitingProgress: 0, // Dedicated exit animation progress
    frozenProgress: 0 // Freeze progress at exit start
  });

  const createNoiseTexture = (c1, c2) => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = c1; ctx.fillRect(0,0,size,size);
    for(let i=0; i<400; i++) { // More density for ground
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = Math.random() * 20 + 2; 
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.fillStyle = c2; ctx.globalAlpha = 0.3; ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  };

  const createRadialTexture = (colorHex) => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    const c = new THREE.Color(colorHex);
    const rgba = (a) => `rgba(${Math.floor(c.r * 255)}, ${Math.floor(c.g * 255)}, ${Math.floor(c.b * 255)}, ${a})`;
    g.addColorStop(0.0, rgba(1.0));
    g.addColorStop(0.2, rgba(0.8));
    g.addColorStop(0.5, rgba(0.25));
    g.addColorStop(1.0, rgba(0.0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  };

  useEffect(() => {
    // 1. SETUP
    const scene = new THREE.Scene();
    
    // Planet styling
    const atmosphereColor = new THREE.Color(planet?.style?.atmosphereColor || 0x4488ff);
    const groundColor1 = planet?.style?.planetColor1 || "#1e3c72";
    const groundColor2 = planet?.style?.planetColor2 || "#2a5298";
    
    // Cinematic haze: denser at horizon, lighter up close
    scene.fog = new THREE.FogExp2(atmosphereColor, 0.018);
    scene.background = atmosphereColor; 

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.useLegacyLights = false;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. POST FX (bloom + film + vignette + FXAA)
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.9, 0.45, 0.85);
    bloomPass.threshold = 0.65;
    bloomPass.strength = 0.5;
    bloomPass.radius = 0.4;
    const filmPass = new FilmPass(0.22, 0.15, 648, false);
    const vignettePass = new ShaderPass(VignetteShader);
    vignettePass.uniforms.offset.value = 0.75;
    vignettePass.uniforms.darkness.value = 1.4;
    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.material.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight);
    const outputPass = new OutputPass();
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composer.addPass(filmPass);
    composer.addPass(vignettePass);
    composer.addPass(fxaaPass);
    composer.addPass(outputPass);

    // 3. ILUMINACIÓN
    const ambientLight = new THREE.HemisphereLight(atmosphereColor, 0x080810, 0.7);
    scene.add(ambientLight);
    
    const sunLight = new THREE.DirectionalLight(0xfff8f0, 1.6);
    sunLight.position.set(70, 120, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(1024, 1024);
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 300;
    sunLight.shadow.camera.left = -80;
    sunLight.shadow.camera.right = 80;
    sunLight.shadow.camera.top = 80;
    sunLight.shadow.camera.bottom = -80;
    scene.add(sunLight);

    // Rim/fill light for more cinematic separation
    const rimLight = new THREE.DirectionalLight(atmosphereColor.clone().lerp(new THREE.Color(0xffffff), 0.25), 0.9);
    rimLight.position.set(-60, 45, -80);
    scene.add(rimLight);

    // Sky dome (simple atmospheric gradient + "sun" glow)
    const skyGeo = new THREE.SphereGeometry(800, 48, 48);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: atmosphereColor.clone().multiplyScalar(1.1) },
        bottomColor: { value: new THREE.Color(0x05060a) },
        sunDir: { value: sunLight.position.clone().normalize() },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform vec3 sunDir;
        uniform float time;
        varying vec3 vWorldPos;

        float hash(vec2 p) {
          p = fract(p * vec2(123.34, 345.45));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }

        void main() {
          vec3 dir = normalize(vWorldPos);
          float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 col = mix(bottomColor, topColor, pow(h, 1.35));

          // soft horizon haze
          float horizon = pow(1.0 - abs(dir.y), 5.0);
          col += topColor * horizon * 0.25;

          // sun bloom-ish lobe - more subtle
          float s = max(dot(dir, normalize(sunDir)), 0.0);
          col += vec3(1.0, 0.95, 0.85) * pow(s, 140.0) * 0.9;
          col += vec3(1.0, 0.7, 0.35) * pow(s, 24.0) * 0.12;

          // subtle film noise in sky only
          float n = hash(gl_FragCoord.xy + time * 60.0);
          col += (n - 0.5) * 0.015;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.renderOrder = -10;
    scene.add(sky);
    skyRef.current = sky;

    // 4. TERRENO (Surface)
    const groundGeo = new THREE.PlaneGeometry(200, 200, 64, 64);
    // Displace vertices for rough terrain
    const pos = groundGeo.attributes.position;
    for(let i=0; i<pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i); 
        // layered "ridged" noise (cheap but more natural than pure random)
        const n1 = Math.sin(x * 0.08) * Math.cos(y * 0.08);
        const n2 = Math.sin(x * 0.22 + 1.2) * Math.cos(y * 0.18 - 0.7) * 0.45;
        const n3 = Math.sin(x * 0.5 + 2.0) * Math.cos(y * 0.45 - 1.1) * 0.12;
        const h = (n1 * 2.2 + n2 * 1.6 + n3 * 1.1) + (Math.random() - 0.5) * 0.25;
        pos.setZ(i, h); 
    }
    groundGeo.computeVertexNormals();

    const groundTex = createNoiseTexture(groundColor1, groundColor2);
    groundTex.wrapS = THREE.RepeatWrapping;
    groundTex.wrapT = THREE.RepeatWrapping;
    groundTex.repeat.set(10, 10);
    groundTex.anisotropy = renderer.capabilities.getMaxAnisotropy?.() ?? 1;

    const groundMat = new THREE.MeshStandardMaterial({ 
        map: groundTex, 
        roughness: 0.95,
        metalness: 0.05,
        color: 0xffffff
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid for sci-fi feel 
    const gridHelper = new THREE.GridHelper(200, 50, 0xffffff, 0xffffff);
    gridHelper.position.y = 0.1;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.05;
    scene.add(gridHelper);

    // 5. NAVE
    const shipContainer = new THREE.Group();
    scene.add(shipContainer);
    shipRef.current = shipContainer;

    // Procedural Ship (Fallback)
    const createProceduralShip = () => {
        const shipGroup = new THREE.Group();
        const purpleMat = new THREE.MeshToonMaterial({ color: 0x8A2BE2 });
        const silverMat = new THREE.MeshStandardMaterial({ color: 0xC0C0C0, metalness: 0.8, roughness: 0.3 });

        const body = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), purpleMat);
        body.scale.set(1.8, 1, 1);
        shipGroup.add(body);

        const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 0.6, 32), silverMat);
        engine.rotation.z = Math.PI/2;
        engine.position.set(-1.8, 0, 0);
        shipGroup.add(engine);
        
        const wingGeo = new THREE.BoxGeometry(1.0, 0.1, 1.5);
        const wing = new THREE.Mesh(wingGeo, purpleMat);
        wing.position.set(-0.5, 0, 0);
        shipGroup.add(wing);

        return shipGroup;
    };

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const modelPath = `${import.meta.env.BASE_URL}${spaceshipModel || 'nave.glb'}`;
    loader.load(modelPath, (gltf) => {
        const loadedShip = gltf.scene;
        loadedShip.rotation.y = 0; 
        const box = new THREE.Box3().setFromObject(loadedShip);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 3.45;
        if(maxDim > 0) {
            const scaleFactor = targetSize / maxDim;
            loadedShip.scale.set(scaleFactor, scaleFactor, scaleFactor);
        }
        shipContainer.add(loadedShip);
    }, undefined, () => {
        shipContainer.add(createProceduralShip());
    });
    
    // Engine Light
    const engLight = new THREE.PointLight(0xffaa00, 0, 15);
    scene.add(engLight);

    // Nose glow sprite (re-entry plasma vibe)
    const noseGlowTex = createRadialTexture(0xff6a00);
    const noseGlowMat = new THREE.SpriteMaterial({
      map: noseGlowTex,
      color: 0xffffff,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const noseGlow = new THREE.Sprite(noseGlowMat);
    noseGlow.scale.set(10, 10, 1);
    noseGlow.position.set(2.2, 0.1, 0);
    noseGlow.visible = true;
    shipContainer.add(noseGlow);
    noseGlowRef.current = noseGlow;

    // Re-entry shockwave ring - REMOVED per user request
    // shockwaveRef is managed at component level, no setup needed here.


    // Heat trail (simple line ribbon)
    const trailMax = 80;
    const trailPositions = new Float32Array(trailMax * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trailMat = new THREE.LineBasicMaterial({
      color: 0xff7a00,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const trailLine = new THREE.Line(trailGeo, trailMat);
    trailLine.frustumCulled = false;
    trailLine.visible = true;
    scene.add(trailLine);
    trailRef.current = { line: trailLine, max: trailMax, positions: trailPositions };

    // Mining Laser (NEW)
    const laserGeo = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    laserGeo.translate(0, 0.5, 0); // Pivot at bottom (will rotate to point down)
    const laserMat = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, 
        transparent: true, 
        opacity: 0.8,
        blending: THREE.AdditiveBlending 
    });
    const laser = new THREE.Mesh(laserGeo, laserMat);
    laser.rotation.x = Math.PI; // Point down
    laser.visible = false;
    shipContainer.add(laser); // Add to ship so it moves with it
    laserRef.current = laser;


    // 6. PARTICLES (Enhanced)
    particles.current = [];
    const pGeo = new THREE.SphereGeometry(0.12, 6, 6);
    const pMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    for(let i=0; i<260; i++) {
      const m = new THREE.Mesh(pGeo, pMat.clone());
      m.visible = false;
      scene.add(m);
      particles.current.push({
        mesh: m,
        life: 0,
        maxLife: 1,
        velocity: new THREE.Vector3(),
        type: 'thrust',
        baseScale: 1
      });
    }

    clockRef.current = new THREE.Clock();
    animState.current.shipPos.set(0, 100, 0); 

    // LOOP
    let animId;
    const animate = () => {
        animId = requestAnimationFrame(animate);
        const dt = Math.min(clockRef.current.getDelta(), 0.1);
        const state = animState.current;
        const duration = window.totalTime || 15;
        const time = performance.now() * 0.001;
        
        // Sync progress with smooth transitions
        if (missionState === 'mining') {
             if (!state.isMissionActive) {
                state.isMissionActive = true;
                state.missionStartTime = performance.now();
                state.shockwaveTime = -1;
                state.transitionPhase = 'entering';
                state.transitionProgress = 0;
                // Don't reset smoothProgress - let it blend from current value
            }
            
            // Track transition phase
            if (state.transitionPhase === 'entering') {
                state.transitionProgress = Math.min(state.transitionProgress + dt * 1.5, 1.0);
                if (state.transitionProgress >= 1.0) {
                    state.transitionPhase = 'active';
                }
            }
            
            const elapsedMs = performance.now() - state.missionStartTime;
            const elapsedSeconds = elapsedMs / 1000;
            const rawProgress = Math.min(elapsedSeconds / duration, 0.995);
            
            // Variable smoothing - slower at start for buttery entrance
            const progressSmoothing = state.transitionPhase === 'entering' ? 4.0 : 8.0;
            state.smoothProgress = damp(state.smoothProgress, rawProgress, progressSmoothing, dt);
        } else {
            // Mission ended - smooth exit transition
            if (state.isMissionActive) {
                state.isMissionActive = false;
                state.shockwaveTime = -1;
                state.transitionPhase = 'exiting';
                state.transitionProgress = 0;
                state.exitingProgress = 0;
                state.frozenProgress = state.smoothProgress; // Freeze current progress
            }
            
            // Gradual progress decay during exit - slower for smoother fade
            if (state.transitionPhase === 'exiting') {
                // Slower transition (takes ~2 seconds for smooth fade out)
                state.transitionProgress = Math.min(state.transitionProgress + dt * 0.5, 1.0);
                state.exitingProgress = Math.min(state.exitingProgress + dt * 0.6, 1.0);
                
                // Use quintic easing for ultra-smooth exit
                const exitEase = smootherStep(state.transitionProgress);
                // Blend from frozen progress to 0 smoothly
                state.smoothProgress = THREE.MathUtils.lerp(state.frozenProgress, 0, exitEase);
                
                if (state.transitionProgress >= 1.0 && state.exitingProgress >= 1.0) {
                    state.transitionPhase = 'idle';
                    state.smoothProgress = 0;
                }
            } else {
                state.smoothProgress = damp(state.smoothProgress, 0, 2.0, dt);
            }
        }

        const progress = state.smoothProgress;

        // Cinematic visibility window (fade in, hold, fade out) - with momentum smoothing
        const showStart = 0.22;
        const showEnd = 0.86;
        const fadeInEnd = showStart + 0.06;  // Slightly longer fade in
        const fadeOutStart = showEnd - 0.10; // Longer fade out for smoother exit
        let targetOpacity = 0;
        
        if (missionState === 'mining') {
          if (progress < showStart) {
            targetOpacity = 0;
          } else if (progress < fadeInEnd) {
            // Smoother fade in with quintic easing
            targetOpacity = smootherStep((progress - showStart) / (fadeInEnd - showStart));
          } else if (progress > fadeOutStart) {
            // Smoother fade out
            targetOpacity = 1 - smootherStep((progress - fadeOutStart) / (showEnd - fadeOutStart));
          } else if (progress > showEnd) {
            targetOpacity = 0;
          } else {
            targetOpacity = 1;
          }
        } else if (state.transitionPhase === 'exiting') {
          // During exit transition, use dedicated exit progress for super smooth fade
          const exitEase = smootherStep(state.exitingProgress);
          // Fade from whatever opacity we had to 0, smoothly
          targetOpacity = state.opacity * (1 - exitEase * 1.2); // Slightly faster fade than camera transition
          targetOpacity = Math.max(0, targetOpacity);
        }
        
        // Momentum-based opacity smoothing for ultra-smooth transitions
        // Slower during exit for gentler fade
        const isExiting = state.transitionPhase === 'exiting';
        const opacitySmoothing = isExiting ? 2.5 : 4.0;
        const opacitySpeed = isExiting ? 2.0 : 3.0;
        
        const opacityDiff = targetOpacity - state.opacity;
        state.opacityVelocity = damp(state.opacityVelocity, opacityDiff * opacitySpeed, opacitySmoothing, dt);
        state.opacity = THREE.MathUtils.clamp(state.opacity + state.opacityVelocity * dt, 0, 1);
        renderer.domElement.style.opacity = state.opacity;
        if (skyRef.current) {
          skyRef.current.material.uniforms.time.value = time;
          // keep sky centered so it doesn't "move" with camera
          skyRef.current.position.copy(cameraRef.current.position);
        }

        // --- ANIMATION SEQUENCE ---
        if (shipRef.current) {
            let targetPos = new THREE.Vector3(0, 0, 0);
            let targetRot = new THREE.Euler(0, 0, 0);
            let camPosOffset = new THREE.Vector3(0, 6, 24);
            let targetShake = 0;
            let targetFov = 60;
            
            // Timings inside the overall mission
            const entryStart = 0.22;
            const entryEnd = 0.42;
            const miningEnd = 0.62;
            const takeoffEnd = 0.84;
            const baseRoll = Math.PI / 2;

            // PHASE 1: ATMOSPHERIC ENTRY / APPROACH (entryStart -> entryEnd)
            if (progress < entryEnd) {
              const t = THREE.MathUtils.clamp((progress - entryStart) / (entryEnd - entryStart), 0, 1);
              const easeT = easeInOutCubic(t);

              // Vertical descent path - ship comes almost straight down
              const curve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(2, 130, -15),
                new THREE.Vector3(1, 80, -8),
                new THREE.Vector3(0.3, 30, -2),
                new THREE.Vector3(0, 3.0, 0)
              ]);
              const p = curve.getPoint(easeT);
              const tan = curve.getTangent(easeT).normalize();
              targetPos.copy(p);

              // Vertical orientation - ship stays upright for realistic retro-burn entry
              // (like SpaceX Falcon 9 landing - nose up, engines firing down to brake)
              const yaw = Math.atan2(tan.x, tan.z);
              const bank = Math.sin(time * 1.2) * 0.03;
              targetRot.set(0, yaw, baseRoll + bank);

              // camera: side view of vertical descent
              targetFov = THREE.MathUtils.lerp(70, 58, easeT);
              const chase = new THREE.Vector3(18, 8, 22);
              camPosOffset.copy(chase);
              camPosOffset.lerp(new THREE.Vector3(12, 5, 16), easeT);
              targetShake = (1 - easeT) * 0.06;

              // entry FX intensity - more subtle heat glow
              const heat = smoothStep(1 - Math.abs(easeT - 0.35) / 0.35);
              if (noseGlowRef.current) {
                // Subtle plasma glow, not overwhelming
                noseGlowRef.current.material.opacity = THREE.MathUtils.lerp(
                  noseGlowRef.current.material.opacity,
                  heat * 0.45, 
                  0.1
                );
                // Smaller, more focused glow
                noseGlowRef.current.scale.setScalar(1.5 + heat * 10); 
                noseGlowRef.current.position.set(2.2, 0.1, 0);
              }

              // Landing Dust (Ground Effect)
              if (easeT > 0.75) {
                 const intensity = (easeT - 0.75) / 0.25; // 0 to 1
                 if (Math.random() < 0.3 * intensity) {
                     spawnParticle(new THREE.Vector3(0, 0, 0), 'dust');
                 }
              }

              // Hot trail + sparks - reduced spawn rate for cleaner look
              if (Math.random() < 0.35) {
                spawnParticle(shipRef.current.position, 'heat');
              }
              if (Math.random() < 0.18) {
                spawnParticle(shipRef.current.position, 'thrust');
              }
              if (laserRef.current) laserRef.current.visible = false;
            }
            // PHASE 2: MINING / LANDING HOLD (entryEnd -> miningEnd)
            else if (progress < miningEnd) {
              // stable hover near ground + servo micro corrections
              targetPos.set(
                Math.sin(time * 2.3) * 0.06,
                1.85 + Math.sin(time * 1.7) * 0.03,
                Math.cos(time * 1.9) * 0.06
              );
              targetRot.set(
                Math.sin(time * 2.1) * 0.015,
                Math.sin(time * 0.7) * 0.05,
                baseRoll + Math.sin(time * 1.3) * 0.02
              );

              // camera: slower orbit, more cinematic
              const miningP = (progress - entryEnd) / (miningEnd - entryEnd);
              const angle = miningP * Math.PI * 1.1 + time * 0.25;
              const radius = 11.5 + Math.sin(miningP * Math.PI) * 2.0;
              camPosOffset.set(Math.sin(angle) * radius, 4.5, Math.cos(angle) * radius);
              targetShake = 0.018;
              targetFov = 56;

              // laser beam - static focused mining beam
              if (laserRef.current) {
                laserRef.current.visible = true;
                laserRef.current.scale.set(1, 4.5, 1);
                laserRef.current.material.opacity = 0.6;
              }

              // Mining effects - small sparks and debris only (no dust spheres)
              if (Math.random() < 0.15) {
                const groundZero = new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.02, (Math.random() - 0.5) * 0.3);
                spawnParticle(groundZero, 'spark');
              }
              if (Math.random() < 0.06) spawnParticle(new THREE.Vector3(0, 0, 0), 'debris');
              // Tiny dust wisps instead of big spheres
              if (Math.random() < 0.08) spawnParticle(new THREE.Vector3(0, 0, 0), 'microdust');

              // mining light - subtle glow, not explosive
              if (engLight) {
                engLight.intensity = 1.0 + Math.random() * 0.5;
                engLight.color.setHex(0x35ff84);
              }
              if (noseGlowRef.current) {
                // Completely hide nose glow during mining/landing
                noseGlowRef.current.material.opacity = THREE.MathUtils.lerp(noseGlowRef.current.material.opacity, 0.0, 0.1);
                noseGlowRef.current.scale.setScalar(1);
              }
            }
            // PHASE 3: TAKEOFF / CLIMB-OUT (miningEnd -> takeoffEnd)
            else {
              if (laserRef.current) laserRef.current.visible = false;
              const t = THREE.MathUtils.clamp((progress - miningEnd) / (takeoffEnd - miningEnd), 0, 1);
              const easeT = easeOutQuart(t);

              // Vertical ascent path - ship goes almost straight up
              const curve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(0, 1.9, 0),
                new THREE.Vector3(0.5, 18, 2),
                new THREE.Vector3(1.5, 55, 6),
                new THREE.Vector3(3, 140, 12)
              ]);
              const p = curve.getPoint(easeT);
              const tan = curve.getTangent(easeT).normalize();
              targetPos.copy(p);

              // Vertical orientation - ship stays upright for realistic rocket takeoff
              // (nose up, engines firing down for thrust - like real launch physics)
              const yaw = Math.atan2(tan.x, tan.z);
              const bank = Math.sin(time * 1.0) * 0.02;
              targetRot.set(0, yaw, baseRoll + bank);

              // camera: low angle looking up at vertical ascent
              targetFov = THREE.MathUtils.lerp(56, 62, smoothStep(t));
              camPosOffset.set(12, 2.0 + easeT * 6, 14);
              targetShake = 0.04 * easeT;

              // thrusters + dust kick on liftoff
              const spawnThrust = Math.floor(2 + easeT * 5);
              for (let i = 0; i < spawnThrust; i++) spawnParticle(shipRef.current.position, 'thrust');
              if (t < 0.16 && Math.random() < 0.85) spawnParticle(new THREE.Vector3(0, 0, 0), 'dust');

              if (engLight) {
                engLight.intensity = 6 + Math.random() * 8;
                engLight.color.setHex(0xffaa00);
              }
              if (noseGlowRef.current) {
                noseGlowRef.current.material.opacity = THREE.MathUtils.lerp(noseGlowRef.current.material.opacity, 0.05, 0.08);
              }
            }

            // Apply smoothing with variable rate based on transition phase
            const isTransitioning = state.transitionPhase === 'entering' || state.transitionPhase === 'exiting';
            const posLerpRate = isTransitioning ? 0.08 : 0.12;
            const rotSmoothing = isTransitioning ? 3.5 : 5.0;
            
            state.shipPos.lerp(targetPos, posLerpRate);
            shipRef.current.position.copy(state.shipPos);
            
            state.shipRot.x = damp(state.shipRot.x, targetRot.x, rotSmoothing, dt);
            state.shipRot.y = damp(state.shipRot.y, targetRot.y, rotSmoothing, dt);
            state.shipRot.z = damp(state.shipRot.z, targetRot.z, rotSmoothing, dt);
            shipRef.current.rotation.copy(state.shipRot);
            
            // Apply Camera Shake (reduced during transitions)
            const shakeMultiplier = isTransitioning ? 0.5 : 1.0;
            state.shakeIntensity = damp(state.shakeIntensity, targetShake * shakeMultiplier, 5, dt);
            const shake = new THREE.Vector3(
                (Math.random()-0.5) * state.shakeIntensity,
                (Math.random()-0.5) * state.shakeIntensity,
                (Math.random()-0.5) * state.shakeIntensity
            );

            // Camera update with momentum-based smoothing
            const camSmoothing = isTransitioning ? 0.03 : 0.05;
            const targetCamVelocity = camPosOffset.clone().sub(state.cameraPos);
            state.cameraPosVelocity.lerp(targetCamVelocity, camSmoothing * 2);
            state.cameraPos.add(state.cameraPosVelocity.clone().multiplyScalar(camSmoothing));
            cameraRef.current.position.copy(state.cameraPos).add(shake);
            
            // Smooth camera target with momentum
            const lookTarget = state.shipPos.clone();
            const targetLookVelocity = lookTarget.sub(state.cameraTarget);
            state.cameraTargetVelocity.lerp(targetLookVelocity, camSmoothing * 2.5);
            state.cameraTarget.add(state.cameraTargetVelocity.clone().multiplyScalar(camSmoothing * 1.2));
            cameraRef.current.lookAt(state.cameraTarget);

            // FOV with momentum smoothing
            const fovDiff = targetFov - state.cameraFov;
            state.cameraFovVelocity = damp(state.cameraFovVelocity, fovDiff * 2.0, 3.0, dt);
            state.cameraFov += state.cameraFovVelocity * dt;
            cameraRef.current.fov = state.cameraFov;
            cameraRef.current.updateProjectionMatrix();
            
             // Engine Light Logic
             if (engLight) {
                engLight.position.copy(state.shipPos);
                engLight.position.y -= 1; 
                const active = (missionState === 'mining' && progress > 0.22 && progress < 0.84);
                if (!active) engLight.intensity = 0;
            }
        }

        // Shockwave animation - REMOVED
        // if (shockwaveRef.current && state.shockwaveTime > 0) { ... }

        // Trail update
        if (trailRef.current?.line && shipRef.current) {
          const { positions, max } = trailRef.current;
          // shift old points down the buffer
          positions.copyWithin(3, 0, (max - 1) * 3);
          // write newest point at start (behind ship)
          const engineOffset = new THREE.Vector3(-2.15, 0, 0);
          engineOffset.applyEuler(shipRef.current.rotation);
          const pt = shipRef.current.position.clone().add(engineOffset);
          positions[0] = pt.x; positions[1] = pt.y; positions[2] = pt.z;
          trailRef.current.line.geometry.attributes.position.needsUpdate = true;
          // opacity based on phase (strong during entry/takeoff)
          const hot = (missionState === 'mining' && (progress < 0.45 || progress > 0.62)) ? 1 : 0;
          trailRef.current.line.material.opacity = THREE.MathUtils.lerp(
            trailRef.current.line.material.opacity,
            hot ? (0.25 + Math.sin(time * 8) * 0.05) : 0.0,
            0.08
          );
        }

        // Particles Update
        particles.current.forEach(p => {
            if (p.life > 0) {
                p.life -= dt;
                const lifeRatio = THREE.MathUtils.clamp(p.life / p.maxLife, 0, 1);
                const drag = p.type === 'dust' ? 0.90 : (p.type === 'debris' ? 0.94 : 0.92);
                p.velocity.multiplyScalar(drag);
                if (p.type === 'debris') p.velocity.y -= 0.18 * dt;
                if (p.type === 'dust') p.velocity.y -= 0.08 * dt;
                p.mesh.position.addScaledVector(p.velocity, dt * 7.5);

                // Scale curves by type
                let s = 1;
                if (p.type === 'spark') s = p.baseScale * (0.35 + lifeRatio * 0.9);
                else if (p.type === 'heat') s = p.baseScale * (0.55 + (1 - lifeRatio) * 1.2);
                else if (p.type === 'dust') s = p.baseScale * (0.85 + (1 - lifeRatio) * 1.4);
                else if (p.type === 'debris') s = p.baseScale * (0.65 + lifeRatio * 0.4);
                else s = p.baseScale * (0.5 + (1 - lifeRatio) * 1.1);
                p.mesh.scale.setScalar(s);

                // Opacity curves
                const fade = p.type === 'dust'
                  ? (lifeRatio * 0.55)
                  : (lifeRatio * lifeRatio);
                p.mesh.material.opacity = fade;
                if (p.life <= 0) p.mesh.visible = false;
            }
        });

        // bloom tuning by phase (subtle glow throughout, not blown out)
        const bloomTarget = (missionState === 'mining' && progress < 0.45) ? 0.7 : (missionState === 'mining' && progress < 0.62 ? 0.45 : 0.55);
        bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, bloomTarget, 0.06);

        composer.render();
    };
    animate();

    function spawnParticle(pos, type = 'thrust') {
        const p = particles.current.find(x => x.life <= 0);
        if (p) {
            p.mesh.visible = true;
            p.type = type;
            
            if (type === 'thrust') {
                p.maxLife = 0.55 + Math.random() * 0.25;
                p.life = p.maxLife;
                p.baseScale = 0.7;
                p.mesh.position.copy(pos).add(new THREE.Vector3(-0.4, -0.7, 0));
                p.mesh.material.blending = THREE.AdditiveBlending;
                p.mesh.material.color.setHex(0xe89040);
                p.velocity.set((Math.random()-0.5) * 0.6, -1.8 - Math.random() * 0.6, (Math.random()-0.5) * 0.6);
            } else if (type === 'heat') {
                // Re-entry heat trail - more subtle, cinematic
                p.maxLife = 0.4 + Math.random() * 0.25;
                p.life = p.maxLife;
                p.baseScale = 0.5 + Math.random() * 0.5;
                p.mesh.position.copy(pos).add(new THREE.Vector3((Math.random()-0.5) * 0.4, (Math.random()-0.5) * 0.3, (Math.random()-0.5) * 0.4));
                p.mesh.material.blending = THREE.AdditiveBlending;
                p.mesh.material.color.setHex(0xdd4500);
                p.velocity.set((Math.random()-0.5) * 0.4, 0.4 + Math.random() * 0.9, (Math.random()-0.5) * 0.4);
            } else if (type === 'spark') {
                // Small focused sparks from laser mining - gentle upward drift
                p.maxLife = 0.5 + Math.random() * 0.3;
                p.life = p.maxLife;
                p.baseScale = 0.18;
                p.mesh.position.copy(pos);
                p.mesh.material.blending = THREE.AdditiveBlending;
                p.mesh.material.color.setHex(0x4dff91);
                // Gentle upward float, not explosive
                p.velocity.set((Math.random()-0.5)*1.2, Math.random()*2.5 + 0.8, (Math.random()-0.5)*1.2);
            } else if (type === 'debris') {
                // Small rock fragments - slow tumble upward
                p.maxLife = 1.8 + Math.random() * 0.6;
                p.life = p.maxLife;
                p.baseScale = 0.25 + Math.random() * 0.25;
                p.mesh.position.copy(pos).add(new THREE.Vector3((Math.random()-0.5) * 0.3, 0.05, (Math.random()-0.5) * 0.3));
                p.mesh.material.blending = THREE.NormalBlending;
                p.mesh.material.color.setHex(0x5a5a5a);
                // Slow gentle rise, not explosive
                p.velocity.set((Math.random()-0.5)*0.8, Math.random()*1.5 + 0.5, (Math.random()-0.5)*0.8);
            } else if (type === 'microdust') {
                // Tiny dust wisps - very small particles
                const angle = Math.random() * Math.PI * 2;
                const r = 0.15 + Math.random() * 0.2;
                p.mesh.position.set(Math.cos(angle)*r, 0.05, Math.sin(angle)*r);
                p.maxLife = 1.2 + Math.random() * 0.5;
                p.life = p.maxLife;
                p.baseScale = 0.08 + Math.random() * 0.06;
                p.mesh.material.blending = THREE.NormalBlending;
                p.mesh.material.color.setHex(0x8a8a8a);
                p.mesh.material.opacity = 0.35;
                // Very gentle upward drift
                p.velocity.set(Math.cos(angle)*0.2, 0.3 + Math.random() * 0.25, Math.sin(angle)*0.2);
            } else {
                // Dust for takeoff - small puffs
                const angle = Math.random() * Math.PI * 2;
                const r = 0.3 + Math.random() * 0.3;
                p.mesh.position.set(Math.cos(angle)*r, 0.08, Math.sin(angle)*r);
                p.maxLife = 1.0 + Math.random() * 0.5;
                p.life = p.maxLife;
                p.baseScale = 0.15 + Math.random() * 0.15;
                p.mesh.material.blending = THREE.NormalBlending;
                p.mesh.material.color.setHex(0x9a9a9a);
                p.mesh.material.opacity = 0.3;
                // Outward drift from engine blast
                p.velocity.set(Math.cos(angle)*0.6, 0.2 + Math.random() * 0.15, Math.sin(angle)*0.6);
            }
        }
    }

    const handleResize = () => {
        if (!cameraRef.current || !mountRef.current) return;
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
        fxaaPass.material.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animId);
        if(mountRef.current) mountRef.current.innerHTML = '';
        // Particle resources
        try {
          particles.current.forEach(p => {
            if (p?.mesh?.material?.dispose) p.mesh.material.dispose();
          });
        } catch {
          // ignore disposal edge-cases
        }
        pGeo.dispose();
        pMat.dispose();
        groundGeo.dispose();
        groundMat.dispose();
        groundTex.dispose();
        laserGeo.dispose();
        laserMat.dispose();
        noseGlowTex.dispose();
        noseGlowMat.dispose();
        // shockGeo/Mat removed
        trailGeo.dispose();
        trailMat.dispose();
        skyGeo.dispose();
        skyMat.dispose();
        renderer.dispose();
    };
  }, [planet, missionState, spaceshipModel]); 

  // Sync Vars
  useEffect(() => {
    window.missionActive = (missionState === 'mining');
    window.totalTime = totalDuration;
    window.currentTime = timeLeft;
  }, [missionState, totalDuration, timeLeft]);

  return (
    <div 
        ref={mountRef} 
        className="absolute top-0 left-0 w-full h-full z-1" 
        style={{ pointerEvents: 'none', transition: 'opacity 0.5s' }}
    />
  );
};

export default SurfaceScene;
