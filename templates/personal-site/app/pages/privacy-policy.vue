<script setup lang="ts">
const { t } = useI18n();

useAppSeoMeta({
  title: computed(() => t('privacyPage.seo.title')),
  description: computed(() => t('privacyPage.seo.description')),
  ogTitle: computed(() => t('privacyPage.seo.title')),
  ogDescription: computed(() => t('privacyPage.seo.description')),
  twitterTitle: computed(() => t('privacyPage.seo.title')),
  twitterDescription: computed(() => t('privacyPage.seo.description')),
  robots: 'noindex'
});
</script>

<template>
  <section class="section">
    <div class="section-container">
      <div class="prose prose-neutral max-w-3xl rounded-card border border-border bg-surface p-6 dark:prose-invert">
        <h1>{{ t('privacyPage.title') }}</h1>
        <p>{{ t('privacyPage.body') }}</p>
      </div>
    </div>
  </section>
</template>
