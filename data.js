/**
 * TODO el contenido del CV vive aquí, en los dos idiomas. Es el único fichero
 * que hay que tocar para cambiar el currículum: ni index.html ni el JS
 * contienen texto visible.
 *
 * ── Regla del bilingüe ───────────────────────────────────────────────────
 * Un solo fichero, dos bloques con la MISMA estructura: CV_DATA.es y
 * CV_DATA.en. Para cambiar un texto, edita la clave en LOS DOS bloques
 * (o solo en el que te indiquen).
 *
 *   el nombre  → CV_DATA.es.identity.name  y  CV_DATA.en.identity.name
 *   los botones→ CV_DATA.<idioma>.ui       (ui.printBtn, ui.paletteEmpty…)
 *
 * Si añades un texto visible nuevo, va aquí: en el bloque de contenido si es
 * del CV, o en `ui` si es de la interfaz. Queda bilingüe automáticamente.
 *
 * ── Regla de estructura ──────────────────────────────────────────────────
 * El `id` de cada entrada de `sections` tiene que coincidir con la clave de
 * datos del mismo bloque (id "projects" → cv.projects), y su `type` con un
 * renderizador de js/render.js. Los `id` son iguales en los dos idiomas a
 * propósito: así un enlace compartido (#projects) funciona en ambos.
 */

export const CV_DATA = {
  /* ══════════════════════════════════════════════════════════════════════
     ESPAÑOL
     ══════════════════════════════════════════════════════════════════════ */
  es: {
    /* Metadatos de la pestaña del navegador y del buscador */
    meta: {
      title: "Gibson Rosales · Desarrollador web junior",
      description:
        "Currículum de Gibson Rosales: profesor de matemáticas y administrativo que se volvió desarrollador automatizando su propio trabajo.",
    },

    identity: {
      name: "Gibson Rosales",
      role: "Desarrollador web junior",
      tagline:
        "De profesor de matemáticas a desarrollador. Automatizo lo que antes hacía a mano.",
      location: "Medellín, Antioquia, Colombia",
      status: "Buscando mi primer puesto como desarrollador",
      links: [
        {
          label: "GitHub",
          text: "github.com/Gibson1987R",
          href: "https://github.com/Gibson1987R",
        },
        {
          label: "LinkedIn",
          // El "7b2201176" del final es el sufijo que LinkedIn pone solo. Se
          // puede quitar desde el perfil (Editar URL pública). Si lo cambias
          // allí, cámbialo en los dos bloques de idioma.
          text: "linkedin.com/in/gibson-rosales-fuenmayor-7b2201176",
          href: "https://www.linkedin.com/in/gibson-rosales-fuenmayor-7b2201176",
        },
        {
          label: "Email",
          text: "gibsonrosales@gmail.com",
          href: "mailto:gibsonrosales@gmail.com",
        },
        {
          label: "Teléfono",
          text: "+57 310 552 8854",
          href: "tel:+573105528854",
        },
      ],

      /**
       * Datos que NO salen en la web y SÍ en el PDF.
       * La página es pública e indexable: el número de documento ahí es
       * material de suplantación. Muchas vacantes en Colombia sí lo piden,
       * así que vive aquí y solo se imprime.
       *
       * Pon `mostrar: true` cuando una vacante lo exija; luego vuelve a false.
       */
      soloImpresion: {
        mostrar: false,
        campos: [{ label: "Documento", value: "1.127.397.395" }],
      },
    },

    /* Un elemento por párrafo */
    about: [
      "Enseñé matemáticas nueve años y coordiné proyectos educativos en el Amazonas. Trabajando en el área de facturación de un hospital escribí mi primer script en Python para no seguir renombrando soportes a mano: ahí empezó esto.",
      "Hoy contribuyo con código revisado en dos productos reales y mantengo en producción una automatización que registra movimientos bancarios. Sigo siendo profesor en una cosa: si no sé explicar lo que escribí, es que todavía no lo entiendo.",
    ],

    /* Proyectos donde soy el dueño del código */
    projects: [
      {
        name: "honest-english",
        summary:
          "Rastreador de aprendizaje de inglés que se niega a gamificar: el contador muestra los días SIN practicar, no la racha, y el feedback de escritura no adula.",
        stack: ["JavaScript vanilla", "GitHub Pages", "BYOK (Claude · Whisper)"],
        result:
          "4 fases publicadas y en línea; sin una sola dependencia, con una lista de revisión que lo impide.",
        href: "https://gibson1987r.github.io/honest-english/",
      },
      {
        name: "bancolombia-lunchmoney",
        summary:
          "Automatización en Google Apps Script que lee las alertas del banco en Gmail y crea las transacciones en Lunch Money. La opero y la mantengo.",
        stack: ["Google Apps Script", "clasp", "API de Lunch Money"],
        result:
          "En producción sobre dinero real: cada cambio de parsing se valida antes contra correos guardados como fixtures.",
        href: "",
      },
    ],

    /**
     * Contribuciones en repos que no son míos.
     * Van aparte de `projects` a propósito: un proyecto propio demuestra que
     * sé empezar; una PR revisada y mergeada demuestra que sé trabajar con
     * otros.
     */
    contributions: [
      {
        name: "directo-ia",
        role: "Responsable del flujo de onboarding",
        about:
          "Venta por WhatsApp con IA para restaurantes, entrando a piloto real",
        stack: ["Next.js", "TypeScript", "React"],
        work: [
          "41 commits repartidos en unas 28 pull requests numeradas (#12 a #39).",
          "Rehíce el onboarding completo: validación paso a paso, mensajes de error en contexto y secciones incompletas señaladas antes de continuar.",
          "Accesibilidad por teclado y maquetación que aguanta títulos largos, pantallas bajas y móvil.",
        ],
        merged: "Todo mergeado tras revisión del dueño del repo",
      },
      {
        name: "skool-scraper",
        role: "Internacionalización y traducción offline",
        about: "PWA de cursos de ajedrez que funciona sin conexión",
        stack: ["React 19", "Vite", "Dexie / IndexedDB", "Supabase"],
        work: [
          "36 commits. Localicé la interfaz en tres idiomas y añadí la traducción del contenido de los cursos (PR #19).",
          "La traducción usa la API Translator del navegador, aplica un glosario de ajedrez, conserva las imágenes del markdown y se cachea en IndexedDB para no repetirse.",
          "Autenticación opcional con Supabase (PR #29) y corrección de la navegación entre puzzles.",
        ],
        merged: "Todo mergeado tras revisión del dueño del repo",
      },
    ],

    experience: [
      {
        role: "Tecnólogo, área de Talento Humano",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Contratación y control documental",
        start: "2025-11",
        end: "2026-03",
        startLabel: "nov 2025",
        endLabel: "mar 2026",
        achievements: [
          "Revisión documental de hojas de vida, soportes y expedientes de contratistas para validación jurídica.",
          "Seguimiento al plan de mejora y al mapa de riesgos exigidos por la Contraloría.",
          "Organicé la información de contratistas en hojas de cálculo y bases de datos para que el área jurídica pudiera rastrearla sin pedirla.",
        ],
        stack: ["Excel", "Bases de datos", "Gestión documental"],
      },
      {
        role: "Tecnólogo, Caja y Facturación",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Aquí escribí mi primer código útil",
        start: "2025-02",
        end: "2025-10",
        startLabel: "feb 2025",
        endLabel: "oct 2025",
        achievements: [
          "Automaticé con Python la división, el renombrado y la organización de los soportes digitales: lo que se hacía a mano expediente por expediente pasó a ser un script.",
          "Eso redujo el tiempo de clasificación y entrega de la documentación para el cobro de glosas ante las EPS.",
          "Caja, facturación y atención a usuarios, con información clínica sensible y los procedimientos que eso exige.",
        ],
        stack: ["Python", "Automatización de archivos"],
      },
      {
        role: "Coordinador de proyecto",
        company: "A.C. Construyendo Futuros / socio de UNICEF",
        context: "Venezuela · Educación, protección y agua en terreno",
        start: "2021-09",
        end: "2023-12",
        startLabel: "sep 2021",
        endLabel: "dic 2023",
        achievements: [
          "Coordiné equipos, cronogramas y reportes de actividades educativas y humanitarias con comunidades indígenas.",
          "Sostuve la trazabilidad de lo ejecutado: sin documentación verificable, un proyecto humanitario no se puede auditar ni renovar.",
        ],
        stack: ["Coordinación de equipos", "Reportería", "Trabajo en territorio"],
      },
      {
        role: "Profesor de matemáticas y educación básica",
        company: "Ministerio de Educación",
        context: "Venezuela",
        start: "2012-09",
        end: "2021-07",
        startLabel: "sep 2012",
        endLabel: "jul 2021",
        achievements: [
          "Nueve años explicando lo mismo de maneras distintas hasta dar con la que le servía a cada estudiante.",
          "Es la habilidad que más uso programando: leer código ajeno, entenderlo y poder contarlo.",
        ],
        stack: ["Docencia", "Planeación", "Comunicación"],
      },
    ],

    skills: [
      {
        category: "Lenguajes",
        items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML y CSS"],
      },
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "PWA y offline",
          "Accesibilidad",
          "Internacionalización",
          "CSS sin frameworks",
        ],
      },
      {
        category: "Backend y datos",
        items: [
          "Supabase",
          "IndexedDB / Dexie",
          "Google Apps Script",
          "Consumo de APIs REST",
        ],
      },
      {
        category: "Herramientas",
        items: [
          "Git y flujo de pull requests",
          "GitHub Actions",
          "Vite",
          "Trabajo con agentes de IA",
        ],
      },
    ],

    /**
     * Dos titulaciones. Ni una más.
     *
     * Ojo con la segunda: es UN solo título, no dos. Se cursó en Venezuela
     * como "Técnico Superior Universitario en Administración de Recursos
     * Humanos" y en Colombia se convalida como "Tecnólogo en Gestión de
     * Talento Humano". Los CV anteriores lo listaban por separado y parecían
     * dos estudios.
     */
    education: [
      {
        title: "Licenciado en Educación, mención Campesina y Rural",
        institution: "Venezuela",
        year: "",
      },
      {
        title:
          "Técnico Superior Universitario en Administración de Recursos Humanos",
        institution:
          "Convalidado en Colombia como Tecnólogo en Gestión de Talento Humano",
        year: "",
      },
      {
        title: "Programación — formación continua, sin titulación",
        institution:
          "Python con «Think Python» · desarrollo web sobre proyectos reales",
        year: "2026",
      },
    ],

    /**
     * Orden y títulos de la página.
     * Añadir, quitar o reordenar aquí cambia la página Y la paleta de
     * comandos. Los `id` tienen que ser los mismos en los dos idiomas.
     *
     * El orden NO es casual: proyectos y contribuciones van antes que la
     * experiencia. Los cargos dicen "profesor" y "facturador"; si eso es lo
     * primero que se lee, nadie llega hasta el código.
     */
    sections: [
      { id: "about", title: "Sobre mí", file: "sobre-mi.md", type: "about" },
      {
        id: "projects",
        title: "Proyectos propios",
        file: "proyectos.md",
        type: "projects",
      },
      {
        id: "contributions",
        title: "Contribuciones en equipo",
        file: "contribuciones.md",
        type: "contributions",
      },
      {
        id: "experience",
        title: "Experiencia",
        file: "experiencia.md",
        type: "experience",
      },
      { id: "skills", title: "Skills", file: "skills.json", type: "skills" },
      {
        id: "education",
        title: "Formación",
        file: "formacion.md",
        type: "education",
      },
    ],

    footer: {
      note: "Hecho a mano con HTML, CSS y JavaScript. Sin frameworks, sin analítica, sin cookies.",
      updated: "Última actualización: agosto de 2026",
    },

    /**
     * Textos de la interfaz, no del CV. Todo lo que se ve en pantalla y no
     * sale de los bloques de arriba está aquí: botones, paleta, etiquetas
     * para lectores de pantalla.
     *
     * Las claves `…Words` son las palabras con las que la paleta encuentra
     * cada comando al escribir. No se ven; solo se buscan.
     */
    ui: {
      lang: "es",
      /* Botón que cambia de idioma: muestra el idioma AL QUE va a cambiar */
      langBtn: "EN",
      langBtnLabel: "Switch to English",

      skipLink: "Saltar al contenido",
      searchBtn: "Buscar",
      printBtn: "PDF",
      themeBtn: "Tema",
      themeToLight: "Cambiar a tema claro",
      themeToDark: "Cambiar a tema oscuro",

      paletteLabel: "Paleta de comandos",
      paletteInputLabel: "Buscar sección o acción",
      palettePlaceholder: "Ir a una sección o ejecutar una acción…",
      paletteListLabel: "Comandos",
      paletteEmpty: "Sin resultados.",
      resultOne: "resultado",
      resultMany: "resultados",
      hintMove: "moverse",
      hintRun: "ejecutar",
      hintClose: "cerrar",

      goTo: "Ir a",
      open: "Abrir",
      cmdTop: "Ir al inicio",
      cmdTopHint: "cabecera",
      cmdTopWords: ["inicio", "arriba", "top", "cabecera"],
      cmdTheme: "Cambiar tema claro / oscuro",
      cmdThemeHint: "tema",
      cmdThemeWords: ["tema", "theme", "oscuro", "claro", "dark", "light"],
      cmdPrint: "Descargar / imprimir en PDF",
      cmdPrintHint: "imprimir",
      cmdPrintWords: ["pdf", "imprimir", "print", "descargar"],
      cmdCopyEmail: "Copiar email al portapapeles",
      cmdCopyWords: ["copiar", "email", "correo", "mail"],
      cmdLang: "Switch to English",
      cmdLangHint: "idioma",
      cmdLangWords: ["idioma", "language", "ingles", "english", "lang"],
      emailCopied: "Email copiado:",

      /* Etiquetas invisibles: las lee un lector de pantalla, no se ven */
      techIn: "Tecnologías en",
      stackOf: "Stack de",
      resultLabel: "Resultado:",
      srTo: "a",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════
     ENGLISH — misma estructura, clave por clave
     ══════════════════════════════════════════════════════════════════════ */
  en: {
    meta: {
      title: "Gibson Rosales · Junior web developer",
      description:
        "CV of Gibson Rosales: a maths teacher and administrative worker who became a developer by automating his own job.",
    },

    identity: {
      name: "Gibson Rosales",
      role: "Junior web developer",
      tagline:
        "From maths teacher to developer. I automate what I used to do by hand.",
      location: "Medellín, Antioquia, Colombia",
      status: "Looking for my first developer role",
      links: [
        {
          label: "GitHub",
          text: "github.com/Gibson1987R",
          href: "https://github.com/Gibson1987R",
        },
        {
          label: "LinkedIn",
          text: "linkedin.com/in/gibson-rosales-fuenmayor-7b2201176",
          href: "https://www.linkedin.com/in/gibson-rosales-fuenmayor-7b2201176",
        },
        {
          label: "Email",
          text: "gibsonrosales@gmail.com",
          href: "mailto:gibsonrosales@gmail.com",
        },
        {
          label: "Phone",
          text: "+57 310 552 8854",
          href: "tel:+573105528854",
        },
      ],

      soloImpresion: {
        mostrar: false,
        campos: [{ label: "ID number", value: "1.127.397.395" }],
      },
    },

    about: [
      "I taught maths for nine years and coordinated education projects in Amazonas. While working in a hospital billing office I wrote my first Python script so I would stop renaming files by hand. That is where this started.",
      "Today I contribute reviewed code to two real products, and I keep an automation in production that records bank transactions. I am still a teacher in one way: if I cannot explain what I wrote, I have not understood it yet.",
    ],

    projects: [
      {
        name: "honest-english",
        summary:
          "An English learning tracker that refuses to gamify: the counter shows the days WITHOUT practice, not the streak, and the writing feedback does not flatter.",
        stack: ["Vanilla JavaScript", "GitHub Pages", "BYOK (Claude · Whisper)"],
        result:
          "Four phases published and online, with zero dependencies and a review checklist that keeps it that way.",
        href: "https://gibson1987r.github.io/honest-english/",
      },
      {
        name: "bancolombia-lunchmoney",
        summary:
          "A Google Apps Script automation that reads bank alerts in Gmail and creates the transactions in Lunch Money. I run it and I maintain it.",
        stack: ["Google Apps Script", "clasp", "Lunch Money API"],
        result:
          "In production with real money: every parsing change is tested against saved emails first.",
        href: "",
      },
    ],

    contributions: [
      {
        name: "directo-ia",
        role: "Owner of the onboarding flow",
        about: "AI sales over WhatsApp for restaurants, entering a real pilot",
        stack: ["Next.js", "TypeScript", "React"],
        work: [
          "41 commits across about 28 numbered pull requests (#12 to #39).",
          "I rebuilt the whole onboarding: step by step validation, error messages in context, and incomplete sections flagged before moving on.",
          "Keyboard accessibility and a layout that holds up with long titles, short screens and mobile.",
        ],
        merged: "All merged after review by the repository owner",
      },
      {
        name: "skool-scraper",
        role: "Internationalization and offline translation",
        about: "A chess course PWA that works without a connection",
        stack: ["React 19", "Vite", "Dexie / IndexedDB", "Supabase"],
        work: [
          "36 commits. I localized the interface in three languages and added translation of the course content (PR #19).",
          "The translation uses the browser Translator API, applies a chess glossary, keeps the markdown images and is cached in IndexedDB so it does not repeat.",
          "Optional Supabase authentication (PR #29) and a fix for the navigation between puzzles.",
        ],
        merged: "All merged after review by the repository owner",
      },
    ],

    experience: [
      {
        role: "Human resources assistant",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Hiring paperwork and document control",
        start: "2025-11",
        end: "2026-03",
        startLabel: "Nov 2025",
        endLabel: "Mar 2026",
        achievements: [
          "Document review of CVs, supporting files and contractor records for legal validation.",
          "Follow-up on the improvement plan and the risk map required by the public audit office.",
          "I organized contractor information in spreadsheets and databases so the legal team could find it without asking for it.",
        ],
        stack: ["Excel", "Databases", "Document management"],
      },
      {
        role: "Cashier and billing assistant",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Where I wrote my first useful code",
        start: "2025-02",
        end: "2025-10",
        startLabel: "Feb 2025",
        endLabel: "Oct 2025",
        achievements: [
          "I used Python to automate splitting, renaming and filing the digital supporting documents: what was done by hand, file by file, became a script.",
          "That cut the time needed to sort and deliver the documentation used to claim payment from the health insurers.",
          "Cash desk, billing and user support, working with sensitive clinical information and the procedures it requires.",
        ],
        stack: ["Python", "File automation"],
      },
      {
        role: "Project coordinator",
        company: "A.C. Construyendo Futuros / UNICEF partner",
        context: "Venezuela · Education, protection and water in the field",
        start: "2021-09",
        end: "2023-12",
        startLabel: "Sep 2021",
        endLabel: "Dec 2023",
        achievements: [
          "I coordinated teams, schedules and activity reports for educational and humanitarian work with indigenous communities.",
          "I kept a record of everything delivered: without verifiable documents a humanitarian project cannot be audited or renewed.",
        ],
        stack: ["Team coordination", "Reporting", "Field work"],
      },
      {
        role: "Maths and primary school teacher",
        company: "Ministry of Education",
        context: "Venezuela",
        start: "2012-09",
        end: "2021-07",
        startLabel: "Sep 2012",
        endLabel: "Jul 2021",
        achievements: [
          "Nine years explaining the same thing in different ways until I found the one that worked for each student.",
          "It is the skill I use most when I program: reading someone else's code, understanding it and being able to explain it.",
        ],
        stack: ["Teaching", "Lesson planning", "Communication"],
      },
    ],

    skills: [
      {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML and CSS"],
      },
      {
        category: "Frontend",
        items: [
          "React",
          "Next.js",
          "PWA and offline",
          "Accessibility",
          "Internationalization",
          "CSS without frameworks",
        ],
      },
      {
        category: "Backend and data",
        items: [
          "Supabase",
          "IndexedDB / Dexie",
          "Google Apps Script",
          "REST API integration",
        ],
      },
      {
        category: "Tools",
        items: [
          "Git and pull request workflow",
          "GitHub Actions",
          "Vite",
          "Working with AI agents",
        ],
      },
    ],

    education: [
      {
        title: "Bachelor's degree in Education — Rural and Farming Communities",
        institution: "Venezuela",
        year: "",
      },
      {
        title: "Higher University Technician in Human Resources Administration",
        institution:
          "Recognized in Colombia as Tecnólogo en Gestión de Talento Humano",
        year: "",
      },
      {
        title: "Programming — ongoing self-study, no degree",
        institution:
          "Python with «Think Python» · web development on real projects",
        year: "2026",
      },
    ],

    sections: [
      { id: "about", title: "About me", file: "about-me.md", type: "about" },
      {
        id: "projects",
        title: "My own projects",
        file: "projects.md",
        type: "projects",
      },
      {
        id: "contributions",
        title: "Team contributions",
        file: "contributions.md",
        type: "contributions",
      },
      {
        id: "experience",
        title: "Experience",
        file: "experience.md",
        type: "experience",
      },
      { id: "skills", title: "Skills", file: "skills.json", type: "skills" },
      {
        id: "education",
        title: "Education",
        file: "education.md",
        type: "education",
      },
    ],

    footer: {
      note: "Hand-written in HTML, CSS and JavaScript. No frameworks, no analytics, no cookies.",
      updated: "Last updated: August 2026",
    },

    ui: {
      lang: "en",
      langBtn: "ES",
      langBtnLabel: "Cambiar a español",

      skipLink: "Skip to content",
      searchBtn: "Search",
      printBtn: "PDF",
      themeBtn: "Theme",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",

      paletteLabel: "Command palette",
      paletteInputLabel: "Search a section or an action",
      palettePlaceholder: "Go to a section or run an action…",
      paletteListLabel: "Commands",
      paletteEmpty: "No results.",
      resultOne: "result",
      resultMany: "results",
      hintMove: "move",
      hintRun: "run",
      hintClose: "close",

      goTo: "Go to",
      open: "Open",
      cmdTop: "Go to top",
      cmdTopHint: "header",
      cmdTopWords: ["top", "up", "start", "header"],
      cmdTheme: "Toggle light / dark theme",
      cmdThemeHint: "theme",
      cmdThemeWords: ["theme", "dark", "light", "tema"],
      cmdPrint: "Download / print as PDF",
      cmdPrintHint: "print",
      cmdPrintWords: ["pdf", "print", "download"],
      cmdCopyEmail: "Copy email to clipboard",
      cmdCopyWords: ["copy", "email", "mail"],
      cmdLang: "Cambiar a español",
      cmdLangHint: "language",
      cmdLangWords: ["language", "idioma", "spanish", "español", "lang"],
      emailCopied: "Email copied:",

      techIn: "Technologies at",
      stackOf: "Stack of",
      resultLabel: "Result:",
      srTo: "to",
    },
  },
};
