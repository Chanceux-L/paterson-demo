<script setup lang="ts">
import { getSiteLanguageDirection } from '#shared-template/utils/languages';
import type { Link } from '@unhead/vue';

const { locale, t } = useI18n();
const { organizationJsonLd } = useGeoSchemas();
const publicAsset = usePublicAsset();
const route = useRoute();

const heroPreloadLinks = computed<Link[]>(() => {
  const path = route.path.replace(/^\/(?:en|zh)(?=\/|$)/, '') || '/';
  const imageProps = { rel: 'preload', as: 'image', fetchpriority: 'high' } as const;

  if (path === '/') {
    return [
      { key: 'preload-home-hero', ...imageProps, href: publicAsset('/paterson/hero-living-room.webp'), media: '(min-width: 1024px)' }
    ];
  }

  if (path.startsWith('/about')) {
    return [
      { key: 'preload-about-hero', ...imageProps, href: publicAsset('/paterson/brand-hero-banner.webp') }
    ];
  }

  if (path.startsWith('/data') || path.startsWith('/contact')) {
    return [
      { key: 'preload-product-mobile-hero', ...imageProps, href: publicAsset('/paterson/product-mobile-banner.webp'), media: '(max-width: 767px)' },
      { key: 'preload-product-hero', ...imageProps, href: publicAsset('/paterson/product-system-hero.webp'), media: '(min-width: 768px)' }
    ];
  }

  if (path.startsWith('/philosophy')) {
    return [
      { key: 'preload-philosophy-hero', ...imageProps, href: publicAsset('/paterson/technology-wood-factory-bg.webp') }
    ];
  }

  if (path.startsWith('/articles')) {
    return [
      { key: 'preload-articles-hero', ...imageProps, href: publicAsset('/paterson/news-hero-banner.webp') }
    ];
  }

  return [];
});

// Canonical, hreflang alternates and og:locale handled by @nuxtjs/i18n.
// lang/dir stay managed by the existing htmlAttrs below to avoid duplication.
const localeHead = useLocaleHead({ lang: false, dir: false, seo: true });

useHead({
  title: () => t('site.name'),
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => getSiteLanguageDirection(locale.value)
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#ffffff' }
  ],
  link: () => [
    { key: 'favicon', rel: 'icon', href: publicAsset('/favicon.ico'), type: 'image/x-icon' },
    { key: 'icon-16', rel: 'icon', href: publicAsset('/icon-16x16.png'), type: 'image/png', sizes: '16x16' },
    { key: 'icon-32', rel: 'icon', href: publicAsset('/icon-32x32.png'), type: 'image/png', sizes: '32x32' },
    { key: 'icon-192', rel: 'icon', href: publicAsset('/icon-192x192.png'), type: 'image/png', sizes: '192x192' },
    { key: 'icon-512', rel: 'icon', href: publicAsset('/icon-512x512.png'), type: 'image/png', sizes: '512x512' },
    { key: 'apple-touch-icon', rel: 'apple-touch-icon', href: publicAsset('/apple-touch-icon.png'), type: 'image/png', sizes: '180x180' },
    ...heroPreloadLinks.value
  ],
  script: [
    {
      key: 'organization-json-ld',
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(organizationJsonLd.value)
    }
  ]
});

// Lang/dir + canonical + alternate hreflang links from i18n.
useHead(localeHead);
</script>

<template>
  <UApp>
    <NuxtLayout name="site-layout">
      <NuxtPage :page-key="route => route.fullPath" />
    </NuxtLayout>
    <SiteGeoCitationBooster />
    <ClientOnly>
      <SiteSkewUpdatePrompt />
      <SiteCookieConsent />
    </ClientOnly>
  </UApp>
</template>
