<script setup lang="ts">
import { cn } from '#shared-template/utils/cn';
import { prioritizeSelectedLanguage, siteLanguages, type SiteLanguageCode } from '#shared-template/utils/languages';

const props = withDefaults(defineProps<{
  panelAlign?: 'start' | 'center' | 'end';
}>(), {
  panelAlign: 'end'
});

const emit = defineEmits<{
  select: [code: string];
}>();

const { locale, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const publicAsset = usePublicAsset();

const currentLanguage = computed(() => siteLanguages.find(language => language.code === locale.value) ?? siteLanguages[0]!);
const orderedLanguages = computed(() => prioritizeSelectedLanguage(siteLanguages, locale.value));
const popoverContent = computed(() => ({
  align: props.panelAlign,
  side: 'bottom' as const,
  sideOffset: 10,
  collisionPadding: 16
}));

function selectLanguage(code: SiteLanguageCode, close: () => void) {
  const shouldNavigate = code !== locale.value;

  emit('select', code);
  close();

  if (shouldNavigate && import.meta.client) {
    window.location.assign(publicAsset(switchLocalePath(code)));
  }
}
</script>

<template>
  <UPopover
    :content="popoverContent"
    :ui="{ content: 'w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-md border border-border bg-background p-0 text-text-primary shadow-lg ring-0' }"
  >
    <button
      type="button"
      class="inline-flex h-10 items-center gap-1.5 rounded-md px-2 text-sm font-semibold text-text-secondary transition hover:bg-surface hover:text-brand-primary active:scale-95"
      :aria-label="`${currentLanguage.displayCode}, ${t('languageSwitcher.aria')}`"
    >
      <UIcon class="size-5 shrink-0" :name="currentLanguage.flagIcon" />
      <span>{{ currentLanguage.displayCode }}</span>
      <UIcon class="size-3.5 text-text-muted" name="i-lucide-chevron-down" />
    </button>

    <template #content="{ close }">
      <div class="border-b border-border px-4 py-3">
        <span class="block text-xs font-semibold uppercase text-text-muted">{{ t('languageSwitcher.label') }}</span>
        <span class="mt-1 block text-sm text-text-primary">{{ currentLanguage.localeName }}</span>
      </div>
      <div
        class="max-h-[min(28rem,70vh)] overflow-y-auto overscroll-contain p-2"
        @wheel.stop
        @touchmove.stop
      >
        <button
          v-for="language in orderedLanguages"
          :key="language.code"
          type="button"
          :class="cn(
            'box-border flex w-full items-center justify-start rounded-md px-3 py-2.5 text-left text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary',
            language.code === locale && 'bg-brand-primary/10 text-brand-primary'
          )"
          @click="selectLanguage(language.code, close)"
        >
          <span class="flex min-w-0 flex-1 items-center gap-3">
            <UIcon class="size-5 shrink-0" :name="language.flagIcon" />
            <span class="min-w-0 flex-1 truncate">{{ language.localeName }}</span>
          </span>

          <span class="ml-auto flex shrink-0 items-center gap-2">
            <span class="shrink-0 font-mono text-xs text-text-muted">{{ language.displayCode }}</span>
            <UIcon v-if="language.code === locale" class="size-4 shrink-0 text-brand-primary" name="i-lucide-check" />
          </span>
        </button>
      </div>
    </template>
  </UPopover>
</template>
