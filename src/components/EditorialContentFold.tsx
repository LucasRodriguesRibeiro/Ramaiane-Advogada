import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import handcuffsImg from '../assets/images/dobra4.jpeg';
import heroLawyerImg from '../assets/images/dobra2.jpeg';
import officeImg from '../assets/images/dobra1.jpg';

interface EditorialContentFoldProps {
  onOpenEmergencyModal: () => void;
}

export const EditorialContentFold: React.FC<EditorialContentFoldProps> = ({ onOpenEmergencyModal }) => {
  const articles = [
    {
      category: "DIREITO PENAL & TECNOLOGIA",
      date: "ARTIGO TÉCNICO",
      title: "Criptomoedas e Direito Penal: Os Desafios das Investigações em Crimes Digitais",
      excerpt: "Uma análise profunda sobre a rastreabilidade patrimonial, a juridicidade das apreensões de ativos virtuais e as garantias fundamentais do investigado.",
      image: handcuffsImg
    },
    {
      category: "PROCESSO PENAL",
      date: "ANÁLISE JURISPRUDENCIAL",
      title: "Prisão Preventiva e os Limites Cautelares na Jurisprudência Superior",
      excerpt: "Estudo crítico sobre a exigência de fundamentação concreta para a decretação de prisões cautelares e os critérios de revogação no STJ e STF.",
      image: heroLawyerImg
    },
    {
      category: "PENAL EMPRESARIAL",
      date: "PARECER EDITORIAL",
      title: "Direito Penal Empresarial: A Relevância da Gestão Preventiva de Riscos",
      excerpt: "Como a atuação consultiva prévia e a estruturação defensiva antecipada protegem executivos e organizações contra riscos de responsabilização penal.",
      image: officeImg
    }
  ];

  return (
    <section id="conteudo-e-autoridade" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#74777C]/20 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>CONTEÚDO & AUTORIDADE</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight">
              ARTIGOS & ANÁLISES JURÍDICAS
            </h2>
            <p className="text-xs sm:text-sm text-[#B8BBC0] font-light">
              Produção técnica e análise crítica sobre temas relevantes do Direito Penal.
            </p>
          </div>

          <div className="shrink-0">
            <span className="text-xs tracking-widest text-[#B8BBC0] uppercase font-semibold border border-[#74777C]/30 px-4 py-2 rounded-sm inline-flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>PUBLICAÇÕES EDITORIAIS</span>
            </span>
          </div>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="bg-[#18191B] border border-[#74777C]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md"
            >
              {/* Article Cover Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B0B0C]">
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-transparent to-transparent"></div>
              </div>

              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] tracking-widest text-[#B8BBC0] uppercase font-mono">
                    <span>{art.category}</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="font-serif-title text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#74777C]/15 flex items-center justify-between">
                  <button
                    onClick={onOpenEmergencyModal}
                    className="text-[11px] font-medium tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                  >
                    <span>LER ANÁLISE COMPLETA</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
