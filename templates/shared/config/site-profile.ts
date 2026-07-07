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
  { title: '[[NAV_HOME]]', description: '[[NAV_HOME_DESCRIPTION]]', href: '/' },
  { title: '[[NAV_ABOUT]]', description: '[[NAV_ABOUT_DESCRIPTION]]', href: '/about' },
  { title: '[[NAV_PHILOSOPHY]]', description: '[[NAV_PHILOSOPHY_DESCRIPTION]]', href: '/philosophy' },
  { title: '[[NAV_DATA]]', description: '[[NAV_DATA_DESCRIPTION]]', href: '/data' },
  { title: '[[NAV_ARTICLES]]', description: '[[NAV_ARTICLES_DESCRIPTION]]', href: '/articles' },
  { title: '[[NAV_CONTACT]]', description: '[[NAV_CONTACT_DESCRIPTION]]', href: '/contact' },
  { title: '[[NAV_PALETTE]]', description: '[[NAV_PALETTE_DESCRIPTION]]', href: '/palette' }
] as const;

const authorityCitations = [
  {
    title: '[[AUTHORITY_CITATION_TITLE_1]]',
    href: '[[AUTHORITY_CITATION_URL_1]]'
  },
  {
    title: '[[AUTHORITY_CITATION_TITLE_2]]',
    href: '[[AUTHORITY_CITATION_URL_2]]'
  }
] as const;

const citeableSummary = [
  '[[AI_CITEABLE_SUMMARY_1]]',
  '[[AI_CITEABLE_SUMMARY_2]]',
  '[[AI_CITEABLE_SUMMARY_3]]'
] as const;

const identity = {
  name: '[[COMPANY_NAME]]',
  legalName: '[[COMPANY_LEGAL_NAME]]',
  shortName: '[[COMPANY_SHORT_NAME]]',
  englishName: '[[COMPANY_ENGLISH_NAME]]',
  alternateNames: ['[[COMPANY_NAME]]', '[[COMPANY_SHORT_NAME]]', '[[COMPANY_ENGLISH_NAME]]'],
  slogan: '[[COMPANY_SLOGAN]]',
  foundingDate: '[[COMPANY_FOUNDING_DATE]]',
  founder: '[[COMPANY_FOUNDER]]'
} as const;

const contact = {
  phone: '[[CONTACT_PHONE]]',
  email: '[[CONTACT_EMAIL]]',
  address: {
    text: '[[CONTACT_ADDRESS]]',
    locality: '[[CONTACT_LOCALITY]]',
    region: '[[CONTACT_REGION]]',
    countryCode: '[[CONTACT_COUNTRY_CODE]]'
  },
  availableLanguages: ['zh-CN', 'en']
} as const;

const geo = {
  industry: '[[INDUSTRY]]',
  areaServed: ['[[AREA_SERVED_1]]', '[[AREA_SERVED_2]]', '[[AREA_SERVED_3]]'],
  knowsAbout: ['[[KNOWS_ABOUT_1]]', '[[KNOWS_ABOUT_2]]', '[[KNOWS_ABOUT_3]]'],
  brands: ['[[BRAND_NAME_1]]', '[[BRAND_NAME_2]]'],
  authorityCitations
} as const;

const aiUsagePolicy = '[[AI_USAGE_POLICY]]';

const llmsSections: LlmsSection[] = [
  {
    title: 'Starter Overview',
    description: [
      '- [[LLMS_OVERVIEW_POINT_1]]',
      '- [[LLMS_OVERVIEW_POINT_2]]',
      '- [[LLMS_OVERVIEW_POINT_3]]'
    ].join('\n')
  },
  {
    title: 'Key Pages',
    description: '[[LLMS_KEY_PAGES_DESCRIPTION]]',
    links: [...primaryRoutes]
  },
  {
    title: 'Citeable Summary',
    description: citeableSummary.map(item => `- ${item}`).join('\n')
  },
  {
    title: 'Structured Data Coverage',
    description: [
      '- [[LLMS_STRUCTURED_DATA_POINT_1]]',
      '- [[LLMS_STRUCTURED_DATA_POINT_2]]',
      '- [[LLMS_STRUCTURED_DATA_POINT_3]]',
      '- [[LLMS_STRUCTURED_DATA_POINT_4]]'
    ].join('\n')
  },
  {
    title: 'External References',
    description: '[[LLMS_EXTERNAL_REFERENCES_DESCRIPTION]]',
    links: authorityCitations.map(citation => ({
      ...citation,
      description: '[[LLMS_EXTERNAL_REFERENCE_ITEM_DESCRIPTION]]'
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
    production: '[[SITE_CANONICAL]]',
    legacy: [],
    externalReferences: ['[[AUTHORITY_CITATION_URL_1]]', '[[AUTHORITY_CITATION_URL_2]]'],
    memberCenter: '[[MEMBER_CENTER_URL]]'
  },
  record: {
    icp: '[[ICP_RECORD]]',
    url: '[[ICP_URL]]'
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
    logo: '',
    slogan: '',
    defaultOgImage: ''
  },
  seo: {
    title: '[[SITE_TITLE]]',
    titleTemplate: '%s | [[COMPANY_SHORT_NAME]]',
    description: '[[SITE_DESCRIPTION]]',
    keywords: [
      '[[SEO_KEYWORD_1]]',
      '[[SEO_KEYWORD_2]]',
      '[[SEO_KEYWORD_3]]',
      '[[SEO_KEYWORD_4]]'
    ],
    ogImage: {
      alt: '[[OG_IMAGE_ALT]]',
      defaultTitle: '[[OG_IMAGE_TITLE]]',
      defaultDescription: '[[OG_IMAGE_DESCRIPTION]]',
      sloganAlt: '[[COMPANY_SLOGAN]]'
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
