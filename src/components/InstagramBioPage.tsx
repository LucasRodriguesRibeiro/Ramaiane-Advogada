import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EmergencyContact } from '../types';

interface InstagramBioPageProps {
  contact: EmergencyContact;
  onNavigateHome: () => void;
  onOpenEmergencyModal?: () => void;
  onOpenScheduleModal?: () => void;
  onOpenUrgentModal?: () => void;
  onOpenNucleoModal?: (nucleoId: string) => void;
}

// Crisp official WhatsApp icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.954 1.18-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.679-1.636-.93-2.239-.244-.588-.493-.508-.679-.517-.176-.009-.377-.01-.578-.01-.201 0-.527.075-.804.377-.276.301-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.23 3.115.151.201 2.125 3.245 5.148 4.551.719.311 1.281.497 1.719.636.722.229 1.379.197 1.898.12.579-.086 1.782-.729 2.033-1.432.251-.703.251-1.306.176-1.432-.076-.126-.277-.201-.578-.352z" />
    <path d="M12 2C6.486 2 2 6.486 2 12c0 1.846.502 3.579 1.377 5.074L2 22l5.067-1.328A9.948 9.948 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.286c-1.603 0-3.13-.459-4.444-1.286l-.319-.199-3.003.788.801-2.927-.217-.346A8.256 8.256 0 0 1 3.714 12c0-4.569 3.717-8.286 8.286-8.286 4.569 0 8.286 3.717 8.286 8.286 0 4.569-3.717 8.286-8.286 8.286z" />
  </svg>
);

export const InstagramBioPage: React.FC<InstagramBioPageProps> = ({
  contact,
  onNavigateHome,
}) => {
  React.useEffect(() => {
    document.title = 'Link na Bio | Dra. Deyse Ramaiane - Advocacia Estratégica';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const waPlantaoUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Ramaiane. Preciso de atendimento imediato em Defesa Criminal (Plantão 24h).')}`;
  const waEmpresarialUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Ramaiane. Gostaria de atendimento sobre Penal Empresarial e Econômico (Defesa, compliance e gestão de risco).')}`;
  const waMedicoUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Ramaiane. Gostaria de atendimento sobre Penal Médico e Estético (Profissionais e clínicas).')}`;

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] flex flex-col items-center justify-start font-sans-clean px-4 sm:px-6 py-8 sm:py-12 selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Centered Mobile-First Column */}
      <div className="w-full max-w-[430px] flex flex-col space-y-6">
        
        {/* Header: Name and Profession */}
        <header className="pt-2 text-left">
          <h1 className="font-serif-title text-[44px] sm:text-[50px] font-normal leading-tight text-[#F7F7F5] tracking-tight">
            Ramaiane
          </h1>
          <p className="font-serif-title text-[20px] sm:text-[23px] font-light text-[#D1D5DB] tracking-wide mt-0.5">
            Advogada Criminalista
          </p>
        </header>

        {/* Section Divider: ATENDIMENTO POR WHATSAPP */}
        <div className="flex items-center gap-3 pt-2">
          <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#71717A] uppercase font-medium whitespace-nowrap">
            ATENDIMENTO POR WHATSAPP
          </span>
          <div className="h-[1px] flex-1 bg-[#27272A]"></div>
        </div>

        {/* Cards Stack */}
        <div className="space-y-3.5">
          
          {/* Card 1: PLANTÃO 24H - Defesa criminal (Light / Off-white Card) */}
          <a
            href={waPlantaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block bg-[#EDE9E1] hover:bg-[#E5E0D6] rounded-2xl p-5 sm:p-6 transition-all duration-200 group shadow-md active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-left min-w-0 flex-1">
                <div className="inline-block border border-[#0B0B0C]/40 rounded-[3px] px-2 py-0.5 text-[9px] sm:text-[10px] tracking-[0.16em] font-medium text-[#0B0B0C] uppercase mb-2">
                  PLANTÃO 24H
                </div>
                <h2 className="font-serif-title text-[23px] sm:text-[25px] font-semibold text-[#0B0B0C] leading-snug">
                  Defesa criminal
                </h2>
                <p className="text-[12px] sm:text-[13px] text-[#52525B] font-light mt-0.5">
                  Atendimento imediato
                </p>
              </div>

              {/* WhatsApp Button (Black Circle, White Icon) */}
              <div className="w-12 h-12 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </a>

          {/* Card 2: Penal empresarial e econômico (Dark Card) */}
          <a
            href={waEmpresarialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block bg-[#111112] hover:bg-[#151517] border border-[#27272A] hover:border-[#3F3F46] rounded-2xl p-5 sm:p-6 transition-all duration-200 group active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-left min-w-0 flex-1">
                <h2 className="font-serif-title text-[20px] sm:text-[22px] font-medium text-[#F7F7F5] leading-snug group-hover:text-white transition-colors">
                  Penal empresarial e econômico
                </h2>
                <p className="text-[12px] sm:text-[13px] text-[#8E9196] font-light mt-1">
                  Defesa, compliance e gestão de risco
                </p>
              </div>

              {/* WhatsApp Button (Circle with border, White Icon) */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-transparent border border-[#3A3A3E] text-white flex items-center justify-center shrink-0 group-hover:border-white/60 group-hover:scale-105 transition-all duration-200">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </a>

          {/* Card 3: Penal médico e estético (Dark Card) */}
          <a
            href={waMedicoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block bg-[#111112] hover:bg-[#151517] border border-[#27272A] hover:border-[#3F3F46] rounded-2xl p-5 sm:p-6 transition-all duration-200 group active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-left min-w-0 flex-1">
                <h2 className="font-serif-title text-[20px] sm:text-[22px] font-medium text-[#F7F7F5] leading-snug group-hover:text-white transition-colors">
                  Penal médico e estético
                </h2>
                <p className="text-[12px] sm:text-[13px] text-[#8E9196] font-light mt-1">
                  Profissionais e clínicas
                </p>
              </div>

              {/* WhatsApp Button (Circle with border, White Icon) */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-transparent border border-[#3A3A3E] text-white flex items-center justify-center shrink-0 group-hover:border-white/60 group-hover:scale-105 transition-all duration-200">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </a>

          {/* Card 4: Conhecer o escritório (Navigation link) */}
          <button
            onClick={onNavigateHome}
            className="w-full text-left p-5 sm:p-6 rounded-2xl bg-transparent hover:bg-[#111112] border border-transparent hover:border-[#27272A] flex items-center justify-between group transition-all duration-200 cursor-pointer pt-4"
          >
            <div className="min-w-0 flex-1">
              <h3 className="font-serif-title text-[18px] sm:text-[20px] font-medium text-[#F7F7F5] group-hover:text-white transition-colors">
                Conhecer o escritório
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#8E9196] font-light mt-0.5">
                Trajetória e frentes de atuação
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8E9196] group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
          </button>

        </div>


      </div>

    </div>
  );
};
