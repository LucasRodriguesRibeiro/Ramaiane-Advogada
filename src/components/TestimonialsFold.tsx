import React from 'react';
import { ShieldCheck, Quote } from 'lucide-react';

interface TestimonialsFoldProps {
  onOpenEmergencyModal: () => void;
}

export const TestimonialsFold: React.FC<TestimonialsFoldProps> = ({ onOpenEmergencyModal }) => {
  const testimonials = [
    {
      name: 'M. S.',
      role: 'Atendimento Prisão em Flagrante',
      date: 'Atendimento presencial',
      comment:
        'A Dra. Ramaiane agiu com extrema rapidez na audiência de custódia do meu irmão. Conseguiu a liberdade provisória no mesmo dia com uma fundamentação impecável. Eterna gratidão!',
    },
    {
      name: 'R. A. F.',
      role: 'Defesa em Inquérito Policial',
      date: 'Investigação criminal',
      comment:
        'Excelente profissional! Manteve a família informada a todo momento com total transparência e discrição. Conseguiu o arquivamento do inquérito antes de qualquer denúncia.',
    },
    {
      name: 'L. C. V.',
      role: 'Processo Lei de Drogas',
      date: 'Ação Penal',
      comment:
        'A melhor advogada criminalista. Tinha um caso extremamente delicado envolvendo a Lei de Drogas, e a Dra. Ramaiane elaborou uma tese técnica impecável que levou à absolvição.',
    },
    {
      name: 'A. P. M.',
      role: 'Habeas Corpus / Liberdade',
      date: 'Medida urgente',
      comment:
        'Atendimento humanizado e resposta imediata. O Habeas Corpus impetrado por ela foi concedido no Tribunal. Transmite segurança e domínio total da matéria.',
    },
  ];

  return (
    <section id="depoimentos" className="relative w-full bg-[#18191B] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#74777C]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#B8BBC0]"></span>
            <span>DEPOIMENTOS</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight uppercase">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <p className="text-[#B8BBC0] text-base sm:text-lg font-light leading-relaxed">
            Experiências de quem confiou sua defesa ao nosso trabalho.
          </p>
        </div>

        {/* Minimalist Graphite Testimonial Cards (No Gold Stars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0B0B0C] border border-[#74777C]/25 rounded-md p-6 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-colors space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[#B8BBC0]">
                  <span className="text-[10px] tracking-widest font-mono uppercase">
                    {item.date}
                  </span>
                  <Quote className="w-4 h-4 text-[#74777C]" />
                </div>

                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#74777C]/20 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-semibold text-xs text-[#F7F7F5]">{item.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8BBC0]" />
                  </div>
                  <span className="text-[10px] text-[#74777C] block">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
