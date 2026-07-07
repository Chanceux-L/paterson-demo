<script setup lang="ts">
type CardItem = {
  description: string;
  icon?: string;
  title: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('pages.about.seo.title'));
const pageDescription = computed(() => t('pages.about.seo.description'));
const pageKeywords = computed(() => t('pages.about.seo.keywords'));
const storyParagraphs = computed<string[]>(() => resolveTranslatedMessageTree(tm('aboutPage.story.paragraphs')) as string[]);
const milestones = computed<CardItem[]>(() => resolveTranslatedMessageTree(tm('aboutPage.milestones')) as CardItem[]);
const values = computed<CardItem[]>(() => resolveTranslatedMessageTree(tm('aboutPage.values')) as CardItem[]);

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
      :title="t('aboutPage.header.title')"
      :description="t('aboutPage.header.subtitle')"
      variant="light"
    />

    <section class="section">
      <div class="section-container">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 class="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
              {{ t('aboutPage.story.heading') }}
            </h2>
            <div class="mt-6 space-y-4 text-base leading-8 text-text-secondary">
              <p v-for="paragraph in storyParagraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div class="relative aspect-4/3 overflow-hidden rounded-card border border-border bg-surface-alt">
            <div class="absolute inset-0 bg-(image:--pattern-dots) bg-size-[20px_20px] opacity-50"></div>
            <div class="absolute inset-0 grid place-items-center text-center text-text-muted">
              <span class="rounded-md border border-brand-primary/15 bg-brand-primary/8 px-4 py-3 text-sm font-semibold text-brand-primary">
                {{ t('aboutPage.story.imagePlaceholder') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="section-container">
        <h2 class="mb-10 font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
          {{ t('aboutPage.milestonesHeading') }}
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StarterContentCard
            v-for="item in milestones"
            :key="item.title"
            :description="item.description"
            :icon="item.icon"
            :title="item.title"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-container">
        <h2 class="mb-10 font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
          {{ t('aboutPage.valuesHeading') }}
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
      :title="t('aboutPage.cta.title')"
      :description="t('aboutPage.cta.subtitle')"
      :action="{ label: t('aboutPage.cta.button'), to: '/contact', icon: 'i-lucide-message-circle' }"
    />
  </div>
</template>
