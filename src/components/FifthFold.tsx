import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  User, 
  Leaf, 
  Monitor, 
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
      icon: User,
      title: "Pacientes e Vítimas de Erro Médico",
      desc: "Atuação na defesa de pacientes vítimas de possíveis crimes ou condutas ilícitas decorrentes de atendimento médico, procedimentos, negligência, imprudência ou imperícia."
    },
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
        
        {/* Section Header - Centered matching Núcleo Cível */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            — NÚCLEO CRIMINAL —
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
            Defesa estratégica e atuação jurídica em questões criminais.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows of 3) matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nucleos.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Category with Icon */}
                  <div className="flex items-center space-x-2.5 text-[11px] font-bold tracking-wider text-[#B8BBC0] uppercase">
                    <Icon className="w-4 h-4 text-[#E2E4E8] group-hover:text-white shrink-0 transition-colors" />
                    <span className="group-hover:text-[#F7F7F5] transition-colors">{item.category}</span>
                  </div>

                  {/* Title */}
                  <div className="space-y-2.5">
                    <h3 className="font-serif-title text-lg sm:text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[1.5px] bg-[#B8BBC0]/40"></div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
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

      </div>
    </section>
  );
};



