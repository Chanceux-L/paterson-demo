<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';

type FeatureItem = {
  description: string;
  href?: string;
  icon?: string;
  title: string;
};

withDefaults(defineProps<{
  items: FeatureItem[];
  subtitle?: string;
  title: string;
  variant?: 'grid-2' | 'grid-3' | 'grid-4' | 'zigzag';
}>(), {
  subtitle: '',
  variant: 'grid-3'
});

const gridClass: Record<string, string> = {
  'grid-2': 'grid gap-6 md:grid-cols-2',
  'grid-3': 'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
  'grid-4': 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'
};
const featureLinkText = '了解更多';
const featureVisualPlaceholder = 'Paterson 品牌空间';
</script>

<template>
  <section class="section">
    <div class="section-container">
      <header class="mb-12 max-w-reading">
        <h2 class="font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-4 text-base leading-8 text-text-secondary md:text-lg">
          {{ subtitle }}
        </p>
      </header>

      <div v-if="variant === 'zigzag'" class="space-y-16">
        <article
          v-for="(item, index) in items"
          :key="item.title"
          :class="cn(
            'grid items-center gap-8 lg:grid-cols-2 lg:gap-14',
            index % 2 === 1 && 'lg:[&>*:first-child]:order-2'
          )"
        >
          <div>
            <div v-if="item.icon" class="mb-5 grid size-12 place-items-center rounded-md border border-brand-primary/15 bg-brand-primary/8 text-brand-primary">
              <UIcon :name="item.icon" class="size-5" />
            </div>
            <h3 class="font-heading text-2xl font-semibold leading-snug text-text-primary">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-base leading-8 text-text-secondary">
              {{ item.description }}
            </p>
            <NuxtLinkLocale v-if="item.href" :to="item.href" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover">
              {{ featureLinkText }}
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </NuxtLinkLocale>
          </div>
          <div class="relative aspect-video overflow-hidden rounded-card border border-border bg-surface-alt">
            <div class="absolute inset-0 bg-(image:--pattern-dots) bg-size-[20px_20px] opacity-50"></div>
            <div class="absolute inset-0 grid place-items-center text-text-muted">
              <UIcon v-if="item.icon" :name="item.icon" class="size-14 opacity-25" />
              <span v-else class="text-xs font-semibold tracking-widest uppercase">{{ featureVisualPlaceholder }}</span>
            </div>
          </div>
        </article>
      </div>

      <div v-else :class="gridClass[variant]">
        <StarterContentCard
          v-for="item in items"
          :key="item.title"
          :description="item.description"
          :icon="item.icon"
          :title="item.title"
        />
      </div>
    </div>
  </section>
</template>
