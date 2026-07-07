<script setup lang="ts">
defineOptions({
  name: 'StarterBadge'
});
</script>

<template>
  <span class="inline-flex items-center rounded-full border border-brand-primary/15 bg-brand-primary/8 px-3 py-1 text-xs font-semibold text-brand-primary">
    <slot></slot>
  </span>
</template>
