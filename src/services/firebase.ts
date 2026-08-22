import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  deleteDoc, 
  setDoc,
  doc, 
  query, 
  orderBy,
  Firestore
} from 'firebase/firestore';
import { BlogArticle, FirebaseCustomConfig, generateSlug } from '../types/blog';
export type { FirebaseCustomConfig };
import dobra2Img from '../assets/images/dobra2.jpeg';

const FIREBASE_CONFIG_KEY = 'ramaiane_firebase_config_v1';
const LOCAL_ARTICLES_KEY = 'ramaiane_blog_articles_v4';

// 8 Artigos completos sobre as principais áreas de atuação da Dra. Deyse Ramaiane
export const INITIAL_SEED_ARTICLES: BlogArticle[] = [
  {
    id: 'artigo-01-prisao-flagrante-habeas-corpus',
    slug: 'prisao-em-flagrante-e-habeas-corpus-de-urgencia',
    num: '01',
    title: 'Prisão em Flagrante e Habeas Corpus de Urgência: Garantias Fundamentais na Defesa Criminal',
    updatedAt: '22 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    summary: 'Entenda os direitos constitucionais e as medidas defensivas imediatas em casos de prisão em flagrante, audiência de custódia e impetração de Habeas Corpus com pedido liminar.',
    keyPoints: [
      'Direito constitucional ao silêncio e assistência defensiva imediata desde o auto de prisão.',
      'Requisitos estritos de legalidade da prisão e hipóteses de relaxamento por ilegalidade.',
      'Audiência de custódia como instrumento de verificação de abusos e concessão de liberdade provisória.',
      'Habeas Corpus de urgência com pedido liminar para coibir constrangimento ilegal.'
    ],
    content: `A prisão em flagrante constitui um dos momentos mais críticos e delicados do processo penal. No exato instante da abordagem policial e da lavratura do Auto de Prisão em Flagrante (APF), garantias constitucionais basilares entram em jogo para resguardar a integridade física, moral e a liberdade de locomoção do investigado.\n\n### O Direito ao Silêncio e a Assistência Técnica Imediata\nO artigo 5º, inciso LXIII, da Constituição Federal assegura que o preso será informado de seus direitos, entre os quais o de permanecer em silêncio, sendo-lhe assegurada a assistência da família e de advogado. A presença de uma advocacia criminal especializada desde as primeiras horas na delegacia é determinante para evitar violações de direitos, coações ou confissões extrajudiciais indevidas.\n\n### Audiência de Custódia e Controle de Legalidade\nCom a obrigatoriedade da realização da Audiência de Custódia em até 24 horas após a prisão, o autuado deve ser apresentado à autoridade judicial. Nessa ocasião, a defesa técnica atua para demonstrar eventual ilegalidade do flagrante (ensejando o relaxamento da prisão) ou a ausência dos requisitos da prisão preventiva (artigo 312 do Código de Processo Penal), postulando a concessão de liberdade provisória com ou sem medidas cautelares diversas da prisão.\n\n### Habeas Corpus com Pedido Liminar\nNos casos em que a prisão preventiva é decretada de forma genérica, desprovida de fundamentação concreta ou em evidente desproporcionalidade, a impetração de Habeas Corpus com pedido liminar perante os Tribunais de Justiça ou Tribunais Regionais Federais revela-se a medida jurídica cabível para reestabelecer a liberdade do cidadão de forma célere.`,
    category: 'Investigações, Prisões e Operações Policiais',
    readTime: '5 min de leitura',
    isNew: true,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-02-trafico-drogas-desclassificacao',
    slug: 'trafico-de-drogas-e-inviolabilidade-do-domicilio',
    num: '02',
    title: 'Lei de Drogas: Tese de Desclassificação, Inviolabilidade do Domicílio e Prova Ilegal',
    updatedAt: '21 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
    summary: 'Uma análise técnica sobre nulidades em investigações por tráfico de drogas, a ilicitude da busca domiciliar sem fundada suspeita e a desclassificação para porte de drogas para consumo pessoal.',
    keyPoints: [
      'Jurisprudência do STJ e STF acerca da exigência de fundadas razões para ingresso domiciliar policial.',
      'Critérios objetivos e subjetivos para a diferenciação entre tráfico (art. 33) e posse para uso pessoal (art. 28).',
      'Aplicação da causa de diminuição de pena do Tráfico Privilegiado (§ 4º do art. 33).',
      'Teoria dos Frutos da Árvore Envenenada e anulação de provas ilícitas.'
    ],
    content: `A atuação defensiva em processos envolvendo a Lei de Drogas (Lei nº 11.343/2006) exige um exame minucioso e criterioso dos procedimentos policiais que culminaram na prisão e apreensão de substâncias entorpecentes.\n\n### Inviolabilidade Domiciliar e Provas Ilícitas\nO Superior Tribunal de Justiça (STJ) e o Supremo Tribunal Federal (STF) firmaram entendimento consolidado de que o ingresso de policiais em residência, sem mandado judicial, exige a demonstração prévia de fundadas razões que indiquem a prática de crime permanente no local. Denúncias anônimas isoladas ou a simples "atitude suspeita" não justificam a mitigação da garantia constitucional da inviolabilidade do domicílio (art. 5º, XI, CF). Provas colhidas em desconformidade com esse preceito são nulas de pleno direito.\n\n### Desclassificação de Tráfico para Porte para Consumo Pessoal\nFrequentemente, a quantidade de substância ou a presença de utensílios de uso pessoal são erroneamente interpretadas como indícios de traficância. A defesa técnica atua para demonstrar a ausência de intenção de mercancia, pugnando pela desclassificação do tipo penal do artigo 33 para o artigo 28 da Lei de Drogas, o que afasta o caráter hediondo e as penas privativas de liberdade severas.\n\n### Tráfico Privilegiado (§ 4º do Artigo 33)\nNos casos em que o acusado é primário, detém bons antecedentes, não se dedica às atividades criminosas nem integra organização criminosa, é imperativa a aplicação da minorante do tráfico privilegiado, garantindo redução expressiva de pena e a possibilidade de fixação de regime aberto ou substituição por penas restritivas de direitos.`,
    category: 'Tráfico de Drogas',
    readTime: '6 min de leitura',
    isNew: true,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-03-penal-empresarial-e-tributario',
    slug: 'direito-penal-empresarial-crimes-tributarios-e-compliance',
    num: '03',
    title: 'Direito Penal Empresarial: Defesa Estratégica em Crimes Tributários e Econômicos',
    updatedAt: '20 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    summary: 'Como resguardar sócios, diretores e administradores de empresas em processos penais econômicos, denúncias genéricas e acusações por sonegação fiscal.',
    keyPoints: [
      'Inadmissibilidade da responsabilidade penal objetiva no âmbito corporativo.',
      'Necessidade de individualização da conduta de cada gestor na denúncia oferecida pelo Ministério Público.',
      'Extinção da punibilidade pelo parcelamento ou quitação do débito tributário.',
      'Implementação de programas de Compliance Penal e prevenção de riscos corporativos.'
    ],
    content: `O crescimento das operações policiais voltadas a crimes do colarinho branco e delitos financeiros colocou os empresários e gestores corporativos sob constante escrutínio do Ministério Público e dos órgãos de fiscalização estatal.\n\n### O Abuso das Denúncias Genéricas contra Administradores\nNo Direito Penal brasileiro vige o princípio do elemento subjetivo (dolo ou culpa), sendo absolutamente vedada a responsabilidade penal objetiva. Denúncias que atribuem crimes a sócios ou diretores apenas por figurarem no contrato social da empresa ferem frontalmente o artigo 41 do Código de Processo Penal. A defesa técnica atua trancando ações penais pautadas em acusações genéricas que não descrevem o nexo causal específico entre a conduta do empresário e o resultado ilícito alegado.\n\n### Crimes Contra a Ordem Tributária (Lei 8.137/90)\nNos delitos de sonegação fiscal, a jurisprudência sumulada do STF (Súmula Vinculante 24) estabelece que o crime material contra a ordem tributária não se tipifica antes do lançamento definitivo do crédito tributário. Ademais, o pagamento integral do tributo a qualquer tempo, ou o seu parcelamento antes do recebimento da denúncia, pode suspender a pretensão punitiva ou extinguir a punibilidade da empresa e de seus dirigentes.\n\n### Gestão de Riscos e Investigação Defensiva\nA atuação preventiva por meio do Compliance Penal possibilita auditorias internas e mapeamento de riscos para blindar a pessoa jurídica. Em caso de instaurado inquérito, a Investigação Defensiva (Provimento 188/2018 da OAB) permite à advocacia colher elementos probatórios prévios para esclarecer os fatos perante as autoridades competentes.`,
    category: 'Crimes Empresariais',
    readTime: '5 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-04-tribunal-do-juri-defesa',
    slug: 'tribunal-do-juri-teses-defensivas-e-producao-probatoria',
    num: '04',
    title: 'Tribunal do Júri: A Construção da Tese Defensiva da Pronúncia ao Plenário',
    updatedAt: '19 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=800&q=80',
    summary: 'Entenda a estrutura bifásica do Tribunal do Júri, as teses de legítima defesa, desqualificação e absolvição sumária, e a oratória no Plenário.',
    keyPoints: [
      'Fase do Judicium Accusationis (sumário da culpa) e critérios para impronúncia ou absolvição sumária.',
      'Reconstrução fática através de perícias técnicas assistenciais e oitiva estratégica de testemunhas.',
      'Teses defensivas centrais: legítima defesa, ausência de dolo (desclassificação) e legítima defesa de terceiros.',
      'Atuação firme e persuasiva no Plenário do Júri perante o Conselho de Sentença.'
    ],
    content: `O procedimento especial do Tribunal do Júri é destinado ao julgamento dos crimes dolosos contra a vida (homicídio, feminicídio, infanticídio, induzimento ao suicídio e aborto). Trata-se de um rito bifásico e de complexidade ímpar na advocacia criminal.\n\n### A Primeira Fase: Sumário da Culpa (Judicium Accusationis)\nNa primeira fase do procedimento, perante o juiz togado, busca-se averiguar se existem indícios suficientes de autoria e prova da materialidade que justifiquem a remessa do réu a julgamento popular. É o momento oportuno para postular a Absolvição Sumária (art. 415, CPP), a Impronúncia por fragilidade probatória (art. 414, CPP) ou a Desclassificação para crime diverso da competência do Júri (como lesão corporal seguida de morte).\n\n### A Segunda Fase: O Plenário do Júri (Judicium Causae)\nFormado o Conselho de Sentença por sete jurados leigos, a tese defensiva deve ser exposta de forma clara, técnica e emocionalmente coesa. O advogado criminalista não se limita a rebater os argumentos acusatórios; ele reconstrói a dinâmica dos fatos à luz das provas periciais, balísticas, necroscópicas e testemunhais colhidas ao longo do processo.\n\n### A Quesitação e a Absolvição pelo Quesito Genérico\nCom a reforma do Código de Processo Penal, os jurados respondem ao quesito genérico: *"O jurado absolve o acusado?"*. Esse mecanismo garante ao Conselho de Sentença a liberdade de absolver o acusado com base em qualquer tese defensiva sustentada em plenário, seja fundada em excludentes de ilicitude, excludentes de culpabilidade ou razões de equidade e humanidade.`,
    category: 'Tribunal do Júri',
    readTime: '7 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-05-crimes-digitais-prova-eletronica',
    slug: 'crimes-digitais-quebra-de-sigilo-e-cadeia-de-custodia-digital',
    num: '05',
    title: 'Crimes Digitais: Cadeia de Custódia da Prova Eletrônica e Validade Jurídica',
    updatedAt: '18 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    summary: 'Uma análise das ilegalidades na obtenção de prints, espelhamento de mensagens e quebra de sigilo telemático sem o estrito cumprimento da cadeia de custódia.',
    keyPoints: [
      'Nulidade de prints de WhatsApp e capturas de tela desprovidas de preservação hash/notarial.',
      'Jurisprudência do STJ sobre a invalidade do WhatsApp Web como prova acusatória sem auditoria.',
      'A importância da observância dos artigos 158-A a 158-F do CPP (Cadeia de Custódia).',
      'Defesa em acusações por invasão de dispositivo, fraudes eletrônicas e estelionato digital.'
    ],
    content: `Com o avanço da tecnologia e a migração de relações interpessoais e financeiras para o ambiente cibernético, a utilização de dados digitais como prova em investigações criminais tornou-se omnipresente. Todavia, a volatilidade dos dados virtuais exige rigor técnico absoluto para que tenham validade jurídica.\n\n### A Cadeia de Custódia da Prova Digital (Artigos 158-A a 158-F do CPP)\nInserida pela Lei nº 13.964/2019 (Pacote Anticrime), a cadeia de custódia disciplina todo o procedimento de fixação, coleta, acondicionamento, transporte e preservação de evidências. No ambiente digital, o descumprimento do registro do código HASH de arquivos eletrônicos inviabiliza a verificação de que o documento não sofreu alteração ou adulteração posterior.\n\n### Inadmissibilidade de "Prints" e Capturas de Tela Simples\nO Superior Tribunal de Justiça sedimentou o entendimento de que simples capturas de tela (prints) de aplicativos de mensagens instantâneas (como WhatsApp ou Telegram) não possuem valor probatório autônomo, pois são facilmente passíveis de manipulação, exclusão de conversas de forma unilateral ou edições fraudulentas sem deixar vestígios visíveis a olho nu.\n\n### Acesso a Celulares sem Autorização Judicial\nO acesso por agentes policiais ao conteúdo armazenado em smartphones (mensagens, fotos, histórico de navegação) apreendidos por ocasião de prisão em flagrante depende de expressa e comprovada autorização do titular ou de prévia ordem judicial fundamentada. A obtenção compulsória desses dados sem mandado contamina de nulidade irremediável toda a investigação subsequente.`,
    category: 'Crimes Digitais',
    readTime: '5 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-06-penal-medico-responsabilidade',
    slug: 'direito-penal-medico-defesa-em-suposto-erro-medico',
    num: '06',
    title: 'Direito Penal Médico: Defesa Técnica em Investigação por Suposto Erro Médico',
    updatedAt: '17 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    summary: 'Atuação especializada na defesa de médicos, profissionais de saúde e hospitais em inquéritos policiais e denúncias por homicídio culposo ou lesão corporal culposa.',
    keyPoints: [
      'Diferenciação entre iatrogenia, complicação terapêutica previsível e negligência/imprudência/imperícia.',
      'Produção de prova pericial médico-legal com assistente técnico especializado.',
      'Sigilo profissional, prontuário médico e limites de requisição policial.',
      'Atuação concomitante na esfera ético-disciplinar (CRM) e penal.'
    ],
    content: `A prática da medicina envolve riscos inerentes à própria complexidade biológica do ser humano. Contudo, quando um resultado adverso ocorre em ambiente hospitalar ou ambulatorial, a instauração de Inquéritos Policiais por lesão corporal culposa ou homicídio culposo gera imenso desgaste reputacional e pessoal para o profissional de saúde.\n\n### Imprudência, Negligência e Imperícia x Complicação Médica\nPara a caracterização do crime culposo, exige-se a demonstração indiscutível da quebra do dever objetivo de cuidado traduzida em imperícia (falta de conhecimento técnico), negligência (omissão de cautela necessária) ou imprudência (ação afoita). Complicações descritas na literatura médica, reações idiossincráticas do paciente ou o agravamento natural da enfermidade não configuram infração penal.\n\n### A Importância do Prontuário Médico e da Assistência Técnica Pericial\nO prontuário médico adequadamente preenchido é o principal elemento probatório defensivo. Na fase instrutória ou investigativa, a atuação conjunta da advocacia criminal com um médico assistente técnico é indispensável para formular quesitos periciais precisos perante o Instituto Médico Legal (IML), afastando conclusões periciais genéricas ou equivocadas.\n\n### Defesa Integrada Penal e Ético-Profissional\nProcessos criminais contra médicos frequentemente correm em paralelo com processos ético-disciplinares nos Conselhos Regionais de Medicina (CRM). A estratégia defensiva deve ser rigorosamente alinhada em ambas as instâncias para evitar contradições e assegurar a manutenção da inscrição profissional e do exercício regular da medicina.`,
    category: 'Direito Penal Médico',
    readTime: '4 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-07-responsabilidade-civil-indenizacoes',
    slug: 'responsabilidade-civil-contratos-e-acoes-indenizatorias',
    num: '07',
    title: 'Responsabilidade Civil e Indenizações: Segurança Contratual e Reparação de Danos',
    updatedAt: '16 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    summary: 'Direitos do lesado e defesas estratégicas em ações de reparação de danos morais, materiais, lucros cessantes e inadimplemento contratual.',
    keyPoints: [
      'Requisitos da responsabilidade civil: conduta, nexo causal, dano e elemento subjetivo.',
      'Distinção entre danos morais in re ipsa e necessidade de comprovação de prejuízos patrimoniais.',
      'Elaboração e revisão contratual preventiva para mitigação de litígios.',
      'Ações de execução de títulos, cobrança e recuperação de créditos inadimplidos.'
    ],
    content: `O Direito Civil disciplina a convivência social, as obrigações patrimoniais e a reparação de prejuízos causados por vícios contratuais, descumprimentos de acordos ou atos ilícitos.\n\n### Elementos Fundamentais da Responsabilidade Civil\nPara o dever de indenizar nos termos dos artigos 186 e 927 do Código Civil, faz-se necessária a coexistência de três elementos essenciais: a conduta humana (omissiva ou comissiva), o dano efetivo sofrido pela vítima (patrimonial, moral ou estético) e o nexo de causalidade direto entre ambos.\n\n### Danos Morais, Materiais e Lucros Cessantes\nOs danos materiais dividem-se em danos emergentes (o que efetivamente se perdeu) e lucros cessantes (o que razoavelmente se deixou de lucrar em virtude da paralisação da atividade). Já o dano moral atinge direitos da personalidade, como a honra, imagem, intimidade e integridade psíquica. A mensuração de valores indenizatórios exige fundamentação alicerçada nos princípios da razoabilidade e proporcionalidade.\n\n### Advocacia Contratual Estratégica\nA maioria dos litígios cíveis decorre de cláusulas contratuais ambíguas ou omissas. A atuação consultiva elabora instrumentos jurídicos personalizados com garantias reais, cláusulas penais resolutivas e regras transparentes de rescisão, prevenindo demandas judiciais demoradas e assegurando a pronta recuperação de créditos.`,
    category: 'Responsabilidade Civil e Indenizações',
    readTime: '5 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
      avatarUrl: dobra2Img
    }
  },
  {
    id: 'artigo-08-familia-sucessoes-planejamento-patrimonial',
    slug: 'planejamento-patrimonial-sucessorio-divorcio-e-partilha-de-bens',
    num: '08',
    title: 'Direito de Família e Sucessões: Divórcio, Partilha de Bens e Planejamento Sucessório',
    updatedAt: '15 de agosto de 2026',
    coverUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    summary: 'Soluções jurídicas estratégicas para divórcio consensual ou litigioso, guarda de filhos, inventário extrajudicial e proteção do patrimônio familiar.',
    keyPoints: [
      'Aspectos práticos e patrimoniais do divórcio e dissolução de união estável conforme o regime de bens.',
      'Guarda compartilhada, convivência e fixação proporcional de pensão alimentícia.',
      'Inventário extrajudicial em cartório (Lei 11.441/07) para agilização da partilha da herança.',
      'Planejamento sucessório familiar: doação com reserva de usufruto e estruturação patrimonial.'
    ],
    content: `O Direito de Família e Sucessões envolve questões jurídicas de alto impacto emocional e patrimonial, exigindo do profissional um atendimento técnico, empático e resolutivo.\n\n### Divórcio e Partilha de Bens\nSeja pela via consensual (extrajudicial ou judicial) ou litigiosa, o divórcio põe fim ao vínculo conjugal e impõe a partilha dos bens acumulados durante o casamento, conforme o regime adotado (comunhão parcial, comunhão universal ou separação total de bens). A correta avaliação de haveres societários, imóveis e investimentos garante uma divisão justa sem sonegação de ativos.\n\n### Guarda, Convivência e Pensão Alimentícia\nEm relação aos filhos menores, a regra geral do ordenamento jurídico brasileiro é a guarda compartilhada, visando manter a convivência equilibrada com ambos os genitores. A pensão alimentícia é arbitrada observando o binômio necessidade (do alimentando) e possibilidade (do alimentante), podendo ser revista a qualquer tempo diante da alteração da situação financeira das partes.\n\n### Inventário e Planejamento Sucessório\nO falecimento de um ente querido exige a abertura do inventário para transmissão regular da herança aos herdeiros legítimos e testamentários. Sempre que houver concordância entre herdeiros capazes e ausência de testamento, o inventário pode ser realizado de forma célere em Tabelionato de Notas. Adicionalmente, o Planejamento Sucessório preventivo permite organizar a transmissão dos bens em vida, reduzindo custos tributários (ITCMD) e evitando disputas judiciais futuras.`,
    category: 'Família e Sucessões',
    readTime: '6 min de leitura',
    isNew: false,
    author: {
      name: 'Deyse Ramaiane',
      title: 'Advocacia Estratégica',
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
  
  const config = customConfig || {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAUC3x46U_CtyIdPk6woNnZjNbgSq8ZkIM",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ramaiane-blog.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ramaiane-blog",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ramaiane-blog.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "76799696653",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:76799696653:web:6f38a0dbb5e27b2b84da44"
  };

  if (!config.apiKey || !config.projectId) {
    return null;
  }

  try {
    const app = getApps().length === 0 ? initializeApp(config) : getApp();
    dbInstance = getFirestore(app);
    return dbInstance;
  } catch (err) {
    console.error('Erro ao conectar ao Firebase Firestore:', err);
    return null;
  }
};

// Sanitiza o artigo garantindo todas as propriedades e tipos
export const sanitizeArticle = (art: any, index: number): BlogArticle => {
  const rawTitle = String(art?.title || `Artigo ${index + 1}`);
  const rawSlug = art?.slug ? String(art.slug) : generateSlug(rawTitle);

  return {
    id: String(art?.id || `artigo-${Date.now()}-${index + 1}`),
    slug: rawSlug,
    num: String(art?.num || String(index + 1).padStart(2, '0')),
    title: rawTitle,
    updatedAt: String(art?.updatedAt || 'Hoje'),
    coverUrl: String(art?.coverUrl || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'),
    summary: String(art?.summary || ''),
    keyPoints: Array.isArray(art?.keyPoints) ? art.keyPoints.map((p: any) => String(p)) : [],
    content: String(art?.content || ''),
    category: String(art?.category || 'Direito Penal Geral'),
    readTime: String(art?.readTime || '4 min de leitura'),
    isNew: Boolean(art?.isNew),
    author: {
      name: String(art?.author?.name || "Deyse Ramaiane"),
      title: String(art?.author?.title || "Advocacia Estratégica"),
      avatarUrl: art?.author?.avatarUrl || dobra2Img
    }
  };
};

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

// Limpeza de qualquer cache local remanescente no localStorage
try {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ramaiane_blog_articles_v4');
    localStorage.removeItem('ramaiane_blog_articles_v3');
    localStorage.removeItem('ramaiane_blog_articles_v2');
    localStorage.removeItem('ramaiane_blog_deleted_ids_v2');
    localStorage.removeItem('ramaiane_blog_initialized_v2');
    localStorage.removeItem('ramaiane_blog_articles');
  }
} catch (e) {}

// Funções de CRUD de Artigos EXCLUSIVAS do Banco de Dados Firebase Firestore (Sem Armazenamento Local)

export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  const db = getDb();
  if (!db) {
    console.warn('Firebase Firestore não está conectado.');
    return [];
  }

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

      return firestoreArticles;
    } else {
      // Coleção no Banco de Dados vazia: insere os 8 artigos das áreas de atuação diretamente no Firestore
      console.log('Banco de Dados vazio. Semeando 8 artigos no Firestore...');
      let idx = 0;
      for (const art of INITIAL_SEED_ARTICLES) {
        const sanitized = sanitizeArticle(art, idx++);
        const docRef = doc(db, 'articles', sanitized.id);
        await setDoc(docRef, sanitized);
      }
      return INITIAL_SEED_ARTICLES;
    }
  } catch (err) {
    console.error('Erro ao buscar artigos do Banco de Dados (Firestore):', err);
    return [];
  }
};

export const createBlogArticle = async (article: Omit<BlogArticle, 'id'>): Promise<BlogArticle> => {
  const db = getDb();
  if (!db) {
    throw new Error('Firebase Firestore não está conectado.');
  }

  const createdId = `artigo-${Date.now()}`;
  const generatedSlug = article.slug || generateSlug(article.title);
  const updatedDate = article.updatedAt && article.updatedAt !== 'Hoje' ? article.updatedAt : formatCurrentDate();

  const newArticle: BlogArticle = {
    ...article,
    id: createdId,
    slug: generatedSlug,
    updatedAt: updatedDate
  };

  const docRef = doc(db, 'articles', createdId);
  await setDoc(docRef, newArticle);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }

  return newArticle;
};

export const updateBlogArticle = async (id: string, updatedFields: Partial<BlogArticle>): Promise<void> => {
  const db = getDb();
  if (!db) {
    throw new Error('Firebase Firestore não está conectado.');
  }

  const currentDate = formatCurrentDate();
  const payloadToUpdate: Partial<BlogArticle> = {
    ...updatedFields,
    updatedAt: currentDate,
    ...(updatedFields.title ? { slug: generateSlug(updatedFields.title) } : {})
  };

  const docRef = doc(db, 'articles', id);
  await setDoc(docRef, payloadToUpdate, { merge: true });

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }
};

export const deleteBlogArticle = async (id: string): Promise<void> => {
  const db = getDb();
  if (!db) {
    throw new Error('Firebase Firestore não está conectado.');
  }

  const docRef = doc(db, 'articles', id);
  await deleteDoc(docRef);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('articlesUpdated'));
  }
};

