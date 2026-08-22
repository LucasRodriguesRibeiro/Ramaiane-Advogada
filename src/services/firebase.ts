import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  updateDoc, 
  setDoc,
  doc, 
  query, 
  orderBy,
  Firestore
} from 'firebase/firestore';
import { BlogArticle, FirebaseCustomConfig, generateSlug } from '../types/blog';
export type { FirebaseCustomConfig };
import dobra2Img from '../assets/images/dobra2.jpeg';

// Chave do localStorage para persistência local e fallback
const LOCAL_STORAGE_KEY = 'ramaiane_blog_articles_v2';
const FIREBASE_CONFIG_KEY = 'ramaiane_firebase_config_v1';

// Artigos Iniciais Semente (Exatamente como nas fotos de referência)
export const INITIAL_SEED_ARTICLES: BlogArticle[] = [
  {
    id: "artigo-01",
    slug: "recebi-uma-intimacao-criminal-e-agora",
    num: "01",
    title: "RECEBI UMA INTIMAÇÃO CRIMINAL. E AGORA?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    summary: "Receber uma intimação criminal pode gerar preocupação e muitas dúvidas. A primeira orientação é não ignore o documento e não tome decisões precipitadas antes de compreender a situação.",
    keyPoints: [
      "Leia integralmente o documento.",
      "Confira data, horário e local.",
      "Identifique o procedimento relacionado.",
      "Preserve documentos e informações relevantes.",
      "Considere orientação jurídica antes de prestar declarações."
    ],
    content: `Receber uma intimação da polícia ou da Justiça Criminal costuma causar grande impacto emocional. Contudo, manter a tranquilidade e agir com técnica jurídica é fundamental para a preservação de direitos.

### O que significa a intimação?
A intimação pode ser para prestar esclarecimentos na condição de testemunha, vítima ou investigado. Identificar previamente em qual condição você foi chamado é o primeiro passo para traçar uma estratégia defensiva segura.

### Recomendações imediatas:
1. **Não falte sem justificativa prévia:** A ausência injustificada pode gerar condução coercitiva ou mandado.
2. **Direito ao silêncio e não autoincriminação:** Ninguém é obrigado a produzir prova contra si mesmo (art. 5º, LXIII da Constituição Federal).
3. **Acompanhamento de advogado:** É direito do intimado estar acompanhado por advogado constituído em todos os atos investigativos.`,
    category: "Direito Penal Geral",
    readTime: "3 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-02",
    slug: "meu-familiar-foi-preso-o-que-fazer",
    num: "02",
    title: "MEU FAMILIAR FOI PRESO. O QUE FAZER?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    summary: "A prisão de um familiar causa impacto e exige decisões rápidas. Manter a calma e buscar informações corretas é o primeiro passo.",
    keyPoints: [
      "Descubra onde a pessoa está detida.",
      "Saiba a natureza da prisão (flagrante, preventiva, temporária).",
      "Procure orientação jurídica imediata.",
      "Preserve documentos e informações essenciais.",
      "Evite expor o caso nas redes sociais."
    ],
    content: `As primeiras 24 horas após a prisão são as mais decisivas para a condução do caso. Nesse intervalo ocorre a Audiência de Custódia, momento em que o juiz avaliará a legalidade do flagrante e a possibilidade de conceder a liberdade provisória.

### Passos fundamentais:
- **Localização:** Verifique em qual delegacia ou unidade prisional a pessoa se encontra.
- **Audiência de Custódia:** Ter uma defesa técnica presente na audiência de custódia aumenta consideravelmente as chances de soltura imediata.
- **Documentação:** Reúna comprovantes de residência fixa, carteira de trabalho e certidões pessoais.`,
    category: "Urgências Criminais",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-03",
    slug: "busca-e-apreensao-como-funciona",
    num: "03",
    title: "BUSCA E APREENSÃO: COMO FUNCIONA?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80",
    summary: "A busca e apreensão é uma medida prevista na legislação e possui requisitos próprios. Seu objetivo é localizar e apreender objetos ou documentos relacionados a uma investigação.",
    keyPoints: [
      "Verifique a documentação e mandado judicial.",
      "Não ofereça resistência física.",
      "Anote tudo o que for apreendido pelos agentes.",
      "Busque orientação jurídica o quanto antes.",
      "Guarde cópias dos documentos e termos de apreensão."
    ],
    content: `O cumprimento de um mandado de busca e apreensão exige rigor técnico. A diligência só pode ocorrer durante o dia (salvo consentimento do morador) e com autorização judicial fundamentada.

### Direitos do cidadão durante a busca:
- Exigir a apresentação do mandado judicial assinado.
- Acompanhar a vistoria em todos os cômodos.
- Registrar os bens apreendidos no auto de exibição e apreensão.`,
    category: "Direito Penal Geral",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-04",
    slug: "como-agir-em-caso-de-bloqueio-judicial",
    num: "04",
    title: "HACKEARAM MINHA CONTA. ISSO É CRIME?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    summary: "A invasão de contas e dispositivos pode configurar crime, especialmente quando há obtenção, adulteração ou destruição de dados sem autorização.",
    keyPoints: [
      "Altere senhas imediatamente e ative 2FA.",
      "Preserve provas (prints, e-mails, logs, mensagens).",
      "Registre um boletim de ocorrência especializado.",
      "Não apague informações ou conversas.",
      "Busque orientação jurídica especializada."
    ],
    content: `A invasão de dispositivo informático é tipificada no art. 154-A do Código Penal. Além disso, se o criminoso utilizar a conta para aplicar golpes em terceiros ou exigir resgate, configuram-se crimes de estelionato ou extorsão digital.

### Como agir:
- Colete atas notariais ou prints com data, hora e URLs completas.
- Notifique imediatamente a plataforma para bloqueio da conta.
- Faça o registro formal perante a Delegacia de Crimes Cibernéticos.`,
    category: "Crimes Digitais",
    readTime: "3 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-05",
    slug: "fizeram-um-emprestimo-no-meu-nome-e-agora",
    num: "05",
    title: "FIZERAM UM EMPRÉSTIMO NO MEU NOME. E AGORA?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    summary: "Empréstimos feitos sem autorização podem indicar fraude. É importante documentar tudo e agir rapidamente para evitar prejuízos maiores.",
    keyPoints: [
      "Reúna contratos, extratos e comprovantes bancários.",
      "Comunique imediatamente a instituição financeira.",
      "Registre um boletim de ocorrência.",
      "Acompanhe registros e movimentações no Registrato.",
      "Procure orientação jurídica para responsabilização."
    ],
    content: `A contratação indevida de empréstimos mediante fraude bancária constitui crime de estelionato e gera responsabilidade civil objetiva da instituição financeira.

### Providências cabíveis:
1. Solicite o protocolo de contestação junto ao SAC do banco.
2. Extraia o relatório do Banco Central (Registrato).
3. Ingresse com medida cautelar e ação de anulação do débito com indenização.`,
    category: "Fraudes & Delitos Financeiros",
    readTime: "3 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-06",
    slug: "como-preservar-provas-em-crimes-digitais",
    num: "06",
    title: "COMO PRESERVAR PROVAS EM CRIMES DIGITAIS?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    summary: "Provas digitais são voláteis e podem se perder rapidamente. Preservá-las corretamente é fundamental para uma investigação ou defesa eficaz.",
    keyPoints: [
      "Não apague arquivos ou mensagens originais.",
      "Salve prints com data, horário e número visíveis.",
      "Guarde e-mails e metadados completos (cabeçalho).",
      "Anote URLs e informações relevantes.",
      "Busque orientação para preservação técnica com hash/ata notarial."
    ],
    content: `No ambiente virtual, uma prova mal colhida pode ser considerada ilícita ou perder seu valor probatório perante o juiz. A cadeia de custódia da prova digital deve ser respeitada desde o início.

### Técnicas de preservação:
- **Ata Notarial:** Realizada em cartório de notas.
- **Preservação de Logs:** Solicitação judicial de quebra de sigilo de IP antes do prazo legal de descarte pelos provedores.
- **Hash criptográfico:** Garante que o arquivo não sofreu adulteração.`,
    category: "Crimes Digitais",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-07",
    slug: "minha-empresa-sofreu-uma-fraude-e-agora",
    num: "07",
    title: "MINHA EMPRESA SOFREU UMA FRAUDE. E AGORA?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    summary: "Fraudes empresariais podem causar prejuízos financeiros, operacionais e reputacionais. A resposta rápida e estratégica é fundamental.",
    keyPoints: [
      "Contenha o problema imediatamente para estancar perdas.",
      "Preserve documentos, auditorias e acessos internos.",
      "Investigue internamente antes de tomar decisões precipitadas.",
      "Evite acusações precipitadas sem base técnica.",
      "Busque orientação jurídica especializada em compliance penal."
    ],
    content: `Fraudes internas (como desvios de colaboradores ou sócios) e fraudes externas (golpes do boleto falso, invasões) exigem uma resposta corporativa estruturada.

### Gestão do incidente:
- Condução de investigação interna independente.
- Notificação das autoridades policiais mediante notícia-crime estruturada.
- Implementação imediata de travas de compliance penal.`,
    category: "Direito Penal Empresarial",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-08",
    slug: "quais-sao-os-principais-riscos-criminais-para-empresas",
    num: "08",
    title: "QUAIS SÃO OS PRINCIPAIS RISCOS CRIMINAIS PARA EMPRESAS?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    summary: "Empresas estão sujeitas a diversos riscos criminais, que podem envolver gestores, colaboradores, processos e operações financeiras.",
    keyPoints: [
      "Fraudes, desvios e corrupção corporativa.",
      "Crimes financeiros e tributários (sonegação fiscal).",
      "Lavagem de dinheiro e repasses irregulares.",
      "Crimes digitais e contra dados confidenciais.",
      "Compliance criminal é essencial para blindagem dos sócios."
    ],
    content: `Executivos e administradores podem ser responsabilizados penalmente por atos praticados no âmbito da empresa, mesmo sem participação direta, através de teses de domínio do fato.

### Como proteger a diretoria e os sócios:
- Auditoria preventiva periódica de conformidade tributária e financeira.
- Criação de canais de denúncia e manuais de conduta penal.
- Assessoria jurídica contínua em operações sensíveis.`,
    category: "Direito Penal Empresarial",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-09",
    slug: "medico-recebeu-uma-intimacao-o-que-fazer",
    num: "09",
    title: "MÉDICO RECEBEU UMA INTIMAÇÃO. O QUE FAZER?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    summary: "Intimações envolvendo médicos podem estar relacionadas a procedimentos, denúncias ou investigações de suposto erro ou conduta médica.",
    keyPoints: [
      "Identifique o órgão e o procedimento (Delegacia, MP ou CRM).",
      "Não responda nem preste depoimento sem orientação prévia.",
      "Preserve documentos e prontuários médicos originais.",
      "Respeite o sigilo profissional em todas as declarações.",
      "Busque orientação jurídica especializada em Direito Médico-Penal."
    ],
    content: `A atuação médica está sujeita a fiscalizações rigorosas. Ao receber uma notificação da polícia civil ou conselho de classe, o profissional de saúde deve agir com extremo cuidado para preservar sua reputação e registro profissional.

### Cuidados indispensáveis:
- Prontuário médico completo e bem documentado é a principal ferramenta de defesa.
- O dever de sigilo médico deve ser resguardado inclusive perante a autoridade policial, salvo exceções legais.
- Acompanhamento por advogado criminalista especialista em saúde desde a primeira oitiva.`,
    category: "Saúde & Medicina",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-10",
    slug: "riscos-criminais-para-medicos-e-clinicas-como-prevenir",
    num: "10",
    title: "RISCOS CRIMINAIS PARA MÉDICOS E CLÍNICAS: COMO PREVENIR?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    summary: "Clínicas e profissionais de saúde lidam com dados sensíveis, equipes e processos que podem gerar riscos criminais e administrativos.",
    keyPoints: [
      "Proteção rigorosa de dados e prontuários médicos (LGPD).",
      "Controle de acessos, receituários e substâncias controladas.",
      "Treinamento constante e políticas internas de conduta.",
      "Resposta a incidentes e apuração preventiva de queixas.",
      "Orientação jurídica preventiva contínua."
    ],
    content: `A gestão de clínicas médicas envolve riscos em várias frentes: desde o manuseio de substâncias até a segurança da informação dos pacientes.

### Pilares da prevenção:
1. **Termos de Consentimento Livre e Esclarecido (TCLE)** personalizados e detalhados.
2. **Guarda segura de receituários e medicamentos.**
3. **Auditoria de conformidade sanitária e penal preventiva.**`,
    category: "Saúde & Medicina",
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-11",
    slug: "policial-militar-quais-sao-seus-direitos-durante-a-investigacao",
    num: "11",
    title: "POLICIAL MILITAR: QUAIS SÃO SEUS DIREITOS DURANTE A INVESTIGAÇÃO?",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80",
    summary: "Todo policial militar possui direitos e garantias durante uma investigação. Conhecer e exercer seus direitos desde o início pode ser decisivo para sua liberdade, carreira e integridade.",
    keyPoints: [
      "Direito ao silêncio e à não autoincriminação.",
      "Assistência jurídica técnica desde o início da apuração.",
      "Acesso aos autos e elementos de prova quando cabível.",
      "Vedação a constrangimentos ilegais em sede de IPM ou PAD.",
      "Presunção de inocência e ampla defesa garantidas.",
      "Atuação técnica e estratégica desde o início faz toda a diferença."
    ],
    content: `Militares e agentes de segurança pública enfrentam procedimentos complexos tanto na Justiça Militar quanto na Justiça Comum e Corregedoria.

### Pontos cruciais na defesa do militar:
- Acompanhamento presencial em Inquérito Policial Militar (IPM) e autos de resistência.
- Defesa técnica no Tribunal do Júri e Conselho de Justificação/Disciplina.
- Preservação da prerrogativa de cumprimento de prisão em unidade militar especial.`,
    category: "Segurança Pública & Militares",
    isNew: true,
    readTime: "5 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-12",
    slug: "lei-de-drogas-flagrante-e-criterios-de-defesa",
    num: "12",
    title: "LEI DE DROGAS: PRISÃO EM FLAGRANTE E CRITÉRIOS DE DIFERENCIAÇÃO ENTRE USO E TRÁFICO",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    summary: "A distinção entre posse para consumo e tráfico de drogas na Lei 11.343/06 exige análise técnica rigorosa dos elementos circunstanciais da apreensão e garantias constitucionais.",
    keyPoints: [
      "Critérios do art. 28 x art. 33 da Lei 11.343/06.",
      "Nulidades frequentes em abordagens policiais e invasões de domicílio sem mandado.",
      "Importância da Audiência de Custódia nas primeiras 24 horas.",
      "Possibilidade de Tráfico Privilegiado e substituição por penas alternativas.",
      "Direito ao silêncio e acompanhamento de advogado especialista desde o auto de flagrante."
    ],
    content: `A Lei de Drogas (Lei nº 11.343/06) é uma das áreas mais sensíveis do Direito Penal brasileiro. A caracterização da conduta imputada depende da análise do local da apreensão, quantidade de substância, condições em que se desenvolveu a ação policial e antecedentes do agente.

### Pontos fundamentais da atuação defensiva:
1. **Legalidade da Busca Pessoal e Domiciliar:** A jurisprudência dos Tribunais Superiores (STJ e STF) é pacífica de que denúncias anônimas isoladas não autorizam a invasão de domicílio sem mandado.
2. **Audiência de Custódia:** Momento essencial para requerer o relaxamento de prisão ilegal ou a concessão de liberdade provisória com aplicação de medidas cautelares diversas da prisão.
3. **Aplicação do Tráfico Privilegiado (§ 4º do art. 33):** Redução de pena substancial quando o acusado é primário, de bons antecedentes e não integra organização criminosa.`,
    category: "Lei de Drogas",
    isNew: true,
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-13",
    slug: "seguranca-juridica-em-contratos-imobiliarios-e-civeis",
    num: "13",
    title: "SEGURANÇA JURÍDICA EM CONTRATOS, DIREITO IMOBILIÁRIO E RESPONSABILIDADE CÍVEL",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    summary: "Negócios imobiliários, contratos civis e planejamento patrimonial exigem prevenção contra riscos de inadimplemento, rescisões e litígios judiciais.",
    keyPoints: [
      "Due diligence imobiliária completa antes da aquisição de bens.",
      "Cláusulas essenciais de proteção e rescisão contratual.",
      "Ações de despejo, posse, usucapião e regularização fundiária.",
      "Indenizações por danos materiais, morais e responsabilidade civil.",
      "Estratégia jurídica em disputas patrimoniais e sucessórias."
    ],
    content: `No âmbito do Direito Cível e Imobiliário, a atuação preventiva é a forma mais eficaz de resguardar o patrimônio familiar e empresarial.

### Áreas de destaque na atuação cível:
- **Contratos e Negócios Imobiliários:** Análise de certidões, riscos de evicção e elaboração de minutas personalizadas.
- **Responsabilidade Civil e Indenizações:** Reparação integral de prejuízos decorrentes de descumprimento contratual ou atos ilícitos.
- **Família e Sucessões:** Planejamento sucessório, inventários e partilhas com foco na preservação patrimonial e conciliação.`,
    category: "Núcleo Cível",
    isNew: true,
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  },
  {
    id: "artigo-14",
    slug: "direitos-do-paciente-e-vitimas-de-erro-medico",
    num: "14",
    title: "DEFESA DO PACIENTE: COMO AGIR DIANTE DE SUPOSTO ERRO MÉDICO OU FALHA HOSPITALAR",
    updatedAt: "23 de maio de 2025",
    coverUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    summary: "Pacientes e familiares têm direito a transparência, acesso integral ao prontuário médico e reparação em casos de negligência, imprudência ou imperícia em procedimentos de saúde.",
    keyPoints: [
      "Direito de obter cópia integral e legível do prontuário médico.",
      "Preservação de laudos, receitas, exames e comprovantes de atendimento.",
      "Diferença entre obrigação de meio e obrigação de resultado (ex: cirurgia plástica).",
      "Responsabilização nas esferas cível, criminal e ética perante o CRM.",
      "Assessoria jurídica especializada para condução técnica de perícias médicas."
    ],
    content: `Diante de um evento adverso ou complicações graves em ambiente hospitalar, o paciente ou sua família necessitam de amparo técnico imediato para resguardar evidências.

### Providências indispensáveis:
1. **Solicitação formal do Prontuário:** É dever legal do hospital fornecer a via completa no menor prazo possível.
2. **Perícia Técnica Independente:** Avaliação por especialistas para verificar se houve desvio dos protocolos médicos recomendados.
3. **Adoção de Medidas Judiciais:** Pedidos de custeio de tratamento reparador em tutela de urgência e indenizações correspondentes.`,
    category: "Defesa do Paciente",
    isNew: true,
    readTime: "4 min de leitura",
    author: {
      name: "Deyse Ramaiane",
      title: "Advocacia Estratégica",
      avatarUrl: dobra2Img
    }
  }
];

// Instância lazy do Firestore
let dbInstance: Firestore | null = null;


export const getStoredFirebaseConfig = (): FirebaseCustomConfig | null => {
  try {
    const raw = localStorage.getItem(FIREBASE_CONFIG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('Erro ao ler configuração do Firebase:', e);
  }
  return null;
};

export const saveFirebaseConfig = (config: FirebaseCustomConfig) => {
  localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(config));
  dbInstance = null; // reseta instância para reinicializar
};

const getDb = (): Firestore | null => {
  if (dbInstance) return dbInstance;

  const customConfig = getStoredFirebaseConfig();
  
  // Se não houver configuração salva, lê variáveis de ambiente ou usa as credenciais padrão do projeto ramaiane-blog
  const config = customConfig || {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAUC3x46U_CtyIdPk6woNnZjNbgSq8ZkIM",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ramaiane-blog.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ramaiane-blog",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ramaiane-blog.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "76799696653",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:76799696653:web:6f38a0dbb5e27b2b84da44"
  };

  if (!config.apiKey || !config.projectId) {
    return null; // Modo Local / Fallback ativo
  }

  try {
    const app = getApps().length === 0 ? initializeApp(config) : getApp();
    dbInstance = getFirestore(app);
    return dbInstance;
  } catch (err) {
    console.warn('Não foi possível conectar ao Firebase Firestore, utilizando armazenamento local:', err);
    return null;
  }
};

// Sanitiza o artigo garantindo todas as propriedades e tipos
export const sanitizeArticle = (art: any, index: number): BlogArticle => {
  const rawTitle = String(art?.title || `Artigo ${index + 1}`);
  const rawSlug = art?.slug ? String(art.slug) : generateSlug(rawTitle);

  return {
    id: String(art?.id || `artigo-${index + 1}`),
    slug: rawSlug,
    num: String(art?.num || String(index + 1).padStart(2, '0')),
    title: rawTitle,
    updatedAt: String(art?.updatedAt || 'Hoje'),
    coverUrl: String(art?.coverUrl || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'),
    summary: String(art?.summary || ''),
    keyPoints: Array.isArray(art?.keyPoints) ? art.keyPoints.map((p: any) => String(p)) : [],
    content: String(art?.content || ''),
    category: String(art?.category || 'Direito Penal Geral'),
    readTime: String(art?.readTime || '3 min de leitura'),
    isNew: Boolean(art?.isNew),
    author: {
      name: String(art?.author?.name || "Deyse Ramaiane"),
      title: String(art?.author?.title || "Advocacia Estratégica"),
      avatarUrl: art?.author?.avatarUrl || dobra2Img
    }
  };
};

// Helper para formatar a data atual em português
export const formatCurrentDate = (): string => {
  try {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${day} de ${month} de ${year}`;
  } catch (e) {
    return 'Hoje';
  }
};

const getRawLocalArticles = (): BlogArticle[] => {
  try {
    const localRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localRaw) {
      const parsed = JSON.parse(localRaw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((item, idx) => sanitizeArticle(item, idx));
      }
    }
  } catch (e) {
    console.warn('Erro ao ler do LocalStorage:', e);
  }
  return INITIAL_SEED_ARTICLES.map((item, idx) => sanitizeArticle(item, idx));
};

const saveLocalArticles = (articles: BlogArticle[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(articles));
  } catch (e) {
    console.warn('Erro ao salvar no LocalStorage:', e);
  }
};

// Funções de CRUD de Artigos
export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  const localArticles = getRawLocalArticles();
  const db = getDb();

  // 1. Se o Firebase estiver ativo, tenta buscar dele
  if (db) {
    try {
      const colRef = collection(db, 'articles');
      const q = query(colRef, orderBy('num', 'asc'));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const firestoreArticles: BlogArticle[] = [];
        let idx = 0;
        snapshot.forEach((docSnap) => {
          firestoreArticles.push(sanitizeArticle({
            id: docSnap.id,
            ...(docSnap.data() as Omit<BlogArticle, 'id'>)
          }, idx++));
        });

        // Mesclar para não perder artigos locais recém-criados ou editados
        const mergedMap = new Map<string, BlogArticle>();
        firestoreArticles.forEach(art => mergedMap.set(art.id, art));
        localArticles.forEach(art => {
          if (!mergedMap.has(art.id)) {
            mergedMap.set(art.id, art);
          }
        });

        const mergedList = Array.from(mergedMap.values());
        saveLocalArticles(mergedList);
        return mergedList;
      }
    } catch (err) {
      console.warn('Erro ao carregar do Firestore, utilizando cópia local:', err);
    }
  }

  // 2. Fallback: Lê do LocalStorage ou Inicializa com os Artigos Semente
  saveLocalArticles(localArticles);
  return localArticles;
};

export const createBlogArticle = async (article: Omit<BlogArticle, 'id'>): Promise<BlogArticle> => {
  const db = getDb();
  const createdId = `artigo-${Date.now()}`;
  const generatedSlug = article.slug || generateSlug(article.title);
  const updatedDate = article.updatedAt && article.updatedAt !== 'Hoje' ? article.updatedAt : formatCurrentDate();

  const newArticle: BlogArticle = {
    ...article,
    id: createdId,
    slug: generatedSlug,
    updatedAt: updatedDate
  };

  // 1. Salva imediatamente no LocalStorage
  const current = getRawLocalArticles();
  const updatedList = [newArticle, ...current];
  saveLocalArticles(updatedList);

  // 2. Salva no Firestore usando setDoc com o ID fixo
  if (db) {
    try {
      const docRef = doc(db, 'articles', createdId);
      await setDoc(docRef, newArticle);
    } catch (err) {
      console.warn('Erro ao salvar novo artigo no Firestore, mantido em cache local:', err);
    }
  }

  // Dispara evento para sincronizar a interface
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }

  return newArticle;
};

export const updateBlogArticle = async (id: string, updatedFields: Partial<BlogArticle>): Promise<void> => {
  const db = getDb();
  const currentDate = formatCurrentDate();

  const payloadToUpdate: Partial<BlogArticle> = {
    ...updatedFields,
    updatedAt: currentDate,
    ...(updatedFields.title ? { slug: generateSlug(updatedFields.title) } : {})
  };

  // 1. Atualiza imediatamente no LocalStorage
  const current = getRawLocalArticles();
  const updatedList = current.map(item => item.id === id ? { ...item, ...payloadToUpdate } : item);
  saveLocalArticles(updatedList);

  // 2. Tenta atualizar no Firestore se o DB estiver ativo
  if (db) {
    try {
      const docRef = doc(db, 'articles', id);
      await setDoc(docRef, payloadToUpdate, { merge: true });
    } catch (err) {
      console.warn('Erro ao atualizar artigo no Firestore, mantido em cache local:', err);
    }
  }

  // Dispara evento para atualizar a interface imediatamente
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }
};

export const deleteBlogArticle = async (id: string): Promise<void> => {
  const db = getDb();

  // 1. Remove imediatamente do LocalStorage
  const current = getRawLocalArticles();
  const updatedList = current.filter(item => item.id !== id);
  saveLocalArticles(updatedList);

  // 2. Tenta remover do Firestore se ativo
  if (db) {
    try {
      const docRef = doc(db, 'articles', id);
      await deleteDoc(docRef);
    } catch (err) {
      console.warn('Erro ao excluir artigo no Firestore:', err);
    }
  }

  // Dispara evento para atualizar a interface
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }
};
