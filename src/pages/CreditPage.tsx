import React, { useState } from 'react';
import {
  Coins,
  Building2,
  Tractor,
  Home,
  PieChart,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  FileText,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';
import { trackEvent } from '../services/analytics';
import { Reveal } from '../components/Reveal';
import { ImageReveal } from '../components/ImageReveal';

interface CreditPageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const CreditPage: React.FC<CreditPageProps> = ({
  onNavigate,
  settings,
}) => {
  const [filterProfile, setFilterProfile] = useState<'todos' | 'empresa' | 'agro'>('todos');

  const creditSolutions = [
    {
      id: 'giro',
      title: 'Capital de Giro',
      icon: Coins,
      category: 'empresa',
      description:
        'Recursos para apoiar o dia a dia de sua empresa, com mais fôlego para crescimento, compra de estoque e manutenção da operação.',
      tag: 'PJ',
    },
    {
      id: 'garantia',
      title: 'Crédito com Garantia',
      icon: ShieldCheck,
      category: 'empresa',
      description:
        'Condições mais competitivas e taxas atrativas estruturadas com garantias reais, como imóveis comerciais, recebíveis ou equipamentos industriais.',
      tag: 'PJ & Agro',
    },
    {
      id: 'home-equity',
      title: 'Home Equity Corporativo',
      icon: Home,
      category: 'empresa',
      description:
        'Utilize seu imóvel como garantia real e obtenha crédito para sua empresa com prazos mais alongados e amortização planejada.',
      tag: 'PJ',
    },
    {
      id: 'agro',
      title: 'Crédito Agro',
      icon: Tractor,
      category: 'agro',
      description:
        'Soluções estruturadas para custeio, investimentos e comercialização de safras, conectando produtores rurais a linhas aderentes ao calendário agrícola.',
      tag: 'Agro',
    },
    {
      id: 'consorcios',
      title: 'Consórcios Estruturados',
      icon: PieChart,
      category: 'todos',
      description:
        'Planejamento financeiro para renovação de frotas, maquinários pesados e aquisição de imóveis rurais e urbanos para empresas e produtores.',
      tag: 'PJ & Agro',
    },
    {
      id: 'estruturadas',
      title: 'Soluções Estruturadas',
      icon: Layers,
      category: 'empresa',
      description:
        'Operações customizadas para projetos específicos, M&A, expansão de capacidade produtiva e reestruturação de passivos bancários.',
      tag: 'PJ & Agro',
    },
  ];

  const filteredSolutions = creditSolutions.filter(
    (item) => filterProfile === 'todos' || item.category === filterProfile || item.category === 'todos'
  );

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
              <span>Crédito Corporativo & Rural</span>
              <span className="text-slate-600">·</span>
              <span>Parceiros Habilitados</span>
            </div>

            <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-6xl font-semibold font-serif text-white tracking-tight leading-[1.05] text-balance">
              Crédito PJ & Agro
            </h1>

            <p className="animate-fade-up [animation-delay:240ms] text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Conectamos empresas e produtores a soluções de crédito estruturadas com parceiros habilitados.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              A MACK atua na conexão com instituições financeiras e fundos parceiros para viabilizar crédito com condições competitivas, agilidade e segurança, de acordo com o perfil e a necessidade do seu negócio.
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANDATORY REGULATORY NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold text-amber-900">Aviso Regulatório Obrigatório:</strong> A MACK não é instituição financeira e não concede empréstimos diretamente. Conecta demandas empresariais e rurais a instituições e parceiros habilitados. Aprovação, taxa, prazo, garantia e liberação dependem exclusivamente da análise e contratação com o parceiro responsável.
          </div>
        </div>
      </section>

      {/* 3. NOSSAS SOLUÇÕES DE CRÉDITO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Nossas Soluções de Crédito
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Soluções para empresas de diferentes portes e para o agronegócio, conectando a parceiros habilitados.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setFilterProfile('todos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterProfile === 'todos'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos os Perfis
            </button>
            <button
              onClick={() => setFilterProfile('empresa')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterProfile === 'empresa'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Empresas (PJ)
            </button>
            <button
              onClick={() => setFilterProfile('agro')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filterProfile === 'agro'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Produtor Agro
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 80} variant="fade-up">
                <div
                  className="card-lux h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate('/enviar-oportunidade', undefined, 'credito')}
                      className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Solicitar estruturação</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DESTAQUE VISUAL: CRÉDITO AGRO & INFRAESTRUTURA EMPRESARIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal delay={0} variant="fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#C5A869]">
                Agro & Soluções com Garantia Real
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-snug">
                Capacidade de conexão no Centro-Oeste e eixos produtivos nacionais.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Com raízes e vivência prática no setor produtivo rural, a MACK qualifica operações de custeio, investimento, CPRs e crédito com garantias reais imobiliárias, conectando tomadores a fundos parceiros especializados.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'credito')}
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1728] rounded-full"
                >
                  <span>Simular demanda com a equipe</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} variant="scale">
            <ImageReveal
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80"
              alt="Agronegócio e Crédito Rural Estruturado"
              caption="Operações com garantias reais, terras produtivas e lavouras"
              badge="Crédito Agro & PJ"
              aspectRatio="aspect-[16/10]"
            />
          </Reveal>
        </div>
      </section>

      {/* 4. COMO A MACK ATUA */}
      <section className="bg-[#F4EFE4]/70 py-20 border-y border-[#C5A869]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
              Fluxo Estruturado
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Como a MACK Atua
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Um processo claro, objetivo e focado em conectar demandas qualificadas aos parceiros certos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Entender a necessidade
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conversamos sobre seus objetivos, desafios de liquidez e destinação planejada dos recursos.
              </p>
            </div>

            <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Qualificar o perfil
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Analisamos informações financeiras, faturamento, histórico operacional e garantias disponíveis.
              </p>
            </div>

            <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Conectar à solução aderente
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apresentamos as alternativas mais compatíveis junto a instituições e estruturadores habilitados.
              </p>
            </div>

            <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center">
                4
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Acompanhar a operação
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seguimos próximos durante todo o processo, apoiando o alinhamento até a formalização e liberação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. O QUE ANALISAMOS (SECTION 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            O que Analisamos em Cada Demanda
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Avaliamos os principais aspectos do seu negócio para identificar as melhores condições e parceiros aderentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C5A869]" />
              <span>Perfil da empresa / produtor</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Setor de atuação, porte, tempo de atividade, histórico de faturamento e estrutura societária.
            </p>
          </div>

          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#C5A869]" />
              <span>Finalidade do crédito</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capital de giro, expansão fabril, aquisição de máquinas, safra ou reestruturação de dívidas.
            </p>
          </div>

          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
              <span>Garantias disponíveis</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Imóveis urbanos ou rurais, recebíveis de contratos, equipamentos, veículos ou sem garantia real.
            </p>
          </div>

          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#C5A869]" />
              <span>Ticket / Volume</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Valor estimado da operação para direcionamento à esteira de comitê correta da instituição parceira.
            </p>
          </div>

          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A869]" />
              <span>Urgência e horizonte temporal</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prazo necessário para desembolso dos recursos e adequação ao ciclo financeiro do tomador.
            </p>
          </div>

          <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C5A869]" />
              <span>Documentação preliminar</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Demonstrações financeiras, faturamento recente e certidões essenciais para subsidiar a triagem.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FORMULÁRIO DE CRÉDITO DEDICADO (SEÇÃO 21) */}
      <section id="formulario-credito" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A869] uppercase font-mono">
              <Coins className="w-4 h-4" />
              <span>Seção 21 · Estruturação Direta de Crédito</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Apresente sua Demanda de Crédito PJ ou Agro
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Campos estruturados para capital de giro, crédito com garantia real, home equity, agro e consórcios.
            </p>
          </div>

          <CreditInlineForm onNavigate={onNavigate} />
        </div>
      </section>

      {/* 7. CALL TO ACTION CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden grain bg-[#050B14] text-white rounded-3xl p-8 sm:p-14 border border-[#C5A869]/20 shadow-[0_40px_80px_-40px_rgba(5,11,20,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A869]/20 blur-[100px] animate-aurora pointer-events-none -z-10" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#15345A]/70 blur-[100px] animate-aurora [animation-delay:-8s] pointer-events-none -z-10" />
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-white">
              Pronto para apresentar sua demanda de crédito?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Preencha o formulário para que nossa equipe avalie a estrutura mais aderente junto aos parceiros habilitados.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'credito')}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] btn-gold rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>Enviar demanda de crédito</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

const CreditInlineForm: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    cnpj: '',
    role: '',
    phone: '',
    email: '',
    profile: 'Empresa' as 'Empresa' | 'Produtor' | 'Outro',
    purpose: 'capital de giro',
    estimatedValue: '',
    hasCollateral: 'Sim' as 'Sim' | 'Não',
    collateralType: '',
    urgency: 'Até 30 dias',
    message: '',
    lgpdConsent: true,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const utms = parseUtmsFromUrl();

    const created = saveLead({
      origin: `${window.location.href} (Formulário Seção 21 - Crédito PJ & Agro)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.name,
      company: formData.company,
      cnpj: formData.cnpj,
      role: formData.role || 'Solicitante de Crédito',
      phone: formData.phone,
      email: formData.email,
      demandType: 'credito',
      creditProfile: formData.profile,
      creditPurpose: formData.purpose,
      estimatedValue: formData.estimatedValue,
      hasCollateral: formData.hasCollateral,
      collateralType: formData.collateralType,
      urgency: formData.urgency,
      message: formData.message || `Demanda de crédito: ${formData.purpose}. Perfil: ${formData.profile}. Garantia: ${formData.hasCollateral} (${formData.collateralType || 'N/A'}). Urgência: ${formData.urgency}.`,
      requestNda: false,
      lgpdConsent: formData.lgpdConsent,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedId(created.id);
    }, 400);
  };

  if (submittedId) {
    return (
      <div className="p-8 text-center space-y-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold font-serif text-slate-900">
          Demanda de Crédito Registrada!
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Protocolo gerado: <strong className="font-mono text-slate-900">{submittedId}</strong>. Seus dados foram encaminhados à mesa de qualificação para alinhamento junto aos parceiros habilitados.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => setSubmittedId(null)}
            className="px-4 py-2 bg-[#C5A869] text-[#0B1728] text-xs font-semibold rounded"
          >
            Submeter nova solicitação
          </button>
          <button
            onClick={() => onNavigate('/admin')}
            className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-semibold rounded"
          >
            Visualizar no CRM
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Nome do Responsável *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Empresa / Produtor Rural *
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Razão social ou fazenda"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            CNPJ ou CPF do Produtor *
          </label>
          <input
            type="text"
            required
            value={formData.cnpj}
            onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
            placeholder="00.000.000/0001-00"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(00) 00000-0000"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contato@empresa.com.br"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Perfil do Solicitante *
          </label>
          <select
            value={formData.profile}
            onChange={(e) => setFormData({ ...formData, profile: e.target.value as any })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
          >
            <option value="Empresa">Empresa</option>
            <option value="Produtor">Produtor Rural</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Finalidade do Crédito *
          </label>
          <select
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
          >
            <option value="capital de giro">Capital de Giro</option>
            <option value="expansão">Expansão</option>
            <option value="investimento">Investimento</option>
            <option value="agro">Agro</option>
            <option value="garantia">Garantia</option>
            <option value="consórcio">Consórcio</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Valor Estimado *
          </label>
          <input
            type="text"
            required
            value={formData.estimatedValue}
            onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
            placeholder="Ex: R$ 2.000.000,00"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Garantia Disponível *
          </label>
          <select
            value={formData.hasCollateral}
            onChange={(e) => setFormData({ ...formData, hasCollateral: e.target.value as any })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
          >
            <option value="Sim">Sim, possui garantia</option>
            <option value="Não">Não possui garantia real</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Urgência (Faixa de Prazo) *
          </label>
          <select
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
          >
            <option value="Imediato (até 15 dias)">Imediato (até 15 dias)</option>
            <option value="Até 30 dias">Até 30 dias</option>
            <option value="Até 60 dias">Até 60 dias</option>
            <option value="Planejamento">Planejamento</option>
          </select>
        </div>
      </div>

      {formData.hasCollateral === 'Sim' && (
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Tipo de Garantia (Opcional)
          </label>
          <input
            type="text"
            value={formData.collateralType}
            onChange={(e) => setFormData({ ...formData, collateralType: e.target.value })}
            placeholder="Ex: Imóvel comercial quitado, fazenda com CAR em dia, duplicatas..."
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      )}

      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Mensagem Complementar (Opcional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Descreva detalhes do faturamento, destinação pretendida ou histórico de crédito..."
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
        />
      </div>

      <div className="pt-2 border-t border-slate-100">
        <label className="flex items-start gap-2 cursor-pointer text-slate-600">
          <input
            type="checkbox"
            required
            checked={formData.lgpdConsent}
            onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
            className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
          />
          <span>Autorizo o tratamento dos dados estritamente para qualificação de crédito junto a parceiros habilitados (LGPD). *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        <span>{isSubmitting ? 'Registrando no CRM...' : 'Enviar Demanda de Crédito'}</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </form>
  );
};

