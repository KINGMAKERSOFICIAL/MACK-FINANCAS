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

interface HomePageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, settings }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B1728] text-white overflow-hidden pt-16 pb-24 md:py-28 border-b border-slate-800">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet Descriptor (Unboxed metadata style) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
                <span>Originação</span>
                <span className="text-slate-600">·</span>
                <span>Crédito</span>
                <span className="text-slate-600">·</span>
                <span>Soluções Corporativas</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif leading-[1.15] text-balance">
                Conectamos empresas, ativos e capital a parceiros capazes de executar.
              </h1>

              {/* Mandatory Support Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                A MACK é uma plataforma B2B de originação, crédito e soluções corporativas, que identifica oportunidades, qualifica demandas e conecta empresas, ativos e capital a parceiros especializados.
              </p>

              {/* Short Regulatory Notice */}
              <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0" />
                <span>
                  Atuação comercial e de originação. Soluções executadas com parceiros especializados. Crédito e aquisição dependem de análise e aprovação.
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] bg-[#C5A869] hover:bg-[#B59858] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Enviar Oportunidade</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/originacao-ativos')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-md transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Conhecer Ativos e Originação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual Institutional Carrier */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-[#102033] border border-slate-800 p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="text-xs uppercase tracking-widest text-[#C5A869] font-mono">
                    Ecossistema B2B Integrado
                  </div>
                  <span className="text-[11px] text-slate-400">Repositório Oficial 2026</span>
                </div>

                {/* 3 Core Pillars representation */}
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded bg-[#C5A869]/10 text-[#C5A869] flex items-center justify-center shrink-0 mt-0.5">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Originação & Special Situations</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Precatórios, créditos judiciais e ativos para compradores institucionais.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded bg-[#C5A869]/10 text-[#C5A869] flex items-center justify-center shrink-0 mt-0.5">
                      <Coins className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Crédito PJ & Agronegócio</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Giro, garantias reais, home equity e crédito agro com parceiros habilitados.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-800/40 border border-slate-800 flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded bg-[#C5A869]/10 text-[#C5A869] flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Soluções Corporativas</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Eficiência operacional, mitigação de riscos, reestruturação e tecnologia.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Estruturação sigilosa e responsável</span>
                  <span className="text-[#C5A869] font-medium font-mono">mackfinancas.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRÊS PORTAS DE ENTRADA (MANDATORY SECTION 4 & 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Porta 1: Tenho um ativo */}
          <div
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
            className="group bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#C5A869]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center transition-transform group-hover:scale-105">
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
            className="group bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#C5A869]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center transition-transform group-hover:scale-105">
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
            className="group bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#C5A869]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center transition-transform group-hover:scale-105">
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

      {/* 3. QUATRO VERTICAIS DE ATUAÇÃO (SECTION 1.1 & 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
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
          <div className="bg-white rounded-xl p-6 border-2 border-[#C5A869]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
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

      {/* 4. COMO FUNCIONA (PROCESS) */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
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
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0B1728] text-white text-xs font-mono font-bold flex items-center justify-center">
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
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0B1728] text-white text-xs font-mono font-bold flex items-center justify-center">
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
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0B1728] text-white text-xs font-mono font-bold flex items-center justify-center">
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
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3 relative">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0B1728] text-white text-xs font-mono font-bold flex items-center justify-center">
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

      {/* 5. CTA FINAL BLOCK (SECTION 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1728] text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Tem uma oportunidade para discutir?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Envie as informações e nossa equipe entrará em contato para avaliar, com confidencialidade e agilidade, os próximos passos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('/enviar-oportunidade')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] bg-[#C5A869] hover:bg-[#B59858] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Enviar oportunidade</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
