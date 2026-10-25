import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  X,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { Article, SiteSettings } from '../types';
import { getArticles, saveLead, parseUtmsFromUrl } from '../services/crmStorage';

interface ContentPageProps {
  onNavigate: (path: string) => void;
  settings: SiteSettings;
}

export const ContentPage: React.FC<ContentPageProps> = ({
  onNavigate,
  settings,
}) => {
  const [articles] = useState<Article[]>(() => getArticles());
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(true);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const categories = [
    'Todos',
    'Originação & Ativos',
    'Crédito PJ & Agro',
    'Soluções Corporativas',
    ...(settings.govTechActive ? ['GovTech'] : []),
    'Mercado',
    'Parceiros',
  ];

  const filteredArticles = articles.filter(
    (a) => selectedCategory === 'Todos' || a.category === selectedCategory
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const utms = parseUtmsFromUrl();

    saveLead({
      origin: `${window.location.href} (Newsletter MACK)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      name: newsletterName || 'Assinante Newsletter',
      company: 'Não informada',
      cnpj: 'Não informado',
      role: 'Interessado em Conteúdo',
      phone: 'Não informado',
      email: newsletterEmail,
      demandType: 'corporativo',
      message: 'Inscrição na Newsletter: Receba novos insights da MACK',
      requestNda: false,
      lgpdConsent: newsletterConsent,
    });

    setNewsletterSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1728] text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
              <span>Conhecimento & Mercado</span>
              <span className="text-slate-600">·</span>
              <span>Análises Técnicas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Conteúdo
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Insights, artigos e análises sobre originação, crédito, negócios e soluções empresariais.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 shrink-0">
            Filtrar:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B1728] text-white font-semibold'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C5A869]/60 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span className="text-[#C5A869] font-sans font-semibold">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-900 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400 font-mono">
                  {new Date(article.date).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. NEWSLETTER BLOCK (SECTION 12) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1728] rounded-2xl p-8 sm:p-12 border border-slate-800 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                Assinatura Gratuita
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Receba novos insights da MACK
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cadastre-se e receba em primeira mão nossas análises e conteúdos técnicos sobre crédito, originação de precatórios e soluções empresariais.
              </p>
            </div>

            <div className="lg:col-span-6">
              {newsletterSubmitted ? (
                <div className="p-5 bg-slate-900 rounded-xl border border-[#C5A869]/40 text-center space-y-2">
                  <div className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Inscrição Confirmada!</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Você começará a receber nossas análises exclusivas diretamente no seu e-mail corporativo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={newsletterName}
                      onChange={(e) => setNewsletterName(e.target.value)}
                      placeholder="Seu nome (opcional)"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-[#C5A869]"
                    />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="E-mail corporativo *"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-[#C5A869]"
                    />
                  </div>

                  <label className="flex items-start gap-2 text-[11px] text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={newsletterConsent}
                      onChange={(e) => setNewsletterConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-[#C5A869] focus:ring-[#C5A869]"
                    />
                    <span>
                      Concordo em receber comunicações periódicas da MACK, de acordo com a LGPD.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Inscrever-se na Newsletter
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-[#0B1728] text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-xs text-[#C5A869] font-mono uppercase tracking-wider">
                {readingArticle.category}
              </span>
              <button
                onClick={() => setReadingArticle(null)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <span>Publicado em {new Date(readingArticle.date).toLocaleDateString('pt-BR')}</span>
                <span>·</span>
                <span>{readingArticle.readingTime} de leitura</span>
              </div>

              <h2 className="text-2xl font-bold font-serif text-slate-900 leading-tight">
                {readingArticle.title}
              </h2>

              <p className="text-sm font-medium text-slate-700 italic border-l-2 border-[#C5A869] pl-3 py-1">
                {readingArticle.summary}
              </p>

              <div className="pt-4 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {readingArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200">
                <button
                  onClick={() => {
                    setReadingArticle(null);
                    onNavigate(readingArticle.ctaLink);
                  }}
                  className="w-full py-3 px-4 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{readingArticle.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
