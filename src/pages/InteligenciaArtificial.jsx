import React, { useState } from 'react';
import { Bot, Brain, Sparkles, Zap, Shield, Eye, MessageSquare, Mic } from 'lucide-react';

export default function InteligenciaArtificial() {
  const [selectedAI, setSelectedAI] = useState(null);

  const aiModules = [
    {
      id: 'eva',
      name: 'EVA',
      fullName: 'Assistente Virtual Executiva',
      icon: MessageSquare,
      description: 'Assistente de chat com IA para análise de processos e insights jurídicos',
      color: '#8FD400',
      status: 'Ativo',
      type: 'Assistente Virtual',
      capabilities: [
        'Análise de processos em linguagem natural',
        'Extração de insights jurídicos',
        'Recomendações automáticas de ações',
        'Resumos executivos de documentos',
        'Cálculos de risco e probabilidades',
        'Busca semântica na base de conhecimento'
      ],
      models: ['GPT-4', 'Claude 3.5'],
      features: {
        'Linguagem Natural': 'Compreende perguntas complexas em português',
        'Contexto Processual': 'Acessa histórico completo de processos',
        'Multi-turn': 'Mantém contexto em conversas longas',
        'Citações': 'Referencia documentos e artigos de lei'
      }
    },
    {
      id: 'ema',
      name: 'EMA',
      fullName: 'Assistente de Voz Multimodal',
      icon: Mic,
      description: 'Interface por voz para navegação e ditado de documentos',
      color: '#0072CE',
      status: 'Ativo',
      type: 'Assistente de Voz',
      capabilities: [
        'Comandos de voz para navegação',
        'Ditado de documentos jurídicos',
        'Notificações por áudio',
        'Leitura de processos e intimações',
        'Transcrição automática de reuniões',
        'Síntese de voz natural (TTS)'
      ],
      models: ['Whisper', 'ElevenLabs'],
      features: {
        'Reconhecimento': 'Whisper API (99% precisão)',
        'Síntese': 'Vozes naturais em português',
        'Comandos': 'Navegação hands-free',
        'Ditado': 'Formatação automática de petições'
      }
    },
    {
      id: 'gpt4',
      name: 'GPT-4',
      fullName: 'OpenAI GPT-4 Turbo',
      icon: Brain,
      description: 'Modelo de linguagem para análise e geração de documentos',
      color: '#8FD400',
      status: 'Integrado',
      type: 'LLM',
      capabilities: [
        'Análise de processos complexos',
        'Extração de dados de documentos',
        'Geração de pareceres executivos',
        'Classificação automática de documentos',
        'Identificação de riscos e oportunidades',
        'Comparação de versões de contratos'
      ],
      models: ['GPT-4 Turbo', 'GPT-4 Vision'],
      features: {
        'Contexto': '128K tokens (aprox. 300 páginas)',
        'Multimodal': 'Texto + imagens (OCR)',
        'Precisão': '95%+ em tarefas jurídicas',
        'Latência': '< 3s para respostas'
      }
    },
    {
      id: 'claude',
      name: 'Claude',
      fullName: 'Anthropic Claude 3.5 Sonnet',
      icon: Sparkles,
      description: 'Modelo especializado em revisão e análise técnica detalhada',
      color: '#0072CE',
      status: 'Integrado',
      type: 'LLM',
      capabilities: [
        'Revisão técnica de documentos',
        'Pareceres jurídicos detalhados',
        'Análise de riscos contratuais',
        'Comparação de versões com diff',
        'Identificação de cláusulas problemáticas',
        'Sugestões de melhorias'
      ],
      models: ['Claude 3.5 Sonnet'],
      features: {
        'Contexto': '200K tokens (aprox. 500 páginas)',
        'Precisão': 'Especializado em análise técnica',
        'Segurança': 'Constitutional AI (ética)',
        'Explicabilidade': 'Justifica todas as conclusões'
      }
    },
    {
      id: 'agentes',
      name: 'Agentes Autônomos',
      fullName: 'Sistema de Agentes Inteligentes',
      icon: Bot,
      description: 'Agentes que monitoram, atualizam e alertam automaticamente',
      color: '#8FD400',
      status: 'Ativo',
      type: 'Agentes',
      capabilities: [
        'Monitoramento contínuo de prazos',
        'Atualização automática de processos',
        'Alertas inteligentes contextuais',
        'Sugestões proativas de ações',
        'Priorização automática de tarefas',
        'Detecção de anomalias'
      ],
      models: ['GPT-4', 'Custom Agents'],
      features: {
        'Autonomia': 'Execução sem intervenção humana',
        'Aprendizado': 'Melhora com feedback',
        'Escalabilidade': 'Múltiplos agentes paralelos',
        'Auditoria': 'Todas as ações registradas'
      }
    },
    {
      id: 'rag',
      name: 'RAG Engine',
      fullName: 'Retrieval-Augmented Generation',
      icon: Zap,
      description: 'Base de conhecimento jurídica com busca semântica',
      color: '#0072CE',
      status: 'Ativo',
      type: 'RAG',
      capabilities: [
        'Embeddings de todos os documentos',
        'Busca semântica (não apenas palavras-chave)',
        'Contexto relevante para LLMs',
        'Citações precisas de fontes',
        'Atualização incremental',
        'Versionamento de conhecimento'
      ],
      models: ['text-embedding-3-large', 'pgvector'],
      features: {
        'Vetores': 'pgvector (PostgreSQL)',
        'Dimensões': '3072 (alta precisão)',
        'Busca': 'Similaridade coseno',
        'Performance': '< 100ms para queries'
      }
    },
    {
      id: 'ocr',
      name: 'OCR + IA',
      fullName: 'Extração Inteligente de Documentos',
      icon: Eye,
      description: 'Reconhecimento e extração de dados de PDFs e imagens',
      color: '#8FD400',
      status: 'Ativo',
      type: 'OCR',
      capabilities: [
        'Extração de texto de PDFs escaneados',
        'Reconhecimento de tabelas',
        'Identificação de assinaturas',
        'Validação de documentos',
        'Detecção de campos estruturados',
        'Correção automática de erros'
      ],
      models: ['Tesseract', 'GPT-4 Vision'],
      features: {
        'Precisão': '98%+ em documentos limpos',
        'Idiomas': 'Português + 100 idiomas',
        'Formatos': 'PDF, PNG, JPG, TIFF',
        'Estrutura': 'Preserva layout e formatação'
      }
    }
  ];

  const controls = [
    {
      icon: Shield,
      title: 'Controles Obrigatórios',
      items: [
        'Revisão humana antes de ações críticas',
        'Explicabilidade de todas as decisões',
        'Auditoria completa de operações de IA',
        'Limites de autonomia configuráveis',
        'Fallback para operação manual'
      ]
    },
    {
      icon: Eye,
      title: 'Monitoramento',
      items: [
        'Métricas de precisão em tempo real',
        'Detecção de drift de modelo',
        'Alertas de anomalias',
        'Dashboards de performance',
        'Logs detalhados de todas as inferências'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-fusione-navy py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Inteligência Artificial & Agentes
          </h1>
          <p className="text-fusione-gray-light text-lg">
            Camada de IA avançada com LLMs, assistentes virtuais, agentes autônomos e RAG 
            para automação inteligente de processos jurídicos.
          </p>
        </div>

        {/* AI Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiModules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedAI(module)}
                className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6 hover:border-fusione-green transition-all text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: module.color + '20', color: module.color }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="px-3 py-1 bg-fusione-green/20 text-fusione-green text-xs rounded-full">
                    {module.status}
                  </span>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-fusione-green transition-colors">
                    {module.name}
                  </h3>
                  <p className="text-fusione-gray-light text-xs">{module.fullName}</p>
                </div>
                <p className="text-fusione-gray-light text-sm mb-3">
                  {module.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-fusione-azure/20 text-fusione-azure text-xs rounded">
                    {module.type}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* AI Module Details Modal */}
        {selectedAI && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedAI(null)}>
            <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-fusione-gray-dark border-b border-fusione-gray p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: selectedAI.color + '20', color: selectedAI.color }}
                  >
                    {React.createElement(selectedAI.icon, { size: 32 })}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedAI.name}</h2>
                    <p className="text-fusione-gray-light">{selectedAI.fullName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAI(null)}
                  className="text-fusione-gray-light hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-fusione-gray-light">{selectedAI.description}</p>
                </div>

                {/* Models */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Modelos Utilizados</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAI.models.map((model, index) => (
                      <span key={index} className="px-3 py-1 bg-fusione-azure/20 text-fusione-azure rounded-full text-sm">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Capacidades</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedAI.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-fusione-green mt-1">✓</span>
                        <span className="text-fusione-gray-light">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Características Técnicas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedAI.features).map(([key, value], index) => (
                      <div key={index} className="bg-fusione-navy/50 rounded-lg p-4">
                        <div className="text-fusione-gray-light text-sm mb-1">{key}</div>
                        <div className="text-white font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-fusione-green text-fusione-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Testar {selectedAI.name}
                  </button>
                  <button className="flex-1 bg-fusione-gray-dark border border-fusione-gray text-white px-6 py-3 rounded-lg font-semibold hover:border-fusione-green transition-all">
                    Ver Documentação
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Controls Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Governança e Controles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {controls.map((control, index) => {
              const Icon = control.icon;
              return (
                <div key={index} className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-fusione-green/20 text-fusione-green">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{control.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {control.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-fusione-gray-light text-sm">
                        <span className="text-fusione-green mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-green mb-2">7</div>
            <div className="text-fusione-gray-light">Módulos de IA</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-azure mb-2">95%+</div>
            <div className="text-fusione-gray-light">Precisão Média</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-green mb-2">< 3s</div>
            <div className="text-fusione-gray-light">Latência Média</div>
          </div>
          <div className="bg-fusione-gray-dark border border-fusione-gray rounded-lg p-6">
            <div className="text-3xl font-bold text-fusione-azure mb-2">100%</div>
            <div className="text-fusione-gray-light">Auditável</div>
          </div>
        </div>
      </div>
    </div>
  );
}
