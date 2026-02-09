import React from 'react';
import { RefreshCw, Database, FileSpreadsheet, BarChart3, Download, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SmartReportSync() {
  const features = [
    {
      icon: RefreshCw,
      title: 'Sincronização Bidirecional',
      description: 'Dados fluem entre FusioneCore e Espaider automaticamente',
      items: ['FusioneCore → Espaider', 'Espaider → FusioneCore', 'Resolução de conflitos', 'Merge automático']
    },
    {
      icon: FileSpreadsheet,
      title: 'Exportadores Múltiplos',
      description: 'Suporte a diversos formatos de exportação',
      items: ['Excel (XLSX)', 'CSV', 'JSON', 'PDF', 'Power BI datasets']
    },
    {
      icon: Database,
      title: 'Consolidação de Dados',
      description: 'Dados de múltiplas fontes unificados',
      items: ['Validação e limpeza', 'Deduplicação', 'Enriquecimento com IA', 'Versionamento']
    },
    {
      icon: BarChart3,
      title: 'Integração Power BI',
      description: 'Dashboards e relatórios em tempo real',
      items: ['Datasets atualizados', 'Refresh automático', 'Métricas customizadas', 'Drill-down completo']
    }
  ];

  const scripts = [
    {
      name: 'export_dados.py',
      type: 'Python',
      description: 'Exporta dados do FusioneCore para Excel/CSV/JSON',
      features: [
        'Múltiplos formatos de saída',
        'Fallback quando API não responde',
        'Consolidação de múltiplas bases',
        'Validação de integridade'
      ],
      usage: 'python scripts/export_dados.py --format xlsx --output relatorio.xlsx'
    },
    {
      name: 'generate_processes_from_excels.py',
      type: 'Python',
      description: 'Lê arquivos Excel legados e gera JSON para importação',
      features: [
        'Normalização de dados',
        'Validação de campos',
        'Mapeamento automático',
        'Relatório de erros'
      ],
      usage: 'python scripts/generate_processes_from_excels.py --input data/*.xlsx'
    },
    {
      name: 'apply_supabase_schema.py',
      type: 'Python',
      description: 'Aplica schema no Supabase e executa migrações',
      features: [
        'Migrações automáticas',
        'Seed data',
        'Rollback support',
        'Validação de schema'
      ],
      usage: 'python scripts/apply_supabase_schema.py --env production'
    },
    {
      name: 'start-ui.ps1',
      type: 'PowerShell',
      description: 'Inicia interface do FusioneCore e simula login no Espaider',
      features: [
        'Login automático',
        'Navegação por módulos',
        'Exposição de coleções',
        'Captura de interações'
      ],
      usage: 'powershell -ExecutionPolicy Bypass -File start-ui.ps1'
    },
    {
      name: 'fc_modo_c.ps1',
      type: 'PowerShell',
      description: 'Modo de configuração e setup inicial',
      features: [
        'Setup inicial',
        'Variáveis de ambiente',
        'Testes de conectividade',
        'Diagnóstico de problemas'
      ],
      usage: 'powershell -ExecutionPolicy Bypass -File fc_modo_c.ps1'
    }
  ];

  const workflow = [
    { step: 1, title: 'Captura', desc: 'Scripts PowerShell capturam dados do Espaider', icon: Upload, color: '#8FD400' },
    { step: 2, title: 'Transformação', desc: 'Scripts Python normalizam e validam', icon: RefreshCw, color: '#0072CE' },
    { step: 3, title: 'Consolidação', desc: 'Dados são unificados no FusioneCore', icon: Database, color: '#8FD400' },
    { step: 4, title: 'Exportação', desc: 'Relatórios gerados em múltiplos formatos', icon: Download, color: '#0072CE' }
  ];

  const stats = [
    { label: 'Sincronizações/Dia', value: '24', color: '#8FD400' },
    { label: 'Formatos Suportados', value: '5', color: '#0072CE' },
    { label: 'Taxa de Sucesso', value: '99.8%', color: '#8FD400' },
    { label: 'Tempo Médio', value: '< 30s', color: '#0072CE' }
  ];

  return (
    <div className="min-h-screen bg-fusione-navy py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Smart Report Sync
          </h1>
          <p className="text-fusione-gray-light text-lg">
            Módulo de sincronização inteligente entre FusioneCore e Espaider, com exportação 
            automática de relatórios e integração com Power BI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-fusione-green/20 text-fusione-green">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-fusione-gray-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-fusione-gray-light text-sm">
                      <CheckCircle2 size={16} className="text-fusione-green mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Workflow */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Fluxo de Sincronização</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: item.color + '20', color: item.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="text-fusione-gray-light text-sm mb-2">Passo {item.step}</div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-fusione-gray-light text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scripts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Scripts de Automação</h2>
          <div className="space-y-4">
            {scripts.map((script, index) => (
              <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{script.name}</h3>
                      <span className="px-2 py-1 bg-fusione-azure/20 text-fusione-azure text-xs rounded">
                        {script.type}
                      </span>
                    </div>
                    <p className="text-fusione-gray-light text-sm">{script.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {script.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-fusione-green mt-0.5 flex-shrink-0" />
                      <span className="text-fusione-gray-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-xs mb-2">Uso:</div>
                  <code className="text-fusione-green text-sm">{script.usage}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Espaider Integration */}
        <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-fusione-azure/20 text-fusione-azure">
              <AlertCircle size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Integração com Espaider</h3>
              <p className="text-fusione-gray-light mb-4">
                O Espaider (v7.0.184.10, Quellon v7.0.22.79) é o sistema legado usado como referência 
                de funcionalidade. O Smart Report Sync mantém ambos os sistemas sincronizados enquanto 
                a migração completa para o FusioneCore é realizada.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Versão Espaider</div>
                  <div className="text-white font-semibold">v7.0.184.10</div>
                </div>
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Framework</div>
                  <div className="text-white font-semibold">Quellon v7.0.22.79</div>
                </div>
                <div className="bg-fusione-navy/50 rounded-lg p-4">
                  <div className="text-fusione-gray-light text-sm mb-1">Status</div>
                  <div className="text-fusione-green font-semibold">Sincronizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-fusione-gray-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
