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

onMounted(() => {
  syncFromCookie();
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="translate-y-5 opacity-0"
    leave-active-class="transition duration-300"
    leave-to-class="translate-y-5 opacity-0"
  >
    <section
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5 lg:inset-x-auto lg:left-5 lg:max-w-2xl"
      role="dialog"
      aria-modal="false"
      :aria-label="t('cookie.title')"
    >
      <div :class="cn('mx-auto overflow-hidden rounded-md border border-brand-primary/20 bg-white shadow-xl shadow-black/15', preferencesOpen ? 'max-w-2xl' : 'max-w-md')">
        <div :class="cn('grid gap-3 p-3.5 sm:p-4', preferencesOpen && 'lg:flex lg:items-start')">
          <div :class="cn('min-w-0', preferencesOpen && 'lg:flex-1')">
            <div class="flex items-center gap-2.5">
              <span class="grid size-7 shrink-0 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
                <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
              </span>
              <h2 class="font-heading text-base font-semibold tracking-wide text-text-primary">
                {{ t('cookie.title') }}
              </h2>
            </div>
            <p class="mt-2 text-xs leading-5 text-text-secondary">
              {{ t('cookie.description') }}
            </p>

            <div v-if="preferencesOpen" class="mt-4 grid gap-2.5">
              <div class="rounded-md border border-border bg-surface p-3">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <h3 class="text-xs font-semibold text-text-primary">
                      {{ t('cookie.necessaryTitle') }}
                    </h3>
                    <p class="mt-1 text-xs leading-5 text-text-secondary">
                      {{ t('cookie.necessaryDescription') }}
                    </p>
                  </div>
                  <span class="shrink-0 rounded-full bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold text-brand-primary">
                    {{ t('cookie.alwaysOn') }}
                  </span>
                </div>
              </div>

              <div class="rounded-md border border-border bg-surface p-3">
                <label class="flex cursor-pointer items-start justify-between gap-3">
                  <span class="min-w-0">
                    <span class="block text-xs font-semibold text-text-primary">{{ t('cookie.statisticsTitle') }}</span>
                    <span class="mt-1 block text-xs leading-5 text-text-secondary">{{ t('cookie.statisticsDescription') }}</span>
                  </span>
                  <span
                    class="relative mt-0.5 inline-flex h-6 w-10 shrink-0 items-center rounded-full border transition"
                    :class="statisticsEnabled ? 'border-brand-primary bg-brand-primary' : 'border-neutral-300 bg-neutral-200'"
                  >
                    <input v-model="statisticsEnabled" class="sr-only" type="checkbox" />
                    <span
                      class="size-4 rounded-full bg-white shadow transition"
                      :class="statisticsEnabled ? 'translate-x-5' : 'translate-x-1'"
                    ></span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div :class="cn('grid grid-cols-3 gap-2', preferencesOpen && 'sm:flex sm:flex-row lg:w-32 lg:flex-col')">
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-brand-primary/30 px-3 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary/10"
              @click="preferencesOpen = true"
            >
              {{ t('cookie.manage') }}
            </button>
            <button
              type="button"
              class="inline-flex justify-center rounded-md border border-neutral-300 px-3 py-2 text-xs font-semibold text-text-secondary transition hover:border-text-secondary hover:text-text-primary"
              @click="saveChoice('denied')"
            >
              {{ t('cookie.necessaryOnly') }}
            </button>
            <button
              v-if="preferencesOpen"
              type="button"
              class="inline-flex justify-center rounded-md border border-brand-primary/30 bg-brand-primary/10 px-3 py-2 text-xs font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-brand-primary/15"
              @click="savePreferences"
            >
              {{ t('cookie.save') }}
            </button>
            <button
              type="button"
              class="inline-flex justify-center rounded-md bg-brand-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-brand-primary-hover"
              @click="saveChoice('granted')"
            >
              {{ t('cookie.acceptAll') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
