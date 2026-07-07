<script setup lang="ts">
import type { NuxtError } from '#app';

interface ErrorPageMessageCopy {
  eyebrow: string;
  title: string;
  description: string;
}

type ErrorPageKind = 'badRequest' | 'unauthorized' | 'forbidden' | 'notFound' | 'serverError' | 'unavailable' | 'defaultError';

const props = defineProps<{
  error: NuxtError;
}>();

const { locale, t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const localePath = useLocalePath();

const statusCode = computed(() => props.error.statusCode || 500);
const errorPageKind = computed(() => getErrorPageKind(statusCode.value));
const errorTypes = computed(() => resolveTranslatedMessageTree(tm('error.types')) as Record<ErrorPageKind, ErrorPageMessageCopy>);
const selectedErrorCopy = computed(() => errorTypes.value[errorPageKind.value] ?? errorTypes.value.defaultError);
const pageEyebrow = computed(() => selectedErrorCopy.value.eyebrow);
const pageTitle = computed(() => selectedErrorCopy.value.title);
const errorStatusMessage = computed(() => getString(props.error.statusMessage));
const pageDescription = computed(() => errorPageKind.value === 'notFound'
  ? selectedErrorCopy.value.description
  : errorStatusMessage.value || selectedErrorCopy.value.description);
const pageDirection = computed(() => getSiteLanguageDirection(locale.value));

useHead({
  title: () => `${statusCode.value} · ${pageTitle.value}`,
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => pageDirection.value
  },
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
});

function handleError(path: string) {
  return clearError({ redirect: localePath(path) });
}

function getErrorPageKind(statusCode: number): ErrorPageKind {
  switch (statusCode) {
    case 400:
      return 'badRequest';
    case 401:
      return 'unauthorized';
    case 403:
      return 'forbidden';
    case 404:
      return 'notFound';
    case 503:
      return 'unavailable';
    default:
      if (statusCode >= 500) {
        return 'serverError';
      }

      return 'defaultError';
  }
}

function getString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : '';
}
</script>

<template>
  <UApp>
    <main class="min-h-dvh overflow-hidden bg-surface font-body text-text-primary">
      <section class="grid min-h-dvh items-center px-5 py-24 sm:px-8 lg:px-14">
        <div class="mx-auto w-full max-w-3xl rounded-lg border border-border bg-background p-7 shadow-sm md:p-10">
          <p class="text-sm font-semibold uppercase text-brand-primary">
            {{ pageEyebrow }}
          </p>
          <p class="mt-6 font-mono text-6xl font-bold leading-none text-text-primary md:text-7xl">
            {{ statusCode }}
          </p>
          <p class="mt-4 text-sm font-medium text-text-muted">
            {{ t('error.pageLabel') }} · {{ t('site.name') }}
          </p>

          <h1 class="font-heading mt-8 text-3xl font-bold leading-tight text-text-primary md:text-5xl">
            {{ pageTitle }}
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-text-secondary md:text-lg md:leading-9">
            {{ pageDescription }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              class="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-hover active:scale-95"
              type="button"
              @click="handleError('/')"
            >
              {{ t('error.action') }}
            </button>
            <button
              class="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-brand-primary hover:text-brand-primary active:scale-95"
              type="button"
              @click="handleError('/contact')"
            >
              {{ t('error.contactAction') }}
            </button>
          </div>
        </div>
      </section>
    </main>
  </UApp>
</template>
