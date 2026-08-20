import React from 'react';
import { Search, Compass, ShieldCheck, UserCheck } from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface HowItWorksFoldProps {
  onOpenEmergencyModal?: () => void;
}

export const HowItWorksFold: React.FC<HowItWorksFoldProps> = () => {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "ANÁLISE INICIAL",
      desc: "Entendemos o seu caso e identificamos os pontos jurídicos essenciais."
    },
    {
      num: "02",
      icon: Compass,
      title: "DEFINIÇÃO DA ESTRATÉGIA",
      desc: "Desenhamos a melhor estratégia jurídica para alcançar o seu objetivo."
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "ATUAÇÃO TÉCNICA E ÁGIL",
      desc: "Adoção das medidas jurídicas necessárias, com atenção à urgência e às particularidades de cada caso."
    },
    {
      num: "04",
      icon: UserCheck,
      title: "ACOMPANHAMENTO E INFORMAÇÃO",
      desc: "Acompanhamento contínuo da demanda, com comunicação clara sobre os principais acontecimentos e próximos passos."
    }
  ];

  return (
    <section id="como-funciona" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header - Centered & Clean */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
            <span>NOSSA METODOLOGIA</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            COMO CONDUZIMOS O SEU CASO
          </h2>

          {/* Central Logo */}
          <div className="flex items-center justify-center mx-auto pt-2">
            <img 
              src={logoImg} 
              alt="Deyse Ramaiane Advocacia" 
              className="w-7 h-7 object-contain opacity-75 filter brightness-110" 
            />
          </div>
        </div>

        {/* 4 Steps Centralized Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#121316] border border-[#74777C]/20 p-7 sm:p-8 rounded-xl shadow-md hover:border-[#B8BBC0]/50 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                {/* Circle Number Badge */}
                <div className="w-11 h-11 rounded-full border border-[#74777C]/40 flex items-center justify-center font-mono text-xs font-semibold text-[#B8BBC0] group-hover:border-[#B8BBC0] group-hover:text-white transition-colors">
                  {step.num}
                </div>

                {/* Icon */}
                <div className="text-[#E2E4E8] group-hover:text-white transition-colors pt-1">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-xs sm:text-[13px] tracking-wider uppercase text-[#F7F7F5] leading-snug">
                  {step.title}
                </h3>

                {/* Small Divider */}
                <div className="w-8 h-[1.5px] bg-[#B8BBC0]/40"></div>

                {/* Description */}
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

