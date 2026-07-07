import type { RequestResult } from '#shared-template/composables/useRequest';

export interface InquiryPayload {
  name: string;
  message: string;
  rucaptcha: string;
  email?: string;
  phone?: string;
  company?: string;
  data_id?: number;
  locale?: string;
  extra_data?: Record<string, unknown>;
  attachment_signed_ids?: string[];
  website?: string;
}

export interface InquiryResponse {
  code: number;
  message: string;
}

export interface DirectUploadSignature {
  id: string;
  signed_id: string;
  filename: string;
  byte_size: number;
  direct_upload: {
    url: string;
    headers: Record<string, string>;
  };
}

export const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/pdf',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
];

export const MAX_FILE_SIZE = 20 * 1024 * 1024;
export const MAX_ATTACHMENTS = 5;
const allowedTypeSet = new Set(ALLOWED_TYPES);

export interface InquiryValidationCopy {
  fileTooLarge: string;
  unsupportedFileType: string;
}

const defaultInquiryValidationCopy: InquiryValidationCopy = {
  unsupportedFileType: '不支持的文件类型: {name}',
  fileTooLarge: '{name} 超过 20MB'
};

function copy(template: string, params: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? ''));
}

export function useInquiries() {
  const { locale, t } = useI18n();
  const {
    request,
    apiUrl
  } = useRequest({ locale });

  const validationCopy = computed<InquiryValidationCopy>(() => ({
    unsupportedFileType: t('data.inquiries.unsupportedFileType'),
    fileTooLarge: t('data.inquiries.fileTooLarge')
  }));

  function captchaUrl() {
    return `${apiUrl('captcha')}?t=${Date.now()}`;
  }

  function refreshCaptchaUrl() {
    return captchaUrl();
  }

  async function submitInquiry(payload: InquiryPayload): Promise<InquiryResponse> {
    const result = await request.Post<RequestResult<InquiryResponse>>('inquiries', payload as never, {
      meta: { requireAppCode: true }
    }).send();

    return result.data;
  }

  async function requestDirectUpload(file: {
    name: string;
    size: number;
    type: string;
  }): Promise<DirectUploadSignature> {
    const inquiryCopy = {
      ...defaultInquiryValidationCopy,
      ...validationCopy.value
    };

    if (!allowedTypeSet.has(file.type)) {
      throw new Error(copy(inquiryCopy.unsupportedFileType, { name: file.name }));
    }

    if (file.size > MAX_FILE_SIZE) {
      throw new Error(copy(inquiryCopy.fileTooLarge, { name: file.name }));
    }

    const result = await request.Post<RequestResult<DirectUploadSignature>>('active_storage/direct_upload', {
      byte_size: file.size,
      content_type: file.type,
      filename: file.name
    }, {
      meta: { requireAppCode: true }
    }).send();

    return result.data;
  }

  async function uploadFile(signature: DirectUploadSignature, file: File): Promise<{ signed_id: string }> {
    await fetch(signature.direct_upload.url, {
      body: file,
      headers: signature.direct_upload.headers,
      method: 'PUT'
    });

    return { signed_id: signature.signed_id };
  }

  function submitInquiryMethod(payload: InquiryPayload) {
    return request.Post<RequestResult<InquiryResponse>>('inquiries', payload as never, {
      meta: {
        requireAppCode: true
      }
    });
  }

  return {
    captchaUrl,
    refreshCaptchaUrl,
    requestDirectUpload,
    submitInquiry,
    submitInquiryMethod,
    uploadFile
  };
}
