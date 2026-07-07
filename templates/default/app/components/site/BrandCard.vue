<script setup lang="ts">
type BrandCardMeta = {
  icon?: string;
  label: string;
};

const props = withDefaults(defineProps<{
  to?: string;
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  meta?: BrandCardMeta[];
  featured?: boolean;
}>(), {
  to: '',
  image: '',
  imageAlt: '',
  description: '',
  meta: () => [],
  featured: false
});

const cardClass = computed(() => [
  'brand-card group flex h-full flex-col overflow-hidden rounded-lg border bg-background text-text-primary transition duration-200 hover:-translate-y-0.5 hover:border-brand-primary hover:shadow-md',
  props.featured ? 'border-brand-primary shadow-sm' : 'border-border shadow-sm'
]);
</script>

<template>
  <NuxtLinkLocale v-if="to" :to="to" :class="cardClass">
    <div v-if="image" class="aspect-16/10 overflow-hidden bg-surface-alt">
      <img
        class="size-full object-cover grayscale-35 brightness-95 transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
        :src="image"
        :alt="imageAlt || title"
        loading="lazy"
      />
    </div>
    <div class="flex flex-1 flex-col p-5 lg:p-6">
      <div v-if="meta.length" class="mb-3 flex flex-wrap gap-2">
        <span
          v-for="item in meta"
          :key="item.label"
          class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-primary"
        >
          <UIcon v-if="item.icon" :name="item.icon" />
          {{ item.label }}
        </span>
      </div>
      <h3 class="font-heading text-xl leading-snug font-semibold transition group-hover:text-brand-primary">
        {{ title }}
      </h3>
      <p v-if="description" class="mt-3 line-clamp-2 text-sm leading-7 text-text-secondary">
        {{ description }}
      </p>
      <span class="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-primary">
        <slot name="action">查看详情</slot>
        <UIcon class="transition group-hover:translate-x-1" name="i-lucide-arrow-right" />
      </span>
    </div>
  </NuxtLinkLocale>

  <article v-else :class="cardClass">
    <div v-if="image" class="aspect-16/10 overflow-hidden bg-surface-alt">
      <img
        class="size-full object-cover grayscale-35 brightness-95 transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
        :src="image"
        :alt="imageAlt || title"
        loading="lazy"
      />
    </div>
    <div class="flex flex-1 flex-col p-5 lg:p-6">
      <div v-if="meta.length" class="mb-3 flex flex-wrap gap-2">
        <span
          v-for="item in meta"
          :key="item.label"
          class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-primary"
        >
          <UIcon v-if="item.icon" :name="item.icon" />
          {{ item.label }}
        </span>
      </div>
      <h3 class="font-heading text-xl leading-snug font-semibold transition group-hover:text-brand-primary">
        {{ title }}
      </h3>
      <p v-if="description" class="mt-3 line-clamp-2 text-sm leading-7 text-text-secondary">
        {{ description }}
      </p>
      <slot></slot>
    </div>
  </article>
</template>
