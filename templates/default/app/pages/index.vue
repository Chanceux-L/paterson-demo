<script setup lang="ts">
import { siteProfile } from '@site-profile';
import type { SwiperContainer } from 'swiper/element';

type HeroMetric = {
  value: string;
  label: string;
};

type IconCard = {
  icon: string;
  title: string;
  description: string;
};

type TechnologyMetric = {
  value: string;
  label: string;
};

type ProductSystem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type NewsItem = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const localePath = useLocalePath();
const { faqPageSchema } = useGeoSchemas();

const phone = siteProfile.contact.phone;
const pageTitle = computed(() => t('pages.home.seo.title'));
const pageDescription = computed(() => t('pages.home.seo.description'));
const pageKeywords = computed(() => t('pages.home.seo.keywords'));
const heroMetrics = computed<HeroMetric[]>(() => resolveTranslatedMessageTree(tm('homePage.hero.metrics')) as HeroMetric[]);
const trustStats = computed<HeroMetric[]>(() => resolveTranslatedMessageTree(tm('homePage.trust.stats')) as HeroMetric[]);
const technologyMetrics = computed<TechnologyMetric[]>(() => resolveTranslatedMessageTree(tm('homePage.technology.metrics')) as TechnologyMetric[]);
const technologyNodes = computed<IconCard[]>(() => resolveTranslatedMessageTree(tm('homePage.technology.nodes')) as IconCard[]);
const productSystems = computed<ProductSystem[]>(() => resolveTranslatedMessageTree(tm('homePage.products.items')) as ProductSystem[]);
const advantages = computed<IconCard[]>(() => resolveTranslatedMessageTree(tm('homePage.advantages.items')) as IconCard[]);
const processSteps = computed<ProcessStep[]>(() => resolveTranslatedMessageTree(tm('homePage.process.steps')) as ProcessStep[]);
const newsItems = computed<NewsItem[]>(() => resolveTranslatedMessageTree(tm('homePage.news.items')) as NewsItem[]);
const productSwiperRef = ref<SwiperContainer | null>(null);
const productSwiper = useSwiper(productSwiperRef, {
  autoplay: {
    delay: 4200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 24
    }
  },
  centeredSlides: false,
  rewind: true,
  slidesPerView: 1.08,
  spaceBetween: 16,
  speed: 780
});
const showPreviousProduct = () => productSwiper.prev();
const showNextProduct = () => productSwiper.next();

onMounted(async () => {
  const { register } = await import('swiper/element/bundle');

  register();
});

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogImage: '/paterson/hero-living-room.webp',
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  twitterImage: '/paterson/hero-living-room.webp',
  keywords: pageKeywords
});

useSchemaOrg(computed(() => [
  faqPageSchema()
]));
</script>

<template>
  <main class="bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#F4F1EA] px-5 pt-24 text-[#24211D] sm:px-8 lg:px-14">
      <div class="hero-image-panel absolute inset-y-0 right-0 hidden w-[46%] bg-[#F4F1EA] lg:block">
        <img
          class="hero-side-image paterson-hero-image size-full object-cover object-[60%_50%]"
          src="/paterson/oxygen-space-bg.webp"
          :alt="t('homePage.hero.imageAlt')"
        />
      </div>
      <div class="relative mx-auto grid max-w-7xl gap-12 py-16 lg:min-h-[760px] lg:grid-cols-[0.9fr_0.82fr] lg:items-center lg:py-20">
        <div class="relative z-10 max-w-xl motion-safe:animate-[paterson-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-medium text-[#7A5438]">
            <span class="h-px w-10 bg-[#B99A63]"></span>
            {{ t('homePage.hero.badge') }}
          </p>
          <h1 class="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-[#24211D] md:text-6xl xl:text-7xl">
            <span class="block">{{ t('homePage.hero.titleLine1') }}</span>
            <span class="block">{{ t('homePage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-7 max-w-xl text-base leading-8 text-[#6F6A61] md:text-lg">
            {{ t('homePage.hero.subtitle') }}
          </p>
          <div class="mt-6 flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#7A5438]">
            <span>{{ t('homePage.hero.keywords.waterPaint') }}</span>
            <span>{{ t('homePage.hero.keywords.oxygen') }}</span>
            <span>{{ t('homePage.hero.keywords.material') }}</span>
            <span>{{ t('homePage.hero.keywords.marketing') }}</span>
          </div>
          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <NuxtLinkLocale
              class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
              to="/contact"
            >
              <UIcon name="i-lucide-message-circle" />
              {{ t('homePage.hero.ctaLabel') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="inline-flex h-12 items-center justify-center gap-2 border border-[#CFC2B0] px-6 text-sm font-medium text-[#24211D] transition hover:border-[#B99A63] hover:text-[#7A5438]"
              to="/about"
            >
              <UIcon name="i-lucide-building-2" />
              {{ t('homePage.hero.cta2Label') }}
            </NuxtLinkLocale>
          </div>

          <div class="motion-safe:animate-[paterson-fade-up_640ms_cubic-bezier(0.22,1,0.36,1)_160ms_both] mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div
              v-for="(metric, index) in heroMetrics"
              :key="metric.label"
              class="home-soft-stat"
              :style="{ '--stagger': `${index * 80}ms` }"
            >
              <div class="text-2xl font-semibold text-[#D2B574] md:text-3xl">
                {{ metric.value }}
              </div>
              <p class="mt-2 text-xs leading-5 text-[#6F6A61]">
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="hero-showcase relative min-h-[360px] overflow-hidden bg-[#171512] lg:hidden">
          <img
            class="paterson-hero-image absolute inset-0 size-full object-cover object-[72%_50%] opacity-86"
            src="/paterson/oxygen-space-bg.webp"
            :alt="t('homePage.hero.imageAlt')"
          />
          <div class="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(23,21,18,0.22)_100%)]"></div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-[#14352F] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28">
      <img
        class="wellness-airflow-svg"
        src="/paterson/wellness-airflow.svg"
        alt=""
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div class="relative z-10">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('homePage.forest.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
            {{ t('homePage.forest.title') }}
          </h2>
          <p class="mt-6 text-base leading-8 text-white/70">
            {{ t('homePage.forest.description') }}
          </p>
          <div class="mt-9 max-w-md bg-white/6 px-5 py-4 backdrop-blur">
            <p class="text-sm leading-7 text-white/62">
              {{ t('homePage.forest.note') }}
            </p>
          </div>
        </div>
        <div class="relative overflow-hidden bg-[#0D241F]/76 shadow-2xl shadow-black/20 backdrop-blur">
          <div class="grid lg:grid-cols-3">
            <article class="oxygen-proof oxygen-proof-first motion-safe:animate-[paterson-fade-up_620ms_cubic-bezier(0.22,1,0.36,1)_both]">
              <span class="text-xs font-semibold text-[#D2B574]">01</span>
              <UIcon class="mt-8 size-6 text-[#D2B574]" name="i-lucide-bed-double" />
              <h3 class="mt-5 text-xl font-semibold leading-tight text-[#F7F4EE]">
                {{ t('homePage.forest.proofs.bedroom') }}
              </h3>
              <p class="mt-5 text-sm leading-7 text-white/62">
                {{ t('homePage.forest.proofDescriptions.bedroom') }}
              </p>
            </article>
            <article class="oxygen-proof motion-safe:animate-[paterson-fade-up_620ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]">
              <span class="text-xs font-semibold text-[#D2B574]">02</span>
              <UIcon class="mt-8 size-6 text-[#D2B574]" name="i-lucide-activity" />
              <h3 class="mt-5 text-xl font-semibold leading-tight text-[#F7F4EE]">
                {{ t('homePage.forest.proofs.center') }}
              </h3>
              <p class="mt-5 text-sm leading-7 text-white/62">
                {{ t('homePage.forest.proofDescriptions.center') }}
              </p>
            </article>
            <article class="oxygen-proof motion-safe:animate-[paterson-fade-up_620ms_cubic-bezier(0.22,1,0.36,1)_200ms_both]">
              <span class="text-xs font-semibold text-[#D2B574]">03</span>
              <UIcon class="mt-8 size-6 text-[#D2B574]" name="i-lucide-shield-check" />
              <h3 class="mt-5 text-xl font-semibold leading-tight text-[#F7F4EE]">
                {{ t('homePage.forest.proofs.standard') }}
              </h3>
              <p class="mt-5 text-sm leading-7 text-white/62">
                {{ t('homePage.forest.proofDescriptions.standard') }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="brand" class="bg-[#F4F1EA] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
              <span class="h-px w-10 bg-[#C91F2B]"></span>
              {{ t('homePage.trust.eyebrow') }}
            </p>
            <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#24211D] md:text-4xl">
              {{ t('homePage.trust.title') }}
            </h2>
          </div>
          <p class="max-w-3xl text-base leading-8 text-[#6F6A61]">
            {{ t('homePage.trust.description') }}
          </p>
        </div>

        <div class="mt-10 border-y border-[#E5DED2] bg-white">
          <div class="grid divide-y divide-[#E5DED2] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            <article
              v-for="(stat, index) in trustStats"
              :key="stat.label"
              class="group p-5 transition duration-300 hover:bg-[#FBF8F2] sm:p-6"
              :style="{ '--stagger': `${index * 90}ms` }"
            >
              <span class="text-xs font-semibold text-[#B99A63]">
                0{{ index + 1 }}
              </span>
              <div class="mt-5 text-2xl font-semibold leading-none text-[#7A5438] md:text-3xl">
                {{ stat.value }}
              </div>
              <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
                {{ stat.label }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="technology" class="relative overflow-hidden bg-[#171512] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28">
      <img
        class="absolute inset-0 size-full object-cover opacity-62"
        src="/paterson/technology-wood-factory-bg.webp"
        alt=""
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-[#171512]/36"></div>
      <div class="absolute inset-0 bg-linear-to-r from-[#171512]/86 via-[#171512]/54 to-[#171512]/68"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#B99A63]/50 to-transparent"></div>
      <div class="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <div class="flex flex-col justify-between">
          <div>
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#B99A63]">
              <span class="h-px w-10 bg-[#B99A63]"></span>
              {{ t('homePage.technology.eyebrow') }}
            </p>
            <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
              {{ t('homePage.technology.title') }}
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 text-white/68">
              {{ t('homePage.technology.description') }}
            </p>
          </div>

          <div class="mt-10 grid gap-3 border-y border-white/12 py-6 text-sm text-white/72 sm:grid-cols-3 lg:mt-14">
            <div v-for="metric in technologyMetrics" :key="metric.label">
              <div class="text-2xl font-semibold text-[#D2B574]">
                {{ metric.value }}
              </div>
              <p class="mt-2 leading-6">
                {{ metric.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute left-6 right-6 top-1/2 hidden h-px bg-[#B99A63]/28 md:block"></div>
          <div class="absolute bottom-8 top-8 left-1/2 hidden w-px bg-[#B99A63]/28 md:block"></div>
          <div class="grid gap-4 md:grid-cols-2">
            <article
              v-for="(node, index) in technologyNodes"
              :key="node.title"
              class="group relative min-h-56 border border-white/12 bg-[#211E1A]/78 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#B99A63]/45 hover:bg-[#27231F]/88"
              :style="{ '--stagger': `${index * 90}ms` }"
            >
              <div class="flex items-start justify-between gap-4">
                <span class="grid size-12 place-items-center bg-[#2F2A23] text-[#B99A63] transition duration-300 group-hover:bg-[#B99A63] group-hover:text-[#171512]">
                  <UIcon class="size-6" :name="node.icon" />
                </span>
                <span class="text-sm font-semibold text-white/24">0{{ index + 1 }}</span>
              </div>
              <h3 class="mt-8 text-xl font-semibold leading-snug text-[#F7F4EE]">
                {{ node.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-white/64">
                {{ node.description }}
              </p>
            </article>
          </div>

          <div class="mt-5 flex flex-col gap-3 bg-[#F7F4EE] px-5 py-4 text-[#24211D] sm:flex-row sm:items-center sm:justify-between">
            <span class="text-sm font-semibold">{{ t('homePage.technology.eyebrow') }}</span>
            <span class="text-sm leading-6 text-[#6F6A61]">{{ t('homePage.technology.summary') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold text-[#C91F2B]">
              {{ t('homePage.products.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {{ t('homePage.products.title') }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('homePage.products.description') }}
          </p>
        </div>

        <div class="mt-10 flex items-center justify-end gap-2">
          <button
            class="grid size-11 place-items-center bg-white text-[#7A5438] shadow-sm shadow-[#7A5438]/8 transition hover:-translate-y-0.5 hover:bg-[#7A5438] hover:text-white"
            type="button"
            :aria-label="t('common.previousImage')"
            @click="showPreviousProduct"
          >
            <UIcon name="i-lucide-arrow-left" />
          </button>
          <button
            class="grid size-11 place-items-center bg-[#7A5438] text-white shadow-sm shadow-[#7A5438]/12 transition hover:-translate-y-0.5 hover:bg-[#5F3F2A]"
            type="button"
            :aria-label="t('common.nextImage')"
            @click="showNextProduct"
          >
            <UIcon name="i-lucide-arrow-right" />
          </button>
        </div>

        <div class="product-swiper-wrap mt-5">
          <swiper-container
            ref="productSwiperRef"
            class="product-swiper"
            :init="false"
          >
            <swiper-slide
              v-for="(item, index) in productSystems"
              :key="item.title"
            >
              <article
                class="group home-media-card relative min-h-[380px] overflow-hidden bg-[#171512] text-white shadow-xl shadow-[#7A5438]/10 md:min-h-[440px]"
                :style="{ '--stagger': `${index * 90}ms` }"
              >
                <img class="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" :src="item.image" :alt="item.title" />
                <div class="absolute inset-0 bg-linear-to-t from-[#171512]/90 via-[#171512]/24 to-transparent"></div>
                <div class="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in item.tags" :key="tag" class="bg-white/12 px-3 py-1 text-xs text-white/82 backdrop-blur">{{ tag }}</span>
                  </div>
                  <h3 class="mt-4 text-2xl font-semibold">
                    {{ item.title }}
                  </h3>
                  <p class="mt-3 max-w-lg text-sm leading-7 text-white/74">
                    {{ item.description }}
                  </p>
                </div>
              </article>
            </swiper-slide>
          </swiper-container>
          <div class="product-swiper-progress mt-6"></div>
        </div>
      </div>
    </section>

    <section id="join" class="bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold text-[#C91F2B]">
            {{ t('homePage.advantages.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {{ t('homePage.advantages.title') }}
          </h2>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(item, index) in advantages"
            :key="item.title"
            class="advantage-card group"
            :style="{ '--stagger': `${index * 80}ms` }"
          >
            <div class="advantage-card__bar" aria-hidden="true"></div>
            <div class="relative z-10 flex min-h-60 flex-col justify-between p-7">
              <div>
                <div class="flex items-start justify-between gap-5">
                  <span class="advantage-card__icon">
                    <UIcon class="size-5" :name="item.icon" />
                  </span>
                  <span class="font-heading text-sm font-semibold text-[#B99A63]/55">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>
                <h3 class="mt-8 text-xl font-semibold leading-snug">
                  {{ item.title }}
                </h3>
                <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
                  {{ item.description }}
                </p>
              </div>
              <div class="mt-8 flex items-center gap-3 text-xs font-semibold text-[#7A5438]">
                <span class="h-px w-10 bg-[#B99A63] transition-all duration-300 group-hover:w-16"></span>
                <span>{{ t('homePage.advantages.eyebrow') }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#F4F1EA] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div class="lg:sticky lg:top-28">
            <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
              <span class="h-px w-10 bg-[#C91F2B]"></span>
              {{ t('homePage.process.eyebrow') }}
            </p>
            <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              {{ t('homePage.process.title') }}
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 text-[#6F6A61]">
              {{ t('homePage.process.description') }}
            </p>
          </div>

          <div class="relative">
            <div class="absolute bottom-0 left-5 top-0 w-px bg-[#D8CDBB] md:left-1/2"></div>
            <div class="grid gap-4">
              <article
                v-for="(step, index) in processSteps"
                :key="step.title"
                class="relative grid gap-4 pl-20 md:grid-cols-2 md:gap-16 md:pl-0"
                :style="{ '--stagger': `${index * 80}ms` }"
              >
                <div
                  :class="[
                    'absolute left-0 top-5 z-20 grid size-10 place-items-center border text-xs font-semibold shadow-sm shadow-[#7A5438]/8 md:left-1/2 md:-translate-x-1/2',
                    index % 2 === 0
                      ? 'border-[#B99A63] bg-[#7A5438] text-white'
                      : 'border-[#B99A63] bg-[#F4F1EA] text-[#7A5438]'
                  ]"
                  :aria-label="`${t('homePage.process.stepLabel')} ${String(index + 1).padStart(2, '0')}`"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                <span
                  :class="[
                    'process-node-connector',
                    index % 2 === 0 ? 'process-node-connector-left' : 'process-node-connector-right'
                  ]"
                  aria-hidden="true"
                ></span>
                <div :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
                  <div
                    :class="[
                      'relative z-10 min-h-32 overflow-hidden border px-6 pb-6 pt-5 transition duration-300 hover:-translate-y-1 hover:border-[#D2B574] hover:bg-white hover:shadow-lg hover:shadow-[#7A5438]/10',
                      index % 2 === 0
                        ? 'border-[#E5DED2] bg-white shadow-md shadow-[#7A5438]/8'
                        : 'border-[#D8CDBB] bg-[#FFFDF8] shadow-sm shadow-[#7A5438]/6'
                    ]"
                  >
                    <span
                      :class="[
                        'pointer-events-none absolute top-0 h-1',
                        index % 2 === 0
                          ? 'inset-x-0 bg-linear-to-l from-[#B99A63] via-[#D8C39C] to-transparent'
                          : 'inset-x-0 bg-linear-to-r from-[#B99A63] via-[#D8C39C] to-transparent'
                      ]"
                      aria-hidden="true"
                    ></span>
                    <span class="relative text-xs font-semibold text-[#B99A63]">
                      {{ t('homePage.process.stepLabel') }} {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <h3 class="relative mt-2.5 text-xl font-semibold text-[#24211D]">
                      {{ step.title }}
                    </h3>
                    <p class="relative mt-2.5 text-sm leading-7 text-[#6F6A61]">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
                <div :class="index % 2 === 0 ? 'hidden md:order-2 md:block' : 'hidden md:order-1 md:block'"></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="news" class="border-y border-[#E5DED2] bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm font-semibold text-[#C91F2B]">
              {{ t('homePage.news.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {{ t('homePage.news.title') }}
            </h2>
          </div>
          <NuxtLinkLocale class="inline-flex items-center gap-2 text-sm font-medium text-[#7A5438] hover:text-[#C91F2B]" to="/articles">
            {{ t('homePage.news.more') }}
            <UIcon name="i-lucide-arrow-right" />
          </NuxtLinkLocale>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article v-for="item in newsItems" :key="item.title" class="group home-soft-card border border-[#E8E0D3] bg-[#FBFAF7] shadow-sm shadow-[#7A5438]/6 transition duration-300 hover:-translate-y-1 hover:border-[#D6C5A5] hover:bg-white hover:shadow-lg hover:shadow-[#7A5438]/10">
            <img class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" :src="item.image" :alt="item.title" />
            <div class="p-6">
              <span class="text-xs font-semibold text-[#B99A63]">{{ item.tag }}</span>
              <h3 class="mt-3 line-clamp-2 text-base font-semibold leading-7">
                {{ item.title }}
              </h3>
              <p class="mt-3 line-clamp-3 text-sm leading-6 text-[#6F6A61]">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="consult" class="bg-[#171512] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p class="text-sm font-semibold text-[#B99A63]">
            {{ t('homePage.consult.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {{ t('homePage.consult.title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-white/70">
            {{ t('homePage.consult.description') }}
          </p>
          <div class="mt-8 grid gap-4 text-sm text-white/78">
            <a class="inline-flex items-center gap-3 hover:text-[#B99A63]" :href="`tel:${phone}`">
              <UIcon name="i-lucide-phone" />
              {{ t('nav.hotline') }} {{ phone }}
            </a>
            <span class="inline-flex items-center gap-3">
              <UIcon name="i-lucide-shield-check" />
              {{ t('homePage.consult.privacy') }}
            </span>
            <span class="inline-flex items-center gap-3">
              <UIcon name="i-lucide-clock-3" />
              {{ t('homePage.consult.hours') }}
            </span>
          </div>
        </div>

        <form class="grid gap-4 bg-[#F7F4EE] p-5 text-[#24211D] sm:p-8" @submit.prevent>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium">
              {{ t('homePage.consult.form.name') }}
              <input class="h-12 border border-[#E5DED2] px-4 text-sm outline-none focus:border-[#B99A63]" :placeholder="t('homePage.consult.form.namePlaceholder')" />
            </label>
            <label class="grid gap-2 text-sm font-medium">
              {{ t('homePage.consult.form.phone') }}
              <input class="h-12 border border-[#E5DED2] px-4 text-sm outline-none focus:border-[#B99A63]" :placeholder="t('homePage.consult.form.phonePlaceholder')" />
            </label>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="grid gap-2 text-sm font-medium">
              {{ t('homePage.consult.form.city') }}
              <input class="h-12 border border-[#E5DED2] px-4 text-sm outline-none focus:border-[#B99A63]" :placeholder="t('homePage.consult.form.cityPlaceholder')" />
            </label>
            <label class="grid gap-2 text-sm font-medium">
              {{ t('homePage.consult.form.budget') }}
              <select class="h-12 border border-[#E5DED2] px-4 text-sm outline-none focus:border-[#B99A63]">
                <option>{{ t('homePage.consult.form.budgetPlaceholder') }}</option>
                <option>{{ t('homePage.consult.form.budgetOne') }}</option>
                <option>{{ t('homePage.consult.form.budgetTwo') }}</option>
                <option>{{ t('homePage.consult.form.budgetThree') }}</option>
              </select>
            </label>
          </div>
          <label class="grid gap-2 text-sm font-medium">
            {{ t('homePage.consult.form.message') }}
            <textarea class="min-h-28 border border-[#E5DED2] px-4 py-3 text-sm outline-none focus:border-[#B99A63]" :placeholder="t('homePage.consult.form.messagePlaceholder')"></textarea>
          </label>
          <button class="inline-flex h-12 items-center justify-center gap-2 bg-[#B99A63] px-6 text-sm font-medium text-white transition hover:bg-[#7A5438]" type="submit">
            <UIcon name="i-lucide-send" />
            {{ t('homePage.consult.form.submit') }}
          </button>
        </form>
      </div>
    </section>

    <div class="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-[#E5DED2] bg-white text-sm font-medium text-[#24211D] shadow-lg md:hidden">
      <NuxtLinkLocale class="flex h-12 items-center justify-center gap-1" :to="localePath('/contact')">
        <UIcon name="i-lucide-message-circle" />
        {{ t('homePage.mobileBar.consult') }}
      </NuxtLinkLocale>
      <a class="flex h-12 items-center justify-center gap-1 border-x border-[#E5DED2]" :href="`tel:${phone}`">
        <UIcon name="i-lucide-phone" />
        {{ t('homePage.mobileBar.call') }}
      </a>
      <NuxtLinkLocale class="flex h-12 items-center justify-center gap-1" :to="localePath('/data')">
        <UIcon name="i-lucide-map-pin" />
        {{ t('homePage.mobileBar.store') }}
      </NuxtLinkLocale>
    </div>
  </main>
</template>

<style scoped>
@keyframes paterson-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes paterson-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.paterson-hero-image {
  animation: paterson-hero-kenburns 12s ease-out both;
  transform-origin: 58% 48%;
}

.hero-image-panel {
  background-image: url("/paterson/oxygen-space-bg.webp");
  background-position: 60% 50%;
  background-size: cover;
}

.hero-image-panel::before {
  position: absolute;
  inset-block: 0;
  left: -18%;
  z-index: 1;
  width: 44%;
  pointer-events: none;
  content: "";
  background: linear-gradient(
    90deg,
    #f4f1ea 0%,
    rgba(244, 241, 234, 0.98) 18%,
    rgba(244, 241, 234, 0.82) 38%,
    rgba(244, 241, 234, 0.46) 66%,
    rgba(244, 241, 234, 0) 100%
  );
}

.hero-side-image {
  filter: brightness(1.16) saturate(1.04);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.12) 5%,
    rgba(0, 0, 0, 0.34) 12%,
    rgba(0, 0, 0, 0.68) 22%,
    black 36%,
    black 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.12) 5%,
    rgba(0, 0, 0, 0.34) 12%,
    rgba(0, 0, 0, 0.68) 22%,
    black 36%,
    black 100%
  );
}

.home-soft-stat,
.home-soft-card,
.home-dark-card,
.advantage-card {
  animation: paterson-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
}

.home-soft-stat,
.home-soft-card,
.home-dark-card,
.advantage-card {
  position: relative;
  overflow: hidden;
}

.home-soft-stat::after,
.home-soft-card::after,
.home-dark-card::after {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  opacity: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.42), transparent 46%);
  transition: opacity 300ms ease;
}

.home-soft-stat:hover::after,
.home-soft-card:hover::after,
.home-dark-card:hover::after {
  opacity: 1;
}

.advantage-card {
  background-color: #fbfaf7;
  border: 1px solid #e8e0d3;
  box-shadow: 0 14px 34px rgba(122, 84, 56, 0.08);
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease;
}

.advantage-card::after {
  position: absolute;
  pointer-events: none;
  content: "";
}

.advantage-card::after {
  right: 24px;
  bottom: 22px;
  width: 82px;
  height: 82px;
  border-right: 1px solid rgba(185, 154, 99, 0.22);
  border-bottom: 1px solid rgba(185, 154, 99, 0.22);
  opacity: 0.7;
}

.advantage-card:hover {
  background-color: #ffffff;
  border-color: #d6c5a5;
  box-shadow: 0 24px 52px rgba(122, 84, 56, 0.16);
  transform: translateY(-6px);
}

.advantage-card__bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 6px;
  background-color: #b99a63;
  border-left: 68px solid #c91f2b;
  border-right: 68px solid #7a5438;
}

.advantage-card__icon {
  display: grid;
  width: 3.25rem;
  height: 3.25rem;
  color: #7a5438;
  place-items: center;
  background: #fff;
  border: 1px solid rgba(185, 154, 99, 0.28);
  box-shadow: 0 10px 24px rgba(122, 84, 56, 0.1);
  transition:
    color 300ms ease,
    background-color 300ms ease,
    border-color 300ms ease,
    transform 300ms ease;
}

.advantage-card:hover .advantage-card__icon {
  color: #fff;
  background: #7a5438;
  border-color: #7a5438;
  transform: translateY(-2px);
}

.product-swiper {
  display: flex;
  gap: 16px;
  overflow: hidden;
}

.product-swiper.swiper-initialized {
  display: block;
}

.product-swiper::part(container) {
  overflow: hidden;
}

.product-swiper-wrap {
  overflow: hidden;
}

.product-swiper swiper-slide {
  flex: 0 0 calc((100% - 16px) / 1.08);
  height: auto;
}

@media (width >= 48rem) {
  .product-swiper {
    gap: 20px;
  }

  .product-swiper swiper-slide {
    flex-basis: calc((100% - 20px) / 2);
  }
}

@media (width >= 64rem) {
  .product-swiper {
    gap: 24px;
  }

  .product-swiper swiper-slide {
    flex-basis: calc((100% - 48px) / 2.8);
  }
}

.product-swiper-progress {
  position: relative;
  height: 2px;
  overflow: hidden;
  background: rgba(122, 84, 56, 0.14);
}

.product-swiper-progress::after {
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 36%;
  content: "";
  background: linear-gradient(90deg, transparent, #b99a63, transparent);
  animation: paterson-product-progress 4.2s ease-in-out infinite;
}

.wellness-airflow-svg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(72rem, 112vw);
  max-width: none;
  pointer-events: none;
  opacity: 0.3;
  transform: translate3d(-46%, -52%, 0);
  animation: paterson-air-svg 14s ease-in-out infinite alternate;
}

.oxygen-proof {
  position: relative;
  min-height: 22rem;
  padding: 2rem;
  transition: background-color 300ms ease, transform 300ms ease;
}

.oxygen-proof:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateY(-0.25rem);
}

.oxygen-proof-first {
  border-top: 0;
}

.process-node-connector {
  display: none;
}

@media (min-width: 768px) {
  .process-node-connector {
    position: absolute;
    top: 2.5rem;
    z-index: 5;
    display: block;
    width: 2.5rem;
    height: 1px;
    background: #d8cdbb;
  }

  .process-node-connector-left {
    right: calc(50% + 1.25rem);
  }

  .process-node-connector-right {
    left: calc(50% + 1.25rem);
  }
}

@media (min-width: 1024px) {
  .oxygen-proof {
    border-top: 0;
  }

  .oxygen-proof-first {
    border-left: 0;
  }
}

@keyframes paterson-product-progress {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  20%,
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(280%);
  }
}

@keyframes paterson-air-svg {
  from {
    opacity: 0.2;
    transform: translate3d(-50%, -52%, 0);
  }

  to {
    opacity: 0.34;
    transform: translate3d(-40%, -50%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .paterson-hero-image,
  .wellness-airflow-svg,
  .home-soft-stat,
  .home-soft-card,
  .advantage-card,
  .home-dark-card,
  .product-swiper-progress::after {
    animation: none;
  }

  .oxygen-proof:hover,
  .home-soft-stat:hover,
  .home-soft-card:hover,
  .advantage-card:hover,
  .home-dark-card:hover {
    transform: none;
  }
}
</style>
