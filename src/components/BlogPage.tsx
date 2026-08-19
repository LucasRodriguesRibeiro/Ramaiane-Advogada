import React from 'react';
import { DobraHeaderNav } from './DobraHeaderNav';
import { BlogFold } from './BlogFold';
import { FooterFold } from './FooterFold';
import { EmergencyContact } from '../types';
import { BlogArticle } from '../types/blog';

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
      
      {/* Top Header Navigation matching the site navigation */}
      <DobraHeaderNav 
        onOpenEmergencyModal={onOpenEmergencyModal}
        onNavigateHome={onNavigateHome}
      />

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

