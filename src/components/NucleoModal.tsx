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
  Search,
  Gavel,
  DollarSign,
  Vote,
  Car,
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
  'medicos': {
    id: 'medicos',
    num: '01',
    icon: Stethoscope,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'MÉDICOS, CLÍNICAS E INSTITUIÇÕES DE SAÚDE',
    description: 'Defesa criminal preventiva e atuação em investigações, sindicâncias, procedimentos administrativos e processos relacionados à atividade médica e à gestão de clínicas.',
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
      'Defesa criminal preventiva e consultoria',
      'Investigação policial ou procedimento do MP',
      'Sindicância ou processo ético no CRM / CFM',
      'Procedimentos administrativos e vigilância',
      'Processos e apuração de conduta médica',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: juliana@clinica.med.br',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a situação para que possamos entender melhor o seu caso.',
  },
  'pacientes': {
    id: 'pacientes',
    num: '02',
    icon: Scale,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'CRIMINAL ESTRATÉGICO',
    nucleusTitle: 'PACIENTES E VÍTIMAS DE ERRO MÉDICO',
    description: 'Atuação na defesa de pacientes vítimas de possíveis crimes ou condutas ilícitas decorrentes de atendimento médico, procedimentos, negligência, imprudência ou imperícia, com análise estratégica do caso e responsabilização na esfera criminal quando cabível.',
    nameLabel: 'SEU NOME / REPRESENTANTE',
    namePlaceholder: 'Ex.: Maria Clara Souza',
    secondaryLabel: 'PROFISSIONAL / CLÍNICA / HOSPITAL ENVOLVIDO',
    secondaryPlaceholder: 'Ex.: Hospital Geral / Clínica de Estética',
    profiles: [
      { label: 'Paciente / Vítima', icon: User },
      { label: 'Familiar de Vítima', icon: Users },
      { label: 'Representante Legal', icon: ShieldAlert },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Suspeita de erro médico ou procedimento inadequado',
      'Negligência, imprudência ou imperícia no atendimento',
      'Lesão corporal grave decorrente de cirurgia/procedimento',
      'Óbito ou dano severo em ambiente médico/hospitalar',
      'Análise para responsabilização criminal e inquérito',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: maria@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a ocorrência e o atendimento recebido para que possamos analisar.',
  },
  'empresarios': {
    id: 'empresarios',
    num: '03',
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
  'produtores-rurais': {
    id: 'produtores-rurais',
    num: '04',
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
    num: '05',
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
    num: '06',
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
    num: '07',
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
    num: '08',
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
    num: '09',
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
    num: '10',
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
    num: '11',
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
  },
  'investigacoes-operacoes': {
    id: 'investigacoes-operacoes',
    num: '12',
    icon: Search,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'INVESTIGAÇÕES, PRISÕES E OPERAÇÕES POLICIAIS',
    description: 'Atuação estratégica em inquéritos, prisões, buscas e apreensões, operações policiais, tráfico de drogas e crimes de maior complexidade.',
    nameLabel: 'SEU NOME / REPRESENTANTE',
    namePlaceholder: 'Ex.: Gabriel Oliveira',
    secondaryLabel: 'DELEGACIA / ÓRGÃO (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: Delegacia Especializada / Polícia Federal',
    profiles: [
      { label: 'Investigado(a) / Intimado', icon: ShieldAlert },
      { label: 'Familiar de Preso(a)', icon: Users },
      { label: 'Testemunha / Envolvido', icon: User },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Prisão em flagrante / Audiência de custódia',
      'Mandado de prisão / Busca e apreensão',
      'Intimação para depoimento em inquérito',
      'Operação policial / Investigação de alta complexidade',
      'Acompanhamento de inquérito e provas',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: gabriel@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva a situação e o motivo da abordagem ou investigação.',
  },
  'defesa-tribunais': {
    id: 'defesa-tribunais',
    num: '13',
    icon: Gavel,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'DEFESA EM TRIBUNAIS E RECURSOS CRIMINAIS',
    description: 'Atuação em processos criminais em todas as instâncias, recursos especiais, habeas corpus, revisões criminais e medidas processuais estratégicas.',
    nameLabel: 'SEU NOME',
    namePlaceholder: 'Ex.: Marcelo Santos',
    secondaryLabel: 'VARA / TRIBUNAL (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: 2ª Vara Criminal / TJAM / STJ / STF',
    profiles: [
      { label: 'Réu / Acusado(a)', icon: Scale },
      { label: 'Familiar de Acusado', icon: Users },
      { label: 'Advogado Parceiro', icon: Briefcase },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Impetração de Habeas Corpus de urgência',
      'Recurso Especial / Extraordinário (STJ / STF)',
      'Revisão Criminal / Sustentação Oral',
      'Apelação Criminal / Defesa em 2ª Instância',
      'Parecer técnico ou sustentação estratégica',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM / Brasília - DF',
    emailPlaceholder: 'Ex.: marcelo@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Informe a fase atual do processo e as instâncias já percorridas.',
  },
  'crimes-economicos': {
    id: 'crimes-economicos',
    num: '14',
    icon: DollarSign,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'CRIMES ECONÔMICOS, TRIBUTÁRIOS E CONTRA O PATRIMÔNIO',
    description: 'Defesa em crimes tributários, sonegação, fraudes fiscais, estelionato, apropriação indébita, lavagem de dinheiro e demais crimes patrimoniais.',
    nameLabel: 'SEU NOME / EMPRESA',
    namePlaceholder: 'Ex.: Ricardo Almeida',
    secondaryLabel: 'EMPRESA / RAZÃO SOCIAL',
    secondaryPlaceholder: 'Ex.: Almeida Comércio e Indústria Ltda',
    profiles: [
      { label: 'Empresário(a)', icon: Building2 },
      { label: 'Investigado(a)', icon: ShieldAlert },
      { label: 'Sócio / Administrador', icon: Briefcase },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Investigação de sonegação fiscal ou crime tributário',
      'Acusação de estelionato ou fraude corporativa',
      'Procedimento sobre lavagem de dinheiro',
      'Autuação fiscal com desdobramento penal',
      'Defesa técnica preventiva empresarial',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: São Paulo - SP',
    emailPlaceholder: 'Ex.: ricardo@empresa.com.br',
    whatsappPlaceholder: '(11) 90000-0000',
    situationPlaceholder: 'Descreva brevemente a acusação ou procedimento investigativo.',
  },
  'crimes-eleitorais': {
    id: 'crimes-eleitorais',
    num: '15',
    icon: Vote,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'CRIMES ELEITORAIS',
    description: 'Defesa e consultoria em investigações e processos relacionados a crimes eleitorais, abuso de poder, caixa 2, corrupção eleitoral e condutas ilícitas em campanhas.',
    nameLabel: 'SEU NOME / CARGO OU CANDIDATURA',
    namePlaceholder: 'Ex.: Dra. Camila Rocha - Candidata / Assessora',
    secondaryLabel: 'PARTIDO / COLIGAÇÃO / CAMPANHA',
    secondaryPlaceholder: 'Ex.: Partido Renovador / Campanha 2026',
    profiles: [
      { label: 'Candidato(a) / Político', icon: Landmark },
      { label: 'Assessor(a) de Campanha', icon: Briefcase },
      { label: 'Doador / Contribuinte', icon: Coins },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Investigação por suposto Caixa 2 ou abuso eleitoral',
      'Notificação ou inquérito na Justiça Eleitoral / PF',
      'Prestação de contas com desdobramento penal',
      'Defesa em acusações de corrupção eleitoral',
      'Consultoria preventiva em período eleitoral',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: camila@campanha.com.br',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva a notificação ou apuração eleitoral em andamento.',
  },
  'crimes-transito': {
    id: 'crimes-transito',
    num: '16',
    icon: Car,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'CRIMES DE TRÂNSITO',
    description: 'Defesa em crimes de trânsito, embriaguez ao volante, homicídio culposo, lesão corporal culposa e demais infrações penais relacionadas ao trânsito.',
    nameLabel: 'SEU NOME / CONDUTOR',
    namePlaceholder: 'Ex.: Bruno Castro',
    secondaryLabel: 'VEÍCULO ENVOLVIDO (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: Automóvel de Passeio / Motocicleta / Frota',
    profiles: [
      { label: 'Condutor(a) Envolvido', icon: Car },
      { label: 'Familiar do Condutor', icon: Users },
      { label: 'Vítima / Familiar', icon: User },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Teste do bafômetro / Embriaguez ao volante (Art. 306 CTB)',
      'Acidente com lesão corporal ou homicídio culposo',
      'Omissão de socorro ou fuga do local do acidente',
      'Fiança e audiência de custódia de trânsito',
      'Suspensão ou cassação de CNH com processo penal',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: bruno@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva a ocorrência no trânsito e o estado atual do procedimento.',
  },
  'execucao-penal': {
    id: 'execucao-penal',
    num: '17',
    icon: Lock,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'EXECUÇÃO PENAL E SISTEMA PRISIONAL',
    description: 'Atuação em execuções penais, progressão de regime, livramento condicional, incidentes, transferência, falta grave e direitos do preso.',
    nameLabel: 'SEU NOME / NOME DO APENADO',
    namePlaceholder: 'Ex.: Solange Nunes (Mãe do Apenado Lucas Nunes)',
    secondaryLabel: 'UNIDADE PRISIONAL / ESTABELECIMENTO',
    secondaryPlaceholder: 'Ex.: CDPM / COMPAJ / Penitenciária Estadual',
    profiles: [
      { label: 'Familiar do Apenado', icon: Users },
      { label: 'Próprio Apenado / Liberado', icon: User },
      { label: 'Advogado Parceiro', icon: Briefcase },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Pedido de progressão de regime (Fechado para Semiaberto / Aberto)',
      'Livramento condicional / Remição de pena por trabalho/estudo',
      'Defesa em apuração de falta grave ou PAD disciplinar',
      'Pedido de transferência de unidade ou prisão domiciliar',
      'Unificação de penas e cálculo de liquidação',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO DA UNIDADE',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: solange@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Informe o nome do apenado, número do processo de execução penal se souber e a unidade.',
  },
  'crimes-honra': {
    id: 'crimes-honra',
    num: '18',
    icon: ShieldAlert,
    subtitle: 'ATENDIMENTO',
    mainTitle: 'ATUAÇÃO ESTRATÉGICA',
    nucleusTitle: 'CRIMES CONTRA A HONRA, LIBERDADE E IMAGEM',
    description: 'Defesa em calúnia, difamação, injúria, ameaças, perseguição e condutas que afetam a honra, liberdade e imagem de pessoas físicas e jurídicas.',
    nameLabel: 'SEU NOME',
    namePlaceholder: 'Ex.: Patricia Xavier',
    secondaryLabel: 'EMPRESA / PERFIL (OPCIONAL)',
    secondaryPlaceholder: 'Ex.: Empresa Xavier S/A / Perfil Público',
    profiles: [
      { label: 'Vítima de Difamação/Calúnia', icon: User },
      { label: 'Notificado(a) / Acusado', icon: ShieldAlert },
      { label: 'Empresa Afetada', icon: Building2 },
      { label: 'Outro', icon: MoreHorizontal },
    ],
    motivos: [
      'Calúnia, difamação ou injúria em redes sociais / imprensa',
      'Ameaças, perseguição (stalking) ou extorsão',
      'Interpelação judicial e Queixa-Crime',
      'Defesa criminal em acusações contra a honra',
      'Proteção e retratação pública',
      'Outro motivo',
    ],
    locationLabel: 'CIDADE / ESTADO',
    locationPlaceholder: 'Ex.: Manaus - AM',
    emailPlaceholder: 'Ex.: patricia@email.com',
    whatsappPlaceholder: '(92) 90000-0000',
    situationPlaceholder: 'Descreva brevemente os fatos e onde ocorreram as declarações ou condutas.',
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
        className="relative w-full max-w-xl my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
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
            {/* Silver Circular Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#B8BBC0]/50 bg-[#16171C] flex items-center justify-center text-[#F7F7F5] shrink-0 shadow-lg shadow-white/5 mt-1">
              <HeaderIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
            </div>

            <div className="space-y-1.5 pr-6">
              <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#B8BBC0] uppercase">
                {currentConfig.subtitle}
              </div>
              <h2 className="font-serif-title text-xl sm:text-2xl font-normal text-[#F7F7F5] uppercase tracking-wide leading-none">
                {currentConfig.mainTitle}
              </h2>
              <div className="text-xs sm:text-sm font-bold text-[#E2E4E8] uppercase tracking-wider">
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
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
                        ? 'border-[#B8BBC0] bg-[#E5E7EB]/20 text-[#FFFFFF] shadow-sm'
                        : 'border-[#2D3039] bg-[#07080A] text-[#B8BBC0] hover:border-[#74777C]/60 hover:text-[#F7F7F5]'
                    }`}
                  >
                    <ProfIcon className={`w-4 h-4 ${isSelected ? 'text-[#FFFFFF]' : 'text-[#8F9299]'}`} />
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
                      isChecked ? 'bg-white/10' : 'hover:bg-[#15161A]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                      isChecked 
                        ? 'border-[#B8BBC0] bg-[#E5E7EB] text-[#0B0B0C]' 
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
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 6: Phone / WhatsApp */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
              NÚMERO PARA CONTATO (WHATSAPP)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#B8BBC0]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={currentConfig.whatsappPlaceholder}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none transition-colors"
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
              className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Silver CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all duration-200 cursor-pointer active:scale-[0.99] flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>SOLICITAR ATENDIMENTO</span>
              <span className="text-base font-bold leading-none">→</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-3 border-t border-[#252830] grid grid-cols-3 gap-2 text-center text-[10px] sm:text-[11px] text-[#B8BBC0]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Atendimento sigiloso</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>Análise individualizada</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#B8BBC0]" />
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

