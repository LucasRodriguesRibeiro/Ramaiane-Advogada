import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Stethoscope, 
  ArrowRight,
  Search,
  Gavel,
  Lock,
  ShieldAlert,
  Car,
  Globe,
  DollarSign,
  Monitor,
  Landmark,
  Coins,
  Leaf,
  PlaySquare,
  Vote,
  UserCheck,
  Hospital,
  User,
  Scale,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal?: () => void;
  onSelectNucleo?: (nucleoId: string) => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal, onSelectNucleo }) => {
  // Estado para controlar a expansao de cada núcleo individualmente
  const [expandedNucleos, setExpandedNucleos] = useState<Record<string, boolean>>({});

  const nucleosData = [
    {
      id: "penal-tradicional",
      badge: "NÚCLEO 01",
      icon: Shield,
      title: "DIREITO PENAL TRADICIONAL",
      subtitle: "Defesa de pessoas físicas",
      desc: "Atuação firme e estratégica na defesa da liberdade e dos direitos fundamentais em todas as fases da persecução penal.",
      caixas: [
        {
          id: "investigacoes-operacoes",
          title: "Investigações, Inquéritos e Operações Policiais",
          sub: "Busca e apreensão, prisões em flagrante e inquéritos",
          icon: Search
        },
        {
          id: "defesa-tribunais",
          title: "Atuação em Tribunais e Recursos (STJ / STF)",
          sub: "Habeas Corpus, sustentação oral e revisões criminais",
          icon: Gavel
        },
        {
          id: "execucao-penal",
          title: "Execução Penal e Sistema Prisional",
          sub: "Progressão de regime, livramento e direitos do preso",
          icon: Lock
        },
        {
          id: "crimes-honra",
          title: "Crimes Contra a Honra e a Liberdade",
          sub: "Calúnia, difamação, injúria e ameaças",
          icon: ShieldAlert
        },
        {
          id: "policiais-militares",
          title: "Policiais e Agentes de Segurança",
          sub: "Defesa em procedimentos criminais e disciplinares",
          icon: Shield
        },
        {
          id: "crimes-transito",
          title: "Direito Penal de Trânsito",
          sub: "Homicídio culposo, embriaguez e infrações penais",
          icon: Car
        },
        {
          id: "estrangeiros",
          title: "Demandas Transnacionais e Extradição",
          sub: "Cooperação jurídica e assistência no exterior",
          icon: Globe
        }
      ]
    },
    {
      id: "penal-empresarial",
      badge: "NÚCLEO 02",
      icon: Building2,
      title: "DIREITO PENAL EMPRESARIAL",
      subtitle: "Empresas, empresários e negócios",
      desc: "Proteção penal estratégica para empresas, executivos e profissionais expostos a riscos criminais corporativos.",
      caixas: [
        {
          id: "empresarios",
          title: "Criminal Empresarial e Compliance",
          sub: "Empresas, sócios, administradores e executivos",
          icon: Building2
        },
        {
          id: "crimes-economicos",
          title: "Crimes Econômicos, Financeiros e Sonegação",
          sub: "Lavagem de dinheiro, sonegação e fraudes",
          icon: DollarSign
        },
        {
          id: "crimes-digitais",
          title: "Crimes Digitais e Cibernéticos",
          sub: "Fraudes virtuais, vazamentos e cybercrimes",
          icon: Monitor
        },
        {
          id: "gestores-publicos",
          title: "Gestores Públicos e Licitações",
          sub: "Crimes contra a Administração Pública e contratos",
          icon: Landmark
        },
        {
          id: "instituicoes-financeiras",
          title: "Instituições Financeiras e Fintechs",
          sub: "Operações financeiras e mercado de capitais",
          icon: Coins
        },
        {
          id: "produtores-rurais",
          title: "Agronegócio e Setor Rural",
          sub: "Produtores rurais e delitos ambientais",
          icon: Leaf
        },
        {
          id: "influenciadores",
          title: "Influenciadores e Criadores de Conteúdo",
          sub: "Publicidade digital, exposição e crimes de mídia",
          icon: PlaySquare
        },
        {
          id: "crimes-eleitorais",
          title: "Direito Eleitoral Penal",
          sub: "Crimes em campanhas e condutas ilícitas",
          icon: Vote
        }
      ]
    },
    {
      id: "penal-medico",
      badge: "NÚCLEO 03",
      icon: Stethoscope,
      title: "DIREITO PENAL MÉDICO E DA SAÚDE",
      subtitle: "Profissionais e instituições de saúde",
      desc: "Defesa especializada para médicos, profissionais da saúde, clínicas, hospitais e estabelecimentos assistenciais.",
      caixas: [
        {
          id: "saude-medicina",
          title: "Direito Penal Médico (Médicos & Cirurgiões)",
          sub: "Defesa em apurações de erro médico e lesão culposa",
          icon: Stethoscope
        },
        {
          id: "medicos",
          title: "Profissionais da Saúde e Conselhos",
          sub: "Dentistas, biomédicos, enfermeiros, CRM / CFM / CRO",
          icon: UserCheck
        },
        {
          id: "clinicas-gestao",
          title: "Clínicas, Hospitais e Laboratórios",
          sub: "Responsabilidade penal e gestão de crises",
          icon: Hospital
        },
        {
          id: "defesa-paciente",
          title: "Defesa do Paciente e Familiares",
          sub: "Acompanhamento em ocorrências e danos graves",
          icon: User
        },
        {
          id: "acompanhamento-juridico",
          title: "Consultoria e Prevenção Penal na Saúde",
          sub: "Gestão preventiva de riscos na atividade médica",
          icon: Shield
        }
      ]
    }
  ];

  const toggleNucleo = (nucleoId: string) => {
    setExpandedNucleos(prev => ({
      ...prev,
      [nucleoId]: !prev[nucleoId]
    }));
  };

  const handleCaixaClick = (caixaId: string) => {
    if (onSelectNucleo) {
      onSelectNucleo(caixaId);
    } else if (onOpenEmergencyModal) {
      onOpenEmergencyModal();
    }
  };

  return (
    <section id="nucleos-penais" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-16 sm:py-20 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div id="nucleo-criminal" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
            <span>NÚCLEOS DE ATUAÇÃO</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F7F5] tracking-[0.12em] uppercase">
            NÚCLEOS PENAIS
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wider">
            Estrutura especializada dividida em três núcleos de alta precisão técnica. Clique em "Ver Áreas de Atendimento" para conferir as opções.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {nucleosData.map((nucleo) => {
            const HeaderIcon = nucleo.icon;
            const isExpanded = !!expandedNucleos[nucleo.id];

            return (
              <div
                key={nucleo.id}
                className="bg-[#121316] border border-[#74777C]/25 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xl relative transition-all duration-300"
              >
                {/* Column Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#B8BBC0] uppercase bg-[#0B0B0C] px-3 py-1 rounded-sm border border-[#74777C]/30">
                      {nucleo.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1A1C22] border border-[#74777C]/30 flex items-center justify-center text-[#F7F7F5]">
                      <HeaderIcon className="w-5 h-5 text-[#E2E4E8] stroke-[1.5]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif-title text-xl sm:text-2xl text-[#F7F7F5] uppercase tracking-wide leading-tight">
                      {nucleo.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B8BBC0] italic tracking-wide">
                      {nucleo.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light text-justify">
                    {nucleo.desc}
                  </p>
                </div>

                {/* Sub-area Caixas List (Visible when expanded) */}
                {isExpanded && (
                  <div className="space-y-2.5 border-t border-[#74777C]/20 pt-4 animate-fadeIn">
                    {nucleo.caixas.map((caixa) => {
                      const CaixaIcon = caixa.icon;
                      return (
                        <div
                          key={caixa.id}
                          onClick={() => handleCaixaClick(caixa.id)}
                          className="bg-[#0B0B0C] border border-[#74777C]/20 hover:border-[#B8BBC0] rounded-lg p-3.5 flex items-center justify-between space-x-3 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow-md hover:bg-[#16181F]"
                        >
                          <div className="flex items-start space-x-3 min-w-0">
                            <div className="w-7 h-7 rounded bg-[#1A1C22] border border-[#74777C]/30 flex items-center justify-center text-[#B8BBC0] group-hover:text-white group-hover:border-[#B8BBC0] shrink-0 mt-0.5 transition-colors">
                              <CaixaIcon className="w-3.5 h-3.5 stroke-[1.8]" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs font-medium text-[#F7F7F5] group-hover:text-white transition-colors leading-tight truncate">
                                {caixa.title}
                              </h4>
                              <p className="text-[10px] text-[#74777C] group-hover:text-[#B8BBC0] transition-colors leading-tight truncate">
                                {caixa.sub}
                              </p>
                            </div>
                          </div>

                          <div className="w-6 h-6 rounded-full bg-[#1A1C22] group-hover:bg-[#E5E7EB] text-[#B8BBC0] group-hover:text-[#0B0B0C] flex items-center justify-center shrink-0 transition-all">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Main Action Button: VER ÁREAS DE ATENDIMENTO / RECOLHER */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => toggleNucleo(nucleo.id)}
                    className="w-full py-3.5 px-4 bg-[#0B0B0C] hover:bg-[#1A1C22] border border-[#74777C]/30 hover:border-[#B8BBC0] rounded-lg text-xs font-bold uppercase tracking-widest text-[#F7F7F5] flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-md cursor-pointer group"
                  >
                    <span>{isExpanded ? 'RECOLHER ÁREAS' : 'VER ÁREAS DE ATENDIMENTO'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#B8BBC0] group-hover:text-white transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#B8BBC0] group-hover:text-white transition-transform" />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="pt-6 border-t border-[#74777C]/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Shield className="w-5 h-5 text-[#B8BBC0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              ESTRATÉGIA PERSONALIZADA
            </span>
            <span className="text-[10px] text-[#74777C]">Cada caso é único.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Lock className="w-5 h-5 text-[#B8BBC0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              SIGILO ABSOLUTO
            </span>
            <span className="text-[10px] text-[#74777C]">Confidencialidade em todas as etapas.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Scale className="w-5 h-5 text-[#B8BBC0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              ATUAÇÃO TÉCNICA
            </span>
            <span className="text-[10px] text-[#74777C]">Fundamentação sólida e postura firme.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Target className="w-5 h-5 text-[#B8BBC0]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              FOCO EM RESULTADOS
            </span>
            <span className="text-[10px] text-[#74777C]">Defesa eficiente para proteger seus direitos.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
