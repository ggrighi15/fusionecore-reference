import { Database, Shield, Zap, Cloud, Lock, Bell } from 'lucide-react';

export default function Supabase() {
  const features = [
    {
      icon: Database,
      title: "PostgreSQL + pgvector",
      description: "Banco de dados relacional completo com suporte a vetores para RAG/IA",
      benefits: [
        "Queries SQL completas e performáticas",
        "pgvector para embeddings e busca semântica",
        "Índices otimizados para grandes volumes",
        "Backup automático e point-in-time recovery"
      ]
    },
    {
      icon: Shield,
      title: "Row Level Security (RLS)",
      description: "Segurança em nível de linha com políticas declarativas",
      benefits: [
        "Isolamento de dados por cliente/empresa",
        "Políticas baseadas em JWT claims",
        "Auditoria automática de acesso",
        "Compliance LGPD facilitado"
      ]
    },
    {
      icon: Lock,
      title: "Supabase Auth",
      description: "Autenticação completa com múltiplos provedores",
      benefits: [
        "OAuth com Microsoft 365, Google, etc.",
        "Magic links e autenticação passwordless",
        "MFA (Multi-Factor Authentication)",
        "Session management automático"
      ]
    },
    {
      icon: Cloud,
      title: "Supabase Storage",
      description: "Armazenamento de arquivos com CDN global",
      benefits: [
        "Upload direto do frontend (signed URLs)",
        "Transformação de imagens on-the-fly",
        "CDN global para baixa latência",
        "Políticas de acesso por RLS"
      ]
    },
    {
      icon: Bell,
      title: "Realtime Subscriptions",
      description: "Notificações em tempo real via WebSocket",
      benefits: [
        "Atualização automática de dashboards",
        "Notificações de mudanças em processos",
        "Colaboração em tempo real",
        "Baixa latência (<100ms)"
      ]
    },
    {
      icon: Zap,
      title: "Edge Functions",
      description: "Serverless functions na edge com Deno",
      benefits: [
        "Execução próxima ao usuário",
        "Integração com LLMs e APIs externas",
        "Scheduled jobs (cron)",
        "TypeScript nativo"
      ]
    }
  ];

  const useCases = [
    {
      title: "Módulo de Processos",
      implementation: "PostgreSQL para dados estruturados + RLS para isolamento por cliente + Realtime para notificações de mudanças"
    },
    {
      title: "Módulo de Contratos",
      implementation: "Storage para PDFs + pgvector para RAG + Edge Functions para extração com LLM"
    },
    {
      title: "Auditoria",
      implementation: "Logs imutáveis em tabela append-only + RLS para acesso restrito + Backup automático"
    },
    {
      title: "Dashboards",
      implementation: "Views materializadas para agregações + Realtime para atualização automática + Cache em Edge"
    }
  ];

  const migration = [
    {
      step: 1,
      title: "Setup Inicial",
      tasks: [
        "Criar projeto no Supabase",
        "Configurar variáveis de ambiente",
        "Instalar @supabase/supabase-js",
        "Configurar cliente Supabase"
      ]
    },
    {
      step: 2,
      title: "Migração de Schema",
      tasks: [
        "Exportar schema atual (Drizzle)",
        "Converter para migrations Supabase",
        "Executar migrations no Supabase",
        "Validar integridade referencial"
      ]
    },
    {
      step: 3,
      title: "Configuração de RLS",
      tasks: [
        "Criar políticas por tabela",
        "Testar isolamento de dados",
        "Configurar roles e permissões",
        "Documentar políticas"
      ]
    },
    {
      step: 4,
      title: "Migração de Dados",
      tasks: [
        "Exportar dados atuais",
        "Importar para Supabase (pg_dump/restore)",
        "Validar integridade dos dados",
        "Criar snapshots de backup"
      ]
    },
    {
      step: 5,
      title: "Integração de Storage",
      tasks: [
        "Criar buckets no Supabase Storage",
        "Migrar arquivos de S3 para Supabase",
        "Configurar políticas de acesso",
        "Atualizar URLs no banco"
      ]
    },
    {
      step: 6,
      title: "Realtime e Edge Functions",
      tasks: [
        "Configurar subscriptions Realtime",
        "Migrar automações para Edge Functions",
        "Testar latência e performance",
        "Deploy em produção"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-6">
            <Database className="w-10 h-10 text-fusione-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Integração Supabase
          </h1>
          <p className="text-lg text-fusione-gray-light">
            Backend-as-a-Service completo com PostgreSQL, Auth, Storage, Realtime e Edge Functions
          </p>
        </div>

        {/* Integration Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Arquitetura com Supabase
          </h2>
          <div className="card">
            <img 
              src="/fusioncore_supabase_integration.png" 
              alt="Diagrama de Integração Supabase"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Recursos do Supabase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-fusione-lime rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-fusione-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-fusione-gray-light mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-fusione-gray-light text-sm flex items-start">
                        <span className="text-fusione-lime mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Casos de Uso por Módulo
          </h2>
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-fusione-gray-light">
                  {useCase.implementation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Plan */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Plano de Migração
          </h2>
          <div className="space-y-6">
            {migration.map((phase) => (
              <div key={phase.step} className="card relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-fusione-lime rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-fusione-black font-bold text-xl">
                    {phase.step}
                  </span>
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <li key={idx} className="text-fusione-gray-light flex items-start">
                        <span className="text-fusione-lime mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="mb-16">
          <div className="card bg-fusione-gray-dark border-2 border-fusione-lime">
            <h2 className="text-2xl font-bold text-fusione-lime mb-6">
              Por Que Supabase?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vantagens Técnicas
                </h3>
                <ul className="space-y-2 text-fusione-gray-light">
                  <li>✓ PostgreSQL completo (não limitado)</li>
                  <li>✓ pgvector nativo para RAG/IA</li>
                  <li>✓ Realtime sem infraestrutura adicional</li>
                  <li>✓ Edge Functions próximas ao usuário</li>
                  <li>✓ Backup automático e disaster recovery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vantagens de Negócio
                </h3>
                <ul className="space-y-2 text-fusione-gray-light">
                  <li>✓ Redução de custos operacionais</li>
                  <li>✓ Escalabilidade automática</li>
                  <li>✓ Time-to-market mais rápido</li>
                  <li>✓ Menos código de infraestrutura</li>
                  <li>✓ Compliance LGPD facilitado</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/architecture" className="btn-secondary no-underline">
              ← Ver Arquitetura
            </a>
            <a href="/roadmap" className="btn-primary no-underline">
              Ver Roadmap →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
