import React from 'react';
import { ShieldAlert, AlertCircle, PhoneCall } from 'lucide-react';
import handcuffsImg from '../assets/images/dobra1.jpg';

interface ThirdFoldProps {
  onOpenEmergencyModal: () => void;
}

export const ThirdFold: React.FC<ThirdFoldProps> = ({ onOpenEmergencyModal }) => {
  const urgentSituations = [
    { title: "BUSCA E APREENSÃO", desc: "Acompanhamento presencial e garantia de direitos durante o cumprimento de mandados." },
    { title: "PRISÃO EM FLAGRANTE", desc: "Atuação imediata na delegacia e estruturação da primeira linha de defesa." },
    { title: "AUDIÊNCIA DE CUSTÓDIA", desc: "Defesa técnica nas primeiras 24 horas para pleitear a liberdade provisória." },
    { title: "PEDIDOS DE LIBERDADE", desc: "Habeas corpus e pedidos de revogação de prisão preventiva em caráter de urgência." },
    { title: "INQUÉRITOS E INVESTIGAÇÕES", desc: "Acompanhamento desde a fase policial com definição antecipada de estratégia." },
    { title: "MEDIDAS CAUTELARES", desc: "Atuação contra restrições patrimoniais, bloqueios e medidas restritivas de direito." },
  ];

  return (
    <section id="urgencias" className="relative w-full bg-[#18191B] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#74777C]/20 overflow-hidden">
      {/* Dark Dramatic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src={handcuffsImg}
          alt="Situações de Urgência Criminal"
          className="w-full h-full object-cover object-center filter contrast-125 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18191B] via-[#18191B]/80 to-[#18191B]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#B8BBC0]"></span>
            <span>SITUAÇÕES QUE EXIGEM ATUAÇÃO IMEDIATA</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight">
            QUANDO CADA DECISÃO IMPORTA.
          </h2>

          <p className="text-[#B8BBC0] text-base leading-relaxed font-light">
            Em situações criminais urgentes, orientação jurídica especializada desde os primeiros momentos pode ser determinante para a condução do caso.
          </p>
        </div>

        {/* Elegant Situations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {urgentSituations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0B0B0C] border border-[#74777C]/25 p-6 rounded-md space-y-3 hover:border-[#B8BBC0]/60 transition-colors"
            >
              <div className="flex items-center space-x-2 text-[#B8BBC0]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#F7F7F5]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Urgent Action Callout */}
        <div className="pt-6 border-t border-[#74777C]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs tracking-widest text-[#B8BBC0] font-semibold uppercase">
              PLANTÃO DE URGÊNCIA 24H
            </div>
            <div className="font-serif-title text-xl text-[#F7F7F5]">
              ATENDIMENTO PARA SITUAÇÕES URGENTES
            </div>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="silver-button px-8 py-4 rounded-md text-xs font-bold uppercase tracking-widest flex items-center space-x-3 cursor-pointer shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>ACIONAR ATENDIMENTO DE URGÊNCIA →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
