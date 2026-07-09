<script setup lang="ts">
type Swatch = {
  hex: string;
  name: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('designSystemPage.seo.title'));
const pageDescription = computed(() => t('designSystemPage.seo.description'));
const pageKeywords = computed(() => t('designSystemPage.seo.keywords'));
const styleKeywords = computed<string[]>(() => resolveTranslatedMessageTree(tm('designSystemPage.philosophy.keywords')) as string[]);
const swatches: Swatch[] = [
  { name: '暖白背景', hex: '#F7F4EE' },
  { name: '深木黑', hex: '#24211D' },
  { name: '深木色', hex: '#7A5438' },
  { name: '香槟金', hex: '#B99A63' },
  { name: '健康绿', hex: '#1F3A34' },
  { name: '品牌红', hex: '#C91F2B' },
  { name: '品牌黄', hex: '#F2B705' },
  { name: '分割线', hex: '#E5DED2' }
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
          <h2 class="font-heading text-3xl font-semibold text-text-primary">
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
          <h2 class="font-heading text-3xl font-semibold text-text-primary">
            {{ t('designSystemPage.sections.colors') }}
          </h2>
        </div>
        <p class="mb-6 max-w-reading text-text-secondary">
          {{ t('designSystemPage.colorIntro') }}
        </p>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="swatch in swatches" :key="swatch.name" class="flex items-center gap-4 rounded-card border border-border bg-background p-4">
            <span class="size-12 rounded-md border border-border" :style="{ backgroundColor: swatch.hex }"></span>
            <span>
              <strong class="block text-sm text-text-primary">{{ swatch.name }}</strong>
              <span class="text-xs text-text-muted">{{ swatch.hex }}</span>
            </span>
          </article>
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-type" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-semibold text-text-primary">
            {{ t('designSystemPage.sections.typography') }}
          </h2>
        </div>
        <p class="mb-6 max-w-reading text-text-secondary">
          {{ t('designSystemPage.typographyIntro') }}
        </p>
        <div class="grid gap-4">
          <article class="rounded-card border border-border bg-background p-5">
            <p class="text-xs text-text-muted">
              首页主标题
            </p>
            <p class="mt-2 font-heading text-4xl font-semibold leading-tight md:text-5xl">
              {{ t('designSystemPage.samples.hero') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="text-xs text-text-muted">
              页面标题
            </p>
            <p class="mt-2 font-heading text-3xl font-semibold leading-tight md:text-4xl">
              {{ t('designSystemPage.samples.h1') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="text-xs text-text-muted">
              区块标题
            </p>
            <p class="mt-2 font-heading text-2xl font-semibold leading-tight md:text-3xl">
              {{ t('designSystemPage.samples.h2') }}
            </p>
          </article>
          <article class="rounded-card border border-border bg-background p-5">
            <p class="text-xs text-text-muted">
              卡片标题
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
          <h2 class="font-heading text-3xl font-semibold text-text-primary">
            {{ t('designSystemPage.sections.layout') }}
          </h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <StarterContentCard title="内容结构" :description="t('designSystemPage.layoutGrid')" icon="i-lucide-layout" />
          <StarterContentCard title="留白节奏" :description="t('designSystemPage.layoutWhitespace')" icon="i-lucide-ruler" />
        </div>
      </section>

      <section>
        <div class="mb-6 flex items-center gap-3">
          <UIcon name="i-lucide-mouse-pointer-2" class="size-6 text-brand-primary" />
          <h2 class="font-heading text-3xl font-semibold text-text-primary">
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
