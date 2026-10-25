export interface AnalyticsEvent {
  id: string;
  eventName: 'clique_cta' | 'inicio_formulario' | 'conclusao_formulario' | 'clique_whatsapp' | 'envio_parceiro' | 'inscricao_newsletter';
  timestamp: string;
  path: string;
  label?: string;
  utms: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
}

const EVENTS_STORAGE_KEY = 'mack_analytics_events_v1';

export function getStoredEvents(): AnalyticsEvent[] {
  try {
    const raw = localStorage.getItem(EVENTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function trackEvent(
  eventName: AnalyticsEvent['eventName'],
  label?: string
): void {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const event: AnalyticsEvent = {
      id: `EVT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      eventName,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      label,
      utms: {
        source: urlParams.get('utm_source') || undefined,
        medium: urlParams.get('utm_medium') || undefined,
        campaign: urlParams.get('utm_campaign') || undefined,
        content: urlParams.get('utm_content') || undefined,
        term: urlParams.get('utm_term') || undefined,
      },
    };

    const current = getStoredEvents();
    const updated = [event, ...current].slice(0, 100); // keep last 100 events
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('mack_analytics_updated'));
  } catch {
    // Silent catch for resilience
  }
}
