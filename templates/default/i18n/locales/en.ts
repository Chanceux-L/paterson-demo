const common = {
  all: 'All',
  apply: 'Apply',
  back: 'Back',
  breadcrumb: 'Breadcrumb',
  clear: 'Clear',
  clearAll: 'Clear all',
  close: 'Close',
  home: 'Home',
  inquiry: 'Inquiry',
  loadMore: 'Load more',
  loading: 'Loading',
  nextImage: 'Next image',
  nextPage: 'Next page',
  none: 'None',
  previousImage: 'Previous image',
  previousPage: 'Previous page',
  showLess: 'Show less',
  showMore: 'Show more',
  viewImageIndex: 'View image {index}'
};

const navItems = [
  { label: 'Home', english: 'Home', href: '/' },
  { label: 'About', english: 'About', href: '/about' },
  { label: 'Philosophy', english: 'Philosophy', href: '/philosophy' },
  { label: 'Data', english: 'Data', href: '/data' },
  { label: 'Articles', english: 'Articles', href: '/articles' },
  { label: 'Contact', english: 'Contact', href: '/contact' },
  { label: 'Design System', english: 'Design System', href: '/palette' }
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
      eyebrow: 'Inquiry',
      title: 'Tell us what you need',
      description: 'Submit the form and we will get back to you with the information provided. Adjust this copy and the submit flow before launch as needed.',
      name: 'Name',
      namePlaceholder: 'Enter your name',
      missingName: 'Please enter your name',
      phoneCountry: 'Country or region',
      phoneCountrySearch: 'Search country or region code',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      email: 'Email',
      emailPlaceholder: 'Enter your email address',
      company: 'Company',
      companyPlaceholder: 'Enter your company name',
      message: 'Message',
      messagePlaceholder: 'Briefly describe your needs, project context, or what you would like to learn',
      missingMessage: 'Please enter your message',
      captcha: 'Verification code',
      captchaPlaceholder: 'Enter the verification code',
      captchaAlt: 'Verification code image',
      missingCaptcha: 'Please enter the verification code',
      submit: 'Submit inquiry',
      submitting: 'Submitting',
      success: 'Submitted successfully. We will contact you soon.',
      missingPhone: 'Please enter your phone number',
      invalidPhone: 'Please enter a valid phone number',
      failed: 'Submission failed. Please try again later'
    }
  }
};

const starter = {
  site: {
    name: 'Starter'
  },
  common,
  languageSwitcher: {
    aria: 'Switch language',
    label: 'Language',
    localeName: 'English',
    search: 'Search languages',
    empty: 'No languages available',
    languages: {
      'zh-CN': {
        label: '简体中文',
        localeName: 'Simplified Chinese',
        searchTerms: ['Chinese', 'Mandarin', 'zh']
      },
      'en': {
        label: 'English',
        localeName: 'English',
        searchTerms: ['English', 'en']
      }
    }
  },
  nav: {
    homeAria: 'Back to home',
    logoAlt: 'Site logo',
    sloganAlt: 'Enterprise starter template',
    menu: 'Menu',
    mainNav: 'Main navigation',
    memberCenter: 'Member center',
    hotline: 'Hotline',
    items: navItems,
    search: {
      scrollTop: 'Back to top'
    }
  },
  footer: {
    brandDescription: 'An enterprise website starter that preserves SEO, GEO, OG Image, and core interaction features while leaving business content ready to replace.',
    slogan: 'A reusable site foundation for fast delivery',
    socials: [
      { icon: 'i-lucide-message-circle', label: 'WeChat' },
      { icon: 'i-lucide-radio', label: 'Weibo' },
      { icon: 'i-lucide-video', label: 'Short video' },
      { icon: 'i-lucide-instagram', label: 'Instagram' },
      { icon: 'i-lucide-book-open', label: 'Xiaohongshu' },
      { icon: 'i-lucide-globe', label: 'LinkedIn' }
    ],
    columns: [
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Philosophy', href: '/philosophy' },
          { label: 'Design System', href: '/palette' }
        ]
      },
      {
        title: 'Content',
        links: [
          { label: 'Data', href: '/data' },
          { label: 'Articles', href: '/articles' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Member center', href: 'sourceRegisterUrl', external: true }
        ]
      }
    ],
    followUs: 'Contact',
    email: 'Email',
    address: 'Address',
    tagline: 'Starter shell for reusable enterprise websites.',
    copyright: '© 2026 Starter. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookieSettings: 'Cookie settings'
  },
  cookie: {
    title: 'Cookie preferences',
    description: 'We use necessary cookies to keep the site working and, with your consent, analytics cookies to improve the experience.',
    necessaryTitle: 'Necessary cookies',
    necessaryDescription: 'Required for security, language, sessions, and core site features. Always enabled.',
    alwaysOn: 'Always on',
    statisticsTitle: 'Analytics cookies',
    statisticsDescription: 'Help us understand visits and improve the page experience.',
    manage: 'Manage settings',
    necessaryOnly: 'Necessary only',
    save: 'Save settings',
    acceptAll: 'Accept all'
  },
  skewUpdate: {
    title: 'New version available',
    description: 'The site has been updated. Refresh to use the latest version.',
    refresh: 'Refresh now',
    dismiss: 'Later'
  },
  error: {
    pageLabel: 'Page error',
    action: 'Back to home',
    contactAction: 'Contact us',
    types: {
      badRequest: {
        eyebrow: '400',
        title: 'Bad request',
        description: 'This request could not be processed. Check the link or return to the home page.'
      },
      unauthorized: {
        eyebrow: '401',
        title: 'Authentication required',
        description: 'Please verify your access before viewing this page.'
      },
      forbidden: {
        eyebrow: '403',
        title: 'Access denied',
        description: 'You do not currently have permission to view this content.'
      },
      notFound: {
        eyebrow: '404',
        title: 'Page not found',
        description: 'The page may have moved, been deleted, or the link may be incorrect.'
      },
      serverError: {
        eyebrow: '500',
        title: 'Server error',
        description: 'Something went wrong on the server. Please try again later.'
      },
      unavailable: {
        eyebrow: '503',
        title: 'Service unavailable',
        description: 'The site is under maintenance or temporarily unavailable. Please try again later.'
      },
      defaultError: {
        eyebrow: 'ERROR',
        title: 'Something went wrong',
        description: 'The page failed to load. Please try again later or return to the home page.'
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
      title: 'Design System',
      description: 'Review the Starter colors, typography, layout, components, and interaction guidelines.',
      keywords: 'design system,design tokens,component guidelines,starter'
    },
    title: 'Design System',
    subtitle: 'A practical visual foundation for enterprise starter sites, keeping pages, components, and interactions consistent.',
    sections: {
      philosophy: 'Principles',
      colors: 'Colors',
      typography: 'Typography',
      layout: 'Layout',
      components: 'Components',
      interaction: 'Interaction'
    },
    philosophy: {
      brandTitle: 'Brand tone',
      brand: 'The default style stays neutral, clear, and trustworthy so a real brand can replace it without carrying old business decoration.',
      directionTitle: 'Design direction',
      direction: 'Components use light surfaces, clear borders, stable spacing, and reusable tokens for enterprise sites, content sites, and lightweight product pages.',
      keywords: ['Neutral', 'Clear', 'Reusable', 'Replaceable']
    },
    colorIntro: 'Colors are sourced from design tokens in main.css and exposed to pages and components through the Tailwind theme mapping.',
    typographyIntro: 'Type scale uses standard Tailwind utilities instead of arbitrary clamp classes, keeping responsive pages stable and predictable.',
    layoutGrid: 'Page content is built around max-w-7xl, section-container, and responsive grids so desktop and mobile layouts stay consistent.',
    layoutWhitespace: 'Spacing uses shared tokens and Tailwind spacing steps, preventing one-off section styles from fragmenting the page.',
    samples: {
      hero: 'A clear and reliable enterprise starter',
      h1: 'Page title hierarchy',
      h2: 'Section title hierarchy',
      h3: 'Card title hierarchy'
    },
    preview: {
      primaryButton: 'Primary CTA',
      secondaryButton: 'Secondary',
      ghostButton: 'Ghost',
      smallButton: 'Small',
      largeButton: 'Large',
      cardTitle: 'Content card',
      cardDescription: 'Use this pattern for features, data entries, or article links with clear boundaries and stable layout.',
      cardAltTitle: 'Information card',
      cardAltDescription: 'A simple surface for supporting notes, resource links, or page summaries.',
      heroTitle: 'Hero preview',
      heroSubtitle: 'A foundational hero block for titles, supporting copy, and action buttons.',
      heroCta: 'View details'
    }
  },
  legal: {
    eyebrow: 'Legal',
    lastUpdated: 'Last updated',
    privacy: {
      seo: {
        title: 'Privacy Policy',
        description: 'Learn how we collect, use, store, and protect personal information.',
        keywords: 'privacy policy,personal information,cookies'
      },
      title: 'Privacy Policy',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: 'How we handle information',
          paragraphs: [
            'We process information only as needed to provide the site, respond to inquiries, maintain security, and improve the experience.',
            'This is starter copy. Replace it with formal legal text that matches your business, region, and compliance requirements before launch.'
          ]
        }
      ]
    },
    terms: {
      seo: {
        title: 'Terms of Use',
        description: 'Review the basic terms that apply when accessing and using this website.',
        keywords: 'terms of use,website terms,service terms'
      },
      title: 'Terms of Use',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: 'Using this website',
          paragraphs: [
            'By accessing this website, you agree to follow applicable laws and use the site content in a reasonable and lawful way.',
            'This page contains starter terms. Replace it with formal copy suited to your business before launch.'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
