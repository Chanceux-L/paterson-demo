import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import type { Article } from '#shared-template/types/articles';
import type { ResolvedSiteConfig } from '#shared-template/composables/useResolvedSiteConfig';
import { siteProfile } from '@site-profile';

dayjs.extend(customParseFormat);

const defaultGeoSiteConfig = {
  companyName: siteProfile.identity.legalName,
  defaultImage: '',
  logo: '',
  shortName: siteProfile.identity.shortName,
  siteDescription: siteProfile.seo.description,
  canonical: siteProfile.urls.production,
  locale: 'zh-CN',
  footer: {
    phone: siteProfile.contact.phone,
    email: siteProfile.contact.email,
    address: siteProfile.contact.address.text
  }
} as const;

type GeoSiteConfig = Pick<ResolvedSiteConfig, 'canonical' | 'companyName' | 'locale' | 'shortName' | 'siteDescription'> & {
  assetUrl?: (path: string) => string;
  defaultImage?: string;
  footer: Pick<ResolvedSiteConfig['footer'], 'address' | 'email' | 'phone'>;
  logo?: string;
};

type GeoFaqItem = {
  question: string;
  answer: string;
};

type Citation = {
  title: string;
  href: string;
};

function getGeoIds(siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  const identityId = `${siteConfig.canonical}/#identity`;

  return {
    identityId,
    websiteId: `${siteConfig.canonical}/#website`,
    defaultImage: absoluteSiteUrl(siteConfig.defaultImage || siteConfig.logo || '/', siteConfig),
    logo: absoluteSiteUrl(siteConfig.logo || siteConfig.defaultImage || '/', siteConfig)
  };
}

const defaultDate = '2026-06-24';

function geoOrganizationProfileFor(siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  return {
    foundingDate: siteProfile.identity.foundingDate,
    founder: siteProfile.identity.founder,
    phone: siteConfig.footer.phone,
    email: siteConfig.footer.email,
    address: siteConfig.footer.address,
    areaServed: siteProfile.geo.areaServed,
    knowsAbout: siteProfile.geo.knowsAbout,
    brands: siteProfile.geo.brands,
    sameAs: [
      siteConfig.canonical,
      ...siteProfile.urls.legacy,
      ...siteProfile.urls.externalReferences
    ],
    citations: siteProfile.geo.authorityCitations
  } as const;
}

function articleAuthorityCitations(article: Article, siteConfig: GeoSiteConfig = defaultGeoSiteConfig): ReadonlyArray<Citation> {
  return geoOrganizationProfileFor(siteConfig).citations;
}

type ThingRecord = Record<string, unknown>;

function organizationJsonLdSchema(siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  const ids = getGeoIds(siteConfig);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ids.identityId,
    'name': siteConfig.companyName,
    'alternateName': [siteConfig.shortName, siteProfile.identity.englishName],
    'url': siteConfig.canonical,
    'logo': {
      '@type': 'ImageObject',
      'url': ids.logo
    },
    'description': siteConfig.siteDescription,
    'telephone': siteConfig.footer.phone,
    'email': siteConfig.footer.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': siteConfig.footer.address,
      'addressLocality': siteProfile.contact.address.locality,
      'addressRegion': siteProfile.contact.address.region,
      'addressCountry': siteProfile.contact.address.countryCode
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': siteConfig.footer.phone,
        'email': siteConfig.footer.email,
        'contactType': 'customer support',
        'areaServed': siteProfile.contact.address.countryCode,
        'availableLanguage': siteProfile.contact.availableLanguages
      }
    ],
    'sameAs': geoOrganizationProfileFor(siteConfig).sameAs
  };
}

type BreadcrumbItem = {
  name: string;
  item: string;
};

type ItemListEntry = {
  title: string;
  url: string;
  description?: string;
  image?: string;
};

function absoluteSiteUrl(path = '/', siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const assetUrl = siteConfig.assetUrl?.(path);
  if (assetUrl && /^https?:\/\//.test(assetUrl)) {
    return assetUrl;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.canonical}${normalizedPath}`;
}

function compactSchema<T extends ThingRecord>(schema: T): T {
  return Object.fromEntries(
    Object.entries(schema)
      .filter(([, value]) => {
        if (value === undefined || value === null || value === '') {
          return false;
        }

        if (Array.isArray(value)) {
          return value.length > 0;
        }

        return true;
      })
  ) as T;
}

function faqPageSchema(items: readonly GeoFaqItem[]) {
  return defineWebPage({
    '@type': ['WebPage', 'FAQPage'],
    'mainEntity': items.map(item => defineQuestion({
      name: item.question,
      answer: item.answer
    }))
  });
}

function breadcrumbSchema(items: BreadcrumbItem[], siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  return defineBreadcrumb({
    itemListElement: items.map((item, index) => defineListItem({
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.item, siteConfig)
    }))
  });
}

function itemListSchema(name: string, url: string, entries: ItemListEntry[], siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  return defineItemList({
    '@id': `${absoluteSiteUrl(url, siteConfig)}#item-list`,
    name,
    'url': absoluteSiteUrl(url, siteConfig),
    'itemListElement': entries.map((entry, index) => defineListItem({
      position: index + 1,
      item: compactSchema({
        '@type': 'Thing',
        'name': entry.title,
        'description': entry.description,
        'image': entry.image ? absoluteSiteUrl(entry.image, siteConfig) : undefined,
        'url': absoluteSiteUrl(entry.url, siteConfig)
      })
    }))
  });
}

function articlesItemListSchema(articles: Article[], siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  return itemListSchema(
    `${siteProfile.identity.englishName} [[ARTICLES_SCHEMA_LIST_NAME]]`,
    '/articles',
    articles.slice(0, 12).map(article => ({
      title: article.title,
      description: article.intro,
      image: article.image,
      url: `/articles/${article.slug || article.id}`
    })),
    siteConfig
  );
}

function blogSchema(articles: Article[], siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  const ids = getGeoIds(siteConfig);

  return defineWebPage({
    '@type': ['WebPage', 'Blog'],
    '@id': `${absoluteSiteUrl('/articles', siteConfig)}#blog`,
    'name': `${siteProfile.identity.englishName} [[ARTICLES_SCHEMA_LIST_NAME]]`,
    'description': `[[ARTICLES_SCHEMA_DESCRIPTION]] ${siteProfile.identity.englishName}.`,
    'url': absoluteSiteUrl('/articles', siteConfig),
    'publisher': { '@id': ids.identityId },
    'author': { '@id': ids.identityId },
    'blogPost': articles.slice(0, 12).map(article => ({ '@id': `${absoluteSiteUrl(`/articles/${article.slug || article.id}`, siteConfig)}#article` }))
  });
}

function articleSchema(article: Article, content?: string, siteConfig: GeoSiteConfig = defaultGeoSiteConfig) {
  const publishedDate = dayjs(article.date, ['YYYY-M-D', 'YYYY/M/D', 'YYYY.M.D', 'YYYY-MM-DD', 'YYYY/MM/DD', 'YYYY.MM.DD'], true);
  const published = publishedDate.isValid() ? publishedDate.format('YYYY-MM-DD') : defaultDate;
  const ids = getGeoIds(siteConfig);
  const articleUrl = absoluteSiteUrl(`/articles/${article.slug || article.id}`, siteConfig);
  const citations = articleAuthorityCitations(article, siteConfig);

  return defineArticle(compactSchema({
    '@type': ['Article', 'BlogPosting'],
    '@id': `${articleUrl}#article`,
    'url': articleUrl,
    'headline': article.title,
    'description': article.intro,
    'image': article.image ? absoluteSiteUrl(article.image, siteConfig) : ids.defaultImage,
    'datePublished': published,
    'dateModified': published,
    'inLanguage': siteConfig.locale,
    'articleSection': [article.category],
    'keywords': [article.category, article.title, siteConfig.shortName, siteProfile.identity.englishName],
    'about': article.category,
    'wordCount': content ? textWordCount(content) : undefined,
    'citation': citations.map(citation => citation.href),
    'mentions': citations.map(citation => ({
      '@type': 'CreativeWork',
      'name': citation.title,
      'url': citation.href
    })),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    'isPartOf': { '@id': `${absoluteSiteUrl('/articles', siteConfig)}#blog` },
    'author': { '@id': ids.identityId },
    'publisher': {
      '@type': 'Organization',
      '@id': ids.identityId,
      'name': siteConfig.companyName,
      'logo': {
        '@type': 'ImageObject',
        'url': ids.logo
      }
    }
  }));
}

function textWordCount(value: string) {
  return value.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

type SiteConfigValue = Pick<ResolvedSiteConfig, 'canonical' | 'companyName' | 'locale' | 'shortName' | 'siteDescription'> & {
  defaultImage?: string;
  footer: Pick<ResolvedSiteConfig['footer'], 'address' | 'email' | 'phone'>;
  logo?: string;
};

type GeoSchemaOptions = {
  defaultImage?: string;
  logo?: string;
};

export function useGeoSchemas(options: GeoSchemaOptions = {}) {
  const { siteConfig } = useResolvedSiteConfig();
  const { tm } = useI18n();
  const { resolveTranslatedMessageTree } = useI18nMessageTree();

  const currentSiteConfig = computed<SiteConfigValue>(() => ({
    ...siteConfig.value,
    defaultImage: options.defaultImage,
    logo: options.logo
  }));
  const organizationJsonLd = computed(() => organizationJsonLdSchema(currentSiteConfig.value));
  const organizationProfile = computed(() => geoOrganizationProfileFor(currentSiteConfig.value));
  const faqItems = computed<GeoFaqItem[]>(() => resolveTranslatedMessageTree(tm('homePage.faq.items')) as GeoFaqItem[]);

  return {
    articleSchema: (article: Article, content?: string) => articleSchema(article, content, currentSiteConfig.value),
    articleAuthorityCitations: (article: Article) => articleAuthorityCitations(article, currentSiteConfig.value),
    articlesItemListSchema: (articles: Article[]) => articlesItemListSchema(articles, currentSiteConfig.value),
    blogSchema: (articles: Article[]) => blogSchema(articles, currentSiteConfig.value),
    breadcrumbSchema: (items: Parameters<typeof breadcrumbSchema>[0]) => breadcrumbSchema(items, currentSiteConfig.value),
    faqPageSchema: () => faqPageSchema(faqItems.value),
    faqItems,
    organizationJsonLd,
    organizationProfile
  };
}
