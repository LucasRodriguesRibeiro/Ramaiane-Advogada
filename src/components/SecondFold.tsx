import React from 'react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import assinaturaImg from '../assets/images/assinatura_transparente.png';

export const SecondFold: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-16 sm:py-24 font-sans-clean overflow-hidden">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Professional Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
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

        {/* Right Column: Narrative + Quote */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>SOBRE RAMAIANE</span>
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#18191B] text-base sm:text-lg leading-relaxed font-light">
            <p>
              Há mais de uma década, atuo na advocacia criminal com técnica, estratégia e análise individualizada de cada caso.
            </p>
            <p>
              Minha atuação vai além da defesa tradicional, com foco na proteção de pessoas, profissionais, empresários e empresas diante de riscos e situações de natureza criminal.
            </p>
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
