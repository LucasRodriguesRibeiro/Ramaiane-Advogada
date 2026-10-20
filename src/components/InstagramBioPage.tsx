import React, { useState } from 'react';
import { Share2, MoreVertical, Check, Sparkles } from 'lucide-react';
import { EmergencyContact } from '../types';
import dobra2Img from '../assets/images/dobra2.jpeg';
import novanovadobra1Img from '../assets/images/novanovadobra1.png';
import dobra1Img from '../assets/images/dobra1.jpg';

interface InstagramBioPageProps {
  contact: EmergencyContact;
  onNavigateHome: () => void;
  onOpenEmergencyModal?: () => void;
  onOpenScheduleModal?: () => void;
  onOpenUrgentModal?: () => void;
  onOpenNucleoModal?: (nucleoId: string) => void;
}

// Crisp official WhatsApp icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.277-.1-.478-.15-.68.15-.201.3-.779.98-.954 1.18-.176.2-.351.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.679-1.636-.93-2.239-.244-.588-.493-.508-.679-.517-.176-.009-.377-.01-.578-.01-.201 0-.527.075-.804.377-.276.301-1.055 1.03-1.055 2.512 0 1.482 1.08 2.914 1.23 3.115.151.201 2.125 3.245 5.148 4.551.719.311 1.281.497 1.719.636.722.229 1.379.197 1.898.12.579-.086 1.782-.729 2.033-1.432.251-.703.251-1.306.176-1.432-.076-.126-.277-.201-.578-.352z" />
    <path d="M12 2C6.486 2 2 6.486 2 12c0 1.846.502 3.579 1.377 5.074L2 22l5.067-1.328A9.948 9.948 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.286c-1.603 0-3.13-.459-4.444-1.286l-.319-.199-3.003.788.801-2.927-.217-.346A8.256 8.256 0 0 1 3.714 12c0-4.569 3.717-8.286 8.286-8.286 4.569 0 8.286 3.717 8.286 8.286 0 4.569-3.717 8.286-8.286 8.286z" />
  </svg>
);

// Crisp official Instagram icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Crisp official TikTok icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.88-4.48V8.34a8.16 8.16 0 0 0 4.84 1.57v-3.22h-.95z"/>
  </svg>
);

export const InstagramBioPage: React.FC<InstagramBioPageProps> = ({
  contact,
  onNavigateHome,
}) => {
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    document.title = 'RAMAIANE | Advocacia Criminal Especializada';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'RAMAIANE | Advocacia Criminal Especializada',
          url,
        });
      } catch {
        // Fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navigateToArticle = (slug: string) => {
    window.history.pushState({}, '', `/artigo/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const navigateToHomeSection = (hash: string) => {
    onNavigateHome();
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const waFaleComigoUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent('Olá, Dra. Ramaiane! Gostaria de falar com você.')}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#242426] via-[#1A1A1C] to-[#121214] text-[#F7F7F5] flex flex-col items-center justify-start font-sans px-4 sm:px-6 py-5 sm:py-7 selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Centered Mobile-First Column */}
      <div className="w-full max-w-[430px] flex flex-col">
        
        {/* Top Floating Action Bar */}
        <div className="w-full flex items-center justify-between mb-2">
          {/* Top Left Icon */}
          <button
            type="button"
            onClick={onNavigateHome}
            aria-label="Início"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-white/90" />
          </button>

          {/* Top Right Share Button */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartilhar"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer relative backdrop-blur-sm"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Share2 className="w-4 h-4 text-white/90" />
            )}
            {copied && (
              <span className="absolute -bottom-7 right-0 text-[10px] bg-black/90 text-white px-2 py-0.5 rounded shadow whitespace-nowrap animate-fadeIn">
                Link copiado!
              </span>
            )}
          </button>
        </div>

        {/* Profile Header */}
        <header className="flex flex-col items-center text-center mt-1 mb-5">
          {/* Circular Photo Avatar */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#111112]">
            <img
              src={novanovadobra1Img}
              alt="Ramaiane"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase text-center mt-3.5">
            RAMAIANE
          </h1>
          <p className="text-xs sm:text-sm font-medium text-[#D1D5DB] text-center mt-1">
            Advocacia Criminal Especializada.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-6 mt-4 text-white">
            <a
              href={waFaleComigoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-emerald-400 hover:scale-110 transition-all duration-200"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ramaianeadv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-400 hover:scale-110 transition-all duration-200"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@ramaianeadv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white hover:text-cyan-400 hover:scale-110 transition-all duration-200"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
          </div>
        </header>

        {/* Primary Stack of Pill Buttons */}
        <div className="space-y-3">
          
          {/* Button 1: FALE COMIGO */}
          <a
            href={waFaleComigoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#2E2E32] hover:border-[#424248] rounded-full p-2.5 sm:p-3 transition-all duration-200 flex items-center justify-between group shadow-lg active:scale-[0.99] cursor-pointer"
          >
            {/* Left WhatsApp Circle */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2A2A2E] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-200">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </div>

            {/* Center Label */}
            <span className="font-bold text-xs sm:text-[14px] text-white tracking-wider uppercase text-center flex-1 px-2">
              FALE COMIGO
            </span>

            {/* Right Three Dots */}
            <div className="w-6 flex items-center justify-center text-[#71717A] group-hover:text-white transition-colors shrink-0 mr-1.5">
              <MoreVertical className="w-4 h-4" />
            </div>
          </a>

          {/* Button 2: QUEM SOU EU */}
          <button
            type="button"
            onClick={() => navigateToHomeSection('sobre')}
            className="w-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#2E2E32] hover:border-[#424248] rounded-full p-2.5 sm:p-3 transition-all duration-200 flex items-center justify-between group shadow-lg active:scale-[0.99] cursor-pointer"
          >
            {/* Left Photo Circle */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 shrink-0 group-hover:scale-105 transition-transform duration-200 bg-[#111112]">
              <img
                src={dobra2Img}
                alt="Quem sou eu"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Center Label */}
            <span className="font-bold text-xs sm:text-[14px] text-white tracking-wider uppercase text-center flex-1 px-2">
              QUEM SOU EU
            </span>

            {/* Right Three Dots */}
            <div className="w-6 flex items-center justify-center text-[#71717A] group-hover:text-white transition-colors shrink-0 mr-1.5">
              <MoreVertical className="w-4 h-4" />
            </div>
          </button>

          {/* Button 3: MINHA ATUAÇÃO */}
          <button
            type="button"
            onClick={() => navigateToHomeSection('nucleos-penais')}
            className="w-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#2E2E32] hover:border-[#424248] rounded-full p-2.5 sm:p-3 transition-all duration-200 flex items-center justify-between group shadow-lg active:scale-[0.99] cursor-pointer"
          >
            {/* Left Photo Circle */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 shrink-0 group-hover:scale-105 transition-transform duration-200 bg-[#111112]">
              <img
                src={dobra1Img}
                alt="Minha atuação"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Center Label */}
            <span className="font-bold text-xs sm:text-[14px] text-white tracking-wider uppercase text-center flex-1 px-2">
              MINHA ATUAÇÃO
            </span>

            {/* Right Three Dots */}
            <div className="w-6 flex items-center justify-center text-[#71717A] group-hover:text-white transition-colors shrink-0 mr-1.5">
              <MoreVertical className="w-4 h-4" />
            </div>
          </button>

        </div>

        {/* Guides Section Header */}
        <div className="mt-7 mb-3 text-center">
          <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-white uppercase">
            GUIAS: EMPRESÁRIOS E PROFISSIONAIS DA SAÚDE
          </h2>
        </div>

        {/* Guides Stack of Pill Buttons */}
        <div className="space-y-3">
          
          {/* Guide 1: Prevenção para empresários */}
          <button
            type="button"
            onClick={() => navigateToArticle('direito-penal-empresarial-crimes-tributarios-e-compliance')}
            className="w-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#2E2E32] hover:border-[#424248] rounded-full py-4 px-5 sm:px-6 transition-all duration-200 flex items-center justify-between group shadow-lg active:scale-[0.99] cursor-pointer"
          >
            <span className="text-xs sm:text-[13.5px] text-[#E4E4E7] font-normal text-center flex-1 pl-4">
              Prevenção para empresários: leia agora.
            </span>
            <div className="w-5 flex items-center justify-center text-[#71717A] group-hover:text-white transition-colors shrink-0">
              <MoreVertical className="w-4 h-4" />
            </div>
          </button>

          {/* Guide 2: Prevenção penal para profissionais da saúde */}
          <button
            type="button"
            onClick={() => navigateToArticle('direito-penal-medico-defesa-em-suposto-erro-medico')}
            className="w-full bg-[#1C1C1E] hover:bg-[#252528] border border-[#2E2E32] hover:border-[#424248] rounded-full py-4 px-5 sm:px-6 transition-all duration-200 flex items-center justify-between group shadow-lg active:scale-[0.99] cursor-pointer"
          >
            <span className="text-xs sm:text-[13.5px] text-[#E4E4E7] font-normal text-center flex-1 pl-4">
              Prevenção penal para profissionais da saúde: leia agora
            </span>
            <div className="w-5 flex items-center justify-center text-[#71717A] group-hover:text-white transition-colors shrink-0">
              <MoreVertical className="w-4 h-4" />
            </div>
          </button>

        </div>

      </div>

    </div>
  );
};
