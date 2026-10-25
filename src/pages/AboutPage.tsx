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
import { FounderPortrait } from '../components/FounderPortrait';
import { Reveal } from '../components/Reveal';

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
      <section className="bg-[#050B14] text-white pt-20 pb-24 sm:pt-24 sm:pb-28 relative overflow-hidden grain">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#15345A]/60 blur-[120px] animate-aurora pointer-events-none" />
        <div className="absolute top-10 right-[-12rem] w-[34rem] h-[34rem] rounded-full bg-[#C5A869]/15 blur-[120px] animate-aurora [animation-delay:-9s] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 gold-hairline" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 scroll-drift">
            <div className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C5A869]">
              <span className="w-10 h-px bg-[#C5A869]/70" />
              <span>Institucional</span>
              <span className="text-slate-600">·</span>
              <span>Originação • Crédito • Soluções Corporativas</span>
            </div>

            <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-6xl font-semibold font-serif text-white tracking-tight leading-[1.05] text-balance">
              Quem Somos
            </h1>

            <p className="animate-fade-up [animation-delay:240ms] text-lg sm:text-2xl text-[#C5A869] font-serif italic">
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
          <div className="card-lux bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
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
          <div className="card-lux bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
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
          <div className="card-lux bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
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
      <section className="relative bg-[#050B14] text-white py-20 sm:py-28 overflow-hidden grain">
        <div className="absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-[#C5A869]/15 blur-[120px] animate-aurora pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-[#15345A]/60 blur-[120px] animate-aurora [animation-delay:-9s] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Photo & Socials Column */}
            <Reveal className="lg:col-span-5">
              <div className="max-w-sm mx-auto space-y-8">
                <FounderPortrait />

                {/* Social media links */}
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-slate-200 hover:text-white"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`https://instagram.com/${settings.instagramHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-slate-200 hover:text-white"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={`https://facebook.com/${settings.facebookHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-slate-200 hover:text-white"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Bio & Philosophy Column */}
            <Reveal delay={150} className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A869]">
                <span className="w-10 h-px bg-[#C5A869]/70" />
                Nosso Fundador
              </div>

              <h3 className="text-3xl sm:text-5xl font-semibold font-serif text-white leading-[1.1]">
                Advocacia, Engenharia e{' '}
                <span className="text-gold-foil italic">Visão Empresarial</span>
              </h3>

              <p className="text-base text-slate-200 leading-relaxed font-light">
                <strong className="font-semibold text-white">Marcos Aguiar</strong> é advogado, engenheiro florestal e empresário, com ampla trajetória de atuação no Centro-Oeste e no mercado nacional em negócios estratégicos, crédito, precatórios e soluções corporativas.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Sua formação multidisciplinar alia a precisão jurídica e a visão técnica de engenharia e agronegócio à prática comercial assertiva, permitindo estruturar operações complexas com velocidade, discrição e segurança institucional para compradores, tomadores e investidores.
              </p>

              {/* Institutional quote box */}
              <figure className="relative mt-4 p-7 rounded-2xl bg-white/[0.03] border border-[#C5A869]/20 backdrop-blur">
                <span className="absolute -top-6 left-6 font-serif text-7xl leading-none text-gold-foil select-none">“</span>
                <blockquote className="font-serif italic text-lg sm:text-xl text-slate-100 leading-snug">
                  Conectar oportunidades é acreditar no potencial das pessoas, na força dos empreendedores e no desenvolvimento do Brasil.
                </blockquote>
                <figcaption className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#C5A869]">
                  Marcos Aguiar
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. ECOSSISTEMA MACK (SECTION 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="relative isolate overflow-hidden grain bg-[#050B14] text-white p-8 sm:p-14 rounded-3xl border border-[#C5A869]/20 space-y-4 shadow-[0_40px_80px_-40px_rgba(5,11,20,0.9)]">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A869]/20 blur-[100px] animate-aurora pointer-events-none -z-10" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#15345A]/70 blur-[100px] animate-aurora [animation-delay:-8s] pointer-events-none -z-10" />
          <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
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
              className="btn-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1728] rounded-full cursor-pointer inline-flex items-center gap-2"
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
