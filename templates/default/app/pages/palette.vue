<script setup lang="ts">
type Swatch = {
  hex: string;
  name: string;
  token: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('designSystemPage.seo.title'));
const pageDescription = computed(() => t('designSystemPage.seo.description'));
const pageKeywords = computed(() => t('designSystemPage.seo.keywords'));
const styleKeywords = computed<string[]>(() => resolveTranslatedMessageTree(tm('designSystemPage.philosophy.keywords')) as string[]);
const swatches: Swatch[] = [
  { name: 'Primary', token: '--color-primary', hex: '#2563eb' },
  { name: 'Primary Hover', token: '--color-primary-hover', hex: '#1d4ed8' },
  { name: 'Accent', token: '--color-accent', hex: '#38bdf8' },
  { name: 'Background', token: '--color-background', hex: '#ffffff' },
  { name: 'Surface', token: '--color-surface', hex: '#f8fafc' },
  { name: 'Text Primary', token: '--color-text-primary', hex: '#0f172a' },
  { name: 'Text Secondary', token: '--color-text-secondary', hex: '#475569' },
  { name: 'Border', token: '--color-border', hex: '#e2e8f0' }
];

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
      :title="t('designSystemPage.title')"
      :description="t('designSystemPage.subtitle')"
      variant="light"
    />

    <div class="section-container space-y-16 py-14">
      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-eye" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-bold text-text-primary">
            {{ t('designSystemPage.sections.philosophy') }}
          </h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          <article class="rounded-card border border-border bg-background p-6">
            <h3 class="font-semibold text-text-primary">
              {{ t('designSystemPage.philosophy.brandTitle') }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-text-secondary">
              {{ t('designSystemPage.philosophy.brand') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-6">
            <h3 class="font-semibold text-text-primary">
              {{ t('designSystemPage.philosophy.directionTitle') }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-text-secondary">
              {{ t('designSystemPage.philosophy.direction') }}
            </p>
          </article>
        </div>
        <div class="mt-5 flex flex-wrap gap-2">
          <StarterBadge v-for="keyword in styleKeywords" :key="keyword">
            {{ keyword }}
          </StarterBadge>
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-palette" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-bold text-text-primary">
            {{ t('designSystemPage.sections.colors') }}
          </h2>
        </div>
        <p class="mb-6 max-w-reading text-text-secondary">
          {{ t('designSystemPage.colorIntro') }}
        </p>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="swatch in swatches" :key="swatch.token" class="flex items-center gap-4 rounded-card border border-border bg-background p-4">
            <span class="size-12 rounded-md border border-border" :style="{ backgroundColor: swatch.hex }"></span>
            <span>
              <strong class="block text-sm text-text-primary">{{ swatch.name }}</strong>
              <span class="font-mono text-xs text-text-muted">{{ swatch.token }}</span>
            </span>
          </article>
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-type" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-bold text-text-primary">
            {{ t('designSystemPage.sections.typography') }}
          </h2>
        </div>
        <p class="mb-6 max-w-reading text-text-secondary">
          {{ t('designSystemPage.typographyIntro') }}
        </p>
        <div class="grid gap-4">
          <article class="rounded-card border border-border bg-background p-5">
            <p class="font-mono text-xs text-text-muted">
              text-hero
            </p>
            <p class="mt-2 font-heading text-4xl font-bold leading-tight md:text-5xl">
              {{ t('designSystemPage.samples.hero') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="font-mono text-xs text-text-muted">
              text-h1
            </p>
            <p class="mt-2 font-heading text-3xl font-bold leading-tight md:text-4xl">
              {{ t('designSystemPage.samples.h1') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="font-mono text-xs text-text-muted">
              text-h2
            </p>
            <p class="mt-2 font-heading text-2xl font-semibold leading-tight md:text-3xl">
              {{ t('designSystemPage.samples.h2') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="font-mono text-xs text-text-muted">
              text-h3
            </p>
            <p class="mt-2 font-heading text-xl font-semibold leading-snug">
              {{ t('designSystemPage.samples.h3') }}
            </p>
          </article>
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-layout" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-bold text-text-primary">
            {{ t('designSystemPage.sections.layout') }}
          </h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <StarterContentCard title="Grid" :description="t('designSystemPage.layoutGrid')" icon="i-lucide-layout" />
          <StarterContentCard title="Whitespace" :description="t('designSystemPage.layoutWhitespace')" icon="i-lucide-ruler" />
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-mouse-pointer-2" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-bold text-text-primary">
            {{ t('designSystemPage.sections.components') }}
          </h2>
        </div>
        <div class="space-y-8">
          <div class="rounded-card border border-border bg-background p-6">
            <div class="flex flex-wrap gap-3">
              <StarterButton>{{ t('designSystemPage.preview.primaryButton') }}</StarterButton>
              <StarterButton variant="secondary">
                {{ t('designSystemPage.preview.secondaryButton') }}
              </StarterButton>
              <StarterButton variant="ghost">
                {{ t('designSystemPage.preview.ghostButton') }}
              </StarterButton>
              <StarterButton size="sm">
                {{ t('designSystemPage.preview.smallButton') }}
              </StarterButton>
              <StarterButton size="lg">
                {{ t('designSystemPage.preview.largeButton') }}
              </StarterButton>
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <StarterContentCard
              :title="t('designSystemPage.preview.cardTitle')"
              :description="t('designSystemPage.preview.cardDescription')"
              icon="i-lucide-gem"
            />
            <StarterContentCard
              :title="t('designSystemPage.preview.cardAltTitle')"
              :description="t('designSystemPage.preview.cardAltDescription')"
              icon="i-lucide-file-text"
            />
          </div>
          <div class="overflow-hidden rounded-card border border-border">
            <StarterHeroSection
              :title="t('designSystemPage.preview.heroTitle')"
              :subtitle="t('designSystemPage.preview.heroSubtitle')"
              :cta-label="t('designSystemPage.preview.heroCta')"
              layout="split"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
