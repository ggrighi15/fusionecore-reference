import React, { useState } from 'react';
import { Search, Plus, Eye, AlertTriangle, FileText, Calendar } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockProcuracoes, formatDate } from '../../data/mock/mockData';
import { ProcuracaoModal } from '../../components/modals/ProcuracaoModal';

export default function ProcuracoesListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  const filteredProcuracoes = mockProcuracoes.filter(proc => {
    const matchesSearch = proc.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proc.outorgante.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proc.outorgado.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = !tipoFilter || proc.tipo === tipoFilter;
    const matchesStatus = !statusFilter || proc.status === statusFilter;
    
    return matchesSearch && matchesTipo && matchesStatus;
  });
  
  const countByStatus = (status) => {
    return mockProcuracoes.filter(p => p.status === status).length;
  };
  
  const getStatusLabel = (status) => {
    const labels = {
      vigente: 'Vigente',
      vencida: 'Vencida',
      vencendo: 'Vencendo'
    };
    return labels[status] || status;
  };
  
  const getDiasRestantes = (dataVencimento) => {
    if (!dataVencimento) return null;
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    return Math.floor((vencimento - hoje) / (1000 * 60 * 60 * 24));
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gestão de Procurações</h1>
          <p className="text-gray-400 mt-1">Procurações públicas e particulares</p>
        </div>
        <Button variant="primary" onClick={() => { setEditingItem(null); setModalOpen(true); }}>
          <Plus size={18} className="mr-2" />
          Nova Procuração
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total"
          value={mockProcuracoes.length}
          icon="📜"
        />
        <StatCard
          title="Vigentes"
          value={countByStatus('vigente')}
          delta={0}
          icon="✅"
        />
        <StatCard
          title="Vencendo"
          value={countByStatus('vencendo')}
          delta={15}
          icon="⚠️"
        />
        <StatCard
          title="Vencidas"
          value={countByStatus('vencida')}
          delta={-10}
          icon="❌"
        />
      </div>
      
      {/* Alert Banner */}
      {countByStatus('vencendo') > 0 && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-yellow-400 font-semibold mb-1">
                ⚠️ {countByStatus('vencendo')} procuração(ões) vencendo em breve
              </h3>
              <p className="text-sm text-yellow-400/80">
                Revise os prazos e renove as procurações necessárias para evitar interrupções.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por número, outorgante, outorgado..."
            />
          </div>
          <Select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            placeholder="Tipo: Todos"
            options={[
              { value: 'publica', label: 'Pública' },
              { value: 'particular', label: 'Particular' }
            ]}
          />
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="Status: Todos"
            options={[
              { value: 'vigente', label: 'Vigente' },
              { value: 'vencendo', label: 'Vencendo' },
              { value: 'vencida', label: 'Vencida' }
            ]}
          />
        </div>
      </Card>
      
      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número</TableHead>
              <TableHead>Outorgante</TableHead>
              <TableHead>Outorgado</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Vigência</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProcuracoes.map((proc) => {
              const diasRestantes = getDiasRestantes(proc.dataVencimento);
              
              return (
                <TableRow key={proc.id}>
                  <TableCell className="font-mono text-[#CDFF00]">
                    {proc.numero}
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    {proc.outorgante}
                  </TableCell>
                  <TableCell>{proc.outorgado}</TableCell>
                  <TableCell>
                    <Badge variant={proc.tipo === 'publica' ? 'primary' : 'info'}>
                      {proc.tipo === 'publica' ? 'Pública' : 'Particular'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-gray-400">
                        {formatDate(proc.dataEmissao)}
                        {proc.dataVencimento && ` → ${formatDate(proc.dataVencimento)}`}
                      </div>
                      {diasRestantes !== null && (
                        <div className={`text-xs mt-1 flex items-center gap-1 ${
                          diasRestantes < 0 ? 'text-red-500' :
                          diasRestantes <= 30 ? 'text-yellow-500' :
                          'text-green-500'
                        }`}>
                          <Calendar size={12} />
                          {diasRestantes < 0 ? `Vencida há ${Math.abs(diasRestantes)} dias` :
                           diasRestantes === 0 ? 'Vence hoje' :
                           `${diasRestantes} dias restantes`}
                        </div>
                      )}
                      {!proc.dataVencimento && (
                        <div className="text-xs text-blue-400 mt-1">
                          Prazo indeterminado
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge status={proc.status}>
                      {getStatusLabel(proc.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileText size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {/* Info Box */}
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <FileText size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-400">
              <p className="font-semibold mb-1">💡 Sobre Procurações</p>
              <p>
                <strong>Públicas:</strong> Lavradas em cartório, maior validade jurídica. 
                <strong className="ml-2">Particulares:</strong> Assinadas entre partes, válidas para fins específicos.
                Controle os prazos para evitar perda de poderes de representação.
              </p>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredProcuracoes.length} de {mockProcuracoes.length} registros</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">◀</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="secondary" size="sm">▶</Button>
          </div>
        </div>
      </Card>
      
      <ProcuracaoModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingItem(null); }}
        editingItem={editingItem}
      />
    </div>
  );
}
