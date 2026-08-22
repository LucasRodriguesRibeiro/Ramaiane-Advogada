import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Loader2, 
  FileText,
  Upload
} from 'lucide-react';
import { BlogArticle, generateSlug } from '../types/blog';
import { formatCurrentDate } from '../services/firebase';
import dobra2Img from '../assets/images/dobra2.jpeg';

interface BlogAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveArticle: (article: Omit<BlogArticle, 'id'>, editId?: string) => Promise<void>;
  editingArticle?: BlogArticle | null;
  totalArticlesCount: number;
}

const DEFAULT_COVER = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80';

// Função para comprimir fotos enviadas localmente antes do envio
const compressImage = (file: File, maxWidth = 800, quality = 0.70): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } else {
          resolve(e.target?.result as string);
        }
      };
      img.onerror = () => resolve(e.target?.result as string);
      img.src = e.target?.result as string;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
};

export const BlogAdminModal: React.FC<BlogAdminModalProps> = ({
  isOpen,
  onClose,
  onSaveArticle,
  editingArticle,
  totalArticlesCount
}) => {
  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Direito Penal Geral');
  const [coverUrl, setCoverUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [keyPoints, setKeyPoints] = useState<string[]>([
    'Preserve todos os documentos e registros pertinentes.',
    'Exerça o direito ao silêncio e à não autoincriminação.',
    'Considere orientação jurídica técnica e estratégica.'
  ]);
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('4 min de leitura');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setCategory(editingArticle.category || 'Direito Penal Geral');
      setCoverUrl(editingArticle.coverUrl || '');
      setSummary(editingArticle.summary);
      setKeyPoints(editingArticle.keyPoints || []);
      setContent(editingArticle.content);
      setReadTime(editingArticle.readTime || '4 min de leitura');
    } else {
      setTitle('');
      setCategory('Direito Penal Geral');
      setCoverUrl('');
      setSummary('');
      setKeyPoints([
        'Preserve todos os documentos e registros pertinentes.',
        'Exerça o direito ao silêncio e à não autoincriminação.',
        'Considere orientação jurídica técnica e estratégica.'
      ]);
      setContent('');
      setReadTime('4 min de leitura');
    }
  }, [editingArticle, isOpen]);

  if (!isOpen) return null;

  const handleAddKeyPoint = () => {
    setKeyPoints([...keyPoints, '']);
  };

  const handleUpdateKeyPoint = (index: number, val: string) => {
    const updated = [...keyPoints];
    updated[index] = val;
    setKeyPoints(updated);
  };

  const handleRemoveKeyPoint = (index: number) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const compressedDataUrl = await compressImage(file);
      if (compressedDataUrl) {
        setCoverUrl(compressedDataUrl);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim() || !content.trim()) {
      alert('Por favor, preencha o título, resumo e conteúdo do artigo.');
      return;
    }

    setIsSaving(true);
    try {
      const numString = editingArticle 
        ? editingArticle.num 
        : String(totalArticlesCount + 1).padStart(2, '0');

      const articlePayload: Omit<BlogArticle, 'id'> = {
        num: numString,
        title: title.trim(),
        slug: generateSlug(title.trim()),
        updatedAt: formatCurrentDate(),
        coverUrl: coverUrl.trim() || DEFAULT_COVER,
        summary: summary.trim(),
        keyPoints: keyPoints.filter(p => p.trim().length > 0),
        content: content.trim(),
        category: category.trim(),
        readTime: readTime.trim(),
        isNew: true,
        author: {
          name: "Deyse Ramaiane",
          title: "Advocacia Estratégica",
          avatarUrl: dobra2Img
        }
      };

      await onSaveArticle(articlePayload, editingArticle?.id);
      onClose();
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar o artigo.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-[#0E0F12] border border-[#B8BBC0]/30 rounded-2xl shadow-2xl text-[#F7F7F5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-[#252830] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#16171C] border border-[#B8BBC0]/40 flex items-center justify-center text-[#F7F7F5]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-title text-xl sm:text-2xl font-normal uppercase tracking-wide">
                {editingArticle ? 'Editar Artigo' : 'Criar Novo Artigo'}
              </h2>
              <p className="text-xs text-[#B8BBC0] font-light">
                Publicação direta no blog da Dra. Deyse Ramaiane
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

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-160px)] overflow-y-auto custom-scrollbar">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Title */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                TÍTULO DO ARTIGO
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex.: RECEBI UMA INTIMAÇÃO CRIMINAL. E AGORA?"
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
              />
            </div>

            {/* Category & Read Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  CATEGORIA / ÁREA
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] focus:outline-none"
                >
                  <option value="Investigações, Prisões e Operações Policiais">Investigações, Prisões e Operações Policiais</option>
                  <option value="Tráfico de Drogas">Tráfico de Drogas (Lei de Drogas)</option>
                  <option value="Crimes Empresariais">Crimes Empresariais e Econômicos</option>
                  <option value="Tribunal do Júri">Tribunal do Júri</option>
                  <option value="Crimes Digitais">Crimes Digitais e Cibernéticos</option>
                  <option value="Direito Penal Médico">Direito Penal Médico e da Saúde</option>
                  <option value="Responsabilidade Civil e Indenizações">Responsabilidade Civil e Indenizações</option>
                  <option value="Família e Sucessões">Direito de Família e Sucessões</option>
                  <option value="Direito Penal Estratégico">Direito Penal Estratégico</option>
                  <option value="Contratos e Obrigações">Contratos e Obrigações</option>
                  <option value="Direito Imobiliário">Direito Imobiliário</option>
                  <option value="Execução Penal">Execução Penal</option>
                  <option value="Crimes Contra a Honra, Imagem e Liberdade">Crimes Contra a Honra e Imagem</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  TEMPO ESTIMADO DE LEITURA
                </label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="Ex.: 4 min de leitura"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />
              </div>
            </div>

            {/* Capa do Artigo (Cover Image) */}
            <div className="space-y-2">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                CAPA DO ARTIGO
              </label>

              {/* Cover Preview */}
              {coverUrl ? (
                <div className="relative w-full h-40 rounded-lg overflow-hidden border border-[#2D3039] bg-[#18191B] mb-2">
                  <img src={coverUrl} alt="Prévia da capa" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 text-[10px] bg-black/70 px-2 py-0.5 rounded text-white">
                    Prévia da Capa
                  </span>
                  <button
                    type="button"
                    onClick={() => setCoverUrl('')}
                    className="absolute top-2 right-2 p-1 bg-black/70 hover:bg-red-900 text-white rounded text-xs transition-colors"
                    title="Remover imagem"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="w-full h-24 rounded-lg border border-dashed border-[#2D3039] bg-[#07080A] flex flex-col items-center justify-center text-[#74777C] text-xs space-y-1 mb-2">
                  <Upload className="w-5 h-5 text-[#B8BBC0]" />
                  <span>Nenhuma capa selecionada (envie uma imagem ou insira a URL)</span>
                </div>
              )}

              {/* Image URL or Local Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <input
                  type="text"
                  value={coverUrl}
                  onChange={(e) => setCoverUrl(e.target.value)}
                  placeholder="Cole a URL da foto (https://...)"
                  className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                />

                <label className="flex items-center justify-center space-x-2 px-3.5 py-2.5 bg-[#18191B] border border-[#2D3039] hover:border-[#B8BBC0] rounded-md text-xs text-[#B8BBC0] hover:text-[#F7F7F5] cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-[#B8BBC0]" />
                  <span>Enviar foto do computador</span>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                RESUMO / INTRODUÇÃO DO ARTIGO
              </label>
              <textarea
                rows={2}
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Breve resumo em 2 ou 3 frases sobre o artigo..."
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none resize-none"
              />
            </div>

            {/* Key Points (Pontos Importantes) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                  PONTOS IMPORTANTES
                </label>
                <button
                  type="button"
                  onClick={handleAddKeyPoint}
                  className="text-[11px] text-[#B8BBC0] hover:text-white hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar Ponto</span>
                </button>
              </div>

              <div className="space-y-2">
                {keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8BBC0] shrink-0" />
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleUpdateKeyPoint(idx, e.target.value)}
                      placeholder={`Ponto importante ${idx + 1}`}
                      className="flex-1 px-3 py-2 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none"
                    />
                    {keyPoints.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyPoint(idx)}
                        className="p-2 text-[#74777C] hover:text-red-400 transition-colors cursor-pointer"
                        title="Remover ponto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Full Content */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B8BBC0]">
                CONTEÚDO COMPLETO DO ARTIGO (FORMATADO EM TEXTO OU MARKDOWN)
              </label>
              <textarea
                rows={8}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva ou cole o texto completo do artigo..."
                className="w-full px-3.5 py-2.5 bg-[#07080A] border border-[#2D3039] focus:border-[#B8BBC0] rounded-md text-xs text-[#F7F7F5] placeholder-[#5A5D66] focus:outline-none custom-scrollbar"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#252830] flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-md text-xs font-semibold text-[#B8BBC0] hover:text-white bg-[#18191B] hover:bg-[#202228] transition-colors cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isSaving}
                className="py-3 px-8 rounded-md text-xs font-bold uppercase tracking-widest text-[#0B0B0C] bg-[#E5E7EB] hover:bg-white transition-all shadow-md flex items-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Publicando...</span>
                  </>
                ) : (
                  <span>{editingArticle ? 'Salvar Alterações' : 'Publicar no Blog'}</span>
                )}
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

