<script setup lang="ts">
import { siteProfile } from '@site-profile';

type BrandStat = {
  value: string;
  label: string;
};

type StrengthCard = {
  icon: string;
  title: string;
  description: string;
};

type BrandTimeline = {
  year: string;
  title: string;
  description: string;
};

type ProofImage = {
  image: string;
  title: string;
  description: string;
};

type SectionNavItem = {
  label: string;
  href: string;
};

type ProofTag = {
  label: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const publicAsset = usePublicAsset();

const phone = siteProfile.contact.phone;
const pageTitle = computed(() => t('pages.about.seo.title'));
const pageDescription = computed(() => t('pages.about.seo.description'));
const pageKeywords = computed(() => t('pages.about.seo.keywords'));
const sectionNav = computed<SectionNavItem[]>(() => resolveTranslatedMessageTree(tm('aboutPage.sectionNav')) as SectionNavItem[]);
const heroStats = computed<BrandStat[]>(() => resolveTranslatedMessageTree(tm('aboutPage.hero.stats')) as BrandStat[]);
const proofPoints = computed<StrengthCard[]>(() => resolveTranslatedMessageTree(tm('aboutPage.proof.items')) as StrengthCard[]);
const proofTags = computed<ProofTag[]>(() => resolveTranslatedMessageTree(tm('aboutPage.proof.tags')) as ProofTag[]);
const capabilityCards = computed<StrengthCard[]>(() => resolveTranslatedMessageTree(tm('aboutPage.capabilities.items')) as StrengthCard[]);
const culturePoints = computed<StrengthCard[]>(() => resolveTranslatedMessageTree(tm('aboutPage.culture.items')) as StrengthCard[]);
const timeline = computed<BrandTimeline[]>(() => resolveTranslatedMessageTree(tm('aboutPage.timeline.items')) as BrandTimeline[]);
const proofImages = computed<ProofImage[]>(() =>
  (resolveTranslatedMessageTree(tm('aboutPage.proofImages')) as ProofImage[]).map(item => ({
    ...item,
    image: publicAsset(item.image)
  }))
);

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogImage: () => publicAsset('/paterson/brand-hero-banner.webp'),
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  twitterImage: () => publicAsset('/paterson/brand-hero-banner.webp'),
  keywords: pageKeywords
});
</script>

<template>
  <main class="brand-strength-page bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#171512] px-5 pt-0 text-white sm:px-8 lg:px-14">
      <img
        class="brand-hero-image absolute inset-0 h-full w-full object-cover opacity-72"
        :src="publicAsset('/paterson/brand-hero-banner.webp')"
        :alt="t('aboutPage.hero.imageAlt')"
        decoding="async"
        fetchpriority="high"
        loading="eager"
      />
      <div class="absolute inset-0 bg-linear-to-b from-[#171512]/26 via-[#171512]/48 to-[#171512] md:bg-linear-to-r md:from-[#171512]/92 md:via-[#171512]/66 md:to-[#171512]/28"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#171512] via-[#171512]/70 to-[#171512]/14 md:via-transparent md:to-[#171512]/20"></div>

      <div class="relative mx-auto grid max-w-7xl gap-8 py-10 md:min-h-[620px] md:gap-10 md:py-16 lg:min-h-[640px] lg:grid-cols-[0.86fr_0.74fr] lg:items-center lg:py-16">
        <div class="max-w-3xl motion-safe:animate-[brand-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('aboutPage.hero.eyebrow') }}
          </p>
          <h1 class="mt-5 text-4xl font-semibold leading-tight md:mt-7 md:text-6xl xl:text-7xl">
            <span class="block">{{ t('aboutPage.hero.titleLine1') }}</span>
            <span class="block text-[#D2B574]">{{ t('aboutPage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-white/72 md:mt-7 md:text-lg">
            {{ t('aboutPage.hero.subtitle') }}
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row md:mt-10">
            <NuxtLinkLocale
              class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
              to="/contact"
            >
              <UIcon name="i-lucide-message-circle" />
              {{ t('aboutPage.hero.primaryCta') }}
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

        <div class="grid gap-3 sm:grid-cols-2">
          <article
            v-for="(stat, index) in heroStats"
            :key="stat.label"
            class="brand-glass-stat"
            :style="{ '--stagger': `${index * 90}ms` }"
          >
            <div class="text-2xl font-semibold text-[#D2B574] md:text-3xl">
              {{ stat.value }}
            </div>
            <p class="mt-3 text-sm leading-6 text-white/68">
              {{ stat.label }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <nav class="sticky top-16 z-30 border-b border-[#E5DED2] bg-white/96 backdrop-blur" :aria-label="t('aboutPage.sectionNavAria')">
      <div class="about-section-scroller mx-auto max-w-7xl overflow-x-auto">
        <div class="flex w-max min-w-full snap-x justify-start gap-8 px-5 sm:px-8 md:justify-center md:gap-12 lg:w-auto lg:px-14">
          <a
            v-for="item in sectionNav"
            :key="item.href"
            class="about-section-link snap-start whitespace-nowrap px-1 py-4 text-sm font-medium text-[#6F6A61] transition hover:text-[#B99A63] md:text-base"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>

    <section id="company" class="scroll-mt-32 px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('aboutPage.proof.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
            {{ t('aboutPage.proof.title') }}
          </h2>
        </div>
        <div class="mt-6 max-w-4xl md:mt-8">
          <p class="text-base leading-8 text-[#6F6A61]">
            {{ t('aboutPage.proof.description') }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in proofTags"
              :key="tag.label"
              class="border border-[#E5DED2] bg-white px-3 py-2 text-xs font-semibold text-[#7A5438]"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-8 grid max-w-7xl gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(item, index) in proofPoints"
          :key="item.title"
          class="brand-proof-card"
          :style="{ '--stagger': `${index * 80}ms` }"
        >
          <span class="grid size-12 place-items-center border border-[#D8C39C] bg-white text-[#7A5438]">
            <UIcon class="size-5" :name="item.icon" />
          </span>
          <h3 class="mt-8 text-xl font-semibold leading-snug">
            {{ item.title }}
          </h3>
          <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
            {{ item.description }}
          </p>
        </article>
      </div>
    </section>

    <section class="scroll-mt-32 overflow-hidden bg-white px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-6 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div class="relative overflow-hidden bg-[#171512]">
          <img
            class="aspect-[16/9] w-full object-cover opacity-92 transition duration-700 hover:scale-105"
            :src="publicAsset('/paterson/technology-wood-factory-bg.webp')"
            :alt="t('aboutPage.origin.imageAlt')"
          />
          <div class="absolute inset-0 bg-linear-to-t from-[#171512]/76 via-transparent to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
            <p class="text-sm font-semibold text-[#D2B574]">
              {{ t('aboutPage.origin.captionEyebrow') }}
            </p>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-white/76">
              {{ t('aboutPage.origin.caption') }}
            </p>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold text-[#C91F2B]">
            {{ t('aboutPage.origin.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('aboutPage.origin.title') }}
          </h2>
          <p class="mt-6 text-base leading-8 text-[#6F6A61]">
            {{ t('aboutPage.origin.description') }}
          </p>
          <div class="mt-8 border-l border-[#D8C39C] pl-6">
            <p class="text-sm font-semibold text-[#7A5438]">
              {{ t('aboutPage.origin.quote') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="honors" class="scroll-mt-32 relative overflow-hidden bg-[#14352F] px-5 py-12 text-white sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D2B574]/56 to-transparent"></div>
      <div class="relative mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div class="lg:sticky lg:top-28">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('aboutPage.capabilities.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
            {{ t('aboutPage.capabilities.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-white/68">
            {{ t('aboutPage.capabilities.description') }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="(item, index) in capabilityCards"
            :key="item.title"
            class="brand-capability-card"
            :style="{ '--stagger': `${index * 90}ms` }"
          >
            <div class="flex items-start justify-between gap-5">
              <span class="grid size-12 place-items-center bg-[#D2B574] text-[#14352F]">
                <UIcon class="size-5" :name="item.icon" />
              </span>
              <span class="text-sm font-semibold text-white/28">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="mt-8 text-xl font-semibold leading-snug text-[#F7F4EE]">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/64">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="culture" class="scroll-mt-32 px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-6 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold text-[#C91F2B]">
              {{ t('aboutPage.culture.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              {{ t('aboutPage.culture.title') }}
            </h2>
            <p class="mt-6 text-base leading-8 text-[#6F6A61]">
              {{ t('aboutPage.culture.description') }}
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <article v-for="item in culturePoints" :key="item.title" class="border-l border-[#D8C39C] pl-5">
                <div class="flex items-center gap-3 text-[#7A5438]">
                  <UIcon :name="item.icon" />
                  <h3 class="font-semibold">
                    {{ item.title }}
                  </h3>
                </div>
                <p class="mt-2 text-sm leading-6 text-[#6F6A61]">
                  {{ item.description }}
                </p>
              </article>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="item in proofImages"
              :key="item.title"
              class="group relative aspect-[4/3] overflow-hidden bg-[#171512] text-white sm:min-h-80"
            >
              <img class="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" :src="item.image" :alt="item.title" />
              <div class="absolute inset-0 bg-linear-to-t from-[#171512]/86 via-[#171512]/20 to-transparent"></div>
              <div class="absolute inset-x-0 bottom-0 p-5">
                <h3 class="text-xl font-semibold">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-white/72">
                  {{ item.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="history" class="scroll-mt-32 bg-white px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-6 md:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div class="lg:sticky lg:top-28">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('aboutPage.timeline.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('aboutPage.timeline.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('aboutPage.timeline.description') }}
          </p>
        </div>

        <div class="relative">
          <div class="absolute bottom-0 left-4 top-0 w-px bg-[#D8CDBB]"></div>
          <article
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative pb-8 pl-14 last:pb-0"
            :style="{ '--stagger': `${index * 80}ms` }"
          >
            <span class="absolute left-0 top-1 grid size-8 place-items-center border border-[#B99A63] bg-white text-xs font-semibold text-[#7A5438]">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <div class="border border-[#E5DED2] bg-[#FBFAF7] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D6C5A5] hover:bg-white hover:shadow-lg hover:shadow-[#7A5438]/10 sm:p-6">
              <span class="text-sm font-semibold text-[#B99A63]">{{ item.year }}</span>
              <h3 class="mt-2 text-xl font-semibold">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[#6F6A61]">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="scroll-mt-32 bg-[#171512] px-5 py-10 text-white sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="text-sm font-semibold text-[#D2B574]">
            {{ t('aboutPage.cta.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            {{ t('aboutPage.cta.title') }}
          </h2>
          <p class="mt-5 max-w-2xl text-base leading-8 text-white/68">
            {{ t('aboutPage.cta.subtitle') }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLinkLocale
            class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
            to="/contact"
          >
            <UIcon name="i-lucide-send" />
            {{ t('aboutPage.cta.button') }}
          </NuxtLinkLocale>
          <a
            class="inline-flex h-12 items-center justify-center gap-2 border border-white/24 px-6 text-sm font-medium text-white transition hover:border-[#D2B574] hover:text-[#D2B574]"
            :href="`tel:${phone}`"
          >
            <UIcon name="i-lucide-phone" />
            {{ t('nav.hotline') }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes brand-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes brand-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.brand-hero-image {
  animation: brand-hero-kenburns 12s ease-out both;
  transform-origin: 50% 52%;
}

.brand-glass-stat,
.brand-proof-card,
.brand-capability-card {
  animation: brand-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
}

.brand-glass-stat {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(12px);
}

.brand-proof-card {
  position: relative;
  padding: 1.5rem 2rem 1.75rem 1.5rem;
  overflow: hidden;
  background: #fbfaf7;
  border: 1px solid #e8e0d3;
  box-shadow: 0 14px 34px rgba(122, 84, 56, 0.08);
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    box-shadow 300ms ease,
    transform 300ms ease;
}

.brand-proof-card::after {
  position: absolute;
  right: 1rem;
  bottom: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
  pointer-events: none;
  content: "";
  border-right: 1px solid rgba(185, 154, 99, 0.22);
  border-bottom: 1px solid rgba(185, 154, 99, 0.22);
}

.brand-proof-card:hover {
  background: #ffffff;
  border-color: #d6c5a5;
  box-shadow: 0 24px 52px rgba(122, 84, 56, 0.14);
  transform: translateY(-0.375rem);
}

.brand-capability-card {
  padding: 1.5rem;
  background: rgba(13, 36, 31, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    transform 300ms ease;
}

.brand-capability-card:hover {
  background: rgba(13, 36, 31, 0.92);
  border-color: rgba(210, 181, 116, 0.48);
  transform: translateY(-0.25rem);
}

@media (min-width: 768px) {
  .brand-glass-stat {
    min-height: 9.5rem;
  }

  .brand-proof-card {
    min-height: 17rem;
  }

  .brand-capability-card {
    min-height: 18rem;
  }
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

@media (prefers-reduced-motion: reduce) {
  .brand-hero-image,
  .brand-glass-stat,
  .brand-proof-card,
  .brand-capability-card {
    animation: none;
  }

  .brand-proof-card:hover,
  .brand-capability-card:hover {
    transform: none;
  }
}
</style>
