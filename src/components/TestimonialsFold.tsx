import React from 'react';
import { Quote } from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface TestimonialsFoldProps {
  onOpenEmergencyModal?: () => void;
}

export const TestimonialsFold: React.FC<TestimonialsFoldProps> = () => {
  const testimonials = [
    {
      name: 'M. S.',
      role: 'CLIENTE',
      comment:
        'A Dra. Ramaiane agiu com extrema rapidez na audiência de custódia do meu irmão. Conseguiu a liberdade provisória no mesmo dia com uma fundamentação impecável. Eterna gratidão!',
    },
    {
      name: 'R. A. F.',
      role: 'CLIENTE',
      comment:
        'Excelente profissional! Manteve a família informada a todo momento com total transparência e discrição. Conseguiu o arquivamento do inquérito antes de qualquer denúncia.',
    },
    {
      name: 'L. C. V.',
      role: 'CLIENTE',
      comment:
        'A melhor advogada criminalista. Tinha um caso extremamente delicado envolvendo a Lei de Drogas, e a Dra. Ramaiane elaborou uma tese técnica impecável que levou à absolvição.',
    },
    {
      name: 'A. P. M.',
      role: 'CLIENTE',
      comment:
        'Atendimento humanizado e resposta imediata. O Habeas Corpus impetrado por ela foi concedido no Tribunal. Transmite segurança e domínio total da matéria.',
    },
  ];

  return (
    <section id="depoimentos" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header - Centered with Logo */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
            <span>DEPOIMENTOS</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            O QUE DIZEM NOSSOS CLIENTES
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

        {/* Centralized Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121316] border border-[#74777C]/20 rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-between text-center space-y-6 hover:border-[#B8BBC0]/50 transition-all duration-300 shadow-md group"
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
                  <span className="text-[10px] text-[#74777C] tracking-[0.2em] uppercase block">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

