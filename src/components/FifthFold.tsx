import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  Leaf, 
  Monitor, 
  PlaySquare, 
  Landmark, 
  User, 
  Coins, 
  Globe,
  Shield
} from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal?: () => void;
  onSelectNucleo?: (nucleoId: string) => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal, onSelectNucleo }) => {
  const nucleos = [
    {
      id: "empresarios",
      num: "01",
      icon: Building2,
      title: "Empresários, Executivos e Sociedades",
      desc: "Proteção contra riscos decorrentes de decisões corporativas, operações financeiras, tributárias, lavagem de dinheiro, fraudes e procedimentos de persecução penal."
    },
    {
      id: "medicos",
      num: "02",
      icon: Stethoscope,
      title: "Médicos, Clínicas e Instituições de Saúde",
      desc: "Defesa técnica preventiva e atuação diante de questionamentos ético-penais e apurações de conduta profissional, preservando a reputação da carreira."
    },
    {
      id: "produtores-rurais",
      num: "03",
      icon: Leaf,
      title: "Produtores Rurais e Atividade Ambiental",
      desc: "Atuação estratégica em investigações e processos por supostas infrações ambientais, autuações de órgãos de fiscalização, recursos naturais e licenciamento."
    },
    {
      id: "crimes-digitais",
      num: "04",
      icon: Monitor,
      title: "Crimes Digitais e Fraudes Virtuais",
      desc: "Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, recuperação de ativos e ilícitos no ambiente digital."
    },
    {
      id: "influenciadores",
      num: "05",
      icon: PlaySquare,
      title: "Influenciadores e Criadores de Conteúdo",
      desc: "Atuação estratégica na defesa de personalidades públicas e criadores de conteúdo em investigações e procedimentos relacionados a polêmicas, exposições e procedimentos na internet."
    },
    {
      id: "gestores-publicos",
      num: "06",
      icon: Landmark,
      title: "Gestores e Agentes Públicos",
      desc: "Defesa em investigações e processos relacionados ao exercício de função pública, licitações, contratos administrativos e crimes contra a Administração Pública."
    },
    {
      id: "profissionais-liberais",
      num: "07",
      icon: User,
      title: "Profissionais Liberais",
      desc: "Atuação preventiva e defesa criminal diante de riscos decorrentes do exercício profissional e de atividades regulamentadas."
    },
    {
      id: "instituicoes-financeiras",
      num: "08",
      icon: Coins,
      title: "Instituições Financeiras, Fintechs e Investidores",
      desc: "Atuação em investigações envolvendo operações financeiras, lavagem de dinheiro, patrimônio e delitos econômicos."
    },
    {
      id: "estrangeiros",
      num: "09",
      icon: Globe,
      title: "Estrangeiros e Empresas Internacionais",
      desc: "Assistência e defesa criminal em investigações e processos com repercussões penais no Brasil."
    },
    {
      id: "policiais-militares",
      num: "10",
      icon: Shield,
      title: "Policiais Militares e Forças de Segurança",
      desc: "Atuação especializada na defesa de policiais militares e agentes de segurança em investigações, crimes militares e comuns, processos criminais e procedimentos disciplinares."
    }
  ];

  const handleCardClick = (nucleoId: string) => {
    if (onSelectNucleo) {
      onSelectNucleo(nucleoId);
    } else if (onOpenEmergencyModal) {
      onOpenEmergencyModal();
    }
  };

  return (
    <section id="nucleo-criminal" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14">
        
        {/* Section Header - Centered as in photo */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            — NÚCLEO CRIMINAL —
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Estratégia jurídica avançada em defesa penal para pessoas, empresas e setores de alta complexidade.
          </p>
        </div>

        {/* 9 Cards Grid (3x3 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nucleos.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Row: Number */}
                  <div className="text-xs tracking-widest text-[#B8BBC0]/80 font-mono font-bold">
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div className="text-[#E2E4E8] group-hover:text-[#FFFFFF] transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-title text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-[#74777C]/15">
                  <button
                    onClick={() => handleCardClick(item.id)}
                    className="text-[11px] font-semibold tracking-wider text-[#B8BBC0] group-hover:text-[#CCA668] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                  >
                    <span>AGENDAR ATENDIMENTO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

