import React from 'react';
import { MessageCircle } from 'lucide-react';
import dobra1Img from '../assets/images/novanovadobra1.png';
import dobra1MobileImg from '../assets/images/novanovadobra1.png';

interface HeroFoldProps {
  onOpenEmergencyModal: () => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({ onOpenEmergencyModal }) => {
  return (
    <section className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] font-sans-clean overflow-hidden min-h-[88vh] lg:min-h-[90vh] flex items-end lg:items-center">
      
      {/* Background Lawyer Photo - Sharp, clear, elegant overlay */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[68%] pointer-events-none z-0 overflow-hidden">
        {/* Mobile Photo */}
        <img
          src={dobra1MobileImg}
          alt="Deyse Ramaiane - Advocacia Criminal"
          className="block lg:hidden w-full h-full object-cover object-[82%_5%] scale-[1.30] sm:scale-[1.18] translate-x-4 -translate-y-6 sm:translate-x-2 sm:-translate-y-4 contrast-105 brightness-105 opacity-95 transition-all duration-300"
        />

        {/* Desktop Photo */}
        <img
          src={dobra1Img}
          alt="Deyse Ramaiane - Advocacia Criminal"
          className="hidden lg:block w-full h-full object-cover object-[70%_50%] scale-[1.05] contrast-105 brightness-105 opacity-100 transition-all duration-300"
        />
        
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 via-45% to-transparent lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/25 via-transparent to-transparent lg:hidden"></div>

        {/* Desktop Edge Gradient Overlay */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/70 via-28% to-transparent"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/30 via-transparent to-[#0B0B0C]/50"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 relative pb-16 pt-32 sm:py-24 lg:py-32">
        <div className="max-w-xl space-y-6 text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
          
          {/* Main Display Title - "Ramaiane" without "Dra.", reduced size for perfect visual balance */}
          <div className="space-y-2 w-full">
            <h1 className="font-serif-title text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-none text-[#F7F7F5] tracking-tight uppercase drop-shadow-lg">
              RAMAIANE
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#B8BBC0] uppercase font-medium pt-1.5 text-center lg:text-left">
              ADVOCACIA CRIMINAL
            </p>
          </div>

          {/* Action Button - FALAR COM A ADVOGADA (First Fold Only) */}
          <div className="pt-2 sm:pt-4 w-full flex justify-center lg:justify-start">
            <button
              onClick={onOpenEmergencyModal}
              className="w-full max-w-sm sm:w-auto border border-[#F7F7F5]/80 hover:border-[#F7F7F5] bg-[#0B0B0C]/85 sm:bg-[#0B0B0C]/70 hover:bg-white/10 text-[#F7F7F5] px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-3 transition-all cursor-pointer backdrop-blur-md shadow-2xl"
            >
              <MessageCircle className="w-4 h-4 text-[#F7F7F5]" />
              <span>FALAR COM A ADVOGADA</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};


