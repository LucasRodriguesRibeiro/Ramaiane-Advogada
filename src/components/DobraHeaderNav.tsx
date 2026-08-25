import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Calendar } from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface DobraHeaderNavProps {
  onOpenEmergencyModal: () => void;
  onNavigateBlog?: () => void;
  onNavigateHome?: () => void;
}

export const DobraHeaderNav: React.FC<DobraHeaderNavProps> = ({
  onOpenEmergencyModal,
  onNavigateBlog,
  onNavigateHome
}) => {
  const [activeTab, setActiveTab] = useState('INÍCIO');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'SOBRE RAMAIANE', href: '#apresentacao' },
    { label: 'NÚCLEO MÉDICO', href: '#nucleo-medico' },
    { label: 'NÚCLEO CRIMINAL', href: '#nucleo-criminal' },
    { label: 'NÚCLEO CÍVEL', href: '#nucleo-civel' },
    { label: 'NOSSA METODOLOGIA', href: '#como-funciona' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTATO', href: '#contato' },
  ];

  // ScrollSpy: Destaca a aba ativa conforme o usuário rola a página
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.location.pathname.includes('/blog') || window.location.pathname.includes('/artigo')) {
      setActiveTab('BLOG');
      return;
    }

    const sectionMapping = [
      { label: 'INÍCIO', id: 'inicio' },
      { label: 'SOBRE RAMAIANE', id: 'apresentacao' },
      { label: 'NÚCLEO MÉDICO', id: 'nucleo-medico' },
      { label: 'NÚCLEO CRIMINAL', id: 'nucleo-criminal' },
      { label: 'NÚCLEO CÍVEL', id: 'nucleo-civel' },
      { label: 'NOSSA METODOLOGIA', id: 'como-funciona' },
      { label: 'CONTATO', id: 'contato' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionMapping.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sectionMapping[i].id);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(sectionMapping[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: { label: string; href: string }, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(item.label);

    // Navegação para o Blog
    if (item.label === 'BLOG') {
      if (onNavigateBlog) {
        onNavigateBlog();
      } else {
        window.history.pushState({}, '', '/blog');
        window.dispatchEvent(new Event('popstate'));
      }
      return;
    }

    // Navegação para o Início / Topo
    if (item.label === 'INÍCIO') {
      if (onNavigateHome) {
        onNavigateHome();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Se estiver no Blog ou na página de Artigo, volta primeiro para a Home e depois rola para a dobra
    const targetId = item.href.replace('#', '');
    const isOutsideHome = window.location.pathname.includes('/blog') || window.location.pathname.includes('/artigo');

    if (isOutsideHome) {
      if (onNavigateHome) {
        onNavigateHome();
      }
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return;
    }

    // Se já estiver na Home, faz o scroll suave diretamente para o ID da dobra
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#18191B] py-2.5 sm:py-3 transition-all duration-300 font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-[64px]">
        
        {/* Brand Logo Image */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) {
              onNavigateHome();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group shrink-0 py-0.5"
        >
          <img
            src={logoImg}
            alt="Deyse Ramaiane Advocacia Criminal"
            className="h-8 sm:h-12 lg:h-15 w-auto max-w-[160px] sm:max-w-[280px] lg:max-w-[340px] object-contain brightness-110 group-hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5 text-[11px] font-medium tracking-[0.12em] text-slate-300 uppercase">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={`relative py-1 transition-colors duration-200 hover:text-white ${
                activeTab === item.label ? 'text-white font-semibold' : 'text-[#B8BBC0]'
              }`}
            >
              {item.label}
              {activeTab === item.label && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B8BBC0] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onOpenEmergencyModal}
            className="border border-[#F7F7F5]/70 hover:border-[#F7F7F5] bg-transparent hover:bg-white/10 text-[#F7F7F5] px-4 py-2 rounded-sm text-[11px] font-semibold tracking-wider uppercase flex items-center space-x-2 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F7F7F5]" />
            <span>AGENDAR ATENDIMENTO</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-[#B8BBC0] hover:text-white hover:bg-[#18191B] transition-colors focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0C] border-b border-[#18191B] px-6 pt-4 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1 text-left w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(item, e);
                }}
                className={`w-full block text-xs font-semibold tracking-widest py-2.5 border-b border-[#18191B]/50 uppercase transition-colors ${
                  activeTab === item.label ? 'text-white pl-2 border-l-2 border-[#B8BBC0]' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenEmergencyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full silver-button py-3 px-5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>AGENDAR ATENDIMENTO</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};




