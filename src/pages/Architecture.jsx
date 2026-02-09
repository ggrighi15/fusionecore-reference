import { Layers, Server, Database, Cpu, Cog } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function Architecture() {
  const { architecture, integrations, nonFunctional } = fusionecoreData;

  const architectureLayers = [
    { ...architecture.frontend, icon: Layers, color: 'bg-blue-500' },
    { ...architecture.backend, icon: Server, color: 'bg-green-500' },
    { ...architecture.database, icon: Database, color: 'bg-purple-500' },
    { ...architecture.ai, icon: Cpu, color: 'bg-orange-500' },
    { ...architecture.automation, icon: Cog, color: 'bg-pink-500' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Arquitetura do Sistema
          </h1>
          <p className="text-lg text-fusione-gray-light">
            Stack tecnológico moderno, escalável e com foco em governança e auditoria
          </p>
        </div>

        {/* Architecture Layers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Camadas da Arquitetura
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureLayers.map((layer, index) => {
              const IconComponent = layer.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${layer.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {layer.stack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 bg-fusione-gray rounded text-fusione-gray-light text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Integrações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-white mb-4">
                  {integration.name}
                </h3>
                <ul className="space-y-2">
                  {integration.services.map((service, idx) => (
                    <li key={idx} className="text-fusione-gray-light text-sm flex items-start">
                      <span className="text-fusione-lime mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Non-Functional Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Requisitos Não-Funcionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Security */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">
                Segurança e LGPD
              </h3>
              <ul className="space-y-2">
                {nonFunctional.security.map((item, idx) => (
                  <li key={idx} className="text-fusione-gray-light text-sm flex items-start">
                    <span className="text-fusione-lime mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Observability */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">
                Observabilidade
              </h3>
              <ul className="space-y-2">
                {nonFunctional.observability.map((item, idx) => (
                  <li key={idx} className="text-fusione-gray-light text-sm flex items-start">
                    <span className="text-fusione-lime mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">
                Performance
              </h3>
              <ul className="space-y-2">
                {nonFunctional.performance.map((item, idx) => (
                  <li key={idx} className="text-fusione-gray-light text-sm flex items-start">
                    <span className="text-fusione-lime mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Diagrama de Arquitetura
          </h2>
          <div className="card">
            <img 
              src="/fusioncore_architecture.png" 
              alt="Diagrama de Arquitetura do FusioneCore Suite"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Data Flow Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Fluxo de Dados
          </h2>
          <div className="card">
            <img 
              src="/fusioncore_dataflow.png" 
              alt="Diagrama de Fluxo de Dados do FusioneCore Suite"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/modules" className="btn-secondary no-underline">
              ← Ver Módulos
            </a>
            <a href="/ai" className="btn-primary no-underline">
              IA & Automação →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
