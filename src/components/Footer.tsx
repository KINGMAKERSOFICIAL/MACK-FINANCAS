import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SiteSettings } from '../types';
import {
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenLegal: (tab: 'lgpd' | 'terms' | 'disclaimer') => void;
  settings: SiteSettings;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  settings,
}) => {
  return (
    <footer className="relative overflow-hidden grain bg-[#03070D] text-slate-400 pt-20 pb-12">
      <div className="absolute inset-x-0 top-0 gold-hairline" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[50rem] h-[24rem] rounded-full bg-[#C5A869]/[0.06] blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Col 1 & 2: Brand Lockup and Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" showDescriptor={true} size="md" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Plataforma B2B de originação, crédito e soluções corporativas.
              Conectamos empresas, ativos e capital a parceiros capazes de executar.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="text-slate-300 font-medium">MACK Estratégias e Negócios</div>
              <div>CNPJ: <span className="font-mono text-slate-300">{settings.cnpj}</span></div>
              <div className="text-[11px] text-slate-500">Brasília / DF • Atuação Nacional</div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-[#E9D6A4]"
                aria-label="LinkedIn Marcos Aguiar"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-[#E9D6A4]"
                aria-label="Instagram Marcos Aguiar"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://facebook.com/${settings.facebookHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-[#E9D6A4]"
                aria-label="Facebook Marcos Aguiar"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Verticais e Soluções */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Verticais Comerciais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/originacao-ativos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Originação & Ativos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/credito-pj-agro')}
                  className="hover:text-white transition-colors text-left"
                >
                  Crédito PJ & Agro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/solucoes-corporativas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Soluções Corporativas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/govtech')}
                  className="hover:text-white transition-colors text-left text-slate-500 hover:text-slate-300"
                >
                  GovTech & Setor Público <span className="text-[10px] text-[#C5A869] font-mono">(Fase 2)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/parceiros')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hub de Parceiros
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institucional & Conteúdo */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/quem-somos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conteudo')}
                  className="hover:text-white transition-colors text-left"
                >
                  Conteúdo & Artigos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/enviar-oportunidade')}
                  className="hover:text-white transition-colors text-left font-medium text-[#C5A869]"
                >
                  Enviar Oportunidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/area-do-cliente')}
                  className="hover:text-white transition-colors text-left text-slate-500"
                >
                  Área do Cliente <span className="text-[10px] font-mono">(Em Implantação)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/admin')}
                  className="hover:text-white transition-colors text-left text-slate-500 flex items-center gap-1"
                >
                  <Lock className="w-3 h-3 text-[#C5A869]" />
                  <span>Painel CRM / Gestão</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contatos Oficiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Canais de Contato
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Geral:</span>
                <a
                  href={`mailto:${settings.generalEmail}`}
                  className="text-slate-300 hover:text-white transition-colors font-mono"
                >
                  {settings.generalEmail}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Originação & Ativos:</span>
                <a
                  href={`mailto:${settings.originationEmail}`}
                  className="text-slate-300 hover:text-white transition-colors font-mono"
                >
                  {settings.originationEmail}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Parcerias B2B:</span>
                <a
                  href={`mailto:${settings.partnersEmail}`}
                  className="text-slate-300 hover:text-white transition-colors font-mono"
                >
                  {settings.partnersEmail}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block text-[10px] uppercase">Atendimento Comercial:</span>
                <a
                  href={`https://wa.me/${settings.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A869] hover:underline font-mono"
                >
                  {settings.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer Box (Section 14.2) */}
        <div className="my-8 p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                Aviso Regulatório e de Conformidade Institucional:
              </span>
              A MACK Estratégias e Negócios atua em originação, desenvolvimento de negócios e conexão com parceiros especializados. Não é instituição financeira, gestora de recursos ou consultoria de valores mobiliários. Operações de crédito, aquisição de ativos e demais soluções estão sujeitas à análise, aprovação, contratação e condições dos respectivos parceiros responsáveis. Serviços jurídicos não são prestados pela MACK e, quando demandados, serão contratados de forma autônoma e independente junto a profissionais devidamente habilitados.
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} MACK Estratégias e Negócios. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => onOpenLegal('lgpd')}
              className="hover:text-slate-300 transition-colors"
            >
              Política de Privacidade & LGPD
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Termos de Uso
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Conformidade Regulatória
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
