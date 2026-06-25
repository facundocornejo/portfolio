import type { Locale } from '@i18n/store';

export interface CaseStudySection {
  heading: Record<Locale, string>;
  body?: Record<Locale, string>;
  bullets?: Record<Locale, string[]>;
}

export interface CaseStudy {
  /** URL slug under /projects/ */
  slug: string;
  /** Links back to the project in projects.ts (by id) */
  projectId: string;
  title: Record<Locale, string>;
  tagline: Record<Locale, string>;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ultra-erp',
    projectId: 'supleya',
    title: { es: 'ULTRA ERP', en: 'ULTRA ERP' },
    tagline: {
      es: 'Un ERP a medida para SupleYA con un asistente de IA que responde sobre el negocio en lenguaje natural.',
      en: 'A custom ERP for SupleYA with an AI assistant that answers questions about the business in natural language.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'SupleYA es un comercio de suplementos donde trabajé en la operación diaria — ventas, atención al cliente y contabilidad. Estar adentro de la operación me permitió ver de primera mano dónde se perdía tiempo y dónde faltaba información para decidir. De ese relevamiento funcional nació ULTRA ERP.',
          en: 'SupleYA is a supplements retailer where I worked in day-to-day operations — sales, customer service, and accounting. Being inside the operation let me see firsthand where time was lost and where information was missing to make decisions. ULTRA ERP grew out of that functional analysis.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'La gestión estaba repartida entre planillas y procesos manuales: stock, ventas, compras y caja vivían en lugares separados. Consultar algo tan simple como el stock disponible de un producto tomaba minutos, y no había una vista unificada para entender el estado del negocio ni para apoyar las decisiones del día a día.',
          en: 'Management was scattered across spreadsheets and manual processes: stock, sales, purchases, and cash lived in separate places. Answering something as simple as the available stock of a product took minutes, and there was no unified view to understand the state of the business or support day-to-day decisions.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'ERP modular con Next.js y Supabase (Auth, Postgres y RLS). Elegí RLS para resolver el acceso por rol directo en la base, sin reimplementar permisos en cada endpoint.',
            'Asistente con RAG: usé pgvector para indexar el contexto del negocio como embeddings y Gemini 2.0 Flash como modelo. La decisión de fondo fue que el dueño pudiera preguntar en lenguaje natural ("¿cuánto stock me queda de X?") sin saber SQL ni navegar reportes.',
            'Generador de posts para redes sociales con IA, para sacar el marketing del terreno manual.',
            'Dashboards con shadcn/ui y Recharts, y reportes exportables con React PDF.',
            'Suite de tests con Vitest, Testing Library y pruebas end-to-end.',
          ],
          en: [
            'Modular ERP with Next.js and Supabase (Auth, Postgres, and RLS). I chose RLS to handle role-based access directly in the database, instead of re-implementing permissions on every endpoint.',
            'RAG assistant: I used pgvector to index the business context as embeddings and Gemini 2.0 Flash as the model. The core decision was letting the owner ask in natural language ("how much stock of X do I have left?") without knowing SQL or navigating reports.',
            'AI-powered social media post generator, to move marketing out of manual work.',
            'Dashboards with shadcn/ui and Recharts, and exportable reports with React PDF.',
            'Test suite with Vitest, Testing Library, and end-to-end tests.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Desarrollo end-to-end: hice el relevamiento funcional, definí la arquitectura, construí el frontend y el backend, integré la capa de IA (RAG) y me ocupé del deploy. Traducir las necesidades operativas que ya conocía a features concretas fue la parte que más diferencia hizo.',
          en: 'End-to-end development: I did the functional analysis, defined the architecture, built the frontend and backend, integrated the AI layer (RAG), and handled the deployment. Translating the operational needs I already knew into concrete features is what made the biggest difference.',
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'Las consultas de stock pasaron de minutos a segundos y la operación quedó centralizada en un solo lugar. El asistente de IA convirtió preguntas de negocio en respuestas inmediatas, sin pasar por planillas.',
          en: 'Stock queries went from minutes to seconds and the operation was centralized in one place. The AI assistant turned business questions into immediate answers, with no spreadsheets in between.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'Diseñar un RAG útil sobre datos de un negocio real: qué indexar y cómo darle contexto al modelo.',
            'Modelar permisos multi-rol con RLS en Postgres en lugar de en la aplicación.',
            'El mayor valor técnico vino de entender el dominio antes de escribir código.',
          ],
          en: [
            'Designing a useful RAG over a real business’s data: what to index and how to give the model context.',
            'Modeling multi-role permissions with RLS in Postgres instead of in the application.',
            'The biggest technical value came from understanding the domain before writing code.',
          ],
        },
      },
    ],
  },
  {
    slug: 'adoptly',
    projectId: 'adoptly',
    title: {
      es: 'Adoptly — Plataforma de Adopción Animal',
      en: 'Adoptly — Animal Adoption Platform',
    },
    tagline: {
      es: 'Una plataforma fullstack para organizaciones de rescate animal de Paraná, deployada y usada por 4 ONGs reales.',
      en: 'A fullstack platform for animal rescue organizations in Paraná, deployed and used by 4 real NGOs.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Adoptly nació como mi Trabajo Final Integrador en la UTN FR Paraná, pero con una premisa clara: que lo usaran organizaciones reales. Hice trabajo de campo con 4 ONGs de rescate animal de la ciudad para entender cómo gestionaban las adopciones.',
          en: 'Adoptly started as my final project at UTN FR Paraná, but with a clear premise: that real organizations would use it. I did fieldwork with 4 animal rescue NGOs in the city to understand how they managed adoptions.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'Las ONGs gestionaban las adopciones por redes sociales y WhatsApp, sin una plataforma central. Era difícil mostrar a los animales de forma ordenada, recibir y seguir solicitudes, y dar visibilidad a los casos de éxito y las donaciones.',
          en: 'The NGOs managed adoptions through social media and WhatsApp, with no central platform. It was hard to showcase animals in an organized way, receive and track applications, and give visibility to success stories and donations.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'Frontend en React con Clean Architecture (domain, application, infrastructure, presentation, shared). Separé el dominio del framework para que la lógica fuera testeable y la base mantenible más allá del TFI.',
            'API REST con Node.js y Express, Prisma como ORM y PostgreSQL (Supabase). Modelos para organizaciones, administradores, animales y casos de éxito.',
            'Autenticación con JWT y bcrypt, validación de formularios con React Hook Form + Zod, e imágenes en Cloudinary.',
            'Documentación de la API con Swagger.',
            'Testing serio: Jest + Supertest, pruebas de carga con k6 y una auditoría de seguridad.',
          ],
          en: [
            'React frontend with Clean Architecture (domain, application, infrastructure, presentation, shared). I separated the domain from the framework so the logic was testable and the codebase maintainable beyond the project.',
            'REST API with Node.js and Express, Prisma as ORM, and PostgreSQL (Supabase). Models for organizations, administrators, animals, and success stories.',
            'JWT and bcrypt authentication, form validation with React Hook Form + Zod, and images on Cloudinary.',
            'API documentation with Swagger.',
            'Serious testing: Jest + Supertest, load testing with k6, and a security audit.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Trabajé fullstack: relevamiento con las ONGs, frontend con Clean Architecture y la API REST completa. El frente y el back se deployaron por separado (Vercel y Render).',
          en: 'I worked fullstack: requirements gathering with the NGOs, the Clean Architecture frontend, and the full REST API. Frontend and backend were deployed separately (Vercel and Render).',
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'La plataforma quedó deployada y en uso por 4 organizaciones de rescate reales de Paraná, con un flujo ordenado para publicar animales y gestionar solicitudes de adopción.',
          en: 'The platform ended up deployed and in use by 4 real rescue organizations in Paraná, with an organized flow to publish animals and manage adoption requests.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'Aplicar Clean Architecture en un frontend real y ver el pago en mantenibilidad y tests.',
            'Construir con usuarios reales obliga a priorizar lo que de verdad importa.',
            'Testing de carga y auditoría de seguridad como parte del proceso, no como un extra.',
          ],
          en: [
            'Applying Clean Architecture in a real frontend and seeing the payoff in maintainability and tests.',
            'Building with real users forces you to prioritize what truly matters.',
            'Load testing and a security audit as part of the process, not an afterthought.',
          ],
        },
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
