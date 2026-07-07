<script setup lang="ts">
import { siteProfile } from '@site-profile';

const { t } = useI18n();
const pageTitle = computed(() => t('contactPage.seo.title'));
const pageDescription = computed(() => t('contactPage.seo.description'));
const pageKeywords = computed(() => t('contactPage.seo.keywords'));

const contactMethods = computed(() => [
  { icon: 'i-lucide-map-pin', label: t('contactPage.labels.address'), value: siteProfile.contact.address.text, href: '' },
  { icon: 'i-lucide-phone', label: t('contactPage.labels.phone'), value: siteProfile.contact.phone, href: `tel:${siteProfile.contact.phone}` },
  { icon: 'i-lucide-mail', label: t('contactPage.labels.email'), value: siteProfile.contact.email, href: `mailto:${siteProfile.contact.email}` },
  { icon: 'i-lucide-clock', label: t('contactPage.labels.hours'), value: t('contactPage.hours'), href: '' }
]);

useAppSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  twitterTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  twitterDescription: pageDescription,
  ogType: 'website',
  ogSiteName: t('site.name'),
  twitterCard: 'summary_large_image',
  keywords: pageKeywords
});
</script>

<template>
  <div>
    <SiteBrandPageHero
      :title="t('contactPage.title')"
      :description="t('contactPage.subtitle')"
      variant="light"
    />

    <section class="section">
      <div class="section-container">
        <div class="grid gap-12 lg:grid-cols-5">
          <aside class="lg:col-span-2">
            <h2 class="mb-6 font-heading text-2xl font-bold text-text-primary">
              {{ t('contactPage.infoTitle') }}
            </h2>
            <div class="grid gap-4">
              <component
                :is="method.href ? 'a' : 'div'"
                v-for="method in contactMethods"
                :key="method.label"
                class="flex items-start gap-4 rounded-card border border-border bg-background p-4 transition hover:border-brand-primary/30 hover:shadow-sm"
                :href="method.href || undefined"
              >
                <span class="grid size-10 shrink-0 place-items-center rounded-md border border-brand-primary/15 bg-brand-primary/8 text-brand-primary">
                  <UIcon :name="method.icon" class="size-5" />
                </span>
                <span>
                  <span class="block text-sm font-semibold text-text-primary">{{ method.label }}</span>
                  <span class="mt-1 block text-sm leading-6 text-text-secondary">{{ method.value }}</span>
                </span>
              </component>
            </div>
          </aside>

          <div class="lg:col-span-3">
            <ContactInquiryForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
