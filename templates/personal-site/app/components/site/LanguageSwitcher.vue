<script setup lang="ts">
const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  locales.value.map(item => ({
    code: item.code,
    name: item.name || item.code,
    path: switchLocalePath(item.code)
  }))
);
</script>

<template>
  <div class="flex items-center gap-1" :aria-label="t('languageSwitcher.aria')">
    <a
      v-for="item in availableLocales"
      :key="item.code"
      :class="cn(
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-button px-3 py-2 text-xs font-semibold transition hover:bg-surface-alt',
        item.code === locale ? 'bg-surface-alt text-text-primary' : 'text-text-muted'
      )"
      :href="item.path"
      :aria-current="item.code === locale ? 'true' : undefined"
    >
      {{ item.code === 'zh-CN' ? '中' : 'EN' }}
    </a>
  </div>
</template>
