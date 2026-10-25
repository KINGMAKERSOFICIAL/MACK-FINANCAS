import React from 'react';
import {
  Compass,
  Eye,
  Award,
  ShieldCheck,
  Linkedin,
  Instagram,
  Facebook,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users2,
  CheckCircle,
} from 'lucide-react';
import { SiteSettings } from '../types';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  settings: SiteSettings;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
              <span>Institucional</span>
              <span className="text-slate-600">·</span>
              <span>Originação • Crédito • Soluções Corporativas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Quem Somos
            </h1>

            <p className="text-lg sm:text-2xl text-[#C5A869] font-serif italic">
              “Conectamos empresas, ativos e capital a parceiros capazes de executar.”
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-2">
              A MACK atua como plataforma B2B de originação e soluções empresariais, organizando oportunidades, qualificando demandas e conectando clientes e parceiros com capacidade de análise e execução.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSÃO, VISÃO E PRINCÍPIOS (SECTION 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Nossa Missão
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Estruturar conexões e soluções sólidas para empresas, investidores e instituições, encurtando ciclos com transparência e disciplina técnica.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Nossa Visão
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ser referência em originação, crédito e soluções corporativas no Centro-Oeste e no Brasil, reconhecida pelo rigor e confiabilidade das conexões.
            </p>
          </div>

          {/* Princípios */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Nossos Princípios
            </h3>
            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <div>• Credibilidade e discrição</div>
              <div>• Visão estratégica</div>
              <div>• Execução responsável</div>
              <div>• Relacionamento de longo prazo</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOSSO FUNDADOR: MARCOS AGUIAR (SECTION 5) */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo & Socials Column */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-[#0B1728] border-2 border-[#C5A869]/40 shadow-xl flex items-center justify-center">
                  {/* Subtle Executive Gradient Emblem Motif */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1728] via-[#15273F] to-[#203a5e] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#C5A869]/20 border border-[#C5A869] flex items-center justify-center text-[#C5A869] mb-3">
                      <span className="font-serif font-bold text-3xl">MA</span>
                    </div>
                    <div className="font-serif font-bold text-white text-lg">Marcos Aguiar</div>
                    <div className="text-[11px] text-[#C5A869] uppercase tracking-wider font-mono mt-1">Fundador & Diretor</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-serif text-slate-900">Marcos Aguiar</h4>
                  <p className="text-xs text-slate-500">Fundador MACK Estratégias e Negócios</p>
                </div>

                {/* Social media links */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-[#0B1728] hover:border-[#C5A869] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-[#0B1728] hover:border-[#C5A869] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={`https://facebook.com/${settings.facebookHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 hover:text-[#0B1728] hover:border-[#C5A869] transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Bio & Philosophy Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A869] font-mono">
                  Nosso Fundador
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  Advocacia, Engenharia e Visão Empresarial
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Marcos Aguiar</strong> é advogado, engenheiro florestal e empresário, com ampla trajetória de atuação no Centro-Oeste e no mercado nacional em negócios estratégicos, crédito, precatórios e soluções corporativas.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sua formação multidisciplinar alia a precisão jurídica e a visão técnica de engenharia e agronegócio à prática comercial assertiva, permitindo estruturar operações complexas com velocidade, discrição e segurança institucional para compradores, tomadores e investidores.
                </p>

                {/* Institutional quote box */}
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#C5A869] text-xs sm:text-sm text-slate-800 italic">
                  “Conectar oportunidades é acreditar no potencial das pessoas, na força dos empreendedores e no desenvolvimento do Brasil.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ECOSSISTEMA MACK (SECTION 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#0B1728] text-white p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
            Expansão Modular
          </div>
          <h3 className="text-2xl font-bold font-serif text-white">
            Ecossistema de Cooperação Institucional
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            A MACK atua com uma rede de parceiros especializados e expansão modular das soluções conforme formalização e disponibilidade operacional. Unimos experiência, rede de relacionamento e visão de futuro para ampliar oportunidades em diferentes setores da economia real.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/enviar-oportunidade')}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B1728] bg-[#C5A869] hover:bg-[#B59858] rounded-md transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Falar com o nosso time</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
