import {
  alovaInstance,
  type RequestClient,
  type RequestResult,
  useRequest
} from '#shared-template/composables/useRequest';

export interface CategoryItem {
  id: number | string;
  slug: string;
  name: string | Record<string, string>;
  description?: string;
  position?: number;
  parent_id?: number | null;
  children?: CategoryItem[];
}

export interface ContentItemField {
  field_key: string;
  url?: string;
  uri?: string;
  signed_id?: string;
  filename?: string;
  name?: string;
  content_type?: string;
}

export interface ContentItem {
  id: number | string;
  slug: string;
  title?: string;
  data: {
    title?: string;
    summary?: string;
    description?: string;
    body?: string;
    content?: string;
    excerpt?: string;
    slug?: string;
    sku?: string;
    features?: string[];
    specifications?: { label: string; value: string }[];
    images?: (string | { url?: string; uri?: string })[];
    documents?: unknown[];
    client?: string;
    service?: string;
    highlights?: string[];
    results?: string[];
    [key: string]: unknown;
  };
  category?: CategoryItem;
  content_status?: string;
  created_at?: string;
  updated_at?: string;
  images?: ContentItemField[];
  documents?: ContentItemField[];
}

export interface ContentItemsResponse {
  content_items?: ContentItem[];
  total_count?: number;
  total_pages?: number;
  current_page?: number;
}

export interface FilterField {
  name: string;
  label?: string;
  type: string;
  options?: { label: string; value: string }[];
}

export interface FetchContentItemsOptions {
  categorySlug?: string;
  categorySlugEq?: string;
  externalIdEq?: string;
  externalIdIn?: string[];
  filters?: Record<string, string[]>;
  query?: string;
  slugEq?: string;
  orderBy?: string;
  page?: number;
  perPage?: number;
  params?: Record<string, unknown>;
}

const COVER_FIELD_KEYS = ['cover_image', 'cover', 'thumbnail', 'pic', 'banners', 'case_photos', 'product_photos', 'images'];

function resourceUrl(field: ContentItemField): string {
  return field.url || field.uri || '';
}

function resolveResourceUrls(fields: ContentItemField[] | undefined, fieldKeys: string | string[]): string[] {
  const keys = Array.isArray(fieldKeys) ? fieldKeys : [fieldKeys];
  if (!Array.isArray(fields) || keys.length === 0) {
    return [];
  }

  return keys.flatMap((key) => {
    return fields
      .filter(field => field?.field_key === key)
      .map(resourceUrl)
      .filter(Boolean);
  });
}

export function resolveImageUrls(item: ContentItem, fieldKeys: string | string[]): string[] {
  return resolveResourceUrls(item?.images, fieldKeys);
}

export function resolveImageUrl(item: ContentItem, fieldKeys: string | string[]): string {
  return resolveImageUrls(item, fieldKeys)[0] || '';
}

export function resolveDocumentUrls(item: ContentItem, fieldKeys: string | string[]): string[] {
  return resolveResourceUrls(item?.documents, fieldKeys);
}

export function resolveDocumentUrl(item: ContentItem, fieldKeys: string | string[]): string {
  return resolveDocumentUrls(item, fieldKeys)[0] || '';
}

export function resolveCoverImage(item: ContentItem): string {
  return resolveImageUrl(item, COVER_FIELD_KEYS);
}

export function resolveSlug(item: ContentItem): string {
  return item?.slug || item?.data?.slug || String(item?.id || '');
}

function firstDisplayString(value: unknown): string {
  if (!value) {
    return '';
  }

  if (typeof value === 'string') {
    return value.trim();
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const text = firstDisplayString(item);
      if (text) {
        return text;
      }
    }

    return '';
  }

  if (typeof value === 'object') {
    for (const item of Object.values(value as Record<string, unknown>)) {
      const text = firstDisplayString(item);
      if (text) {
        return text;
      }
    }
  }

  return '';
}

export function pickLocalized(value: unknown, locale: string): string {
  if (!value) {
    return '';
  }

  if (typeof value !== 'object') {
    return firstDisplayString(value);
  }

  if (Array.isArray(value)) {
    return firstDisplayString(value);
  }

  const obj = value as Record<string, unknown>;
  return firstDisplayString(obj[locale])
    || firstDisplayString(obj.zh)
    || firstDisplayString(obj['zh-CN'])
    || firstDisplayString(obj.en)
    || firstDisplayString(Object.values(obj));
}

function metaNumber(meta: Record<string, unknown>, key: string): number | undefined {
  const value = meta[key];
  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) ? number : undefined;
}

export async function fetchContentItems(
  dataCategorySlug: string,
  options: FetchContentItemsOptions = {},
  request: RequestClient = alovaInstance
): Promise<ContentItemsResponse> {
  const { categorySlug, categorySlugEq, externalIdEq, externalIdIn, filters, query, slugEq, orderBy, page, perPage } = options;
  const params: Record<string, unknown> = { ...(options.params || {}) };
  const category = categorySlugEq || categorySlug;

  if (category && category !== 'all') {
    params.category_slug_eq = category;
  }

  const q = (query || '').trim();
  if (q) {
    params['data_search[title_cont]'] = q;
  }

  if (slugEq) {
    params['data_search[slug_eq]'] = slugEq;
  }

  if (externalIdEq) {
    params['data_search[_external_id_eq]'] = externalIdEq;
  }

  if (externalIdIn?.length) {
    params['data_search[_external_id_in]'] = externalIdIn;
  }

  if (filters && Object.keys(filters).length > 0) {
    params.filters = JSON.stringify(filters);
  }

  if (page) {
    params.page = page;
  }

  if (perPage) {
    params.per_page = perPage;
  }

  if (orderBy) {
    params.order_by = orderBy;
  }

  const result = await request.Get<RequestResult<ContentItemsResponse>>(`data_categories/${dataCategorySlug}/content_items`, {
    params
  }).send();

  const data = result.data;
  const response: ContentItemsResponse = Array.isArray(data) ? { content_items: data } : data;
  const totalCount = metaNumber(result.meta, 'total') ?? response.total_count;
  const pageSize = perPage && perPage > 0 ? perPage : undefined;
  return {
    ...response,
    total_count: totalCount,
    total_pages: metaNumber(result.meta, 'total_pages') ?? response.total_pages ?? (totalCount != null && pageSize ? Math.max(1, Math.ceil(totalCount / pageSize)) : undefined),
    current_page: metaNumber(result.meta, 'current_page') ?? response.current_page ?? page
  };
}

export async function fetchCategories(
  dataCategorySlug: string,
  request: RequestClient = alovaInstance
): Promise<CategoryItem[]> {
  const result = await request.Get<RequestResult<CategoryItem[]>>(`data_categories/${dataCategorySlug}/categories`, {
    params: {
      per_page: 100,
      parent_id_null: true
    }
  }).send();

  const data = result.data as CategoryItem[] | { categories?: CategoryItem[] };
  return Array.isArray(data) ? data : (data.categories || []);
}

export async function fetchFilterSchema(
  dataCategorySlug: string,
  request: RequestClient = alovaInstance
): Promise<FilterField[]> {
  const result = await request.Get<RequestResult<{ fields?: FilterField[] }>>(`data_categories/${dataCategorySlug}/filter_schema`).send();

  return Array.isArray(result.data?.fields) ? result.data.fields : [];
}

export async function fetchContentItemBySlug(
  dataCategorySlug: string,
  slug: string,
  options: FetchContentItemsOptions = {},
  request: RequestClient = alovaInstance
): Promise<ContentItem | null> {
  if (!slug || slug === '_') {
    return null;
  }

  try {
    const result = await request.Get<RequestResult<ContentItem>>(`data_categories/${dataCategorySlug}/content_items/${encodeURIComponent(slug)}`, {
      meta: {
        noStoreOnError: false
      }
    }).send();

    return result.data;
  } catch {
    const result = await fetchContentItems(dataCategorySlug, { ...options, slugEq: slug }, request);
    const items = Array.isArray(result) ? result as unknown as ContentItem[] : (result.content_items || []);
    return items[0] || null;
  }
}

export function useDataCategory() {
  const { locale } = useI18n();
  const { request } = useRequest({ locale });

  return {
    fetchContentItems: (dataCategorySlug: string, options: FetchContentItemsOptions = {}) =>
      fetchContentItems(dataCategorySlug, options, request),
    fetchCategories: (dataCategorySlug: string) =>
      fetchCategories(dataCategorySlug, request),
    fetchFilterSchema: (dataCategorySlug: string) =>
      fetchFilterSchema(dataCategorySlug, request),
    fetchContentItemBySlug: (dataCategorySlug: string, slug: string, options: FetchContentItemsOptions = {}) =>
      fetchContentItemBySlug(dataCategorySlug, slug, options, request)
  };
}

export type DataCategoryApi = ReturnType<typeof useDataCategory>;
