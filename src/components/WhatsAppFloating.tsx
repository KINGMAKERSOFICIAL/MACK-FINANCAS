import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SiteSettings } from '../types';
import { trackEvent } from '../services/analytics';

interface WhatsAppFloatingProps {
  settings: SiteSettings;
  currentPath: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({
  settings,
  currentPath,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate appropriate context based on current page
  const getContextMessage = () => {
    switch (currentPath) {
      case '/originacao-ativos':
        return 'Olá! Gostaria de falar com a equipe da MACK sobre originação e ativos (precatórios/créditos judiciais).';
      case '/credito-pj-agro':
        return 'Olá! Gostaria de falar com a equipe da MACK sobre soluções de crédito para PJ / Produtor Rural.';
      case '/solucoes-corporativas':
        return 'Olá! Gostaria de conhecer as soluções corporativas e estratégicas da MACK para minha empresa.';
      case '/parceiros':
        return 'Olá! Tenho interesse em credenciar minha empresa/gestora como parceira da MACK.';
      default:
        return 'Olá! Gostaria de conversar com a equipe da MACK Estratégias e Negócios.';
    }
  };

  const handleOpenWhatsApp = () => {
    trackEvent('clique_whatsapp', `WhatsApp via ${currentPath}`);
    const text = encodeURIComponent(getContextMessage());
    const url = `https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick context card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-[#0B1728] p-4 text-white flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C5A869]/20 border border-[#C5A869] flex items-center justify-center text-[#C5A869]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Atendimento MACK</h4>
                <p className="text-[11px] text-slate-400">Originação • Crédito • Soluções</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 text-xs bg-slate-50">
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 leading-relaxed shadow-2xs">
              Olá! Conectamos empresas, ativos e capital a parceiros capazes de executar. Como podemos apoiar sua demanda empresarial hoje?
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Atendimento comercial sigiloso e direto</span>
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>Iniciar conversa no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-[10px] text-center text-slate-400 font-mono">
              Número oficial: {settings.whatsappDisplay}
            </div>
          </div>
        </div>
      )}

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#0B1728] hover:bg-[#13233A] text-white border border-[#C5A869]/40 rounded-full shadow-xl transition-all duration-200 cursor-pointer hover:scale-105"
        aria-label="Falar no WhatsApp"
      >
        <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span className="text-xs font-semibold tracking-wide">
          Falar com a MACK
        </span>
      </button>
    </div>
  );
};
