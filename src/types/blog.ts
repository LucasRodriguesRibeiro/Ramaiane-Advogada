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

export interface FirebaseCustomConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
