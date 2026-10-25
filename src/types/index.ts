export type DemandType = 'ativo' | 'credito' | 'corporativo' | 'govtech' | 'parceiro';

export type LeadStatus =
  | 'Novo'
  | 'Qualificação'
  | 'Oportunidade'
  | 'Proposta'
  | 'Negociação'
  | 'Fechado'
  | 'Perdido/Nutrição';

export interface Lead {
  id: string;
  createdAt: string;
  origin: string; // URL + UTM
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  name: string;
  company: string;
  cnpj: string;
  role: string;
  phone: string;
  email: string;
  demandType: DemandType;
  
  // Condicionais Ativo / Originação
  assetType?: string;
  estimatedValue?: string;
  debtorEntity?: string;
  currentStage?: string;
  availableDocuments?: string[];

  // Condicionais Crédito PJ & Agro
  creditProfile?: 'Empresa' | 'Produtor' | 'Outro';
  creditPurpose?: string;
  hasCollateral?: 'Sim' | 'Não';
  collateralType?: string;
  urgency?: string;

  // Condicionais Soluções Corporativas
  corporateChallenge?: string;
  corporateDescription?: string;
  estimatedRevenue?: string;

  // Condicionais Parceiros
  partnerSegment?: string;
  partnerCityState?: string;
  partnerType?: string;
  partnerContribution?: string;

  // Condicionais GovTech
  govtechOrg?: string;
  govtechDifferentials?: string;

  message: string;
  requestNda: boolean;
  lgpdConsent: boolean;
  status: LeadStatus;
  assignedTo: string;
  nextAction: string;
  nextActionDate: string;
  internalRoutePartner: string;
  notes?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Originação & Ativos' | 'Crédito PJ & Agro' | 'Soluções Corporativas' | 'GovTech' | 'Mercado' | 'Parceiros';
  summary: string;
  content: string[];
  readingTime: string;
  date: string;
  ctaText: string;
  ctaLink: string;
}

export type ModuleStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT' | 'FUTURE';

export interface ModuleItem {
  id: string;
  name: string;
  category: string;
  status: ModuleStatus;
  description: string;
}

export interface SiteSettings {
  whatsappNumber: string;
  whatsappDisplay: string;
  generalEmail: string;
  originationEmail: string;
  partnersEmail: string;
  linkedinUrl: string;
  instagramHandle: string;
  facebookHandle: string;
  cnpj: string;
  govTechActive: boolean;
  clientAreaActive: boolean;
}

