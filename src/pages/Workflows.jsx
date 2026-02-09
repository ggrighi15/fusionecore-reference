import { GitBranch } from 'lucide-react';

export default function Workflows() {
  const workflows = [
    {
      title: "Importação de Processos",
      description: "Fluxo completo de importação de dados do Smart Report com validação, normalização e auditoria",
      image: "/fusioncore_workflow_importacao.png"
    },
    {
      title: "Extração de Contratos com IA",
      description: "Processamento automático de contratos com LLM, geração de pareceres e formatação por cliente",
      image: "/fusioncore_workflow_contratos.png"
    },
    {
      title: "Auditoria e Circularização",
      description: "Ciclo completo de auditoria com geração de cartas, rastreamento de respostas e exportação auditável",
      image: "/fusioncore_workflow_auditoria.png"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-6">
            <GitBranch className="w-10 h-10 text-fusione-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            Workflows e Processos
          </h1>
          <p className="text-lg text-fusione-gray-light">
            Fluxos de trabalho principais do FusioneCore Suite com validações, automações e trilha de auditoria
          </p>
        </div>

        {/* Workflows */}
        <div className="space-y-16">
          {workflows.map((workflow, index) => (
            <section key={index} className="card">
              <h2 className="text-3xl font-bold text-fusione-lime mb-4">
                {workflow.title}
              </h2>
              <p className="text-fusione-gray-light mb-6">
                {workflow.description}
              </p>
              <img 
                src={workflow.image} 
                alt={`Workflow: ${workflow.title}`}
                className="w-full rounded-lg bg-white p-4"
              />
            </section>
          ))}
        </div>

        {/* Key Principles */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Princípios dos Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Idempotência
              </h3>
              <p className="text-fusione-gray-light">
                Todos os workflows podem ser executados múltiplas vezes sem duplicar dados ou causar inconsistências
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Auditabilidade
              </h3>
              <p className="text-fusione-gray-light">
                Cada passo é registrado em logs imutáveis com timestamp, usuário e justificativa
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Validação em Camadas
              </h3>
              <p className="text-fusione-gray-light">
                Validação de formato → Validação de negócio → Validação de integridade referencial
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Tratamento de Erros
              </h3>
              <p className="text-fusione-gray-light">
                Erros geram relatórios detalhados com linha/registro específico e sugestão de correção
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Revisão Humana
              </h3>
              <p className="text-fusione-gray-light">
                Operações críticas (IA, classificação de risco) sempre passam por aprovação humana
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Rollback Seguro
              </h3>
              <p className="text-fusione-gray-light">
                Snapshots antes de operações críticas permitem rollback completo em caso de erro
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-fusione-gray">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/modules" className="btn-secondary no-underline">
              ← Ver Módulos
            </a>
            <a href="/architecture" className="btn-primary no-underline">
              Ver Arquitetura →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
