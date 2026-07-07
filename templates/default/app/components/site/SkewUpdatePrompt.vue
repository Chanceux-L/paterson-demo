<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <SkewNotification v-slot="{ isOpen, reload, dismiss }">
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="translate-y-5 opacity-0"
      leave-active-class="transition duration-200"
      leave-to-class="translate-y-5 opacity-0"
    >
      <section
        v-if="isOpen"
        class="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5 lg:inset-x-auto lg:right-5 lg:max-w-md"
        role="status"
        aria-live="polite"
        :aria-label="t('skewUpdate.title')"
      >
        <div class="rounded-md border border-brand-primary/20 bg-white p-3.5 shadow-xl shadow-black/15 sm:p-4">
          <div class="flex items-start gap-3">
            <span class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
              <UIcon name="i-lucide-refresh-cw" class="size-4" />
            </span>
            <div class="min-w-0 flex-1">
              <h2 class="font-heading text-sm font-semibold text-text-primary">
                {{ t('skewUpdate.title') }}
              </h2>
              <p class="mt-1 text-xs leading-5 text-text-secondary">
                {{ t('skewUpdate.description') }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <UButton
                  type="button"
                  size="sm"
                  color="primary"
                  icon="i-lucide-refresh-cw"
                  class="rounded-md"
                  @click="reload"
                >
                  {{ t('skewUpdate.refresh') }}
                </UButton>
                <UButton
                  type="button"
                  size="sm"
                  color="neutral"
                  variant="ghost"
                  class="rounded-md"
                  @click="dismiss"
                >
                  {{ t('skewUpdate.dismiss') }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  </SkewNotification>
</template>
