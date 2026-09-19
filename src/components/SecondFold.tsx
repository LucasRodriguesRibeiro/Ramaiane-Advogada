import React from 'react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import assinaturaImg from '../assets/images/assinatura_transparente.png';

export const SecondFold: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-14 sm:py-20 font-sans-clean border-t border-[#18191B] overflow-hidden scroll-mt-20">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-20">
        
        {/* Left Column: Professional Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center relative">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden border border-[#74777C]/30 shadow-2xl">
            <img
              src={dobra2Img}
              alt="Dra. Deyse Ramaiane - Advocacia Estratégica"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Narrative + Quote */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold block">
              SOBRE MIM
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-wide">
              Prazer, Ramaiane.
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#D1D4D9] text-base sm:text-[17px] leading-relaxed font-light text-justify">
            <p>
              Advogada criminalista, com dez anos de atuação dedicada ao Direito Penal, voltada à defesa de pessoas físicas em situações que envolvem investigações, acusações e processos criminais, bem como à defesa de empresários, clínicas e profissionais da saúde sob a ótica penal.
            </p>
            <p>
              Na atuação empresarial, trabalho com defesa criminal, assessoria preventiva, compliance e gestão de riscos penais, considerando as particularidades de cada negócio e os riscos relacionados à sua atividade.
            </p>
            <p>
              Na área da saúde, atuo na assessoria e defesa de profissionais e clínicas, especialmente em questões que envolvem prevenção, responsabilização e riscos na esfera penal.
            </p>
            <p>
              Minha atuação é pautada pela proteção de pessoas, profissionais e empresas, a partir de soluções jurídicas construídas de acordo com as particularidades e os desafios de cada caso.
            </p>
          </div>

          {/* Quote & Signature Block with Discreet Credentials */}
          <div className="pt-6 border-t border-[#74777C]/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Signature */}
              <div className="flex flex-col items-start relative">
                <img
                  src={assinaturaImg}
                  alt="Assinatura Ramaiane"
                  className="w-auto object-contain select-none filter invert brightness-200 contrast-120"
                  style={{ height: 'clamp(70px, 9vw, 95px)' }}
                />
              </div>

              {/* Discreet Credentials / Info */}
              <div className="text-xs text-[#8E9196] font-light leading-relaxed border-l-2 sm:border-l border-[#C5A880]/40 pl-3.5 py-1">
                <span className="text-[#C5A880] font-medium tracking-wide block">
                  OAB/AM 13.701 • Juazeiro/BA
                </span>
                <span className="text-[#A1A4A9]">
                  Atendimento remoto em todo o Brasil.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
