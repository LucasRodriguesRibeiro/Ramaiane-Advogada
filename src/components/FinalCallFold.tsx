import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import officeBgImg from '../assets/images/dobra1.jpg';

interface FinalCallFoldProps {
  onOpenEmergencyModal?: () => void;
  onOpenScheduleModal?: () => void;
  onOpenUrgentModal?: () => void;
}

export const FinalCallFold: React.FC<FinalCallFoldProps> = ({ 
  onOpenEmergencyModal,
  onOpenScheduleModal,
  onOpenUrgentModal 
}) => {
  const handleSchedule = () => {
    if (onOpenScheduleModal) {
      onOpenScheduleModal();
    } else if (onOpenEmergencyModal) {
      onOpenEmergencyModal();
    }
  };

  const handleUrgent = () => {
    if (onOpenUrgentModal) {
      onOpenUrgentModal();
    } else if (onOpenEmergencyModal) {
      onOpenEmergencyModal();
    }
  };

  return (
    <section className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-14 sm:py-20 font-sans-clean border-t border-[#18191B] overflow-hidden">
      {/* Subtle Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src={officeBgImg}
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover filter contrast-110 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-6 relative z-10">
        
        {/* Subtle Category */}
        <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
          <span>ATENDIMENTO JURÍDICO</span>
        </div>

        {/* Main Serif Headline */}
        <h2 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F7F5] tracking-tight leading-tight max-w-4xl mx-auto uppercase">
          TÉCNICA NA DEFESA.
          <br className="hidden sm:inline" />
          {' '}ESTRATÉGIA EM CADA DECISÃO.
        </h2>

        {/* Text paragraph */}
        <p className="text-[#B8BBC0] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto text-justify">
          Cada caso exige uma análise individualizada. A atuação começa com a compreensão do cenário e a definição da estratégia jurídica adequada.
        </p>

        {/* CTA Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleSchedule}
            className="silver-button w-full sm:w-auto px-9 py-4 rounded-md text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 cursor-pointer shadow-lg"
          >
            <span>AGENDAR ATENDIMENTO</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleUrgent}
            className="silver-outline-button w-full sm:w-auto px-8 py-4 rounded-md text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-3 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>ATENDIMENTO DE URGÊNCIA 24H</span>
          </button>
        </div>

      </div>
    </section>
  );
};
