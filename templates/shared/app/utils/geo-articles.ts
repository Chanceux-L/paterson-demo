import { alovaInstance, type RequestResult } from '#shared-template/composables/useRequest';

export interface GeoArticle {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  locale: string;
  published_at: string;
  seo_title?: string;
  seo_description?: string;
  cover_image_url?: string | null;
  body_markdown?: string;
}

export interface GeoArticleListResponse {
  geo_articles: GeoArticle[];
  total_count: number;
  total_pages: number;
  current_page: number;
}

export interface ListGeoArticlesOptions {
  page?: number;
  perPage?: number;
  locale?: string;
  tag?: string;
}

export async function listGeoArticles(
  options: ListGeoArticlesOptions = {}
): Promise<GeoArticleListResponse> {
  const { page = 1, perPage = 25, locale, tag } = options;
  const params: Record<string, string | number> = {
    page,
    per_page: perPage
  };

  if (locale) {
    params.locale_eq = locale;
  }

  if (tag) {
    params.tags_cont = tag;
  }

  const result = await alovaInstance.Get<RequestResult<GeoArticleListResponse>>('geo_articles', {
    params
  }).send();

  return result.data;
}

export async function getGeoArticle(slug: string): Promise<GeoArticle | null> {
  if (!slug || slug === '_') {
    return null;
  }

  try {
    const result = await alovaInstance.Get<RequestResult<GeoArticle>>(`geo_articles/${encodeURIComponent(slug)}`).send();

    return result.data;
  } catch (err) {
    if (err instanceof Error && err.message.includes('404')) {
      return null;
    }

    throw err;
  }
}
