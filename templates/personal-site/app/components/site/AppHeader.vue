<script setup lang="ts">
type NavItem = {
  label: string;
  href: string;
};

const { t, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const localePath = useLocalePath();
const route = useRoute();

const menuOpen = ref(false);
const navItems = computed<NavItem[]>(() => resolveTranslatedMessageTree(tm('nav.items')) as NavItem[]);
const bodyScrollLocked = useScrollLock(import.meta.client ? document.body : null);

function closeMenu() {
  menuOpen.value = false;
}

function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

function isActive(href: string) {
  const current = normalizePath(route.path);
  const target = normalizePath(localePath(href));

  return current === target || (href !== '/' && current.startsWith(target));
}

watch(menuOpen, (isOpen) => {
  bodyScrollLocked.value = isOpen;
});

watch(() => route.fullPath, closeMenu);

onKeyStroke('Escape', closeMenu);

onBeforeUnmount(() => {
  bodyScrollLocked.value = false;
});
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
    <div class="section-container flex h-16 items-center justify-between gap-4">
      <NuxtLinkLocale class="focus-ring flex min-w-0 items-center gap-3 rounded-md" to="/" :aria-label="t('nav.homeAria')">
        <span class="grid size-9 shrink-0 place-items-center rounded-card bg-text-primary text-sm font-bold text-background shadow-sm">
          {{ t('site.monogram') }}
        </span>
        <span class="min-w-0">
          <span class="block truncate text-sm font-bold leading-tight text-text-primary sm:text-base">{{ t('site.name') }}</span>
          <span class="hidden truncate text-xs text-text-muted sm:block">{{ t('site.role') }}</span>
        </span>
      </NuxtLinkLocale>

      <nav class="hidden items-center gap-1 lg:flex" :aria-label="t('nav.mainNav')">
        <NuxtLinkLocale
          v-for="item in navItems"
          :key="item.href"
          :class="cn(
            'focus-ring rounded-button px-4 py-2 text-sm font-semibold transition hover:bg-surface hover:text-text-primary',
            isActive(item.href) ? 'bg-surface text-text-primary shadow-xs' : 'text-text-secondary'
          )"
          :to="item.href"
          :aria-current="isActive(item.href) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLinkLocale>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <div class="hidden sm:block">
          <SiteLanguageSwitcher />
        </div>
        <NuxtLinkLocale
          class="focus-ring hidden rounded-button bg-text-primary px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-strong active:scale-95 md:inline-flex"
          to="/contact"
        >
          {{ t('nav.cta') }}
        </NuxtLinkLocale>
        <button
          type="button"
          class="focus-ring inline-flex size-10 items-center justify-center rounded-button border border-border bg-surface text-text-primary transition hover:border-accent hover:text-accent active:scale-95 lg:hidden"
          :aria-expanded="menuOpen"
          :aria-label="t('nav.menu')"
          aria-controls="personal-mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <UIcon :name="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" />
        </button>
      </div>
    </div>
  </header>

  <Transition
    enter-active-class="transition duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-150"
    leave-to-class="opacity-0"
  >
    <div v-if="menuOpen" id="personal-mobile-menu" class="fixed inset-0 z-50 bg-background lg:hidden">
      <div class="section-container flex h-16 items-center justify-between border-b border-border">
        <span class="text-sm font-bold">{{ t('site.name') }}</span>
        <button
          type="button"
          class="focus-ring inline-flex size-10 items-center justify-center rounded-button border border-border bg-surface text-text-primary"
          :aria-label="t('common.close')"
          @click="closeMenu"
        >
          <UIcon name="i-lucide-x" class="size-5" />
        </button>
      </div>
      <nav class="section-container grid gap-2 py-8" :aria-label="t('nav.mainNav')">
        <NuxtLinkLocale
          v-for="item in navItems"
          :key="item.href"
          class="focus-ring card-surface rounded-card px-4 py-4 text-lg font-semibold text-text-primary"
          :to="item.href"
        >
          {{ item.label }}
        </NuxtLinkLocale>
        <div class="pt-3">
          <SiteLanguageSwitcher />
        </div>
      </nav>
    </div>
  </Transition>
</template>
