import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { Database, Table } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function DataModel() {
  const [location] = useLocation();
  const { entities } = fusionecoreData;

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
            <Database className="w-10 h-10 text-fusione-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Modelo de Dados
          </h1>
          <p className="text-lg text-fusione-gray-light">
            15 entidades principais que compõem o modelo de dados do FusioneCore Suite
          </p>
        </div>

        {/* ER Diagram */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-fusione-lime mb-6">
              Diagrama Entidade-Relacionamento (ER)
            </h2>
            <img 
              src="/fusioncore_er_diagram.png" 
              alt="Diagrama ER do FusioneCore Suite"
              className="w-full rounded-lg bg-white p-4"
            />
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-4">
              Navegação Rápida
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {entities.map((entity) => (
                <a
                  key={entity.name}
                  href={`#${entity.name.toLowerCase()}`}
                  className="px-3 py-2 bg-fusione-gray rounded text-white text-sm hover:bg-fusione-lime hover:text-fusione-black transition-all text-center no-underline"
                >
                  {entity.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Entities */}
        <div className="space-y-8">
          {entities.map((entity, index) => (
            <div
              key={entity.name}
              id={entity.name.toLowerCase()}
              className="scroll-mt-20"
            >
              <div className="card">
                {/* Entity Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Table className="w-6 h-6 text-fusione-lime" />
                      <h2 className="text-2xl font-bold text-fusione-lime">
                        {entity.name}
                      </h2>
                    </div>
                    <p className="text-fusione-gray-light">
                      {entity.description}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-fusione-lime text-fusione-black text-sm font-bold rounded">
                    {index + 1}
                  </span>
                </div>

                {/* Fields */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Campos Principais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {entity.fields.map((field, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 bg-fusione-gray rounded text-fusione-gray-light text-sm font-mono"
                      >
                        {field}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relationships Info */}
        <section className="mt-16">
          <div className="card bg-fusione-gray-dark border-2 border-fusione-lime">
            <h2 className="text-2xl font-bold text-fusione-lime mb-6">
              Relacionamentos Principais
            </h2>
            <div className="space-y-4 text-fusione-gray-light">
              <div className="flex items-start space-x-3">
                <span className="text-fusione-lime mt-1">•</span>
                <p>
                  <strong className="text-white">Processo ↔ Parte:</strong> Relação N:N (um processo tem múltiplas partes, uma parte pode estar em múltiplos processos)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-fusione-lime mt-1">•</span>
                <p>
                  <strong className="text-white">Processo → Categoria/Risco/Escritório:</strong> Relação N:1 (muitos processos para uma categoria/risco/escritório)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-fusione-lime mt-1">•</span>
                <p>
                  <strong className="text-white">Documento → PadraoDocumento:</strong> Relação N:1 (muitos documentos usam um padrão)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-fusione-lime mt-1">•</span>
                <p>
                  <strong className="text-white">HistoricoMensal → Processo:</strong> Relação N:1 (múltiplos snapshots mensais para um processo)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-fusione-lime mt-1">•</span>
                <p>
                  <strong className="text-white">LogAuditoria → User:</strong> Relação N:1 (múltiplos logs para um usuário)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Princípios de Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Rastreabilidade
              </h3>
              <p className="text-fusione-gray-light">
                Todas as entidades possuem campos de auditoria (criadoEm, criadoPor, atualizadoEm, atualizadoPor) para rastreamento completo
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Versionamento
              </h3>
              <p className="text-fusione-gray-light">
                Documentos e configurações críticas possuem versionamento com hash SHA-256 para integridade e histórico
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Normalização
              </h3>
              <p className="text-fusione-gray-light">
                Modelo normalizado (3NF) para evitar redundância, com tabelas referenciais (Categoria, Risco, Escritório)
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Extensibilidade
              </h3>
              <p className="text-fusione-gray-light">
                Campo metadata (JSON) em entidades principais permite extensão sem alteração de schema
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/roadmap" className="btn-secondary no-underline">
              ← Ver Roadmap
            </a>
            <a href="/" className="btn-primary no-underline">
              Voltar ao Início →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
