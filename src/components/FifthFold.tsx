import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Stethoscope, 
  ArrowRight,
  Search,
  Gavel,
  Lock,
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
  // Estado para controlar a expansao de cada núcleo individualmente (iniciam recolhidas)
  const [expandedNucleos, setExpandedNucleos] = useState<Record<string, boolean>>({
    'penal-tradicional': false,
    'penal-empresarial': false,
    'penal-medico': false
  });

  const nucleosData: NucleoItem[] = [
    {
      id: "penal-tradicional",
      badge: "NÚCLEO 01",
      icon: Shield,
      image: "/penal1.jpg?v=20260903",
      fallbackImage: penal1Img,
      title: "DEFESA CRIMINAL",
      subtitle: "Defesa de pessoas físicas",
      desc: "Defesa da liberdade desde o primeiro momento: da abordagem policial aos Tribunais Superiores.",
      caixas: [
        {
          id: "prisao-flagrante",
          title: "Prisão em flagrante e audiência de custódia",
          sub: "Atuação imediata para pedir liberdade provisória e relaxamento da prisão",
          icon: Search
        },
        {
          id: "trafico-drogas",
          title: "Tráfico de drogas e associação para o tráfico",
          sub: "Lei de Drogas: tráfico local, interestadual e internacional",
          icon: Scale
        },
        {
          id: "operacoes-policiais",
          title: "Operações policiais e organização criminosa",
          sub: "Busca e apreensão, prisões preventivas e grandes operações",
          icon: Gavel
        },
        {
          id: "inquerito-investigacoes",
          title: "Inquérito policial e investigações",
          sub: "Acompanhamento de depoimentos e defesa antes da denúncia",
          icon: Search
        },
        {
          id: "violencia-domestica",
          title: "Violência doméstica (Lei Maria da Penha)",
          sub: "Defesa do acusado e atuação em medidas protetivas",
          icon: Shield
        },
        {
          id: "defesa-tribunais",
          title: "Habeas corpus e recursos nos Tribunais Superiores",
          sub: "TJ, STJ e STF, com recursos e sustentação oral",
          icon: Landmark
        },
        {
          id: "execucao-penal",
          title: "Execução penal e sistema prisional",
          sub: "Progressão de regime, livramento condicional, remição e transferência",
          icon: Lock
        }
      ]
    },
    {
      id: "penal-empresarial",
      badge: "NÚCLEO 02",
      icon: Building2,
      image: "/penal2.jpg",
      fallbackImage: penal2Img,
      title: "PENAL EMPRESARIAL E ECONÔMICO",
      subtitle: "Empresas, executivos e negócios",
      desc: "Proteção penal para empresas, sócios e gestores, com prevenção antes do problema e defesa quando ele chega.",
      caixas: [
        {
          id: "operacao-policial-empresa",
          title: "Operação policial na empresa",
          sub: "Protocolo de atuação em busca e apreensão e acompanhamento no mesmo dia",
          icon: Building2
        },
        {
          id: "crimes-economicos",
          title: "Lavagem de dinheiro e crimes econômicos",
          sub: "Investigações financeiras, bloqueio e sequestro de bens",
          icon: DollarSign
        },
        {
          id: "crimes-tributarios",
          title: "Crimes tributários",
          sub: "Sonegação, apropriação indébita tributária e representação fiscal",
          icon: FileText
        },
        {
          id: "fraudes-empresariais",
          title: "Fraudes empresariais e patrimoniais",
          sub: "Estelionato, apropriação indébita e falsidade documental",
          icon: FileText
        },
        {
          id: "responsabilidade-gestores",
          title: "Responsabilidade penal de sócios e gestores",
          sub: "Defesa de administradores, diretores e executivos",
          icon: UserCheck
        },
        {
          id: "crimes-digitais",
          title: "Crimes digitais e cibernéticos",
          sub: "Fraudes virtuais, golpes por Pix, invasão de dispositivos e vazamento de dados",
          icon: Monitor
        },
        {
          id: "compliance-penal",
          title: "Compliance e prevenção penal",
          sub: "Mapeamento de riscos, políticas internas e investigação interna",
          icon: Shield
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
      subtitle: "Médicos, clínicas, hospitais e estética",
      desc: "Defesa e prevenção penal para médicos, dentistas, biomédicos, enfermeiros e clínicas.",
      caixas: [
        {
          id: "erro-medico",
          title: "Erro médico na esfera penal",
          sub: "Defesa em inquéritos e ações por lesão ou óbito de paciente",
          icon: UserCheck
        },
        {
          id: "processo-etico",
          title: "Processo ético nos conselhos de classe",
          sub: "Defesa em sindicâncias e processos ético-profissionais no CRM, CRO e COREN",
          icon: Gavel
        },
        {
          id: "estetica-profissionais",
          title: "Estética e harmonização",
          sub: "Dentistas, biomédicos, enfermeiros e demais profissionais habilitados",
          icon: UserCheck
        },
        {
          id: "clinicas-gestao",
          title: "Clínicas, hospitais e laboratórios",
          sub: "Investigações, vigilância sanitária e gestão de crise",
          icon: Hospital
        },
        {
          id: "medicamentos-receitas",
          title: "Medicamentos controlados e receitas",
          sub: "Prescrição, armazenamento e fiscalização",
          icon: Stethoscope
        },
        {
          id: "fraudes-sus-convenios",
          title: "Fraudes em SUS e convênios",
          sub: "Investigações de faturamento e auditorias",
          icon: FileText
        },
        {
          id: "prevencao-penal-saude",
          title: "Prevenção penal na saúde",
          sub: "Prontuário, termo de consentimento e protocolos de segurança",
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
      <div id="nucleo-criminal" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F7F5] tracking-[0.12em] uppercase">
            ÁREAS DE ATUAÇÃO
          </h2>
        </div>

        {/* 3 Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
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
                      <HeaderIcon className="w-5 h-5 text-white stroke-[1.5]" />
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
                            <div className="w-7 h-7 rounded-lg bg-[#1A1C22] border border-[#74777C]/30 flex items-center justify-center text-[#B8BBC0] group-hover:text-white group-hover:border-white/50 shrink-0 mt-0.5 transition-colors">
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
                          <div className="w-7 h-7 rounded-full bg-[#1A1C22] group-hover:bg-white text-[#8E9196] group-hover:text-[#0B0B0C] flex items-center justify-center shrink-0 transition-all self-center ml-1">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                    {nucleo.id === 'penal-tradicional' && (
                      <p className="pt-2 text-center text-xs text-[#B8BBC0]">
                        Seu caso não está aqui? Fale com a advogada.
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => handleCaixaClick(nucleo.id)}
                      className="w-full mt-3 py-3.5 px-4 bg-[#F7F7F5] hover:bg-white text-[#0B0B0C] rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <span>FALAR SOBRE O MEU CASO</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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


      </div>
    </section>
  );
};
