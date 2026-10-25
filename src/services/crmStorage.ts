import { Lead, Article, SiteSettings, ModuleItem } from '../types';
import { trackEvent } from './analytics';

const LEADS_STORAGE_KEY = 'mack_crm_leads_v1';
const SETTINGS_STORAGE_KEY = 'mack_settings_v1';
const ARTICLES_STORAGE_KEY = 'mack_articles_v1';
const MODULES_STORAGE_KEY = 'mack_modules_v1';


export const DEFAULT_SETTINGS: SiteSettings = {
  whatsappNumber: '5561999887766',
  whatsappDisplay: '(61) 99988-7766',
  generalEmail: 'contato@mackfinancas.com.br',
  originationEmail: 'originacao@mackfinancas.com.br',
  partnersEmail: 'parceiros@mackfinancas.com.br',
  linkedinUrl: 'https://www.linkedin.com/in/marcosaguiar',
  instagramHandle: '@marcosaguiar80',
  facebookHandle: '@marcosaguiar80',
  cnpj: '49.832.148/0001-20',
  govTechActive: false,
  clientAreaActive: false,
};

export const DEFAULT_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'como-identificar-oportunidades-maior-potencial',
    title: 'Como identificar oportunidades com maior potencial de sucesso',
    category: 'Originação & Ativos',
    summary: 'Conheça os principais critérios de elegibilidade, solidez da contraparte e sinais que indicam um bom potencial de estruturação e execução.',
    content: [
      'Na originação de ativos e créditos judiciais, a consistência dos dados preliminares é o fator determinante para acelerar a aprovação junto a investidores institucionais.',
      'O primeiro filtro consiste na análise do ente devedor ou contraparte, verificando o histórico de pagamentos, o regime orçamentário e a estabilidade jurídica da obrigação.',
      'Em segundo lugar, a integridade da cadeia de cessões e certidões negativas previne riscos de ineficácia e litígios sucessórios.',
      'A MACK atua estruturando cada dossier com transparência metodológica, conectando as partes com agilidade e segurança jurídica.'
    ],
    readingTime: '4 min',
    date: '2026-03-12',
    ctaText: 'Apresentar ativo para análise',
    ctaLink: '/enviar-oportunidade?tipo=ativo'
  },
  {
    id: 'art-2',
    slug: 'preparar-informacoes-analise-credito-eficiente',
    title: 'Como preparar informações para uma análise de crédito mais eficiente',
    category: 'Crédito PJ & Agro',
    summary: 'Saiba quais informações e demonstrativos são essenciais para que instituições parceiras avaliem operações de capital de giro e crédito com garantia com maior agilidade.',
    content: [
      'Empresas e produtores rurais frequentemente enfrentam morosidade na obtenção de crédito devido à fragmentação de documentos contábeis e fiscais.',
      'Para viabilizar operações estruturadas com taxas competitivas, é fundamental apresentar um plano de negócios sucinto, faturamento dos últimos 24 meses e a relação de garantias reais livres de ônus.',
      'No agronegócio, o histórico de produtividade, CPRs vigentes e regularidade ambiental (CAR) são itens decisivos para os comitês de crédito dos parceiros.',
      'A MACK qualifica a demanda e orienta a formatação inicial para que a solicitação chegue ao comitê de crédito correto.'
    ],
    readingTime: '5 min',
    date: '2026-03-05',
    ctaText: 'Estruturar demanda de crédito',
    ctaLink: '/enviar-oportunidade?tipo=credito'
  },
  {
    id: 'art-3',
    slug: 'papel-originacao-b2b-negocios-sustentaveis',
    title: 'O papel da originação B2B no desenvolvimento de negócios sustentáveis',
    category: 'Originação & Ativos',
    summary: 'Entenda como a originação qualificada conecta empresas e investidores, transformando direitos creditórios e oportunidades distressed em liquidez real.',
    content: [
      'A originação B2B não se resume a indicar negócios; trata-se de um processo rigoroso de filtro, alinhamento de expectativas e formatação prévia de operações complexas.',
      'Compradores institucionais buscam ativos com teses claras de risco-retorno, enquanto empresas detentoras de ativos demandam liquidez e discrição.',
      'Ao atuar como hub independente, a MACK elimina assimetrias de informação e encurta ciclos de negociação entre originadores e investidores.'
    ],
    readingTime: '4 min',
    date: '2026-02-24',
    ctaText: 'Conectar com a MACK',
    ctaLink: '/enviar-oportunidade'
  },
  {
    id: 'art-4',
    slug: 'governanca-como-base-solucoes-corporativas',
    title: 'Governança como base para soluções corporativas de longo prazo',
    category: 'Soluções Corporativas',
    summary: 'Veja como práticas de governança fortalecem a execução de projetos estratégicos, mitigam riscos fiscais e operacionais e ampliam a atratividade do negócio.',
    content: [
      'A longevidade corporativa exige alinhamento entre eficiência operacional, conformidade tributária e estrutura societária sólida.',
      'Projetos de reestruturação de passivos e captação de recursos exigem que os processos internos sejam auditáveis e transparentes.',
      'A MACK conecta empresas a especialistas em modelagem societária, automação de processos e eficiência tributária com contratações diretas e especializadas.'
    ],
    readingTime: '6 min',
    date: '2026-02-18',
    ctaText: 'Ver Soluções Corporativas',
    ctaLink: '/solucoes-corporativas'
  },
  {
    id: 'art-5',
    slug: 'boas-praticas-abordagem-institucional-parcerias',
    title: 'Boas práticas para abordagem institucional e construção de parcerias',
    category: 'Parceiros',
    summary: 'Diretrizes essenciais para consultorias, fintechs e estruturadores ampliarem capilaridade comercial com discrição, ética e alinhamento de interesses.',
    content: [
      'No mercado B2B de alta complexidade, parcerias sólidas são construídas em torno de regras claras de governança, divisão de papéis e respeito às competências de cada agente.',
      'A segregação entre originação comercial e execução técnica/jurídica é primordial para garantir a segurança jurídica de todos os envolvidos.',
      'O ecossistema MACK valoriza parceiros com capacidade comprovada de análise, velocidade de resposta e compromisso ético.'
    ],
    readingTime: '5 min',
    date: '2026-02-10',
    ctaText: 'Credenciar como parceiro',
    ctaLink: '/parceiros'
  },
  {
    id: 'art-6',
    slug: 'documentos-necessarios-envio-oportunidade',
    title: 'Documentos necessários para envio de uma oportunidade',
    category: 'Originação & Ativos',
    summary: 'Confira o checklist detalhado com os principais documentos para análise preliminar de precatórios, recebíveis e crédito PJ sem atrasos.',
    content: [
      'Para agilizar a análise inicial, é recomendável reunir previamente certidões de objeto e pé (no caso de créditos judiciais), certidões fiscais e espelho do processo.',
      'Para demandas de crédito PJ, o balancete mais recente, DRE e relação de bens dados em garantia aceleram a triagem com parceiros habilitados.',
      'A MACK assegura total sigilo das informações recebidas, com possibilidade de formalização prévia de Acordo de Confidencialidade (NDA) quando requerido.'
    ],
    readingTime: '3 min',
    date: '2026-01-29',
    ctaText: 'Enviar Oportunidade',
    ctaLink: '/enviar-oportunidade'
  }
];

const INITIAL_LEADS: Lead[] = [
  {
    id: 'LEAD-2026-001',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    origin: 'https://mackfinancas.com.br/originacao-ativos (Google / cpc)',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'campanha_precatorios_federais',
    name: 'Roberto Valente',
    company: 'Valente & Cia Agroindustrial',
    cnpj: '12.345.678/0001-90',
    role: 'Diretor Financeiro',
    phone: '(61) 98123-4567',
    email: 'roberto@valenteagro.com.br',
    demandType: 'ativo',
    assetType: 'Precatório Federal (TRF-1)',
    estimatedValue: 'R$ 4.800.000,00',
    debtorEntity: 'União Federal',
    currentStage: 'Expedido / Aguardando inclusão orçamentária',
    availableDocuments: ['Ofício Requisitório', 'Cópia da Sentença Transitada', 'Planilha de Cálculos Homologada'],
    message: 'Possuímos precatório federal com trânsito em julgado e buscamos compradores institucionais habilitados.',
    requestNda: true,
    lgpdConsent: true,
    status: 'Qualificação',
    assignedTo: 'Marcos Aguiar',
    nextAction: 'Triagem de documentos e conferência de cálculos homologados',
    nextActionDate: '2026-10-22',
    internalRoutePartner: 'Fundo Institucional SP-01',
    notes: 'Documentação primária consistente. Cliente solicitou minuta de NDA antes de encaminhar certidões suplementares.'
  },
  {
    id: 'LEAD-2026-002',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    origin: 'https://mackfinancas.com.br/credito-pj-agro (LinkedIn / organico)',
    utmSource: 'linkedin',
    utmMedium: 'social',
    name: 'Carolina Mendes de Souza',
    company: 'Agropecuária Rio Formoso Ltda',
    cnpj: '24.987.654/0001-12',
    role: 'Sócia-Administradora',
    phone: '(62) 99876-5432',
    email: 'carolina@rioformoso.com.br',
    demandType: 'credito',
    creditProfile: 'Produtor',
    creditPurpose: 'Crédito Agro / Custeio de Safra e Expansão de Armazém',
    estimatedValue: 'R$ 8.500.000,00',
    hasCollateral: 'Sim',
    collateralType: 'Imóvel Rural com CAR e Georreferenciamento em dia',
    urgency: 'Até 45 dias',
    message: 'Buscamos conexão com linhas estruturadas de crédito agro para expansão da unidade de secagem.',
    requestNda: false,
    lgpdConsent: true,
    status: 'Novo',
    assignedTo: 'Equipe de Crédito MACK',
    nextAction: 'Contato inicial para levantamento de balanço e certidões ambientais',
    nextActionDate: '2026-10-21',
    internalRoutePartner: 'Parceiro Estruturador Crédito Rural',
    notes: 'Demanda prioritária. Imóvel rural no Centro-Oeste sem penhora aparente.'
  },
  {
    id: 'LEAD-2026-003',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    origin: 'https://mackfinancas.com.br/parceiros (Direto)',
    name: 'Dr. Leonardo Castelo Branco',
    company: 'Castelo Branco Capital & Asset',
    cnpj: '33.111.222/0001-88',
    role: 'Head de Special Situations',
    phone: '(11) 97654-3210',
    email: 'leonardo@castelobrancoasset.com.br',
    demandType: 'parceiro',
    partnerSegment: 'Gestora de Recursos / Special Situations',
    partnerCityState: 'São Paulo / SP',
    partnerType: 'Originação',
    partnerContribution: 'Comprador final institucional de precatórios federais e direitos creditórios com ticket acima de R$ 2M.',
    message: 'Temos interesse em formalizar credenciamento como parceiro comprador para recebimento de fluxos qualificados de originação no Centro-Oeste.',
    requestNda: true,
    lgpdConsent: true,
    status: 'Oportunidade',
    assignedTo: 'Marcos Aguiar',
    nextAction: 'Reunião de alinhamento de tese de aquisição e apetite de risco',
    nextActionDate: '2026-10-23',
    internalRoutePartner: 'Mesa Institucional',
    notes: 'Parceiro potencial para precatórios da União e TJDFT. Contrato de parceria em fase de minuta.'
  }
];

export function getLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_LEADS;
  }
}

export function saveLead(newLeadData: Omit<Lead, 'id' | 'createdAt' | 'status' | 'assignedTo' | 'nextAction' | 'nextActionDate' | 'internalRoutePartner'>): Lead {
  const currentLeads = getLeads();
  const nextNumber = currentLeads.length + 1;
  const leadId = `LEAD-2026-${String(nextNumber).padStart(3, '0')}`;
  
  const lead: Lead = {
    ...newLeadData,
    id: leadId,
    createdAt: new Date().toISOString(),
    status: 'Novo',
    assignedTo: 'Triagem MACK',
    nextAction: 'Qualificação inicial de informações e aderência',
    nextActionDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    internalRoutePartner: 'A definir na qualificação',
  };

  const updated = [lead, ...currentLeads];
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('mack_crm_updated'));
  trackEvent('conclusao_formulario', `${lead.demandType} - ${lead.company || lead.name}`);
  return lead;
}

export function updateLead(updatedLead: Lead): void {
  const current = getLeads();
  const index = current.findIndex(l => l.id === updatedLead.id);
  if (index >= 0) {
    current[index] = updatedLead;
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('mack_crm_updated'));
  }
}

export function deleteLead(id: string): void {
  const current = getLeads();
  const filtered = current.filter(l => l.id !== id);
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event('mack_crm_updated'));
}

export function getSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
      return DEFAULT_SETTINGS;
    }
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: SiteSettings): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new Event('mack_settings_updated'));
}

export function getArticles(): Article[] {
  try {
    const raw = localStorage.getItem(ARTICLES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(DEFAULT_ARTICLES));
      return DEFAULT_ARTICLES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_ARTICLES;
  }
}

export function saveArticles(articles: Article[]): void {
  localStorage.setItem(ARTICLES_STORAGE_KEY, JSON.stringify(articles));
  window.dispatchEvent(new Event('mack_articles_updated'));
}

export function exportLeadsToCSV(leads: Lead[]): void {
  const headers = [
    'ID',
    'Data/Hora',
    'Origem',
    'UTM Source',
    'UTM Medium',
    'UTM Campaign',
    'Nome',
    'Empresa',
    'CNPJ',
    'Cargo',
    'Telefone',
    'Email',
    'Tipo de Demanda',
    'Tipo de Ativo',
    'Valor Estimado',
    'Ente Devedor',
    'Estagio Atual',
    'Perfil Credito',
    'Finalidade Credito',
    'Garantia',
    'Urgencia',
    'Desafio Corporativo',
    'Segmento Parceiro',
    'Status CRM',
    'Responsavel',
    'Proxima Acao',
    'Data Proxima Acao',
    'Parceiro/Rota Interna',
    'NDA Solicitado',
    'Consentimento LGPD',
    'Mensagem'
  ];

  const escapeCSV = (str: string | undefined | null) => {
    if (!str) return '""';
    const sanitized = String(str).replace(/"/g, '""');
    return `"${sanitized}"`;
  };

  const rows = leads.map(l => [
    escapeCSV(l.id),
    escapeCSV(new Date(l.createdAt).toLocaleString('pt-BR')),
    escapeCSV(l.origin),
    escapeCSV(l.utmSource),
    escapeCSV(l.utmMedium),
    escapeCSV(l.utmCampaign),
    escapeCSV(l.name),
    escapeCSV(l.company),
    escapeCSV(l.cnpj),
    escapeCSV(l.role),
    escapeCSV(l.phone),
    escapeCSV(l.email),
    escapeCSV(l.demandType),
    escapeCSV(l.assetType),
    escapeCSV(l.estimatedValue),
    escapeCSV(l.debtorEntity),
    escapeCSV(l.currentStage),
    escapeCSV(l.creditProfile),
    escapeCSV(l.creditPurpose),
    escapeCSV(l.hasCollateral),
    escapeCSV(l.urgency),
    escapeCSV(l.corporateChallenge),
    escapeCSV(l.partnerSegment),
    escapeCSV(l.status),
    escapeCSV(l.assignedTo),
    escapeCSV(l.nextAction),
    escapeCSV(l.nextActionDate),
    escapeCSV(l.internalRoutePartner),
    escapeCSV(l.requestNda ? 'Sim' : 'Não'),
    escapeCSV(l.lgpdConsent ? 'Sim' : 'Não'),
    escapeCSV(l.message),
  ].join(','));

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `base_leads_mack_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function parseUtmsFromUrl(): { utmSource?: string; utmMedium?: string; utmCampaign?: string; utmContent?: string; utmTerm?: string } {
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
      utmContent: params.get('utm_content') || undefined,
      utmTerm: params.get('utm_term') || undefined,
    };
  } catch {
    return {};
  }
}

export const DEFAULT_MODULES: ModuleItem[] = [
  {
    id: 'mod-origination',
    name: 'Originação & Special Situations',
    category: 'Vertical Comercial',
    status: 'ACTIVE',
    description: 'Precatórios, legal claims, créditos judiciais e ativos imobiliários.',
  },
  {
    id: 'mod-credit',
    name: 'Crédito PJ & Agro',
    category: 'Vertical Comercial',
    status: 'ACTIVE',
    description: 'Capital de giro, garantias, home equity, agro e consórcios com parceiros habilitados.',
  },
  {
    id: 'mod-corporate',
    name: 'Soluções Corporativas',
    category: 'Vertical Comercial',
    status: 'ACTIVE',
    description: 'Soluções organizadas por problema: tributária, tecnologia, risco e reorganização.',
  },
  {
    id: 'mod-govtech',
    name: 'GovTech & Mercado Público',
    category: 'Vertical Comercial',
    status: 'DRAFT',
    description: 'Representação comercial e desenvolvimento de mercado para o setor público (Em ativação).',
  },
  {
    id: 'mod-clientarea',
    name: 'Área do Cliente / Sistema',
    category: 'Plataforma & Intranet',
    status: 'FUTURE',
    description: 'Ambiente seguro para acompanhamento de demandas e documentos (Fase 3).',
  },
  {
    id: 'mod-cpf-cnpj',
    name: 'Pesquisa e Monitoramento CPF/CNPJ',
    category: 'Módulo Futuro',
    status: 'INACTIVE',
    description: 'Mapeamento e monitoramento cadastral homologado.',
  },
  {
    id: 'mod-kyc',
    name: 'Análise de Risco / KYC Comercial',
    category: 'Módulo Futuro',
    status: 'INACTIVE',
    description: 'Due diligence comercial automatizada para novos parceiros.',
  },
  {
    id: 'mod-whitelabel',
    name: 'Plataforma Financeira White Label',
    category: 'Módulo Futuro',
    status: 'INACTIVE',
    description: 'Infraestrutura financeira sob medida com parceiros bancários.',
  },
  {
    id: 'mod-wealth',
    name: 'Planejamento Patrimonial / Wealth',
    category: 'Módulo Futuro',
    status: 'INACTIVE',
    description: 'Estruturação societária e sucessória de grandes patrimônios.',
  },
];

export function getModules(): ModuleItem[] {
  try {
    const raw = localStorage.getItem(MODULES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(MODULES_STORAGE_KEY, JSON.stringify(DEFAULT_MODULES));
      return DEFAULT_MODULES;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_MODULES;
  }
}

export function saveModules(modules: ModuleItem[]): void {
  localStorage.setItem(MODULES_STORAGE_KEY, JSON.stringify(modules));
  window.dispatchEvent(new Event('mack_modules_updated'));
}

