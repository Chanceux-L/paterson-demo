<script setup lang="ts">
defineOptions({
  name: 'DefaultOgImage'
});

defineProps<{
  brand?: string;
  title?: string;
  description?: string;
  fontFamily?: string;
  slogan?: string;
}>();
</script>

<template>
  <SiteAppOgImagePreview
    :brand="brand"
    :title="title"
    :description="description"
    :font-family="fontFamily"
    :slogan="slogan"
  />
</template>
