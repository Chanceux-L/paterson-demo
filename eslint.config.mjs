// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    '@stylistic/semi': [2, 'always'],
    'vue/max-attributes-per-line': [1, {
      singleline: 3,
      multiline: 1
    }],
    'curly': [2, 'all'],
    '@stylistic/brace-style': [2, '1tbs', { allowSingleLine: true }],
    'max-statements-per-line': [2, { max: 2 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      caughtErrors: 'none',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    '@stylistic/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      },
      multilineDetection: 'brackets'
    }],
    '@stylistic/max-statements-per-line': ['error', { max: 3 }],
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-restricted-syntax': ['error', {
      selector: 'VElement[rawName="ULink"]',
      message: 'Use NuxtLinkLocale for links so @nuxtjs/i18n owns link localization consistently.'
    }, {
      selector: 'VElement[rawName="NuxtLink"]',
      message: 'Use NuxtLinkLocale for links so @nuxtjs/i18n owns link localization consistently.'
    }],
    'no-restricted-syntax': ['error', {
      selector: 'CallExpression[callee.name="useSeoMeta"]',
      message: 'Use useAppSeoMeta so crawler-facing titles and descriptions are centrally limited.'
    }],
    'no-restricted-globals': ['error', 'confirm', 'alert']
  }
}, {
  files: ['templates/shared/app/composables/useAppSeoMeta.ts'],
  rules: {
    'no-restricted-syntax': 'off'
  }
}, {
  files: [
    'templates/*/app/app.vue',
    'templates/*/app/error.vue',
    'templates/*/app/pages/**/*.vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}, {
  ignores: [
    'templates/shared/app/types',
    'templates/shared/public/static'
  ]
});
