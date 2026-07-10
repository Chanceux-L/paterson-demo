const common = {
  all: 'Todo',
  apply: 'Aplicar',
  back: 'Volver',
  breadcrumb: 'Breadcrumb',
  clear: 'Limpiar',
  clearAll: 'Clear all',
  close: 'Cerrar',
  home: 'Inicio',
  inquiry: 'Consulta',
  loadMore: 'Ver más',
  loading: 'Cargando',
  nextImage: 'Next image',
  nextPage: 'Next page',
  none: 'Ninguno',
  previousImage: 'Previous image',
  previousPage: 'Previous page',
  showLess: 'Menos',
  showMore: 'Más',
  viewImageIndex: 'View image {index}'
};

const navItems = [
  { label: 'Inicio', english: 'Home', href: '/' },
  { label: 'Marca', english: 'Brand', href: '/about' },
  { label: 'Productos', english: 'Products', href: '/data' },
  { label: 'Tecnología', english: 'Technology', href: '/philosophy' },
  { label: 'Franquicia', english: 'Franchise', href: '/contact' },
  { label: 'Noticias', english: 'News', href: '/articles' }
];

const pageSeo = {
  home: {
    seo: {
      title: 'Franquicia Hogar Ecológico Paterson',
      description: 'Fundada en 2001, Paterson ofrece sistemas al agua para armarios, paredes y puertas, con soporte para franquicias.',
      keywords: 'waterborne whole-home customization,eco whole-home customization,whole-home custom franchise,home furnishing franchise,cabinet wall door system,Paterson,Der Future,stock code 002631'
    }
  },
  about: {
    seo: {
      title: 'Fortaleza de Marca',
      description: 'Conozca la historia de Paterson, respaldo de Der Future, tecnología al agua y soporte de franquicia.',
      keywords: 'Paterson brand strength,Der Future,waterborne whole-home customization,home furnishing franchise'
    }
  },
  articles: {
    seo: {
      title: 'Noticias',
      description: 'Lea noticias de Paterson sobre tecnología al agua, ferias, reconocimientos y hogar a medida.',
      keywords: 'Paterson news,waterborne technology,home furnishing exhibition,whole-home customization news'
    },
    detailSeo: {
      title: '{title} - Paterson News',
      description: 'Read Paterson news update: {title}',
      keywords: '{title},Paterson news,waterborne whole-home customization'
    }
  },
  contact: {
    inquiry: {
      eyebrow: 'Inquiry',
      title: 'Start Your Paterson Franchise Inquiry',
      description: 'Leave your contact details and target city. Our franchise team will introduce Paterson brand strength, store support, and cooperation policy.',
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
      message: 'Franchise Interest',
      messagePlaceholder: 'Share your target city, store resources, investment plan, or the franchise policy you would like to learn about',
      missingMessage: 'Please enter your franchise interest',
      captcha: 'Verification code',
      captchaPlaceholder: 'Enter the verification code',
      captchaAlt: 'Verification code image',
      missingCaptcha: 'Please enter the verification code',
      submit: 'Enviar consulta',
      submitting: 'Enviando',
      success: 'Enviado. Te contactaremos pronto.',
      missingPhone: 'Please enter your phone number',
      invalidPhone: 'Please enter a valid phone number',
      failed: 'No se pudo enviar. Inténtalo más tarde.'
    }
  }
};

const starter = {
  site: {
    name: 'Paterson',
    titleTemplate: '{title} - Paterson'
  },
  common,
  languageSwitcher: {
    aria: 'Cambiar idioma',
    label: 'Idioma',
    localeName: 'Español',
    search: 'Buscar idiomas',
    empty: 'Sin idiomas',
    languages: {
      'zh-CN': {
        label: '简体中文',
        localeName: 'Chino simplificado',
        searchTerms: ['Chino', 'Mandarin', 'zh']
      },
      'zh-TW': {
        label: '繁體中文',
        localeName: 'Chino tradicional',
        searchTerms: ['Chino tradicional', 'Chino', 'tw']
      },
      'en': {
        label: 'English',
        localeName: 'Inglés',
        searchTerms: ['Inglés', 'en']
      },
      'ru': {
        label: 'Русский',
        localeName: 'Ruso',
        searchTerms: ['Ruso', 'ru']
      },
      'de': {
        label: 'Deutsch',
        localeName: 'Alemán',
        searchTerms: ['Alemán', 'de']
      },
      'it': {
        label: 'Italiano',
        localeName: 'Italiano',
        searchTerms: ['Italiano', 'it']
      },
      'es': {
        label: 'Español',
        localeName: 'Español',
        searchTerms: ['Español', 'es']
      },
      'fr': {
        label: 'Français',
        localeName: 'Francés',
        searchTerms: ['Francés', 'fr']
      }
    }
  },
  nav: {
    homeAria: 'Volver al inicio',
    logoAlt: 'Paterson logo',
    sloganAlt: 'A core brand under Der Future',
    menu: 'Menú',
    mainNav: 'Navegación',
    memberCenter: 'Consulta',
    hotline: 'Línea de franquicia',
    stockLabel: 'Código bursátil',
    topInfoBrand: 'Parte de Der Future',
    items: navItems,
    search: {
      scrollTop: 'Back to top'
    }
  },
  footer: {
    brandDescription: 'Founded in 2001, Paterson focuses on waterborne cabinet-wall-door systems and eco whole-home customization as a core brand under Der Future.',
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
    addressValue: 'Tianhe District, Guangzhou, Guangdong, China',
    icp: '粤ICP备2024333088号',
    policeRecord: '粤公网安备44010602014342号',
    legalPrefix: 'Paterson - A wholly owned subsidiary of Der Future (Stock code: 002631)',
    legalCopyright: 'Copyright © Paterson Wardrobe Guangzhou Paterson Intelligent Home Co., Ltd. all rights reserved.',
    riskNotice: 'For wardrobe, cabinet, and whole-home customization franchise inquiries, call Paterson at 400-629-2629. Investment involves risk; please choose carefully.',
    tagline: 'Refined living spaces, waterborne technology, and franchise support present the value of Paterson whole-home customization.',
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
    description: 'Leave your contact details and our franchise team will introduce Paterson brand strength, store support, and cooperation policy.',
    action: 'Enviar consulta',
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
      siteDescription: 'Founded in 2001, Paterson is a core brand under Der Future, focused on waterborne cabinet-wall-door systems and eco whole-home customization.',
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
      badge: 'A core brand under Der Future · Stock code 002631',
      title: 'Paterson Hogar Eco',
      titleLine1: 'Paterson',
      titleLine2: 'Eco Home Custom',
      subtitle: 'Founded in 2001, Paterson creates eco cabinet, wall, door, and home systems under listed company Der Future.',
      ctaLabel: 'Consultar franquicia',
      cta2Label: 'Ver marca',
      imageAlt: 'Paterson waterborne whole-home custom living space',
      caption: 'Waterborne chain capability, wellness spaces, carbon-fiber materials, and marketing support shape Paterson’s differentiated franchise system.',
      oxygenValue: 'Wellness Oxygen',
      oxygenLabel: 'Intelligent bedroom and indoor-air standards',
      keywords: {
        waterPaint: 'Waterborne',
        oxygen: 'Wellness',
        material: 'Carbon',
        marketing: 'Marketing'
      },
      metrics: [
        { value: '2001', label: 'Brand founding year' },
        { value: '002631', label: 'Der Future stock code' },
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
      description: 'Founded in 2001, Paterson is a core brand under Der Future. The brand has long focused on customized home furnishing, building market trust through waterborne technology, eco whole-home customization, and full-chain service capability.',
      stats: [
        { value: '2001', label: 'Paterson was founded and has stayed focused on customized home furnishing.' },
        { value: 'Der Future', label: 'A core brand under a listed company, stock code 002631.' },
        { value: 'Standard Lead', label: 'Technical and standard-setting credentials for waterborne custom home furnishing.' },
        { value: 'Smart Coating', label: 'Waterborne 3D intelligent coating line and factory 4.0 upgrade.' }
      ]
    },
    technology: {
      eyebrow: 'Waterborne Technology',
      title: 'Closed-loop waterborne whole-home chain',
      description: '3D intelligent coating, factory 4.0 upgrades, and standards support stable whole-home delivery.',
      summary: 'Materials, coating, products, and delivery work as one chain.',
      metrics: [
        { value: '3D', label: 'Intelligent coating line' },
        { value: '4.0', label: 'Factory waterborne upgrade' },
        { value: 'Waterborne', label: 'Material and delivery coordination' }
      ],
      items: [
        { title: 'Waterborne Cabinet-Wall-Door System', description: 'A differentiated product capability built around waterborne process, integrated cabinet-wall-door design, and whole-home delivery.', href: '/data' }
      ],
      nodes: [
        { icon: 'i-lucide-droplets', title: 'Closed-loop waterborne chain', description: 'Materials, coating, products, and delivery work together.' },
        { icon: 'i-lucide-factory', title: '3D intelligent coating', description: 'Smart processes improve stability, finish quality, and delivery.' },
        { icon: 'i-lucide-leaf', title: 'Factory 4.0 upgrade', description: 'Waterborne production supports scalable whole-home delivery.' },
        { icon: 'i-lucide-award', title: 'Certified technology', description: 'Recognized waterborne coating expertise supports brand credibility.' }
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
          title: 'Baier Future Home',
          description: 'A children-focused Paterson line where young users can take part in shaping a room that supports wellbeing, learning, and imagination.',
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
        { icon: 'i-lucide-layers-3', title: 'Carbon-Fiber Aerospace Material', description: 'Nine performance advantages, deformation control within +/-0.3% over 10 meters, and solutions for three major light-luxury customization challenges.' },
        { icon: 'i-lucide-megaphone', title: 'Marketing Innovation', description: 'AI digital enablement, waterborne new retail, and diversified campaign traffic generation.' },
        { icon: 'i-lucide-award', title: 'Enterprise Honors', description: 'Technology certifications, industry awards, standard-setting, and major brand events create credible brand proof.' },
        { icon: 'i-lucide-history', title: 'Long-Term Focus', description: 'Since 2001, Paterson has built brand, product, and service experience in customized home furnishing.' }
      ]
    },
    process: {
      eyebrow: 'Franchise Process',
      title: 'An eight-step path from inquiry to city launch',
      description: 'From first inquiry to training, opening support, and ongoing operations, headquarters supports partners through each key step.',
      stepLabel: 'Step',
      steps: [
        { title: 'Online Inquiry', description: 'Submit city, budget, and contact details.' },
        { title: 'Headquarters Call', description: 'Introduce regional policies and cooperation options.' },
        { title: 'On-site Visit', description: 'Review showroom, factory, and terminal samples.' },
        { title: 'City Discussion', description: 'Discuss district, customers, and store planning.' },
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
          description: 'The brand presents product, technology, and interior-space strength around waterborne whole-home customization.',
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
      title: 'Leave your franchise interest to receive Paterson cooperation materials',
      description: 'Share your contact details and target city. Our franchise team will introduce Paterson waterborne whole-home customization cooperation.',
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
        messagePlaceholder: 'Share store resources, business experience, or the franchise policy you would like to learn about',
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
        { question: 'What is Paterson’s core differentiation?', answer: 'Paterson combines waterborne cabinet-wall-door systems, eco whole-home customization, and Der Future listed-company backing.' },
        { question: 'What information is needed for franchise inquiry?', answer: 'Name, phone, target city, budget, and store resources help our franchise team introduce more suitable cooperation policies.' }
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
      subtitle: 'From its founding in 2001 to becoming a core brand under Der Future, Paterson builds long-term trust for city partners through waterborne cabinet-wall-door systems, eco whole-home customization, and headquarters service capability.',
      primaryCta: 'Discuss Franchise Cooperation',
      imageAlt: 'Paterson brand strength visual',
      stats: [
        { value: '2001', label: 'Founded and focused on customized home furnishing' },
        { value: '002631', label: 'Der Future listed-company stock code' },
        { value: 'Waterborne', label: 'Cabinet-wall-door systems and eco customization' },
        { value: 'Full Chain', label: 'Product, supply chain, design, marketing, and operations' }
      ]
    },
    proof: {
      eyebrow: 'Trust Proof',
      title: 'A Stable Brand Foundation',
      description: 'Founded in 2001, Paterson is a core brand under Der Future. It focuses on waterborne cabinet-wall-door systems and eco whole-home customization, building competitiveness through product innovation, technology, and retail focus.',
      tags: [
        { label: 'Founded in 2001' },
        { label: 'Under Der Future' },
        { label: 'Waterborne Systems' },
        { label: 'Eco Whole-Home Customization' }
      ],
      items: [
        { icon: 'i-lucide-building-2', title: 'Under Der Future', description: 'A core brand under a listed company, supported by more stable governance and long-term resources.' },
        { icon: 'i-lucide-droplets', title: 'Waterborne Credibility', description: 'Materials, intelligent coating, factory waterborne upgrades, and standards shape eco whole-home differentiation.' },
        { icon: 'i-lucide-factory', title: 'Supply-Chain Delivery', description: 'Process, product systems, and delivery standards are aligned so consistent quality reaches more homes.' },
        { icon: 'i-lucide-store', title: 'Operation Support', description: 'City partners receive design, store setup, marketing, training, and digital operation support.' }
      ]
    },
    origin: {
      eyebrow: 'Company Strength',
      title: 'A production system built for waterborne whole-home delivery',
      description: 'Paterson continues to invest in waterborne cabinet-wall-door systems, eco materials, intelligent coating, and whole-home delivery, connecting production bases, product processes, and service systems into a stable operating model.',
      imageAlt: 'Paterson factory production system',
      captionEyebrow: 'Production and Delivery',
      caption: 'With waterborne cabinet-wall-door systems at the core, Paterson continues to invest in eco materials, production processes, and whole-home delivery capability.',
      quote: 'Brand strength ultimately has to show up in product systems, production capability, and user delivery experience.'
    },
    capabilities: {
      eyebrow: 'Core Capability',
      title: 'Brand, technology, products, and service as one system',
      description: 'From formaldehyde-free substrates and waterborne coating to wellness bedrooms and waterborne light luxury customization, Paterson keeps upgrading eco healthy whole-home solutions with a clear product proposition and delivery foundation.',
      items: [
        { icon: 'i-lucide-award', title: 'Brand Credibility', description: 'A founding history since 2001, listed-company backing, and standard participation reduce uncertainty for partners.' },
        { icon: 'i-lucide-leaf', title: 'Healthy-Home Positioning', description: 'Waterborne systems, wellness bedrooms, and indoor-air capabilities move healthy living from concept to real space.' },
        { icon: 'i-lucide-layout-grid', title: 'Whole-Home Product System', description: 'Cabinets, walls, doors, kitchens, bedrooms, and children spaces share one coherent home aesthetic.' },
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
        { year: '002631', title: 'Listed-Company Backing', description: 'As a core brand under Der Future, Paterson is supported by governance and resources from a listed company.' },
        { year: 'Waterborne Tech', title: 'Differentiated Technology Proposition', description: 'Waterborne cabinet-wall-door systems, intelligent coating, and factory upgrades shape eco whole-home advantages.' },
        { year: 'Now', title: 'For City Partners', description: 'Product, supply chain, design, marketing, and digital operation support help whole-home franchise stores launch.' }
      ]
    },
    cta: {
      eyebrow: 'Franchise Cooperation',
      title: 'Explore Paterson brand strength and franchise policy',
      subtitle: 'Submit your target city and contact details. Our franchise team will introduce brand strength, store support, and cooperation policy.',
      button: 'Start Inquiry'
    }
  },
  philosophyPage: {
    seo: {
      title: 'Tecnología al Agua',
      description: 'Conozca materiales al agua, recubrimiento inteligente, fábrica 4.0 y tecnología ecológica Paterson.',
      keywords: 'waterborne technology,cabinet wall door system,intelligent coating,eco whole-home customization'
    },
    hero: {
      eyebrow: 'Waterborne Technology',
      titleLine1: 'Environmental value',
      titleLine2: 'built into delivery',
      subtitle: 'From waterborne materials and continuous coating to cabinet-wall-door applications, Paterson uses a closed-loop waterborne chain to bring environmental value into real living spaces.',
      primaryCta: 'Ask About Franchise',
      imageAlt: 'Paterson waterborne intelligent coating and whole-home customization process',
      metrics: [
        { value: '3D', label: 'Waterborne intelligent coating line' },
        { value: '4.0', label: 'Factory waterborne upgrade' },
        { value: '72', label: 'Waterborne process steps' }
      ]
    },
    sectionNavAria: 'Waterborne technology page navigation',
    sectionNav: [
      { label: 'Capability Chain', href: '#chain' },
      { label: 'Proof', href: '#proof' },
      { label: 'Experience', href: '#experience' },
      { label: 'Home Value', href: '#terminal' }
    ],
    chain: {
      eyebrow: 'Capability Chain',
      title: 'A closed waterborne loop from materials and coating to cabinet-wall-door systems',
      description: 'Waterborne technology is not a single selling point. It is a capability chain across material selection, coating process, product systems, and spatial delivery, making eco value, texture, and durability easier to feel.',
      nodes: [
        { icon: 'i-lucide-droplets', title: 'Waterborne Materials', description: 'Materials built around waterborne customization reduce odor and health concerns from traditional coating.' },
        { icon: 'i-lucide-factory', title: 'Continuous Intelligent Coating', description: 'The waterborne 3D intelligent coating line and factory 4.0 upgrade make surface quality, stability, and scalable delivery more controllable.' },
        { icon: 'i-lucide-panels-top-left', title: 'Cabinet-Wall-Door Application', description: 'Waterborne wardrobes, wall panels, doors, and whole-home spaces work together so the process lands in real interiors.' },
        { icon: 'i-lucide-badge-check', title: 'Standards and Certification', description: 'Waterborne standards, industry certifications, and spatial samples support the professional credibility of Paterson whole-home customization.' }
      ]
    },
    proof: {
      eyebrow: 'Proof',
      title: 'Technology claims need sources, visuals, and outcomes',
      description: 'Paterson official news reports expert recognition for high-hardness fully waterborne coated home panels and related key technologies, connecting continuous waterborne coating, coating-film performance, and green manufacturing.',
      imageAlt: 'Paterson waterborne core technology certification news',
      captionEyebrow: 'Waterborne Core Technology',
      caption: 'Research collaboration and expert recognition turn environmental value into a process and living-space experience that can be felt.',
      cards: [
        { value: 'Leading', label: 'Recognized Result', description: 'Official news presents expert recognition of the waterborne core technology result, strengthening technology credibility.' },
        { value: 'Six-Side', label: 'Continuous Coating', description: 'A six-side integrated coating story gives cabinet-wall-door applications a more complete process narrative.' },
        { value: '2H', label: 'Film Hardness', description: 'Together with adhesion, heat resistance, moisture resistance, and stain resistance, this answers durability and texture concerns.' }
      ]
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Technology must return to a visible home',
      description: 'Waterborne technology returns to wardrobes, bedrooms, cabinet-wall-door systems, and real living scenes, giving families a safer, more comfortable, and more unified whole-home solution.',
      items: [
        { title: 'Waterborne Wardrobe', description: 'No-added-formaldehyde substrate, waterborne wood veneer, and a 72-step coating process create a product story customers can remember.', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['Wardrobe', 'Skin-Friendly', 'Move-In Ready'] },
        { title: 'Healthy Bedroom Space', description: 'Wardrobes, headboards, wall panels, and storage systems present the healthy-bedroom claim in a real living scene.', image: '/paterson/product-bedroom-system.webp', tags: ['Bedroom', 'Cabinet-Wall', 'Healthy Home'] },
        { title: 'Standard and Healthy Home', description: 'Furniture standards and waterborne healthy-home messaging present environmental value, durability, and spatial quality together.', image: '/paterson/news-furniture-standard.webp', tags: ['Standards', 'Eco Value', 'Healthy Home'] }
      ]
    },
    terminal: {
      eyebrow: 'Home Value',
      title: 'Making waterborne technology visible in a healthy home',
      description: 'Waterborne technology is not just a technical term. It becomes a healthy-home value that can be touched, felt, and lived with over time.',
      items: [
        { icon: 'i-lucide-store', title: 'Clearer spatial themes', description: 'Waterborne wardrobes, healthy bedrooms, and cabinet-wall-door systems organize living scenes around tangible environmental value.' },
        { icon: 'i-lucide-message-square-text', title: 'Clearer technical proof', description: 'Materials, process, standards, and official news support the professional credibility of waterborne whole-home customization.' },
        { icon: 'i-lucide-sparkles', title: 'Texture customers can feel', description: 'Skin-friendly touch, wood veneer grain, coating performance, and unified whole-home style become a direct living experience.' },
        { icon: 'i-lucide-trending-up', title: 'A clearer brand memory point', description: 'Waterborne whole-home systems, wellness spaces, and headquarters support create a stronger reason to choose Paterson.' }
      ]
    },
    cta: {
      eyebrow: 'Waterborne Whole-Home Franchise',
      title: 'Interested in waterborne whole-home customization franchise?',
      subtitle: 'Our team can introduce product systems, store setup support, and operation assistance based on your city and resources.',
      button: 'Enviar consulta'
    }
  },
  dataPage: {
    seo: {
      title: 'Sistemas de Producto',
      description: 'Explore armarios, muebles y sistemas de hogar Paterson con materiales al agua y valor saludable.',
      keywords: 'Paterson product systems,waterborne wardrobe,cabinet wall door system,eco whole-home customization,whole-home franchise,Tiya series,Guangyin series,Yuanye series'
    },
    hero: {
      eyebrow: 'Product Systems',
      titleLine1: 'Waterborne',
      titleLine2: 'Home Systems',
      subtitle: 'Wardrobes, cabinets, furniture, and children’s spaces shaped by eco materials, storage design, and whole-home style.',
      imageAlt: 'Paterson product system interior space',
      primaryCta: 'Explore Products',
      metrics: [
        { value: '3+2 / 72', label: 'Three primer coats, two finish coats, and 72 waterborne process steps' },
        { value: '6 spaces', label: 'Entry, living, dining, study, bedroom, and balcony scenarios' },
        { value: '23 years', label: 'Long-term focus on eco customization and home delivery' }
      ]
    },

    serviceLines: {
      navAria: 'Product service categories',
      eyebrow: 'Our Services',
      title: 'Whole-home product lines',
      description: 'Wardrobes, cabinets, furniture, and children’s rooms come together through eco materials, refined style, and reliable delivery.',
      items: [
        { title: 'Wardrobe Customization', description: 'Paterson has focused on eco customization for 23 years and is a chief editor of the waterborne coating group standard. Its waterborne wardrobes use formaldehyde-free substrates, waterborne wood veneer, and a multi-step pure waterborne process for low-odor, ready-living customization.', image: '/paterson/product-wardrobe-intro.webp', points: ['Waterborne wardrobe', 'Formaldehyde-free', 'Ready living'] },
        { title: 'Cabinet Customization', description: 'Paterson cabinets follow long-term eco principles, creating safer and healthier home environments with environmental materials, comfortable aesthetics, and efficient user-centered service.', image: '/paterson/product-cabinet-intro.webp', points: ['Appliance integration', 'Wardrobe-cabinet integration', 'Multi-style system'] },
        { title: 'Paterson Furniture', description: 'Paterson furniture extends the whole-home product system beyond cabinetry, using living, dining, bedroom, and multi-function furniture to align style, storage, and daily experience.', image: '/paterson/product-series-guangyin.webp', points: ['Living dining', 'Furniture', 'Whole-home matching'] },
        { title: 'Baier Future Home', description: 'Baier Future Home is built for children’s growth needs, organizing study, storage, sleep, safety, and eco health into a room system that can grow with the child.', image: '/paterson/product-series-yuanye.webp', points: ['Children growth', 'Study storage', 'Healthy space'] }
      ]
    },

    catalog: {
      eyebrow: 'Product Showcase',
      title: 'Series & Spaces',
      description: 'Eco materials, refined style, smart storage.',
      emptyTitle: 'No matching products',
      emptyDescription: 'Choose another space, style, or series.',
      serviceCatalogs: {
        'Wardrobe Customization': {
          filters: [
            { label: 'Space', options: ['All', 'Entry', 'Living Room', 'Dining Room', 'Study', 'Bedroom', 'Balcony'] },
            { label: 'Style', options: ['All', 'European', 'Modern', 'New Chinese', 'Light Luxury', 'American', 'Future'] },
            { label: 'Type', options: ['All', 'Youth', 'Classic'] }
          ],
          items: [
            { title: 'Tiya Series', category: 'Wardrobe Customization', image: '/paterson/product-series-tiya.webp', tags: ['Bedroom', 'Light Luxury', 'Classic'] },
            { title: 'Guangyin Series', category: 'Wardrobe Customization', image: '/paterson/product-series-guangyin.webp', tags: ['Living Room', 'Modern', 'Classic'] },
            { title: 'Yuanye Series', category: 'Wardrobe Customization', image: '/paterson/product-series-yuanye.webp', tags: ['Bedroom', 'Modern', 'Youth'] },
            { title: 'Pet-Friendly Space', category: 'Wardrobe Customization', image: '/paterson/product-pet-living-space.webp', tags: ['Living Room', 'Future', 'Youth'] },
            { title: 'Couple Gaming Room', category: 'Wardrobe Customization', image: '/paterson/product-gaming-bedroom.webp', tags: ['Bedroom', 'Future', 'Youth'] },
            { title: 'Waterborne Wardrobe', category: 'Wardrobe Customization', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['Bedroom', 'Waterborne', 'Cabinet-wall-door'] }
          ]
        },
        'Cabinet Customization': {
          filters: [
            { label: 'Series', options: ['All', 'Decorative Surface', 'Lacquer', 'Membrane Press', 'Solid Wood'] },
            { label: 'Style', options: ['All', 'European', 'Modern', 'New Chinese', 'Light Luxury', 'American', 'Future'] },
            { label: 'Type', options: ['All', 'L-shaped', 'U-shaped', 'One-wall', 'Island'] }
          ],
          items: [
            { title: 'Hills Cabinet Accessories', category: 'Cabinet Customization', image: '/paterson/product-cabinet-hills.webp', tags: ['Decorative Surface', 'Modern', 'L-shaped'] },
            { title: 'Alps P', category: 'Cabinet Customization', image: '/paterson/product-cabinet-alps.webp', tags: ['Lacquer', 'Light Luxury', 'Island'] },
            { title: 'Kasen Max', category: 'Cabinet Customization', image: '/paterson/product-cabinet-kasen.webp', tags: ['Membrane Press', 'Modern', 'U-shaped'] },
            { title: 'Nature', category: 'Cabinet Customization', image: '/paterson/product-cabinet-nature.webp', tags: ['Solid Wood', 'New Chinese', 'One-wall'] },
            { title: 'Musha P', category: 'Cabinet Customization', image: '/paterson/product-cabinet-musha.webp', tags: ['Lacquer', 'European', 'L-shaped'] },
            { title: 'Monet P', category: 'Cabinet Customization', image: '/paterson/product-cabinet-monet.webp', tags: ['Decorative Surface', 'American', 'U-shaped'] }
          ]
        },
        'Paterson Furniture': {
          filters: [
            { label: 'Scene', options: ['All', 'Living', 'Dining', 'Bedroom', 'Multi-function'] },
            { label: 'Type', options: ['All', 'Storage Cabinet', 'Sideboard', 'Pet Space', 'Gaming Space'] }
          ],
          items: [
            { title: 'Guangyin Living Furniture', category: 'Paterson Furniture', image: '/paterson/product-series-guangyin.webp', tags: ['Living', 'Storage Cabinet', 'Modern'] },
            { title: 'Day Coffee Night Bar Sideboard', category: 'Paterson Furniture', image: '/paterson/product-series-yuanye.webp', tags: ['Dining', 'Sideboard', 'Light Luxury'] },
            { title: 'Pet-Friendly Space', category: 'Paterson Furniture', image: '/paterson/product-pet-living-space.webp', tags: ['Multi-function', 'Pet Space', 'Future'] },
            { title: 'Couple Gaming Room', category: 'Paterson Furniture', image: '/paterson/product-gaming-bedroom.webp', tags: ['Bedroom', 'Gaming Space', 'Future'] }
          ]
        },
        'Baier Future Home': {
          filters: [
            { label: 'Age', options: ['All', 'Toddler', 'School Age', 'Teen'] },
            { label: 'Function', options: ['All', 'Study Area', 'Storage Area', 'Sleep Area', 'Growth Space'] }
          ],
          items: [
            { title: 'Baier Future Home Growth Room', category: 'Baier Future Home', image: '/paterson/product-children-room.webp', tags: ['School Age', 'Study Area', 'Growth Space'] },
            { title: 'Children Storage Study System', category: 'Baier Future Home', image: '/paterson/product-bedroom-system.webp', tags: ['Teen', 'Storage Area', 'Study Area'] },
            { title: 'Healthy Sleep Children Room', category: 'Baier Future Home', image: '/paterson/product-water-paint-wardrobe.webp', tags: ['Toddler', 'Sleep Area', 'Growth Space'] }
          ]
        }
      }
    },
    intro: {
      eyebrow: 'Waterborne Wardrobe Customization',
      title: 'Turning eco customization into a product language customers can feel',
      description: 'Paterson waterborne wardrobes highlight formaldehyde-free substrates, waterborne wood veneer, and a multi-step pure waterborne process, bringing eco value, texture, and storage experience into real living spaces.',
      proof: 'Waterborne customization is not a single cabinet feature. It runs through materials, process, cabinet-wall-door coordination, and whole-home spaces.',
      imageAlt: 'Paterson waterborne wardrobe customization space',
      captionEyebrow: 'Waterborne Wardrobe Customization',
      caption: 'Waterborne wardrobes, eco materials, and whole-home style form a core expression of the Paterson product system.'
    },
    systems: {
      eyebrow: 'Space Systems',
      title: 'From product lists to space solutions',
      description: 'The product system goes beyond isolated wardrobes, cabinets, and furniture, using real interiors to present bedrooms, living-dining spaces, children rooms, and multi-function whole-home scenes.',
      items: [
        {
          title: 'Bedroom System',
          description: 'Waterborne wardrobes, wall panels, headboards, and storage combine into a healthy bedroom expression that supports wellness and eco material narratives.',
          image: '/paterson/product-series-tiya.webp',
          tags: ['Waterborne wardrobe', 'Bedroom storage', 'Cabinet-wall coordination']
        },
        {
          title: 'Living and Dining System',
          description: 'TV cabinets, sideboards, display storage, and background walls share one style language so whole-home design is visible in public family spaces.',
          image: '/paterson/product-series-guangyin.webp',
          tags: ['Living space', 'Sideboard', 'Whole-home style']
        },
        {
          title: 'Natural Living System',
          description: 'Wood textures, measured whitespace, and refined custom-home quality create warmer, more durable whole-home spaces.',
          image: '/paterson/product-series-yuanye.webp',
          tags: ['Yuanye series', 'Natural texture', 'Refined customization']
        },
        {
          title: 'Pet-Friendly Space',
          description: 'Pet activity, cleaning storage, and family public areas are integrated for young households with compound living needs.',
          image: '/paterson/product-pet-living-space.webp',
          tags: ['Pet friendly', 'Hybrid storage', 'Family interaction']
        },
        {
          title: 'Gaming Bedroom',
          description: 'Rest, dual entertainment, equipment storage, and ambient lighting are combined for young families who want a more personal bedroom.',
          image: '/paterson/product-gaming-bedroom.webp',
          tags: ['Couple gaming room', 'Young customers', 'Ambient lighting']
        },
        {
          title: 'Cabinet-Wall-Door System',
          description: 'Materials, colors, proportions, and installation details align wardrobes, walls, doors, and furniture under one delivery standard.',
          image: '/paterson/product-water-paint-wardrobe.webp',
          tags: ['Cabinet wall door', 'Unified delivery', 'Whole-home style']
        }
      ]
    },
    features: {
      eyebrow: 'Product Advantages',
      title: 'Beauty, eco value, and durability define real whole-home product strength',
      description: 'Paterson’s difference from ordinary whole-home customization comes from waterborne process, spatial expression, product series, and stable delivery standards.',
      items: [
        { icon: 'i-lucide-droplets', title: 'Waterborne process proof', description: 'Formaldehyde-free substrates, waterborne wood veneer, and refined coating steps create a shared memory of eco value and surface quality.' },
        { icon: 'i-lucide-layout-grid', title: 'Space-system expression', description: 'Entry, living, dining, bedroom, and balcony spaces make whole-home value more intuitive than isolated product lists.' },
        { icon: 'i-lucide-store', title: 'Real scene presentation', description: 'Real interiors, series names, and value tags present product style, eco value, and lifestyle together.' },
        { icon: 'i-lucide-factory', title: 'Supply-chain coordination', description: 'Cabinets, walls, doors, and furniture share standards to reduce style fragmentation and unstable delivery.' }
      ]
    },
    series: {
      eyebrow: 'Product Series',
      title: 'Real series names, real spatial moods',
      description: 'Tiya, Guangyin, Yuanye, and other product series carry different spatial moods, presenting the lifestyle aesthetics of Paterson waterborne whole-home customization.',
      items: [
        { title: 'Tiya Series', subtitle: 'Refined bedroom and whole-home texture', description: 'Soft materials, measured proportions, and waterborne surface quality strengthen the bedroom system’s premium feel.', image: '/paterson/product-series-tiya.webp', meta: 'Bedroom' },
        { title: 'Guangyin Series', subtitle: 'Bright public living spaces', description: 'Light lines and bright spatial rhythm support living rooms, sideboards, display cabinets, and everyday storage.', image: '/paterson/product-series-guangyin.webp', meta: 'Living' },
        { title: 'Yuanye Series', subtitle: 'Natural whole-home expression', description: 'Wood grain, whitespace, and warmth support the lifestyle story of eco whole-home customization.', image: '/paterson/product-series-yuanye.webp', meta: 'Nature' },
        { title: 'Couple Gaming Room', subtitle: 'Younger living scenario', description: 'Equipment storage, dual use, and atmosphere are integrated into the bedroom system for a younger way of living.', image: '/paterson/product-gaming-bedroom.webp', meta: 'Gaming' }
      ]
    },
    delivery: {
      eyebrow: 'Space Delivery',
      title: 'Product systems belong in real homes',
      description: 'From product combinations and spatial scenes to delivery standards, Paterson presents the value of waterborne whole-home customization in real homes.',
      steps: [
        { title: 'Product mix planning', description: 'Plan hero spaces and showroom combinations based on city, store size, and target customers.' },
        { title: 'Design and content support', description: 'Use series images, space benefits, and waterborne process to create a clear and consistent brand expression.' },
        { title: 'Spatial scene presentation', description: 'Build high-perception living scenes such as bedrooms, living rooms, pet spaces, and gaming rooms.' },
        { title: 'Delivery standard coordination', description: 'Use cabinet-wall-door systems and supply-chain standards to align style, materials, and installation quality.' }
      ]
    },
    cta: {
      eyebrow: 'Product Franchise Materials',
      title: 'Want to see how Paterson product systems fit your store?',
      description: 'Submit your city and contact details. Our franchise team can introduce product combinations, showroom planning, and cooperation policies based on your store resources.',
      primary: 'Submit Inquiry',
      secondary: 'Call Hotline'
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
      { title: 'Baier Future Home', summary: 'Growth spaces for children that combine learning, storage, rest, and imagination.', category: 'Children Space', detailPath: '/data/children-room' }
    ],
    detail: {
      title: 'Waterborne Whole-Home Customization Solution',
      category: 'Product System',
      summary: 'An eco, unified, and deliverable whole-home customization solution centered on waterborne cabinet-wall-door systems.',
      description: 'Paterson product systems cover high-frequency living spaces such as bedrooms, kitchens, and children rooms. Waterborne process, cabinet-wall-door coordination, and delivery standards clearly present the value of eco whole-home customization.',
      featuresHeading: 'Core Features',
      features: ['Waterborne process and eco materials', 'Systemized cabinet-wall-door design', 'Ready for whole-home spaces and franchise launch'],
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
    sectionNavAria: 'News page navigation',
    sectionNav: [
      { label: 'News Flash', href: '#updates' },
      { label: 'Activities', href: '#activities' }
    ],
    hero: {
      eyebrow: 'News',
      titleLine1: 'Evidence of waterborne',
      titleLine2: 'whole-home progress',
      subtitle: 'From technology recognition and product standards to exhibitions and brand activities, Paterson news shows the long-term value behind waterborne whole-home customization.',
      imageAlt: 'Paterson news center image'
    },
    highlights: [
      { value: 'Waterborne', label: 'Core Technology', description: 'Waterborne coating, eco materials, and cabinet-wall-door systems create a clearer technical story.' },
      { value: 'Whole Home', label: 'Living Scenes', description: 'Wardrobes, kitchens, children rooms, and refined spaces present complete home solutions.' },
      { value: 'Franchise', label: 'Market Trust', description: 'News, exhibitions, and cases show Paterson’s long-term market credibility.' }
    ],
    featured: {
      eyebrow: 'Highlights',
      title: 'Waterborne technology and brand updates',
      description: 'Technology recognition, industry standards, exhibitions, and healthy-home trends trace Paterson’s continued progress in eco whole-home customization.'
    },
    updates: {
      eyebrow: 'News Flash',
      title: 'Waterborne customization, healthy homes, and industry news'
    },
    activities: {
      eyebrow: 'Activities',
      title: 'Brand campaigns and user interaction',
      description: 'Activity updates show brand campaigns, national promotions, livestream moments, and waterborne customization education that connect Paterson with more families.',
      items: [
        {
          id: 1724,
          categoryId: 4,
          category: 'Activity',
          date: '2021-10-08',
          browse: 0,
          image: '/paterson/news-activity-sanya.webp',
          intro: 'The campaign invited customers to join an Olympic-champion-themed Sanya trip while strengthening awareness of Paterson waterborne custom cabinets.',
          slug: 'waterborne-cabinet-sanya-campaign',
          title: 'Olympic champions invite customers to Sanya through Paterson waterborne custom cabinet campaign',
          content: [
            'Paterson official activity content shows a national campaign around the phrase “waterborne custom cabinets, naturally Paterson”, using a more participatory format to strengthen product awareness.',
            'The campaign connects Olympic champions, travel benefits, and home furnishing decisions, moving brand communication beyond product parameters.',
            'The campaign helps consumers remember Paterson’s waterborne customization message during key promotion moments and makes healthy home choices more concrete.'
          ]
        },
        {
          id: 1722,
          categoryId: 4,
          category: 'Activity',
          date: '2021-10-07',
          browse: 0,
          image: '/paterson/news-activity-luo-xuejuan.webp',
          intro: 'Paterson used Olympic champion Luo Xuejuan’s renovation topic to explain odorless, skin-friendly, and eco waterborne custom cabinet value.',
          slug: 'luo-xuejuan-renovation-waterborne-cabinet',
          title: 'Olympic champion Luo Xuejuan also has renovation concerns, and Paterson offers a waterborne answer',
          content: [
            'The activity starts from a real renovation concern and turns the eco, odorless, and skin-friendly value of waterborne solid-wood custom cabinets into a consumer-friendly story.',
            'Paterson’s continued communication around waterborne custom cabinets turns material health and full-cabinet eco value into a concrete home choice.',
            'The story makes waterborne product scenarios more concrete and improves customer understanding of eco customization.'
          ]
        },
        {
          id: 91,
          categoryId: 4,
          category: 'Activity',
          date: '2021-04-19',
          browse: 0,
          image: '/paterson/news-activity-pet-ai.webp',
          intro: 'Paterson’s Chong Ai Custom Festival combined livestreaming with tens of millions in campaign gifts to create a stronger interactive brand moment.',
          slug: 'pet-ai-custom-festival',
          title: 'Paterson Chong Ai Custom Festival brings host Li Ai to the livestream with tens of millions in campaign gifts',
          content: [
            'The Paterson Chong Ai Custom Festival used livestreaming, a celebrity host, and tens of millions in campaign gifts to increase consumer participation in brand activities.',
            'The activity connects custom home demand with lighter campaign communication and creates a stronger brand topic during marketing moments.',
            'This activity content complements news flash updates by showing not only industry events, but also user-facing brand interaction.'
          ]
        }
      ]
    },
    cta: {
      eyebrow: 'Franchise',
      title: 'See Paterson’s long-term strength through brand updates',
      description: 'Explore Paterson product systems, waterborne technology proof points, and headquarters support for your local market.',
      button: 'Ask About Franchise'
    },
    fallback: [
      {
        id: 4029,
        categoryId: 1,
        category: 'Waterborne Customization',
        date: '2026-01-12',
        browse: 0,
        image: '/paterson/product-cabinet-intro.webp',
        intro: 'As healthy home decoration becomes a top priority, waterborne custom cabinets are gaining attention for performance and refined finish. Paterson presents a clear waterborne strategy for eco customization.',
        slug: 'waterborne-cabinet-brand',
        title: 'Which waterborne custom cabinet brand is worth choosing? Paterson stands out among leading domestic brands',
        content: [
          'Health, eco performance, and long-term durability are becoming core standards for custom cabinets. Waterborne customization responds with waterborne finishing, refined texture, and a more comfortable living experience.',
          'Paterson keeps building its product narrative around waterborne cabinet-wall-door systems, connecting materials, process, space, and healthy living value.',
          'The differentiation of waterborne customization comes not only from eco claims, but also from complete product capability that lands in whole-home solutions.'
        ]
      },
      {
        id: 4028,
        categoryId: 1,
        category: 'Healthy Home',
        date: '2026-01-04',
        browse: 0,
        image: '/paterson/news-waterborne-renovation.webp',
        intro: 'Eco waterborne whole-home customization is becoming a stronger choice for families. Paterson combines eco technology with a mature product system for healthier home solutions.',
        slug: 'waterborne-renovation',
        title: 'A home without harsh renovation odor: choose Paterson, a mainstream waterborne customization brand',
        content: [
          'Renovation odor and material safety are common concerns for families. Waterborne customization reduces concerns from the finishing source and turns healthy homes into something more concrete.',
          'Paterson connects waterborne process, eco materials, and whole-home product systems across wardrobes, kitchens, bedrooms, and children spaces.',
          'When customers enter a store, a clear waterborne customization solution helps them see how eco value, finish quality, and spatial function can land together.'
        ]
      },
      {
        id: 4027,
        categoryId: 1,
        category: 'Product System',
        date: '2025-12-18',
        browse: 0,
        image: '/paterson/news-premium-wardrobe.webp',
        intro: 'Premium wardrobes need more than appearance. Paterson uses mainstream waterborne customization capability to address eco value, quality, and long-term bedroom use.',
        slug: 'premium-waterborne-wardrobe',
        title: 'Choose premium wardrobes with confidence through Paterson waterborne customization',
        content: [
          'Wardrobes are among the most frequently used custom home systems and closely connected to living health. A premium wardrobe needs appearance, eco value, durability, and storage experience.',
          'Paterson combines waterborne process with bedroom system design so wardrobe products carry texture, environmental value, and a unified home style.',
          'From material safety and cabinet quality to complete bedroom solutions, Paterson gives premium wardrobes a fuller value anchor.'
        ]
      },
      {
        id: 4026,
        categoryId: 1,
        category: 'Brand Proof',
        date: '2025-11-06',
        browse: 0,
        image: '/paterson/news-healthy-home-choice.webp',
        intro: 'Eco value and health are central to home renovation. Paterson waterborne customization connects technology, design, and whole-home delivery for safer family choices.',
        slug: 'healthy-home-choice',
        title: 'A reliable home decoration choice: Paterson as a leading waterborne customization brand',
        content: [
          'Consumer concern for home safety is shifting custom home competition from appearance alone toward materials, process, and full living experience.',
          'Paterson centers on waterborne customization and connects eco technology, home aesthetics, and whole-home solutions to reduce renovation concerns.',
          'Brand proof and product differentiation help Paterson build steadier customer trust in local markets.'
        ]
      },
      {
        id: 4025,
        categoryId: 2,
        category: 'Technology',
        date: '2025-11-05',
        browse: 0,
        image: '/paterson/news-waterborne-tech-certification.webp',
        intro: 'Paterson reports that its high-hardness fully waterborne coated home panel and key technologies received expert recognition led by an academician, reaching an internationally leading level.',
        slug: 'waterborne-technology-certification',
        title: 'Paterson waterborne core technology receives expert recognition and supports a greener custom home industry',
        content: [
          'According to Paterson official news, the high-hardness fully waterborne coated home panel and related key technologies developed with the Research Institute of Wood Industry received expert recognition.',
          'The result covers continuous fully waterborne coating, coating-film performance, and green manufacturing, giving stronger technical credibility to waterborne cabinet-wall-door systems.',
          'Technology recognition is not only a brand honor. It also gives the eco value of waterborne whole-home customization clearer and more professional proof.'
        ]
      },
      {
        id: 4004,
        categoryId: 3,
        category: 'Exhibition',
        date: '2025-03-17',
        browse: 0,
        image: '/paterson/news-custom-home-expo-2025.webp',
        intro: 'Paterson prepared to present waterborne refined customization technologies and spatial scenes at the Guangzhou custom home fair, showing how waterborne whole-home solutions appear in stores.',
        slug: 'custom-home-expo-2025',
        title: 'Paterson brings waterborne refined customization technologies and spatial scenes to Guangzhou custom home fair',
        content: [
          'Exhibitions give the brand a focused window to show product systems, technology direction, and spatial expression to the industry and franchise partners.',
          'With waterborne refined customization at the center, Paterson connects core technologies with spatial scenes and presents the lifestyle value of waterborne whole-home customization.',
          'These exhibition updates continue to amplify Paterson’s waterborne refined customization momentum and show city partners a fuller cooperation outlook.'
        ]
      }
    ]
  },
  contactPage: {
    seo: {
      title: 'Consulta de Franquicia',
      description: 'Explore ventajas, soporte, proceso y políticas de franquicia Paterson. Envíe su ciudad y contacto para recibir información.',
      keywords: 'Paterson franchise,whole-home customization franchise,waterborne customization franchise,franchise inquiry'
    },
    title: 'Franchise',
    subtitle: 'Waterborne cabinet-wall-door systems, eco whole-home customization, and full headquarters support help city partners build a differentiated custom home store.',
    sectionNavAria: 'Franchise page navigation',
    sectionNav: [
      { label: 'Opportunity', href: '#opportunity' },
      { label: 'Support', href: '#support' },
      { label: 'Process', href: '#process' },
      { label: 'Inquiry', href: '#inquiry' }
    ],
    hero: {
      eyebrow: 'Franchise',
      titleLine1: 'Waterborne whole-home',
      titleLine2: 'custom franchise growth',
      subtitle: 'Backed by Der Future, Paterson combines waterborne cabinet-wall-door systems with mature terminal operation support, giving city partners a clear path from product and store setup to marketing and operations.',
      primaryCta: 'Enviar consulta',
      imageAlt: 'Paterson franchise store and support image',
      metrics: [
        { value: '2001', label: 'Brand founded with long-term focus on custom home furnishings' },
        { value: '002631', label: 'Der Future listed-company stock code' },
        { value: 'Full path', label: 'Product, supply chain, design, store setup, marketing, and operation support' }
      ]
    },
    opportunity: {
      eyebrow: 'Opportunity',
      title: 'Build a healthier home business with waterborne whole-home customization',
      description: 'As families care more about eco materials, refined finishes, and one-stop living spaces, waterborne cabinet-wall-door systems give stores a clearer product story. Paterson brings together real interiors, healthier materials, and whole-home solutions for franchise partners.',
      imageAlt: 'Paterson waterborne whole-home living space'
    },
    proof: {
      items: [
        { value: 'Waterborne', label: 'Healthy eco positioning', description: 'Waterborne wardrobes, wellness bedrooms, and cabinet-wall-door systems build a distinct Paterson brand memory.' },
        { value: 'Whole home', label: 'Complete living spaces', description: 'From wardrobes to kitchens, bedrooms, children rooms, living and dining spaces, customers can see a more complete home in store.' },
        { value: 'HQ support', label: 'Store opening support', description: 'Location advice, store setup, design training, marketing campaigns, and digital tools help partners start with confidence.' }
      ]
    },
    support: {
      eyebrow: 'Headquarters Support',
      title: 'From brand strength to store launch, Paterson supports every key step',
      description: 'Paterson supports city partners with brand, product, supply chain, design, marketing, and operation resources so showroom setup, team training, and opening campaigns can move with clearer rhythm.',
      items: [
        { icon: 'i-lucide-award', title: 'Brand Strength', description: 'Founded in 2001 with Der Future backing and waterborne technology credibility, Paterson gives local stores a trusted starting point.' },
        { icon: 'i-lucide-layout-grid', title: 'Product Strength', description: 'Waterborne cabinet-wall-door systems, wardrobes, kitchens, and whole-home spaces create a more recognizable showroom experience.' },
        { icon: 'i-lucide-factory', title: 'Supply Chain Strength', description: 'Material, process, production, and delivery capabilities support stable quality as good products enter more homes.' },
        { icon: 'i-lucide-pencil-ruler', title: 'Design Support', description: 'Space plans, showroom image, terminal materials, and product training present whole-home customization through real living scenes.' },
        { icon: 'i-lucide-megaphone', title: 'Marketing Support', description: 'Opening campaigns, seasonal moments, content communication, and headquarters materials help stores reach local customers.' },
        { icon: 'i-lucide-chart-no-axes-combined', title: 'Digital Operation Support', description: 'Operation methods, data tools, and continuous training support customer follow-up, conversion, and service management.' }
      ]
    },
    process: {
      eyebrow: 'Cooperation Process',
      title: 'From first conversation to store opening, headquarters walks with you',
      description: 'The Paterson franchise team discusses city market potential, store resources, and business planning with prospective partners step by step.',
      steps: [
        { title: 'Online Inquiry', description: 'Leave your contact details and target city to begin the Paterson franchise conversation.' },
        { title: 'HQ Discussion', description: 'A franchise consultant introduces brand strength, product systems, cooperation policy, and store support.' },
        { title: 'Site Visit', description: 'Visit headquarters or benchmark stores to experience waterborne whole-home products and showroom image.' },
        { title: 'City Discussion', description: 'Discuss a suitable cooperation plan around local market conditions, store resources, and investment planning.' },
        { title: 'Agreement', description: 'Confirm cooperation area, store plan, and support details before becoming a city partner.' },
        { title: 'Store Setup Training', description: 'Move through store design, sample configuration, team training, and opening preparation.' },
        { title: 'Opening Support', description: 'Headquarters supports opening campaigns, materials, sales rehearsal, and first customer reception.' },
        { title: 'Ongoing Operation', description: 'Marketing, training, operation reviews, and new product rollout support long-term store growth.' }
      ]
    },
    inquiry: {
      eyebrow: 'Submit Inquiry',
      title: 'Leave your franchise interest to receive Paterson cooperation materials',
      description: 'After you submit your contact details and target city, our franchise team will contact you about waterborne whole-home customization cooperation.'
    },
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
      description: 'Explore colores, tipografía, espaciado e interacción del sitio Paterson.',
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
        description: 'Conozca cómo recopilamos, usamos, almacenamos y protegemos datos personales.',
        keywords: 'privacy policy,personal information,cookies'
      },
      title: 'Privacy Policy',
      description: 'How we collect, use, store, and protect personal information.',
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
        description: 'Revise los términos básicos para acceder y usar este sitio web.',
        keywords: 'terms of use,website terms,service terms'
      },
      title: 'Terms of Use',
      description: 'Basic terms for accessing and using this website.',
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
