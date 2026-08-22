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

// Limpa qualquer cache legado de artigos do localStorage
try {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ramaiane_blog_articles_v2');
    localStorage.removeItem('ramaiane_blog_deleted_ids_v2');
    localStorage.removeItem('ramaiane_blog_initialized_v2');
    localStorage.removeItem('ramaiane_blog_articles');
  }
} catch (e) {}

// Removidos todos os artigos semente de teste - Blog inicia 100% limpo
export const INITIAL_SEED_ARTICLES: BlogArticle[] = [];

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
    readTime: String(art?.readTime || '3 min de leitura'),
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

// Funções de CRUD de Artigos EXCLUSIVAS do Firebase Firestore (Sem Armazenamento Local)

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

    if (snapshot.empty) {
      return [];
    }

    const firestoreArticles: BlogArticle[] = [];
    let idx = 0;
    snapshot.forEach((docSnap) => {
      firestoreArticles.push(sanitizeArticle({
        id: docSnap.id,
        ...(docSnap.data() as Omit<BlogArticle, 'id'>)
      }, idx++));
    });

    return firestoreArticles;
  } catch (err) {
    console.error('Erro ao carregar artigos do Firestore:', err);
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
