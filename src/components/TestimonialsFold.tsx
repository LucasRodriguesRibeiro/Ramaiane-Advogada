import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface TestimonialsFoldProps {
  onOpenEmergencyModal?: () => void;
}

export const TestimonialsFold: React.FC<TestimonialsFoldProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const testimonials = [
    // Penal Geral / Defesa Criminal
    {
      name: 'M. S.',
      role: 'CLIENTE - DEFESA CRIMINAL',
      comment:
        'A Dra. Ramaiane agiu com extrema rapidez na audiência de custódia do meu irmão. Conseguiu a liberdade provisória no mesmo dia com uma fundamentação impecável. Eterna gratidão!',
    },
    {
      name: 'R. A. F.',
      role: 'CLIENTE - INQUÉRITO POLICIAL',
      comment:
        'Excelente profissional! Manteve a família informada a todo momento com total transparência e discrição. Conseguiu o arquivamento do inquérito antes de qualquer denúncia.',
    },
    {
      name: 'L. C. V.',
      role: 'CLIENTE - LEI DE DROGAS',
      comment:
        'A melhor advogada criminalista. Tinha um caso extremamente delicado envolvendo a Lei de Drogas, e a Dra. Ramaiane elaborou uma tese técnica impecável que levou à absolvição.',
    },
    {
      name: 'A. P. M.',
      role: 'CLIENTE - HABEAS CORPUS',
      comment:
        'Atendimento humanizado e resposta imediata. O Habeas Corpus impetrado por ela foi concedido no Tribunal. Transmite segurança e domínio total da matéria.',
    },

    // Médicos & Saúde
    {
      name: 'Dr. G. F.',
      role: 'MÉDICO - DIREITO PENAL MÉDICO',
      comment:
        'A Dra. Ramaiane conduziu a defesa em uma denúncia infundada de erro médico com maestria técnica e acompanhamento pericial impecável. Sua atuação garantiu o arquivamento e preservou minha reputação.',
    },
    {
      name: 'Dra. C. M.',
      role: 'DIRETORA CLÍNICA - SAÚDE',
      comment:
        'Excelente trabalho de assessoria e gestão de crises para nossa clínica em procedimentos investigatórios. A atuação foi rápida, extremamente discreta e cirúrgica na proteção da nossa instituição.',
    },

    // Empresarial & Econômico
    {
      name: 'E. R.',
      role: 'EMPRESÁRIO - PENAL EMPRESARIAL',
      comment:
        'Enfrentamos uma fiscalização rigorosa com risco de acusação corporativa. A Dra. Ramaiane atuou no compliance e na defesa preventiva dos sócios com uma visão estratégica fora do comum.',
    },
    {
      name: 'H. K.',
      role: 'GESTOR FINANCEIRO - PENAL ECONÔMICO',
      comment:
        'Em um processo complexo envolvendo suposto delito financeiro e sonegação fiscal, a Dra. Ramaiane demonstrou amplo domínio técnico e obteve o trancamento da ação penal nos Tribunais Superiores.',
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const displayedTestimonials = showAll 
    ? testimonials 
    : testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section id="depoimentos" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header - Centered with Logo */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          {/* Central Logo - Above Title */}
          <div className="flex items-center justify-center mx-auto pb-1">
            <img 
              src={logoImg} 
              alt="Deyse Ramaiane Advocacia" 
              className="w-7 h-7 object-contain opacity-75 filter brightness-110" 
            />
          </div>

          <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
            <span>DEPOIMENTOS</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
          {displayedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121316] border border-[#74777C]/20 rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-between text-center space-y-6 hover:border-[#B8BBC0]/50 transition-all duration-300 shadow-md group min-h-[260px]"
            >
              <div className="space-y-4 flex flex-col items-center">
                {/* Quote Icon Centered */}
                <div className="text-[#74777C] group-hover:text-[#B8BBC0] transition-colors">
                  <Quote className="w-7 h-7 rotate-180 opacity-60" />
                </div>

                {/* Comment Text Centered */}
                <p className="text-xs sm:text-[13px] text-[#D1D4D9] leading-relaxed font-light text-center">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Role Centered */}
              <div className="w-full pt-4 flex flex-col items-center space-y-2">
                <div className="w-10 h-[1px] bg-[#74777C]/40"></div>
                <div className="space-y-0.5 text-center">
                  <span className="font-semibold text-xs sm:text-sm text-[#F7F7F5] tracking-widest block">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#74777C] tracking-[0.15em] uppercase block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation & See More Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#74777C]/15 gap-4">
          {/* Page Indicators */}
          <div className="flex items-center space-x-2">
            {!showAll && (
              <>
                <button
                  onClick={prevPage}
                  aria-label="Depoimentos Anteriores"
                  className="w-9 h-9 rounded-full bg-[#121316] border border-[#74777C]/30 hover:border-[#B8BBC0] text-[#B8BBC0] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#74777C] tracking-wider px-2 font-medium">
                  {currentPage + 1} de {totalPages}
                </span>
                <button
                  onClick={nextPage}
                  aria-label="Próximos Depoimentos"
                  className="w-9 h-9 rounded-full bg-[#121316] border border-[#74777C]/30 hover:border-[#B8BBC0] text-[#B8BBC0] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Action Button: VER MAIS DEPOIMENTOS */}
          <button
            onClick={toggleShowAll}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#B8BBC0] hover:text-white uppercase tracking-widest bg-[#121316] hover:bg-[#1A1C22] px-5 py-2.5 rounded-full border border-[#74777C]/30 hover:border-[#B8BBC0] transition-all cursor-pointer group shadow-sm"
          >
            <span>{showAll ? 'MOSTRAR MENOS DEPOIMENTOS' : 'VER MAIS DEPOIMENTOS'}</span>
            {showAll ? (
              <ChevronDown className="w-4 h-4 text-[#B8BBC0] group-hover:text-white transition-transform rotate-180" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#B8BBC0] group-hover:text-white group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
