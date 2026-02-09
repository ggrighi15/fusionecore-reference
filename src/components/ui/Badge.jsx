import React from 'react';
import { getStatusBadgeColor } from '../../data/mock/mockData';

export function Badge({ children, status, variant = 'default', className = '' }) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variants = {
    default: 'bg-gray-800 text-gray-300',
    success: 'bg-green-500/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
    info: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    primary: 'bg-[#CDFF00]/20 text-[#CDFF00] border border-[#CDFF00]/30'
  };
  
  // If status is provided, use status-based color
  if (status) {
    const statusColor = getStatusBadgeColor(status);
    return (
      <span className={`${baseStyles} ${statusColor}/20 border border-current/30 ${className}`}>
        {children}
      </span>
    );
  }
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
