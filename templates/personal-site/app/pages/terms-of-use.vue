<script setup lang="ts">
const { t } = useI18n();

useAppSeoMeta({
  title: computed(() => t('termsPage.seo.title')),
  description: computed(() => t('termsPage.seo.description')),
  ogTitle: computed(() => t('termsPage.seo.title')),
  ogDescription: computed(() => t('termsPage.seo.description')),
  twitterTitle: computed(() => t('termsPage.seo.title')),
  twitterDescription: computed(() => t('termsPage.seo.description')),
  robots: 'noindex'
});
</script>

<template>
  <section class="section">
    <div class="section-container">
      <div class="prose prose-neutral max-w-3xl rounded-card border border-border bg-surface p-6 dark:prose-invert">
        <h1>{{ t('termsPage.title') }}</h1>
        <p>{{ t('termsPage.body') }}</p>
      </div>
    </div>
  </section>
</template>
