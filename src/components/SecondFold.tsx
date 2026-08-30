import React from 'react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import assinaturaImg from '../assets/images/assinatura_transparente.png';

export const SecondFold: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] overflow-hidden scroll-mt-20">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-20">
        
        {/* Left Column: Professional Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#74777C]/30 shadow-xl">
            <img
              src={dobra2Img}
              alt="Deyse Ramaiane - Advocacia Estratégica"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Narrative + Quote */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold text-center lg:text-left">
              SOBRE RAMAIANE
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#D1D4D9] text-base sm:text-lg leading-relaxed font-light text-justify">
            <p>
              Há mais de uma década, atuo na advocacia criminal com técnica, estratégia e análise individualizada de cada caso.
            </p>
            <p>
              Minha atuação é pautada pela proteção de pessoas, profissionais e empresas, com soluções jurídicas construídas de acordo com as particularidades e os desafios de cada situação.
            </p>
          </div>

          {/* Quote & Signature Block */}
          <div className="pt-6 border-t border-[#74777C]/30 space-y-4">
            <blockquote className="font-serif-title italic text-lg sm:text-xl text-[#F7F7F5] leading-snug">
              “Cada caso exige mais do que uma solução. Exige estratégia.”
            </blockquote>
            
            <div className="pt-2 flex flex-col items-start relative">
              <img
                src={assinaturaImg}
                alt="Assinatura Ramaiane"
                className="w-auto object-contain select-none filter invert brightness-200 contrast-120"
                style={{ height: 'clamp(90px, 12vw, 140px)' }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
