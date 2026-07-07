<script setup lang="ts">
type Highlight = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

type Article = {
  title: string;
  description: string;
  href: string;
  date: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const pageTitle = computed(() => t('homePage.seo.title'));
const pageDescription = computed(() => t('homePage.seo.description'));
const pageKeywords = computed(() => t('homePage.seo.keywords'));
const highlights = computed<Highlight[]>(() => resolveTranslatedMessageTree(tm('homePage.highlights')) as Highlight[]);
const projects = computed<Project[]>(() => resolveTranslatedMessageTree(tm('projectsPage.items')) as Project[]);
const articles = computed<Article[]>(() => resolveTranslatedMessageTree(tm('articlesPage.items')) as Article[]);

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  keywords: pageKeywords
});
</script>

<template>
  <div>
    <section class="section-container grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
      <div class="max-w-3xl">
        <p class="eyebrow">
          {{ t('homePage.hero.kicker') }}
        </p>
        <h1 class="mt-5 max-w-3xl text-4xl font-black leading-tight text-text-primary md:text-5xl">
          {{ t('homePage.hero.title') }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
          {{ t('homePage.hero.subtitle') }}
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <NuxtLinkLocale class="primary-button" to="/projects">
            {{ t('homePage.hero.primary') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale class="secondary-button" to="/contact">
            {{ t('homePage.hero.secondary') }}
          </NuxtLinkLocale>
        </div>
      </div>

      <div class="relative lg:pt-10">
        <div class="absolute -left-5 top-10 hidden h-40 w-28 rounded-card bg-accent-soft lg:block"></div>
        <img
          class="image-frame relative aspect-4/5 w-full rounded-card object-cover lg:max-h-[30rem]"
          src="https://picsum.photos/seed/personal-site-portrait-workspace/900/1125"
          :alt="t('homePage.hero.imageAlt')"
        />
        <div class="relative -mt-10 ml-auto grid max-w-xl gap-3 sm:grid-cols-3">
          <div v-for="item in highlights" :key="item.label" class="card-surface rounded-card p-4">
            <p class="font-mono text-2xl font-black text-text-primary">
              {{ item.value }}
            </p>
            <p class="mt-1 text-xs leading-5 text-text-muted">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section border-y border-border bg-surface/80">
      <div class="section-container">
        <div class="max-w-2xl">
          <h2 class="text-3xl font-black leading-tight text-text-primary md:text-4xl">
            {{ t('homePage.workTitle') }}
          </h2>
          <p class="mt-4 text-base leading-7 text-text-secondary">
            {{ t('homePage.workIntro') }}
          </p>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          <NuxtLinkLocale
            v-for="(project, index) in projects.slice(0, 3)"
            :key="project.href"
            :class="cn(
              'focus-ring card-surface group overflow-hidden rounded-card transition hover:-translate-y-1 hover:border-accent hover:shadow-lg',
              index === 0 && 'lg:col-span-2'
            )"
            :to="project.href"
          >
            <img :class="cn('w-full object-cover transition duration-500 group-hover:scale-105', index === 0 ? 'aspect-video' : 'aspect-4/3')" :src="project.image" :alt="project.title" />
            <div class="p-5 sm:p-6">
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="tag-chip">
                  {{ tag }}
                </span>
              </div>
              <h3 class="mt-4 text-xl font-black text-text-primary">
                {{ project.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-text-secondary">
                {{ project.description }}
              </p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 class="text-3xl font-black leading-tight text-text-primary md:text-4xl">
            {{ t('homePage.writingTitle') }}
          </h2>
          <p class="mt-4 text-base leading-7 text-text-secondary">
            {{ t('homePage.writingIntro') }}
          </p>
          <NuxtLinkLocale class="secondary-button mt-6" to="/articles">
            {{ t('homePage.writingCta') }}
          </NuxtLinkLocale>
        </div>

        <div class="grid gap-4">
          <NuxtLinkLocale
            v-for="article in articles.slice(0, 3)"
            :key="article.href"
            class="focus-ring group grid gap-4 rounded-card border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-md sm:grid-cols-[9rem_1fr]"
            :to="article.href"
          >
            <p class="font-mono text-xs font-bold text-accent">
              {{ article.date }}
            </p>
            <div>
              <h3 class="text-xl font-black text-text-primary group-hover:text-accent-strong">
                {{ article.title }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-text-secondary">
                {{ article.description }}
              </p>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-container">
        <div class="card-surface grid gap-8 overflow-hidden rounded-card p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-10">
          <div>
            <h2 class="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              {{ t('homePage.cta.title') }}
            </h2>
            <p class="mt-5 max-w-2xl text-base leading-7 text-text-secondary">
              {{ t('homePage.cta.description') }}
            </p>
          </div>
          <div class="lg:text-right">
            <NuxtLinkLocale class="primary-button" to="/contact">
              {{ t('homePage.cta.button') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
