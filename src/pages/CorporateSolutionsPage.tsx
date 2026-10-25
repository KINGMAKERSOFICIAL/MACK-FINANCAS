import React, { useState } from 'react';
import {
  Briefcase,
  TrendingDown,
  Cpu,
  ShieldAlert,
  GitMerge,
  CreditCard,
  RefreshCw,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';
import { trackEvent } from '../services/analytics';
import { Reveal } from '../components/Reveal';
import { ImageReveal } from '../components/ImageReveal';

interface CorporateSolutionsPageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const CorporateSolutionsPage: React.FC<CorporateSolutionsPageProps> = ({
  onNavigate,
  settings,
}) => {
  const corporateProblems = [
    {
      id: 'tributaria',
      title: 'Eficiência Tributária e Operacional',
      icon: TrendingDown,
      painPoint: 'Carga tributária elevada e gargalos operacionais',
      solution:
        'Estratégias estruturadas para reduzir legalmente a carga tributária, otimizar processos internos e aumentar a eficiência e a margem operacional do negócio.',
      items: [
        'Revisão e conformidade de créditos tributários',
        'Planejamento tributário e societário (com assessoria jurídica independente)',
        'Mapeamento e eliminação de desperdícios de processos'
      ]
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia & Automação',
      icon: Cpu,
      painPoint: 'Processos manuais, perda de produtividade e lentidão sistêmica',
      solution:
        'Soluções de tecnologia corporativa, automação de processos de ponta a ponta e transformação digital para ganhos sustentáveis de escala e produtividade.',
      items: [
        'Automação de rotinas financeiras e de backoffice',
        'Integração de sistemas legados com esteiras modernas',
        'Aceleração de governança com ferramentas de workflow'
      ]
    },
    {
      id: 'risco',
      title: 'Análise de Risco e Informações',
      icon: ShieldAlert,
      painPoint: 'Insegurança em concessão comercial e assimetria de informações',
      solution:
        'Inteligência em dados, compliance comercial e análises aprofundadas para tomadas de decisão seguras, prevenção de fraudes e identificação de oportunidades.',
      items: [
        'Auditoria prévia de fornecedores e parceiros estratégicos',
        'Modelagem de risco de crédito B2B customizada',
        'Inteligência competitiva e due diligence cadastral'
      ]
    },
    {
      id: 'estruturacao',
      title: 'Estruturação de Negócios',
      icon: GitMerge,
      painPoint: 'Complexidade de expansão, reorganização societária ou sucessão',
      solution:
        'Apoio consultivo na modelagem de projetos estratégicos, acordos de sócios, governança e preparação para atração de novos sócios ou investidores.',
      items: [
        'Modelagem societária e acordos parassociais',
        'Preparação para M&A e rodadas de investimento',
        'Assessoria técnica com rede de parceiros homologados'
      ]
    },
    {
      id: 'fintech',
      title: 'Fintech & Serviços Financeiros B2B',
      icon: CreditCard,
      painPoint: 'Custos bancários elevados e lentidão no fluxo de caixa',
      solution:
        'Soluções financeiras contemporâneas, meios de pagamento otimizados, antecipação de recebíveis e serviços especializados sob medida para empresas.',
      items: [
        'Estruturação de meios de pagamento dedicados',
        'Esteira ágil de antecipação de contratos e duplicatas',
        'Otimização do custo médio de transação B2B'
      ]
    },
    {
      id: 'recuperacao',
      title: 'Recuperação e Reorganização',
      icon: RefreshCw,
      painPoint: 'Endividamento excessivo, pressão de credores e estresse de caixa',
      solution:
        'Estratégias para reestruturação financeira e operacional, mediação de passivos com credores e reorganização da solvência patrimonial.',
      items: [
        'Renegociação de passivos bancários e com fornecedores',
        'Plano de recuperação econômico-financeira',
        'Estruturação de plano de solvência continuada'
      ]
    },
  ];

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
              <span>Soluções para os Desafios Reais da Sua Empresa</span>
            </div>

            <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-6xl font-semibold font-serif text-white tracking-tight leading-[1.05] text-balance">
              Soluções Corporativas
            </h1>

            <p className="animate-fade-up [animation-delay:240ms] text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Portfólio de soluções empresariais estruturadas com apoio de parceiros especializados.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Conectamos sua empresa às soluções certas para superar desafios, destravar oportunidades e gerar valor sustentável, sem sobrecarregar sua estrutura fixa.
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUÇÕES ORGANIZADAS POR PROBLEMA (REGRA DO DOCUMENTO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
            Orientação a Problemas
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
            Soluções por Desafio da sua Empresa
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Organizamos nosso portfólio pela dor do seu negócio, conectando consultores, tecnologia e parceiros com capacidade comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateProblems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 80} variant="fade-up">
                <div
                  className="card-lux h-full bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Desafio B2B
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded inline-block">
                        Dor: {item.painPoint}
                      </span>
                      <h3 className="text-lg font-bold font-serif text-slate-900 pt-1">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.solution}
                    </p>

                    <div className="pt-2 text-xs text-slate-700 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-semibold text-slate-900 text-[11px] block">
                        Entregáveis estruturados:
                      </span>
                      {item.items.map((sub, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px]">
                          <span className="text-[#C5A869] font-bold">✓</span>
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate('/enviar-oportunidade', undefined, 'corporativo')}
                      className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Apresentar demanda</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DESTAQUE VISUAL: ESTRATÉGIA CORPORATIVA & DIAGNÓSTICO B2B */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="scale">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-100/60 p-8 rounded-3xl border border-slate-200">
            <div className="lg:col-span-5">
              <ImageReveal
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Eficiência Corporativa e Consultoria Estratégica"
                badge="Diagnóstico B2B"
                caption="Apoio consultivo e conexão técnica com especialistas habilitados"
                aspectRatio="aspect-[16/11]"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#A88B4F] font-semibold">
                Alinhamento e Eficiência
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-snug">
                Estruturação sob medida para destravar gargalos empresariais.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Com abordagem personalizada, conectamos empresas a consultores seniores e soluções especializadas de governança, automação e mitigação de passivos, preservando a saúde financeira e acelerando a tomada de decisão.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'corporativo')}
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1728] rounded-full"
                >
                  <span>Apresentar demanda corporativa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. FLUXO E BENEFÍCIOS */}
      <section className="bg-[#F4EFE4]/70 py-20 border-y border-[#C5A869]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Fluxo */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
                Fluxo Simples & Eficiente
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                Como Funciona a Conexão
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2 text-center sm:text-left">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center mx-auto sm:mx-0">
                  1
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Identificamos a dor
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Entendemos o seu desafio, ouvimos suas necessidades operacionais e analisamos o contexto da sua empresa.
                </p>
              </div>

              <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2 text-center sm:text-left">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center mx-auto sm:mx-0">
                  2
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Qualificamos a demanda
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avaliamos as informações preliminares, definimos o escopo e identificamos as melhores alternativas de solução.
                </p>
              </div>

              <div className="card-lux bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2 text-center sm:text-left">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E9D6A4] via-[#C5A869] to-[#9C7F43] text-[#0B1728] text-xs font-mono font-bold shadow-[0_8px_20px_-8px_rgba(197,168,105,0.9)] font-bold flex items-center justify-center mx-auto sm:mx-0">
                  3
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  Direcionamos à solução
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conectamos ao parceiro ou solução mais adequado, apoiando em todo o processo até a execução final.
                </p>
              </div>
            </div>
          </div>

          {/* Benefícios */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold font-serif text-slate-900 text-center">
              Benefícios para a sua Empresa
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-1.5">
                <div className="text-[#C5A869] font-bold text-sm">Cross-sell Integrado</div>
                <h5 className="font-semibold text-slate-900 text-xs">Um só relacionamento</h5>
                <p className="text-xs text-slate-600">Acesso a múltiplas soluções empresariais em uma única mesa de negócios.</p>
              </div>

              <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-1.5">
                <div className="text-[#C5A869] font-bold text-sm">Estrutura Enxuta</div>
                <h5 className="font-semibold text-slate-900 text-xs">Baixo custo fixo</h5>
                <p className="text-xs text-slate-600">Modelo leve e sob demanda, sem necessidade de inflar a folha de pagamento.</p>
              </div>

              <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-1.5">
                <div className="text-[#C5A869] font-bold text-sm">Customização</div>
                <h5 className="font-semibold text-slate-900 text-xs">Solução sob medida</h5>
                <p className="text-xs text-slate-600">Personalização rigorosa de acordo com a realidade e estágio da sua empresa.</p>
              </div>

              <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-1.5">
                <div className="text-[#C5A869] font-bold text-sm">Alinhamento</div>
                <h5 className="font-semibold text-slate-900 text-xs">Execução coordenada</h5>
                <p className="text-xs text-slate-600">Acompanhamento integrado desde o diagnóstico até a implementação prática.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MÓDULOS FUTUROS (PREVISTOS TECNICAMENTE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
          <Lock className="w-3.5 h-3.5" />
          <span>Módulos em Homologação Cadastral · Expansão Fase 2</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-xs text-slate-600 space-y-2">
          <div className="font-semibold text-slate-800">
            Roadmap Operacional de Novas Soluções:
          </div>
          <p className="leading-relaxed">
            Conforme as diretrizes institucionais 2026, os módulos de <strong>pesquisa e monitoramento CPF/CNPJ</strong>, <strong>análise de risco/KYC comercial</strong>, <strong>plataforma financeira white label</strong> e <strong>planejamento patrimonial</strong> encontram-se em homologação técnica e operacional. Sua ativação comercial ocorrerá estritamente após a conclusão dos instrumentos de conformidade.
          </p>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE SOLUÇÕES CORPORATIVAS DEDICADO (SEÇÃO 24) */}
      <section id="formulario-corporativo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A869] uppercase font-mono">
              <Briefcase className="w-4 h-4" />
              <span>Seção 24 · Apresentação de Demanda B2B</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Apresente o Desafio da sua Empresa
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Campos estruturados para estruturação de negócios, eficiência operacional, tecnologia e reorganização.
            </p>
          </div>

          <CorporateInlineForm onNavigate={onNavigate} />
        </div>
      </section>

      {/* 6. CALL TO ACTION CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden grain bg-[#050B14] text-white rounded-3xl p-8 sm:p-14 border border-[#C5A869]/20 shadow-[0_40px_80px_-40px_rgba(5,11,20,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A869]/20 blur-[100px] animate-aurora pointer-events-none -z-10" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#15345A]/70 blur-[100px] animate-aurora [animation-delay:-8s] pointer-events-none -z-10" />
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-white">
              Vamos encontrar a melhor solução para sua empresa?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Apresente sua demanda e nossa equipe entrará em contato para entender seu desafio e indicar os parceiros mais preparados.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'corporativo')}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] btn-gold rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>Apresentar demanda</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

const CorporateInlineForm: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    company: '',
    cnpj: '',
    contactName: '',
    role: '',
    phone: '',
    email: '',
    challenge: 'Eficiência tributária e operacional',
    description: '',
    estimatedRevenue: '',
    urgency: '',
    lgpdConsent: true,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const utms = parseUtmsFromUrl();

    const created = saveLead({
      origin: `${window.location.href} (Formulário Seção 24 - Soluções Corporativas)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.contactName,
      company: formData.company,
      cnpj: formData.cnpj,
      role: formData.role,
      phone: formData.phone,
      email: formData.email,
      demandType: 'corporativo',
      corporateChallenge: formData.challenge,
      corporateDescription: formData.description,
      estimatedRevenue: formData.estimatedRevenue,
      urgency: formData.urgency,
      message: `Desafio Corporativo: ${formData.challenge}. Faturamento Estimado: ${formData.estimatedRevenue || 'Não informado'}. Urgência: ${formData.urgency || 'Normal'}. Detalhes: ${formData.description}`,
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
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-bold font-serif text-slate-900">
          Demanda Corporativa Recebida!
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Protocolo gerado: <strong className="font-mono text-slate-900">{submittedId}</strong>. Nossa equipe entrará em contato para qualificar a demanda e direcionar aos parceiros técnicos especializados.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => setSubmittedId(null)}
            className="px-4 py-2 bg-[#C5A869] text-[#0B1728] text-xs font-semibold rounded"
          >
            Submeter nova demanda
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Empresa / Razão Social *
          </label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Nome da sua empresa"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            CNPJ da Empresa *
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
            Contato / Nome Completo *
          </label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            placeholder="Seu nome"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Cargo / Função na Empresa *
          </label>
          <input
            type="text"
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            placeholder="Ex: Diretor Financeiro, Sócio, CEO"
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
            placeholder="seu.nome@empresa.com.br"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Desafio Principal *
        </label>
        <select
          value={formData.challenge}
          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
        >
          <option value="Eficiência tributária e operacional">Eficiência tributária e operacional</option>
          <option value="Tecnologia & automação">Tecnologia & automação de processos</option>
          <option value="Análise de risco e informações">Análise de risco e informações comerciais</option>
          <option value="Estruturação de negócios">Estruturação de negócios e governança societária</option>
          <option value="Fintech & serviços financeiros B2B">Fintech & serviços financeiros B2B</option>
          <option value="Recuperação e reorganização">Recuperação e reorganização financeira</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Porte / Faturamento Estimado (Opcional)
          </label>
          <input
            type="text"
            value={formData.estimatedRevenue}
            onChange={(e) => setFormData({ ...formData, estimatedRevenue: e.target.value })}
            placeholder="Ex: R$ 10M a 30M / ano"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Prazo / Urgência (Opcional)
          </label>
          <input
            type="text"
            value={formData.urgency}
            onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
            placeholder="Ex: Próximo trimestre, imediato..."
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Descrição da Demanda *
        </label>
        <textarea
          required
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Descreva o contexto do problema, objetivos almejados e estágio atual..."
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
          <span>Autorizo o tratamento dos dados estritamente para avaliação da demanda corporativa junto a parceiros especializados (LGPD). *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        <span>{isSubmitting ? 'Registrando no CRM...' : 'Apresentar Demanda Corporativa'}</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </form>
  );
};

