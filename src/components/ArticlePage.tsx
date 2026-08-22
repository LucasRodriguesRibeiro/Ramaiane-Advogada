import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Phone,
  Lock,
  ArrowUp,
  Bookmark
} from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { EmergencyContact } from '../types';
import logoImg from '../assets/images/logoadvogada.png';
import dobra2Img from '../assets/images/dobra2.jpeg';
import { FooterFold } from './FooterFold';

interface ArticlePageProps {
  article: BlogArticle;
  allArticles: BlogArticle[];
  onNavigateHome: () => void;
  onNavigateBlog?: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onOpenEmergencyModal: () => void;
  onOpenAdminAuth?: () => void;
  contact: EmergencyContact;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  allArticles,
  onNavigateHome,
  onNavigateBlog,
  onSelectArticle,
  onOpenEmergencyModal,
  onOpenAdminAuth,
  contact
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${article.title} | Dra. Deyse Ramaiane Advocacia Criminal`;
  }, [article]);

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleContactWhatsApp = () => {
    const message = `Olá, Dra. Ramaiane. Li o artigo "${article.title}" no seu blog e gostaria de agendar uma consulta jurídica estratégica.`;
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Artigos relacionados (outros artigos da lista)
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] font-sans-clean flex flex-col selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#18191B] py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigateBlog || onNavigateHome}
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B8BBC0] hover:text-white transition-colors p-2 rounded hover:bg-[#14151B] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Blog</span>
            </button>
            <div className="h-4 w-[1px] bg-[#252830] hidden sm:block"></div>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="hidden sm:block">
              <img src={logoImg} alt="Deyse Ramaiane" className="h-8 w-auto object-contain brightness-110" />
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 text-xs text-[#B8BBC0] hover:text-white bg-[#16171C] border border-[#2D3039] px-3 py-2 rounded transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span className="hidden sm:inline">{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>

            <button
              onClick={handleContactWhatsApp}
              className="py-2 px-4 rounded bg-[#E5E7EB] hover:bg-white text-[#0B0B0C] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-md transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
        
        {/* Article Breadcrumb & Metadata */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button 
              onClick={onNavigateHome}
              className="text-[#8F9299] hover:text-white transition-colors"
            >
              Início
            </button>
            <span className="text-[#555861]">&gt;</span>
            <button 
              onClick={onNavigateBlog || onNavigateHome}
              className="text-[#8F9299] hover:text-white transition-colors"
            >
              Blog
            </button>
            <span className="text-[#555861]">&gt;</span>
            <span className="text-[#E2E4E8] font-semibold uppercase tracking-wider">
              {article.category || 'Direito Penal'}
            </span>
          </div>

          {/* Big Editorial Title */}
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F7F5] tracking-tight uppercase leading-tight">
            {article.title}
          </h1>

          {/* Author & Meta row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#1E2028]">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#B8BBC0]/50 shrink-0 bg-[#18191B]">
                <img
                  src={article.author?.avatarUrl && article.author.avatarUrl.startsWith('http') ? article.author.avatarUrl : dobra2Img}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = dobra2Img;
                  }}
                  alt={article.author?.name || "Dra. Deyse Ramaiane"}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F7F7F5]">
                  {article.author?.name || "Dra. Deyse Ramaiane"}
                </div>
                <div className="text-xs text-[#B8BBC0]">
                  {article.author?.title || "Advocacia Estratégica"}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-[#8F9299]">
              <span className="flex items-center space-x-1.5 font-light">
                <Calendar className="w-3.5 h-3.5 text-[#B8BBC0]" />
                <span>Atualizado em {article.updatedAt}</span>
              </span>
              <span className="flex items-center space-x-1.5 font-light">
                <Clock className="w-3.5 h-3.5 text-[#B8BBC0]" />
                <span>{article.readTime || '4 min de leitura'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Large Cover Image Banner */}
        <div className="relative w-full h-64 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden bg-[#14151B] border border-[#252830] shadow-2xl">
          <img
            src={article.coverUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Executive Summary Box */}
        <div className="p-6 sm:p-7 rounded-xl bg-[#14151B] border-l-4 border-[#B8BBC0] text-sm sm:text-base text-[#D4D7DC] leading-relaxed italic shadow-md">
          "{article.summary}"
        </div>

        {/* Key Points (Pontos Importantes) */}
        {Array.isArray(article.keyPoints) && article.keyPoints.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121318] border border-[#B8BBC0]/30 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E2E4E8]">
              <ShieldCheck className="w-5 h-5 text-[#B8BBC0]" />
              <span>PONTOS IMPORTANTES & ORIENTAÇÕES PRINCIPAIS</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {article.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-[#C8CBD0] leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#B8BBC0] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Article Content */}
        <article className="prose prose-invert max-w-none text-[#D1D4D9] text-base sm:text-lg leading-relaxed font-light space-y-6 pt-4">
          <div className="whitespace-pre-line space-y-4 text-justify sm:text-left">
            {article.content}
          </div>
        </article>

        {/* Lawyer Bio & Specialty Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14151B] border border-[#252830] flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-lg">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#B8BBC0] shrink-0 shadow-md">
            <img
              src={article.author?.avatarUrl && article.author.avatarUrl.startsWith('http') ? article.author.avatarUrl : dobra2Img}
              onError={(e) => {
                (e.target as HTMLImageElement).src = dobra2Img;
              }}
              alt="Dra. Deyse Ramaiane"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-2 flex-1">
            <div className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#E2E4E8] bg-[#1B1D24] px-2.5 py-0.5 rounded border border-[#B8BBC0]/30">
              SOBRE A AUTORA
            </div>
            <h3 className="font-serif-title text-xl text-[#F7F7F5]">
              Dra. Deyse Ramaiane
            </h3>
            <p className="text-xs sm:text-sm text-[#B8BBC0] leading-relaxed font-light">
              Advocacia criminal estratégica e de alta complexidade. Atuação especializada em investigações, audiências de custódia, defesa do paciente, direito penal médico e operações policiais em âmbito nacional.
            </p>
          </div>
        </div>

        {/* WhatsApp Strategic Legal Consultation CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#18191B] via-[#14151B] to-[#0A0A0D] border border-[#B8BBC0]/30 text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif-title text-2xl sm:text-3xl text-[#F7F7F5] uppercase">
              Precisa de orientação jurídica estratégica sobre este tema?
            </h2>
            <p className="text-xs sm:text-sm text-[#B8BBC0] font-light leading-relaxed">
              Atendimento ágil, sigiloso e técnico para pessoas físicas, empresas, profissionais da saúde e famílias.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={handleContactWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 py-4 px-8 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all shadow-xl cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>CONSULTAR DIRETAMENTE NO WHATSAPP</span>
            </button>
          </div>
        </div>

        {/* Next / Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-[#18191B]">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-xl text-[#F7F7F5] uppercase tracking-wide">
                Outros Artigos Estratégicos
              </h3>
              <button
                onClick={onNavigateBlog || onNavigateHome}
                className="text-xs text-[#B8BBC0] hover:text-white hover:underline uppercase tracking-wider font-semibold cursor-pointer"
              >
                Ver Todos os Artigos →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="bg-[#14151B] border border-[#2D3039] hover:border-[#B8BBC0]/50 rounded-xl p-4 flex flex-col justify-between transition-all cursor-pointer group shadow-md"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-28 rounded-lg overflow-hidden bg-[#07080A]">
                      <img src={rel.coverUrl} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-[10px] text-[#B8BBC0] font-mono">
                      Artigo #{rel.num}
                    </div>
                    <h4 className="font-serif-title text-sm text-[#F7F7F5] group-hover:text-white transition-colors leading-snug line-clamp-2 uppercase">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-3 text-[11px] text-[#B8BBC0] group-hover:text-white font-semibold flex items-center space-x-1 uppercase transition-colors">
                    <span>Ler Artigo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer with Discreet Lock */}
      <FooterFold 
        onOpenEmergencyModal={onOpenEmergencyModal}
        onOpenAdminAuth={onOpenAdminAuth}
      />

    </div>
  );
};
