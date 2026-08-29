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
        heading: {
          es: 'La restricción que definió el diseño',
          en: 'The constraint that shaped the design',
        },
        body: {
          es: 'El pedido del dueño incluía una condición que parecía menor y terminó ordenando toda la arquitectura: sin costos mensuales de infraestructura. Eso descartó contratar una base vectorial aparte para el asistente, así que los embeddings viven en el mismo Postgres del ERP con la extensión de vectores; y descartó los modelos pagos, así que la capa de IA se armó sobre APIs con capa gratuita. La restricción de presupuesto no achicó el proyecto: lo obligó a ser más simple, con una base menos que mantener.',
          en: 'The owner brief included a condition that looked minor and ended up organising the whole architecture: no monthly infrastructure costs. That ruled out paying for a separate vector database for the assistant, so the embeddings live in the ERP own Postgres with the vector extension; and it ruled out paid models, so the AI layer was built on free-tier APIs. The budget constraint did not shrink the project: it forced it to be simpler, with one less database to maintain.',
        },
      },
      {
        heading: {
          es: 'De dónde salieron los requisitos',
          en: 'Where the requirements came from',
        },
        body: {
          es: 'El relevamiento no fue una reunión: fue un cuestionario escrito que el dueño completó sobre cómo funciona su negocio de verdad — situación fiscal, cómo carga precios, cómo maneja proveedores, qué mira para decidir. Trabajar adentro del local me dio la intuición, pero el documento es lo que evitó que construyera lo que yo suponía en vez de lo que él necesitaba.',
          en: 'Discovery was not a meeting: it was a written questionnaire the owner filled in about how his business actually works — tax situation, how he loads prices, how he handles suppliers, what he looks at to decide. Working inside the shop gave me the intuition, but the document is what kept me from building what I assumed instead of what he needed.',
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
        heading: {
          es: 'Multi-tenant desde el día uno',
          en: 'Multi-tenant from day one',
        },
        body: {
          es: 'La decisión de arquitectura que más condicionó el resto fue no construir una plataforma para una ONG sino para varias. Cada organización tiene sus propios animales, sus propios administradores y sus propias solicitudes, aisladas de las demás, y por encima hay un rol de super administrador para la gestión global. Eso obliga a validar la pertenencia a la organización en cada ruta protegida, no solo el token: tener sesión válida no alcanza, hay que probar que ese usuario pertenece a esa organización. Es más trabajo al principio, y es lo que hizo que sumar la cuarta ONG no fuera un despliegue nuevo.',
          en: 'The architectural decision that shaped everything else was building the platform not for one NGO but for several. Each organization has its own animals, its own admins and its own requests, isolated from the rest, with a super-admin role above them for global management. That forces organization membership to be checked on every protected route, not just the token: a valid session is not enough, the user has to be proven to belong to that organization. It is more work up front, and it is why adding the fourth NGO was not a new deployment.',
        },
      },
      {
        heading: { es: 'Seguridad y calidad', en: 'Security and quality' },
        bullets: {
          es: [
            'Autenticación con tokens firmados y expiración acotada; contraseñas con hash y sal, nunca en claro.',
            'Validación de entrada en todas las rutas del backend, además de la del cliente. La del cliente es usabilidad; la que cuenta es la del servidor.',
            'Consultas parametrizadas por el ORM, que cierra la puerta a la inyección de SQL por construcción.',
            'API documentada con Swagger, para que frontend y backend no se pongan de acuerdo por WhatsApp.',
            'Tests unitarios y pruebas de carga, para saber cómo se comporta antes de que lo usen personas de verdad.',
          ],
          en: [
            'Authentication with signed tokens and bounded expiry; passwords hashed and salted, never in plain text.',
            'Input validation on every backend route, on top of the client one. The client side is usability; the server side is what counts.',
            'Queries parameterized by the ORM, which closes the door on SQL injection by construction.',
            'API documented with Swagger, so frontend and backend do not agree on contracts over WhatsApp.',
            'Unit tests and load tests, to know how it behaves before real people use it.',
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
  {
    slug: 'punto-natural',
    projectId: 'punto-natural',
    title: {
      es: 'Punto Natural — POS/ERP en Go',
      en: 'Punto Natural — POS/ERP in Go',
    },
    tagline: {
      es: 'Un punto de venta donde la plata y el stock no pueden estar mal: transacciones atómicas, idempotencia real y una auditoría de seguridad que cerró en 0 hallazgos altos.',
      en: 'A point of sale where money and stock cannot be wrong: atomic transactions, real idempotency, and a security audit that closed with zero high findings.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Punto Natural es un comercio de barrio que vendía con cuaderno: fiado anotado a mano, stock de memoria y cierre de caja al ojo. Me contrataron para reemplazar eso por un sistema propio, corriendo en su mostrador. Lo construí de cero en Go, con el frontend React embebido en el mismo binario para que el deploy sea un solo archivo.',
          en: 'Punto Natural is a neighbourhood shop that ran on paper: store credit written by hand, stock from memory, and cash closing by eye. They hired me to replace that with a system of their own, running on their counter. I built it from scratch in Go, with the React frontend embedded in the same binary so deploying is a single file.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'Un POS es un sistema donde los bugs se pagan en pesos. Si dos ventas concurrentes descuentan el mismo stock, hay faltante real en la góndola. Si el vendedor hace doble clic en Cobrar, el cliente paga dos veces. Si el cierre de caja no da, alguien pone la diferencia de su bolsillo. El desafío no era hacer pantallas: era garantizar que esas tres cosas no pudieran pasar.',
          en: 'A POS is a system where bugs are paid in cash. If two concurrent sales decrement the same stock, there is a real shortage on the shelf. If the clerk double-clicks Charge, the customer pays twice. If the cash count does not balance, someone covers the difference out of pocket. The challenge was not building screens: it was guaranteeing those three things could not happen.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'Stock con decremento atómico en la base (UPDATE ... WHERE stock >= cantidad), nunca read-modify-write. La venta entera va en una transacción: si algo falla, no queda media venta.',
            'Idempotencia con huella del payload: la misma clave con un carrito distinto devuelve 422 en vez de repetir el cobro. Verificado con requests concurrentes reales — una sola fila, un solo descuento de saldo.',
            'La plata siempre en centavos enteros, jamás en float. El reparto de descuentos por combo usa multiplicación de 128 bits para que un total grande no desborde int64, y reparte el residuo en trozos equivalentes para que ninguna línea quede negativa.',
            'El monto esperado del cierre de caja es una función pura con tests propios, separada de la base. El arqueo se puede probar sin levantar Postgres, y la diferencia da 0 en los cuatro medios de pago.',
            'Migraciones con goose embebido como librería (go:embed), ejecutadas por un subcomando del propio binario en vez de un CLI aparte. En el servidor migrar es un paso manual explícito, nunca automático al arrancar.',
            'sqlc para el acceso a datos: el SQL se escribe a mano y el tipado lo genera el compilador. El 100% de las consultas queda parametrizado por construcción.',
            'Performance medida, no supuesta: sembré 4 años sintéticos (~116 mil ventas) y ajusté los índices con EXPLAIN (ANALYZE, BUFFERS) hasta conseguir Index Only Scan en los caminos calientes.',
          ],
          en: [
            'Stock decremented atomically in the database (UPDATE ... WHERE stock >= quantity), never read-modify-write. The whole sale runs in one transaction: if anything fails, no half sale is left behind.',
            'Idempotency with a payload fingerprint: the same key with a different cart returns 422 instead of charging again. Verified with real concurrent requests — a single row, a single balance deduction.',
            'Money always in integer cents, never floats. Splitting bundle discounts uses 128-bit multiplication so a large total cannot overflow int64, and distributes the remainder in equivalent chunks so no line goes negative.',
            'The expected cash-closing amount is a pure function with its own tests, decoupled from the database. The count can be tested without starting Postgres, and the difference lands at 0 across all four payment methods.',
            'Migrations with goose embedded as a library (go:embed), run by a subcommand of the binary itself instead of a separate CLI. On the server, migrating is an explicit manual step, never automatic on boot.',
            'sqlc for data access: SQL written by hand, types generated by the compiler. 100% of queries end up parameterized by construction.',
            'Performance measured, not assumed: I seeded 4 synthetic years (~116k sales) and tuned indexes with EXPLAIN (ANALYZE, BUFFERS) until the hot paths hit Index Only Scans.',
          ],
        },
      },
      {
        heading: { es: 'Seguridad', en: 'Security' },
        bullets: {
          es: [
            'Auditoría de seguridad integral: 0 hallazgos altos, 0 medios y 5 bajos, los cinco corregidos y verificados end-to-end en la misma sesión.',
            'Mapeé las 54 rutas de la API para confirmar que ningún DTO filtrara datos según el rol: un empleado nunca ve el costo de un producto.',
            'Cacé una fuga de tiempo en el login: el hash señuelo usaba un costo de bcrypt distinto al real, así que el tiempo de respuesta delataba si el usuario existía.',
            'Sesiones del lado del servidor con expiración deslizante y tope de vida absoluto. La cookie no lleva Expires: la vigencia la decide el server, no el navegador.',
            'Headers de seguridad y chequeo de origen en las rutas que mutan, con HSTS solo en producción.',
            'Backup cifrado con ensayo de restore automatizado: la prueba no es que el archivo exista, es que sobre la base restaurada se pueda hacer una venta real.',
          ],
          en: [
            'Full security audit: 0 high findings, 0 medium, 5 low — all five fixed and verified end to end in the same session.',
            'I mapped all 54 API routes to confirm no DTO leaked data across roles: an employee never sees a product cost.',
            'I caught a timing leak in login: the dummy hash used a different bcrypt cost than the real one, so response time revealed whether a user existed.',
            'Server-side sessions with sliding expiry and an absolute lifetime cap. The cookie carries no Expires: the server owns validity, not the browser.',
            'Security headers and an origin check on mutating routes, with HSTS only in production.',
            'Encrypted backups with an automated restore drill: the proof is not that the file exists, it is that a real sale can be made against the restored database.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Todo: relevamiento con el dueño, modelo de datos, backend, frontend, infraestructura y las revisiones. Trabajé con un agente de IA como ejecutor y yo como arquitecto y revisor, con un informe por sprint que después auditaba contra el código con verificación independiente. Varios de los hallazgos de arriba salieron de esas revisiones, no de los tests.',
          en: 'Everything: discovery with the owner, data model, backend, frontend, infrastructure, and the reviews. I worked with an AI agent as the executor and myself as architect and reviewer, with a report per sprint that I then audited against the code with independent verification. Several of the findings above came out of those reviews, not from the tests.',
        },
      },
      {
        heading: { es: 'Estado y resultado', en: 'Status and result' },
        body: {
          es: 'La aplicación está completa y verificada, con una instancia de staging provisionada en mi propio VPS y CI corriendo migraciones up/down/up contra un Postgres real en cada push. La salida a producción está pendiente de la validación visual del cliente. Las tres invariantes de negocio que definí al principio — stock negativo, saldos descuadrados y caja abierta huérfana — dan 0 en cada corrida.',
          en: 'The application is complete and verified, with a staging instance provisioned on my own VPS and CI running up/down/up migrations against a real Postgres on every push. Going live is pending the client visual validation. The three business invariants I defined up front — negative stock, unbalanced ledgers, and orphaned open registers — come back at 0 on every run.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'Los tests verdes no son el criterio de cierre. El criterio es la corrida real contra el sistema de verdad: un mock nunca me reprodujo el comportamiento que después me rompió.',
            'La incertidumbre se modela como estado explícito, no como un booleano. Una operación irreversible necesita poder decir "no sé si salió".',
            'Verificar el efecto observable y no el valor intermedio: el DOM puede estar perfecto y el total salir en $0.',
            'Sembrar datos a escala real antes de tocar índices evita optimizar lo que no dolía.',
          ],
          en: [
            'Green tests are not the closing criterion. The criterion is the real run against the real system: a mock never reproduced the behaviour that later broke me.',
            'Uncertainty is modeled as an explicit state, not a boolean. An irreversible operation needs to be able to say "I do not know if it went through".',
            'Verify the observable effect, not the intermediate value: the DOM can look perfect while the total comes out at $0.',
            'Seeding data at realistic scale before touching indexes avoids optimizing what never hurt.',
          ],
        },
      },
    ],
  },
  {
    slug: 'rodak',
    projectId: 'rodak',
    title: {
      es: 'Rodak — Rescate, seguridad y migración de un e-commerce',
      en: 'Rodak — Rescue, security, and migration of an e-commerce site',
    },
    tagline: {
      es: 'Una tienda WooCommerce con 1.186 pedidos reales que venía de un compromiso de seguridad. El cliente preguntó si el backup servía, y lo contesté con un ensayo real, no con un "debería andar".',
      en: 'A WooCommerce store with 1,186 real orders coming off a security compromise. The client asked whether the backup actually worked, and I answered with a real rehearsal, not with "it should".',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Rodak es una mueblería que vende online. Me contrataron para reposicionar la marca y construir un configurador de escritorios, pero al abrir el sitio apareció otra cosa primero: una instalación comprometida, sobre hosting compartido con un MySQL viejo, y con la tienda facturando. No se podía rehacer de cero ni apagar: había que arreglarlo en movimiento.',
          en: 'Rodak is a furniture company selling online. They hired me to reposition the brand and build a desk configurator, but opening the site something else surfaced first: a compromised installation, on shared hosting with an old MySQL, and with the store still taking orders. Rebuilding from scratch or shutting it down were both off the table: it had to be fixed while running.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'Antes de cualquier migración el cliente hizo la pregunta correcta: con el backup que tenemos, ¿estás 100% seguro de que en otro servidor podemos desplegar la misma página, idéntica? Esa pregunta no se contesta leyendo un archivo. Un backup no verificado no es un backup: es un archivo grande.',
          en: 'Before any migration the client asked the right question: with the backup we have, are you 100% sure we can deploy the same site on another server, identical? You do not answer that by reading a file. An unverified backup is not a backup: it is a large file.',
        },
      },
      {
        heading: { es: 'Cómo lo resolví', en: 'How I solved it' },
        bullets: {
          es: [
            'Levanté un clon aislado del servidor con tres capas de protección — autenticación básica, cuarentena de red y noindex — para poder trabajar con datos reales sin exponer nada.',
            'Restauré el backup completo, en 14 partes, del lado del servidor, y verifiqué el SHA-256 de las 14 antes de importar nada.',
            'Definí gates numéricos ANTES de empezar y después expliqué cada delta: 144/144 tablas importadas, 1.186 pedidos = 1.181 previos + 5 nuevos con sus fechas, 322 variaciones exactas, 1.006 archivos de medios, 20.310 archivos de plugins contra 20.310.',
            'El smoke test lleva controles positivos y negativos: home y tienda responden 200, una URL inventada responde 404, y hay 0 referencias al dominio viejo — con un control positivo de 176 coincidencias que demuestra que la búsqueda funcionaba.',
            'Para la seguridad armé un ledger donde cada componente solo se cierra con un estado terminal: corregido, eliminado con ruta verificada, o excepción escrita del dueño. "El scanner no lo detecta" no es un estado.',
            'Crucé las CVEs de cada componente contra fuentes públicas y dejé anotada la limitación: una de las APIs que quería usar como segunda fuente independiente fue retirada, así que el cruce quedó con una sola fuente y eso está declarado, no escondido.',
          ],
          en: [
            'I stood up an isolated clone of the server with three protection layers — basic auth, network quarantine, and noindex — so I could work with real data without exposing anything.',
            'I restored the full backup, in 14 parts, server-side, and verified the SHA-256 of all 14 before importing anything.',
            'I defined numeric gates BEFORE starting and then explained every delta: 144/144 tables imported, 1,186 orders = 1,181 previous + 5 new ones with their dates, 322 exact variations, 1,006 media files, 20,310 plugin files against 20,310.',
            'The smoke test carries positive and negative controls: home and shop return 200, an invented URL returns 404, and there are 0 references to the old domain — with a positive control of 176 matches proving the search actually worked.',
            'For security I built a ledger where a component only closes with a terminal state: fixed, removed with a verified path, or a written exception from the owner. "The scanner does not flag it" is not a state.',
            'I cross-checked each component CVEs against public sources and documented the limitation: one of the APIs I wanted as an independent second source was retired, so the check ended up single-sourced — and that is declared, not hidden.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Auditoría, respuesta al incidente, plan y ejecución del backup y del ensayo de restore, y la comunicación con el cliente. Buena parte del trabajo fue traducir todo esto a mensajes que el dueño pudiera leer sin ser técnico, sin bajarle el rigor a lo que había abajo.',
          en: 'Audit, incident response, planning and executing the backup and the restore rehearsal, and client communication. A good part of the job was translating all of this into messages the owner could read without being technical, without watering down the rigor underneath.',
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'El ensayo dio verde en todos los gates: la migración a otro servidor quedó probada, no prometida. Además apareció algo que nadie estaba buscando — una limpieza previa había borrado 20 usuarios, incluida la cuenta de administración del hosting — y lo levanté con la aritmética exacta que lo demostraba. Ese hallazgo salió del ensayo; sin ensayo, se descubría durante la migración real.',
          en: 'The rehearsal came back green on every gate: migrating to another server was proven, not promised. It also surfaced something nobody was looking for — a previous cleanup had deleted 20 users, including the hosting admin account — and I raised it with the exact arithmetic that proved it. That finding came out of the rehearsal; without it, it would have surfaced during the real migration.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'Un backup se verifica por consistencia, contando filas restauradas, no por la existencia del archivo.',
            'Todo test necesita un control positivo. "0 referencias al dominio viejo" no prueba nada si la búsqueda estaba rota: el control de 176 coincidencias es lo que le da valor a ese 0.',
            'Declarar las limitaciones de una auditoría la hace más creíble, no menos.',
            'Frente a un cliente, un ensayo reproducible vale más que cualquier garantía verbal.',
          ],
          en: [
            'A backup is verified by consistency, counting restored rows, not by the file existing.',
            'Every test needs a positive control. "0 references to the old domain" proves nothing if the search was broken: the 176-match control is what gives that 0 its meaning.',
            'Declaring an audit limitations makes it more credible, not less.',
            'In front of a client, a reproducible rehearsal beats any verbal guarantee.',
          ],
        },
      },
    ],
  },
  {
    slug: 'infra-coolify',
    projectId: 'infra-coolify',
    title: {
      es: 'Infraestructura propia — VPS, Coolify y un casi-lockout',
      en: 'My own infrastructure — VPS, Coolify, and a near-lockout',
    },
    tagline: {
      es: 'Monté mi propio servidor para dejar de depender de plataformas ajenas. La lección más cara no fue instalar nada: fue cerrar tres puertos y quedarme afuera.',
      en: 'I set up my own server to stop depending on someone else platform. The most expensive lesson was not installing anything: it was closing three ports and locking myself out.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Venía deployando todo en plataformas administradas sin entender qué pasaba abajo. Alquilé un VPS propio y monté Coolify encima como PaaS, para tener un solo lugar donde deployar mis proyectos y, sobre todo, para aprender administración de servidores de verdad: con un server que si lo rompo, lo arreglo yo.',
          en: 'I had been deploying everything on managed platforms without understanding what happened underneath. I rented my own VPS and set up Coolify on top as a PaaS, to have a single place to deploy my projects and, above all, to actually learn server administration: with a server that, if I break it, I fix it.',
        },
      },
      {
        heading: { es: 'El incidente', en: 'The incident' },
        body: {
          es: 'Coolify publica algunos puertos internos que Docker abre salteándose el firewall del sistema. Para cerrarlos usé el firewall del panel del proveedor y escribí una política con tres reglas de bloqueo, confiando en que las reglas implícitas de aceptar todo que la interfaz mostraba al final seguirían valiendo. No valían: al aplicar una política propia, esas implícitas dejan de existir y todo lo que no esté permitido explícitamente queda bloqueado. Cerré también el 22, el 80 y el 443. Sin SSH y sin dashboard.',
          en: 'Coolify publishes some internal ports that Docker opens bypassing the system firewall. To close them I used the provider panel firewall and wrote a policy with three block rules, trusting that the implicit accept-all rules the UI listed at the end would still apply. They did not: once you apply your own policy, those implicit rules stop existing and anything not explicitly allowed is blocked. I also closed 22, 80, and 443. No SSH, no dashboard.',
        },
      },
      {
        heading: {
          es: 'Cómo salí y cómo lo arreglé bien',
          en: 'How I got out, and how I fixed it properly',
        },
        bullets: {
          es: [
            'El servidor nunca dejó de funcionar: respondía al ping, era filtrado puro. Salí quitando la política desde el panel del proveedor, que es externo al server — el paracaídas que hay que tener identificado ANTES de tocar un firewall.',
            'La herramienta correcta no era un firewall externo más contundente, sino la cadena DOCKER-USER de iptables: es la que Docker respeta y nunca pisa.',
            'Esa cadena vive en FORWARD, o sea el tráfico hacia contenedores, así que por diseño no puede cortar el SSH del host, que va por INPUT. No hay lockout posible.',
            'El detalle que costó entender: hay que filtrar por el puerto que pidió el cliente ANTES del NAT de Docker. Filtrar por el puerto de destino común no funciona, porque a esa altura ya fue traducido al puerto interno del contenedor.',
            'Reglas persistidas para que sobrevivan al reboot, y verificación desde afuera del servidor, no desde adentro.',
          ],
          en: [
            'The server never went down: it answered pings, it was pure filtering. I got back in by removing the policy from the provider panel, which lives outside the server — the parachute you need identified BEFORE touching a firewall.',
            'The right tool was not a blunter external firewall, but the DOCKER-USER iptables chain: the one Docker respects and never overwrites.',
            'That chain lives in FORWARD, meaning traffic to containers, so by design it cannot cut the host SSH, which goes through INPUT. No lockout is possible.',
            'The detail that took me a while: you have to filter on the port the client requested BEFORE Docker NAT. Filtering on the ordinary destination port does not work, because by then it has already been translated to the container internal port.',
            'Rules persisted so they survive a reboot, and verification from outside the server, not from inside it.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Todo, y a propósito a mano: evaluación y compra del proveedor, instalación, hardening, dominio y certificados para el dashboard, y el runbook de deploy por proyecto. Es el proyecto donde decidí no automatizar nada hasta entenderlo, porque el objetivo era aprender, no terminar rápido.',
          en: 'Everything, and deliberately by hand: evaluating and buying the provider, installation, hardening, domain and certificates for the dashboard, and the per-project deploy runbook. This is the project where I decided not to automate anything until I understood it, because the goal was learning, not finishing fast.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'La política por defecto de un firewall se verifica contra la documentación o con una prueba reversible. No se deduce de lo que muestra una interfaz.',
            'Antes de aplicar un cambio de red, tener el camino de vuelta identificado y probado. Y verificar 22, 80 y 443 desde afuera inmediatamente después, no solo los puertos que querías cerrar.',
            'Elegir la herramienta hecha para el problema antes que la más contundente. La opción más agresiva fue justamente la que casi me deja afuera.',
            'Los incidentes valen si se escriben. Este quedó documentado con causa raíz y regla, y por eso no volvió a pasar.',
          ],
          en: [
            'A firewall default policy is verified against documentation or with a reversible test. It is not inferred from what a UI displays.',
            'Before applying a network change, have the way back identified and tested. And check 22, 80, and 443 from outside immediately afterwards, not just the ports you meant to close.',
            'Pick the tool built for the problem over the blunter one. The most aggressive option was exactly what nearly locked me out.',
            'Incidents are only worth it if you write them down. This one is documented with root cause and a rule, and that is why it has not happened again.',
          ],
        },
      },
    ],
  },
  {
    slug: 'beast-motors',
    projectId: 'beastmotor',
    title: {
      es: 'Beast Motors — Catálogo de una concesionaria',
      en: 'Beast Motors — A car dealership catalog',
    },
    tagline: {
      es: 'Un catálogo que tiene que aparecer en Google y convertir por WhatsApp. El problema más interesante no fue el SEO: fue ordenar por precio un inventario con autos en dólares y motos en pesos.',
      en: 'A catalog that has to rank on Google and convert over WhatsApp. The most interesting problem was not SEO: it was sorting by price an inventory with cars in dollars and motorcycles in pesos.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Beast Motors es una concesionaria de Paraná que vende autos usados, 0km, motos y vehículos importados. Me contrataron para hacerles el sitio, y la primera decisión fue de alcance: esto no es un e-commerce. Nadie compra un auto con un botón. Es un catálogo digital cuyo único objetivo es que suene el WhatsApp del vendedor.',
          en: 'Beast Motors is a dealership in Paraná selling used cars, brand-new cars, motorcycles and imported vehicles. They hired me to build their site, and the first decision was about scope: this is not an e-commerce store. Nobody buys a car with a button. It is a digital catalog whose only goal is to make the salesperson\’s WhatsApp ring.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'Dos frentes. El primero, que los encuentren: una concesionaria de barrio compite en Google contra los portales grandes, así que el sitio tiene que estar impecable en datos estructurados y velocidad. El segundo, más silencioso: el inventario tiene precios en dos monedas al mismo tiempo. Un auto en US$ 16.000 y una moto en $ 1.680.000 conviven en la misma grilla, y el cliente espera poder ordenarlos de menor a mayor.',
          en: 'Two fronts. First, being found: a neighbourhood dealership competes on Google against the big portals, so the site has to be flawless on structured data and speed. Second, quieter: the inventory carries prices in two currencies at once. A car at US$16,000 and a motorcycle at $1,680,000 sit in the same grid, and the customer expects to sort them low to high.',
        },
      },
      {
        heading: {
          es: 'La trampa de las dos monedas',
          en: 'The two-currency trap',
        },
        body: {
          es: 'Ordenar por precio era, en apariencia, una cláusula de SQL. Con esa consulta, una moto de $1.680.000 salía "más cara" que un auto de US$16.000, porque se comparaban los números crudos. Y los vehículos que solo tenían precio en pesos, con el campo de dólares vacío, saltaban al tope del orden descendente por el manejo de los nulos. La solución no fue tocar la consulta sino sacar el orden de la base: se convierte todo a dólares efectivos y recién ahí se ordena. Lo que más me gustó de la solución es de dónde sale la cotización: no de una API externa que puede caerse, sino del propio inventario — la mediana entre los vehículos que tienen los dos precios cargados. El dato ya estaba ahí. La regla que me quedó: con precios en más de una moneda, nunca ordenar ni filtrar por la columna cruda.',
          en: 'Sorting by price looked like a SQL clause. With that query, a motorcycle at $1,680,000 came out "more expensive" than a car at US$16,000, because raw numbers were being compared. And vehicles priced only in pesos, with the dollar field empty, jumped to the top of a descending sort through null handling. The fix was not to patch the query but to take sorting out of the database: everything is converted to effective dollars first, and only then sorted. My favourite part is where the exchange rate comes from: not an external API that can go down, but the inventory itself — the median across vehicles that have both prices loaded. The data was already there. The rule I kept: with prices in more than one currency, never sort or filter on the raw column.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'Next.js con renderizado en el servidor e ISR para las páginas públicas: el contenido llega ya armado al crawler, y el catálogo se revalida solo.',
            'SEO como abstracción, no como parche. Mi primer plan editaba página por página para agregar canonical, Twitter cards y datos estructurados. Facu lo frenó con un "¿no hay una forma mejor?" y tenía razón: salió un helper único de metadata y un componente de JSON-LD que consumen todas las páginas. Menos código, y es imposible olvidarse un campo en una página futura.',
            'Datos estructurados de Vehicle por unidad y de LocalBusiness en la portada, más sitemap automático.',
            'WhatsApp como único canal de conversión: cada ficha arma el mensaje con modelo, precio y link de la página. Cero formularios de contacto, por pedido del cliente y porque nadie los completa.',
            'Imágenes en Cloudinary con formato automático, para que negocie AVIF o WebP según el navegador en vez de hardcodear uno.',
            'Sin funciones atadas al proveedor de hosting: el proyecto tiene planeada una mudanza a un VPS propio, así que todo corre en Node estándar. Es una restricción que me impuse desde el día uno para que la mudanza no sea una reescritura.',
            'Panel de administración para una sola persona no técnica, pensado para usarse desde el celular.',
          ],
          en: [
            'Next.js with server rendering and ISR for public pages: content reaches the crawler fully built, and the catalog revalidates on its own.',
            'SEO as an abstraction, not a patch. My first plan edited page by page to add canonicals, Twitter cards and structured data. Facu stopped it with "isn\’t there a better way?" and he was right: it became a single metadata helper and a JSON-LD component that every page consumes. Less code, and forgetting a field on a future page becomes impossible.',
            'Vehicle structured data per unit and LocalBusiness on the homepage, plus an automatic sitemap.',
            'WhatsApp as the only conversion channel: every listing builds the message with model, price and page link. No contact forms, by client request and because nobody fills them in.',
            'Images on Cloudinary with automatic format, so it negotiates AVIF or WebP per browser instead of hardcoding one.',
            'No features tied to the hosting provider: the project has a planned move to its own VPS, so everything runs on standard Node. A constraint I set on day one so the move is not a rewrite.',
            'An admin panel for a single non-technical person, designed to be used from a phone.',
          ],
        },
      },
      {
        heading: {
          es: 'Otras dos que me costaron',
          en: 'Two more that cost me',
        },
        bullets: {
          es: [
            'Las imágenes se servían a 750 px para mostrarse a 380. Marcarlas como prioritarias no alcanzó: en render dinámico el framework no siempre emite el preload, y hubo que ponerlo a mano en el servidor. Aprendizaje lateral: medir performance en modo desarrollo no sirve, el JavaScript sin minificar infla los números.',
            'El login del admin devolvía credenciales inválidas con la contraseña correcta. La causa no estaba en el código: el usuario se había creado antes de desactivar la confirmación por email, y quedó sin confirmar. Cambiar la configuración de autenticación no actualiza a los usuarios que ya existen.',
          ],
          en: [
            'Images were served at 750px to be displayed at 380. Marking them as priority was not enough: under dynamic rendering the framework does not always emit the preload, so it had to be added by hand on the server. Side lesson: measuring performance in development mode is useless, unminified JavaScript inflates the numbers.',
            'The admin login returned invalid credentials with the correct password. The cause was not in the code: the user had been created before email confirmation was disabled, and stayed unconfirmed. Changing auth settings does not retroactively update existing users.',
          ],
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Freelance, de punta a punta: relevamiento con el dueño, diseño, desarrollo, panel de administración, SEO, deploy y el dominio propio. También el soporte posterior, que es donde salieron la mitad de los problemas de arriba.',
          en: 'Freelance, end to end: discovery with the owner, design, development, admin panel, SEO, deployment and the custom domain. Also the ongoing support, which is where half the problems above came from.',
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'En producción, con dominio propio y 28 vehículos publicados. El catálogo filtra por tipo y marca, ordena bien en las dos monedas, y cada unidad tiene su ficha con financiación y su botón de WhatsApp.',
          en: 'Live in production, on its own domain, with 28 vehicles published. The catalog filters by type and brand, sorts correctly across both currencies, and every unit has its detail page with financing and its WhatsApp button.',
        },
      },
    ],
  },
  {
    slug: 'liga-al-touch',
    projectId: 'liga-al-touch',
    title: {
      es: 'Liga Al Touch — Gestión de una liga amateur',
      en: 'Liga Al Touch — Managing an amateur league',
    },
    tagline: {
      es: 'Una liga de fútbol amateur parece un CRUD hasta que aparecen las suspensiones, los comodines y el derecho de piso. La decisión que sostiene todo el sistema es cuál dato se deriva y cuál no.',
      en: 'An amateur football league looks like a CRUD app until suspensions, wildcards and entry rules show up. The decision holding the whole system together is which data gets derived and which does not.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Liga Al Touch organiza un torneo de fútbol amateur en Paraná. La tabla, los goleadores, el fair play, los cruces de playoffs y las sanciones del tribunal se llevaban a mano, repartidos entre planillas y grupos de WhatsApp. Me contrataron para hacer la plataforma: un sitio público donde los jugadores miran su equipo, y un panel donde la organización carga los partidos.',
          en: 'Liga Al Touch runs an amateur football tournament in Paraná. Standings, top scorers, fair play, playoff brackets and disciplinary rulings were kept by hand, scattered across spreadsheets and WhatsApp groups. They hired me to build the platform: a public site where players check their team, and a panel where the organisers enter matches.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'El dominio es más complejo de lo que aparenta. Un partido no es solo un resultado: puede haber walkover, tarjetas que arrastran suspensiones a fechas futuras, un comodín que perdona una roja, ajustes disciplinarios que suman o restan puntos fuera de la cancha, y playoffs de Oro y Plata que se arman con los cruces según cómo terminó la fase regular. Si eso se modela mal, la tabla miente. Y en una liga, una tabla que miente es una discusión con la gente.',
          en: 'The domain is more complex than it looks. A match is not just a score: there can be walkovers, cards that carry suspensions into future fixtures, a wildcard that forgives a red card, disciplinary adjustments that add or subtract points off the pitch, and Gold and Silver playoffs seeded from how the regular phase ended. Model that wrong and the table lies. And in a league, a table that lies is an argument with real people.',
        },
      },
      {
        heading: {
          es: 'La decisión de fondo: qué se deriva y qué no',
          en: 'The core decision: what gets derived and what does not',
        },
        body: {
          es: 'El sistema está partido en dos capas que nunca se mezclan. En una viven los hechos del partido —quién jugó, quién hizo los goles, qué tarjetas hubo— y de ahí se DERIVA todo lo calculable: tabla de posiciones, goleadores, fair play, valla menos vencida. En la otra vive el estado administrativo: suspensiones, comodines, ajustes disciplinarios. Eso NO se deriva: tiene su propia tabla y su propio ciclo de vida. La razón es que una decisión administrativa es un acto, no un cálculo. Si la derivás de los hechos, no la podés revertir, no sabés quién la tomó y no la podés auditar cuando alguien reclama. Separarlas hizo que agregar reglas nuevas —los playoffs de Oro y Plata llegaron después— no tocara nada de lo que ya andaba.',
          en: 'The system is split into two layers that never mix. One holds match facts — who played, who scored, which cards were shown — and everything computable is DERIVED from there: standings, top scorers, fair play, clean sheets. The other holds administrative state: suspensions, wildcards, disciplinary adjustments. That is NOT derived: it has its own table and its own lifecycle. The reason is that an administrative decision is an act, not a calculation. Derive it from the facts and you cannot reverse it, you do not know who made it, and you cannot audit it when someone disputes it. Splitting them meant that adding new rules — the Gold and Silver playoffs came later — touched nothing that already worked.',
        },
      },
      {
        heading: {
          es: 'Seguridad y datos personales',
          en: 'Security and personal data',
        },
        bullets: {
          es: [
            'Cada acción de servidor es, en los hechos, un endpoint público. Por eso la autorización es denegar por defecto en cada una, sin excepción. Es el error que más veces vi: confiar en que la pantalla que llama a la acción ya validó el rol.',
            'El archivo de proxy solo pone cabeceras y hace redirecciones. Jamás autoriza. Es la trampa clásica del framework: parece el lugar natural para poner el guardián de auth, y es el peor.',
            'Todo se valida en el servidor con esquemas que rechazan campos inesperados. El rol nunca se lee de lo que manda el front.',
            'El DNI de los jugadores no aparece en ninguna proyección pública, ni en logs, ni en nada cacheado. Las vistas públicas usan objetos de transferencia sin campos internos.',
            'Toda mutación deja registro de auditoría en la misma transacción, y ese registro no lleva datos personales.',
            'El caché público se invalida por etiqueta al guardar una ficha. Nada personal entra jamás en algo cacheable.',
          ],
          en: [
            'Every server action is, in practice, a public endpoint. So authorization is deny-by-default in each one, no exceptions. This is the mistake I have seen most often: trusting that the screen calling the action already checked the role.',
            'The proxy file only sets headers and handles redirects. It never authorizes. That is the classic framework trap: it looks like the natural place for the auth guard, and it is the worst one.',
            'Everything is validated on the server with schemas that reject unexpected fields. The role is never read from what the front sends.',
            'Players\’ national ID numbers never appear in a public projection, a log, or anything cached. Public views use transfer objects without internal fields.',
            'Every mutation writes an audit record in the same transaction, and that record carries no personal data.',
            'The public cache is invalidated by tag when a match sheet is saved. Nothing personal ever enters something cacheable.',
          ],
        },
      },
      {
        heading: {
          es: 'Lo que decidí NO hacer',
          en: 'What I decided NOT to build',
        },
        body: {
          es: 'Nada de Redis, colas, microservicios ni separación de lecturas y escrituras. Es un monolito por capas y la escala es chica: una liga, unas decenas de equipos. Lo escribí como regla en el repo para no tentarme más adelante. La complejidad que no agregás es la única que seguro no te va a fallar un domingo a la noche antes de la fecha.',
          en: 'No Redis, no queues, no microservices, no read/write separation. It is a layered monolith and the scale is small: one league, a few dozen teams. I wrote it down as a rule in the repo so I would not be tempted later. The complexity you do not add is the only kind guaranteed not to break on a Sunday night before matchday.',
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Freelance, todo: modelo de dominio, backend, sitio público, panel de administración y las rondas de devolución con la organización de la liga. Varias features salieron de esas devoluciones, no del plan original — la descarga de la tabla y de los cuadros como imagen, por ejemplo, porque así es como se comparten en los grupos.',
          en: 'Freelance, everything: domain model, backend, public site, admin panel, and the feedback rounds with the league organisers. Several features came out of those rounds rather than the original plan — downloading the table and brackets as an image, for instance, because that is how they get shared in group chats.',
        },
      },
      {
        heading: { es: 'Estado', en: 'Status' },
        body: {
          es: 'Funcional y probado en local, con el fixture, los playoffs Oro y Plata, el tribunal y el panel completos. Todavía sin desplegar: sale con la próxima temporada de la liga, sobre mi propio servidor.',
          en: 'Working and tested locally, with fixtures, Gold and Silver playoffs, the disciplinary panel and the admin all complete. Not deployed yet: it goes live with the league next season, on my own server.',
        },
      },
    ],
  },
  {
    slug: 'dobleg',
    projectId: 'dobleg',
    title: {
      es: 'Dobleg Premoldeados — Sitio corporativo',
      en: 'Dobleg Premoldeados — Corporate website',
    },
    tagline: {
      es: 'Reescribir el sitio de una fábrica de hormigón sin una línea de JavaScript de framework. El bug más instructivo del proyecto fue que la página quedaba invisible si el navegador no ejecutaba scripts.',
      en: 'Rewriting a concrete plant\’s website without a single line of framework JavaScript. The most instructive bug of the project was that the page went invisible if the browser did not run scripts.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Dobleg Premoldeados fabrica galpones, tanques y estructuras de hormigón armado en Paraná, con más de 23 años en el rubro. Tenían un sitio viejo que ya no los representaba. El encargo fue el rebranding completo: identidad, contenido y sitio nuevo.',
          en: 'Dobleg Premoldeados manufactures sheds, tanks and reinforced concrete structures in Paraná, with more than 23 years in the trade. They had an old site that no longer represented them. The brief was a full rebrand: identity, content and a new site.',
        },
      },
      {
        heading: { es: 'Problema', en: 'Problem' },
        body: {
          es: 'El público define casi todo el diseño acá: productores agropecuarios, industriales y particulares de Entre Ríos, que abren el link desde WhatsApp, en el celular, a plena luz del día y muchas veces con señal mala. Eso descarta el tema oscuro, descarta las animaciones pesadas y descarta cualquier framework que mande cientos de kilobytes de JavaScript para mostrar texto y fotos.',
          en: 'The audience defines almost everything about the design here: farmers, industrial buyers and individuals in Entre Ríos, who open the link from WhatsApp, on a phone, in broad daylight and often on poor signal. That rules out a dark theme, rules out heavy animation, and rules out any framework shipping hundreds of kilobytes of JavaScript to display text and photos.',
        },
      },
      {
        heading: {
          es: 'El bug que más me enseñó',
          en: 'The bug that taught me the most',
        },
        body: {
          es: 'Las secciones aparecían con una animación al entrar en pantalla. La técnica habitual: los elementos arrancan invisibles y el JavaScript los revela cuando entran al viewport. Funciona perfecto — hasta que el JavaScript no corre. Si fallaba el script, si el navegador lo bloqueaba, o si un crawler no lo ejecutaba, la página quedaba en blanco. Todo el contenido estaba en el HTML, presente y correcto, y no se veía nada. El arreglo cambió el orden de las prioridades: el estado por defecto es visible, y la animación es una mejora que se aplica encima. Lo mismo apliqué al formulario de contacto: la base es un envío nativo que funciona con JavaScript apagado, y el script solo lo mejora, nunca lo reemplaza. Es la diferencia entre una mejora progresiva y una dependencia disfrazada.',
          en: 'Sections appeared with an animation as they scrolled into view. The usual technique: elements start invisible and JavaScript reveals them when they enter the viewport. It works perfectly — until the JavaScript does not run. If the script failed, if the browser blocked it, or if a crawler did not execute it, the page came up blank. All the content was in the HTML, present and correct, and nothing was visible. The fix inverted the priority: the default state is visible, and the animation is an enhancement layered on top. I applied the same to the contact form: the baseline is a native submit that works with JavaScript off, and the script only improves it, never replaces it. That is the difference between progressive enhancement and a dependency in disguise.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'Astro estático, sin framework de cliente. El sitio se sirve como HTML y CSS: no hay hidratación que esperar.',
            'Una sola familia tipográfica variable, de una fundición argentina, autoalojada. Los ejes de peso y ancho dan el contraste entre títulos y texto sin cargar una segunda fuente, y va con ajuste de métricas para que el cambio de fuente no mueva el layout.',
            'Paleta definida en OKLCH con los contrastes medidos, no estimados a ojo. Es un sitio que se lee al sol.',
            'Antes de escribir una sola sección de la interfaz hubo una fase bloqueante de trazabilidad de contenido: cada afirmación del sitio tiene que apuntar a una fuente del cliente. Nada inventado, nada de relleno de agencia.',
            'Antes de tocar una sola foto hubo otra fase bloqueante de curaduría: ficha por imagen con uso propuesto, recorte, foco y texto alternativo, y recién con la aprobación se ejecutaba el procesamiento.',
            'Cabeceras de seguridad, datos estructurados y sitemap automático desde el primer deploy.',
          ],
          en: [
            'Static Astro, no client framework. The site ships as HTML and CSS: there is no hydration to wait for.',
            'A single variable typeface, from an Argentine foundry, self-hosted. The weight and width axes give the contrast between headings and body without loading a second font, and it ships with a metrics override so the font swap does not shift the layout.',
            'Palette defined in OKLCH with measured contrasts, not eyeballed. This is a site read in sunlight.',
            'Before writing a single UI section there was a blocking content-traceability phase: every claim on the site has to point back to a client source. Nothing invented, no agency filler.',
            'Before touching a single photo there was another blocking curation phase: a sheet per image with intended use, crop, focal point and alt text, and only with approval did processing run.',
            'Security headers, structured data and an automatic sitemap from the very first deploy.',
          ],
        },
      },
      {
        heading: {
          es: 'La migración de dominio',
          en: 'The domain migration',
        },
        body: {
          es: 'El dominio ya existía y apuntaba a otro proveedor, con el mail del cliente colgando de los mismos registros. Mover eso mal deja a una empresa sin correo. Lo hice por etapas con verificación en cada una: primero un inventario completo de los registros externos, después el cruce contra el panel del proveedor viejo para no perder ninguno, después la zona nueva verificada, y recién ahí el cambio. Al cerrar, el sitio quedó dado de alta en Search Console con el sitemap enviado.',
          en: 'The domain already existed and pointed to another provider, with the client\’s email hanging off the same records. Getting that wrong leaves a company without mail. I did it in stages with a check at each one: first a full inventory of the external records, then a cross-check against the old provider\’s panel so none were lost, then the new zone verified, and only then the switch. On closing, the site was registered in Search Console with its sitemap submitted.',
        },
      },
      {
        heading: { es: 'Mi rol', en: 'My role' },
        body: {
          es: 'Freelance, de punta a punta: dirección de arte, contenido, desarrollo, optimización de imágenes, SEO, deploy y la migración de DNS.',
          en: 'Freelance, end to end: art direction, content, development, image optimization, SEO, deployment and the DNS migration.',
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'En producción sobre su dominio propio, desplegado en Cloudflare Pages, con nueve líneas de producto y contacto directo por WhatsApp. Cero JavaScript de framework en el cliente.',
          en: 'Live in production on its own domain, deployed on Cloudflare Pages, with nine product lines and direct WhatsApp contact. Zero framework JavaScript on the client.',
        },
      },
    ],
  },
  {
    slug: 'flight-bot',
    projectId: 'flight-bot',
    title: {
      es: 'Bot de Vuelos — Alertas de precio',
      en: 'Flight Price Bot — Price alerts',
    },
    tagline: {
      es: 'Un bot que vigila precios de vuelos y avisa por Telegram, corriendo entero en GitHub Actions a costo cero. Estuvo 28 días sin mandar una sola alerta y todas las corridas figuraban en verde.',
      en: 'A bot that watches flight prices and pings Telegram, running entirely on GitHub Actions at zero cost. It went 28 days without sending a single alert while every run showed green.',
    },
    sections: [
      {
        heading: { es: 'Contexto', en: 'Context' },
        body: {
          es: 'Estaba organizando un viaje y buscar vuelos baratos se había vuelto un trabajo: mil pestañas abiertas, buscadores lentos, y horas por día sin garantía de encontrar el mejor precio. Vi la idea de un bot de alertas y pensé que lo podía hacer. Es un proyecto personal, sin cliente y sin plazo, que resultó ser el que más me enseñó sobre sistemas que corren solos.',
          en: 'I was planning a trip and hunting for cheap flights had turned into a job: a thousand tabs, slow search engines, and hours a day with no guarantee of finding the best price. I saw the idea of an alert bot and figured I could build it. It is a personal project, no client and no deadline, and it turned out to be the one that taught me the most about systems that run unattended.',
        },
      },
      {
        heading: {
          es: 'Problema: casi ninguna aerolínea quiere que le consultes precios',
          en: 'Problem: almost no airline wants you querying prices',
        },
        body: {
          es: 'Arranqué con las herramientas de desarrollador del navegador, interceptando las peticiones que hacen las webs de las aerolíneas al buscar un vuelo. Lo que encontré, y anoté como tabla de veredictos: una aerolínea con la API abierta y sin autenticación; otra con una clave pública que su propio frontend deja a la vista; y una tercera protegida con tokens y un sistema antibot serio, que directamente marqué como no viable en vez de perder días peleándola. Para cubrir el resto usé una librería que raspa Google Flights simulando un navegador. La arquitectura salió de ahí: APIs directas donde se puede, un raspador universal como red de seguridad.',
          en: 'I started with the browser developer tools, intercepting the requests airline sites make when you search a flight. What I found, and wrote down as a verdict table: one airline with an open, unauthenticated API; another with a public key its own frontend leaves in plain sight; and a third protected with tokens and a serious anti-bot system, which I marked as not viable rather than lose days fighting it. To cover the rest I used a library that scrapes Google Flights by simulating a browser. The architecture came out of that: direct APIs where possible, a universal scraper as a safety net.',
        },
      },
      {
        heading: {
          es: 'Los 28 días de silencio',
          en: 'The 28 days of silence',
        },
        body: {
          es: 'Un día el bot dejó de avisar. No falló: dejó de avisar. Las corridas programadas seguían apareciendo en verde, terminando sin error, y yo asumía que simplemente no había bajado ningún precio. Pasó un mes hasta que revisé de verdad. La librería que uso como fuente universal había sacado una versión nueva con la interfaz cambiada; el bot obtenía cero precios, no encontraba nada por debajo del umbral —porque no había nada— y terminaba con código de salida cero. Todo el sistema estaba diseñado para avisar cuando pasa algo, y no tenía forma de avisar cuando no pasaba nada. El arreglo tuvo dos partes. Una, fijar la versión exacta de la dependencia en vez de aceptar la última. La otra, y la que importa: una corrida con cero precios ahora manda alerta a Telegram y termina en error, así que la corrida aparece en rojo. Después del fix, la primera corrida trajo 534 precios y 8 alertas. La regla que me llevé: un sistema automático necesita saber gritar cuando no encuentra nada. El silencio no es una señal de éxito.',
          en: 'One day the bot stopped alerting. It did not fail: it stopped alerting. The scheduled runs kept showing green, finishing without error, and I assumed no price had simply dropped. A month went by before I actually checked. The library I use as the universal source had shipped a new version with a changed interface; the bot was getting zero prices, finding nothing below the threshold — because there was nothing — and exiting with code zero. The whole system was designed to alert when something happens, and had no way to alert when nothing did. The fix had two parts. One, pin the exact dependency version instead of accepting the latest. The other, the one that matters: a run with zero prices now sends a Telegram alert and exits with an error, so the run shows red. After the fix, the first run brought back 534 prices and 8 alerts. The rule I took away: an unattended system needs to know how to shout when it finds nothing. Silence is not a success signal.',
        },
      },
      {
        heading: {
          es: 'Solución y decisiones técnicas',
          en: 'Solution and technical decisions',
        },
        bullets: {
          es: [
            'Arquitectura de adaptadores: cada fuente traduce su formato propio a un resultado estándar. Sumar una aerolínea nueva es crear un archivo, sin tocar el motor.',
            'Umbrales configurables por ruta en dólares y en pesos, con comparación entre monedas.',
            'Deduplicación con estado persistido entre corridas: no repite la misma alerta, pero si el precio baja todavía más, vuelve a avisar. Sin eso el bot se vuelve ruido y lo terminás silenciando.',
            'Peticiones en paralelo con Python asíncrono, para que las tres fuentes no se esperen entre sí.',
            'Todo corre en la capa gratuita de GitHub Actions con una tarea programada cada 6 horas, y el panel se publica en GitHub Pages. Costo total de infraestructura: cero.',
            'Cuando actualizo la librería de raspado, lo hago a mano y con una prueba local antes. Es la dependencia más frágil del sistema y ya me mordió una vez.',
          ],
          en: [
            'Adapter architecture: each source translates its own format into a standard result. Adding a new airline means creating one file, without touching the engine.',
            'Per-route thresholds configurable in dollars and pesos, with cross-currency comparison.',
            'Deduplication with state persisted between runs: it does not repeat the same alert, but if the price drops further, it pings again. Without that the bot becomes noise and you end up muting it.',
            'Parallel requests with Python async, so the three sources do not wait on each other.',
            'Everything runs on the GitHub Actions free tier with a scheduled job every 6 hours, and the dashboard is published on GitHub Pages. Total infrastructure cost: zero.',
            'When I update the scraping library I do it by hand and with a local probe first. It is the most fragile dependency in the system and it already bit me once.',
          ],
        },
      },
      {
        heading: { es: 'Resultado', en: 'Result' },
        body: {
          es: 'Corriendo desde hace meses, con ocho rutas monitoreadas y más de 2.700 alertas emitidas en los últimos 90 días. El panel público muestra el mejor precio y el promedio por ruta, y la tabla de alertas con aerolínea, escalas y fecha de detección.',
          en: 'Running for months, with eight monitored routes and more than 2,700 alerts issued over the last 90 days. The public dashboard shows the best and average price per route, plus the alerts table with airline, stops and detection date.',
        },
      },
      {
        heading: { es: 'Aprendizajes', en: 'Learnings' },
        bullets: {
          es: [
            'Un proceso automático tiene que reportar la ausencia de resultados como un problema, no como una corrida normal.',
            'Fijar la versión exacta de la dependencia que sostiene el sistema. "La última" es una decisión que tomás una vez y te cobran después.',
            'Antes de escribir un scraper, mirar si hay una API. Y antes de pelear una API protegida, evaluar si vale la pena: descartar una fuente a tiempo también es una decisión técnica.',
            'Un panel público que muestra lo que el sistema está haciendo vale más que cualquier log: en un vistazo sé si está vivo.',
          ],
          en: [
            'An unattended process has to report the absence of results as a problem, not as a normal run.',
            'Pin the exact version of the dependency holding the system up. "Latest" is a decision you make once and pay for later.',
            'Before writing a scraper, check whether there is an API. And before fighting a protected API, weigh it up: dropping a source in time is a technical decision too.',
            'A public dashboard showing what the system is doing beats any log: at a glance I know whether it is alive.',
          ],
        },
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
