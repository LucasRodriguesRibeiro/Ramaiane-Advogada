import React, { useState, useEffect } from 'react';
import { 
  X, 
  Database, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles, 
  UploadCloud,
  Code
} from 'lucide-react';
import { 
  FirebaseCustomConfig, 
  getStoredFirebaseConfig, 
  saveFirebaseConfig,
  INITIAL_SEED_ARTICLES,
  sanitizeArticle
} from '../services/firebase';
import { initializeApp, deleteApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

interface FirebaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const FirebaseConfigModal: React.FC<FirebaseConfigModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [rawCodeInput, setRawCodeInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [authDomain, setAuthDomain] = useState('');
  const [projectId, setProjectId] = useState('');
  const [storageBucket, setStorageBucket] = useState('');
  const [messagingSenderId, setMessagingSenderId] = useState('');
  const [appId, setAppId] = useState('');

  const [isTesting, setIsTesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);
  const [autoSeed, setAutoSeed] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const stored = getStoredFirebaseConfig();
      if (stored) {
        setApiKey(stored.apiKey || '');
        setAuthDomain(stored.authDomain || '');
        setProjectId(stored.projectId || '');
        setStorageBucket(stored.storageBucket || '');
        setMessagingSenderId(stored.messagingSenderId || '');
        setAppId(stored.appId || '');
      }
      setStatusMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Tenta extrair chaves de um bloco de código de configuração do Firebase colado pelo usuário
  const handleParseRawCode = (code: string) => {
    setRawCodeInput(code);
    if (!code.trim()) return;

    try {
      const extractKey = (keyName: string) => {
        const regex = new RegExp(`${keyName}\\s*:\\s*["']([^"']+)["']`, 'i');
        const match = code.match(regex);
        return match ? match[1] : '';
      };

      const extractedApiKey = extractKey('apiKey');
      const extractedAuthDomain = extractKey('authDomain');
      const extractedProjectId = extractKey('projectId');
      const extractedStorageBucket = extractKey('storageBucket');
      const extractedSenderId = extractKey('messagingSenderId');
      const extractedAppId = extractKey('appId');

      if (extractedApiKey || extractedProjectId) {
        if (extractedApiKey) setApiKey(extractedApiKey);
        if (extractedAuthDomain) setAuthDomain(extractedAuthDomain);
        if (extractedProjectId) setProjectId(extractedProjectId);
        if (extractedStorageBucket) setStorageBucket(extractedStorageBucket);
        if (extractedSenderId) setMessagingSenderId(extractedSenderId);
        if (extractedAppId) setAppId(extractedAppId);

        setStatusMessage({
          type: 'info',
          text: 'Chaves extraídas com sucesso do código colado! Clique em "Testar e Conectar Firebase".'
        });
      }
    } catch (e) {
      console.warn('Erro ao ler código extraído:', e);
    }
  };

  const handleTestAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim() || !projectId.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Por favor, preencha pelo menos a API Key e o Project ID do seu projeto Firebase.'
      });
      return;
    }

    setIsTesting(true);
    setStatusMessage({ type: 'info', text: 'Testando conexão com o Firebase Firestore...' });

    const config: FirebaseCustomConfig = {
      apiKey: apiKey.trim(),
      authDomain: authDomain.trim(),
      projectId: projectId.trim(),
      storageBucket: storageBucket.trim(),
      messagingSenderId: messagingSenderId.trim(),
      appId: appId.trim()
    };

    let tempApp: any = null;
    try {
      // Cria instância temporária de teste com appName único
      const testAppName = `test-app-${Date.now()}`;
      tempApp = initializeApp(config, testAppName);
      const testDb = getFirestore(tempApp);

      // Tenta consultar a coleção 'articles' no Firestore
      const colRef = collection(testDb, 'articles');
      const snapshot = await getDocs(colRef);

      let seedCount = 0;
      // Se a coleção estiver vazia e a opção autoSeed estiver ligada, insere os artigos iniciais no Firestore
      if (snapshot.empty && autoSeed) {
        setStatusMessage({ type: 'info', text: 'Conexão confirmada! Semeando artigos iniciais no Firestore...' });
        for (const art of INITIAL_SEED_ARTICLES) {
          const sanitized = sanitizeArticle(art, seedCount);
          const docRef = doc(testDb, 'articles', sanitized.id);
          await setDoc(docRef, sanitized);
          seedCount++;
        }
      }

      // Deleta app temporário
      await deleteApp(tempApp);

      // Salva no localStorage e reseta instância global
      saveFirebaseConfig(config);

      setStatusMessage({
        type: 'success',
        text: `Conexão bem-sucedida! Projeto Firebase "${config.projectId}" conectado com sucesso. ${seedCount > 0 ? `${seedCount} artigos iniciais salvos na nuvem.` : ''}`
      });

      setTimeout(() => {
        onSuccess();
        onClose();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('articlesUpdated'));
        }
      }, 1500);

    } catch (err: any) {
      console.error('Erro ao conectar ao Firebase:', err);
      if (tempApp) {
        try { await deleteApp(tempApp); } catch (e) {}
      }

      const errMsg = err?.message || String(err);
      if (errMsg.includes('permission-denied') || errMsg.includes('insufficient permissions')) {
        setStatusMessage({
          type: 'error',
          text: 'Conexão efetuada, mas as regras de segurança do seu Firestore bloquearam a leitura/escrita. Ajuste as regras no Firebase Console para permitir leitura/escrita (allow read, write: if true;).'
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: `Erro de conexão: ${errMsg}. Verifique a API Key e o Project ID.`
        });
      }
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 pb-4 border-b border-[#252830] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#16171C] border border-[#B8BBC0]/40 flex items-center justify-center text-[#F7F7F5]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-xl font-normal uppercase tracking-wide">
                Conectar Banco Firebase
              </h2>
              <p className="text-xs text-[#B8BBC0] font-light">
                Vincule o blog da Dra. Deyse Ramaiane ao seu banco de dados Firebase Firestore
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#B8BBC0] hover:text-[#F7F7F5] rounded-full hover:bg-[#18191B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[calc(85vh-120px)] overflow-y-auto custom-scrollbar">

          {/* Quick Paste Code Box */}
          <div className="p-4 rounded-xl bg-[#14151B] border border-[#252830] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#E2E4E8] uppercase tracking-wider">
              <span className="flex items-center space-x-1.5">
                <Code className="w-4 h-4 text-[#B8BBC0]" />
                <span>Cole o código de configuração do Firebase (Opcional)</span>
              </span>
              <span className="text-[10px] text-[#8F9299]">Auto-preenchimento</span>
            </div>
            <p className="text-[11px] text-[#8F9299]">
              No Firebase Console (Configurações do Projeto &gt; Seu aplicativo web), copie o objeto <code className="text-[#E2E4E8]">const firebaseConfig = &#123; ... &#125;</code> e cole abaixo:
            </p>
            <textarea
              rows={3}
              value={rawCodeInput}
              onChange={(e) => handleParseRawCode(e.target.value)}
              placeholder={`const firebaseConfig = {\n  apiKey: "AIzaSy...",\n  projectId: "ramaiane-blog",\n  ...\n};`}
              className="w-full p-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-[11px] font-mono text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none custom-scrollbar"
            />
          </div>

          {/* Manual Form */}
          <form onSubmit={handleTestAndSave} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  PROJECT ID *
                </label>
                <input
                  type="text"
                  required
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  placeholder="ex: ramaiane-advogada-blog"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  API KEY *
                </label>
                <input
                  type="text"
                  required
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="ex: AIzaSy..."
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  AUTH DOMAIN
                </label>
                <input
                  type="text"
                  value={authDomain}
                  onChange={(e) => setAuthDomain(e.target.value)}
                  placeholder="ex: projeto.firebaseapp.com"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  STORAGE BUCKET
                </label>
                <input
                  type="text"
                  value={storageBucket}
                  onChange={(e) => setStorageBucket(e.target.value)}
                  placeholder="ex: projeto.appspot.com"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  MESSAGING SENDER ID
                </label>
                <input
                  type="text"
                  value={messagingSenderId}
                  onChange={(e) => setMessagingSenderId(e.target.value)}
                  placeholder="ex: 1234567890"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  APP ID
                </label>
                <input
                  type="text"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                  placeholder="ex: 1:12345:web:abcdef"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>
            </div>

            {/* Checkbox auto-seed */}
            <div className="flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="autoSeed"
                checked={autoSeed}
                onChange={(e) => setAutoSeed(e.target.checked)}
                className="w-4 h-4 rounded bg-[#07080A] border-[#2D3039] text-[#E5E7EB] focus:ring-0 cursor-pointer"
              />
              <label htmlFor="autoSeed" className="text-xs text-[#B8BBC0] cursor-pointer flex items-center space-x-1.5">
                <UploadCloud className="w-3.5 h-3.5 text-[#B8BBC0]" />
                <span>Se o banco estiver vazio, carregar automaticamente os artigos iniciais</span>
              </label>
            </div>

            {/* Status Alert Banner */}
            {statusMessage && (
              <div className={`p-3.5 rounded-lg border text-xs flex items-start space-x-2.5 ${
                statusMessage.type === 'success' 
                  ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300'
                  : statusMessage.type === 'error'
                  ? 'bg-red-950/40 border-red-800/50 text-red-300'
                  : 'bg-blue-950/40 border-blue-800/50 text-blue-300'
              }`}>
                {statusMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />}
                {statusMessage.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                {statusMessage.type === 'info' && <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />}
                <div className="flex-1 font-light leading-relaxed">
                  {statusMessage.text}
                </div>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-[#252830] flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-md text-xs font-semibold text-[#B8BBC0] hover:text-white bg-[#18191B] hover:bg-[#202228] transition-colors cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isTesting}
                className="py-3 px-6 rounded-md text-xs font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all shadow-md flex items-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isTesting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Conectando...</span>
                  </>
                ) : (
                  <>
                    <Database className="w-4 h-4" />
                    <span>Testar e Conectar Firebase</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
