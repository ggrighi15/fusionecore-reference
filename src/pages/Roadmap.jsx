import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function Roadmap() {
  const [location] = useLocation();
  const { roadmap } = fusionecoreData;

  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10 text-fusione-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Roadmap de Implementação
          </h1>
          <p className="text-lg text-fusione-gray-light">
            6 fases em 12 meses para implementação completa do FusioneCore Suite
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {roadmap.map((phase, index) => (
              <div
                key={phase.phase}
                id={`phase-${phase.phase}`}
                className="scroll-mt-20"
              >
                <div className="card relative">
                  {/* Phase Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-fusione-lime rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-fusione-black font-bold text-2xl">
                      {phase.phase}
                    </span>
                  </div>

                  <div className="pl-16">
                    {/* Phase Header */}
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {phase.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-fusione-gray-light">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{phase.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-fusione-lime">•</span>
                          <span>{phase.objective}</span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="text-xl font-semibold text-fusione-lime mb-4">
                        Entregáveis
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-fusione-lime flex-shrink-0 mt-0.5" />
                            <span className="text-fusione-gray-light text-sm">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < roadmap.length - 1 && (
                    <div className="absolute left-7 -bottom-12 w-0.5 h-12 bg-fusione-lime"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <section className="mt-16 max-w-5xl mx-auto">
          <div className="card bg-fusione-gray-dark border-2 border-fusione-lime">
            <h2 className="text-2xl font-bold text-fusione-lime mb-6">
              Resumo do Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-fusione-lime mb-2">
                  12
                </div>
                <div className="text-fusione-gray-light">
                  Meses de Implementação
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fusione-lime mb-2">
                  6
                </div>
                <div className="text-fusione-gray-light">
                  Fases Principais
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-fusione-lime mb-2">
                  35+
                </div>
                <div className="text-fusione-gray-light">
                  Entregáveis Totais
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Próximos Passos Imediatos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                1. Aprovação do Escopo
              </h3>
              <p className="text-fusione-gray-light">
                Revisar e aprovar a documentação completa do FusioneCore Suite
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                2. Definição de Prioridades
              </h3>
              <p className="text-fusione-gray-light">
                Identificar módulos críticos para MVP e ordem de implementação
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                3. Alocação de Recursos
              </h3>
              <p className="text-fusione-gray-light">
                Definir equipe interna/externa, budget e timeline desejada
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                4. Preparação de Dados
              </h3>
              <p className="text-fusione-gray-light">
                Mapear dados legados, formatos e volume para migração
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/ai" className="btn-secondary no-underline">
              ← IA & Automação
            </a>
            <a href="/data-model" className="btn-primary no-underline">
              Ver Modelo de Dados →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
