<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';

const props = withDefaults(defineProps<{
  icon?: string;
  title?: string;
  description?: string;
  tone?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  containerClass?: string;
}>(), {
  icon: 'i-lucide-search-x',
  title: '',
  description: '',
  tone: 'light',
  size: 'md',
  containerClass: ''
});

const wrapperClass = computed(() => props.containerClass || {
  sm: 'grid min-h-32 place-items-center text-center',
  md: 'grid min-h-80 place-items-center text-center',
  lg: 'grid min-h-100 place-items-center text-center'
}[props.size]);

const iconWrapClass = computed(() => props.tone === 'dark'
  ? 'bg-white/8 text-brand-primary'
  : 'bg-surface-alt text-text-muted');

const titleClass = computed(() => props.tone === 'dark'
  ? 'text-white'
  : 'text-text-primary');

const descriptionClass = computed(() => props.tone === 'dark'
  ? 'text-white/55'
  : 'text-text-secondary');
</script>

<template>
  <div :class="wrapperClass">
    <div class="mx-auto max-w-xl px-5">
      <div
        :class="cn(
          'mx-auto grid place-items-center rounded-full',
          size === 'sm' ? 'mb-3 size-14' : 'mb-6 size-20',
          iconWrapClass
        )"
      >
        <UIcon :name="icon" :class="size === 'sm' ? 'size-6' : 'size-8'" />
      </div>
      <h2
        v-if="title"
        :class="cn(
          'font-heading font-semibold',
          size === 'lg' ? 'text-3xl' : 'text-xl',
          titleClass
        )"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        :class="cn('mt-3 text-sm', descriptionClass)"
      >
        {{ description }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
