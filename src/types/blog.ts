export interface BlogArticle {
  id: string;
  slug: string;
  num: string;
  title: string;
  updatedAt: string;
  coverUrl: string;
  summary: string;
  keyPoints: string[];
  content: string;
  category: string;
  author: {
    name: string;
    title: string;
    avatarUrl?: string;
  };
  isNew?: boolean;
  readTime?: string;
}

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // substitui espacos por hifens
    .replace(/-+/g, '-'); // remove hifens duplicados
};

export interface BlogMainArea {
  id: 'all' | 'criminal' | 'civel';
  label: string;
}

export const BLOG_MAIN_AREAS: BlogMainArea[] = [
  { id: 'all', label: 'TODOS' },
  { id: 'criminal', label: 'CRIMINAL' },
  { id: 'civel', label: 'CÍVEL' }
];

export const isArticleInMainArea = (article: BlogArticle, areaId: string): boolean => {
  if (areaId === 'all') return true;

  const normalize = (str: string) => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const cat = normalize(article.category || '');
  const title = normalize(article.title || '');
  const summary = normalize(article.summary || '');
  const content = normalize(article.content || '');

  if (areaId === 'civel') {
    const civelKeywords = ['civel', 'civil', 'imobiliario', 'familia', 'sucessoes', 'contrato', 'indenizacao', 'consumidor', 'imovel', 'patrimonio', 'responsabilidade civil', 'partilha', 'inventario', 'divorcio'];
    return civelKeywords.some(k => cat.includes(k) || title.includes(k) || summary.includes(k) || content.includes(k));
  }

  if (areaId === 'criminal') {
    const criminalKeywords = ['criminal', 'penal', 'urgencia', 'flagrante', 'prisao', 'intimacao', 'busca', 'inquerito', 'juri', 'droga', 'digital', 'medico', 'saude', 'empresarial', 'militar', 'seguranca', 'fraude', 'habeas corpus', 'tributario', 'custodia', 'homicidio', 'pacote anticrime'];
    return criminalKeywords.some(k => cat.includes(k) || title.includes(k) || summary.includes(k) || content.includes(k));
  }

  return true;
};

export interface FirebaseCustomConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

