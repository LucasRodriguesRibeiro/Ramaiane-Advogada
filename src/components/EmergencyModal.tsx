import React, { useState, useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  MessageCircle, 
  Shield, 
  ShieldCheck, 
  Lock, 
  Scale, 
  Target, 
  ChevronDown 
} from 'lucide-react';
import { EmergencyContact } from '../types';
import dobra2Img from '../assets/images/dobra2.jpeg';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

const AREAS_ATUACAO = [
  'Defesa criminal',
  'PENAL EMPRESARIAL E ECONÔMICO',
  'DIREITO PENAL MÉDICO E DA SAÚDE',
];

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ 
  isOpen, 
  onClose, 
  contact 
}) => {
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceArea, setPracticeArea] = useState('');

  useEffect(() => {
    if (isOpen) {
      setPersonName('');
      setPhone('');
      setPracticeArea('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      `*ATENDIMENTO JURÍDICO - DRA. RAMAIANE*`,
      ``,
    ];

    if (personName.trim()) {
      lines.push(`*Nome:* ${personName.trim()}`);
    }

    if (phone.trim()) {
      lines.push(`*WhatsApp:* ${phone.trim()}`);
    }

    if (practiceArea.trim()) {
      lines.push(`*Área de Atuação:* ${practiceArea.trim()}`);
    }

    lines.push(``);
    lines.push(`Olá, Dra. Ramaiane. Gostaria de solicitar atendimento jurídico.`);

    const message = lines.join('\n');
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirectEmergency = () => {
    const directMsg = "Olá, Dra. Ramaiane. Preciso de atendimento criminal urgente.";
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(directMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#B8BBC0] hover:text-[#F7F7F5] hover:bg-[#1A1C22] rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 border-b border-[#252830]/80">
          <div className="flex items-center space-x-3.5">
            {/* Avatar of Dra. Ramaiane */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#B8BBC0]/60 shrink-0 shadow-md bg-[#18191B]">
              <img
                src={dobra2Img}
                alt="Dra. Ramaiane"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-serif-title text-xl sm:text-2xl font-normal text-[#F7F7F5] leading-tight">
                Falar com a advogada
              </h2>
              <p className="text-xs text-[#B8BBC0] pt-0.5 font-light">
                Atendimento sigiloso e exclusivo
              </p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 max-h-[calc(85vh-140px)] overflow-y-auto custom-scrollbar">
          
          {/* Info Banner */}
          <div className="flex items-start space-x-3 p-3.5 bg-[#14151B] border border-[#B8BBC0]/20 rounded-lg text-left">
            <ShieldCheck className="w-5 h-5 text-[#B8BBC0] shrink-0 mt-0.5" />
            <p className="text-xs text-[#B8BBC0] font-light leading-relaxed">
              Preencha os dados abaixo para falar diretamente com a Dra. Ramaiane. Responderemos o mais breve possível.
            </p>
          </div>

          {/* Field: Seu Nome */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              SEU NOME
            </label>
            <input
              type="text"
              required
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Ex.: João da Silva"
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
            />
          </div>

          {/* Field: Número */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              NÚMERO
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8BBC0]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <input
                type="tel"
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(92) 90000-0000"
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Field: Área de Atuação */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              ÁREA DE ATUAÇÃO
            </label>
            <div className="relative">
              <select
                required
                value={practiceArea}
                onChange={(e) => setPracticeArea(e.target.value)}
                className={`w-full px-3.5 py-2.5 pr-9 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs focus:outline-none transition-colors appearance-none cursor-pointer ${
                  practiceArea === '' ? 'text-[#5A5D66]' : 'text-[#F7F7F5]'
                }`}
              >
                <option value="" disabled className="text-[#5A5D66] bg-[#0E0F12]">
                  Selecione a área de atuação
                </option>
                {AREAS_ATUACAO.map((area) => (
                  <option key={area} value={area} className="text-[#F7F7F5] bg-[#0E0F12]">
                    {area}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#B8BBC0]">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Security Note */}
          <div className="flex items-center space-x-2 text-[10.5px] text-[#B8BBC0] pt-1 text-left">
            <Lock className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0" />
            <span className="leading-snug">
              Seus dados estão protegidos e serão utilizados apenas para contato relacionado ao seu atendimento.
            </span>
          </div>

          {/* Main Action: Enviar Mensagem */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2.5 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>ENVIAR MENSAGEM</span>
            </button>

            {/* Fast Track / Urgência criminal */}
            <button
              type="button"
              onClick={handleDirectEmergency}
              className="w-full py-2.5 px-4 bg-[#14151B] hover:bg-[#1A1C24] border border-[#2D3039] hover:border-[#B8BBC0]/50 rounded-md text-xs text-[#B8BBC0] hover:text-white font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Urgência criminal? Falar agora via WhatsApp</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-3 border-t border-[#252830] grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-[#B8BBC0]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Atendimento sigiloso</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Análise estratégica</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Defesa especializada</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
