<script setup lang="ts">
import type { Article } from '#shared-template/types/articles';
import { sanitizeHtml } from '#shared-template/utils/sanitize-html';

type LocalArticle = Article & {
  content?: string[];
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const route = useRoute();
const { articleSchema } = useGeoSchemas();
const publicAsset = usePublicAsset();

const articleSlug = computed(() => String(route.params.id || ''));
function normalizeLocalArticle(item: LocalArticle, index: number): LocalArticle {
  return {
    ...item,
    id: item.id || index + 1,
    categoryId: item.categoryId || index + 1,
    browse: item.browse || 0,
    image: publicAsset(item.image || '')
  };
}

const fallbackArticles = computed<LocalArticle[]>(() =>
  (resolveTranslatedMessageTree(tm('articlesPage.fallback')) as LocalArticle[]).map(normalizeLocalArticle)
);
const activityArticles = computed<LocalArticle[]>(() =>
  (resolveTranslatedMessageTree(tm('articlesPage.activities.items')) as LocalArticle[]).map(normalizeLocalArticle)
);
const localArticles = computed(() =>
  [...fallbackArticles.value, ...activityArticles.value]
);
const fallbackArticle = computed(() => localArticles.value.find(item => item.slug === articleSlug.value || String(item.id) === articleSlug.value) || null);
const article = computed<LocalArticle | null>(() => fallbackArticle.value);
const articleContent = computed(() => '');
const localArticleContent = computed(() => article.value?.content || []);
const sanitizedArticleContent = computed(() => sanitizeHtml(articleContent.value));
const articleTitle = computed(() => article.value?.title || '');
const articleDescription = computed(() => article.value?.intro || '');
const articleVideo = computed(() => article.value?.video || '');
const articleImagePlaceholder = computed(() => t('articlesPage.imagePlaceholder'));

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
  ogImage: computed(() => article.value?.image || publicAsset('/paterson/news-hero-banner.webp')),
  twitterImage: computed(() => article.value?.image || publicAsset('/paterson/news-hero-banner.webp')),
  ogImageTitle: articleTitle,
  ogImageDescription: articleDescription
});

useSchemaOrg(computed(() => article.value
  ? [
      articleSchema(article.value, articleContent.value || localArticleContent.value.join('\n'))
    ]
  : []));
</script>

<template>
  <main class="bg-[#F4F1EA] text-[#24211D]">
    <section class="px-5 py-10 sm:px-8 md:py-14 lg:px-14">
      <div class="mx-auto max-w-reading">
        <NuxtLinkLocale to="/articles" class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6F6A61] transition hover:text-[#7A5438]">
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          {{ t('articlesPage.back') }}
        </NuxtLinkLocale>

        <article v-if="article" class="pb-14 md:pb-20">
          <div class="flex flex-wrap items-center gap-3 text-sm text-[#A39C90]">
            <span class="bg-[#F1E7D4] px-3 py-1 font-semibold text-[#7A5438]">
              {{ article.category }}
            </span>
            <span>{{ article.date }}</span>
          </div>
          <h1 class="mt-5 text-3xl font-semibold leading-tight text-[#24211D] md:text-5xl">
            {{ articleTitle }}
          </h1>
          <p class="mt-5 text-base leading-8 text-[#6F6A61] md:text-lg">
            {{ articleDescription }}
          </p>
          <div class="my-9 grid aspect-video place-items-center overflow-hidden bg-[#171512] text-xs font-semibold tracking-widest text-[#A39C90] md:my-12">
            <video
              v-if="articleVideo"
              class="size-full object-cover"
              :src="articleVideo"
              controls
            ></video>
            <img
              v-else-if="article.image"
              class="size-full object-cover"
              :src="article.image"
              :alt="article.title"
            />
            <span v-else>{{ articleImagePlaceholder }}</span>
          </div>
          <div v-if="sanitizedArticleContent" class="prose prose-stone max-w-none prose-a:text-[#7A5438] prose-a:no-underline hover:prose-a:text-[#C91F2B]">
            <!-- eslint-disable-next-line vue/no-v-html -- sanitizedArticleContent is cleaned with sanitizeHtml(). -->
            <div v-html="sanitizedArticleContent"></div>
          </div>
          <div v-else class="space-y-5 text-base leading-8 text-[#4B463F]">
            <p v-for="paragraph in localArticleContent" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
