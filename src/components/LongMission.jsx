import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import LongMissionScene from './LongMissionScene';
import { ITEMS_DB } from '../data/items';

// Generate random items based on count + (planet + drone level) rarity modifiers.
// This mirrors the "normal mission" weighting philosophy (planetMultiplier + droneLevel),
// plus keeps Long Mission's "later items get slightly rarer" feel via positionBoost.
const generateRewardItems = (count, { droneLevel = 1, planetMultiplier = 1.0 } = {}) => {
  if (!ITEMS_DB || ITEMS_DB.length === 0) return [];

  const items = [];
  const safeCount = Math.max(0, Math.floor(count || 0));
  const levelFactor = (droneLevel || 1) * 0.1;
  const planetMult = planetMultiplier || 1.0;
  
  for (let i = 0; i < safeCount; i++) {
    const roll = Math.random();
    let item = ITEMS_DB[0];
    
    // Later items get slightly rarer (small "pity" effect), independent of planet/level.
    const positionBoost = 1 + (i / Math.max(1, safeCount)) * 1.0;
    
    const adjustedItems = ITEMS_DB.map(it => {
      let weight = it.chance;

      // --- Planet + Drone level weighting (same idea as normal mission) ---
      if (it.rarity === "Común") {
        weight /= (1 + levelFactor);
        weight /= planetMult;
      }
      if (it.rarity === "Poco Común") {
        weight *= (1 + levelFactor * 0.3);
        weight *= planetMult * 0.5;
      }
      if (it.rarity === "Raro" || it.rarity === "Épico") {
        weight *= (1 + levelFactor * 0.5);
        weight *= planetMult;
      }
      if (it.rarity === "Legendario") {
        weight *= (1 + levelFactor);
        weight *= planetMult * 1.5;
      }
      if (it.rarity === "Mítico") {
        weight *= (1 + levelFactor * 1.5);
        weight *= planetMult * 2.0;
      }
      
      // --- Long Mission progression weighting (gentle, avoids extremes) ---
      if (it.rarity === "Común") weight /= positionBoost;
      if (it.rarity === "Poco Común") weight *= (1 + positionBoost * 0.15);
      if (it.rarity === "Raro" || it.rarity === "Épico") weight *= (1 + positionBoost * 0.25);
      if (it.rarity === "Legendario") weight *= (1 + positionBoost * 0.35);
      if (it.rarity === "Mítico") weight *= (1 + positionBoost * 0.45);
      
      return { ...it, weight };
    });
    
    const totalWeight = adjustedItems.reduce((sum, it) => sum + it.weight, 0);
    let random = roll * totalWeight;
    
    for (let adj of adjustedItems) {
      random -= adj.weight;
      if (random <= 0) {
        item = adj;
        break;
      }
    }
    
    items.push({
      ...item,
      id: Date.now() + i,
      animationDelay: i * 0.15,
    });
  }
  
  // Sort by rarity for dramatic reveal (common first, rare last)
  const rarityOrder = ['Común', 'Poco Común', 'Raro', 'Épico', 'Legendario', 'Mítico'];
  items.sort((a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity));
  
  return items;
};

// Rarity background gradients
const RARITY_GRADIENTS = {
  'Común': 'from-gray-800 to-gray-900',
  'Poco Común': 'from-emerald-900/40 to-emerald-950/60',
  'Raro': 'from-blue-900/40 to-blue-950/60',
  'Épico': 'from-purple-900/40 to-purple-950/60',
  'Legendario': 'from-yellow-900/40 to-amber-950/60',
  'Mítico': 'from-rose-900/40 to-rose-950/60',
};

const RARITY_BORDERS = {
  'Común': 'border-gray-600',
  'Poco Común': 'border-emerald-500',
  'Raro': 'border-blue-500',
  'Épico': 'border-purple-500',
  'Legendario': 'border-yellow-500',
  'Mítico': 'border-rose-500',
};

const RARITY_GLOW = {
  'Común': '',
  'Poco Común': 'shadow-emerald-500/30',
  'Raro': 'shadow-blue-500/30',
  'Épico': 'shadow-purple-500/40',
  'Legendario': 'shadow-yellow-500/50',
  'Mítico': 'shadow-rose-500/60',
};

const LongMission = ({ 
  isOpen, 
  onClose, 
  spaceshipModel,
  onItemsCollected,
  droneLevel = 1,
  planetMultiplier = 1.0,
  nozzleFire = null,
}) => {
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'playing' | 'ended' | 'rewards'
  const [currentStats, setCurrentStats] = useState({
    score: 0,
    distance: 0,
    survivalTime: 0,
    speed: 0,
    itemsEarnedTotal: 0,
  });
  const [finalResults, setFinalResults] = useState(null);
  const [rewardItems, setRewardItems] = useState([]);
  const [showingItemIndex, setShowingItemIndex] = useState(-1);
  const [allItemsShown, setAllItemsShown] = useState(false);

  // Refs
  const gameEndHandledRef = useRef(false);
  const rewardsStartedRef = useRef(false);
  const revealIntervalRef = useRef(null);
  const revealDoneTimeoutRef = useRef(null);

  /* eslint-disable react-hooks/set-state-in-effect */
  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setGameState('ready');
      setCurrentStats({ score: 0, distance: 0, survivalTime: 0, speed: 0, itemsEarnedTotal: 0 });
      setFinalResults(null);
      setRewardItems([]);
      setShowingItemIndex(-1);
      setAllItemsShown(false);
      gameEndHandledRef.current = false;
      rewardsStartedRef.current = false;
    }
  }, [isOpen]);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Handle score updates from game - stable callback
  const handleScoreUpdate = useCallback((stats) => {
    setCurrentStats(stats);
  }, []);

  // Handle game end - stable callback with ref to prevent double handling
  const handleGameEnd = useCallback((results) => {
    if (gameEndHandledRef.current) return;
    gameEndHandledRef.current = true;
    
    setFinalResults(results);
    setGameState('ended');
    
    // Generate reward items influenced by planet + drone level (spaceship is cosmetic only)
    const items = generateRewardItems(results.itemsEarned, { droneLevel, planetMultiplier });
    setRewardItems(items);
  }, [droneLevel, planetMultiplier]);

  // Reveal rewards (single-shot, timers managed by effect below)
  const showRewards = () => {
    if (rewardsStartedRef.current) return;
    rewardsStartedRef.current = true;
    setGameState('rewards');
  };

  /* eslint-disable react-hooks/set-state-in-effect */
  // Manage reward reveal timers (prevents multiple intervals + cleans up on close)
  useEffect(() => {
    if (!isOpen) {
      if (revealIntervalRef.current) {
        clearInterval(revealIntervalRef.current);
        revealIntervalRef.current = null;
      }
      if (revealDoneTimeoutRef.current) {
        clearTimeout(revealDoneTimeoutRef.current);
        revealDoneTimeoutRef.current = null;
      }
      return;
    }

    if (gameState !== 'rewards') return;

    // Reset reveal state each time we enter rewards
    setAllItemsShown(false);
    setShowingItemIndex(rewardItems.length > 0 ? 0 : -1);

    if (revealIntervalRef.current) {
      clearInterval(revealIntervalRef.current);
      revealIntervalRef.current = null;
    }
    if (revealDoneTimeoutRef.current) {
      clearTimeout(revealDoneTimeoutRef.current);
      revealDoneTimeoutRef.current = null;
    }

    if (rewardItems.length === 0) {
      setAllItemsShown(true);
      return;
    }

    // If there are many items, speed up reveal so it doesn't take forever.
    // Example: 200 items * 300ms would be 60s of waiting; this keeps it reasonable.
    const intervalMs = rewardItems.length > 60 ? 60 : 300;

    revealIntervalRef.current = setInterval(() => {
      setShowingItemIndex(prev => {
        if (prev >= rewardItems.length - 1) {
          if (revealIntervalRef.current) {
            clearInterval(revealIntervalRef.current);
            revealIntervalRef.current = null;
          }
          revealDoneTimeoutRef.current = setTimeout(() => {
            setAllItemsShown(true);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => {
      if (revealIntervalRef.current) {
        clearInterval(revealIntervalRef.current);
        revealIntervalRef.current = null;
      }
      if (revealDoneTimeoutRef.current) {
        clearTimeout(revealDoneTimeoutRef.current);
        revealDoneTimeoutRef.current = null;
      }
    };
  }, [isOpen, gameState, rewardItems.length]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const skipReveal = () => {
    setShowingItemIndex(rewardItems.length - 1);
    setAllItemsShown(true);
    if (revealIntervalRef.current) {
      clearInterval(revealIntervalRef.current);
      revealIntervalRef.current = null;
    }
    if (revealDoneTimeoutRef.current) {
      clearTimeout(revealDoneTimeoutRef.current);
      revealDoneTimeoutRef.current = null;
    }
  };

  // Finish and return items to parent
  const finishMission = () => {
    if (onItemsCollected && rewardItems.length > 0) {
      // Remove animation delay property before sending
      const cleanItems = rewardItems.map((item) => {
        const clean = { ...item };
        delete clean.animationDelay;
        delete clean.weight;
        return clean;
      });
      onItemsCollected(cleanItems);
    }
    onClose();
  };

  // Start game
  const startGame = () => {
    setGameState('playing');
  };

  // Calculate total value of rewards
  const totalValue = useMemo(() => {
    return rewardItems.reduce((sum, item) => sum + item.val, 0);
  }, [rewardItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Ready Screen */}
      {gameState === 'ready' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black z-20">
          <div className="text-center px-8 max-w-md">
            {/* Title */}
            <h1 className="text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4 animate-pulse">
              MISIÓN LARGA
            </h1>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Esquiva los obstáculos el mayor tiempo posible. 
              <span className="text-cyan-400"> Cuanto más tiempo sobrevivas, más objetos obtendrás.</span>
            </p>
            
            {/* Instructions */}
            <div className="bg-gray-900/60 border border-white/10 rounded-xl p-4 mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-bold">Controles</p>
              <div className="flex justify-around text-sm">
                <div className="text-center">
                  <span className="text-2xl">←</span>
                  <p className="text-gray-500 text-xs mt-1">Desliza Izq.</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">→</span>
                  <p className="text-gray-500 text-xs mt-1">Desliza Der.</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                También puedes tocar los lados de la pantalla
              </p>
            </div>
            
            {/* Warning */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4 mb-8">
              <p className="text-orange-400 text-xs flex items-center justify-center gap-2">
                <span className="text-lg">⚠️</span>
                La velocidad aumenta con el tiempo
              </p>
            </div>
            
            {/* Start Button */}
            <button
              onClick={startGame}
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-orbitron font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 active:scale-95 transition-all border-b-4 border-cyan-800"
            >
              INICIAR MISIÓN
            </button>
            
            {/* Back Button */}
            <button
              onClick={onClose}
              className="mt-4 text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              ← Volver
            </button>
          </div>
        </div>
      )}

      {/* Game Scene - keep active during 'ended' for explosion animation */}
      {(gameState === 'playing' || gameState === 'ended') && (
        <>
          <LongMissionScene
            isActive={true}
            spaceshipModel={spaceshipModel}
            onGameEnd={handleGameEnd}
            onScoreUpdate={handleScoreUpdate}
            onContinue={showRewards}
            nozzleFire={nozzleFire}
          />
          
          {/* HUD Overlay */}
          {gameState === 'playing' && (
            <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none">
              {/* Top Stats Bar */}
              <div className="flex justify-between items-start p-4">
                <div className="glass-panel px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Tiempo</p>
                  <p className="text-xl font-mono font-bold text-cyan-400">
                    {currentStats.survivalTime.toFixed(1)}s
                  </p>
                </div>
                
                <div className="glass-panel px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Puntuación</p>
                  <p className="text-xl font-mono font-bold text-yellow-400">
                    {currentStats.score.toLocaleString()}
                  </p>
                </div>
              </div>
              
              {/* Speed Indicator */}
              <div className="absolute top-20 right-4">
                <div className="glass-panel px-3 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-orange-500/30">
                  <p className="text-[10px] text-orange-400 uppercase tracking-wider">Velocidad</p>
                  <p className="text-lg font-mono font-bold text-orange-400">
                    {Math.floor(currentStats.speed)}
                  </p>
                </div>
              </div>
              
              {/* Items counter */}
              <div className="absolute top-20 left-4">
                <div className="glass-panel px-3 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-purple-500/30">
                  <p className="text-[10px] text-purple-400 uppercase tracking-wider">Items</p>
                  <p className="text-lg font-mono font-bold text-purple-400">
                    +{currentStats.itemsEarnedTotal ?? 0}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tap to continue after game over */}
          {gameState === 'ended' && (
            <div 
              className="absolute inset-0 z-40"
              onClick={showRewards}
            />
          )}
        </>
      )}

      {/* Rewards Screen */}
      {gameState === 'rewards' && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="text-center pt-8 pb-4">
            <h2 className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
              ¡RECOMPENSAS!
            </h2>
            <p className="text-gray-500 text-sm">
              {finalResults?.survivalTime.toFixed(1)}s sobrevividos • {finalResults?.score.toLocaleString()} pts
            </p>
          </div>

          {/* Skip reveal (useful for very large reward counts) */}
          {!allItemsShown && rewardItems.length > 20 && (
            <div className="px-6 pb-2">
              <button
                onClick={skipReveal}
                className="w-full py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-xl border border-white/10 active:scale-95 transition-all"
              >
                Saltar animación
              </button>
            </div>
          )}

          {/* Items Display - Responsive Grid (mobile-friendly) */}
          <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
            {rewardItems.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto content-start">
                {rewardItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`
                      w-full
                      transition-all duration-500 ease-out
                      ${index <= showingItemIndex
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-3 scale-95'
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <div
                      className={`
                        bg-gradient-to-br ${RARITY_GRADIENTS[item.rarity]}
                        border-2 ${RARITY_BORDERS[item.rarity]}
                        rounded-2xl p-3 sm:p-4 text-center
                        shadow-lg ${RARITY_GLOW[item.rarity]}
                        transform hover:scale-105 transition-transform
                      `}
                    >
                      {/* Item Icon */}
                      <div
                        className="text-3xl sm:text-4xl mb-2 animate-bounce"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {item.icon}
                      </div>

                      {/* Item Name */}
                      <h3 className={`font-bold text-[10px] sm:text-xs leading-tight mb-1 ${item.style}`}>
                        {item.name}
                      </h3>

                      {/* Rarity Tag */}
                      <span className="text-[8px] uppercase tracking-wider text-gray-500 bg-black/40 px-2 py-0.5 rounded-full">
                        {item.rarity}
                      </span>

                      {/* Value */}
                      <div className="mt-2 text-xs sm:text-sm font-mono font-bold text-yellow-400">
                        +{item.val.toLocaleString()}₡
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center text-gray-500 px-6">
                <div className="py-12">
                  <p className="text-4xl mb-4">😢</p>
                  <p>No sobreviviste lo suficiente para recolectar objetos</p>
                </div>
              </div>
            )}
          </div>

          {/* Total Value */}
          {allItemsShown && rewardItems.length > 0 && (
            <div className="text-center py-4 animate-[slideUp_0.5s_ease-out]">
              <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-xl px-8 py-4 inline-block">
                <p className="text-xs text-yellow-400/70 uppercase tracking-widest mb-1">Valor Total</p>
                <p className="text-3xl font-mono font-bold text-yellow-400">
                  +{totalValue.toLocaleString()}₡
                </p>
              </div>
            </div>
          )}

          {/* Continue Button */}
          {allItemsShown && (
            <div className="p-6 animate-[slideUp_0.5s_ease-out]">
              <button
                onClick={finishMission}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-orbitron font-bold text-lg rounded-xl shadow-lg shadow-emerald-500/30 active:scale-95 transition-all border-b-4 border-emerald-800"
              >
                RECLAMAR TODO
              </button>
            </div>
          )}
        </div>
      )}

      {/* CSS for scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LongMission;

