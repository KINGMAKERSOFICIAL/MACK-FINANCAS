import React, { useState } from 'react';
import {
  Users,
  Building2,
  Coins,
  Briefcase,
  Landmark,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  FileCheck,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';
import { Reveal } from '../components/Reveal';
import { ImageReveal } from '../components/ImageReveal';

interface PartnersPageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onNavigate,
  settings,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    cnpj: '',
    segment: '',
    cityState: '',
    email: '',
    phone: '',
    partnerType: 'Originação',
    contribution: '',
    requestNda: false,
    lgpdConsent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utms = parseUtmsFromUrl();

    saveLead({
      origin: `${window.location.href} (Formulário Seja um Parceiro)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.name,
      company: formData.company,
      cnpj: formData.cnpj || 'Não informado',
      role: formData.role || 'Representante Legal',
      phone: formData.phone,
      email: formData.email,
      demandType: 'parceiro',
      partnerSegment: formData.segment,
      partnerCityState: formData.cityState,
      partnerType: formData.partnerType,
      partnerContribution: formData.contribution,
      message: `Credenciamento de parceiro (${formData.partnerType}). Segmento: ${formData.segment}. Atuação: ${formData.cityState}. Como pode agregar: ${formData.contribution}`,
      requestNda: formData.requestNda,
      lgpdConsent: formData.lgpdConsent,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-[#0B1728] text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A869]">
              <span>Rede Institucional B2B</span>
              <span className="text-slate-600">·</span>
              <span>Parcerias que Geram Resultados</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Parceiros
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              A MACK funciona como hub comercial que identifica a oportunidade, qualifica a demanda e aciona o parceiro certo.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              Juntos, vamos mais longe: conectamos compradores, fundos, fintechs, integradores e especialistas a demandas reais e qualificadas.
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIAS DE PARCEIROS (SECTION 10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
            Ecossistema Estruturado
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900 mt-1">
            Nossos Parceiros Estratégicos
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Trabalhamos com parceiros estratégicos em diferentes frentes, conectando oportunidades a soluções reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Categoria 1 */}
          <Reveal delay={0} variant="fade-up">
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Compradores Institucionais
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conectamos ativos e oportunidades a fundos de investimento, family offices, asset managers e outros investidores institucionais.
              </p>
            </div>
          </Reveal>

          {/* Categoria 2 */}
          <Reveal delay={100} variant="fade-up">
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Instituições & Soluções de Crédito
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parceria com bancos, FIDCs, fintechs e estruturadores de crédito para viabilizar soluções sob medida para empresas e produtores.
              </p>
            </div>
          </Reveal>

          {/* Categoria 3 */}
          <Reveal delay={200} variant="fade-up">
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Soluções Corporativas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Colaboração com consultorias, integradores e empresas especializadas para entregar soluções operacionais, estratégicas e tecnológicas.
              </p>
            </div>
          </Reveal>

          {/* Categoria 4 */}
          <Reveal delay={300} variant="fade-up">
            <div className="card-lux h-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Soluções para Setor Público
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parceria com empresas e instituições que atuam no mercado público, para desenvolvimento e execução de soluções inovadoras e eficientes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* DESTAQUE VISUAL: ALIANÇA E EXECUÇÃO B2B */}
        <Reveal variant="scale">
          <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-10 shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869]">
                  Ecossistema B2B Qualificado
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif leading-tight">
                  Alianças que transformam originação em fechamento.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Trabalhamos com regras de engajamento claras, acordos de confidencialidade mútuos (NDAs) e remuneração estruturada sobre o sucesso das operações.
                </p>
              </div>
              <div className="lg:col-span-5">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                  alt="Aliança Estratégica B2B e Parcerias MACK"
                  badge="Parceria Estratégica"
                  caption="Conexões responsáveis com governança e sigilo"
                  aspectRatio="aspect-[16/10]"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Note on Authorized Brands (Anti-cliché rule) */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 text-center">
          <ShieldCheck className="w-4 h-4 text-[#C5A869] inline mr-1.5 -mt-0.5" />
          <span>
            Marcas de parceiros somente serão exibidas publicamente mediante autorização expressa e instrumento formalizado de cooperação.
          </span>
        </div>
      </section>

      {/* 3. FLUXO DE PARCERIA & FORMULÁRIO DE CREDENCIAMENTO */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Fluxo */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#C5A869] font-mono">
                  Processo de Adesão
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  Como Funciona a Parceria
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Um processo simples, objetivo e transparente para construirmos resultados duradouros juntos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#0B1728] text-white text-xs font-mono flex items-center justify-center">1</span>
                    <span>Cadastro Inicial</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8">
                    Você preenche o formulário ao lado com as informações da sua empresa e área de atuação.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#0B1728] text-white text-xs font-mono flex items-center justify-center">2</span>
                    <span>Qualificação & Alinhamento</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8">
                    Nossa equipe avalia o perfil, expertise e sinergia com nossas frentes de atuação e teses de investimento.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#0B1728] text-white text-xs font-mono flex items-center justify-center">3</span>
                    <span>Envio de Oportunidades</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8">
                    Identificamos oportunidades aderentes ao seu perfil e acionamos você no momento certo.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#0B1728] text-white text-xs font-mono flex items-center justify-center">4</span>
                    <span>Execução Coordenada</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8">
                    Trabalhamos juntos na estruturação e execução, com acompanhamento próximo e foco em resultados.
                  </p>
                </div>
              </div>

              {/* Pillars */}
              <div className="p-5 rounded-xl bg-[#0B1728] text-white space-y-3">
                <div className="text-xs font-semibold text-[#C5A869] uppercase tracking-wider">
                  Diferenciais do Ecossistema MACK
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-slate-800/60 rounded">
                    <div className="font-bold text-white">Mais</div>
                    <div className="text-[11px] text-slate-400">Oportunidades</div>
                  </div>
                  <div className="p-2 bg-slate-800/60 rounded">
                    <div className="font-bold text-white">Soluções</div>
                    <div className="text-[11px] text-slate-400">Completas</div>
                  </div>
                  <div className="p-2 bg-slate-800/60 rounded">
                    <div className="font-bold text-white">Crescimento</div>
                    <div className="text-[11px] text-slate-400">Sustentável</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Formulário de Captura / CRM */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  Seja um Parceiro da MACK
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Preencha o formulário e nossa equipe entrará em contato para agendar uma reunião de alinhamento.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-serif">
                    Credenciamento Enviado com Sucesso!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Sua solicitação de parceria foi registrada na nossa base central (CRM) e encaminhada à diretoria da MACK. Em breve entraremos em contato.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] bg-[#C5A869] rounded-md transition-colors"
                  >
                    Enviar outro credenciamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Dr. Roberto Alencar"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Empresa / Instituição *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Capital Partners Asset"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Cargo / Função
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ex: Diretor de Novos Negócios"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        CNPJ da Empresa
                      </label>
                      <input
                        type="text"
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
                        Segmento de Atuação *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        placeholder="Ex: Gestão de Recursos / Fintech / Consultoria"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Cidade / UF *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                        placeholder="Ex: Brasília / DF"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      Tipo de Parceria Desejada *
                    </label>
                    <select
                      value={formData.partnerType}
                      onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
                    >
                      <option value="Originação">Originação & Special Situations (Comprador/Originador)</option>
                      <option value="Crédito">Crédito PJ & Agro (Instituição / FIDC / Estruturador)</option>
                      <option value="Solução Corporativa">Soluções Corporativas (Consultoria / Tecnologia / B2B)</option>
                      <option value="Setor Público">Setor Público & GovTech (Tecnologia Governamental)</option>
                      <option value="Outro">Outro modelo de sinergia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Como sua empresa pode agregar à rede MACK? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.contribution}
                      onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                      placeholder="Descreva capacidade operacional, ticket médio, tipo de clientes ou produtos de interesse..."
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
                    />
                  </div>

                  {/* NDA & LGPD */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="flex items-start gap-2 cursor-pointer text-slate-600">
                      <input
                        type="checkbox"
                        checked={formData.requestNda}
                        onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                      />
                      <span>
                        Desejo avaliar assinatura de Acordo de Confidencialidade (NDA) antes da troca de informações negociais detalhadas.
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer text-slate-600">
                      <input
                        type="checkbox"
                        required
                        checked={formData.lgpdConsent}
                        onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                      />
                      <span>
                        Autorizo o tratamento dos dados cadastrais para fins exclusivos de qualificação institucional da parceria comercial (LGPD).
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <span>{isSubmitting ? 'Registrando...' : 'Quero ser parceiro da MACK'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
