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
  root: 'space-y-2.5',
  label: 'text-sm font-semibold text-[#24211D]',
  error: 'mt-2 text-sm font-medium text-error'
};
const inputUi = {
  base: 'min-h-12 rounded-none bg-white px-4 text-sm font-medium text-[#24211D] ring-1 ring-inset ring-[#E5DED2] placeholder:text-[#A39C90] transition duration-200 hover:ring-[#D6CBB9] focus:bg-white focus-visible:ring-2 focus-visible:ring-[#B99A63]/45 disabled:cursor-not-allowed disabled:opacity-60'
};
const selectUi = {
  base: 'min-h-12 rounded-none bg-white px-4 text-sm font-medium text-[#24211D] ring-1 ring-inset ring-[#E5DED2] transition duration-200 hover:bg-white hover:ring-[#D6CBB9] focus:bg-white focus-visible:ring-2 focus-visible:ring-[#B99A63]/45',
  trailingIcon: 'text-[#7A5438]',
  content: 'rounded-none border border-[#E5DED2] shadow-xl',
  input: 'border-[#E5DED2] bg-white',
  viewport: 'max-h-72',
  item: 'cursor-pointer rounded-none px-3 py-2 text-sm transition hover:bg-[#F7F4EE]'
};
const countrySearchInput = {
  placeholder: '',
  size: 'xs' as const,
  ui: {
    base: 'px-3 py-2 text-sm leading-5 placeholder:text-sm placeholder:leading-5'
  }
};
const textareaUi = {
  base: 'min-h-36 rounded-none bg-white px-4 py-3 text-sm font-medium leading-7 text-[#24211D] ring-1 ring-inset ring-[#E5DED2] placeholder:text-[#A39C90] transition duration-200 hover:ring-[#D6CBB9] focus:bg-white focus-visible:ring-2 focus-visible:ring-[#B99A63]/45 disabled:cursor-not-allowed disabled:opacity-60'
};
const alertUi = {
  root: 'rounded-none border px-4 py-3',
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
const sectionTitleClass = 'font-heading text-3xl font-semibold leading-tight text-[#24211D] wrap-break-word md:text-4xl';
const eyebrowClass = 'inline-flex items-center gap-3 text-sm font-semibold text-[#7A5438]';
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
  <div>
    <UForm
      :state="form"
      class="relative overflow-hidden border border-[#E5DED2] bg-white p-5 shadow-[0_24px_70px_rgba(36,33,29,0.08)] sm:p-6 md:p-8"
      novalidate
      :validate-on="[]"
      @submit="handleSubmit"
    >
      <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#7A5438]"></div>

      <div class="mb-8 border-b border-[#E5DED2] pb-7">
        <p :class="eyebrowClass">
          <span class="h-px w-10 bg-[#B99A63]"></span>
          {{ inquiryCopy.eyebrow }}
        </p>
        <h2 :class="sectionTitleClass">
          {{ inquiryCopy.title }}
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-8 text-[#6F6A61]">
          {{ inquiryCopy.description }}
        </p>
      </div>

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

      <div class="grid gap-x-6 gap-y-5 md:grid-cols-2">
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

      <div class="mt-7 space-y-5 border-t border-[#E5DED2] pt-7">
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

        <div class="grid gap-4 border border-[#E5DED2] bg-[#F7F4EE] p-4 sm:grid-cols-[180px_1fr] sm:items-end">
          <UButton
            class="h-12 w-full overflow-hidden rounded-none border border-[#E5DED2] bg-white p-0 transition hover:border-[#B99A63] hover:bg-white active:scale-95"
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
        class="mt-8 min-h-12 w-full justify-center rounded-none bg-[#7A5438] px-8 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7A5438]/20 transition hover:-translate-y-0.5 hover:bg-[#5F3F2A] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-44"
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
