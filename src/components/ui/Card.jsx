import React from 'react';

export function Card({ children, className = '', title, actions }) {
  return (
    <div className={`bg-black/40 border border-gray-800 rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#CDFF00]">{title}</h3>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export function StatCard({ title, value, delta, icon }) {
  const deltaColor = delta > 0 ? 'text-green-500' : delta < 0 ? 'text-red-500' : 'text-gray-500';
  const deltaIcon = delta > 0 ? '↑' : delta < 0 ? '↓' : '→';
  
  return (
    <div className="bg-black/40 border border-gray-800 rounded-lg p-6 hover:border-[#CDFF00]/50 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-400 uppercase tracking-wide">{title}</p>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      {delta !== undefined && (
        <p className={`text-sm ${deltaColor} flex items-center gap-1`}>
          <span>{deltaIcon}</span>
          <span>{Math.abs(delta)}%</span>
        </p>
      )}
    </div>
  );
}
