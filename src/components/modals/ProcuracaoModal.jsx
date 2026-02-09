import React, { useState } from 'react';
import { Modal, FormField } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input, Select } from '../ui/Input';

export function ProcuracaoModal({ isOpen, onClose, editingItem }) {
  const [formData, setFormData] = useState(editingItem || {
    numero: '',
    tipo: 'publica',
    outorgante: '',
    outorgado: '',
    dataEmissao: '',
    dataVencimento: '',
    poderes: '',
    status: 'vigente'
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando procuração:', formData);
    alert(editingItem ? 'Procuração atualizada com sucesso!' : 'Procuração cadastrada com sucesso!');
    onClose();
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editingItem ? 'Editar Procuração' : 'Nova Procuração'}
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
          <FormField label="Número" required>
            <Input
              value={formData.numero}
              onChange={(e) => setFormData({...formData, numero: e.target.value})}
              placeholder="Ex: 001/2024"
            />
          </FormField>
          
          <FormField label="Tipo" required>
            <Select
              value={formData.tipo}
              onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              options={[
                { value: 'publica', label: 'Pública (Cartório)' },
                { value: 'particular', label: 'Particular' }
              ]}
            />
          </FormField>
          
          <FormField label="Outorgante" required hint="Quem concede os poderes">
            <Input
              value={formData.outorgante}
              onChange={(e) => setFormData({...formData, outorgante: e.target.value})}
              placeholder="Nome completo"
            />
          </FormField>
          
          <FormField label="Outorgado" required hint="Quem recebe os poderes">
            <Input
              value={formData.outorgado}
              onChange={(e) => setFormData({...formData, outorgado: e.target.value})}
              placeholder="Nome completo"
            />
          </FormField>
          
          <FormField label="Data de Emissão" required>
            <Input
              type="date"
              value={formData.dataEmissao}
              onChange={(e) => setFormData({...formData, dataEmissao: e.target.value})}
            />
          </FormField>
          
          <FormField label="Data de Vencimento" hint="Deixe em branco para prazo indeterminado">
            <Input
              type="date"
              value={formData.dataVencimento || ''}
              onChange={(e) => setFormData({...formData, dataVencimento: e.target.value})}
            />
          </FormField>
          
          <FormField label="Poderes Conferidos" required className="md:col-span-2">
            <textarea
              value={formData.poderes}
              onChange={(e) => setFormData({...formData, poderes: e.target.value})}
              placeholder="Descreva os poderes conferidos..."
              rows={4}
              className="w-full px-4 py-2 bg-black/40 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CDFF00]/50 focus:border-[#CDFF00] transition-all"
            />
          </FormField>
          
          <FormField label="Status">
            <Select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              options={[
                { value: 'vigente', label: 'Vigente' },
                { value: 'vencida', label: 'Vencida' },
                { value: 'vencendo', label: 'Vencendo' }
              ]}
            />
          </FormField>
        </div>
        
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
          <p className="text-sm text-purple-400">
            📜 <strong>Procurações Públicas:</strong> Lavradas em cartório, maior validade jurídica.<br/>
            📄 <strong>Procurações Particulares:</strong> Assinadas entre partes, válidas para fins específicos.
          </p>
        </div>
      </form>
    </Modal>
  );
}
