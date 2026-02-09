// Mock data for FusioneCore Suite demonstration

export const mockPessoas = [
  {
    id: 1,
    tipo: 'fisica',
    nome: 'João Silva',
    cpfCnpj: '123.456.789-00',
    email: 'joao.silva@email.com',
    telefone: '(11) 3456-7890',
    celular: '(11) 98765-4321',
    cidade: 'São Paulo',
    estado: 'SP',
    ativo: true
  },
  {
    id: 2,
    tipo: 'juridica',
    nome: 'Empresa ABC Ltda',
    nomeFantasia: 'ABC Corp',
    cpfCnpj: '12.345.678/0001-90',
    email: 'contato@empresaabc.com.br',
    telefone: '(11) 3333-4444',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    ativo: true
  },
  {
    id: 3,
    tipo: 'fisica',
    nome: 'Maria Santos',
    cpfCnpj: '987.654.321-00',
    email: 'maria.santos@email.com',
    telefone: '(31) 2222-3333',
    celular: '(31) 99999-8888',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    ativo: true
  },
  {
    id: 4,
    tipo: 'juridica',
    nome: 'Banco XYZ S.A.',
    nomeFantasia: 'Banco XYZ',
    cpfCnpj: '98.765.432/0001-10',
    email: 'contato@bancoxyz.com.br',
    telefone: '(11) 4000-5000',
    cidade: 'São Paulo',
    estado: 'SP',
    ativo: true
  }
];

export const mockInstituicoes = [
  {
    id: 1,
    tipo: 'tribunal',
    nome: 'Tribunal de Justiça de São Paulo',
    sigla: 'TJSP',
    esfera: 'estadual',
    uf: 'SP',
    cidade: 'São Paulo',
    ativo: true
  },
  {
    id: 2,
    tipo: 'escritorio',
    nome: 'Silva & Associados Advocacia',
    sigla: 'S&A',
    cnpj: '11.222.333/0001-44',
    uf: 'RJ',
    cidade: 'Rio de Janeiro',
    ativo: true
  },
  {
    id: 3,
    tipo: 'banco',
    nome: 'Banco do Brasil S.A.',
    sigla: 'BB',
    cnpj: '00.000.000/0001-91',
    codigoExterno: '001',
    uf: 'DF',
    cidade: 'Brasília',
    ativo: true
  },
  {
    id: 4,
    tipo: 'orgao_publico',
    nome: 'Instituto Nacional da Propriedade Industrial',
    sigla: 'INPI',
    esfera: 'federal',
    uf: 'RJ',
    cidade: 'Rio de Janeiro',
    ativo: true
  }
];

export const mockProcessos = [
  {
    id: 1,
    pasta: '001/2024',
    numeroCnj: '1234567-89.2024.8.26.0100',
    cliente: 'Empresa ABC Ltda',
    adverso: 'João Silva',
    situacao: 'ativo',
    polo: 'ativo',
    risco: 'possivel',
    riscoLabel: 'Possível',
    riscoColor: '#FFD700',
    valorCausa: 120000,
    valorAnalisado: 150000,
    valorAtualizado: 156234.50,
    tribunal: 'TRT 2ª Região',
    categoria: 'Trabalhista > Rescisão Contratual',
    dataDistribuicao: '2024-01-15',
    ativo: true
  },
  {
    id: 2,
    pasta: '002/2024',
    numeroCnj: '9876543-21.2024.5.02.0001',
    cliente: 'João Silva',
    adverso: 'Banco XYZ S.A.',
    situacao: 'ativo',
    polo: 'passivo',
    risco: 'provavel',
    riscoLabel: 'Provável',
    riscoColor: '#FF4444',
    valorCausa: 1200000,
    valorAnalisado: 1200000,
    valorAtualizado: 1245600,
    tribunal: 'TJSP',
    categoria: 'Cível > Indenização',
    dataDistribuicao: '2024-01-20',
    ativo: true
  },
  {
    id: 3,
    pasta: '003/2024',
    numeroCnj: '5555555-55.2024.8.26.0200',
    cliente: 'Maria Santos',
    adverso: 'Empresa ABC Ltda',
    situacao: 'suspenso',
    polo: 'ativo',
    risco: 'remoto',
    riscoLabel: 'Remoto',
    riscoColor: '#00FF88',
    valorCausa: 50000,
    valorAnalisado: 50000,
    valorAtualizado: 51250,
    tribunal: 'TJSP',
    categoria: 'Consumidor > Defeito de Produto',
    dataDistribuicao: '2024-02-01',
    ativo: true
  },
  {
    id: 4,
    pasta: '004/2023',
    numeroCnj: '1111111-11.2023.8.26.0300',
    cliente: 'Banco XYZ S.A.',
    adverso: 'Maria Santos',
    situacao: 'arquivado',
    polo: 'passivo',
    risco: 'possivel',
    riscoLabel: 'Possível',
    riscoColor: '#FFD700',
    valorCausa: 800000,
    valorAnalisado: 800000,
    valorAtualizado: 824000,
    tribunal: 'TJRJ',
    categoria: 'Bancário > Revisão de Contrato',
    dataDistribuicao: '2023-06-10',
    ativo: true
  }
];

export const mockContratos = [
  {
    id: 1,
    numero: '2024-001',
    tipo: 'contrato',
    nome: 'Contrato de Prestação de Serviços',
    cliente: 'Empresa ABC Ltda',
    dataEmissao: '2024-02-01',
    dataVencimento: '2025-02-01',
    valor: 120000,
    status: 'vigente',
    partes: ['Empresa ABC Ltda', 'João Silva Consultoria ME']
  },
  {
    id: 2,
    numero: '2024-002',
    tipo: 'contrato',
    nome: 'Contrato de Locação',
    cliente: 'João Silva',
    dataEmissao: '2024-01-15',
    dataVencimento: '2026-01-15',
    valor: 240000,
    status: 'vigente',
    partes: ['João Silva', 'Imobiliária XYZ']
  },
  {
    id: 3,
    numero: '2023-045',
    tipo: 'contrato',
    nome: 'Contrato de Compra e Venda',
    cliente: 'Maria Santos',
    dataEmissao: '2023-05-10',
    dataVencimento: '2024-01-10',
    valor: 500000,
    status: 'vencido',
    partes: ['Maria Santos', 'Construtora ABC']
  },
  {
    id: 4,
    numero: '2024-003',
    tipo: 'contrato',
    nome: 'Contrato de Parceria',
    cliente: 'Banco XYZ S.A.',
    dataEmissao: '2024-01-01',
    dataVencimento: '2027-01-01',
    valor: 3000000,
    status: 'revisao',
    partes: ['Banco XYZ S.A.', 'TechCorp Ltda']
  }
];

export const mockProcuracoes = [
  {
    id: 1,
    numero: '001/2024',
    tipo: 'publica',
    outorgante: 'Empresa ABC Ltda',
    outorgado: 'João Silva',
    dataEmissao: '2024-01-10',
    dataVencimento: '2024-12-01',
    status: 'vigente',
    poderes: 'Poderes gerais para representação judicial e extrajudicial'
  },
  {
    id: 2,
    numero: '002/2024',
    tipo: 'particular',
    outorgante: 'Maria Santos',
    outorgado: 'Dr. Pedro Advogado',
    dataEmissao: '2024-02-01',
    dataVencimento: '2024-03-15',
    status: 'vencendo',
    poderes: 'Poderes específicos para processo 002/2024'
  },
  {
    id: 3,
    numero: '003/2023',
    tipo: 'publica',
    outorgante: 'Banco XYZ S.A.',
    outorgado: 'Dra. Ana Advogada',
    dataEmissao: '2023-06-15',
    dataVencimento: '2024-01-10',
    status: 'vencida',
    poderes: 'Poderes para cobrança judicial'
  },
  {
    id: 4,
    numero: '004/2024',
    tipo: 'particular',
    outorgante: 'João Silva',
    outorgado: 'Dra. Carla Advogada',
    dataEmissao: '2024-01-20',
    dataVencimento: null,
    status: 'vigente',
    poderes: 'Poderes indeterminados para acompanhamento processual'
  }
];

export const mockDemandas = [
  {
    id: 1,
    numero: '001',
    titulo: 'Análise de Contrato Urgente',
    tipo: 'consultoria',
    solicitante: 'Maria Admin',
    responsavel: 'João Advogado',
    prioridade: 'urgente',
    status: 'aberta',
    slaHoras: 2,
    dataSolicitacao: '2024-02-08T10:00:00',
    dataPrazo: '2024-02-08T12:00:00'
  },
  {
    id: 2,
    numero: '002',
    titulo: 'Recurso TRT - Processo 001/2024',
    tipo: 'recurso',
    solicitante: 'João Gerente',
    responsavel: 'Maria Advogada',
    prioridade: 'alta',
    status: 'em_andamento',
    slaHoras: 24,
    dataSolicitacao: '2024-02-07T14:00:00',
    dataPrazo: '2024-02-08T14:00:00'
  },
  {
    id: 3,
    numero: '003',
    titulo: 'Parecer Fiscal - Empresa ABC',
    tipo: 'parecer',
    solicitante: 'Ana Gerente',
    responsavel: 'Pedro Advogado',
    prioridade: 'media',
    status: 'em_andamento',
    slaHoras: 72,
    dataSolicitacao: '2024-02-05T09:00:00',
    dataPrazo: '2024-02-08T09:00:00'
  },
  {
    id: 4,
    numero: '004',
    titulo: 'Cobrança Cliente XYZ',
    tipo: 'cobranca',
    solicitante: 'Carlos Financeiro',
    responsavel: 'Ana Assistente',
    prioridade: 'alta',
    status: 'em_andamento',
    slaHoras: 48,
    dataSolicitacao: '2024-02-06T11:00:00',
    dataPrazo: '2024-02-08T11:00:00'
  },
  {
    id: 5,
    numero: '005',
    titulo: 'Petição Inicial - Novo Processo',
    tipo: 'peticao',
    solicitante: 'João Gerente',
    responsavel: null,
    prioridade: 'media',
    status: 'aberta',
    slaHoras: 48,
    dataSolicitacao: '2024-02-08T08:00:00',
    dataPrazo: '2024-02-10T08:00:00'
  }
];

export const mockMarcas = [
  {
    id: 1,
    numeroRegistro: '123456789',
    nomeMarca: 'MARCA ABC',
    titular: 'Empresa ABC Ltda',
    tipo: 'nominativa',
    classesNice: ['35', '42'],
    dataDeposito: '2020-05-15',
    dataConcessao: '2022-03-20',
    dataVencimento: '2032-03-20',
    status: 'concedida'
  },
  {
    id: 2,
    numeroRegistro: '987654321',
    nomeMarca: 'LOGO XYZ',
    titular: 'João Silva',
    tipo: 'figurativa',
    classesNice: ['25'],
    dataDeposito: '2023-01-10',
    dataConcessao: null,
    dataVencimento: null,
    status: 'em_exame'
  },
  {
    id: 3,
    numeroRegistro: '555555555',
    nomeMarca: 'BRAND 123',
    titular: 'Maria Santos LTDA',
    tipo: 'mista',
    classesNice: ['09', '35'],
    dataDeposito: '2019-08-22',
    dataConcessao: '2021-06-15',
    dataVencimento: '2031-06-15',
    status: 'concedida'
  },
  {
    id: 4,
    numeroRegistro: '111111111',
    nomeMarca: 'TECH PLUS',
    titular: 'Banco XYZ S.A.',
    tipo: 'nominativa',
    classesNice: ['36', '42'],
    dataDeposito: '2022-11-05',
    dataConcessao: null,
    dataVencimento: null,
    status: 'indeferida'
  }
];

// Dashboard statistics
export const mockDashboardStats = {
  processosAtivos: 1234,
  processosAtivosDelta: 5,
  valorEmRisco: 45600000,
  valorEmRiscoDelta: -2,
  taxaSucesso: 77,
  taxaSucessoDelta: 3,
  demandasAbertas: 23,
  demandasAbertasDelta: 12,
  
  processosPorStatus: {
    ativo: 456,
    suspenso: 123,
    arquivado: 567,
    encerrado: 88
  },
  
  processosPorRisco: {
    remoto: 234,
    possivel: 567,
    provavel: 433
  },
  
  evolucaoValores: [
    { mes: 'Set', valor: 35000000 },
    { mes: 'Out', valor: 38000000 },
    { mes: 'Nov', valor: 41000000 },
    { mes: 'Dez', valor: 43000000 },
    { mes: 'Jan', valor: 44500000 },
    { mes: 'Fev', valor: 45600000 }
  ],
  
  topClientes: [
    { nome: 'Empresa ABC Ltda', valor: 12300000, percentual: 27 },
    { nome: 'Banco XYZ S.A.', valor: 8700000, percentual: 19 },
    { nome: 'Maria Santos', valor: 5400000, percentual: 12 },
    { nome: 'João Silva Holding', valor: 4200000, percentual: 9 },
    { nome: 'Construtora DEF', valor: 3100000, percentual: 7 }
  ],
  
  alertas: [
    { tipo: 'warning', mensagem: '5 procurações vencendo em 30 dias' },
    { tipo: 'warning', mensagem: '12 demandas com SLA próximo do vencimento' },
    { tipo: 'info', mensagem: '3 novos processos cadastrados hoje' },
    { tipo: 'info', mensagem: '8 contratos aguardando revisão' }
  ]
};

// Helper functions
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const formatDate = (dateString) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

export const getStatusBadgeColor = (status) => {
  const colors = {
    ativo: 'bg-green-500',
    suspenso: 'bg-orange-500',
    arquivado: 'bg-gray-500',
    encerrado: 'bg-red-500',
    vigente: 'bg-green-500',
    vencido: 'bg-red-500',
    vencendo: 'bg-orange-500',
    revisao: 'bg-yellow-500',
    aberta: 'bg-blue-500',
    em_andamento: 'bg-purple-500',
    concluida: 'bg-green-500',
    concedida: 'bg-green-500',
    em_exame: 'bg-yellow-500',
    indeferida: 'bg-red-500'
  };
  return colors[status] || 'bg-gray-500';
};

export const getPrioridadeColor = (prioridade) => {
  const colors = {
    urgente: 'text-red-500',
    alta: 'text-orange-500',
    media: 'text-yellow-500',
    baixa: 'text-green-500'
  };
  return colors[prioridade] || 'text-gray-500';
};

export const getPrioridadeIcon = (prioridade) => {
  const icons = {
    urgente: '🔴',
    alta: '🟡',
    media: '🟢',
    baixa: '⚪'
  };
  return icons[prioridade] || '⚪';
};
