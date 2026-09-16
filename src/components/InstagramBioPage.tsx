import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Stethoscope, 
  MessageCircle, 
  Globe, 
  ArrowRight, 
  Share2, 
  Check, 
  PhoneCall, 
  Sparkles,
  ExternalLink,
  Calendar
} from 'lucide-react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import assinaturaImg from '../assets/images/assinatura_transparente.png';
import { EmergencyContact } from '../types';

interface InstagramBioPageProps {
  contact: EmergencyContact;
  onNavigateHome: () => void;
  onOpenEmergencyModal: () => void;
  onOpenScheduleModal: () => void;
  onOpenUrgentModal: () => void;
  onOpenNucleoModal: (nucleoId: string) => void;
}

export const InstagramBioPage: React.FC<InstagramBioPageProps> = ({
  contact,
  onNavigateHome,
  onOpenEmergencyModal,
  onOpenScheduleModal,
  onOpenUrgentModal,
  onOpenNucleoModal,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Deyse Ramaiane | Advocacia Estratégica',
      text: 'Atuação jurídica especializada em Direito Penal, Empresarial e Médico.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const nucleosCards = [
    {
      id: 'penal-tradicional',
      badge: 'NÚCLEO 01',
      title: 'Direito Penal & Defesa Criminal',
      subtitle: 'Defesa de pessoas físicas em investigações, inquéritos e processos criminais.',
      icon: Shield,
      whatsappMsg: 'Olá, Dra. Deyse. Vim do Instagram e gostaria de atendimento sobre o Núcleo 01 - Direito Penal e Defesa Criminal.',
    },
    {
      id: 'penal-empresarial',
      badge: 'NÚCLEO 02',
      title: 'Direito Penal Empresarial & Econômico',
      subtitle: 'Proteção técnica para empresas, sócios, executivos e gestão de riscos penais.',
      icon: Building2,
      whatsappMsg: 'Olá, Dra. Deyse. Vim do Instagram e gostaria de atendimento sobre o Núcleo 02 - Direito Penal Empresarial e Econômico.',
    },
    {
      id: 'penal-medico',
      badge: 'NÚCLEO 03',
      title: 'Direito Penal Médico & da Saúde',
      subtitle: 'Defesa especializada para médicos, cirurgiões, clínicas e hospitais.',
      icon: Stethoscope,
      whatsappMsg: 'Olá, Dra. Deyse. Vim do Instagram e gostaria de atendimento sobre o Núcleo 03 - Direito Penal Médico e da Saúde.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] flex flex-col items-center justify-between font-sans-clean relative overflow-x-hidden selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Background Decorative Glow Effect (Brand Silver Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-gradient-to-b from-[#F7F7F5]/10 via-[#74777C]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header Navigation Bar */}
      <header className="w-full max-w-xl px-4 py-4 flex items-center justify-between relative z-10">
        <button
          onClick={onNavigateHome}
          className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#B8BBC0] hover:text-[#F7F7F5] transition-colors py-1.5 px-3.5 rounded-full bg-[#121316] border border-[#74777C]/30"
        >
          <Globe className="w-3.5 h-3.5 text-[#B8BBC0]" />
          <span>ramaianeadvogada.com.br</span>
        </button>

        <button
          onClick={handleShare}
          aria-label="Compartilhar página"
          className="p-2 rounded-full bg-[#121316] border border-[#74777C]/30 text-[#B8BBC0] hover:text-[#F7F7F5] transition-colors relative cursor-pointer"
        >
          {copiedLink ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
        </button>
      </header>

      {/* Toast Notification when copied */}
      {copiedLink && (
        <div className="fixed top-16 z-50 bg-[#1A1C22] border border-[#B8BBC0]/40 text-[#F7F7F5] text-xs font-semibold px-4 py-2 rounded-full shadow-2xl animate-fadeIn flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-[#B8BBC0]" />
          <span>Link copiado para a área de transferência!</span>
        </div>
      )}

      {/* Main Container (Mobile First Container) */}
      <main className="w-full max-w-xl px-4 sm:px-6 pt-2 pb-12 flex flex-col items-center space-y-6 relative z-10">
        
        {/* Profile Avatar Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Avatar with Ring (Brand Silver Gradient) */}
          <div className="relative group">
            {/* Outer Glowing Metallic Silver Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FFFFFF] via-[#E2E4E8] to-[#B8BBC0] opacity-85 group-hover:opacity-100 blur-[2px] transition duration-500"></div>
            
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#121316] shadow-2xl bg-[#121316]">
              <img
                src={dobra2Img}
                alt="Dra. Deyse Ramaiane"
                className="w-full h-full object-cover object-top contrast-105 brightness-105"
              />
            </div>

            {/* Badge Shield Icon on Avatar */}
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#121316] border border-[#B8BBC0]/60 flex items-center justify-center shadow-lg">
              <Shield className="w-4 h-4 text-[#F7F7F5] fill-[#F7F7F5]/20" />
            </div>
          </div>

          {/* Name & Title Header */}
          <div className="space-y-2">
            <h1 className="font-serif-title text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#F7F7F5]">
              Deyse Ramaiane
            </h1>

            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#18191B] border border-[#B8BBC0]/40 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#B8BBC0]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#F7F7F5] uppercase">
                ADVOCACIA ESTRATÉGICA
              </span>
            </div>
          </div>

          {/* Short Bio Description */}
          <p className="text-xs sm:text-sm text-[#B8BBC0] font-light leading-relaxed max-w-md px-2 tracking-wide">
            Atuação técnica e estratégica na defesa da liberdade, reputação, patrimônio e direito penal corporativo e da saúde.
          </p>

        </div>

        {/* Section Divider / Title */}
        <div className="w-full pt-2 pb-1 flex items-center space-x-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#74777C]/40 to-transparent"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B8BBC0]">
            NÚCLEOS DE ATUAÇÃO
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#74777C]/40 to-transparent"></div>
        </div>

        {/* NÚCLEOS CARDS (Brand Palette: Dark Onyx + Silver Details + Green WhatsApp) */}
        <div className="w-full space-y-3.5">
          {nucleosCards.map((nucleo) => {
            const IconComponent = nucleo.icon;
            const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(nucleo.whatsappMsg)}`;

            return (
              <div
                key={nucleo.id}
                className="w-full bg-[#121316] border border-[#74777C]/35 hover:border-[#B8BBC0]/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl transition-all duration-300 relative group"
              >
                {/* Left Side: Icon + Title + Subtitle */}
                <div className="flex items-start space-x-3.5 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1C22] border border-[#74777C]/40 flex items-center justify-center text-[#F7F7F5] shrink-0 mt-0.5 shadow-sm group-hover:border-[#B8BBC0]/50 transition-colors">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <div className="space-y-1 min-w-0 text-left">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#B8BBC0] uppercase block">
                      {nucleo.badge}
                    </span>
                    <h2 className="text-base font-bold text-[#F7F7F5] leading-snug group-hover:text-white transition-colors">
                      {nucleo.title}
                    </h2>
                    <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                      {nucleo.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Side: Direto pro WhatsApp Green Button */}
                <div className="shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#74777C]/15 flex items-center justify-end">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-emerald-900/30 flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0B0B0C] fill-[#0B0B0C]" />
                    <span>Fale comigo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* PLANTÃO 24H & AGENDAMENTO CARDS */}
        <div className="w-full pt-2 space-y-3.5">
          
          {/* Plantão 24h Card */}
          <div className="w-full bg-[#121316] border border-[#74777C]/35 hover:border-[#B8BBC0]/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl relative overflow-hidden group">
            <div className="flex items-center space-x-3.5 text-left min-w-0 flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#1A1C22] border border-[#74777C]/40 flex items-center justify-center text-[#F7F7F5] shrink-0">
                <PhoneCall className="w-5 h-5 text-[#F7F7F5] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-bold text-red-400 tracking-wider uppercase">PLANTÃO DE URGÊNCIA</span>
                </div>
                <h3 className="text-sm font-bold text-[#F7F7F5]">Plantão 24h - Prisões e Operações</h3>
                <p className="text-xs text-[#B8BBC0]">Prisão em flagrante e ocorrências policiais imediatas.</p>
              </div>
            </div>

            <button
              onClick={onOpenUrgentModal}
              className="w-full sm:w-auto py-2.5 px-5 silver-button text-[#0B0B0C] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <PhoneCall className="w-4 h-4 fill-[#0B0B0C]" />
              <span>Acionar 24h</span>
            </button>
          </div>

          {/* Agendamento de Consulta Card */}
          <div className="w-full bg-[#121316] border border-[#74777C]/35 hover:border-[#B8BBC0]/60 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md transition-all">
            <div className="flex items-center space-x-3.5 text-left min-w-0 flex-1">
              <div className="w-9 h-9 rounded-xl bg-[#1A1C22] border border-[#74777C]/30 flex items-center justify-center text-[#B8BBC0] shrink-0">
                <Calendar className="w-4 h-4 text-[#F7F7F5]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#F7F7F5]">Agendamento de Consulta</h3>
                <p className="text-xs text-[#B8BBC0]">Presencial ou online com análise individualizada.</p>
              </div>
            </div>

            <button
              onClick={onOpenScheduleModal}
              className="py-2 px-4 bg-[#18191B] hover:bg-[#202228] border border-[#74777C]/40 text-[#F7F7F5] font-semibold text-xs rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer shrink-0"
            >
              <span>Agendar</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B8BBC0]" />
            </button>
          </div>

          {/* PROMINENT BUTTON TO GO TO THE WEBSITE (NO FINAL - EXCLUSIVO NA PALETA DE CORES DELA) */}
          <div className="pt-4 w-full">
            <button
              onClick={onNavigateHome}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#18191B] via-[#202228] to-[#18191B] hover:from-[#202228] hover:to-[#282B33] border-2 border-[#B8BBC0]/60 hover:border-[#F7F7F5] text-[#F7F7F5] font-bold text-sm uppercase tracking-widest rounded-2xl shadow-2xl flex items-center justify-center space-x-3 transition-all duration-300 active:scale-98 cursor-pointer group"
            >
              <Globe className="w-5 h-5 text-[#F7F7F5] group-hover:rotate-12 transition-transform" />
              <span>Acessar Website Oficial</span>
              <ExternalLink className="w-4 h-4 text-[#B8BBC0] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Footer Signature & Branding Block */}
        <footer className="w-full pt-8 pb-4 flex flex-col items-center text-center space-y-4 border-t border-[#74777C]/20">
          
          <img
            src={assinaturaImg}
            alt="Assinatura Deyse Ramaiane"
            className="h-16 w-auto object-contain filter invert brightness-200 contrast-120 opacity-90"
          />

          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#F7F7F5] tracking-wider uppercase">
              Deyse Ramaiane • Advocacia Estratégica
            </p>
            <p className="text-[11px] text-[#74777C]">
              Manaus - AM | Atuação em Todo o Brasil
            </p>
          </div>

          <p className="text-[10px] text-[#74777C]/80 font-mono pt-2">
            © {new Date().getFullYear()} Deyse Ramaiane. Todos os direitos reservados.
          </p>
        </footer>

      </main>

    </div>
  );
};
