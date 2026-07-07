<script setup lang="ts">
type FeatureItem = {
  description: string;
  icon?: string;
  title: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('philosophyPage.seo.title'));
const pageDescription = computed(() => t('philosophyPage.seo.description'));
const pageKeywords = computed(() => t('philosophyPage.seo.keywords'));
const introParagraphs = computed<string[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.intro.paragraphs')) as string[]);
const pillars = computed<FeatureItem[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.pillars.items')) as FeatureItem[]);
const values = computed<FeatureItem[]>(() => resolveTranslatedMessageTree(tm('philosophyPage.values.items')) as FeatureItem[]);

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
      :title="t('philosophyPage.header.title')"
      :description="t('philosophyPage.header.subtitle')"
      variant="light"
    />

    <section class="section">
      <div class="section-container">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 class="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {{ t('philosophyPage.intro.heading') }}
            </h2>
            <div class="mt-6 space-y-4 text-base leading-8 text-text-secondary">
              <p v-for="paragraph in introParagraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div class="grid aspect-4/3 place-items-center rounded-card border border-border bg-surface-alt text-sm font-semibold tracking-widest text-text-muted">
            {{ t('philosophyPage.intro.imagePlaceholder') }}
          </div>
        </div>
      </div>
    </section>

    <StarterFeatureSection
      :title="t('philosophyPage.pillars.heading')"
      :items="pillars"
      variant="grid-2"
    />

    <section class="section section-alt">
      <div class="section-container">
        <h2 class="mb-10 font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
          {{ t('philosophyPage.values.heading') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <StarterContentCard
            v-for="item in values"
            :key="item.title"
            :description="item.description"
            :icon="item.icon"
            :title="item.title"
          />
        </div>
      </div>
    </section>

    <SiteAppCta
      :title="t('philosophyPage.cta.title')"
      :description="t('philosophyPage.cta.subtitle')"
      :action="{ label: t('philosophyPage.cta.button'), to: '/contact', icon: 'i-lucide-message-circle' }"
    />
  </div>
</template>
