import React, { useState } from 'react';
import { Layers, CheckCircle2, Circle, ChevronRight, Sparkles, Sliders, Shield, Scale, Clock, Award } from 'lucide-react';

interface SectionBuilderControlProps {
  activeFold: number;
  setActiveFold: (fold: number) => void;
  unlockedFolds: number[];
  setUnlockedFolds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const SectionBuilderControl: React.FC<SectionBuilderControlProps> = ({
  activeFold,
  setActiveFold,
  unlockedFolds,
  setUnlockedFolds,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const folds = [
    {
      id: 1,
      name: "1ª Dobra (Hero Principal)",
      desc: "Primeira dobra fiel à imagem enviada: Título impactante, vídeo do advogado com áudio, CTA dourado e faixa marquee.",
      status: "Concluída",
      isPrimary: true,
    },
    {
      id: 2,
      name: "2ª Dobra (Áreas de Atuação Criminal)",
      desc: "Flagrantes, Audiências de Custódia, Habeas Corpus, Crimes Colarinho Branco e Execução Penal.",
      status: unlockedFolds.includes(2) ? "Disponível" : "Aguardando próxima instrução",
      isPrimary: false,
    },
    {
      id: 3,
      name: "3ª Dobra (Diferenciais da Defesa & Casos)",
      desc: "Equipe 24h em pronto atendimento, atuação em tribunais superiores (STJ/STF) e método estratégico.",
      status: unlockedFolds.includes(3) ? "Disponível" : "Planejada",
      isPrimary: false,
    },
    {
      id: 4,
      name: "4ª Dobra (Perguntas Frequentes & Contato)",
      desc: "Dúvidas frequentes de familiares, localização do escritório e formulário de atendimento urgente.",
      status: unlockedFolds.includes(4) ? "Disponível" : "Planejada",
      isPrimary: false,
    },
  ];

  const handleUnlockNextFold = () => {
    const nextFold = Math.min(activeFold + 1, 4);
    if (!unlockedFolds.includes(nextFold)) {
      setUnlockedFolds([...unlockedFolds, nextFold]);
    }
    setActiveFold(nextFold);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="glass-panel px-4 py-2.5 rounded-full text-xs font-semibold text-[#f3e5ab] hover:text-white flex items-center space-x-2 border border-[#d4af37]/40 shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Layers className="w-4 h-4 text-[#d4af37]" />
          <span>Painel de Construção (Dobra {activeFold} de 4)</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 glass-panel rounded-2xl p-5 border border-[#d4af37]/40 shadow-2xl text-slate-100 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center space-x-2 text-[#f3e5ab]">
              <Layers className="w-4 h-4 text-[#d4af37]" />
              <h4 className="font-bold text-sm">Construção Dobra por Dobra</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded"
            >
              Minimizar
            </button>
          </div>

          <p className="text-[11px] text-slate-300 mb-3">
            A <strong>1ª Dobra</strong> foi concluída exatamente com a estrutura, cores, tipografia, áudio do advogado e banner da imagem.
          </p>

          <div className="space-y-2 mb-4 max-h-60 overflow-y-auto pr-1">
            {folds.map((f) => {
              const isUnlocked = unlockedFolds.includes(f.id);
              const isActive = activeFold === f.id;

              return (
                <div
                  key={f.id}
                  onClick={() => isUnlocked && setActiveFold(f.id)}
                  className={`p-3 rounded-xl border text-xs transition-all ${
                    isActive
                      ? 'bg-[#c8953c]/20 border-[#d4af37] text-white'
                      : isUnlocked
                      ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300 cursor-pointer'
                      : 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold mb-1">
                    <span className="flex items-center gap-1.5">
                      {f.id === 1 ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : isUnlocked ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 shrink-0 text-slate-600" />
                      )}
                      {f.name}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      f.id === 1
                        ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                        : isUnlocked
                        ? 'bg-[#d4af37]/20 text-[#f3e5ab]'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {f.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-400">
              Pronto para a próxima dobra?
            </span>
            <button
              onClick={handleUnlockNextFold}
              className="gold-button text-[11px] py-1.5 px-3 rounded-lg flex items-center gap-1 font-bold"
            >
              <span>{activeFold < 4 ? `Avançar Dobra ${activeFold + 1}` : 'Ver Todas'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
