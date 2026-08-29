import type { Locale } from '@i18n/store';

/** Una captura o animacion del proyecto. La primera del array es la portada. */
export interface ProjectMedia {
  /** Ruta bajo /media/<proyecto>/. Los animados son WebP, no GIF. */
  src: string;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
  /** Marca visualmente las piezas en movimiento. */
  animated?: boolean;
}

export interface Project {
  id: string;
  title: Record<Locale, string>;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  stack: string[];
  highlights: Record<Locale, string[]>;
  image: string;
  visible?: boolean;
  featured?: boolean;
  inDevelopment?: boolean;
  github?: string;
  demo?: string;
  /**
   * Por que no hay app publica. Se muestra como texto apagado en lugar del
   * boton de demo: explicar es mejor que dejar un boton muerto o un hueco.
   */
  demoNote?: Record<Locale, string>;
  media?: ProjectMedia[];
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: 'supleya',
    featured: true,
    caseStudySlug: 'ultra-erp',
    title: { es: 'ULTRA ERP', en: 'ULTRA ERP' },
    role: {
      es: 'Desarrollo end-to-end: relevamiento, arquitectura, RAG y UI',
      en: 'End-to-end development: discovery, architecture, RAG, and UI',
    },
    description: {
      es: 'Sistema ERP completo para SupleYA con chatbot AI (RAG), consultas en lenguaje natural y generador de posts para redes sociales.',
      en: 'Full ERP system for SupleYA with AI chatbot (RAG), natural language queries, and social media post generator.',
    },
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Gemini AI',
      'pgvector',
      'HuggingFace',
    ],
    highlights: {
      es: [
        'Chatbot RAG con Gemini 2.0 Flash',
        'Consultas en lenguaje natural al dashboard',
        'Generador de posts para redes sociales',
      ],
      en: [
        'RAG chatbot with Gemini 2.0 Flash',
        'Natural language dashboard queries',
        'Social media post generator',
      ],
    },

    demo: 'https://ultra-suplementos.vercel.app/login',
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'adoptly',
    caseStudySlug: 'adoptly',
    title: {
      es: 'Adoptly — Plataforma de Adopción Animal',
      en: 'Adoptly — Animal Adoption Platform',
    },
    role: {
      es: 'Fullstack: frontend Clean Architecture + API REST',
      en: 'Fullstack: Clean Architecture frontend + REST API',
    },
    description: {
      es: 'Plataforma fullstack para organizaciones de rescate animal. En producción, usada por 4 ONGs de Paraná.',
      en: 'Fullstack platform for animal rescue organizations. In production, used by 4 NGOs in Paraná.',
    },
    stack: [
      'Next.js',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    highlights: {
      es: [
        'En producción con 4 ONGs reales de Paraná',
        'Clean Architecture en frontend',
        'API REST con Swagger, JWT auth, tests con Jest y k6',
      ],
      en: [
        'In production with 4 real NGOs in Paraná',
        'Clean Architecture on frontend',
        'REST API with Swagger, JWT auth, Jest & k6 tests',
      ],
    },

    media: [
      {
        src: '/media/adoptly/catalogo.webp',
        alt: {
          es: 'Catálogo de animales en adopción con su estado',
          en: 'Catalog of animals up for adoption with their status',
        },
        caption: {
          es: 'El catálogo con los animales reales de las ONGs y su estado: disponible, en proceso o en tránsito.',
          en: 'The catalog with the NGOs real animals and their status: available, in process or in foster care.',
        },
      },
      {
        src: '/media/adoptly/ficha.webp',
        alt: {
          es: 'Ficha de un animal con su historia, salud y convivencia',
          en: 'Animal profile with its story, health record and cohabitation info',
        },
        caption: {
          es: 'La ficha modela lo que una ONG necesita contar de verdad: historia, castración, vacunación y con quién convive.',
          en: 'The profile models what an NGO actually needs to tell: story, neutering, vaccination and who it lives well with.',
        },
      },
      {
        src: '/media/adoptly/home.webp',
        alt: {
          es: 'Portada de Adoptly con el buscador y los filtros por especie y tamaño',
          en: 'Adoptly homepage with the search box and filters by species and size',
        },
      },
    ],
    image: '/images/placeholder.svg',
    github: undefined,
    demo: 'https://tfi-pet-adoption-front.vercel.app/',
  },
  {
    id: 'beastmotor',
    caseStudySlug: 'beast-motors',
    title: {
      es: 'Beast Motors — Concesionaria',
      en: 'Beast Motors — Car Dealership',
    },
    role: {
      es: 'Freelance: desarrollo completo + SEO',
      en: 'Freelance: full build + SEO',
    },
    description: {
      es: 'Catálogo digital para concesionaria de autos y motos. SEO optimizado, mobile-first, CTA a WhatsApp.',
      en: 'Digital catalog for a car and motorcycle dealership. SEO optimized, mobile-first, WhatsApp CTA.',
    },
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Cloudinary', 'Tailwind CSS'],
    highlights: {
      es: [
        'Proyecto freelance con cliente real',
        'SEO: Schema.org Vehicle, sitemap auto, ISR',
        'Admin panel con gestión de inventario',
      ],
      en: [
        'Freelance project with real client',
        'SEO: Schema.org Vehicle, auto sitemap, ISR',
        'Admin panel with inventory management',
      ],
    },

    demo: 'https://www.beastmotors.com.ar/',
    media: [
      {
        src: '/media/beast-motors/catalogo.webp',
        alt: {
          es: 'Catalogo de Beast Motors con autos usados y sus precios',
          en: 'Beast Motors catalog showing used cars and their prices',
        },
        caption: {
          es: 'El catalogo con el filtro de usados. Los precios conviven en dolares y pesos: ordenarlos obligo a convertirlos a una base comun.',
          en: 'The catalog filtered to used cars. Prices coexist in dollars and pesos: sorting them required converting to a common base.',
        },
      },
      {
        src: '/media/beast-motors/filtros.webp',
        animated: true,
        alt: {
          es: 'Los filtros del catalogo cambiando entre todos, motos, 0km y usados',
          en: 'Catalog filters switching between all, motorcycles, 0km and used',
        },
        caption: {
          es: 'Filtrado por tipo, de 28 vehiculos a 9 motos, 2 cero kilometro y 17 usados.',
          en: 'Filtering by type, from 28 vehicles down to 9 motorcycles, 2 brand-new and 17 used.',
        },
      },
      {
        src: '/media/beast-motors/ficha-vehiculo.webp',
        alt: {
          es: 'Ficha de un vehiculo con precio, datos y opciones de financiacion',
          en: 'Vehicle detail page with price, specs and financing options',
        },
        caption: {
          es: 'La ficha cierra en un boton de WhatsApp con el mensaje ya armado: modelo, precio y link de la pagina.',
          en: 'The detail page ends in a WhatsApp button with the message pre-built: model, price and page link.',
        },
      },
      {
        src: '/media/beast-motors/home.webp',
        alt: {
          es: 'Portada del sitio de Beast Motors',
          en: 'Beast Motors homepage',
        },
      },
    ],
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'punto-natural',
    caseStudySlug: 'punto-natural',
    title: {
      es: 'Punto Natural — POS/ERP',
      en: 'Punto Natural — POS/ERP',
    },
    role: {
      es: 'Freelance: diseño y desarrollo end-to-end',
      en: 'Freelance: end-to-end design and development',
    },
    description: {
      es: 'Punto de venta y gestión para un comercio local. Backend en Go con el frontend React embebido en el binario. Sin demo pública: corre en la infraestructura del cliente, hoy en staging.',
      en: 'Point of sale and management system for a local business. Go backend with the React frontend embedded in the binary. No public demo: it runs on the client infrastructure, currently in staging.',
    },
    stack: ['Go', 'PostgreSQL', 'React', 'Docker'],
    highlights: {
      es: [
        'Stock como ledger: historial auditable de movimientos',
        'Transacciones atómicas en PostgreSQL',
        'Deploy en VPS con Docker',
      ],
      en: [
        'Stock as a ledger: auditable movement history',
        'Atomic transactions in PostgreSQL',
        'Deployed on a VPS with Docker',
      ],
    },

    demoNote: {
      es: 'Sin demo publica: corre en la infraestructura del cliente',
      en: 'No public demo: it runs on the client infrastructure',
    },
    media: [
      {
        src: '/media/punto-natural/pos.webp',
        alt: { es: 'Pantalla de punto de venta', en: 'Point of sale screen' },
        caption: {
          es: 'El POS. Cobrar es una transaccion unica: si algo falla, no queda media venta.',
          en: 'The POS. Charging is a single transaction: if anything fails, no half sale is left behind.',
        },
      },
      {
        src: '/media/punto-natural/responsive.webp',
        animated: true,
        alt: {
          es: 'La misma pantalla a 1920, 1366, 1024 y 768 pixeles de ancho',
          en: 'The same screen at 1920, 1366, 1024 and 768 pixels wide',
        },
        caption: {
          es: 'La misma pantalla a cuatro anchos. El sistema se usa en el mostrador, no en un escritorio.',
          en: 'The same screen at four widths. The system runs on a shop counter, not a desk.',
        },
      },
      {
        src: '/media/punto-natural/clientes.webp',
        alt: {
          es: 'Gestion de clientes y fiado',
          en: 'Customer and store-credit management',
        },
        caption: {
          es: 'Fiado: el saldo corrido se calcula en SQL y los abonos descuentan de forma atomica.',
          en: 'Store credit: the running balance is computed in SQL and payments deduct atomically.',
        },
      },
      {
        src: '/media/punto-natural/stock.webp',
        alt: {
          es: 'Recepcion de mercaderia y control de stock',
          en: 'Goods receipt and stock control',
        },
      },
      {
        src: '/media/punto-natural/auditoria.webp',
        alt: {
          es: 'Pantalla de auditoria de acciones',
          en: 'Action audit screen',
        },
        caption: {
          es: 'Toda mutacion queda registrada en la misma transaccion que la modifica.',
          en: 'Every mutation is logged in the same transaction that performs it.',
        },
      },
      {
        src: '/media/punto-natural/facturas.webp',
        alt: {
          es: 'Listado de documentos fiscales',
          en: 'Fiscal documents list',
        },
      },
    ],
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'rodak',
    inDevelopment: true,
    caseStudySlug: 'rodak',
    title: {
      es: 'Rodak — Rescate y migración de e-commerce',
      en: 'Rodak — E-commerce rescue and migration',
    },
    role: {
      es: 'Freelance: auditoría de seguridad, backups y migración',
      en: 'Freelance: security audit, backups, and migration',
    },
    description: {
      es: 'Tienda WooCommerce con 1.186 pedidos reales que venía de un compromiso de seguridad. Auditoría, ledger de vulnerabilidades con estados terminales y un ensayo de restore completo que probó la migración antes de hacerla.',
      en: 'WooCommerce store with 1,186 real orders coming off a security compromise. Audit, vulnerability ledger with terminal states, and a full restore rehearsal that proved the migration before doing it.',
    },
    stack: ['WordPress', 'WooCommerce', 'MySQL', 'WP-CLI', 'Docker', 'Bash'],
    highlights: {
      es: [
        'Ensayo de restore con 14/14 checksums y 144/144 tablas verificadas',
        'Ledger de seguridad: un componente solo cierra con estado terminal',
        'Smoke test con controles positivos y negativos, no solo un 200',
      ],
      en: [
        'Restore rehearsal with 14/14 checksums and 144/144 tables verified',
        'Security ledger: a component only closes with a terminal state',
        'Smoke test with positive and negative controls, not just a 200',
      ],
    },

    demoNote: {
      es: 'Rediseno en curso, proximamente',
      en: 'Redesign in progress, coming soon',
    },
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'liga-al-touch',
    caseStudySlug: 'liga-al-touch',
    inDevelopment: true,
    title: {
      es: 'Liga Al Touch — Fútbol Amateur',
      en: 'Liga Al Touch — Amateur Football',
    },
    role: {
      es: 'Proyecto freelance: desarrollo fullstack',
      en: 'Freelance project: fullstack development',
    },
    description: {
      es: 'Plataforma de gestión para una liga de fútbol amateur.',
      en: 'Management platform for an amateur football league.',
    },
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Better Auth'],
    highlights: {
      es: [
        'Next.js + TypeScript de punta a punta',
        'Autenticación con Better Auth sobre PostgreSQL',
      ],
      en: [
        'Next.js + TypeScript end to end',
        'Authentication with Better Auth on PostgreSQL',
      ],
    },

    demoNote: {
      es: 'Todavia sin desplegar: sale con la proxima temporada de la liga',
      en: 'Not deployed yet: it goes live with the league next season',
    },
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'dobleg',
    caseStudySlug: 'dobleg',
    title: {
      es: 'Dobleg Premoldeados — Sitio corporativo',
      en: 'Dobleg Premoldeados — Corporate website',
    },
    role: {
      es: 'Freelance: rebranding, desarrollo y SEO',
      en: 'Freelance: rebranding, development, and SEO',
    },
    description: {
      es: 'Reescritura completa del sitio de una fábrica de premoldeados de Paraná: estático en Astro, sin framework de cliente, desplegado en Cloudflare Pages. En producción.',
      en: 'Full rewrite of the website of a precast concrete manufacturer in Paraná: static Astro, no client framework, deployed on Cloudflare Pages. Live in production.',
    },
    stack: ['Astro', 'Tailwind CSS', 'Cloudflare Pages', 'SEO'],
    highlights: {
      es: [
        'En producción, con dominio propio y Search Console dado de alta',
        'Cero JavaScript de framework en el cliente',
        'Sitemap automático y estructura pensada para búsqueda local',
      ],
      en: [
        'Live in production, with its own domain and Search Console set up',
        'Zero framework JavaScript on the client',
        'Automatic sitemap and structure built for local search',
      ],
    },

    media: [
      {
        src: '/media/dobleg/home.webp',
        alt: {
          es: 'Portada del sitio de Dobleg Premoldeados',
          en: 'Dobleg Premoldeados homepage',
        },
        caption: {
          es: 'Tema claro a proposito: el publico abre el link desde WhatsApp, a plena luz del dia.',
          en: 'Deliberately light themed: the audience opens the link from WhatsApp, in broad daylight.',
        },
      },
      {
        src: '/media/dobleg/productos.webp',
        alt: {
          es: 'Catalogo de productos de hormigon premoldeado',
          en: 'Precast concrete product catalog',
        },
      },
    ],
    image: '/images/placeholder.svg',
    github: undefined,
    demo: 'https://www.doblegpremoldeados.com.ar/',
  },
  {
    id: 'infra-coolify',
    caseStudySlug: 'infra-coolify',
    title: {
      es: 'Infraestructura propia — VPS y Coolify',
      en: 'My own infrastructure — VPS and Coolify',
    },
    role: {
      es: 'Proyecto personal: administración, hardening y deploys',
      en: 'Personal project: administration, hardening, and deploys',
    },
    description: {
      es: 'Mi propio servidor con Coolify como PaaS, para deployar mis proyectos sin depender de plataformas ajenas. Incluye un casi-lockout por firewall, su causa raíz y la solución correcta.',
      en: 'My own server with Coolify as a PaaS, to deploy my projects without depending on someone else\u2019s platform. Includes a near-lockout caused by a firewall, its root cause, and the correct fix.',
    },
    stack: [
      'Linux',
      'Docker',
      'Coolify',
      'iptables',
      'Cloudflare',
      "Let's Encrypt",
    ],
    highlights: {
      es: [
        'Puertos de Docker cerrados con la cadena DOCKER-USER, sin riesgo de lockout',
        'HTTPS con Let\u2019s Encrypt y dashboard detrás de dominio propio',
        'Runbook de deploy por proyecto, con incidentes documentados',
      ],
      en: [
        'Docker-published ports closed via the DOCKER-USER chain, with no lockout risk',
        'HTTPS with Let\u2019s Encrypt and the dashboard behind its own domain',
        'Per-project deploy runbook, with incidents documented',
      ],
    },

    demoNote: {
      es: 'Infraestructura privada, sin acceso publico',
      en: 'Private infrastructure, no public access',
    },
    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'flight-bot',
    caseStudySlug: 'flight-bot',
    title: {
      es: 'Bot de Vuelos — Price Alert',
      en: 'Flight Price Bot — Price Alert',
    },
    role: {
      es: 'Proyecto personal: diseño y desarrollo completo',
      en: 'Personal project: full design and development',
    },
    description: {
      es: 'Bot que monitorea precios de vuelos y envía alertas por Telegram. Corre cada 6h en GitHub Actions — $0/mes.',
      en: 'Bot that monitors flight prices and sends Telegram alerts. Runs every 6h on GitHub Actions — $0/month.',
    },
    stack: ['Python', 'httpx', 'GitHub Actions', 'Telegram Bot API'],
    highlights: {
      es: [
        'Ingeniería inversa de APIs de aerolíneas',
        'Arquitectura de adaptadores extensible',
        'Costo total: $0/mes',
      ],
      en: [
        'Reverse-engineered airline APIs',
        'Extensible adapter architecture',
        'Total cost: $0/month',
      ],
    },

    demo: 'https://facundocornejo.github.io/flightbot/',
    media: [
      {
        src: '/media/flight-bot/dashboard.webp',
        alt: {
          es: 'Dashboard del bot con ocho rutas y sus mejores precios',
          en: 'Bot dashboard showing eight routes and their best prices',
        },
        caption: {
          es: 'Datos reales: ocho rutas monitoreadas y 2.751 alertas en los ultimos 90 dias.',
          en: 'Live data: eight monitored routes and 2,751 alerts over the last 90 days.',
        },
      },
      {
        src: '/media/flight-bot/alertas.webp',
        alt: {
          es: 'Tabla de alertas con precio, aerolinea y escalas',
          en: 'Alerts table with price, airline and stops',
        },
      },
    ],
    image: '/images/placeholder.svg',
    github: 'https://github.com/facundocornejo/flightbot',
  },
];
