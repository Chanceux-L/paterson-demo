<script setup lang="ts">
import { siteProfile } from '@site-profile';

type HeroMetric = {
  value: string;
  label: string;
};

type ServiceLine = {
  title: string;
  description: string;
  image: string;
  points: string[];
};

type CatalogFilter = {
  label: string;
  options: string[];
};

type CatalogProduct = {
  title: string;
  category: string;
  image: string;
  tags: string[];
};

type ServiceCatalog = {
  filters: CatalogFilter[];
  items: CatalogProduct[];
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const publicAsset = usePublicAsset();

const phone = siteProfile.contact.phone;
const pageTitle = computed(() => t('dataPage.seo.title'));
const pageDescription = computed(() => t('dataPage.seo.description'));
const pageKeywords = computed(() => t('dataPage.seo.keywords'));
const heroMetrics = computed<HeroMetric[]>(() => resolveTranslatedMessageTree(tm('dataPage.hero.metrics')) as HeroMetric[]);
const activeServiceLine = ref('');
const activeFilters = reactive<Record<string, string>>({});
const serviceLines = computed<ServiceLine[]>(() =>
  (resolveTranslatedMessageTree(tm('dataPage.serviceLines.items')) as ServiceLine[]).map(item => ({
    ...item,
    image: publicAsset(item.image)
  }))
);
const serviceCatalogs = computed<Record<string, ServiceCatalog>>(() => {
  const catalogs = resolveTranslatedMessageTree(tm('dataPage.catalog.serviceCatalogs')) as Record<string, ServiceCatalog>;

  return Object.fromEntries(Object.entries(catalogs).map(([serviceTitle, catalog]) => [
    serviceTitle,
    {
      ...catalog,
      items: catalog.items.map(item => ({
        ...item,
        image: publicAsset(item.image)
      }))
    }
  ]));
});
const currentCatalog = computed<ServiceCatalog>(() =>
  serviceCatalogs.value[activeServiceLine.value] ?? { filters: [], items: [] }
);
const catalogFilters = computed(() => currentCatalog.value.filters);
const catalogProducts = computed(() => currentCatalog.value.items);
const currentServiceLine = computed(() =>
  serviceLines.value.find(item => item.title === activeServiceLine.value) ?? serviceLines.value[0]
);
const filteredCatalogProducts = computed(() => catalogProducts.value.filter((item) => {
  const serviceMatch = !activeServiceLine.value || item.category === activeServiceLine.value;
  const filterMatch = catalogFilters.value.every((filter) => {
    const activeOption = activeFilters[filter.label];
    const defaultOption = filter.options[0];

    return !activeOption || activeOption === defaultOption || item.tags.includes(activeOption);
  });

  return serviceMatch && filterMatch;
}));

watchEffect(() => {
  const firstServiceLine = serviceLines.value[0]?.title;

  if (!activeServiceLine.value && firstServiceLine) {
    activeServiceLine.value = firstServiceLine;
  }

  for (const filter of catalogFilters.value) {
    if (!activeFilters[filter.label]) {
      activeFilters[filter.label] = filter.options[0] ?? '';
    }
  }
});

function selectServiceLine(title: string) {
  activeServiceLine.value = title;

  for (const key of Object.keys(activeFilters)) {
    activeFilters[key] = '';
  }
}

function selectCatalogFilter(filterLabel: string, option: string) {
  activeFilters[filterLabel] = option;
}

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogImage: () => publicAsset('/paterson/product-system-hero.webp'),
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  twitterImage: () => publicAsset('/paterson/product-system-hero.webp'),
  keywords: pageKeywords
});
</script>

<template>
  <main class="product-system-page bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#171512] px-5 pt-20 text-white sm:px-8 md:pt-24 lg:px-14">
      <picture>
        <source media="(max-width: 767px)" :srcset="publicAsset('/paterson/product-mobile-banner.webp')" />
        <img
          class="product-hero-image absolute inset-0 size-full object-cover opacity-80"
          :src="publicAsset('/paterson/product-system-hero.webp')"
          :alt="t('dataPage.hero.imageAlt')"
        />
      </picture>
      <div class="absolute inset-0 bg-linear-to-r from-[#171512]/92 via-[#171512]/58 to-[#171512]/18"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#171512] via-transparent to-[#171512]/18"></div>

      <div class="relative mx-auto grid max-w-7xl gap-10 py-12 md:py-16 lg:min-h-[640px] lg:grid-cols-[0.84fr_0.76fr] lg:items-center">
        <div class="max-w-3xl motion-safe:animate-[product-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('dataPage.hero.eyebrow') }}
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            <span class="block">{{ t('dataPage.hero.titleLine1') }}</span>
            <span class="block text-[#D2B574]">{{ t('dataPage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {{ t('dataPage.hero.subtitle') }}
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLinkLocale
              class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
              to="/contact"
            >
              <UIcon name="i-lucide-message-circle" />
              {{ t('dataPage.hero.primaryCta') }}
            </NuxtLinkLocale>
            <a
              class="inline-flex h-12 items-center justify-center gap-2 border border-white/28 px-6 text-sm font-medium text-white transition hover:border-[#D2B574] hover:text-[#D2B574]"
              :href="`tel:${phone}`"
            >
              <UIcon name="i-lucide-phone" />
              {{ phone }}
            </a>
          </div>
        </div>

        <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <article
            v-for="(metric, index) in heroMetrics"
            :key="metric.label"
            class="product-hero-stat"
            :style="{ '--stagger': `${index * 90}ms` }"
          >
            <div class="text-2xl font-semibold text-[#D2B574] md:text-3xl">
              {{ metric.value }}
            </div>
            <p class="mt-3 text-sm leading-6 text-white/68">
              {{ metric.label }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <nav class="sticky top-16 z-30 border-b border-[#E5DED2] bg-white/96 backdrop-blur" :aria-label="t('dataPage.serviceLines.navAria')">
      <div class="product-filter-scroller mx-auto max-w-7xl overflow-x-auto">
        <div class="flex w-max min-w-full snap-x gap-8 px-5 sm:px-8 lg:w-auto lg:justify-between lg:px-14">
          <button
            v-for="item in serviceLines"
            :key="item.title"
            type="button"
            class="about-section-link snap-start whitespace-nowrap px-1 py-4 text-sm font-medium transition md:text-base"
            :class="activeServiceLine === item.title ? 'is-active text-[#B99A63]' : 'text-[#6F6A61] hover:text-[#B99A63]'"
            :aria-pressed="activeServiceLine === item.title"
            @click="selectServiceLine(item.title)"
          >
            {{ item.title }}
          </button>
        </div>
      </div>
    </nav>

    <section class="border-b border-[#E5DED2] bg-white px-5 py-10 sm:px-8 md:py-14 lg:px-14">
      <div class="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.92fr_1fr] lg:items-center">
        <div class="overflow-hidden bg-[#171512]">
          <img
            class="aspect-[16/9] w-full object-cover"
            :src="currentServiceLine?.image"
            :alt="currentServiceLine?.title"
          />
        </div>
        <div class="lg:pr-10">
          <p class="max-w-3xl text-base leading-8 text-[#6F6A61] md:text-lg md:leading-9">
            {{ currentServiceLine?.description }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white px-5 py-10 sm:px-8 md:py-14 lg:px-14">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
              <span class="h-px w-10 bg-[#C91F2B]"></span>
              {{ t('dataPage.catalog.eyebrow') }}
            </p>
            <h2 class="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              {{ t('dataPage.catalog.title') }}
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-[#6F6A61] md:text-base">
            {{ t('dataPage.catalog.description') }}
          </p>
        </div>

        <div class="mt-8 border border-[#E5DED2] bg-[#FBFAF7]">
          <div
            v-for="filter in catalogFilters"
            :key="filter.label"
            class="grid border-b border-[#E5DED2] last:border-b-0 md:grid-cols-[8rem_1fr]"
          >
            <div class="flex items-center gap-2 bg-white px-4 py-4 text-sm font-semibold text-[#7A5438]">
              <UIcon name="i-lucide-sliders-horizontal" />
              {{ filter.label }}
            </div>
            <div class="product-filter-scroller overflow-x-auto md:overflow-visible">
              <div class="flex w-max min-w-full snap-x gap-5 px-4 py-4 text-sm text-[#6F6A61] md:w-auto md:flex-wrap">
                <button
                  v-for="(option, index) in filter.options"
                  :key="option"
                  type="button"
                  class="snap-start whitespace-nowrap transition"
                  :class="activeFilters[filter.label] === option || (!activeFilters[filter.label] && index === 0) ? 'font-semibold text-[#B99A63]' : 'hover:text-[#7A5438]'"
                  :aria-pressed="activeFilters[filter.label] === option || (!activeFilters[filter.label] && index === 0)"
                  @click="selectCatalogFilter(filter.label, option)"
                >
                  {{ option }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in filteredCatalogProducts" :key="item.title" class="group bg-white">
            <div class="relative overflow-hidden bg-[#171512]">
              <img class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" :src="item.image" :alt="item.title" />
              <div class="absolute left-4 top-4 bg-white/90 px-3 py-1 text-xs font-semibold text-[#7A5438]">
                {{ item.category }}
              </div>
            </div>
            <div class="border-x border-b border-[#E5DED2] px-5 py-4">
              <h3 class="text-xl font-semibold leading-tight">
                {{ item.title }}
              </h3>
              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tag in item.tags" :key="tag" class="bg-[#F4F1EA] px-3 py-1 text-xs font-semibold text-[#7A5438]">
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
        <div v-if="filteredCatalogProducts.length === 0" class="mt-10 border border-[#E5DED2] bg-[#FBFAF7] px-6 py-10 text-center">
          <p class="text-base font-semibold text-[#24211D]">
            {{ t('dataPage.catalog.emptyTitle') }}
          </p>
          <p class="mt-3 text-sm leading-6 text-[#6F6A61]">
            {{ t('dataPage.catalog.emptyDescription') }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-[#171512] px-5 py-14 text-white sm:px-8 md:py-20 lg:px-14 lg:py-24">
      <div class="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-[#D2B574]">
            {{ t('dataPage.cta.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('dataPage.cta.title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-white/70">
            {{ t('dataPage.cta.description') }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <NuxtLinkLocale
            class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
            to="/contact"
          >
            <UIcon name="i-lucide-send" />
            {{ t('dataPage.cta.primary') }}
          </NuxtLinkLocale>
          <a
            class="inline-flex h-12 items-center justify-center gap-2 border border-white/24 px-6 text-sm font-medium text-white transition hover:border-[#D2B574] hover:text-[#D2B574]"
            :href="`tel:${phone}`"
          >
            <UIcon name="i-lucide-phone" />
            {{ t('dataPage.cta.secondary') }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes product-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes product-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-hero-image {
  animation: product-hero-kenburns 12s ease-out both;
  transform-origin: 52% 52%;
}

.product-hero-stat {
  animation: product-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
}

.product-hero-stat {
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
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

.about-section-link:hover::after,
.about-section-link.is-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.product-filter-scroller {
  scrollbar-color: #a98962 transparent;
  scrollbar-width: thin;
}

.product-filter-scroller::-webkit-scrollbar {
  height: 3px;
}

.product-filter-scroller::-webkit-scrollbar-track {
  background: transparent;
}

.product-filter-scroller::-webkit-scrollbar-thumb {
  background: #a98962;
}

@media (min-width: 768px) {
  .product-filter-scroller {
    scrollbar-width: auto;
  }

  .product-filter-scroller::-webkit-scrollbar {
    height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-system-page *,
  .product-system-page *::before,
  .product-system-page *::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
