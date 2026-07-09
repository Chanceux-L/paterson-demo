<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  description?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}>(), {
  description: '',
  eyebrow: '',
  align: 'left'
});
</script>

<template>
  <header :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'">
    <p
      v-if="eyebrow"
      class="mb-4 text-overline text-brand-primary"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl xl:text-5xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-5 text-base leading-8 text-text-secondary md:text-lg md:leading-9"
      :class="align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl'"
    >
      {{ description }}
    </p>
  </header>
</template>
