import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Plus, 
  Trash2, 
  Edit3, 
  Unlock, 
  BookOpen,
  Search,
  X,
  Scale
} from 'lucide-react';
import { BlogArticle, BLOG_MAIN_AREAS, isArticleInMainArea } from '../types/blog';
import { getBlogArticles, deleteBlogArticle, createBlogArticle, updateBlogArticle } from '../services/firebase';
import { BlogAdminModal } from './BlogAdminModal';
import { BlogAdminAuthModal } from './BlogAdminAuthModal';
import { EmergencyContact } from '../types';
import blogLawImg from '../assets/images/blog_law_header.jpg';
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
  const [selectedArea, setSelectedArea] = useState<'all' | 'criminal' | 'civel'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  // Filtragem de artigos por área principal (Todos, Núcleo Criminal, Núcleo Cível) e busca
  const filteredArticles = articles.filter(article => {
    const matchesArea = isArticleInMainArea(article, selectedArea);
    if (!matchesArea) return false;

    if (!searchQuery.trim()) return true;

    const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const q = normalize(searchQuery);
    const title = normalize(article.title || '');
    const summary = normalize(article.summary || '');
    const category = normalize(article.category || '');

    return title.includes(q) || summary.includes(q) || category.includes(q);
  });

  return (
    <section id="blog" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] pt-12 pb-24 sm:pt-16 sm:pb-32 font-sans-clean scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* 1. Hero Header Banner (Matching the reference screenshot) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-2">
          
          {/* Left Text Block */}
          <div className="space-y-4 text-left max-w-2xl flex-1">
            <div className="text-xs tracking-[0.25em] text-[#8F9299] uppercase font-semibold">
              BLOG
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F7F5] tracking-tight uppercase leading-tight">
              CONTEÚDO JURÍDICO
            </h1>

            <p className="text-[#B8BBC0] text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Análises e informações jurídicas sobre temas que fazem parte da nossa atuação.
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div className="w-full lg:w-[460px] xl:w-[500px] h-52 sm:h-64 rounded-2xl overflow-hidden relative shadow-2xl border border-[#252830] shrink-0 bg-[#121316]">
            <img 
              src={blogLawImg} 
              alt="Conteúdo Jurídico - Dra. Deyse Ramaiane" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/70 via-transparent to-transparent"></div>
          </div>

        </div>

        {/* Admin Toolbar (Exibido apenas quando autenticado via cadeado do rodapé) */}
        {isAdminAuthenticated && (
          <div className="flex items-center justify-between bg-[#16171C] border border-[#B8BBC0]/30 p-3 rounded-xl">
            <div className="text-xs text-[#E2E4E8] font-semibold tracking-wider uppercase">
              Modo de Gestão do Blog Ativo
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleOpenCreateArticle}
                className="py-2 px-4 rounded bg-[#E5E7EB] hover:bg-white text-[#0B0B0C] text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>+ Criar Artigo</span>
              </button>
              <button
                onClick={handleAdminLogout}
                className="py-2 px-3 text-xs text-[#B8BBC0] hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                title="Sair do modo de gestão"
              >
                <Unlock className="w-3.5 h-3.5 text-[#B8BBC0]" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. Área Filter Bar ("ESCOLHA UMA ÁREA") */}
        <div className="space-y-6 pt-4 border-t border-[#18191B]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Filter Buttons: TODOS | NÚCLEO CRIMINAL | NÚCLEO CÍVEL */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F9299] mr-2">
                ESCOLHA UMA ÁREA
              </span>

              {BLOG_MAIN_AREAS.map((area) => {
                const isActive = selectedArea === area.id;

                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#E5E7EB] text-[#0B0B0C] font-bold shadow-md shadow-white/5'
                        : 'bg-[#14151B] border border-[#2D3039] text-[#B8BBC0] hover:text-[#FFFFFF] hover:border-[#8F9299] hover:bg-[#1A1C23]'
                    }`}
                  >
                    {area.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar no blog..."
                className="w-full pl-8 pr-8 py-1.5 bg-[#14151B] border border-[#2D3039] focus:border-[#8F9299] rounded-lg text-xs text-[#F7F7F5] placeholder-[#6E717B] focus:outline-none transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-[#74777C] absolute left-2.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-[#74777C] hover:text-[#F7F7F5] absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* 3. "ARTIGOS EM DESTAQUE" Section */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="font-serif-title text-base sm:text-lg font-normal uppercase tracking-wider text-[#F7F7F5]">
              ARTIGOS EM DESTAQUE
            </h2>
            <span className="text-xs text-[#74777C] font-light">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'conteúdo disponível' : 'conteúdos disponíveis'}
            </span>
          </div>

          {/* Grid of Articles (Matching reference screenshot cards) */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredArticles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="bg-[#121316] border border-[#22242B] hover:border-[#8F9299]/50 rounded-xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 shadow-md cursor-pointer hover:shadow-2xl hover:translate-y-[-2px] relative"
                >
                  <div className="space-y-3.5">
                    
                    {/* Cover Image Banner */}
                    <div className="relative w-full h-40 sm:h-44 rounded-lg overflow-hidden bg-[#07080A]">
                      <img
                        src={item.coverUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/70 via-transparent to-transparent"></div>
                      
                      {item.isNew && (
                        <span className="absolute top-2.5 right-2.5 text-[9px] bg-[#E5E7EB] text-[#0B0B0C] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                          NOVO
                        </span>
                      )}
                    </div>

                    {/* Specific Niche / Category Tag (Exposed inside the card as requested) */}
                    <div className="text-[10px] tracking-wider uppercase font-semibold text-[#8F9299] group-hover:text-[#F7F7F5] transition-colors">
                      {item.category || 'DIREITO PENAL'}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-title text-sm sm:text-base text-[#F7F7F5] group-hover:text-[#FFFFFF] transition-colors leading-snug line-clamp-2 uppercase">
                      {item.title}
                    </h3>

                    {/* Summary Snippet */}
                    <p className="text-xs text-[#8F9299] leading-relaxed font-light line-clamp-2">
                      {item.summary}
                    </p>

                  </div>

                  {/* Card Footer: Date & Arrow Link */}
                  <div className="pt-4 mt-4 border-t border-[#1C1D24] flex items-center justify-between">
                    <span className="text-[11px] text-[#74777C] font-light">
                      {item.updatedAt}
                    </span>

                    <div className="flex items-center space-x-2">
                      {isAdminAuthenticated && (
                        <div className="flex items-center space-x-1 mr-1">
                          <button
                            onClick={(e) => handleOpenEditArticle(item, e)}
                            className="p-1 text-[#8F9299] hover:text-white rounded transition-colors"
                            title="Editar Artigo"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteArticle(item.id, e)}
                            className="p-1 text-red-400 hover:text-red-300 rounded transition-colors"
                            title="Excluir Artigo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <div className="text-[#8F9299] group-hover:text-white group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-16 bg-[#121316] border border-[#22242B] rounded-2xl space-y-4 max-w-xl mx-auto px-6">
              <BookOpen className="w-9 h-9 text-[#8F9299] mx-auto opacity-75" />
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[#F7F7F5]">Nenhum artigo encontrado</h3>
                <p className="text-xs text-[#8F9299] font-light leading-relaxed">
                  Não localizamos conteúdos para o filtro selecionado.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedArea('all');
                  setSearchQuery('');
                }}
                className="py-2.5 px-5 rounded-md text-xs font-semibold bg-[#1E2028] hover:bg-[#262933] text-[#F7F7F5] transition-colors cursor-pointer"
              >
                Ver Todos os Artigos
              </button>
            </div>
          )}

        </div>

        {/* Bottom Bar Info */}
        <div className="pt-6 border-t border-[#18191B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#74777C] gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Scale className="w-4 h-4 text-[#8F9299] shrink-0" />
            <span>Conteúdos informativos com base na legislação e na prática jurídica estratégica.</span>
          </div>

          <a
            href="#inicio"
            className="text-[#8F9299] hover:text-[#FFFFFF] transition-colors"
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


