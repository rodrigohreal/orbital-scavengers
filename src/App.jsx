import { useState, useEffect, useMemo } from 'react';

// Components
import Scene3D from './components/Scene3D';
import SurfaceScene from './components/SurfaceScene';
import RewardModal from './components/RewardModal';
import { Icons } from './components/Icons';

// Data
import { ITEMS_DB } from './data/items';
import { PLANETS } from './data/planets';

const SPACESHIPS = [
  { id: 0, name: "Nave Estándar", model: "nave.glb", cost: 0, rarity: "Común" },
  { id: 1, name: "Nave Básica", model: "n_basica.glb", cost: 1000, rarity: "Poco Común" },
  { id: 2, name: "Nave Graffiti", model: "n_graffiti.glb", cost: 2000, rarity: "Rara" }
];

const NOZZLE_FIRES = [
  // Standard particle animations (color variations)
  { id: 0, name: "Fuego Estándar", cost: 0, colors: ['#ff6600', '#ffaa00', '#ffffff'], description: "Fuego naranja clásico", type: "standard" },
  { id: 1, name: "Plasma Azul", cost: 5000, colors: ['#0066ff', '#00ccff', '#ffffff'], description: "Plasma frío y brillante", type: "standard" },
  { id: 2, name: "Infierno Púrpura", cost: 10000, colors: ['#9900ff', '#ff00ff', '#ffffff'], description: "Llamas de energía oscura", type: "standard" },
  { id: 3, name: "Neón Verde", cost: 15000, colors: ['#00ff66', '#66ffaa', '#ffffff'], description: "Energía tóxica radiante", type: "standard" },
  { id: 4, name: "Carmesí Rojo", cost: 20000, colors: ['#ff0044', '#ff4488', '#ffccdd'], description: "Combustión infernal", type: "standard" },
  
  // Special particle animations (different effects)
  { id: 5, name: "Relámpago Eléctrico", cost: 30000, colors: ['#00eeff', '#88ffff', '#ffffff'], description: "Descargas eléctricas caóticas", type: "electric" },
  { id: 6, name: "Anillos de Plasma", cost: 45000, colors: ['#ff00aa', '#ff66cc', '#ffffff'], description: "Ondas circulares de energía", type: "rings" },
  { id: 7, name: "Explosión Estelar", cost: 60000, colors: ['#ffdd00', '#ffff66', '#ffffff'], description: "Fragmentos de estrellas", type: "starburst" },
  { id: 8, name: "Espiral Cósmica", cost: 80000, colors: ['#aa00ff', '#dd66ff', '#ffffff'], description: "Vórtice interdimensional", type: "spiral" },
  { id: 9, name: "Nova Suprema", cost: 100000, colors: ['#ff3300', '#ffaa00', '#00ffff'], description: "Poder de una supernova", type: "nova" }
];

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
  
  // Selection Mode: 'planet' or 'spaceship'
  const [selectionMode, setSelectionMode] = useState('planet');

  const [selectedPlanet, setSelectedPlanet] = useState(() => {
    const saved = localStorage.getItem('os_ultra_planet');
    return saved ? parseInt(saved) : 0;
  });
  const [unlockedPlanets, setUnlockedPlanets] = useState(() => {
    const saved = localStorage.getItem('os_ultra_unlocked_planets');
    return saved ? JSON.parse(saved) : [0]; // Planet 0 (Sistema Solar) is always unlocked
  });

  const [selectedSpaceship, setSelectedSpaceship] = useState(() => {
    const saved = localStorage.getItem('os_ultra_spaceship');
    return saved ? parseInt(saved) : 0;
  });
  const [unlockedSpaceships, setUnlockedSpaceships] = useState(() => {
    const saved = localStorage.getItem('os_ultra_unlocked_spaceships');
    return saved ? JSON.parse(saved) : [0]; // Spaceship 0 is always unlocked
  });

  // Nozzle Fire state
  const [selectedNozzleFire, setSelectedNozzleFire] = useState(() => {
    const saved = localStorage.getItem('os_ultra_nozzle');
    return saved ? parseInt(saved) : 0;
  });
  const [unlockedNozzleFires, setUnlockedNozzleFires] = useState(() => {
    const saved = localStorage.getItem('os_ultra_unlocked_nozzles');
    return saved ? JSON.parse(saved) : [0]; // Nozzle 0 is always unlocked
  });
  const [nozzleMenuOpen, setNozzleMenuOpen] = useState(false);
  const [rankingMenuOpen, setRankingMenuOpen] = useState(false);

  // Mock ranking data (in production, this would come from Telegram API/backend)
  const RANKING_DATA = useMemo(() => [
    { id: 1, username: "Rodrigo", level: 20, rank: 1 },
    { id: 2, username: "StarPilot_X", level: 18, rank: 2 },
    { id: 3, username: "CosmicHunter", level: 15, rank: 3 },
    { id: 4, username: "NebulaDrifter", level: 12, rank: 4 },
    { id: 5, username: "VoidRunner", level: 10, rank: 5 },
    { id: 6, username: "AstroNova", level: 8, rank: 6 },
    { id: 7, username: "GalacticAce", level: 7, rank: 7 },
    { id: 8, username: "OrbitMaster", level: 5, rank: 8 },
    { id: 9, username: "StellarWing", level: 4, rank: 9 },
    { id: 10, username: "SpaceRookie", level: 2, rank: 10 },
  ], []);

  useEffect(() => {
    localStorage.setItem('os_ultra_credits', credits);
    localStorage.setItem('os_ultra_level', droneLevel);
    localStorage.setItem('os_ultra_inv', JSON.stringify(inventory));
    localStorage.setItem('os_ultra_planet', selectedPlanet);
    localStorage.setItem('os_ultra_unlocked_planets', JSON.stringify(unlockedPlanets));
    localStorage.setItem('os_ultra_spaceship', selectedSpaceship);
    localStorage.setItem('os_ultra_unlocked_spaceships', JSON.stringify(unlockedSpaceships));
    localStorage.setItem('os_ultra_nozzle', selectedNozzleFire);
    localStorage.setItem('os_ultra_unlocked_nozzles', JSON.stringify(unlockedNozzleFires));
  }, [credits, droneLevel, inventory, selectedPlanet, unlockedPlanets, selectedSpaceship, unlockedSpaceships, selectedNozzleFire, unlockedNozzleFires]);

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
    // Longer mission time for more cinematic experience (15s base)
    const duration = Math.max(10, 15 - Math.floor(droneLevel/10));
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

  const unlockSpaceship = (spaceshipId) => {
    const ship = SPACESHIPS[spaceshipId];
    if (!ship || unlockedSpaceships.includes(spaceshipId)) return;
    if (credits >= ship.cost) {
      setCredits(prev => prev - ship.cost);
      setUnlockedSpaceships(prev => [...prev, spaceshipId]);
      setSelectedSpaceship(spaceshipId);
    }
  };

  const unlockNozzleFire = (nozzleId) => {
    const nozzle = NOZZLE_FIRES[nozzleId];
    if (!nozzle || unlockedNozzleFires.includes(nozzleId)) return;
    if (credits >= nozzle.cost) {
      setCredits(prev => prev - nozzle.cost);
      setUnlockedNozzleFires(prev => [...prev, nozzleId]);
      setSelectedNozzleFire(nozzleId);
    }
  };

  const selectNozzleFire = (nozzleId) => {
    if (unlockedNozzleFires.includes(nozzleId)) {
      setSelectedNozzleFire(nozzleId);
    }
  };

  // --- NAVIGATION ---
  const changeSelection = (dir) => {
    if (missionState === 'mining') return;
    
    if (selectionMode === 'planet') {
        setSelectedPlanet(prev => {
            const next = prev + dir;
            if (next < 0) return PLANETS.length - 1;
            if (next >= PLANETS.length) return 0;
            return next;
        });
    } else {
        setSelectedSpaceship(prev => {
            const next = prev + dir;
            if (next < 0) return SPACESHIPS.length - 1;
            if (next >= SPACESHIPS.length) return 0;
            return next;
        });
    }
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

  const currentSpaceship = SPACESHIPS[selectedSpaceship];
  const isSpaceshipUnlocked = unlockedSpaceships.includes(currentSpaceship.id) || currentSpaceship.cost === 0;
  const canAffordSpaceship = credits >= currentSpaceship.cost;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-rajdhani select-none">
      <Scene3D 
        missionState={missionState} 
        level={droneLevel} 
        totalDuration={totalDuration} 
        timeLeft={timeLeft} 
        planet={currentPlanet}
        spaceshipModel={SPACESHIPS[selectedSpaceship].model}
        nozzleFire={NOZZLE_FIRES[selectedNozzleFire]}
      />
      <SurfaceScene missionState={missionState} level={droneLevel} totalDuration={totalDuration} timeLeft={timeLeft} planet={currentPlanet} />
      
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
              
              {/* Toggle Switch */}
              <div className="flex justify-center mb-4">
                <div className="bg-gray-900/80 p-1 rounded-full border border-white/10 flex relative">
                  <button 
                    onClick={() => setSelectionMode('planet')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${selectionMode === 'planet' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    Planetas
                  </button>
                  <button 
                    onClick={() => setSelectionMode('spaceship')}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${selectionMode === 'spaceship' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    Naves
                  </button>
                </div>
              </div>

              {/* Header Area: Planet Info OR Buy Button */}
              <div className="mb-4 text-center min-h-[60px] flex flex-col justify-center items-center">
                {selectionMode === 'planet' ? (
                    isPlanetUnlocked ? (
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
                    )
                ) : (
                    // SPACESHIP INFO / BUY
                    isSpaceshipUnlocked ? (
                        <>
                            <p className="text-xs font-mono tracking-[0.3em] uppercase font-bold mb-1 text-purple-400">
                            • NAVE SELECCIONADA •
                            </p>
                            <h3 className="text-2xl font-orbitron font-bold text-white tracking-widest drop-shadow-md">
                            {currentSpaceship.name}
                            </h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                            Rareza: {currentSpaceship.rarity}
                            </p>
                        </>
                    ) : (
                        <button
                            onClick={() => unlockSpaceship(currentSpaceship.id)}
                            disabled={!canAffordSpaceship}
                            className={`w-full py-3 rounded-xl border font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                                canAffordSpaceship 
                                ? 'bg-purple-600 hover:bg-purple-500 border-purple-400 text-white animate-pulse'
                                : 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            <Icons.Lock size={14} />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px]">COMPRAR {currentSpaceship.name}</span>
                                <span className="text-sm font-mono">{currentSpaceship.cost.toLocaleString()} ₡</span>
                            </div>
                        </button>
                    )
                )}
              </div>

              {/* Control Row: Arrows & Main Button */}
              <div className="flex items-center gap-3">
                  <button 
                    onClick={() => changeSelection(-1)}
                    disabled={missionState === 'mining'}
                    className={`p-3 rounded-xl border bg-black/50 backdrop-blur-md transition-all ${missionState === 'mining' ? 'opacity-30 border-gray-800 cursor-not-allowed' : 'border-white/10 text-white hover:bg-white/10 hover:scale-105 active:scale-95'}`}
                  >
                    <Icons.ArrowLeft size={20} />
                  </button>

                  <div className="flex-1">
                    {missionState === 'idle' && (
                        <button 
                            onClick={startMission} 
                            disabled={!isPlanetUnlocked || !isSpaceshipUnlocked}
                            className={`w-full py-4 rounded-2xl font-bold tracking-widest shadow-lg border-b-4 font-orbitron text-base transition-all ${
                                isPlanetUnlocked && isSpaceshipUnlocked
                                ? 'bg-gradient-to-br from-blue-600 to-blue-700 hover:to-blue-600 text-white border-blue-800 active:border-b-0 active:translate-y-1 hover:shadow-blue-500/50'
                                : 'bg-gray-800 text-gray-500 border-gray-900 cursor-not-allowed'
                            }`}
                        >
                            {isPlanetUnlocked && isSpaceshipUnlocked ? 'INICIAR MISIÓN' : 'BLOQUEADO'}
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
                    onClick={() => changeSelection(1)}
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
          <div className="h-full bg-black/90 backdrop-blur-xl p-6 pt-12 pb-32 pointer-events-auto animate-[slideUp_0.4s_ease-out] flex flex-col overflow-y-auto">
            <h2 className="text-3xl font-bold text-white font-orbitron mb-2 text-center tracking-widest">INGENIERÍA</h2>
            <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">Mejoras de Dron & Sistemas</p>
            <div className="flex-1 flex flex-col items-center justify-start gap-4">
              {/* Drone Upgrade Panel */}
              <div className="w-full max-w-sm bg-gray-900/80 rounded-2xl p-6 border border-white/10">
                <div className="flex justify-between items-end mb-4">
                  <div><h3 className="text-lg font-bold text-white font-orbitron">Interceptor MK-{droneLevel + 1}</h3><p className="text-xs text-blue-400 uppercase tracking-widest">Próxima Generación</p></div>
                  <div className="text-right"><span className="block text-[10px] text-gray-500 uppercase">Costo</span><span className={`font-mono font-bold text-lg ${credits >= droneLevel*250 ? 'text-green-400' : 'text-red-400'}`}>{(droneLevel * 250).toLocaleString()} ₡</span></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6"><div className="bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center"><span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Velocidad</span><span className="text-green-400 font-bold text-xl">+5%</span></div><div className="bg-black/40 p-3 rounded-lg border border-white/5 flex flex-col items-center"><span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Suerte</span><span className="text-yellow-400 font-bold text-xl">+2%</span></div></div>
                <button onClick={upgrade} disabled={credits < droneLevel * 250} className={`w-full py-4 rounded-xl font-bold font-orbitron text-lg shadow-lg active:scale-95 transition-all ${credits >= droneLevel*250 ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700'}`}>{credits >= droneLevel * 250 ? 'INSTALAR MEJORA' : 'CRÉDITOS INSUFICIENTES'}</button>
              </div>

              {/* Nozzle Fire Deployable Menu */}
              <div className="w-full max-w-sm bg-gray-900/80 rounded-2xl border border-white/10 overflow-hidden">
                {/* Header - Clickable to toggle */}
                <button 
                  onClick={() => setNozzleMenuOpen(!nozzleMenuOpen)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white font-orbitron">NOZZLE FIRE</h3>
                      <p className="text-xs text-orange-400 uppercase tracking-widest">Animación de Escape</p>
                    </div>
                  </div>
                  <span className={`text-xl text-gray-400 transition-transform duration-300 ${nozzleMenuOpen ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>

                        {/* Expandable Content */}
                <div className={`transition-all duration-300 ease-in-out ${nozzleMenuOpen ? 'max-h-[60vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-4 pt-0 pb-8 space-y-3">
                    {NOZZLE_FIRES.map((nozzle) => {
                      const isUnlocked = unlockedNozzleFires.includes(nozzle.id);
                      const isSelected = selectedNozzleFire === nozzle.id;
                      const canAfford = credits >= nozzle.cost;
                      
                      // Render different particle systems based on type
                      const renderParticles = () => {
                        switch(nozzle.type) {
                          case 'electric':
                            return (
                              <>
                                {/* Electric bolts - jagged lightning */}
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={`bolt-${i}`}
                                    className="nozzle-particle nozzle-particle-electric"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.18}s`,
                                      '--y-offset': `${(i % 5 - 2) * 8}px`,
                                    }}
                                  />
                                ))}
                                {/* Electric sparks */}
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                  <div
                                    key={`spark-${i}`}
                                    className="nozzle-particle nozzle-particle-spark"
                                    style={{
                                      '--particle-color': nozzle.colors[2],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.08}s`,
                                      '--y-offset': `${(i % 7 - 3) * 7}px`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                          
                          case 'rings':
                            return (
                              <>
                                {/* Plasma rings */}
                                {[0, 1, 2, 3, 4].map((i) => (
                                  <div
                                    key={`ring-${i}`}
                                    className="nozzle-particle nozzle-particle-ring"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--ring-border': nozzle.colors[2],
                                      '--delay': `${i * 0.3}s`,
                                    }}
                                  />
                                ))}
                                {/* Ring trails */}
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={`trail-${i}`}
                                    className="nozzle-particle nozzle-particle-ring-trail"
                                    style={{
                                      '--particle-color': nozzle.colors[0],
                                      '--delay': `${i * 0.22}s`,
                                      '--y-offset': `${(i % 3 - 1) * 4}px`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                          
                          case 'starburst':
                            return (
                              <>
                                {/* Star particles */}
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                  <div
                                    key={`star-${i}`}
                                    className="nozzle-particle nozzle-particle-star"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.25}s`,
                                      '--y-offset': `${(i % 5 - 2) * 6}px`,
                                      '--rotation': `${i * 60}deg`,
                                    }}
                                  />
                                ))}
                                {/* Burst fragments */}
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                  <div
                                    key={`fragment-${i}`}
                                    className="nozzle-particle nozzle-particle-fragment"
                                    style={{
                                      '--particle-color': nozzle.colors[2],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.12}s`,
                                      '--y-offset': `${(i % 7 - 3) * 5}px`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                          
                          case 'spiral':
                            return (
                              <>
                                {/* Spiral core - Denser and continuous */}
                                {Array.from({length: 24}).map((_, i) => (
                                  <div
                                    key={`spiral-${i}`}
                                    className="nozzle-particle nozzle-particle-spiral"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.1}s`,
                                      '--spiral-angle': `${i * 20}deg`,
                                    }}
                                  />
                                ))}
                                {/* Vortex dust */}
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                  <div
                                    key={`vortex-${i}`}
                                    className="nozzle-particle nozzle-particle-vortex"
                                    style={{
                                      '--particle-color': nozzle.colors[2],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.14}s`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                          
                          case 'nova':
                            return (
                              <>
                                {/* Nova core */}
                                {[0, 1, 2].map((i) => (
                                  <div
                                    key={`nova-core-${i}`}
                                    className="nozzle-particle nozzle-particle-nova-core"
                                    style={{
                                      '--particle-color': nozzle.colors[2],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.4}s`,
                                    }}
                                  />
                                ))}
                                {/* Nova waves */}
                                {[0, 1, 2, 3, 4].map((i) => (
                                  <div
                                    key={`nova-wave-${i}`}
                                    className="nozzle-particle nozzle-particle-nova-wave"
                                    style={{
                                      '--particle-color': nozzle.colors[0],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.28}s`,
                                    }}
                                  />
                                ))}
                                {/* Nova debris */}
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                  <div
                                    key={`debris-${i}`}
                                    className="nozzle-particle nozzle-particle-debris"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.11}s`,
                                      '--y-offset': `${(i % 5 - 2) * 7}px`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                          
                          default: // standard
                            return (
                              <>
                                {/* Core particles */}
                                {[0, 1, 2, 3, 4].map((i) => (
                                  <div
                                    key={`core-${i}`}
                                    className="nozzle-particle nozzle-particle-core"
                                    style={{
                                      '--particle-color': nozzle.colors[2],
                                      '--particle-glow': nozzle.colors[1],
                                      '--delay': `${i * 0.15}s`,
                                      '--y-offset': `${(i % 3 - 1) * 4}px`,
                                    }}
                                  />
                                ))}
                                {/* Mid particles */}
                                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                                  <div
                                    key={`mid-${i}`}
                                    className="nozzle-particle nozzle-particle-mid"
                                    style={{
                                      '--particle-color': nozzle.colors[1],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.12}s`,
                                      '--y-offset': `${(i % 5 - 2) * 5}px`,
                                    }}
                                  />
                                ))}
                                {/* Outer particles */}
                                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                                  <div
                                    key={`outer-${i}`}
                                    className="nozzle-particle nozzle-particle-outer"
                                    style={{
                                      '--particle-color': nozzle.colors[0],
                                      '--particle-glow': nozzle.colors[0],
                                      '--delay': `${i * 0.1}s`,
                                      '--y-offset': `${(i % 7 - 3) * 6}px`,
                                    }}
                                  />
                                ))}
                              </>
                            );
                        }
                      };
                      
                      return (
                        <div 
                          key={nozzle.id}
                          className={`rounded-xl border p-4 transition-all ${
                            isSelected 
                              ? 'border-orange-500 bg-orange-500/10' 
                              : isUnlocked 
                                ? 'border-white/20 bg-black/40 hover:border-white/40 cursor-pointer' 
                                : 'border-white/10 bg-black/20'
                          }`}
                          onClick={() => isUnlocked && selectNozzleFire(nozzle.id)}
                        >
                          {/* Fire Animation Preview - Particle-based like mission */}
                          <div className="relative h-16 bg-gradient-to-r from-black/80 via-black/60 to-black/40 rounded-lg mb-3 overflow-hidden border border-white/5">
                            {/* Nozzle indicator on left */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-6 bg-gray-700 rounded-r-sm border-r border-gray-500" />
                            
                            {/* Particle container - render based on type */}
                            <div className="absolute inset-0 nozzle-fire-container">
                              {renderParticles()}
                              
                              {/* Glow effect behind particles */}
                              <div 
                                className={`nozzle-glow ${nozzle.type !== 'standard' ? `nozzle-glow-${nozzle.type}` : ''}`}
                                style={{
                                  '--glow-color-1': nozzle.colors[2],
                                  '--glow-color-2': nozzle.colors[1],
                                  '--glow-color-3': nozzle.colors[0],
                                }}
                              />
                            </div>
                          </div>

                          {/* Info Row */}
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-white">{nozzle.name}</h4>
                              <p className="text-xs text-gray-500">{nozzle.description}</p>
                            </div>
                            <div>
                              {isSelected ? (
                                <span className="text-xs font-bold text-orange-400 uppercase px-3 py-1 bg-orange-500/20 rounded-full">
                                  Activo
                                </span>
                              ) : isUnlocked ? (
                                <span className="text-xs font-bold text-green-400 uppercase px-3 py-1 bg-green-500/20 rounded-full">
                                  Seleccionar
                                </span>
                              ) : nozzle.cost === 0 ? (
                                <span className="text-xs font-bold text-gray-400 uppercase">Gratis</span>
                              ) : (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    unlockNozzleFire(nozzle.id);
                                  }}
                                  disabled={!canAfford}
                                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                                    canAfford 
                                      ? 'bg-orange-600 hover:bg-orange-500 text-white' 
                                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                  }`}
                                >
                                  {nozzle.cost.toLocaleString()} ₡
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Ranking Deployable Menu */}
              <div className="w-full max-w-sm bg-gray-900/80 rounded-2xl border border-white/10 overflow-hidden">
                {/* Header - Clickable to toggle */}
                <button 
                  onClick={() => setRankingMenuOpen(!rankingMenuOpen)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white font-orbitron">RANKING</h3>
                      <p className="text-xs text-yellow-400 uppercase tracking-widest">Pilotos Galácticos</p>
                    </div>
                  </div>
                  <span className={`text-xl text-gray-400 transition-transform duration-300 ${rankingMenuOpen ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>

                {/* Expandable Content */}
                <div className={`transition-all duration-300 ease-in-out ${rankingMenuOpen ? 'max-h-[60vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-4 pt-0 pb-8 space-y-2">
                    {RANKING_DATA.map((user) => {
                      const isTopThree = user.rank <= 3;
                      const rankColors = {
                        1: 'from-yellow-500 to-amber-600 border-yellow-400',
                        2: 'from-gray-400 to-gray-500 border-gray-300',
                        3: 'from-amber-700 to-amber-800 border-amber-600',
                      };
                      const rankEmojis = { 1: '🥇', 2: '🥈', 3: '🥉' };
                      
                      return (
                        <div 
                          key={user.id}
                          className={`rounded-xl border p-3 transition-all flex items-center gap-3 ${
                            isTopThree 
                              ? `bg-gradient-to-r ${rankColors[user.rank]} border-opacity-50` 
                              : 'border-white/10 bg-black/40 hover:border-white/20'
                          }`}
                        >
                          {/* Rank Badge */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                            isTopThree 
                              ? 'bg-black/30 text-white' 
                              : 'bg-gray-800 text-gray-400'
                          }`}>
                            {isTopThree ? rankEmojis[user.rank] : `#${user.rank}`}
                          </div>
                          
                          {/* User Info */}
                          <div className="flex-1 min-w-0">
                            <div className={`font-bold truncate ${isTopThree ? 'text-white' : 'text-gray-300'}`}>
                              @{user.username}
                            </div>
                            <div className={`text-xs ${isTopThree ? 'text-white/70' : 'text-gray-500'}`}>
                              Piloto Estelar
                            </div>
                          </div>
                          
                          {/* Level Badge */}
                          <div className={`px-3 py-1.5 rounded-lg font-mono font-bold text-sm ${
                            isTopThree 
                              ? 'bg-black/30 text-white border border-white/20' 
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            MK-{user.level}
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Current User Position Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="rounded-xl border-2 border-cyan-500/50 bg-cyan-500/10 p-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/30 flex items-center justify-center">
                          <span className="text-cyan-400 font-bold">TÚ</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-cyan-300">Tu Posición</div>
                          <div className="text-xs text-cyan-500/70">Sigue mejorando tu nave</div>
                        </div>
                        <div className="px-3 py-1.5 rounded-lg font-mono font-bold text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          MK-{droneLevel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
