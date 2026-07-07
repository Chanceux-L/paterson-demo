const common = {
  all: '全部',
  apply: '应用',
  back: '返回',
  breadcrumb: '面包屑导航',
  clear: '清除',
  clearAll: '清除全部',
  close: '关闭',
  home: '首页',
  inquiry: '咨询',
  loadMore: '加载更多',
  loading: '加载中',
  nextImage: '下一张图片',
  nextPage: '下一页',
  none: '暂无',
  previousImage: '上一张图片',
  previousPage: '上一页',
  showLess: '收起',
  showMore: '展开',
  viewImageIndex: '查看第 {index} 张图片'
};

const navItems = [
  { label: '首页', english: 'Home', href: '/' },
  { label: '关于', english: 'About', href: '/about' },
  { label: '理念', english: 'Philosophy', href: '/philosophy' },
  { label: '数据', english: 'Data', href: '/data' },
  { label: '文章', english: 'Articles', href: '/articles' },
  { label: '联系', english: 'Contact', href: '/contact' },
  { label: '设计系统', english: 'Design System', href: '/palette' }
];

const pageSeo = {
  home: {
    seo: {
      title: '[[HOME_SEO_TITLE]]',
      description: '[[HOME_SEO_DESCRIPTION]]',
      keywords: '[[HOME_SEO_KEYWORDS]]'
    }
  },
  about: {
    seo: {
      title: '[[ABOUT_SEO_TITLE]]',
      description: '[[ABOUT_SEO_DESCRIPTION]]',
      keywords: '[[ABOUT_SEO_KEYWORDS]]'
    }
  },
  articles: {
    seo: {
      title: '[[ARTICLES_SEO_TITLE]]',
      description: '[[ARTICLES_SEO_DESCRIPTION]]',
      keywords: '[[ARTICLES_SEO_KEYWORDS]]'
    },
    detailSeo: {
      title: '[[ARTICLE_DETAIL_SEO_TITLE]]',
      description: '[[ARTICLE_DETAIL_SEO_DESCRIPTION]]',
      keywords: '[[ARTICLE_DETAIL_SEO_KEYWORDS]]'
    }
  },
  contact: {
    inquiry: {
      eyebrow: '联系咨询',
      title: '告诉我们你的需求',
      description: '填写表单后，我们会根据你提供的信息尽快与你联系。上线前可按业务场景调整字段说明和提交接口。',
      name: '姓名',
      namePlaceholder: '请输入你的姓名',
      missingName: '请填写姓名',
      phoneCountry: '国家或地区',
      phoneCountrySearch: '搜索国家或地区代码',
      phone: '手机号',
      phonePlaceholder: '请输入联系电话',
      email: '邮箱',
      emailPlaceholder: '请输入邮箱地址',
      company: '公司',
      companyPlaceholder: '请输入公司名称',
      message: '需求说明',
      messagePlaceholder: '请简单描述你的需求、项目背景或希望了解的内容',
      missingMessage: '请填写需求说明',
      captcha: '验证码',
      captchaPlaceholder: '请输入验证码',
      captchaAlt: '验证码图片',
      missingCaptcha: '请填写验证码',
      submit: '提交咨询',
      submitting: '提交中',
      success: '提交成功，我们会尽快与你联系。',
      missingPhone: '请填写联系电话',
      invalidPhone: '请输入有效的联系电话',
      failed: '提交失败，请稍后重试'
    }
  }
};

const starter = {
  site: {
    name: 'Starter'
  },
  common,
  languageSwitcher: {
    aria: '切换语言',
    label: '语言',
    localeName: '简体中文',
    search: '搜索语言',
    empty: '暂无可选语言',
    languages: {
      'zh-CN': {
        label: '简体中文',
        localeName: '简体中文',
        searchTerms: ['中文', '汉语', 'zh']
      },
      'en': {
        label: 'English',
        localeName: 'English',
        searchTerms: ['英文', '英语', 'en']
      }
    }
  },
  nav: {
    homeAria: '返回首页',
    logoAlt: '站点标识',
    sloganAlt: '通用企业站 Starter',
    menu: '菜单',
    mainNav: '主导航',
    memberCenter: '会员中心',
    hotline: '服务热线',
    items: navItems,
    search: {
      scrollTop: '回到顶部'
    }
  },
  footer: {
    brandDescription: '一个保留 SEO、GEO、OG Image 与基础交互能力的企业站 Starter，可按需替换为真实业务内容。',
    slogan: '为快速交付而准备的通用站点底座',
    socials: [
      { icon: 'i-lucide-message-circle', label: '微信' },
      { icon: 'i-lucide-radio', label: '微博' },
      { icon: 'i-lucide-video', label: '短视频' },
      { icon: 'i-lucide-instagram', label: 'Instagram' },
      { icon: 'i-lucide-book-open', label: '小红书' },
      { icon: 'i-lucide-globe', label: 'LinkedIn' }
    ],
    columns: [
      {
        title: '站点',
        links: [
          { label: '关于', href: '/about' },
          { label: '理念', href: '/philosophy' },
          { label: '设计系统', href: '/palette' }
        ]
      },
      {
        title: '内容',
        links: [
          { label: '数据', href: '/data' },
          { label: '文章', href: '/articles' }
        ]
      },
      {
        title: '支持',
        links: [
          { label: '联系', href: '/contact' },
          { label: '会员中心', href: 'sourceRegisterUrl', external: true }
        ]
      }
    ],
    followUs: '联系信息',
    email: '邮箱',
    address: '地址',
    tagline: 'Starter shell for reusable enterprise websites.',
    copyright: '© 2026 Starter. 保留所有权利。',
    privacy: '隐私政策',
    terms: '使用条款',
    cookieSettings: 'Cookie 设置'
  },
  cookie: {
    title: 'Cookie 偏好设置',
    description: '我们使用必要 Cookie 保障网站运行，并在你同意时使用统计 Cookie 改善体验。',
    necessaryTitle: '必要 Cookie',
    necessaryDescription: '用于安全、语言、会话和基础功能，始终启用。',
    alwaysOn: '始终开启',
    statisticsTitle: '统计 Cookie',
    statisticsDescription: '帮助我们了解访问情况并改进页面体验。',
    manage: '管理设置',
    necessaryOnly: '仅必要',
    save: '保存设置',
    acceptAll: '接受全部'
  },
  skewUpdate: {
    title: '发现新版本',
    description: '网站已更新，刷新后可使用最新版本。',
    refresh: '立即刷新',
    dismiss: '稍后'
  },
  error: {
    pageLabel: '页面错误',
    action: '返回首页',
    contactAction: '联系我们',
    types: {
      badRequest: {
        eyebrow: '400',
        title: '请求格式有误',
        description: '当前请求无法被处理，请检查链接或返回首页继续浏览。'
      },
      unauthorized: {
        eyebrow: '401',
        title: '需要身份验证',
        description: '请完成验证后再访问该页面。'
      },
      forbidden: {
        eyebrow: '403',
        title: '暂无访问权限',
        description: '你当前没有权限查看该内容。'
      },
      notFound: {
        eyebrow: '404',
        title: '页面不存在',
        description: '你访问的页面可能已移动、删除，或链接输入有误。'
      },
      serverError: {
        eyebrow: '500',
        title: '服务器暂时不可用',
        description: '服务出现异常，请稍后重试。'
      },
      unavailable: {
        eyebrow: '503',
        title: '服务维护中',
        description: '网站正在维护或临时不可用，请稍后再试。'
      },
      defaultError: {
        eyebrow: 'ERROR',
        title: '出现了一些问题',
        description: '页面加载失败，请稍后重试或返回首页。'
      }
    }
  },
  cta: {
    title: '[[GLOBAL_CTA_TITLE]]',
    description: '[[GLOBAL_CTA_DESCRIPTION]]',
    action: '[[GLOBAL_CTA_ACTION]]',
    contactLabel: '[[GLOBAL_CTA_CONTACT_LABEL]]',
    bgText: '[[GLOBAL_CTA_BG_TEXT]]'
  },
  pages: pageSeo,
  data: {
    siteConfig: {
      companyName: '[[COMPANY_NAME]]',
      shortName: '[[COMPANY_SHORT_NAME]]',
      industry: '[[INDUSTRY]]',
      siteTitle: '[[SITE_TITLE]]',
      siteDescription: '[[SITE_DESCRIPTION]]',
      canonical: '[[SITE_CANONICAL]]',
      navigation: navItems.map(item => ({ label: item.label, path: item.href })),
      footerIntro: '[[FOOTER_INTRO]]',
      footerColumns: [
        {
          title: '[[FOOTER_COL1_TITLE]]',
          links: [
            { label: '[[NAV_ABOUT]]', path: '/about' },
            { label: '[[NAV_PHILOSOPHY]]', path: '/philosophy' }
          ]
        },
        {
          title: '[[FOOTER_COL2_TITLE]]',
          links: [
            { label: '[[NAV_DATA]]', path: '/data' },
            { label: '[[NAV_ARTICLES]]', path: '/articles' }
          ]
        }
      ]
    }
  },
  homePage: {
    hero: {
      badge: '[[HERO_BADGE]]',
      title: '[[HERO_TITLE]]',
      subtitle: '[[HERO_SUBTITLE]]',
      ctaLabel: '[[HERO_CTA_LABEL]]',
      cta2Label: '[[HERO_CTA2_LABEL]]',
      highlights: ['[[HERO_HIGHLIGHT_1]]', '[[HERO_HIGHLIGHT_2]]', '[[HERO_HIGHLIGHT_3]]']
    },
    stats: [
      { title: '[[STAT_1_VALUE]]', description: '[[STAT_1_LABEL]]', icon: 'i-lucide-factory' },
      { title: '[[STAT_2_VALUE]]', description: '[[STAT_2_LABEL]]', icon: 'i-lucide-award' },
      { title: '[[STAT_3_VALUE]]', description: '[[STAT_3_LABEL]]', icon: 'i-lucide-globe' },
      { title: '[[STAT_4_VALUE]]', description: '[[STAT_4_LABEL]]', icon: 'i-lucide-users' }
    ],
    capabilities: {
      title: '[[CAPABILITIES_TITLE]]',
      subtitle: '[[CAPABILITIES_SUBTITLE]]',
      items: [
        { icon: 'i-lucide-cpu', title: '[[CAP_1_TITLE]]', description: '[[CAP_1_DESC]]' },
        { icon: 'i-lucide-zap', title: '[[CAP_2_TITLE]]', description: '[[CAP_2_DESC]]' },
        { icon: 'i-lucide-lightbulb', title: '[[CAP_3_TITLE]]', description: '[[CAP_3_DESC]]' },
        { icon: 'i-lucide-shield', title: '[[CAP_4_TITLE]]', description: '[[CAP_4_DESC]]' },
        { icon: 'i-lucide-globe', title: '[[CAP_5_TITLE]]', description: '[[CAP_5_DESC]]' },
        { icon: 'i-lucide-award', title: '[[CAP_6_TITLE]]', description: '[[CAP_6_DESC]]' }
      ]
    },
    solutions: {
      title: '[[SOLUTIONS_TITLE]]',
      subtitle: '[[SOLUTIONS_SUBTITLE]]',
      items: [
        { title: '[[SOLUTION_1_TITLE]]', description: '[[SOLUTION_1_DESC]]', href: '/data' },
        { title: '[[SOLUTION_2_TITLE]]', description: '[[SOLUTION_2_DESC]]', href: '/data' },
        { title: '[[SOLUTION_3_TITLE]]', description: '[[SOLUTION_3_DESC]]', href: '/data' }
      ]
    },
    cta: {
      title: '[[HOME_CTA_TITLE]]',
      subtitle: '[[HOME_CTA_SUBTITLE]]',
      button: '[[HOME_CTA_BUTTON]]',
      button2: '[[HOME_CTA2_BUTTON]]'
    },
    faq: {
      items: [
        { question: '[[FAQ_1_Q]]', answer: '[[FAQ_1_A]]' },
        { question: '[[FAQ_2_Q]]', answer: '[[FAQ_2_A]]' }
      ]
    }
  },
  aboutPage: {
    header: {
      title: '[[ABOUT_PAGE_TITLE]]',
      subtitle: '[[ABOUT_PAGE_SUBTITLE]]'
    },
    story: {
      heading: '[[ABOUT_STORY_HEADING]]',
      paragraphs: ['[[ABOUT_STORY_P1]]', '[[ABOUT_STORY_P2]]', '[[ABOUT_STORY_P3]]'],
      imagePlaceholder: '[[ABOUT_IMAGE_PLACEHOLDER]]'
    },
    milestonesHeading: '[[ABOUT_MILESTONES_HEADING]]',
    milestones: [
      { icon: 'i-lucide-calendar', title: '[[MILESTONE_1_YEAR]]', description: '[[MILESTONE_1_DESC]]' },
      { icon: 'i-lucide-trending-up', title: '[[MILESTONE_2_YEAR]]', description: '[[MILESTONE_2_DESC]]' },
      { icon: 'i-lucide-target', title: '[[MILESTONE_3_YEAR]]', description: '[[MILESTONE_3_DESC]]' },
      { icon: 'i-lucide-eye', title: '[[MILESTONE_4_YEAR]]', description: '[[MILESTONE_4_DESC]]' }
    ],
    valuesHeading: '[[ABOUT_VALUES_HEADING]]',
    values: [
      { icon: 'i-lucide-heart', title: '[[ABOUT_VALUE_1_TITLE]]', description: '[[ABOUT_VALUE_1_DESC]]' },
      { icon: 'i-lucide-lightbulb', title: '[[ABOUT_VALUE_2_TITLE]]', description: '[[ABOUT_VALUE_2_DESC]]' },
      { icon: 'i-lucide-target', title: '[[ABOUT_VALUE_3_TITLE]]', description: '[[ABOUT_VALUE_3_DESC]]' }
    ],
    cta: {
      title: '[[ABOUT_CTA_TITLE]]',
      subtitle: '[[ABOUT_CTA_SUBTITLE]]',
      button: '[[ABOUT_CTA_BUTTON]]'
    }
  },
  philosophyPage: {
    seo: {
      title: '[[PHILOSOPHY_SEO_TITLE]]',
      description: '[[PHILOSOPHY_SEO_DESCRIPTION]]',
      keywords: '[[PHILOSOPHY_SEO_KEYWORDS]]'
    },
    header: {
      title: '[[PHILOSOPHY_PAGE_TITLE]]',
      subtitle: '[[PHILOSOPHY_PAGE_SUBTITLE]]'
    },
    intro: {
      heading: '[[PHILOSOPHY_INTRO_HEADING]]',
      paragraphs: ['[[PHILOSOPHY_INTRO_P1]]', '[[PHILOSOPHY_INTRO_P2]]'],
      imagePlaceholder: '[[PHILOSOPHY_IMAGE_PLACEHOLDER]]'
    },
    pillars: {
      heading: '[[PHILOSOPHY_PILLARS_HEADING]]',
      items: [
        { title: '[[PHILOSOPHY_PILLAR_1_TITLE]]', description: '[[PHILOSOPHY_PILLAR_1_DESC]]' },
        { title: '[[PHILOSOPHY_PILLAR_2_TITLE]]', description: '[[PHILOSOPHY_PILLAR_2_DESC]]' },
        { title: '[[PHILOSOPHY_PILLAR_3_TITLE]]', description: '[[PHILOSOPHY_PILLAR_3_DESC]]' },
        { title: '[[PHILOSOPHY_PILLAR_4_TITLE]]', description: '[[PHILOSOPHY_PILLAR_4_DESC]]' }
      ]
    },
    values: {
      heading: '[[PHILOSOPHY_VALUES_HEADING]]',
      items: [
        { title: '[[PHILOSOPHY_VALUE_1_TITLE]]', description: '[[PHILOSOPHY_VALUE_1_DESC]]' },
        { title: '[[PHILOSOPHY_VALUE_2_TITLE]]', description: '[[PHILOSOPHY_VALUE_2_DESC]]' },
        { title: '[[PHILOSOPHY_VALUE_3_TITLE]]', description: '[[PHILOSOPHY_VALUE_3_DESC]]' }
      ]
    },
    cta: {
      title: '[[PHILOSOPHY_CTA_TITLE]]',
      subtitle: '[[PHILOSOPHY_CTA_SUBTITLE]]',
      button: '[[PHILOSOPHY_CTA_BUTTON]]'
    }
  },
  dataPage: {
    seo: {
      title: '[[DATA_SEO_TITLE]]',
      description: '[[DATA_SEO_DESCRIPTION]]',
      keywords: '[[DATA_SEO_KEYWORDS]]'
    },
    title: '[[DATA_PAGE_TITLE]]',
    subtitle: '[[DATA_PAGE_SUBTITLE]]',
    defaultCategory: '[[DATA_CATEGORY_ALL]]',
    searchPlaceholder: '[[DATA_SEARCH_PLACEHOLDER]]',
    empty: '[[DATA_EMPTY_MESSAGE]]',
    categories: ['[[DATA_CATEGORY_ALL]]', '[[DATA_CATEGORY_1]]', '[[DATA_CATEGORY_2]]'],
    items: [
      { title: '[[DATA_ITEM_1_TITLE]]', summary: '[[DATA_ITEM_1_SUMMARY]]', category: '[[DATA_ITEM_1_CATEGORY]]', detailPath: '/data/[[DATA_ITEM_1_SLUG]]' },
      { title: '[[DATA_ITEM_2_TITLE]]', summary: '[[DATA_ITEM_2_SUMMARY]]', category: '[[DATA_ITEM_2_CATEGORY]]', detailPath: '/data/[[DATA_ITEM_2_SLUG]]' },
      { title: '[[DATA_ITEM_3_TITLE]]', summary: '[[DATA_ITEM_3_SUMMARY]]', category: '[[DATA_ITEM_3_CATEGORY]]', detailPath: '/data/[[DATA_ITEM_3_SLUG]]' }
    ],
    detail: {
      title: '[[DETAIL_TITLE]]',
      category: '[[DETAIL_CATEGORY]]',
      summary: '[[DETAIL_SUMMARY]]',
      description: '[[DETAIL_DESCRIPTION]]',
      featuresHeading: '[[DETAIL_FEATURES_HEADING]]',
      features: ['[[DETAIL_FEATURE_1]]', '[[DETAIL_FEATURE_2]]', '[[DETAIL_FEATURE_3]]'],
      specsHeading: '[[DETAIL_SPECS_HEADING]]',
      specifications: [
        { label: '[[DETAIL_SPEC_1_LABEL]]', value: '[[DETAIL_SPEC_1_VALUE]]' },
        { label: '[[DETAIL_SPEC_2_LABEL]]', value: '[[DETAIL_SPEC_2_VALUE]]' }
      ],
      backLabel: '[[DETAIL_BACK_LABEL]]',
      ctaHeading: '[[DETAIL_CTA_HEADING]]',
      ctaSubtitle: '[[DETAIL_CTA_SUBTITLE]]',
      ctaButton: '[[DETAIL_CTA_BUTTON]]'
    }
  },
  articlesPage: {
    title: '[[ARTICLES_PAGE_TITLE]]',
    subtitle: '[[ARTICLES_PAGE_SUBTITLE]]',
    readMore: '[[ARTICLES_READ_MORE]]',
    empty: '[[ARTICLES_EMPTY]]',
    back: '[[ARTICLE_BACK_LABEL]]'
  },
  contactPage: {
    seo: {
      title: '[[CONTACT_SEO_TITLE]]',
      description: '[[CONTACT_SEO_DESCRIPTION]]',
      keywords: '[[CONTACT_SEO_KEYWORDS]]'
    },
    title: '[[CONTACT_PAGE_TITLE]]',
    subtitle: '[[CONTACT_PAGE_SUBTITLE]]',
    infoTitle: '[[CONTACT_INFO_TITLE]]',
    hours: '[[CONTACT_HOURS]]',
    labels: {
      address: '[[CONTACT_ADDRESS_LABEL]]',
      phone: '[[CONTACT_PHONE_LABEL]]',
      email: '[[CONTACT_EMAIL_LABEL]]',
      hours: '[[CONTACT_HOURS_LABEL]]'
    }
  },
  designSystemPage: {
    seo: {
      title: '设计系统',
      description: '查看 Starter 的颜色、字体、布局、组件和交互规范。',
      keywords: '设计系统,Design Tokens,组件规范,Starter'
    },
    title: '设计系统',
    subtitle: '一套面向企业站 starter 的基础视觉规范，用于保持页面、组件和交互的一致性。',
    sections: {
      philosophy: '设计原则',
      colors: '颜色',
      typography: '字体',
      layout: '布局',
      components: '组件',
      interaction: '交互'
    },
    philosophy: {
      brandTitle: '品牌基调',
      brand: '默认视觉保持中性、清晰、可信，方便后续替换为真实品牌，而不会带入旧业务的装饰风格。',
      directionTitle: '设计方向',
      direction: '组件优先使用浅色背景、清晰边框、稳定间距和可复用 token，适合企业官网、内容站和轻量产品站。',
      keywords: ['中性', '清晰', '可复用', '易替换']
    },
    colorIntro: '颜色来自 main.css 内的设计 token，并通过 Tailwind theme 映射给页面和组件使用。',
    typographyIntro: '字体层级使用标准 Tailwind utility，避免任意 clamp class，保证响应式页面稳定可控。',
    layoutGrid: '页面内容以 max-w-7xl、section-container 和响应式 grid 为基础，确保宽屏和移动端都有稳定结构。',
    layoutWhitespace: '区块间距使用统一 spacing token 和 Tailwind 间距阶梯，避免页面因局部样式产生割裂。',
    samples: {
      hero: '清晰可靠的企业站 Starter',
      h1: '页面标题层级',
      h2: '区块标题层级',
      h3: '卡片标题层级'
    },
    preview: {
      primaryButton: '主要按钮',
      secondaryButton: '次要按钮',
      ghostButton: '幽灵按钮',
      smallButton: '小按钮',
      largeButton: '大按钮',
      cardTitle: '内容卡片',
      cardDescription: '用于承载功能、数据或文章入口，保持清晰边界和稳定排版。',
      cardAltTitle: '信息卡片',
      cardAltDescription: '适合展示补充说明、资源链接或页面摘要。',
      heroTitle: '页面头预览',
      heroSubtitle: '用于展示标题、说明和行动按钮的基础 hero 区块。',
      heroCta: '查看详情'
    }
  },
  legal: {
    eyebrow: '法律信息',
    lastUpdated: '最后更新',
    privacy: {
      seo: {
        title: '隐私政策',
        description: '了解我们如何收集、使用、存储和保护你的个人信息。',
        keywords: '隐私政策,个人信息保护,Cookie'
      },
      title: '隐私政策',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: '我们如何处理信息',
          paragraphs: [
            '我们仅在提供服务、响应咨询、保障安全和改进体验所需的范围内处理信息。',
            '如需替换为正式法律文本，请根据你的业务、部署地区和合规要求完善本页面。'
          ]
        }
      ]
    },
    terms: {
      seo: {
        title: '使用条款',
        description: '查看访问和使用本网站时适用的基本条款。',
        keywords: '使用条款,网站条款,服务条款'
      },
      title: '使用条款',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: '使用本网站',
          paragraphs: [
            '访问本网站即表示你同意遵守适用法律，并以合理、合法的方式使用网站内容。',
            '本页面为 starter 默认条款，请在上线前替换为适合你业务的正式文本。'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
