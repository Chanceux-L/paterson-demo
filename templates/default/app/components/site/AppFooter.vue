<script setup lang="ts">
import { siteProfile } from '@site-profile';

const { openSettings } = useCookieConsent();

const phone = siteProfile.contact.phone;
const email = siteProfile.contact.email;
const address = siteProfile.contact.address.text;
const icpRecord = siteProfile.record;
const sourceRegisterUrl = siteProfile.urls.memberCenter;
const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};
type FooterSocialCopy = {
  icon: string;
  label: string;
};

const socialEntries = [
  ['wechat', siteProfile.social.wechat],
  ['weibo', siteProfile.social.weibo],
  ['douyin', siteProfile.social.douyin],
  ['instagram', siteProfile.social.instagram],
  ['xiaohongshu', siteProfile.social.xiaohongshu],
  ['linkedin', siteProfile.social.linkedin]
] as const;

const footerSocials = computed(() => {
  const socialCopy = resolveTranslatedMessageTree(tm('footer.socials')) as FooterSocialCopy[];

  return socialEntries
    .map(([key, href], index) => ({
      key,
      href,
      ...socialCopy[index]
    }))
    .filter(social => Boolean(social.href && social.icon && social.label));
});
const footerColumns = computed<Array<{ title: string; links: FooterLink[] }>>(() =>
  (resolveTranslatedMessageTree(tm('footer.columns')) as Array<{ title: string; links: FooterLink[] }>).map(column => ({
    ...column,
    links: column.links.map(link => ({
      ...link,
      href: link.href === 'sourceRegisterUrl' ? sourceRegisterUrl : link.href
    }))
  }))
);

function openCookieConsentSettings() {
  openSettings();
}
</script>

<template>
  <footer class="border-t border-border bg-surface text-text-primary">
    <div class="px-5 py-12 sm:px-8 lg:px-14">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
          <div class="lg:pr-8">
            <div class="flex items-center">
              <NuxtLinkLocale class="font-heading text-xl font-semibold leading-tight text-text-primary" to="/" :aria-label="t('nav.homeAria')">
                {{ t('site.name') }}
              </NuxtLinkLocale>
            </div>
            <p class="mt-5 text-sm leading-7 text-text-secondary">
              {{ t('footer.brandDescription') }}
            </p>
            <strong class="font-heading mt-5 block text-sm font-semibold text-brand-primary">{{ t('footer.slogan') }}</strong>
            <div class="mt-5 flex gap-3">
              <a
                v-for="social in footerSocials"
                :key="social.key"
                class="grid size-10 place-items-center rounded-md border border-border bg-background text-text-secondary transition hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary"
                :href="social.href"
                :title="social.label"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
              >
                <UIcon :name="social.icon" />
              </a>
            </div>
          </div>
          <div v-for="column in footerColumns" :key="column.title" class="pt-2">
            <h3 class="border-b border-border pb-3 text-sm font-semibold text-text-primary">
              {{ column.title }}
            </h3>
            <div class="mt-4 grid gap-1">
              <template v-for="link in column.links" :key="link.href">
                <a
                  v-if="link.external"
                  class="py-1.5 text-sm text-text-secondary transition hover:text-brand-primary"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.label }}
                </a>
                <NuxtLinkLocale
                  v-else
                  class="py-1.5 text-sm text-text-secondary transition hover:text-brand-primary"
                  :to="link.href"
                >
                  {{ link.label }}
                </NuxtLinkLocale>
              </template>
            </div>
          </div>
          <div class="pt-2">
            <h3 class="border-b border-border pb-3 text-sm font-semibold text-text-primary">
              {{ t('footer.followUs') }}
            </h3>
            <div class="mt-5 grid gap-5">
              <div class="flex items-start gap-3">
                <span class="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-brand-primary">
                  <UIcon name="i-lucide-phone" />
                </span>
                <div>
                  <span class="block text-xs font-medium uppercase text-text-muted">{{ t('nav.hotline') }}</span>
                  <a class="text-sm text-text-secondary hover:text-brand-primary" :href="`tel:${phone}`">{{ phone }}</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-brand-primary">
                  <UIcon name="i-lucide-mail" />
                </span>
                <div>
                  <span class="block text-xs font-medium uppercase text-text-muted">{{ t('footer.email') }}</span>
                  <a class="text-sm text-text-secondary hover:text-brand-primary" :href="`mailto:${email}`">{{ email }}</a>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-brand-primary">
                  <UIcon name="i-lucide-map-pin" />
                </span>
                <div>
                  <span class="block text-xs font-medium uppercase text-text-muted">{{ t('footer.address') }}</span>
                  <span class="text-sm leading-6 text-text-secondary">{{ address }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-border pt-8 text-center">
          <span class="text-sm text-text-muted">{{ t('footer.tagline') }}</span>
        </div>
      </div>
    </div>
    <div class="border-t border-border bg-background px-5 py-6 sm:px-8 lg:px-14">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {{ t('footer.copyright') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            class="transition hover:text-brand-primary"
            :href="icpRecord.url"
            target="_blank"
            rel="noopener noreferrer"
          >{{ icpRecord.icp }}</a>
          <span>|</span>
          <NuxtLinkLocale class="transition hover:text-brand-primary" to="/privacy-policy">
            {{ t('footer.privacy') }}
          </NuxtLinkLocale>
          <span>|</span>
          <NuxtLinkLocale class="transition hover:text-brand-primary" to="/terms-of-use">
            {{ t('footer.terms') }}
          </NuxtLinkLocale>
          <span>|</span>
          <button type="button" class="transition hover:text-brand-primary" @click="openCookieConsentSettings">
            {{ t('footer.cookieSettings') }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
