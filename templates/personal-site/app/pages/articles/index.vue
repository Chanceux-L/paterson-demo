<script setup lang="ts">
type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const articles = computed<Article[]>(() => resolveTranslatedMessageTree(tm('articlesPage.items')) as Article[]);

useAppSeoMeta({
  title: computed(() => t('articlesPage.seo.title')),
  ogTitle: computed(() => t('articlesPage.seo.title')),
  twitterTitle: computed(() => t('articlesPage.seo.title')),
  description: computed(() => t('articlesPage.seo.description')),
  ogDescription: computed(() => t('articlesPage.seo.description')),
  twitterDescription: computed(() => t('articlesPage.seo.description')),
  ogType: 'website',
  twitterCard: 'summary_large_image',
  keywords: computed(() => t('articlesPage.seo.keywords'))
});
</script>

<template>
  <section class="section">
    <div class="section-container">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h1 class="text-4xl font-black leading-tight text-text-primary md:text-6xl">
            {{ t('articlesPage.title') }}
          </h1>
          <p class="mt-5 text-lg leading-8 text-text-secondary">
            {{ t('articlesPage.subtitle') }}
          </p>
        </div>
        <div class="grid gap-4">
          <NuxtLinkLocale
            v-for="article in articles"
            :key="article.href"
            class="focus-ring group grid gap-4 rounded-card border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md sm:grid-cols-[9rem_1fr]"
            :to="article.href"
          >
            <p class="font-mono text-xs font-bold text-accent">
              {{ article.date }}
            </p>
            <div>
              <h2 class="text-2xl font-black text-text-primary group-hover:text-accent-strong">
                {{ article.title }}
              </h2>
              <p class="mt-3 text-sm leading-7 text-text-secondary">
                {{ article.description }}
              </p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
