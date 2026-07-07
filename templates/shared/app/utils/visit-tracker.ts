import { alovaInstance, apiHeaders, type RequestResult, trackerApiUrl } from '#shared-template/composables/useRequest';

let lastReportedKey = '';

function hasAppCode() {
  const headers = apiHeaders({ requireAppCode: true });
  return Boolean(headers.AppCode);
}

export interface VisitPayload {
  path: string;
  host: string;
  referrer?: string;
  title?: string;
  screen?: string;
  lang?: string;
}

export function buildVisitPayload(path: string): VisitPayload | null {
  if (!import.meta.client) {
    return null;
  }

  return {
    host: window.location.hostname,
    lang: navigator.language,
    path,
    referrer: document.referrer || undefined,
    screen: `${window.screen.width}x${window.screen.height}`,
    title: document.title || undefined
  };
}

export function reportVisit(path: string): void {
  if (!import.meta.client || !hasAppCode()) {
    return;
  }

  const key = `${path}@${Math.floor(Date.now() / 1500)}`;
  if (key === lastReportedKey) {
    return;
  }
  lastReportedKey = key;

  const payload = buildVisitPayload(path);
  if (!payload) {
    return;
  }

  alovaInstance.Post<RequestResult<unknown>>('visits/track', JSON.stringify(payload), {
    meta: {
      baseURL: trackerApiUrl('').replace(/\/+$/, ''),
      requireAppCode: true
    }
  }).send().catch(() => {});
}
