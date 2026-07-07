<script setup lang="ts">
type FooterLink = {
  label: string;
  href: string;
};

type SocialLink = FooterLink & {
  icon: string;
};

const runtimeConfig = useRuntimeConfig();
const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const footerLinks = computed<FooterLink[]>(() => resolveTranslatedMessageTree(tm('footer.links')) as FooterLink[]);
const socialLinks = computed<SocialLink[]>(() => resolveTranslatedMessageTree(tm('footer.socials')) as SocialLink[]);
const currentYear = computed(() => runtimeConfig.public.copyrightYear);
</script>

<template>
  <footer class="border-t border-border bg-surface/80">
    <div class="section-container py-10">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:items-start">
        <div>
          <NuxtLinkLocale class="focus-ring inline-flex rounded-md text-xl font-black text-text-primary" to="/">
            {{ t('site.name') }}
          </NuxtLinkLocale>
          <p class="mt-4 max-w-md text-sm leading-7 text-text-secondary">
            {{ t('footer.bio') }}
          </p>
        </div>

        <nav class="flex flex-wrap gap-x-5 gap-y-3 lg:justify-center" :aria-label="t('footer.nav')">
          <NuxtLinkLocale
            v-for="link in footerLinks"
            :key="link.href"
            class="focus-ring rounded-button text-sm font-semibold text-text-secondary transition hover:text-accent"
            :to="link.href"
          >
            {{ link.label }}
          </NuxtLinkLocale>
        </nav>

        <div class="flex gap-3 lg:justify-end">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            class="focus-ring grid size-10 place-items-center rounded-button border border-border bg-background text-text-secondary shadow-xs transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
          >
            <UIcon :name="link.icon" class="size-5" />
          </a>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
        <div class="flex gap-4">
          <NuxtLinkLocale class="focus-ring rounded-button transition hover:text-accent" to="/privacy-policy">
            {{ t('footer.privacy') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale class="focus-ring rounded-button transition hover:text-accent" to="/terms-of-use">
            {{ t('footer.terms') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </footer>
</template>
