import React from 'react';

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

export default RewardModal;

