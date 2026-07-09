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

type SupportCard = {
  icon: string;
  title: string;
  description: string;
};

type ProofPoint = {
  value: string;
  label: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type ContactMethod = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const publicAsset = usePublicAsset();

const phone = siteProfile.contact.phone;
const pageTitle = computed(() => t('contactPage.seo.title'));
const pageDescription = computed(() => t('contactPage.seo.description'));
const pageKeywords = computed(() => t('contactPage.seo.keywords'));
const sectionNav = computed<SectionNavItem[]>(() => resolveTranslatedMessageTree(tm('contactPage.sectionNav')) as SectionNavItem[]);
const heroMetrics = computed<HeroMetric[]>(() => resolveTranslatedMessageTree(tm('contactPage.hero.metrics')) as HeroMetric[]);
const supportCards = computed<SupportCard[]>(() => resolveTranslatedMessageTree(tm('contactPage.support.items')) as SupportCard[]);
const proofPoints = computed<ProofPoint[]>(() => resolveTranslatedMessageTree(tm('contactPage.proof.items')) as ProofPoint[]);
const processSteps = computed<ProcessStep[]>(() => resolveTranslatedMessageTree(tm('contactPage.process.steps')) as ProcessStep[]);
const contactMethods = computed<ContactMethod[]>(() => [
  { icon: 'i-lucide-map-pin', label: t('contactPage.labels.address'), value: siteProfile.contact.address.text, href: '' },
  { icon: 'i-lucide-phone', label: t('contactPage.labels.phone'), value: phone, href: `tel:${phone}` },
  { icon: 'i-lucide-mail', label: t('contactPage.labels.email'), value: siteProfile.contact.email, href: `mailto:${siteProfile.contact.email}` },
  { icon: 'i-lucide-clock', label: t('contactPage.labels.hours'), value: t('contactPage.hours'), href: '' }
]);

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
  <main class="franchise-page bg-[#F4F1EA] text-[#24211D]">
    <section class="relative overflow-hidden bg-[#211D19] px-5 pt-0 text-white sm:px-8 lg:bg-[#171512] lg:px-14">
      <picture class="franchise-hero-picture absolute inset-0">
        <source media="(max-width: 767px)" :srcset="publicAsset('/paterson/product-mobile-banner.webp')" />
        <img
          class="franchise-hero-image absolute inset-0 size-full object-cover object-center opacity-88"
          :src="publicAsset('/paterson/product-system-hero.webp')"
          :alt="t('contactPage.hero.imageAlt')"
          decoding="async"
          fetchpriority="high"
          loading="eager"
        />
      </picture>
      <div class="absolute inset-0 bg-linear-to-b from-[#211D19]/12 via-[#41382F]/34 to-[#211D19] md:bg-linear-to-r md:from-[#171512]/94 md:via-[#171512]/70 md:to-[#171512]/18"></div>
      <div class="absolute inset-0 bg-linear-to-t from-[#211D19] via-[#2F2923]/66 to-transparent md:from-[#171512]/90 md:via-[#171512]/14 md:to-[#171512]/20"></div>

      <div class="relative mx-auto grid max-w-7xl gap-10 py-12 md:min-h-[620px] md:py-16 lg:min-h-[660px] lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
        <div class="max-w-3xl motion-safe:animate-[franchise-fade-up_560ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('contactPage.hero.eyebrow') }}
          </p>
          <h1 class="mt-6 text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            <span class="block">{{ t('contactPage.hero.titleLine1') }}</span>
            <span class="block text-[#D2B574]">{{ t('contactPage.hero.titleLine2') }}</span>
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {{ t('contactPage.hero.subtitle') }}
          </p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              class="inline-flex h-12 items-center justify-center gap-2 bg-[#D2B574] px-6 text-sm font-medium text-[#171512] transition hover:bg-[#E5CC8F]"
              href="#inquiry"
            >
              <UIcon name="i-lucide-message-circle" />
              {{ t('contactPage.hero.primaryCta') }}
            </a>
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
            class="franchise-hero-stat"
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

    <nav class="sticky top-16 z-30 border-b border-[#E5DED2] bg-white/96 backdrop-blur" :aria-label="t('contactPage.sectionNavAria')">
      <div class="mx-auto flex max-w-7xl snap-x justify-center gap-8 overflow-x-auto px-5 sm:px-8 md:gap-12 lg:px-14">
        <a
          v-for="item in sectionNav"
          :key="item.href"
          class="franchise-section-link snap-start whitespace-nowrap px-1 py-4 text-sm font-medium text-[#6F6A61] transition hover:text-[#B99A63] md:text-base"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <section id="opportunity" class="scroll-mt-32 px-5 py-12 sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div class="lg:sticky lg:top-28">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('contactPage.opportunity.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('contactPage.opportunity.title') }}
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-[#6F6A61]">
            {{ t('contactPage.opportunity.description') }}
          </p>
        </div>

        <div class="relative overflow-hidden bg-white">
          <img
            class="aspect-[4/3] w-full object-cover"
            :src="publicAsset('/paterson/hero-living-room.webp')"
            :alt="t('contactPage.opportunity.imageAlt')"
          />
          <div class="grid border-x border-b border-[#E5DED2] sm:grid-cols-3">
            <article v-for="point in proofPoints" :key="point.label" class="border-b border-[#E5DED2] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div class="text-2xl font-semibold text-[#7A5438] md:text-3xl">
                {{ point.value }}
              </div>
              <h3 class="mt-3 text-base font-semibold leading-tight">
                {{ point.label }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[#6F6A61]">
                {{ point.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="support" class="scroll-mt-32 bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="flex max-w-4xl flex-col gap-5">
          <div>
            <p class="text-sm font-semibold text-[#C91F2B]">
              {{ t('contactPage.support.eyebrow') }}
            </p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              {{ t('contactPage.support.title') }}
            </h2>
          </div>
          <p class="max-w-3xl text-base leading-8 text-[#6F6A61]">
            {{ t('contactPage.support.description') }}
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="item in supportCards" :key="item.title" class="border border-[#E5DED2] bg-[#F7F4EE] p-6 transition hover:border-[#B99A63]">
            <span class="grid size-11 place-items-center bg-white text-[#7A5438]">
              <UIcon class="size-5" :name="item.icon" />
            </span>
            <h3 class="mt-7 text-xl font-semibold leading-tight">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-[#6F6A61]">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="process" class="scroll-mt-32 relative overflow-hidden bg-[#14352F] px-5 py-12 text-white sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D2B574]/56 to-transparent"></div>
      <div class="relative mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#D2B574]">
            <span class="h-px w-10 bg-[#D2B574]"></span>
            {{ t('contactPage.process.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight text-[#F7F4EE] md:text-5xl">
            {{ t('contactPage.process.title') }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/68">
            {{ t('contactPage.process.description') }}
          </p>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article v-for="(step, index) in processSteps" :key="step.title" class="border border-white/12 bg-white/7 p-5 backdrop-blur">
            <span class="text-sm font-semibold text-[#D2B574]">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="mt-8 text-xl font-semibold leading-tight text-[#F7F4EE]">
              {{ step.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/62">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="inquiry" class="scroll-mt-32 bg-[#F4F1EA] px-5 py-12 sm:px-8 md:py-20 lg:px-14 lg:py-28">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <aside>
          <p class="inline-flex items-center gap-3 text-sm font-semibold text-[#C91F2B]">
            <span class="h-px w-10 bg-[#C91F2B]"></span>
            {{ t('contactPage.inquiry.eyebrow') }}
          </p>
          <h2 class="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            {{ t('contactPage.inquiry.title') }}
          </h2>
          <p class="mt-6 text-base leading-8 text-[#6F6A61]">
            {{ t('contactPage.inquiry.description') }}
          </p>

          <div class="mt-8 grid gap-4">
            <component
              :is="method.href ? 'a' : 'div'"
              v-for="method in contactMethods"
              :key="method.label"
              class="flex items-start gap-4 border border-[#E5DED2] bg-white p-4 transition hover:border-[#B99A63]"
              :href="method.href || undefined"
            >
              <span class="grid size-10 shrink-0 place-items-center bg-[#F1E7D4] text-[#7A5438]">
                <UIcon :name="method.icon" class="size-5" />
              </span>
              <span>
                <span class="block text-sm font-semibold text-[#24211D]">{{ method.label }}</span>
                <span class="mt-1 block text-sm leading-6 text-[#6F6A61]">{{ method.value }}</span>
              </span>
            </component>
          </div>
        </aside>

        <div>
          <ContactInquiryForm />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes franchise-hero-kenburns {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.04);
  }
}

@keyframes franchise-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.franchise-hero-image {
  animation: franchise-hero-kenburns 12s ease-out both;
  transform-origin: 52% 52%;
}

@media (max-width: 767px) {
  .franchise-hero-image {
    bottom: auto;
    height: min(52vh, 26rem);
    object-position: center top;
    animation: none;
    -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0%, #000 58%, rgba(0, 0, 0, 0.82) 70%, transparent 100%);
    transform: none;
  }
}

.franchise-hero-stat {
  animation: franchise-fade-up 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--stagger, 0ms);
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
}

.franchise-section-link {
  position: relative;
}

.franchise-section-link::after {
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

.franchise-section-link:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .franchise-hero-image,
  .franchise-hero-stat {
    animation: none;
    transform: none;
  }
}
</style>
