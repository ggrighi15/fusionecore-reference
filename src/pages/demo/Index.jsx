import React from 'react';
import { Link } from 'wouter';
import { LayoutDashboard, Users, Scale, ListTodo, Building2, FileText, Award, Home } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function DemoIndex() {
  const demos = [
    {
      title: 'Dashboard Gerencial',
      description: 'Visão geral com KPIs, gráficos interativos e alertas em tempo real',
      icon: <LayoutDashboard size={32} className="text-[#CDFF00]" />,
      href: '/demo/dashboard',
      features: ['4 KPIs principais', 'Gráficos de evolução', 'Top 5 clientes', 'Alertas automáticos']
    },
    {
      title: 'Cadastro de Pessoas',
      description: 'Gestão completa de pessoas físicas e jurídicas com filtros avançados',
      icon: <Users size={32} className="text-[#CDFF00]" />,
      href: '/demo/pessoas',
      features: ['Busca em tempo real', 'Filtros por tipo e estado', 'CRUD completo', 'Paginação']
    },
    {
      title: 'Processos Jurídicos',
      description: 'Gerenciamento de contencioso com análise de risco e valores',
      icon: <Scale size={32} className="text-[#CDFF00]" />,
      href: '/demo/processos',
      features: ['Filtros por situação/risco', 'Cálculo de valores', 'Importação em lote', 'Exportação']
    },
    {
      title: 'Demandas (Kanban)',
      description: 'Requisições internas com visualização Kanban e controle de SLA',
      icon: <ListTodo size={32} className="text-[#CDFF00]" />,
      href: '/demo/demandas',
      features: ['Visualização Kanban', 'Controle de SLA', 'Priorização', 'Drag-and-drop']
    },
    {
      title: 'Instituições',
      description: 'Cadastro de tribunais, escritórios, bancos e órgãos públicos',
      icon: <Building2 size={32} className="text-[#CDFF00]" />,
      href: '/demo/instituicoes',
      features: ['Filtros por tipo', 'Busca avançada', 'Stats por categoria', 'Ícones por tipo']
    },
    {
      title: 'Contratos',
      description: 'Gestão de contratos com extração automática via IA',
      icon: <FileText size={32} className="text-[#CDFF00]" />,
      href: '/demo/contratos',
      features: ['Upload com IA', 'Alertas de vencimento', 'Cálculo de valores', 'Exportação']
    },
    {
      title: 'Procurações',
      description: 'Controle de procurações públicas e particulares',
      icon: <Award size={32} className="text-[#CDFF00]" />,
      href: '/demo/procuracoes',
      features: ['Controle de vigência', 'Alertas automáticos', 'Tipos variados', 'Cálculo de prazos']
    },
    {
      title: 'Marcas',
      description: 'Gestão de propriedade intelectual (INPI)',
      icon: <Award size={32} className="text-[#CDFF00]" />,
      href: '/demo/marcas',
      features: ['Classes Nice', 'Status INPI', 'Prazos de renovação', 'Consulta INPI']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Demonstrações Interativas</h1>
        <p className="text-gray-400 mt-1">
          Explore as interfaces funcionais do FusioneCore Suite
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-[#CDFF00]/10 border border-[#CDFF00]/30 rounded-lg p-6">
        <h3 className="text-[#CDFF00] font-semibold mb-2">💡 Sobre as Demos</h3>
        <p className="text-gray-300 text-sm">
          Estas são interfaces funcionais com dados mockados para demonstração. 
          As telas implementadas incluem filtros, busca em tempo real, paginação e interatividade completa.
          Novas demos serão adicionadas progressivamente.
        </p>
      </div>

      {/* Demo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demos.map((demo, index) => (
          <Card 
            key={index} 
            className={`hover:border-[#CDFF00]/50 transition-all ${demo.disabled ? 'opacity-60' : ''}`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {demo.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                    {demo.disabled && (
                      <span className="text-xs text-gray-500">Em desenvolvimento</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm">{demo.description}</p>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Funcionalidades:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {demo.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="text-[#CDFF00]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {demo.disabled ? (
                <Button variant="secondary" className="w-full" disabled>
                  Em breve
                </Button>
              ) : (
                <Link href={demo.href}>
                  <Button variant="primary" className="w-full">
                    Acessar Demo →
                  </Button>
                </Link>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-500/10 border-green-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">8</p>
            <p className="text-sm text-gray-400 mt-1">Demos Disponíveis</p>
          </div>
        </Card>
        <Card className="bg-yellow-500/10 border-yellow-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">0</p>
            <p className="text-sm text-gray-400 mt-1">Em Desenvolvimento</p>
          </div>
        </Card>
        <Card className="bg-blue-500/10 border-blue-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">12+</p>
            <p className="text-sm text-gray-400 mt-1">Módulos Planejados</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
