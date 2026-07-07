import type { AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { axiosRequestAdapter } from '@alova/adapter-axios';
import { createAlova } from 'alova';
import nuxtHook from 'alova/nuxt';
import { forEach, isEmpty, snakeCase } from 'lodash-es';
import urlJoin from 'proper-url-join';
import qs from 'qs';
import { toValue, type MaybeRefOrGetter } from 'vue';

interface SuccessResponse {
  data: unknown;
  headers: Record<string, unknown>;
  status: number;
}

interface RequestConfigWithParams {
  params?: Record<string, unknown> | string;
}

export interface RequestResult<T = unknown> {
  data: T;
  isResponse: true;
  meta: Record<string, unknown>;
  status: number;
  headers: Record<string, unknown>;
}

export interface ApiRequestOptions extends RequestConfigWithParams {
  extra?: Record<string, string>;
  headers?: Record<string, string>;
  locale?: string;
  noStoreOnError?: boolean;
  requireAppCode?: boolean;
  signal?: AbortSignal;
  skipDefaultHeaders?: boolean;
}

const publicApiBasePath = '/public_api/v1';

interface PublicApiRuntimeConfig {
  apiBase: string;
  appCode: string;
  trackerApi: string;
}

function getPublicRuntimeConfig() {
  if (import.meta.server || import.meta.client) {
    const nuxtApp = tryUseNuxtApp();
    if (nuxtApp) {
      const runtimeConfig = useRuntimeConfig();
      const publicConfig = runtimeConfig.public;

      if (import.meta.server && import.meta.dev) {
        return {
          ...publicConfig,
          apiBase: process.env.APP_PUBLIC_API_BASE || publicConfig.apiBase
        };
      }

      return publicConfig;
    }
  }

  return {
    apiBase: import.meta.env.APP_PUBLIC_API_BASE || '',
    appCode: import.meta.env.APP_CODE || '',
    trackerApi: import.meta.env.APP_TRACKER_API || ''
  };
}

function publicApiBaseURL(config: Partial<PublicApiRuntimeConfig> = getPublicRuntimeConfig()) {
  if (import.meta.client && import.meta.dev) {
    return publicApiBasePath;
  }

  const apiBase = String(config.apiBase || '').replace(/\/+$/, '');

  return urlJoin(apiBase, publicApiBasePath);
}

function appCode(config: Partial<PublicApiRuntimeConfig> = getPublicRuntimeConfig()) {
  return String(config.appCode || '');
}

function normalizeLocale(locale?: string) {
  if (locale) {
    return locale;
  }

  const nuxtApp = tryUseNuxtApp();
  if (nuxtApp) {
    const { $i18n } = nuxtApp as { $i18n: { locale: { value: string } } };
    return $i18n?.locale?.value || 'zh-CN';
  }

  return 'zh-CN';
}

async function handleSuccess<T = unknown>(response: AxiosResponse) {
  return buildSuccessResult({
    data: response.data,
    headers: response.headers,
    status: response.status
  }) as RequestResult<T>;
}

async function handleError(response: unknown) {
  const responseError = response as {
    code?: unknown;
    message?: string;
  };
  const err = new Error(responseError?.message || 'Network Error') as Error & {
    code?: unknown;
    data?: unknown;
    status?: number;
  };

  if (isRequestCancelError(response)) {
    throw err;
  }

  if (shouldNoStoreOnError(response)) {
    disableCurrentSsrResponseCache();
  }

  const httpResponse = getErrorResponse(response);
  const status = httpResponse.status || (response as { status?: number })?.status;

  if (status) {
    const responseData = httpResponse.data || {};
    err.message = getErrorMessage(responseData, responseError?.message || err.message);
    err.code = responseData.code;
    err.data = httpResponse.data;
    err.status = status;
  }

  throw err;
}

function shouldNoStoreOnError(error: unknown) {
  const requestError = error as {
    config?: { __noStoreOnError?: boolean };
    response?: {
      config?: { __noStoreOnError?: boolean };
    };
  };

  return requestError.config?.__noStoreOnError !== false
    && requestError.response?.config?.__noStoreOnError !== false;
}

function disableCurrentSsrResponseCache() {
  if (!import.meta.server) {
    return;
  }

  const event = useRequestEvent();
  if (!event) {
    return;
  }

  setResponseHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate');
  setResponseHeader(event, 'Pragma', 'no-cache');
  setResponseHeader(event, 'Expires', '0');
}

function isRequestCancelError(error: unknown): boolean {
  const requestError = error as {
    message?: string;
    code?: string;
    name?: string;
    __CANCEL__?: boolean;
  } | null;

  return !!(
    requestError?.message === 'canceled'
    || requestError?.code === 'ERR_CANCELED'
    || requestError?.name === 'AbortError'
    || requestError?.__CANCEL__
  );
}

function buildSuccessResult(response: SuccessResponse): RequestResult {
  const { headers, data } = response;
  const result: RequestResult = {
    data,
    isResponse: true,
    meta: {},
    status: response.status,
    headers
  };

  forEach(headers, (value, key) => {
    if (/^x-/i.test(key)) {
      result.meta[snakeCase(key.replace(/^x-/i, ''))] = decoder(value);
    }
  });

  return result;
}

function getErrorResponse(error: unknown) {
  const requestError = error as {
    response?: {
      data?: Record<string, unknown>;
      status?: number;
    };
    data?: Record<string, unknown>;
    status?: number;
    message?: string;
  };

  return requestError.response || requestError;
}

function getErrorMessage(data: Record<string, unknown>, fallback: string) {
  const message = data.error_message || data.message || data.messages || data.error;
  return typeof message === 'string' && message ? message : fallback;
}

function appendParamsToUrl(url: string, config: RequestConfigWithParams): string {
  if (isEmpty(config.params)) {
    return url;
  }

  const queryString = typeof config.params === 'string'
    ? config.params
    : qs.stringify(config.params, { arrayFormat: 'brackets' });

  delete config.params;

  if (!queryString) {
    return url;
  }

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${queryString}`;
}

function decoder(value: unknown) {
  if (typeof value !== 'string') {
    return value;
  }

  const decodedValue = safelyDecodeURIComponent(value);

  try {
    return JSON.parse(decodedValue);
  } catch {
    return normalizePrimitive(decodedValue);
  }
}

function safelyDecodeURIComponent(value: string) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function normalizePrimitive(value: string) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value !== '' && !Number.isNaN(Number(value))) {
    return Number(value);
  }

  return value;
}

function applyApiHeaders(headers: RawAxiosRequestHeaders, options: ApiRequestOptions & { runtimeConfig?: Partial<PublicApiRuntimeConfig> } = {}) {
  if (options.skipDefaultHeaders) {
    return;
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  if (!headers.Locale) {
    const locale = normalizeLocale(options.locale);
    if (locale) {
      headers.Locale = locale;
    }
  }

  const code = appCode(options.runtimeConfig);
  if (options.requireAppCode !== false && code && !headers.AppCode) {
    headers.AppCode = code;
  }
}

export function apiHeaders({ locale, extra, requireAppCode = true, runtimeConfig }: ApiRequestOptions & { requireAppCode?: boolean; runtimeConfig?: Partial<PublicApiRuntimeConfig> } = {}): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  const normalizedLocale = normalizeLocale(locale);
  const code = appCode(runtimeConfig);

  if (normalizedLocale) {
    headers.Locale = normalizedLocale;
  }

  if (requireAppCode && code) {
    headers.AppCode = code;
  }

  if (extra) {
    Object.assign(headers, extra);
  }

  return headers;
}

export function apiUrl(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return urlJoin(publicApiBaseURL(), cleanPath);
}

function apiUrlWithConfig(path: string, runtimeConfig: Partial<PublicApiRuntimeConfig>) {
  const cleanPath = path.replace(/^\/+/, '');
  return urlJoin(publicApiBaseURL(runtimeConfig), cleanPath);
}

export function trackerApiUrl(path = 'visits/track', runtimeConfig: Partial<PublicApiRuntimeConfig> = getPublicRuntimeConfig()): string {
  const config = runtimeConfig;
  const trackerApi = String(config.trackerApi || '').replace(/\/+$/, '') || publicApiBaseURL(runtimeConfig);
  const cleanPath = path.replace(/^\/+/, '');

  return urlJoin(trackerApi, cleanPath);
}

const alovaInstance = createAlova({
  timeout: 30000,
  cacheFor: import.meta.dev ? null : undefined,
  statesHook: nuxtHook({
    nuxtApp: useNuxtApp
  }),
  requestAdapter: axiosRequestAdapter(),
  beforeRequest(method) {
    method.config.headers = method.config.headers || {};

    const meta = method.meta as {
      baseURL?: string;
      locale?: string;
      noStoreOnError?: boolean;
      requireAppCode?: boolean;
      runtimeConfig?: Partial<PublicApiRuntimeConfig>;
      skipDefaultHeaders?: boolean;
    } | undefined;

    method.baseURL = typeof meta?.baseURL === 'string' ? meta.baseURL : publicApiBaseURL(meta?.runtimeConfig);
    (method.config as { __noStoreOnError?: boolean }).__noStoreOnError = meta?.noStoreOnError !== false;

    if (method.meta?.skipDefaultHeaders) {
      return;
    }

    const headers = method.config.headers as RawAxiosRequestHeaders;

    applyApiHeaders(headers, {
      locale: meta?.locale,
      requireAppCode: meta?.requireAppCode,
      runtimeConfig: meta?.runtimeConfig,
      skipDefaultHeaders: meta?.skipDefaultHeaders
    });

    method.url = appendParamsToUrl(method.url, method.config);
  },
  responded: {
    onSuccess: async (response) => {
      if (response.status >= 200 && response.status < 300) {
        return handleSuccess(response);
      }

      return handleError(response);
    },
    onError: error => handleError(error)
  }
});

const isCancelError = isRequestCancelError;

export type RequestClient = Pick<typeof alovaInstance, 'Get' | 'Post'>;

export interface UseRequestOptions {
  locale?: MaybeRefOrGetter<string | undefined>;
}

type RequestMethodConfig = {
  meta?: Record<string, unknown> & {
    runtimeConfig?: Partial<PublicApiRuntimeConfig>;
  };
} & Record<string, unknown>;

function resolveDefaultLocale(locale?: MaybeRefOrGetter<string | undefined>) {
  const value = toValue(locale);
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function withRequestDefaults<T extends RequestMethodConfig | undefined>(
  config: T,
  defaults: UseRequestOptions & { runtimeConfig: PublicApiRuntimeConfig }
): T {
  const locale = resolveDefaultLocale(defaults.locale);
  const nextConfig = {
    ...(config || {}),
    meta: {
      ...(config?.meta || {})
    }
  } as RequestMethodConfig;

  if (locale && !nextConfig.meta?.locale) {
    nextConfig.meta = {
      ...nextConfig.meta,
      locale
    };
  }

  if (!nextConfig.meta?.runtimeConfig) {
    nextConfig.meta = {
      ...nextConfig.meta,
      runtimeConfig: defaults.runtimeConfig
    };
  }

  return nextConfig as T;
}

function createRequestClient(defaults: UseRequestOptions & { runtimeConfig: PublicApiRuntimeConfig }): RequestClient {
  return {
    Get: ((url: string, config?: RequestMethodConfig) =>
      alovaInstance.Get(url, withRequestDefaults(config, defaults))) as typeof alovaInstance.Get,
    Post: ((url: string, data?: unknown, config?: RequestMethodConfig) =>
      alovaInstance.Post(url, data as never, withRequestDefaults(config, defaults))) as typeof alovaInstance.Post
  };
}

export function useRequest(options: UseRequestOptions = {}) {
  const runtimeConfig = getPublicRuntimeConfig() as PublicApiRuntimeConfig;
  const request = createRequestClient({
    ...options,
    runtimeConfig
  });

  return {
    request,
    apiHeaders: (headerOptions: ApiRequestOptions & { requireAppCode?: boolean } = {}) => apiHeaders({
      ...headerOptions,
      locale: headerOptions.locale ?? resolveDefaultLocale(options.locale),
      runtimeConfig
    }),
    apiUrl: (path: string) => apiUrlWithConfig(path, runtimeConfig),
    trackerApiUrl: (path = 'visits/track') => trackerApiUrl(path, runtimeConfig)
  };
}

export { alovaInstance, appendParamsToUrl, buildSuccessResult, isCancelError, isRequestCancelError };
