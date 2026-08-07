import React, { useState } from 'react';
import { ChevronDown, Shield, Phone, MessageCircle, MapPin, Mail, Scale, Lock } from 'lucide-react';
import { EmergencyContact } from '../types';

interface FaqAndFooterFoldProps {
  onOpenEmergencyModal: () => void;
  contact: EmergencyContact;
}

export const FaqAndFooterFold: React.FC<FaqAndFooterFoldProps> = ({ onOpenEmergencyModal, contact }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "O que fazer imediatamente se um familiar foi preso em flagrante?",
      a: "Não preste depoimento sem a presença de um advogado criminalista. Entre em contato urgente conosco para que possamos nos deslocar até a delegacia e garantir o direito constitucional ao silêncio e à integridade do detido."
    },
    {
      q: "O que acontece na Audiência de Custódia?",
      a: "Acontece em até 24 horas após a prisão. O juiz analisa se a prisão foi legal e se há necessidade de manter o indivíduo preso ou conceder a liberdade provisória. A atuação técnica do advogado nesta fase é crucial para soltura rápida."
    },
    {
      q: "É possível impetrar Habeas Corpus no final de semana ou madrugada?",
      a: "Sim. Os Tribunais operam em regime de Plantão Judiciário ininterrupto 24 horas por dia. Nossa equipe tem estrutura para elaborar e impetrar o Habeas Corpus de urgência em qualquer horário."
    },
    {
      q: "Como funciona a contratação do advogado de plantão?",
      a: "O primeiro contato via WhatsApp ou telefone é imediato. Alinhamos a situação urgente da delegacia/custódia e enviamos o advogado para o local de imediato."
    }
  ];

  return (
    <footer className="bg-[#070a10] text-slate-300 border-t border-slate-800/80">
      
      {/* FAQ Section (4ª Dobra) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold tracking-widest uppercase">
            <span>4ª Dobra - Dúvidas Frequentes</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-100">
            Perguntas Frequentes de <span className="gold-text-gradient">Familiares</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Respostas rápidas sobre procedimentos de urgência em matéria penal.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#101622] border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-serif-display font-semibold text-slate-100 flex items-center justify-between gap-4 hover:text-[#f3e5ab] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#0d121c]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Institutional Footer */}
      <div className="border-t border-slate-800 bg-[#05070c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Scale className="w-5 h-5 text-[#d4af37]" />
              <span className="font-cinzel font-bold text-base text-slate-100 tracking-wider">
                ADVOCACIA <span className="gold-text-gradient">CRIMINAL</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Escritório especializado em Defesa Criminal e Garantia de Direitos Fundamentais. Atendimento emergencial 24 horas em todo o Brasil.
            </p>
            <p className="text-[11px] text-slate-400 font-semibold">
              OAB/SP 345.890 | OAB/RJ 210.450
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="font-bold text-slate-200 uppercase tracking-wider mb-2">
              Plantão de Emergência 24h
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#f3e5ab]">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>(11) 99988-7766</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-[#d4af37]" />
              <span>plantaocriminal24h@advocacia.com.br</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Atendimento Presencial em Delegacias e Custódias</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center space-y-3">
            <button
              onClick={onOpenEmergencyModal}
              className="gold-button py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar com o Advogado</span>
            </button>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#d4af37]" /> Sigilo Profissional Garantido por Lei
            </span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Advocacia Criminalista Especializada. Todos os direitos reservados. Projeto desenvolvido dobra por dobra.</p>
        </div>
      </div>

    </footer>
  );
};
