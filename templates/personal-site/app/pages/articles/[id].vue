<script setup lang="ts">
type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
  body: string[];
};

const route = useRoute();
const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const articles = computed<Article[]>(() => resolveTranslatedMessageTree(tm('articlesPage.items')) as Article[]);
const article = computed(() => articles.value.find(item => item.href.endsWith(`/${route.params.id}`)) || articles.value[0]);

useAppSeoMeta({
  title: computed(() => `${article.value?.title || t('articlesPage.title')} | ${t('site.name')}`),
  ogTitle: computed(() => article.value?.title || t('articlesPage.title')),
  twitterTitle: computed(() => article.value?.title || t('articlesPage.title')),
  description: computed(() => article.value?.description || t('articlesPage.seo.description')),
  ogDescription: computed(() => article.value?.description || t('articlesPage.seo.description')),
  twitterDescription: computed(() => article.value?.description || t('articlesPage.seo.description')),
  ogType: 'article',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <article v-if="article" class="section">
    <div class="section-container">
      <NuxtLinkLocale class="focus-ring inline-flex rounded-button text-sm font-bold text-accent transition hover:text-accent-strong" to="/articles">
        {{ t('common.back') }}
      </NuxtLinkLocale>
      <div class="mt-8 max-w-3xl">
        <p class="font-mono text-sm text-text-muted">
          {{ article.date }}
        </p>
        <h1 class="mt-4 text-4xl font-black leading-tight text-text-primary md:text-6xl">
          {{ article.title }}
        </h1>
        <p class="mt-5 text-lg leading-8 text-text-secondary">
          {{ article.description }}
        </p>
      </div>
      <div class="prose prose-neutral mt-12 max-w-3xl rounded-card border border-border bg-surface p-6 dark:prose-invert">
        <p v-for="paragraph in article.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </article>
</template>
