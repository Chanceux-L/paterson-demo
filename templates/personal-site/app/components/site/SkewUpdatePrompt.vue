<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <SkewNotification v-slot="{ isOpen, reload, dismiss }">
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="translate-y-4 opacity-0"
      leave-active-class="transition duration-200"
      leave-to-class="translate-y-4 opacity-0"
    >
      <section
        v-if="isOpen"
        class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:left-auto sm:right-4 sm:max-w-md"
        role="status"
        aria-live="polite"
        :aria-label="t('skewUpdate.title')"
      >
        <div class="card-surface rounded-card p-4">
          <h2 class="text-sm font-bold text-text-primary">
            {{ t('skewUpdate.title') }}
          </h2>
          <p class="mt-1 text-xs leading-5 text-text-secondary">
            {{ t('skewUpdate.description') }}
          </p>
          <div class="mt-4 flex gap-2">
            <button type="button" class="focus-ring rounded-button bg-text-primary px-3 py-2 text-xs font-bold text-background" @click="reload">
              {{ t('skewUpdate.refresh') }}
            </button>
            <button type="button" class="focus-ring rounded-button border border-border px-3 py-2 text-xs font-bold text-text-secondary" @click="dismiss">
              {{ t('skewUpdate.dismiss') }}
            </button>
          </div>
        </div>
      </section>
    </Transition>
  </SkewNotification>
</template>
