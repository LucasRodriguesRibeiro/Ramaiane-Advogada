import React, { useState } from 'react';
import { 
  ArrowRight, 
  Stethoscope, 
  User, 
  Building2, 
  Briefcase, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface MedicalCoreFoldProps {
  onOpenEmergencyModal?: () => void;
  onSelectNucleo?: (nucleoId: string) => void;
}

export const MedicalCoreFold: React.FC<MedicalCoreFoldProps> = ({ 
  onOpenEmergencyModal, 
  onSelectNucleo 
}) => {
  const [showMore, setShowMore] = useState(false);

  const medicalNucleos = [
    {
      id: "saude-medicina",
      num: "01",
      icon: Stethoscope,
      title: "SAÚDE E MEDICINA",
      audience: "Médicos, Clínicas e Profissionais da Saúde",
      desc: "Defesa e orientação jurídica relacionadas ao exercício profissional e às situações jurídicas que envolvem a atividade médica."
    },
    {
      id: "defesa-paciente",
      num: "02",
      icon: User,
      title: "DEFESA DO PACIENTE",
      audience: "Pacientes e Familiares",
      desc: "Atuação jurídica em questões decorrentes de atendimento médico, procedimentos e conflitos na relação médico-paciente."
    },
    {
      id: "clinicas-gestao",
      num: "03",
      icon: Building2,
      title: "CLÍNICAS E GESTÃO",
      audience: "Clínicas, Consultórios e Estabelecimentos de Saúde",
      desc: "Orientação jurídica relacionada à rotina, gestão e situações que possam gerar repercussões para o estabelecimento."
    },
    {
      id: "acompanhamento-juridico",
      num: "04",
      icon: Briefcase,
      title: "ACOMPANHAMENTO JURÍDICO",
      audience: "Orientação Jurídica Continuada",
      desc: "Acompanhamento jurídico estruturado conforme as necessidades do profissional ou estabelecimento de saúde."
    },
    {
      id: "gestao-crises",
      num: "05",
      icon: ShieldAlert,
      title: "GESTÃO DE CRISES",
      audience: "Conflitos, Reclamações e Notificações",
      desc: "Orientação e atuação jurídica diante de situações sensíveis envolvendo pacientes, familiares, profissionais ou estabelecimentos."
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
    <section id="nucleo-medico" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-12 sm:py-16 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F7F7F5] tracking-[0.15em] uppercase">
            NÚCLEO MÉDICO
          </h2>

          <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
            ATUAÇÃO JURÍDICA ESTRATÉGICA PARA MÉDICOS, CLÍNICAS E PROFISSIONAIS DA SAÚDE.
          </p>
        </div>

        {/* 5 Cards Grid (Displays 3 by default, all 5 when showMore is true) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicalNucleos.map((item, index) => {
            const Icon = item.icon;
            const isCollapsible = index >= 3;

            if (isCollapsible && !showMore) {
              return null;
            }

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
                      <span className="text-[#F7F7F5] font-semibold text-xs tracking-wider">{item.num}</span>
                    </div>
                  </div>

                  {/* Title & Audience */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif-title text-lg sm:text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#B8BBC0] font-medium italic">
                      {item.audience}
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
