import React, { useState } from 'react';
import {
  Landmark,
  ShieldCheck,
  Cpu,
  Search,
  FileCode2,
  Users2,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Building,
  CheckCircle,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';
import { trackEvent } from '../services/analytics';

interface GovTechPageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const GovTechPage: React.FC<GovTechPageProps> = ({
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
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
              <span className="bg-amber-950/80 border border-amber-600/50 px-2 py-0.5 rounded font-mono">
                Módulo em Estruturação · Fase 2
              </span>
              <span className="text-slate-400">·</span>
              <span>Do Setor Público para um Brasil mais Eficiente</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              GovTech & Mercado Público
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Representação comercial, desenvolvimento de mercado e estruturação de canais para soluções voltadas ao setor público.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Conectamos soluções inovadoras a oportunidades reais no setor público, com atuação estratégica, conhecimento de mercado e relacionamento qualificado sob os mais estritos princípios da administração pública.
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY & COMPLIANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
          <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <strong className="font-semibold text-amber-950 block">
              Compromisso de Integridade e Aviso Regulatório Obrigatório:
            </strong>
            A MACK atua estritamente na frente comercial, estratégica e de estruturação de mercado. Não realizamos qualquer ato de facilitação indevida, tráfico de influência ou intermediação ilícita. A contratação pública subordina-se rigorosamente ao processo legal aplicável (Lei 14.133/2021 e marcos setoriais), e a implementação e conformidade técnica são de responsabilidade integral do fornecedor da solução.
          </div>
        </div>
      </section>

      {/* 3. QUATRO FRENTES DE ATUAÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Nossas Frentes de Atuação
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Conectamos tecnologia e inteligência para promover inovação e integridade nas relações institucionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Representação Comercial
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Atuação como ponte entre fornecedores e o setor público, com estruturação de abordagens comerciais técnicas e relacionamento ético e qualificado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Desenvolvimento de Mercado
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mapeamento de demandas governamentais, expansão territorial de atuação e posicionamento de soluções em órgãos e entidades federativas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Inteligência de Oportunidades
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Monitoramento técnico de editais, consultas públicas e planos anuais de contratação, com triagem da viabilidade e conformidade jurídica.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B1728] text-[#C5A869] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              Apoio à Estratégia Comercial
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Suporte na definição de go-to-market público, adequação do catálogo e proposta de valor e conexão com consórcios e parceiros locais.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPROMISSO E PÚBLICO ALVO */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Compromisso */}
          <div className="space-y-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Compromisso com um Mercado Público Íntegro
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Atuamos com rigor ético, respeito irrestrito às normas da administração e linguagem técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h4 className="text-sm font-bold text-slate-900">Compliance & Ética</h4>
                <p className="text-xs text-slate-600">
                  Atuação em plena conformidade com a legislação anticorrupção (Lei 12.846) e as melhores práticas de integridade corporativa.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <FileCode2 className="w-5 h-5 text-[#C5A869]" />
                <h4 className="text-sm font-bold text-slate-900">Linguagem Técnica</h4>
                <p className="text-xs text-slate-600">
                  Compreensão aprofundada da terminologia, arquitetura de sistemas e processos formais do setor público.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <CheckCircle className="w-5 h-5 text-[#0B1728]" />
                <h4 className="text-sm font-bold text-slate-900">Atuação Seletiva</h4>
                <p className="text-xs text-slate-600">
                  Foco em oportunidades com alta viabilidade técnica, utilidade pública comprovada e parceiros de reputação ilibada.
                </p>
              </div>
            </div>
          </div>

          {/* Para Quem */}
          <div className="pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-xl font-bold font-serif text-slate-900 text-center">
              Público-Alvo: Para Quem é a Vertical GovTech
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                Fornecedores de Tecnologia
              </span>
              <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                Empresas de Software & SaaS
              </span>
              <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                Soluções de Inteligência Artificial
              </span>
              <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                Plataformas de Compras e Logística
              </span>
              <span className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-slate-800 shadow-2xs font-medium">
                Soluções Empresariais com Aderência Pública
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO GOVTECH DEDICADO (SEÇÃO 26) */}
      <section id="formulario-govtech" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A869] uppercase font-mono">
              <Landmark className="w-4 h-4" />
              <span>Seção 26 · Apresentação de Solução GovTech</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Credenciamento de Solução para o Setor Público
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Campos estruturados para empresas de tecnologia, software, IA e plataformas voltadas a órgãos públicos.
            </p>
          </div>

          <GovTechInlineForm onNavigate={onNavigate} />
        </div>
      </section>

      {/* 6. CALL TO ACTION CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1728] rounded-2xl p-8 sm:p-12 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-white">
              Vamos levar sua solução ao setor público?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Converse com nossa equipe e descubra como a MACK pode apoiar a estruturação e a expansão da sua tecnologia sob rigorosos parâmetros de compliance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onNavigate('/enviar-oportunidade', undefined, 'parceiro')}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] bg-[#C5A869] hover:bg-[#B59858] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <span>Apresentar solução</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-md transition-all cursor-pointer whitespace-nowrap"
            >
              Falar com a MACK
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const GovTechInlineForm: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    supplierCompany: '',
    contactRole: '',
    contactName: '',
    phone: '',
    email: '',
    solutionDescription: '',
    targetOrg: '',
    differentials: '',
    lgpdConsent: true,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const utms = parseUtmsFromUrl();

    const created = saveLead({
      origin: `${window.location.href} (Formulário Seção 26 - GovTech)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.contactName,
      company: formData.supplierCompany,
      cnpj: 'Fornecedor GovTech',
      role: formData.contactRole,
      phone: formData.phone,
      email: formData.email,
      demandType: 'govtech',
      govtechOrg: formData.targetOrg,
      govtechDifferentials: formData.differentials,
      message: `Solução GovTech: ${formData.solutionDescription}. Órgão Alvo: ${formData.targetOrg || 'Geral'}. Diferenciais: ${formData.differentials || 'Apresentados em reunião'}.`,
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
          Solução GovTech Cadastrada!
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Protocolo gerado: <strong className="font-mono text-slate-900">{submittedId}</strong>. Sua proposta foi encaminhada à equipe de inteligência governamental e desenvolvimento de mercado da MACK.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => setSubmittedId(null)}
            className="px-4 py-2 bg-[#C5A869] text-[#0B1728] text-xs font-semibold rounded"
          >
            Cadastrar outra solução
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
            Empresa Fornecedora da Solução *
          </label>
          <input
            type="text"
            required
            value={formData.supplierCompany}
            onChange={(e) => setFormData({ ...formData, supplierCompany: e.target.value })}
            placeholder="Nome da empresa tech / fornecedor"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Responsável / Cargo *
          </label>
          <input
            type="text"
            required
            value={formData.contactRole}
            onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
            placeholder="Ex: Diretor de Relações Institucionais"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Nome do Contato *
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

      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Descrição da Solução Tecnológica *
        </label>
        <textarea
          required
          rows={3}
          value={formData.solutionDescription}
          onChange={(e) => setFormData({ ...formData, solutionDescription: e.target.value })}
          placeholder="Descreva funcionalidades, arquitetura, problemas que resolve e cases no setor público..."
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Órgão / Mercado-Alvo (Opcional)
          </label>
          <input
            type="text"
            value={formData.targetOrg}
            onChange={(e) => setFormData({ ...formData, targetOrg: e.target.value })}
            placeholder="Ex: Ministérios, Governos Estaduais, Tribunais, Prefeituras"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Diferenciais e Referências Técnicas (Opcional)
          </label>
          <input
            type="text"
            value={formData.differentials}
            onChange={(e) => setFormData({ ...formData, differentials: e.target.value })}
            placeholder="Ex: Certificações de segurança, interoperabilidade..."
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 text-[11px]">
        <strong>Material de Apresentação:</strong> Dossiês técnicos, atestados de capacidade e documentação comercial volumosa serão recebidos por canal seguro após a qualificação inicial.
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
          <span>Autorizo o tratamento dos dados estritamente para avaliação da viabilidade comercial no setor público (LGPD). *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#C5A869] hover:bg-[#B59858] text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        <span>{isSubmitting ? 'Registrando no CRM...' : 'Cadastrar Solução GovTech'}</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </form>
  );
};

