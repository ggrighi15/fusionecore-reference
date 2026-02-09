import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Upload, Sparkles, FileText, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export function UploadContratoIA({ isOpen, onClose, onSave }) {
  const [step, setStep] = useState(1); // 1: upload, 2: processing, 3: review
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || 
        droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(droppedFile);
    } else {
      alert('Por favor, envie apenas arquivos PDF ou DOCX');
    }
  };
  
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  
  const processarComIA = async () => {
    setIsProcessing(true);
    setStep(2);
    
    // Simula processamento IA (3 segundos)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Dados mockados extraídos pela "IA"
    const dadosExtraidos = {
      numero: 'CTR-2024-' + Math.floor(Math.random() * 1000),
      tipo: 'contrato',
      nome: 'Contrato de Prestação de Serviços Jurídicos',
      cliente: 'VIPAL Tecnologia Ltda',
      valor: 150000.00,
      dataEmissao: '2024-01-15',
      dataVencimento: '2025-01-15',
      status: 'vigente',
      partes: [
        { nome: 'VIPAL Tecnologia Ltda', cpfCnpj: '12.345.678/0001-90', tipo: 'contratante' },
        { nome: 'Escritório Silva & Associados', cpfCnpj: '98.765.432/0001-10', tipo: 'contratado' }
      ],
      clausulas: [
        { numero: '1', titulo: 'Objeto', resumo: 'Prestação de serviços jurídicos especializados em direito empresarial' },
        { numero: '2', titulo: 'Prazo', resumo: 'Vigência de 12 meses a partir da assinatura' },
        { numero: '3', titulo: 'Valor', resumo: 'Valor total de R$ 150.000,00 dividido em 12 parcelas mensais' },
        { numero: '4', titulo: 'Rescisão', resumo: 'Possibilidade de rescisão com aviso prévio de 30 dias' }
      ],
      parecerExecutivo: 'Contrato padrão de prestação de serviços jurídicos com cláusulas equilibradas. Valor compatível com mercado. Prazo adequado para avaliação de resultados. Recomenda-se aprovação.',
      parecerTecnico: 'Análise técnica: (1) Objeto bem definido; (2) Prazo determinado de 12 meses; (3) Valor dentro da média de mercado (R$ 12.500/mês); (4) Cláusula de rescisão presente e razoável; (5) Não identificados vícios ou cláusulas abusivas. Parecer favorável à assinatura.',
      riscos: [
        { nivel: 'baixo', descricao: 'Ausência de cláusula de confidencialidade específica' },
        { nivel: 'baixo', descricao: 'Foro de eleição não especificado' }
      ],
      confianca: 95
    };
    
    setExtractedData(dadosExtraidos);
    setIsProcessing(false);
    setStep(3);
  };
  
  const handleSalvar = () => {
    if (onSave) {
      onSave(extractedData);
    }
    alert('Contrato salvo com sucesso!');
    handleClose();
  };
  
  const handleClose = () => {
    setStep(1);
    setFile(null);
    setExtractedData(null);
    setIsProcessing(false);
    onClose();
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Upload de Contrato com IA"
      size="xl"
      footer={
        step === 3 ? (
          <>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSalvar}>
              <CheckCircle size={16} className="mr-2" />
              Salvar Contrato
            </Button>
          </>
        ) : null
      }
    >
      {/* Step 1: Upload */}
      {step === 1 && (
        <div className="space-y-6">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all cursor-pointer ${
              isDragging 
                ? 'border-[#CDFF00] bg-[#CDFF00]/10' 
                : file 
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-gray-700 hover:border-[#CDFF00]/50'
            }`}
            onClick={() => document.getElementById('file-input').click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".pdf,.docx,.doc"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            {file ? (
              <div className="space-y-3">
                <FileText size={48} className="mx-auto text-green-400" />
                <div>
                  <p className="text-white font-medium text-lg">{file.name}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); setFile(null); }}>
                  Remover arquivo
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Upload size={48} className="mx-auto text-gray-500" />
                <div>
                  <p className="text-white font-medium mb-2">Arraste o arquivo ou clique para selecionar</p>
                  <p className="text-sm text-gray-400">PDF, DOCX, DOC (até 10MB)</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Sparkles size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-400">
                <p className="font-semibold mb-2">🤖 A IA irá extrair automaticamente:</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Partes contratantes (nomes, CPF/CNPJ)</li>
                  <li>Valores, datas e prazos</li>
                  <li>Cláusulas principais e resumos</li>
                  <li>Parecer executivo e técnico</li>
                  <li>Identificação de riscos</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              variant="primary" 
              onClick={processarComIA}
              disabled={!file}
            >
              <Sparkles size={16} className="mr-2" />
              Processar com IA
            </Button>
          </div>
        </div>
      )}
      
      {/* Step 2: Processing */}
      {step === 2 && (
        <div className="py-12 text-center space-y-6">
          <Loader size={64} className="mx-auto text-[#CDFF00] animate-spin" />
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Processando documento...</h3>
            <p className="text-gray-400">A IA está analisando o contrato e extraindo informações</p>
          </div>
          
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Leitura do documento</span>
              <CheckCircle size={16} className="text-green-400" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Extração de dados</span>
              <Loader size={16} className="text-[#CDFF00] animate-spin" />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Análise de cláusulas</span>
              <div className="w-4 h-4 border-2 border-gray-700 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Geração de pareceres</span>
              <div className="w-4 h-4 border-2 border-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Step 3: Review */}
      {step === 3 && extractedData && (
        <div className="space-y-6">
          {/* Confiança */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-400" />
                <div>
                  <p className="text-white font-semibold">Extração concluída com sucesso!</p>
                  <p className="text-sm text-gray-400">Revise os dados antes de salvar</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">{extractedData.confianca}%</p>
                <p className="text-xs text-gray-400">Confiança</p>
              </div>
            </div>
          </div>
          
          {/* Dados Básicos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">📄 Dados do Contrato</h3>
            <div className="grid grid-cols-2 gap-4 p-4 bg-black/40 rounded-lg border border-gray-800">
              <div>
                <p className="text-xs text-gray-500">Número</p>
                <p className="text-white font-mono">{extractedData.numero}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tipo</p>
                <p className="text-white capitalize">{extractedData.tipo}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-500">Nome</p>
                <p className="text-white">{extractedData.nome}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Cliente</p>
                <p className="text-white">{extractedData.cliente}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Valor</p>
                <p className="text-white font-bold text-[#CDFF00]">
                  R$ {extractedData.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Emissão</p>
                <p className="text-white">{new Date(extractedData.dataEmissao).toLocaleDateString('pt-BR')}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Vencimento</p>
                <p className="text-white">{new Date(extractedData.dataVencimento).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>
          </div>
          
          {/* Partes */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">👥 Partes Contratantes</h3>
            <div className="space-y-2">
              {extractedData.partes.map((parte, i) => (
                <div key={i} className="p-3 bg-black/40 rounded-lg border border-gray-800 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{parte.nome}</p>
                    <p className="text-xs text-gray-400">CNPJ: {parte.cpfCnpj}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full capitalize">
                    {parte.tipo}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cláusulas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">📋 Cláusulas Principais</h3>
            <div className="space-y-2">
              {extractedData.clausulas.map((clausula, i) => (
                <details key={i} className="p-3 bg-black/40 rounded-lg border border-gray-800">
                  <summary className="cursor-pointer text-white font-medium">
                    Cláusula {clausula.numero} - {clausula.titulo}
                  </summary>
                  <p className="text-sm text-gray-400 mt-2">{clausula.resumo}</p>
                </details>
              ))}
            </div>
          </div>
          
          {/* Pareceres */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                Parecer Executivo
              </h4>
              <p className="text-sm text-purple-400">{extractedData.parecerExecutivo}</p>
            </div>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <FileText size={16} className="text-blue-400" />
                Parecer Técnico
              </h4>
              <p className="text-sm text-blue-400">{extractedData.parecerTecnico}</p>
            </div>
          </div>
          
          {/* Riscos */}
          {extractedData.riscos.length > 0 && (
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <AlertCircle size={16} className="text-yellow-400" />
                Riscos Identificados
              </h4>
              <ul className="space-y-2">
                {extractedData.riscos.map((risco, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-yellow-400">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      risco.nivel === 'baixo' ? 'bg-green-500/20 text-green-400' :
                      risco.nivel === 'medio' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {risco.nivel}
                    </span>
                    <span>{risco.descricao}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
