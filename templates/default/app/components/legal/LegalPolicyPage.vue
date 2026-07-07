<script setup lang="ts">
type LegalSection = {
  title: string;
  body: string[];
};

const props = defineProps<{
  pageKey: 'privacy' | 'terms';
}>();

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const contentKey = computed(() => `legal.${props.pageKey}`);
const pageTitle = computed(() => t(`${contentKey.value}.title`));
const pageDescription = computed(() => t(`${contentKey.value}.description`));
const seoTitle = computed(() => t(`${contentKey.value}.seo.title`));
const seoDescription = computed(() => t(`${contentKey.value}.seo.description`));
const updatedAt = computed(() => t(`${contentKey.value}.updatedAt`));
const sections = computed<LegalSection[]>(() =>
  resolveTranslatedMessageTree(tm(`${contentKey.value}.sections`)) as LegalSection[]
);

useAppSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  twitterTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  twitterDescription: seoDescription,
  ogType: 'article',
  ogSiteName: () => t('site.name'),
  twitterCard: 'summary'
});
</script>

<template>
  <main class="min-h-dvh bg-background pt-18 text-text-primary">
    <article class="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:py-18">
      <header>
        <NuxtLinkLocale class="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-brand-primary" to="/">
          <UIcon name="i-lucide-arrow-left" />
          {{ t('common.home') }}
        </NuxtLinkLocale>
        <p class="mt-10 text-sm font-medium text-brand-primary">
          {{ t('legal.eyebrow') }}
        </p>
        <h1 class="font-heading mt-3 text-3xl font-semibold leading-tight md:text-5xl">
          {{ pageTitle }}
        </h1>
        <p class="mt-5 text-base leading-8 text-text-secondary">
          {{ pageDescription }}
        </p>
        <p class="mt-6 text-sm text-text-muted">
          {{ t('legal.lastUpdated') }} {{ updatedAt }}
        </p>
      </header>

      <div class="mt-10 divide-y divide-border border-y border-border">
        <section
          v-for="section in sections"
          :key="section.title"
          class="py-8"
        >
          <h2 class="font-heading text-xl font-semibold leading-snug md:text-2xl">
            {{ section.title }}
          </h2>
          <div class="mt-4 space-y-4">
            <p
              v-for="paragraph in section.body"
              :key="paragraph"
              class="text-sm leading-7 text-text-secondary md:text-base md:leading-8"
            >
              {{ paragraph }}
            </p>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>
