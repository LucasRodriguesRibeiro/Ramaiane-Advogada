import React from 'react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import assinaturaImg from '../assets/images/assinatura_transparente.png';
import { Shield, Scale, Unlock, Landmark, Smartphone } from 'lucide-react';

export const SecondFold: React.FC = () => {
  const quadroItems = [
    {
      title: "DEFESA CRIMINAL",
      desc: "Atuação estratégica em investigações, ações penais e medidas de urgência.",
      icon: Shield
    },
    {
      title: "TRÁFICO DE DROGAS",
      desc: "Defesa em investigações e processos relacionados à Lei de Drogas.",
      icon: Scale
    },
    {
      title: "PRISÕES E MEDIDAS URGENTES",
      desc: "Atuação em prisões em flagrante, audiências de custódia, liberdade provisória e habeas corpus.",
      icon: Unlock
    },
    {
      title: "CRIMES ECONÔMICOS E EMPRESARIAIS",
      desc: "Defesa em investigações envolvendo atividade empresarial, patrimônio e operações financeiras.",
      icon: Landmark
    },
    {
      title: "CRIMES DIGITAIS",
      desc: "Defesa e orientação em investigações e processos com repercussão criminal no ambiente digital.",
      icon: Smartphone
    }
  ];

  return (
    <section id="sobre" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-16 sm:py-24 font-sans-clean overflow-hidden">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Professional Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center relative lg:sticky lg:top-24">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/60 shadow-xl">
            <img
              src={dobra2Img}
              alt="Deyse Ramaiane - Advocacia Criminal Estratégica"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/30 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Narrative + Quadro + Quote */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>SOBRE RAMAIANE</span>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#18191B] text-base leading-relaxed font-light">
            <p>
              Há mais de uma década, atuo na advocacia criminal com uma abordagem pautada em técnica, estratégia e análise individualizada de cada caso.
            </p>
            <p>
              A defesa não começa apenas no processo. Muitas vezes, começa antes: na investigação, na prevenção de riscos e na definição da estratégia capaz de proteger direitos, liberdade e reputação.
            </p>
            <p>
              Minha atuação acompanha cada caso de forma próxima, sigilosa e estratégica, desde os primeiros atos investigativos até processos, recursos e medidas perante os tribunais.
            </p>
          </div>

          {/* Quadro: Areas / Focus Cards */}
          <div className="pt-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#74777C]">
              ÁREAS DE ATUAÇÃO
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quadroItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`bg-[#FFFFFF] border border-[#B8BBC0]/50 p-4 rounded-md space-y-2 shadow-sm hover:border-[#0B0B0C]/40 transition-colors ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 text-[#0B0B0C]">
                      <IconComponent className="w-4 h-4 text-[#74777C]" />
                      <span className="text-xs font-bold tracking-wider uppercase">{item.title}</span>
                    </div>
                    <p className="text-xs text-[#52555A] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quote & Signature Block */}
          <div className="pt-6 border-t border-[#B8BBC0]/50 space-y-4">
            <blockquote className="font-serif-title italic text-lg sm:text-xl text-[#0B0B0C] leading-snug">
              “Cada caso exige mais do que uma defesa. Exige estratégia.”
            </blockquote>
            
            <div className="pt-2 flex flex-col items-start relative">
              <img
                src={assinaturaImg}
                alt="Assinatura Ramaiane"
                className="w-auto object-contain select-none filter contrast-110"
                style={{ height: 'clamp(90px, 12vw, 140px)' }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
