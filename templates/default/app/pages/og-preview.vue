<script setup lang="ts">
import { siteProfile } from '@site-profile';

const { t } = useI18n();

const pageTitle = 'OG Image Preview';
const pageDescription = 'Preview the current OG image template with Chinese font rendering.';
const previewFrame = ref<HTMLElement | null>(null);
const { width: previewFrameWidth } = useElementSize(previewFrame);
const previewScale = computed(() => Math.min(previewFrameWidth.value / 1200, 1));
const previewFrameHeight = computed(() => `${630 * previewScale.value}px`);
const previewTitle = ref(String(t('pages.home.seo.title') || siteProfile.seo.ogImage.defaultTitle));
const previewDescription = ref(String(t('pages.home.seo.description') || siteProfile.seo.ogImage.defaultDescription));
const previewFontFamily = ref('Noto Sans SC');
const previewBrand = ref(siteProfile.identity.shortName);
const previewSlogan = ref(siteProfile.seo.ogImage.sloganAlt);

function resetPreview() {
  previewTitle.value = String(t('pages.home.seo.title') || siteProfile.seo.ogImage.defaultTitle);
  previewDescription.value = String(t('pages.home.seo.description') || siteProfile.seo.ogImage.defaultDescription);
  previewFontFamily.value = 'Noto Sans SC';
  previewBrand.value = siteProfile.identity.shortName;
  previewSlogan.value = siteProfile.seo.ogImage.sloganAlt;
}

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <div class="section-container py-12 lg:py-16">
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <p class="text-sm font-medium text-text-secondary">
          1200 x 630
        </p>
        <h1 class="mt-2 font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl">
          OG Image Preview
        </h1>
      </div>
      <NuxtLinkLocale
        to="/"
        class="inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" />
        Home
      </NuxtLinkLocale>
    </div>

    <div class="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
      <form class="space-y-5 rounded-md border border-border bg-background p-5" @submit.prevent>
        <label class="block">
          <span class="text-sm font-semibold text-text-primary">Title</span>
          <input
            v-model="previewTitle"
            class="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            type="text"
          />
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-text-primary">Description</span>
          <textarea
            v-model="previewDescription"
            class="mt-2 min-h-28 w-full resize-y rounded-md border border-border bg-surface px-3 py-3 text-sm leading-6 text-text-primary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          ></textarea>
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-text-primary">Brand</span>
          <input
            v-model="previewBrand"
            class="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            type="text"
          />
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-text-primary">Slogan</span>
          <input
            v-model="previewSlogan"
            class="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            type="text"
          />
        </label>

        <label class="block">
          <span class="text-sm font-semibold text-text-primary">Font Family</span>
          <input
            v-model="previewFontFamily"
            class="mt-2 min-h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            type="text"
          />
        </label>

        <button
          class="inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-primary px-4 text-sm font-semibold text-white transition hover:bg-brand-primary-hover"
          type="button"
          @click="resetPreview"
        >
          <UIcon name="i-lucide-rotate-ccw" class="size-4" />
          Reset
        </button>
      </form>

      <div class="rounded-md border border-border bg-surface-alt p-4">
        <div
          ref="previewFrame"
          class="relative mx-auto w-full max-w-300 overflow-hidden rounded-md bg-white shadow-sm"
          :style="{ height: previewFrameHeight }"
        >
          <div
            class="absolute left-0 top-0 h-157.5 w-300 origin-top-left"
            :style="{ transform: `scale(${previewScale})` }"
          >
            <SiteAppOgImagePreview
              :title="previewTitle"
              :description="previewDescription"
              :brand="previewBrand"
              :font-family="previewFontFamily"
              :slogan="previewSlogan"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
