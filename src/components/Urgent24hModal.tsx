import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { EmergencyContact } from '../types';

interface Urgent24hModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

const SITUACOES = [
  'Prisão em flagrante',
  'Operação policial',
  'Tráfico de drogas',
  'Organização criminosa',
  'Mandado de prisão',
  'Audiência de custódia',
];

export const Urgent24hModal: React.FC<Urgent24hModalProps> = ({
  isOpen,
  onClose,
  contact,
}) => {
  const [selectedSituacao, setSelectedSituacao] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedSituacao('');
      setFullName('');
      setPhone('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Format phone as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
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
      `🚨 *PLANTÃO CRIMINAL 24H - DRA. RAMAIANE* 🚨`,
      ``,
    ];

    if (selectedSituacao) {
      lines.push(`*Situação:* ${selectedSituacao}`);
    }
    if (fullName.trim()) {
      lines.push(`*Nome completo:* ${fullName.trim()}`);
    }
    if (phone.trim()) {
      lines.push(`*Telefone / WhatsApp:* ${phone.trim()}`);
    }

    lines.push(``);
    lines.push(`Olá, Dra. Ramaiane. Preciso de atendimento imediato e sigiloso de plantão criminal.`);

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
        className="relative w-full max-w-[480px] my-6 bg-[#0E0F12] border border-[#DC2626]/40 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#71717A] hover:text-[#F7F7F5] hover:bg-[#1E1F24] rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Container */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Header */}
          <div className="space-y-1.5 text-left pr-8">
            <h2 className="font-serif-title text-2xl sm:text-[26px] font-normal text-[#D84242] leading-tight">
              Plantão criminal 24h
            </h2>
            <p className="text-xs sm:text-[13px] text-[#A1A1AA] font-light leading-relaxed">
              Atendimento imediato e sigiloso. Conte o que está acontecendo que priorizamos seu caso.
            </p>
          </div>

          <div className="border-t border-[#222328]"></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Situation Grid */}
            <div className="space-y-2 text-left">
              <label className="block text-[11px] font-semibold tracking-wider text-[#71717A] uppercase">
                QUAL É A SITUAÇÃO?
              </label>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {SITUACOES.map((sit) => {
                  const isSelected = selectedSituacao === sit;
                  return (
                    <button
                      key={sit}
                      type="button"
                      onClick={() => setSelectedSituacao(isSelected ? '' : sit)}
                      className={`py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg text-xs sm:text-[13px] font-normal text-center transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#2A1215] border-[#DC2626] text-white font-medium ring-1 ring-[#DC2626]/50 shadow-sm'
                          : 'bg-[#18191E] border-[#2A2B32] text-[#E4E4E7] hover:bg-[#202128] hover:border-[#3D3F49]'
                      }`}
                    >
                      {sit}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input: Nome completo */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs text-[#A1A1AA] font-normal">
                Nome completo
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex.: Maria da Silva"
                className="w-full px-3.5 py-2.5 sm:py-3 bg-[#18191E] border border-[#2A2B32] focus:border-[#DC2626]/80 rounded-lg text-xs sm:text-sm text-[#F7F7F5] placeholder-[#52525B] focus:outline-none transition-colors"
              />
            </div>

            {/* Input: Telefone / WhatsApp */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs text-[#A1A1AA] font-normal">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(92) 90000-0000"
                className="w-full px-3.5 py-2.5 sm:py-3 bg-[#18191E] border border-[#2A2B32] focus:border-[#DC2626]/80 rounded-lg text-xs sm:text-sm text-[#F7F7F5] placeholder-[#52525B] focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 px-4 rounded-lg text-center text-sm sm:text-[15px] font-semibold text-white bg-[#C53030] hover:bg-[#B91C1C] active:scale-[0.99] transition-all shadow-lg shadow-red-950/40 cursor-pointer"
              >
                Solicitar atendimento imediato
              </button>

              <p className="text-center text-xs text-[#71717A] font-light pt-2.5">
                Atendimento 100% sigiloso
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
