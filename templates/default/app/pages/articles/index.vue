<script setup lang="ts">
import type { Article } from '#shared-template/types/articles';
import { ARTICLE_PAGE_SIZE } from '#shared-template/types/articles';

type ArticleCard = Pick<Article, 'category' | 'date' | 'id' | 'image' | 'intro' | 'slug' | 'title'>;

const { locale, t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const { loadArticleBundle } = usePublicApiBundles();
const {
  articlesItemListSchema,
  blogSchema
} = useGeoSchemas();

const pageTitle = computed(() => t('pages.articles.seo.title'));
const pageDescription = computed(() => t('pages.articles.seo.description'));
const pageKeywords = computed(() => t('pages.articles.seo.keywords'));
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const currentPage = computed(() => parsePage(route.query.page));

const { data: articleBundleData, pending } = await useAsyncData(
  () => `starter-articles-${locale.value}-${currentPage.value}`,
  () => loadArticleBundle({ page: currentPage.value, perPage: ARTICLE_PAGE_SIZE }),
  { server: !import.meta.dev, watch: [locale, currentPage] }
);
const articles = computed<ArticleCard[]>(() => articleBundleData.value?.items || []);
const starterFallbackArticles = computed<ArticleCard[]>(() => resolveTranslatedMessageTree(tm('articlesPage.fallback')) as ArticleCard[]);
const visibleArticles = computed(() => articles.value.length ? articles.value : starterFallbackArticles.value);
const totalPages = computed(() => Math.max(1, articleBundleData.value?.totalPages || 1));
const articleImagePlaceholder = computed(() => t('articlesPage.imagePlaceholder'));

function parsePage(value: unknown): number {
  const page = Number(value);

  return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
}

function goToPage(page: number) {
  router.replace({
    path: localePath('/articles'),
    query: page > 1 ? { page } : {}
  });

  if (import.meta.client) {
    window.scrollTo({ top: 240, behavior: 'smooth' });
  }
}

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  keywords: pageKeywords
});

useSchemaOrg(computed(() => [
  articlesItemListSchema(visibleArticles.value as Article[]),
  blogSchema(visibleArticles.value as Article[])
]));
</script>

<template>
  <div>
    <SiteBrandPageHero
      :title="t('articlesPage.title')"
      :description="t('articlesPage.subtitle')"
      variant="light"
    />

    <section class="section">
      <div class="section-container">
        <div v-if="pending" class="py-12 text-center text-text-secondary">
          {{ t('common.loading') }}
        </div>
        <template v-else>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NuxtLinkLocale
              v-for="article in visibleArticles"
              :key="article.slug || article.id"
              :to="`/articles/${article.slug || article.id}`"
              class="group block overflow-hidden rounded-card border border-border bg-background transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary/35 hover:shadow-lg"
            >
              <div class="grid aspect-video place-items-center bg-surface-alt text-xs font-semibold tracking-widest text-text-muted">
                <img
                  v-if="article.image"
                  class="size-full object-cover"
                  :src="article.image"
                  :alt="article.title"
                />
                <span v-else>{{ articleImagePlaceholder }}</span>
              </div>
              <div class="p-5">
                <div class="mb-3 flex flex-wrap items-center gap-2 text-xs text-text-muted">
                  <StarterBadge>{{ article.category }}</StarterBadge>
                  <span>{{ article.date }}</span>
                </div>
                <h2 class="text-lg font-semibold leading-snug text-text-primary transition group-hover:text-brand-primary">
                  {{ article.title }}
                </h2>
                <p class="mt-3 line-clamp-2 text-sm leading-7 text-text-secondary">
                  {{ article.intro }}
                </p>
                <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                  {{ t('articlesPage.readMore') }}
                  <UIcon name="i-lucide-arrow-right" class="size-4" />
                </span>
              </div>
            </NuxtLinkLocale>
          </div>

          <SitePagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @change="goToPage"
          />
        </template>
      </div>
    </section>
  </div>
</template>
