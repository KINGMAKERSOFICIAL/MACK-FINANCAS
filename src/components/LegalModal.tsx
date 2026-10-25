import React from 'react';
import { X, ShieldCheck, FileCheck, Scale } from 'lucide-react';
import { SiteSettings } from '../types';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'lgpd' | 'terms' | 'disclaimer';
  settings: SiteSettings;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'lgpd',
  settings,
}) => {
  const [tab, setTab] = React.useState<'lgpd' | 'terms' | 'disclaimer'>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1728] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#C5A869]" />
            <h3 className="font-semibold text-base font-serif">
              Conformidade, LGPD e Termos Institucionais
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2">
          <button
            onClick={() => setTab('lgpd')}
            className={`py-2.5 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              tab === 'lgpd'
                ? 'border-[#C5A869] text-[#0B1728] bg-white rounded-t-md'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Privacidade & LGPD
          </button>
          <button
            onClick={() => setTab('disclaimer')}
            className={`py-2.5 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              tab === 'disclaimer'
                ? 'border-[#C5A869] text-[#0B1728] bg-white rounded-t-md'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Aviso Regulatório
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`py-2.5 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              tab === 'terms'
                ? 'border-[#C5A869] text-[#0B1728] bg-white rounded-t-md'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Termos de Uso
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          {tab === 'lgpd' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Política de Privacidade e Proteção de Dados (LGPD - Lei 13.709/2018)</span>
              </div>
              <p>
                A <strong>MACK Estratégias e Negócios</strong> (CNPJ: {settings.cnpj}), sediada em Brasília/DF, valoriza a privacidade e o sigilo de seus usuários, parceiros e clientes corporativos.
              </p>
              <h4 className="font-semibold text-slate-900 pt-2">1. Finalidade do Tratamento de Dados</h4>
              <p>
                Os dados cadastrais e de demandas empresariais fornecidos através dos formulários do site (tais como nome, e-mail corporativo, telefone, CNPJ da empresa, informações preliminares sobre ativos ou necessidades de crédito) têm como finalidade exclusiva:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Triagem e qualificação técnica da oportunidade comercial submetida;</li>
                <li>Contato direto para alinhamento sobre a demanda apresentada;</li>
                <li>Encaminhamento a parceiros institucionais devidamente habilitados, estritamente mediante consentimento prévio e quando aplicável sob Acordo de Confidencialidade (NDA).</li>
              </ul>
              <h4 className="font-semibold text-slate-900 pt-2">2. Sigilo e Não Comercialização</h4>
              <p>
                A MACK não comercializa, não aluga e não repassa bases de dados a terceiros estranhos à cadeia de estruturação de negócios.
              </p>
              <h4 className="font-semibold text-slate-900 pt-2">3. Direitos do Titular</h4>
              <p>
                Em conformidade com o Artigo 18 da Lei Geral de Proteção de Dados, o titular poderá a qualquer momento solicitar a confirmação, retificação ou exclusão de seus dados pessoais através do canal oficial de privacidade: <span className="font-mono text-slate-900">{settings.generalEmail}</span>.
              </p>
            </div>
          )}

          {tab === 'disclaimer' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <FileCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Aviso Regulatório Obrigatório e Segregação de Competências</span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800">
                <strong>Posicionamento Institucional Oficial:</strong> A MACK Estratégias e Negócios atua estritamente em originação comercial, qualificação de demandas, desenvolvimento de negócios e conexão com parceiros especializados com capacidade comprovada de análise e execução.
              </div>
              <h4 className="font-semibold text-slate-900 pt-2">Segregação de Papéis:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Não é Instituição Financeira:</strong> A MACK não é banco, cooperativa de crédito, distribuidora ou instituição financeira autorizada pelo Banco Central do Brasil. Não concede empréstimos diretamente. Operações de crédito (capital de giro, crédito com garantia, home equity, crédito agro e consórcios) são executadas com instituições parceiras habilitadas. Aprovação, taxa, prazo, garantia e liberação dependem de análise e contratação direta com o parceiro responsável.
                </li>
                <li>
                  <strong>Não é Gestora ou Assessoria de Investimentos:</strong> A MACK não atua como administradora de carteiras, consultoria de valores mobiliários ou gestora de recursos sob regulamentação da CVM. Não emite recomendação individualizada de investimentos nem promete rentabilidade.
                </li>
                <li>
                  <strong>Segregação Jurídica Obrigatória:</strong> A MACK não presta serviços advocatícios institucionais através da plataforma. Quando uma demanda requerer assessoria jurídica (como due diligence processual ou representação judicial), essa necessidade será tratada em contratação própria, autônoma e independente junto a advogados legalmente habilitados na OAB, sem vinculação de condicionamento de um serviço ao outro.
                </li>
                <li>
                  <strong>Sem Promessa de Fechamento:</strong> O envio de oportunidades não vincula qualquer obrigação de compra de ativos, fechamento de negócios, deságio garantido ou aprovação prévia.
                </li>
              </ul>
            </div>
          )}

          {tab === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <Scale className="w-4 h-4 text-slate-700" />
                <span>Termos de Uso da Plataforma B2B</span>
              </div>
              <p>
                O acesso e a utilização dos serviços e canais do portal <strong>mackfinancas.com.br</strong> implicam na aceitação integral dos presentes Termos de Uso.
              </p>
              <h4 className="font-semibold text-slate-900 pt-2">1. Objeto do Portal</h4>
              <p>
                O portal tem por objetivo viabilizar a conexão ágil entre empresas detentoras de ativos ou com demandas estruturadas de crédito/soluções e compradores ou estruturadores institucionais integrantes do ecossistema de parceiros da MACK.
              </p>
              <h4 className="font-semibold text-slate-900 pt-2">2. Veracidade das Informações Enviadas</h4>
              <p>
                O proponente garante a veracidade, autenticidade e legitimidade de todas as informações inseridas na plataforma, responsabilizando-se civil e criminalmente pela idoneidade dos dados e documentos submetidos à triagem preliminar.
              </p>
              <h4 className="font-semibold text-slate-900 pt-2">3. Acordos de Confidencialidade (NDA)</h4>
              <p>
                Para operações que envolvam dados industriais sensíveis ou créditos judiciais sob segredo de justiça, as partes poderão solicitar a assinatura prévia de instrumento de confidencialidade (NDA) antes da liberação de dossiês probatórios a parceiros.
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B1728] hover:bg-[#13233A] rounded-md transition-colors cursor-pointer"
          >
            Entendido e ciente
          </button>
        </div>
      </div>
    </div>
  );
};
