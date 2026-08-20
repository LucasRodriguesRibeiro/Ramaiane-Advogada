import React from 'react';
import { ArrowRight, Scale, Home, Users } from 'lucide-react';

interface CivilCoreFoldProps {
  onOpenEmergencyModal?: () => void;
}

export const CivilCoreFold: React.FC<CivilCoreFoldProps> = () => {
  const whatsappCivilMessage = "Olá, Dra. Ramaiane. Gostaria de obter informações sobre atendimento jurídico na área civil e agendar uma consulta.";
  const whatsappCivilUrl = `https://wa.me/5592993480017?text=${encodeURIComponent(whatsappCivilMessage)}`;

  const civilAreas = [
    {
      num: "01",
      icon: Scale,
      title: "DIREITO CIVIL E PROCESSO CIVIL",
      desc: "Atuação consultiva e contenciosa em contratos, obrigações, responsabilidade civil, indenizações, cobranças, tutelas de urgência, ações judiciais e recursos.",
      topics: [
        "Contratos e Obrigações",
        "Responsabilidade Civil",
        "Indenizações e Danos",
        "Cobranças e Recuperação de Créditos",
        "Tutelas de Urgência e Medidas Cautelares",
        "Ações Judiciais e Recursos",
        "Cumprimento de Sentença"
      ]
    },
    {
      num: "02",
      icon: Home,
      title: "DIREITO IMOBILIÁRIO",
      desc: "Atuação completa em negócios e relações imobiliárias, garantindo segurança jurídica em todas as etapas do patrimônio imobiliário.",
      topics: [
        "Compra e Venda de Imóveis",
        "Contratos Imobiliários",
        "Locação e Administração de Imóveis",
        "Distratos Imobiliários",
        "Usucapião e Regularização",
        "Posse e Propriedade",
        "Conflitos Imobiliários"
      ]
    },
    {
      num: "03",
      icon: Users,
      title: "DIREITO DE FAMÍLIA E SUCESSÕES",
      desc: "Proteção das relações familiares e do patrimônio, com soluções jurídicas humanizadas e estratégicas.",
      topics: [
        "Divórcio e Dissolução de União Estável",
        "Guarda e Convivência",
        "Pensão Alimentícia",
        "Partilha de Bens",
        "Inventário e Arrolamento",
        "Planejamento Sucessório",
        "Sucessões e Herança"
      ]
    }
  ];

  return (
    <section id="nucleo-civel" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            NÚCLEO CÍVEL
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wide text-justify">
            SOLUÇÕES JURÍDICAS ESTRATÉGICAS PARA RELAÇÕES PRIVADAS, PATRIMÔNIO E NEGÓCIOS.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {civilAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-5">
                  {/* Top Row: Number */}
                  <div className="text-xs tracking-widest text-[#B8BBC0]/80 font-mono font-bold">
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div className="text-[#E2E4E8] group-hover:text-[#FFFFFF] transition-colors">
                    <Icon className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <div className="space-y-2.5">
                    <h3 className="font-serif-title text-xl sm:text-2xl text-[#F7F7F5] leading-snug tracking-wide uppercase group-hover:text-[#FFFFFF] transition-colors text-justify">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[1.5px] bg-[#B8BBC0]/40"></div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light text-justify">
                    {item.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 text-xs text-[#D1D4D9] font-light">
                    {item.topics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8BBC0]/70 shrink-0 mt-1.5"></span>
                        <span className="leading-tight">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action: SAIBA MAIS → */}
                <div className="pt-6 mt-6 border-t border-[#74777C]/15">
                  <a
                    href={whatsappCivilUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                  >
                    <span>SAIBA MAIS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
