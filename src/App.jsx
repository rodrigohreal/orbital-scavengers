import { useState, useEffect, useMemo } from 'react';

// Components
import Scene3D from './components/Scene3D';
import RewardModal from './components/RewardModal';
import { Icons } from './components/Icons';

// Data
import { ITEMS_DB } from './data/items';
import { PLANETS } from './data/planets';

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
