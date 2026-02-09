import React, { useState } from 'react';
import { Modal, FormField } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input, Select } from '../ui/Input';
import { X } from 'lucide-react';

export function MarcaModal({ isOpen, onClose, editingItem }) {
  const [formData, setFormData] = useState(editingItem || {
    nomeMarca: '',
    numeroRegistro: '',
    titular: '',
    tipo: 'nominativa',
    classesNice: [],
    dataDeposito: '',
    dataConcessao: '',
    dataVencimento: '',
    status: 'depositada'
  });
  
  const [novaClasse, setNovaClasse] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando marca:', formData);
    alert(editingItem ? 'Marca atualizada com sucesso!' : 'Marca cadastrada com sucesso!');
    onClose();
  };
  
  const adicionarClasse = () => {
    if (novaClasse && !formData.classesNice.includes(novaClasse)) {
      setFormData({
        ...formData,
        classesNice: [...formData.classesNice, novaClasse]
      });
      setNovaClasse('');
    }
  };
  
  const removerClasse = (classe) => {
    setFormData({
      ...formData,
      classesNice: formData.classesNice.filter(c => c !== classe)
    });
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editingItem ? 'Editar Marca' : 'Nova Marca'}
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
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
          <FormField label="Nome da Marca" required>
            <Input
              value={formData.nomeMarca}
              onChange={(e) => setFormData({...formData, nomeMarca: e.target.value})}
              placeholder="Ex: FusioneCore"
            />
          </FormField>
          
          <FormField label="Número INPI" hint="Preencher após depósito">
            <Input
              value={formData.numeroRegistro}
              onChange={(e) => setFormData({...formData, numeroRegistro: e.target.value})}
              placeholder="Ex: 123456789"
            />
          </FormField>
          
          <FormField label="Titular" required>
            <Input
              value={formData.titular}
              onChange={(e) => setFormData({...formData, titular: e.target.value})}
              placeholder="Nome do titular"
            />
          </FormField>
          
          <FormField label="Tipo de Marca" required>
            <Select
              value={formData.tipo}
              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              options={[
                { value: 'nominativa', label: 'Nominativa (só texto)' },
                { value: 'figurativa', label: 'Figurativa (só imagem)' },
                { value: 'mista', label: 'Mista (texto + imagem)' },
                { value: 'tridimensional', label: 'Tridimensional' }
              ]}
            />
          </FormField>
          
          <FormField label="Data de Depósito" required>
            <Input
              type="date"
              value={formData.dataDeposito}
              onChange={(e) => setFormData({...formData, dataDeposito: e.target.value})}
            />
          </FormField>
          
          <FormField label="Data de Concessão" hint="Preencher após concessão">
            <Input
              type="date"
              value={formData.dataConcessao || ''}
              onChange={(e) => setFormData({...formData, dataConcessao: e.target.value})}
            />
          </FormField>
          
          <FormField label="Data de Vencimento" hint="10 anos após concessão">
            <Input
              type="date"
              value={formData.dataVencimento || ''}
              onChange={(e) => setFormData({...formData, dataVencimento: e.target.value})}
            />
          </FormField>
          
          <FormField label="Status" required>
            <Select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              options={[
                { value: 'depositada', label: 'Depositada' },
                { value: 'em_exame', label: 'Em Exame' },
                { value: 'concedida', label: 'Concedida' },
                { value: 'indeferida', label: 'Indeferida' }
              ]}
            />
          </FormField>
        </div>
        
        <FormField label="Classes Nice" required>
          <div className="space-y-3">
            <div className="flex gap-2">
              <Input
                value={novaClasse}
                onChange={(e) => setNovaClasse(e.target.value)}
                placeholder="Ex: 09, 35, 42"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarClasse())}
              />
              <Button type="button" variant="secondary" onClick={adicionarClasse}>
                Adicionar
              </Button>
            </div>
            
            {formData.classesNice.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.classesNice.map((classe, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-[#CDFF00]/20 text-[#CDFF00] text-sm rounded-full font-mono flex items-center gap-2"
                  >
                    {classe}
                    <button
                      type="button"
                      onClick={() => removerClasse(classe)}
                      className="hover:text-red-400 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
            
            <details className="text-xs text-gray-400">
              <summary className="cursor-pointer text-[#CDFF00] mb-2">
                📚 Principais Classes Nice
              </summary>
              <div className="grid grid-cols-2 gap-1 mt-2">
                <div><strong>09:</strong> Software, apps</div>
                <div><strong>25:</strong> Vestuário</div>
                <div><strong>35:</strong> Publicidade</div>
                <div><strong>36:</strong> Serviços financeiros</div>
                <div><strong>41:</strong> Educação</div>
                <div><strong>42:</strong> Serviços de TI</div>
                <div><strong>43:</strong> Restaurantes</div>
                <div><strong>45:</strong> Serviços jurídicos</div>
              </div>
            </details>
          </div>
        </FormField>
        
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-sm text-purple-400">
            ® <strong>Vigência:</strong> Marcas concedidas têm validade de 10 anos, renováveis indefinidamente.
            Acompanhe os prazos para manter a proteção.
          </p>
        </div>
      </form>
    </Modal>
  );
}
