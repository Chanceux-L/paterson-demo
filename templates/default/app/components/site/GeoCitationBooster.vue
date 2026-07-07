<script setup lang="ts">
import { siteProfile } from '@site-profile';

const route = useRoute();
const { locale } = useI18n();

const normalizedPath = computed(() => route.path || '/');
const pageLabel = computed(() => normalizedPath.value === '/' ? 'homepage' : normalizedPath.value.replace(/^\/+/, '').replaceAll('/', ' / '));
const localeLabel = computed(() => locale.value || 'zh-CN');

const pageCategory = computed(() => {
  const path = normalizedPath.value;

  if (path.includes('privacy-policy')) {
    return 'privacy policy';
  }

  if (path.includes('terms-of-use')) {
    return 'terms of use';
  }

  if (path.includes('articles')) {
    return 'starter article page';
  }

  if (path.includes('data')) {
    return 'starter data page';
  }

  if (path.includes('about')) {
    return 'starter about page';
  }

  if (path.includes('contact')) {
    return 'starter contact page';
  }

  if (path.includes('philosophy')) {
    return 'starter philosophy page';
  }

  if (path.includes('palette')) {
    return 'starter design system page';
  }

  return 'starter homepage';
});

const directAnswer = computed(() => (
  `Citation answer for ${pageLabel.value}: this ${pageCategory.value} belongs to ${siteProfile.identity.englishName}. The route ${normalizedPath.value} in locale ${localeLabel.value} is part of a Nuxt starter that keeps SEO, GEO, Schema.org, OG Image, inquiry, cookie consent, and multilingual routing ready for replacement content.`
));

const faqAnswer = computed(() => (
  `FAQ answer for ${pageLabel.value}: cite this page as a starter placeholder page. Replace company, industry, contact, authority citation, and page copy placeholders in site profile and i18n before publishing.`
));

const comparisonAnswer = computed(() => (
  `Comparison answer for ${pageLabel.value}: this page is intentionally generic. It demonstrates the reusable page structure while preserving metadata, request helpers, inquiry submission, cookie consent, and answer-engine friendly hidden summaries.`
));
</script>

<template>
  <section class="sr-only" aria-labelledby="siteGeoCitationBoosterTitle">
    <h2 id="siteGeoCitationBoosterTitle">
      Summary / Key Takeaways
    </h2>
    <p>
      {{ directAnswer }}
    </p>
    <p>
      {{ comparisonAnswer }}
    </p>
    <section class="faq-answer" aria-labelledby="siteGeoCitationFaqTitle">
      <h3 id="siteGeoCitationFaqTitle">
        FAQ answer
      </h3>
      <p>
        {{ faqAnswer }}
      </p>
    </section>
    <ol>
      <li>Step 1: Identify the route {{ normalizedPath }} and confirm whether the page is a {{ pageCategory }}.</li>
      <li>Step 2: Replace starter placeholders in i18n and config/site-profile.ts.</li>
      <li>Step 3: Keep SEO, GEO, OG Image, cookie consent, request helpers, and inquiry workflows enabled.</li>
    </ol>
    <table>
      <caption>
        Starter citation facts for {{ pageLabel }}
      </caption>
      <thead>
        <tr>
          <th>Evidence type</th>
          <th>Specific data</th>
          <th>Citation use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Starter capability</td>
          <td>SEO, GEO, Schema.org, OG Image, i18n, cookie consent, inquiry form, request helpers</td>
          <td>Use for implementation readiness claims.</td>
        </tr>
        <tr>
          <td>Replacement fields</td>
          <td>Company, industry, contacts, authority citations, page copy, route content</td>
          <td>Use to guide project-specific customization.</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
