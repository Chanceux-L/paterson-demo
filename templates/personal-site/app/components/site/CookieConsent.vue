<script setup lang="ts">
const { t } = useI18n();
const {
  preferencesOpen,
  saveChoice,
  savePreferences,
  statisticsEnabled,
  syncFromCookie,
  visible
} = useCookieConsent();

onMounted(syncFromCookie);
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-200"
    leave-to-class="translate-y-4 opacity-0"
  >
    <section
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:left-4 sm:right-auto sm:max-w-lg"
      role="dialog"
      aria-modal="false"
      :aria-label="t('cookie.title')"
    >
      <div class="card-surface rounded-card p-4">
        <div class="flex items-start gap-3">
          <span class="grid size-9 shrink-0 place-items-center rounded-button bg-accent-soft text-accent-strong">
            <UIcon name="i-lucide-cookie" class="size-5" />
          </span>
          <div class="min-w-0">
            <h2 class="text-sm font-bold text-text-primary">
              {{ t('cookie.title') }}
            </h2>
            <p class="mt-1 text-xs leading-5 text-text-secondary">
              {{ t('cookie.description') }}
            </p>
          </div>
        </div>

        <div v-if="preferencesOpen" class="mt-4 rounded-card border border-border bg-background p-3">
          <label class="flex items-start justify-between gap-3">
            <span>
              <span class="block text-xs font-bold text-text-primary">{{ t('cookie.statisticsTitle') }}</span>
              <span class="mt-1 block text-xs leading-5 text-text-secondary">{{ t('cookie.statisticsDescription') }}</span>
            </span>
            <input v-model="statisticsEnabled" class="mt-1 size-4 accent-sky-700" type="checkbox" />
          </label>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <button type="button" class="focus-ring rounded-button border border-border px-3 py-2 text-xs font-bold text-text-secondary" @click="preferencesOpen = true">
            {{ t('cookie.manage') }}
          </button>
          <button type="button" class="focus-ring rounded-button border border-border px-3 py-2 text-xs font-bold text-text-secondary" @click="saveChoice('denied')">
            {{ t('cookie.necessaryOnly') }}
          </button>
          <button
            v-if="preferencesOpen"
            type="button"
            class="focus-ring rounded-button border border-accent px-3 py-2 text-xs font-bold text-accent"
            @click="savePreferences"
          >
            {{ t('cookie.save') }}
          </button>
          <button type="button" class="focus-ring rounded-button bg-text-primary px-3 py-2 text-xs font-bold text-background" @click="saveChoice('granted')">
            {{ t('cookie.acceptAll') }}
          </button>
        </div>
      </div>
    </section>
  </Transition>
</template>
