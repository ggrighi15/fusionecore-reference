import React, { useState } from 'react';
import { Search, Plus, Eye, Award, ExternalLink, Filter } from 'lucide-react';
import { Card, StatCard } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { SearchInput, Select } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { mockMarcas, formatDate } from '../../data/mock/mockData';
import { MarcaModal } from '../../components/modals/MarcaModal';

export default function MarcasListagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  const filteredMarcas = mockMarcas.filter(marca => {
    const matchesSearch = marca.nomeMarca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         marca.numeroRegistro.includes(searchTerm) ||
                         marca.titular.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || marca.status === statusFilter;
    const matchesTipo = !tipoFilter || marca.tipo === tipoFilter;
    
    return matchesSearch && matchesStatus && matchesTipo;
  });
  
  const countByStatus = (status) => {
    return mockMarcas.filter(m => m.status === status).length;
  };
  
  const getStatusLabel = (status) => {
    const labels = {
      concedida: 'Concedida',
      em_exame: 'Em Exame',
      indeferida: 'Indeferida',
      depositada: 'Depositada'
    };
    return labels[status] || status;
  };
  
  const getTipoLabel = (tipo) => {
    const labels = {
      nominativa: 'Nominativa',
      figurativa: 'Figurativa',
      mista: 'Mista',
      tridimensional: 'Tridimensional'
    };
    return labels[tipo] || tipo;
  };
  
  const getAnosRestantes = (dataVencimento) => {
    if (!dataVencimento) return null;
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    const anos = Math.floor((vencimento - hoje) / (1000 * 60 * 60 * 24 * 365));
    return anos;
  };
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gestão de Marcas</h1>
          <p className="text-gray-400 mt-1">Propriedade intelectual - Registro INPI</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <ExternalLink size={18} className="mr-2" />
            Consultar INPI
          </Button>
          <Button variant="primary" onClick={() => { setEditingItem(null); setModalOpen(true); }}>
            <Plus size={18} className="mr-2" />
            Nova Marca
          </Button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total de Marcas"
          value={mockMarcas.length}
          icon="®"
        />
        <StatCard
          title="Concedidas"
          value={countByStatus('concedida')}
          delta={10}
          icon="✅"
        />
        <StatCard
          title="Em Exame"
          value={countByStatus('em_exame')}
          icon="🔍"
        />
        <StatCard
          title="Indeferidas"
          value={countByStatus('indeferida')}
          delta={-5}
          icon="❌"
        />
      </div>
      
      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por marca, número, titular..."
            />
          </div>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="Status: Todos"
            options={[
              { value: 'concedida', label: 'Concedida' },
              { value: 'em_exame', label: 'Em Exame' },
              { value: 'indeferida', label: 'Indeferida' },
              { value: 'depositada', label: 'Depositada' }
            ]}
          />
          <Select
            value={tipoFilter}
            onChange={(e) => setTipoFilter(e.target.value)}
            placeholder="Tipo: Todos"
            options={[
              { value: 'nominativa', label: 'Nominativa' },
              { value: 'figurativa', label: 'Figurativa' },
              { value: 'mista', label: 'Mista' },
              { value: 'tridimensional', label: 'Tridimensional' }
            ]}
          />
        </div>
      </Card>
      
      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Marca</TableHead>
              <TableHead>Número INPI</TableHead>
              <TableHead>Titular</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Classes Nice</TableHead>
              <TableHead>Vigência</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMarcas.map((marca) => {
              const anosRestantes = getAnosRestantes(marca.dataVencimento);
              
              return (
                <TableRow key={marca.id}>
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-[#CDFF00]" />
                      <span>{marca.nomeMarca}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-gray-400">
                    {marca.numeroRegistro}
                  </TableCell>
                  <TableCell>{marca.titular}</TableCell>
                  <TableCell>
                    <Badge variant="info">
                      {getTipoLabel(marca.tipo)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {marca.classesNice.map((classe, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 bg-[#CDFF00]/20 text-[#CDFF00] text-xs rounded-full font-mono"
                        >
                          {classe}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {marca.dataConcessao ? (
                        <>
                          <div className="text-gray-400">
                            {formatDate(marca.dataConcessao)} → {formatDate(marca.dataVencimento)}
                          </div>
                          {anosRestantes !== null && (
                            <div className={`text-xs mt-1 ${
                              anosRestantes <= 1 ? 'text-yellow-500' : 'text-green-500'
                            }`}>
                              {anosRestantes} ano(s) restante(s)
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-gray-500">
                          Depositada em {formatDate(marca.dataDeposito)}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge status={marca.status}>
                      {getStatusLabel(marca.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {/* Info Box */}
        <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Award size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-purple-400">
              <p className="font-semibold mb-1">💡 Sobre Marcas e Classes Nice</p>
              <p>
                As <strong>Classes Nice</strong> categorizam produtos e serviços (1-45). 
                Marcas concedidas têm vigência de <strong>10 anos</strong>, renováveis indefinidamente.
                Acompanhe os prazos de renovação para manter a proteção.
              </p>
            </div>
          </div>
        </div>
        
        {/* Classes Nice Reference */}
        <div className="mt-4 p-4 bg-black/20 rounded-lg">
          <details>
            <summary className="cursor-pointer text-[#CDFF00] font-semibold mb-2">
              📚 Principais Classes Nice (clique para expandir)
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-400 mt-2">
              <div><strong className="text-[#CDFF00]">09:</strong> Software, apps, tecnologia</div>
              <div><strong className="text-[#CDFF00]">25:</strong> Vestuário, calçados</div>
              <div><strong className="text-[#CDFF00]">35:</strong> Publicidade, gestão de negócios</div>
              <div><strong className="text-[#CDFF00]">36:</strong> Seguros, serviços financeiros</div>
              <div><strong className="text-[#CDFF00]">41:</strong> Educação, entretenimento</div>
              <div><strong className="text-[#CDFF00]">42:</strong> Serviços científicos, TI</div>
              <div><strong className="text-[#CDFF00]">43:</strong> Restaurantes, hotelaria</div>
              <div><strong className="text-[#CDFF00]">45:</strong> Serviços jurídicos</div>
            </div>
          </details>
        </div>
        
        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
          <p>Mostrando {filteredMarcas.length} de {mockMarcas.length} registros</p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">◀</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="secondary" size="sm">▶</Button>
          </div>
        </div>
      </Card>
      
      <MarcaModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingItem(null); }}
        editingItem={editingItem}
      />
    </div>
  );
}
