const common = {
  back: 'Back to list',
  close: 'Close'
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Writing', href: '/articles' },
  { label: 'Contact', href: '/contact' }
];

const projects = [
  {
    title: 'Independent Product Website',
    description: 'A clearer information architecture, first-screen story, and conversion path for an early-stage product.',
    image: 'https://picsum.photos/seed/personal-site-product-system/1200/760',
    href: '/projects/product-website-redesign',
    tags: ['Product strategy', 'Nuxt', 'Design system'],
    role: 'Led information architecture, interface design, frontend implementation, and launch checks.',
    body: [
      'The project started with a content audit. The product had plenty of features, but readers could not quickly understand who it served or what problem it solved.',
      'I reorganized the page around value, use cases, evidence, and action points, then shaped a lighter component system for future iterations.',
      'The final handoff included reusable page sections, SEO metadata, responsive layouts, and content guidance for the team.'
    ]
  },
  {
    title: 'Creator Content Hub',
    description: 'A maintainable home for articles, case studies, courses, and consulting entry points.',
    image: 'https://picsum.photos/seed/personal-site-editorial-hub/1200/760',
    href: '/projects/creator-content-hub',
    tags: ['Content architecture', 'Editorial UX', 'SEO'],
    role: 'Led content modeling, page structure, visual direction, and publishing workflow.',
    body: [
      'The goal was not to add more pages. It was to make existing material easier to find and easier to relate.',
      'I used topics, selected work, and recent writing to create a home page path that reduced jumping between platforms.',
      'After launch, the site supported hiring, consulting inquiries, and long-term content growth.'
    ]
  },
  {
    title: 'Consultant Personal Brand',
    description: 'A focused personal site for a consultant, with profile, services, writing, and contact paths.',
    image: 'https://picsum.photos/seed/personal-site-consulting-desk/1200/760',
    href: '/projects/consultant-personal-brand',
    tags: ['Personal brand', 'Consulting', 'Copywriting'],
    role: 'Led positioning, page copy, visual system, and frontend delivery.',
    body: [
      'A personal brand site should be restrained. Not every past experience needs to become a sales point.',
      'I focused the site on professional judgment, representative work, and ways to collaborate.',
      'The structure leaves room for future writing, talks, and case studies without bloating the first version.'
    ]
  }
];

const articles = [
  {
    title: 'A Personal Site Is Not a Web Resume',
    description: 'A good personal site helps readers understand your judgment, not just your history.',
    href: '/articles/personal-site-is-not-a-resume',
    date: '2026-06-18',
    body: [
      'A resume emphasizes experience. A personal site emphasizes relationships between your work, your thinking, and the next action a reader can take.',
      'The home page does not need to repeat every job. It should create a clear path from who you are, to what you have made, to how someone can continue.',
      'When work, writing, and contact points support each other, the site starts doing real communication work.'
    ]
  },
  {
    title: 'Context Matters More Than Screenshots',
    description: 'Images attract attention, but background, tradeoffs, and outcomes explain ability.',
    href: '/articles/context-matters-more-than-screenshots',
    date: '2026-05-27',
    body: [
      'Screenshots show the finished surface. They do not explain the decisions made under constraints.',
      'A stronger case study explains the problem, your role, the tradeoffs, and the result. Even without hard metrics, you can describe scope and how the team used the work.',
      'That context lets readers see your working method, not only the polish of the interface.'
    ]
  },
  {
    title: 'Make the Contact Page a Collaboration Entry',
    description: 'The contact page should lower the friction of the first message.',
    href: '/articles/contact-page-as-collaboration-entry',
    date: '2026-04-09',
    body: [
      'Many contact pages offer only an email address or a long form. They work, but they do not help readers know how to begin.',
      'A better contact page says what kinds of projects fit, what context is useful, and when someone can expect a reply.',
      'That helps potential collaborators send a better first message and reduces back-and-forth clarification.'
    ]
  }
];

export default {
  site: {
    name: 'Lin Chen',
    titleTemplate: '{title} - Lin Chen',
    monogram: 'LC',
    role: 'Product designer / frontend developer'
  },
  common,
  languageSwitcher: {
    aria: 'Switch language'
  },
  nav: {
    homeAria: 'Back to home',
    mainNav: 'Main navigation',
    menu: 'Menu',
    cta: 'Contact',
    items: navItems
  },
  footer: {
    bio: 'A personal website template for independent professionals who need work, writing, profile, and collaboration pages.',
    nav: 'Footer navigation',
    links: navItems,
    socials: [
      { label: 'GitHub', href: 'https://github.com', icon: 'i-lucide-github' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-lucide-linkedin' },
      { label: 'Email', href: 'mailto:hello{\'@\'}example.com', icon: 'i-lucide-mail' }
    ],
    copyright: '© {year} Lin Chen. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use'
  },
  cookie: {
    title: 'Cookie preferences',
    description: 'We use necessary cookies to keep the site working and, with your consent, analytics cookies to improve the experience.',
    statisticsTitle: 'Analytics cookies',
    statisticsDescription: 'Helps understand page visits. Not used for ad tracking.',
    manage: 'Settings',
    necessaryOnly: 'Necessary only',
    save: 'Save',
    acceptAll: 'Accept'
  },
  skewUpdate: {
    title: 'A new version is available',
    description: 'Refresh the page to use the latest content.',
    refresh: 'Refresh',
    dismiss: 'Later'
  },
  homePage: {
    seo: {
      title: 'Personal Site Template',
      description: 'A personal website template for independent developers, designers, consultants, and creators.',
      keywords: 'personal website, portfolio, Nuxt template, personal brand'
    },
    hero: {
      kicker: 'Personal website template',
      title: 'Put your work, writing, and collaboration paths in one clear place.',
      subtitle: 'For independent professionals who need a credible, maintainable home on the web.',
      primary: 'View work',
      secondary: 'Start a conversation',
      imageAlt: 'Personal workspace with desk details'
    },
    highlights: [
      { value: '6+', label: 'replaceable content sections' },
      { value: '2', label: 'built-in languages' },
      { value: '1', label: 'independent template layer' }
    ],
    workTitle: 'Selected work',
    workIntro: 'Use projects to explain scope, method, and delivery instead of showing screenshots alone.',
    writingTitle: 'Recent writing',
    writingIntro: 'Use the writing section for essays, notes, tutorials, or project reflections that keep the site alive.',
    writingCta: 'Read all',
    cta: {
      title: 'Ready to turn this template into your personal site?',
      description: 'Replace the portrait, projects, articles, and contact details to get a complete portfolio and writing home.',
      button: 'Contact me'
    }
  },
  aboutPage: {
    seo: {
      title: 'About',
      description: 'About page structure for a personal website template, including profile, principles, and timeline.',
      keywords: 'about me, personal profile, working principles'
    },
    title: 'About the person, and how they work.',
    subtitle: 'Use this page for background, focus, working principles, and career moments. Keep it true, specific, and useful for reader judgment.',
    imageAlt: 'Notebook, laptop, and design sketches on a desk',
    principlesTitle: 'Working principles',
    principles: [
      { title: 'Clarify the problem first', description: 'Before design or code, confirm goals, audience, and real constraints.' },
      { title: 'Use structure to reduce friction', description: 'Good page structure helps readers find the point and helps teams maintain content.' },
      { title: 'Treat implementation as design', description: 'Interaction, responsiveness, performance, and accessibility all shape the final experience.' },
      { title: 'Leave a system that can grow', description: 'A template should support launch day and future changes in content or direction.' }
    ],
    timelineTitle: 'Career moments',
    timeline: [
      { year: '2026', title: 'Independent projects and template delivery', description: 'Started turning common personal, company, and content site patterns into reusable templates.' },
      { year: '2024', title: 'Product design and frontend collaboration', description: 'Led work from information architecture to page implementation across content and tooling projects.' },
      { year: '2021', title: 'Moved into web products', description: 'Expanded from visual and content work into frontend engineering, with a focus on practical design delivery.' }
    ]
  },
  projectsPage: {
    seo: {
      title: 'Work',
      description: 'Portfolio page for the personal website template, with project cases and capability areas.',
      keywords: 'portfolio, project case studies, personal website'
    },
    title: 'Work',
    subtitle: 'A small set of selected projects can show your role, judgment, and outcomes. Each item can grow into a full case study.',
    view: 'View case',
    items: projects
  },
  articlesPage: {
    seo: {
      title: 'Writing',
      description: 'Article list and detail pages for the personal website template.',
      keywords: 'personal blog, articles, writing'
    },
    title: 'Writing',
    subtitle: 'Use writing to collect opinions, process, and methods so the site is more than a static profile.',
    items: articles
  },
  contactPage: {
    seo: {
      title: 'Contact',
      description: 'Contact page and collaboration entry for the personal website template.',
      keywords: 'contact, collaboration, personal website'
    },
    title: 'Tell me about your project.',
    subtitle: 'Replace this page with email, social links, scheduling, or a lightweight form. The first version keeps a static form structure.',
    methods: [
      { label: 'Email', value: 'hello{\'@\'}example.com', href: 'mailto:hello{\'@\'}example.com', icon: 'i-lucide-mail' },
      { label: 'Calendar', value: 'Book a 30-minute call', href: 'https://cal.com', icon: 'i-lucide-calendar' },
      { label: 'Social', value: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-lucide-linkedin' }
    ],
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you{\'@\'}example.com',
      message: 'Project notes',
      messagePlaceholder: 'Share what you want to make, timing, and budget range',
      submit: 'Send message',
      note: 'This form is a template placeholder. Connect a backend or form service before launch.'
    }
  },
  privacyPage: {
    seo: {
      title: 'Privacy Policy',
      description: 'Privacy policy placeholder for the personal website template.'
    },
    title: 'Privacy Policy',
    body: 'This is placeholder privacy policy content for the personal website template. Before launch, update it based on the actual analytics, data collection, and contact form behavior.'
  },
  termsPage: {
    seo: {
      title: 'Terms of Use',
      description: 'Terms of use placeholder for the personal website template.'
    },
    title: 'Terms of Use',
    body: 'This is placeholder terms content for the personal website template. Before launch, update it based on the actual service, copyright, and responsibility boundaries.'
  },
  error: {
    title: 'This page is not available',
    description: 'The link may have moved, or this page is not ready yet.',
    action: 'Back home'
  }
};
