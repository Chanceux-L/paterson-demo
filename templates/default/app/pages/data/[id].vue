<script setup lang="ts">
type DetailSpec = {
  label: string;
  value: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('dataPage.detail.title'));
const pageDescription = computed(() => t('dataPage.detail.summary'));
const features = computed<string[]>(() => resolveTranslatedMessageTree(tm('dataPage.detail.features')) as string[]);
const specifications = computed<DetailSpec[]>(() => resolveTranslatedMessageTree(tm('dataPage.detail.specifications')) as DetailSpec[]);

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'article',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  keywords: t('dataPage.seo.keywords'),
  ogImageTitle: pageTitle,
  ogImageDescription: pageDescription
});
</script>

<template>
  <div>
    <section class="section pt-28">
      <div class="section-container">
        <NuxtLinkLocale to="/data" class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-brand-primary">
          <UIcon name="i-lucide-arrow-left" class="size-4" />
          {{ t('dataPage.detail.backLabel') }}
        </NuxtLinkLocale>

        <header class="mb-10 max-w-reading">
          <StarterBadge class="mb-4">
            {{ t('dataPage.detail.category') }}
          </StarterBadge>
          <h1 class="font-heading text-4xl font-bold leading-tight text-text-primary md:text-5xl">
            {{ t('dataPage.detail.title') }}
          </h1>
          <p class="mt-5 text-base leading-8 text-text-secondary md:text-lg">
            {{ t('dataPage.detail.summary') }}
          </p>
        </header>

        <div class="grid gap-12 lg:grid-cols-3">
          <article class="lg:col-span-2">
            <p class="text-base leading-8 text-text-secondary">
              {{ t('dataPage.detail.description') }}
            </p>
            <section class="mt-8">
              <h2 class="font-heading text-2xl font-semibold text-text-primary">
                {{ t('dataPage.detail.featuresHeading') }}
              </h2>
              <ul class="mt-4 grid gap-3 text-text-secondary">
                <li v-for="feature in features" :key="feature" class="flex gap-3">
                  <span class="mt-3 size-1.5 shrink-0 rounded-full bg-brand-primary"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </section>
          </article>

          <aside>
            <div class="sticky top-24 rounded-card border border-border bg-surface-alt p-6">
              <h2 class="font-heading text-xl font-semibold text-text-primary">
                {{ t('dataPage.detail.specsHeading') }}
              </h2>
              <dl class="mt-5 grid gap-4">
                <div v-for="spec in specifications" :key="spec.label">
                  <dt class="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {{ spec.label }}
                  </dt>
                  <dd class="mt-1 text-sm font-semibold text-text-primary">
                    {{ spec.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        <div class="mt-16 border-t border-border pt-12 text-center">
          <h2 class="font-heading text-2xl font-semibold text-text-primary">
            {{ t('dataPage.detail.ctaHeading') }}
          </h2>
          <p class="mx-auto mt-3 max-w-reading text-text-secondary">
            {{ t('dataPage.detail.ctaSubtitle') }}
          </p>
          <StarterButton to="/contact" size="lg" class="mt-6">
            {{ t('dataPage.detail.ctaButton') }}
          </StarterButton>
        </div>
      </div>
    </section>
  </div>
</template>
