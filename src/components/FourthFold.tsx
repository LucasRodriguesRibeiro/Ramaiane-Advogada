import React from 'react';
import dobra4Img from '../assets/images/dobra4.jpeg';
import { 
  ArrowRight, 
  Siren, 
  Gavel, 
  Folder, 
  Search, 
  Scale, 
  FileText, 
  BookOpen, 
  Unlock 
} from 'lucide-react';

interface FourthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FourthFold: React.FC<FourthFoldProps> = ({ onOpenEmergencyModal }) => {
  const steps = [
    { label: "Prisão em Flagrante", icon: Siren },
    { label: "Audiência de Custódia", icon: Gavel },
    { label: "Inquérito Policial", icon: Folder },
    { label: "Busca e Apreensão", icon: Search },
    { label: "Habeas Corpus", icon: Scale },
    { label: "Defesa no Processo", icon: FileText },
    { label: "Recursos", icon: BookOpen },
    { label: "Execução Penal", icon: Unlock }
  ];

  return (
    <section id="trafico-de-drogas" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-20 sm:py-28 font-sans-clean overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Photo Column */}
        <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-28">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[14/10] lg:aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/50 shadow-xl group">
            <img
              src={dobra4Img}
              alt="Deyse Ramaiane - Defesa em Crimes da Lei de Drogas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Text & Content Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Header Tag */}
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>POSICIONAMENTO ESPECIALIZADO</span>
          </div>

          {/* Title */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0B0B0C] tracking-tight">
            Defesa em Crimes da Lei de Drogas
          </h2>

          {/* Text Paragraph */}
          <p className="text-[#18191B] text-base sm:text-lg leading-relaxed font-light">
            Atuação estratégica em casos envolvendo tráfico de drogas e associação para o tráfico, desde a prisão em flagrante e investigação até o processo, recursos e execução penal, com análise rigorosa das provas e da legalidade dos atos praticados.
          </p>

          {/* Discrete Services Grid - 2 columns (em pares) */}
          <div className="py-1 grid grid-cols-2 gap-2 sm:gap-2.5 max-w-xl w-full">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.label}
                  className="bg-[#18191B] text-[#F7F7F5] px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-md flex items-center space-x-2 sm:space-x-2.5 min-h-[42px] sm:min-h-[44px] w-full border border-[#2A2B2E] hover:border-[#B8BBC0]/60 hover:bg-[#202225] transition-all group shadow-xs"
                >
                  <IconComponent className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0 group-hover:text-white transition-colors" />
                  <span className="text-[10px] sm:text-xs font-medium tracking-wide uppercase text-[#F7F7F5] leading-tight">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={onOpenEmergencyModal}
              className="silver-button w-full sm:w-auto px-8 py-4 rounded-md text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>AGENDAR ATENDIMENTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
