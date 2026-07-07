<script setup lang="ts">
withDefaults(defineProps<{
  category?: string;
  detailPath: string;
  summary: string;
  title: string;
}>(), {
  category: ''
});

const imagePlaceholder = 'Paterson 产品空间';
const linkText = '查看详情';
</script>

<template>
  <NuxtLinkLocale
    :to="detailPath"
    class="group block overflow-hidden rounded-card border border-border bg-background transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary/35 hover:shadow-lg"
  >
    <div class="grid aspect-video place-items-center bg-surface-alt text-xs font-semibold tracking-widest text-text-muted" v-text="imagePlaceholder"></div>
    <div class="p-5">
      <StarterBadge v-if="category" class="mb-3">
        {{ category }}
      </StarterBadge>
      <h3 class="text-lg font-semibold leading-snug text-text-primary transition group-hover:text-brand-primary">
        {{ title }}
      </h3>
      <p class="mt-2 line-clamp-2 text-sm leading-7 text-text-secondary">
        {{ summary }}
      </p>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
        {{ linkText }}
        <UIcon name="i-lucide-arrow-right" class="size-4" />
      </span>
    </div>
  </NuxtLinkLocale>
</template>
