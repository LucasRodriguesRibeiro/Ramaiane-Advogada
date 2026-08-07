import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Briefcase, 
  Smartphone, 
  Sparkles, 
  Trees, 
  Landmark, 
  UserCheck, 
  Coins, 
  Globe 
} from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal }) => {
  const [showAll, setShowAll] = useState(false);

  const sectors = [
    {
      icon: Briefcase,
      tag: "EMPRESAS & EXECUTIVOS",
      title: "Empresários, Executivos e Sociedades",
      desc: "Proteção contra riscos decorrentes de decisões corporativas, operações financeiras, tributárias, lavagem de dinheiro, fraudes e procedimentos de persecução penal."
    },
    {
      icon: Stethoscope,
      tag: "SAÚDE & MEDICINA",
      title: "Médicos, Clínicas e Instituições de Saúde",
      desc: "Defesa técnica preventiva e atuante diante de questionamentos ético-penais e apuração de conduta profissional, preservando a reputação da carreira."
    },
    {
      icon: Trees,
      tag: "AGRONEGÓCIO & MEIO AMBIENTE",
      title: "Produtores Rurais e Atividade Ambiental",
      desc: "Atuação estratégica em investigações e processos por supostas infrações ambientais, autuações de órgãos de fiscalização, recursos naturais e licenciamento."
    },
    {
      icon: Smartphone,
      tag: "TECNOLOGIA & AMBIENTE DIGITAL",
      title: "Crimes Digitais e Fraudes Virtuais",
      desc: "Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, recuperação de ativos e ilícitos no ambiente digital."
    },
    {
      icon: Sparkles,
      tag: "MÍDIA & CRIADORES DE CONTEÚDO",
      title: "Influenciadores e Criadores de Conteúdo",
      desc: "Atuação estratégica na defesa de personalidades públicas e criadores de conteúdo diante de operações policiais, exposições e procedimentos na internet."
    },
    {
      icon: Landmark,
      tag: "SETOR PÚBLICO & LICITAÇÕES",
      title: "Gestores e Agentes Públicos",
      desc: "Defesa em investigações e processos relacionados ao exercício da função pública, licitações, contratos administrativos e crimes contra a Administração Pública."
    },
    {
      icon: UserCheck,
      tag: "EXERCÍCIO PROFISSIONAL",
      title: "Profissionais Liberais",
      desc: "Atuação preventiva e defesa criminal diante de riscos decorrentes do exercício profissional e de atividades regulamentadas."
    },
    {
      icon: Coins,
      tag: "MERCADO FINANCEIRO & FINTECHS",
      title: "Instituições Financeiras, Fintechs e Investidores",
      desc: "Atuação em investigações envolvendo operações financeiras, fraudes, lavagem de dinheiro, patrimônio e delitos econômicos."
    },
    {
      icon: Globe,
      tag: "ATUAÇÃO INTERNACIONAL",
      title: "Estrangeiros e Empresas Internacionais",
      desc: "Assistência e defesa criminal em investigações e processos com repercussões penais no Brasil."
    }
  ];

  const visibleSectors = showAll ? sectors : sectors.slice(0, 3);

  return (
    <section id="especialidades" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl border-b border-[#74777C]/20 pb-8">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>ATUAÇÃO POR SETORES</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight uppercase">
            DEFESA CRIMINAL PARA DIFERENTES CONTEXTOS PROFISSIONAIS
          </h2>

          <p className="text-[#B8BBC0] text-sm sm:text-base font-light leading-relaxed">
            Estratégias de prevenção e defesa criminal desenvolvidas de acordo com os riscos específicos de cada atividade profissional e empresarial.
          </p>
        </div>

        {/* Minimalist Sector List Grid (3 initially, expand on click) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {visibleSectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-7 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#B8BBC0]">
                      <Icon className="w-5 h-5" />
                      <span className="text-[10px] tracking-widest uppercase font-mono font-semibold">
                        {sec.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif-title text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#74777C]/15 flex items-center justify-between">
                  <button
                    onClick={onOpenEmergencyModal}
                    className="text-[11px] font-medium tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                  >
                    <span>AGENDAR ATENDIMENTO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ver Mais / Ver Menos Button */}
        <div className="flex justify-center pt-4">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="silver-button px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest flex items-center space-x-3 cursor-pointer transition-all shadow-lg hover:scale-[1.02]"
            >
              <span>VER MAIS ÁREAS DE ATUAÇÃO</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="border border-[#74777C]/40 hover:border-[#F7F7F5] text-[#B8BBC0] hover:text-[#F7F7F5] bg-[#18191B] px-8 py-3.5 rounded-md text-xs font-semibold uppercase tracking-widest flex items-center space-x-3 cursor-pointer transition-all"
            >
              <span>VER MENOS</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
