<script setup lang="ts">
defineOptions({
  name: 'SitePagination'
});

type PageItem = number | '...';

const props = withDefaults(defineProps<{
  currentPage: number;
  totalPages: number;
  disabled?: boolean;
  visibleCount?: number;
}>(), {
  disabled: false,
  visibleCount: 5
});

const emit = defineEmits<{
  change: [page: number];
}>();

const { t } = useI18n();

const normalizedTotalPages = computed(() => Math.max(1, Math.floor(props.totalPages || 1)));
const normalizedCurrentPage = computed(() => Math.min(
  normalizedTotalPages.value,
  Math.max(1, Math.floor(props.currentPage || 1))
));
const pageWindowSize = computed(() => Math.max(3, props.visibleCount));

const pageNumbers = computed<PageItem[]>(() => {
  const total = normalizedTotalPages.value;
  const current = normalizedCurrentPage.value;
  const visible = pageWindowSize.value;
  const pages: PageItem[] = [];

  if (total <= visible + 2) {
    for (let page = 1; page <= total; page += 1) {
      pages.push(page);
    }

    return pages;
  }

  const half = Math.floor(visible / 2);
  let start = Math.max(2, current - half);
  const end = Math.min(total - 1, start + visible - 1);

  if (end - start + 1 < visible) {
    start = Math.max(2, end - visible + 1);
  }

  pages.push(1);
  if (start > 2) {
    pages.push('...');
  }

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (end < total - 1) {
    pages.push('...');
  }
  pages.push(total);

  return pages;
});

function selectPage(page: number) {
  if (
    props.disabled
    || page < 1
    || page > normalizedTotalPages.value
    || page === normalizedCurrentPage.value
  ) {
    return;
  }

  emit('change', page);
}
</script>

<template>
  <nav
    v-if="normalizedTotalPages > 1"
    class="mt-12 flex items-center justify-center gap-2 py-6"
    aria-label="Pagination"
  >
    <button
      type="button"
      class="grid h-11 min-w-11 place-items-center rounded-md border border-border text-sm text-text-secondary transition hover:border-brand-primary hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-30"
      :disabled="disabled || normalizedCurrentPage === 1"
      :aria-label="t('common.previousPage')"
      @click="selectPage(normalizedCurrentPage - 1)"
    >
      <UIcon name="i-lucide-chevron-left" class="size-4" />
    </button>

    <template v-for="(page, index) in pageNumbers" :key="`${page}-${index}`">
      <span v-if="page === '...'" class="px-2 text-text-muted">...</span>
      <button
        v-else
        type="button"
        class="h-11 min-w-11 rounded-md border text-sm transition disabled:cursor-not-allowed disabled:opacity-50"
        :class="page === normalizedCurrentPage
          ? 'border-brand-primary bg-brand-primary text-white'
          : 'border-border text-text-secondary hover:border-brand-primary hover:text-brand-primary'"
        :disabled="disabled"
        :aria-current="page === normalizedCurrentPage ? 'page' : undefined"
        @click="selectPage(page)"
      >
        {{ page }}
      </button>
    </template>

    <button
      type="button"
      class="grid h-11 min-w-11 place-items-center rounded-md border border-border text-sm text-text-secondary transition hover:border-brand-primary hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-30"
      :disabled="disabled || normalizedCurrentPage === normalizedTotalPages"
      :aria-label="t('common.nextPage')"
      @click="selectPage(normalizedCurrentPage + 1)"
    >
      <UIcon name="i-lucide-chevron-right" class="size-4" />
    </button>
  </nav>
</template>
