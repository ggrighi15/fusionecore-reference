import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { fusionecoreData } from '../data/content';
import { useLocation } from 'wouter';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [, setLocation] = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults = [];
    const lowerQuery = query.toLowerCase();

    // Search in modules
    fusionecoreData.modules.forEach((module) => {
      if (module.name.toLowerCase().includes(lowerQuery) ||
          module.description.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          type: 'Módulo',
          title: module.name,
          description: module.description,
          href: `/modules#${module.id}`
        });
      }

      module.features.forEach((feature) => {
        if (feature.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            type: 'Funcionalidade',
            title: feature,
            description: `Módulo: ${module.name}`,
            href: `/modules#${module.id}`
          });
        }
      });
    });

    // Search in entities
    fusionecoreData.entities.forEach((entity) => {
      if (entity.name.toLowerCase().includes(lowerQuery) ||
          entity.description.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          type: 'Entidade',
          title: entity.name,
          description: entity.description,
          href: '/data-model#' + entity.name.toLowerCase()
        });
      }
    });

    // Search in IA capabilities
    fusionecoreData.ia.capabilities.forEach((capability) => {
      if (capability.name.toLowerCase().includes(lowerQuery) ||
          capability.description.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          type: 'IA',
          title: capability.name,
          description: capability.description,
          href: '/ai#capabilities'
        });
      }
    });

    // Search in roadmap
    fusionecoreData.roadmap.forEach((phase) => {
      if (phase.name.toLowerCase().includes(lowerQuery) ||
          phase.objective.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          type: 'Roadmap',
          title: `Fase ${phase.phase}: ${phase.name}`,
          description: phase.objective,
          href: `/roadmap#phase-${phase.phase}`
        });
      }
    });

    setResults(searchResults.slice(0, 10));
  }, [query]);

  const handleResultClick = (href) => {
    setLocation(href);
    onClose();
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-fusione-gray-dark rounded-lg shadow-2xl border border-fusione-gray"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-fusione-gray px-4 py-3">
          <Search className="w-5 h-5 text-fusione-lime mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar módulos, funcionalidades, entidades..."
            className="flex-1 bg-transparent text-white placeholder-fusione-gray-light outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-fusione-gray rounded transition-all"
          >
            <X className="w-5 h-5 text-fusione-gray-light" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.length < 2 ? (
            <div className="px-4 py-8 text-center text-fusione-gray-light">
              Digite pelo menos 2 caracteres para buscar
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-center text-fusione-gray-light">
              Nenhum resultado encontrado para "{query}"
            </div>
          ) : (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.href)}
                  className="w-full px-4 py-3 text-left hover:bg-fusione-gray transition-all border-b border-fusione-gray last:border-b-0"
                >
                  <div className="flex items-start space-x-3">
                    <span className="px-2 py-1 bg-fusione-lime text-fusione-black text-xs font-semibold rounded">
                      {result.type}
                    </span>
                    <div className="flex-1">
                      <div className="text-white font-medium mb-1">
                        {result.title}
                      </div>
                      <div className="text-fusione-gray-light text-sm line-clamp-2">
                        {result.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-fusione-gray text-xs text-fusione-gray-light flex items-center justify-between">
          <span>Use ↑↓ para navegar</span>
          <span>ESC para fechar</span>
        </div>
      </div>
    </div>
  );
}
