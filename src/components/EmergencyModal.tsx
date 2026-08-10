import React, { useState } from 'react';
import { X, PhoneCall, MessageCircle, Shield } from 'lucide-react';
import { EmergencyContact } from '../types';
import dobra2Img from '../assets/images/dobra2.jpeg';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, contact }) => {
  const [personName, setPersonName] = useState('');
  const [urgencyType, setUrgencyType] = useState('');
  const [city, setCity] = useState('');

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    const baseMessage = "Olá, Dra. Ramaiane. Gostaria de obter informações sobre atendimento jurídico na área criminal e agendar uma consulta.";
    const details: string[] = [];

    if (personName.trim()) details.push(`Nome: ${personName.trim()}`);
    if (urgencyType.trim()) details.push(`Tipo de Ocorrência: ${urgencyType.trim()}`);
    if (city.trim()) details.push(`Cidade/DP: ${city.trim()}`);

    if (details.length > 0) {
      return `${baseMessage}\n\n${details.join('\n')}`;
    }
    return baseMessage;
  };

  const encodedWhatsAppUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-[#0c0d10] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-[#1f2229] bg-[#12141a]">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C5A880]/60 shrink-0 shadow-md bg-[#18191B]">
              <img
                src={dobra2Img}
                alt="Dra. Ramaiane"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#F7F7F5] leading-tight">Dra. Ramaiane</h3>
              <p className="text-xs text-[#B8BBC0] flex items-center gap-1.5 pt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Plantão Criminal 24h
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#74777C] hover:text-[#F7F7F5] transition-colors rounded-lg hover:bg-[#1a1c23]"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8BBC0] mb-1.5">
                Seu nome
              </label>
              <input
                type="text"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Ex: Maria"
                className="w-full px-4 py-2.5 bg-[#07080a] border border-[#2d3039] rounded-lg text-sm text-[#F7F7F5] placeholder-[#5a5d66] focus:outline-none focus:border-[#C5A880]/70 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8BBC0] mb-1.5">
                Motivo da Urgência
              </label>
              <select
                value={urgencyType}
                onChange={(e) => setUrgencyType(e.target.value)}
                className={`w-full px-4 py-2.5 bg-[#07080a] border border-[#2d3039] rounded-lg text-sm focus:outline-none focus:border-[#C5A880]/70 transition-colors ${
                  urgencyType === '' ? 'text-[#5a5d66]' : 'text-[#F7F7F5]'
                }`}
              >
                <option value="" disabled className="text-[#5a5d66] bg-[#0c0d10]">
                  Adicionar motivo
                </option>
                <option value="Prisão em Flagrante / Delegacia" className="text-[#F7F7F5] bg-[#0c0d10]">
                  Prisão em Flagrante / Delegacia
                </option>
                <option value="Audiência de Custódia" className="text-[#F7F7F5] bg-[#0c0d10]">
                  Audiência de Custódia
                </option>
                <option value="Mandado de Prisão / Preventiva" className="text-[#F7F7F5] bg-[#0c0d10]">
                  Mandado de Prisão / Preventiva
                </option>
                <option value="Habeas Corpus de Urgência" className="text-[#F7F7F5] bg-[#0c0d10]">
                  Habeas Corpus de Urgência
                </option>
                <option value="Outro assunto criminal urgente" className="text-[#F7F7F5] bg-[#0c0d10]">
                  Outro assunto criminal urgente
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8BBC0] mb-1.5">
                Cidade / Delegacia
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Manaus - AM / Delegacia de Polícia"
                className="w-full px-4 py-2.5 bg-[#07080a] border border-[#2d3039] rounded-lg text-sm text-[#F7F7F5] placeholder-[#5a5d66] focus:outline-none focus:border-[#C5A880]/70 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {/* Highlighted Main WhatsApp Action Button */}
            <a
              href={encodedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-xl text-center text-sm font-bold uppercase tracking-wider text-[#050506] bg-gradient-to-r from-[#EAD2B2] via-[#F7E7CE] to-[#C5A880] hover:brightness-110 shadow-lg shadow-[#C5A880]/15 transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>FALAR COM ADVOGADA AGORA</span>
            </a>

            {/* Alternative Phone Link */}
            <a
              href={`tel:${contact.phone}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#12141a] hover:bg-[#181a22] border border-[#2d3039] rounded-xl text-xs font-medium text-[#B8BBC0] hover:text-[#F7F7F5] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Ligação de emergência: {contact.phone}</span>
            </a>
          </div>

          {/* Modal Footer */}
          <div className="pt-3 border-t border-[#1f2229] flex items-center justify-center text-xs text-[#74777C]">
            <span className="flex items-center gap-1.5 text-[#9DA0A6]">
              <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
              Atendimento sigiloso • Defesa criminal especializada
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

