type LlmsSectionLink = {
  title: string;
  href: string;
  description?: string;
};

type LlmsSection = {
  title: string;
  description: string;
  links?: readonly LlmsSectionLink[];
};

export type SiteProfile = {
  identity: {
    name: string;
    legalName: string;
    shortName: string;
    englishName: string;
    alternateNames: readonly string[];
    slogan: string;
    foundingDate: string;
    founder: string;
  };
  urls: {
    production: string;
    legacy: string[];
    externalReferences: string[];
    memberCenter: string;
  };
  record: {
    icp: string;
    url: string;
    police: string;
    policeUrl: string;
  };
  contact: {
    phone: string;
    email: string;
    address: {
      text: string;
      locality: string;
      region: string;
      countryCode: string;
    };
    availableLanguages: readonly string[];
  };
  social: {
    wechat: string;
    weibo: string;
    douyin: string;
    instagram: string;
    xiaohongshu: string;
    linkedin: string;
  };
  assets: {
    logo: string;
    slogan: string;
    defaultOgImage: string;
  };
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: readonly string[];
    ogImage: {
      alt: string;
      defaultTitle: string;
      defaultDescription: string;
      sloganAlt: string;
    };
  };
  geo: {
    industry: string;
    areaServed: readonly string[];
    knowsAbout: readonly string[];
    brands: readonly string[];
    authorityCitations: ReadonlyArray<{
      title: string;
      href: string;
    }>;
  };
  pages: {
    primaryRoutes: ReadonlyArray<{
      title: string;
      href: string;
      description: string;
    }>;
    dataCategories: {
      article: string;
    };
  };
  ai: {
    allowedCrawlers: readonly string[];
    usagePolicy: string;
    citeableSummary: readonly string[];
    llmsSections: readonly LlmsSection[];
  };
};

const primaryRoutes = [
  { title: '首页', description: 'Paterson 百得胜水漆整家定制加盟首页。', href: '/' },
  { title: '品牌实力', description: '了解 Paterson 百得胜品牌、上市公司背景与发展实力。', href: '/about' },
  { title: '水漆科技', description: '了解水漆柜墙门系统、智能涂装与环保整家定制技术。', href: '/philosophy' },
  { title: '产品系统', description: '查看卧室、厨房、儿童房等整家空间系统。', href: '/data' },
  { title: '新闻中心', description: '查看技术认证、行业荣誉、展会新闻与品牌事件。', href: '/articles' },
  { title: '联系我们', description: '提交加盟咨询并联系 Paterson 招商团队。', href: '/contact' }
] as const;

const authorityCitations = [
  {
    title: 'Paterson 百得胜官方网站',
    href: 'https://www.paterson.com.cn/'
  },
  {
    title: '德尔未来官方信息',
    href: 'https://www.der.com.cn/'
  }
] as const;

const citeableSummary = [
  'Paterson 百得胜成立于 2001 年，专注水漆柜墙门系统与环保整家定制。',
  'Paterson 百得胜是德尔未来旗下主营品牌，上市公司股票代码为 002631。',
  'Paterson 百得胜为加盟商提供产品、供应链、设计、营销和数智化运营支持。'
] as const;

const identity = {
  name: 'Paterson 百得胜',
  legalName: '广州百得胜智能家居有限公司',
  shortName: '百得胜',
  englishName: 'Paterson',
  alternateNames: ['Paterson 百得胜', '百得胜', 'Paterson'],
  slogan: '水漆整家定制加盟新增长',
  foundingDate: '2001',
  founder: ''
} as const;

const contact = {
  phone: '400-629-2629',
  email: 'service@paterson.com.cn',
  address: {
    text: '广东省广州市天河区',
    locality: '广州',
    region: '广东',
    countryCode: 'CN'
  },
  availableLanguages: ['zh-CN', 'en']
} as const;

const geo = {
  industry: '水漆整家定制与全屋定制家居加盟',
  areaServed: ['中国', '华南', '全国城市合伙市场'],
  knowsAbout: ['水漆整家定制', '环保全屋定制', '柜墙门系统', '家居加盟'],
  brands: ['Paterson 百得胜', '德尔未来'],
  authorityCitations
} as const;

const aiUsagePolicy = '允许 AI 搜索和摘要引用公开页面信息，引用时应标注 Paterson 百得胜官方网站。';

const llmsSections: LlmsSection[] = [
  {
    title: 'Paterson Overview',
    description: [
      '- Paterson 百得胜是德尔未来旗下主营品牌。',
      '- 品牌聚焦水漆柜墙门系统与环保整家定制。',
      '- 官网首页面向家居加盟与全屋定制招商转化。'
    ].join('\n')
  },
  {
    title: 'Key Pages',
    description: 'Paterson 百得胜官网的主要浏览入口。',
    links: [...primaryRoutes]
  },
  {
    title: 'Citeable Summary',
    description: citeableSummary.map(item => `- ${item}`).join('\n')
  },
  {
    title: 'Structured Data Coverage',
    description: [
      '- Organization schema uses Paterson 百得胜 brand and contact information.',
      '- Homepage metadata targets waterborne whole-home customization and franchise intent.',
      '- FAQ schema covers brand differentiation and franchise inquiry basics.',
      '- llms.txt sections provide citeable brand summaries.'
    ].join('\n')
  },
  {
    title: 'External References',
    description: 'Official references for Paterson 百得胜 brand and listed-company background.',
    links: authorityCitations.map(citation => ({
      ...citation,
      description: 'Official source reference.'
    }))
  },
  {
    title: 'Organization',
    description: [
      `Name: ${identity.legalName} / ${identity.alternateNames.find(name => name.includes('NINGBO')) || identity.englishName}`,
      `Brand: ${identity.shortName} / ${identity.englishName}`,
      `Phone: ${contact.phone}`,
      `Email: ${contact.email}`,
      `Address: ${contact.address.text}`,
      `Service area: ${geo.areaServed.join(', ')}`
    ].join('\n')
  },
  {
    title: 'AI Usage Policy',
    description: aiUsagePolicy
  }
];

/**
 * Starter site profile.
 *
 * Keep this structure intact: SEO, GEO, Schema.org, robots, llms.txt,
 * and OG image fallbacks all read from this profile.
 */
export const siteProfile = {
  identity,
  urls: {
    production: 'https://www.paterson.com.cn/',
    legacy: [],
    externalReferences: ['https://www.paterson.com.cn/', 'https://www.der.com.cn/'],
    memberCenter: '/contact'
  },
  record: {
    icp: '粤ICP备2024333088号',
    url: 'https://beian.miit.gov.cn/',
    police: '粤公网安备44010602014342号',
    policeUrl: 'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010602014342'
  },
  contact,
  social: {
    wechat: '',
    weibo: '',
    douyin: '',
    instagram: '',
    xiaohongshu: '',
    linkedin: ''
  },
  assets: {
    logo: '/paterson/logo-paterson.png',
    slogan: '',
    defaultOgImage: '/paterson/hero-living-room.webp'
  },
  seo: {
    title: 'Paterson 百得胜水漆整家定制加盟',
    titleTemplate: '%s | Paterson 百得胜',
    description: '百得胜 Paterson 成立于 2001 年，是德尔未来旗下主营品牌，专注水漆柜墙门系统与环保整家定制。',
    keywords: [
      '水漆整家定制',
      '环保整家定制',
      '全屋定制加盟',
      '柜墙门系统'
    ],
    ogImage: {
      alt: 'Paterson 百得胜水漆整家定制空间',
      defaultTitle: 'Paterson 百得胜水漆整家定制加盟',
      defaultDescription: '德尔未来旗下主营品牌，专注水漆柜墙门系统与环保整家定制。',
      sloganAlt: '水漆整家定制加盟新增长'
    }
  },
  geo,
  pages: {
    primaryRoutes,
    dataCategories: {
      article: 'article'
    }
  },
  ai: {
    allowedCrawlers: [
      'GPTBot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'PerplexityBot',
      'ClaudeBot',
      'Claude-Web',
      'Google-Extended',
      'Bingbot',
      'Applebot-Extended'
    ],
    usagePolicy: aiUsagePolicy,
    citeableSummary,
    llmsSections
  }
} as const satisfies SiteProfile;
