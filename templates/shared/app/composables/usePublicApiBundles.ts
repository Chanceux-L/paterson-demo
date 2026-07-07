import {
  ARTICLE_PAGE_SIZE,
  type Article,
  type ArticleCategory
} from '#shared-template/types/articles';
import {
  pickLocalized,
  resolveCoverImage,
  resolveDocumentUrl,
  resolveImageUrl,
  resolveSlug,
  useDataCategory,
  type CategoryItem,
  type ContentItem,
  type ContentItemsResponse,
  type DataCategoryApi
} from '#shared-template/composables/useDataCategory';

const localizedTextKeys = ['zh', 'zh-CN', 'cn', 'text', 'static', 'value', 'source'];
const nestedTextKeys = ['intro', 'summary', 'excerpt', 'description', 'content', 'body', 'children', 'items'];

export type ArticleBundle = {
  items: Article[];
  categories: ArticleCategory[];
  fromApi: boolean;
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export type ArticleCategoriesResult = {
  rawCategories: CategoryItem[];
  categories: ArticleCategory[];
};

export interface ArticleQueryOptions {
  categories?: CategoryItem[];
  categoryId?: number | null;
  categorySlug?: string | null;
  page?: number;
  perPage?: number;
}

function primitiveText(value: unknown): string {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  return '';
}

function collectText(value: unknown): string[] {
  const primitive = primitiveText(value);
  if (primitive) {
    return [primitive];
  }

  if (Array.isArray(value)) {
    return value.flatMap(item => collectText(item));
  }

  if (!value || typeof value !== 'object') {
    return [];
  }

  const obj = value as Record<string, unknown>;

  for (const key of localizedTextKeys) {
    if (Object.hasOwn(obj, key)) {
      const text = collectText(obj[key]);
      if (text.length) {
        return text;
      }
    }
  }

  const nestedText = nestedTextKeys.flatMap((key) => {
    if (!Object.hasOwn(obj, key)) {
      return [];
    }

    return collectText(obj[key]);
  });

  if (nestedText.length) {
    return nestedText;
  }

  return Object.values(obj).flatMap(item => collectText(item));
}

function normalizeApiText(value: unknown): string {
  return collectText(value).join('\n').trim();
}

function asString(value: unknown, defaultValue = ''): string {
  if (typeof value === 'string') {
    return value.trim() || defaultValue;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  return defaultValue;
}

function localizedText(value: unknown): string {
  return pickLocalized(value, 'zh');
}

function asNumber(value: unknown, defaultValue = 0): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const number = Number(value);
    return Number.isFinite(number) ? number : defaultValue;
  }

  return defaultValue;
}

function firstString(values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value) {
      return value;
    }
  }

  return '';
}

function isPublished(item: ContentItem): boolean {
  return !item.content_status || item.content_status === 'published';
}

function normalizeLookupValue(value: unknown): string {
  return asString(value).trim();
}

function contentItemLookupValues(item: ContentItem): string[] {
  const externalId = asString(item.data?._external_id);
  const externalSourceId = externalId.includes(':') ? externalId.split(':').pop() || '' : externalId;

  return Array.from(new Set([
    resolveSlug(item),
    item.slug,
    item.data?.slug,
    item.id,
    externalId,
    externalSourceId
  ].map(normalizeLookupValue).filter(Boolean)));
}

function contentItemMatchesLookup(item: ContentItem, lookup: string): boolean {
  const normalizedLookup = normalizeLookupValue(lookup);

  return !!normalizedLookup && contentItemLookupValues(item).includes(normalizedLookup);
}

function flattenCategories(categories: CategoryItem[]): CategoryItem[] {
  return categories.flatMap(category => [
    category,
    ...flattenCategories(Array.isArray(category.children) ? category.children : [])
  ]);
}

function categoryIdFromSlug(categories: CategoryItem[], slug?: string | null, id?: number | string | null): number {
  const match = flattenCategories(categories).find(category => category.slug === slug || (id != null && String(category.id) === String(id)));
  return asNumber(match?.id ?? id);
}

function apiCategoriesToArticle(categories: CategoryItem[]): ArticleCategory[] {
  return categories.map((category, index) => ({
    id: asNumber(category.id, index + 1),
    name: localizedText(category.name),
    slug: category.slug
  }));
}

function mapArticle(item: ContentItem, categories: CategoryItem[]): Article {
  const categoryName = localizedText(item.category?.name || item.data.category_name);
  const categorySlug = item.category?.slug || asString(item.data.category_slug);
  const categoryId = item.category?.id ?? asString(item.data.category_id);
  const image = firstString([resolveImageUrl(item, 'cover_image'), resolveCoverImage(item)]);
  const video = resolveDocumentUrl(item, 'video');

  return {
    id: asNumber(item.id),
    slug: resolveSlug(item),
    categoryId: categoryIdFromSlug(categories, categorySlug, categoryId),
    category: categoryName,
    title: asString(item.data.title || item.title),
    intro: normalizeApiText(item.data.intro || item.data.summary || item.data.excerpt),
    image,
    video,
    date: firstString([item.data.create_time, item.created_at]).slice(0, 10),
    browse: asNumber(item.data.browse || item.data.views)
  };
}

function toArticleBundle(
  response: ContentItemsResponse,
  items: Article[],
  categories: ArticleCategory[]
): ArticleBundle {
  return {
    items,
    categories,
    fromApi: true,
    totalCount: response.total_count || items.length,
    totalPages: response.total_pages || 1,
    currentPage: response.current_page || 1
  };
}

async function loadPublicArticleCategories(api: DataCategoryApi): Promise<ArticleCategoriesResult> {
  const rawCategories = await api.fetchCategories('article');
  return {
    rawCategories,
    categories: apiCategoriesToArticle(rawCategories)
  };
}

async function loadPublicArticleBundle(api: DataCategoryApi, options: ArticleQueryOptions = {}): Promise<ArticleBundle> {
  const categories = options.categories || [];
  const category = options.categorySlug
    ? categories.find(item => item.slug === options.categorySlug)
    : options.categoryId
      ? categories.find(item => asNumber(item.id) === options.categoryId)
      : null;
  const response = await api.fetchContentItems('article', {
    categorySlugEq: category?.slug || options.categorySlug || undefined,
    page: options.page,
    perPage: options.perPage || ARTICLE_PAGE_SIZE,
    orderBy: 'is_topping desc, id desc'
  });
  const apiItems = (response.content_items || []).filter(isPublished);

  return toArticleBundle(
    response,
    apiItems.map(item => mapArticle(item, categories)),
    apiCategoriesToArticle(categories)
  );
}

async function loadPublicArticleDetail(api: DataCategoryApi, slug: string) {
  const [categories, item, relatedBundle] = await Promise.all([
    api.fetchCategories('article'),
    api.fetchContentItemBySlug('article', slug),
    loadPublicArticleBundle(api, { perPage: 5 })
  ]);

  if (!item || !isPublished(item) || !contentItemMatchesLookup(item, slug)) {
    return null;
  }

  const article = mapArticle(item, categories);
  return {
    article,
    categories: apiCategoriesToArticle(categories),
    related: relatedBundle.items.filter(related => related.slug !== article.slug && related.id !== article.id).slice(0, 4),
    content: asString(item.data.content)
  };
}

export function usePublicApiBundles() {
  const api = useDataCategory();

  function loadArticleCategories() {
    return loadPublicArticleCategories(api);
  }

  function loadArticleBundle(options: ArticleQueryOptions = {}) {
    return loadPublicArticleBundle(api, options);
  }

  function loadArticleDetail(slug: string) {
    return loadPublicArticleDetail(api, slug);
  }

  return {
    loadArticleCategories,
    loadArticleBundle,
    loadArticleDetail
  };
}
