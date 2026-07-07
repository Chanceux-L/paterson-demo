<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';

type DataItem = {
  category: string;
  detailPath: string;
  summary: string;
  title: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const DATA_PAGE_SIZE = 9;

const pageTitle = computed(() => t('dataPage.seo.title'));
const pageDescription = computed(() => t('dataPage.seo.description'));
const pageKeywords = computed(() => t('dataPage.seo.keywords'));
const categories = computed<string[]>(() => resolveTranslatedMessageTree(tm('dataPage.categories')) as string[]);
const dataItems = computed<DataItem[]>(() => resolveTranslatedMessageTree(tm('dataPage.items')) as DataItem[]);
const activeCategory = ref(t('dataPage.defaultCategory'));
const searchQuery = ref('');
const currentPage = ref(1);
const filteredItems = computed(() => dataItems.value.filter((item) => {
  const categoryMatch = activeCategory.value === t('dataPage.defaultCategory') || item.category === activeCategory.value;
  const normalizedQuery = searchQuery.value.trim().toLowerCase();
  const searchMatch = !normalizedQuery
    || item.title.toLowerCase().includes(normalizedQuery)
    || item.summary.toLowerCase().includes(normalizedQuery);

  return categoryMatch && searchMatch;
}));
const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.value.length / DATA_PAGE_SIZE)));
const pagedItems = computed(() => {
  const start = (currentPage.value - 1) * DATA_PAGE_SIZE;

  return filteredItems.value.slice(start, start + DATA_PAGE_SIZE);
});

watch([activeCategory, searchQuery], () => {
  currentPage.value = 1;
});

watch(totalPages, (pages) => {
  if (currentPage.value > pages) {
    currentPage.value = pages;
  }
});

function goToPage(page: number) {
  currentPage.value = page;

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
</script>

<template>
  <div>
    <SiteBrandPageHero
      :title="t('dataPage.title')"
      :description="t('dataPage.subtitle')"
      variant="light"
    />

    <section class="section">
      <div class="section-container">
        <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              :class="cn(
                'min-h-10 rounded-button px-4 text-sm font-semibold transition',
                activeCategory === category ? 'bg-brand-primary text-white' : 'bg-surface-alt text-text-secondary hover:bg-surface'
              )"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
          <label class="relative w-full sm:w-72">
            <UIcon name="i-lucide-search" class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
            <input
              v-model="searchQuery"
              class="min-h-11 w-full rounded-button border border-border bg-white pl-9 pr-4 text-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15"
              :placeholder="t('dataPage.searchPlaceholder')"
              type="search"
            />
          </label>
        </div>

        <template v-if="filteredItems.length">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StarterDataCard
              v-for="item in pagedItems"
              :key="item.title"
              :category="item.category"
              :detail-path="item.detailPath"
              :summary="item.summary"
              :title="item.title"
            />
          </div>

          <SitePagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @change="goToPage"
          />
        </template>
        <SiteEmptyState
          v-else
          icon="i-lucide-search-x"
          :title="t('dataPage.empty')"
          :description="t('dataPage.subtitle')"
        />
      </div>
    </section>
  </div>
</template>
