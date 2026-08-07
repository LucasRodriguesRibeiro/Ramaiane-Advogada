import React from 'react';
import { ShieldCheck, Zap, Scale, HeartHandshake, Eye, Award, CheckCircle2 } from 'lucide-react';

interface WhyUsFoldProps {
  onOpenEmergencyModal: () => void;
}

export const WhyUsFold: React.FC<WhyUsFoldProps> = ({ onOpenEmergencyModal }) => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#d4af37]" />,
      title: "Pronto Atendimento 24/7",
      desc: "Linha direta de emergência sem intermediários. Atendimento imediato em qualquer dia da semana ou horário."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#d4af37]" />,
      title: "Especialização Exclusiva",
      desc: "Foco integral em Direito Penal e Processual Penal. Não fazemos outras áreas; nossa expertise é a liberdade."
    },
    {
      icon: <Eye className="w-6 h-6 text-[#d4af37]" />,
      title: "Transparência Absoluta com a Família",
      desc: "Mantemos os familiares constantemente informados de cada passo processual, decisão do juiz e visitas na prisão."
    },
    {
      icon: <Scale className="w-6 h-6 text-[#d4af37]" />,
      title: "Atuação Combativa nos Tribunais",
      desc: "Construção de teses jurídicas sólidas, requerimentos com urgência e sustentações orais perante os Tribunais Superior (STJ e STF)."
    }
  ];

  const stats = [
    { label: "Anos de Experiência Penal", value: "12+" },
    { label: "Atendimentos em Plantões 24h", value: "1.500+" },
    { label: "Habeas Corpus Impetrados", value: "800+" },
    { label: "Presença Imediata em Delegacias", value: "100%" }
  ];

  return (
    <section className="relative py-20 bg-[#0b0f17] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold tracking-widest uppercase">
            <span>3ª Dobra - Por Que Nos Escolher</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            A Escolha do Advogado Certo Muda o <span className="gold-text-gradient">Destino do Processo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Em matérias criminais, falhas nas primeiras horas podem ser irreversíveis. Oferecemos uma defesa técnica, humana e incansável.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#121826] border border-slate-800/90 hover:border-[#d4af37]/40 transition-all flex items-start space-x-5 shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-serif-display text-xl font-bold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Numeric Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#101622] border border-slate-800 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#f3e5ab]">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEmergencyModal}
            className="gold-button py-4 px-9 rounded-xl text-sm font-bold uppercase tracking-wider inline-flex items-center space-x-2"
          >
            <span>Falar Diretamente com Advogado de Plantão</span>
          </button>
        </div>

      </div>
    </section>
  );
};
