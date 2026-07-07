<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';

withDefaults(defineProps<{
  description: string;
  icon?: string;
  title: string;
  variant?: 'default' | 'compact';
}>(), {
  icon: '',
  variant: 'default'
});
</script>

<template>
  <article
    :class="cn(
      'group rounded-card border border-border bg-background transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary/35 hover:shadow-lg',
      variant === 'compact' ? 'p-5 text-center' : 'p-6'
    )"
  >
    <div
      v-if="icon"
      :class="cn(
        'mb-4 grid size-12 place-items-center rounded-md border border-brand-primary/15 bg-brand-primary/8 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white',
        variant === 'compact' && 'mx-auto'
      )"
    >
      <UIcon :name="icon" class="size-5" />
    </div>
    <h3 class="text-base font-semibold leading-snug text-text-primary">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm leading-7 text-text-secondary">
      {{ description }}
    </p>
  </article>
</template>
