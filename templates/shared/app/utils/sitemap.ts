export const dynamicSitemapSourcePath = '/api/sitemap-dynamic-urls';

const publicApiBasePath = '/public_api/v1';
const sitemapPerPage = 100;
const sitemapMaxPages = 100;
const defaultLocale = 'zh-CN';

interface SitemapContentSource {
  dataCategorySlug: 'article';
  routeBase: '/articles';
  orderBy: string;
  params?: Record<string, string | number | boolean>;
}

interface PublicContentItem {
  slug?: unknown;
  content_status?: unknown;
  created_at?: unknown;
  updated_at?: unknown;
  data?: {
    is_disable?: unknown;
    slug?: unknown;
  };
}

interface ContentItemsResponse {
  content_items?: PublicContentItem[];
  total_pages?: number;
}

interface SitemapContentItemsPage {
  response: ContentItemsResponse;
  pagination: SitemapPagination;
}

interface SitemapPagination {
  nextPage?: number;
  totalPages?: number;
}

export interface DynamicSitemapUrl {
  loc: string;
  lastmod?: string;
  _encoded: true;
  _i18nTransform: true;
}

export interface DynamicSitemapOptions {
  apiBase?: string;
  appCode?: string;
  fetcher?: typeof fetch;
  maxPages?: number;
  origin?: string;
  perPage?: number;
}

export const sitemapContentSources = [
  {
    dataCategorySlug: 'article',
    routeBase: '/articles',
    orderBy: 'is_topping desc, id desc'
  }
] as const satisfies readonly SitemapContentSource[];

export async function buildDynamicSitemapUrls(options: DynamicSitemapOptions = {}): Promise<DynamicSitemapUrl[]> {
  const apiBase = resolvePublicApiBaseUrl(options.apiBase, options.origin);
  const appCode = String(options.appCode || '').trim();
  const fetcher = options.fetcher || globalThis.fetch;

  if (!apiBase || !appCode || typeof fetcher !== 'function') {
    return [];
  }

  const sourceUrls = await Promise.all(
    sitemapContentSources.map(source => fetchContentSourceUrls(source, {
      ...options,
      apiBase,
      appCode,
      fetcher
    }))
  );

  return dedupeSitemapUrls(sourceUrls.flat());
}

export function resolvePublicApiBaseUrl(apiBase?: string, origin?: string): string {
  const configuredBase = String(apiBase || '').trim();
  const base = configuredBase.startsWith('/') && origin
    ? `${origin.replace(/\/+$/, '')}${configuredBase}`
    : String(configuredBase || origin || '').trim().replace(/\/+$/, '');

  if (!base) {
    return '';
  }

  if (base.endsWith(`${publicApiBasePath}`)) {
    return base;
  }

  if (base.endsWith('/public_api')) {
    return `${base}/v1`;
  }

  return `${base}${publicApiBasePath}`;
}

async function fetchContentSourceUrls(
  source: SitemapContentSource,
  options: Required<Pick<DynamicSitemapOptions, 'appCode' | 'fetcher'>> & DynamicSitemapOptions
): Promise<DynamicSitemapUrl[]> {
  const urls: DynamicSitemapUrl[] = [];
  const perPage = options.perPage || sitemapPerPage;
  const maxPages = options.maxPages || sitemapMaxPages;
  let nextPage: number | undefined = 1;

  while (nextPage && nextPage <= maxPages) {
    const currentPage = nextPage;
    const { response, pagination } = await fetchContentItems(source, {
      ...options,
      page: currentPage,
      perPage
    });

    urls.push(...(response.content_items || [])
      .filter(shouldIncludeContentItem)
      .map(item => toSitemapUrl(item, source))
      .filter((item): item is DynamicSitemapUrl => Boolean(item)));

    nextPage = resolveNextPage(currentPage, pagination, response);
  }

  return urls;
}

async function fetchContentItems(
  source: SitemapContentSource,
  options: Required<Pick<DynamicSitemapOptions, 'appCode' | 'fetcher'>> & DynamicSitemapOptions & { page: number; perPage: number }
): Promise<SitemapContentItemsPage> {
  const url = new URL(`${options.apiBase}/data_categories/${source.dataCategorySlug}/content_items`);
  const params = {
    page: options.page,
    per_page: options.perPage,
    order_by: source.orderBy,
    ...(source.params || {})
  };

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value));
  }

  const response = await options.fetcher(url, {
    headers: {
      Accept: 'application/json',
      AppCode: options.appCode,
      Locale: defaultLocale
    }
  });

  if (!response.ok) {
    return {
      response: {},
      pagination: {}
    };
  }

  const data = await response.json() as ContentItemsResponse | PublicContentItem[];
  return {
    response: Array.isArray(data) ? { content_items: data } : data,
    pagination: paginationFromHeaders(response.headers)
  };
}

function shouldIncludeContentItem(item: PublicContentItem): boolean {
  if (!item || (item.content_status && item.content_status !== 'published')) {
    return false;
  }

  return Boolean(contentItemSlug(item));
}

function toSitemapUrl(item: PublicContentItem, source: SitemapContentSource): DynamicSitemapUrl | null {
  const slug = contentItemSlug(item);

  if (!slug) {
    return null;
  }

  const lastmod = normalizeDate(item.updated_at) || normalizeDate(item.created_at);

  return {
    loc: `${source.routeBase}/${encodeURIComponent(slug)}`,
    ...(lastmod ? { lastmod } : {}),
    _encoded: true,
    _i18nTransform: true
  };
}

function contentItemSlug(item: PublicContentItem): string {
  const slug = typeof item.slug === 'string' ? item.slug : item.data?.slug;
  return typeof slug === 'string' ? slug.trim() : '';
}

function normalizeDate(value: unknown): string {
  if (typeof value !== 'string' || !value) {
    return '';
  }

  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? '' : new Date(timestamp).toISOString();
}

function resolveNextPage(currentPage: number, pagination: SitemapPagination, response: ContentItemsResponse): number | undefined {
  if (pagination.nextPage != null) {
    return pagination.nextPage > currentPage ? pagination.nextPage : undefined;
  }

  const totalPages = pagination.totalPages ?? normalizePositiveInteger(response.total_pages);
  if (totalPages != null) {
    return currentPage < totalPages ? currentPage + 1 : undefined;
  }

  return undefined;
}

function paginationFromHeaders(headers: Headers): SitemapPagination {
  const nextPage = headerNumber(headers, [
    'x-next-page',
    'next-page',
    'x-page-next'
  ]);
  const totalPages = headerNumber(headers, [
    'x-total-pages',
    'total-pages',
    'x-pages',
    'x-page-count'
  ]);
  const currentPage = headerNumber(headers, [
    'x-current-page',
    'current-page',
    'x-page'
  ]);
  const total = headerNumber(headers, [
    'x-total',
    'total',
    'x-total-count'
  ]);
  const perPage = headerNumber(headers, [
    'x-per-page',
    'per-page',
    'x-page-size'
  ]);

  return {
    ...(nextPage != null ? { nextPage } : {}),
    ...(totalPages != null ? { totalPages } : {}),
    ...(totalPages == null && currentPage != null && total != null && perPage != null
      ? { totalPages: Math.max(currentPage, Math.ceil(total / perPage)) }
      : {})
  };
}

function headerNumber(headers: Headers, keys: string[]): number | undefined {
  for (const key of keys) {
    const number = normalizePositiveInteger(headers.get(key));

    if (number != null) {
      return number;
    }
  }

  return undefined;
}

function normalizePositiveInteger(value: unknown): number | undefined {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.floor(number) : undefined;
}

function dedupeSitemapUrls(urls: DynamicSitemapUrl[]): DynamicSitemapUrl[] {
  const byLoc = new Map<string, DynamicSitemapUrl>();

  for (const url of urls) {
    byLoc.set(url.loc, url);
  }

  return [...byLoc.values()];
}
