import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Coins,
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Scale,
  Users,
  Compass,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { FounderPortrait } from '../components/FounderPortrait';
import { Reveal } from '../components/Reveal';

interface HomePageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, settings }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050B14] text-white overflow-hidden grain pt-14 pb-28 md:pt-20 md:pb-36 border-b border-[#C5A869]/10">
        {/* Aurora lights */}
        <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-[#15345A]/60 blur-[120px] animate-aurora pointer-events-none" />
        <div className="absolute top-20 right-[-10rem] w-[36rem] h-[36rem] rounded-full bg-[#C5A869]/15 blur-[120px] animate-aurora [animation-delay:-9s] pointer-events-none" />
        {/* Fine architectural grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-7">
              {/* Quiet Descriptor (Unboxed metadata style) */}
              <div className="animate-fade-up flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] uppercase text-[#C5A869]">
                <span className="w-10 h-px bg-[#C5A869]/70" />
                <span>Originação</span>
                <span className="text-[#C5A869]/40">◆</span>
                <span>Crédito</span>
                <span className="text-[#C5A869]/40">◆</span>
                <span className="hidden sm:inline">Soluções Corporativas</span>
              </div>

              {/* Main Headline */}
              <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold tracking-tight text-white font-serif leading-[1.08] text-balance">
                Conectamos empresas, ativos e capital a{' '}
                <span className="text-gold-foil italic">parceiros capazes de executar.</span>
              </h1>

              {/* Mandatory Support Text */}
              <p className="animate-fade-up [animation-delay:240ms] text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-light">
                A MACK é uma plataforma B2B de originação, crédito e soluções corporativas, que identifica oportunidades, qualifica demandas e conecta empresas, ativos e capital a parceiros especializados.
              </p>

              {/* CTAs */}
              <div className="animate-fade-up [animation-delay:360ms] flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade')}
                  className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1728] rounded-full cursor-pointer whitespace-nowrap"
                >
                  <span>Enviar Oportunidade</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/originacao-ativos')}
                  className="btn-glass inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100 rounded-full cursor-pointer whitespace-nowrap"
                >
                  <span>Conhecer Ativos e Originação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Short Regulatory Notice */}
              <div className="animate-fade-up [animation-delay:480ms] flex items-start gap-2 pt-3 text-xs text-slate-400 max-w-xl">
                <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <span>
                  Atuação comercial e de originação. Soluções executadas com parceiros especializados. Crédito e aquisição dependem de análise e aprovação.
                </span>
              </div>

              {/* Core pillars */}
              <div className="animate-fade-up [animation-delay:600ms] grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/5 bg-white/5 mt-4">
                {[
                  { icon: Scale, title: 'Originação & Special Situations', text: 'Precatórios, créditos judiciais e ativos.' },
                  { icon: Coins, title: 'Crédito PJ & Agronegócio', text: 'Giro, garantias reais e crédito agro.' },
                  { icon: Briefcase, title: 'Soluções Corporativas', text: 'Eficiência, riscos e reestruturação.' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="group bg-[#050B14]/80 backdrop-blur p-4 hover:bg-[#0B1728] transition-colors duration-500">
                    <Icon className="w-4 h-4 text-[#C5A869] mb-2 transition-transform duration-500 group-hover:-translate-y-0.5" />
                    <h4 className="text-[13px] font-semibold text-white leading-snug">{title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Founder portrait */}
            <div className="lg:col-span-5 animate-fade-up [animation-delay:300ms]">
              <div className="relative max-w-sm sm:max-w-md mx-auto lg:ml-auto">
                <FounderPortrait />

                {/* Floating credential badge */}
                <div className="absolute -left-4 sm:-left-10 top-10 animate-float">
                  <div className="flex items-center gap-3 rounded-2xl bg-[#0B1728]/80 backdrop-blur-xl border border-[#C5A869]/30 px-4 py-3 shadow-2xl">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E9D6A4] to-[#9C7F43] text-[#0B1728] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A869]">Estruturação</div>
                      <div className="text-xs font-semibold text-white">Sigilosa & responsável</div>
                    </div>
                  </div>
                </div>

                {/* Floating signature quote */}
                <div className="absolute -right-2 sm:-right-8 -bottom-14 animate-float [animation-delay:-3.5s] max-w-[15rem]">
                  <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl">
                    <p className="font-serif italic text-[13px] text-slate-200 leading-snug">
                      “Conectar oportunidades é acreditar no potencial das pessoas.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRÊS PORTAS DE ENTRADA (MANDATORY SECTION 4 & 5) */}
      <Reveal>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Porta 1: Tenho um ativo */}
          <div
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
            className="card-lux group h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-[0_24px_60px_-35px_rgba(11,23,40,0.45)] cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:ring-[#C5A869]">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A869] font-mono">
                  Porta 01
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Tenho um ativo
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apresente seu ativo ou operação. Conectamos a parceiros com capacidade comprovada de análise e execução (precatórios, créditos judiciais, carteiras e distressed).
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1728] group-hover:text-[#C5A869] transition-colors">
              <span>Apresentar ativo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Porta 2: Preciso de crédito/solução */}
          <div
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'credito')}
            className="card-lux group h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-[0_24px_60px_-35px_rgba(11,23,40,0.45)] cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:ring-[#C5A869]">
                <Coins className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A869] font-mono">
                  Porta 02
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Preciso de crédito / solução
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traga sua demanda. Apoiamos na estruturação comercial e conexão com as soluções mais aderentes ao seu perfil junto a instituições e fundos parceiros habilitados.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1728] group-hover:text-[#C5A869] transition-colors">
              <span>Solicitar estruturação</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Porta 3: Quero ser parceiro */}
          <div
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'parceiro')}
            className="card-lux group h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-[0_24px_60px_-35px_rgba(11,23,40,0.45)] cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-4deg] group-hover:ring-[#C5A869]">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C5A869] font-mono">
                  Porta 03
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Quero ser parceiro
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Faça parte da nossa rede. Conectamos compradores institucionais, instituições de crédito, fintechs e consultorias a um fluxo qualificado de oportunidades.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1728] group-hover:text-[#C5A869] transition-colors">
              <span>Credenciar como parceiro</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* 3. QUATRO VERTICAIS DE ATUAÇÃO (SECTION 1.1 & 4) */}
      <Reveal>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
            Arquitetura de Negócios
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            Quatro Verticais de Atuação
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Atuamos de forma integrada em diferentes frentes, conectando oportunidades e soluções para empresas, investidores e instituições.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Vertical 1: Originação & Special Situations (Maior Destaque) */}
          <div className="card-lux h-full bg-gradient-to-b from-[#FBF8F1] to-white rounded-2xl p-6 border border-[#C5A869]/50 shadow-[0_20px_50px_-35px_rgba(197,168,105,0.8)] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Prioridade Máxima
                </span>
                <Scale className="w-5 h-5 text-[#C5A869]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Originação & Special Situations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Identificação e estruturação de ativos, empresas e operações especiais, com foco em geração de valor e execução para compradores institucionais.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div>• Precatórios (Federais, Estaduais, Municipais)</div>
                <div>• Legal Claims & Créditos Judiciais</div>
                <div>• Direitos Creditórios Empresariais</div>
                <div>• Ativos Imobiliários & Distressed</div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/originacao-ativos')}
                className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Acessar vertical</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Vertical 2: Crédito PJ & Agro */}
          <div className="card-lux h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  Corporativo & Rural
                </span>
                <Coins className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Crédito PJ & Agro
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conexão com soluções de crédito para empresas e para o agronegócio, considerando diferentes perfis e estruturas junto a parceiros habilitados.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div>• Capital de Giro com agilidade</div>
                <div>• Crédito com Garantia Real</div>
                <div>• Home Equity corporativo</div>
                <div>• Custeio e Investimento Agro</div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/credito-pj-agro')}
                className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Acessar vertical</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Vertical 3: Soluções Corporativas */}
          <div className="card-lux h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  B2B Multisserviços
                </span>
                <Briefcase className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Soluções Corporativas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apoio em projetos estratégicos, reestruturações, eficiência operacional, automação de dados e soluções sob medida para o seu negócio.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div>• Eficiência Tributária & Operacional</div>
                <div>• Tecnologia & Automação de Processos</div>
                <div>• Análise de Risco & Informações</div>
                <div>• Recuperação & Reorganização</div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/solucoes-corporativas')}
                className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Acessar vertical</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Vertical 4: GovTech & Mercado Público (Em ativação) */}
          <div className="card-lux h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Em Ativação · Fase 2
                </span>
                <Landmark className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                GovTech & Mercado Público
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conexão com oportunidades e soluções para o setor público, com foco em inovação, eficiência, transparência e compliance legal.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <div>• Representação Comercial Tech</div>
                <div>• Desenvolvimento de Canais</div>
                <div>• Inteligência de Oportunidades</div>
                <div>• Apoio à Estratégia de Mercado</div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('/govtech')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Ver diretrizes preliminares</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* 4. COMO FUNCIONA (PROCESS) */}
      <Reveal>
      <section className="bg-[#F4EFE4]/70 border-y border-[#C5A869]/15 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
              Metodologia de Atuação
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
              Como Funciona
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Um processo claro, objetivo e focado em resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)]">
                  1
                </span>
                <h4 className="text-base font-bold text-slate-900 font-serif">
                  Entender
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conversamos sobre seu objetivo, ativo ou necessidade, com estrita confidencialidade, agilidade e foco na viabilidade.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)]">
                  2
                </span>
                <h4 className="text-base font-bold text-slate-900 font-serif">
                  Qualificar
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Analisamos as informações e o perfil da oportunidade para identificar os caminhos e parceiros mais aderentes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)]">
                  3
                </span>
                <h4 className="text-base font-bold text-slate-900 font-serif">
                  Conectar
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apresentamos a oportunidade aos parceiros certos, com abordagem direcionada, profissional e qualificada.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold flex items-center justify-center shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)]">
                  4
                </span>
                <h4 className="text-base font-bold text-slate-900 font-serif">
                  Acompanhar
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seguimos próximos durante todo o processo, apoiando a evolução, a disciplina comercial e os próximos passos.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-[11px] text-slate-500 font-light">
            Atuação comercial e de originação. Soluções estruturadas com parceiros especializados. Sem promessa de créditos ou aquisições sem aprovação.
          </div>
        </div>
      </section>
      </Reveal>

      {/* 5. CTA FINAL BLOCK (SECTION 4) */}
      <Reveal>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden grain bg-[#050B14] text-white rounded-3xl p-8 sm:p-14 border border-[#C5A869]/20 shadow-[0_40px_80px_-40px_rgba(5,11,20,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A869]/20 blur-[100px] animate-aurora pointer-events-none" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#15345A]/70 blur-[100px] animate-aurora [animation-delay:-8s] pointer-events-none" />
          <div className="relative space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Tem uma oportunidade <span className="text-gold-foil italic">para discutir?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Envie as informações e nossa equipe entrará em contato para avaliar, com confidencialidade e agilidade, os próximos passos.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('/enviar-oportunidade')}
              className="btn-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1728] rounded-full cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Enviar oportunidade</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 hover:text-white rounded-full cursor-pointer whitespace-nowrap"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
};
