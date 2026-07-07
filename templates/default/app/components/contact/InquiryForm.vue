<script setup lang="ts">
import {
  parsePhoneNumberFromString,
  type CountryCode
} from 'libphonenumber-js';

type InquiryCopy = {
  eyebrow: string;
  title: string;
  description: string;
  name: string;
  namePlaceholder: string;
  missingName: string;
  phoneCountry: string;
  phoneCountrySearch: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  missingMessage: string;
  captcha: string;
  captchaPlaceholder: string;
  captchaAlt: string;
  missingCaptcha: string;
  submit: string;
  submitting: string;
  success: string;
  missingPhone: string;
  invalidPhone: string;
  failed: string;
};

type FormState = {
  name: string;
  phoneCountry: CountryCode;
  phone: string;
  email: string;
  company: string;
  message: string;
  rucaptcha: string;
  website: string;
};

const fieldUi = {
  root: 'space-y-2',
  label: 'text-sm font-semibold text-text-primary',
  error: 'mt-2 text-sm font-medium text-error'
};
const inputUi = {
  base: 'min-h-12 rounded-md bg-surface px-4 text-sm font-medium text-text-primary ring-1 ring-inset ring-border placeholder:text-text-muted transition duration-200 focus:bg-white focus-visible:ring-2 focus-visible:ring-brand-primary/35 disabled:cursor-not-allowed disabled:opacity-60'
};
const selectUi = {
  base: 'min-h-12 rounded-md bg-surface px-4 text-sm font-medium text-text-primary ring-1 ring-inset ring-border transition duration-200 hover:bg-white focus:bg-white focus-visible:ring-2 focus-visible:ring-brand-primary/35',
  trailingIcon: 'text-brand-primary',
  content: 'rounded-md border border-border shadow-xl',
  input: 'border-border bg-surface',
  viewport: 'max-h-72',
  item: 'cursor-pointer rounded-md px-3 py-2 text-sm transition hover:bg-surface'
};
const countrySearchInput = {
  placeholder: '',
  size: 'xs' as const,
  ui: {
    base: 'px-3 py-2 text-sm leading-5 placeholder:text-sm placeholder:leading-5'
  }
};
const textareaUi = {
  base: 'min-h-40 rounded-md bg-surface px-4 py-3 text-sm font-medium leading-7 text-text-primary ring-1 ring-inset ring-border placeholder:text-text-muted transition duration-200 focus:bg-white focus-visible:ring-2 focus-visible:ring-brand-primary/35 disabled:cursor-not-allowed disabled:opacity-60'
};
const alertUi = {
  root: 'rounded-md border px-4 py-3',
  description: 'text-sm leading-6'
};

const { locale, tm } = useI18n();
const { resolveTranslatedMessageTree } = useI18nMessageTree();
const {
  captchaUrl,
  refreshCaptchaUrl,
  submitInquiry
} = useInquiries();
const { phoneCountryOptions } = usePhoneCountries(locale);
const inquiryCopy = computed<InquiryCopy>(() => resolveTranslatedMessageTree(tm('pages.contact.inquiry')) as InquiryCopy);
const phoneCountrySearchInput = computed(() => ({
  ...countrySearchInput,
  placeholder: inquiryCopy.value.phoneCountrySearch
}));
const form = reactive<FormState>({
  name: '',
  phoneCountry: defaultPhoneCountry,
  phone: '',
  email: '',
  company: '',
  message: '',
  rucaptcha: '',
  website: ''
});
const captchaImageUrl = ref(captchaUrl());
const submitting = ref(false);
const success = ref(false);
const errorMessage = ref('');
const sectionTitleClass = 'font-heading text-3xl font-bold leading-tight text-text-primary wrap-break-word md:text-4xl xl:text-5xl';
const eyebrowClass = 'mb-4 inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/8 px-3 py-1 text-xs font-semibold uppercase text-brand-primary';
const selectedPhoneCountry = computed(() => phoneCountryOptions.value.find(option => option.value === form.phoneCountry));
const selectedCallingCode = computed(() => selectedPhoneCountry.value?.callingCode || getPhoneCallingCode(form.phoneCountry));

function reloadCaptcha() {
  captchaImageUrl.value = refreshCaptchaUrl();
}

function resetForm() {
  Object.assign(form, {
    name: '',
    phoneCountry: defaultPhoneCountry,
    phone: '',
    email: '',
    company: '',
    message: '',
    rucaptcha: '',
    website: ''
  });
}

function resolvePhoneNumber() {
  const trimmedPhone = form.phone.trim();

  if (!trimmedPhone) {
    return undefined;
  }

  return parsePhoneNumberFromString(trimmedPhone, form.phoneCountry);
}

function validateForm() {
  errorMessage.value = '';
  success.value = false;

  if (!form.name.trim()) {
    errorMessage.value = inquiryCopy.value.missingName;
    return;
  }

  if (!form.phone.trim()) {
    errorMessage.value = inquiryCopy.value.missingPhone;
    return;
  }

  const phoneNumber = resolvePhoneNumber();
  if (!phoneNumber?.isValid()) {
    errorMessage.value = inquiryCopy.value.invalidPhone;
    return;
  }

  if (!form.message.trim()) {
    errorMessage.value = inquiryCopy.value.missingMessage;
    return;
  }

  if (!form.rucaptcha.trim()) {
    errorMessage.value = inquiryCopy.value.missingCaptcha;
    return;
  }

  return phoneNumber;
}

async function handleSubmit() {
  const phoneNumber = validateForm();

  if (!phoneNumber) {
    return;
  }

  submitting.value = true;

  try {
    const response = await submitInquiry({
      name: form.name.trim(),
      phone: phoneNumber.number,
      email: form.email.trim() || undefined,
      company: form.company.trim() || undefined,
      message: form.message.trim(),
      rucaptcha: form.rucaptcha.trim(),
      website: form.website,
      locale: locale.value,
      extra_data: {
        source: 'contact_page',
        page: '/contact',
        phone_country: form.phoneCountry,
        phone_country_code: selectedCallingCode.value,
        phone_number: form.phone.trim()
      }
    });

    if (response.code !== 200) {
      throw new Error(response.message || inquiryCopy.value.failed);
    }

    success.value = true;
    resetForm();
    reloadCaptcha();
  } catch (error) {
    errorMessage.value = error instanceof Error && error.message ? error.message : inquiryCopy.value.failed;
    form.rucaptcha = '';
    reloadCaptcha();
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div class="grid gap-6">
    <div class="rounded-card border border-border bg-surface p-6">
      <p :class="eyebrowClass">
        {{ inquiryCopy.eyebrow }}
      </p>
      <h2 :class="sectionTitleClass">
        {{ inquiryCopy.title }}
      </h2>
      <p class="mt-4 text-base leading-8 text-text-secondary">
        {{ inquiryCopy.description }}
      </p>
    </div>

    <UForm
      :state="form"
      class="relative overflow-hidden rounded-card border border-border bg-background p-5 shadow-lg shadow-slate-200/60 sm:p-6 md:p-8"
      :validate-on="[]"
      @submit="handleSubmit"
    >
      <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-primary"></div>

      <input
        v-model="form.website"
        name="website"
        class="hidden"
        style="display: none;"
        tabindex="-1"
        autocomplete="off"
        aria-label="Website"
        aria-hidden="true"
      />

      <div class="grid gap-5 md:grid-cols-2">
        <UFormField
          name="name"
          :label="inquiryCopy.name"
          required
          :ui="fieldUi"
        >
          <UInput
            id="inquiry-name"
            v-model.trim="form.name"
            name="name"
            size="xl"
            variant="outline"
            color="neutral"
            required
            :aria-label="inquiryCopy.name"
            :placeholder="inquiryCopy.namePlaceholder"
            :ui="inputUi"
            class="w-full"
          />
        </UFormField>

        <UFormField
          name="phone"
          :label="inquiryCopy.phone"
          required
          :ui="fieldUi"
        >
          <UFieldGroup
            size="xl"
            class="flex w-full"
          >
            <USelectMenu
              v-model="form.phoneCountry"
              name="phone_country"
              :items="phoneCountryOptions"
              value-key="value"
              label-key="label"
              :filter-fields="['callingCode']"
              :search-input="phoneCountrySearchInput"
              size="xl"
              variant="outline"
              color="neutral"
              :aria-label="inquiryCopy.phoneCountry"
              :ui="selectUi"
              class="w-28 shrink-0 sm:w-36"
            >
              <template #default>
                <span
                  v-if="selectedPhoneCountry"
                  class="flex min-w-0 items-center gap-2"
                >
                  <span class="text-base leading-none">{{ selectedPhoneCountry.flag }}</span>
                  <span class="truncate text-sm font-semibold">{{ selectedPhoneCountry.callingCode }}</span>
                </span>
              </template>
              <template #item-label="{ item }">
                <span class="flex min-w-0 items-center gap-2">
                  <span class="text-base leading-none">{{ item.flag }}</span>
                  <span class="truncate text-sm font-semibold">{{ item.callingCode }}</span>
                </span>
              </template>
            </USelectMenu>
            <UInput
              id="inquiry-phone"
              v-model.trim="form.phone"
              name="phone"
              size="xl"
              variant="outline"
              color="neutral"
              inputmode="tel"
              autocomplete="tel"
              required
              :aria-label="inquiryCopy.phone"
              :placeholder="inquiryCopy.phonePlaceholder"
              :ui="inputUi"
              class="min-w-0 flex-1"
            />
          </UFieldGroup>
        </UFormField>

        <UFormField
          name="email"
          :label="inquiryCopy.email"
          :ui="fieldUi"
        >
          <UInput
            id="inquiry-email"
            v-model.trim="form.email"
            name="email"
            type="email"
            autocomplete="email"
            size="xl"
            variant="outline"
            color="neutral"
            :aria-label="inquiryCopy.email"
            :placeholder="inquiryCopy.emailPlaceholder"
            :ui="inputUi"
            class="w-full"
          />
        </UFormField>

        <UFormField
          name="company"
          :label="inquiryCopy.company"
          class="md:col-span-2"
          :ui="fieldUi"
        >
          <UInput
            id="inquiry-company"
            v-model.trim="form.company"
            name="company"
            autocomplete="organization"
            size="xl"
            variant="outline"
            color="neutral"
            :aria-label="inquiryCopy.company"
            :placeholder="inquiryCopy.companyPlaceholder"
            :ui="inputUi"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="mt-6 space-y-5 border-t border-border pt-6">
        <UFormField
          name="message"
          :label="inquiryCopy.message"
          required
          :ui="fieldUi"
        >
          <UTextarea
            id="inquiry-message"
            v-model.trim="form.message"
            name="message"
            required
            autoresize
            :rows="5"
            :maxrows="8"
            size="xl"
            variant="outline"
            color="neutral"
            :aria-label="inquiryCopy.message"
            :placeholder="inquiryCopy.messagePlaceholder"
            :ui="textareaUi"
            class="w-full"
          />
        </UFormField>

        <div class="grid gap-3 rounded-md border border-border bg-surface p-3 sm:grid-cols-[auto_1fr] sm:items-end sm:p-4">
          <UButton
            class="h-12 w-full overflow-hidden rounded-md border border-border bg-white p-0 transition hover:border-brand-primary/40 hover:bg-white active:scale-95 sm:w-40"
            type="button"
            variant="ghost"
            color="neutral"
            :aria-label="inquiryCopy.captchaAlt"
            @click="reloadCaptcha"
          >
            <img
              class="h-full w-full object-cover"
              :src="captchaImageUrl"
              :alt="inquiryCopy.captchaAlt"
            />
          </UButton>

          <UFormField
            name="rucaptcha"
            :label="inquiryCopy.captcha"
            required
            :ui="fieldUi"
          >
            <UInput
              id="inquiry-captcha"
              v-model.trim="form.rucaptcha"
              name="rucaptcha"
              required
              autocomplete="off"
              size="xl"
              variant="outline"
              color="neutral"
              :aria-label="inquiryCopy.captcha"
              :placeholder="inquiryCopy.captchaPlaceholder"
              :ui="inputUi"
              class="w-full"
            />
          </UFormField>
        </div>
      </div>

      <UAlert
        v-if="errorMessage"
        class="mt-5"
        color="error"
        variant="soft"
        icon="i-lucide-circle-alert"
        :description="errorMessage"
        :ui="alertUi"
      />
      <UAlert
        v-if="success"
        class="mt-5"
        color="primary"
        variant="soft"
        icon="i-lucide-check-circle"
        :description="inquiryCopy.success"
        :ui="alertUi"
      />

      <UButton
        class="mt-7 min-h-12 w-full justify-center rounded-md bg-brand-primary px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:bg-brand-primary-hover active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-44"
        type="submit"
        :loading="submitting"
        :disabled="submitting"
        color="primary"
      >
        {{ submitting ? inquiryCopy.submitting : inquiryCopy.submit }}
      </UButton>
    </UForm>
  </div>
</template>
