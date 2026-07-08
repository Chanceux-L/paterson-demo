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
  { label: 'Brand', english: 'Brand', href: '/about' },
  { label: 'Products', english: 'Products', href: '/data' },
  { label: 'Tech', english: 'Technology', href: '/philosophy' },
  { label: 'Franchise', english: 'Franchise', href: '/contact' },
  { label: 'News', english: 'News', href: '/articles' }
];

const pageSeo = {
  home: {
    seo: {
      title: 'Paterson Waterborne Whole-Home Custom Franchise | Eco Cabinet Wall Door Systems',
      description: 'Founded in 2001, Paterson is a core brand under DareGlobal, focused on waterborne cabinet-wall-door systems and eco whole-home customization with product, supply chain, design, marketing, and digital operation support for franchise partners.',
      keywords: 'waterborne whole-home customization,eco whole-home customization,whole-home custom franchise,home furnishing franchise,cabinet wall door system,Paterson,DareGlobal,stock code 002631'
    }
  },
  about: {
    seo: {
      title: 'Brand Strength | Paterson Waterborne Whole-Home Customization',
      description: 'Learn about Paterson brand history, DareGlobal listed-company backing, waterborne technology, and franchise support for whole-home customization.',
      keywords: 'Paterson brand strength,DareGlobal,waterborne whole-home customization,home furnishing franchise'
    }
  },
  articles: {
    seo: {
      title: 'News | Paterson Brand Updates and Industry Insights',
      description: 'Read Paterson updates on waterborne technology, industry standards, exhibitions, brand honors, and whole-home customization.',
      keywords: 'Paterson news,waterborne technology,home furnishing exhibition,whole-home customization news'
    },
    detailSeo: {
      title: '{title} | Paterson News',
      description: 'Read Paterson news update: {title}',
      keywords: '{title},Paterson news,waterborne whole-home customization'
    }
  },
  contact: {
    inquiry: {
      eyebrow: 'Inquiry',
      title: 'Tell us what you need',
      description: 'Submit the form and a franchise consultant will contact you to discuss city opportunity, investment planning, and cooperation options.',
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
    name: 'Paterson'
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
    logoAlt: 'Paterson logo',
    sloganAlt: 'A core brand under DareGlobal',
    menu: 'Menu',
    mainNav: 'Main navigation',
    memberCenter: 'Inquiry',
    hotline: 'Franchise hotline',
    items: navItems,
    search: {
      scrollTop: 'Back to top'
    }
  },
  footer: {
    brandDescription: 'Founded in 2001, Paterson focuses on waterborne cabinet-wall-door systems and eco whole-home customization as a core brand under DareGlobal.',
    slogan: 'A new franchise growth path for waterborne whole-home customization',
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
        title: 'Brand',
        links: [
          { label: 'Brand Strength', href: '/about' },
          { label: 'Waterborne Tech', href: '/philosophy' },
          { label: 'Franchise', href: '/contact' }
        ]
      },
      {
        title: 'Products & News',
        links: [
          { label: 'Product Systems', href: '/data' },
          { label: 'News', href: '/articles' }
        ]
      },
      {
        title: 'Contact',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Franchise Inquiry', href: 'sourceRegisterUrl', external: true }
        ]
      }
    ],
    followUs: 'Contact',
    email: 'Email',
    address: 'Address',
    tagline: 'A brand website shaped by refined living spaces, waterborne technology, and a clear franchise path.',
    copyright: '© 2026 Paterson. All rights reserved.',
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
    title: 'Ready to discuss Paterson franchise cooperation?',
    description: 'Leave your contact details and our franchise team will assess your target city, budget, and store resources.',
    action: 'Submit Inquiry',
    contactLabel: 'Franchise Hotline',
    bgText: 'PATERSON'
  },
  pages: pageSeo,
  data: {
    siteConfig: {
      companyName: 'Guangzhou Paterson Intelligent Home Co., Ltd.',
      shortName: 'Paterson',
      industry: 'Waterborne whole-home customization and home furnishing franchise',
      siteTitle: 'Paterson Waterborne Whole-Home Custom Franchise',
      siteDescription: 'Founded in 2001, Paterson is a core brand under DareGlobal, focused on waterborne cabinet-wall-door systems and eco whole-home customization.',
      canonical: 'https://www.paterson.com.cn/',
      navigation: navItems.map(item => ({ label: item.label, path: item.href })),
      footerIntro: 'Paterson focuses on waterborne cabinet-wall-door systems and eco whole-home customization, supporting city partners with product, supply chain, design, marketing, and digital operations.',
      footerColumns: [
        {
          title: 'Brand',
          links: [
            { label: 'Brand Strength', path: '/about' },
            { label: 'Waterborne Tech', path: '/philosophy' }
          ]
        },
        {
          title: 'Content',
          links: [
            { label: 'Product Systems', path: '/data' },
            { label: 'News', path: '/articles' }
          ]
        }
      ]
    }
  },
  homePage: {
    hero: {
      badge: 'A core brand under DareGlobal · Stock code 002631',
      title: 'Paterson Waterborne Whole-Home Customization',
      titleLine1: 'Paterson',
      titleLine2: 'Waterborne Whole-Home Customization',
      subtitle: 'Founded in 2001, Paterson is an eco whole-home customization company focused on waterborne cabinet, wall, door, and furniture systems. It is a core brand under listed company DareGlobal.',
      ctaLabel: 'Start Franchise Inquiry',
      cta2Label: 'View Brand Strength',
      imageAlt: 'Paterson waterborne whole-home custom living space',
      caption: 'Waterborne chain capability, wellness spaces, carbon-fiber materials, and marketing support shape Paterson’s differentiated franchise system.',
      oxygenValue: 'Wellness Oxygen',
      oxygenLabel: 'Intelligent bedroom and indoor-air standards',
      keywords: {
        waterPaint: 'Waterborne chain',
        oxygen: 'Wellness oxygen',
        material: 'Carbon fiber',
        marketing: 'Marketing'
      },
      metrics: [
        { value: '2001', label: 'Brand founding year' },
        { value: '002631', label: 'DareGlobal stock code' },
        { value: '4.0', label: 'Waterborne factory upgrade' },
        { value: 'Systems', label: 'Cabinet, wall, and door integration' }
      ]
    },
    forest: {
      eyebrow: 'Wellness Oxygen Chain',
      title: 'An intelligent wellness bedroom with a forest-fresh memory point',
      description: 'Paterson uses intelligent wellness bedrooms, super health centers, and indoor-air standard capability to answer long-term family needs around clean air, better sleep, and healthier living spaces.',
      center: 'Super Health Center',
      note: 'From bedroom air quality and eco materials to whole-home experience, wellness becomes a living scenario users can feel.',
      proofs: {
        bedroom: 'Intelligent wellness bedroom',
        center: 'Super health center',
        standard: 'Indoor-air standard leadership'
      },
      proofDescriptions: {
        bedroom: 'The bedroom becomes the high-frequency living scenario that turns wellness oxygen from an abstract claim into a spatial system.',
        center: 'Air, materials, cabinet-wall-door systems, and living habits are organized as a health center beyond ordinary customization.',
        standard: 'Indoor-air standard leadership supports franchise trust in Paterson’s healthy-home capability.'
      },
      nodes: {
        chain: 'Wellness oxygen chain',
        forest: 'Forest oxygen',
        bedroom: 'Intelligent wellness bedroom',
        standard: 'Indoor-air standard'
      }
    },
    trust: {
      eyebrow: 'About Us',
      title: 'A long-term brand for waterborne whole-home customization',
      description: 'Founded in 2001, Paterson is a core brand under DareGlobal. The brand has long focused on customized home furnishing, building market trust through waterborne technology, eco whole-home customization, and terminal operation support.',
      stats: [
        { value: '2001', label: 'Paterson was founded and has stayed focused on customized home furnishing.' },
        { value: 'DareGlobal', label: 'A core brand under a listed company, stock code 002631.' },
        { value: 'Standard Lead', label: 'Technical and standard-setting credentials for waterborne custom home furnishing.' },
        { value: 'Smart Coating', label: 'Waterborne 3D intelligent coating line and factory 4.0 upgrade.' }
      ]
    },
    technology: {
      eyebrow: 'Waterborne Technology',
      title: 'A closed-loop waterborne chain from materials and process to whole-home spaces',
      description: 'Paterson’s waterborne 3D intelligent coating line, factory 4.0 upgrade, and standard-setting capability support stable delivery for waterborne whole-home customization.',
      summary: 'Materials, coating, product systems, and terminal delivery are presented as one capability chain.',
      metrics: [
        { value: '3D', label: 'Intelligent coating line' },
        { value: '4.0', label: 'Factory waterborne upgrade' },
        { value: 'Waterborne', label: 'Material and delivery coordination' }
      ],
      items: [
        { title: 'Waterborne Cabinet-Wall-Door System', description: 'A differentiated product capability built around waterborne process, integrated cabinet-wall-door design, and whole-home delivery.', href: '/data' }
      ],
      nodes: [
        { icon: 'i-lucide-droplets', title: 'Closed-loop waterborne chain', description: 'Materials, coating, product systems, and terminal delivery work together around waterborne customization.' },
        { icon: 'i-lucide-factory', title: '3D intelligent coating line', description: 'Intelligent processes improve stability, surface quality, and scalable delivery.' },
        { icon: 'i-lucide-leaf', title: 'Factory 4.0 waterborne upgrade', description: 'Factory-side waterborne upgrading supports scalable delivery for whole-home customization.' },
        { icon: 'i-lucide-award', title: 'Certified leading technology', description: 'Paterson waterborne coating technology has received expert-panel recognition.' }
      ]
    },
    products: {
      eyebrow: 'Our Services',
      title: 'Waterborne cabinet-wall-door systems and eco whole-home customization services',
      description: 'From bedroom storage and kitchen systems to children growth spaces, Paterson uses real home scenarios to present the value of waterborne whole-home customization.',
      items: [
        {
          title: 'Wardrobe Customization',
          description: 'Waterborne wardrobes and whole-home customization with 3 primers, 2 finishes, and 72 pure waterborne paint processes.',
          image: '/paterson/product-bedroom-system.webp',
          tags: ['Waterborne wardrobe', 'Whole-home custom', '72 processes']
        },
        {
          title: 'Cabinet Customization',
          description: 'Paterson cabinets: eco-friendly, healthy, and visually refined.',
          image: '/paterson/product-kitchen-system.webp',
          tags: ['Cabinet custom', 'Eco-friendly', 'Healthy']
        },
        {
          title: 'Future Home by ér',
          description: 'Let children participate in design and create a growth environment that protects body, mind, learning, and imagination.',
          image: '/paterson/product-children-room.webp',
          tags: ['Children room', 'Growth space', 'Future home']
        }
      ]
    },
    advantages: {
      eyebrow: 'Franchise Advantages',
      title: 'Franchise: waterborne paint, wellness oxygen, materials, and marketing innovation',
      items: [
        { icon: 'i-lucide-droplets', title: 'Closed-loop Waterborne Chain', description: 'Waterborne 3D intelligent coating line, factory 4.0 waterborne upgrade, and waterborne standard leadership.' },
        { icon: 'i-lucide-wind', title: 'Wellness Oxygen Chain', description: 'Intelligent wellness bedrooms, super health center, and indoor-air standard leadership.' },
        { icon: 'i-lucide-layers-3', title: 'Carbon Fiber Aerospace Material', description: 'Nine performance advantages and dimensional control that solves key light-luxury customization challenges.' },
        { icon: 'i-lucide-megaphone', title: 'Marketing Innovation', description: 'AI digital enablement, waterborne new retail, and diversified campaign traffic generation.' },
        { icon: 'i-lucide-award', title: 'Enterprise Honors', description: 'Technology certifications, industry awards, standard-setting, and major brand events build terminal trust.' },
        { icon: 'i-lucide-history', title: 'Long-Term Focus', description: 'Since 2001, Paterson has built brand, product, and terminal experience in customized home furnishing.' }
      ]
    },
    process: {
      eyebrow: 'Franchise Process',
      title: 'An eight-step path from inquiry to city launch',
      description: 'From initial inquiry to training, opening support, and ongoing operations, each step gives partners a clear next action.',
      stepLabel: 'Step',
      steps: [
        { title: 'Online Inquiry', description: 'Submit city, budget, and contact details.' },
        { title: 'Headquarters Call', description: 'Match regional policies and cooperation model.' },
        { title: 'On-site Visit', description: 'Review showroom, factory, and terminal samples.' },
        { title: 'City Evaluation', description: 'Assess district, competition, and investment plan.' },
        { title: 'Agreement', description: 'Confirm authorization, policies, and launch pace.' },
        { title: 'Store Training', description: 'Complete design, product, and operation training.' },
        { title: 'Opening Support', description: 'Coordinate campaigns, traffic, and team kickoff.' },
        { title: 'Ongoing Operation', description: 'Receive marketing, product, and digital support.' }
      ]
    },
    news: {
      eyebrow: 'News and Honors',
      title: 'Waterborne technology, brand honors, and industry updates',
      more: 'View News',
      items: [
        {
          tag: 'Technology',
          title: 'Paterson waterborne core technology recognized by expert panel',
          description: 'Key technology for high-hardness waterborne coated home panels received expert recognition.',
          image: '/paterson/news-water-paint-tech.webp'
        },
        {
          tag: 'Exhibition',
          title: 'Paterson presents core technologies and spaces at Guangzhou custom home fair',
          description: 'The brand strengthens terminal franchise expression around waterborne whole-home customization.',
          image: '/paterson/news-custom-home-expo.webp'
        },
        {
          tag: 'Standards',
          title: 'New furniture standards and healthier waterborne home furnishing',
          description: 'Environmental standards and wellness-home narratives extend the value of cabinet-wall-door systems.',
          image: '/paterson/news-furniture-standard.webp'
        }
      ]
    },
    consult: {
      eyebrow: 'Franchise Form',
      title: 'Leave your city and budget for a cooperation assessment',
      description: 'The form collects only essential information so the franchise team can evaluate city opportunity, investment plan, and next communication steps.',
      privacy: 'Information is used only for franchise consultation and kept confidential.',
      hours: 'Headquarters consultation hours: 09:00 - 18:00',
      form: {
        name: 'Name',
        namePlaceholder: 'Enter your name',
        phone: 'Phone',
        phonePlaceholder: 'Enter your phone number',
        city: 'Target city',
        cityPlaceholder: 'e.g. Guangzhou / Chengdu / Hangzhou',
        budget: 'Investment budget',
        budgetPlaceholder: 'Select a budget range',
        budgetOne: 'Under RMB 500k',
        budgetTwo: 'RMB 500k - 1m',
        budgetThree: 'Above RMB 1m',
        message: 'Notes',
        messagePlaceholder: 'Tell us about store resources, industry experience, or questions',
        submit: 'Submit Franchise Inquiry'
      }
    },
    mobileBar: {
      consult: 'Inquiry',
      call: 'Call',
      store: 'Stores'
    },
    faq: {
      items: [
        { question: 'What is Paterson’s core differentiation?', answer: 'Paterson combines waterborne cabinet-wall-door systems, eco whole-home customization, and DareGlobal listed-company backing.' },
        { question: 'What information is needed for franchise inquiry?', answer: 'Name, phone, target city, budget, and store resources help headquarters evaluate the opportunity.' }
      ]
    }
  },
  aboutPage: {
    sectionNavAria: 'About section navigation',
    sectionNav: [
      { label: 'Company Profile', href: '#company' },
      { label: 'Culture', href: '#culture' },
      { label: 'Honors', href: '#honors' },
      { label: 'History', href: '#history' },
      { label: 'Contact', href: '#contact' }
    ],
    hero: {
      eyebrow: 'Brand Strength',
      titleLine1: 'Paterson',
      titleLine2: 'Long-Term Brand Strength',
      subtitle: 'From its founding in 2001 to becoming a core brand under DareGlobal, Paterson builds long-term trust for city partners through waterborne cabinet-wall-door systems, eco whole-home customization, and terminal operation support.',
      primaryCta: 'Discuss Franchise Cooperation',
      imageAlt: 'Paterson brand strength visual',
      stats: [
        { value: '2001', label: 'Founded and focused on customized home furnishing' },
        { value: '002631', label: 'DareGlobal listed-company stock code' },
        { value: 'Waterborne', label: 'Cabinet-wall-door systems and eco customization' },
        { value: 'Full Chain', label: 'Product, supply chain, design, marketing, and operations' }
      ]
    },
    proof: {
      eyebrow: 'Trust Proof',
      title: 'A Stable Brand Foundation',
      description: 'Founded in 2001, Paterson is a core brand under DareGlobal. It focuses on waterborne cabinet-wall-door systems and eco whole-home customization, building competitiveness through product innovation, technology, and retail focus.',
      tags: [
        { label: 'Founded in 2001' },
        { label: 'Under DareGlobal' },
        { label: 'Waterborne Systems' },
        { label: 'Eco Whole-Home Customization' }
      ],
      items: [
        { icon: 'i-lucide-building-2', title: 'Under DareGlobal', description: 'A core brand under a listed company, supported by more stable governance and long-term resources.' },
        { icon: 'i-lucide-droplets', title: 'Waterborne Credibility', description: 'Materials, intelligent coating, factory waterborne upgrades, and standards shape eco whole-home differentiation.' },
        { icon: 'i-lucide-factory', title: 'Supply-Chain Delivery', description: 'Process, product systems, and terminal delivery are aligned so stores can present consistent quality.' },
        { icon: 'i-lucide-store', title: 'Terminal Support', description: 'City partners receive design, store setup, marketing, training, and digital operation support.' }
      ]
    },
    origin: {
      eyebrow: 'Company Strength',
      title: 'A production system built for waterborne whole-home delivery',
      description: 'Paterson continues to invest in waterborne cabinet-wall-door systems, eco materials, intelligent coating, and whole-home delivery, connecting production bases, product processes, and terminal stores into a stable operating system.',
      imageAlt: 'Paterson factory production system',
      captionEyebrow: 'Production and Delivery',
      caption: 'With waterborne cabinet-wall-door systems at the core, Paterson continues to invest in eco materials, production processes, and whole-home delivery capability.',
      quote: 'Brand strength ultimately has to show up in product systems, production capability, and terminal delivery experience.'
    },
    capabilities: {
      eyebrow: 'Core Capability',
      title: 'Brand, technology, products, and terminal operations as one system',
      description: 'From formaldehyde-free substrates and waterborne coating to wellness bedrooms and waterborne light luxury customization, Paterson keeps upgrading eco healthy whole-home solutions for clearer terminal presentation and delivery.',
      items: [
        { icon: 'i-lucide-award', title: 'Brand Credibility', description: 'A founding history since 2001, listed-company backing, and standard participation reduce uncertainty for partners.' },
        { icon: 'i-lucide-leaf', title: 'Healthy-Home Positioning', description: 'Waterborne systems, wellness bedrooms, and indoor-air capabilities move healthy living from concept to real space.' },
        { icon: 'i-lucide-layout-grid', title: 'Whole-Home Product System', description: 'Cabinets, walls, doors, kitchens, bedrooms, and children spaces share one coherent terminal language.' },
        { icon: 'i-lucide-megaphone', title: 'Franchise Operations', description: 'Store setup, training, traffic generation, marketing tools, and digital operations help city partners launch steadily.' }
      ]
    },
    culture: {
      eyebrow: 'Culture',
      title: 'From Paterson Street to healthy whole-home customization',
      description: 'Rooted in the brand memory of PATERSON, Paterson carries the mission of customizing healthy smart homes and the vision of becoming a global leader in healthy home living.',
      items: [
        { icon: 'i-lucide-compass', title: 'Mission', description: 'Customize a healthy smart home for people.' },
        { icon: 'i-lucide-heart-handshake', title: 'Values', description: 'Customer-centered, striver-oriented, and committed to long-term progress.' },
        { icon: 'i-lucide-rocket', title: 'Business Philosophy', description: 'Product leadership, technology driven, and retail focus.' }
      ]
    },
    proofImages: [
      {
        image: '/paterson/brand-culture-vision.webp',
        title: 'Brand Culture Memory',
        description: 'The PATERSON street-name origin carries the brand’s memory and extends into Paterson’s long-term commitment to healthy home living.'
      },
      {
        image: '/paterson/brand-franchise-support.webp',
        title: 'Terminal Support Capability',
        description: 'Product, design, store setup, marketing, training, and digital operations support city partners through implementation.'
      }
    ],
    timeline: {
      eyebrow: 'Development',
      title: 'Brand strength comes from continuous accumulation',
      description: 'Paterson follows long-term eco development, continuously evolving through formaldehyde-free substrates, waterborne processes, healthy air, and light luxury customization.',
      items: [
        { year: '2001', title: 'Brand Founded', description: 'Paterson was founded and entered the customized home furnishing sector.' },
        { year: '002631', title: 'Listed-Company Backing', description: 'As a core brand under DareGlobal, Paterson is supported by governance and resources from a listed company.' },
        { year: 'Waterborne Tech', title: 'Differentiated Technology Proposition', description: 'Waterborne cabinet-wall-door systems, intelligent coating, and factory upgrades shape eco whole-home advantages.' },
        { year: 'Now', title: 'For City Partners', description: 'Product, supply chain, design, marketing, and digital operation support help whole-home franchise stores launch.' }
      ]
    },
    cta: {
      eyebrow: 'Franchise Cooperation',
      title: 'Explore Paterson brand strength and franchise policy',
      subtitle: 'Submit your target city and contact details. Our franchise team will assess local market opportunity, budget, and store resources.',
      button: 'Start Inquiry'
    }
  },
  philosophyPage: {
    seo: {
      title: 'Waterborne Technology | Paterson Cabinet-Wall-Door Systems',
      description: 'Learn about Paterson waterborne chain, 3D intelligent coating line, factory 4.0 waterborne upgrade, and eco whole-home customization technology.',
      keywords: 'waterborne technology,cabinet wall door system,intelligent coating,eco whole-home customization'
    },
    header: {
      title: 'Waterborne Technology',
      subtitle: 'From materials and coating to products and terminal delivery, Paterson uses a closed-loop waterborne chain to support eco whole-home customization.'
    },
    intro: {
      heading: 'Building environmental value into process and delivery',
      paragraphs: [
        'Waterborne technology is not a slogan. It is a capability chain built from materials, coating process, product systems, and terminal delivery.',
        'Paterson’s waterborne 3D intelligent coating line, factory 4.0 upgrade, and standard-setting credentials help eco whole-home customization present quality more consistently.'
      ],
      imagePlaceholder: 'Waterborne technology space'
    },
    pillars: {
      heading: 'Waterborne Chain Capability',
      items: [
        { title: 'Waterborne Materials', description: 'Materials built around waterborne customization reduce health concerns from traditional coating.' },
        { title: 'Intelligent Coating', description: 'A waterborne 3D intelligent coating line improves surface quality, stability, and scalable delivery.' },
        { title: 'Whole-Home Coordination', description: 'Cabinets, walls, doors, and furniture share one style language and environmental standard.' },
        { title: 'Terminal Trust', description: 'Standards, certifications, spatial experiences, and clear explanations help franchise stores build customer trust.' }
      ]
    },
    values: {
      heading: 'Value for Franchise Stores',
      items: [
        { title: 'Clearer Differentiation', description: 'Waterborne and wellness concepts help stores stand apart from ordinary whole-home customization shops.' },
        { title: 'More Stable Product Expression', description: 'Process and supply-chain capability make design effect, surface quality, and delivery standards more consistent.' },
        { title: 'A Health Story Customers Understand', description: 'Materials, air, bedrooms, and whole-home spaces connect into a more understandable healthy-home value.' }
      ]
    },
    cta: {
      title: 'Interested in waterborne whole-home customization franchise?',
      subtitle: 'Our team can introduce product systems, store setup support, and operation assistance based on your city and resources.',
      button: 'Submit Inquiry'
    }
  },
  dataPage: {
    seo: {
      title: 'Product Systems | Paterson Waterborne Whole-Home Customization',
      description: 'Explore Paterson wardrobe customization, cabinet customization, children growth spaces, and waterborne cabinet-wall-door systems.',
      keywords: 'Paterson product systems,waterborne wardrobe,cabinet customization,children room,cabinet wall door system'
    },
    title: 'Product Systems',
    subtitle: 'Whole-home solutions built around waterborne cabinet-wall-door systems, kitchen storage, and children growth spaces.',
    defaultCategory: 'All',
    searchPlaceholder: 'Search products or spaces',
    empty: 'No matching product content',
    categories: ['All', 'Bedroom System', 'Kitchen System', 'Children Space'],
    items: [
      { title: 'Waterborne Wardrobe Customization', summary: 'An eco bedroom system with waterborne process, refined storage, and unified whole-home style.', category: 'Bedroom System', detailPath: '/data/bedroom-system' },
      { title: 'Eco Cabinet Customization', summary: 'Kitchen solutions focused on workflow, storage efficiency, healthy materials, and refined appearance.', category: 'Kitchen System', detailPath: '/data/kitchen-system' },
      { title: 'Future Home by er', summary: 'Growth spaces for children that combine learning, storage, rest, and imagination.', category: 'Children Space', detailPath: '/data/children-room' }
    ],
    detail: {
      title: 'Waterborne Whole-Home Customization Solution',
      category: 'Product System',
      summary: 'An eco, unified, and deliverable whole-home customization solution centered on waterborne cabinet-wall-door systems.',
      description: 'Paterson product systems cover high-frequency living spaces such as bedrooms, kitchens, and children rooms. Waterborne process, cabinet-wall-door coordination, and terminal delivery standards help franchise stores clearly present the value of eco whole-home customization.',
      featuresHeading: 'Core Features',
      features: ['Waterborne process and eco materials', 'Systemized cabinet-wall-door design', 'Ready for terminal display and franchise launch'],
      specsHeading: 'Solution Information',
      specifications: [
        { label: 'Spaces', value: 'Bedroom / Kitchen / Children Room / Whole Home' },
        { label: 'Support', value: 'Product, design, store setup, marketing, and operation support' }
      ],
      backLabel: 'Back to Product Systems',
      ctaHeading: 'Get product system and franchise information',
      ctaSubtitle: 'Leave your contact details and our team will introduce suitable product combinations for your city and store resources.',
      ctaButton: 'Ask About Products'
    }
  },
  articlesPage: {
    title: 'News',
    subtitle: 'Follow Paterson updates on waterborne technology, standards, brand honors, exhibitions, and franchise information.',
    readMore: 'Read More',
    empty: 'No news available',
    back: 'Back to News',
    imagePlaceholder: 'Paterson news image',
    fallback: [
      {
        category: 'Technology',
        date: '2026-07-01',
        intro: 'Key technology for high-hardness waterborne coated home panels received expert recognition, strengthening Paterson’s technical credibility.',
        slug: 'waterborne-technology-certification',
        title: 'Paterson waterborne core technology receives expert recognition'
      },
      {
        category: 'Exhibition',
        date: '2026-06-18',
        intro: 'Paterson presented waterborne whole-home customization, wellness bedrooms, and refined spaces at a major custom home fair.',
        slug: 'custom-home-expo',
        title: 'Paterson presents waterborne whole-home solutions at custom home fair'
      },
      {
        category: 'Standards',
        date: '2026-05-26',
        intro: 'Paterson continues to support industry quality through environmental standards, healthy-home narratives, and cabinet-wall-door systems.',
        slug: 'healthy-home-standards',
        title: 'Waterborne healthy homes support whole-home customization standards'
      }
    ]
  },
  contactPage: {
    seo: {
      title: 'Contact | Paterson Franchise Inquiry',
      description: 'Contact Paterson franchise team and submit your target city, budget, and contact details to learn about waterborne whole-home customization cooperation.',
      keywords: 'Paterson franchise,whole-home customization franchise,waterborne customization franchise,franchise inquiry'
    },
    title: 'Contact Us',
    subtitle: 'Submit your franchise interest and our consultant will contact you to assess city opportunity and cooperation options.',
    infoTitle: 'Franchise Contact',
    hours: 'Consultation hours: 09:00 - 18:00',
    labels: {
      address: 'Headquarters Address',
      phone: 'Franchise Hotline',
      email: 'Email',
      hours: 'Consultation Hours'
    }
  },
  designSystemPage: {
    seo: {
      title: 'Brand Visuals',
      description: 'Explore the Paterson website visual direction: color, typography, spacing, and interaction style.',
      keywords: 'Paterson brand visuals,brand color,home furnishing website'
    },
    title: 'Brand Visuals',
    subtitle: 'Warm whites, deep wood tones, champagne gold, and real home-space imagery shape a mature, healthy, and trustworthy brand presence.',
    sections: {
      philosophy: 'Principles',
      colors: 'Colors',
      typography: 'Typography',
      layout: 'Layout',
      components: 'Interface Elements',
      interaction: 'Interaction'
    },
    philosophy: {
      brandTitle: 'Brand tone',
      brand: 'The visual language stays mature, healthy, and grounded in real home spaces, avoiding promotional clutter and generic technology styling.',
      directionTitle: 'Design direction',
      direction: 'Generous whitespace, clear hierarchy, restrained motion, and real interiors build brand trust and support franchise conversion.',
      keywords: ['Stable', 'Healthy', 'Real spaces', 'Franchise']
    },
    colorIntro: 'The palette is built on warm white, deep wood black, wood brown, and champagne gold, with brand red and yellow used sparingly.',
    typographyIntro: 'Chinese titles stay calm and refined, body text stays comfortable, and English labels support rather than dominate the page.',
    layoutGrid: 'Wide content containers and responsive columns keep interior imagery, brand information, and franchise actions easy to scan.',
    layoutWhitespace: 'Section spacing stays generous to avoid the crowded feeling of traditional franchise long pages.',
    samples: {
      hero: 'A new franchise growth path for waterborne whole-home customization',
      h1: 'Brand page title',
      h2: 'Core section title',
      h3: 'Content card title'
    },
    preview: {
      primaryButton: 'Primary CTA',
      secondaryButton: 'Secondary',
      ghostButton: 'Ghost',
      smallButton: 'Small',
      largeButton: 'Large',
      cardTitle: 'Content card',
      cardDescription: 'Use this pattern for product systems, brand strength, or news content with clear boundaries and stable layout.',
      cardAltTitle: 'Information card',
      cardAltDescription: 'A simple surface for technology highlights, franchise support, or page summaries.',
      heroTitle: 'Paterson',
      heroSubtitle: 'Waterborne whole-home customization, wellness spaces, and franchise support shape the brand website experience.',
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
            'Franchise inquiry information is used for requirement communication, city opportunity assessment, and follow-up service contact. We do not use personal information for unrelated purposes without authorization.'
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
            'Brand, image, text, and product information on this website are provided to introduce Paterson related services and may not be used for misleading display or unauthorized commercial copying.'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
