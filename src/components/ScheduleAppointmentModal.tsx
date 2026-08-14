import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  ShieldCheck, 
  User, 
  Lock, 
  MessageCircle, 
  ChevronDown,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { EmergencyContact } from '../types';

interface ScheduleAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const ScheduleAppointmentModal: React.FC<ScheduleAppointmentModalProps> = ({
  isOpen,
  onClose,
  contact
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceArea, setPracticeArea] = useState('');
  const [caseDescription, setCaseDescription] = useState('');
  
  // Step 2 state
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState('Tarde (14h às 18h)');
  const [meetingFormat, setMeetingFormat] = useState('Online (Vídeo / WhatsApp)');

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFullName('');
      setEmail('');
      setPhone('');
      setPracticeArea('');
      setCaseDescription('');
      setPreferredDate('');
      setPreferredPeriod('Tarde (14h às 18h)');
      setMeetingFormat('Online (Vídeo / WhatsApp)');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleFinalSubmit = () => {
    const lines: string[] = [
      `*SOLICITAÇÃO DE AGENDAMENTO DE ATENDIMENTO*`,
      ``,
      `*Nome Completo:* ${fullName.trim() || 'Não informado'}`,
    ];

    if (email.trim()) lines.push(`*E-mail:* ${email.trim()}`);
    if (phone.trim()) lines.push(`*Telefone/WhatsApp:* ${phone.trim()}`);
    if (practiceArea.trim()) lines.push(`*Área de Interesse:* ${practiceArea.trim()}`);
    if (preferredDate.trim()) lines.push(`*Data Preferencial:* ${preferredDate.trim()}`);
    if (preferredPeriod.trim()) lines.push(`*Turno Preferencial:* ${preferredPeriod.trim()}`);
    if (meetingFormat.trim()) lines.push(`*Formato:* ${meetingFormat.trim()}`);

    if (caseDescription.trim()) {
      lines.push(``);
      lines.push(`*Descrição do Caso:*`);
      lines.push(caseDescription.trim());
    }

    const message = lines.join('\n');
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg my-6 bg-[#0E0F12] border border-[#CCA668]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-[#B8BBC0] hover:text-[#F7F7F5] hover:bg-[#1A1C22] rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-7 pb-4 text-center border-b border-[#252830]/80">
          <h2 className="font-serif-title text-xl sm:text-2xl font-normal text-[#F7F7F5] uppercase tracking-wide">
            AGENDAR ATENDIMENTO
          </h2>
          <p className="text-xs text-[#B8BBC0] font-light pt-1">
            Preencha os dados abaixo para agendarmos o melhor horário para você.
          </p>

          {/* Stepper Indicator */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 pt-4 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
            {/* Step 1 */}
            <div className={`flex items-center space-x-1.5 ${step >= 1 ? 'text-[#CCA668]' : 'text-[#5A5D66]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 1 ? 'bg-[#CCA668] text-[#0B0B0C]' : 'bg-[#1C1E24] text-[#5A5D66]'
              }`}>
                1
              </span>
              <span>DADOS</span>
            </div>

            <span className="w-4 sm:w-6 h-[1px] bg-[#2D3039]"></span>

            {/* Step 2 */}
            <div className={`flex items-center space-x-1.5 ${step >= 2 ? 'text-[#CCA668]' : 'text-[#5A5D66]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step >= 2 ? 'bg-[#CCA668] text-[#0B0B0C]' : 'bg-[#1C1E24] text-[#5A5D66]'
              }`}>
                2
              </span>
              <span>HORÁRIO</span>
            </div>

            <span className="w-4 sm:w-6 h-[1px] bg-[#2D3039]"></span>

            {/* Step 3 */}
            <div className={`flex items-center space-x-1.5 ${step === 3 ? 'text-[#CCA668]' : 'text-[#5A5D66]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                step === 3 ? 'bg-[#CCA668] text-[#0B0B0C]' : 'bg-[#1C1E24] text-[#5A5D66]'
              }`}>
                3
              </span>
              <span>CONFIRMAÇÃO</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[calc(85vh-180px)] overflow-y-auto custom-scrollbar space-y-6">
          
          {/* STEP 1: DADOS */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  NOME COMPLETO
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex.: João da Silva"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  E-MAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex.: joao@email.com"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  TELEFONE / WHATSAPP
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#CCA668]">
                    <MessageCircle className="w-4 h-4 fill-[#CCA668]/20" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(92) 90000-0000"
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  ÁREA DE ATUAÇÃO DE INTERESSE
                </label>
                <div className="relative">
                  <select
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    className={`w-full px-3.5 py-2.5 pr-9 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs focus:outline-none transition-colors appearance-none cursor-pointer ${
                      practiceArea === '' ? 'text-[#5A5D66]' : 'text-[#F7F7F5]'
                    }`}
                  >
                    <option value="" disabled className="text-[#5A5D66] bg-[#0E0F12]">
                      Selecione a área
                    </option>
                    <option value="Defesa em Crimes da Lei de Drogas" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Defesa em Crimes da Lei de Drogas
                    </option>
                    <option value="Direito Penal Econômico e Empresarial" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Direito Penal Econômico e Empresarial
                    </option>
                    <option value="Crimes Digitais e Virtuais" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Crimes Digitais e Virtuais
                    </option>
                    <option value="Plantão e Prisão em Flagrante 24h" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Plantão e Prisão em Flagrante 24h
                    </option>
                    <option value="Audiência de Custódia e Habeas Corpus" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Audiência de Custódia e Habeas Corpus
                    </option>
                    <option value="Advocacia Cível Estratégica" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Advocacia Cível Estratégica
                    </option>
                    <option value="Outra Área Jurídica" className="text-[#F7F7F5] bg-[#0E0F12]">
                      Outra Área Jurídica
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#CCA668]">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  BREVE DESCRIÇÃO DO CASO (OPCIONAL)
                </label>
                <textarea
                  rows={2}
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  placeholder="Descreva brevemente sua situação"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none transition-colors"
                />
              </div>

              <div className="flex items-center space-x-2 text-[10.5px] text-[#B8BBC0] pt-1">
                <Lock className="w-3.5 h-3.5 text-[#CCA668] shrink-0" />
                <span>
                  Seus dados estão protegidos e serão utilizados apenas para contato relacionado ao seu atendimento.
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-gradient-to-r from-[#DFB77C] via-[#EAD2B2] to-[#CCA668] hover:brightness-110 shadow-lg shadow-[#CCA668]/20 transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2"
                >
                  <span>CONTINUAR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-center text-xs text-[#74777C] hover:text-[#B8BBC0] pt-1 transition-colors cursor-pointer"
                >
                  Cancelar agendamento
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: HORÁRIO */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  DATA DE PREFERÊNCIA
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  TURNO DE PREFERÊNCIA
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Manhã (09h às 12h)', 'Tarde (14h às 18h)', 'Noite / Urgente'].map((turno) => (
                    <button
                      key={turno}
                      type="button"
                      onClick={() => setPreferredPeriod(turno)}
                      className={`p-3 rounded-md border text-center text-xs transition-all cursor-pointer ${
                        preferredPeriod === turno
                          ? 'border-[#CCA668] bg-[#CCA668]/15 text-[#F7F7F5] font-semibold'
                          : 'border-[#2D3039] bg-[#07080A] text-[#B8BBC0] hover:border-[#74777C]'
                      }`}
                    >
                      {turno}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  FORMATO DE ATENDIMENTO
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Online (Vídeo / WhatsApp)', 'Presencial no Escritório'].map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setMeetingFormat(fmt)}
                      className={`p-3 rounded-md border text-center text-xs transition-all cursor-pointer ${
                        meetingFormat === fmt
                          ? 'border-[#CCA668] bg-[#CCA668]/15 text-[#F7F7F5] font-semibold'
                          : 'border-[#2D3039] bg-[#07080A] text-[#B8BBC0] hover:border-[#74777C]'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3.5 px-4 bg-[#14151B] hover:bg-[#1A1C24] border border-[#2D3039] rounded-md text-xs text-[#B8BBC0] hover:text-[#F7F7F5] flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-gradient-to-r from-[#DFB77C] via-[#EAD2B2] to-[#CCA668] hover:brightness-110 shadow-lg shadow-[#CCA668]/20 transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2"
                >
                  <span>AVANÇAR PARA CONFIRMAÇÃO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: CONFIRMAÇÃO */}
          {step === 3 && (
            <div className="space-y-5 text-left">
              <div className="p-4 bg-[#14151B] border border-[#CCA668]/30 rounded-lg space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-[#CCA668] font-bold pb-1 border-b border-[#252830]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Resumo do Agendamento</span>
                </div>
                <div><strong className="text-[#B8BBC0]">Nome:</strong> {fullName || 'Não informado'}</div>
                {email && <div><strong className="text-[#B8BBC0]">E-mail:</strong> {email}</div>}
                {phone && <div><strong className="text-[#B8BBC0]">WhatsApp:</strong> {phone}</div>}
                {practiceArea && <div><strong className="text-[#B8BBC0]">Área:</strong> {practiceArea}</div>}
                {preferredDate && <div><strong className="text-[#B8BBC0]">Data:</strong> {preferredDate}</div>}
                <div><strong className="text-[#B8BBC0]">Turno:</strong> {preferredPeriod}</div>
                <div><strong className="text-[#B8BBC0]">Formato:</strong> {meetingFormat}</div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="w-full py-4 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-gradient-to-r from-[#DFB77C] via-[#EAD2B2] to-[#CCA668] hover:brightness-110 shadow-lg shadow-[#CCA668]/20 transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>CONFIRMAR E ENVIAR NO WHATSAPP</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full text-center text-xs text-[#74777C] hover:text-[#B8BBC0] pt-1 transition-colors cursor-pointer"
                >
                  Alterar data e turno
                </button>
              </div>
            </div>
          )}

          {/* COMO FUNCIONA Section */}
          <div className="pt-4 border-t border-[#252830] space-y-3">
            <h3 className="text-[11px] font-bold tracking-widest text-[#CCA668] uppercase text-left">
              COMO FUNCIONA:
            </h3>

            <div className="space-y-2.5 text-xs text-[#B8BBC0] text-left">
              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 text-[#CCA668] shrink-0 mt-0.5" />
                <span>Você escolhe o melhor dia e horário para ser atendido.</span>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#CCA668] shrink-0 mt-0.5" />
                <span>Receba a confirmação por e-mail e WhatsApp.</span>
              </div>

              <div className="flex items-start space-x-3">
                <User className="w-4 h-4 text-[#CCA668] shrink-0 mt-0.5" />
                <span>Nossa equipe entrará em contato para confirmar os detalhes.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
