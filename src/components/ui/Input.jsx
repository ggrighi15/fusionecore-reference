import React from 'react';
import { Search } from 'lucide-react';

export function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon,
  ...props 
}) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-lg
          text-white placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-[#CDFF00]/50 focus:border-[#CDFF00]
          transition-all
          ${icon ? 'pl-10' : ''}
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export function SearchInput({ value, onChange, placeholder = 'Buscar...', className = '' }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      icon={<Search size={18} />}
      className={className}
    />
  );
}

export function Select({ value, onChange, options, placeholder, className = '' }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        px-4 py-2 bg-black/40 border border-gray-800 rounded-lg
        text-white
        focus:outline-none focus:ring-2 focus:ring-[#CDFF00]/50 focus:border-[#CDFF00]
        transition-all
        ${className}
      `}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
