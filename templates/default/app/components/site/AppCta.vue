<script setup lang="ts">
import { siteProfile } from '@site-profile';

type CtaAction = {
  label: string;
  to: string;
  /** lucide icon name，可省略 */
  icon?: string;
};

const { t } = useI18n();
const props = withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    action?: CtaAction;
    phone?: string;
    contactLabel?: string;
    /** 装饰用的巨字背景文案，留空则不渲染 */
    bgText?: string | null;
  }>(),
  {
    title: undefined,
    description: undefined,
    action: undefined,
    phone: siteProfile.contact.phone,
    contactLabel: undefined,
    bgText: undefined
  }
);

const title = computed(() => props.title ?? t('cta.title'));
const description = computed(() => props.description ?? t('cta.description'));
const action = computed(() => props.action ?? { label: t('cta.action'), to: '/data', icon: 'i-lucide-layout-grid' });
const contactLabel = computed(() => props.contactLabel ?? t('cta.contactLabel'));
</script>

<template>
  <section class="border-y border-border bg-surface py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-14">
      <h2 class="font-heading text-3xl font-semibold leading-tight text-text-primary md:text-4xl xl:text-5xl">
        {{ title }}
      </h2>
      <p v-if="description" class="mx-auto mt-5 max-w-2xl text-base leading-loose text-text-secondary md:text-lg">
        {{ description }}
      </p>
      <div v-if="action" class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <NuxtLinkLocale
          :to="action.to"
          class="inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-primary-hover active:scale-95"
        >
          <UIcon v-if="action.icon" :name="action.icon" class="size-4" />
          {{ action.label }}
        </NuxtLinkLocale>
      </div>
      <div v-if="phone" class="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-text-secondary">
        <span>{{ contactLabel }}</span>
        <a
          :href="`tel:${phone}`"
          class="font-mono text-xl font-semibold text-text-primary transition hover:text-brand-primary"
        >{{ phone }}</a>
      </div>
    </div>
  </section>
</template>
