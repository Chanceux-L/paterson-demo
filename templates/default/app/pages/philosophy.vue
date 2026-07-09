<script setup lang="ts">
import { siteProfile } from '@site-profile';

type HeroMetric = {
  value: string;
  label: string;
};

type SectionNavItem = {
  label: string;
  href: string;
};

type TechNode = {
  icon: string;
  title: string;
  description: string;
};

type ProofCard = {
  value: string;
  label: string;
  description: string;
};

type ExperienceCard = {
  image: string;
  title: string;
  description: string;
  tags: string[];
};

type AdvantageCard = {
  icon: string;
  title: string;
  description: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const publicAsset = usePublicAsset();

const phone = siteProfile.contact.phone;
const pageTitle = computed(() => t('philosophyPage.seo.title'));
const pageDescription = computed(() => t('philosophyPage.seo.description'));
const pageKeywords = computed(() => t('philosophyPage.seo.keywords'));
const sectionNav = computed<SectionNavItem[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.sectionNav')) as SectionNavItem[]);
const heroMetrics = computed<HeroMetric[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.hero.metrics')) as HeroMetric[]);
const chainNodes = computed<TechNode[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.chain.nodes')) as TechNode[]);
const proofCards = computed<ProofCard[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.proof.cards')) as ProofCard[]);
const experienceCards = computed<ExperienceCard[]>(() =>
  (resolveTranslatedMessageTree(tm('philosophyPage.experience.items')) as ExperienceCard[]).map(item => ({
    ...item,
    image: publicAsset(item.image)
  }))
);
const terminalValues = computed<AdvantageCard[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.terminal.items')) as AdvantageCard[]);

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogImage: () => publicAsset('/paterson/technology-wood-factory-bg.webp'),
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  twitterImage: () => publicAsset('/paterson/technology-wood-factory-bg.webp'),
  keywords: pageKeywords
});
</script>

<template>
  <main class="water-paint-page bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#241F1A] px-5 pt-0 text-white sm:px-8 lg:bg-[#171512] lg:px-14">
      <img
        class="water-paint-hero-image absolute inset-0 h-full w-full object-cover opacity-74"
        :src="publicAsset('/paterson/technology-wood-factory-bg.webp')"
        :alt="t('philosophyPage.hero.imageAlt')"
        decoding="async"
        fetchpriority="high"
        loading="eager"
      />
      <div class="absolute inset-0 bg-linear-to-b from-[#241F1A]/18 via-[#3E342A]/44 to-[#241F1A] md:bg-linear-to-r md:from-[#171512]/94 md:via-[#171512]/64 md:to-[#171512]/24"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#241F1A] via-[#332B23]/70 to-transparent md:via-transparent md:to-[#171512]/24"></div>

      <div class="relative mx-auto grid max-w-7xl gap-10 py-12 md:min-h-[620px] md:py-16 lg:min-h-[640px] lg:grid-cols-[0.84fr_0.76fr] lg:items-center">
        <div class="max-w-3xl motion-safe:animate-[water-paint-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('philosophyPage.hero.eyebrow') }}
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            <span class="block">{{ t('philosophyPage.hero.titleLine1') }}</span>
            <span class="block text-[#D2B574]">{{ t('philosophyPage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {{ t('philosophyPage.hero.subtitle') }}
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLinkLocale
              class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
              to="/contact"
            >
              <UIcon name="i-lucide-message-circle" />
              {{ t('philosophyPage.hero.primaryCta') }}
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
            class="water-paint-hero-stat"
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

    <nav class="sticky top-16 z-30 border-b border-[#E5DED2] bg-white/96 backdrop-blur" :aria-label="t('philosophyPage.sectionNavAria')">
      <div class="mx-auto flex max-w-7xl snap-x justify-center gap-8 overflow-x-auto px-5 sm:px-8 md:gap-12 lg:px-14">
        <a
          v-for="item in sectionNav"
          :key="item.href"
          class="water-paint-section-link snap-start whitespace-nowrap px-1 py-4 text-sm font-medium text-[#6F6A61] transition hover:text-[#B99A63] md:text-base"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <section id="chain" class="scroll-mt-32 px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div class="lg:sticky lg:top-28">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('philosophyPage.chain.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('philosophyPage.chain.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('philosophyPage.chain.description') }}
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <article
            v-for="(node, index) in chainNodes"
            :key="node.title"
            class="water-paint-node"
            :style="{ '--stagger': `${index * 80}ms` }"
          >
            <div class="flex items-start justify-between gap-5">
              <span class="water-paint-node-icon">
                <UIcon class="size-5" :name="node.icon" />
              </span>
              <span class="text-sm font-semibold text-[#A98962]">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="mt-8 text-xl font-semibold leading-snug">
              {{ node.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
              {{ node.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="proof" class="scroll-mt-32 relative overflow-hidden bg-[#14352F] px-5 py-12 text-white sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D2B574]/56 to-transparent"></div>
      <div class="relative mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('philosophyPage.proof.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
            {{ t('philosophyPage.proof.title') }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/68">
            {{ t('philosophyPage.proof.description') }}
          </p>

          <div class="mt-9 grid gap-3 sm:grid-cols-3">
            <article v-for="card in proofCards" :key="card.label" class="border border-white/12 bg-white/7 p-5 backdrop-blur">
              <div class="text-2xl font-semibold text-[#D2B574] md:text-3xl">
                {{ card.value }}
              </div>
              <p class="mt-2 text-sm font-semibold text-[#F7F4EE]">
                {{ card.label }}
              </p>
              <p class="mt-4 text-sm leading-7 text-white/62">
                {{ card.description }}
              </p>
            </article>
          </div>
        </div>

        <div class="relative overflow-hidden bg-[#171512] shadow-2xl shadow-black/20">
          <img
            class="aspect-[4/3] w-full object-cover opacity-92"
            :src="publicAsset('/paterson/news-water-paint-tech.webp')"
            :alt="t('philosophyPage.proof.imageAlt')"
          />
          <div class="absolute inset-0 bg-linear-to-t from-[#171512]/86 via-transparent to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p class="text-sm font-semibold text-[#D2B574]">
              {{ t('philosophyPage.proof.captionEyebrow') }}
            </p>
            <p class="mt-3 text-sm leading-7 text-white/74">
              {{ t('philosophyPage.proof.caption') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="scroll-mt-32 bg-white px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm font-semibold text-[#C91F2B]">
              {{ t('philosophyPage.experience.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {{ t('philosophyPage.experience.title') }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('philosophyPage.experience.description') }}
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article v-for="item in experienceCards" :key="item.title" class="group bg-white">
            <div class="relative overflow-hidden bg-[#171512]">
              <img class="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" :src="item.image" :alt="item.title" />
              <div class="absolute inset-0 bg-linear-to-t from-[#171512]/72 via-transparent to-transparent"></div>
            </div>
            <div class="border-x border-b border-[#E5DED2] px-5 py-5">
              <h3 class="text-xl font-semibold leading-tight">
                {{ item.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
                {{ item.description }}
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span v-for="tag in item.tags" :key="tag" class="bg-[#F4F1EA] px-3 py-1 text-xs font-semibold text-[#7A5438]">
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="terminal" class="scroll-mt-32 bg-[#F4F1EA] px-5 py-10 sm:px-8 md:py-16 lg:px-14 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('philosophyPage.terminal.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('philosophyPage.terminal.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('philosophyPage.terminal.description') }}
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="(item, index) in terminalValues"
            :key="item.title"
            class="water-paint-terminal-card"
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
      </div>
    </section>

    <section class="bg-[#171512] px-5 py-14 text-white sm:px-8 md:py-20 lg:px-14 lg:py-24">
      <div class="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-[#D2B574]">
            {{ t('philosophyPage.cta.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('philosophyPage.cta.title') }}
          </h2>
          <p class="mt-5 text-base leading-8 text-white/70">
            {{ t('philosophyPage.cta.subtitle') }}
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <NuxtLinkLocale
            class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
            to="/contact"
          >
            <UIcon name="i-lucide-send" />
            {{ t('philosophyPage.cta.button') }}
          </NuxtLinkLocale>
          <a
            class="inline-flex h-12 items-center justify-center gap-2 border border-white/24 px-6 text-sm font-medium text-white transition hover:border-[#D2B574] hover:text-[#D2B574]"
            :href="`tel:${phone}`"
          >
            <UIcon name="i-lucide-phone" />
            {{ phone }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes water-paint-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes water-paint-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.water-paint-hero-image {
  animation: water-paint-hero-kenburns 12s ease-out both;
  transform-origin: 52% 52%;
}

@media (max-width: 767px) {
  .water-paint-hero-image {
    bottom: auto;
    height: min(52vh, 26rem);
    object-position: center top;
    animation: none;
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    transform: none;
  }
}

.water-paint-hero-stat,
.water-paint-node,
.water-paint-terminal-card {
  animation: water-paint-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
}

.water-paint-hero-stat {
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(16px);
}

.water-paint-section-link {
  position: relative;
}

.water-paint-section-link::after {
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

.water-paint-section-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.water-paint-node,
.water-paint-terminal-card {
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid #e5ded2;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
}

.water-paint-node-icon {
  display: grid;
  width: 3rem;
  height: 3rem;
  color: #7a5438;
  background: #f4f1ea;
  border: 1px solid #d8c39c;
  place-items: center;
  transition:
    color 220ms ease,
    background 220ms ease,
    border-color 220ms ease;
}

.water-paint-node:hover,
.water-paint-terminal-card:hover {
  border-color: #d8c39c;
  box-shadow: 0 18px 42px rgba(122, 84, 56, 0.08);
  transform: translateY(-2px);
}

.water-paint-node:hover .water-paint-node-icon {
  color: #171512;
  background: #d2b574;
  border-color: #d2b574;
}

@media (prefers-reduced-motion: reduce) {
  .water-paint-page *,
  .water-paint-page *::before,
  .water-paint-page *::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
