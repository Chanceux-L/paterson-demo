const starter = {
  site: {
    name: 'Paterson',
    titleTemplate: '{title} - Paterson'
  },
  common: {
    all: 'Все',
    apply: 'Применить',
    back: 'Назад',
    breadcrumb: 'Навигация',
    clear: 'Очистить',
    clearAll: 'Очистить все',
    close: 'Закрыть',
    home: 'Главная',
    inquiry: 'Заявка',
    loadMore: 'Показать еще',
    loading: 'Загрузка',
    nextImage: 'Следующее фото',
    nextPage: 'Следующая',
    none: 'Нет',
    previousImage: 'Предыдущее фото',
    previousPage: 'Предыдущая',
    showLess: 'Скрыть',
    showMore: 'Еще',
    viewImageIndex: 'Фото {index}'
  },
  languageSwitcher: {
    aria: 'Сменить язык',
    label: 'Язык',
    localeName: 'Русский',
    search: 'Поиск языков',
    empty: 'Нет языков',
    languages: {
      'zh-CN': {
        label: '简体中文',
        localeName: 'Упрощенный китайский',
        searchTerms: [
          'Китайский',
          'Mandarin',
          'zh'
        ]
      },
      'zh-TW': {
        label: '繁體中文',
        localeName: 'Традиционный китайский',
        searchTerms: [
          'Традиционный китайский',
          'Китайский',
          'tw'
        ]
      },
      'en': {
        label: 'English',
        localeName: 'Английский',
        searchTerms: [
          'Английский',
          'English',
          'en'
        ]
      },
      'ru': {
        label: 'Русский',
        localeName: 'Русский',
        searchTerms: [
          'Русский',
          'Russian',
          'ru'
        ]
      },
      'de': {
        label: 'Deutsch',
        localeName: 'Немецкий',
        searchTerms: [
          'Немецкий',
          'German',
          'de'
        ]
      },
      'it': {
        label: 'Italiano',
        localeName: 'Итальянский',
        searchTerms: [
          'Итальянский',
          'Italian',
          'it'
        ]
      },
      'es': {
        label: 'Español',
        localeName: 'Испанский',
        searchTerms: [
          'Испанский',
          'Spanish',
          'es'
        ]
      },
      'fr': {
        label: 'Français',
        localeName: 'Французский',
        searchTerms: [
          'Французский',
          'French',
          'fr'
        ]
      }
    }
  },
  nav: {
    homeAria: 'Paterson',
    logoAlt: 'Paterson',
    sloganAlt: 'Paterson',
    menu: 'Меню',
    mainNav: 'Главная навигация',
    memberCenter: 'Заявка',
    hotline: 'Линия франшизы',
    stockLabel: 'Биржевой код',
    topInfoBrand: 'Бренд Der Future',
    items: [
      {
        label: 'Главная',
        english: 'Home',
        href: '/'
      },
      {
        label: 'Бренд',
        english: 'Brand',
        href: '/about'
      },
      {
        label: 'Продукты',
        english: 'Products',
        href: '/data'
      },
      {
        label: 'Технологии',
        english: 'Technology',
        href: '/philosophy'
      },
      {
        label: 'Франшиза',
        english: 'Franchise',
        href: '/contact'
      },
      {
        label: 'Новости',
        english: 'News',
        href: '/articles'
      }
    ],
    search: {
      scrollTop: 'Наверх'
    }
  },
  footer: {
    brandDescription: 'Бренд, технологии и поддержка.',
    slogan: 'Водные технологии, здоровые пространства и поддержка партнеров.',
    socials: [
      {
        icon: 'i-lucide-message-circle',
        label: 'Paterson'
      },
      {
        icon: 'i-lucide-radio',
        label: 'Paterson'
      },
      {
        icon: 'i-lucide-video',
        label: 'Paterson'
      },
      {
        icon: 'i-lucide-instagram',
        label: 'Paterson'
      },
      {
        icon: 'i-lucide-book-open',
        label: 'Paterson'
      },
      {
        icon: 'i-lucide-globe',
        label: 'Paterson'
      }
    ],
    columns: [
      {
        title: 'Бренд',
        links: [
          {
            label: 'Бренд',
            href: '/about'
          },
          {
            label: 'Технологии',
            href: '/philosophy'
          },
          {
            label: 'Поддержка',
            href: '/contact'
          }
        ]
      },
      {
        title: 'Продукты / Новости',
        links: [
          {
            label: 'Продукты',
            href: '/data'
          },
          {
            label: 'Новости',
            href: '/articles'
          }
        ]
      },
      {
        title: 'Контакты',
        links: [
          {
            label: 'Контакты',
            href: '/contact'
          },
          {
            label: 'Поддержка',
            href: 'sourceRegisterUrl',
            external: true
          }
        ]
      }
    ],
    followUs: 'Контакты',
    email: 'Email',
    address: 'Адрес',
    addressValue: 'Tianhe, Guangzhou, China',
    icp: '粤ICP备2024333088号',
    policeRecord: '粤公网安备44010602014342号',
    legalPrefix: 'Paterson / Der Future',
    legalCopyright: '© 2026 Paterson.',
    riskNotice: 'Информация о сотрудничестве уточняется с командой Paterson.',
    tagline: 'Экологичные материалы и цельные решения для дома.',
    copyright: '© 2026 Paterson.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    cookieSettings: 'Cookie'
  },
  cookie: {
    title: 'Настройки cookie',
    description: 'Мы используем необходимые cookie и аналитику по согласию.',
    necessaryTitle: 'Необходимые cookie',
    necessaryDescription: 'Для языка, безопасности и работы сайта.',
    alwaysOn: 'Всегда включены',
    statisticsTitle: 'Аналитические cookie',
    statisticsDescription: 'Помогают понимать посещения сайта.',
    manage: 'Настройки',
    necessaryOnly: 'Только необходимые',
    save: 'Сохранить',
    acceptAll: 'Принять все'
  },
  skewUpdate: {
    title: 'Эко-дом',
    description: 'Страница не загрузилась.',
    refresh: 'Обновить',
    dismiss: 'Позже'
  },
  error: {
    pageLabel: 'Ошибка',
    action: 'Подробнее',
    contactAction: 'Контакты',
    types: {
      badRequest: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Проверьте запрос или вернитесь на главную.'
      },
      unauthorized: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Проверьте доступ.'
      },
      forbidden: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Нет доступа к этой странице.'
      },
      notFound: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Страница перемещена или удалена.'
      },
      serverError: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Попробуйте позже.'
      },
      unavailable: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Сайт временно недоступен.'
      },
      defaultError: {
        eyebrow: 'Paterson',
        title: 'Эко-дом',
        description: 'Страница не загрузилась.'
      }
    }
  },
  cta: {
    title: 'Эко-дом',
    description: 'Оставьте контакты, чтобы получить материалы по франшизе и продуктам.',
    action: 'Подробнее',
    contactLabel: 'Линия франшизы',
    bgText: 'PATERSON'
  },
  pages: {
    home: {
      seo: {
        title: 'Эко-дом',
        description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      }
    },
    about: {
      seo: {
        title: 'Бренд',
        description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      }
    },
    articles: {
      seo: {
        title: 'Новости',
        description: 'Новости показывают технологии, события бренда и развитие продуктов.',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      },
      detailSeo: {
        title: 'Новости',
        description: 'Читайте новость Paterson: {title}',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      }
    },
    contact: {
      inquiry: {
        eyebrow: 'Поддержка',
        title: 'Франшиза',
        description: 'Оставьте контакты. Мы свяжемся.',
        name: 'Имя',
        namePlaceholder: 'Введите',
        missingName: 'Оставьте контакты. Мы свяжемся.',
        phoneCountry: 'Страна или регион',
        phoneCountrySearch: 'Поиск страны или кода',
        phone: 'Телефон',
        phonePlaceholder: 'Введите',
        email: 'Email',
        emailPlaceholder: 'Введите',
        company: 'Компания',
        companyPlaceholder: 'Введите',
        message: 'Интерес',
        messagePlaceholder: 'Оставьте контакты. Мы свяжемся.',
        missingMessage: 'Оставьте контакты. Мы свяжемся.',
        captcha: 'Код',
        captchaPlaceholder: 'Введите',
        captchaAlt: 'Paterson',
        missingCaptcha: 'Оставьте контакты. Мы свяжемся.',
        submit: 'Отправить заявку',
        submitting: 'Отправка',
        success: 'Отправлено',
        missingPhone: 'Оставьте контакты. Мы свяжемся.',
        invalidPhone: 'Оставьте контакты. Мы свяжемся.',
        failed: 'Оставьте контакты. Мы свяжемся.'
      }
    }
  },
  data: {
    siteConfig: {
      companyName: 'Paterson / Der Future',
      shortName: 'Paterson',
      industry: 'Экологичная кастомная мебель и системы для дома',
      siteTitle: 'Продукты',
      siteDescription: 'Решения для всего дома.',
      canonical: 'https://www.paterson.com.cn/',
      navigation: [
        {
          label: 'Главная',
          path: '/'
        },
        {
          label: 'Бренд',
          path: '/about'
        },
        {
          label: 'Продукты',
          path: '/data'
        },
        {
          label: 'Технологии',
          path: '/philosophy'
        },
        {
          label: 'Франшиза',
          path: '/contact'
        },
        {
          label: 'Новости',
          path: '/articles'
        }
      ],
      footerIntro: 'Решения для всего дома.',
      footerColumns: [
        {
          title: 'Бренд',
          links: [
            {
              label: 'Системы',
              path: '/about'
            },
            {
              label: 'Системы',
              path: '/philosophy'
            }
          ]
        },
        {
          title: 'Контент',
          links: [
            {
              label: 'Системы',
              path: '/data'
            },
            {
              label: 'Системы',
              path: '/articles'
            }
          ]
        }
      ]
    }
  },
  homePage: {
    hero: {
      badge: 'Водная отделка и здоровый дом',
      title: 'Эко-дом',
      titleLine1: 'Paterson',
      titleLine2: 'Эко-дом',
      subtitle: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      ctaLabel: 'Подробнее',
      cta2Label: 'Подробнее',
      imageAlt: 'Paterson',
      caption: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      oxygenValue: 'Здоровый воздух',
      oxygenLabel: 'Водная технология',
      keywords: {
        waterPaint: 'Водная',
        oxygen: 'Здоровье',
        material: 'Материалы',
        marketing: 'Маркетинг'
      },
      metrics: [
        {
          value: '2001',
          label: 'Год основания бренда'
        },
        {
          value: '002631',
          label: 'Биржевой код Der Future'
        },
        {
          value: '4.0',
          label: 'Обновление водной фабрики'
        },
        {
          value: 'Systems',
          label: 'Единая система шкафов, стен и дверей'
        }
      ]
    },
    forest: {
      eyebrow: 'Цепочка здоровья',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      center: 'Центр здоровья объединяет материалы, воздух и сценарии жизни.',
      note: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      proofs: {
        bedroom: 'Здоровая спальня',
        center: 'Центр здоровья',
        standard: 'Стандарты воздуха'
      },
      proofDescriptions: {
        bedroom: 'Спальня показывает мягкие материалы и чистый воздух.',
        center: 'Центр связывает продукт, тесты и стандарты.',
        standard: 'Стандарты помогают объяснить безопасность покупателю.'
      },
      nodes: {
        chain: 'Водные',
        forest: 'Здоровье',
        bedroom: 'Пространства',
        standard: 'Доказательства'
      }
    },
    trust: {
      eyebrow: 'О нас',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      stats: [
        {
          value: '2001',
          label: 'Бренд'
        },
        {
          value: 'Der Future',
          label: 'Бренд'
        },
        {
          value: 'Standard Lead',
          label: 'Доказательства'
        },
        {
          value: 'Smart Coating',
          label: 'Технологии'
        }
      ]
    },
    technology: {
      eyebrow: 'Водные технологии',
      title: 'Водные технологии',
      description: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      summary: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      metrics: [
        {
          value: '3D',
          label: 'Умная линия отделки'
        },
        {
          value: '4.0',
          label: 'Водная фабрика'
        },
        {
          value: 'Waterborne',
          label: 'Материалы и поставка'
        }
      ],
      items: [
        {
          title: 'Технологии',
          description: 'Система шкаф-стена-дверь показывает технологию в реальном доме.',
          href: '/data'
        }
      ],
      nodes: [
        {
          icon: 'i-lucide-droplets',
          title: 'Водные',
          description: 'Материалы, отделка, продукт и поставка работают вместе.'
        },
        {
          icon: 'i-lucide-factory',
          title: 'Технологии',
          description: 'Умные процессы улучшают стабильность и качество поверхности.'
        },
        {
          icon: 'i-lucide-leaf',
          title: 'Продукты',
          description: 'Водная фабрика поддерживает поставку решений для всего дома.'
        },
        {
          icon: 'i-lucide-award',
          title: 'Доказательства',
          description: 'Сертификаты усиливают доверие к технологии.'
        }
      ]
    },
    products: {
      eyebrow: 'Сервисы',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      items: [
        {
          title: 'Водная технология получила',
          description: 'Водные шкафы с 3 грунтами, 2 финишами и 72 этапами.',
          image: '/paterson/product-bedroom-system.webp',
          tags: [
            'Водные',
            'Пространства',
            'Система'
          ]
        },
        {
          title: 'Кухонные системы',
          description: 'Кухни сочетают экологичность, здоровье и аккуратный вид.',
          image: '/paterson/product-kitchen-system.webp',
          tags: [
            'Продукты',
            'Здоровье',
            'Система'
          ]
        },
        {
          title: 'Детская комната',
          description: 'Детские пространства поддерживают учебу, порядок и воображение.',
          image: '/paterson/product-children-room.webp',
          tags: [
            'Продукты',
            'Пространства',
            'Система'
          ]
        }
      ]
    },
    advantages: {
      eyebrow: 'Плюсы франшизы',
      title: 'Поддержка франшизы',
      items: [
        {
          icon: 'i-lucide-droplets',
          title: 'Водные',
          description: 'Водная цепочка, умная линия и стандарты создают отличие.'
        },
        {
          icon: 'i-lucide-wind',
          title: 'Здоровье',
          description: 'Здоровые спальни и стандарты воздуха делают wellness видимым.'
        },
        {
          icon: 'i-lucide-layers-3',
          title: 'Материалы',
          description: 'Легкие материалы решают вопросы формы и стабильности.'
        },
        {
          icon: 'i-lucide-megaphone',
          title: 'Маркетинг',
          description: 'AI, retail и кампании приводят локальные заявки.'
        },
        {
          icon: 'i-lucide-award',
          title: 'Доказательства',
          description: 'Сертификаты, награды и события дают доказательства бренда.'
        },
        {
          icon: 'i-lucide-history',
          title: 'Бренд',
          description: 'С 2001 года бренд накапливает опыт продукта и сервиса.'
        }
      ]
    },
    process: {
      eyebrow: 'Этапы франшизы',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      stepLabel: 'Шаг',
      steps: [
        {
          title: 'Контакты',
          description: 'Отправьте город, бюджет и контакт.'
        },
        {
          title: 'Поддержка',
          description: 'Центр объясняет региональную политику и формат сотрудничества.'
        },
        {
          title: 'Доказательства',
          description: 'Посетите шоурум, образцы и производственные возможности.'
        },
        {
          title: 'Магазин',
          description: 'Обсудите район, клиентов и план магазина.'
        },
        {
          title: 'Процесс',
          description: 'Подтвердите авторизацию, условия и темп запуска.'
        },
        {
          title: 'Дизайн',
          description: 'Пройдите обучение по дизайну, продукту и работе.'
        },
        {
          title: 'Открытие',
          description: 'Получите поддержку открытия, кампаний и команды.'
        },
        {
          title: 'Ведение',
          description: 'Используйте маркетинг, продукты и цифровые инструменты дальше.'
        }
      ]
    },
    news: {
      eyebrow: 'Новости и награды',
      title: 'Новости бренда',
      more: 'Подробнее',
      items: [
        {
          tag: 'Технологии',
          title: 'Водная технология получила экспертное признание',
          description: 'Технологии, материалы и покрытие становятся понятным доказательством бренда.',
          image: '/paterson/news-water-paint-tech.webp'
        },
        {
          tag: 'Выставка',
          title: 'Paterson показал новые пространства в Гуанчжоу',
          description: 'Выставка показывает продукты, технологии и реальные пространства для партнеров.',
          image: '/paterson/news-custom-home-expo.webp'
        },
        {
          tag: 'Стандарты',
          title: 'Новые мебельные стандарты усиливают здоровый дом',
          description: 'Стандарты помогают объяснить экологичность, долговечность и качество пространства.',
          image: '/paterson/news-furniture-standard.webp'
        }
      ]
    },
    consult: {
      eyebrow: 'Форма франшизы',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      privacy: 'Только для консультации по франшизе.',
      hours: '09:00 - 18:00',
      form: {
        name: 'Имя',
        namePlaceholder: 'Введите',
        phone: 'Телефон',
        phonePlaceholder: 'Введите',
        city: 'Город',
        cityPlaceholder: 'Введите',
        budget: 'Бюджет',
        budgetPlaceholder: 'Введите',
        budgetOne: 'До 500 тыс. RMB',
        budgetTwo: '500 тыс. - 1 млн RMB',
        budgetThree: 'Более 1 млн RMB',
        message: 'Заметки',
        messagePlaceholder: 'Оставьте контакты. Мы свяжемся.',
        submit: 'Подробнее'
      }
    },
    mobileBar: {
      consult: 'Заявка',
      call: 'Звонок',
      store: 'Магазины'
    },
    faq: {
      items: [
        {
          question: 'Чем Paterson отличается в экологичной кастомизации?',
          answer: 'Водная отделка, цельные системы и поддержка магазина помогают объяснить ценность покупателю.'
        },
        {
          question: 'Какую поддержку получает партнер?',
          answer: 'Команда помогает с продуктом, витриной, обучением, маркетингом и запуском магазина.'
        }
      ]
    }
  },
  aboutPage: {
    sectionNavAria: 'Paterson',
    sectionNav: [
      {
        label: 'Профиль',
        href: '#company'
      },
      {
        label: 'Культура',
        href: '#culture'
      },
      {
        label: 'Награды',
        href: '#honors'
      },
      {
        label: 'История',
        href: '#history'
      },
      {
        label: 'Контакты',
        href: '#contact'
      }
    ],
    hero: {
      eyebrow: 'Сила бренда',
      titleLine1: 'Paterson',
      titleLine2: 'Бренд и система',
      subtitle: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      primaryCta: 'Подробнее',
      imageAlt: 'Paterson',
      stats: [
        {
          value: '2001',
          label: 'С 2001 года в мебели на заказ'
        },
        {
          value: '002631',
          label: 'Биржевой код Der Future'
        },
        {
          value: 'Waterborne',
          label: 'Водные и эко-системы дома'
        },
        {
          value: 'Full Chain',
          label: 'Поддержка продукта, дизайна и работы'
        }
      ]
    },
    proof: {
      eyebrow: 'Доказательства',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      tags: [
        {
          label: 'Бренд'
        },
        {
          label: 'Бренд'
        },
        {
          label: 'Водные'
        },
        {
          label: 'Продукты'
        }
      ],
      items: [
        {
          icon: 'i-lucide-building-2',
          title: 'Бренд',
          description: 'Ресурсы публичной группы дают управление и долгий горизонт.'
        },
        {
          icon: 'i-lucide-droplets',
          title: 'Технологии',
          description: 'Водные материалы, фабрика и стандарты создают отличие.'
        },
        {
          icon: 'i-lucide-factory',
          title: 'Продукты',
          description: 'Процессы и системы несут стабильное качество в дома.'
        },
        {
          icon: 'i-lucide-store',
          title: 'Поддержка',
          description: 'Партнеры получают магазин, обучение, маркетинг и операционную помощь.'
        }
      ]
    },
    origin: {
      eyebrow: 'Сила компании',
      title: 'Бренд и система',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      imageAlt: 'Paterson',
      captionEyebrow: 'Поддержка Der Future и развитие с 2001 года.',
      caption: 'Бренд, технологии и поддержка.',
      quote: 'Бренд строит экологичный дом через материалы, системы и сервис.'
    },
    capabilities: {
      eyebrow: 'Ключевые возможности',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      items: [
        {
          icon: 'i-lucide-award',
          title: 'Бренд',
          description: 'История, поддержка группы и стандарты снижают риск.'
        },
        {
          icon: 'i-lucide-leaf',
          title: 'Здоровье',
          description: 'Водные системы и здоровые спальни делают обещание реальным.'
        },
        {
          icon: 'i-lucide-layout-grid',
          title: 'Продукты',
          description: 'Шкафы, стены, двери и кухни держат единый стиль.'
        },
        {
          icon: 'i-lucide-megaphone',
          title: 'Поддержка',
          description: 'Обучение, трафик и цифровые инструменты помогают старту.'
        }
      ]
    },
    culture: {
      eyebrow: 'Культура',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      items: [
        {
          icon: 'i-lucide-compass',
          title: 'Бренд',
          description: 'Создавать здоровые умные дома под заказ.'
        },
        {
          icon: 'i-lucide-heart-handshake',
          title: 'Бренд',
          description: 'Клиент в центре, усилие и долгосрочный прогресс.'
        },
        {
          icon: 'i-lucide-rocket',
          title: 'Технологии',
          description: 'Продукт, технология и retail ведут развитие.'
        }
      ]
    },
    proofImages: [
      {
        image: '/paterson/brand-culture-vision.webp',
        title: 'Бренд',
        description: 'Бренд, технологии и поддержка.'
      },
      {
        image: '/paterson/brand-franchise-support.webp',
        title: 'Бренд',
        description: 'Бренд, технологии и поддержка.'
      }
    ],
    timeline: {
      eyebrow: 'Развитие',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      items: [
        {
          year: '2001',
          title: 'Бренд',
          description: 'Paterson входит в сферу индивидуального дома.'
        },
        {
          year: '002631',
          title: 'Бренд',
          description: 'Der Future дает управление и ресурсы.'
        },
        {
          year: 'Waterborne Tech',
          title: 'Технологии',
          description: 'Водные системы формируют эко-преимущество дома.'
        },
        {
          year: 'Now',
          title: 'Поддержка',
          description: 'Продукт, дизайн и операции поддерживают городских партнеров.'
        }
      ]
    },
    cta: {
      eyebrow: 'Партнерство',
      title: 'Поддержка франшизы',
      subtitle: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      button: 'Подробнее'
    }
  },
  philosophyPage: {
    seo: {
      title: 'Технологии',
      description: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      keywords: 'Paterson, эко дом, водная технология, франшиза'
    },
    hero: {
      eyebrow: 'Водные технологии',
      titleLine1: 'Водные технологии',
      titleLine2: 'Эко-дом',
      subtitle: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      primaryCta: 'Подробнее',
      imageAlt: 'Paterson',
      metrics: [
        {
          value: '3D',
          label: 'Линия умной водной отделки'
        },
        {
          value: '4.0',
          label: 'Обновление водной фабрики'
        },
        {
          value: '72',
          label: 'Этапы водного процесса'
        }
      ]
    },
    sectionNavAria: 'Paterson',
    sectionNav: [
      {
        label: 'Цепочка',
        href: '#chain'
      },
      {
        label: 'Доказательства',
        href: '#proof'
      },
      {
        label: 'Опыт',
        href: '#experience'
      },
      {
        label: 'Ценность дома',
        href: '#terminal'
      }
    ],
    chain: {
      eyebrow: 'Цепочка ценности',
      title: 'Водные технологии',
      description: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      nodes: [
        {
          icon: 'i-lucide-droplets',
          title: 'Материалы',
          description: 'Водные материалы уменьшают запах и сомнения.'
        },
        {
          icon: 'i-lucide-factory',
          title: 'Технологии',
          description: 'Умная отделка контролирует поверхность и поставку.'
        },
        {
          icon: 'i-lucide-panels-top-left',
          title: 'Продукты',
          description: 'Шкафы, стены и двери работают в реальных интерьерах.'
        },
        {
          icon: 'i-lucide-badge-check',
          title: 'Доказательства',
          description: 'Стандарты и сертификаты поддерживают экспертность.'
        }
      ]
    },
    proof: {
      eyebrow: 'Доказательства',
      title: 'Водные технологии',
      description: 'Водные материалы, умная отделка и стандарты делают технологию видимой.',
      imageAlt: 'Paterson',
      captionEyebrow: 'Доказательства делают технологию понятной на витрине.',
      caption: 'Испытания и стандарты помогают объяснить качество покрытия.',
      cards: [
        {
          value: 'Leading',
          label: 'Доказательства',
          description: 'Признание усиливает доверие к ключевой технологии.'
        },
        {
          value: 'Six-Side',
          label: 'Технологии',
          description: 'Шестисторонняя отделка делает процесс понятнее.'
        },
        {
          value: '2H',
          label: 'Здоровье',
          description: 'Твердость, адгезия и стойкость отвечают на вопросы быта.'
        }
      ]
    },
    experience: {
      eyebrow: 'Опыт пространства',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      items: [
        {
          title: 'Водные',
          description: 'Основа, шпон и 72 этапа делают шкаф запоминающимся.',
          image: '/paterson/product-water-paint-wardrobe.webp',
          tags: [
            'Водная краска',
            'Шкафы',
            'Экодом'
          ]
        },
        {
          title: 'Пространства',
          description: 'Шкаф, изголовье и панели показывают здоровую спальню.',
          image: '/paterson/product-bedroom-system.webp',
          tags: [
            'Спальня',
            'Хранение',
            'Система'
          ]
        },
        {
          title: 'Здоровье',
          description: 'Стандарты соединяют экологию, долговечность и качество пространства.',
          image: '/paterson/news-furniture-standard.webp',
          tags: [
            'Здоровье',
            'Воздух',
            'Стандарты'
          ]
        }
      ]
    },
    terminal: {
      eyebrow: 'Ценность дома',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      items: [
        {
          icon: 'i-lucide-store',
          title: 'Пространства',
          description: 'Темы пространства читаются яснее через здоровые системы.'
        },
        {
          icon: 'i-lucide-message-square-text',
          title: 'Доказательства',
          description: 'Материалы, процесс и стандарты дают понятные доказательства.'
        },
        {
          icon: 'i-lucide-sparkles',
          title: 'Продукты',
          description: 'Тактильность, текстура и стиль ощущаются в жизни.'
        },
        {
          icon: 'i-lucide-trending-up',
          title: 'Бренд',
          description: 'Вода, wellness и поддержка остаются в памяти бренда.'
        }
      ]
    },
    cta: {
      eyebrow: 'Водная франшиза',
      title: 'Поддержка франшизы',
      subtitle: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      button: 'Подробнее'
    }
  },
  dataPage: {
    seo: {
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      keywords: 'Paterson, эко дом, водная технология, франшиза'
    },
    hero: {
      eyebrow: 'Системы продуктов',
      titleLine1: 'Продукты',
      titleLine2: 'Эко-дом',
      subtitle: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      imageAlt: 'Paterson',
      primaryCta: 'Подробнее',
      metrics: [
        {
          value: '3+2 / 72',
          label: 'Три грунта и два финишных слоя'
        },
        {
          value: '6 spaces',
          label: 'Шесть основных сценариев дома'
        },
        {
          value: '23 years',
          label: 'Долгий фокус на эко-кастомизации'
        }
      ]
    },
    serviceLines: {
      navAria: 'Paterson',
      eyebrow: 'Сервисы',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      items: [
        {
          title: 'Шкафы',
          description: 'Водные шкафы, хранение и спальня показаны как понятная система.',
          image: '/paterson/product-wardrobe-intro.webp',
          points: [
            'Шкафы',
            'Спальня',
            'Тип'
          ]
        },
        {
          title: 'Кухни',
          description: 'Кухня соединяет удобный маршрут, хранение и здоровые материалы.',
          image: '/paterson/product-cabinet-intro.webp',
          points: [
            'Кухня',
            'Хранение',
            'Функция'
          ]
        },
        {
          title: 'Мебель',
          description: 'Мебель дополняет гостиную, столовую и гибкие пространства в одном стиле.',
          image: '/paterson/product-series-guangyin.webp',
          points: [
            'Гостиная',
            'Столовая',
            'Мебель'
          ]
        },
        {
          title: 'Baier Future Home',
          description: 'Детская объединяет учебу, сон, хранение и безопасные материалы.',
          image: '/paterson/product-series-yuanye.webp',
          points: [
            'Детская',
            'Учеба',
            'Рост'
          ]
        }
      ]
    },
    catalog: {
      eyebrow: 'Витрина продуктов',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      emptyTitle: 'Продукты',
      emptyDescription: 'Нет материалов',
      serviceCatalogs: {
        'Шкафы': {
          filters: [
            {
              label: 'Пространство',
              options: [
                'Все',
                'Прихожая',
                'Гостиная',
                'Столовая',
                'Кабинет',
                'Спальня',
                'Балкон'
              ]
            },
            {
              label: 'Стиль',
              options: [
                'Все',
                'Европейский',
                'Современный',
                'Новый китайский',
                'Легкий люкс',
                'Американский',
                'Future'
              ]
            },
            {
              label: 'Тип',
              options: [
                'Все',
                'Молодежный',
                'Классика'
              ]
            }
          ],
          items: [
            {
              title: 'Tiya',
              category: 'Шкафы',
              image: '/paterson/product-series-tiya.webp',
              tags: [
                'Спальня',
                'Легкий люкс',
                'Классика'
              ]
            },
            {
              title: 'Guangyin',
              category: 'Шкафы',
              image: '/paterson/product-series-guangyin.webp',
              tags: [
                'Гостиная',
                'Современный',
                'Классика'
              ]
            },
            {
              title: 'Yuanye',
              category: 'Шкафы',
              image: '/paterson/product-series-yuanye.webp',
              tags: [
                'Спальня',
                'Современный',
                'Молодежный'
              ]
            },
            {
              title: 'Питомцы',
              category: 'Шкафы',
              image: '/paterson/product-pet-living-space.webp',
              tags: [
                'Гостиная',
                'Future',
                'Молодежный'
              ]
            },
            {
              title: 'Игровая',
              category: 'Шкафы',
              image: '/paterson/product-gaming-bedroom.webp',
              tags: [
                'Спальня',
                'Future',
                'Молодежный'
              ]
            },
            {
              title: 'Шкафы',
              category: 'Шкафы',
              image: '/paterson/product-water-paint-wardrobe.webp',
              tags: [
                'Спальня',
                'Шкафы',
                'Тип'
              ]
            }
          ]
        },
        'Кухни': {
          filters: [
            {
              label: 'Серия',
              options: [
                'Все',
                'Декоративная поверхность',
                'Лак',
                'Мембрана',
                'Массив'
              ]
            },
            {
              label: 'Стиль',
              options: [
                'Все',
                'Европейский',
                'Современный',
                'Новый китайский',
                'Легкий люкс',
                'Американский',
                'Future'
              ]
            },
            {
              label: 'Тип',
              options: [
                'Все',
                'L-форма',
                'U-форма',
                'Линейная',
                'Остров'
              ]
            }
          ],
          items: [
            {
              title: 'Hills',
              category: 'Кухни',
              image: '/paterson/product-cabinet-hills.webp',
              tags: [
                'Декоративная поверхность',
                'Современный',
                'L-форма'
              ]
            },
            {
              title: 'Alps P',
              category: 'Кухни',
              image: '/paterson/product-cabinet-alps.webp',
              tags: [
                'Лак',
                'Легкий люкс',
                'Остров'
              ]
            },
            {
              title: 'Kasen Max',
              category: 'Кухни',
              image: '/paterson/product-cabinet-kasen.webp',
              tags: [
                'Мембрана',
                'Современный',
                'U-форма'
              ]
            },
            {
              title: 'Nature',
              category: 'Кухни',
              image: '/paterson/product-cabinet-nature.webp',
              tags: [
                'Массив',
                'Новый китайский',
                'Линейная'
              ]
            },
            {
              title: 'Musha P',
              category: 'Кухни',
              image: '/paterson/product-cabinet-musha.webp',
              tags: [
                'Лак',
                'Европейский',
                'L-форма'
              ]
            },
            {
              title: 'Monet P',
              category: 'Кухни',
              image: '/paterson/product-cabinet-monet.webp',
              tags: [
                'Декоративная поверхность',
                'Американский',
                'U-форма'
              ]
            }
          ]
        },
        'Мебель': {
          filters: [
            {
              label: 'Сцена',
              options: [
                'Все',
                'Гостиная',
                'Столовая',
                'Спальня',
                'Multi-function'
              ]
            },
            {
              label: 'Тип',
              options: [
                'Все',
                'Хранение',
                'Буфет',
                'Питомцы',
                'Игровая'
              ]
            }
          ],
          items: [
            {
              title: 'Guangyin',
              category: 'Мебель',
              image: '/paterson/product-series-guangyin.webp',
              tags: [
                'Гостиная',
                'Хранение',
                'Современный'
              ]
            },
            {
              title: 'Day Coffee Night Bar',
              category: 'Мебель',
              image: '/paterson/product-series-yuanye.webp',
              tags: [
                'Столовая',
                'Буфет',
                'Легкий люкс'
              ]
            },
            {
              title: 'Питомцы',
              category: 'Мебель',
              image: '/paterson/product-pet-living-space.webp',
              tags: [
                'Multi-function',
                'Питомцы',
                'Future'
              ]
            },
            {
              title: 'Игровая',
              category: 'Мебель',
              image: '/paterson/product-gaming-bedroom.webp',
              tags: [
                'Спальня',
                'Игровая',
                'Future'
              ]
            }
          ]
        },
        'Baier Future Home': {
          filters: [
            {
              label: 'Возраст',
              options: [
                'Все',
                'Малыши',
                'Школьники',
                'Подростки'
              ]
            },
            {
              label: 'Функция',
              options: [
                'Все',
                'Учеба',
                'Хранение',
                'Сон',
                'Рост'
              ]
            }
          ],
          items: [
            {
              title: 'Baier Future Home',
              category: 'Baier Future Home',
              image: '/paterson/product-children-room.webp',
              tags: [
                'Школьники',
                'Учеба',
                'Рост'
              ]
            },
            {
              title: 'Хранение',
              category: 'Baier Future Home',
              image: '/paterson/product-bedroom-system.webp',
              tags: [
                'Подростки',
                'Хранение',
                'Учеба'
              ]
            },
            {
              title: 'Сон',
              category: 'Baier Future Home',
              image: '/paterson/product-water-paint-wardrobe.webp',
              tags: [
                'Малыши',
                'Сон',
                'Рост'
              ]
            }
          ]
        }
      }
    },
    intro: {
      eyebrow: 'Водный шкаф',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      proof: 'Водная отделка, хранение и единый стиль для спальни.',
      imageAlt: 'Paterson',
      captionEyebrow: 'Материалы и процесс показывают отличие продукта.',
      caption: 'Решения для всего дома.'
    },
    systems: {
      eyebrow: 'Системы пространства',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      items: [
        {
          title: 'Система спальни',
          description: 'Шкафы, панели и хранение создают здоровую спальню.',
          image: '/paterson/product-series-tiya.webp',
          tags: [
            'Шкафы',
            'Водная отделка',
            'Спальня'
          ]
        },
        {
          title: 'Гостиная и столовая',
          description: 'Тумбы, витрины и стены показывают единый стиль дома.',
          image: '/paterson/product-series-guangyin.webp',
          tags: [
            'Кухни',
            'Хранение',
            'Готовка'
          ]
        },
        {
          title: 'Естественный дом',
          description: 'Дерево, спокойствие и пропорции создают долговечные пространства.',
          image: '/paterson/product-series-yuanye.webp',
          tags: [
            'Мебель',
            'Гостиная',
            'Единый стиль'
          ]
        },
        {
          title: 'Pet-friendly пространство',
          description: 'Питомцы, уборка и хранение входят в семейный быт.',
          image: '/paterson/product-pet-living-space.webp',
          tags: [
            'Детская',
            'Учеба',
            'Рост'
          ]
        },
        {
          title: 'Gaming-спальня',
          description: 'Отдых, игры, техника и свет планируются вместе.',
          image: '/paterson/product-gaming-bedroom.webp',
          tags: [
            'Витрина',
            'Сценарии',
            'Продажи'
          ]
        },
        {
          title: 'Система шкаф-стена-дверь',
          description: 'Материал, цвет и монтаж связывают шкаф, стену и дверь.',
          image: '/paterson/product-water-paint-wardrobe.webp',
          tags: [
            'Поставка',
            'Монтаж',
            'Сервис'
          ]
        }
      ]
    },
    features: {
      eyebrow: 'Преимущества',
      title: 'Бренд и система',
      description: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      items: [
        {
          icon: 'i-lucide-droplets',
          title: 'Водные',
          description: 'Водный процесс делает экоценность и поверхность запоминающимися.'
        },
        {
          icon: 'i-lucide-layout-grid',
          title: 'Пространства',
          description: 'Прихожая, гостиная, столовая и спальня показывают общий эффект.'
        },
        {
          icon: 'i-lucide-store',
          title: 'Доказательства',
          description: 'Реальные сцены соединяют стиль, экологию и образ жизни.'
        },
        {
          icon: 'i-lucide-factory',
          title: 'Поддержка',
          description: 'Общие стандарты уменьшают разрыв стиля и поставки.'
        }
      ]
    },
    series: {
      eyebrow: 'Серии',
      title: 'Продукты',
      description: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      items: [
        {
          title: 'Серия Tiya',
          subtitle: 'Решения для всего дома.',
          description: 'Мягкие материалы и водная отделка дают премиальное ощущение.',
          image: '/paterson/product-series-tiya.webp',
          meta: 'Системы'
        },
        {
          title: 'Серия Guangyin',
          subtitle: 'Решения для всего дома.',
          description: 'Светлые линии поддерживают гостиную, буфет и хранение.',
          image: '/paterson/product-series-guangyin.webp',
          meta: 'Системы'
        },
        {
          title: 'Серия Yuanye',
          subtitle: 'Решения для всего дома.',
          description: 'Текстура дерева и спокойствие рассказывают о естественном доме.',
          image: '/paterson/product-series-yuanye.webp',
          meta: 'Системы'
        },
        {
          title: 'Gaming-комната',
          subtitle: 'Решения для всего дома.',
          description: 'Хранение, двойное использование и атмосфера подходят молодым семьям.',
          image: '/paterson/product-gaming-bedroom.webp',
          meta: 'Системы'
        }
      ]
    },
    delivery: {
      eyebrow: 'Реализация пространства',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      steps: [
        {
          title: 'Продукты',
          description: 'Планируйте микс по городу, площади и клиентам.'
        },
        {
          title: 'Дизайн',
          description: 'Используйте изображения, выгоды и водную историю едино.'
        },
        {
          title: 'Пространства',
          description: 'Показывайте спальни, гостиные и специальные пространства.'
        },
        {
          title: 'Поддержка',
          description: 'Координируйте стандарты материала, стиля и монтажа.'
        }
      ]
    },
    cta: {
      eyebrow: 'Материалы продукта',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      primary: 'Подробнее',
      secondary: 'Подробнее'
    },
    title: 'Продукты',
    subtitle: 'Решения для всего дома.',
    defaultCategory: 'Все',
    searchPlaceholder: 'Введите',
    empty: 'Нет материалов',
    categories: [
      'Все',
      'Спальня',
      'Кухня',
      'Детская'
    ],
    items: [
      {
        title: 'Водный шкаф',
        summary: 'Решения для всего дома.',
        category: 'Спальня',
        detailPath: '/data/bedroom-system'
      },
      {
        title: 'Эко-кухня',
        summary: 'Решения для всего дома.',
        category: 'Кухня',
        detailPath: '/data/kitchen-system'
      },
      {
        title: 'Baier Future Home',
        summary: 'Решения для всего дома.',
        category: 'Детская',
        detailPath: '/data/children-room'
      }
    ],
    detail: {
      title: 'Продукты',
      category: 'Системы',
      summary: 'Решения для всего дома.',
      description: 'Решения для всего дома.',
      featuresHeading: 'Особенности',
      features: [
        'Водная отделка снижает запах и делает продукт приятным в быту.',
        'Модульная система помогает собрать спальню, кухню или детскую.',
        'Единые материалы и цвета упрощают цельный дизайн дома.'
      ],
      specsHeading: 'Информация',
      specifications: [
        {
          label: 'Системы',
          value: 'Водная отделка и экологичные материалы'
        },
        {
          label: 'Системы',
          value: 'Шкафы, кухни, детские и цельный дом'
        }
      ],
      backLabel: 'Назад',
      ctaHeading: 'Подробнее',
      ctaSubtitle: 'Продукты',
      ctaButton: 'Подробнее'
    }
  },
  articlesPage: {
    title: 'Новости',
    subtitle: 'Новости показывают технологии, события бренда и развитие продуктов.',
    readMore: 'Подробнее',
    empty: 'Нет материалов',
    back: 'Назад',
    imagePlaceholder: 'Введите',
    sectionNavAria: 'Paterson',
    sectionNav: [
      {
        label: 'Новости',
        href: '#updates'
      },
      {
        label: 'События',
        href: '#activities'
      }
    ],
    hero: {
      eyebrow: 'Новости',
      titleLine1: 'Новости бренда',
      titleLine2: 'Эко-дом',
      subtitle: 'Новости показывают технологии, события бренда и развитие продуктов.',
      imageAlt: 'Paterson'
    },
    highlights: [
      {
        value: 'Waterborne',
        label: 'Технологии',
        description: 'Водные покрытия, экоматериалы и системы делают технологию понятной.'
      },
      {
        value: 'Whole Home',
        label: 'Продукты',
        description: 'Спальни, кухни и детские показывают цельные решения для дома.'
      },
      {
        value: 'Franchise',
        label: 'Поддержка',
        description: 'Выставки, кейсы и сервис укрепляют доверие к бренду.'
      }
    ],
    featured: {
      eyebrow: 'Главное',
      title: 'Водная технология получила экспертное признание',
      description: 'Технологии, материалы и покрытие становятся понятным доказательством бренда.'
    },
    updates: {
      eyebrow: 'Короткие новости',
      title: 'Новости'
    },
    activities: {
      eyebrow: 'События',
      title: 'Новости',
      description: 'Новости показывают технологии, события бренда и развитие продуктов.',
      items: [
        {
          id: 1724,
          categoryId: 4,
          category: 'Новости',
          date: '2021-10-08',
          browse: 0,
          image: '/paterson/news-activity-sanya.webp',
          intro: 'Технологии, материалы и покрытие становятся понятным доказательством бренда.',
          slug: 'waterborne-cabinet-sanya-campaign',
          title: 'Кампания с олимпийскими чемпионами усилила водную тему',
          content: [
            'Технологии, материалы и покрытие становятся понятным доказательством бренда.',
            'Выставка показывает продукты, технологии и реальные пространства для партнеров.',
            'Стандарты помогают объяснить экологичность, долговечность и качество пространства.'
          ]
        },
        {
          id: 1722,
          categoryId: 4,
          category: 'Новости',
          date: '2021-10-07',
          browse: 0,
          image: '/paterson/news-activity-luo-xuejuan.webp',
          intro: 'Выставка показывает продукты, технологии и реальные пространства для партнеров.',
          slug: 'luo-xuejuan-renovation-waterborne-cabinet',
          title: 'Вопросы ремонта получают ответ через решения Paterson',
          content: [
            'Выставка показывает продукты, технологии и реальные пространства для партнеров.',
            'Стандарты помогают объяснить экологичность, долговечность и качество пространства.',
            'Технологии, материалы и покрытие становятся понятным доказательством бренда.'
          ]
        },
        {
          id: 91,
          categoryId: 4,
          category: 'Новости',
          date: '2021-04-19',
          browse: 0,
          image: '/paterson/news-activity-pet-ai.webp',
          intro: 'Стандарты помогают объяснить экологичность, долговечность и качество пространства.',
          slug: 'pet-ai-custom-festival',
          title: 'Livestream-кампания сближает бренд и пользователей',
          content: [
            'Стандарты помогают объяснить экологичность, долговечность и качество пространства.',
            'Технологии, материалы и покрытие становятся понятным доказательством бренда.',
            'Выставка показывает продукты, технологии и реальные пространства для партнеров.'
          ]
        }
      ]
    },
    cta: {
      eyebrow: 'Франшиза',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      button: 'Подробнее'
    },
    fallback: [
      {
        id: 4029,
        categoryId: 1,
        category: 'Новости',
        date: '2026-01-12',
        browse: 0,
        image: '/paterson/product-cabinet-intro.webp',
        intro: 'Здоровье, покрытие и долговечность соединены в понятной продуктовой логике.',
        slug: 'waterborne-cabinet-brand',
        title: 'Какую водную марку выбрать: Paterson показывает сильные стороны',
        content: [
          'Здоровье, покрытие и долговечность соединены в понятной продуктовой логике.',
          'Водная технология снижает запахи и делает здоровый дом более конкретным.',
          'Премиальный шкаф требует дизайна, экологичности и надежного использования.'
        ]
      },
      {
        id: 4028,
        categoryId: 1,
        category: 'Новости',
        date: '2026-01-04',
        browse: 0,
        image: '/paterson/news-waterborne-renovation.webp',
        intro: 'Водная технология снижает запахи и делает здоровый дом более конкретным.',
        slug: 'waterborne-renovation',
        title: 'Ремонт без резкого запаха в доме',
        content: [
          'Водная технология снижает запахи и делает здоровый дом более конкретным.',
          'Премиальный шкаф требует дизайна, экологичности и надежного использования.',
          'Paterson соединяет технологии, дизайн и целые пространства для уверенного выбора.'
        ]
      },
      {
        id: 4027,
        categoryId: 1,
        category: 'Новости',
        date: '2025-12-18',
        browse: 0,
        image: '/paterson/news-premium-wardrobe.webp',
        intro: 'Премиальный шкаф требует дизайна, экологичности и надежного использования.',
        slug: 'premium-waterborne-wardrobe',
        title: 'Премиальные шкафы с водной технологией',
        content: [
          'Премиальный шкаф требует дизайна, экологичности и надежного использования.',
          'Paterson соединяет технологии, дизайн и целые пространства для уверенного выбора.',
          'Признание усиливает техническое доказательство водных систем.'
        ]
      },
      {
        id: 4026,
        categoryId: 1,
        category: 'Новости',
        date: '2025-11-06',
        browse: 0,
        image: '/paterson/news-healthy-home-choice.webp',
        intro: 'Paterson соединяет технологии, дизайн и целые пространства для уверенного выбора.',
        slug: 'healthy-home-choice',
        title: 'Здоровый дом с системами Paterson',
        content: [
          'Paterson соединяет технологии, дизайн и целые пространства для уверенного выбора.',
          'Признание усиливает техническое доказательство водных систем.',
          'Выставка делает видимыми продукты, технологии и опыт пространства для партнеров.'
        ]
      },
      {
        id: 4025,
        categoryId: 2,
        category: 'Новости',
        date: '2025-11-05',
        browse: 0,
        image: '/paterson/news-waterborne-tech-certification.webp',
        intro: 'Признание усиливает техническое доказательство водных систем.',
        slug: 'waterborne-technology-certification',
        title: 'Водная технология признана экспертами',
        content: [
          'Признание усиливает техническое доказательство водных систем.',
          'Выставка делает видимыми продукты, технологии и опыт пространства для партнеров.',
          'Здоровье, покрытие и долговечность соединены в понятной продуктовой логике.'
        ]
      },
      {
        id: 4004,
        categoryId: 3,
        category: 'Новости',
        date: '2025-03-17',
        browse: 0,
        image: '/paterson/news-custom-home-expo-2025.webp',
        intro: 'Выставка делает видимыми продукты, технологии и опыт пространства для партнеров.',
        slug: 'custom-home-expo-2025',
        title: 'Paterson показывает водные пространства на выставке',
        content: [
          'Выставка делает видимыми продукты, технологии и опыт пространства для партнеров.',
          'Здоровье, покрытие и долговечность соединены в понятной продуктовой логике.',
          'Водная технология снижает запахи и делает здоровый дом более конкретным.'
        ]
      }
    ]
  },
  contactPage: {
    seo: {
      title: 'Франшиза',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      keywords: 'Paterson, эко дом, водная технология, франшиза'
    },
    title: 'Франшиза',
    subtitle: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
    sectionNavAria: 'Paterson',
    sectionNav: [
      {
        label: 'Возможность',
        href: '#opportunity'
      },
      {
        label: 'Поддержка',
        href: '#support'
      },
      {
        label: 'Процесс',
        href: '#process'
      },
      {
        label: 'Заявка',
        href: '#inquiry'
      }
    ],
    hero: {
      eyebrow: 'Франшиза',
      titleLine1: 'Поддержка франшизы',
      titleLine2: 'Эко-дом',
      subtitle: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      primaryCta: 'Отправить заявку',
      imageAlt: 'Paterson',
      metrics: [
        {
          value: '2001',
          label: 'Развитие бренда с 2001 года'
        },
        {
          value: '002631',
          label: 'Биржевой код Der Future'
        },
        {
          value: 'Full path',
          label: 'Поддержка продукта, магазина и работы'
        }
      ]
    },
    opportunity: {
      eyebrow: 'Возможность',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      imageAlt: 'Paterson'
    },
    proof: {
      items: [
        {
          value: 'Waterborne',
          label: 'Здоровье',
          description: 'Водные технологии и wellness создают ясную память бренда.'
        },
        {
          value: 'Whole home',
          label: 'Продукты',
          description: 'Шкафы, кухни и детские показывают полный дом.'
        },
        {
          value: 'HQ support',
          label: 'Поддержка',
          description: 'Локация, магазин, обучение и инструменты облегчают старт.'
        }
      ]
    },
    support: {
      eyebrow: 'Поддержка центра',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      items: [
        {
          icon: 'i-lucide-award',
          title: 'Бренд',
          description: 'Оставьте контакты. Мы свяжемся.'
        },
        {
          icon: 'i-lucide-layout-grid',
          title: 'Продукты',
          description: 'Оставьте контакты. Мы свяжемся.'
        },
        {
          icon: 'i-lucide-factory',
          title: 'Поддержка',
          description: 'Оставьте контакты. Мы свяжемся.'
        },
        {
          icon: 'i-lucide-pencil-ruler',
          title: 'Дизайн',
          description: 'Оставьте контакты. Мы свяжемся.'
        },
        {
          icon: 'i-lucide-megaphone',
          title: 'Маркетинг',
          description: 'Оставьте контакты. Мы свяжемся.'
        },
        {
          icon: 'i-lucide-chart-no-axes-combined',
          title: 'Работа',
          description: 'Оставьте контакты. Мы свяжемся.'
        }
      ]
    },
    process: {
      eyebrow: 'Процесс сотрудничества',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.',
      steps: [
        {
          title: 'Контакты',
          description: 'Оставьте контакт и целевой город.'
        },
        {
          title: 'Поддержка',
          description: 'Консультант объяснит бренд, продукты, политику и поддержку.'
        },
        {
          title: 'Доказательства',
          description: 'Посетите центр или образцовые магазины с водными пространствами.'
        },
        {
          title: 'Магазин',
          description: 'Обсудите местный рынок, магазин и инвестиции.'
        },
        {
          title: 'Процесс',
          description: 'Подтвердите зону, план магазина и поддержку.'
        },
        {
          title: 'Дизайн',
          description: 'Подготовьте дизайн, образцы, команду и открытие.'
        },
        {
          title: 'Открытие',
          description: 'Получите кампании, материалы и помощь с первыми клиентами.'
        },
        {
          title: 'Ведение',
          description: 'Продолжайте с маркетингом, обучением и новыми продуктами.'
        }
      ]
    },
    inquiry: {
      eyebrow: 'Отправить заявку',
      title: 'Поддержка франшизы',
      description: 'Партнеры получают поддержку по продукту, магазину, маркетингу и работе.'
    },
    infoTitle: 'Франшиза',
    hours: '09:00 - 18:00',
    labels: {
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      hours: '09:00 - 18:00'
    }
  },
  designSystemPage: {
    seo: {
      title: 'Эко-дом',
      description: 'Визуальная система Paterson для экологичного дома и франшизы.',
      keywords: 'Paterson, эко дом, водная технология, франшиза'
    },
    title: 'Эко-дом',
    subtitle: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
    sections: {
      philosophy: 'Принципы',
      colors: 'Цвета',
      typography: 'Типографика',
      layout: 'Макет',
      components: 'Элементы',
      interaction: 'Интеракция'
    },
    philosophy: {
      brandTitle: 'Тон бренда',
      brand: 'Paterson объединяет водные материалы, здоровый дом и поддержку франчайзи.',
      directionTitle: 'Дизайн-направление',
      direction: 'Шкафы, стены, двери и комнаты показаны как понятная система для дома.',
      keywords: [
        'Экологичный дом',
        'Водная технология',
        'Франшиза',
        'Системные продукты'
      ]
    },
    colorIntro: 'Цвета соединяют теплый дом, красный акцент и доверие.',
    typographyIntro: 'Типографика помогает быстро читать продуктовые блоки.',
    layoutGrid: 'Сетка держит карточки, секции и формы ровными.',
    layoutWhitespace: 'Воздух вокруг блоков делает страницу легче.',
    samples: {
      hero: 'Крупный заголовок для первого экрана.',
      h1: 'Заголовок страницы с ясной темой.',
      h2: 'Заголовок секции для сканирования.',
      h3: 'Карточный заголовок для кратких деталей.'
    },
    preview: {
      primaryButton: 'Основная',
      secondaryButton: 'Вторичная',
      ghostButton: 'Контурная',
      smallButton: 'Малая',
      largeButton: 'Большая',
      cardTitle: 'Эко-дом',
      cardDescription: 'Карточка описывает материал, сцену и выгоду.',
      cardAltTitle: 'Эко-дом',
      cardAltDescription: 'Альтернативная карточка подходит для акцента или кейса.',
      heroTitle: 'Эко-дом',
      heroSubtitle: 'Эко-дом',
      heroCta: 'Подробнее'
    }
  },
  legal: {
    eyebrow: 'Paterson',
    lastUpdated: 'Обновлено',
    privacy: {
      seo: {
        title: 'Конфиденциальность и условия.',
        description: 'Конфиденциальность и условия.',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      },
      title: 'Конфиденциальность и условия.',
      description: 'Здесь кратко описаны конфиденциальность, cookie и условия сайта.',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: 'Конфиденциальность и условия.',
          paragraphs: [
            'Информация о конфиденциальности и условиях сайта.',
            'Информация о конфиденциальности и условиях сайта.'
          ]
        }
      ]
    },
    terms: {
      seo: {
        title: 'Конфиденциальность и условия.',
        description: 'Конфиденциальность и условия.',
        keywords: 'Paterson, эко дом, водная технология, франшиза'
      },
      title: 'Конфиденциальность и условия.',
      description: 'Здесь кратко описаны конфиденциальность, cookie и условия сайта.',
      updatedAt: '2026-07-01',
      sections: [
        {
          title: 'Конфиденциальность и условия.',
          paragraphs: [
            'Информация о конфиденциальности и условиях сайта.',
            'Информация о конфиденциальности и условиях сайта.'
          ]
        }
      ]
    }
  }
};

export default defineI18nLocale(() => starter);
