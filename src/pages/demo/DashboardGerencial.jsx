import React from 'react';
import { TrendingUp, AlertTriangle, Info } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockDashboardStats, formatCurrency } from '../../data/mock/mockData';

export default function DashboardGerencial() {
  const stats = mockDashboardStats;
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Gerencial</h1>
          <p className="text-gray-400 mt-1">Visão geral do contencioso e métricas principais</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-black/40 border border-gray-800 rounded-lg text-white">
            <option>Último Mês</option>
            <option>Últimos 3 Meses</option>
            <option>Últimos 6 Meses</option>
            <option>Último Ano</option>
          </select>
          <Button variant="primary">Atualizar</Button>
        </div>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Processos Ativos"
          value={stats.processosAtivos.toLocaleString()}
          delta={stats.processosAtivosDelta}
          icon="⚖️"
        />
        <StatCard
          title="Valor em Risco"
          value={formatCurrency(stats.valorEmRisco)}
          delta={stats.valorEmRiscoDelta}
          icon="💰"
        />
        <StatCard
          title="Taxa de Sucesso"
          value={`${stats.taxaSucesso}%`}
          delta={stats.taxaSucessoDelta}
          icon="📈"
        />
        <StatCard
          title="Demandas Abertas"
          value={stats.demandasAbertas}
          delta={stats.demandasAbertasDelta}
          icon="📌"
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Processos por Status */}
        <Card title="Processos por Status">
          <div className="space-y-3">
            {Object.entries(stats.processosPorStatus).map(([status, count]) => {
              const total = Object.values(stats.processosPorStatus).reduce((a, b) => a + b, 0);
              const percentage = ((count / total) * 100).toFixed(1);
              
              const statusColors = {
                ativo: '#00FF88',
                suspenso: '#FF9500',
                arquivado: '#666666',
                encerrado: '#FF4444'
              };
              
              const statusLabels = {
                ativo: 'Ativo',
                suspenso: 'Suspenso',
                arquivado: 'Arquivado',
                encerrado: 'Encerrado'
              };
              
              return (
                <div key={status} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{statusLabels[status]}</span>
                    <span className="text-white font-medium">{count} ({percentage}%)</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: statusColors[status]
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        
        {/* Processos por Risco */}
        <Card title="Processos por Risco">
          <div className="space-y-3">
            {Object.entries(stats.processosPorRisco).map(([risco, count]) => {
              const total = Object.values(stats.processosPorRisco).reduce((a, b) => a + b, 0);
              const percentage = ((count / total) * 100).toFixed(1);
              
              const riscoColors = {
                remoto: '#00FF88',
                possivel: '#FFD700',
                provavel: '#FF4444'
              };
              
              const riscoLabels = {
                remoto: 'Remoto',
                possivel: 'Possível',
                provavel: 'Provável'
              };
              
              return (
                <div key={risco} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: riscoColors[risco] }}
                      ></span>
                      <span className="text-gray-400">{riscoLabels[risco]}</span>
                    </div>
                    <span className="text-white font-medium">{count} ({percentage}%)</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: riscoColors[risco]
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <Button variant="outline" size="sm" className="w-full">
              Drill-down por categoria
            </Button>
          </div>
        </Card>
      </div>
      
      {/* Evolução de Valores */}
      <Card title="Evolução de Valores (Últimos 6 meses)">
        <div className="h-64 flex items-end justify-between gap-2">
          {stats.evolucaoValores.map((item, index) => {
            const maxValor = Math.max(...stats.evolucaoValores.map(v => v.valor));
            const height = (item.valor / maxValor) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center">
                  <span className="text-xs text-gray-400 mb-1">
                    {formatCurrency(item.valor / 1000000)}M
                  </span>
                  <div 
                    className="w-full bg-gradient-to-t from-[#CDFF00] to-[#CDFF00]/50 rounded-t-lg transition-all hover:from-[#CDFF00] hover:to-[#CDFF00]/70"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{item.mes}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="sm">
            📊 Ver Detalhamento
          </Button>
          <Button variant="outline" size="sm">
            📥 Exportar Dados
          </Button>
        </div>
      </Card>
      
      {/* Top Clientes */}
      <Card title="Top 5 Clientes por Valor em Risco">
        <div className="space-y-3">
          {stats.topClientes.map((cliente, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#CDFF00]">{index + 1}</span>
                <div>
                  <p className="text-white font-medium">{cliente.nome}</p>
                  <p className="text-sm text-gray-400">{cliente.percentual}% do total</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{formatCurrency(cliente.valor)}</p>
                <Button variant="ghost" size="sm" className="text-[#CDFF00]">
                  Ver processos →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      {/* Alertas */}
      <Card title="Alertas e Notificações">
        <div className="space-y-2">
          {stats.alertas.map((alerta, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3 rounded-lg ${
                alerta.tipo === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-blue-500/10 border border-blue-500/20'
              }`}
            >
              {alerta.tipo === 'warning' ? (
                <AlertTriangle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
              ) : (
                <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              )}
              <p className={alerta.tipo === 'warning' ? 'text-yellow-400' : 'text-blue-400'}>
                {alerta.mensagem}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="outline" size="sm" className="w-full">
            Ver todos os alertas
          </Button>
        </div>
      </Card>
    </div>
  );
}
