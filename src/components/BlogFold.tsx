import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Edit3, 
  Unlock, 
  BookOpen
} from 'lucide-react';
import { BlogArticle } from '../types/blog';
import { getBlogArticles, deleteBlogArticle, createBlogArticle, updateBlogArticle } from '../services/firebase';
import { BlogAdminModal } from './BlogAdminModal';
import { BlogAdminAuthModal } from './BlogAdminAuthModal';
import { EmergencyContact } from '../types';
import dobra2Img from '../assets/images/dobra2.jpeg';

interface BlogFoldProps {
  contact: EmergencyContact;
  onOpenEmergencyModal: () => void;
  isAdminAuthenticated: boolean;
  setIsAdminAuthenticated: (val: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (val: boolean) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (val: boolean) => void;
  onSelectArticle: (article: BlogArticle) => void;
}

export const BlogFold: React.FC<BlogFoldProps> = ({
  contact,
  onOpenEmergencyModal,
  isAdminAuthenticated,
  setIsAdminAuthenticated,
  isAuthModalOpen,
  setIsAuthModalOpen,
  isAdminModalOpen,
  setIsAdminModalOpen,
  onSelectArticle
}) => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [editingArticle, setEditingArticle] = useState<BlogArticle | null>(null);

  // Carrega artigos
  const loadArticles = async () => {
    try {
      const data = await getBlogArticles();
      setArticles(data);
    } catch (e) {
      console.error('Erro ao carregar artigos:', e);
    }
  };

  useEffect(() => {
    loadArticles();
    const savedAdminSession = localStorage.getItem('ramaiane_admin_session');
    if (savedAdminSession === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem('ramaiane_admin_session', 'true');
    setIsAuthModalOpen(false);
    setIsAdminModalOpen(true);
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('ramaiane_admin_session');
  };

  const handleOpenCreateArticle = () => {
    setEditingArticle(null);
    setIsAdminModalOpen(true);
  };

  const handleOpenEditArticle = (article: BlogArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingArticle(article);
    setIsAdminModalOpen(true);
  };

  const handleDeleteArticle = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Tem certeza de que deseja excluir este artigo do blog? Esta ação não pode ser desfeita.')) {
      try {
        await deleteBlogArticle(id);
        await loadArticles();
      } catch (err) {
        console.error(err);
        alert('Erro ao excluir artigo.');
      }
    }
  };

  const handleSaveArticle = async (articleData: Omit<BlogArticle, 'id'>, editId?: string) => {
    if (editId) {
      await updateBlogArticle(editId, articleData);
    } else {
      await createBlogArticle(articleData);
    }
    await loadArticles();
  };

  return (
    <section id="blog" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#18191B] pb-8">
          <div className="space-y-3 text-left max-w-3xl">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#CCA668]"></span>
              <span>BLOG & ARTIGOS JURÍDICOS</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F7F7F5] tracking-tight uppercase">
              CONTEÚDO ESTRATÉGICO EM DEFESA CRIMINAL
            </h2>

            <p className="text-[#B8BBC0] text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
              Orientações preventivas, direitos fundamentais e análises práticas da advocacia criminal e da defesa em saúde.
            </p>
          </div>

          {/* Admin Toolbar (Exibido apenas quando autenticado via cadeado do rodapé) */}
          {isAdminAuthenticated && (
            <div className="flex items-center space-x-2 bg-[#16171C] border border-[#CCA668]/50 p-1.5 rounded-lg">
              <button
                onClick={handleOpenCreateArticle}
                className="py-2 px-4 rounded bg-gradient-to-r from-[#DFB77C] to-[#CCA668] text-[#0B0B0C] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-md hover:brightness-110"
              >
                <Plus className="w-4 h-4" />
                <span>+ Criar Artigo</span>
              </button>
              <button
                onClick={handleAdminLogout}
                className="py-2 px-3 text-xs text-[#B8BBC0] hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                title="Sair do modo de gestão"
              >
                <Unlock className="w-3.5 h-3.5 text-[#CCA668]" />
                <span className="hidden sm:inline">Sair do Modo Gestão</span>
              </button>
            </div>
          )}
        </div>

        {/* Articles Grid (Exactly matching the layout in screenshots) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectArticle(item)}
              className="bg-[#14151B] border border-[#74777C]/20 hover:border-[#CCA668]/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-[#CCA668]/5 relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Top Row: Breadcrumb & Gold Number */}
                <div className="flex items-center justify-between text-[11px]">
                  <div className="text-[#8F9299] font-mono tracking-wider">
                    Blog &gt; Artigos
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="text-[9px] bg-[#CCA668] text-[#0B0B0C] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        NOVO
                      </span>
                    )}
                    <span className="font-mono font-bold text-sm tracking-widest text-[#CCA668]">
                      {item.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-title text-base sm:text-lg text-[#F7F7F5] group-hover:text-[#CCA668] transition-colors leading-snug uppercase tracking-wide">
                  {item.title}
                </h3>

                {/* Updated Date */}
                <div className="text-[10px] text-[#74777C] font-light">
                  Atualizado em {item.updatedAt}
                </div>

                {/* Cover Image */}
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-[#07080A] border border-[#2D3039]">
                  <img
                    src={item.coverUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14151B]/70 via-transparent to-transparent"></div>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light line-clamp-3">
                  {item.summary}
                </p>

                {/* Key Points (Pontos Importantes) */}
                {Array.isArray(item.keyPoints) && item.keyPoints.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCA668]">
                      PONTOS IMPORTANTES
                    </div>
                    <ul className="space-y-1 text-[11px] text-[#A0A4AB]">
                      {item.keyPoints.slice(0, 4).map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-[#CCA668] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Card Footer: Author + Link */}
              <div className="pt-5 mt-5 border-t border-[#252830] space-y-3">
                {/* Author Details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#CCA668]/50 shrink-0 bg-[#18191B]">
                      <img
                        src={item.author?.avatarUrl || dobra2Img}
                        alt="Deyse Ramaiane"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#F7F7F5]">
                        {item.author?.name || "Deyse Ramaiane"}
                      </div>
                      <div className="text-[9.5px] text-[#CCA668]">
                        {item.author?.title || "Advocacia Criminal Estratégica"}
                      </div>
                    </div>
                  </div>

                  {/* Admin Action Buttons (Exclusive to Lawyer) */}
                  {isAdminAuthenticated && (
                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={(e) => handleOpenEditArticle(item, e)}
                        className="p-1.5 text-[#B8BBC0] hover:text-[#CCA668] hover:bg-[#1E2028] rounded transition-colors"
                        title="Editar Artigo"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleDeleteArticle(item.id, e)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded transition-colors"
                        title="Excluir Artigo (Apenas Dra. Ramaiane)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Read Button */}
                <div className="flex items-center justify-between text-[11px] text-[#CCA668] font-semibold uppercase tracking-wider pt-1">
                  <span>LER ARTIGO</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state */}
        {articles.length === 0 && (
          <div className="text-center py-16 bg-[#14151B] border border-[#2D3039] rounded-xl space-y-3">
            <BookOpen className="w-8 h-8 text-[#CCA668] mx-auto opacity-70" />
            <div className="text-sm font-semibold text-[#F7F7F5]">Nenhum artigo encontrado</div>
            <p className="text-xs text-[#B8BBC0]">Ainda não há artigos cadastrados no blog.</p>
          </div>
        )}

        {/* Bottom Bar Info */}
        <div className="pt-6 border-t border-[#18191B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#74777C] gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#CCA668] shrink-0" />
            <span>Conteúdos informativos com base na legislação e na prática da advocacia criminal estratégica.</span>
          </div>

          <a
            href="#inicio"
            className="text-[#B8BBC0] hover:text-[#CCA668] transition-colors"
          >
            ← Voltar para o início
          </a>
        </div>

      </div>

      {/* Admin Creator / Editor Modal */}
      <BlogAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onSaveArticle={handleSaveArticle}
        editingArticle={editingArticle}
        totalArticlesCount={articles.length}
      />

      {/* Admin Auth PIN Modal */}
      <BlogAdminAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAdminLoginSuccess}
      />

    </section>
  );
};
