import React, { useState, useEffect } from 'react';
import {
  Scale,
  Coins,
  Users,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowUpRight,
  FileCheck,
  Upload,
} from 'lucide-react';
import { SiteSettings, DemandType } from '../types';
import { Reveal } from '../components/Reveal';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';

interface SubmitOpportunityPageProps {
  initialType?: string;
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const SubmitOpportunityPage: React.FC<SubmitOpportunityPageProps> = ({
  initialType,
  settings,
  onNavigate,
}) => {
  const [demandType, setDemandType] = useState<DemandType>('ativo');

  useEffect(() => {
    if (initialType === 'ativo' || initialType === 'credito' || initialType === 'parceiro' || initialType === 'corporativo') {
      setDemandType(initialType as DemandType);
    }
  }, [initialType]);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    cnpj: '',
    role: '',
    phone: '',
    email: '',
    message: '',
    requestNda: false,
    lgpdConsent: true,

    // Ativo fields
    assetType: 'Precatório Federal',
    estimatedValue: '',
    debtorEntity: 'União Federal',
    currentStage: 'Com trânsito em julgado e cálculos homologados',
    availableDocuments: [] as string[],

    // Crédito fields
    creditProfile: 'Empresa' as 'Empresa' | 'Produtor' | 'Outro',
    creditPurpose: 'Capital de Giro',
    hasCollateral: 'Sim' as 'Sim' | 'Não',
    collateralType: '',
    urgency: 'Até 30 dias',

    // Corporativo fields
    corporateChallenge: 'Eficiência Tributária e Operacional',
    corporateDescription: '',

    // Parceiro fields
    partnerSegment: '',
    partnerCityState: '',
    partnerType: 'Originação',
    partnerContribution: '',
  });

  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDocument = (doc: string) => {
    setFormData(prev => {
      const exists = prev.availableDocuments.includes(doc);
      return {
        ...prev,
        availableDocuments: exists
          ? prev.availableDocuments.filter(d => d !== doc)
          : [...prev.availableDocuments, doc],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utms = parseUtmsFromUrl();

    const created = saveLead({
      origin: `${window.location.href} (Portal de Envio de Oportunidades)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.name,
      company: formData.company,
      cnpj: formData.cnpj || 'Não informado',
      role: formData.role,
      phone: formData.phone,
      email: formData.email,
      demandType: demandType,
      message: formData.message,
      requestNda: formData.requestNda,
      lgpdConsent: formData.lgpdConsent,

      // Condicionais
      ...(demandType === 'ativo' && {
        assetType: formData.assetType,
        estimatedValue: formData.estimatedValue,
        debtorEntity: formData.debtorEntity,
        currentStage: formData.currentStage,
        availableDocuments: formData.availableDocuments,
      }),
      ...(demandType === 'credito' && {
        creditProfile: formData.creditProfile,
        creditPurpose: formData.creditPurpose,
        estimatedValue: formData.estimatedValue,
        hasCollateral: formData.hasCollateral,
        collateralType: formData.collateralType,
        urgency: formData.urgency,
      }),
      ...(demandType === 'corporativo' && {
        corporateChallenge: formData.corporateChallenge,
        corporateDescription: formData.corporateDescription,
        estimatedRevenue: formData.estimatedValue,
      }),
      ...(demandType === 'parceiro' && {
        partnerSegment: formData.partnerSegment,
        partnerCityState: formData.partnerCityState,
        partnerType: formData.partnerType,
        partnerContribution: formData.partnerContribution,
      }),
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedLeadId(created.id);
    }, 450);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-[#050B14] text-white pt-20 pb-24 sm:pt-24 sm:pb-28 relative overflow-hidden grain">
        <img
          src="/assets/sectors/estrategia.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-45 pointer-events-none select-none scroll-parallax"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/90 to-[#050B14]/35 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050B14] to-transparent pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-[#15345A]/60 blur-[120px] animate-aurora pointer-events-none" />
        <div className="absolute top-10 right-[-12rem] w-[34rem] h-[34rem] rounded-full bg-[#C5A869]/15 blur-[120px] animate-aurora [animation-delay:-9s] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 gold-hairline" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 scroll-drift">
            <div className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C5A869]">
              <span className="w-10 h-px bg-[#C5A869]/70" />
              <span>Oportunidades Reais</span>
              <span className="text-slate-600">·</span>
              <span>Parceiros Certos</span>
            </div>

            <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-6xl font-semibold font-serif text-white tracking-tight leading-[1.05] text-balance">
              Enviar Oportunidade
            </h1>

            <p className="animate-fade-up [animation-delay:240ms] text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Apresente seu ativo, operação ou demanda empresarial para avaliação inicial.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONVERSION SECTION */}
      <Reveal>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Explanatory Column & Trust Elements */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold font-serif text-slate-900">
                Três formas de gerar novas possibilidades
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escolha o tipo de oportunidade e conte com a experiência da MACK para analisar, estruturar e conectar à melhor solução de mercado.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDemandType('ativo')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    demandType === 'ativo'
                      ? 'bg-[#0B1728] text-white border-[#0B1728] shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <Scale className={`w-5 h-5 shrink-0 mt-0.5 ${demandType === 'ativo' ? 'text-[#C5A869]' : 'text-slate-500'}`} />
                  <div>
                    <div className="font-bold text-xs">Tenho um ativo</div>
                    <div className={`text-[11px] mt-0.5 ${demandType === 'ativo' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Precatórios federais/estaduais, créditos judiciais, direitos creditórios e imóveis.
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDemandType('credito')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    demandType === 'credito'
                      ? 'bg-[#0B1728] text-white border-[#0B1728] shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <Coins className={`w-5 h-5 shrink-0 mt-0.5 ${demandType === 'credito' ? 'text-[#C5A869]' : 'text-slate-500'}`} />
                  <div>
                    <div className="font-bold text-xs">Preciso de crédito / solução</div>
                    <div className={`text-[11px] mt-0.5 ${demandType === 'credito' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Giro, garantia real, home equity, crédito agro e consórcios estruturados.
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDemandType('parceiro')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    demandType === 'parceiro'
                      ? 'bg-[#0B1728] text-white border-[#0B1728] shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <Users className={`w-5 h-5 shrink-0 mt-0.5 ${demandType === 'parceiro' ? 'text-[#C5A869]' : 'text-slate-500'}`} />
                  <div>
                    <div className="font-bold text-xs">Quero ser parceiro</div>
                    <div className={`text-[11px] mt-0.5 ${demandType === 'parceiro' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Fundos, family offices, bancos, fintechs e consultorias com capacidade de execução.
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Lock className="w-4 h-4 text-[#C5A869]" />
                <span>Mensagem de Confidencialidade</span>
              </div>
              <p className="leading-relaxed">
                As informações serão tratadas com estrita confidencialidade e finalidade restrita à análise técnica e encaminhamento da demanda aos parceiros habilitados.
              </p>
            </div>

            {/* Aviso Obrigatório */}
            <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-[11px] text-amber-950 leading-relaxed">
              <strong>Aviso de Isenção:</strong> O envio desta solicitação não gera obrigação de fechamento, aquisição, aprovação de crédito ou contratação por parte da MACK ou de seus parceiros.
            </div>
          </div>

          {/* Right: Dynamic Interactive Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            {submittedLeadId ? (
              <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-slate-900">
                    Oportunidade Recebida com Sucesso!
                  </h3>
                  <div className="text-xs font-mono text-slate-500">
                    Protocolo de Triagem: <span className="font-bold text-slate-900">{submittedLeadId}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Sua oportunidade foi gravada na nossa <strong>Base Central / CRM</strong> e encaminhada com prioridade para a equipe de originação e estruturação da MACK.
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-md mx-auto space-y-1 text-left">
                  <div className="font-semibold text-slate-900">Próximos passos imediatos:</div>
                  <div>1. Triagem e qualificação de elegibilidade documental.</div>
                  <div>2. Contato da equipe MACK em até 24–48h úteis.</div>
                  <div>3. Caso solicitado, formalização prévia do NDA.</div>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => {
                      setSubmittedLeadId(null);
                      setFormData({
                        ...formData,
                        message: '',
                        estimatedValue: '',
                      });
                    }}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B1728] btn-gold rounded-full transition-all cursor-pointer"
                  >
                    Submeter nova oportunidade
                  </button>
                  <button
                    onClick={() => onNavigate('/admin')}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-all cursor-pointer"
                  >
                    Visualizar na Base Central (CRM)
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Preencha os dados da sua oportunidade
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Quanto mais detalhes fornecidos, mais rápida e assertiva será nossa análise preliminar.
                  </p>
                </div>

                {/* Identification block (Always required) */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                    01. Identificação e Contato
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Eduardo Silveira"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Empresa / Produtor *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Razão Social ou Nome da Propriedade"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Cargo / Função *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ex: Sócio, Diretor Financeiro, Produtor Rural"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        CNPJ ou CPF *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
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
                  </div>
                </div>

                {/* Conditional block for "TENHO UM ATIVO" */}
                {demandType === 'ativo' && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                      02. Detalhes do Ativo / Operação
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Tipo de Ativo / Operação *
                        </label>
                        <select
                          value={formData.assetType}
                          onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Precatório Federal">Precatório Federal (TRFs / União)</option>
                          <option value="Precatório Estadual">Precatório Estadual</option>
                          <option value="Precatório Municipal">Precatório Municipal</option>
                          <option value="Legal Claims">Legal Claims / Crédito Judicial</option>
                          <option value="Direito Creditório">Direitos Creditórios / Carteira</option>
                          <option value="Ativo Imobiliário">Ativo Imobiliário / Special Situation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Valor Estimado de Face / Causa *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.estimatedValue}
                          onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                          placeholder="Ex: R$ 2.500.000,00"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Ente Devedor / Contraparte *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.debtorEntity}
                          onChange={(e) => setFormData({ ...formData, debtorEntity: e.target.value })}
                          placeholder="Ex: União Federal, Estado de SP, Município..."
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Estágio / Situação Atual *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.currentStage}
                          onChange={(e) => setFormData({ ...formData, currentStage: e.target.value })}
                          placeholder="Ex: Ofício requisitório expedido, trânsito em julgado..."
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-2">
                        Documentos Já Disponíveis para Análise Preliminar:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          'Ofício Requisitório / Precatório',
                          'Certidão de Trânsito em Julgado',
                          'Memória de Cálculo Homologada',
                          'Cadeia de Cessões / Procurações',
                          'Certidão de Objeto e Pé',
                          'Matrícula Atualizada do Imóvel',
                        ].map((doc) => (
                          <label
                            key={doc}
                            onClick={() => toggleDocument(doc)}
                            className={`flex items-center gap-2 p-2 rounded border cursor-pointer select-none transition-colors ${
                              formData.availableDocuments.includes(doc)
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              readOnly
                              checked={formData.availableDocuments.includes(doc)}
                              className="hidden"
                            />
                            <span className="text-[11px] font-medium">{doc}</span>
                          </label>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">
                        * Upload de arquivos volumosos será solicitado via link seguro após a validação preliminar do dossier.
                      </p>
                    </div>
                  </div>
                )}

                {/* Conditional block for "PRECISO DE CRÉDITO" */}
                {demandType === 'credito' && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                      02. Perfil da Demanda de Crédito
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Perfil do Solicitante *
                        </label>
                        <select
                          value={formData.creditProfile}
                          onChange={(e) => setFormData({ ...formData, creditProfile: e.target.value as any })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Empresa">Empresa (PJ Geral)</option>
                          <option value="Produtor">Produtor Rural / Agronegócio</option>
                          <option value="Outro">Outro porte corporativo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Finalidade do Crédito *
                        </label>
                        <select
                          value={formData.creditPurpose}
                          onChange={(e) => setFormData({ ...formData, creditPurpose: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Capital de Giro">Capital de Giro</option>
                          <option value="Crédito com Garantia Real">Crédito com Garantia Real</option>
                          <option value="Home Equity Corporativo">Home Equity Corporativo</option>
                          <option value="Crédito Agro / Custeio / Investimento">Crédito Agro / Custeio / Investimento</option>
                          <option value="Consórcio Estruturado">Consórcio Estruturado</option>
                          <option value="Solução Estruturada / Reestruturação">Solução Estruturada / Reestruturação</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Valor Estimado *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.estimatedValue}
                          onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                          placeholder="Ex: R$ 5.000.000,00"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Possui Garantia Real?
                        </label>
                        <select
                          value={formData.hasCollateral}
                          onChange={(e) => setFormData({ ...formData, hasCollateral: e.target.value as any })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Sim">Sim, possui garantia real</option>
                          <option value="Não">Não possui garantia real</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Urgência Desejada
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Imediata (até 15 dias)">Imediata (até 15 dias)</option>
                          <option value="Até 30 dias">Até 30 dias</option>
                          <option value="Até 60 dias">Até 60 dias</option>
                          <option value="Planejamento de médio prazo">Planejamento de médio prazo</option>
                        </select>
                      </div>
                    </div>

                    {formData.hasCollateral === 'Sim' && (
                      <div className="text-xs">
                        <label className="block font-semibold text-slate-700 mb-1">
                          Tipo de Garantia Disponível
                        </label>
                        <input
                          type="text"
                          value={formData.collateralType}
                          onChange={(e) => setFormData({ ...formData, collateralType: e.target.value })}
                          placeholder="Ex: Imóvel comercial quitado em Brasília avaliado em R$ 8M"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Conditional block for "QUERO SER PARCEIRO" */}
                {demandType === 'parceiro' && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                      02. Perfil Institucional de Parceria
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Segmento da Instituição *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.partnerSegment}
                          onChange={(e) => setFormData({ ...formData, partnerSegment: e.target.value })}
                          placeholder="Ex: Fundo Special Situations, Banco, FIDC, Consultoria..."
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Cidade / UF de Base *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.partnerCityState}
                          onChange={(e) => setFormData({ ...formData, partnerCityState: e.target.value })}
                          placeholder="Ex: São Paulo / SP"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>
                    </div>

                    <div className="text-xs">
                      <label className="block font-semibold text-slate-700 mb-1">
                        Área de Conexão na MACK *
                      </label>
                      <select
                        value={formData.partnerType}
                        onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                      >
                        <option value="Originação">Originação & Ativos (Comprador ou originador qualificado)</option>
                        <option value="Crédito">Crédito PJ & Agro (Provedor ou estruturador de crédito)</option>
                        <option value="Solução Corporativa">Soluções Corporativas (Prestador técnico homologado)</option>
                        <option value="Setor Público">Setor Público & GovTech</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Conditional block for "SOLUÇÕES CORPORATIVAS" */}
                {demandType === 'corporativo' && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider font-mono">
                      02. Detalhes da Demanda Corporativa
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Desafio Principal *
                        </label>
                        <select
                          value={formData.corporateChallenge}
                          onChange={(e) => setFormData({ ...formData, corporateChallenge: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                        >
                          <option value="Eficiência Tributária e Operacional">Eficiência Tributária e Operacional</option>
                          <option value="Tecnologia & Automação">Tecnologia & Automação</option>
                          <option value="Análise de Risco e Informações">Análise de Risco e Informações</option>
                          <option value="Estruturação de Negócios">Estruturação de Negócios</option>
                          <option value="Fintech & Serviços Financeiros B2B">Fintech & Serviços Financeiros B2B</option>
                          <option value="Recuperação e Reorganização">Recuperação e Reorganização</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Faturamento Anual Estimado (Opcional)
                        </label>
                        <input
                          type="text"
                          value={formData.estimatedValue}
                          onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                          placeholder="Ex: R$ 20M a R$ 50M"
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Mensagem descritiva (Always required) */}
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <label className="block font-semibold text-slate-700">
                    Descrição Detalhada da Oportunidade / Demanda *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva com o máximo de precisão a oportunidade, números relevantes, histórico e o que você busca nesta conexão..."
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                  />
                </div>

                {/* Compliance, NDA and LGPD Checkboxes */}
                <div className="space-y-3 pt-3 border-t border-slate-200 text-xs">
                  <label className="flex items-start gap-2.5 cursor-pointer text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.requestNda}
                      onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                    />
                    <span>
                      <strong>Desejo avaliar assinatura de NDA</strong> antes do compartilhamento de documentos sensíveis com parceiros.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer text-slate-700">
                    <input
                      type="checkbox"
                      required
                      checked={formData.lgpdConsent}
                      onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                    />
                    <span>
                      Autorizo o armazenamento e tratamento dos dados pela MACK para os fins estritos de qualificação e encaminhamento a parceiros homologados, em conformidade com a LGPD (Lei 13.709/2018). *
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Gravando Oportunidade no CRM...' : 'Enviar oportunidade para avaliação'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    O envio não gera obrigação de fechamento, aquisição ou aprovação de crédito.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
};
