import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

// Game constants
const LANE_WIDTH = 4;
const LANES = [-1, 0, 1]; // Left, Center, Right
const INITIAL_SPEED = 15;
// NOTE: This is no longer a hard cap. It's kept as a tuning/reference point
// for VFX scaling and spawn-interval interpolation.
const MAX_SPEED = 60;
const SPEED_INCREMENT = 0.8; // Speed increase per second
const OBSTACLE_SPAWN_INTERVAL = 1.2; // Base seconds between obstacles
const MIN_OBSTACLE_INTERVAL = 0.35; // Minimum spawn interval at max speed
const OBSTACLE_DISTANCE = 80; // How far ahead obstacles spawn
const COLLISION_RADIUS = 1.8;
const ITEM_SPAWN_INTERVAL = 5; // Every 5 seconds survived = 1 item guaranteed

// Obstacle types - All asteroid/rock variants - REDUCED SIZES
const OBSTACLE_TYPES = [
  { type: 'asteroid_large', color: 0x8c7e72, size: 1.8, points: 15 },
  { type: 'asteroid_medium', color: 0x6e6359, size: 1.5, points: 10 },
  { type: 'asteroid_small', color: 0x968b83, size: 1.0, points: 8 },
  { type: 'asteroid_dark', color: 0x4a423d, size: 1.7, points: 12 },
  { type: 'asteroid_red', color: 0x8a5d52, size: 1.4, points: 10 },
  { type: 'asteroid_ice', color: 0xaaccff, size: 1.6, points: 20 }, // New rare type
];

const LongMissionScene = ({ 
  isActive, 
  onGameEnd, 
  spaceshipModel,
  onScoreUpdate,
  onContinue,
  nozzleFire = null
}) => {
  const mountRef = useRef(null);
  const gameStateRef = useRef({
    isPlaying: false,
    isPaused: false,
    currentLane: 0,
    targetLane: 0,
    speed: INITIAL_SPEED,
    distance: 0,
    survivalTime: 0,
    itemsCollected: 0,
    score: 0,
    obstacles: [],
    particles: [],
    lastObstacleSpawn: 0,
    gameStartTime: 0,
    isGameOver: false,
    crashPosition: null,
  });
  
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const shipRef = useRef(null);
  const clockRef = useRef(null);
  const animationIdRef = useRef(null);
  const gameOverTimeoutRef = useRef(null);
  const obstaclePoolRef = useRef([]);
  const starsRef = useRef(null);
  const trailRef = useRef(null);
  const engineGlowRef = useRef(null);
  const nozzleParticlesRef = useRef([]);
  const isInitializedRef = useRef(false);
  const gameOverHandledRef = useRef(false);
  
  // Refs for callbacks to avoid stale closures
  const onGameEndRef = useRef(onGameEnd);
  const onScoreUpdateRef = useRef(onScoreUpdate);
  
  // Keep refs updated
  useEffect(() => {
    onGameEndRef.current = onGameEnd;
    onScoreUpdateRef.current = onScoreUpdate;
  }, [onGameEnd, onScoreUpdate]);

  // Touch/swipe handling
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  
  // Game end state for displaying items
  const [gameEnded, setGameEnded] = useState(false);
  const [finalResults, setFinalResults] = useState(null);

  // Create star field - reduced count for cleaner look
  const createStarField = () => {
    const geometry = new THREE.BufferGeometry();
    const count = 400; // Reduced from 3000
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 300;
      positions[i3 + 1] = (Math.random() - 0.5) * 300;
      positions[i3 + 2] = -Math.random() * 400 - 50;
      
      const brightness = 0.6 + Math.random() * 0.4;
      colors[i3] = brightness;
      colors[i3 + 1] = brightness;
      colors[i3 + 2] = brightness;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    return new THREE.Points(geometry, material);
  };

  // Create asteroid/rock obstacle mesh with irregular shape - IMPROVED
  const createObstacle = (type) => {
    const obstacleType = OBSTACLE_TYPES.find(o => o.type === type) || OBSTACLE_TYPES[0];
    
    // Use icosahedron with subdivision for rocky look - more detail
    const detailLevel = Math.random() > 0.3 ? 1 : 2; // Higher detail
    const geometry = new THREE.IcosahedronGeometry(obstacleType.size, detailLevel);
    
    // Deform vertices to make it look like a rough rock/asteroid
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const simplex = new THREE.Vector3(); // Placeholder for direction
    
    // More complex noise/deformation
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      // Normalize to get direction
      simplex.copy(vertex).normalize();
      
      // Multiple layers of noise for jaggedness
      const noise1 = Math.sin(vertex.x * 2.5 + vertex.y * 3.2 + vertex.z * 1.5);
      const noise2 = Math.cos(vertex.x * 5.1 + vertex.z * 4.4);
      
      const variation = 1.0 + (noise1 * 0.15 + noise2 * 0.08);
      
      // Scale vertex
      vertex.multiplyScalar(variation);
      
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    geometry.computeVertexNormals();
    
    // Different material properties for ice vs rock
    const isIce = type === 'asteroid_ice';
    
    const material = new THREE.MeshStandardMaterial({
      color: obstacleType.color,
      roughness: isIce ? 0.2 : 0.8,
      metalness: isIce ? 0.1 : 0.2,
      flatShading: !isIce, // Smooth for ice, flat for rocks
      emissive: isIce ? 0x224466 : 0x000000,
      emissiveIntensity: isIce ? 0.5 : 0,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { type, ...obstacleType };
    mesh.visible = false;
    
    // Add random rotation to the mesh itself for initial variance
    mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    );
    
    return mesh;
  };

  // Create engine trail - using nozzle colors
  const createEngineTrail = (nozzleColors) => {
    const trailCount = 50; // Slightly shorter trail
    const positions = new Float32Array(trailCount * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Use primary nozzle color or default orange
    const trailColor = nozzleColors?.[0] ? new THREE.Color(nozzleColors[0]) : new THREE.Color(0xff6600);
    
    const material = new THREE.LineBasicMaterial({
      color: trailColor,
      transparent: true,
      opacity: 0.4, // Lower opacity to not obstruct view
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const line = new THREE.Line(geometry, material);
    line.frustumCulled = false;
    
    return { line, positions, count: trailCount };
  };

  // Helper to parse hex color to RGB values
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 102, b: 0 }; // Default orange
  };

  // Create engine glow sprite - using nozzle colors, positioned to not block view
  const createEngineGlow = (nozzleColors) => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Use nozzle colors or defaults
    const primaryColor = nozzleColors?.[0] ? hexToRgb(nozzleColors[0]) : { r: 255, g: 102, b: 0 };
    const secondaryColor = nozzleColors?.[1] ? hexToRgb(nozzleColors[1]) : { r: 255, g: 170, b: 0 };
    
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, 0.85)`);
    gradient.addColorStop(0.3, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.5)`);
    gradient.addColorStop(0.6, `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.15)`);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const sprite = new THREE.Sprite(material);
    // Smaller scale so it doesn't obstruct view
    sprite.scale.set(1.0, 1.0, 1);
    
    return sprite;
  };

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

  // Create different geometries based on nozzle type
  const createParticleGeometry = (type, subType) => {
    switch (type) {
      case 'electric':
        if (subType === 'bolt') {
          // Elongated bolt shape - longer and thinner for lightning effect
          return new THREE.BoxGeometry(0.5, 0.04, 0.04);
        }
        // Small spark - bright point
        return new THREE.SphereGeometry(0.08, 6, 6);
      
      case 'rings':
        if (subType === 'ring') {
          // Hollow ring/torus - larger and thinner for plasma ring effect
          return new THREE.TorusGeometry(0.4, 0.025, 8, 24);
        }
        // Trail dot - glowing spheres following rings
        return new THREE.SphereGeometry(0.1, 6, 6);
      
      case 'starburst':
        if (subType === 'star') {
          // Proper 5-pointed star shape
          return createStarGeometry(0.2, 0.08, 5, 0.06);
        }
        // Fragment debris - elongated shards
        return new THREE.BoxGeometry(0.18, 0.04, 0.04);
      
      case 'spiral':
        if (subType === 'line') {
          // Long thin line for spiral effect - use cone for tapered look
          return new THREE.ConeGeometry(0.06, 0.4, 6);
        }
        // Vortex dot
        return new THREE.SphereGeometry(0.06, 6, 6);
      
      case 'nova':
        if (subType === 'core') {
          // Large glowing core - icosahedron for interesting facets
          return new THREE.IcosahedronGeometry(0.25, 0);
        }
        if (subType === 'wave') {
          // Expanding ring - larger torus
          return new THREE.TorusGeometry(0.35, 0.025, 8, 20);
        }
        // Debris - bright spheres
        return new THREE.SphereGeometry(0.08, 6, 6);
      
      default: // standard
        // Round particles of varying sizes
        return new THREE.SphereGeometry(0.1 + Math.random() * 0.05, 8, 8);
    }
  };

  // Create trail geometry for a particle - simple line that follows particle path
  const createParticleTrail = (scene, color, maxPoints = 16) => {
    const positions = new Float32Array(maxPoints * 3);
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.LineBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const line = new THREE.Line(geometry, material);
    line.frustumCulled = false;
    line.visible = false;
    scene.add(line);
    
    return {
      line,
      positions,
      maxPoints,
      positionHistory: [],
    };
  };

  // Create nozzle fire particle system - WITH VISIBLE TRAILS
  const createNozzleParticles = (scene, nozzleColors, nozzleType) => {
    const particles = [];
    const type = nozzleType || 'standard';
    
    // Parse nozzle colors
    const colors = nozzleColors?.map(c => new THREE.Color(c)) || [
      new THREE.Color('#ff6600'),
      new THREE.Color('#ffaa00'),
      new THREE.Color('#ffffff')
    ];
    
    // Define particle variants based on type
    let particleConfigs = [];
    
    switch (type) {
      case 'electric':
        for (let i = 0; i < 15; i++) particleConfigs.push({ subType: 'bolt', colorIdx: i % 2 === 0 ? 0 : 1, trailLength: 18 });
        for (let i = 0; i < 20; i++) particleConfigs.push({ subType: 'spark', colorIdx: 2, trailLength: 12 });
        break;
      
      case 'rings':
        for (let i = 0; i < 12; i++) particleConfigs.push({ subType: 'ring', colorIdx: i % 2 === 0 ? 0 : 1, trailLength: 0 }); // Rings don't need trails
        for (let i = 0; i < 15; i++) particleConfigs.push({ subType: 'trail', colorIdx: 1, trailLength: 20 });
        break;
      
      case 'starburst':
        for (let i = 0; i < 20; i++) particleConfigs.push({ subType: 'star', colorIdx: i % 2 === 0 ? 0 : 1, trailLength: 16 });
        for (let i = 0; i < 15; i++) particleConfigs.push({ subType: 'fragment', colorIdx: 2, trailLength: 14 });
        break;
      
      case 'spiral':
        for (let i = 0; i < 18; i++) particleConfigs.push({ subType: 'line', colorIdx: i % 2 === 0 ? 0 : 1, trailLength: 22 });
        for (let i = 0; i < 15; i++) particleConfigs.push({ subType: 'vortex', colorIdx: 2, trailLength: 16 });
        break;
      
      case 'nova':
        for (let i = 0; i < 8; i++) particleConfigs.push({ subType: 'core', colorIdx: i % 2 === 0 ? 1 : 2, trailLength: 14 });
        for (let i = 0; i < 10; i++) particleConfigs.push({ subType: 'wave', colorIdx: 0, trailLength: 0 }); // Waves expand, no trail
        for (let i = 0; i < 15; i++) particleConfigs.push({ subType: 'debris', colorIdx: i % 3, trailLength: 18 });
        break;
      
      default: // standard
        for (let i = 0; i < 35; i++) {
          particleConfigs.push({ subType: 'default', colorIdx: i % 3, trailLength: 16 });
        }
    }
    
    for (const config of particleConfigs) {
      const geometry = createParticleGeometry(type, config.subType);
      const baseColor = colors[config.colorIdx % colors.length].clone();
      
      // Add slight color variation
      const hsl = {};
      baseColor.getHSL(hsl);
      baseColor.setHSL(
        hsl.h + (Math.random() - 0.5) * 0.03,
        Math.min(1, hsl.s),
        Math.min(1, hsl.l + (Math.random() - 0.5) * 0.1)
      );
      
      const material = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      
      const particle = new THREE.Mesh(geometry, material);
      particle.visible = false;
      scene.add(particle);
      
      // Create trail for this particle
      let trail = null;
      if (config.trailLength > 0) {
        trail = createParticleTrail(scene, baseColor, config.trailLength);
      }
      
      particles.push({
        mesh: particle,
        life: 0,
        maxLife: 0.5,
        velocity: new THREE.Vector3(),
        angularVelocity: new THREE.Vector3(),
        active: false,
        nozzleType: type,
        subType: config.subType,
        baseColors: colors,
        initialScale: 1,
        // Trail
        trail: trail,
      });
    }
    
    return particles;
  };

  // Move ship to lane
  const moveToLane = useCallback((direction) => {
    const state = gameStateRef.current;
    if (state.isGameOver || !state.isPlaying) return;
    
    state.targetLane = THREE.MathUtils.clamp(state.targetLane + direction, -1, 1);
    
    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(15);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStateRef.current.isPlaying) return;
      
      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          moveToLane(-1);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          moveToLane(1);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveToLane]);

  // Handle touch/swipe input
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!gameStateRef.current.isPlaying) return;
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      };
    };
    
    const handleTouchEnd = (e) => {
      if (!gameStateRef.current.isPlaying) return;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaTime = Date.now() - touchStartRef.current.time;
      
      // Detect swipe (minimum 30px horizontal movement in less than 300ms)
      if (Math.abs(deltaX) > 30 && deltaTime < 300) {
        if (deltaX > 0) {
          moveToLane(1); // Swipe right
        } else {
          moveToLane(-1); // Swipe left
        }
      }
    };
    
    // Also allow tap on left/right side of screen
    const handleClick = (e) => {
      if (!gameStateRef.current.isPlaying) return;
      const screenWidth = window.innerWidth;
      const clickX = e.clientX;
      
      if (clickX < screenWidth * 0.35) {
        moveToLane(-1);
      } else if (clickX > screenWidth * 0.65) {
        moveToLane(1);
      }
    };
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('click', handleClick);
    };
  }, [moveToLane]);

  // Check collision
  const checkCollision = (shipPos, obstaclePos, obstacleSize) => {
    const distance = shipPos.distanceTo(obstaclePos);
    return distance < (COLLISION_RADIUS + obstacleSize * 0.5);
  };

  // Spawn explosion particles
  const spawnExplosion = (position, scene) => {
    const particleCount = 30;
    const geometry = new THREE.SphereGeometry(0.3, 8, 8);
    
    for (let i = 0; i < particleCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.05 + Math.random() * 0.1, 1, 0.5),
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
      });
      
      const particle = new THREE.Mesh(geometry, material);
      particle.position.copy(position);
      
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      particle.userData = {
        velocity,
        life: 1.0,
        maxLife: 1.0,
      };
      
      scene.add(particle);
      gameStateRef.current.particles.push(particle);
    }
  };

  // Items are earned strictly by time: 1 item per 5 seconds survived (uncapped).
  const calculateItemsEarnedTotal = (survivalTime) => {
    return Math.floor(survivalTime / ITEM_SPAWN_INTERVAL);
  };

  // Main game initialization
  useEffect(() => {
    if (!isActive) {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      // Reset initialization flag when deactivated
      isInitializedRef.current = false;
      gameOverHandledRef.current = false;
      return;
    }
    
    // Prevent double initialization
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    scene.fog = new THREE.FogExp2(0x000022, 0.008);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 15);
    camera.lookAt(0, 2, -30);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    // Post-processing - simplified for smoother performance
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.6, 0.3, 0.9
    );
    bloomPass.threshold = 0.5;
    bloomPass.strength = 0.4;
    bloomPass.radius = 0.3;
    composer.addPass(bloomPass);

    // Removed FilmPass for smoother visuals

    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.material.uniforms.resolution.value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
    composer.addPass(fxaaPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);
    composerRef.current = composer;

    // Lighting - Enhanced for better ship visibility
    const ambientLight = new THREE.AmbientLight(0x445566, 0.8);
    scene.add(ambientLight);

    // Main sun light - brighter
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(30, 50, 30);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(512, 512);
    scene.add(directionalLight);

    // Front light to illuminate ship from camera direction
    const frontLight = new THREE.DirectionalLight(0xaaccff, 1.2);
    frontLight.position.set(0, 10, 30);
    scene.add(frontLight);

    // Rim light for ship silhouette
    const backLight = new THREE.DirectionalLight(0x6688ff, 0.8);
    backLight.position.set(-20, 20, -50);
    scene.add(backLight);

    // Point light following ship - engine glow effect using nozzle color
    const engineLightColor = nozzleFire?.colors?.[0] ? new THREE.Color(nozzleFire.colors[0]) : new THREE.Color(0xff6600);
    const shipLight = new THREE.PointLight(engineLightColor, 3, 20); // Slightly dimmer and shorter range
    scene.add(shipLight);
    
    // Additional ship spotlight
    const shipSpotlight = new THREE.SpotLight(0xffaa44, 3, 30, Math.PI / 4, 0.5);
    shipSpotlight.position.set(0, 5, 10);
    scene.add(shipSpotlight);
    scene.add(shipSpotlight.target);

    // Star field
    const stars = createStarField();
    scene.add(stars);
    starsRef.current = stars;

    // Space lanes visual guide (subtle grid)
    const laneGeometry = new THREE.PlaneGeometry(LANE_WIDTH * 3.5, 500);
    const laneMaterial = new THREE.MeshBasicMaterial({
      color: 0x1144aa,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const lanePlane = new THREE.Mesh(laneGeometry, laneMaterial);
    lanePlane.rotation.x = -Math.PI / 2;
    lanePlane.position.y = -3;
    lanePlane.position.z = -200;
    scene.add(lanePlane);

    // Lane dividers
    for (let i = -1; i <= 1; i++) {
      const dividerGeometry = new THREE.BoxGeometry(0.1, 0.1, 500);
      const dividerMaterial = new THREE.MeshBasicMaterial({
        color: 0x3366ff,
        transparent: true,
        opacity: 0.3,
      });
      const divider = new THREE.Mesh(dividerGeometry, dividerMaterial);
      divider.position.set(i * LANE_WIDTH + LANE_WIDTH / 2, -2.5, -200);
      if (i < 1) scene.add(divider);
    }

    // Load spaceship
    const shipContainer = new THREE.Group();
    scene.add(shipContainer);
    shipRef.current = shipContainer;

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const baseUrl = import.meta.env.BASE_URL || '/';
    const modelPath = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}${(spaceshipModel || 'nave.glb').replace(/^\//, '')}`;
    
    loader.load(modelPath, (gltf) => {
      const loadedShip = gltf.scene;
      // Ship faces -Z (toward obstacles coming from behind)
      // Correcting rotation: model faces +X by default, so rotate +90deg (PI/2) to face -Z
      loadedShip.rotation.y = Math.PI / 2;
      
      const box = new THREE.Box3().setFromObject(loadedShip);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const targetSize = 4; // Bigger ship for visibility
      const center = box.getCenter(new THREE.Vector3());
      loadedShip.position.sub(center); // center at origin before scaling

      const scaleFactor = maxDim > 0 ? (targetSize / maxDim) : 1;
      loadedShip.scale.set(scaleFactor, scaleFactor, scaleFactor);
      
      shipContainer.add(loadedShip);
    }, undefined, () => {
      // Fallback procedural ship - visible cone pointing forward
      const bodyGeo = new THREE.ConeGeometry(1.2, 4, 8);
      const bodyMat = new THREE.MeshStandardMaterial({ 
        color: 0x6644cc, 
        metalness: 0.6, 
        roughness: 0.3 
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.rotation.x = -Math.PI / 2; // Point forward (-Z)
      shipContainer.add(body);
      
      // Add wings for visibility
      const wingGeo = new THREE.BoxGeometry(4, 0.2, 1.5);
      const wing = new THREE.Mesh(wingGeo, bodyMat);
      wing.position.z = 1;
      shipContainer.add(wing);
    });

    // Engine trail with nozzle colors
    const trail = createEngineTrail(nozzleFire?.colors);
    scene.add(trail.line);
    trailRef.current = trail;

    // Engine glow - behind ship (ship faces -Z, so engine is at +Z)
    // Position lower and slightly back to not block forward view
    const engineGlow = createEngineGlow(nozzleFire?.colors);
    engineGlow.position.set(0, -0.3, 2.5);
    shipContainer.add(engineGlow);
    engineGlowRef.current = engineGlow;
    
    // Nozzle fire particles with selected nozzle style
    nozzleParticlesRef.current = createNozzleParticles(scene, nozzleFire?.colors, nozzleFire?.type);

    // Create obstacle pool
    obstaclePoolRef.current = [];
    for (let i = 0; i < 30; i++) {
      const typeIndex = i % OBSTACLE_TYPES.length;
      const obstacle = createObstacle(OBSTACLE_TYPES[typeIndex].type);
      scene.add(obstacle);
      obstaclePoolRef.current.push({
        mesh: obstacle,
        active: false,
        velocity: new THREE.Vector3(),
        rotationSpeed: new THREE.Vector3(),
      });
    }

    // Initialize game state
    const state = gameStateRef.current;
    state.isPlaying = true;
    state.isGameOver = false;
    state.currentLane = 0;
    state.targetLane = 0;
    state.speed = INITIAL_SPEED;
    state.distance = 0;
    state.survivalTime = 0;
    state.itemsCollected = 0;
    state.score = 0;
    state.obstacles = [];
    state.particles = [];
    state.lastObstacleSpawn = 0;
    state.gameStartTime = performance.now();
    state.crashPosition = null;
    setGameEnded(false);
    setFinalResults(null);

    clockRef.current = new THREE.Clock();

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const dt = Math.min(clockRef.current.getDelta(), 0.1);
      const state = gameStateRef.current;
      const time = performance.now() * 0.001;

      if (state.isPlaying && !state.isGameOver) {
        // Update survival time
        state.survivalTime = (performance.now() - state.gameStartTime) / 1000;
        
        // Increase speed over time (no hard cap)
        state.speed = INITIAL_SPEED + state.survivalTime * SPEED_INCREMENT;
        
        // Update distance
        state.distance += state.speed * dt;
        
        // Calculate score
        state.score = Math.floor(state.distance * 10 + state.survivalTime * 50);
        const itemsEarnedTotalLive = calculateItemsEarnedTotal(state.survivalTime);
        
        // Update score callback via ref
        if (onScoreUpdateRef.current) {
          onScoreUpdateRef.current({
            score: state.score,
            distance: state.distance,
            survivalTime: state.survivalTime,
            speed: state.speed,
            itemsEarnedTotal: itemsEarnedTotalLive,
          });
        }

        // Ship lane movement (smooth lerp) - smoother transitions
        state.currentLane = THREE.MathUtils.lerp(state.currentLane, state.targetLane, 0.12);
        
        if (shipRef.current) {
          const shipX = state.currentLane * LANE_WIDTH;
          shipRef.current.position.x = shipX;
          shipRef.current.position.y = 0 + Math.sin(time * 2) * 0.2;
          shipRef.current.position.z = 0;
          
          // Tilt based on movement
          const tiltTarget = (state.targetLane - state.currentLane) * 0.5;
          shipRef.current.rotation.z = THREE.MathUtils.lerp(
            shipRef.current.rotation.z,
            tiltTarget,
            0.1
          );
          
          // Slight pitch oscillation
          shipRef.current.rotation.x = Math.sin(time * 1.5) * 0.05;
          
          // Update ship light - engine glow light behind ship
          shipLight.position.copy(shipRef.current.position);
          shipLight.position.z += 1.5;
          shipLight.intensity = 2 + Math.sin(time * 6) * 0.5;
          
          // Update spotlight to illuminate ship from above/front
          shipSpotlight.position.set(shipRef.current.position.x, 6, shipRef.current.position.z + 8);
          shipSpotlight.target.position.copy(shipRef.current.position);
        }

        // Engine glow animation - subtle
        if (engineGlowRef.current) {
          const speedFactor = THREE.MathUtils.clamp(state.speed / MAX_SPEED, 0, 1);
          engineGlowRef.current.scale.setScalar(1.2 + speedFactor * 0.8 + Math.sin(time * 10) * 0.1);
          engineGlowRef.current.material.opacity = 0.5 + speedFactor * 0.3;
        }
        
        // Spawn nozzle fire particles - adapted to not block obstacle view
        if (shipRef.current && nozzleParticlesRef.current.length > 0) {
          const shipPos = shipRef.current.position;
          const speedFactor = THREE.MathUtils.clamp(state.speed / MAX_SPEED, 0, 1);
          const t = performance.now() * 0.001;
          
          // Find inactive particles and spawn multiple per frame for denser effect
          const spawnCount = Math.random() < 0.4 ? 2 : 1;
          
          for (let s = 0; s < spawnCount; s++) {
            const particle = nozzleParticlesRef.current.find(p => !p.active);
            if (!particle) continue;
            
            particle.active = true;
            particle.mesh.visible = true;
            particle.life = particle.maxLife;
            
            const nozzleType = particle.nozzleType || 'standard';
            const subType = particle.subType || 'default';
            
            // Base position - lower and behind ship
            let offsetX = (Math.random() - 0.5) * 0.3;
            let offsetY = -0.25 - Math.random() * 0.2;
            let offsetZ = 2.0 + Math.random() * 0.3;
            
            // Base velocity - backward and slightly down
            let vx = (Math.random() - 0.5) * 0.6;
            let vy = -0.3 - Math.random() * 0.5;
            let vz = 2 + speedFactor * 3 + Math.random() * 1.5;
            
            // Angular velocity for rotation
            let avx = 0, avy = 0, avz = 0;
            
            // Initial scale
            let scale = 0.8 + speedFactor * 0.4;
            
            // Type-specific spawn behavior
            switch (nozzleType) {
              case 'electric':
                if (subType === 'bolt') {
                  // Bolts: jittery lightning streaks - dramatic and visible
                  offsetX = (Math.random() - 0.5) * 0.5;
                  offsetY = -0.05 - Math.random() * 0.2;
                  // Chaotic velocity for lightning effect
                  vx = (Math.random() - 0.5) * 2.5;
                  vy = (Math.random() - 0.5) * 2 - 0.15;
                  vz = 4 + speedFactor * 5;
                  // Random rotation for bolt direction
                  particle.mesh.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                  );
                  // Fast spin for chaotic motion
                  avx = (Math.random() - 0.5) * 25;
                  avy = (Math.random() - 0.5) * 25;
                  avz = (Math.random() - 0.5) * 25;
                  scale = 1.5 + Math.random() * 0.8;
                  particle.maxLife = 0.2 + Math.random() * 0.1; // Short but visible
                } else {
                  // Sparks: bright points shooting out chaotically
                  offsetX = (Math.random() - 0.5) * 0.4;
                  offsetY = (Math.random() - 0.5) * 0.3 - 0.1;
                  vx = (Math.random() - 0.5) * 4;
                  vy = (Math.random() - 0.5) * 3 - 0.2;
                  vz = 3.5 + speedFactor * 4;
                  scale = 0.8 + Math.random() * 0.6;
                  particle.maxLife = 0.25 + Math.random() * 0.15;
                }
                break;
              
              case 'rings':
                if (subType === 'ring') {
                  // Rings: expand outward from center - like plasma waves
                  offsetX = 0;
                  offsetY = -0.05;
                  vx = 0;
                  vy = 0;
                  vz = 5 + speedFactor * 4;
                  // Ring faces backward (camera) for maximum visibility
                  particle.mesh.rotation.set(Math.PI / 2, 0, 0);
                  scale = 0.2; // Start small, will expand dramatically
                  particle.initialScale = scale;
                  particle.maxLife = 0.8 + Math.random() * 0.2; // Longer life for expansion
                } else {
                  // Trail: glowing dots orbiting around rings
                  const angle = Math.random() * Math.PI * 2;
                  const r = 0.2 + Math.random() * 0.2;
                  offsetX = Math.cos(angle) * r;
                  offsetY = Math.sin(angle) * r - 0.1;
                  vz = 4 + speedFactor * 3;
                  vx = Math.cos(angle + Math.PI/2) * 0.3;
                  vy = Math.sin(angle + Math.PI/2) * 0.3;
                  scale = 0.7 + Math.random() * 0.4;
                  particle.maxLife = 0.5 + Math.random() * 0.15;
                }
                break;
              
              case 'starburst':
                if (subType === 'star') {
                  // Stars: burst outward with rotation - larger, more visible
                  const angle = Math.random() * Math.PI * 2;
                  const dist = 0.15 + Math.random() * 0.25;
                  offsetX = Math.cos(angle) * dist;
                  offsetY = Math.sin(angle) * dist - 0.1;
                  // Burst velocity - more dramatic spread
                  vx = Math.cos(angle) * (1.5 + Math.random() * 0.8);
                  vy = Math.sin(angle) * (1.2 + Math.random() * 0.6) - 0.2;
                  vz = 3 + speedFactor * 4;
                  // Fast spin to show off star shape
                  avx = (Math.random() - 0.5) * 15;
                  avy = (Math.random() - 0.5) * 15;
                  avz = (Math.random() - 0.5) * 15;
                  // Larger stars for visibility
                  scale = 1.5 + Math.random() * 0.8;
                  // Longer life to travel further
                  particle.maxLife = 0.6 + Math.random() * 0.2;
                  // Random initial rotation to vary appearance
                  particle.mesh.rotation.set(
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2,
                    Math.random() * Math.PI * 2
                  );
                } else {
                  // Fragments: small debris shooting out in all directions
                  const angle = Math.random() * Math.PI * 2;
                  const spreadAngle = (Math.random() - 0.5) * Math.PI * 0.5;
                  vx = Math.cos(angle) * (2 + Math.random()) * Math.cos(spreadAngle);
                  vy = Math.sin(angle) * (1.5 + Math.random()) - 0.3;
                  vz = 3.5 + speedFactor * 3;
                  particle.mesh.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                  );
                  avx = (Math.random() - 0.5) * 12;
                  avy = (Math.random() - 0.5) * 12;
                  avz = (Math.random() - 0.5) * 12;
                  scale = 0.8 + Math.random() * 0.5;
                  particle.maxLife = 0.4 + Math.random() * 0.15;
                }
                break;
              
              case 'spiral':
                if (subType === 'line') {
                  // Spiral lines: dramatic double helix effect
                  const spiralAngle = t * 10 + (Math.random() > 0.5 ? 0 : Math.PI); // Two streams
                  const spiralR = 0.25 + Math.random() * 0.15;
                  offsetX = Math.cos(spiralAngle) * spiralR;
                  offsetY = Math.sin(spiralAngle) * spiralR - 0.1;
                  // Tangent velocity for spiral motion
                  vx = -Math.sin(spiralAngle) * 2;
                  vy = Math.cos(spiralAngle) * 1.8 - 0.2;
                  vz = 4 + speedFactor * 4;
                  // Orient line tangent to spiral
                  particle.mesh.rotation.set(Math.PI / 2, 0, spiralAngle);
                  // Store spiral properties for animation
                  particle.spiralAngle = spiralAngle;
                  particle.spiralSpeed = 12 + Math.random() * 4;
                  avz = particle.spiralSpeed;
                  scale = 1.0 + Math.random() * 0.4;
                  particle.maxLife = 0.5 + Math.random() * 0.15;
                } else {
                  // Vortex: glowing dots following spiral paths
                  const angle = t * 8 + Math.random() * Math.PI * 2;
                  offsetX = Math.cos(angle) * 0.3;
                  offsetY = Math.sin(angle) * 0.25 - 0.08;
                  vx = -Math.sin(angle) * 1.2;
                  vy = Math.cos(angle) * 1.0 - 0.15;
                  vz = 3.5 + speedFactor * 3;
                  scale = 0.6 + Math.random() * 0.3;
                  particle.maxLife = 0.4 + Math.random() * 0.1;
                }
                break;
              
              case 'nova':
                if (subType === 'core') {
                  // Nova core: large, bright, explosive center
                  offsetX = (Math.random() - 0.5) * 0.15;
                  offsetY = (Math.random() - 0.5) * 0.1 - 0.05;
                  vz = 4 + speedFactor * 3.5;
                  vx = (Math.random() - 0.5) * 0.5;
                  vy = (Math.random() - 0.5) * 0.4;
                  scale = 2.0 + Math.random() * 0.8;
                  particle.initialScale = scale;
                  particle.maxLife = 0.6 + Math.random() * 0.2;
                  // Store pulsing properties
                  particle.pulsePhase = Math.random() * Math.PI * 2;
                  particle.pulseSpeed = 15 + Math.random() * 5;
                } else if (subType === 'wave') {
                  // Nova wave: dramatic expanding shockwave rings
                  offsetX = 0;
                  offsetY = -0.05;
                  vz = 5 + speedFactor * 3;
                  particle.mesh.rotation.set(Math.PI / 2, 0, 0);
                  scale = 0.3;
                  particle.initialScale = scale;
                  particle.maxLife = 0.7 + Math.random() * 0.2;
                } else {
                  // Debris: scattered hot particles in all directions
                  const angle = Math.random() * Math.PI * 2;
                  const pitch = (Math.random() - 0.5) * Math.PI * 0.4;
                  vx = Math.cos(angle) * (1.8 + Math.random()) * Math.cos(pitch);
                  vy = Math.sin(angle) * (1.5 + Math.random()) - 0.2;
                  vz = 3.5 + speedFactor * 3;
                  scale = 0.7 + Math.random() * 0.4;
                  particle.maxLife = 0.45 + Math.random() * 0.15;
                }
                break;
              
              default: // standard
                // Classic fire particles
                offsetY = -0.2 - Math.random() * 0.25;
                vx = (Math.random() - 0.5) * 0.8;
                vy = -0.4 - Math.random() * 0.6;
                vz = 2.5 + speedFactor * 3;
                scale = 0.7 + Math.random() * 0.4 + speedFactor * 0.2;
                particle.maxLife = 0.35 + Math.random() * 0.1;
            }
            
            particle.mesh.position.set(
              shipPos.x + offsetX,
              shipPos.y + offsetY,
              shipPos.z + offsetZ
            );
            
            particle.velocity.set(vx, vy, vz);
            particle.angularVelocity.set(avx, avy, avz);
            particle.mesh.scale.setScalar(scale);
            particle.initialScale = scale;
            
            // Clear trail when particle respawns
            if (particle.trail) {
              particle.trail.positionHistory = [];
              particle.trail.line.visible = true;
            }
          }
          
          // Update active nozzle particles - SIMPLE BACKWARDS MOVEMENT WITH VISIBLE TRAILS
          for (const p of nozzleParticlesRef.current) {
            if (p.active && p.life > 0) {
              p.life -= dt;
              const lifeRatio = p.life / p.maxLife;
              
              // Simple movement - particles go backwards
              p.mesh.position.add(p.velocity.clone().multiplyScalar(dt));
              
              // Simple velocity slowdown
              p.velocity.multiplyScalar(0.97);
              
              // Rotation
              if (p.angularVelocity) {
                p.mesh.rotation.x += p.angularVelocity.x * dt;
                p.mesh.rotation.y += p.angularVelocity.y * dt;
                p.mesh.rotation.z += p.angularVelocity.z * dt;
              }
              
              // ========== UPDATE TRAIL - THE VISIBLE FIRE TRAIL ==========
              if (p.trail) {
                // Add current position to trail history
                p.trail.positionHistory.unshift(p.mesh.position.clone());
                
                // Limit trail length
                if (p.trail.positionHistory.length > p.trail.maxPoints) {
                  p.trail.positionHistory.pop();
                }
                
                // Update trail line geometry
                const positions = p.trail.positions;
                const historyLen = p.trail.positionHistory.length;
                
                for (let i = 0; i < p.trail.maxPoints; i++) {
                  if (i < historyLen) {
                    const pos = p.trail.positionHistory[i];
                    positions[i * 3] = pos.x;
                    positions[i * 3 + 1] = pos.y;
                    positions[i * 3 + 2] = pos.z;
                  } else {
                    // Fill with last position
                    const lastPos = p.trail.positionHistory[historyLen - 1] || p.mesh.position;
                    positions[i * 3] = lastPos.x;
                    positions[i * 3 + 1] = lastPos.y;
                    positions[i * 3 + 2] = lastPos.z;
                  }
                }
                
                p.trail.line.geometry.attributes.position.needsUpdate = true;
                p.trail.line.geometry.setDrawRange(0, historyLen);
                
                // Trail fades as particle dies
                p.trail.line.material.opacity = lifeRatio * 0.85;
              }
              
              // ========== PARTICLE VISUALS ==========
              const nozzleType = p.nozzleType;
              const subType = p.subType;
              
              if (nozzleType === 'rings' && subType === 'ring') {
                // Rings expand
                const expandFactor = 1 + (1 - lifeRatio) * 5;
                p.mesh.scale.setScalar(p.initialScale * expandFactor);
                p.mesh.material.opacity = lifeRatio > 0.3 ? 0.8 : lifeRatio * 2.5;
              } else if (nozzleType === 'nova' && subType === 'wave') {
                // Nova waves expand
                const expandFactor = 1 + (1 - lifeRatio) * 4;
                p.mesh.scale.setScalar(p.initialScale * expandFactor);
                p.mesh.material.opacity = lifeRatio > 0.25 ? 0.7 : lifeRatio * 2.8;
              } else if (nozzleType === 'electric' && subType === 'bolt') {
                // Electric bolts flicker
                p.mesh.position.x += (Math.random() - 0.5) * 0.1;
                p.mesh.position.y += (Math.random() - 0.5) * 0.08;
                p.mesh.material.opacity = lifeRatio * (Math.random() > 0.15 ? 1.0 : 0.3);
                p.mesh.scale.x = p.initialScale * (0.7 + Math.random() * 0.5);
              } else {
                // Default: fade and shrink slightly
                p.mesh.material.opacity = lifeRatio * 0.8;
                p.mesh.scale.setScalar(p.initialScale * (0.6 + lifeRatio * 0.4));
              }
              
              // Particle death
              if (p.life <= 0) {
                p.active = false;
                p.mesh.visible = false;
                if (p.trail) {
                  p.trail.line.visible = false;
                  p.trail.positionHistory = [];
                }
              }
            }
          }
        }

        // Update trail - positioned lower to not block forward view
        if (trailRef.current && shipRef.current) {
          const { positions, count } = trailRef.current;
          positions.copyWithin(3, 0, (count - 1) * 3);
          
          const shipPos = shipRef.current.position;
          // Position trail lower (negative Y) so it goes below the ship
          positions[0] = shipPos.x + (Math.random() - 0.5) * 0.15;
          positions[1] = shipPos.y - 0.3 + (Math.random() - 0.5) * 0.1; // Lower position
          positions[2] = shipPos.z + 2.0;
          
          trailRef.current.line.geometry.attributes.position.needsUpdate = true;
          
          const speedFactor = THREE.MathUtils.clamp(state.speed / MAX_SPEED, 0, 1);
          // Lower max opacity to keep view clear
          trailRef.current.line.material.opacity = 0.15 + speedFactor * 0.2;
        }

        // Spawn obstacles
        const spawnT = THREE.MathUtils.clamp(
          (state.speed - INITIAL_SPEED) / (MAX_SPEED - INITIAL_SPEED),
          0,
          1
        );
        const spawnInterval = THREE.MathUtils.lerp(
          OBSTACLE_SPAWN_INTERVAL,
          MIN_OBSTACLE_INTERVAL,
          spawnT
        );
        
        if (time - state.lastObstacleSpawn > spawnInterval) {
          state.lastObstacleSpawn = time;
          
          // Find inactive obstacle from pool
          const obstacle = obstaclePoolRef.current.find(o => !o.active);
          if (obstacle) {
            obstacle.active = true;
            obstacle.mesh.visible = true;
            
            // Random lane (weighted towards different lanes than ship)
            let lane = LANES[Math.floor(Math.random() * LANES.length)];
            
            // Occasionally spawn in current lane for challenge
            if (Math.random() < 0.3) {
              lane = state.targetLane;
            }
            
            obstacle.mesh.position.set(
              lane * LANE_WIDTH,
              (Math.random() - 0.5) * 2,
              -OBSTACLE_DISTANCE - Math.random() * 30
            );
            
            obstacle.rotationSpeed.set(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 2
            );
            
            state.obstacles.push(obstacle);
          }
        }

        // Update obstacles
        const obstacleSpeed = state.speed * 1.2;
        for (let i = state.obstacles.length - 1; i >= 0; i--) {
          const obstacle = state.obstacles[i];
          
          obstacle.mesh.position.z += obstacleSpeed * dt;
          obstacle.mesh.rotation.x += obstacle.rotationSpeed.x * dt;
          obstacle.mesh.rotation.y += obstacle.rotationSpeed.y * dt;
          obstacle.mesh.rotation.z += obstacle.rotationSpeed.z * dt;
          
          // Check collision
          if (shipRef.current && obstacle.mesh.position.z > -10 && obstacle.mesh.position.z < 5) {
            if (checkCollision(shipRef.current.position, obstacle.mesh.position, obstacle.mesh.userData.size)) {
              // COLLISION! But only handle once
              if (!gameOverHandledRef.current) {
                gameOverHandledRef.current = true;
                state.isGameOver = true;
                state.isPlaying = false;
                state.crashPosition = shipRef.current.position.clone();
                
                // Explosion effect
                spawnExplosion(shipRef.current.position, scene);
                
                // Haptic feedback
                if (navigator.vibrate) navigator.vibrate([50, 30, 100, 30, 150]);
                
                // Hide ship
                shipRef.current.visible = false;
                if (engineGlowRef.current) engineGlowRef.current.visible = false;
                if (trailRef.current) trailRef.current.line.visible = false;
                
                // Hide nozzle particles and their trails
                nozzleParticlesRef.current.forEach(p => {
                  p.active = false;
                  p.mesh.visible = false;
                  if (p.trail) {
                    p.trail.line.visible = false;
                    p.trail.positionHistory = [];
                  }
                });
                
                // Calculate final results
                const itemsEarnedTotal = calculateItemsEarnedTotal(state.survivalTime);

                // Clear any previous timeout (defensive) and schedule game-over results
                if (gameOverTimeoutRef.current) {
                  clearTimeout(gameOverTimeoutRef.current);
                }
                gameOverTimeoutRef.current = setTimeout(() => {
                  setFinalResults({
                    survivalTime: state.survivalTime,
                    distance: state.distance,
                    score: state.score,
                    itemsEarnedTotal,
                    itemsEarned: itemsEarnedTotal,
                    maxSpeed: state.speed,
                  });
                  setGameEnded(true);
                  
                  // Use ref for callback
                  if (onGameEndRef.current) {
                    onGameEndRef.current({
                      survivalTime: state.survivalTime,
                      distance: state.distance,
                      score: state.score,
                      itemsEarnedTotal,
                      itemsEarned: itemsEarnedTotal,
                    });
                  }
                }, 1500);
              }
              
              break;
            }
          }
          
          // Remove obstacles that passed
          if (obstacle.mesh.position.z > 20) {
            obstacle.active = false;
            obstacle.mesh.visible = false;
            state.obstacles.splice(i, 1);
            state.score += obstacle.mesh.userData.points || 5;
          }
        }

        // Move stars for speed effect - smoother movement
        if (starsRef.current) {
          const positions = starsRef.current.geometry.attributes.position.array;
          const speedFactor = state.speed / INITIAL_SPEED;
          const starSpeed = speedFactor * dt * 60; // Reduced speed for smoother effect
          
          for (let i = 0; i < positions.length; i += 3) {
            positions[i + 2] += starSpeed;
            
            if (positions[i + 2] > 30) {
              positions[i + 2] = -400;
              positions[i] = (Math.random() - 0.5) * 300;
              positions[i + 1] = (Math.random() - 0.5) * 300;
            }
          }
          starsRef.current.geometry.attributes.position.needsUpdate = true;
        }
      }

      // Update explosion particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const particle = state.particles[i];
        const { velocity, maxLife } = particle.userData;
        
        particle.position.add(velocity.clone().multiplyScalar(dt));
        velocity.multiplyScalar(0.96);
        
        particle.userData.life -= dt;
        const lifeRatio = particle.userData.life / maxLife;
        particle.material.opacity = lifeRatio;
        particle.scale.setScalar(1 + (1 - lifeRatio) * 2);
        
        if (particle.userData.life <= 0) {
          scene.remove(particle);
          particle.geometry.dispose();
          particle.material.dispose();
          state.particles.splice(i, 1);
        }
      }

      // Camera shake on game over
      if (state.isGameOver && state.crashPosition) {
        const shake = Math.max(0, 1 - (performance.now() - state.gameStartTime - state.survivalTime * 1000) / 1000) * 0.5;
        camera.position.x = (Math.random() - 0.5) * shake;
        camera.position.y = 8 + (Math.random() - 0.5) * shake;
      }

      // Dynamic bloom based on speed - subtle changes
      if (composerRef.current) {
        const speedFactor = THREE.MathUtils.clamp(state.speed / MAX_SPEED, 0, 1);
        bloomPass.strength = THREE.MathUtils.lerp(bloomPass.strength, 0.3 + speedFactor * 0.25, 0.05);
      }

      composer.render();
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      composerRef.current.setSize(window.innerWidth, window.innerHeight);
      fxaaPass.material.uniforms.resolution.value.set(
        1 / window.innerWidth,
        1 / window.innerHeight
      );
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (gameOverTimeoutRef.current) {
        clearTimeout(gameOverTimeoutRef.current);
        gameOverTimeoutRef.current = null;
      }
      
      // Cleanup
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
      
      // Dispose resources
      obstaclePoolRef.current.forEach(o => {
        o.mesh.geometry.dispose();
        o.mesh.material.dispose();
      });
      
      if (starsRef.current) {
        starsRef.current.geometry.dispose();
        starsRef.current.material.dispose();
      }
      
      if (trailRef.current) {
        trailRef.current.line.geometry.dispose();
        trailRef.current.line.material.dispose();
      }
      
      // Clean up nozzle particles and their trails
      nozzleParticlesRef.current.forEach(p => {
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        // Dispose trail resources
        if (p.trail) {
          p.trail.line.geometry.dispose();
          p.trail.line.material.dispose();
        }
      });
      
      renderer.dispose();
      isInitializedRef.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, spaceshipModel, nozzleFire]); // Reinit on isActive, model, or nozzle change

  return (
    <div className="relative w-full h-full">
      {/* Game Canvas */}
      <div 
        ref={mountRef} 
        className="absolute inset-0" 
        style={{ touchAction: 'none' }}
      />
      
      {/* Game Over Overlay with Results */}
      {gameEnded && finalResults && (
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center z-50 animate-[fadeIn_0.5s_ease-out] cursor-pointer"
          onClick={onContinue}
        >
          <div className="text-center max-w-md px-6 pointer-events-none">
            {/* Game Over Title */}
            <h2 className="text-4xl font-orbitron font-bold text-red-500 mb-2 animate-pulse">
              ¡COLISIÓN!
            </h2>
            <p className="text-gray-400 text-sm mb-8 uppercase tracking-widest">Misión Terminada</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tiempo</p>
                <p className="text-2xl font-mono font-bold text-cyan-400">
                  {finalResults.survivalTime.toFixed(1)}s
                </p>
              </div>
              <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Distancia</p>
                <p className="text-2xl font-mono font-bold text-emerald-400">
                  {Math.floor(finalResults.distance)}m
                </p>
              </div>
              <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Velocidad Máx</p>
                <p className="text-2xl font-mono font-bold text-orange-400">
                  {Math.floor(finalResults.maxSpeed)}
                </p>
              </div>
              <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Puntuación</p>
                <p className="text-2xl font-mono font-bold text-yellow-400">
                  {finalResults.score.toLocaleString()}
                </p>
              </div>
            </div>
            
            {/* Items Earned */}
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-6 mb-6">
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-3 font-bold">
                ¡Objetos Recolectados!
              </p>
              <div className="text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {finalResults.itemsEarnedTotal ?? finalResults.itemsEarned}
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Items añadidos a tu inventario
              </p>
            </div>
            
            {/* Continue Button (handled by parent) */}
            <p className="text-gray-600 text-xs uppercase tracking-wider animate-pulse">
              Toca para continuar...
            </p>
          </div>
        </div>
      )}
      
      {/* Lane indicators */}
      {!gameEnded && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20 pointer-events-none">
          {LANES.map((lane, idx) => (
            <div 
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-150 ${
                Math.round(gameStateRef.current.currentLane) === lane 
                  ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-125' 
                  : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Touch hint */}
      {!gameEnded && (
        <div className="absolute bottom-24 left-0 right-0 flex justify-between px-8 z-10 pointer-events-none opacity-40">
          <div className="text-gray-500 text-xs uppercase tracking-widest">
            ← Izquierda
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-widest">
            Derecha →
          </div>
        </div>
      )}
    </div>
  );
};

export default LongMissionScene;

