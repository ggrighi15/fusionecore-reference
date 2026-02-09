import React, { useState } from 'react';
import { Search, Plus, Eye, Upload, Download, Sparkles, AlertCircle } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockContratos, formatCurrency, formatDate } from '../../data/mock/mockData';
import { Modal, FormField } from '../../components/ui/Modal';
import { Input } from '../../components/ui/Input';
import { UploadContratoIA } from '../../components/modals/UploadContratoIA';

export default function ContratosListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  
  const handleSaveFromIA = (dadosExtraidos) => {
    console.log('Dados extraídos pela IA:', dadosExtraidos);
    // Aqui seria salvo no banco de dados
    setShowUploadModal(false);
  };
  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    numero: '',
    tipo: 'contrato',
    nome: '',
    cliente: '',
    dataEmissao: '',
    dataVencimento: '',
    valor: '',
    status: 'vigente',
    partes: []
  });
  
  const handleOpenCadastro = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({
        numero: '',
        tipo: 'contrato',
        nome: '',
        cliente: '',
        dataEmissao: '',
        dataVencimento: '',
        valor: '',
        status: 'vigente',
        partes: []
      });
    }
    setModalCadastroOpen(true);
  };
  
  const handleSubmitCadastro = (e) => {
    e.preventDefault();
    console.log('Salvando contrato:', formData);
    alert(editingItem ? 'Contrato atualizado com sucesso!' : 'Contrato cadastrado com sucesso!');
    setModalCadastroOpen(false);
  };
  
  const filteredContratos = mockContratos.filter(contrato => {
    const matchesSearch = contrato.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contrato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contrato.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || contrato.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const countByStatus = (status) => {
    return mockContratos.filter(c => c.status === status).length;
  };
  
  const totalValor = filteredContratos.reduce((sum, c) => sum + c.valor, 0);
  
  const getStatusLabel = (status) => {
    const labels = {
      vigente: 'Vigente',
      vencido: 'Vencido',
      revisao: 'Em Revisão',
      cancelado: 'Cancelado'
    };
    return labels[status] || status;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gestão de Contratos</h1>
          <p className="text-gray-400 mt-1">Contratos, aditivos e documentos contratuais</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setShowUploadModal(true)}>
            <Upload size={18} className="mr-2" />
            Upload com IA
          </Button>
          <Button variant="primary" onClick={() => handleOpenCadastro()}>
            <Plus size={18} className="mr-2" />
            Novo Contrato
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total de Contratos"
          value={mockContratos.length}
          icon="📄"
        />
        <StatCard
          title="Vigentes"
          value={countByStatus('vigente')}
          delta={5}
          icon="✅"
        />
        <StatCard
          title="Vencidos"
          value={countByStatus('vencido')}
          delta={-2}
          icon="⚠️"
        />
        <StatCard
          title="Valor Total"
          value={formatCurrency(totalValor)}
          icon="💰"
        />
      </div>
      
      {/* Upload Modal com IA */}
      <UploadContratoIA
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onSave={handleSaveFromIA}
      />
      

      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por número, nome, cliente..."
            />
          </div>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="Status: Todos"
            options={[
              { value: 'vigente', label: 'Vigente' },
              { value: 'vencido', label: 'Vencido' },
              { value: 'revisao', label: 'Em Revisão' },
              { value: 'cancelado', label: 'Cancelado' }
            ]}
          />
          <Button variant="secondary">
            <Download size={18} className="mr-2" />
            Exportar
          </Button>
        </div>
      </Card>
      
      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Número</TableHead>
              <TableHead>Nome do Contrato</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Vigência</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContratos.map((contrato) => {
              const hoje = new Date();
              const vencimento = new Date(contrato.dataVencimento);
              const diasRestantes = Math.floor((vencimento - hoje) / (1000 * 60 * 60 * 24));
              const vencendoEm30Dias = diasRestantes > 0 && diasRestantes <= 30;
              
              return (
                <TableRow key={contrato.id}>
                  <TableCell className="font-mono text-[#CDFF00]">
                    {contrato.numero}
                  </TableCell>
                  <TableCell className="font-medium text-white">
                    {contrato.nome}
                    <span className="block text-xs text-gray-500">{contrato.tipo}</span>
                  </TableCell>
                  <TableCell>{contrato.cliente}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-gray-400">
                        {formatDate(contrato.dataEmissao)} → {formatDate(contrato.dataVencimento)}
                      </div>
                      {vencendoEm30Dias && (
                        <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                          <AlertCircle size={12} />
                          Vence em {diasRestantes} dias
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium text-white">
                    {formatCurrency(contrato.valor)}
                  </TableCell>
                  <TableCell>
                    <Badge status={contrato.status}>
                      {getStatusLabel(contrato.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {/* Alert Box */}
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-400">
              <p className="font-semibold mb-1">⚠️ Alertas de Vencimento</p>
              <p>
                {countByStatus('vencido')} contrato(s) vencido(s) • 
                {filteredContratos.filter(c => {
                  const dias = Math.floor((new Date(c.dataVencimento) - new Date()) / (1000 * 60 * 60 * 24));
                  return dias > 0 && dias <= 30;
                }).length} vencendo em 30 dias
              </p>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredContratos.length} de {mockContratos.length} registros</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">◀</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="secondary" size="sm">▶</Button>
          </div>
        </div>
      </Card>
      
      {/* Modal de Cadastro Manual */}
      <Modal
        isOpen={modalCadastroOpen}
        onClose={() => setModalCadastroOpen(false)}
        title={editingItem ? 'Editar Contrato' : 'Novo Contrato'}
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalCadastroOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSubmitCadastro}>
              {editingItem ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitCadastro} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Número" required>
              <Input
                value={formData.numero}
                onChange={(e) => setFormData({...formData, numero: e.target.value})}
                placeholder="Ex: 2024-001"
              />
            </FormField>
            
            <FormField label="Tipo" required>
              <Select
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                options={[
                  { value: 'contrato', label: 'Contrato' },
                  { value: 'aditivo', label: 'Aditivo' },
                  { value: 'acordo', label: 'Acordo' },
                  { value: 'termo', label: 'Termo' }
                ]}
              />
            </FormField>
            
            <FormField label="Nome do Contrato" required>
              <Input
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                placeholder="Ex: Contrato de Prestação de Serviços"
                className="md:col-span-2"
              />
            </FormField>
            
            <FormField label="Cliente" required>
              <Input
                value={formData.cliente}
                onChange={(e) => setFormData({...formData, cliente: e.target.value})}
                placeholder="Nome do cliente"
              />
            </FormField>
            
            <FormField label="Valor" required>
              <Input
                type="number"
                value={formData.valor}
                onChange={(e) => setFormData({...formData, valor: e.target.value})}
                placeholder="0.00"
              />
            </FormField>
            
            <FormField label="Data de Emissão" required>
              <Input
                type="date"
                value={formData.dataEmissao}
                onChange={(e) => setFormData({...formData, dataEmissao: e.target.value})}
              />
            </FormField>
            
            <FormField label="Data de Vencimento" required>
              <Input
                type="date"
                value={formData.dataVencimento}
                onChange={(e) => setFormData({...formData, dataVencimento: e.target.value})}
              />
            </FormField>
            
            <FormField label="Status" required>
              <Select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                options={[
                  { value: 'vigente', label: 'Vigente' },
                  { value: 'vencido', label: 'Vencido' },
                  { value: 'revisao', label: 'Em Revisão' },
                  { value: 'cancelado', label: 'Cancelado' }
                ]}
              />
            </FormField>
          </div>
          
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400">
              💡 <strong>Dica:</strong> Para extrair dados automaticamente de um PDF, use o botão "Upload com IA".
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}
