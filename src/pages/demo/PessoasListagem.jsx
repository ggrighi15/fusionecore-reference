import React, { useState } from 'react';
import { Search, Plus, Eye, Edit2, Filter } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockPessoas } from '../../data/mock/mockData';

export default function PessoasListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('');
  
  const filteredPessoas = mockPessoas.filter(pessoa => {
    const matchesSearch = pessoa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pessoa.cpfCnpj.includes(searchTerm);
    const matchesTipo = !tipoFilter || pessoa.tipo === tipoFilter;
    const matchesEstado = !estadoFilter || pessoa.estado === estadoFilter;
    
    return matchesSearch && matchesTipo && matchesEstado;
  });
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Cadastro de Pessoas</h1>
          <p className="text-gray-400 mt-1">Gerenciamento de pessoas físicas e jurídicas</p>
        </div>
        <Button variant="primary">
          <Plus size={18} className="mr-2" />
          Nova Pessoa
        </Button>
      </div>
      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome, CPF/CNPJ..."
            />
          </div>
          <Select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            placeholder="Tipo: Todos"
            options={[
              { value: 'fisica', label: 'Pessoa Física' },
              { value: 'juridica', label: 'Pessoa Jurídica' }
            ]}
          />
          <Select
            value={estadoFilter}
            onChange={(e) => setEstadoFilter(e.target.value)}
            placeholder="Estado: Todos"
            options={[
              { value: 'SP', label: 'São Paulo' },
              { value: 'RJ', label: 'Rio de Janeiro' },
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
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>CPF/CNPJ</TableHead>
              <TableHead>Cidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPessoas.map((pessoa) => (
              <TableRow key={pessoa.id}>
                <TableCell className="font-medium text-white">
                  {pessoa.nome}
                  {pessoa.nomeFantasia && (
                    <span className="block text-xs text-gray-500">{pessoa.nomeFantasia}</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={pessoa.tipo === 'fisica' ? 'info' : 'primary'}>
                    {pessoa.tipo === 'fisica' ? 'Física' : 'Jurídica'}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono">{pessoa.cpfCnpj}</TableCell>
                <TableCell>{pessoa.cidade} - {pessoa.estado}</TableCell>
                <TableCell>
                  <Badge variant={pessoa.ativo ? 'success' : 'danger'}>
                    {pessoa.ativo ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredPessoas.length} de {mockPessoas.length} registros</p>
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
