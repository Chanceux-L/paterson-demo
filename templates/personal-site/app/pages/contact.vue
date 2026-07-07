<script setup lang="ts">
type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const methods = computed<ContactMethod[]>(() => resolveTranslatedMessageTree(tm('contactPage.methods')) as ContactMethod[]);

useAppSeoMeta({
  title: computed(() => t('contactPage.seo.title')),
  ogTitle: computed(() => t('contactPage.seo.title')),
  twitterTitle: computed(() => t('contactPage.seo.title')),
  description: computed(() => t('contactPage.seo.description')),
  ogDescription: computed(() => t('contactPage.seo.description')),
  twitterDescription: computed(() => t('contactPage.seo.description')),
  ogType: 'website',
  twitterCard: 'summary_large_image',
  keywords: computed(() => t('contactPage.seo.keywords'))
});
</script>

<template>
  <section class="section">
    <div class="section-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <h1 class="text-4xl font-black leading-tight text-text-primary md:text-6xl">
          {{ t('contactPage.title') }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-text-secondary">
          {{ t('contactPage.subtitle') }}
        </p>
        <div class="mt-8 grid gap-3">
          <a
            v-for="method in methods"
            :key="method.href"
            class="focus-ring card-surface flex items-center gap-3 rounded-card p-4 text-text-primary transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            :href="method.href"
          >
            <span class="grid size-10 place-items-center rounded-button bg-accent-soft text-accent-strong">
              <UIcon :name="method.icon" class="size-5" />
            </span>
            <span>
              <span class="block text-xs font-bold text-text-muted">{{ method.label }}</span>
              <span class="block text-sm font-bold">{{ method.value }}</span>
            </span>
          </a>
        </div>
      </div>

      <form class="card-surface rounded-card p-5 sm:p-7">
        <div class="grid gap-5">
          <label class="grid gap-2">
            <span class="text-sm font-bold text-text-primary">{{ t('contactPage.form.name') }}</span>
            <input class="focus-ring rounded-card border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted" type="text" :placeholder="t('contactPage.form.namePlaceholder')" />
          </label>
          <label class="grid gap-2">
            <span class="text-sm font-bold text-text-primary">{{ t('contactPage.form.email') }}</span>
            <input class="focus-ring rounded-card border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted" type="email" :placeholder="t('contactPage.form.emailPlaceholder')" />
          </label>
          <label class="grid gap-2">
            <span class="text-sm font-bold text-text-primary">{{ t('contactPage.form.message') }}</span>
            <textarea class="focus-ring min-h-36 rounded-card border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted" :placeholder="t('contactPage.form.messagePlaceholder')"></textarea>
          </label>
          <button type="button" class="primary-button">
            {{ t('contactPage.form.submit') }}
          </button>
          <p class="text-xs leading-5 text-text-muted">
            {{ t('contactPage.form.note') }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
