<script setup lang="ts">
type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  body: string[];
  role: string;
};

const route = useRoute();
const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const projects = computed<Project[]>(() => resolveTranslatedMessageTree(tm('projectsPage.items')) as Project[]);
const project = computed(() => projects.value.find(item => item.href.endsWith(`/${route.params.id}`)) || projects.value[0]);

useAppSeoMeta({
  title: computed(() => `${project.value?.title || t('projectsPage.title')} | ${t('site.name')}`),
  ogTitle: computed(() => project.value?.title || t('projectsPage.title')),
  twitterTitle: computed(() => project.value?.title || t('projectsPage.title')),
  description: computed(() => project.value?.description || t('projectsPage.seo.description')),
  ogDescription: computed(() => project.value?.description || t('projectsPage.seo.description')),
  twitterDescription: computed(() => project.value?.description || t('projectsPage.seo.description')),
  ogType: 'article',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <article v-if="project" class="section">
    <div class="section-container">
      <NuxtLinkLocale class="focus-ring inline-flex rounded-button text-sm font-bold text-accent transition hover:text-accent-strong" to="/projects">
        {{ t('common.back') }}
      </NuxtLinkLocale>
      <div class="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h1 class="text-4xl font-black leading-tight text-text-primary md:text-6xl">
            {{ project.title }}
          </h1>
          <p class="mt-5 text-lg leading-8 text-text-secondary">
            {{ project.description }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="tag-chip">
              {{ tag }}
            </span>
          </div>
          <p class="mt-8 rounded-card border border-border bg-surface p-5 text-sm leading-7 text-text-secondary">
            {{ project.role }}
          </p>
        </div>
        <img class="image-frame aspect-4/3 w-full rounded-card object-cover" :src="project.image" :alt="project.title" />
      </div>
      <div class="prose prose-neutral mt-12 max-w-3xl rounded-card border border-border bg-surface p-6 dark:prose-invert">
        <p v-for="paragraph in project.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </article>
</template>
