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
  { label: '品牌实力', english: 'Brand', href: '/about' },
  { label: '产品系统', english: 'Products', href: '/data' },
  { label: '水漆科技', english: 'Technology', href: '/philosophy' },
  { label: '招商加盟', english: 'Franchise', href: '/contact' },
  { label: '新闻中心', english: 'News', href: '/articles' }
];

const pageSeo = {
  home: {
    seo: {
      title: 'Paterson 百得胜水漆整家定制加盟_环保柜墙门系统_全屋定制家居加盟',
      description: '百得胜 Paterson 成立于 2001 年，是德尔未来旗下主营品牌，专注水漆柜墙门系统与环保整家定制，为加盟商提供产品、供应链、设计、营销与数智化运营支持。',
      keywords: '水漆整家定制,水漆全屋定制,环保整家定制,全屋定制加盟,家居加盟,柜墙门系统,水性漆定制家居,Paterson 百得胜,德尔未来旗下,股票代码 002631'
    }
  },
  about: {
    seo: {
      title: '品牌实力_百得胜 Paterson 水漆整家定制',
      description: '了解百得胜 Paterson 的品牌历程、德尔未来上市公司背景、水漆技术能力与整家定制招商支持。',
      keywords: '百得胜品牌实力,Paterson 百得胜,德尔未来,水漆整家定制,全屋定制加盟'
    }
  },
  articles: {
    seo: {
      title: '新闻中心_百得胜 Paterson 品牌动态与行业资讯',
      description: '查看百得胜 Paterson 在水漆科技、行业标准、展会活动、品牌荣誉与整家定制领域的最新动态。',
      keywords: '百得胜新闻,Paterson 新闻,水漆科技,家居展会,全屋定制行业资讯'
    },
    detailSeo: {
      title: '{title}_百得胜 Paterson 新闻中心',
      description: '了解百得胜 Paterson 新闻动态：{title}',
      keywords: '{title},百得胜新闻,Paterson 新闻,水漆整家定制'
    }
  },
  contact: {
    inquiry: {
      eyebrow: '联系咨询',
      title: '开启百得胜加盟咨询',
      description: '留下联系方式与意向城市，招商顾问将为你介绍品牌实力、开店支持与合作政策。',
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
      message: '加盟意向',
      messagePlaceholder: '可填写意向城市、店面资源、投资计划或希望了解的加盟政策',
      missingMessage: '请填写加盟意向',
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
    name: 'Paterson 百得胜'
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
    logoAlt: 'Paterson 百得胜标识',
    sloganAlt: '德尔未来旗下主营品牌',
    menu: '菜单',
    mainNav: '主导航',
    memberCenter: '加盟咨询',
    hotline: '招商热线',
    items: navItems,
    search: {
      scrollTop: '回到顶部'
    }
  },
  footer: {
    brandDescription: '百得胜 Paterson 成立于 2001 年，专注水漆柜墙门系统与环保整家定制，是德尔未来旗下主营品牌。',
    slogan: '水漆整家定制加盟新增长',
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
        title: '品牌',
        links: [
          { label: '品牌实力', href: '/about' },
          { label: '水漆科技', href: '/philosophy' },
          { label: '招商加盟', href: '/contact' }
        ]
      },
      {
        title: '产品与资讯',
        links: [
          { label: '产品系统', href: '/data' },
          { label: '新闻中心', href: '/articles' }
        ]
      },
      {
        title: '联系',
        links: [
          { label: '联系我们', href: '/contact' },
          { label: '加盟咨询', href: 'sourceRegisterUrl', external: true }
        ]
      }
    ],
    followUs: '联系信息',
    email: '邮箱',
    address: '地址',
    tagline: '高端家居空间、水漆科技与清晰招商路径共同构成的品牌官网。',
    copyright: '© 2026 Paterson 百得胜. 保留所有权利。',
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
    title: '内容已更新',
    description: '刷新页面即可查看最新内容。',
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
    title: '准备了解百得胜加盟合作？',
    description: '留下联系方式，招商顾问将为你介绍百得胜品牌实力、开店支持与合作政策。',
    action: '提交加盟咨询',
    contactLabel: '招商热线',
    bgText: 'PATERSON'
  },
  pages: pageSeo,
  data: {
    siteConfig: {
      companyName: '广州百得胜智能家居有限公司',
      shortName: '百得胜',
      industry: '水漆整家定制与全屋定制家居加盟',
      siteTitle: 'Paterson 百得胜水漆整家定制加盟',
      siteDescription: '百得胜 Paterson 成立于 2001 年，是德尔未来旗下主营品牌，专注水漆柜墙门系统与环保整家定制。',
      canonical: 'https://www.paterson.com.cn/',
      navigation: navItems.map(item => ({ label: item.label, path: item.href })),
      footerIntro: '百得胜 Paterson 专注水漆柜墙门系统与环保整家定制，为城市合伙人提供产品、供应链、设计、营销与数智化运营支持。',
      footerColumns: [
        {
          title: '品牌',
          links: [
            { label: '品牌实力', path: '/about' },
            { label: '水漆科技', path: '/philosophy' }
          ]
        },
        {
          title: '内容',
          links: [
            { label: '产品系统', path: '/data' },
            { label: '新闻中心', path: '/articles' }
          ]
        }
      ]
    }
  },
  homePage: {
    hero: {
      badge: '德尔未来旗下主营品牌 · 股票代码 002631',
      title: 'Paterson 百得胜水漆整家定制',
      titleLine1: 'Paterson 百得胜',
      titleLine2: '水漆整家定制',
      subtitle: '百得胜Paterson，成立于2001年，是一家集水漆定制柜墙门及成品家具为主的环保整家定制家居企业。上市公司德尔未来旗下主营品牌。',
      ctaLabel: '立即咨询加盟',
      cta2Label: '查看品牌实力',
      imageAlt: 'Paterson 百得胜水漆整家定制家居空间',
      caption: '水漆产业链、康氧健康空间、碳纤维材料与营销支持，共同构成百得胜加盟体系的差异化能力。',
      oxygenValue: '康氧产业链',
      oxygenLabel: '智能康氧卧房与室内空气标准',
      keywords: {
        waterPaint: '水漆产业链',
        oxygen: '康氧产业链',
        material: '碳纤维材料',
        marketing: '营销创新'
      },
      metrics: [
        { value: '2001', label: '品牌创立时间' },
        { value: '002631', label: '德尔未来股票代码' },
        { value: '4.0', label: '油改水智能工厂' },
        { value: '柜墙门', label: '整家定制系统' }
      ]
    },
    forest: {
      eyebrow: '康氧产业链闭环',
      title: '智能康氧卧房，像森林氧吧一样记住百得胜',
      description: '百得胜以智能康氧卧房、超级健康中枢和室内空气标准能力，回应家庭对洁净空气、舒适睡眠与健康空间的长期需求。',
      center: '超级健康中枢',
      note: '从卧房空气、环保材料到整家空间体验，让健康不止停留在概念，而是成为用户能够感知的生活场景。',
      proofs: {
        bedroom: '智能康氧卧房',
        center: '超级健康中枢',
        standard: '室内空气团标主编单位'
      },
      proofDescriptions: {
        bedroom: '以卧房这一高频生活空间承载康氧体验，让健康不是抽象概念，而是可被感知的空间系统。',
        center: '围绕空气、材料、柜墙门和生活习惯建立健康中枢，强化整家定制之外的差异化。',
        standard: '以室内空气团体标准主编单位背书，支撑招商端对健康家居能力的信任。'
      },
      nodes: {
        chain: '康氧产业链闭环',
        forest: '森林氧吧',
        bedroom: '智能康氧卧房',
        standard: '室内空气团标'
      }
    },
    trust: {
      eyebrow: '关于我们',
      title: '水漆整家定制的长期主义品牌',
      description: '百得胜 Paterson 成立于 2001 年，是德尔未来旗下主营品牌。品牌长期深耕定制家居，以水漆科技、环保整家定制和终端运营支持建立市场信任。',
      stats: [
        { value: '2001 年', label: '百得胜 Paterson 成立，持续深耕定制家居赛道。' },
        { value: '德尔未来', label: '上市公司旗下主营品牌，股票代码 002631。' },
        { value: '团标主编', label: '水漆定制家居相关标准与技术背书。' },
        { value: '智能涂装', label: '全水性 3D 智能涂装线与油改水 4.0 工厂。' }
      ]
    },
    technology: {
      eyebrow: '水漆科技',
      title: '从材料、工艺到整家空间的水漆产业链闭环',
      description: '全水性 3D 智能涂装线、油改水 4.0 工厂和水漆相关标准能力，共同支撑百得胜水漆整家定制的稳定交付。',
      summary: '材料、涂装、产品、终端交付形成同一条能力链。',
      metrics: [
        { value: '3D', label: '智能涂装线' },
        { value: '4.0', label: '油改水工厂' },
        { value: '全水性', label: '材料与交付协同' }
      ],
      items: [
        { title: '水漆柜墙门系统', description: '以水漆工艺、柜墙门一体化和整家空间交付形成差异化产品能力。', href: '/data' }
      ],
      nodes: [
        { icon: 'i-lucide-droplets', title: '水漆产业链闭环', description: '围绕水性漆定制家居形成材料、涂装、产品与终端交付协同。' },
        { icon: 'i-lucide-factory', title: '全水性 3D 智能涂装线', description: '用智能化工艺提升稳定性、表面质感和批量交付能力。' },
        { icon: 'i-lucide-leaf', title: '油改水 4.0 工厂', description: '以工厂端水性化升级承接水漆整家定制的规模交付。' },
        { icon: 'i-lucide-award', title: '国际领先成果认证', description: '高硬度全水性涂料涂饰家居板件技术获得专家组认证。' }
      ]
    },
    products: {
      eyebrow: '我们的服务',
      title: '水漆柜墙门系统与环保整家定制服务',
      description: '从卧室收纳、厨房系统到儿童成长空间，百得胜以真实家居场景呈现水漆整家定制的产品价值。',
      items: [
        {
          title: '衣柜定制',
          description: '水漆衣柜，整家定制。3底2面72道纯水漆工艺，没有8大重金属伤害。',
          image: '/paterson/product-bedroom-system.webp',
          tags: ['水漆衣柜', '整家定制', '72道工艺']
        },
        {
          title: '橱柜定制',
          description: '百得胜橱柜，环保·健康·颜值。',
          image: '/paterson/product-kitchen-system.webp',
          tags: ['橱柜定制', '环保', '健康']
        },
        {
          title: '百儿未来家',
          description: '让孩子自己参与设计，打造呵护身心、启蒙智识、保护想象力的成长环境。',
          image: '/paterson/product-children-room.webp',
          tags: ['儿童房', '成长环境', '未来家']
        }
      ]
    },
    advantages: {
      eyebrow: '加盟优势',
      title: '招商加盟：水漆、康氧、材料与营销创新',
      items: [
        { icon: 'i-lucide-droplets', title: '水漆产业链闭环', description: '全水性3D智能涂装线、油改水4.0工厂、水漆团标主编单位。' },
        { icon: 'i-lucide-wind', title: '康氧产业链闭环', description: '智能康氧卧房、超级健康中枢、室内空气团标主编单位。' },
        { icon: 'i-lucide-layers-3', title: '碳纤维航空材料', description: '9大性能优势，10米正负变形≤3‰，解决传统轻高定工艺3大难题。' },
        { icon: 'i-lucide-megaphone', title: '营销创新', description: 'AI数智化赋能帮扶、水漆新零售、活动模式多样化引流。' },
        { icon: 'i-lucide-award', title: '企业荣誉', description: '围绕技术认证、行业奖项、标准制定和品牌大事件建立终端信任。' },
        { icon: 'i-lucide-history', title: '长期深耕', description: '自 2001 年起持续深耕定制家居行业，以长期主义积累品牌、产品与终端经验。' }
      ]
    },
    process: {
      eyebrow: '加盟流程',
      title: '清晰八步合作路径，陪伴门店稳步开业',
      description: '从初次咨询到建店培训，再到开业扶持和持续运营，总部陪伴加盟商稳步推进。',
      stepLabel: '阶段',
      steps: [
        { title: '在线咨询', description: '提交城市、预算与联系方式。' },
        { title: '总部沟通', description: '介绍区域政策与合作方式。' },
        { title: '实地考察', description: '了解展厅、工厂与终端样板。' },
        { title: '城市洽谈', description: '沟通商圈、客群与开店规划。' },
        { title: '签约合作', description: '明确授权、政策与开店节奏。' },
        { title: '建店培训', description: '完成设计、产品和运营培训。' },
        { title: '开业扶持', description: '配合活动、引流和团队启动。' },
        { title: '持续运营', description: '提供营销、产品与数智化支持。' }
      ]
    },
    news: {
      eyebrow: '新闻与荣誉',
      title: '关注水漆科技、品牌荣誉与行业动态',
      more: '查看新闻中心',
      items: [
        {
          tag: '技术认证',
          title: '国际领先 | 百得胜家居水漆核心科技成果获院士领衔专家组认证',
          description: '高硬度全水性涂料涂饰家居板件关键技术获得权威专家组认证。',
          image: '/paterson/news-water-paint-tech.webp'
        },
        {
          tag: '展会新闻',
          title: '水漆轻高定丨百得胜携 3 大根技术与空间场景亮相广州定制家居展',
          description: '围绕水漆整家和轻高定空间，强化终端招商展示能力。',
          image: '/paterson/news-custom-home-expo.webp'
        },
        {
          tag: '行业标准',
          title: '家具新国标 行业顶配 水漆健康家标配',
          description: '以环保标准和健康家居认知，延展水漆柜墙门系统的品牌价值。',
          image: '/paterson/news-furniture-standard.webp'
        }
      ]
    },
    consult: {
      eyebrow: '加盟留资',
      title: '留下加盟意向，获取百得胜合作资料',
      description: '填写联系方式与意向城市，招商顾问将为你介绍水漆整家定制加盟政策。',
      privacy: '信息仅用于加盟咨询沟通，严格保密。',
      hours: '总部咨询时间：09:00 - 18:00',
      form: {
        name: '姓名',
        namePlaceholder: '请输入姓名',
        phone: '手机号',
        phonePlaceholder: '请输入联系电话',
        city: '意向城市',
        cityPlaceholder: '例如：广州 / 成都 / 杭州',
        budget: '投资预算',
        budgetPlaceholder: '请选择预算范围',
        budgetOne: '50 万以内',
        budgetTwo: '50-100 万',
        budgetThree: '100 万以上',
        message: '备注',
        messagePlaceholder: '可填写店面资源、经营经验或希望了解的加盟政策',
        submit: '提交加盟咨询'
      }
    },
    mobileBar: {
      consult: '咨询',
      call: '拨号',
      store: '门店'
    },
    faq: {
      items: [
        { question: '百得胜 Paterson 的核心差异化是什么？', answer: '核心差异化是水漆柜墙门系统、环保整家定制能力以及德尔未来上市公司背景。' },
        { question: '加盟咨询需要提供哪些信息？', answer: '建议留下姓名、手机号、意向城市、投资预算和店面资源，便于招商顾问介绍更适合的合作政策。' }
      ]
    }
  },
  aboutPage: {
    sectionNavAria: '关于我们栏目导航',
    sectionNav: [
      { label: '公司简介', href: '#company' },
      { label: '企业文化', href: '#culture' },
      { label: '企业荣誉', href: '#honors' },
      { label: '发展历程', href: '#history' },
      { label: '联系我们', href: '#contact' }
    ],
    hero: {
      eyebrow: '品牌实力',
      titleLine1: '百得胜 Paterson',
      titleLine2: '长期主义品牌实力',
      subtitle: '从 2001 年创立到德尔未来旗下主营品牌，百得胜以水漆柜墙门系统、环保整家定制和终端运营支持，构建面向城市合伙人的长期信任。',
      primaryCta: '咨询加盟合作',
      imageAlt: '百得胜 Paterson 品牌实力形象',
      stats: [
        { value: '2001', label: '品牌创立，持续深耕定制家居领域' },
        { value: '002631', label: '德尔未来上市公司股票代码' },
        { value: '水漆', label: '柜墙门系统与环保整家定制差异化' },
        { value: '全链路', label: '产品、供应链、设计、营销与运营支持' }
      ]
    },
    proof: {
      eyebrow: '可信背书',
      title: '稳健品牌基础',
      description: '百得胜成立于 2001 年，是德尔未来旗下主营品牌，长期专注水漆柜墙门系统与环保整家定制，以产品创新、技术驱动和聚焦零售建立品牌竞争力。',
      tags: [
        { label: '2001 年创立' },
        { label: '德尔未来旗下' },
        { label: '水漆柜墙门系统' },
        { label: '环保整家定制' }
      ],
      items: [
        { icon: 'i-lucide-building-2', title: '德尔未来旗下', description: '上市公司旗下主营品牌，以更稳定的治理与资源能力支撑品牌长期发展。' },
        { icon: 'i-lucide-droplets', title: '水漆技术背书', description: '围绕水漆材料、智能涂装、油改水工厂和行业标准，形成环保整家定制差异化。' },
        { icon: 'i-lucide-factory', title: '供应链交付', description: '从工艺、产品系统到终端交付建立统一能力，让加盟门店更容易呈现稳定品质。' },
        { icon: 'i-lucide-store', title: '终端运营支持', description: '面向城市合伙人提供设计、建店、营销、培训和数智化运营等落地支持。' }
      ]
    },
    origin: {
      eyebrow: '公司实力',
      title: '以生产体系支撑水漆整家定制交付',
      description: '百得胜围绕水漆柜墙门、环保材料、智能涂装和整家定制交付持续投入，在生产基地、产品工艺和终端门店之间形成稳定协同。',
      imageAlt: '百得胜 Paterson 工厂生产体系',
      captionEyebrow: '生产与交付',
      caption: '以水漆柜墙门为核心，持续投入环保材料、生产工艺与整家定制交付能力。',
      quote: '品牌实力最终要落到稳定的产品系统、生产能力和终端交付体验。'
    },
    capabilities: {
      eyebrow: '核心能力',
      title: '品牌、技术、产品、终端一体化',
      description: '从基材无醛添加、水漆工艺到康氧卧房和水漆轻高定，百得胜持续推动环保健康整家定制升级，为终端门店提供清晰的产品主张与交付基础。',
      items: [
        { icon: 'i-lucide-award', title: '品牌公信力', description: '以 2001 年品牌积累、上市公司背景和行业标准参与，降低加盟商选择的不确定性。' },
        { icon: 'i-lucide-leaf', title: '环保健康主张', description: '水漆、康氧卧房和室内空气标准相关能力，让健康家居从概念进入真实生活场景。' },
        { icon: 'i-lucide-layout-grid', title: '整家产品系统', description: '柜、墙、门、厨房、卧房和儿童空间形成统一风格，便于终端完整呈现。' },
        { icon: 'i-lucide-megaphone', title: '招商运营支持', description: '围绕建店、培训、活动引流、营销工具和数智化运营，帮助城市合伙人稳健启动。' }
      ]
    },
    culture: {
      eyebrow: '企业文化',
      title: '从 Paterson Street 到健康整家定制',
      description: '百得胜源自 PATERSON 的品牌记忆，秉承“为人们定制一个健康智能的家”的使命，致力于成为全球健康家居的领先者。',
      items: [
        { icon: 'i-lucide-compass', title: '使命', description: '为人们定制一个健康智能的家。' },
        { icon: 'i-lucide-heart-handshake', title: '价值观', description: '以客户为中心，以奋斗者为本，长期坚持小正果。' },
        { icon: 'i-lucide-rocket', title: '经营理念', description: '产品领先，技术驱动，聚焦零售。' }
      ]
    },
    proofImages: [
      {
        image: '/paterson/brand-culture-vision.webp',
        title: '品牌文化记忆',
        description: 'PATERSON 香港街名承载品牌源起，也延展出百得胜对长期主义与健康家居的坚持。'
      },
      {
        image: '/paterson/brand-franchise-support.webp',
        title: '终端支持能力',
        description: '以产品、设计、建店、营销、培训和数智化运营支持城市合伙人稳健落地。'
      }
    ],
    timeline: {
      eyebrow: '发展脉络',
      title: '品牌实力来自持续积累，而不是单次传播',
      description: '百得胜坚持环保长期主义，围绕无醛添加、水漆工艺、健康空气和轻高定方向持续进化。',
      items: [
        { year: '2001', title: '品牌创立', description: '百得胜 Paterson 创立，进入定制家居领域并持续深耕。' },
        { year: '002631', title: '上市公司背景', description: '成为德尔未来旗下主营品牌，以资本市场治理和资源能力支撑长期发展。' },
        { year: '水漆科技', title: '形成差异化技术主张', description: '围绕水漆柜墙门系统、智能涂装和油改水工厂建立环保整家定制优势。' },
        { year: '现在', title: '面向城市合伙人', description: '通过产品、供应链、设计、营销和数智化运营支持，服务全屋定制加盟落地。' }
      ]
    },
    cta: {
      eyebrow: '加盟合作',
      title: '了解百得胜品牌实力与加盟政策',
      subtitle: '提交意向城市与联系方式，招商顾问将介绍品牌实力、开店支持与合作政策。',
      button: '咨询加盟'
    }
  },
  philosophyPage: {
    seo: {
      title: '水漆科技_百得胜 Paterson 水漆柜墙门系统',
      description: '了解百得胜 Paterson 的水漆产业链、全水性 3D 智能涂装线、油改水 4.0 工厂与环保整家定制技术。',
      keywords: '水漆科技,水漆柜墙门系统,油改水工厂,全水性智能涂装,环保整家定制'
    },
    hero: {
      eyebrow: '水漆科技',
      title: '水漆科技',
      titleLine1: '把环保能力',
      titleLine2: '做进整家交付',
      subtitle: '从水性材料、连续化涂饰到柜墙门一体化应用，百得胜以水漆产业链闭环支撑环保整家定制，让技术优势能被终端清晰展示、被消费者真实感知。',
      primaryCta: '咨询水漆加盟',
      imageAlt: '百得胜水漆智能涂装与整家定制工艺',
      metrics: [
        { value: '3D', label: '全水性智能涂装线' },
        { value: '4.0', label: '油改水工厂升级' },
        { value: '72道', label: '纯水漆工艺表达' }
      ]
    },
    sectionNavAria: '水漆科技页面导航',
    sectionNav: [
      { label: '产业链能力', href: '#chain' },
      { label: '权威证据', href: '#proof' },
      { label: '空间体验', href: '#experience' },
      { label: '终端价值', href: '#terminal' }
    ],
    chain: {
      eyebrow: '产业链能力',
      title: '从材料、涂装到柜墙门系统的水漆闭环',
      description: '水漆科技不是单一卖点，而是一条贯穿材料选择、涂装工艺、产品系统和门店讲解的能力链。页面重点呈现可理解、可展示、可转化的技术差异。',
      nodes: [
        { icon: 'i-lucide-droplets', title: '水性材料体系', description: '围绕水性漆定制家居建立材料端基础，减少传统涂装带来的气味和健康顾虑。' },
        { icon: 'i-lucide-factory', title: '连续化智能涂装', description: '全水性 3D 智能涂装线与油改水 4.0 工厂，让表面质感、稳定性和批量交付更可控。' },
        { icon: 'i-lucide-panels-top-left', title: '柜墙门一体应用', description: '水漆衣柜、墙板、木门与整家空间协同呈现，让环保工艺落到真实家居场景。' },
        { icon: 'i-lucide-badge-check', title: '标准与终端讲解', description: '以水漆团标、行业认证和空间样板支撑门店讲解，帮助加盟商建立顾客信任。' }
      ]
    },
    proof: {
      eyebrow: '权威证据',
      title: '让技术主张有出处、有画面、有结果',
      description: '官网新闻显示，百得胜“高硬度全水性涂料涂饰家居板件”及关键技术获得专家组认证，并围绕全水性连续化涂饰、漆膜性能和绿色制造形成更完整的技术叙事。',
      imageAlt: '百得胜水漆核心科技成果认证新闻',
      captionEyebrow: '水漆核心科技成果',
      caption: '以产学研协同和专家认证作为科技背书，把“环保”从概念转译为可展示的工艺能力。',
      cards: [
        { value: '国际领先', label: '成果认证', description: '官网新闻提到相关水漆核心科技成果获专家组认证，强化品牌技术可信度。' },
        { value: '六面一体', label: '连续化涂饰', description: '围绕木质制品六面一体涂饰，让柜墙门应用具备更完整的工艺表达。' },
        { value: '2H', label: '漆膜硬度', description: '配合附着力、耐湿热、耐污染等指标，回应消费者对耐用和质感的关注。' }
      ]
    },
    experience: {
      eyebrow: '空间体验',
      title: '技术最终要回到看得见的家',
      description: '水漆科技页不只展示工厂和概念，也需要把水漆工艺落到衣柜、卧房、柜墙门系统和生活场景中，让加盟商知道终端该如何讲、消费者能获得什么。',
      items: [
        { title: '水漆衣柜定制', description: '基材无醛添加、面材水漆木皮、3 底 2 面 72 道纯水漆工艺，形成可被消费者记住的产品表达。', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['水漆衣柜', '无味亲肤', '即装即住'] },
        { title: '健康卧房空间', description: '以衣柜、床头、护墙和收纳系统共同呈现健康卧房，让环保主张进入真实生活场景。', image: '/paterson/product-bedroom-system.webp', tags: ['卧房系统', '柜墙协同', '健康家居'] },
        { title: '新国标与健康家', description: '结合家具新国标和水漆健康家认知，强化门店对环保、耐用和空间品质的讲解能力。', image: '/paterson/news-furniture-standard.webp', tags: ['标准背书', '环保认知', '终端讲解'] }
      ]
    },
    terminal: {
      eyebrow: '终端价值',
      title: '让加盟门店更容易讲清差异化',
      description: '水漆科技不止停留在技术名词，而是落到门店可展示、顾客可感知、空间可体验的健康家居价值。',
      items: [
        { icon: 'i-lucide-store', title: '门店展示更有主题', description: '以水漆衣柜、健康卧房、柜墙门系统组织展厅动线，让顾客从空间体验理解环保价值。' },
        { icon: 'i-lucide-message-square-text', title: '销售讲解更有依据', description: '用材料、工艺、标准和权威新闻建立讲解路径，减少空泛的环保口号。' },
        { icon: 'i-lucide-sparkles', title: '产品质感更容易感知', description: '把无味亲肤、木皮纹理、漆膜性能和整家风格统一，转化为可触摸的终端体验。' },
        { icon: 'i-lucide-trending-up', title: '招商记忆点更明确', description: '水漆整家、康氧空间和营销支持共同形成区别于普通全屋定制门店的加盟理由。' }
      ]
    },
    cta: {
      eyebrow: '水漆整家加盟',
      title: '想了解水漆整家定制加盟？',
      subtitle: '招商顾问可根据你的城市与店面资源，介绍产品系统、建店支持和运营扶持。',
      button: '提交咨询'
    }
  },
  dataPage: {
    seo: {
      title: '产品系统_百得胜 Paterson 水漆柜墙门系统_环保整家定制',
      description: '查看百得胜 Paterson 水漆衣柜、入户、客餐厅、卧房、阳台、宠物与电竞等空间系统，了解环保整家定制产品组合与加盟终端展示价值。',
      keywords: '百得胜产品系统,水漆衣柜,水漆柜墙门系统,环保整家定制,全屋定制加盟,媞雅系列,光引系列,原野系列'
    },
    hero: {
      eyebrow: '产品系统',
      titleLine1: '以水漆柜墙门系统',
      titleLine2: '组织完整生活空间',
      subtitle: '从衣柜定制延展到入户、客餐厅、卧房、阳台、宠物与电竞空间，百得胜把水漆工艺、收纳系统和整家风格统一到可展示、可成交、可交付的终端产品体系。',
      imageAlt: '百得胜产品系统空间形象',
      primaryCta: '咨询产品加盟',
      metrics: [
        { value: '3底2面', label: '72 道纯水漆工艺，强化环保与表面质感表达' },
        { value: '6大空间', label: '覆盖入户、客厅、餐厅、书房、卧房与阳台' },
        { value: '23年', label: '专研环保定制，沉淀终端产品与交付经验' }
      ]
    },

    serviceLines: {
      navAria: '产品服务分类',
      eyebrow: '我们的服务',
      title: '水漆整家定制产品体系',
      description: '围绕衣柜定制、橱柜定制、百得胜家具与百儿未来家，百得胜以环保材料、空间美学和系统交付，为不同家庭场景提供完整定制方案。',
      items: [
        { title: '衣柜定制', description: '百得胜，专研环保定制 23 年，水漆团标主编单位。水漆衣柜，基材无醛添加，面材水漆木皮，3 底 2 面 72 道纯水漆工艺。无味亲肤即装即住，水漆定制，就定百得胜。', image: '/paterson/product-wardrobe-intro.webp', points: ['水漆衣柜', '无醛添加', '即装即住'] },
        { title: '橱柜定制', description: '百得胜橱柜秉承环保长期主义，以环保创造更安全健康的居家环境；用美学为客户打造舒适高颜的家；以客户为中心，高质高效服务用户。', image: '/paterson/product-cabinet-intro.webp', points: ['厨电一体化', '衣橱一体化', '多风格体系'] },
        { title: '百得胜家具', description: '百得胜家具延展柜类定制之外的生活场景，以客餐厅、卧房和多功能空间家具补充整家产品体系，让空间风格、收纳功能与日常体验保持统一。', image: '/paterson/product-series-guangyin.webp', points: ['客餐厅', '成品家具', '整家配套'] },
        { title: '百儿未来家', description: '百儿未来家面向儿童成长需求，围绕学习、收纳、睡眠和安全环保构建成长空间，让儿童房从单一家具配置升级为可陪伴成长的生活系统。', image: '/paterson/product-series-yuanye.webp', points: ['儿童成长', '学习收纳', '健康空间'] }
      ]
    },

    catalog: {
      eyebrow: '产品展示',
      title: '甄选系列与空间方案',
      description: '从空间、风格与产品系列出发，呈现百得胜水漆整家定制的真实产品组合，让终端门店更直观地展示环保、颜值与收纳价值。',
      emptyTitle: '暂无匹配产品',
      emptyDescription: '可选择更多空间、风格或系列，查看适合不同家庭场景的产品方案。',
      serviceCatalogs: {
        衣柜定制: {
          filters: [
            { label: '空间', options: ['全部', '入户空间', '客厅空间', '餐厅空间', '书房空间', '卧房空间', '阳台空间'] },
            { label: '风格', options: ['全部', '欧式风格', '现代风格', '新中式风格', '轻奢风格', '美式风格', '未来风格'] },
            { label: '款式', options: ['全部', '青春款', '经典款'] }
          ],
          items: [
            { title: '媞雅系列', category: '衣柜定制', image: '/paterson/product-series-tiya.webp', tags: ['卧房空间', '轻奢风格', '经典款'] },
            { title: '光引系列', category: '衣柜定制', image: '/paterson/product-series-guangyin.webp', tags: ['客厅空间', '现代风格', '经典款'] },
            { title: '原野系列', category: '衣柜定制', image: '/paterson/product-series-yuanye.webp', tags: ['卧房空间', '现代风格', '青春款'] },
            { title: '养宠空间', category: '衣柜定制', image: '/paterson/product-pet-living-space.webp', tags: ['客厅空间', '未来风格', '青春款'] },
            { title: '情侣电竞房', category: '衣柜定制', image: '/paterson/product-gaming-bedroom.webp', tags: ['卧房空间', '未来风格', '青春款'] },
            { title: '水漆衣柜定制', category: '衣柜定制', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['卧房空间', '水漆工艺', '柜墙门'] }
          ]
        },
        橱柜定制: {
          filters: [
            { label: '系列', options: ['全部', '饰面系列', '烤漆系列', '膜压系列', '实木系列'] },
            { label: '风格', options: ['全部', '欧式风格', '现代风格', '新中式风格', '轻奢风格', '美式风格', '未来风格'] },
            { label: '款式', options: ['全部', 'L型橱柜', 'U型橱柜', '一字型橱柜', '岛型橱柜'] }
          ],
          items: [
            { title: '橱柜功能配件希尔斯', category: '橱柜定制', image: '/paterson/product-cabinet-hills.webp', tags: ['饰面系列', '现代风格', 'L型橱柜'] },
            { title: '阿尔卑斯P', category: '橱柜定制', image: '/paterson/product-cabinet-alps.webp', tags: ['烤漆系列', '轻奢风格', '岛型橱柜'] },
            { title: '卡森Max', category: '橱柜定制', image: '/paterson/product-cabinet-kasen.webp', tags: ['膜压系列', '现代风格', 'U型橱柜'] },
            { title: '写意Nature', category: '橱柜定制', image: '/paterson/product-cabinet-nature.webp', tags: ['实木系列', '新中式风格', '一字型橱柜'] },
            { title: '慕莎P', category: '橱柜定制', image: '/paterson/product-cabinet-musha.webp', tags: ['烤漆系列', '欧式风格', 'L型橱柜'] },
            { title: '莫奈P', category: '橱柜定制', image: '/paterson/product-cabinet-monet.webp', tags: ['饰面系列', '美式风格', 'U型橱柜'] }
          ]
        },
        百得胜家具: {
          filters: [
            { label: '场景', options: ['全部', '客厅', '餐厅', '卧房', '多功能空间'] },
            { label: '类型', options: ['全部', '收纳柜', '餐边柜', '宠物空间', '电竞空间'] }
          ],
          items: [
            { title: '光引客餐厅家具', category: '百得胜家具', image: '/paterson/product-series-guangyin.webp', tags: ['客厅', '收纳柜', '现代风格'] },
            { title: '日咖夜酒餐边柜', category: '百得胜家具', image: '/paterson/product-series-yuanye.webp', tags: ['餐厅', '餐边柜', '轻奢风格'] },
            { title: '养宠空间', category: '百得胜家具', image: '/paterson/product-pet-living-space.webp', tags: ['多功能空间', '宠物空间', '未来风格'] },
            { title: '情侣电竞房', category: '百得胜家具', image: '/paterson/product-gaming-bedroom.webp', tags: ['卧房', '电竞空间', '未来风格'] }
          ]
        },
        百儿未来家: {
          filters: [
            { label: '年龄', options: ['全部', '幼童', '学龄', '青少年'] },
            { label: '功能', options: ['全部', '学习区', '收纳区', '睡眠区', '成长空间'] }
          ],
          items: [
            { title: '百儿未来家成长房', category: '百儿未来家', image: '/paterson/product-children-room.webp', tags: ['学龄', '学习区', '成长空间'] },
            { title: '儿童收纳学习系统', category: '百儿未来家', image: '/paterson/product-bedroom-system.webp', tags: ['青少年', '收纳区', '学习区'] },
            { title: '健康睡眠儿童房', category: '百儿未来家', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['幼童', '睡眠区', '成长空间'] }
          ]
        }
      }
    },
    intro: {
      eyebrow: '水漆衣柜定制',
      title: '把环保定制做成终端可感知的产品语言',
      description: '官方产品页强调“水漆衣柜，基材无醛添加，面材水漆木皮，3底2面72道纯水漆工艺”。新版产品系统将这组技术点转译为消费者能理解的空间价值：无味亲肤、即装即住、风格统一、收纳清晰。',
      proof: '水漆定制不是单一柜体卖点，而是贯穿材料、工艺、柜墙门协同、空间展示与加盟门店讲解的一整套产品系统。',
      imageAlt: '百得胜水漆衣柜定制空间',
      captionEyebrow: '官方素材来源',
      caption: '素材取自百得胜官网“我们的服务 / 衣柜定制”页面，已下载到本地并压缩为 webp。'
    },
    systems: {
      eyebrow: '空间系统',
      title: '从单品列表升级为空间解决方案',
      description: '按照重设计方案，产品页不只罗列衣柜、橱柜和家具，而是把产品组织为终端更容易销售的空间系统，让加盟商可以用真实场景讲清整家定制价值。',
      items: [
        {
          title: '卧房系统',
          description: '以水漆衣柜、护墙、床头与收纳组合形成健康卧房表达，适合承接康氧卧房与环保材料主张。',
          image: '/paterson/product-series-tiya.webp',
          tags: ['水漆衣柜', '卧房收纳', '柜墙协同']
        },
        {
          title: '客餐厅系统',
          description: '以电视柜、餐边柜、展示收纳和背景墙统一空间语言，让整家风格在家庭公共区先被看见。',
          image: '/paterson/product-series-guangyin.webp',
          tags: ['客厅空间', '餐边柜', '整家风格']
        },
        {
          title: '自然生活系统',
          description: '围绕木质纹理、留白比例与轻高定质感，呈现更温和、更耐看的全屋定制空间。',
          image: '/paterson/product-series-yuanye.webp',
          tags: ['原野系列', '自然质感', '轻高定']
        },
        {
          title: '养宠空间',
          description: '把宠物活动、清洁收纳与家庭公共空间整合，回应年轻家庭对复合生活场景的需求。',
          image: '/paterson/product-pet-living-space.webp',
          tags: ['宠物友好', '复合收纳', '家庭互动']
        },
        {
          title: '电竞卧房',
          description: '兼顾休息、双人娱乐、桌面设备和氛围灯光，适合终端展示年轻化产品组合。',
          image: '/paterson/product-gaming-bedroom.webp',
          tags: ['情侣电竞房', '年轻客群', '灯光氛围']
        },
        {
          title: '柜墙门一体化系统',
          description: '通过材质、色彩、比例和收口协同，把衣柜、墙面、门与家具纳入统一交付标准。',
          image: '/paterson/product-water-paint-wardrobe.webp',
          tags: ['柜墙门', '统一交付', '终端展示']
        }
      ]
    },
    features: {
      eyebrow: '产品优势',
      title: '加盟终端真正需要的是好讲、好看、好落地',
      description: '产品系统页强化百得胜区别于普通全屋定制的核心证据：水漆工艺、空间化表达、系列化素材和终端交付标准。',
      items: [
        { icon: 'i-lucide-droplets', title: '水漆工艺背书', description: '用无醛添加基材、水漆木皮和多道水漆工艺建立环保与质感的共同记忆点。' },
        { icon: 'i-lucide-layout-grid', title: '空间系统销售', description: '以入户、客餐厅、卧房、阳台等空间组织产品，比单品清单更适合终端转化。' },
        { icon: 'i-lucide-store', title: '门店展示友好', description: '真实空间图、系列名和卖点标签便于店面样板、活动物料和销售话术复用。' },
        { icon: 'i-lucide-factory', title: '供应链协同', description: '柜体、墙面、门板与家具统一标准，减少风格割裂和交付不稳定。' }
      ]
    },
    series: {
      eyebrow: '官方系列素材',
      title: '保留真实产品名，重构现代官网呈现',
      description: '素材来自官网产品列表，页面保留媞雅、光引、原野等真实系列名，同时用更克制的版式呈现空间气质与可销售场景。',
      items: [
        { title: '媞雅系列', subtitle: '精致卧房与整家质感', description: '以柔和材质、细腻比例和水漆表面质感强化卧房系统的高级感。', image: '/paterson/product-series-tiya.webp', meta: 'Bedroom' },
        { title: '光引系列', subtitle: '明亮公共空间', description: '用轻盈线条和明亮空间感承接客餐厅、展示柜与生活收纳需求。', image: '/paterson/product-series-guangyin.webp', meta: 'Living' },
        { title: '原野系列', subtitle: '自然整家表达', description: '更强调木纹、留白与温润气质，适合环保整家定制的生活方式叙事。', image: '/paterson/product-series-yuanye.webp', meta: 'Nature' },
        { title: '情侣电竞房', subtitle: '年轻化生活场景', description: '把设备收纳、双人使用和氛围感整合到卧房系统，拓展终端销售话题。', image: '/paterson/product-gaming-bedroom.webp', meta: 'Gaming' }
      ]
    },
    delivery: {
      eyebrow: '终端落地',
      title: '产品系统走进门店，也走进真实生活',
      description: '从产品组合、空间样板到交付标准，百得胜让城市合伙人更清楚地呈现水漆整家的价值。',
      steps: [
        { title: '产品组合建议', description: '依据目标城市、店面面积和客群定位，规划主推空间与样板组合。' },
        { title: '设计与物料支持', description: '围绕系列图、空间卖点和水漆工艺，形成终端可复用的讲解素材。' },
        { title: '门店场景呈现', description: '把卧房、客餐厅、宠物、电竞等高感知空间做成可体验的样板场景。' },
        { title: '交付标准协同', description: '以柜墙门系统和供应链标准保障风格、材质与安装效果的一致性。' }
      ]
    },
    cta: {
      eyebrow: '产品加盟资料',
      title: '想了解百得胜产品系统如何配置到门店？',
      description: '提交意向城市与联系方式，招商顾问可结合你的店面资源介绍产品组合、样板规划和加盟支持政策。',
      primary: '提交加盟咨询',
      secondary: '拨打招商热线'
    },
    title: '产品系统',
    subtitle: '围绕水漆柜墙门系统、厨房收纳与儿童成长空间，构建完整环保整家定制方案。',
    defaultCategory: '全部',
    searchPlaceholder: '搜索产品或空间',
    empty: '暂无匹配的产品内容',
    categories: ['全部', '卧室系统', '厨房系统', '儿童空间'],
    items: [
      { title: '水漆衣柜定制', summary: '以水漆工艺和整家设计语言，打造环保、耐看、易收纳的卧室系统。', category: '卧室系统', detailPath: '/data/bedroom-system' },
      { title: '环保橱柜定制', summary: '围绕厨房动线、收纳效率与健康材料，提供高颜值橱柜定制方案。', category: '厨房系统', detailPath: '/data/kitchen-system' },
      { title: '百儿未来家', summary: '面向儿童成长需求，打造兼顾学习、收纳、休息和想象力的成长空间。', category: '儿童空间', detailPath: '/data/children-room' }
    ],
    detail: {
      title: '水漆整家定制方案',
      category: '产品系统',
      summary: '以水漆柜墙门系统为核心，为家庭空间提供环保、统一、可落地的整家定制方案。',
      description: '百得胜产品系统将卧室、厨房、儿童房等高频生活空间纳入统一设计语言，通过水漆工艺、柜墙门协同和终端交付标准，帮助加盟门店向消费者清晰展示环保整家定制价值。',
      featuresHeading: '核心特点',
      features: ['水漆工艺与环保材料协同', '柜墙门系统化设计', '适配终端展示与加盟落地'],
      specsHeading: '方案信息',
      specifications: [
        { label: '适用空间', value: '卧室 / 厨房 / 儿童房 / 全屋' },
        { label: '合作支持', value: '产品、设计、建店、营销与运营支持' }
      ],
      backLabel: '返回产品系统',
      ctaHeading: '获取产品系统与加盟资料',
      ctaSubtitle: '留下联系方式，招商顾问将结合你的城市与店面资源介绍适合的产品组合。',
      ctaButton: '咨询产品加盟'
    }
  },
  articlesPage: {
    title: '新闻中心',
    subtitle: '关注百得胜 Paterson 的水漆科技、行业标准、品牌荣誉、展会动态与招商资讯。',
    readMore: '查看详情',
    empty: '暂无新闻内容',
    back: '返回新闻中心',
    imagePlaceholder: 'Paterson 新闻图片',
    fallback: [
      {
        category: '技术认证',
        date: '2026-07-01',
        intro: '高硬度全水性涂料涂饰家居板件关键技术获得专家组认证，强化水漆整家定制技术背书。',
        slug: 'waterborne-technology-certification',
        title: '百得胜水漆核心科技成果获得权威认证'
      },
      {
        category: '展会新闻',
        date: '2026-06-18',
        intro: '百得胜携水漆整家、康氧卧房与轻高定空间亮相行业展会，展示面向终端的招商表达。',
        slug: 'custom-home-expo',
        title: '百得胜亮相定制家居展，展示水漆整家空间方案'
      },
      {
        category: '行业标准',
        date: '2026-05-26',
        intro: '围绕环保标准、健康家居和水漆柜墙门系统，百得胜持续推动行业高质量发展。',
        slug: 'healthy-home-standards',
        title: '以水漆健康家居推动整家定制标准升级'
      }
    ]
  },
  contactPage: {
    seo: {
      title: '招商加盟_百得胜 Paterson 水漆整家定制加盟咨询',
      description: '了解百得胜 Paterson 水漆整家定制加盟优势、总部支持、合作流程与招商政策，提交意向城市与联系方式获取加盟资料。',
      keywords: '百得胜加盟,Paterson 加盟,全屋定制加盟,水漆整家定制加盟,招商咨询'
    },
    title: '招商加盟',
    subtitle: '以水漆柜墙门系统、环保整家定制和总部全链路支持，帮助城市合伙人建立更有差异化的定制家居门店。',
    sectionNavAria: '招商加盟页面导航',
    sectionNav: [
      { label: '加盟机会', href: '#opportunity' },
      { label: '总部支持', href: '#support' },
      { label: '合作流程', href: '#process' },
      { label: '提交咨询', href: '#inquiry' }
    ],
    hero: {
      eyebrow: '招商加盟',
      titleLine1: '水漆整家定制',
      titleLine2: '加盟新增长',
      subtitle: '百得胜 Paterson 以德尔未来上市公司背景、水漆柜墙门系统和成熟终端运营支持，为城市合伙人提供从产品、建店到营销运营的加盟路径。',
      primaryCta: '提交加盟咨询',
      imageAlt: '百得胜 Paterson 招商加盟门店支持形象',
      metrics: [
        { value: '2001', label: '品牌创立，长期深耕定制家居领域' },
        { value: '002631', label: '德尔未来上市公司股票代码' },
        { value: '全链路', label: '产品、供应链、设计、建店、营销与运营支持' }
      ]
    },
    opportunity: {
      eyebrow: '加盟机会',
      title: '以水漆整家定制，打开健康家居新生意',
      description: '当消费者更关注环保、质感与一站式空间体验，水漆柜墙门系统让门店拥有更鲜明的产品主张。百得胜以真实空间、健康材料与整家方案，帮助加盟门店讲好健康定制的价值。',
      imageAlt: '百得胜水漆整家定制生活空间'
    },
    proof: {
      items: [
        { value: '水漆', label: '健康环保主张', description: '以水漆衣柜、康氧卧房和柜墙门系统，形成区别于普通全屋定制门店的品牌记忆。' },
        { value: '整家', label: '完整空间体验', description: '从衣柜延展到厨房、卧房、儿童房和客餐厅，让消费者在门店看见更完整的家。' },
        { value: '总部', label: '开店运营陪伴', description: '围绕选址建店、设计培训、营销活动和数智化工具，陪伴加盟商稳健起步。' }
      ]
    },
    support: {
      eyebrow: '总部支持',
      title: '从品牌到终端，陪伴门店稳健开局',
      description: '百得胜为城市合伙人提供品牌、产品、供应链、设计、营销和运营支持，让门店从形象搭建、团队训练到开业推广都更有章法。',
      items: [
        { icon: 'i-lucide-award', title: '品牌优势', description: '2001 年品牌积累、德尔未来上市公司背景与水漆科技背书，为城市市场建立信任基础。' },
        { icon: 'i-lucide-layout-grid', title: '产品优势', description: '水漆柜墙门系统、衣柜橱柜与整家空间方案协同，形成更有辨识度的展厅体验。' },
        { icon: 'i-lucide-factory', title: '供应链优势', description: '以材料、工艺、生产与交付能力支撑终端品质，让好产品稳定走进更多家庭。' },
        { icon: 'i-lucide-pencil-ruler', title: '设计支持', description: '围绕空间方案、展厅形象、终端物料与产品培训，呈现更贴近生活的整家定制体验。' },
        { icon: 'i-lucide-megaphone', title: '营销支持', description: '结合开业活动、节日节点、内容传播与总部物料，帮助门店持续吸引本地客群。' },
        { icon: 'i-lucide-chart-no-axes-combined', title: '数智运营支持', description: '以运营方法、数据工具和持续培训，陪伴门店做好客户跟进、成交转化与服务管理。' }
      ]
    },
    process: {
      eyebrow: '合作流程',
      title: '从初次沟通到门店开业，一路有总部支持',
      description: '百得胜招商团队将围绕城市市场、店面资源与经营规划，与意向合伙人逐步沟通合作细节。',
      steps: [
        { title: '在线咨询', description: '留下联系方式与意向城市，开启百得胜加盟沟通。' },
        { title: '总部沟通', description: '招商顾问介绍品牌实力、产品体系、合作政策与开店支持。' },
        { title: '实地考察', description: '走近总部或标杆门店，感受水漆整家定制的产品与终端形象。' },
        { title: '城市洽谈', description: '围绕当地市场、店面资源和投入规划，沟通适合的合作方案。' },
        { title: '签约合作', description: '确认合作区域、门店规划与支持内容，正式成为城市合伙人。' },
        { title: '建店培训', description: '推进门店设计、样品配置、团队培训与开业筹备。' },
        { title: '开业扶持', description: '总部协助开业活动、物料投放、销售演练与首批客户承接。' },
        { title: '持续运营', description: '通过营销、培训、运营复盘与新品导入，陪伴门店长期成长。' }
      ]
    },
    inquiry: {
      eyebrow: '提交咨询',
      title: '留下加盟意向，获取百得胜合作资料',
      description: '填写联系方式与意向城市后，招商顾问将尽快与你沟通水漆整家定制加盟政策。'
    },
    infoTitle: '招商联系信息',
    hours: '咨询时间：09:00 - 18:00',
    labels: {
      address: '总部地址',
      phone: '招商热线',
      email: '联系邮箱',
      hours: '咨询时间'
    }
  },
  designSystemPage: {
    seo: {
      title: '品牌视觉',
      description: '了解 Paterson 百得胜官网的品牌色彩、字体层级、空间排版与交互风格。',
      keywords: 'Paterson 品牌视觉,百得胜官网,品牌色彩,空间设计'
    },
    title: '品牌视觉',
    subtitle: '以暖白、深木色、香槟金和真实空间图，呈现成熟、健康、可信的水漆整家定制品牌气质。',
    sections: {
      philosophy: '设计原则',
      colors: '颜色',
      typography: '字体',
      layout: '布局',
      components: '界面元素',
      interaction: '交互'
    },
    philosophy: {
      brandTitle: '品牌基调',
      brand: '视觉语言保持高级稳重、健康环保和真实空间感，避免促销化、模板化和过度科技化。',
      directionTitle: '设计方向',
      direction: '页面以宽松留白、清晰层级、克制动效和真实家居图片建立品牌信任，并服务加盟转化。',
      keywords: ['稳重', '健康', '真实空间', '招商转化']
    },
    colorIntro: '主色以暖白、深木黑、深木色和香槟金为基础，品牌红黄只用于小面积强调。',
    typographyIntro: '中文标题克制稳重，正文保持舒适阅读，英文只作为辅助标签而不抢占主视觉。',
    layoutGrid: '页面采用宽屏内容容器和响应式分栏，让空间图、品牌信息和加盟行动保持清晰节奏。',
    layoutWhitespace: '区块间距保持舒展，避免传统招商长图式的拥挤信息堆叠。',
    samples: {
      hero: '水漆整家定制加盟新增长',
      h1: '品牌首页标题',
      h2: '核心区块标题',
      h3: '内容卡片标题'
    },
    preview: {
      primaryButton: '主要按钮',
      secondaryButton: '次要按钮',
      ghostButton: '幽灵按钮',
      smallButton: '小按钮',
      largeButton: '大按钮',
      cardTitle: '内容卡片',
      cardDescription: '用于呈现产品系统、品牌实力或新闻内容，保持清晰边界和稳定排版。',
      cardAltTitle: '信息卡片',
      cardAltDescription: '适合展示技术亮点、招商支持或页面摘要。',
      heroTitle: 'Paterson 百得胜',
      heroSubtitle: '水漆整家定制、康氧健康空间与加盟支持共同构成的品牌官网体验。',
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
            '你提交的加盟咨询信息将用于需求沟通、城市机会评估和后续服务联系。未经授权，我们不会将个人信息用于无关用途。'
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
            '网站中的品牌、图片、文字和产品信息用于介绍 Paterson 百得胜相关业务，未经授权不得用于误导性展示或商业复制。'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
