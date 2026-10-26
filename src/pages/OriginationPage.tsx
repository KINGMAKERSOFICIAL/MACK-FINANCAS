import React, { useState } from 'react';
import {
  Scale,
  FileCheck2,
  Building,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  FileText,
  ShieldCheck,
  Landmark,
  Briefcase,
  Layers,
} from 'lucide-react';
import { SiteSettings } from '../types';
import { saveLead, parseUtmsFromUrl } from '../services/crmStorage';
import { trackEvent } from '../services/analytics';
import { Reveal } from '../components/Reveal';
import { ImageReveal } from '../components/ImageReveal';

interface OriginationPageProps {
  onNavigate: (path: string, hash?: string, initialType?: string) => void;
  settings: SiteSettings;
}

export const OriginationPage: React.FC<OriginationPageProps> = ({
  onNavigate,
  settings,
}) => {
  const [selectedAnchor, setSelectedAnchor] = useState<string>('todos');

  const scrollToAnchor = (id: string) => {
    setSelectedAnchor(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-[#050B14] text-white pt-20 pb-24 sm:pt-24 sm:pb-28 relative overflow-hidden grain">
        <img
          src="/assets/sectors/legal-claims.webp"
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
              <span>Ativos Reais</span>
              <span className="text-slate-600">·</span>
              <span>Oportunidades Concretas</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-mono">Prioridade Máxima</span>
            </div>

            <h1 className="animate-fade-up [animation-delay:120ms] text-4xl sm:text-6xl font-semibold font-serif text-white tracking-tight leading-[1.05] text-balance">
              Originação & Ativos
            </h1>

            <p className="animate-fade-up [animation-delay:240ms] text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Estruturamos e conectamos oportunidades a compradores e parceiros com capacidade de execução.
            </p>

            {/* Quick anchors bar */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 mr-2">Frentes:</span>
              <button
                onClick={() => scrollToAnchor('precatorios')}
                className="btn-glass px-4 py-2 rounded-full text-xs text-slate-200 hover:text-[#E9D6A4] cursor-pointer"
              >
                Precatórios
              </button>
              <button
                onClick={() => scrollToAnchor('legal-claims')}
                className="btn-glass px-4 py-2 rounded-full text-xs text-slate-200 hover:text-[#E9D6A4] cursor-pointer"
              >
                Legal Claims
              </button>
              <button
                onClick={() => scrollToAnchor('direitos-creditorios')}
                className="btn-glass px-4 py-2 rounded-full text-xs text-slate-200 hover:text-[#E9D6A4] cursor-pointer"
              >
                Direitos Creditórios
              </button>
              <button
                onClick={() => scrollToAnchor('oportunidades-especiais')}
                className="btn-glass px-4 py-2 rounded-full text-xs text-slate-200 hover:text-[#E9D6A4] cursor-pointer"
              >
                Oportunidades Especiais & Imóveis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY NOTICE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold text-amber-900">Nota de Governança e Segregação Comercial:</strong> A MACK atua na originação e estruturação comercial de oportunidades. Não há promessa de aquisição, preço, deságio garantido ou fechamento sem prévia análise e aprovação formal da contraparte compradora responsável. Não realizamos compra direta com capital próprio.
          </div>
        </div>
      </section>

      {/* 3. NOSSAS QUATRO FRENTES DE ORIGINAÇÃO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Frentes de Originação & Special Situations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Ativos e oportunidades selecionados com análise criteriosa, conectando demanda e solução no mercado público e privado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frente 1: Precatórios */}
          <Reveal delay={0} variant="fade-up">
            <div
              id="precatorios"
              className="card-lux h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4 hover:border-[#C5A869]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <ImageReveal
                  src="/assets/sectors/juridico.webp"
                  alt="Precatórios Judiciais Federais, Estaduais e Municipais"
                  badge="Precatórios"
                  aspectRatio="aspect-[16/9]"
                />
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      #precatorios
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Precatórios
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Originação e triagem comercial de oportunidades envolvendo precatórios federais, estaduais e municipais, para encaminhamento a compradores institucionais conforme critérios de elegibilidade.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">Âmbito de atuação:</div>
                    <div>• Precatórios Federais (TRFs / União Federal)</div>
                    <div>• Precatórios Estaduais (Regime Especial e Comum)</div>
                    <div>• Precatórios Municipais de Capitais e Grandes Centros</div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
                  className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Apresentar precatório para triagem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Frente 2: Legal Claims */}
          <Reveal delay={120} variant="fade-up">
            <div
              id="legal-claims"
              className="card-lux h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4 hover:border-[#C5A869]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <ImageReveal
                  src="/assets/sectors/legal-claims.webp"
                  alt="Legal Claims e Direitos Litigiosos"
                  badge="Legal Claims"
                  aspectRatio="aspect-[16/9]"
                />
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                      <Scale className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      #legal-claims
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Legal Claims
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Originação de direitos litigiosos e créditos judiciais com potencial de monetização, sujeitos à análise do comprador e à documentação aplicável.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">Perfil avaliado:</div>
                    <div>• Ações judiciais em fase de execução contra entes solventes</div>
                    <div>• Decisões com trânsito em julgado parcial ou homologações de cálculos</div>
                    <div>• Demandas com comprovação pericial sólida e documentada</div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
                  className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Apresentar legal claims</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Frente 3: Direitos Creditórios */}
          <Reveal delay={200} variant="fade-up">
            <div
              id="direitos-creditorios"
              className="card-lux h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4 hover:border-[#C5A869]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <ImageReveal
                  src="/assets/sectors/recebiveis.webp"
                  alt="Direitos Creditórios Empresariais e FIDCs"
                  badge="Recebíveis"
                  aspectRatio="aspect-[16/9]"
                />
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      #direitos-creditorios
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Direitos Creditórios
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Carteiras, recebíveis e créditos empresariais passíveis de análise e estruturação, conectando empresas a FIDCs e investidores especializados.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">Estruturas típicas:</div>
                    <div>• Carteiras performadas e a performar de contratos corporativos</div>
                    <div>• Recebíveis de fornecedores e contratos de longo prazo</div>
                    <div>• Créditos decorrentes de transações mercantis e agropecuárias</div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
                  className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Apresentar recebíveis ou carteiras</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Frente 4: Oportunidades Especiais & Ativos Imobiliários */}
          <Reveal delay={300} variant="fade-up">
            <div
              id="oportunidades-especiais"
              className="card-lux h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm space-y-4 hover:border-[#C5A869]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <ImageReveal
                  src="/assets/sectors/imobiliario.webp"
                  alt="Oportunidades Especiais e Ativos Imobiliários"
                  badge="Special Situations"
                  aspectRatio="aspect-[16/9]"
                />
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#15273F] to-[#050B14] text-[#C5A869] ring-1 ring-[#C5A869]/30 shadow-lg flex items-center justify-center">
                      <Building className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      #oportunidades-especiais
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900">
                    Oportunidades Especiais & Ativos Imobiliários
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ativos e situações não convencionais, inclusive ativos imobiliários e situações distressed, conforme aderência ao perfil de compradores e parceiros.
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900">Exemplos de demandas:</div>
                    <div>• Imóveis comerciais, industriais ou rurais em situações especiais</div>
                    <div>• Reorganização de garantias e liquidez patrimonial</div>
                    <div>• Operações complexas com deságio e tese clara de liquidez</div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
                  className="text-xs font-semibold text-[#0B1728] hover:text-[#C5A869] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Apresentar ativo imobiliário ou especial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CRITÉRIOS EXIBIDOS (MANDATORY SECTION 6) */}
      <section className="bg-[#F4EFE4]/70 py-20 border-y border-[#C5A869]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#A88B4F]">
              Due Diligence Preliminar
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Como Avaliamos as Oportunidades
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Critérios objetivos aplicados para identificar e priorizar as melhores oportunidades para encaminhamento aos parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Criteria 1 */}
            <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A869] font-semibold">
                Critério 01
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Ente devedor ou contraparte
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Análise da solidez, capacidade de pagamento, regime orçamentário e histórico de adimplemento da obrigação.
              </p>
            </div>

            {/* Criteria 2 */}
            <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A869] font-semibold">
                Critério 02
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Estágio / estrutura da operação
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Avaliação do status processual, riscos jurídicos mitigados, modelagem da cessão e tempo estimado de ciclo.
              </p>
            </div>

            {/* Criteria 3 */}
            <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A869] font-semibold">
                Critério 03
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Documentação disponível
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Verificação da completude, consistência dos cálculos, certidões de trânsito em julgado e cadeia de titularidade.
              </p>
            </div>

            {/* Criteria 4 */}
            <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A869] font-semibold">
                Critério 04
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Valor / ticket
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compatibilidade do volume financeiro com a tese de investimento e apetite dos fundos e parceiros cadastrados.
              </p>
            </div>

            {/* Criteria 5 */}
            <div className="card-lux bg-white rounded-2xl p-5 border border-slate-200/80 shadow-[0_18px_45px_-32px_rgba(11,23,40,0.45)] space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C5A869] font-semibold">
                Critério 05
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Prazo e elegibilidade
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Horizonte de realização temporal e estrita aderência aos critérios legais, tributários e regulatórios aplicáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO DE ORIGINAÇÃO DEDICADO (SEÇÃO 16) */}
      <section id="formulario-originacao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A869] uppercase font-mono">
              <FileCheck2 className="w-4 h-4" />
              <span>Seção 16 · Envio Direto de Ativos</span>
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900 mt-1">
              Apresente seu Ativo para Triagem Preliminar
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Campos estruturados para originação de precatórios, legal claims, créditos judiciais e recebíveis corporativos.
            </p>
          </div>

          <OriginationInlineForm onNavigate={onNavigate} />
        </div>
      </section>

      {/* 6. CALL TO ACTION CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden grain bg-[#050B14] text-white rounded-3xl p-8 sm:p-14 border border-[#C5A869]/20 shadow-[0_40px_80px_-40px_rgba(5,11,20,0.9)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A869]/20 blur-[100px] animate-aurora pointer-events-none -z-10" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#15345A]/70 blur-[100px] animate-aurora [animation-delay:-8s] pointer-events-none -z-10" />
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-white">
              Possui um ativo para avaliação inicial?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Nossa equipe técnica realiza a triagem preliminar com agilidade e total confidencialidade, conectando seu caso a compradores qualificados.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/enviar-oportunidade', undefined, 'ativo')}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1728] btn-gold rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>Enviar ativo para análise</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

const OriginationInlineForm: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    cnpj: '',
    phone: '',
    email: '',
    assetType: 'Precatório Federal',
    estimatedValue: '',
    debtorEntity: '',
    currentStage: '',
    availableDocuments: [] as string[],
    message: '',
    requestNda: false,
    lgpdConsent: true,
  });

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const docsList = [
    'Ofício Requisitório / Precatório',
    'Certidão de Trânsito em Julgado',
    'Memória de Cálculo Homologada',
    'Cadeia de Cessões / Procurações',
    'Certidão de Objeto e Pé',
    'Matrícula Atualizada do Imóvel',
  ];

  const toggleDoc = (doc: string) => {
    setFormData(prev => ({
      ...prev,
      availableDocuments: prev.availableDocuments.includes(doc)
        ? prev.availableDocuments.filter(d => d !== doc)
        : [...prev.availableDocuments, doc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const utms = parseUtmsFromUrl();

    const created = saveLead({
      origin: `${window.location.href} (Formulário Seção 16 - Originação & Ativos)`,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      name: formData.name,
      company: formData.company,
      cnpj: formData.cnpj || 'Não informado',
      role: formData.role || 'Proponente',
      phone: formData.phone,
      email: formData.email,
      demandType: 'ativo',
      assetType: formData.assetType,
      estimatedValue: formData.estimatedValue,
      debtorEntity: formData.debtorEntity,
      currentStage: formData.currentStage,
      availableDocuments: formData.availableDocuments,
      message: formData.message,
      requestNda: formData.requestNda,
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
          Ativo Registrado com Sucesso!
        </h4>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Protocolo gerado: <strong className="font-mono text-slate-900">{submittedId}</strong>. As informações foram salvas na base central (CRM) para triagem preliminar pela equipe da MACK.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => setSubmittedId(null)}
            className="px-4 py-2 bg-[#C5A869] text-[#0B1728] text-xs font-semibold rounded"
          >
            Submeter outro ativo
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
            Tipo de Ativo / Operação *
          </label>
          <select
            value={formData.assetType}
            onChange={(e) => setFormData({ ...formData, assetType: e.target.value })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869] bg-white"
          >
            <option value="Precatório Federal">Precatório Federal (TRF/União)</option>
            <option value="Precatório Estadual">Precatório Estadual</option>
            <option value="Precatório Municipal">Precatório Municipal</option>
            <option value="Legal Claims">Legal Claims / Crédito Judicial</option>
            <option value="Direitos Creditórios">Direitos Creditórios / Recebíveis</option>
            <option value="Oportunidades Especiais">Oportunidades Especiais & Imóveis</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Valor Estimado (Face / Causa) *
          </label>
          <input
            type="text"
            required
            value={formData.estimatedValue}
            onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
            placeholder="Ex: R$ 3.500.000,00"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Ente Devedor / Contraparte (quando aplicável) *
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
            placeholder="Ex: Ofício expedido, cálculos homologados..."
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Nome Completo do Contato *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome"
            className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
          />
        </div>
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Empresa / CNPJ
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Razão Social ou Titular"
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
        <label className="block font-semibold text-slate-700 mb-2">
          Documentos Disponíveis para Envio / Análise:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {docsList.map((doc) => (
            <label
              key={doc}
              onClick={() => toggleDoc(doc)}
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
              <span className="text-[11px]">{doc}</span>
            </label>
          ))}
        </div>
        <div className="text-[10px] text-slate-400 mt-1">
          * Upload de arquivos volumosos será liberado com segurança após triagem preliminar pela equipe.
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-700 mb-1">
          Mensagem / Detalhamento da Oportunidade *
        </label>
        <textarea
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Descreva detalhes essenciais da ação, juízo, tipo de crédito ou ativo imobiliário..."
          className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#C5A869]"
        />
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-100">
        <label className="flex items-start gap-2 cursor-pointer text-slate-600">
          <input
            type="checkbox"
            checked={formData.requestNda}
            onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
            className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
          />
          <span>Desejo avaliar assinatura de NDA antes do compartilhamento de documentos sensíveis.</span>
        </label>

        <label className="flex items-start gap-2 cursor-pointer text-slate-600">
          <input
            type="checkbox"
            required
            checked={formData.lgpdConsent}
            onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
            className="mt-0.5 rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
          />
          <span>Autorizo o tratamento dos dados estritamente para qualificação comercial da oportunidade (LGPD). *</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 btn-gold text-[#0B1728] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
      >
        <span>{isSubmitting ? 'Gravando no CRM...' : 'Enviar Ativo para Triagem'}</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </form>
  );
};


