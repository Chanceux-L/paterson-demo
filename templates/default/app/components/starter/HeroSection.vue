<script setup lang="ts">
const props = withDefaults(defineProps<{
  badge?: string;
  cta2Href?: string;
  cta2Label?: string;
  ctaHref?: string;
  ctaLabel?: string;
  highlights?: string[];
  layout?: 'split' | 'centered';
  subtitle?: string;
  title?: string;
}>(), {
  badge: '',
  cta2Href: '',
  cta2Label: '',
  ctaHref: '',
  ctaLabel: '',
  highlights: () => [],
  layout: 'split',
  subtitle: '以水漆科技、环保整家定制和加盟支持构建可信赖的品牌官网体验。',
  title: 'Paterson 百得胜'
});

const isSplit = computed(() => props.layout === 'split');
const heroVisualPlaceholder = 'Paterson 空间形象';
</script>

<template>
  <section class="relative overflow-hidden border-b border-border bg-linear-to-b from-surface via-background to-background py-20 lg:py-28">
    <div class="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
      <div class="absolute inset-0 bg-(image:--pattern-grid) bg-size-[60px_60px] opacity-40"></div>
      <div class="absolute -right-40 -top-40 size-140 rounded-full bg-brand-primary/8 blur-3xl"></div>
    </div>

    <div class="section-container relative">
      <div :class="isSplit ? 'grid items-center gap-12 lg:grid-cols-2 lg:gap-16' : 'mx-auto max-w-4xl text-center'">
        <div>
          <StarterBadge v-if="badge" class="mb-6">
            {{ badge }}
          </StarterBadge>
          <h1 class="font-heading text-4xl font-semibold leading-tight text-text-primary md:text-5xl xl:text-6xl">
            {{ title }}
          </h1>
          <p :class="cn('mt-6 max-w-reading text-base leading-8 text-text-secondary md:text-lg md:leading-9', !isSplit && 'mx-auto')">
            {{ subtitle }}
          </p>
          <div :class="cn('mt-8 flex flex-wrap gap-3', !isSplit && 'justify-center')">
            <StarterButton v-if="ctaLabel" :to="ctaHref || '/'" size="lg">
              {{ ctaLabel }}
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </StarterButton>
            <StarterButton
              v-if="cta2Label"
              :to="cta2Href || '/contact'"
              variant="secondary"
              size="lg"
            >
              {{ cta2Label }}
            </StarterButton>
          </div>
          <div v-if="highlights.length" :class="cn('mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted', !isSplit && 'justify-center')">
            <span v-for="item in highlights" :key="item" class="inline-flex items-center gap-1.5">
              <UIcon name="i-lucide-check-circle" class="size-4 text-success" />
              {{ item }}
            </span>
          </div>
        </div>

        <div v-if="isSplit" class="relative">
          <slot>
            <div class="relative aspect-4/3 overflow-hidden rounded-card border border-border bg-surface-alt shadow-lg">
              <div class="absolute inset-0 bg-(image:--pattern-dots) bg-size-[20px_20px] opacity-50"></div>
              <div class="absolute inset-0 grid place-items-center text-center text-text-muted">
                <div>
                  <div class="mx-auto mb-4 grid size-20 place-items-center rounded-md border border-brand-primary/15 bg-brand-primary/8 text-2xl font-bold text-brand-primary">
                    B
                  </div>
                  <p class="text-overline">
                    {{ heroVisualPlaceholder }}
                  </p>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>
