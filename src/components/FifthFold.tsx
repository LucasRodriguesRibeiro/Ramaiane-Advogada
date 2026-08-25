import React, { useState } from 'react';
import { 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  User, 
  Leaf, 
  Monitor, 
  Shield,
  Globe,
  Landmark,
  Coins,
  PlaySquare,
  Search,
  Gavel,
  DollarSign,
  Vote,
  Car,
  Lock,
  ShieldAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal?: () => void;
  onSelectNucleo?: (nucleoId: string) => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal, onSelectNucleo }) => {
  const [showMore, setShowMore] = useState(false);

  const nucleos = [
    {
      id: "empresarios",
      category: "EMPRESAS E EXECUTIVOS",
      icon: Building2,
      title: "Empresários, Executivos e Operações Corporativas",
      desc: "Proteção contra riscos de responsabilidade penal em investigações criminais, operações empresariais, compliance criminal, fraudes e crimes econômicos."
    },
    {
      id: "policiais-militares",
      category: "FORÇAS DE SEGURANÇA",
      icon: Shield,
      title: "Policiais e Agentes em Investigação",
      desc: "Atuação estratégica para policiais e agentes em investigações e procedimentos disciplinares ou criminais."
    },
    {
      id: "crimes-digitais",
      category: "CRIMES DIGITAIS",
      icon: Monitor,
      title: "Crimes Digitais e Fraudes Virtuais",
      desc: "Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, vazamento de dados, golpes virtuais e delitos tecnológicos."
    },
    {
      id: "produtores-rurais",
      category: "AGRONEGÓCIO E MEIO AMBIENTE",
      icon: Leaf,
      title: "Produtores Rurais e Atividade Ambiental",
      desc: "Defesa em investigações e processos relacionados ao agronegócio, crimes ambientais, irregularidades e fiscalização."
    },
    {
      id: "estrangeiros",
      category: "DEMANDAS TRANSNACIONAIS",
      icon: Globe,
      title: "Clientes Estrangeiros e Empresas Internacionais",
      desc: "Assistência e defesa criminal em investigações e processos que envolvem elementos internacionais, cooperação jurídica e demandas transnacionais."
    },
    {
      id: "gestores-publicos",
      category: "FUNÇÃO PÚBLICA",
      icon: Landmark,
      title: "Gestores e Agentes Públicos",
      desc: "Defesa em investigações e processos relacionados ao exercício da função pública, licitações, contratos administrativos e crimes contra a Administração Pública."
    },
    {
      id: "instituicoes-financeiras",
      category: "MERCADO FINANCEIRO",
      icon: Coins,
      title: "Instituições Financeiras, Fintechs e Investidores",
      desc: "Atuação em investigações envolvendo operações financeiras, lavagem de dinheiro, patrimônio, delitos econômicos e proteção de investidores."
    },
    {
      id: "influenciadores",
      category: "MÍDIA E CRIADORES",
      icon: PlaySquare,
      title: "Influenciadores e Criadores de Conteúdo",
      desc: "Defesa em crimes digitais, exposição indevida, crimes contra a honra, fraudes, publicidade e riscos penais relacionados à atividade digital."
    },
    {
      id: "investigacoes-operacoes",
      category: "PERSECUÇÃO PENAL",
      icon: Search,
      title: "Investigações, Prisões e Operações Policiais",
      desc: "Atuação estratégica em inquéritos, prisões, buscas e apreensões, operações policiais, tráfico de drogas e crimes de maior complexidade."
    },
    {
      id: "defesa-tribunais",
      category: "ATUAÇÃO NOS TRIBUNAIS",
      icon: Gavel,
      title: "Defesa em Tribunais e Recursos Criminais",
      desc: "Atuação em processos criminais em todas as instâncias, recursos especiais, habeas corpus, revisões criminais e medidas processuais estratégicas."
    },
    {
      id: "crimes-economicos",
      category: "DIREITO PENAL ECONÔMICO",
      icon: DollarSign,
      title: "Crimes Econômicos, Tributários e Contra o Patrimônio",
      desc: "Defesa em crimes tributários, sonegação, fraudes fiscais, estelionato, apropriação indébita, lavagem de dinheiro e demais crimes patrimoniais."
    },
    {
      id: "crimes-eleitorais",
      category: "DIREITO ELEITORAL PENAL",
      icon: Vote,
      title: "Crimes Eleitorais",
      desc: "Defesa e consultoria em investigações e processos relacionados a crimes eleitorais, abuso de poder, caixa 2, corrupção eleitoral e condutas ilícitas em campanhas."
    },
    {
      id: "crimes-transito",
      category: "DIREITO PENAL DE TRÂNSITO",
      icon: Car,
      title: "Crimes de Trânsito",
      desc: "Defesa em crimes de trânsito, embriaguez ao volante, homicídio culposo, lesão corporal culposa e demais infrações penais relacionadas ao trânsito."
    },
    {
      id: "execucao-penal",
      category: "EXECUÇÃO PENAL",
      icon: Lock,
      title: "Execução Penal e Sistema Prisional",
      desc: "Atuação em execuções penais, progressão de regime, livramento condicional, incidentes, transferência, falta grave e direitos do preso."
    },
    {
      id: "crimes-honra",
      category: "HONRA E LIBERDADE",
      icon: ShieldAlert,
      title: "Crimes Contra a Honra, Liberdade e Imagem",
      desc: "Defesa em calúnia, difamação, injúria, ameaças, perseguição e condutas que afetam a honra, liberdade e imagem de pessoas físicas e jurídicas."
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
    <section id="nucleo-criminal" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            NÚCLEO CRIMINAL
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
            Defesa estratégica e atuação jurídica em questões criminais.
          </p>
        </div>

        {/* 15 Cards Grid (Displays 6 by default, all 15 when showMore is true) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nucleos.map((item, index) => {
            const Icon = item.icon;
            const isCollapsible = index >= 6;
            if (isCollapsible && !showMore) {
              return null;
            }

            const cardNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md cursor-pointer relative"
              >
                <div className="space-y-4">
                  {/* Card Number & Header Row */}
                  <div className="flex items-center justify-between border-b border-[#74777C]/15 pb-3">
                    <div className="flex items-center space-x-2.5 text-[11px] font-bold tracking-wider text-[#B8BBC0] uppercase">
                      <Icon className="w-4 h-4 text-[#E2E4E8] group-hover:text-white shrink-0 transition-colors" />
                      <span className="text-[#F7F7F5] font-semibold text-xs tracking-wider">{cardNumber}</span>
                    </div>
                  </div>

                  {/* Title & Audience */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif-title text-lg sm:text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors uppercase tracking-wide">
                      {item.category}
                    </h3>
                    <p className="text-xs text-[#B8BBC0] font-medium italic">
                      {item.title}
                    </p>
                    <div className="w-10 h-[1.5px] bg-[#B8BBC0]/40 pt-1"></div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light text-justify pt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action: SAIBA MAIS → */}
                <div className="pt-6 mt-6 border-t border-[#74777C]/15">
                  <div className="text-[11px] font-semibold tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors uppercase">
                    <span>SAIBA MAIS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ver Mais / Ver Menos Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 bg-[#18191B] hover:bg-[#222428] text-[#F7F7F5] border border-[#74777C]/30 hover:border-[#B8BBC0]/60 rounded-md text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md group cursor-pointer"
          >
            <span>{showMore ? 'VER MENOS' : 'VER MAIS'}</span>
            {showMore ? (
              <ChevronUp className="w-4 h-4 text-[#B8BBC0] group-hover:text-[#F7F7F5] group-hover:-translate-y-0.5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#B8BBC0] group-hover:text-[#F7F7F5] group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};




