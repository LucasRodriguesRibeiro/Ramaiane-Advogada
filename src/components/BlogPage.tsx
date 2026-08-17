import React from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { BlogFold } from './BlogFold';
import { FooterFold } from './FooterFold';
import { EmergencyContact } from '../types';
import { BlogArticle } from '../types/blog';
import logoImg from '../assets/images/logoadvogada.png';

interface BlogPageProps {
  contact: EmergencyContact;
  onNavigateHome: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onOpenEmergencyModal: () => void;
  onOpenAdminAuth: () => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (val: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (val: boolean) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (val: boolean) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  contact,
  onNavigateHome,
  onSelectArticle,
  onOpenEmergencyModal,
  onOpenAdminAuth,
  isAdminAuthenticated,
  setIsAdminAuthenticated,
  isAuthModalOpen,
  setIsAuthModalOpen,
  isAdminModalOpen,
  setIsAdminModalOpen
}) => {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] font-sans-clean flex flex-col selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#18191B] py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#B8BBC0] hover:text-[#CCA668] transition-colors p-2 rounded hover:bg-[#14151B] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Site Principal</span>
            </button>
            <div className="h-4 w-[1px] bg-[#252830] hidden sm:block"></div>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} className="hidden sm:block">
              <img src={logoImg} alt="Deyse Ramaiane" className="h-8 w-auto object-contain brightness-110" />
            </a>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="border border-[#CCA668]/70 hover:border-[#CCA668] bg-transparent hover:bg-[#CCA668]/10 text-[#CCA668] px-4 py-2 rounded-sm text-[11px] font-semibold tracking-wider uppercase flex items-center space-x-2 transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Agendar Atendimento</span>
          </button>
        </div>
      </header>

      {/* Main Blog Content Section */}
      <main className="flex-1 w-full">
        <BlogFold
          contact={contact}
          onOpenEmergencyModal={onOpenEmergencyModal}
          isAdminAuthenticated={isAdminAuthenticated}
          setIsAdminAuthenticated={setIsAdminAuthenticated}
          isAuthModalOpen={isAuthModalOpen}
          setIsAuthModalOpen={setIsAuthModalOpen}
          isAdminModalOpen={isAdminModalOpen}
          setIsAdminModalOpen={setIsAdminModalOpen}
          onSelectArticle={onSelectArticle}
        />
      </main>

      {/* Footer with Discreet Lock */}
      <FooterFold
        onOpenEmergencyModal={onOpenEmergencyModal}
        onOpenAdminAuth={onOpenAdminAuth}
        onNavigateHome={onNavigateHome}
      />

    </div>
  );
};
