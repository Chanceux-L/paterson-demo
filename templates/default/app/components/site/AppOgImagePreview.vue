<script setup lang="ts">
import { siteProfile } from '@site-profile';

defineProps<{
  brand?: string;
  title?: string;
  description?: string;
  fontFamily?: string;
  slogan?: string;
}>();

const defaultTitle = siteProfile.seo.ogImage.defaultTitle;
const defaultDescription = siteProfile.seo.ogImage.defaultDescription;
</script>

<template>
  <div
    :style="{
      background: '#ffffff',
      boxSizing: 'border-box',
      color: '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      height: '630px',
      justifyContent: 'center',
      padding: '76px',
      width: '1200px',
      fontFamily: fontFamily || 'Noto Sans SC, sans-serif'
    }"
  >
    <p :style="{ color: '#2563eb', fontSize: '30px', fontWeight: 700, lineHeight: 1.25, margin: 0 }">
      {{ brand || siteProfile.identity.shortName }}
    </p>
    <p :style="{ color: '#475569', fontSize: '24px', fontWeight: 500, lineHeight: 1.35, margin: 0 }">
      {{ slogan || siteProfile.seo.ogImage.sloganAlt }}
    </p>
    <h1 :style="{ fontSize: '64px', fontWeight: 800, lineHeight: 1.12, margin: 0, maxWidth: '940px' }">
      {{ title || defaultTitle }}
    </h1>
    <p :style="{ color: '#475569', fontSize: '30px', fontWeight: 400, lineHeight: 1.45, margin: 0, maxWidth: '900px' }">
      {{ description || defaultDescription }}
    </p>
  </div>
</template>
