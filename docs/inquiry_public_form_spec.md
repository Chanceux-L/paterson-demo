# 询盘表单生成契约（Public API）

[返回 README](../README.md)

相关文档：[项目目录结构](project-structure.md) · [部署环境变量说明](deployment-env.md)

## 文档定位

本文件供 **clawme-pro-agent / OpenClaw 在生成站点询盘表单时使用**，亦适用于开发者手写询盘表单时的端到端集成。

后端实现的对应模块：

- `backend/app/services/public_api/v1.rb`
- `backend/app/services/public_api/v1/captcha.rb`
- `backend/app/services/public_api/v1/active_storage.rb`
- `backend/app/services/public_api/v1/inquiries.rb`
- `backend/app/services/inquiry_spam_scorer.rb`

设计要点（不要绕过）：

- 不要求登录；租户用 `AppCode` header 显式传入（值 = `Application.company_code`）
- 强制验证码（rucaptcha）+ honeypot + rack-attack 限频
- 写入即评分；高分数（≥ 60）自动落 `pending_review`，不发实时通知

---

## 租户识别（AppCode header）

**所有 `/public_api/v1/*` 写入端点必须在请求头里带：**

```
AppCode: <application.company_code>
```

值取 `Application.company_code`（8 位字母数字，建站时自动生成，CMS 后台可见）。后端在 `PublicAPI::V1` 的 `before` 钩子里集中校验：未带或查不到对应 `Application` 时统一返回 400 `AppCode header 缺失或无效`。

**白名单（不需要 AppCode）：**
- `GET /public_api/v1/captcha` —— 让浏览器 `<img>` 直接加载（img 无法附自定义 header）
- `GET /public_api/v1/swagger_doc` —— 文档端点

## 必填 / 选填字段

| 字段 | 必填 | 类型 | 位置 | 说明 |
|------|------|------|------|------|
| `AppCode` | ✅ | string | header | 租户 `Application.company_code`（见上文「租户识别」） |
| `name` | ✅ | string | body | 联系人姓名 |
| `message` | ✅ | string | body | 询盘正文 |
| `rucaptcha` | ✅ | string | body | 图片验证码当前值（用户输入） |
| `email` | ⚠️ | string | body | 与 `phone` 二选一必填 |
| `phone` | ⚠️ | string | body | 与 `email` 二选一必填 |
| `company` |   | string | body | 公司名 |
| `data_id` |   | integer | body | 关联产品 / 案例的 ContentItem ID |
| `locale` |   | string | body | 提交语言（默认 `zh`） |
| `extra_data` |   | object | body | 行业特定字段 |
| `attachment_signed_ids` |   | string[] | body | 直传得到的 signed_id，最多 5 个 |
| `website` | 🪤 | string | body | **honeypot**：真实用户必须保持为空 |

> ⚠️ **email / phone 至少传一项**，否则后端会以 422 拒绝。
> 🪤 **honeypot 字段必须存在于 DOM 中**：`<input name="website" style="display:none" tabindex="-1" autocomplete="off">`。机器人会自动填充，命中即 400。

---

## Public API 端点清单

### `GET /public_api/v1/captcha`

- 参数：无
- 返回：`image/gif` 二进制
- 副作用：写 `rucaptcha-session:*` 到 cache，session_id 跟随 cookie

### `POST /public_api/v1/active_storage/direct_upload`

- 必填：`AppCode` header；body 中 `filename`, `byte_size`, `content_type`, `base64_digest|hex_digest`
- 约束：
  - `content_type` 必须属于以下白名单：
    - 图片：`image/jpeg`, `image/jpg`, `image/png`, `image/webp`
    - PDF：`application/pdf`
    - TXT：`text/plain`
    - Word：`application/msword`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
    - Excel：`application/vnd.ms-excel`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
  - `byte_size ≤ 20MB`
  - 限频 10 / 分钟 / IP
- 返回：`{ id, signed_id, ... direct_upload: { url, headers } }`，前端按返回的 url+headers 把二进制 PUT 到对象存储

### `POST /public_api/v1/inquiries`

- 必填见上节
- 副作用：
  - 命中 honeypot → 400
  - 验证码错误 → 400
  - IP 已被封禁 → 403
  - 超过限频 → 429
  - 评分 ≥ 60 → 落 `pending_review`，**不发**实时通知
- 返回：`{ code: 200, message: "ok" }`（**不回显** `id` 与 `review_status`，防止扫描器探测）

---

## 完整 `InquiryForm.vue` 示例

```vue
<template>
  <form @submit.prevent="submit" novalidate>
    <!-- honeypot：必须保留 -->
    <input
      v-model="form.website"
      name="website"
      tabindex="-1"
      autocomplete="off"
      style="display:none"
    />

    <label>姓名 *<input v-model="form.name" required /></label>
    <label>邮箱<input v-model="form.email" type="email" /></label>
    <label>电话<input v-model="form.phone" /></label>
    <label>公司<input v-model="form.company" /></label>
    <label>内容 *<textarea v-model="form.message" required /></label>

    <div class="attachments">
      <input type="file" multiple @change="handleFiles" :disabled="uploading" />
      <ul>
        <li v-for="att in attachments" :key="att.signed_id">
          {{ att.filename }} ({{ att.byte_size }} B)
        </li>
      </ul>
      <p v-if="uploadError" class="error">{{ uploadError }}</p>
    </div>

    <div class="captcha">
      <!-- captcha 端点不要求 AppCode，浏览器 <img> 直接加载即可 -->
      <img :src="captchaUrl" @click="reloadCaptcha" alt="验证码" />
      <input v-model="form.rucaptcha" required placeholder="请输入验证码" />
    </div>

    <button :disabled="submitting">{{ submitting ? '提交中…' : '提交询盘' }}</button>
    <p v-if="submitError" class="error">{{ submitError }}</p>
    <p v-if="success" class="success">提交成功，我们会尽快与您联系。</p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps<{ appCode: string; dataId?: number }>()
const API = 'https://api.example.com/public_api/v1'

// 写入接口都带 AppCode header；captcha 端点不需要
const baseHeaders = () => ({
  'Content-Type': 'application/json',
  AppCode: props.appCode
})

const MAX_ATTACHMENTS = 5
const MAX_SIZE = 20 * 1024 * 1024
const ALLOWED = [
  'image/jpeg', 'image/jpg', 'image/png', 'image/webp',
  'application/pdf', 'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]

const form = reactive({
  name: '', email: '', phone: '', company: '',
  message: '', rucaptcha: '', website: ''
})
const attachments = ref<Array<{ signed_id: string; filename: string; byte_size: number }>>([])
const captchaUrl = ref(`${API}/captcha?t=${Date.now()}`)
const uploading = ref(false)
const uploadError = ref('')
const submitting = ref(false)
const submitError = ref('')
const success = ref(false)

// captcha 接口不要求 AppCode，<img> 通过 URL 时间戳刷新即可
const reloadCaptcha = () => {
  captchaUrl.value = `${API}/captcha?t=${Date.now()}`
}

const handleFiles = async (event: Event) => {
  uploadError.value = ''
  const files = Array.from((event.target as HTMLInputElement).files || [])
  for (const file of files) {
    if (attachments.value.length >= MAX_ATTACHMENTS) {
      uploadError.value = `最多上传 ${MAX_ATTACHMENTS} 个附件`
      break
    }
    if (!ALLOWED.includes(file.type)) {
      uploadError.value = `不支持的类型：${file.name}`
      continue
    }
    if (file.size > MAX_SIZE) {
      uploadError.value = `${file.name} 超过 20MB`
      continue
    }
    await uploadFile(file)
  }
  ;(event.target as HTMLInputElement).value = ''
}

const uploadFile = async (file: File) => {
  uploading.value = true
  try {
    const checksum = await md5Base64(file)
    const sig = await fetch(`${API}/active_storage/direct_upload`, {
      method: 'POST',
      headers: baseHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        filename: file.name,
        byte_size: file.size,
        content_type: file.type,
        base64_digest: checksum
      })
    }).then(r => r.json())

    await fetch(sig.direct_upload.url, {
      method: 'PUT',
      headers: sig.direct_upload.headers,
      body: file
    })

    attachments.value.push({
      signed_id: sig.signed_id,
      filename: sig.filename,
      byte_size: sig.byte_size
    })
  } catch (err: any) {
    uploadError.value = err?.message || '上传失败'
  } finally {
    uploading.value = false
  }
}

const submit = async () => {
  submitError.value = ''
  success.value = false

  if (!form.email && !form.phone) {
    submitError.value = '邮箱 与 手机号 必须至少填写一项'
    return
  }

  submitting.value = true
  try {
    const res = await fetch(`${API}/inquiries`, {
      method: 'POST',
      headers: baseHeaders(),
      credentials: 'include',
      body: JSON.stringify({
        data_id: props.dataId,
        ...form,
        attachment_signed_ids: attachments.value.map(a => a.signed_id)
      })
    })

    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      submitError.value = body.error_message || `提交失败 (${res.status})`
      reloadCaptcha()
      form.rucaptcha = ''
      return
    }

    success.value = true
    // 重置表单（appCode 在 props 上，无需重置）
    Object.assign(form, { name: '', email: '', phone: '', company: '', message: '', rucaptcha: '', website: '' })
    attachments.value = []
    reloadCaptcha()
  } catch (err: any) {
    submitError.value = err?.message || '网络错误'
  } finally {
    submitting.value = false
  }
}

// 浏览器内计算 MD5(base64)；可换用项目里已有的实现
async function md5Base64(file: File): Promise<string> {
  // 推荐复用前端项目里既有的 active_storage 直传工具，
  // 或引入 spark-md5 / blueimp-md5 等库。本示例略。
  return ''
}
</script>
```

> ✋ 实际代码中务必使用项目里已有的 MD5/SHA 计算工具（见 `frontend/composables/useActiveStorageUpload.ts`），不要把 `md5Base64` 当作真实实现。

---

## 错误码对照

| HTTP | 触发场景 |
|------|----------|
| 400 | honeypot 命中、`AppCode` header 缺失或无效、附件类型/大小超限 |
| 422 | 验证码错误、字段校验失败（含 email/phone 二选一） |
| 403 | 提交 IP 已被封禁 |
| 429 | 限频：1 分钟 ≥ 3 次询盘 / 1 分钟 ≥ 10 次直传 / 1 小时 ≥ 20 次询盘 |

---

## 附件约束

- 类型白名单：图片（JPEG/PNG/WebP）、PDF、TXT、Word（doc/docx）、Excel（xls/xlsx）
- 单文件 ≤ 20MB
- 单次提交最多 5 个

---

## UX 约定

- **验证码只在最终提交时校验一次**：每次直传都拦截会破坏体验。直传接口靠限频 + 类型/大小白名单 + 必传 `AppCode` header 兜底。
- 验证码错误 / 提交失败时，**强制刷新验证码并清空输入框**（机器人卡死、用户无感知）。
- 附件上传过程展示进度，失败回滚（从 `attachments` 列表移除）。
- 提交成功后展示通用感谢文案，**不要展示 `id` 与 `review_status`**——后端故意不回这些字段。
