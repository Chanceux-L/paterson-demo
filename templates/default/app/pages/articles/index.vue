<script setup lang="ts">
import type { Article } from '#shared-template/types/articles';

type ArticleCard = Pick<Article, 'category' | 'date' | 'id' | 'image' | 'intro' | 'slug' | 'title'>;

type SectionNavItem = {
  label: string;
  href: string;
};

type NewsHighlight = {
  value: string;
  label: string;
  description: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const {
  articlesItemListSchema,
  blogSchema
} = useGeoSchemas();
const publicAsset = usePublicAsset();

const pageTitle = computed(() => t('pages.articles.seo.title'));
const pageDescription = computed(() => t('pages.articles.seo.description'));
const pageKeywords = computed(() => t('pages.articles.seo.keywords'));
const sectionNav = computed<SectionNavItem[]>(() => resolveTranslatedMessageTree(tm('articlesPage.sectionNav')) as SectionNavItem[]);
const highlights = computed<NewsHighlight[]>(() => resolveTranslatedMessageTree(tm('articlesPage.highlights')) as NewsHighlight[]);

const starterFallbackArticles = computed<ArticleCard[]>(() =>
  (resolveTranslatedMessageTree(tm('articlesPage.fallback')) as ArticleCard[]).map(item => ({
    ...item,
    image: publicAsset(item.image || '')
  }))
);
const activityArticles = computed<ArticleCard[]>(() =>
  (resolveTranslatedMessageTree(tm('articlesPage.activities.items')) as ArticleCard[]).map(item => ({
    ...item,
    image: publicAsset(item.image || '')
  }))
);
const visibleArticles = computed(() => starterFallbackArticles.value);
const featuredArticle = computed(() => visibleArticles.value[0]);
const secondaryArticles = computed(() => visibleArticles.value.slice(1, 3));
const listArticles = computed(() => visibleArticles.value.slice(3));
const schemaArticles = computed(() => [...visibleArticles.value, ...activityArticles.value]);

function articlePath(article: ArticleCard) {
  return `/articles/${article.slug || article.id}`;
}

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogImage: () => publicAsset('/paterson/news-hero-banner.webp'),
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  twitterImage: () => publicAsset('/paterson/news-hero-banner.webp'),
  keywords: pageKeywords
});

useSchemaOrg(computed(() => [
  articlesItemListSchema(schemaArticles.value as Article[]),
  blogSchema(schemaArticles.value as Article[])
]));
</script>

<template>
  <main class="news-center-page bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#241E19] px-5 pt-0 text-white sm:px-8 lg:bg-[#171512] lg:px-14">
      <img
        class="news-hero-image absolute inset-0 h-full w-full object-cover opacity-76"
        :src="publicAsset('/paterson/news-hero-banner.webp')"
        :alt="t('articlesPage.hero.imageAlt')"
        decoding="async"
        fetchpriority="high"
        loading="eager"
      />
      <div class="absolute inset-0 bg-linear-to-b from-[#241E19]/18 via-[#3D3128]/42 to-[#241E19] md:bg-linear-to-r md:from-[#171512]/94 md:via-[#171512]/62 md:to-[#171512]/20"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#241E19] via-[#332A22]/70 to-transparent md:via-transparent md:to-[#171512]/22"></div>

      <div class="relative mx-auto grid max-w-7xl gap-10 py-12 md:min-h-[560px] md:py-16 lg:min-h-[600px] lg:grid-cols-[0.86fr_0.74fr] lg:items-center">
        <div class="max-w-3xl motion-safe:animate-[news-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('articlesPage.hero.eyebrow') }}
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            <span class="block">{{ t('articlesPage.hero.titleLine1') }}</span>
            <span class="block text-[#D2B574]">{{ t('articlesPage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {{ t('articlesPage.hero.subtitle') }}
          </p>
        </div>

        <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <article
            v-for="(item, index) in highlights"
            :key="item.label"
            class="news-hero-stat"
            :style="{ '--stagger': `${index * 90}ms` }"
          >
            <div class="text-2xl font-semibold text-[#D2B574] md:text-3xl">
              {{ item.value }}
            </div>
            <p class="mt-3 text-sm font-semibold text-[#F7F4EE]">
              {{ item.label }}
            </p>
            <p class="mt-3 text-sm leading-6 text-white/64">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <nav class="sticky top-16 z-30 border-b border-[#E5DED2] bg-white/96 backdrop-blur" :aria-label="t('articlesPage.sectionNavAria')">
      <div class="mx-auto flex max-w-7xl snap-x justify-center gap-12 overflow-x-auto px-5 sm:px-8 md:gap-20 lg:px-14">
        <a
          v-for="item in sectionNav"
          :key="item.href"
          class="about-section-link snap-start whitespace-nowrap px-1 py-4 text-sm font-medium text-[#6F6A61] transition hover:text-[#B99A63] md:text-base"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <section id="featured" class="scroll-mt-32 px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
              <span class="h-px w-10 bg-[#C91F2B]"></span>
              {{ t('articlesPage.featured.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              {{ t('articlesPage.featured.title') }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('articlesPage.featured.description') }}
          </p>
        </div>

        <div v-if="featuredArticle" class="mt-10 grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
          <NuxtLinkLocale :to="articlePath(featuredArticle)" class="group block overflow-hidden border border-[#E5DED2] bg-[#F7F4EE] lg:h-full">
            <img class="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105 lg:aspect-auto lg:h-full lg:min-h-[30rem]" :src="featuredArticle.image" :alt="featuredArticle.title" />
          </NuxtLinkLocale>
          <div class="grid gap-5">
            <NuxtLinkLocale :to="articlePath(featuredArticle)" class="group border border-[#E5DED2] bg-white p-6 transition hover:border-[#D6C5A5] hover:shadow-lg hover:shadow-[#7A5438]/10 md:p-8">
              <div class="flex flex-wrap items-center gap-3 text-sm text-[#A39C90]">
                <span class="bg-[#F1E7D4] px-3 py-1 font-semibold text-[#7A5438]">{{ featuredArticle.category }}</span>
                <span>{{ featuredArticle.date }}</span>
              </div>
              <h3 class="mt-5 line-clamp-3 text-2xl font-semibold leading-tight transition group-hover:text-[#7A5438] md:text-3xl">
                {{ featuredArticle.title }}
              </h3>
              <p class="mt-5 line-clamp-3 text-base leading-8 text-[#6F6A61]">
                {{ featuredArticle.intro }}
              </p>
              <span class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#7A5438]">
                {{ t('articlesPage.readMore') }}
                <UIcon name="i-lucide-arrow-right" class="size-4" />
              </span>
            </NuxtLinkLocale>

            <NuxtLinkLocale
              v-for="article in secondaryArticles"
              :key="article.slug || article.id"
              :to="articlePath(article)"
              class="group grid gap-4 border border-[#E5DED2] bg-[#FBFAF7] p-4 transition hover:border-[#D6C5A5] hover:bg-white sm:grid-cols-[9rem_1fr]"
            >
              <img class="aspect-[4/3] w-full object-cover" :src="article.image" :alt="article.title" />
              <div>
                <div class="flex flex-wrap items-center gap-2 text-xs text-[#A39C90]">
                  <span class="font-semibold text-[#7A5438]">{{ article.category }}</span>
                  <span>{{ article.date }}</span>
                </div>
                <h3 class="mt-3 text-lg font-semibold leading-snug transition group-hover:text-[#7A5438]">
                  {{ article.title }}
                </h3>
              </div>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <section id="updates" class="scroll-mt-32 border-y border-[#E5DED2] bg-white px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('articlesPage.updates.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {{ t('articlesPage.updates.title') }}
          </h2>
        </div>

        <div class="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLinkLocale
            v-for="article in listArticles"
            :key="article.slug || article.id"
            :to="articlePath(article)"
            class="group flex h-full flex-col bg-white"
          >
            <div class="overflow-hidden bg-[#171512]">
              <img class="aspect-[4/3] w-full object-cover opacity-92 transition duration-700 group-hover:scale-105" :src="article.image" :alt="article.title" />
            </div>
            <div class="flex flex-1 flex-col border-x border-b border-[#E5DED2] px-5 py-5">
              <div class="flex flex-wrap items-center gap-2 text-xs text-[#A39C90]">
                <span class="font-semibold text-[#7A5438]">{{ article.category }}</span>
                <span>{{ article.date }}</span>
              </div>
              <h3 class="mt-4 line-clamp-3 min-h-[5.25rem] text-xl font-semibold leading-snug transition group-hover:text-[#7A5438]">
                {{ article.title }}
              </h3>
              <p class="mt-4 line-clamp-3 text-sm leading-7 text-[#6F6A61]">
                {{ article.intro }}
              </p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section id="activities" class="scroll-mt-32 bg-[#F4F1EA] px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
              <span class="h-px w-10 bg-[#C91F2B]"></span>
              {{ t('articlesPage.activities.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {{ t('articlesPage.activities.title') }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('articlesPage.activities.description') }}
          </p>
        </div>

        <div class="mt-9 grid gap-6 lg:grid-cols-3">
          <NuxtLinkLocale
            v-for="article in activityArticles"
            :key="article.slug || article.id"
            :to="articlePath(article)"
            class="group flex h-full flex-col bg-white"
          >
            <div class="overflow-hidden bg-[#171512]">
              <img class="aspect-[4/3] w-full object-cover opacity-92 transition duration-700 group-hover:scale-105" :src="article.image" :alt="article.title" />
            </div>
            <div class="flex flex-1 flex-col border-x border-b border-[#E5DED2] px-5 py-5">
              <div class="flex flex-wrap items-center gap-2 text-xs text-[#A39C90]">
                <span class="font-semibold text-[#7A5438]">{{ article.category }}</span>
                <span>{{ article.date }}</span>
              </div>
              <h3 class="mt-4 line-clamp-3 min-h-[5.25rem] text-xl font-semibold leading-snug transition group-hover:text-[#7A5438]">
                {{ article.title }}
              </h3>
              <p class="mt-4 line-clamp-3 text-sm leading-7 text-[#6F6A61]">
                {{ article.intro }}
              </p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section id="franchise" class="scroll-mt-32 bg-[#14352F] px-5 py-12 text-white sm:px-8 md:py-20 lg:px-14">
      <div class="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-[#D2B574]">
            {{ t('articlesPage.cta.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
            {{ t('articlesPage.cta.title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-white/68">
            {{ t('articlesPage.cta.description') }}
          </p>
        </div>
        <NuxtLinkLocale class="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#14352F] transition hover:bg-[#E5CC8F]" to="/contact">
          <UIcon name="i-lucide-message-circle" />
          {{ t('articlesPage.cta.button') }}
        </NuxtLinkLocale>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes news-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes news-fade-up {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.news-hero-image {
  animation: news-hero-kenburns 12s ease-out both;
  transform-origin: 50% 52%;
}

@media (max-width: 767px) {
  .news-hero-image {
    bottom: auto;
    height: min(52vh, 26rem);
    object-position: center top;
    animation: none;
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    transform: none;
  }
}

.news-hero-stat {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  animation: news-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
  backdrop-filter: blur(12px);
}

.about-section-link {
  position: relative;
}

.about-section-link::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  content: "";
  background: #b99a63;
  opacity: 0;
  transform: scaleX(0.64);
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.about-section-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

@media (min-width: 768px) {
  .news-hero-stat {
    min-height: 10rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .news-hero-image,
  .news-hero-stat {
    animation: none;
  }
}
</style>
