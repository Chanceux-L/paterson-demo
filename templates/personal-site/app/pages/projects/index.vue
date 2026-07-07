<script setup lang="ts">
type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const projects = computed<Project[]>(() => resolveTranslatedMessageTree(tm('projectsPage.items')) as Project[]);

useAppSeoMeta({
  title: computed(() => t('projectsPage.seo.title')),
  ogTitle: computed(() => t('projectsPage.seo.title')),
  twitterTitle: computed(() => t('projectsPage.seo.title')),
  description: computed(() => t('projectsPage.seo.description')),
  ogDescription: computed(() => t('projectsPage.seo.description')),
  twitterDescription: computed(() => t('projectsPage.seo.description')),
  ogType: 'website',
  twitterCard: 'summary_large_image',
  keywords: computed(() => t('projectsPage.seo.keywords'))
});
</script>

<template>
  <section class="section">
    <div class="section-container">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-black leading-tight text-text-primary md:text-6xl">
          {{ t('projectsPage.title') }}
        </h1>
        <p class="mt-5 text-lg leading-8 text-text-secondary">
          {{ t('projectsPage.subtitle') }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <article v-for="project in projects" :key="project.href" class="card-surface group overflow-hidden rounded-card transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
          <img class="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" :src="project.image" :alt="project.title" />
          <div class="p-6">
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="tag-chip">
                {{ tag }}
              </span>
            </div>
            <h2 class="mt-5 text-2xl font-black text-text-primary">
              {{ project.title }}
            </h2>
            <p class="mt-3 text-sm leading-7 text-text-secondary">
              {{ project.description }}
            </p>
            <NuxtLinkLocale class="secondary-button mt-5 min-h-10 px-4 py-2" :to="project.href">
              {{ t('projectsPage.view') }}
            </NuxtLinkLocale>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
