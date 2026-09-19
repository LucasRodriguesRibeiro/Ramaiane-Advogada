import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Stethoscope, 
  Sparkles,
  ArrowRight,
  Search,
  Gavel,
  Lock,
  ShieldAlert,
  Scale,
  Landmark,
  DollarSign,
  Monitor,
  UserCheck,
  Hospital,
  ChevronDown,
  ChevronUp,
  FileText,
  LucideIcon
} from 'lucide-react';
import penal1Img from '../assets/images/penal1.jpg';
import penal2Img from '../assets/images/penal2.jpg';
import penal3Img from '../assets/images/penal3.jpg';
import penal4Img from '../assets/images/penal4.jpg';

interface FifthFoldProps {
  onOpenEmergencyModal?: () => void;
  onSelectNucleo?: (nucleoId: string) => void;
}

interface CaixaItem {
  id: string;
  title: string;
  sub: string;
  icon: LucideIcon;
}

interface NucleoItem {
  id: string;
  badge: string;
  icon: LucideIcon;
  image: string;
  fallbackImage: string;
  title: string;
  subtitle: string;
  desc: string;
  caixas: CaixaItem[];
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal, onSelectNucleo }) => {
  // Estado para controlar a expansao de cada núcleo individualmente
  const [expandedNucleos, setExpandedNucleos] = useState<Record<string, boolean>>({
    'penal-tradicional': true,
    'penal-empresarial': true,
    'penal-medico': true,
    'penal-estetico': true
  });

  const nucleosData: NucleoItem[] = [
    {
      id: "penal-tradicional",
      badge: "NÚCLEO 01",
      icon: Shield,
      image: "/penal1.jpg?v=20260903",
      fallbackImage: penal1Img,
      title: "DIREITO PENAL E DEFESA CRIMINAL",
      subtitle: "Defesa de pessoas físicas",
      desc: "Atuação estratégica na defesa da liberdade e dos direitos fundamentais em todas as fases da persecução penal.",
      caixas: [
        {
          id: "operacoes-policiais",
          title: "Operações policiais e prisão em flagrante",
          sub: "Busca e apreensão, flagrante, medidas cautelares",
          icon: Search
        },
        {
          id: "trafico-drogas",
          title: "Tráfico de drogas e crimes interestaduais",
          sub: "Lei de Drogas, tráfico local, interestadual e internacional",
          icon: Scale
        },
        {
          id: "defesa-tribunais",
          title: "Tribunais superiores e recursos criminais",
          sub: "Habeas corpus, recursos, sustentações orais",
          icon: Landmark
        },
        {
          id: "execucao-penal",
          title: "Execução penal e sistema prisional",
          sub: "Progressão de regime, livramento condicional",
          icon: Lock
        },
        {
          id: "outras-demandas",
          title: "Outras demandas criminais",
          sub: "Situações da esfera penal não listadas acima",
          icon: Gavel
        }
      ]
    },
    {
      id: "penal-empresarial",
      badge: "NÚCLEO 02",
      icon: Building2,
      image: "/penal2.jpg",
      fallbackImage: penal2Img,
      title: "DIREITO PENAL EMPRESARIAL E ECONÔMICO",
      subtitle: "Empresas, executivos e negócios",
      desc: "Proteção penal estratégica para empresas, executivos e profissionais expostos a riscos criminais corporativos.",
      caixas: [
        {
          id: "empresarios",
          title: "Criminal empresarial e compliance",
          sub: "Empresas, sócios, administradores e executivos",
          icon: Building2
        },
        {
          id: "crimes-economicos",
          title: "Crimes econômicos e tributários",
          sub: "Lavagem de dinheiro, fraudes e crimes tributários",
          icon: DollarSign
        },
        {
          id: "fraudes-empresariais",
          title: "Fraudes empresariais e patrimoniais",
          sub: "Estelionato, apropriação indébita, falsidade",
          icon: FileText
        },
        {
          id: "crimes-digitais",
          title: "Crimes digitais e cibernéticos",
          sub: "Fraudes virtuais, vazamentos de dados",
          icon: Monitor
        }
      ]
    },
    {
      id: "penal-medico",
      badge: "NÚCLEO 03",
      icon: Stethoscope,
      image: "/penal3.jpg",
      fallbackImage: penal3Img,
      title: "DIREITO PENAL MÉDICO E DA SAÚDE",
      subtitle: "Médicos, clínicas e hospitais",
      desc: "Defesa especializada para médicos e estabelecimentos de saúde e hospitalares.",
      caixas: [
        {
          id: "medicos",
          title: "Médicos e conselhos de classe",
          sub: "Erro médico, responsabilidade clínica, CRM",
          icon: UserCheck
        },
        {
          id: "clinicas-gestao",
          title: "Clínicas, hospitais e laboratórios",
          sub: "Responsabilidade penal, investigações, gestão de crise",
          icon: Hospital
        },
        {
          id: "responsabilizacao-penal",
          title: "Responsabilização penal e processos",
          sub: "Inquéritos, denúncias, acusações",
          icon: Shield
        },
        {
          id: "acompanhamento-juridico",
          title: "Consultoria e prevenção penal",
          sub: "Gestão preventiva de riscos na atividade médica",
          icon: Stethoscope
        }
      ]
    },
    {
      id: "penal-estetico",
      badge: "NÚCLEO 04",
      icon: Sparkles,
      image: "/penal4.jpg",
      fallbackImage: penal4Img,
      title: "DIREITO PENAL ESTÉTICO",
      subtitle: "Profissionais e clínicas de estética",
      desc: "Defesa especializada para profissionais e clínicas de estética em processos e investigações penais.",
      caixas: [
        {
          id: "estetica-profissionais",
          title: "Profissionais de estética",
          sub: "Dentistas, biomédicos, enfermeiros e demais profissionais habilitados",
          icon: UserCheck
        },
        {
          id: "estetica-clinicas",
          title: "Clínicas e espaços de estética",
          sub: "Responsabilidade penal, investigações e gestão de crises",
          icon: Building2
        },
        {
          id: "estetica-procedimentos",
          title: "Procedimentos injetáveis e harmonização facial",
          sub: "Riscos penais específicos desses procedimentos",
          icon: Sparkles
        },
        {
          id: "estetica-exercicio-ilegal",
          title: "Exercício ilegal e lesão corporal",
          sub: "Defesa em acusações de exercício ilegal da profissão ou lesão corporal",
          icon: ShieldAlert
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
      <div id="nucleo-criminal" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold justify-center">
            <span>✦ ATUAÇÃO ESTRATÉGICA. DEFESA EFICAZ. ✦</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F7F5] tracking-[0.12em] uppercase">
            ÁREAS DE ATUAÇÃO
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto tracking-wider">
            A atuação se concentra no Direito Penal, com defesa e assessoria jurídica para pessoas físicas, empresários, empresas, profissionais da saúde e clínicas.
          </p>
        </div>

        {/* 4 Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {nucleosData.map((nucleo) => {
            const HeaderIcon = nucleo.icon;
            const isExpanded = !!expandedNucleos[nucleo.id];

            return (
              <div
                key={nucleo.id}
                className="bg-[#121316] border border-[#74777C]/25 hover:border-[#74777C]/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-2xl relative transition-all duration-300"
              >
                {/* Column Card Header with Image */}
                <div className="space-y-4">
                  {/* Top Image Box */}
                  <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-[#74777C]/20 shadow-md group">
                    <img
                      src={nucleo.image}
                      alt={nucleo.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = nucleo.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-70"></div>
                  </div>

                  {/* Centered Icon Badge */}
                  <div className="flex justify-center -mt-9 z-10 relative">
                    <div className="w-12 h-12 rounded-full bg-[#121316] border border-[#74777C]/40 flex items-center justify-center text-[#F7F7F5] shadow-lg">
                      <HeaderIcon className="w-5 h-5 text-[#E2C792] stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Centered Title & Description */}
                  <div className="space-y-2 text-center">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#B8BBC0] uppercase block">
                      {nucleo.badge}
                    </span>

                    <h3 className="font-serif-title text-xl sm:text-[22px] text-[#F7F7F5] uppercase tracking-wide leading-snug px-1 min-h-[56px] flex items-center justify-center">
                      {nucleo.title}
                    </h3>

                    <p className="text-xs text-[#8E9196] leading-relaxed font-light px-1 text-center min-h-[42px]">
                      {nucleo.desc}
                    </p>
                  </div>
                </div>

                {/* Sub-area Caixas List */}
                {isExpanded && (
                  <div className="space-y-2.5 border-t border-[#74777C]/20 pt-4 animate-fadeIn">
                    {nucleo.caixas.map((caixa) => {
                      const CaixaIcon = caixa.icon;
                      return (
                        <div
                          key={caixa.id}
                          onClick={() => handleCaixaClick(caixa.id)}
                          className="bg-[#0B0B0C] border border-[#74777C]/25 hover:border-[#B8BBC0] rounded-xl p-3 sm:p-3.5 flex items-center justify-between space-x-3 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow-md hover:bg-[#16181F]"
                          title="Clique para abrir a janela de atendimento"
                        >
                          <div className="flex items-start space-x-3 min-w-0 flex-1">
                            <div className="w-7 h-7 rounded-lg bg-[#1A1C22] border border-[#74777C]/30 flex items-center justify-center text-[#B8BBC0] group-hover:text-[#E2C792] group-hover:border-[#E2C792]/50 shrink-0 mt-0.5 transition-colors">
                              <CaixaIcon className="w-3.5 h-3.5 stroke-[1.8]" />
                            </div>
                            <div className="space-y-0.5 min-w-0 text-left">
                              <h4 className="text-xs font-semibold text-[#F7F7F5] group-hover:text-white transition-colors leading-snug">
                                {caixa.title}
                              </h4>
                              <p className="text-[11px] text-[#8E9196] leading-tight font-light">
                                {caixa.sub}
                              </p>
                            </div>
                          </div>

                          {/* Seta à direita que abre a janela de atendimento */}
                          <div className="w-7 h-7 rounded-full bg-[#1A1C22] group-hover:bg-[#E2C792] text-[#8E9196] group-hover:text-[#0B0B0C] flex items-center justify-center shrink-0 transition-all self-center ml-1">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Botão para recolher ou expandir áreas */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => toggleNucleo(nucleo.id)}
                    className="w-full py-3.5 px-4 bg-[#0B0B0C] hover:bg-[#1A1C22] border border-[#74777C]/30 hover:border-[#B8BBC0] rounded-lg text-xs font-bold uppercase tracking-widest text-[#F7F7F5] flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-md cursor-pointer group"
                  >
                    <span>{isExpanded ? 'RECOLHER ÁREAS' : 'VER ÁREAS DE ATUAÇÃO'}</span>
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
            <Shield className="w-5 h-5 text-[#E2C792]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              ESTRATÉGIA PERSONALIZADA
            </span>
            <span className="text-[10px] text-[#74777C]">Cada caso, uma estratégia.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Lock className="w-5 h-5 text-[#E2C792]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              SIGILO ABSOLUTO
            </span>
            <span className="text-[10px] text-[#74777C]">Confidencialidade em todas as etapas.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Scale className="w-5 h-5 text-[#E2C792]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              ATUAÇÃO TÉCNICA
            </span>
            <span className="text-[10px] text-[#74777C]">Rigor em cada decisão.</span>
          </div>

          <div className="bg-[#121316] border border-[#74777C]/20 rounded-lg p-4 flex flex-col items-center space-y-1.5">
            <Sparkles className="w-5 h-5 text-[#E2C792]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
              FOCO EM RESULTADOS
            </span>
            <span className="text-[10px] text-[#74777C]">Atuação estratégica em busca da melhor solução jurídica.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
