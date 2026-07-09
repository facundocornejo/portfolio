import type { Locale } from '@i18n/store';

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
  github?: string;
  demo?: string;
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

    image: '/images/placeholder.svg',
    github: undefined,
    demo: 'https://tfi-pet-adoption-front.vercel.app/',
  },
  {
    id: 'azopardo',
    title: {
      es: 'Azopardo — Gestión de Club',
      en: 'Azopardo — Club Management',
    },
    role: {
      es: 'Frontend Developer en equipo (Angular 18)',
      en: 'Frontend Developer in a team (Angular 18)',
    },
    description: {
      es: 'Plataforma de gestión para club deportivo. Proyecto profesional en equipo en Lindigo.',
      en: 'Management platform for a sports club. Professional team project at Lindigo.',
    },
    stack: ['Angular 18', 'TypeScript', 'Tailwind CSS', 'RxJS', 'jsPDF'],
    highlights: {
      es: [
        'Experiencia profesional en empresa',
        'Portal de socios + panel admin',
        'Reportes PDF, gestión de pagos y actividades',
      ],
      en: [
        'Professional work experience',
        'Member portal + admin panel',
        'PDF reports, payments & activities management',
      ],
    },

    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'beastmotor',
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
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Cloudinary',
      'Tailwind CSS',
    ],
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

    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'flight-bot',
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

    image: '/images/placeholder.svg',
    github: 'https://github.com/facundocornejo/flightbot',
  },
];
