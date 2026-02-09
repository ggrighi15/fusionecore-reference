export const fusionecoreData = {
  overview: {
    title: "FusioneCore Suite",
    subtitle: "ERP Jurídico com Governança Real",
    description: "Plataforma única (web + automações) para gestão jurídica e corporativa com contencioso, contratos, auditoria, automação e IA. Sistema que faz o óbvio (cadastro, controle, relatórios) e também o que ninguém quer fazer (classificar, conferir, comparar, versionar, rastrear, justificar).",
    differentials: [
      "Rastreabilidade completa - Cada número tem origem, cada mudança tem justificativa",
      "Comparação entre períodos - 'O que mudou de janeiro para fevereiro?'",
      "Explicabilidade - 'De onde vem esse número?' → lista de processos",
      "Trilha de auditoria - Quem fez o quê, quando, por quê (imutável)"
    ]
  },

  modules: [
    {
      id: "contencioso",
      name: "Contencioso",
      icon: "Scale",
      description: "Controle completo de processos, valores, riscos, status e histórico mensal com comparação entre períodos",
      features: [
        "Cadastro completo (CNJ, partes, tribunal, classe, assunto)",
        "Classificação e governança (situação, polo, categoria, risco)",
        "Valores e atualização automática (SELIC, IPCA)",
        "Histórico mensal e comparação entre períodos",
        "Relatórios por cliente/empresa e exportações auditáveis"
      ],
      entities: ["Processo", "Parte", "Categoria", "Risco", "Escritório", "HistoricoMensal"]
    },
    {
      id: "contratos",
      name: "Contratos e Documentos",
      icon: "FileText",
      description: "Extração automática, análise estruturada, padronização e pareceres formatados por cliente",
      features: [
        "Upload drag-and-drop (PDF, DOCX, imagens, .msg)",
        "Extração estruturada com IA/LLM (partes, vigência, cláusulas)",
        "Pareceres automáticos (executivo + técnico)",
        "Templates customizados por cliente (margens, fontes, estilos)",
        "Versionamento e hash SHA-256 para integridade"
      ],
      entities: ["Documento", "PadraoDocumento"]
    },
    {
      id: "procuracoes",
      name: "Procurações",
      icon: "FileSignature",
      description: "Cadastro, controle de vigência, alertas de vencimento e repositório versionado",
      features: [
        "Cadastro completo (tipo, outorgante, outorgado, poderes)",
        "Controle de vigência e revogações",
        "Alertas automáticos de vencimento",
        "Associação a contratos/processos",
        "Repositório com versionamento e hash"
      ],
      entities: ["Procuracao"]
    },
    {
      id: "patrimonial",
      name: "Patrimonial",
      icon: "Building",
      description: "Gestão de imóveis, consórcios, operações societárias e investimentos",
      features: [
        "Cadastro de imóveis (matrícula, ônus, documentos)",
        "Operações societárias e reorganizações",
        "Gestão de consórcios (contratos, parcelas, contemplações)",
        "Vinculação com processos e contratos",
        "Histórico completo de propriedade"
      ],
      entities: ["Imovel", "Consorcio"]
    },
    {
      id: "cobrancas",
      name: "Cobranças e Demandas",
      icon: "AlertCircle",
      description: "Registro de solicitações internas, SLA por tipo e fluxo de trabalho completo",
      features: [
        "Registro de solicitações (cobrança, consultoria, análise)",
        "SLA configurável por tipo (24h, 72h, 5 dias)",
        "Fluxo: abrir → atribuir → executar → revisar → concluir",
        "Evidências e trilha completa (comentários, anexos)",
        "Aprovações e conclusões documentadas"
      ],
      entities: ["Demanda"]
    },
    {
      id: "auditoria",
      name: "Auditoria e Circularização",
      icon: "Shield",
      description: "Gestão de ciclos, cartas, evidências e exportação auditável com manifesto de faltas",
      features: [
        "Gestão de ciclos (anual, trimestral, mensal)",
        "Geração automática de cartas e controle de respostas",
        "Upload e organização de evidências",
        "Exportação com pacote completo (ZIP + manifesto)",
        "Trilha completa para auditor (logs imutáveis)"
      ],
      entities: ["CicloAuditoria", "LogAuditoria"]
    },
    {
      id: "paineis",
      name: "Painéis Interativos",
      icon: "BarChart3",
      description: "Dashboards navegáveis com drill-down, filtros e explicabilidade completa",
      features: [
        "Drill-down por clique (navegação interativa)",
        "Segmentações (situação, categoria, polo, risco, cliente)",
        "Métricas (quantidade, valores, entradas/saídas, alterações)",
        "Explicabilidade ('De onde vem esse número?')",
        "Visualizações (barras, pizza, linha, tabelas, heatmaps)"
      ],
      entities: []
    },
    {
      id: "automacao",
      name: "Automação",
      icon: "Zap",
      description: "Integração Microsoft 365, triagem de e-mails, alertas inteligentes e notificações",
      features: [
        "Leitura e classificação automática de e-mails (Outlook)",
        "Captura de anexos e indexação em dossiês",
        "Alertas inteligentes (prazos, movimentações, vencimentos)",
        "Notificações via Teams/e-mail",
        "Gestão automática de logs e outputs"
      ],
      entities: []
    }
  ],

  ia: {
    title: "IA (LLM/RAG)",
    capabilities: [
      {
        name: "RAG (Retrieval-Augmented Generation)",
        description: "Perguntas e respostas sobre o acervo com busca semântica e citação de fontes"
      },
      {
        name: "Extração Estruturada",
        description: "Parsing de contratos → JSON com identificação de cláusulas críticas"
      },
      {
        name: "Pareceres Automáticos",
        description: "Geração de parecer executivo, técnico e sumário de riscos com justificativas"
      },
      {
        name: "Classificação de Risco",
        description: "Análise de probabilidade com justificativa obrigatória e histórico"
      },
      {
        name: "Sugestões de Melhorias",
        description: "Identificação de dados faltantes, inconsistências e oportunidades de padronização"
      },
      {
        name: "Assistentes Especializados",
        description: "Assistentes por módulo com treinamento em domínio específico"
      }
    ],
    controls: [
      "Fonte citável (trechos referenciados do documento/dado)",
      "Logs completos (prompts, respostas, modelo, tokens)",
      "Redação segura (LGPD, confidencialidade, termos proibidos)",
      "Auditoria de IA (quem usou, quando, finalidade, resultado)"
    ]
  },

  integrations: [
    {
      name: "Microsoft 365",
      services: ["Outlook (e-mails)", "Teams (notificações)", "Word (templates)", "Excel (relatórios)"]
    },
    {
      name: "Banco de Dados",
      services: ["PostgreSQL (produção)", "SQL Server (compatibilidade)", "SQLite (dev/testes)"]
    },
    {
      name: "Conectores Futuros",
      services: ["DataJud/CNJ", "eproc, e-SAJ, PJe", "D4Sign", "pgvector (RAG)"]
    }
  ],

  architecture: {
    frontend: {
      name: "Frontend",
      stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS 4", "shadcn/ui", "Recharts", "Wouter"]
    },
    backend: {
      name: "Backend",
      stack: ["Node.js 22", "Express 4", "tRPC 11", "Drizzle ORM", "Superjson"]
    },
    database: {
      name: "Banco de Dados",
      stack: ["PostgreSQL", "pgvector (RAG)", "SQL Server (legado)"]
    },
    ai: {
      name: "IA/LLM",
      stack: ["OpenAI GPT-4", "RAG", "Embeddings", "Assistentes especializados"]
    },
    automation: {
      name: "Automação",
      stack: ["PowerShell", "Python (ETL)", "Microsoft Graph API"]
    }
  },

  roadmap: [
    {
      phase: 1,
      name: "Fundação",
      duration: "Mês 1-2",
      objective: "Estabelecer base técnica e módulo core",
      deliverables: [
        "Arquitetura técnica definida",
        "Modelo de dados implementado",
        "Autenticação e autorização",
        "Módulo de Processos (CRUD básico)",
        "Importação de dados (Smart Report, Excel, CSV)",
        "Dashboard básico (KPIs principais)"
      ]
    },
    {
      phase: 2,
      name: "Comparação e Auditoria",
      duration: "Mês 3-4",
      objective: "Implementar comparação de períodos e trilha de auditoria",
      deliverables: [
        "Histórico mensal (snapshots)",
        "Comparador de períodos",
        "Relatório de mudanças",
        "Trilha de auditoria completa",
        "Logs estruturados",
        "Exportações para contabilidade"
      ]
    },
    {
      phase: 3,
      name: "Documentos e IA",
      duration: "Mês 5-6",
      objective: "Módulo de documentos com extração IA",
      deliverables: [
        "Upload de documentos",
        "Extração estruturada (LLM)",
        "Pareceres automáticos",
        "Templates por cliente",
        "RAG para consultas",
        "Assistentes especializados"
      ]
    },
    {
      phase: 4,
      name: "Automação e Integrações",
      duration: "Mês 7-8",
      objective: "Automações e integrações Microsoft 365",
      deliverables: [
        "Integração Outlook (e-mails)",
        "Integração Teams (notificações)",
        "Alertas inteligentes",
        "Módulo de Procurações",
        "Módulo de Demandas Internas",
        "Circularização de Auditoria"
      ]
    },
    {
      phase: 5,
      name: "Patrimonial e Refinamentos",
      duration: "Mês 9-10",
      objective: "Módulos complementares e polimento",
      deliverables: [
        "Módulo de Imóveis",
        "Módulo de Consórcios",
        "Dashboard avançado (drill-down completo)",
        "Exportações customizadas",
        "Performance optimization",
        "Testes de carga"
      ]
    },
    {
      phase: 6,
      name: "Produção e Treinamento",
      duration: "Mês 11-12",
      objective: "Deploy em produção e capacitação",
      deliverables: [
        "Deploy em produção",
        "Migração de dados legados",
        "Treinamento de usuários",
        "Documentação completa",
        "Runbook operacional",
        "Suporte pós-go-live"
      ]
    }
  ],

  entities: [
    {
      name: "Processo",
      description: "Processo judicial ou administrativo",
      fields: ["id", "pasta", "numeroCNJ", "clienteId", "adversoId", "situacao", "polo", "categoriaId", "riscoId", "valorAnalisado", "valorAnalisadoAtualizado"]
    },
    {
      name: "Parte",
      description: "Cliente ou adverso em processo",
      fields: ["id", "tipo", "nome", "cpfCnpj", "email", "telefone", "endereco"]
    },
    {
      name: "Categoria",
      description: "Classificação macro e específica",
      fields: ["id", "codigoMacro", "codigoEspecifico", "descricaoMacro", "descricaoEspecifica", "ativo"]
    },
    {
      name: "Risco",
      description: "Nível de risco do processo",
      fields: ["id", "codigo", "descricao", "nivel", "percentual", "ativo"]
    },
    {
      name: "Escritorio",
      description: "Escritório responsável",
      fields: ["id", "nome", "cnpj", "endereco", "contato", "ativo"]
    },
    {
      name: "Documento",
      description: "Contrato, procuração, carta, parecer",
      fields: ["id", "tipo", "nomeArquivo", "caminhoS3", "hashSHA256", "dadosExtraidos", "parecerExecutivo", "parecerTecnico"]
    },
    {
      name: "PadraoDocumento",
      description: "Template de formatação por cliente",
      fields: ["id", "clienteId", "tipoDocumento", "margens", "fonte", "estilos", "cabecalho", "rodape", "assinaturaPadrao"]
    },
    {
      name: "Procuracao",
      description: "Procuração pública ou particular",
      fields: ["id", "numero", "tipo", "outorganteId", "outorgadoId", "dataEmissao", "dataVencimento", "poderes", "ativo"]
    },
    {
      name: "Imovel",
      description: "Imóvel patrimonial",
      fields: ["id", "tipo", "matricula", "endereco", "areaTotal", "onus", "gravames", "valorVenal", "valorMercado"]
    },
    {
      name: "Consorcio",
      description: "Consórcio de bem",
      fields: ["id", "administradora", "numeroContrato", "tipoBem", "valorBem", "quantidadeParcelas", "parcelasPagas", "contemplado"]
    },
    {
      name: "Demanda",
      description: "Solicitação interna",
      fields: ["id", "tipo", "titulo", "descricao", "solicitanteId", "responsavelId", "prioridade", "slaHoras", "status"]
    },
    {
      name: "CicloAuditoria",
      description: "Ciclo de auditoria/circularização",
      fields: ["id", "nome", "tipo", "dataInicio", "dataFim", "status", "cartasGeradas", "cartasEnviadas", "respostasRecebidas"]
    },
    {
      name: "HistoricoMensal",
      description: "Snapshot mensal de processo",
      fields: ["id", "processoId", "ano", "mes", "snapshot", "origemImportacao", "alteracoes"]
    },
    {
      name: "LogAuditoria",
      description: "Log de auditoria imutável",
      fields: ["id", "timestamp", "usuarioId", "acao", "entidade", "entidadeId", "camposAlterados"]
    },
    {
      name: "User",
      description: "Usuário do sistema",
      fields: ["id", "openId", "nome", "email", "role", "departamento", "ativo"]
    }
  ],

  nonFunctional: {
    security: [
      "Autenticação SSO por e-mail (Manus OAuth)",
      "Controle de acesso por perfil (RBAC)",
      "Criptografia TLS 1.3 (trânsito) e AES-256 (repouso)",
      "Auditoria de acesso e alteração (logs imutáveis)",
      "LGPD compliance (consentimento, esquecimento, portabilidade)"
    ],
    observability: [
      "Logs estruturados (evento, usuário, timestamp, diffs)",
      "Versionamento de documentos (hash SHA-256)",
      "Exportação reproduzível (determinística)",
      "Retenção configurável (1, 3, 5, 7 anos)"
    ],
    performance: [
      "Importações idempotentes (rodar de novo sem duplicar)",
      "Tratamento de erro com relatório de falhas",
      "Backups (diário incremental, semanal completo)",
      "Escalabilidade horizontal e vertical"
    ]
  },

  acceptanceCriteria: [
    "Importar um mês de dados e reproduzir totais por cliente/categoria/risco",
    "Comparar período A vs B e gerar lista de pastas alteradas com justificativas",
    "Gerar relatório para contabilidade e auditoria (resumo + detalhe)",
    "Extrair JSON de documentos e emitir parecer padrão formatado",
    "Exportar pacote completo de auditoria com manifesto de faltas",
    "Controle de acesso por perfil e log de ações críticas"
  ]
};
