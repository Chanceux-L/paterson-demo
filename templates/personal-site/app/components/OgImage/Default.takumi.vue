<script setup lang="ts">
defineOptions({
  name: 'PersonalSiteDefaultOgImage'
});

defineProps<{
  description?: string;
  fontFamily?: string;
  title?: string;
}>();
</script>

<template>
  <div
    :style="{
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '70px',
      background: '#f7f7f3',
      color: '#171713',
      fontFamily: fontFamily || 'Noto Sans SC, sans-serif'
    }"
  >
    <div :style="{ display: 'flex', alignItems: 'center', gap: '18px' }">
      <div :style="{ width: '58px', height: '58px', borderRadius: '14px', background: '#171713', color: '#f7f7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: 800 }">
        P
      </div>
      <div :style="{ fontSize: '26px', fontWeight: 700, color: '#0f766e' }">
        Personal Site
      </div>
    </div>

    <div>
      <h1 :style="{ maxWidth: '920px', margin: 0, fontSize: '66px', lineHeight: 1.08, fontWeight: 800, letterSpacing: 0 }">
        {{ title || 'Personal website template' }}
      </h1>
      <p :style="{ maxWidth: '820px', margin: '26px 0 0', fontSize: '28px', lineHeight: 1.4, color: '#525247' }">
        {{ description || 'Portfolio, writing, profile, and contact pages for independent professionals.' }}
      </p>
    </div>
  </div>
</template>
