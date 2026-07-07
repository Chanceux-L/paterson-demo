<script setup lang="ts">
type Principle = {
  title: string;
  description: string;
};

type Timeline = {
  year: string;
  title: string;
  description: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const principles = computed<Principle[]>(() => resolveTranslatedMessageTree(tm('aboutPage.principles')) as Principle[]);
const timeline = computed<Timeline[]>(() => resolveTranslatedMessageTree(tm('aboutPage.timeline')) as Timeline[]);

useAppSeoMeta({
  title: computed(() => t('aboutPage.seo.title')),
  ogTitle: computed(() => t('aboutPage.seo.title')),
  twitterTitle: computed(() => t('aboutPage.seo.title')),
  description: computed(() => t('aboutPage.seo.description')),
  ogDescription: computed(() => t('aboutPage.seo.description')),
  twitterDescription: computed(() => t('aboutPage.seo.description')),
  ogType: 'profile',
  twitterCard: 'summary_large_image',
  keywords: computed(() => t('aboutPage.seo.keywords'))
});
</script>

<template>
  <div>
    <section class="section">
      <div class="section-container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <h1 class="text-4xl font-black leading-tight text-text-primary md:text-6xl">
            {{ t('aboutPage.title') }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-text-secondary">
            {{ t('aboutPage.subtitle') }}
          </p>
        </div>
        <div class="relative">
          <div class="absolute -right-4 -top-4 hidden h-32 w-32 rounded-card bg-accent-soft lg:block"></div>
          <img
            class="image-frame relative aspect-5/4 w-full rounded-card object-cover"
            src="https://picsum.photos/seed/personal-site-studio-table/1000/800"
            :alt="t('aboutPage.imageAlt')"
          />
        </div>
      </div>
    </section>

    <section class="section border-y border-border bg-surface/80">
      <div class="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 class="text-3xl font-black leading-tight text-text-primary md:text-4xl">
          {{ t('aboutPage.principlesTitle') }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in principles" :key="item.title" class="card-surface rounded-card p-5 transition hover:-translate-y-1 hover:border-accent">
            <h3 class="text-xl font-black text-text-primary">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-text-secondary">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 class="text-3xl font-black leading-tight text-text-primary md:text-4xl">
          {{ t('aboutPage.timelineTitle') }}
        </h2>
        <div class="grid gap-5">
          <article v-for="item in timeline" :key="item.year" class="grid gap-4 rounded-card border border-border bg-surface p-5 sm:grid-cols-[6rem_1fr]">
            <p class="font-mono text-sm font-bold text-accent">
              {{ item.year }}
            </p>
            <div>
              <h3 class="text-xl font-black text-text-primary">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-text-secondary">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
