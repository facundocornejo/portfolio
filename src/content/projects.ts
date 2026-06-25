import type { Locale } from '@i18n/store';

export interface Project {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  stack: string[];
  highlights: Record<Locale, string[]>;
  image: string;
  visible?: boolean;
  featured?: boolean;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'supleya',
    featured: true,
    title: { es: 'ULTRA ERP', en: 'ULTRA ERP' },
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
    id: 'tfi',
    title: {
      es: 'TFI — Plataforma de Adopción Animal',
      en: 'TFI — Animal Adoption Platform',
    },
    description: {
      es: 'Plataforma fullstack para organizaciones de rescate animal de Paraná. Trabajo de campo con 4 organizaciones reales.',
      en: 'Fullstack platform for animal rescue organizations in Paraná. Fieldwork with 4 real organizations.',
    },
    stack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    highlights: {
      es: [
        'Usuarios reales: 4 organizaciones de rescate',
        'Clean Architecture en frontend',
        'API REST con Swagger, JWT auth, tests con Jest y k6',
      ],
      en: [
        'Real users: 4 rescue organizations',
        'Clean Architecture on frontend',
        'REST API with Swagger, JWT auth, Jest & k6 tests',
      ],
    },

    image: '/images/placeholder.svg',
    github: undefined,
  },
  {
    id: 'azopardo',
    title: {
      es: 'Azopardo — Gestión de Club',
      en: 'Azopardo — Club Management',
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
    id: 'flight-bot',
    title: {
      es: 'Bot de Vuelos — Price Alert',
      en: 'Flight Price Bot — Price Alert',
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
  {
    id: 'beastmotor',
    visible: false,
    title: {
      es: 'BeastMotor — Concesionaria',
      en: 'BeastMotor — Car Dealership',
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
];
