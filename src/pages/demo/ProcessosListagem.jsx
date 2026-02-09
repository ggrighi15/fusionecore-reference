import React, { useState } from 'react';
import { Search, Plus, Eye, BarChart3, Download, Upload } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockProcessos, formatCurrency } from '../../data/mock/mockData';

export default function ProcessosListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [situacaoFilter, setSituacaoFilter] = useState('');
  const [riscoFilter, setRiscoFilter] = useState('');
  
  const filteredProcessos = mockProcessos.filter(processo => {
    const matchesSearch = processo.pasta.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         processo.numeroCnj.includes(searchTerm) ||
                         processo.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSituacao = !situacaoFilter || processo.situacao === situacaoFilter;
    const matchesRisco = !riscoFilter || processo.risco === riscoFilter;
    
    return matchesSearch && matchesSituacao && matchesRisco;
  });
  
  const totalValorRisco = filteredProcessos.reduce((sum, p) => sum + p.valorAtualizado, 0);
  const processosAtivos = filteredProcessos.filter(p => p.situacao === 'ativo').length;
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Processos Jurídicos</h1>
          <p className="text-gray-400 mt-1">Gestão completa do contencioso</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Upload size={18} className="mr-2" />
            Importar
          </Button>
          <Button variant="primary">
            <Plus size={18} className="mr-2" />
            Novo Processo
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total de Processos"
          value={filteredProcessos.length}
          icon="⚖️"
        />
        <StatCard
          title="Processos Ativos"
          value={processosAtivos}
          delta={5}
          icon="🟢"
        />
        <StatCard
          title="Valor em Risco"
          value={formatCurrency(totalValorRisco)}
          delta={-2}
          icon="💰"
        />
        <StatCard
          title="Taxa de Sucesso"
          value="77%"
          delta={3}
          icon="📈"
        />
      </div>
      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por pasta, CNJ, cliente..."
            />
          </div>
          <Select
            value={situacaoFilter}
            onChange={(e) => setSituacaoFilter(e.target.value)}
            placeholder="Situação: Todos"
            options={[
              { value: 'ativo', label: 'Ativo' },
              { value: 'suspenso', label: 'Suspenso' },
              { value: 'arquivado', label: 'Arquivado' },
              { value: 'encerrado', label: 'Encerrado' }
            ]}
          />
          <Select
            value={riscoFilter}
            onChange={(e) => setRiscoFilter(e.target.value)}
            placeholder="Risco: Todos"
            options={[
              { value: 'remoto', label: 'Remoto' },
              { value: 'possivel', label: 'Possível' },
              { value: 'provavel', label: 'Provável' }
            ]}
          />
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="flex-1">
              <BarChart3 size={18} className="mr-2" />
              Dashboard
            </Button>
            <Button variant="secondary" className="flex-1">
              <Download size={18} className="mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pasta</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Situação</TableHead>
              <TableHead>Polo</TableHead>
              <TableHead>Risco</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProcessos.map((processo) => (
              <TableRow key={processo.id}>
                <TableCell className="font-medium text-white">
                  {processo.pasta}
                  <span className="block text-xs text-gray-500 font-mono">{processo.numeroCnj}</span>
                </TableCell>
                <TableCell>{processo.cliente}</TableCell>
                <TableCell>
                  <Badge status={processo.situacao}>
                    {processo.situacao.charAt(0).toUpperCase() + processo.situacao.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={processo.polo === 'ativo' ? 'success' : 'warning'}>
                    {processo.polo.charAt(0).toUpperCase() + processo.polo.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: processo.riscoColor }}
                    ></span>
                    <span>{processo.riscoLabel}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-white">
                  {formatCurrency(processo.valorAtualizado)}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Summary */}
        <div className="mt-4 p-4 bg-[#CDFF00]/5 border border-[#CDFF00]/20 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">
              💡 Resumo: {filteredProcessos.length} processos | ⚡ {processosAtivos} ativos | 
              💰 {formatCurrency(totalValorRisco)} em risco
            </span>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredProcessos.length} de {mockProcessos.length} registros</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">◀</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="secondary" size="sm">2</Button>
            <Button variant="secondary" size="sm">3</Button>
            <Button variant="secondary" size="sm">▶</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
