<script setup lang="ts">
import { sanitizeHtml } from '#shared-template/utils/sanitize-html';

const { locale, t } = useI18n();
const route = useRoute();
const { loadArticleDetail } = usePublicApiBundles();
const { articleSchema } = useGeoSchemas();

const articleSlug = computed(() => String(route.params.id || ''));
const { data: articleData, pending } = await useAsyncData(
  () => `starter-article-${locale.value}-${articleSlug.value}`,
  () => loadArticleDetail(articleSlug.value),
  { server: !import.meta.dev, watch: [locale, articleSlug] }
);
const article = computed(() => articleData.value?.article || null);
const articleContent = computed(() => articleData.value?.content || '');
const sanitizedArticleContent = computed(() => sanitizeHtml(articleContent.value));
const articleTitle = computed(() => article.value?.title || '');
const articleDescription = computed(() => article.value?.intro || '');
const articleVideo = computed(() => article.value?.video || '');
const articleImagePlaceholder = '[[ARTICLE_IMAGE_PLACEHOLDER]]';

useAppSeoMeta({
  title: computed(() => t('pages.articles.detailSeo.title', { title: articleTitle.value })),
  ogTitle: articleTitle,
  twitterTitle: articleTitle,
  description: computed(() => t('pages.articles.detailSeo.description', { title: articleTitle.value })),
  ogDescription: articleDescription,
  twitterDescription: articleDescription,
  ogType: 'article',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  keywords: computed(() => t('pages.articles.detailSeo.keywords', { title: articleTitle.value })),
  ogImageTitle: articleTitle,
  ogImageDescription: articleDescription
});

useSchemaOrg(computed(() => article.value
  ? [
      articleSchema(article.value, articleContent.value)
    ]
  : []));
</script>

<template>
  <div>
    <section class="section pt-28">
      <div class="section-container">
        <NuxtLinkLocale to="/articles" class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-brand-primary">
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          {{ t('articlesPage.back') }}
        </NuxtLinkLocale>

        <div v-if="pending" class="py-20 text-center text-text-secondary">
          {{ t('common.loading') }}
        </div>
        <article v-else class="mx-auto max-w-reading">
          <StarterBadge class="mb-4">
            {{ article?.category || '' }}
          </StarterBadge>
          <h1 class="font-heading text-4xl font-bold leading-tight text-text-primary md:text-5xl">
            {{ articleTitle }}
          </h1>
          <p class="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            {{ articleDescription }}
          </p>
          <div class="my-10 grid aspect-video place-items-center rounded-card border border-border bg-surface-alt text-xs font-semibold tracking-widest text-text-muted">
            <video
              v-if="articleVideo"
              class="size-full rounded-card object-cover"
              :src="articleVideo"
              controls
            ></video>
            <img
              v-else-if="article?.image"
              class="size-full rounded-card object-cover"
              :src="article.image"
              :alt="article.title"
            />
            <span v-else>{{ articleImagePlaceholder }}</span>
          </div>
          <div class="prose prose-slate max-w-none prose-a:text-brand-primary prose-a:no-underline hover:prose-a:text-brand-primary-hover">
            <!-- eslint-disable-next-line vue/no-v-html -- sanitizedArticleContent is cleaned with sanitizeHtml(). -->
            <div v-html="sanitizedArticleContent"></div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
