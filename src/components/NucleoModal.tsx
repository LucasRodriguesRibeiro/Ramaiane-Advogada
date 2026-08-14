import React, { useState, useEffect } from 'react';
import { 
  X, 
  Shield, 
  Scale, 
  Target, 
  Lock, 
  MessageCircle, 
  Check, 
  Building2, 
  Stethoscope, 
  Leaf, 
  Monitor, 
  PlaySquare, 
  Landmark, 
  User, 
  Coins, 
  Globe, 
  Briefcase, 
  Users, 
  Hospital, 
  Compass, 
  ShieldAlert, 
  AlertCircle, 
  Sparkles, 
  UserCheck, 
  Calculator, 
  Smartphone, 
  MoreHorizontal,
  LucideIcon
} from 'lucide-react';
import { EmergencyContact } from '../types';

export interface ProfileOption {
  label: string;
  icon: LucideIcon;
}

export interface NucleoConfig {
  id: string;
  num: string;
  icon: LucideIcon;
  subtitle: string;
  mainTitle: string;
  nucleusTitle: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  hasOriginCountryField?: boolean;
  secondaryLabel?: string;
  secondaryPlaceholder?: string;
  originCountryLabel?: string;
  originCountryPlaceholder?: string;
  profiles: ProfileOption[];
  motivos: string[];
  locationLabel: string;
  locationPlaceholder: string;
  emailPlaceholder: string;
  whatsappPlaceholder: string;
  situationPlaceholder: string;
}

export const NUCLEOS_CONFIG: Record<string, NucleoConfig> = {
  'empresarios': {
    id: 'empresarios',
    num: '01',
    icon: Building2,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'EMPRESÁRIOS, EXECUTIVOS E SOCIEDADES',
    description: 'Proteção contra riscos decorrentes de decisões corporativas, operações financeiras, tributárias, lavagem de dinheiro, fraudes e procedimentos de persecução penal.',
    nameLabel: 'SEU NOME / CARGO',
    namePlaceholder: 'Ex.: Carlos Eduardo Silva - Diretor Financeiro',
    secondaryLabel: 'EMPRESA / SOCIEDADE',
    secondaryPlaceholder: 'Ex.: Grupo Silva & Associados S/A',
    profiles: [
      { label: 'Empresário(a)', icon: Building2 },
      { label: 'Executivo / C-Level', icon: Briefcase },
      { label: 'Sócio(a) / Acionista', icon: Users },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Investigação policial ou procedimento do MP',
      'Crimes tributários e sonegação fiscal',
      'Fraudes corporativas e delitos econômicos',
      'Lavagem de dinheiro e compliance penal',
      'Consultoria preventiva e gestão de riscos penais',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: São Paulo - SP',
    emailPlaceholder: 'Ex.: carlos@empresa.com.br',
    whatsappPlaceholder: '(11) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'medicos': {
    id: 'medicos',
    num: '02',
    icon: Stethoscope,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'MÉDICOS, CLÍNICAS E INSTITUIÇÕES DE SAÚDE',
    description: 'Defesa técnica preventiva e atuação diante de questionamentos ético-penais e apurações de conduta profissional, preservando a reputação da carreira.',
    nameLabel: 'SEU NOME / CRM (OPCIONAL)',
    namePlaceholder: 'Ex.: Dra. Juliana Mendes',
    secondaryLabel: 'CLÍNICA / HOSPITAL / CONSULTÓRIO',
    secondaryPlaceholder: 'Ex.: Clínica Integrada de Saúde',
    profiles: [
      { label: 'Médico(a) / Cirurgião', icon: Stethoscope },
      { label: 'Diretor(a) Clínico / Gestor', icon: Building2 },
      { label: 'Clínica / Hospital', icon: Hospital },
      { label: 'Outro da Saúde', icon: MoreHorizontal },
    ],
    motivos: [
      'Apuração de suposto erro médico / lesão / óbito',
      'Sindicância ou processo ético no CRM / CFM',
      'Investigações sobre prescrição / substâncias',
      'Fraudes em planos de saúde / SUS',
      'Consultoria preventiva e termos de consentimento',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: juliana@clinica.med.br',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'produtores-rurais': {
    id: 'produtores-rurais',
    num: '03',
    icon: Leaf,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'PRODUTORES RURAIS E ATIVIDADE AMBIENTAL',
    description: 'Atuação estratégica em investigações e processos por supostas infrações ambientais, autuações de órgãos de fiscalização, recursos naturais e licenciamento.',
    nameLabel: 'SEU NOME / PROPRIETÁRIO',
    namePlaceholder: 'Ex.: Marcos Antônio Vieira',
    secondaryLabel: 'FAZENDA / EMPRESA AGRO',
    secondaryPlaceholder: 'Ex.: Fazenda Rio Claro / Agro Vieira',
    profiles: [
      { label: 'Produtor(a) Rural', icon: Leaf },
      { label: 'Agroindústria', icon: Building2 },
      { label: 'Consultor / Técnico', icon: Compass },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Autuação / Multa ambiental (IBAMA, IPAAM, Órgãos Estaduais)',
      'Embargo de propriedade / Apreensão de maquinário',
      'Inquérito ou processo por crime ambiental',
      'Desmatamento, CAR, Queimadas ou Licenciamento',
      'Regularização e defesa técnica preventiva',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO / MUNICÍPIO DA ÁREA',
    locationPlaceholder: 'Ex.: Sinop - MT / Manaus - AM',
    emailPlaceholder: 'Ex.: marcos@agrovieira.com.br',
    whatsappPlaceholder: '(66) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'crimes-digitais': {
    id: 'crimes-digitais',
    num: '04',
    icon: Monitor,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'CRIMES DIGITAIS E FRAUDES VIRTUAIS',
    description: 'Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, recuperação de ativos e ilícitos no ambiente digital.',
    nameLabel: 'SEU NOME',
    namePlaceholder: 'Ex.: Lucas Santana',
    secondaryLabel: 'EMPRESA OU INSTITUIÇÃO (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: Santana Tech / Pessoa Física',
    profiles: [
      { label: 'Vítima de Golpe', icon: ShieldAlert },
      { label: 'Investigado(a) / Notificado', icon: AlertCircle },
      { label: 'Empresa / Startup', icon: Monitor },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Golpe virtual, invasão de contas ou fraude bancária / Pix',
      'Invasão de dispositivo / Ransomware / Extorsão',
      'Crimes envolvendo criptoativos e plataformas web',
      'Investigação policial por supostos delitos na internet',
      'Vazamento de dados / Falsa identidade / Phishing',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Curitiba - PR',
    emailPlaceholder: 'Ex.: lucas@email.com',
    whatsappPlaceholder: '(41) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'influenciadores': {
    id: 'influenciadores',
    num: '05',
    icon: PlaySquare,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'INFLUENCIADORES E CRIADORES DE CONTEÚDO',
    description: 'Atuação estratégica na defesa de personalidades públicas e criadores de conteúdo em investigações e procedimentos relacionados a polêmicas, exposições e procedimentos na internet.',
    nameLabel: 'SEU NOME / @PERFIL',
    namePlaceholder: 'Ex.: Amanda Lima (@amandalima)',
    secondaryLabel: 'AGÊNCIA / ASSESSORIA (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: Agência Criativa / Assessoria Pessoal',
    profiles: [
      { label: 'Criador(a) / Influenciador', icon: PlaySquare },
      { label: 'Artista / Personalidade', icon: Sparkles },
      { label: 'Agência / Assessor', icon: Briefcase },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Investigação sobre divulgação de plataformas / jogos / rifas',
      'Acusações de calúnia, difamação, injúria ou cancelamento',
      'Vazamento de imagens íntimas / Extorsão digital',
      'Notificação do Procon, Conar ou Ministério Público',
      'Remoção de conteúdo ilícito e blindagem reputacional',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Rio de Janeiro - RJ',
    emailPlaceholder: 'Ex.: assessoria@amandalima.com',
    whatsappPlaceholder: '(21) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'gestores-publicos': {
    id: 'gestores-publicos',
    num: '06',
    icon: Landmark,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'GESTORES E AGENTES PÚBLICOS',
    description: 'Defesa em investigações e processos relacionados ao exercício de função pública, licitações, contratos administrativos e crimes contra a Administração Pública.',
    nameLabel: 'SEU NOME',
    namePlaceholder: 'Ex.: Fernando Guimarães',
    secondaryLabel: 'ÓRGÃO / CARGO / INSTITUIÇÃO',
    secondaryPlaceholder: 'Ex.: Prefeitura Municipal / Secretaria de Estado',
    profiles: [
      { label: 'Político / Mandatário', icon: Landmark },
      { label: 'Secretário(a) / Diretor(a)', icon: Building2 },
      { label: 'Servidor(a) Público', icon: UserCheck },
      { label: 'Fornecedor / Licitante', icon: Briefcase },
    ],
    motivos: [
      'Operação policial, busca e apreensão ou MP',
      'Apuração de irregularidades em licitações e contratos',
      'Acusações de corrupção, peculato ou improbidade',
      'Procedimentos no Tribunal de Contas (TCE / TCU)',
      'Medidas cautelares e afastamento de cargo',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: fernando@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'profissionais-liberais': {
    id: 'profissionais-liberais',
    num: '07',
    icon: User,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'PROFISSIONAIS LIBERAIS',
    description: 'Atuação preventiva e defesa criminal diante de riscos decorrentes do exercício profissional e de atividades regulamentadas.',
    nameLabel: 'SEU NOME / PROFISSÃO',
    namePlaceholder: 'Ex.: Dr. Roberto Ferreira - Perito / Contador',
    secondaryLabel: 'ESCRITÓRIO / EMPRESA',
    secondaryPlaceholder: 'Ex.: Ferreira Perícias e Consultoria',
    profiles: [
      { label: 'Contador / Perito', icon: Calculator },
      { label: 'Engenheiro / Arquiteto', icon: Compass },
      { label: 'Advogado / Corretor', icon: Briefcase },
      { label: 'Outro Profissional', icon: User },
    ],
    motivos: [
      'Responsabilização penal no exercício da profissão',
      'Investigação por emissão de laudos, pareceres ou declarações',
      'Intimação policial para depoimento (testemunha ou investigado)',
      'Defesa técnica em conselhos de classe e órgãos fiscalizadores',
      'Assessoria jurídica preventiva e compliance profissional',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Belo Horizonte - MG',
    emailPlaceholder: 'Ex.: roberto@ferreirapericias.com.br',
    whatsappPlaceholder: '(31) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'instituicoes-financeiras': {
    id: 'instituicoes-financeiras',
    num: '08',
    icon: Coins,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'INSTITUIÇÕES FINANCEIRAS, FINTECHS E INVESTIDORES',
    description: 'Atuação em investigações envolvendo operações financeiras, lavagem de dinheiro, patrimônio e delitos econômicos.',
    nameLabel: 'SEU NOME',
    namePlaceholder: 'Ex.: João da Silva',
    secondaryLabel: 'EMPRESA / INSTITUIÇÃO',
    secondaryPlaceholder: 'Ex.: Banco Alfa / Fintech Solutions',
    profiles: [
      { label: 'Instituição Financeira', icon: Landmark },
      { label: 'Fintech', icon: Smartphone },
      { label: 'Investidor(a)', icon: User },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Investigação / Procedimento relacionado a operações financeiras',
      'Lavagem de dinheiro e patrimônio',
      'Regulação, Compliance e Governança',
      'Fraudes financeiras e crimes econômicos',
      'Resposta a órgãos reguladores',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: São Paulo - SP',
    emailPlaceholder: 'Ex.: joao@email.com',
    whatsappPlaceholder: '(11) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'estrangeiros': {
    id: 'estrangeiros',
    num: '09',
    icon: Globe,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'ESTRANGEIROS E EMPRESAS INTERNACIONAIS',
    description: 'Assistência e defesa criminal em investigações e processos com repercussões penais no Brasil.',
    nameLabel: 'SEU NOME / REPRESENTANTE',
    namePlaceholder: 'Ex.: John Smith',
    hasOriginCountryField: true,
    secondaryLabel: 'EMPRESA / ORGANIZAÇÃO',
    secondaryPlaceholder: 'Ex.: Global Tech LLC',
    originCountryLabel: 'PAÍS DE ORIGEM',
    originCountryPlaceholder: 'Ex.: Estados Unidos',
    profiles: [
      { label: 'Estrangeiro(a) no Brasil', icon: Globe },
      { label: 'Empresa Internacional', icon: Building2 },
      { label: 'Representante / Cônsul', icon: ShieldAlert },
      { label: 'Investidor Internacional', icon: Briefcase },
    ],
    motivos: [
      'Investigação ou processo criminal em andamento no Brasil',
      'Cooperação jurídica internacional, extradição ou alerta vermelho',
      'Crimes transfronteiriços, aduaneiros, câmbio e remessas',
      'Compliance penal e assessoria a subsidiárias no Brasil',
      'Prisão, retenção de passaporte ou mandado em território brasileiro',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO (NO BRASIL)',
    locationPlaceholder: 'Ex.: São Paulo - SP',
    emailPlaceholder: 'Ex.: contato@empresa.com',
    whatsappPlaceholder: '(11) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'policiais-militares': {
    id: 'policiais-militares',
    num: '10',
    icon: Shield,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'POLICIAIS MILITARES E FORÇAS DE SEGURANÇA',
    description: 'Atuação especializada na defesa de policiais militares e agentes de segurança em investigações, crimes militares e comuns, processos criminais e procedimentos disciplinares.',
    nameLabel: 'SEU NOME / PATENTE / CARGO',
    namePlaceholder: 'Ex.: Sargento Marcos / Agente Lucas',
    secondaryLabel: 'CORPORAÇÃO / BATALHÃO / ÓRGÃO',
    secondaryPlaceholder: 'Ex.: Polícia Militar / Polícia Civil / Guarda Municipal',
    profiles: [
      { label: 'Policial Militar', icon: Shield },
      { label: 'Policial Civil / Federal', icon: ShieldAlert },
      { label: 'Guarda Municipal / Agente', icon: UserCheck },
      { label: 'Familiar / Representante', icon: Users },
    ],
    motivos: [
      'Investigação / Inquérito Policial Militar (IPM)',
      'Auto de Resistência / Intervenção com Morte',
      'Processo Criminal na Justiça Militar ou Comum',
      'Processo Administrativo Disciplinar (PAD / CD)',
      'Prisão em Flagrante / Custódia / Audiência',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO / BATALHÃO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: marcos@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a ocorrência ou procedimento para que possamos entender melhor.',
  }
};

interface NucleoModalProps {
  nucleoId: string | null;
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const NucleoModal: React.FC<NucleoModalProps> = ({
  nucleoId,
  isOpen,
  onClose,
  contact
}) => {
  const [personName, setPersonName] = useState('');
  const [secondaryField, setSecondaryField] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');
  const [selectedMotivos, setSelectedMotivos] = useState<string[]>([]);
  const [cityState, setCityState] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [situation, setSituation] = useState('');

  // Reset form when nucleoId changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setPersonName('');
      setSecondaryField('');
      setOriginCountry('');
      setSelectedProfile('');
      setSelectedMotivos([]);
      setCityState('');
      setEmail('');
      setPhone('');
      setSituation('');
    }
  }, [isOpen, nucleoId]);

  if (!isOpen || !nucleoId) return null;

  const currentConfig = NUCLEOS_CONFIG[nucleoId] || NUCLEOS_CONFIG['instituicoes-financeiras'];
  const HeaderIcon = currentConfig.icon;

  const toggleMotivo = (motivo: string) => {
    if (selectedMotivos.includes(motivo)) {
      setSelectedMotivos(selectedMotivos.filter((m) => m !== motivo));
    } else {
      setSelectedMotivos([...selectedMotivos, motivo]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      `*ATENDIMENTO CRIMINAL ESTRATÉGICO*`,
      `*Núcleo:* ${currentConfig.nucleusTitle}`,
      ``,
    ];

    if (personName.trim()) {
      lines.push(`*Nome:* ${personName.trim()}`);
    }

    if (secondaryField.trim() && currentConfig.secondaryLabel) {
      lines.push(`*${currentConfig.secondaryLabel}:* ${secondaryField.trim()}`);
    }

    if (currentConfig.hasOriginCountryField && originCountry.trim()) {
      lines.push(`*País de Origem:* ${originCountry.trim()}`);
    }

    if (selectedProfile.trim()) {
      lines.push(`*Perfil:* ${selectedProfile.trim()}`);
    }

    if (selectedMotivos.length > 0) {
      lines.push(`*Motivo(s) do Atendimento:*`);
      selectedMotivos.forEach((m) => lines.push(` • ${m}`));
    }

    if (cityState.trim()) {
      lines.push(`*Localização:* ${cityState.trim()}`);
    }

    if (email.trim()) {
      lines.push(`*E-mail:* ${email.trim()}`);
    }

    if (phone.trim()) {
      lines.push(`*Telefone/WhatsApp:* ${phone.trim()}`);
    }

    if (situation.trim()) {
      lines.push(``);
      lines.push(`*Descrição da Situação:*`);
      lines.push(situation.trim());
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
        className="relative w-full max-w-xl my-6 bg-[#0E0F12] border border-[#CCA668]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
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

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-[#252830]/80">
          <div className="flex items-start space-x-4">
            {/* Gold Circular Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#CCA668]/60 bg-[#16171C] flex items-center justify-center text-[#CCA668] shrink-0 shadow-lg shadow-[#CCA668]/10 mt-1">
              <HeaderIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
            </div>

            <div className="space-y-1.5 pr-6">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#CCA668] uppercase">
                {currentConfig.subtitle}
              </div>
              <h2 className="font-serif-title text-xl sm:text-2xl font-normal text-[#F7F7F5] uppercase tracking-wide leading-none">
                {currentConfig.mainTitle}
              </h2>
              <div className="text-xs sm:text-sm font-bold text-[#E5B869] uppercase tracking-wider">
                {currentConfig.nucleusTitle}
              </div>
              <p className="text-xs text-[#B8BBC0] font-light leading-relaxed pt-1">
                {currentConfig.description}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[calc(85vh-160px)] overflow-y-auto custom-scrollbar">
          
          {/* Row 1: Name */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              {currentConfig.nameLabel}
            </label>
            <input
              type="text"
              required
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder={currentConfig.namePlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
            />
          </div>

          {/* Row 2: Secondary Field + Origin Country if applicable */}
          {currentConfig.hasOriginCountryField ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  {currentConfig.secondaryLabel}
                </label>
                <input
                  type="text"
                  value={secondaryField}
                  onChange={(e) => setSecondaryField(e.target.value)}
                  placeholder={currentConfig.secondaryPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  {currentConfig.originCountryLabel}
                </label>
                <input
                  type="text"
                  value={originCountry}
                  onChange={(e) => setOriginCountry(e.target.value)}
                  placeholder={currentConfig.originCountryPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
                />
              </div>
            </div>
          ) : currentConfig.secondaryLabel ? (
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                {currentConfig.secondaryLabel}
              </label>
              <input
                type="text"
                value={secondaryField}
                onChange={(e) => setSecondaryField(e.target.value)}
                placeholder={currentConfig.secondaryPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          ) : null}

          {/* Row 3: Profile Selectors (Interactive Cards as in Example) */}
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              SEU PERFIL
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {currentConfig.profiles.map((prof) => {
                const ProfIcon = prof.icon;
                const isSelected = selectedProfile === prof.label;
                return (
                  <button
                    key={prof.label}
                    type="button"
                    onClick={() => setSelectedProfile(isSelected ? '' : prof.label)}
                    className={`p-2.5 rounded-md border flex flex-col items-center justify-center text-center space-y-1.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#CCA668] bg-[#CCA668]/15 text-[#F7F7F5] shadow-sm shadow-[#CCA668]/20'
                        : 'border-[#2D3039] bg-[#07080A] text-[#B8BBC0] hover:border-[#74777C]/60 hover:text-[#F7F7F5]'
                    }`}
                  >
                    <ProfIcon className={`w-4 h-4 ${isSelected ? 'text-[#CCA668]' : 'text-[#8F9299]'}`} />
                    <span className="text-[10px] font-medium leading-tight line-clamp-2">
                      {prof.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Motivo do Atendimento (Checkboxes grid as in Example) */}
          <div className="space-y-2">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              MOTIVO DO ATENDIMENTO
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#07080A] border border-[#2D3039] rounded-md p-3">
              {currentConfig.motivos.map((motivo) => {
                const isChecked = selectedMotivos.includes(motivo);
                return (
                  <label
                    key={motivo}
                    onClick={() => toggleMotivo(motivo)}
                    className={`flex items-start space-x-2 p-1.5 rounded cursor-pointer transition-colors text-left select-none ${
                      isChecked ? 'bg-[#CCA668]/10' : 'hover:bg-[#15161A]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                      isChecked 
                        ? 'border-[#CCA668] bg-[#CCA668] text-[#0B0B0C]' 
                        : 'border-[#454852] bg-[#0E0F12]'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className={`text-[11px] leading-snug ${isChecked ? 'text-[#F7F7F5] font-medium' : 'text-[#B8BBC0]'}`}>
                      {motivo}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Row 5: Location & Email in 2 Cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                {currentConfig.locationLabel}
              </label>
              <input
                type="text"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                placeholder={currentConfig.locationPlaceholder}
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
                placeholder={currentConfig.emailPlaceholder}
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 6: Phone / WhatsApp */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              NÚMERO PARA CONTATO (WHATSAPP)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#CCA668]">
                <MessageCircle className="w-4 h-4 fill-[#CCA668]/20" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={currentConfig.whatsappPlaceholder}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 7: Situation Textarea */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              BREVE DESCRIÇÃO DA SITUAÇÃO
            </label>
            <textarea
              rows={3}
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder={currentConfig.situationPlaceholder}
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#CCA668] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Golden CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-gradient-to-r from-[#DFB77C] via-[#EAD2B2] to-[#CCA668] hover:brightness-110 shadow-lg shadow-[#CCA668]/20 transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              <span>SOLICITAR ATENDIMENTO</span>
              <span className="text-base font-bold leading-none">→</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-3 border-t border-[#252830] grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-[#B8BBC0]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#CCA668]" />
              <span>Atendimento sigiloso</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#CCA668]" />
              <span>Análise individualizada</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#CCA668]" />
              <span>Atuação estratégica</span>
            </div>
          </div>

          {/* Security Note */}
          <div className="flex items-center justify-center space-x-2 text-[10px] text-[#74777C] pt-1">
            <Lock className="w-3 h-3 text-[#B8BBC0]/70 shrink-0" />
            <span className="text-center">
              Seus dados são protegidos e utilizados apenas para contato relacionado ao seu atendimento.
            </span>
          </div>

        </form>
      </div>
    </div>
  );
};
