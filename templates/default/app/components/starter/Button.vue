<script setup lang="ts">
defineOptions({
  name: 'StarterButton'
});

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

withDefaults(defineProps<{
  href?: string;
  size?: ButtonSize;
  to?: string;
  variant?: ButtonVariant;
}>(), {
  href: '',
  size: 'md',
  to: '',
  variant: 'primary'
});

const baseClass = 'inline-flex items-center justify-center gap-2 rounded-button font-semibold transition hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2';
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-4 text-xs',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-7 text-sm'
};
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover',
  secondary: 'border border-brand-primary/25 bg-white text-text-primary hover:border-brand-primary hover:text-brand-primary',
  ghost: 'bg-transparent text-text-secondary hover:bg-surface-alt hover:text-text-primary'
};
</script>

<template>
  <NuxtLinkLocale
    v-if="to"
    :to="to"
    :class="[baseClass, sizeClasses[size], variantClasses[variant]]"
  >
    <slot></slot>
  </NuxtLinkLocale>
  <a
    v-else-if="href"
    :href="href"
    :class="[baseClass, sizeClasses[size], variantClasses[variant]]"
  >
    <slot></slot>
  </a>
  <button
    v-else
    type="button"
    :class="[baseClass, sizeClasses[size], variantClasses[variant]]"
  >
    <slot></slot>
  </button>
</template>
