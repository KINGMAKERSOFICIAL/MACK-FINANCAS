import React, { useState, useEffect } from 'react';
import {
  Database,
  Download,
  Filter,
  Search,
  CheckCircle,
  Clock,
  UserCheck,
  AlertCircle,
  Trash2,
  Edit,
  Save,
  Phone,
  Mail,
  ShieldCheck,
  Building,
  Settings as SettingsIcon,
  BookOpen,
  Plus,
} from 'lucide-react';
import { Lead, LeadStatus, SiteSettings, Article, ModuleItem, ModuleStatus } from '../types';
import {
  getLeads,
  updateLead,
  deleteLead,
  exportLeadsToCSV,
  getSettings,
  saveSettings,
  getArticles,
  saveArticles,
  getModules,
  saveModules,
} from '../services/crmStorage';
import { getStoredEvents, AnalyticsEvent } from '../services/analytics';
import { Layers, Activity } from 'lucide-react';

interface AdminCrmPageProps {
  onSettingsUpdated: (settings: SiteSettings) => void;
  onNavigate: (path: string) => void;
}

export const AdminCrmPage: React.FC<AdminCrmPageProps> = ({
  onSettingsUpdated,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'settings' | 'articles' | 'modules' | 'analytics'>('leads');
  const [leads, setLeads] = useState<Lead[]>(() => getLeads());
  const [settings, setSettings] = useState<SiteSettings>(() => getSettings());
  const [articles, setArticles] = useState<Article[]>(() => getArticles());
  const [modules, setModules] = useState<ModuleItem[]>(() => getModules());
  const [events, setEvents] = useState<AnalyticsEvent[]>(() => getStoredEvents());


  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [demandFilter, setDemandFilter] = useState<string>('todos');

  // Selected lead modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditingLead, setIsEditingLead] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  useEffect(() => {
    const handleLeadsUpdate = () => setLeads(getLeads());
    const handleSettingsUpdate = () => setSettings(getSettings());
    const handleArticlesUpdate = () => setArticles(getArticles());
    const handleModulesUpdate = () => setModules(getModules());
    const handleAnalyticsUpdate = () => setEvents(getStoredEvents());

    window.addEventListener('mack_crm_updated', handleLeadsUpdate);
    window.addEventListener('mack_settings_updated', handleSettingsUpdate);
    window.addEventListener('mack_articles_updated', handleArticlesUpdate);
    window.addEventListener('mack_modules_updated', handleModulesUpdate);
    window.addEventListener('mack_analytics_updated', handleAnalyticsUpdate);

    return () => {
      window.removeEventListener('mack_crm_updated', handleLeadsUpdate);
      window.removeEventListener('mack_settings_updated', handleSettingsUpdate);
      window.removeEventListener('mack_articles_updated', handleArticlesUpdate);
      window.removeEventListener('mack_modules_updated', handleModulesUpdate);
      window.removeEventListener('mack_analytics_updated', handleAnalyticsUpdate);
    };
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.cnpj.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'todos' || lead.status === statusFilter;
    const matchesDemand = demandFilter === 'todos' || lead.demandType === demandFilter;

    return matchesSearch && matchesStatus && matchesDemand;
  });

  const handleStatusChange = (lead: Lead, newStatus: LeadStatus) => {
    const updated = { ...lead, status: newStatus };
    updateLead(updated);
    if (selectedLead && selectedLead.id === lead.id) {
      setSelectedLead(updated);
    }
  };

  const handleSaveLeadModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLead) {
      updateLead(selectedLead);
      setIsEditingLead(false);
      setSaveSuccessMsg(true);
      setTimeout(() => setSaveSuccessMsg(false), 2000);
    }
  };

  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveSettings(settings);
    onSettingsUpdated(settings);
    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case 'Novo':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Qualificação':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Oportunidade':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Proposta':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Negociação':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Fechado':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Perdido/Nutrição':
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A869] font-mono">
            <Database className="w-3.5 h-3.5" />
            <span>MACK Estratégias e Negócios · Gestão Central</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
            Base Central / CRM & Painel de Governança
          </h1>
          <p className="text-xs text-slate-500">
            Armazenamento estruturado de leads, rastreabilidade de UTMs, atribuição e configurações oficiais.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'leads'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Leads & Pipeline ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <SettingsIcon className="w-3.5 h-3.5" />
            <span>Configurações & Contatos</span>
          </button>

          <button
            onClick={() => setActiveTab('modules')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'modules'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Status Módulos (S.53)</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Eventos & UTMs ({events.length})</span>
          </button>
        </div>
      </div>

      {/* SUCCESS TOAST */}
      {saveSuccessMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Alterações salvas com sucesso na base central!</span>
        </div>
      )}

      {/* TAB 1: LEADS & PIPELINE */}
      {activeTab === 'leads' && (
        <div className="space-y-6">
          {/* Controls Bar: Filters & CSV Export */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div className="relative min-w-56">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar por nome, empresa, CNPJ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 w-full focus:outline-hidden focus:border-[#C5A869]"
                />
              </div>

              {/* Status filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-[#C5A869]"
              >
                <option value="todos">Todos os Estágios</option>
                <option value="Novo">Novo</option>
                <option value="Qualificação">Qualificação</option>
                <option value="Oportunidade">Oportunidade</option>
                <option value="Proposta">Proposta</option>
                <option value="Negociação">Negociação</option>
                <option value="Fechado">Fechado</option>
                <option value="Perdido/Nutrição">Perdido/Nutrição</option>
              </select>

              {/* Demand filter */}
              <select
                value={demandFilter}
                onChange={(e) => setDemandFilter(e.target.value)}
                className="px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-hidden focus:border-[#C5A869]"
              >
                <option value="todos">Todas as Demandas</option>
                <option value="ativo">Originação / Ativo</option>
                <option value="credito">Crédito PJ & Agro</option>
                <option value="corporativo">Soluções Corporativas</option>
                <option value="parceiro">Credenciamento Parceiro</option>
              </select>
            </div>

            {/* Export CSV button (Mandatory requirement 3.2 & 14.4) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => exportLeadsToCSV(leads)}
                className="px-4 py-2 bg-[#0B1728] hover:bg-[#15273F] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Exportar Base Completa (CSV)</span>
              </button>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-mono tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3">ID / Data</th>
                    <th className="px-4 py-3">Proponente / Empresa</th>
                    <th className="px-4 py-3">Vertical / Demanda</th>
                    <th className="px-4 py-3">Valor Estimado</th>
                    <th className="px-4 py-3">Estágio CRM</th>
                    <th className="px-4 py-3">Responsável</th>
                    <th className="px-4 py-3">Próxima Ação</th>
                    <th className="px-4 py-3 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-slate-400">
                        Nenhum registro encontrado para os filtros selecionados.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="px-4 py-3 font-mono text-[11px] whitespace-nowrap">
                          <div className="font-semibold text-slate-800">{lead.id}</div>
                          <div className="text-[10px] text-slate-400">
                            {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                          </div>
                        </td>

                        <td className="px-4 py-3">
                          <div className="font-semibold text-slate-900">{lead.name}</div>
                          <div className="text-slate-500 text-[11px]">{lead.company}</div>
                          <div className="font-mono text-[10px] text-slate-400">{lead.cnpj}</div>
                        </td>

                        <td className="px-4 py-3">
                          <span className="font-medium text-slate-800 block capitalize">
                            {lead.demandType}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {lead.assetType || lead.creditPurpose || lead.corporateChallenge || lead.partnerSegment || 'Geral'}
                          </span>
                        </td>

                        <td className="px-4 py-3 font-mono text-slate-700 font-medium">
                          {lead.estimatedValue || '—'}
                        </td>

                        <td className="px-4 py-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${getStatusBadge(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>

                        <td className="px-4 py-3 text-slate-700">
                          {lead.assignedTo || 'Não atribuído'}
                        </td>

                        <td className="px-4 py-3 text-slate-600 max-w-xs truncate">
                          <div className="truncate">{lead.nextAction}</div>
                          {lead.nextActionDate && (
                            <span className="text-[10px] text-[#C5A869] font-mono block">
                              Data: {lead.nextActionDate}
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <button
                            onClick={() => {
                              setSelectedLead(lead);
                              setIsEditingLead(false);
                            }}
                            className="px-2.5 py-1 text-[11px] font-semibold text-[#0B1728] hover:text-[#C5A869] bg-slate-100 hover:bg-slate-200 rounded transition-colors mr-1 cursor-pointer"
                          >
                            Detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONFIGURAÇÕES & CONTATOS */}
      {activeTab === 'settings' && (
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-3xl space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-lg font-bold font-serif text-slate-900">
              Configurações Gerais e Informações Oficiais
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Conforme estipulado no documento de reposicionamento 2026, os contatos oficiais e status de módulos são editáveis diretamente por este painel.
            </p>
          </div>

          <form onSubmit={handleSettingsSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  WhatsApp Oficial (apenas dígitos com DDI) *
                </label>
                <input
                  type="text"
                  required
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  placeholder="5561999887766"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Formato de Exibição no Site *
                </label>
                <input
                  type="text"
                  required
                  value={settings.whatsappDisplay}
                  onChange={(e) => setSettings({ ...settings, whatsappDisplay: e.target.value })}
                  placeholder="(61) 99988-7766"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  E-mail Geral *
                </label>
                <input
                  type="email"
                  required
                  value={settings.generalEmail}
                  onChange={(e) => setSettings({ ...settings, generalEmail: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  E-mail Originação & Ativos *
                </label>
                <input
                  type="email"
                  required
                  value={settings.originationEmail}
                  onChange={(e) => setSettings({ ...settings, originationEmail: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  E-mail Parcerias B2B *
                </label>
                <input
                  type="email"
                  required
                  value={settings.partnersEmail}
                  onChange={(e) => setSettings({ ...settings, partnersEmail: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  CNPJ Oficial da MACK *
                </label>
                <input
                  type="text"
                  required
                  value={settings.cnpj}
                  onChange={(e) => setSettings({ ...settings, cnpj: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  LinkedIn Oficial Marcos Aguiar
                </label>
                <input
                  type="text"
                  value={settings.linkedinUrl}
                  onChange={(e) => setSettings({ ...settings, linkedinUrl: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono"
                />
              </div>
            </div>

            {/* Modules activation toggle */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="font-semibold text-slate-800 text-xs">
                Governança de Módulos Escalonados (Fase 1 e Fase 2):
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.govTechActive}
                  onChange={(e) => setSettings({ ...settings, govTechActive: e.target.checked })}
                  className="rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                />
                <span className="text-slate-700">
                  <strong>Ativar vertical GovTech no Menu Público:</strong> (Por padrão mantida oculta até formalização de parcerias e contratações, conforme Seção 2.1 e 9).
                </span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.clientAreaActive}
                  onChange={(e) => setSettings({ ...settings, clientAreaActive: e.target.checked })}
                  className="rounded border-slate-300 text-[#0B1728] focus:ring-[#C5A869]"
                />
                <span className="text-slate-700">
                  <strong>Habilitar link da Área do Cliente no cabeçalho:</strong> (Por padrão reservada para Fase 3).
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-[#0B1728] hover:bg-[#15273F] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Salvar Configurações
            </button>
          </form>
        </div>
      )}

      {/* TAB 3: ARTIGOS CMS */}
      {activeTab === 'articles' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-serif text-slate-900">
                Artigos e Análises Publicadas (CMS)
              </h3>
              <p className="text-xs text-slate-500">
                Artigos alinhados à Seção 12 das Diretrizes 2026.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/conteudo')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Ver no Site Público
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map((art) => (
              <div key={art.id} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#C5A869] font-mono">
                  <span>{art.category}</span>
                  <span className="text-slate-400">{art.readingTime}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm font-serif">{art.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{art.summary}</p>
                <div className="pt-2 text-[10px] text-slate-400 font-mono">
                  Slug: /{art.slug} · CTA: {art.ctaText}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: STATUS DOS MÓDULOS (SEÇÃO 53) */}
      {activeTab === 'modules' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold font-serif text-slate-900">
              Sistema de Governança e Status dos Módulos (Seção 53)
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Diretriz Absoluta: Cada serviço/módulo possui status (<strong>ACTIVE</strong>, <strong>INACTIVE</strong>, <strong>DRAFT</strong>, <strong>FUTURE</strong>). Somente <strong>ACTIVE</strong> aparece publicamente. Módulos futuros mantidos inativos sem falsas promessas de operação.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-mono tracking-wider text-[10px]">
                <tr>
                  <th className="px-4 py-3">Módulo / Serviço</th>
                  <th className="px-4 py-3">Categoria</th>
                  <th className="px-4 py-3">Descrição Operacional</th>
                  <th className="px-4 py-3">Status Atual</th>
                  <th className="px-4 py-3 text-right">Alterar Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {modules.map((mod) => (
                  <tr key={mod.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {mod.name}
                    </td>
                    <td className="px-4 py-3 text-slate-500 font-mono text-[11px]">
                      {mod.category}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-sm">
                      {mod.description}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                          mod.status === 'ACTIVE'
                            ? 'bg-emerald-100 text-emerald-800'
                            : mod.status === 'DRAFT'
                            ? 'bg-amber-100 text-amber-800'
                            : mod.status === 'FUTURE'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {mod.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <select
                        value={mod.status}
                        onChange={(e) => {
                          const updated = modules.map((m) =>
                            m.id === mod.id ? { ...m, status: e.target.value as ModuleStatus } : m
                          );
                          setModules(updated);
                          saveModules(updated);
                          setSaveSuccessMsg(true);
                          setTimeout(() => setSaveSuccessMsg(false), 2000);
                        }}
                        className="px-2 py-1 rounded border border-slate-300 text-xs font-mono bg-white cursor-pointer"
                      >
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="INACTIVE">INACTIVE</option>
                        <option value="DRAFT">DRAFT</option>
                        <option value="FUTURE">FUTURE</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: ANALYTICS & EVENTOS (SEÇÃO 44) */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold font-serif text-slate-900">
                Log de Eventos & Rastreabilidade de UTMs (Seção 44)
              </h3>
              <p className="text-xs text-slate-500">
                Registro em tempo real dos eventos: cliques em CTA, conclusões de formulários, WhatsApp e conversões com parâmetros de atribuição.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
              Total de eventos registrados: <strong>{events.length}</strong>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-mono tracking-wider text-[10px]">
                  <tr>
                    <th className="px-4 py-3">Timestamp</th>
                    <th className="px-4 py-3">Tipo de Evento</th>
                    <th className="px-4 py-3">Rota / Página</th>
                    <th className="px-4 py-3">Detalhe / Label</th>
                    <th className="px-4 py-3">UTM Source / Medium</th>
                    <th className="px-4 py-3">UTM Campaign</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {events.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                        Nenhum evento registrado ainda. Interaja com os botões ou formulários do site.
                      </td>
                    </tr>
                  ) : (
                    events.map((evt) => (
                      <tr key={evt.id} className="hover:bg-slate-50/70">
                        <td className="px-4 py-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                          {new Date(evt.timestamp).toLocaleTimeString('pt-BR')} (
                          {new Date(evt.timestamp).toLocaleDateString('pt-BR')})
                        </td>
                        <td className="px-4 py-3 font-mono font-bold text-slate-800">
                          <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px]">
                            {evt.eventName}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-[11px] text-slate-600">
                          {evt.path}
                        </td>
                        <td className="px-4 py-3 text-slate-800">
                          {evt.label || '—'}
                        </td>
                        <td className="px-4 py-3 font-mono text-[10px] text-slate-500">
                          {evt.utms.source || evt.utms.medium
                            ? `${evt.utms.source || '—'} / ${evt.utms.medium || '—'}`
                            : 'Direto / Orgânico'}
                        </td>
                        <td className="px-4 py-3 font-mono text-[10px] text-slate-500">
                          {evt.utms.campaign || '—'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* LEAD DETAIL & EDIT MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-[#0B1728] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C5A869] tracking-wider block">
                  Dossiê de Qualificação Comercial
                </span>
                <h3 className="text-base font-bold font-serif">
                  {selectedLead.id} — {selectedLead.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700">
              {/* Core Information */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Empresa:</span>
                  <span className="font-semibold text-slate-900">{selectedLead.company}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">CNPJ/CPF:</span>
                  <span className="font-mono text-slate-900">{selectedLead.cnpj}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Cargo:</span>
                  <span className="text-slate-800">{selectedLead.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Telefone / WhatsApp:</span>
                  <span className="font-mono text-slate-900">{selectedLead.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">E-mail:</span>
                  <span className="font-mono text-slate-900">{selectedLead.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] uppercase block">Origem do Lead:</span>
                  <span className="text-slate-800 truncate block">{selectedLead.origin}</span>
                </div>
              </div>

              {/* Demand specific fields */}
              <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 uppercase text-[11px] text-[#C5A869]">
                  Dados da Demanda ({selectedLead.demandType})
                </div>
                {selectedLead.estimatedValue && (
                  <div>
                    <strong>Valor Estimado:</strong> {selectedLead.estimatedValue}
                  </div>
                )}
                {selectedLead.debtorEntity && (
                  <div>
                    <strong>Ente Devedor / Contraparte:</strong> {selectedLead.debtorEntity}
                  </div>
                )}
                {selectedLead.currentStage && (
                  <div>
                    <strong>Estágio Atual / Status Processual:</strong> {selectedLead.currentStage}
                  </div>
                )}
                {selectedLead.availableDocuments && selectedLead.availableDocuments.length > 0 && (
                  <div>
                    <strong>Documentos Informados:</strong> {selectedLead.availableDocuments.join(', ')}
                  </div>
                )}
                {selectedLead.hasCollateral && (
                  <div>
                    <strong>Possui Garantia Real:</strong> {selectedLead.hasCollateral} ({selectedLead.collateralType || 'Não detalhado'})
                  </div>
                )}
                <div>
                  <strong>Mensagem do Proponente:</strong>
                  <p className="mt-1 p-2 bg-slate-50 rounded border border-slate-200 text-slate-800 italic">
                    {selectedLead.message}
                  </p>
                </div>
              </div>

              {/* CRM Pipeline Controls */}
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                <div className="font-bold text-slate-900 uppercase text-[11px]">
                  Disciplina Comercial & Roteamento Interno
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 mb-1 font-semibold">
                      Estágio no Funil:
                    </label>
                    <select
                      value={selectedLead.status}
                      onChange={(e) => handleStatusChange(selectedLead, e.target.value as LeadStatus)}
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white"
                    >
                      <option value="Novo">Novo</option>
                      <option value="Qualificação">Qualificação</option>
                      <option value="Oportunidade">Oportunidade</option>
                      <option value="Proposta">Proposta</option>
                      <option value="Negociação">Negociação</option>
                      <option value="Fechado">Fechado</option>
                      <option value="Perdido/Nutrição">Perdido/Nutrição</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1 font-semibold">
                      Responsável Interno:
                    </label>
                    <input
                      type="text"
                      value={selectedLead.assignedTo}
                      onChange={(e) => {
                        const updated = { ...selectedLead, assignedTo: e.target.value };
                        setSelectedLead(updated);
                        updateLead(updated);
                      }}
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 mb-1 font-semibold">
                      Próxima Ação:
                    </label>
                    <input
                      type="text"
                      value={selectedLead.nextAction}
                      onChange={(e) => {
                        const updated = { ...selectedLead, nextAction: e.target.value };
                        setSelectedLead(updated);
                        updateLead(updated);
                      }}
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 mb-1 font-semibold">
                      Data da Próxima Ação:
                    </label>
                    <input
                      type="date"
                      value={selectedLead.nextActionDate}
                      onChange={(e) => {
                        const updated = { ...selectedLead, nextActionDate: e.target.value };
                        setSelectedLead(updated);
                        updateLead(updated);
                      }}
                      className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 mb-1 font-semibold">
                    Parceiro / Rota Interna (Campo Não Público):
                  </label>
                  <input
                    type="text"
                    value={selectedLead.internalRoutePartner}
                    onChange={(e) => {
                      const updated = { ...selectedLead, internalRoutePartner: e.target.value };
                      setSelectedLead(updated);
                      updateLead(updated);
                    }}
                    placeholder="Ex: Fundo Alpha Special Situations / Mesa Agro"
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => {
                  if (confirm(`Deseja excluir o registro ${selectedLead.id}?`)) {
                    deleteLead(selectedLead.id);
                    setSelectedLead(null);
                  }
                }}
                className="text-rose-600 hover:text-rose-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Excluir registro</span>
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-[#0B1728] text-white rounded text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
