<script setup lang="ts">
import type { NuxtError } from '#app';
import { getSiteLanguageDirection } from '#shared-template/utils/languages';

const props = defineProps<{
  error: NuxtError;
}>();

const { locale, t } = useI18n();
const localePath = useLocalePath();
const statusCode = computed(() => props.error.statusCode || 500);

useHead({
  title: () => `${statusCode.value} | ${t('error.title')}`,
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => getSiteLanguageDirection(locale.value)
  },
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
});

function handleError() {
  return clearError({ redirect: localePath('/') });
}
</script>

<template>
  <UApp>
    <main class="grid min-h-dvh place-items-center bg-background px-5 py-16 text-text-primary">
      <section class="card-surface w-full max-w-xl rounded-card p-8">
        <p class="font-mono text-sm font-bold text-accent">
          {{ statusCode }}
        </p>
        <h1 class="mt-4 text-3xl font-black text-text-primary md:text-5xl">
          {{ t('error.title') }}
        </h1>
        <p class="mt-4 text-base leading-7 text-text-secondary">
          {{ t('error.description') }}
        </p>
        <button type="button" class="primary-button mt-8" @click="handleError">
          {{ t('error.action') }}
        </button>
      </section>
    </main>
  </UApp>
</template>
