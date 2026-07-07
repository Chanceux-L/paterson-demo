<script setup lang="ts">
type CardItem = {
  description: string;
  icon?: string;
  title: string;
};

type FeatureItem = CardItem & {
  href?: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const { faqPageSchema } = useGeoSchemas();

const pageTitle = computed(() => t('pages.home.seo.title'));
const pageDescription = computed(() => t('pages.home.seo.description'));
const pageKeywords = computed(() => t('pages.home.seo.keywords'));
const heroHighlights = computed<string[]>(() => resolveTranslatedMessageTree(tm('homePage.hero.highlights')) as string[]);
const stats = computed<CardItem[]>(() => resolveTranslatedMessageTree(tm('homePage.stats')) as CardItem[]);
const capabilities = computed<FeatureItem[]>(() => resolveTranslatedMessageTree(tm('homePage.capabilities.items')) as FeatureItem[]);
const solutions = computed<FeatureItem[]>(() => resolveTranslatedMessageTree(tm('homePage.solutions.items')) as FeatureItem[]);

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

useSchemaOrg(computed(() => [
  faqPageSchema()
]));
</script>

<template>
  <div>
    <StarterHeroSection
      :badge="t('homePage.hero.badge')"
      :title="t('homePage.hero.title')"
      :subtitle="t('homePage.hero.subtitle')"
      :cta-label="t('homePage.hero.ctaLabel')"
      cta-href="/about"
      :cta2-label="t('homePage.hero.cta2Label')"
      cta2-href="/contact"
      layout="split"
      :highlights="heroHighlights"
    />

    <section class="section-alt border-y border-border py-12">
      <div class="section-container">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StarterContentCard
            v-for="item in stats"
            :key="item.title"
            :description="item.description"
            :icon="item.icon"
            :title="item.title"
            variant="compact"
          />
        </div>
      </div>
    </section>

    <StarterFeatureSection
      :title="t('homePage.capabilities.title')"
      :subtitle="t('homePage.capabilities.subtitle')"
      :items="capabilities"
      variant="grid-3"
    />

    <StarterFeatureSection
      :title="t('homePage.solutions.title')"
      :subtitle="t('homePage.solutions.subtitle')"
      :items="solutions"
      variant="zigzag"
    />

    <SiteAppCta
      :title="t('homePage.cta.title')"
      :description="t('homePage.cta.subtitle')"
      :action="{ label: t('homePage.cta.button'), to: '/contact', icon: 'i-lucide-message-circle' }"
      :contact-label="t('homePage.cta.button2')"
    />
  </div>
</template>
