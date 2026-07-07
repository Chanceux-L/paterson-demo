<script setup lang="ts">
import { getSiteLanguageDirection } from '#shared-template/utils/languages';

const { locale, t } = useI18n();
const { organizationJsonLd } = useGeoSchemas();

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
