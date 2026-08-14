import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { DobraHeaderNav } from './components/DobraHeaderNav';
import { HeroFold } from './components/HeroFold';
import { SecondFold } from './components/SecondFold';
import { FifthFold } from './components/FifthFold';
import { FourthFold } from './components/FourthFold';
import { CivilCoreFold } from './components/CivilCoreFold';
import { HowItWorksFold } from './components/HowItWorksFold';
import { FinalCallFold } from './components/FinalCallFold';
import { TestimonialsFold } from './components/TestimonialsFold';
import { FooterFold } from './components/FooterFold';
import { EmergencyModal } from './components/EmergencyModal';
import { NucleoModal } from './components/NucleoModal';
import { DrugsLawModal } from './components/DrugsLawModal';
import { ScheduleAppointmentModal } from './components/ScheduleAppointmentModal';
import { Urgent24hModal } from './components/Urgent24hModal';
import { EmergencyContact } from './types';

export default function App() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isDrugsModalOpen, setIsDrugsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);
  const [selectedNucleoId, setSelectedNucleoId] = useState<string | null>(null);
  const [showWhatsAppBalloon, setShowWhatsAppBalloon] = useState(false);

  const emergencyContact: EmergencyContact = {
    lawyerName: "Ramaiane Advogada Criminal",
    oabNumber: "Advocacia Criminal Estratégica",
    phone: "(92) 99348-0017",
    whatsappNumber: "5592993480017",
    whatsappMessage: "Olá, Dra. Ramaiane. Gostaria de obter informações sobre atendimento jurídico na área criminal e agendar uma consulta.",
  };

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o balão após rolar a primeira dobra (aproximadamente 400px ou altura do hero)
      if (window.scrollY > 380) {
        setShowWhatsAppBalloon(true);
      } else {
        setShowWhatsAppBalloon(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = () => setIsEmergencyModalOpen(true);
  const handleOpenNucleoModal = (nucleoId: string) => setSelectedNucleoId(nucleoId);
  const handleCloseNucleoModal = () => setSelectedNucleoId(null);
  const handleOpenDrugsModal = () => setIsDrugsModalOpen(true);
  const handleCloseDrugsModal = () => setIsDrugsModalOpen(false);
  const handleOpenScheduleModal = () => setIsScheduleModalOpen(true);
  const handleCloseScheduleModal = () => setIsScheduleModalOpen(false);
  const handleOpenUrgentModal = () => setIsUrgentModalOpen(true);
  const handleCloseUrgentModal = () => setIsUrgentModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] flex flex-col selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Header Navigation Bar */}
      <DobraHeaderNav onOpenEmergencyModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Capa Principal / Hero */}
        <HeroFold onOpenEmergencyModal={handleOpenModal} />

        {/* 1. Apresentação Profissional */}
        <SecondFold />

        {/* 2. Núcleo Criminal (Setores / Especialidades) */}
        <FifthFold 
          onOpenEmergencyModal={handleOpenModal} 
          onSelectNucleo={handleOpenNucleoModal} 
        />

        {/* 3. Destaque - Tráfico de Drogas */}
        <FourthFold 
          onOpenEmergencyModal={handleOpenModal} 
          onOpenDrugsModal={handleOpenDrugsModal}
        />

        {/* 4. Núcleo Cível */}
        <CivilCoreFold onOpenEmergencyModal={handleOpenModal} />

        {/* 5. Como Funciona o Atendimento */}
        <HowItWorksFold onOpenEmergencyModal={handleOpenModal} />

        {/* 8. Chamada Final */}
        <FinalCallFold 
          onOpenEmergencyModal={handleOpenModal}
          onOpenScheduleModal={handleOpenScheduleModal}
          onOpenUrgentModal={handleOpenUrgentModal}
        />

        {/* 9. Depoimentos */}
        <TestimonialsFold onOpenEmergencyModal={handleOpenModal} />
      </main>

      {/* Rodapé */}
      <FooterFold onOpenEmergencyModal={handleOpenModal} />

      {/* Floating WhatsApp Balloon (Mobile & Desktop - Aparece após a 1ª dobra) */}
      <a
        href={`https://wa.me/${emergencyContact.whatsappNumber}?text=${encodeURIComponent(emergencyContact.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center p-3.5 sm:p-4 bg-[#0B0B0C] hover:bg-[#18191B] text-[#F7F7F5] border border-[#B8BBC0]/40 hover:border-[#F7F7F5] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group ${
          showWhatsAppBalloon 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7F7F5]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs tracking-wider pr-0 group-hover:pr-3 group-hover:pl-2 uppercase text-[#F7F7F5]">
          WhatsApp
        </span>
      </a>

      {/* Emergency / Contact Modal (Generic / Urgent) */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        contact={emergencyContact}
      />

      {/* Specialized Nucleus Modal (Criminal Core) */}
      <NucleoModal
        nucleoId={selectedNucleoId}
        isOpen={selectedNucleoId !== null}
        onClose={handleCloseNucleoModal}
        contact={emergencyContact}
      />

      {/* Specialized Drugs Law Modal (4ª Dobra) */}
      <DrugsLawModal
        isOpen={isDrugsModalOpen}
        onClose={handleCloseDrugsModal}
        contact={emergencyContact}
      />

      {/* Schedule Appointment 3-Step Modal (Final Call Fold) */}
      <ScheduleAppointmentModal
        isOpen={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
        contact={emergencyContact}
      />

      {/* 24h Urgent Modal (Final Call Fold) */}
      <Urgent24hModal
        isOpen={isUrgentModalOpen}
        onClose={handleCloseUrgentModal}
        contact={emergencyContact}
      />

    </div>
  );
}




