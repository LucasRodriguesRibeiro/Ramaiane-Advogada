import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MessageCircle, 
  Share2, 
  ShieldCheck, 
  ArrowLeft 
} from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { EmergencyContact } from '../types';
import dobra2Img from '../assets/images/dobra2.jpeg';

interface BlogArticleModalProps {
  article: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  contact
}) => {
  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado com sucesso!');
    }
  };

  const handleContactWhatsApp = () => {
    const message = `Olá, Dra. Ramaiane. Li o artigo "${article.title}" no seu blog e gostaria de orientação jurídica sobre esse tema.`;
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 bg-black/60 hover:bg-[#1A1C22] text-[#B8BBC0] hover:text-[#F7F7F5] border border-[#2D3039] rounded-full transition-colors z-20 cursor-pointer backdrop-blur-sm shadow-md"
          aria-label="Fechar artigo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Cover Image Banner */}
        <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#18191B]">
          <img
            src={article.coverUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-transparent"></div>
          
          {/* Top Breadcrumb & Category Badge inside Banner */}
          <div className="absolute top-5 left-6 sm:left-8 flex items-center space-x-2">
            <span className="text-[11px] font-mono tracking-widest text-[#E2E4E8] bg-[#0E0F12]/80 backdrop-blur-md px-3 py-1 rounded border border-[#B8BBC0]/30 uppercase font-semibold">
              {article.category || 'Direito Penal'}
            </span>
          </div>

          {/* Number & Date Overlay */}
          <div className="absolute bottom-4 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between text-xs text-[#B8BBC0]">
            <div className="flex items-center space-x-4">
              <span className="font-mono font-bold text-[#F7F7F5] text-sm">
                Artigo #{article.num}
              </span>
              <span className="flex items-center space-x-1 font-light">
                <Calendar className="w-3.5 h-3.5 text-[#B8BBC0]" />
                <span>{article.updatedAt}</span>
              </span>
              {article.readTime && (
                <span className="hidden sm:flex items-center space-x-1 font-light">
                  <Clock className="w-3.5 h-3.5 text-[#B8BBC0]" />
                  <span>{article.readTime}</span>
                </span>
              )}
            </div>

            <button
              onClick={handleShare}
              className="flex items-center space-x-1.5 text-xs text-[#B8BBC0] hover:text-white transition-colors cursor-pointer bg-[#18191B]/80 px-2.5 py-1 rounded border border-[#2D3039]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="p-6 sm:p-8 sm:pt-6 space-y-6 max-h-[calc(85vh-260px)] overflow-y-auto custom-scrollbar">
          
          {/* Title */}
          <h1 className="font-serif-title text-2xl sm:text-3xl text-[#F7F7F5] leading-tight uppercase font-normal tracking-wide">
            {article.title}
          </h1>

          {/* Author Signature Section */}
          <div className="flex items-center space-x-3.5 py-3 border-y border-[#252830]">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#B8BBC0]/50 shrink-0 bg-[#18191B]">
              <img
                src={article.author?.avatarUrl || dobra2Img}
                alt={article.author?.name || "Dra. Deyse Ramaiane"}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F7F7F5] uppercase tracking-wider">
                {article.author?.name || "Deyse Ramaiane"}
              </div>
              <div className="text-[11px] text-[#B8BBC0] font-light">
                {article.author?.title || "Advocacia Estratégica"}
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-lg bg-[#14151B] border-l-2 border-[#B8BBC0] text-xs sm:text-sm text-[#D4D7DC] leading-relaxed italic">
            "{article.summary}"
          </div>

          {/* Key Points Box (Pontos Importantes) */}
          {Array.isArray(article.keyPoints) && article.keyPoints.length > 0 && (
            <div className="p-5 rounded-xl bg-[#090A0C] border border-[#B8BBC0]/25 space-y-3 shadow-inner">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E2E4E8]">
                <ShieldCheck className="w-4 h-4 text-[#B8BBC0]" />
                <span>PONTOS IMPORTANTES</span>
              </div>
              <ul className="space-y-2 text-xs text-[#B8BBC0]">
                {article.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8BBC0] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Markdown Article Content */}
          <div className="space-y-4 text-xs sm:text-sm text-[#C8CBD0] leading-relaxed font-light whitespace-pre-line border-t border-[#252830] pt-6">
            {article.content}
          </div>

          {/* WhatsApp Contact Box */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#18191B] via-[#14151B] to-[#0B0B0C] border border-[#B8BBC0]/30 space-y-4 text-center mt-8 shadow-xl">
            <div className="space-y-1">
              <h3 className="font-serif-title text-base sm:text-lg text-[#F7F7F5] uppercase">
                Precisa de análise jurídica sobre este caso?
              </h3>
              <p className="text-xs text-[#B8BBC0] max-w-lg mx-auto font-light">
                Atendimento sigiloso, técnico e imediato para pessoas físicas, empresas e profissionais.
              </p>
            </div>

            <button
              onClick={handleContactWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-3 px-8 rounded-md text-xs font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>CONSULTAR COM A ADVOGADA NO WHATSAPP</span>
            </button>
          </div>

          {/* Back Action */}
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="text-xs text-[#74777C] hover:text-white transition-colors cursor-pointer inline-flex items-center space-x-1 uppercase tracking-wider font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar para todos os artigos</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

