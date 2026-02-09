import { Brain, Shield, CheckCircle2 } from 'lucide-react';
import { fusionecoreData } from '../data/content';

export default function AI() {
  const { ia } = fusionecoreData;

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-fusione-lime rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-fusione-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fusione-lime mb-6">
            {ia.title}
          </h1>
          <p className="text-lg text-fusione-gray-light">
            Inteligência artificial integrada com controles obrigatórios de governança e auditoria
          </p>
        </div>

        {/* Capabilities */}
        <section id="capabilities" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Capacidades de IA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ia.capabilities.map((capability, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-fusione-lime rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-fusione-black font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {capability.name}
                    </h3>
                    <p className="text-fusione-gray-light">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Controls */}
        <section className="mb-16">
          <div className="card bg-fusione-gray-dark border-2 border-fusione-lime">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-fusione-lime" />
              <h2 className="text-3xl font-bold text-fusione-lime">
                Controles Obrigatórios
              </h2>
            </div>
            <p className="text-fusione-gray-light mb-6">
              Todos os usos de IA no FusioneCore Suite são governados por controles rigorosos de segurança, auditoria e compliance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ia.controls.map((control, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-fusione-lime flex-shrink-0 mt-0.5" />
                  <span className="text-white">{control}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-fusione-lime mb-8">
            Casos de Uso Principais
          </h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Extração de Contratos
              </h3>
              <p className="text-fusione-gray-light mb-4">
                Upload de PDF/DOCX → LLM extrai partes, vigência, cláusulas críticas, obrigações → JSON estruturado → Parecer automático formatado por cliente
              </p>
              <div className="px-4 py-3 bg-fusione-gray rounded-lg">
                <code className="text-fusione-lime text-sm">
                  Input: contrato.pdf → Output: &#123; partes, vigencia, clausulas, risco, parecer &#125;
                </code>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                RAG para Consultas
              </h3>
              <p className="text-fusione-gray-light mb-4">
                Usuário pergunta "Quais processos têm risco provável acima de R$ 1M?" → RAG busca em documentos vetorizados → Resposta com citação de fontes
              </p>
              <div className="px-4 py-3 bg-fusione-gray rounded-lg">
                <code className="text-fusione-lime text-sm">
                  Query: "processos risco provável &gt; 1M" → Resultados: [Processo A, B, C] + trechos citados
                </code>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Classificação de Risco
              </h3>
              <p className="text-fusione-gray-light mb-4">
                LLM analisa processo → Classifica como Remoto/Possível/Provável → Gera justificativa obrigatória → Revisão humana antes de salvar
              </p>
              <div className="px-4 py-3 bg-fusione-gray rounded-lg">
                <code className="text-fusione-lime text-sm">
                  Análise → Risco: "Provável" → Justificativa: "Jurisprudência desfavorável + valor elevado"
                </code>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-3">
                Triagem de E-mails
              </h3>
              <p className="text-fusione-gray-light mb-4">
                E-mail recebido → LLM classifica assunto e urgência → Roteamento automático para responsável → Captura anexos → Cria tarefa se necessário
              </p>
              <div className="px-4 py-3 bg-fusione-gray rounded-lg">
                <code className="text-fusione-lime text-sm">
                  E-mail → Classificação: "Processo urgente" → Rota: Equipe Contencioso → Tarefa criada
                </code>
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
