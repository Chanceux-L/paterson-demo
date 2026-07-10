<script setup lang="ts">
import { getSiteLanguageDirection } from '#shared-template/utils/languages';

const { locale, t } = useI18n();
const localeHead = useLocaleHead({ lang: false, dir: false, seo: true });

useHead({
  title: () => t('site.name'),
  titleTemplate: title => title ? t('site.titleTemplate', { title }) : t('site.name'),
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => getSiteLanguageDirection(locale.value)
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#f7f7f3' }
  ]
});

useHead(localeHead);
</script>

<template>
  <UApp>
    <NuxtLayout name="site-layout">
      <NuxtPage :page-key="route => route.fullPath" />
    </NuxtLayout>
    <ClientOnly>
      <SiteSkewUpdatePrompt />
      <SiteCookieConsent />
    </ClientOnly>
  </UApp>
</template>
