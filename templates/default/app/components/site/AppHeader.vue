<script setup lang="ts">
import { siteProfile } from '@site-profile';
import { cn } from '#shared-template/utils/cn';

type NavItem = {
  label: string;
  english: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const phone = siteProfile.contact.phone;
const sourceRegisterUrl = siteProfile.urls.memberCenter;
const { locale, tm, t } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const { resolveTranslatedMessageTree } = useI18nMessageTree();

const menuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);

const navItems = computed<NavItem[]>(() => resolveTranslatedMessageTree(tm('nav.items')) as NavItem[]);
const isEnglishLocale = computed(() => locale.value === 'en');
const preferredMotion = usePreferredReducedMotion();
const bodyScrollLocked = useScrollLock(import.meta.client ? document.body : null);
const showScrollTop = ref(false);
const headerScrolled = ref(false);
const route = useRoute();
let scrollSyncFrame = 0;
let stopWindowScrollListener: (() => void) | null = null;

function getCurrentWindowScrollY() {
  if (import.meta.server) {
    return 0;
  }

  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function normalizeRoutePath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

function resolveMenuHref(href: string) {
  return router.resolve(localePath(href));
}

function getBaseRouteName(routeName: unknown) {
  return typeof routeName === 'string' ? routeName.replace(/___.*$/, '') : '';
}

function isSameRouteRecordOrSection(itemHref: string) {
  const itemRoute = resolveMenuHref(itemHref);
  const itemBaseName = getBaseRouteName(itemRoute.name);
  const currentBaseName = getBaseRouteName(route.name);

  return itemRoute.matched.some(itemRecord => route.matched.some(currentRecord => currentRecord.name === itemRecord.name))
    || (itemBaseName !== '' && (currentBaseName === itemBaseName || currentBaseName.startsWith(`${itemBaseName}-`)));
}

function doesQueryMatch(expectedQuery: Record<string, unknown>) {
  const expectedEntries = Object.entries(expectedQuery);

  if (expectedEntries.length === 0) {
    return Object.keys(route.query).length === 0;
  }

  return expectedEntries.every(([key, expectedValue]) => {
    const currentValue = route.query[key];
    const normalizedExpectedValue = Array.isArray(expectedValue) ? expectedValue[0] : expectedValue;
    const normalizedCurrentValue = Array.isArray(currentValue) ? currentValue[0] : currentValue;

    return String(normalizedCurrentValue ?? '') === String(normalizedExpectedValue ?? '');
  });
}

function isNavChildActive(child: NonNullable<NavItem['children']>[number]) {
  const childRoute = resolveMenuHref(child.href);
  const currentPath = normalizeRoutePath(route.path);
  const childPath = normalizeRoutePath(childRoute.path);

  return currentPath === childPath && doesQueryMatch(childRoute.query);
}

function isNavItemActive(item: NavItem) {
  return isSameRouteRecordOrSection(item.href) || item.children?.some(isNavChildActive) === true;
}

function syncWindowScrollPosition() {
  const scrollY = getCurrentWindowScrollY();

  headerScrolled.value = scrollY > 80;
  showScrollTop.value = scrollY > 500;
}

function requestScrollSync() {
  if (scrollSyncFrame) {
    return;
  }

  scrollSyncFrame = window.requestAnimationFrame(() => {
    scrollSyncFrame = 0;
    syncWindowScrollPosition();
  });
}

function openMenu() {
  menuOpen.value = true;
}

function closeMenu() {
  menuOpen.value = false;
}

function scrollToPageTop() {
  window.scrollTo({
    top: 0,
    behavior: preferredMotion.value === 'reduce' ? 'auto' : 'smooth'
  });
}

onKeyStroke('Escape', () => {
  if (menuOpen.value) {
    closeMenu();
  }
});

watch(menuOpen, (isMenuOpen) => {
  bodyScrollLocked.value = isMenuOpen;
});

onMounted(() => {
  stopWindowScrollListener = useEventListener(window, 'scroll', requestScrollSync, { passive: true });
  syncWindowScrollPosition();
  window.requestAnimationFrame(syncWindowScrollPosition);
});

onBeforeUnmount(() => {
  if (scrollSyncFrame) {
    window.cancelAnimationFrame(scrollSyncFrame);
  }

  stopWindowScrollListener?.();
  bodyScrollLocked.value = false;
});
</script>

<template>
  <header
    id="mainHeader"
    ref="headerRef"
    class="fixed inset-x-0 top-0 z-40 flex h-16 items-center border-b border-border bg-background/95 text-text-primary backdrop-blur transition-shadow duration-200"
    :class="headerScrolled ? 'shadow-sm' : ''"
  >
    <div class="mx-auto flex h-full min-w-0 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-14">
      <NuxtLinkLocale
        :class="cn(
          'flex min-w-0 items-center gap-3 text-text-primary',
          isEnglishLocale ? 'shrink-0 lg:max-w-[220px] xl:max-w-none' : 'shrink'
        )"
        to="/"
        :aria-label="t('nav.homeAria')"
      >
        <img class="h-9 w-auto shrink-0" src="/paterson/logo-paterson.png" :alt="t('nav.logoAlt')" />
        <span class="hidden h-6 w-px bg-border sm:block"></span>
        <span
          :class="cn(
            'hidden max-w-48 truncate text-xs font-medium leading-tight text-text-muted md:block',
            isEnglishLocale && 'lg:hidden 2xl:block'
          )"
        >
          {{ t('nav.sloganAlt') }}
        </span>
      </NuxtLinkLocale>

      <nav
        :class="cn(
          'hidden min-w-0 items-center lg:flex',
          isEnglishLocale ? 'gap-0 xl:gap-1' : 'gap-1'
        )"
        :aria-label="t('nav.mainNav')"
      >
        <NuxtLinkLocale
          v-for="item in navItems"
          :key="item.href"
          :class="cn(
            'whitespace-nowrap rounded-md py-2 font-medium text-text-secondary transition hover:bg-surface-alt hover:text-text-primary',
            isEnglishLocale ? 'px-2 text-[13px] xl:px-3 xl:text-sm' : 'px-3 text-sm',
            isNavItemActive(item) && 'bg-brand-primary/10 text-brand-primary'
          )"
          :to="item.href"
          :aria-current="isNavItemActive(item) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLinkLocale>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <div class="hidden sm:block">
          <SiteLanguageSwitcher />
        </div>
        <a
          :href="sourceRegisterUrl"
          :class="cn(
            'hidden h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-primary text-sm font-medium text-white transition hover:bg-brand-primary-hover md:inline-flex',
            isEnglishLocale ? 'px-3 xl:px-4' : 'px-4'
          )"
          :aria-label="t('nav.memberCenter')"
        >
          <UIcon class="size-4" name="i-lucide-message-circle" />
          <span>{{ t('nav.memberCenter') }}</span>
        </a>
        <button
          v-if="!menuOpen"
          id="menuToggle"
          type="button"
          class="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-3 text-sm font-medium text-text-primary transition hover:border-brand-primary hover:text-brand-primary active:scale-95 lg:hidden"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          :aria-label="t('nav.menu')"
          @click="openMenu"
        >
          <UIcon class="size-4" name="i-lucide-menu" />
          <span class="hidden sm:inline">{{ t('nav.menu') }}</span>
        </button>
      </div>
    </div>
  </header>

  <Transition
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-200"
    leave-to-class="opacity-0"
  >
    <aside
      v-if="menuOpen"
      id="site-menu"
      class="fixed inset-0 z-50 overflow-hidden bg-black/30 text-text-primary"
      :aria-label="t('nav.mainNav')"
    >
      <button
        class="absolute inset-0 cursor-default"
        type="button"
        :aria-label="t('common.close')"
        @click="closeMenu"
      ></button>
      <div class="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-border bg-background px-5 py-5 shadow-lg sm:px-6">
        <div class="flex h-14 shrink-0 items-center justify-between">
          <NuxtLinkLocale
            class="flex min-w-0 items-center gap-3"
            to="/"
            :aria-label="t('nav.homeAria')"
            @click="closeMenu"
          >
            <img class="h-9 w-auto shrink-0" src="/paterson/logo-paterson.png" :alt="t('nav.logoAlt')" />
          </NuxtLinkLocale>
          <button
            id="menuClose"
            type="button"
            class="grid size-10 place-items-center rounded-md border border-border bg-background text-text-secondary transition hover:border-brand-primary hover:text-brand-primary active:scale-95"
            :aria-label="t('common.close')"
            @click="closeMenu"
          >
            <UIcon class="size-5" name="i-lucide-x" />
          </button>
        </div>
        <nav class="flex flex-1 flex-col gap-1 py-6" :aria-label="t('nav.mainNav')">
          <NuxtLinkLocale
            v-for="item in navItems"
            :key="item.href"
            class="flex min-h-11 items-center justify-between rounded-md px-3 text-sm font-medium text-text-secondary transition hover:bg-surface hover:text-text-primary"
            :class="isNavItemActive(item) ? 'bg-brand-primary/10 text-brand-primary' : ''"
            :to="item.href"
            :aria-current="isNavItemActive(item) ? 'page' : undefined"
            @click="closeMenu"
          >
            <span>{{ item.label }}</span>
            <UIcon class="size-4 text-text-muted" name="i-lucide-chevron-right" />
          </NuxtLinkLocale>
        </nav>

        <div class="mt-auto grid gap-3 border-t border-border pt-5">
          <SiteLanguageSwitcher class="w-full" panel-align="start" @select="closeMenu" />
          <a
            :href="sourceRegisterUrl"
            class="flex min-h-11 items-center gap-2 rounded-md bg-brand-primary px-4 text-sm font-medium text-white transition hover:bg-brand-primary-hover"
            @click="closeMenu"
          >
            <UIcon name="i-lucide-message-circle" />
            <span>{{ t('nav.memberCenter') }}</span>
          </a>
          <a class="text-sm font-medium text-text-secondary transition hover:text-brand-primary" :href="`tel:${phone}`">
            {{ t('nav.hotline') }}: {{ phone }}
          </a>
        </div>
      </div>
    </aside>
  </Transition>

  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="translate-y-5 opacity-0"
    leave-active-class="transition duration-300"
    leave-to-class="translate-y-5 opacity-0"
  >
    <button
      v-if="showScrollTop"
      type="button"
      class="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-border bg-background text-text-primary shadow-md transition hover:-translate-y-1 hover:border-brand-primary hover:text-brand-primary active:scale-95 sm:right-8 sm:bottom-8"
      :aria-label="t('nav.search.scrollTop')"
      @click="scrollToPageTop"
    >
      <UIcon name="i-lucide-chevron-up" />
    </button>
  </Transition>
</template>
