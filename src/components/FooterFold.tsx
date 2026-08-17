import React from 'react';
import logoImg from '../assets/images/logoadvogada.png';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUp,
  Lock,
} from 'lucide-react';

interface FooterFoldProps {
  onOpenEmergencyModal: () => void;
  onOpenAdminAuth?: () => void;
}

export const FooterFold: React.FC<FooterFoldProps> = ({ 
  onOpenEmergencyModal,
  onOpenAdminAuth
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0B0B0C] text-[#B8BBC0] border-t border-[#18191B] font-sans-clean">
      {/* Upper Call Banner */}
      <div className="bg-[#18191B] border-b border-[#74777C]/20 py-8 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8BBC0]">
              ATENDIMENTO EM ÂMBITO NACIONAL
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl text-[#F7F7F5] uppercase">
              DEFESA CRIMINAL EXIGE RESPOSTA ESTRATÉGICA DESDE O PRIMEIRO MOMENTO.
            </h3>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="silver-button px-6 py-3 rounded-md text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>AGENDAR ATENDIMENTO</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Column 1: Brand & Lawyer Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center justify-center md:justify-start group">
            <img
              src={logoImg}
              alt="Deyse Ramaiane Advocacia Criminal Logo"
              className="h-14 sm:h-20 w-auto max-w-[260px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
            />
          </a>
          <div className="text-sm text-[#D1D4D9] space-y-1">
            <p className="font-semibold text-[#F7F7F5] uppercase tracking-wider">DEYSE RAMAIANE</p>
            <p className="text-xs text-[#9DA0A6] uppercase tracking-widest">ADVOCACIA CRIMINAL</p>
            <p className="text-xs text-[#9DA0A6] uppercase tracking-widest">ATENDIMENTO EM ÂMBITO NACIONAL</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-base font-semibold text-[#F7F7F5] tracking-wider uppercase border-b border-[#74777C]/30 pb-2 w-full md:w-auto">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-sm text-[#D1D4D9] flex flex-col items-center md:items-start">
            <li>
              <a href="#" className="hover:text-[#F7F7F5] transition-colors">Início</a>
            </li>
            <li>
              <a href="#apresentacao" className="hover:text-[#F7F7F5] transition-colors">Sobre Ramaiane</a>
            </li>
            <li>
              <a href="#nucleo-criminal" className="hover:text-[#F7F7F5] transition-colors">Núcleo Criminal</a>
            </li>
            <li>
              <a href="#nucleo-civel" className="hover:text-[#F7F7F5] transition-colors">Núcleo Cível</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#F7F7F5] transition-colors">Blog</a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-[#F7F7F5] transition-colors">Como Funciona</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-[#F7F7F5] transition-colors">Contato</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-base font-semibold text-[#F7F7F5] tracking-wider uppercase border-b border-[#74777C]/30 pb-2 w-full md:w-auto">
            Contato & Atendimento
          </h4>
          <div className="space-y-3.5 text-sm sm:text-base text-[#D1D4D9] flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#9DA0A6] shrink-0" />
              <a href="tel:5592993480017" className="font-semibold text-[#F7F7F5] hover:text-[#FFFFFF] transition-colors">
                (92) 99348-0017
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#9DA0A6] shrink-0" />
              <a href="mailto:deyeramaianeadv@gmail.com" className="font-medium text-[#F7F7F5] hover:text-[#FFFFFF] transition-colors break-all sm:break-normal">
                deyeramaianeadv@gmail.com
              </a>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#9DA0A6] shrink-0 mt-0.5" />
              <span className="text-[#D1D4D9] text-xs sm:text-sm leading-snug">Atendimento em Âmbito Nacional (Presencial e Digital)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="bg-[#050506] border-t border-[#18191B] py-6 px-6 sm:px-10 lg:px-12 text-xs text-[#9DA0A6] text-center leading-relaxed font-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#9DA0A6] gap-2">
            <div className="flex items-center space-x-2">
              <span>
                © {new Date().getFullYear()} Deyse Ramaiane Advocacia Criminal. Todos os direitos reservados.
              </span>
              {onOpenAdminAuth && (
                <button
                  onClick={onOpenAdminAuth}
                  className="opacity-25 hover:opacity-100 hover:text-[#CCA668] transition-all p-1 rounded cursor-pointer"
                  title="Acesso da Advogada"
                  aria-label="Acesso Restrito"
                >
                  <Lock className="w-3 h-3" />
                </button>
              )}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#D1D4D9] hover:text-[#F7F7F5] transition-colors cursor-pointer uppercase text-xs tracking-wider"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
