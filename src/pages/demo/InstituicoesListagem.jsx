import React, { useState } from 'react';
import { Search, Plus, Eye, Edit2, Building2 } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockInstituicoes } from '../../data/mock/mockData';
import { Modal, FormField } from '../../components/ui/Modal';
import { Input, Select } from '../../components/ui/Input';

export default function InstituicoesListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [ufFilter, setUfFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    sigla: '',
    tipo: '',
    uf: '',
    cidade: '',
    cnpj: '',
    esfera: '',
    ativo: true
  });
  
  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData({
        nome: '',
        sigla: '',
        tipo: '',
        uf: '',
        cidade: '',
        cnpj: '',
        esfera: '',
        ativo: true
      });
    }
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingItem(null);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando instituição:', formData);
    // Aqui seria a chamada à API
    alert(editingItem ? 'Instituição atualizada com sucesso!' : 'Instituição cadastrada com sucesso!');
    handleCloseModal();
  };
  
  const filteredInstituicoes = mockInstituicoes.filter(inst => {
    const matchesSearch = inst.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (inst.sigla && inst.sigla.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTipo = !tipoFilter || inst.tipo === tipoFilter;
    const matchesUf = !ufFilter || inst.uf === ufFilter;
    
    return matchesSearch && matchesTipo && matchesUf;
  });
  
  const getTipoLabel = (tipo) => {
    const labels = {
      tribunal: 'Tribunal',
      escritorio: 'Escritório',
      banco: 'Banco',
      orgao_publico: 'Órgão Público',
      cartorio: 'Cartório',
      administradora: 'Administradora'
    };
    return labels[tipo] || tipo;
  };
  
  const getTipoIcon = (tipo) => {
    const icons = {
      tribunal: '⚖️',
      escritorio: '👔',
      banco: '🏦',
      orgao_publico: '🏛️',
      cartorio: '📜',
      administradora: '💼'
    };
    return icons[tipo] || '🏢';
  };
  
  const countByTipo = (tipo) => {
    return mockInstituicoes.filter(i => i.tipo === tipo).length;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Cadastro de Instituições</h1>
          <p className="text-gray-400 mt-1">Tribunais, escritórios, bancos e órgãos públicos</p>
        </div>
        <Button variant="primary" onClick={() => handleOpenModal()}>
          <Plus size={18} className="mr-2" />
          Nova Instituição
        </Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Tribunais"
          value={countByTipo('tribunal')}
          icon="⚖️"
        />
        <StatCard
          title="Escritórios"
          value={countByTipo('escritorio')}
          icon="👔"
        />
        <StatCard
          title="Bancos"
          value={countByTipo('banco')}
          icon="🏦"
        />
        <StatCard
          title="Órgãos Públicos"
          value={countByTipo('orgao_publico')}
          icon="🏛️"
        />
      </div>
      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome ou sigla..."
            />
          </div>
          <Select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            placeholder="Tipo: Todos"
            options={[
              { value: 'tribunal', label: 'Tribunal' },
              { value: 'escritorio', label: 'Escritório' },
              { value: 'banco', label: 'Banco' },
              { value: 'orgao_publico', label: 'Órgão Público' },
              { value: 'cartorio', label: 'Cartório' }
            ]}
          />
          <Select
            value={ufFilter}
            onChange={(e) => setUfFilter(e.target.value)}
            placeholder="UF: Todos"
            options={[
              { value: 'SP', label: 'São Paulo' },
              { value: 'RJ', label: 'Rio de Janeiro' },
              { value: 'DF', label: 'Distrito Federal' },
              { value: 'MG', label: 'Minas Gerais' }
            ]}
          />
        </div>
      </Card>
      
      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Instituição</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Sigla</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInstituicoes.map((inst) => (
              <TableRow key={inst.id}>
                <TableCell className="font-medium text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{getTipoIcon(inst.tipo)}</span>
                    <span>{inst.nome}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="info">
                    {getTipoLabel(inst.tipo)}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-[#CDFF00]">
                  {inst.sigla || '-'}
                </TableCell>
                <TableCell>{inst.cidade} - {inst.uf}</TableCell>
                <TableCell>
                  <Badge variant={inst.ativo ? 'success' : 'danger'}>
                    {inst.ativo ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleOpenModal(inst)}>
                      <Edit2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Info Box */}
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Building2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-400">
              <p className="font-semibold mb-1">💡 Sobre Instituições</p>
              <p>
                Cadastre tribunais para vincular processos, escritórios para gestão de terceiros,
                bancos para contratos financeiros e órgãos públicos para relacionamentos institucionais.
              </p>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredInstituicoes.length} de {mockInstituicoes.length} registros</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">◀</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="secondary" size="sm">▶</Button>
          </div>
        </div>
      </Card>
      
      {/* Modal de Cadastro/Edição */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={editingItem ? 'Editar Instituição' : 'Nova Instituição'}
        size="lg"
        footer={
          <>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              {editingItem ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Tipo" required>
              <Select
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                placeholder="Selecione o tipo"
                options={[
                  { value: 'tribunal', label: 'Tribunal' },
                  { value: 'escritorio', label: 'Escritório' },
                  { value: 'banco', label: 'Banco' },
                  { value: 'orgao_publico', label: 'Órgão Público' },
                  { value: 'cartorio', label: 'Cartório' },
                  { value: 'administradora', label: 'Administradora' }
                ]}
              />
            </FormField>
            
            <FormField label="Nome" required>
              <Input
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                placeholder="Nome completo da instituição"
              />
            </FormField>
            
            <FormField label="Sigla">
              <Input
                value={formData.sigla}
                onChange={(e) => setFormData({...formData, sigla: e.target.value})}
                placeholder="Ex: TJSP, BB, INPI"
              />
            </FormField>
            
            <FormField label="CNPJ" hint="Apenas para instituições privadas">
              <Input
                value={formData.cnpj}
                onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                placeholder="00.000.000/0001-00"
              />
            </FormField>
            
            <FormField label="Esfera" hint="Apenas para tribunais e órgãos públicos">
              <Select
                value={formData.esfera}
                onChange={(e) => setFormData({...formData, esfera: e.target.value})}
                placeholder="Selecione a esfera"
                options={[
                  { value: 'federal', label: 'Federal' },
                  { value: 'estadual', label: 'Estadual' },
                  { value: 'municipal', label: 'Municipal' }
                ]}
              />
            </FormField>
            
            <FormField label="UF" required>
              <Select
                value={formData.uf}
                onChange={(e) => setFormData({...formData, uf: e.target.value})}
                placeholder="Selecione o estado"
                options={[
                  { value: 'SP', label: 'São Paulo' },
                  { value: 'RJ', label: 'Rio de Janeiro' },
                  { value: 'MG', label: 'Minas Gerais' },
                  { value: 'DF', label: 'Distrito Federal' },
                  { value: 'RS', label: 'Rio Grande do Sul' }
                ]}
              />
            </FormField>
            
            <FormField label="Cidade" required>
              <Input
                value={formData.cidade}
                onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                placeholder="Nome da cidade"
              />
            </FormField>
            
            <FormField label="Status">
              <Select
                value={formData.ativo ? 'true' : 'false'}
                onChange={(e) => setFormData({...formData, ativo: e.target.value === 'true'})}
                options={[
                  { value: 'true', label: 'Ativo' },
                  { value: 'false', label: 'Inativo' }
                ]}
              />
            </FormField>
          </div>
        </form>
      </Modal>
    </div>
  );
}
