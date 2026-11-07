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
  Lock,
  Building,
  UserCheck,
  MapPin,
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
          {/* Col 1 & 2: Brand Lockup, Corporate Identity and Founder Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" showDescriptor={true} size="md" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md pt-1">
              Plataforma B2B de originação, crédito e soluções corporativas.
              Conectamos empresas, ativos e capital a parceiros capazes de executar.
            </p>

            {/* Corporate identification box */}
            <div className="pt-2 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-2 max-w-md">
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-snug">
                  <div className="font-semibold text-white tracking-wide">
                    {settings.corporateReason || 'M.A.C.K - Estratégias Financeiras LTDA'}
                  </div>
                  <div className="text-[11px] text-[#C5A869]">
                    {settings.companyType || 'Empresa de intermediação de negócios'}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-0.5">
                    CNPJ: <span className="font-mono text-slate-200">{settings.cnpj || '61.811.636/0001-08'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {settings.address || 'SQN 215 bloco B apartamento 207 - Asa Norte, Brasilia/DF, CEP: 70.784-020'}
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                <UserCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Apresentada por:</span>
                  <strong className="text-white font-medium">
                    {settings.representativeName || 'Marcos Luiz Aguiar Cunha Santos'}
                  </strong>
                  <div className="text-slate-400 text-[10px] mt-0.5">
                    Advogado e Planejador Financeiro • {settings.representativeOab || 'OAB/DF n°. 25.333'} • {settings.representativeCreci || 'CRECI/DF n° 22.087'}
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
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
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Originação & Ativos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/credito-pj-agro')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Crédito PJ & Agro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/solucoes-corporativas')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Soluções Corporativas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/govtech')}
                  className="hover:text-white transition-colors text-left text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  GovTech & Setor Público <span className="text-[10px] text-[#C5A869] font-mono">(Fase 2)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/parceiros')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Hub de Parceiros
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institucional */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/quem-somos')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/conteudo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Conteúdo & Artigos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/enviar-oportunidade')}
                  className="hover:text-white transition-colors text-left font-medium text-[#C5A869] cursor-pointer"
                >
                  Enviar Oportunidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/area-do-cliente')}
                  className="hover:text-white transition-colors text-left text-slate-500 cursor-pointer"
                >
                  Área do Cliente <span className="text-[10px] font-mono">(Em Implantação)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/admin')}
                  className="hover:text-white transition-colors text-left text-slate-500 flex items-center gap-1 cursor-pointer"
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
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Contato Direto / Institucional:</span>
                <a
                  href={`mailto:${settings.representativeEmail || settings.generalEmail}`}
                  className="text-slate-200 hover:text-[#E9D6A4] transition-colors font-mono break-all"
                >
                  {settings.representativeEmail || settings.generalEmail}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Originação & Ativos:</span>
                <a
                  href={`mailto:${settings.originationEmail}`}
                  className="text-slate-300 hover:text-white transition-colors font-mono break-all"
                >
                  {settings.originationEmail}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Parcerias B2B:</span>
                <a
                  href={`mailto:${settings.partnersEmail}`}
                  className="text-slate-300 hover:text-white transition-colors font-mono break-all"
                >
                  {settings.partnersEmail}
                </a>
              </div>
              <div className="pt-1">
                <span className="text-slate-500 block text-[10px] uppercase">Atendimento Celular / WhatsApp:</span>
                <a
                  href={`https://wa.me/${settings.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A869] hover:underline font-mono font-medium text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{settings.whatsappDisplay}</span>
                </a>
              </div>
              <div className="pt-0.5 text-[11px] text-slate-400">
                Domínio oficial: <span className="font-mono text-slate-300">mackfinancas.com.br</span>
              </div>
            </div>
          </div>
        </div>


        {/* Mandatory Disclaimer Box */}
        <div className="my-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-300 uppercase tracking-wider block">
                Disclaimer Regulatório Obrigatório:
              </span>
              <p className="text-slate-300">
                A MACK atua em originação, triagem comercial e conexão de oportunidades. Determinadas soluções são executadas por instituições ou parceiros especializados e estão sujeitas a análise, elegibilidade, aprovação e contratação específicas.
              </p>
              <p className="text-slate-400 text-[10px]">
                A MACK não é banco, instituição financeira, gestora de recursos ou consultoria de valores mobiliários. Serviços advocatícios não são prestados diretamente pela plataforma e, quando demandados, devem ser contratados de forma autônoma e independente junto a profissionais devidamente habilitados.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div>
            © {new Date().getFullYear()} M.A.C.K - Estratégias Financeiras LTDA. CNPJ: {settings.cnpj || '61.811.636/0001-08'}. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => onOpenLegal('lgpd')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Política de Privacidade & LGPD
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Conformidade Regulatória
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
