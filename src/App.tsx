/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { OriginationPage } from './pages/OriginationPage';
import { CreditPage } from './pages/CreditPage';
import { CorporateSolutionsPage } from './pages/CorporateSolutionsPage';
import { GovTechPage } from './pages/GovTechPage';
import { PartnersPage } from './pages/PartnersPage';
import { SubmitOpportunityPage } from './pages/SubmitOpportunityPage';
import { ContentPage } from './pages/ContentPage';
import { AboutPage } from './pages/AboutPage';
import { ClientAreaPage } from './pages/ClientAreaPage';
import { AdminCrmPage } from './pages/AdminCrmPage';

import { getSettings, getLeads } from './services/crmStorage';
import { SiteSettings } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [initialOpportunityType, setInitialOpportunityType] = useState<string | undefined>();
  const [settings, setSettings] = useState<SiteSettings>(() => getSettings());
  const [unreadLeadsCount, setUnreadLeadsCount] = useState<number>(0);

  // Legal modal state
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'lgpd' | 'terms' | 'disclaimer'>('lgpd');

  // Sync route on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Feed pointer position to the spotlight effect on .card-lux elements
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.card-lux') as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Reading progress for the gold line at the top of the page
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll', String(max > 0 ? window.scrollY / max : 0));
    };
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [currentPath]);

  // Update leads count
  useEffect(() => {
    const updateCount = () => {
      const leads = getLeads();
      const count = leads.filter(l => l.status === 'Novo').length;
      setUnreadLeadsCount(count);
    };

    updateCount();
    window.addEventListener('mack_crm_updated', updateCount);
    return () => window.removeEventListener('mack_crm_updated', updateCount);
  }, []);

  // Navigation handler
  const handleNavigate = (path: string, hash?: string, initialType?: string) => {
    if (initialType) {
      setInitialOpportunityType(initialType);
    }
    setCurrentPath(path);
    window.history.pushState({}, '', path + (hash ? `#${hash}` : ''));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenLegal = (tab: 'lgpd' | 'terms' | 'disclaimer') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  // Render current view
  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} settings={settings} />;
      case '/originacao-ativos':
      case '/precatorios':
        return <OriginationPage onNavigate={handleNavigate} settings={settings} />;
      case '/credito-pj-agro':
        return <CreditPage onNavigate={handleNavigate} settings={settings} />;
      case '/solucoes-corporativas':
        return <CorporateSolutionsPage onNavigate={handleNavigate} settings={settings} />;
      case '/govtech':
        return <GovTechPage onNavigate={handleNavigate} settings={settings} />;
      case '/parceiros':
        return <PartnersPage onNavigate={handleNavigate} settings={settings} />;
      case '/enviar-oportunidade':
        return (
          <SubmitOpportunityPage
            initialType={initialOpportunityType}
            settings={settings}
            onNavigate={handleNavigate}
          />
        );
      case '/conteudo':
        return <ContentPage onNavigate={handleNavigate} settings={settings} />;
      case '/quem-somos':
        return <AboutPage onNavigate={handleNavigate} settings={settings} />;
      case '/area-do-cliente':
        return <ClientAreaPage onNavigate={handleNavigate} settings={settings} />;
      case '/admin':
        return (
          <AdminCrmPage
            onSettingsUpdated={(newSettings) => setSettings(newSettings)}
            onNavigate={handleNavigate}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} settings={settings} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-slate-900 font-sans selection:bg-[#C5A869]/20 selection:text-[#0B1728]">
      <div className="scroll-progress" aria-hidden="true" />

      {/* Main Top Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        settings={settings}
        unreadLeadsCount={unreadLeadsCount}
      />

      {/* Page Content */}
      <main key={currentPath} className="flex-1 animate-fade-up">{renderContent()}</main>

      {/* Mandatory Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={handleOpenLegal}
        settings={settings}
      />

      {/* Floating WhatsApp button on all public pages */}
      <WhatsAppFloating settings={settings} currentPath={currentPath} />

      {/* Legal & Compliance Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalModalTab}
        settings={settings}
      />
    </div>
  );
}
