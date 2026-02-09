import React, { useState } from 'react';
import { Scale, FileText, Gavel, Building2, Briefcase, BookOpen, Search } from 'lucide-react';

export default function IntegracaoJuridica() {
  const [selectedSystem, setSelectedSystem] = useState(null);

  const systems = [
    {
      id: 'datajud',
      name: 'DataJud',
      icon: Scale,
      description: 'Base Nacional de Dados do Poder Judiciário (CNJ)',
      color: '#8FD400',
      status: 'Integrado',
      features: [
        'Consulta de processos unificada',
        'Estatísticas oficiais do CNJ',
        'Dados de todos os tribunais brasileiros',
        'API REST oficial'
      ],
      endpoints: [
        { method: 'GET', path: '/api/v1/processos/{numero}', desc: 'Consulta processo' },
        { method: 'GET', path: '/api/v1/tribunais', desc: 'Lista tribunais' },
        { method: 'GET', path: '/api/v1/movimentacoes/{processo}', desc: 'Movimentações' }
      ],
      auth: 'API Key',
      rateLimit: '100 req/min',
      url: 'https://api-publica.datajud.cnj.jus.br'
    },
    {
      id: 'dje',
      name: 'DJE',
      icon: FileText,
      description: 'Diário de Justiça Eletrônico',
      color: '#0072CE',
      status: 'Integrado',
      features: [
        'Captura automática de publicações',
        'Parsing de intimações',
        'Alertas automáticos de prazos',
        'Histórico de publicações'
      ],
      endpoints: [
        { method: 'GET', path: '/scraper/publicacoes', desc: 'Lista publicações do dia' },
        { method: 'GET', path: '/scraper/intimacoes/{cpf}', desc: 'Intimações por CPF' },
        { method: 'POST', path: '/scraper/alertas', desc: 'Configurar alertas' }
      ],
      auth: 'Scraping (Selenium)',
      rateLimit: 'N/A (scraping)',
      url: 'https://dje.tjsp.jus.br'
    },
    {
      id: 'eproc',
      name: 'eProc',
      icon: Gavel,
      description: 'Sistema de Processo Eletrônico dos TRFs',
      color: '#8FD400',
      status: 'Integrado',
      features: [
        'Consulta de processos federais',
        'Download de petições',
        'Acompanhamento processual',
        'Movimentações em tempo real'
      ],
      endpoints: [
        { method: 'GET', path: '/consulta/processo/{numero}', desc: 'Consulta processo' },
        { method: 'GET', path: '/download/peticao/{id}', desc: 'Download petição' },
        { method: 'GET', path: '/movimentacoes/{processo}', desc: 'Movimentações' }
      ],
      auth: 'Certificado Digital',
      rateLimit: '50 req/min',
      url: 'https://eproc.jfpr.jus.br'
    },
    {
      id: 'esaj',
      name: 'eSAJ',
      icon: Building2,
      description: 'Sistema de Automação da Justiça (TJSP)',
      color: '#0072CE',
      status: 'Integrado',
      features: [
        'Consulta de processos do TJSP',
        'Publicações e intimações',
        'Movimentações processuais',
        'Andamentos completos'
      ],
      endpoints: [
        { method: 'GET', path: '/cpopg/search', desc: 'Busca processo' },
        { method: 'GET', path: '/cpopg/show', desc: 'Detalhes do processo' },
        { method: 'GET', path: '/cposg/movimentacoes', desc: 'Movimentações' }
      ],
      auth: 'Scraping (Playwright)',
      rateLimit: 'N/A (scraping)',
      url: 'https://esaj.tjsp.jus.br'
    },
    {
      id: 'pje',
      name: 'PJe',
      icon: Briefcase,
      description: 'Processo Judicial Eletrônico (Multi-Tribunal)',
      color: '#8FD400',
      status: 'Integrado',
      features: [
        'Peticionamento eletrônico',
        'Consulta processual',
        'Usado por diversos tribunais',
        'API oficial disponível'
      ],
      endpoints: [
        { method: 'GET', path: '/api/processos/{numero}', desc: 'Consulta processo' },
        { method: 'POST', path: '/api/peticionar', desc: 'Protocolar petição' },
        { method: 'GET', path: '/api/intimacoes', desc: 'Listar intimações' }
      ],
      auth: 'Certificado Digital + API Key',
      rateLimit: '60 req/min',
      url: 'https://pje.jus.br'
    },
    {
      id: 'projudi',
      name: 'PROJUDI',
      icon: BookOpen,
      description: 'Sistema usado por TJ-AC, TJ-PR, TJ-SC, TJ-TO',
      color: '#0072CE',
      status: 'Integrado',
      features: [
        'Consulta de processos',
        'Movimentações',
        'Publicações',
        'Suporte a múltiplos estados'
      ],
      endpoints: [
        { method: 'GET', path: '/consulta/processo', desc: 'Consulta processo' },
        { method: 'GET', path: '/consulta/movimentacoes', desc: 'Movimentações' },
        { method: 'GET', path: '/consulta/publicacoes', desc: 'Publicações' }
      ],
      auth: 'Login + Session',
      rateLimit: '30 req/min',
      url: 'https://projudi.tjpr.jus.br'
    },
    {
      id: 'jusbr',
      name: 'Jus.br',
      icon: Search,
      description: 'Plataforma de Consulta Unificada',
      color: '#8FD400',
      status: 'Integrado',
      features: [
        'Agregador de múltiplos tribunais',
        'Busca por CPF/CNPJ',
        'Histórico processual completo',
        'API REST moderna'
      ],
      endpoints: [
        { method: 'GET', path: '/processos/buscar', desc: 'Busca por CPF/CNPJ' },
        { method: 'GET', path: '/processos/{numero}', desc: 'Detalhes do processo' },
        { method: 'GET', path: '/publicacoes', desc: 'Publicações recentes' }
      ],
      auth: 'OAuth 2.0',
      rateLimit: '120 req/min',
      url: 'https://api.jus.br/v1'
    }
  ];

  return (
    <div className="min-h-screen bg-fusione-navy py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Integrações Jurídicas
          </h1>
          <p className="text-fusione-gray-light text-lg">
            7 sistemas jurídicos brasileiros integrados ao FusioneCore para consulta processual, 
            captura de publicações e acompanhamento em tempo real.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <button
                key={system.id}
                onClick={() => setSelectedSystem(system)}
                className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6 hover:border-fusione-green transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: system.color + '20', color: system.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="px-3 py-1 bg-fusione-green/20 text-fusione-green text-xs rounded-full">
                    {system.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-fusione-green transition-colors">
                  {system.name}
                </h3>
                <p className="text-fusione-gray-light text-sm">
                  {system.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* System Details Modal */}
        {selectedSystem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSystem(null)}>
            <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-fusione-gray-dark border-b border-fusione-gray p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: selectedSystem.color + '20', color: selectedSystem.color }}
                  >
                    {React.createElement(selectedSystem.icon, { size: 32 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedSystem.name}</h2>
                    <p className="text-fusione-gray-light">{selectedSystem.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="text-fusione-gray-light hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Funcionalidades</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedSystem.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-fusione-green mt-1">✓</span>
                        <span className="text-fusione-gray-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-fusione-navy/50 rounded-lg p-4">
                    <div className="text-fusione-gray-light text-sm mb-1">Autenticação</div>
                    <div className="text-white font-semibold">{selectedSystem.auth}</div>
                  </div>
                  <div className="bg-fusione-navy/50 rounded-lg p-4">
                    <div className="text-fusione-gray-light text-sm mb-1">Rate Limit</div>
                    <div className="text-white font-semibold">{selectedSystem.rateLimit}</div>
                  </div>
                  <div className="bg-fusione-navy/50 rounded-lg p-4">
                    <div className="text-fusione-gray-light text-sm mb-1">Status</div>
                    <div className="text-fusione-green font-semibold">{selectedSystem.status}</div>
                  </div>
                </div>

                {/* API Endpoints */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Endpoints Principais</h3>
                  <div className="space-y-2">
                    {selectedSystem.endpoints.map((endpoint, index) => (
                      <div key={index} className="bg-fusione-navy/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span 
                            className="px-2 py-1 rounded text-xs font-semibold"
                            style={{ 
                              backgroundColor: endpoint.method === 'GET' ? '#0072CE20' : '#8FD40020',
                              color: endpoint.method === 'GET' ? '#0072CE' : '#8FD400'
                            }}
                          >
                            {endpoint.method}
                          </span>
                          <code className="text-fusione-gray-light text-sm">{endpoint.path}</code>
                        </div>
                        <p className="text-fusione-gray-light text-sm">{endpoint.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Base URL */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Base URL</h3>
                  <div className="bg-fusione-navy/50 rounded-lg p-4">
                    <code className="text-fusione-azure">{selectedSystem.url}</code>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-fusione-green text-fusione-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Testar Conexão
                  </button>
                  <button className="flex-1 bg-fusione-gray-dark border border-fusione-gray text-white px-6 py-3 rounded-lg font-semibold hover:border-fusione-green transition-all">
                    Ver Documentação
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integration Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-green mb-2">7</div>
            <div className="text-fusione-gray-light">Sistemas Integrados</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-azure mb-2">99.9%</div>
            <div className="text-fusione-gray-light">Uptime Médio</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-green mb-2">24/7</div>
            <div className="text-fusione-gray-light">Monitoramento</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-azure mb-2">< 2s</div>
            <div className="text-fusione-gray-light">Tempo de Resposta</div>
          </div>
        </div>
      </div>
    </div>
  );
}
