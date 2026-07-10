const common = {
  back: '返回列表',
  close: '关闭'
};

const navItems = [
  { label: '首页', href: '/' },
  { label: '关于', href: '/about' },
  { label: '作品', href: '/projects' },
  { label: '文章', href: '/articles' },
  { label: '联系', href: '/contact' }
];

const projects = [
  {
    title: '独立产品官网重构',
    description: '为一个早期产品梳理信息架构、首屏叙事和转化路径，让团队能更快解释产品价值。',
    image: 'https://picsum.photos/seed/personal-site-product-system/1200/760',
    href: '/projects/product-website-redesign',
    tags: ['产品策略', 'Nuxt', '设计系统'],
    role: '负责信息架构、界面设计、前端实现和上线检查。',
    body: [
      '项目从一次内容审计开始。原页面的功能很多，但读者很难在前三屏判断产品适合谁、解决什么问题。',
      '我把页面拆成价值主张、使用场景、证据和行动入口四个层级，并用更轻的组件系统承接后续迭代。',
      '最终交付包含可复用页面组件、SEO 元数据、移动端布局和一组给团队继续扩展的内容规范。'
    ]
  },
  {
    title: '创作者内容枢纽',
    description: '把分散的文章、案例、课程和咨询入口整合为一个可持续维护的个人内容系统。',
    image: 'https://picsum.photos/seed/personal-site-editorial-hub/1200/760',
    href: '/projects/creator-content-hub',
    tags: ['内容架构', '编辑体验', 'SEO'],
    role: '负责内容模型、页面结构、视觉方向和发布流程。',
    body: [
      '这个项目的重点不是做更多页面，而是让已有内容拥有更清晰的入口和关系。',
      '我用专题、精选案例和最近文章构成首页主线，减少读者在多个平台之间跳转的成本。',
      '交付后，站点可以同时服务招聘、客户咨询和长期内容沉淀。'
    ]
  },
  {
    title: '顾问型个人品牌站',
    description: '为专业顾问建立可信的个人介绍、服务说明、公开写作和联系路径。',
    image: 'https://picsum.photos/seed/personal-site-consulting-desk/1200/760',
    href: '/projects/consultant-personal-brand',
    tags: ['个人品牌', '咨询服务', '文案'],
    role: '负责定位梳理、页面文案、视觉系统和前端交付。',
    body: [
      '个人品牌站需要克制，不用把每个经历都变成卖点。',
      '我把重点放在专业判断、代表作品和合作方式上，让读者能快速确认是否值得进一步沟通。',
      '页面保留了足够的留白，也为后续新增文章、演讲和案例留下结构。'
    ]
  }
];

const articles = [
  {
    title: '个人网站不是简历的网页版',
    description: '好的个人站点应该帮读者理解你的判断方式，而不仅是列出经历。',
    href: '/articles/personal-site-is-not-a-resume',
    date: '2026-06-18',
    body: [
      '简历强调经历，个人网站强调关系。读者来到网站时，通常想知道你如何看问题、适合解决什么类型的问题，以及下一步如何联系你。',
      '因此首页不必复述所有履历。它应该像一条清晰路径，从你是谁，到你做过什么，再到读者可以如何继续了解。',
      '当作品、写作和联系入口彼此支撑时，个人网站才开始承担真正的沟通工作。'
    ]
  },
  {
    title: '作品集里的上下文比截图更重要',
    description: '项目图可以吸引注意，但背景、取舍和结果才说明你的能力。',
    href: '/articles/context-matters-more-than-screenshots',
    date: '2026-05-27',
    body: [
      '截图展示完成态，无法说明你在约束中做了什么判断。',
      '更有说服力的作品页应该交代问题、角色、关键取舍和结果。即便结果还没有量化数据，也可以说明交付范围和团队如何继续使用它。',
      '这类上下文让读者看到你的工作方法，而不是只看到页面漂亮。'
    ]
  },
  {
    title: '把联系页做得像一个合作入口',
    description: '联系页不是表单收尾，它应该降低第一次沟通的摩擦。',
    href: '/articles/contact-page-as-collaboration-entry',
    date: '2026-04-09',
    body: [
      '很多联系页只有一个邮箱或一个长表单。它们能工作，但没有帮助读者判断该如何开始。',
      '更好的做法是说明你适合接什么类型的项目、通常需要哪些信息，以及多快会回复。',
      '这会让潜在合作方更容易写出有上下文的第一封邮件，也减少双方来回确认的成本。'
    ]
  }
];

export default {
  site: {
    name: '林澈',
    titleTemplate: '{title} - 林澈',
    monogram: '林',
    role: '产品设计师 / 前端开发者'
  },
  common,
  languageSwitcher: {
    aria: '切换语言'
  },
  nav: {
    homeAria: '返回首页',
    mainNav: '主导航',
    menu: '菜单',
    cta: '联系',
    items: navItems
  },
  footer: {
    bio: '一个面向独立专业人士的个人网站模板，适合展示作品、写作、经验和合作方式。',
    nav: '页脚导航',
    links: navItems,
    socials: [
      { label: 'GitHub', href: 'https://github.com', icon: 'i-lucide-github' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-lucide-linkedin' },
      { label: 'Email', href: 'mailto:hello{\'@\'}example.com', icon: 'i-lucide-mail' }
    ],
    copyright: '© {year} 林澈。保留所有权利。',
    privacy: '隐私政策',
    terms: '使用条款'
  },
  cookie: {
    title: 'Cookie 偏好',
    description: '我们使用必要 Cookie 保持网站可用，并在你同意时使用统计 Cookie 改善体验。',
    statisticsTitle: '统计 Cookie',
    statisticsDescription: '帮助了解页面访问情况，不用于广告追踪。',
    manage: '设置',
    necessaryOnly: '仅必要',
    save: '保存',
    acceptAll: '接受'
  },
  skewUpdate: {
    title: '站点有新版本',
    description: '刷新页面后可以使用最新内容。',
    refresh: '刷新',
    dismiss: '稍后'
  },
  homePage: {
    seo: {
      title: '个人网站模板',
      description: '适合独立开发者、设计师、顾问和创作者的个人网站模板。',
      keywords: '个人网站,作品集,Nuxt模板,个人品牌'
    },
    hero: {
      kicker: '个人网站模板',
      title: '把作品、写作和合作方式放在一个清晰的地方。',
      subtitle: '适合独立专业人士快速建立可信、可维护、可持续更新的个人主页。',
      primary: '查看作品',
      secondary: '开始沟通',
      imageAlt: '个人工作空间和桌面细节'
    },
    highlights: [
      { value: '6+', label: '可替换内容区块' },
      { value: '2', label: '内置语言' },
      { value: '1', label: '独立模板 layer' }
    ],
    workTitle: '精选作品',
    workIntro: '用项目讲清楚能力边界、工作方法和最终交付，不只展示漂亮截图。',
    writingTitle: '最近文章',
    writingIntro: '文章区适合放观点、复盘、教程或研究笔记，让个人站点持续增长。',
    writingCta: '阅读全部',
    cta: {
      title: '准备把这个模板改成你的个人网站？',
      description: '替换头像、项目、文章和联系方式后，就能拥有一个完整的作品与内容入口。',
      button: '联系我'
    }
  },
  aboutPage: {
    seo: {
      title: '关于',
      description: '了解个人网站模板中的关于页结构、经历展示和工作原则。',
      keywords: '关于我,个人简介,工作原则'
    },
    title: '关于这个人，以及他如何工作。',
    subtitle: '这里适合放个人背景、专业方向、工作原则和重要经历。内容应该真实、具体，并服务于读者判断。',
    imageAlt: '桌面上的笔记本、电脑和设计草图',
    principlesTitle: '工作原则',
    principles: [
      { title: '先弄清问题', description: '在动手设计或写代码前，先确认目标、受众和真实约束。' },
      { title: '用结构降低沟通成本', description: '好的页面结构能帮读者快速判断重点，也能帮团队持续维护。' },
      { title: '把实现当作设计的一部分', description: '交互、响应式、性能和可访问性都影响最终体验。' },
      { title: '留下可继续生长的系统', description: '模板不只服务首版上线，也应该支持后续内容和业务变化。' }
    ],
    timelineTitle: '经历片段',
    timeline: [
      { year: '2026', title: '独立项目与模板化交付', description: '开始把个人站、企业站和内容站的常见模式整理成可复用模板。' },
      { year: '2024', title: '产品设计与前端协作', description: '在多个内容型和工具型项目里负责从信息架构到页面实现的闭环。' },
      { year: '2021', title: '进入 Web 产品领域', description: '从视觉和内容工作扩展到前端工程，关注设计如何真实落地。' }
    ]
  },
  projectsPage: {
    seo: {
      title: '作品',
      description: '个人网站模板中的作品集页面，展示项目案例和能力范围。',
      keywords: '作品集,项目案例,个人网站'
    },
    title: '作品集',
    subtitle: '用少量精选项目展示你的角色、判断和成果。每个项目都可以继续扩展为完整案例页。',
    view: '查看案例',
    items: projects
  },
  articlesPage: {
    seo: {
      title: '文章',
      description: '个人网站模板中的文章列表和文章详情页。',
      keywords: '个人博客,文章,写作'
    },
    title: '文章',
    subtitle: '写作区适合沉淀观点、过程和方法，让个人网站不只是静态名片。',
    items: articles
  },
  contactPage: {
    seo: {
      title: '联系',
      description: '个人网站模板中的联系页和合作入口。',
      keywords: '联系,合作,个人网站'
    },
    title: '聊聊你的项目。',
    subtitle: '这个页面可以替换成邮箱、社交链接、预约入口或轻量表单。第一版先保留静态表单结构。',
    methods: [
      { label: '邮箱', value: 'hello{\'@\'}example.com', href: 'mailto:hello{\'@\'}example.com', icon: 'i-lucide-mail' },
      { label: '日程', value: '预约 30 分钟沟通', href: 'https://cal.com', icon: 'i-lucide-calendar' },
      { label: '社交', value: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-lucide-linkedin' }
    ],
    form: {
      name: '姓名',
      namePlaceholder: '你的姓名',
      email: '邮箱',
      emailPlaceholder: 'you{\'@\'}example.com',
      message: '项目说明',
      messagePlaceholder: '简单说说你想做什么、时间安排和预算范围',
      submit: '发送消息',
      note: '当前表单是模板占位。接入后端或第三方表单服务后即可提交。'
    }
  },
  privacyPage: {
    seo: {
      title: '隐私政策',
      description: '个人网站模板隐私政策占位页。'
    },
    title: '隐私政策',
    body: '这是个人网站模板的隐私政策占位内容。上线前请根据实际数据收集、统计工具和联系表单处理方式补充完整。'
  },
  termsPage: {
    seo: {
      title: '使用条款',
      description: '个人网站模板使用条款占位页。'
    },
    title: '使用条款',
    body: '这是个人网站模板的使用条款占位内容。上线前请按实际服务、版权和责任边界补充完整。'
  },
  error: {
    title: '页面暂时不可用',
    description: '链接可能已经移动，或当前页面还没有准备好。',
    action: '返回首页'
  }
};
