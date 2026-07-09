<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';

type HeroVariant = 'dark' | 'light' | 'compact';

type HeroBreadcrumb = {
  label: string;
  to?: string;
};

type HeroAction = {
  label: string;
  to?: string;
  href?: string;
  icon?: string;
  variant?: 'primary' | 'secondary';
};

type HeroMeta = {
  icon?: string;
  label: string;
};

const props = withDefaults(defineProps<{
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  variant?: HeroVariant;
  breadcrumbs?: HeroBreadcrumb[];
  actions?: HeroAction[];
  meta?: HeroMeta[];
}>(), {
  description: '',
  eyebrow: '',
  image: '',
  imageAlt: '',
  variant: 'dark',
  breadcrumbs: () => [],
  actions: () => [],
  meta: () => []
});

const isDark = computed(() => props.variant === 'dark' || props.variant === 'compact');
const isCompact = computed(() => props.variant === 'compact');

const heroClasses = computed(() => [
  'brand-page-hero relative overflow-hidden border-b border-border bg-surface text-text-primary',
  isCompact.value ? 'py-12 md:py-14' : 'py-16 md:py-20 lg:py-24'
]);

function actionClasses(action: HeroAction) {
  const base = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold transition hover:-translate-y-0.5 active:scale-95';

  if (action.variant === 'secondary') {
    return `${base} border border-border bg-background text-text-primary hover:border-brand-primary hover:text-brand-primary`;
  }

  return `${base} bg-brand-primary text-white hover:bg-brand-primary-hover`;
}
</script>

<template>
  <section :class="heroClasses">
    <div
      :class="cn(
        'relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:px-14',
        image && 'lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.78fr)]'
      )"
    >
      <div class="max-w-4xl">
        <nav
          v-if="breadcrumbs.length"
          class="mb-7 flex flex-wrap items-center gap-2 text-sm text-text-secondary"
          aria-label="breadcrumb"
        >
          <template v-for="(crumb, index) in breadcrumbs" :key="`${crumb.label}-${index}`">
            <NuxtLinkLocale
              v-if="crumb.to"
              class="transition hover:text-brand-primary"
              :to="crumb.to"
            >
              {{ crumb.label }}
            </NuxtLinkLocale>
            <span v-else class="text-brand-primary">{{ crumb.label }}</span>
            <span v-if="index < breadcrumbs.length - 1" aria-hidden="true">/</span>
          </template>
        </nav>

        <p
          v-if="eyebrow"
          class="mb-5 text-overline text-brand-primary"
        >
          {{ eyebrow }}
        </p>
        <h1
          :class="cn(
            'font-heading font-semibold leading-tight',
            isCompact ? 'text-3xl md:text-5xl' : 'text-4xl md:text-5xl xl:text-6xl'
          )"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="mt-6 max-w-3xl text-base leading-8 text-text-secondary md:text-lg md:leading-9"
        >
          {{ description }}
        </p>

        <div v-if="meta.length" class="mt-7 flex flex-wrap gap-3">
          <span
            v-for="item in meta"
            :key="item.label"
            :class="cn(
              'inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-text-secondary',
              isDark && 'bg-background'
            )"
          >
            <UIcon v-if="item.icon" class="text-brand-primary" :name="item.icon" />
            {{ item.label }}
          </span>
        </div>

        <div v-if="actions.length" class="mt-9 flex flex-wrap gap-4">
          <NuxtLinkLocale
            v-for="action in actions.filter(item => item.to)"
            :key="action.label"
            :class="actionClasses(action)"
            :to="action.to!"
          >
            <UIcon v-if="action.icon" :name="action.icon" />
            {{ action.label }}
          </NuxtLinkLocale>
          <a
            v-for="action in actions.filter(item => item.href && !item.to)"
            :key="action.label"
            :class="actionClasses(action)"
            :href="action.href"
          >
            <UIcon v-if="action.icon" :name="action.icon" />
            {{ action.label }}
          </a>
        </div>
      </div>

      <div v-if="image" class="relative hidden lg:block">
        <div class="relative aspect-4/5 overflow-hidden rounded-lg border border-border bg-surface-alt shadow-sm">
          <img class="size-full object-cover" :src="image" :alt="imageAlt || title" />
        </div>
      </div>
    </div>
  </section>
</template>
