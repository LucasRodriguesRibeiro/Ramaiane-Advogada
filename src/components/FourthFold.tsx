import React from 'react';
import dobra4Img from '../assets/images/dobra4.jpeg';
import { 
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
  onOpenEmergencyModal?: () => void;
  onOpenDrugsModal?: () => void;
}

export const FourthFold: React.FC<FourthFoldProps> = ({ onOpenEmergencyModal, onOpenDrugsModal }) => {
  const stepsCol1 = [
    { label: "Prisão em Flagrante", icon: Siren },
    { label: "Audiência de Custódia", icon: Gavel },
    { label: "Inquérito Policial", icon: Folder },
    { label: "Busca e Apreensão", icon: Search },
  ];

  const stepsCol2 = [
    { label: "Habeas Corpus", icon: Scale },
    { label: "Defesa no Processo", icon: FileText },
    { label: "Recursos", icon: BookOpen },
    { label: "Execução Penal", icon: Unlock },
  ];

  const handleOpenModal = () => {
    if (onOpenDrugsModal) {
      onOpenDrugsModal();
    } else if (onOpenEmergencyModal) {
      onOpenEmergencyModal();
    }
  };

  return (
    <section id="trafico-de-drogas" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Photo Column (Left) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/40 shadow-2xl group">
            <img
              src={dobra4Img}
              alt="Deyse Ramaiane - Defesa em Crimes da Lei de Drogas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Text & Content Column (Right) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Main Title - Clean & Direct */}
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-[#F7F7F5] tracking-tight uppercase leading-tight text-center">
            DEFESA EM CRIMES DA LEI DE DROGAS
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-[#B8BBC0] text-xs sm:text-sm leading-relaxed font-light max-w-2xl text-justify">
            Atuação estratégica em casos de tráfico de drogas e associação para o tráfico, com foco em liberdade, investigação e execução penal.
          </p>

          {/* 2-Column Discrete Services Grid matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-2xl">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2.5">
              {stepsCol1.map((step) => {
                const IconComponent = step.icon;
                return (
                  <button 
                    key={step.label}
                    onClick={handleOpenModal}
                    type="button"
                    className="bg-[#121316] text-[#F7F7F5] px-4 h-11 rounded-md flex items-center justify-center space-x-2.5 w-full border border-[#2A2B2E] hover:border-[#B8BBC0]/60 hover:bg-[#18191B] transition-all group shadow-xs cursor-pointer active:scale-[0.99]"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0 group-hover:text-white transition-colors" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#F7F7F5] leading-none text-center group-hover:text-white transition-colors">
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2.5">
              {stepsCol2.map((step) => {
                const IconComponent = step.icon;
                return (
                  <button 
                    key={step.label}
                    onClick={handleOpenModal}
                    type="button"
                    className="bg-[#121316] text-[#F7F7F5] px-4 h-11 rounded-md flex items-center justify-center space-x-2.5 w-full border border-[#2A2B2E] hover:border-[#B8BBC0]/60 hover:bg-[#18191B] transition-all group shadow-xs cursor-pointer active:scale-[0.99]"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0 group-hover:text-white transition-colors" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#F7F7F5] leading-none text-center group-hover:text-white transition-colors">
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

