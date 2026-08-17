import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  Scale,
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
      id: "medicos",
      category: "SAÚDE E MEDICINA",
      icon: Stethoscope,
      title: "Médicos, Clínicas e Instituições de Saúde",
      desc: "Defesa criminal preventiva e atuação em investigações, sindicâncias, procedimentos administrativos e processos relacionados à atividade médica e à gestão de clínicas."
    },
    {
      id: "pacientes",
      category: "DEFESA DO PACIENTE",
      icon: Scale,
      title: "Pacientes e Vítimas de Erro Médico",
      desc: "Atuação na defesa de pacientes vítimas de possíveis crimes ou condutas ilícitas decorrentes de atendimento médico, procedimentos, negligência, imprudência ou imperícia, com análise estratégica do caso e responsabilização na esfera criminal quando cabível."
    },
    {
      id: "empresarios",
      category: "EMPRESAS & EXECUTIVOS",
      icon: Building2,
      title: "Empresários, Executivos e Sociedades",
      desc: "Proteção contra riscos decorrentes de decisões corporativas, operações financeiras, tributárias, lavagem de dinheiro, fraudes e procedimentos de persecução penal."
    },
    {
      id: "produtores-rurais",
      category: "AGRONEGÓCIO & MEIO AMBIENTE",
      icon: Leaf,
      title: "Produtores Rurais e Atividade Ambiental",
      desc: "Atuação estratégica em investigações e processos por supostas infrações ambientais, autuações de órgãos de fiscalização, recursos naturais e licenciamento."
    },
    {
      id: "crimes-digitais",
      category: "TECNOLOGIA & AMBIENTE DIGITAL",
      icon: Monitor,
      title: "Crimes Digitais e Fraudes Virtuais",
      desc: "Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, recuperação de ativos e ilícitos no ambiente digital."
    },
    {
      id: "influenciadores",
      category: "MÍDIA & CRIADORES DE CONTEÚDO",
      icon: PlaySquare,
      title: "Influenciadores e Criadores de Conteúdo",
      desc: "Atuação estratégica na defesa de personalidades públicas e criadores de conteúdo diante de operações policiais, exposições e procedimentos na internet."
    },
    {
      id: "gestores-publicos",
      category: "SETOR PÚBLICO & LICITAÇÕES",
      icon: Landmark,
      title: "Gestores e Agentes Públicos",
      desc: "Defesa em investigações e processos relacionados ao exercício da função pública, licitações, contratos administrativos e crimes contra a Administração Pública."
    },
    {
      id: "profissionais-liberais",
      category: "PROFISSIONAIS LIBERAIS & AUTÔNOMOS",
      icon: User,
      title: "Profissionais Liberais",
      desc: "Atuação preventiva e defesa criminal diante de riscos decorrentes do exercício profissional e de atividades regulamentadas."
    },
    {
      id: "instituicoes-financeiras",
      category: "MERCADO FINANCEIRO & FINTECHS",
      icon: Coins,
      title: "Instituições Financeiras, Fintechs e Investidores",
      desc: "Atuação em investigações envolvendo operações financeiras, lavagem de dinheiro, patrimônio e delitos econômicos."
    },
    {
      id: "estrangeiros",
      category: "INTERNACIONAL & ESTRANGEIROS",
      icon: Globe,
      title: "Estrangeiros e Empresas Internacionais",
      desc: "Assistência e defesa criminal em investigações e processos com repercussões penais no Brasil."
    },
    {
      id: "policiais-militares",
      category: "SEGURANÇA PÚBLICA & FORÇAS DE SEGURANÇA",
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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-4xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#CCA668]"></span>
            <span>ATUAÇÃO POR SETORES</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-tight uppercase">
            DEFESA CRIMINAL PARA DIFERENTES CONTEXTOS PROFISSIONAIS
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
            Estratégias de prevenção e defesa criminal desenvolvidas de acordo com os riscos específicos de cada atividade profissional e empresarial.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nucleos.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#CCA668]/50 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-4">
                  {/* Category with Icon */}
                  <div className="flex items-center space-x-2 text-[11px] font-bold tracking-wider text-[#B8BBC0] uppercase">
                    <Icon className="w-4 h-4 text-[#CCA668] shrink-0" />
                    <span className="group-hover:text-[#F7F7F5] transition-colors">{item.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-title text-lg sm:text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
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

