import React, { useState } from 'react';
import { Plus, Clock, User } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockDemandas, getPrioridadeIcon } from '../../data/mock/mockData';

export default function DemandasKanban() {
  const [view, setView] = useState('kanban'); // 'kanban' or 'lista'
  
  const columns = {
    aberta: { title: 'Aberta', color: 'border-blue-500' },
    em_andamento: { title: 'Em Andamento', color: 'border-purple-500' },
    revisao: { title: 'Revisão', color: 'border-yellow-500' },
    concluida: { title: 'Concluída', color: 'border-green-500' }
  };
  
  const getDemandsByStatus = (status) => {
    return mockDemandas.filter(d => d.status === status);
  };
  
  const formatSLA = (slaHoras) => {
    if (slaHoras < 24) return `${slaHoras}h`;
    return `${Math.floor(slaHoras / 24)}d`;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Requisições e Demandas</h1>
          <p className="text-gray-400 mt-1">Gestão de solicitações internas</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-black/40 border border-gray-800 rounded-lg p-1">
            <Button 
              variant={view === 'lista' ? 'primary' : 'ghost'} 
              size="sm"
              onClick={() => setView('lista')}
            >
              📋 Lista
            </Button>
            <Button 
              variant={view === 'kanban' ? 'primary' : 'ghost'} 
              size="sm"
              onClick={() => setView('kanban')}
            >
              📊 Kanban
            </Button>
          </div>
          <Button variant="primary">
            <Plus size={18} className="mr-2" />
            Nova Demanda
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-blue-500/10 border-blue-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{getDemandsByStatus('aberta').length}</p>
            <p className="text-sm text-gray-400 mt-1">Abertas</p>
          </div>
        </Card>
        <Card className="bg-purple-500/10 border-purple-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{getDemandsByStatus('em_andamento').length}</p>
            <p className="text-sm text-gray-400 mt-1">Em Andamento</p>
          </div>
        </Card>
        <Card className="bg-yellow-500/10 border-yellow-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{getDemandsByStatus('revisao').length || 0}</p>
            <p className="text-sm text-gray-400 mt-1">Em Revisão</p>
          </div>
        </Card>
        <Card className="bg-green-500/10 border-green-500/30">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{getDemandsByStatus('concluida').length || 0}</p>
            <p className="text-sm text-gray-400 mt-1">Concluídas</p>
          </div>
        </Card>
      </div>
      
      {/* Kanban Board */}
      {view === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(columns).map(([status, config]) => (
            <div key={status} className="space-y-3">
              <div className={`p-3 bg-black/40 border-l-4 ${config.color} rounded-lg`}>
                <h3 className="font-semibold text-white flex items-center justify-between">
                  {config.title}
                  <span className="text-sm text-gray-400">
                    ({getDemandsByStatus(status).length})
                  </span>
                </h3>
              </div>
              
              <div className="space-y-3">
                {getDemandsByStatus(status).map((demanda) => (
                  <Card 
                    key={demanda.id} 
                    className="cursor-pointer hover:border-[#CDFF00]/50 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-mono text-gray-500">#{demanda.numero}</span>
                        <span className="text-lg">{getPrioridadeIcon(demanda.prioridade)}</span>
                      </div>
                      
                      <h4 className="font-medium text-white text-sm leading-tight">
                        {demanda.titulo}
                      </h4>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="info" className="text-xs">
                          {demanda.tipo}
                        </Badge>
                        <Badge variant={demanda.prioridade === 'urgente' ? 'danger' : 'warning'} className="text-xs">
                          {demanda.prioridade}
                        </Badge>
                      </div>
                      
                      {demanda.responsavel && (
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <User size={14} />
                          <span>{demanda.responsavel}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock size={14} />
                        <span>SLA: {formatSLA(demanda.slaHoras)}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Lista View */}
      {view === 'lista' && (
        <Card>
          <div className="space-y-2">
            {mockDemandas.map((demanda) => (
              <div 
                key={demanda.id}
                className="p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl">{getPrioridadeIcon(demanda.prioridade)}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-500">#{demanda.numero}</span>
                        <Badge variant="info" className="text-xs">{demanda.tipo}</Badge>
                        <Badge status={demanda.status} className="text-xs">
                          {demanda.status.replace('_', ' ')}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-white">{demanda.titulo}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                        <span>👤 {demanda.responsavel || 'Não atribuído'}</span>
                        <span>⏱️ SLA: {formatSLA(demanda.slaHoras)}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver detalhes →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
