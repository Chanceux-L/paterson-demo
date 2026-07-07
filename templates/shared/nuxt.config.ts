import type { LocaleObject } from '@nuxtjs/i18n';
import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';
import urlJoin from 'proper-url-join';
import { siteProfile } from './config/site-profile';
import { siteLanguages } from './app/utils/languages';
import { APP_OG_FALLBACK_IMAGE_PATH, isAppOgImageEnabled } from './app/utils/og-image';
import { dynamicSitemapSourcePath } from './app/utils/sitemap';

// Shared module input
const nuxtModules = [
  '@nuxt/eslint',
  '@nuxt/fonts',
  '@nuxt/ui',
  '@nuxt/icon',
  '@vueuse/nuxt',
  '@nuxtjs/i18n',
  '@nuxtjs/seo',
  'nuxt-skew-protection',
  'nuxt-llms',
  'nuxt-swiper'
] as const;

const viteOptimizedDependencies = [
  '@alova/adapter-axios',
  '@unhead/schema-org/vue',
  '@vue/devtools-core',
  '@vue/devtools-kit',
  'alova',
  'alova/nuxt',
  'dayjs', // CJS
  'dayjs/plugin/customParseFormat', // CJS
  'isomorphic-dompurify',
  'lodash-es',
  'proper-url-join',
  'qs', // CJS
  'swiper/element'
];

// Environment and URL helpers
function getHost(value: string) {
  if (!value) {
    return '';
  }

  return new URL(value.includes('://') ? value : `https://${value}`).host;
}

function getOssOrigin(bucket = '', endpoint = '') {
  const endpointHost = getHost(endpoint);

  if (!bucket || !endpointHost) {
    return '';
  }

  const host = endpointHost.startsWith(`${bucket}.`) ? endpointHost : `${bucket}.${endpointHost}`;
  return `https://${host}`;
}

function getAssetCdnURL() {
  if (process.env.APP_CDN_URL) {
    return urlJoin(process.env.APP_CDN_URL, { trailingSlash: true });
  }

  const origin = process.env.APP_OSS_CDN_URL || getOssOrigin(process.env.APP_OSS_BUCKET, process.env.APP_OSS_ENDPOINT);
  return origin ? urlJoin(origin, process.env.APP_OSS_ASSETS_NAMESPACE, { trailingSlash: true }) : '';
}

function isTemplatePlaceholder(value: string) {
  return /^\[\[[A-Z0-9_]+\]\]$/.test(value.trim());
}

function normalizeBasePath(value = '') {
  const trimmed = value.trim();

  if (!trimmed || trimmed === '/' || isTemplatePlaceholder(trimmed)) {
    return '/';
  }

  const path = trimmed.replace(/^https?:\/\/[^/]+/i, '').replace(/[?#].*$/, '');
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return `${withLeadingSlash.replace(/\/+$/, '')}/`;
}

function resolveAppTemplateName(value = '') {
  const template = value.trim() || 'default';

  if (!/^[a-z0-9][a-z0-9-]*$/i.test(template)) {
    throw new Error(`Invalid APP_TEMPLATE "${template}". Use a template directory name such as "default".`);
  }

  return template;
}

const appTemplate = resolveAppTemplateName(process.env.APP_TEMPLATE);
const isDevelopment = process.env.NODE_ENV === 'development';
const devServerPort = Number(process.env.APP_PORT) || 8000;
const defaultSiteUrl = isDevelopment ? `http://localhost:${devServerPort}` : siteProfile.urls.production;
const defaultBasePath = '[[BASE_PATH]]';
const basePath = normalizeBasePath(process.env.APP_BASE_PATH || defaultBasePath);
const siteOrigin = (process.env.APP_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteUrl = urlJoin(siteOrigin, basePath, { leadingSlash: false, trailingSlash: false });

// API and CDN wiring
const publicApiBase = process.env.APP_PUBLIC_API_BASE || '';
const publicApiProxyTarget = publicApiBase.replace(/\/$/, '');
const publicApiProxyBase = publicApiProxyTarget.endsWith('/public_api') || publicApiProxyTarget.includes('/public_api/')
  ? publicApiProxyTarget
  : `${publicApiProxyTarget}/public_api`;
const runtimePublicApiBase = isDevelopment && publicApiProxyTarget ? '' : publicApiBase;
const assetCdnURL = getAssetCdnURL();
const takumiCoreNativeTarget = process.env.APP_TAKUMI_CORE_NATIVE_TARGET || '@takumi-rs/core-linux-x64-gnu';
const siteProfileAliasPath = fileURLToPath(new URL('./config/site-profile.ts', import.meta.url));
const sharedTemplateAppAliasPath = fileURLToPath(new URL('./app', import.meta.url));
const appTemplateAppAliasPath = fileURLToPath(new URL(`../${appTemplate}/app`, import.meta.url));
const appTemplateI18nLocaleDir = fileURLToPath(new URL(`../${appTemplate}/i18n/locales`, import.meta.url));
const appTemplateI18nConfigPath = fileURLToPath(new URL(`../${appTemplate}/i18n/i18n.config.ts`, import.meta.url));

const locales: LocaleObject[] = siteLanguages.map(language => ({
  code: language.code,
  language: language.language,
  name: language.localeName,
  file: `${appTemplateI18nLocaleDir}/${language.file}`,
  dir: language.dir
}));

// Site metadata
const ogImageEnabled = isAppOgImageEnabled(process.env.APP_OG_IMAGE_ENABLED);
const ogImageFallbackPath = process.env.APP_OG_IMAGE_FALLBACK_PATH || APP_OG_FALLBACK_IMAGE_PATH;
const isSiteIndexable = process.env.APP_SITE_INDEXABLE
  ? process.env.APP_SITE_INDEXABLE !== 'false'
  : !isDevelopment;
const siteName = siteProfile.identity.shortName;
const siteDescription = siteProfile.seo.description;
const schemaOrgLogo = siteProfile.assets.logo ? urlJoin(siteUrl, siteProfile.assets.logo, { leadingSlash: false }) : undefined;
const copyrightYear = Number(process.env.APP_COPYRIGHT_YEAR) || new Date().getFullYear();
const robotsAllowedAiCrawlers = [...siteProfile.ai.allowedCrawlers];
const llmsSections = siteProfile.ai.llmsSections.map(section => ({
  title: section.title,
  description: section.description,
  links: section.links?.map(link => ({ ...link })) ?? []
}));

// Route and runtime cache policy
const pageCacheRule = { swr: isDevelopment ? false : 600 };
const homepageCacheRule = { swr: isDevelopment ? false : 600 };
const responseCacheBase = process.env.APP_RESPONSE_CACHE_BASE || '../.cache/nitro';
const ogImageCacheBase = process.env.APP_OG_IMAGE_CACHE_BASE || '../.cache/og-image';
const defaultLocalePageRoutePatterns = [
  '/about',
  '/articles/**',
  '/data/**',
  '/philosophy',
  '/palette',
  '/contact',
  '/privacy-policy',
  '/terms-of-use'
];
const pageRouteRules = Object.fromEntries([
  ...defaultLocalePageRoutePatterns.map(path => [path, pageCacheRule]),
  ...siteLanguages
    .filter(language => language.code !== 'zh-CN')
    .map(language => [`/${language.code}/**`, pageCacheRule])
]);
const localizedHomepageRouteRules = Object.fromEntries(
  siteLanguages
    .filter(language => language.code !== 'zh-CN')
    .map(language => [`/${language.code}`, homepageCacheRule])
);
const routeRules = {
  ...pageRouteRules,
  '/': homepageCacheRule,
  ...localizedHomepageRouteRules,
  '/_og/r/**': {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate'
    }
  },
  '/public_api/**': {
    ...(isDevelopment && publicApiProxyTarget ? { proxy: `${publicApiProxyBase}/**` } : {}),
    swr: false
  },
  '/api/sitemap-dynamic-urls': {
    swr: 3600
  },
  '/sitemap.xml': {
    swr: 3600
  },
  '/robots.txt': {
    swr: 3600
  }
};

// Build helpers
function shouldIgnoreTakumiNativeBinding(filePath: string) {
  const normalizedPath = filePath.replaceAll('\\', '/');
  const match = normalizedPath.match(/node_modules\/@takumi-rs\/(core-[^/]+)/);

  return Boolean(match && `@takumi-rs/${match[1]}` !== takumiCoreNativeTarget);
}

export default defineNuxtConfig({
  modules: [...nuxtModules],

  devtools: {
    enabled: isDevelopment
  },

  app: {
    baseURL: basePath,
    cdnURL: isDevelopment ? '' : assetCdnURL
  },

  css: ['#app-template/assets/css/main.css'],

  // @ts-expect-error @nuxtjs/seo registers this Nuxt module option at runtime.
  site: {
    name: siteName,
    url: siteUrl,
    indexable: isSiteIndexable
  },

  ui: {
    colorMode: false,
    fonts: false
  },

  runtimeConfig: {
    app: {
      cdnURL: isDevelopment ? '' : assetCdnURL
    },
    nitro: {
      envPrefix: 'APP_'
    },
    ogImage: {
      secret: process.env.APP_OG_IMAGE_SECRET || ''
    },
    public: {
      apiBase: runtimePublicApiBase,
      appCode: process.env.APP_CODE || '',
      basePath,
      copyrightYear,
      ogImageEnabled,
      ogImageFallbackPath,
      siteUrl,
      trackerApi: process.env.APP_TRACKER_API || ''
    }
  },

  alias: {
    '@site-profile': siteProfileAliasPath,
    '#shared-template': sharedTemplateAppAliasPath,
    '#app-template': appTemplateAppAliasPath
  },

  routeRules,

  devServer: {
    host: '0.0.0.0',
    port: devServerPort
  },

  experimental: {
    payloadExtraction: true
  },

  compatibilityDate: '2025-01-15',
  nitro: {
    storage: {
      'cache:nitro': {
        driver: 'fsLite',
        base: responseCacheBase
      }
    },
    externals: {
      traceOptions: {
        ignore: shouldIgnoreTakumiNativeBinding
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: viteOptimizedDependencies
    },
    server: {
      watch: {
        usePolling: true // 热更新失效
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    providers: {
      google: false,
      googleicons: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      npm: false
    },
    priority: ['local'],
    families: [
      {
        name: 'Noto Sans SC',
        provider: 'local',
        weights: [400, 500, 600, 700],
        subsets: ['latin'],
        global: true
      }
    ],
    defaults: {
      preload: true
    }
  },

  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'zh-CN',
    vueI18n: appTemplateI18nConfigPath,
    locales,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    serverRoutePrefix: '/frontend/_i18n',
    experimental: {
      preload: true
    }
  },

  icon: {
    provider: 'server',
    serverBundle: 'auto',
    clientBundle: {
      icons: ['lucide:sliders-horizontal']
    }
  },

  linkChecker: {
    failOnError: false,
    fetchRemoteUrls: false,
    runOnBuild: !isDevelopment,
    report: {
      html: true,
      markdown: true
    },
    excludeLinks: [
      /^\/api\//,
      /^\/public_api\//,
      /^\/frontend\/_i18n\//,
      /^\/static\//,
      /^\/_/
    ]
  },

  llms: {
    domain: siteUrl,
    title: siteProfile.seo.title,
    description: siteDescription,
    sections: llmsSections
  },

  ogImage: {
    runtimeCacheStorage: {
      driver: 'fsLite',
      base: ogImageCacheBase
    },
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png',
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7
    },
    cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
    security: {
      restrictRuntimeImagesToOrigin: true,
      maxQueryParamSize: 4096
    }
  },

  robots: {
    credits: false,
    sitemap: [`${siteUrl}/sitemap.xml`],
    groups: [
      {
        comment: [siteName],
        userAgent: '*',
        allow: ['/']
      },
      {
        comment: ['AI / answer-engine crawlers explicitly allowed'],
        userAgent: robotsAllowedAiCrawlers,
        allow: ['/']
      }
    ]
  },

  schemaOrg: {
    defaults: true,
    identity: {
      type: 'Organization',
      name: siteProfile.identity.legalName,
      url: siteUrl,
      logo: schemaOrgLogo,
      description: siteDescription,
      sameAs: [
        siteUrl,
        ...siteProfile.urls.legacy,
        ...siteProfile.urls.externalReferences
      ],
      telephone: siteProfile.contact.phone,
      email: siteProfile.contact.email,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          'telephone': siteProfile.contact.phone,
          'email': siteProfile.contact.email,
          'contactType': 'customer support',
          'areaServed': siteProfile.contact.address.countryCode,
          'availableLanguage': siteProfile.contact.availableLanguages
        }
      ],
      address: {
        streetAddress: siteProfile.contact.address.text,
        addressLocality: siteProfile.contact.address.locality,
        addressRegion: siteProfile.contact.address.region,
        addressCountry: siteProfile.contact.address.countryCode
      },
      foundingDate: siteProfile.identity.foundingDate
    }
  },

  sitemap: {
    autoLastmod: true,
    autoI18n: true,
    cacheMaxAgeSeconds: 3600,
    sources: [
      {
        fetch: dynamicSitemapSourcePath,
        context: {
          name: 'public-api-content',
          description: 'Dynamic article, product, gallery, and scene detail URLs from the public CMS API.'
        }
      }
    ]
  },

  skewProtection: {
    updateStrategy: 'polling',
    reloadStrategy: 'prompt',
    multiTab: true,
    cookie: false,
    retentionDays: 14,
    maxNumberOfVersions: 5
  },

  swiper: {
    bundled: false
  }
});
