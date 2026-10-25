import React, { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, ShieldCheck, Database } from 'lucide-react';
import { SiteSettings } from '../types';

import { trackEvent } from '../services/analytics';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string, hash?: string) => void;
  settings: SiteSettings;
  unreadLeadsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  settings,
  unreadLeadsCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Originação & Ativos', path: '/originacao-ativos' },
    { label: 'Crédito PJ & Agro', path: '/credito-pj-agro' },
    { label: 'Soluções Corporativas', path: '/solucoes-corporativas' },
    { label: 'GovTech & Mercado Público', path: '/govtech', tag: 'Em ativação' },
    { label: 'Parceiros', path: '/parceiros' },
    { label: 'Conteúdo', path: '/conteudo' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };


  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? 'bg-[#050B14]/92 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]'
          : 'bg-[#050B14]'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 gold-hairline opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-3 sm:gap-8 transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Zone 1: Brand Wordmark (Single text element anchor) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus:outline-hidden group shrink-0 cursor-pointer"
            aria-label="MACK Estratégias e Negócios - Início"
          >
            <BrandLogo variant="light" size="sm" />
          </button>

          {/* Zone 2: Navigation Links (single-line, quiet hover effect) */}
          <nav className="hidden 2xl:flex items-center gap-5 2xl:gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`group relative py-1 transition-colors duration-300 whitespace-nowrap cursor-pointer text-[11px] uppercase tracking-wider ${
                    isActive
                      ? 'text-[#C5A869] font-semibold'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.tag && (
                    <span className="text-[9px] text-[#C5A869]/80 ml-1 font-mono lowercase tracking-normal">
                      ({link.tag})
                    </span>
                  )}
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A869] to-transparent origin-center transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto 2xl:ml-0">
            {/* Quick CRM Base Access */}
            <button
              onClick={() => handleLinkClick('/admin')}
              className={`p-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 border ${
                currentPath === '/admin'
                  ? 'bg-[#C5A869]/20 border-[#C5A869] text-[#C5A869]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
              title="Base Central / CRM & Painel de Controle"
            >
              <Database className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px] font-sans">CRM / Base</span>
              {unreadLeadsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#C5A869] text-[#0B1728] text-[9px] font-bold flex items-center justify-center">
                  {unreadLeadsCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                trackEvent('clique_cta', 'Enviar oportunidade - Header Desktop');
                handleLinkClick('/enviar-oportunidade');
              }}
              className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B1728] rounded-full cursor-pointer whitespace-nowrap"
            >
              <span>Enviar oportunidade</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex 2xl:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('/admin')}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded"
              title="Painel CRM"
            >
              <Database className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-hidden"
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-[#050B14] border-b border-[#C5A869]/20 px-5 pt-3 pb-6 space-y-3 animate-fade-up">
          <div className="text-[10px] uppercase font-semibold text-[#C5A869] tracking-widest px-2 pb-1">
            Navegação Principal
          </div>
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-800/80 text-[#C5A869]'
                    : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                trackEvent('clique_cta', 'Enviar oportunidade - Mobile Drawer');
                handleLinkClick('/enviar-oportunidade');
              }}
              className="btn-gold w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0B1728] rounded-full"
            >
              <span>Enviar oportunidade</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleLinkClick('/quem-somos')}
              className="w-full text-center px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Quem Somos
            </button>

            <button
              onClick={() => handleLinkClick('/area-do-cliente')}
              className="w-full text-center px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Área do Cliente (Em Implantação)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
