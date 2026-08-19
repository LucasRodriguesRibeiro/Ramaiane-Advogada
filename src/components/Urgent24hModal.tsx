import React, { useState, useEffect } from 'react';
import { 
  X, 
  PhoneCall, 
  AlertCircle, 
  Headphones, 
  ShieldCheck, 
  Lock, 
  MessageCircle 
} from 'lucide-react';
import { EmergencyContact } from '../types';

interface Urgent24hModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const Urgent24hModal: React.FC<Urgent24hModalProps> = ({
  isOpen,
  onClose,
  contact
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [situation, setSituation] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setPhone('');
      setSituation('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      `🚨 *SOLICITAÇÃO DE ATENDIMENTO DE URGÊNCIA 24H* 🚨`,
      ``,
    ];

    if (fullName.trim()) {
      lines.push(`*Nome Completo:* ${fullName.trim()}`);
    }

    if (phone.trim()) {
      lines.push(`*Telefone / WhatsApp:* ${phone.trim()}`);
    }

    if (situation.trim()) {
      lines.push(``);
      lines.push(`*Situação de Urgência:*`);
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
        className="relative w-full max-w-lg my-6 bg-[#0E0F12] border border-red-500/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
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

        {/* Header */}
        <div className="p-6 sm:p-7 pb-4 text-center border-b border-[#252830]/80">
          <h2 className="font-serif-title text-xl sm:text-2xl font-semibold text-[#EF4444] uppercase tracking-wide">
            ATENDIMENTO DE URGÊNCIA 24H
          </h2>
          <div className="text-xs text-[#B8BBC0] font-light pt-1 space-y-0.5">
            <p>Atendimento imediato e sigiloso.</p>
            <p>Descreva sua situação para iniciarmos o contato agora.</p>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 max-h-[calc(85vh-160px)] overflow-y-auto custom-scrollbar">
          
          {/* Red Alert Banner */}
          <div className="flex items-start space-x-3 p-3.5 bg-[#1C0D10] border border-red-500/30 rounded-lg text-left">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-red-300">
                Caso de urgência? Não espere.
              </div>
              <div className="text-xs text-[#B8BBC0] font-light leading-relaxed">
                Nossa equipe está disponível 24 horas para te ajudar.
              </div>
            </div>
          </div>

          {/* Field: Nome Completo */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              NOME COMPLETO
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex.: João da Silva"
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-red-500 rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
            />
          </div>

          {/* Field: Telefone / WhatsApp */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              TELEFONE / WHATSAPP
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-400">
                <MessageCircle className="w-4 h-4 fill-red-400/20" />
              </div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(92) 90000-0000"
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-red-500 rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Field: Situação */}
          <div className="space-y-1.5 text-left">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              SITUAÇÃO (BREVE DESCRIÇÃO)
            </label>
            <textarea
              rows={3}
              required
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="Descreva brevemente o que aconteceu"
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-red-500 rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Security Note */}
          <div className="flex items-center space-x-2 text-[10.5px] text-[#B8BBC0] pt-1 text-left">
            <Lock className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0" />
            <span>
              Seus dados estão protegidos e serão utilizados apenas para contato relacionado ao seu atendimento.
            </span>
          </div>

          {/* Red Urgent CTA Button */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:brightness-110 shadow-lg shadow-red-900/30 transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>SOLICITAR ATENDIMENTO IMEDIATO</span>
            </button>

            <div className="text-center text-xs text-[#B8BBC0] pt-0.5">
              Atendimento 100% sigiloso
            </div>
          </div>

          {/* COMO FUNCIONA Section */}
          <div className="pt-4 border-t border-[#252830] space-y-3 text-left">
            <h3 className="text-[11px] font-bold tracking-widest text-red-400 uppercase">
              COMO FUNCIONA:
            </h3>

            <div className="space-y-2.5 text-xs text-[#B8BBC0]">
              <div className="flex items-start space-x-3">
                <PhoneCall className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Você envia sua situação imediatamente.</span>
              </div>

              <div className="flex items-start space-x-3">
                <Headphones className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Nossa equipe analisa e entra em contato em minutos.</span>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Atendimento sigiloso e suporte 24 horas por dia.</span>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
