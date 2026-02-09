import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle2, Database } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function Modules() {
  const [location] = useLocation();

  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const { modules } = fusionecoreData;

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Módulos do Sistema
          </h1>
          <p className="text-lg text-fusione-gray-light">
            8 módulos principais que cobrem todas as necessidades de gestão jurídica e corporativa
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-16">
          {modules.map((module, index) => (
            <div
              key={module.id}
              id={module.id}
              className="scroll-mt-20"
            >
              <div className="card">
                {/* Module Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-fusione-lime text-fusione-black text-sm font-bold rounded">
                        Módulo {index + 1}
                      </span>
                      <h2 className="text-3xl font-bold text-fusione-lime">
                        {module.name}
                      </h2>
                    </div>
                    <p className="text-fusione-gray-light text-lg">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Funcionalidades
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-fusione-lime flex-shrink-0 mt-0.5" />
                        <span className="text-fusione-gray-light text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entities */}
                {module.entities.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Database className="w-5 h-5 text-fusione-lime mr-2" />
                      Entidades Relacionadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.entities.map((entity, idx) => (
                        <a
                          key={idx}
                          href={`/data-model#${entity.toLowerCase()}`}
                          className="px-3 py-1 bg-fusione-gray border border-fusione-gray-light rounded-lg text-white text-sm hover:border-fusione-lime transition-all no-underline"
                        >
                          {entity}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a
              href="/"
              className="btn-secondary no-underline"
            >
              ← Voltar para Visão Geral
            </a>
            <a
              href="/architecture"
              className="btn-primary no-underline"
            >
              Ver Arquitetura →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
