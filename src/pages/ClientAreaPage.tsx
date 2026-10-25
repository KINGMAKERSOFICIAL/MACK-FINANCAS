import React from 'react';
import {
  Lock,
  ShieldCheck,
  Clock,
  ArrowRight,
  FileText,
  Bell,
  BarChart3,
  KeyRound,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';
import { SiteSettings } from '../types';

interface ClientAreaPageProps {
  onNavigate: (path: string) => void;
  settings: SiteSettings;
}

export const ClientAreaPage: React.FC<ClientAreaPageProps> = ({
  onNavigate,
  settings,
}) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1728] text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A869] font-mono">
              <span className="bg-slate-900 border border-[#C5A869]/30 px-2 py-0.5 rounded">
                Ambiente em Implantação Técnica · Fase 3
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Área do Cliente / Sistema
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Ambiente reservado para acompanhamento de demandas, documentos e interações com a equipe MACK.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRANSPARENT NOTICE (STRICT REGULATORY RULE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A869]/20 text-[#C5A869] border border-[#C5A869]/40 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-white">
                Infraestrutura em Fase de Homologação e Segurança (Fase 3)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Em estrito cumprimento às diretrizes de governança e proteção de dados, a MACK não disponibiliza formulários de login fictícios ou telas simuladas sem autenticação e criptografia de ponta a ponta plenamente operacionais.
              </p>
              <p className="text-xs text-slate-400">
                Se você já possui uma operação em andamento com a MACK e deseja consultar o status atual, prazos ou enviar documentos complementares, entre em contato diretamente com o responsável pela sua demanda pelos canais oficiais abaixo.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de consultar o andamento da minha demanda/operação com a MACK.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Status da Minha Operação no WhatsApp</span>
            </a>

            <a
              href={`mailto:${settings.originationEmail}?subject=${encodeURIComponent('Consulta de Status de Demanda - MACK')}`}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium rounded-lg text-xs border border-slate-700 transition-colors"
            >
              Consultar por E-mail Institucional
            </a>
          </div>
        </div>
      </section>

      {/* 3. MÓDULOS PREVISTOS (SECTION 13) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
            Roadmap do Sistema
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
            Tudo o que Você Precisa em um Só Lugar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Recursos projetados para a intranet segura de acompanhamento de demandas e documentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-serif">Oportunidades</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visualize e acompanhe o status de todas as suas demandas e novas oportunidades em andamento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-serif">Documentos Seguros</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Acesse, baixe e compartilhe documentos e certidões com controle estrito de acessos e trilha de auditoria.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-serif">Propostas & Pareceres</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consulte propostas recebidas de parceiros habilitados, acompanhe etapas de análise e histórico sempre à mão.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-serif">Alertas & Notificações</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receba atualizações imediatas sobre movimentações processuais, aprovações de comitês e próximos passos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
