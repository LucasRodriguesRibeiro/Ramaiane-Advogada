import React, { useState, useEffect } from 'react';
import { 
  X, 
  Scale, 
  ShieldCheck, 
  Lock, 
  MessageCircle, 
  Check, 
  FileText, 
  MoreHorizontal,
  LucideIcon 
} from 'lucide-react';
import { EmergencyContact } from '../types';

interface DrugsLawModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

// Custom Handcuffs SVG icon matching the reference screenshot
const HandcuffsIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className || "w-5 h-5"} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.6" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="6" cy="14" r="3.5" />
    <circle cx="18" cy="14" r="3.5" />
    <path d="M9.5 14h5" />
    <path d="M6 10.5V8a2.5 2.5 0 0 1 2.5-2.5h1" />
    <path d="M18 10.5V8a2.5 2.5 0 0 0-2.5-2.5h-1" />
  </svg>
);

interface ServiceOption {
  id: string;
  label: string;
  icon: LucideIcon | React.FC<{ className?: string }>;
}

export const DrugsLawModal: React.FC<DrugsLawModalProps> = ({
  isOpen,
  onClose,
  contact
}) => {
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [cityState, setCityState] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Investigação / Inquérito Policial');
  const [situation, setSituation] = useState('');

  const serviceOptions: ServiceOption[] = [
    {
      id: 'inquerito',
      label: 'Investigação / Inquérito Policial',
      icon: ShieldCheck
    },
    {
      id: 'flagrante',
      label: 'Prisão em Flagrante',
      icon: HandcuffsIcon
    },
    {
      id: 'processo',
      label: 'Processo Criminal',
      icon: FileText
    },
    {
      id: 'recursos',
      label: 'Recursos',
      icon: Scale
    },
    {
      id: 'outro',
      label: 'Outro',
      icon: MoreHorizontal
    }
  ];

  // Reset form when opening
  useEffect(() => {
    if (isOpen) {
      setPersonName('');
      setEmail('');
      setCityState('');
      setPhone('');
      setServiceType('Investigação / Inquérito Policial');
      setSituation('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      `*ATENDIMENTO ESPECIALIZADO*`,
      `*CRIMES DA LEI DE DROGAS*`,
      ``,
    ];

    if (personName.trim()) {
      lines.push(`*Nome:* ${personName.trim()}`);
    }

    if (email.trim()) {
      lines.push(`*E-mail:* ${email.trim()}`);
    }

    if (cityState.trim()) {
      lines.push(`*Cidade/Estado:* ${cityState.trim()}`);
    }

    if (phone.trim()) {
      lines.push(`*WhatsApp:* ${phone.trim()}`);
    }

    if (serviceType.trim()) {
      lines.push(`*Tipo de Atendimento:* ${serviceType.trim()}`);
    }

    if (situation.trim()) {
      lines.push(``);
      lines.push(`*Descrição da Situação:*`);
      lines.push(situation.trim());
    }

    const message = lines.join('\n');
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
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
        <div className="p-6 sm:p-8 pb-4 text-center border-b border-[#252830]/80">
          <div className="flex flex-col items-center space-y-2.5">
            {/* Silver Circular Icon */}
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#B8BBC0]/50 bg-[#16171C] flex items-center justify-center text-[#F7F7F5] shadow-lg shadow-white/5">
              <Scale className="w-7 h-7 stroke-[1.5]" />
            </div>

            <div className="space-y-1">
              <div className="font-serif-title text-xl sm:text-2xl font-normal text-[#F7F7F5] uppercase tracking-wide">
                ATENDIMENTO ESPECIALIZADO
              </div>
              <h2 className="text-sm sm:text-base font-bold text-[#E2E4E8] uppercase tracking-widest">
                CRIMES DA LEI DE DROGAS
              </h2>
            </div>

            <div className="text-xs text-[#B8BBC0] font-light leading-relaxed max-w-md pt-1">
              <p>Atendimento sigiloso e análise estratégica do seu caso.</p>
              <p>Preencha os dados abaixo para solicitar atendimento.</p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[calc(85vh-180px)] overflow-y-auto custom-scrollbar">
          
          {/* Row 1: Name & Email in 2 Cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
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

            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                E-MAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex.: joao@email.com"
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Location & WhatsApp in 2 Cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                CIDADE / ESTADO
              </label>
              <input
                type="text"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                placeholder="Ex.: Manaus - AM"
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                NÚMERO PARA CONTATO (WHATSAPP)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8BBC0]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(92) 90000-0000"
                  className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Tipo de Atendimento (5 Interactive Cards Grid) */}
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              TIPO DE ATENDIMENTO
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {serviceOptions.map((opt) => {
                const OptionIcon = opt.icon;
                const isSelected = serviceType === opt.label;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setServiceType(opt.label)}
                    className={`relative p-2.5 sm:p-3 rounded-md border flex flex-col items-center justify-center text-center space-y-1.5 transition-all cursor-pointer min-h-[74px] ${
                      isSelected
                        ? 'border-[#B8BBC0] bg-[#E5E7EB]/20 text-[#FFFFFF] shadow-sm'
                        : 'border-[#2D3039] bg-[#07080A] text-[#B8BBC0] hover:border-[#74777C]/60 hover:text-[#F7F7F5]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-[#E5E7EB] text-[#0B0B0C] flex items-center justify-center">
                        <Check className="w-2 h-2 stroke-[3]" />
                      </div>
                    )}
                    <OptionIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-[#FFFFFF]' : 'text-[#8F9299]'}`} />
                    <span className="text-[10px] sm:text-[10.5px] font-medium leading-tight line-clamp-2">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Brief Description */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              BREVE DESCRIÇÃO DA SITUAÇÃO
            </label>
            <textarea
              rows={3}
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="Descreva brevemente o seu caso para que possamos entender melhor."
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Silver CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>SOLICITAR ATENDIMENTO</span>
              <span className="text-base font-bold leading-none">→</span>
            </button>
          </div>

          {/* Trust Badges Row */}
          <div className="pt-3 border-t border-[#252830] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-center text-[10.5px] sm:text-[11px] text-[#B8BBC0]">
            <div className="flex items-center space-x-1.5">
              <Lock className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Atendimento sigiloso</span>
            </div>
            <span className="text-[#3D404A] hidden sm:inline">|</span>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Análise estratégica</span>
            </div>
            <span className="text-[#3D404A] hidden sm:inline">|</span>
            <div className="flex items-center space-x-1.5">
              <Scale className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Defesa especializada</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

