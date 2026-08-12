import React from 'react';
import { ArrowRight } from 'lucide-react';
import hourglassImg from '../assets/images/dobra4.jpeg';

interface PracticeAreasFoldProps {
  onOpenEmergencyModal: () => void;
}

export const PracticeAreasFold: React.FC<PracticeAreasFoldProps> = ({ onOpenEmergencyModal }) => {
  const practiceAreas = [
    {
      title: "DEFESA CRIMINAL E PROCESSO PENAL",
      desc: "Defesa técnica e estratégica em investigações e processos criminais."
    },
    {
      title: "DIREITO PENAL EMPRESARIAL E ECONÔMICO",
      desc: "Defesa de empresários, gestores, sócios e executivos em investigações e processos por crimes empresariais, econômicos, tributários, lavagem de dinheiro, fraudes e crimes contra a Administração Pública, desde a fase investigativa até as instâncias superiores."
    },
    {
      title: "TRÁFICO DE DROGAS E LEI DE DROGAS",
      desc: "Atuação especializada em investigações, prisões e processos relacionados à Lei de Drogas."
    }
  ];

  return (
    <section id="atuacao-tecnica" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B] overflow-hidden">
      {/* Background Metallic Hourglass Image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-15 pointer-events-none">
        <img
          src={hourglassImg}
          alt="Ampulheta Prata - Justiça Criminal"
          className="w-full h-full object-cover object-right filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-transparent to-[#0B0B0C]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>ÁREAS DE ATUAÇÃO</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight uppercase">
            ATUAÇÃO TÉCNICA E ESTRATÉGICA
          </h2>
        </div>

        {/* Minimalist 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-7 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="text-xs tracking-widest text-[#B8BBC0] font-mono font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-base sm:text-[0.95rem] tracking-wider uppercase text-[#F7F7F5] leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  {area.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#74777C]/15 flex items-center justify-between">
                <button
                  onClick={onOpenEmergencyModal}
                  className="text-[11px] font-medium tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                >
                  <span>SAIBA MAIS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
