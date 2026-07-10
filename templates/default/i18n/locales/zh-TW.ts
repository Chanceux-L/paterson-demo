const common = {
  all: '全部',
  apply: '應用',
  back: '返回',
  breadcrumb: '麵包屑導航',
  clear: '清除',
  clearAll: '清除全部',
  close: '關閉',
  home: '首頁',
  inquiry: '諮詢',
  loadMore: '載入更多',
  loading: '載入中',
  nextImage: '下一張圖片',
  nextPage: '下一頁',
  none: '暫無',
  previousImage: '上一張圖片',
  previousPage: '上一頁',
  showLess: '收起',
  showMore: '展開',
  viewImageIndex: '檢視第 {index} 張圖片'
};

const navItems = [
  { label: '首頁', english: 'Home', href: '/' },
  { label: '品牌實力', english: 'Brand', href: '/about' },
  { label: '產品系統', english: 'Products', href: '/data' },
  { label: '水漆科技', english: 'Technology', href: '/philosophy' },
  { label: '招商加盟', english: 'Franchise', href: '/contact' },
  { label: '新聞中心', english: 'News', href: '/articles' }
];

const pageSeo = {
  home: {
    seo: {
      title: 'Paterson 百得勝水漆整家定製加盟_環保櫃牆門系統_全屋定製家居加盟',
      description: '百得勝 Paterson 成立於 2001 年，是德爾未來旗下主營品牌，專注水漆櫃牆門系統與環保整家定製，為加盟商提供產品、供應鏈、設計、營銷與數智化運營支援。',
      keywords: '水漆整家定製,水漆全屋定製,環保整家定製,全屋定製加盟,家居加盟,櫃牆門系統,水性漆定製家居,Paterson 百得勝,德爾未來旗下,股票程式碼 002631'
    }
  },
  about: {
    seo: {
      title: '品牌實力_百得勝 Paterson 水漆整家定製',
      description: '瞭解百得勝 Paterson 的品牌歷程、德爾未來上市公司背景、水漆技術能力與整家定製招商支援。',
      keywords: '百得勝品牌實力,Paterson 百得勝,德爾未來,水漆整家定製,全屋定製加盟'
    }
  },
  articles: {
    seo: {
      title: '新聞中心_百得勝 Paterson 品牌動態與行業資訊',
      description: '檢視百得勝 Paterson 在水漆科技、行業標準、展會活動、品牌榮譽與整家定製領域的最新動態。',
      keywords: '百得勝新聞,Paterson 新聞,水漆科技,家居展會,全屋定製行業資訊'
    },
    detailSeo: {
      title: '{title}_百得勝 Paterson 新聞中心',
      description: '瞭解百得勝 Paterson 新聞動態：{title}',
      keywords: '{title},百得勝新聞,Paterson 新聞,水漆整家定製'
    }
  },
  contact: {
    inquiry: {
      eyebrow: '聯絡諮詢',
      title: '開啟百得勝加盟諮詢',
      description: '留下聯絡方式與意向城市，招商顧問將為你介紹品牌實力、開店支援與合作政策。',
      name: '姓名',
      namePlaceholder: '請輸入你的姓名',
      missingName: '請填寫姓名',
      phoneCountry: '國家或地區',
      phoneCountrySearch: '搜尋國家或地區程式碼',
      phone: '手機號',
      phonePlaceholder: '請輸入聯絡電話',
      email: '郵箱',
      emailPlaceholder: '請輸入郵箱地址',
      company: '公司',
      companyPlaceholder: '請輸入公司名稱',
      message: '加盟意向',
      messagePlaceholder: '可填寫意向城市、店面資源、投資計劃或希望瞭解的加盟政策',
      missingMessage: '請填寫加盟意向',
      captcha: '驗證碼',
      captchaPlaceholder: '請輸入驗證碼',
      captchaAlt: '驗證碼圖片',
      missingCaptcha: '請填寫驗證碼',
      submit: '提交諮詢',
      submitting: '提交中',
      success: '提交成功，我們會盡快與你聯絡。',
      missingPhone: '請填寫聯絡電話',
      invalidPhone: '請輸入有效的聯絡電話',
      failed: '提交失敗，請稍後重試'
    }
  }
};

const starter = {
  site: {
    name: 'Paterson 百得勝',
    titleTemplate: '{title} - Paterson 百得勝'
  },
  common,
  languageSwitcher: {
    aria: '切換語言',
    label: '語言',
    localeName: '簡體中文',
    search: '搜尋語言',
    empty: '暫無可選語言',
    languages: {
      'zh-CN': {
        label: '簡體中文',
        localeName: '簡體中文',
        searchTerms: ['中文', '漢語', 'zh']
      },
      'zh-TW': {
        label: '繁體中文',
        localeName: '繁體中文',
        searchTerms: ['繁體', '中文', 'tw']
      },
      'en': {
        label: 'English',
        localeName: 'English',
        searchTerms: ['英文', '英語', 'en']
      },
      'ru': {
        label: 'Русский',
        localeName: '俄語',
        searchTerms: ['俄語', '俄文', 'ru']
      },
      'de': {
        label: 'Deutsch',
        localeName: '德語',
        searchTerms: ['德語', '德文', 'de']
      },
      'it': {
        label: 'Italiano',
        localeName: '義大利語',
        searchTerms: ['義大利語', '意文', 'it']
      },
      'es': {
        label: 'Español',
        localeName: '西班牙語',
        searchTerms: ['西班牙語', '西文', 'es']
      },
      'fr': {
        label: 'Français',
        localeName: '法語',
        searchTerms: ['法語', '法文', 'fr']
      }
    }
  },
  nav: {
    homeAria: '返回首頁',
    logoAlt: 'Paterson 百得勝標識',
    sloganAlt: '德爾未來旗下主營品牌',
    menu: '選單',
    mainNav: '主導航',
    memberCenter: '加盟諮詢',
    hotline: '招商熱線',
    stockLabel: '股票程式碼',
    topInfoBrand: '德爾未來旗下',
    items: navItems,
    search: {
      scrollTop: '回到頂部'
    }
  },
  footer: {
    brandDescription: '百得勝 Paterson 成立於 2001 年，專注水漆櫃牆門系統與環保整家定製，是德爾未來旗下主營品牌。',
    slogan: '水漆整家定製加盟新增長',
    socials: [
      { icon: 'i-lucide-message-circle', label: '微信' },
      { icon: 'i-lucide-radio', label: '微博' },
      { icon: 'i-lucide-video', label: '短影片' },
      { icon: 'i-lucide-instagram', label: 'Instagram' },
      { icon: 'i-lucide-book-open', label: '小紅書' },
      { icon: 'i-lucide-globe', label: 'LinkedIn' }
    ],
    columns: [
      {
        title: '品牌',
        links: [
          { label: '品牌實力', href: '/about' },
          { label: '水漆科技', href: '/philosophy' },
          { label: '招商加盟', href: '/contact' }
        ]
      },
      {
        title: '產品與資訊',
        links: [
          { label: '產品系統', href: '/data' },
          { label: '新聞中心', href: '/articles' }
        ]
      },
      {
        title: '聯絡',
        links: [
          { label: '聯絡我們', href: '/contact' },
          { label: '加盟諮詢', href: 'sourceRegisterUrl', external: true }
        ]
      }
    ],
    followUs: '聯絡資訊',
    email: '郵箱',
    address: '地址',
    addressValue: '廣東省廣州市天河區',
    icp: '粵ICP備2024333088號',
    policeRecord: '粵公網安備44010602014342號',
    legalPrefix: '百得勝 - 德爾未來旗下全資子公司 (股票程式碼：002631)',
    legalCopyright: 'Copyright © 百得勝衣櫃 廣州百得勝智慧家居有限公司all rights reserved.',
    riskNotice: '歡迎有意衣櫃加盟，櫥櫃加盟等全屋定製的有志之士加入我們，百得勝客服電話400-629-2629（投資有風險，選擇需謹慎）',
    tagline: '高階家居空間、水漆科技與加盟支援，共同呈現百得勝水漆整家的品牌價值。',
    copyright: '© 2026 Paterson 百得勝. 保留所有權利。',
    privacy: '隱私政策',
    terms: '使用條款',
    cookieSettings: 'Cookie 設定'
  },
  cookie: {
    title: 'Cookie 偏好設定',
    description: '我們使用必要 Cookie 保障網站執行，並在你同意時使用統計 Cookie 改善體驗。',
    necessaryTitle: '必要 Cookie',
    necessaryDescription: '用於安全、語言、會話和基礎功能，始終啟用。',
    alwaysOn: '始終開啟',
    statisticsTitle: '統計 Cookie',
    statisticsDescription: '幫助我們瞭解訪問情況並改進頁面體驗。',
    manage: '管理設定',
    necessaryOnly: '僅必要',
    save: '儲存設定',
    acceptAll: '接受全部'
  },
  skewUpdate: {
    title: '內容已更新',
    description: '重新整理頁面即可檢視最新內容。',
    refresh: '立即重新整理',
    dismiss: '稍後'
  },
  error: {
    pageLabel: '頁面錯誤',
    action: '返回首頁',
    contactAction: '聯絡我們',
    types: {
      badRequest: {
        eyebrow: '400',
        title: '請求格式有誤',
        description: '當前請求無法被處理，請檢查連結或返回首頁繼續瀏覽。'
      },
      unauthorized: {
        eyebrow: '401',
        title: '需要身份驗證',
        description: '請完成驗證後再訪問該頁面。'
      },
      forbidden: {
        eyebrow: '403',
        title: '暫無訪問許可權',
        description: '你當前沒有許可權檢視該內容。'
      },
      notFound: {
        eyebrow: '404',
        title: '頁面不存在',
        description: '你訪問的頁面可能已移動、刪除，或連結輸入有誤。'
      },
      serverError: {
        eyebrow: '500',
        title: '伺服器暫時不可用',
        description: '服務出現異常，請稍後重試。'
      },
      unavailable: {
        eyebrow: '503',
        title: '服務維護中',
        description: '網站正在維護或臨時不可用，請稍後再試。'
      },
      defaultError: {
        eyebrow: 'ERROR',
        title: '出現了一些問題',
        description: '頁面載入失敗，請稍後重試或返回首頁。'
      }
    }
  },
  cta: {
    title: '準備瞭解百得勝加盟合作？',
    description: '留下聯絡方式，招商顧問將為你介紹百得勝品牌實力、開店支援與合作政策。',
    action: '提交加盟諮詢',
    contactLabel: '招商熱線',
    bgText: 'PATERSON'
  },
  pages: pageSeo,
  data: {
    siteConfig: {
      companyName: '廣州百得勝智慧家居有限公司',
      shortName: '百得勝',
      industry: '水漆整家定製與全屋定製家居加盟',
      siteTitle: 'Paterson 百得勝水漆整家定製加盟',
      siteDescription: '百得勝 Paterson 成立於 2001 年，是德爾未來旗下主營品牌，專注水漆櫃牆門系統與環保整家定製。',
      canonical: 'https://www.paterson.com.cn/',
      navigation: navItems.map(item => ({ label: item.label, path: item.href })),
      footerIntro: '百得勝 Paterson 專注水漆櫃牆門系統與環保整家定製，為城市合夥人提供產品、供應鏈、設計、營銷與數智化運營支援。',
      footerColumns: [
        {
          title: '品牌',
          links: [
            { label: '品牌實力', path: '/about' },
            { label: '水漆科技', path: '/philosophy' }
          ]
        },
        {
          title: '內容',
          links: [
            { label: '產品系統', path: '/data' },
            { label: '新聞中心', path: '/articles' }
          ]
        }
      ]
    }
  },
  homePage: {
    hero: {
      badge: '德爾未來旗下主營品牌 · 股票程式碼 002631',
      title: 'Paterson 百得勝水漆整家定製',
      titleLine1: 'Paterson 百得勝',
      titleLine2: '水漆整家定製',
      subtitle: '百得勝Paterson，成立於2001年，是一家集水漆定製櫃牆門及成品傢俱為主的環保整家定製家居企業。上市公司德爾未來旗下主營品牌。',
      ctaLabel: '立即諮詢加盟',
      cta2Label: '檢視品牌實力',
      imageAlt: 'Paterson 百得勝水漆整家定製家居空間',
      caption: '水漆產業鏈、康氧健康空間、碳纖維材料與營銷支援，共同構成百得勝加盟體系的差異化能力。',
      oxygenValue: '康氧產業鏈',
      oxygenLabel: '智慧康氧臥房與室內空氣標準',
      keywords: {
        waterPaint: '水漆產業鏈',
        oxygen: '康氧產業鏈',
        material: '碳纖維材料',
        marketing: '營銷創新'
      },
      metrics: [
        { value: '2001', label: '品牌創立時間' },
        { value: '002631', label: '德爾未來股票程式碼' },
        { value: '4.0', label: '油改水智慧工廠' },
        { value: '櫃牆門', label: '整家定製系統' }
      ]
    },
    forest: {
      eyebrow: '康氧產業鏈閉環',
      title: '智慧康氧臥房，像森林氧吧一樣記住百得勝',
      description: '百得勝以智慧康氧臥房、超級健康中樞和室內空氣標準能力，回應家庭對潔淨空氣、舒適睡眠與健康空間的長期需求。',
      center: '超級健康中樞',
      note: '從臥房空氣、環保材料到整家空間體驗，讓健康不止停留在概念，而是成為使用者能夠感知的生活場景。',
      proofs: {
        bedroom: '智慧康氧臥房',
        center: '超級健康中樞',
        standard: '室內空氣團標主編單位'
      },
      proofDescriptions: {
        bedroom: '以臥房這一高頻生活空間承載康氧體驗，讓健康不是抽象概念，而是可被感知的空間系統。',
        center: '圍繞空氣、材料、櫃牆門和生活習慣建立健康中樞，強化整家定製之外的差異化。',
        standard: '以室內空氣團體標準主編單位背書，支撐招商端對健康家居能力的信任。'
      },
      nodes: {
        chain: '康氧產業鏈閉環',
        forest: '森林氧吧',
        bedroom: '智慧康氧臥房',
        standard: '室內空氣團標'
      }
    },
    trust: {
      eyebrow: '關於我們',
      title: '水漆整家定製的長期主義品牌',
      description: '百得勝 Paterson 成立於 2001 年，是德爾未來旗下主營品牌。品牌長期深耕定製家居，以水漆科技、環保整家定製和全鏈路服務建立市場信任。',
      stats: [
        { value: '2001 年', label: '百得勝 Paterson 成立，持續深耕定製家居賽道。' },
        { value: '德爾未來', label: '上市公司旗下主營品牌，股票程式碼 002631。' },
        { value: '團標主編', label: '水漆定製家居相關標準與技術背書。' },
        { value: '智慧塗裝', label: '全水性 3D 智慧塗裝線與油改水 4.0 工廠。' }
      ]
    },
    technology: {
      eyebrow: '水漆科技',
      title: '從材料、工藝到整家空間的水漆產業鏈閉環',
      description: '全水性 3D 智慧塗裝線、油改水 4.0 工廠和水漆相關標準能力，共同支撐百得勝水漆整家定製的穩定交付。',
      summary: '材料、塗裝、產品與交付形成同一條能力鏈。',
      metrics: [
        { value: '3D', label: '智慧塗裝線' },
        { value: '4.0', label: '油改水工廠' },
        { value: '全水性', label: '材料與交付協同' }
      ],
      items: [
        { title: '水漆櫃牆門系統', description: '以水漆工藝、櫃牆門一體化和整家空間交付形成差異化產品能力。', href: '/data' }
      ],
      nodes: [
        { icon: 'i-lucide-droplets', title: '水漆產業鏈閉環', description: '圍繞水性漆定製家居形成材料、塗裝、產品與交付協同。' },
        { icon: 'i-lucide-factory', title: '全水性 3D 智慧塗裝線', description: '用智慧化工藝提升穩定性、表面質感和批次交付能力。' },
        { icon: 'i-lucide-leaf', title: '油改水 4.0 工廠', description: '以工廠端水性化升級承接水漆整家定製的規模交付。' },
        { icon: 'i-lucide-award', title: '國際領先成果認證', description: '高硬度全水性塗料塗飾家居板件技術獲得專家組認證。' }
      ]
    },
    products: {
      eyebrow: '我們的服務',
      title: '水漆櫃牆門系統與環保整家定製服務',
      description: '從臥室收納、廚房系統到兒童成長空間，百得勝以真實家居場景呈現水漆整家定製的產品價值。',
      items: [
        {
          title: '衣櫃定製',
          description: '水漆衣櫃，整家定製。3底2面72道純水漆工藝，沒有8大重金屬傷害。',
          image: '/paterson/product-bedroom-system.webp',
          tags: ['水漆衣櫃', '整家定製', '72道工藝']
        },
        {
          title: '櫥櫃定製',
          description: '百得勝櫥櫃，環保·健康·顏值。',
          image: '/paterson/product-kitchen-system.webp',
          tags: ['櫥櫃定製', '環保', '健康']
        },
        {
          title: '百兒未來家',
          description: '讓孩子自己參與設計，打造呵護身心、啟蒙智識、保護想像力的成長環境。',
          image: '/paterson/product-children-room.webp',
          tags: ['兒童房', '成長環境', '未來家']
        }
      ]
    },
    advantages: {
      eyebrow: '加盟優勢',
      title: '招商加盟：水漆、康氧、材料與營銷創新',
      items: [
        { icon: 'i-lucide-droplets', title: '水漆產業鏈閉環', description: '全水性3D智慧塗裝線、油改水4.0工廠、水漆團標主編單位。' },
        { icon: 'i-lucide-wind', title: '康氧產業鏈閉環', description: '智慧康氧臥房、超級健康中樞、室內空氣團標主編單位。' },
        { icon: 'i-lucide-layers-3', title: '碳纖維航空材料', description: '9大效能優勢，10米正負變形≤3‰，解決傳統輕高定工藝3大難題。' },
        { icon: 'i-lucide-megaphone', title: '營銷創新', description: 'AI數智化賦能幫扶、水漆新零售、活動模式多樣化引流。' },
        { icon: 'i-lucide-award', title: '企業榮譽', description: '技術認證、行業獎項、標準制定和品牌大事件，共同構成可信品牌背書。' },
        { icon: 'i-lucide-history', title: '長期深耕', description: '自 2001 年起持續深耕定製家居行業，以長期主義積累品牌、產品與服務經驗。' }
      ]
    },
    process: {
      eyebrow: '加盟流程',
      title: '清晰八步合作路徑，陪伴門店穩步開業',
      description: '從初次諮詢到建店培訓，再到開業扶持和持續運營，總部陪伴加盟商穩步推進。',
      stepLabel: '階段',
      steps: [
        { title: '線上諮詢', description: '提交城市、預算與聯絡方式。' },
        { title: '總部溝通', description: '介紹區域政策與合作方式。' },
        { title: '實地考察', description: '瞭解展廳、工廠與終端樣板。' },
        { title: '城市洽談', description: '溝通商圈、客群與開店規劃。' },
        { title: '簽約合作', description: '明確授權、政策與開店節奏。' },
        { title: '建店培訓', description: '完成設計、產品和運營培訓。' },
        { title: '開業扶持', description: '配合活動、引流和團隊啟動。' },
        { title: '持續運營', description: '提供營銷、產品與數智化支援。' }
      ]
    },
    news: {
      eyebrow: '新聞與榮譽',
      title: '關注水漆科技、品牌榮譽與行業動態',
      more: '檢視新聞中心',
      items: [
        {
          tag: '技術認證',
          title: '國際領先 - 百得勝家居水漆核心科技成果獲院士領銜專家組認證',
          description: '高硬度全水性塗料塗飾家居板件關鍵技術獲得權威專家組認證。',
          image: '/paterson/news-water-paint-tech.webp'
        },
        {
          tag: '展會新聞',
          title: '水漆輕高定丨百得勝攜 3 大根技術與空間場景亮相廣州定製家居展',
          description: '圍繞水漆整家和輕高定空間，展示百得勝在產品、技術與空間美學上的綜合實力。',
          image: '/paterson/news-custom-home-expo.webp'
        },
        {
          tag: '行業標準',
          title: '傢俱新國標 行業頂配 水漆健康家標配',
          description: '以環保標準和健康家居認知，延展水漆櫃牆門系統的品牌價值。',
          image: '/paterson/news-furniture-standard.webp'
        }
      ]
    },
    consult: {
      eyebrow: '加盟留資',
      title: '留下加盟意向，獲取百得勝合作資料',
      description: '填寫聯絡方式與意向城市，招商顧問將為你介紹水漆整家定製加盟政策。',
      privacy: '資訊僅用於加盟諮詢溝通，嚴格保密。',
      hours: '總部諮詢時間：09:00 - 18:00',
      form: {
        name: '姓名',
        namePlaceholder: '請輸入姓名',
        phone: '手機號',
        phonePlaceholder: '請輸入聯絡電話',
        city: '意向城市',
        cityPlaceholder: '例如：廣州 / 成都 / 杭州',
        budget: '投資預算',
        budgetPlaceholder: '請選擇預算範圍',
        budgetOne: '50 萬以內',
        budgetTwo: '50-100 萬',
        budgetThree: '100 萬以上',
        message: '備註',
        messagePlaceholder: '可填寫店面資源、經營經驗或希望瞭解的加盟政策',
        submit: '提交加盟諮詢'
      }
    },
    mobileBar: {
      consult: '諮詢',
      call: '撥號',
      store: '門店'
    },
    faq: {
      items: [
        { question: '百得勝 Paterson 的核心差異化是什麼？', answer: '核心差異化是水漆櫃牆門系統、環保整家定製能力以及德爾未來上市公司背景。' },
        { question: '加盟諮詢需要提供哪些資訊？', answer: '建議留下姓名、手機號、意向城市、投資預算和店面資源，便於招商顧問介紹更適合的合作政策。' }
      ]
    }
  },
  aboutPage: {
    sectionNavAria: '關於我們欄目導航',
    sectionNav: [
      { label: '公司簡介', href: '#company' },
      { label: '企業文化', href: '#culture' },
      { label: '企業榮譽', href: '#honors' },
      { label: '發展歷程', href: '#history' },
      { label: '聯絡我們', href: '#contact' }
    ],
    hero: {
      eyebrow: '品牌實力',
      titleLine1: '百得勝 Paterson',
      titleLine2: '長期主義品牌實力',
      subtitle: '從 2001 年創立到德爾未來旗下主營品牌，百得勝以水漆櫃牆門系統、環保整家定製和總部服務體系，構建面向城市合夥人的長期信任。',
      primaryCta: '諮詢加盟合作',
      imageAlt: '百得勝 Paterson 品牌實力形象',
      stats: [
        { value: '2001', label: '品牌創立，持續深耕定製家居領域' },
        { value: '002631', label: '德爾未來上市公司股票程式碼' },
        { value: '水漆', label: '櫃牆門系統與環保整家定製差異化' },
        { value: '全鏈路', label: '產品、供應鏈、設計、營銷與運營支援' }
      ]
    },
    proof: {
      eyebrow: '可信背書',
      title: '穩健品牌基礎',
      description: '百得勝成立於 2001 年，是德爾未來旗下主營品牌，長期專注水漆櫃牆門系統與環保整家定製，以產品創新、技術驅動和聚焦零售建立品牌競爭力。',
      tags: [
        { label: '2001 年創立' },
        { label: '德爾未來旗下' },
        { label: '水漆櫃牆門系統' },
        { label: '環保整家定製' }
      ],
      items: [
        { icon: 'i-lucide-building-2', title: '德爾未來旗下', description: '上市公司旗下主營品牌，以更穩定的治理與資源能力支撐品牌長期發展。' },
        { icon: 'i-lucide-droplets', title: '水漆技術背書', description: '圍繞水漆材料、智慧塗裝、油改水工廠和行業標準，形成環保整家定製差異化。' },
        { icon: 'i-lucide-factory', title: '供應鏈交付', description: '從工藝、產品系統到交付標準建立統一能力，讓品質穩定走進更多家庭。' },
        { icon: 'i-lucide-store', title: '運營支援', description: '面向城市合夥人提供設計、建店、營銷、培訓和數智化運營等支援。' }
      ]
    },
    origin: {
      eyebrow: '公司實力',
      title: '以生產體系支撐水漆整家定製交付',
      description: '百得勝圍繞水漆櫃牆門、環保材料、智慧塗裝和整家定製交付持續投入，在生產基地、產品工藝和服務體系之間形成穩定協同。',
      imageAlt: '百得勝 Paterson 工廠生產體系',
      captionEyebrow: '生產與交付',
      caption: '以水漆櫃牆門為核心，持續投入環保材料、生產工藝與整家定製交付能力。',
      quote: '品牌實力最終要落到穩定的產品系統、生產能力和使用者交付體驗。'
    },
    capabilities: {
      eyebrow: '核心能力',
      title: '品牌、技術、產品、服務一體化',
      description: '從基材無醛新增、水漆工藝到康氧臥房和水漆輕高定，百得勝持續推動環保健康整家定製升級，形成清晰的產品主張與交付基礎。',
      items: [
        { icon: 'i-lucide-award', title: '品牌公信力', description: '以 2001 年品牌積累、上市公司背景和行業標準參與，降低加盟商選擇的不確定性。' },
        { icon: 'i-lucide-leaf', title: '環保健康主張', description: '水漆、康氧臥房和室內空氣標準相關能力，讓健康家居從概念進入真實生活場景。' },
        { icon: 'i-lucide-layout-grid', title: '整家產品系統', description: '櫃、牆、門、廚房、臥房和兒童空間形成統一風格，完整呈現家的整體美學。' },
        { icon: 'i-lucide-megaphone', title: '招商運營支援', description: '圍繞建店、培訓、活動引流、營銷工具和數智化運營，幫助城市合夥人穩健啟動。' }
      ]
    },
    culture: {
      eyebrow: '企業文化',
      title: '從 Paterson Street 到健康整家定製',
      description: '百得勝源自 PATERSON 的品牌記憶，秉承“為人們定製一個健康智慧的家”的使命，致力於成為全球健康家居的領先者。',
      items: [
        { icon: 'i-lucide-compass', title: '使命', description: '為人們定製一個健康智慧的家。' },
        { icon: 'i-lucide-heart-handshake', title: '價值觀', description: '以客戶為中心，以奮鬥者為本，長期堅持小正果。' },
        { icon: 'i-lucide-rocket', title: '經營理念', description: '產品領先，技術驅動，聚焦零售。' }
      ]
    },
    proofImages: [
      {
        image: '/paterson/brand-culture-vision.webp',
        title: '品牌文化記憶',
        description: 'PATERSON 香港街名承載品牌源起，也延展出百得勝對長期主義與健康家居的堅持。'
      },
      {
        image: '/paterson/brand-franchise-support.webp',
        title: '總部支援能力',
        description: '以產品、設計、建店、營銷、培訓和數智化運營支援城市合夥人穩健落地。'
      }
    ],
    timeline: {
      eyebrow: '發展脈絡',
      title: '品牌實力來自持續積累，而不是單次傳播',
      description: '百得勝堅持環保長期主義，圍繞無醛新增、水漆工藝、健康空氣和輕高定方向持續進化。',
      items: [
        { year: '2001', title: '品牌創立', description: '百得勝 Paterson 創立，進入定製家居領域並持續深耕。' },
        { year: '002631', title: '上市公司背景', description: '成為德爾未來旗下主營品牌，以資本市場治理和資源能力支撐長期發展。' },
        { year: '水漆科技', title: '形成差異化技術主張', description: '圍繞水漆櫃牆門系統、智慧塗裝和油改水工廠建立環保整家定製優勢。' },
        { year: '現在', title: '面向城市合夥人', description: '通過產品、供應鏈、設計、營銷和數智化運營支援，服務全屋定製加盟落地。' }
      ]
    },
    cta: {
      eyebrow: '加盟合作',
      title: '瞭解百得勝品牌實力與加盟政策',
      subtitle: '提交意向城市與聯絡方式，招商顧問將介紹品牌實力、開店支援與合作政策。',
      button: '諮詢加盟'
    }
  },
  philosophyPage: {
    seo: {
      title: '水漆科技_百得勝 Paterson 水漆櫃牆門系統',
      description: '瞭解百得勝 Paterson 的水漆產業鏈、全水性 3D 智慧塗裝線、油改水 4.0 工廠與環保整家定製技術。',
      keywords: '水漆科技,水漆櫃牆門系統,油改水工廠,全水性智慧塗裝,環保整家定製'
    },
    hero: {
      eyebrow: '水漆科技',
      title: '水漆科技',
      titleLine1: '把環保能力',
      titleLine2: '做進整家交付',
      subtitle: '從水性材料、連續化塗飾到櫃牆門一體化應用，百得勝以水漆產業鏈閉環支撐環保整家定製，讓技術優勢融入真實居住體驗。',
      primaryCta: '諮詢水漆加盟',
      imageAlt: '百得勝水漆智慧塗裝與整家定製工藝',
      metrics: [
        { value: '3D', label: '全水性智慧塗裝線' },
        { value: '4.0', label: '油改水工廠升級' },
        { value: '72道', label: '純水漆工藝表達' }
      ]
    },
    sectionNavAria: '水漆科技頁面導航',
    sectionNav: [
      { label: '產業鏈能力', href: '#chain' },
      { label: '權威證據', href: '#proof' },
      { label: '空間體驗', href: '#experience' },
      { label: '家居價值', href: '#terminal' }
    ],
    chain: {
      eyebrow: '產業鏈能力',
      title: '從材料、塗裝到櫃牆門系統的水漆閉環',
      description: '水漆科技不是單一賣點，而是一條貫穿材料選擇、塗裝工藝、產品系統和空間交付的能力鏈，讓環保、質感與耐用都能被清晰感知。',
      nodes: [
        { icon: 'i-lucide-droplets', title: '水性材料體系', description: '圍繞水性漆定製家居建立材料端基礎，減少傳統塗裝帶來的氣味和健康顧慮。' },
        { icon: 'i-lucide-factory', title: '連續化智慧塗裝', description: '全水性 3D 智慧塗裝線與油改水 4.0 工廠，讓表面質感、穩定性和批次交付更可控。' },
        { icon: 'i-lucide-panels-top-left', title: '櫃牆門一體應用', description: '水漆衣櫃、牆板、木門與整家空間協同呈現，讓環保工藝落到真實家居場景。' },
        { icon: 'i-lucide-badge-check', title: '標準與認證背書', description: '水漆團標、行業認證和空間樣板共同支撐百得勝水漆整家的專業可信度。' }
      ]
    },
    proof: {
      eyebrow: '權威證據',
      title: '讓技術主張有出處、有畫面、有結果',
      description: '官網新聞顯示，百得勝“高硬度全水性塗料塗飾家居板件”及關鍵技術獲得專家組認證，並圍繞全水性連續化塗飾、漆膜效能和綠色製造形成更完整的技術敘事。',
      imageAlt: '百得勝水漆核心科技成果認證新聞',
      captionEyebrow: '水漆核心科技成果',
      caption: '以產學研協同和專家認證作為科技背書，讓“環保”從概念進入可感知的工藝與空間體驗。',
      cards: [
        { value: '國際領先', label: '成果認證', description: '官網新聞提到相關水漆核心科技成果獲專家組認證，強化品牌技術可信度。' },
        { value: '六面一體', label: '連續化塗飾', description: '圍繞木質製品六面一體塗飾，讓櫃牆門應用具備更完整的工藝表達。' },
        { value: '2H', label: '漆膜硬度', description: '配合附著力、耐溼熱、耐汙染等指標，回應消費者對耐用和質感的關注。' }
      ]
    },
    experience: {
      eyebrow: '空間體驗',
      title: '技術最終要回到看得見的家',
      description: '水漆科技最終回到衣櫃、臥房、櫃牆門系統和生活場景中，讓家庭看見更安心、更舒適、更統一的整家定製方案。',
      items: [
        { title: '水漆衣櫃定製', description: '基材無醛新增、面材水漆木皮、3 底 2 面 72 道純水漆工藝，形成可被消費者記住的產品表達。', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['水漆衣櫃', '無味親膚', '即裝即住'] },
        { title: '健康臥房空間', description: '以衣櫃、床頭、護牆和收納系統共同呈現健康臥房，讓環保主張進入真實生活場景。', image: '/paterson/product-bedroom-system.webp', tags: ['臥房系統', '櫃牆協同', '健康家居'] },
        { title: '新國標與健康家', description: '結合傢俱新國標和水漆健康家認知，呈現環保、耐用和空間品質的綜合價值。', image: '/paterson/news-furniture-standard.webp', tags: ['標準背書', '環保認知', '健康家居'] }
      ]
    },
    terminal: {
      eyebrow: '家居價值',
      title: '讓水漆科技成為看得見的健康家',
      description: '水漆科技不止停留在技術名詞，而是落到可觸控、可感知、可長期居住的健康家居價值。',
      items: [
        { icon: 'i-lucide-store', title: '空間主題更鮮明', description: '以水漆衣櫃、健康臥房和櫃牆門系統組織居住場景，讓環保價值自然進入空間體驗。' },
        { icon: 'i-lucide-message-square-text', title: '技術證據更清晰', description: '材料、工藝、標準和權威新聞共同支撐水漆整家的專業背書。' },
        { icon: 'i-lucide-sparkles', title: '產品質感更可感知', description: '無味親膚、木皮紋理、漆膜效能和整家風格統一，形成可觸控的居住體驗。' },
        { icon: 'i-lucide-trending-up', title: '品牌記憶點更明確', description: '水漆整家、康氧空間和總部支援共同構成區別於普通全屋定製的品牌理由。' }
      ]
    },
    cta: {
      eyebrow: '水漆整家加盟',
      title: '想了解水漆整家定製加盟？',
      subtitle: '招商顧問可根據你的城市與店面資源，介紹產品系統、建店支援和運營扶持。',
      button: '提交諮詢'
    }
  },
  dataPage: {
    seo: {
      title: '產品系統_百得勝 Paterson 水漆櫃牆門系統_環保整家定製',
      description: '檢視百得勝 Paterson 水漆衣櫃、入戶、客餐廳、臥房、陽臺、寵物與電競等空間系統，瞭解環保整家定製產品組合與空間價值。',
      keywords: '百得勝產品系統,水漆衣櫃,水漆櫃牆門系統,環保整家定製,全屋定製加盟,媞雅系列,光引系列,原野系列'
    },
    hero: {
      eyebrow: '產品系統',
      titleLine1: '以水漆櫃牆門系統',
      titleLine2: '組織完整生活空間',
      subtitle: '從衣櫃定製延展到入戶、客餐廳、臥房、陽臺、寵物與電競空間，百得勝把水漆工藝、收納系統和整家風格統一到完整的產品體系。',
      imageAlt: '百得勝產品系統空間形象',
      primaryCta: '諮詢產品加盟',
      metrics: [
        { value: '3底2面', label: '72 道純水漆工藝，強化環保與表面質感表達' },
        { value: '6大空間', label: '覆蓋入戶、客廳、餐廳、書房、臥房與陽臺' },
        { value: '23年', label: '專研環保定製，沉澱產品與交付經驗' }
      ]
    },

    serviceLines: {
      navAria: '產品服務分類',
      eyebrow: '我們的服務',
      title: '水漆整家定製產品體系',
      description: '圍繞衣櫃定製、櫥櫃定製、百得勝傢俱與百兒未來家，百得勝以環保材料、空間美學和系統交付，為不同家庭場景提供完整定製方案。',
      items: [
        { title: '衣櫃定製', description: '百得勝，專研環保定製 23 年，水漆團標主編單位。水漆衣櫃，基材無醛新增，面材水漆木皮，3 底 2 面 72 道純水漆工藝。無味親膚即裝即住，水漆定製，就定百得勝。', image: '/paterson/product-wardrobe-intro.webp', points: ['水漆衣櫃', '無醛新增', '即裝即住'] },
        { title: '櫥櫃定製', description: '百得勝櫥櫃秉承環保長期主義，以環保創造更安全健康的居家環境；用美學為客戶打造舒適高顏的家；以客戶為中心，高質高效服務使用者。', image: '/paterson/product-cabinet-intro.webp', points: ['廚電一體化', '衣櫥一體化', '多風格體系'] },
        { title: '百得勝傢俱', description: '百得勝傢俱延展櫃類定製之外的生活場景，以客餐廳、臥房和多功能空間傢俱補充整家產品體系，讓空間風格、收納功能與日常體驗保持統一。', image: '/paterson/product-series-guangyin.webp', points: ['客餐廳', '成品傢俱', '整家配套'] },
        { title: '百兒未來家', description: '百兒未來家面向兒童成長需求，圍繞學習、收納、睡眠和安全環保構建成長空間，讓兒童房從單一傢俱配置升級為可陪伴成長的生活系統。', image: '/paterson/product-series-yuanye.webp', points: ['兒童成長', '學習收納', '健康空間'] }
      ]
    },

    catalog: {
      eyebrow: '產品展示',
      title: '甄選系列與空間方案',
      description: '從空間、風格與產品系列出發，呈現百得勝水漆整家定製的真實產品組合，讓環保、顏值與收納價值更直觀。',
      emptyTitle: '暫無匹配產品',
      emptyDescription: '可選擇更多空間、風格或系列，檢視適合不同家庭場景的產品方案。',
      serviceCatalogs: {
        衣櫃定製: {
          filters: [
            { label: '空間', options: ['全部', '入戶空間', '客廳空間', '餐廳空間', '書房空間', '臥房空間', '陽臺空間'] },
            { label: '風格', options: ['全部', '歐式風格', '現代風格', '新中式風格', '輕奢風格', '美式風格', '未來風格'] },
            { label: '款式', options: ['全部', '青春款', '經典款'] }
          ],
          items: [
            { title: '媞雅系列', category: '衣櫃定製', image: '/paterson/product-series-tiya.webp', tags: ['臥房空間', '輕奢風格', '經典款'] },
            { title: '光引系列', category: '衣櫃定製', image: '/paterson/product-series-guangyin.webp', tags: ['客廳空間', '現代風格', '經典款'] },
            { title: '原野系列', category: '衣櫃定製', image: '/paterson/product-series-yuanye.webp', tags: ['臥房空間', '現代風格', '青春款'] },
            { title: '養寵空間', category: '衣櫃定製', image: '/paterson/product-pet-living-space.webp', tags: ['客廳空間', '未來風格', '青春款'] },
            { title: '情侶電競房', category: '衣櫃定製', image: '/paterson/product-gaming-bedroom.webp', tags: ['臥房空間', '未來風格', '青春款'] },
            { title: '水漆衣櫃定製', category: '衣櫃定製', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['臥房空間', '水漆工藝', '櫃牆門'] }
          ]
        },
        櫥櫃定製: {
          filters: [
            { label: '系列', options: ['全部', '飾面系列', '烤漆系列', '膜壓系列', '實木系列'] },
            { label: '風格', options: ['全部', '歐式風格', '現代風格', '新中式風格', '輕奢風格', '美式風格', '未來風格'] },
            { label: '款式', options: ['全部', 'L型櫥櫃', 'U型櫥櫃', '一字型櫥櫃', '島型櫥櫃'] }
          ],
          items: [
            { title: '櫥櫃功能配件希爾斯', category: '櫥櫃定製', image: '/paterson/product-cabinet-hills.webp', tags: ['飾面系列', '現代風格', 'L型櫥櫃'] },
            { title: '阿爾卑斯P', category: '櫥櫃定製', image: '/paterson/product-cabinet-alps.webp', tags: ['烤漆系列', '輕奢風格', '島型櫥櫃'] },
            { title: '卡森Max', category: '櫥櫃定製', image: '/paterson/product-cabinet-kasen.webp', tags: ['膜壓系列', '現代風格', 'U型櫥櫃'] },
            { title: '寫意Nature', category: '櫥櫃定製', image: '/paterson/product-cabinet-nature.webp', tags: ['實木系列', '新中式風格', '一字型櫥櫃'] },
            { title: '慕莎P', category: '櫥櫃定製', image: '/paterson/product-cabinet-musha.webp', tags: ['烤漆系列', '歐式風格', 'L型櫥櫃'] },
            { title: '莫奈P', category: '櫥櫃定製', image: '/paterson/product-cabinet-monet.webp', tags: ['飾面系列', '美式風格', 'U型櫥櫃'] }
          ]
        },
        百得勝傢俱: {
          filters: [
            { label: '場景', options: ['全部', '客廳', '餐廳', '臥房', '多功能空間'] },
            { label: '型別', options: ['全部', '收納櫃', '餐邊櫃', '寵物空間', '電競空間'] }
          ],
          items: [
            { title: '光引客餐廳傢俱', category: '百得勝傢俱', image: '/paterson/product-series-guangyin.webp', tags: ['客廳', '收納櫃', '現代風格'] },
            { title: '日咖夜酒餐邊櫃', category: '百得勝傢俱', image: '/paterson/product-series-yuanye.webp', tags: ['餐廳', '餐邊櫃', '輕奢風格'] },
            { title: '養寵空間', category: '百得勝傢俱', image: '/paterson/product-pet-living-space.webp', tags: ['多功能空間', '寵物空間', '未來風格'] },
            { title: '情侶電競房', category: '百得勝傢俱', image: '/paterson/product-gaming-bedroom.webp', tags: ['臥房', '電競空間', '未來風格'] }
          ]
        },
        百兒未來家: {
          filters: [
            { label: '年齡', options: ['全部', '幼童', '學齡', '青少年'] },
            { label: '功能', options: ['全部', '學習區', '收納區', '睡眠區', '成長空間'] }
          ],
          items: [
            { title: '百兒未來家成長房', category: '百兒未來家', image: '/paterson/product-children-room.webp', tags: ['學齡', '學習區', '成長空間'] },
            { title: '兒童收納學習系統', category: '百兒未來家', image: '/paterson/product-bedroom-system.webp', tags: ['青少年', '收納區', '學習區'] },
            { title: '健康睡眠兒童房', category: '百兒未來家', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['幼童', '睡眠區', '成長空間'] }
          ]
        }
      }
    },
    intro: {
      eyebrow: '水漆衣櫃定製',
      title: '把環保定製做成可感知的產品語言',
      description: '百得勝水漆衣櫃強調基材無醛新增、面材水漆木皮、3 底 2 面 72 道純水漆工藝，把環保、質感和收納體驗放進真實生活空間。',
      proof: '水漆定製不是單一櫃體賣點，而是貫穿材料、工藝、櫃牆門協同和整家空間的一整套產品系統。',
      imageAlt: '百得勝水漆衣櫃定製空間',
      captionEyebrow: '水漆衣櫃定製',
      caption: '水漆衣櫃、環保材料與整家風格共同構成百得勝產品系統的核心表達。'
    },
    systems: {
      eyebrow: '空間系統',
      title: '從單品列表升級為空間解決方案',
      description: '產品系統不只羅列衣櫃、櫥櫃和傢俱，而是以真實空間呈現臥房、客餐廳、兒童房和多功能生活場景的整家定製價值。',
      items: [
        {
          title: '臥房系統',
          description: '以水漆衣櫃、護牆、床頭與收納組合形成健康臥房表達，適合承接康氧臥房與環保材料主張。',
          image: '/paterson/product-series-tiya.webp',
          tags: ['水漆衣櫃', '臥房收納', '櫃牆協同']
        },
        {
          title: '客餐廳系統',
          description: '以電視櫃、餐邊櫃、展示收納和背景牆統一空間語言，讓整家風格在家庭公共區先被看見。',
          image: '/paterson/product-series-guangyin.webp',
          tags: ['客廳空間', '餐邊櫃', '整家風格']
        },
        {
          title: '自然生活系統',
          description: '圍繞木質紋理、留白比例與輕高定質感，呈現更溫和、更耐看的全屋定製空間。',
          image: '/paterson/product-series-yuanye.webp',
          tags: ['原野系列', '自然質感', '輕高定']
        },
        {
          title: '養寵空間',
          description: '把寵物活動、清潔收納與家庭公共空間整合，回應年輕家庭對複合生活場景的需求。',
          image: '/paterson/product-pet-living-space.webp',
          tags: ['寵物友好', '複合收納', '家庭互動']
        },
        {
          title: '電競臥房',
          description: '兼顧休息、雙人娛樂、桌面裝置和氛圍燈光，回應年輕家庭對個性化臥房的期待。',
          image: '/paterson/product-gaming-bedroom.webp',
          tags: ['情侶電競房', '年輕客群', '燈光氛圍']
        },
        {
          title: '櫃牆門一體化系統',
          description: '通過材質、色彩、比例和收口協同，把衣櫃、牆面、門與傢俱納入統一交付標準。',
          image: '/paterson/product-water-paint-wardrobe.webp',
          tags: ['櫃牆門', '統一交付', '整家風格']
        }
      ]
    },
    features: {
      eyebrow: '產品優勢',
      title: '好看、環保、耐用，才是真正的整家產品力',
      description: '百得勝區別於普通全屋定製的核心證據，來自水漆工藝、空間化表達、系列化產品和穩定交付標準。',
      items: [
        { icon: 'i-lucide-droplets', title: '水漆工藝背書', description: '用無醛新增基材、水漆木皮和多道水漆工藝建立環保與質感的共同記憶點。' },
        { icon: 'i-lucide-layout-grid', title: '空間系統表達', description: '以入戶、客餐廳、臥房、陽臺等空間組織產品，讓整家價值比單品清單更直觀。' },
        { icon: 'i-lucide-store', title: '真實場景呈現', description: '真實空間圖、系列名和賣點標籤共同呈現產品風格、環保價值與生活方式。' },
        { icon: 'i-lucide-factory', title: '供應鏈協同', description: '櫃體、牆面、門板與傢俱統一標準，減少風格割裂和交付不穩定。' }
      ]
    },
    series: {
      eyebrow: '產品系列',
      title: '真實系列名，真實空間氣質',
      description: '媞雅、光引、原野等產品系列承載不同空間氣質，以更剋制的方式呈現百得勝水漆整家的生活美學。',
      items: [
        { title: '媞雅系列', subtitle: '精緻臥房與整家質感', description: '以柔和材質、細膩比例和水漆表面質感強化臥房系統的高階感。', image: '/paterson/product-series-tiya.webp', meta: 'Bedroom' },
        { title: '光引系列', subtitle: '明亮公共空間', description: '用輕盈線條和明亮空間感承接客餐廳、展示櫃與生活收納需求。', image: '/paterson/product-series-guangyin.webp', meta: 'Living' },
        { title: '原野系列', subtitle: '自然整家表達', description: '更強調木紋、留白與溫潤氣質，適合環保整家定製的生活方式敘事。', image: '/paterson/product-series-yuanye.webp', meta: 'Nature' },
        { title: '情侶電競房', subtitle: '年輕化生活場景', description: '把裝置收納、雙人使用和氛圍感整合到臥房系統，回應年輕一代的生活方式。', image: '/paterson/product-gaming-bedroom.webp', meta: 'Gaming' }
      ]
    },
    delivery: {
      eyebrow: '空間落地',
      title: '產品系統走進真實生活',
      description: '從產品組合、空間樣板到交付標準，百得勝讓城市合夥人更清楚地呈現水漆整家的價值。',
      steps: [
        { title: '產品組合建議', description: '依據目標城市、店面面積和客群定位，規劃主推空間與樣板組合。' },
        { title: '設計與內容支援', description: '圍繞系列圖、空間賣點和水漆工藝，形成清晰一致的品牌表達。' },
        { title: '空間場景呈現', description: '把臥房、客餐廳、寵物、電競等高感知空間做成可體驗的生活場景。' },
        { title: '交付標準協同', description: '以櫃牆門系統和供應鏈標準保障風格、材質與安裝效果的一致性。' }
      ]
    },
    cta: {
      eyebrow: '產品加盟資料',
      title: '想了解百得勝產品系統如何配置到你的城市？',
      description: '提交意向城市與聯絡方式，招商顧問可結合你的店面資源介紹產品組合、樣板規劃和加盟支援政策。',
      primary: '提交加盟諮詢',
      secondary: '撥打招商熱線'
    },
    title: '產品系統',
    subtitle: '圍繞水漆櫃牆門系統、廚房收納與兒童成長空間，構建完整環保整家定製方案。',
    defaultCategory: '全部',
    searchPlaceholder: '搜尋產品或空間',
    empty: '暫無匹配的產品內容',
    categories: ['全部', '臥室系統', '廚房系統', '兒童空間'],
    items: [
      { title: '水漆衣櫃定製', summary: '以水漆工藝和整家設計語言，打造環保、耐看、易收納的臥室系統。', category: '臥室系統', detailPath: '/data/bedroom-system' },
      { title: '環保櫥櫃定製', summary: '圍繞廚房動線、收納效率與健康材料，提供高顏值櫥櫃定製方案。', category: '廚房系統', detailPath: '/data/kitchen-system' },
      { title: '百兒未來家', summary: '面向兒童成長需求，打造兼顧學習、收納、休息和想像力的成長空間。', category: '兒童空間', detailPath: '/data/children-room' }
    ],
    detail: {
      title: '水漆整家定製方案',
      category: '產品系統',
      summary: '以水漆櫃牆門系統為核心，為家庭空間提供環保、統一、可落地的整家定製方案。',
      description: '百得勝產品系統將臥室、廚房、兒童房等高頻生活空間納入統一設計語言，通過水漆工藝、櫃牆門協同和交付標準，清晰呈現環保整家定製價值。',
      featuresHeading: '核心特點',
      features: ['水漆工藝與環保材料協同', '櫃牆門系統化設計', '適配整家空間與加盟落地'],
      specsHeading: '方案資訊',
      specifications: [
        { label: '適用空間', value: '臥室 / 廚房 / 兒童房 / 全屋' },
        { label: '合作支援', value: '產品、設計、建店、營銷與運營支援' }
      ],
      backLabel: '返回產品系統',
      ctaHeading: '獲取產品系統與加盟資料',
      ctaSubtitle: '留下聯絡方式，招商顧問將結合你的城市與店面資源介紹適合的產品組合。',
      ctaButton: '諮詢產品加盟'
    }
  },
  articlesPage: {
    title: '新聞中心',
    subtitle: '關注百得勝 Paterson 的水漆科技、行業標準、品牌榮譽、展會動態與招商資訊。',
    readMore: '檢視詳情',
    empty: '暫無新聞內容',
    back: '返回新聞中心',
    imagePlaceholder: 'Paterson 新聞圖片',
    sectionNavAria: '新聞中心頁面導航',
    sectionNav: [
      { label: '新聞快訊', href: '#updates' },
      { label: '最新活動', href: '#activities' }
    ],
    hero: {
      eyebrow: '新聞中心',
      titleLine1: '看見水漆整家',
      titleLine2: '持續向前的證據',
      subtitle: '從核心技術認證、產品標準到展會活動，百得勝以可驗證的品牌動態呈現水漆整家定製的長期價值。',
      imageAlt: '百得勝 Paterson 新聞中心形象'
    },
    highlights: [
      { value: '水漆', label: '核心科技', description: '圍繞全水性塗飾、環保材料和櫃牆門系統，建立清晰的品牌技術背書。' },
      { value: '整家', label: '空間表達', description: '通過衣櫃、櫥櫃、兒童房和輕高定空間，呈現完整生活方案。' },
      { value: '加盟', label: '市場信任', description: '新聞、展會和案例共同呈現百得勝面向市場的長期品牌信任。' }
    ],
    featured: {
      eyebrow: '重點動態',
      title: '水漆科技與品牌動態',
      description: '聚焦水漆核心科技、行業標準、展會活動與健康家居趨勢，記錄百得勝在環保整家定製領域的持續進展。'
    },
    updates: {
      eyebrow: '新聞快訊',
      title: '水漆定製、健康家居與行業動態'
    },
    activities: {
      eyebrow: '最新活動',
      title: '品牌活動與使用者互動',
      description: '品牌活動集中呈現全國促銷、直播互動和水漆定製認知活動，讓百得勝與更多家庭建立連線。',
      items: [
        {
          id: 1724,
          categoryId: 4,
          category: '最新活動',
          date: '2021-10-08',
          browse: 0,
          image: '/paterson/news-activity-sanya.webp',
          intro: '奧運冠軍組團邀消費者遊三亞，“水漆定製櫃 當然百得勝”活動以更輕鬆的方式放大水漆定製認知。',
          slug: 'waterborne-cabinet-sanya-campaign',
          title: '奧運冠軍組團邀您遊三亞，“水漆定製櫃 當然百得勝”活動花式禮獻全國！',
          content: [
            '百得勝圍繞“水漆定製櫃 當然百得勝”展開全國活動傳播，用更容易參與的方式強化水漆定製櫃認知。',
            '活動將奧運冠軍、旅行權益與家居消費場景結合，讓品牌傳播不只停留在產品引數，也連線到家庭裝修決策和生活期待。',
            '活動讓消費者在促銷節點更快記住百得勝水漆定製的品牌主張，也讓健康家居選擇更具體。'
          ]
        },
        {
          id: 1722,
          categoryId: 4,
          category: '最新活動',
          date: '2021-10-07',
          browse: 0,
          image: '/paterson/news-activity-luo-xuejuan.webp',
          intro: '百得勝借奧運冠軍羅雪娟的裝修話題，講清水漆實木定製櫃無味、親膚和環保價值。',
          slug: 'luo-xuejuan-renovation-waterborne-cabinet',
          title: '雅典奧運會冠軍羅雪娟也有裝修煩惱？小問題，別慌！',
          content: [
            '活動內容以真實裝修煩惱切入，把水漆實木定製櫃的環保、無味和親膚價值轉化為消費者容易理解的話題。',
            '百得勝在水漆定製櫃上的持續表達，讓健康材料和整櫃環保不再只是技術說明，而是面向家庭生活的具體選擇。',
            '故事化內容讓水漆產品的消費場景更具體，也提升使用者對環保定製的感知。'
          ]
        },
        {
          id: 91,
          categoryId: 4,
          category: '最新活動',
          date: '2021-04-19',
          browse: 0,
          image: '/paterson/news-activity-pet-ai.webp',
          intro: '百得勝寵 ai 定製節結合直播與活動權益，集中釋放品牌互動聲量。',
          slug: 'pet-ai-custom-festival',
          title: '寵ai定製節丨明星主持李艾空降百得勝直播間，撒千萬豪禮只為寵ai你！',
          content: [
            '百得勝寵 ai 定製節通過直播、明星主持和活動權益，提升消費者對品牌活動的參與感。',
            '活動以更輕鬆的傳播方式連線定製家居消費需求，在重要節點形成更鮮明的品牌話題。',
            '這類活動內容補充新聞快訊之外的品牌溫度，讓新聞中心同時呈現行業動態和使用者互動。'
          ]
        }
      ]
    },
    cta: {
      eyebrow: '招商加盟',
      title: '從品牌動態看見百得勝長期實力',
      description: '瞭解百得勝水漆整家定製的產品體系、技術背書和總部支援，獲取適合本地市場的加盟資料。',
      button: '諮詢加盟支援'
    },
    fallback: [
      {
        id: 4029,
        categoryId: 1,
        category: '水漆定製',
        date: '2026-01-12',
        browse: 0,
        image: '/paterson/product-cabinet-intro.webp',
        intro: '當健康成為家裝首要考量，水漆定製櫃憑藉效能與質感進入更多家庭視野。百得勝以清晰的水漆戰略，成為環保定製的重要代表。',
        slug: 'waterborne-cabinet-brand',
        title: '水漆定製櫃什麼牌子好用？國內十大品牌百得勝不翻車！',
        content: [
          '健康、環保和長期耐用正在成為家庭定製櫃選擇的核心標準。水漆定製櫃以水性塗飾工藝、細膩質感和更友好的居住體驗，回應了消費者對安心裝修的期待。',
          '百得勝圍繞水漆櫃牆門系統持續構建產品表達，讓“全屋定製”進一步連線材料、工藝、空間和健康價值。',
          '水漆定製的差異化不只來自環保主張，也來自能夠落到整家方案中的完整產品能力。'
        ]
      },
      {
        id: 4028,
        categoryId: 1,
        category: '健康家居',
        date: '2026-01-04',
        browse: 0,
        image: '/paterson/news-waterborne-renovation.webp',
        intro: '全屋環保水漆定製正在成為更多家庭的裝修選擇。百得勝以環保技術和成熟產品體系，為健康家居提供更完整的解決方案。',
        slug: 'waterborne-renovation',
        title: '裝修真沒味兒！選國內水漆定製主流品牌百得勝',
        content: [
          '新房裝修後的異味和材料安全，是許多家庭最敏感的問題。水漆定製從塗飾源頭減少傳統裝修材料帶來的顧慮，讓健康家居不只停留在口號上。',
          '百得勝通過水漆工藝、環保材料和整家產品系統，把衣櫃、櫥櫃、臥房和兒童空間納入統一的健康表達。',
          '當消費者走進門店時，清晰的水漆定製方案可以幫助他們更直觀地看見環保、質感和空間功能如何同時落地。'
        ]
      },
      {
        id: 4027,
        categoryId: 1,
        category: '產品系統',
        date: '2025-12-18',
        browse: 0,
        image: '/paterson/news-premium-wardrobe.webp',
        intro: '高階衣櫃選擇不只看外觀，也要看環保、品質與長期使用體驗。百得勝以主流水漆定製能力回應家庭核心收納需求。',
        slug: 'premium-waterborne-wardrobe',
        title: '高階衣櫃別亂訂！認準主流水漆定製放心品牌百得勝',
        content: [
          '衣櫃是全屋定製中使用頻率最高、與居住健康關係最密切的系統之一。高階衣櫃不僅需要好看，也要在環保、耐用和收納體驗上經得起長期使用。',
          '百得勝將水漆工藝與臥室空間設計結合，讓衣櫃產品兼顧質感、環保和整體家居風格。',
          '從材料安全到櫃體品質，再到完整臥房方案，百得勝讓高階衣櫃擁有更完整的價值錨點。'
        ]
      },
      {
        id: 4026,
        categoryId: 1,
        category: '品牌背書',
        date: '2025-11-06',
        browse: 0,
        image: '/paterson/news-healthy-home-choice.webp',
        intro: '環保與健康成為家居裝修核心議題。百得勝水漆定製以技術創新連線安全、審美和整家交付，成為家庭安心選擇。',
        slug: 'healthy-home-choice',
        title: '家裝安心之選：認準水漆定製十大品牌百得勝',
        content: [
          '消費者對家裝安全的關注，正在推動定製家居行業從單一外觀競爭走向材料、工藝和空間體驗的綜合競爭。',
          '百得勝以水漆定製為核心，將環保技術、家居美學和整家方案連線起來，幫助家庭減少裝修顧慮。',
          '品牌背書與產品差異化共同支撐百得勝在本地市場建立更穩定的使用者信任。'
        ]
      },
      {
        id: 4025,
        categoryId: 2,
        category: '技術認證',
        date: '2025-11-05',
        browse: 0,
        image: '/paterson/news-waterborne-tech-certification.webp',
        intro: '百得勝“高硬度全水性塗料塗飾家居板件”及關鍵技術獲院士領銜專家組認證，達到國際領先水平。',
        slug: 'waterborne-technology-certification',
        title: '國際領先 - 百得勝家居水漆核心科技成果獲院士領銜專家組認證，產學研深度融合引領定製家居綠色革命',
        content: [
          '官網新聞顯示，百得勝家居聯合中國林業科學研究院木材工業研究所完成的“高硬度全水性塗料塗飾家居板件”及關鍵技術，獲得院士領銜專家組認證。',
          '該成果圍繞全水性連續化塗飾、漆膜效能和綠色製造展開，為水漆櫃牆門系統提供更強的技術可信度。',
          '技術認證不僅是品牌榮譽，也讓水漆整家定製的環保價值擁有更清晰、更專業的背書。'
        ]
      },
      {
        id: 4004,
        categoryId: 3,
        category: '展會新聞',
        date: '2025-03-17',
        browse: 0,
        image: '/paterson/news-custom-home-expo-2025.webp',
        intro: '百得勝攜水漆輕高定根技術與空間場景亮相廣州定製家居展，集中展示水漆整家的空間表達。',
        slug: 'custom-home-expo-2025',
        title: '水漆輕高定丨百得勝攜3大根技術 3大輕高定空間場景，即將亮相廣州定製家居展',
        content: [
          '展會是品牌向行業與加盟夥伴集中展示產品系統、技術方向和空間表達的重要視窗。',
          '百得勝以水漆輕高定為核心，將根技術與空間場景結合，讓參觀者更直觀看到水漆整家定製的生活方式呈現。',
          '展會動態持續放大百得勝水漆輕高定的品牌聲量，也讓城市合夥人看到更完整的合作前景。'
        ]
      }
    ]
  },
  contactPage: {
    seo: {
      title: '招商加盟_百得勝 Paterson 水漆整家定製加盟諮詢',
      description: '瞭解百得勝 Paterson 水漆整家定製加盟優勢、總部支援、合作流程與招商政策，提交意向城市與聯絡方式獲取加盟資料。',
      keywords: '百得勝加盟,Paterson 加盟,全屋定製加盟,水漆整家定製加盟,招商諮詢'
    },
    title: '招商加盟',
    subtitle: '以水漆櫃牆門系統、環保整家定製和總部全鏈路支援，幫助城市合夥人建立更有差異化的定製家居門店。',
    sectionNavAria: '招商加盟頁面導航',
    sectionNav: [
      { label: '加盟機會', href: '#opportunity' },
      { label: '總部支援', href: '#support' },
      { label: '合作流程', href: '#process' },
      { label: '提交諮詢', href: '#inquiry' }
    ],
    hero: {
      eyebrow: '招商加盟',
      titleLine1: '水漆整家定製',
      titleLine2: '加盟新增長',
      subtitle: '百得勝 Paterson 以德爾未來上市公司背景、水漆櫃牆門系統和成熟終端運營支援，為城市合夥人提供從產品、建店到營銷運營的加盟路徑。',
      primaryCta: '提交加盟諮詢',
      imageAlt: '百得勝 Paterson 招商加盟門店支援形象',
      metrics: [
        { value: '2001', label: '品牌創立，長期深耕定製家居領域' },
        { value: '002631', label: '德爾未來上市公司股票程式碼' },
        { value: '全鏈路', label: '產品、供應鏈、設計、建店、營銷與運營支援' }
      ]
    },
    opportunity: {
      eyebrow: '加盟機會',
      title: '以水漆整家定製，開啟健康家居新生意',
      description: '當消費者更關注環保、質感與一站式空間體驗，水漆櫃牆門系統讓門店擁有更鮮明的產品主張。百得勝以真實空間、健康材料與整家方案，幫助加盟門店講好健康定製的價值。',
      imageAlt: '百得勝水漆整家定製生活空間'
    },
    proof: {
      items: [
        { value: '水漆', label: '健康環保主張', description: '以水漆衣櫃、康氧臥房和櫃牆門系統，形成區別於普通全屋定製門店的品牌記憶。' },
        { value: '整家', label: '完整空間體驗', description: '從衣櫃延展到廚房、臥房、兒童房和客餐廳，讓消費者在門店看見更完整的家。' },
        { value: '總部', label: '開店運營陪伴', description: '圍繞選址建店、設計培訓、營銷活動和數智化工具，陪伴加盟商穩健起步。' }
      ]
    },
    support: {
      eyebrow: '總部支援',
      title: '從品牌到終端，陪伴門店穩健開局',
      description: '百得勝為城市合夥人提供品牌、產品、供應鏈、設計、營銷和運營支援，讓門店從形象搭建、團隊訓練到開業推廣都更有章法。',
      items: [
        { icon: 'i-lucide-award', title: '品牌優勢', description: '2001 年品牌積累、德爾未來上市公司背景與水漆科技背書，為城市市場建立信任基礎。' },
        { icon: 'i-lucide-layout-grid', title: '產品優勢', description: '水漆櫃牆門系統、衣櫃櫥櫃與整家空間方案協同，形成更有辨識度的展廳體驗。' },
        { icon: 'i-lucide-factory', title: '供應鏈優勢', description: '以材料、工藝、生產與交付能力支撐終端品質，讓好產品穩定走進更多家庭。' },
        { icon: 'i-lucide-pencil-ruler', title: '設計支援', description: '圍繞空間方案、展廳形象、終端物料與產品培訓，呈現更貼近生活的整家定製體驗。' },
        { icon: 'i-lucide-megaphone', title: '營銷支援', description: '結合開業活動、節日節點、內容傳播與總部物料，幫助門店持續吸引本地客群。' },
        { icon: 'i-lucide-chart-no-axes-combined', title: '數智運營支援', description: '以運營方法、資料工具和持續培訓，陪伴門店做好客戶跟進、成交轉化與服務管理。' }
      ]
    },
    process: {
      eyebrow: '合作流程',
      title: '從初次溝通到門店開業，一路有總部支援',
      description: '百得勝招商團隊將圍繞城市市場、店面資源與經營規劃，與意向合夥人逐步溝通合作細節。',
      steps: [
        { title: '線上諮詢', description: '留下聯絡方式與意向城市，開啟百得勝加盟溝通。' },
        { title: '總部溝通', description: '招商顧問介紹品牌實力、產品體系、合作政策與開店支援。' },
        { title: '實地考察', description: '走近總部或標杆門店，感受水漆整家定製的產品與終端形象。' },
        { title: '城市洽談', description: '圍繞當地市場、店面資源和投入規劃，溝通適合的合作方案。' },
        { title: '簽約合作', description: '確認合作區域、門店規劃與支援內容，正式成為城市合夥人。' },
        { title: '建店培訓', description: '推進門店設計、樣品配置、團隊培訓與開業籌備。' },
        { title: '開業扶持', description: '總部協助開業活動、物料投放、銷售演練與首批客戶承接。' },
        { title: '持續運營', description: '通過營銷、培訓、運營覆盤與新品匯入，陪伴門店長期成長。' }
      ]
    },
    inquiry: {
      eyebrow: '提交諮詢',
      title: '留下加盟意向，獲取百得勝合作資料',
      description: '填寫聯絡方式與意向城市後，招商顧問將盡快與你溝通水漆整家定製加盟政策。'
    },
    infoTitle: '招商聯絡資訊',
    hours: '諮詢時間：09:00 - 18:00',
    labels: {
      address: '總部地址',
      phone: '招商熱線',
      email: '聯絡郵箱',
      hours: '諮詢時間'
    }
  },
  designSystemPage: {
    seo: {
      title: '品牌視覺',
      description: '瞭解 Paterson 百得勝官網的品牌色彩、字型層級、空間排版與互動風格。',
      keywords: 'Paterson 品牌視覺,百得勝官網,品牌色彩,空間設計'
    },
    title: '品牌視覺',
    subtitle: '以暖白、深木色、香檳金和真實空間圖，呈現成熟、健康、可信的水漆整家定製品牌氣質。',
    sections: {
      philosophy: '設計原則',
      colors: '顏色',
      typography: '字型',
      layout: '佈局',
      components: '介面元素',
      interaction: '互動'
    },
    philosophy: {
      brandTitle: '品牌基調',
      brand: '視覺語言保持高階穩重、健康環保和真實空間感，避免促銷化、模板化和過度科技化。',
      directionTitle: '設計方向',
      direction: '頁面以寬鬆留白、清晰層級、剋制動效和真實家居圖片建立品牌信任，並服務加盟轉化。',
      keywords: ['穩重', '健康', '真實空間', '招商轉化']
    },
    colorIntro: '主色以暖白、深木黑、深木色和香檳金為基礎，品牌紅黃只用於小面積強調。',
    typographyIntro: '中文標題剋制穩重，正文保持舒適閱讀，英文只作為輔助標籤而不搶佔主視覺。',
    layoutGrid: '頁面採用寬屏內容容器和響應式分欄，讓空間圖、品牌資訊和加盟行動保持清晰節奏。',
    layoutWhitespace: '區塊間距保持舒展，避免傳統招商長圖式的擁擠資訊堆疊。',
    samples: {
      hero: '水漆整家定製加盟新增長',
      h1: '品牌首頁標題',
      h2: '核心區塊標題',
      h3: '內容卡片標題'
    },
    preview: {
      primaryButton: '主要按鈕',
      secondaryButton: '次要按鈕',
      ghostButton: '幽靈按鈕',
      smallButton: '小按鈕',
      largeButton: '大按鈕',
      cardTitle: '內容卡片',
      cardDescription: '用於呈現產品系統、品牌實力或新聞內容，保持清晰邊界和穩定排版。',
      cardAltTitle: '資訊卡片',
      cardAltDescription: '適合展示技術亮點、招商支援或頁面摘要。',
      heroTitle: 'Paterson 百得勝',
      heroSubtitle: '水漆整家定製、康氧健康空間與加盟支援共同構成的品牌官網體驗。',
      heroCta: '檢視詳情'
    }
  },
  legal: {
    eyebrow: '法律資訊',
    lastUpdated: '最後更新',
    privacy: {
      seo: {
        title: '隱私政策',
        description: '瞭解我們如何收集、使用、儲存和保護你的個人資訊。',
        keywords: '隱私政策,個人資訊保護,Cookie'
      },
      title: '隱私政策',
      description: '瞭解我們如何收集、使用、儲存和保護個人資訊。',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: '我們如何處理資訊',
          paragraphs: [
            '我們僅在提供服務、響應諮詢、保障安全和改進體驗所需的範圍內處理資訊。',
            '你提交的加盟諮詢資訊將用於需求溝通、城市機會評估和後續服務聯絡。未經授權，我們不會將個人資訊用於無關用途。'
          ]
        }
      ]
    },
    terms: {
      seo: {
        title: '使用條款',
        description: '檢視訪問和使用本網站時適用的基本條款。',
        keywords: '使用條款,網站條款,服務條款'
      },
      title: '使用條款',
      description: '檢視訪問和使用本網站時適用的基本條款。',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: '使用本網站',
          paragraphs: [
            '訪問本網站即表示你同意遵守適用法律，並以合理、合法的方式使用網站內容。',
            '網站中的品牌、圖片、文字和產品資訊用於介紹 Paterson 百得勝相關業務，未經授權不得用於誤導性展示或商業複製。'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
