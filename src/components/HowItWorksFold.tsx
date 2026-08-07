import React from 'react';
import { Search, Compass, ShieldCheck, UserCheck } from 'lucide-react';

interface HowItWorksFoldProps {
  onOpenEmergencyModal?: () => void;
}

export const HowItWorksFold: React.FC<HowItWorksFoldProps> = () => {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "ANÁLISE INICIAL DO CASO",
      desc: "Compreensão detalhada da situação, análise das informações apresentadas e identificação dos aspectos jurídicos relevantes."
    },
    {
      num: "02",
      icon: Compass,
      title: "DEFINIÇÃO DA ESTRATÉGIA",
      desc: "Avaliação dos cenários jurídicos, definição das medidas adequadas e construção da estratégia de atuação."
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
    <section id="como-funciona" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-20 sm:py-28 font-sans-clean border-t border-[#B8BBC0]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#55585D] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#55585D]"></span>
            <span>NOSSA METODOLOGIA</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0B0B0C] tracking-tight uppercase">
            COMO CONDUZIMOS O SEU CASO
          </h2>
          <p className="text-[#3B3C3E] text-sm sm:text-base font-normal leading-relaxed">
            Atendimento jurídico individualizado, sigiloso e estratégico, com acompanhamento direto em todas as etapas da atuação.
          </p>
        </div>

        {/* 4 Steps Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FFFFFF] border border-[#B8BBC0]/50 p-6 sm:p-7 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#4A4B4D]">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#18191B]" />
                  </div>

                  <h3 className="font-semibold text-sm sm:text-[0.95rem] tracking-wide uppercase text-[#0B0B0C] leading-snug pt-2">
                    {step.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#3B3C3E] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-[#0B0B0C]/10"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
