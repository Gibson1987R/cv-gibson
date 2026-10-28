/**
 * Contenido único del CV: tres perfiles, en español e inglés.
 * Cada perfil conserva los ids de sección entre idiomas y los mismos hechos.
 * `soloWeb` en una sección/entrada conserva contexto fuera del PDF de candidatura.
 * Las tecnologías de un proyecto no representan dominio de programación manual.
 * Respaldo editorial: output/pdf/2026-10-27-tres-perfiles/registro-respaldo.csv.
 */
export const PROFILES = ["tecnologia", "talento-humano", "docencia"];

const SHARED = {
  "es": {
    "identity": {
      "name": "Gibson Samuel Rosales Fuenmayor",
      "location": "Medellín, Antioquia, Colombia",
      "status": "",
      "links": [
        {
          "label": "GitHub",
          "text": "github.com/Gibson1987R",
          "href": "https://github.com/Gibson1987R",
          "icon": "github"
        },
        {
          "label": "LinkedIn",
          "text": "linkedin.com/in/gibson-rosales-fuenmayor",
          "href": "https://www.linkedin.com/in/gibson-rosales-fuenmayor",
          "icon": "linkedin"
        },
        {
          "label": "WhatsApp",
          "text": "+57 310 552 8854",
          "href": "https://wa.me/573105528854",
          "icon": "whatsapp"
        },
        {
          "label": "Email",
          "text": "gibsonrosales@gmail.com",
          "href": "mailto:gibsonrosales@gmail.com",
          "icon": "email"
        }
      ],
      "soloImpresion": {
        "mostrar": false,
        "campos": []
      }
    },
    "ui": {
      "lang": "es",
      "langBtn": "EN",
      "langBtnLabel": "Switch to English",
      "skipLink": "Saltar al contenido",
      "searchBtn": "Buscar",
      "printBtn": "PDF",
      "themeBtn": "Tema",
      "scenePause": "Pausar fondo",
      "sceneResume": "Animar fondo",
      "sceneStatic": "Fondo estático",
      "sceneAlphabet": "A B C",
      "themeToLight": "Cambiar a tema claro",
      "themeToDark": "Cambiar a tema oscuro",
      "paletteLabel": "Paleta de comandos",
      "paletteInputLabel": "Buscar sección o acción",
      "palettePlaceholder": "Ir a una sección o ejecutar una acción…",
      "paletteListLabel": "Comandos",
      "paletteEmpty": "Sin resultados.",
      "resultOne": "resultado",
      "resultMany": "resultados",
      "hintMove": "moverse",
      "hintRun": "ejecutar",
      "hintClose": "cerrar",
      "goTo": "Ir a",
      "open": "Abrir",
      "cmdTop": "Ir al inicio",
      "cmdTopHint": "cabecera",
      "cmdTopWords": [
        "inicio",
        "arriba",
        "top",
        "cabecera"
      ],
      "cmdTheme": "Cambiar tema claro / oscuro",
      "cmdThemeHint": "tema",
      "cmdThemeWords": [
        "tema",
        "theme",
        "oscuro",
        "claro",
        "dark",
        "light"
      ],
      "cmdPrint": "Descargar / imprimir en PDF",
      "cmdPrintHint": "imprimir",
      "cmdPrintWords": [
        "pdf",
        "imprimir",
        "print",
        "descargar"
      ],
      "cmdCopyEmail": "Copiar email al portapapeles",
      "cmdCopyWords": [
        "copiar",
        "email",
        "correo",
        "mail"
      ],
      "cmdLang": "Switch to English",
      "cmdLangHint": "idioma",
      "cmdLangWords": [
        "idioma",
        "language",
        "ingles",
        "english",
        "lang"
      ],
      "emailCopied": "Email copiado:",
      "foldOpen": "Ver lo que hice",
      "foldClose": "Ocultar",
      "resultLabel": "Resultado:",
      "srTo": "a",
      "profilesLabel": "Versiones del CV",
      "profileTechnology": "Tecnología",
      "profileHR": "Talento Humano",
      "profileTeaching": "Docencia",
      "profilePrint": "Guardar este perfil en PDF",
      "profilePrintHelp": "Selecciona PDF y elige Guardar como PDF en el diálogo de impresión."
    },
    "footer": {
      "updated": "Última actualización: octubre de 2026"
    }
  },
  "en": {
    "identity": {
      "name": "Gibson Samuel Rosales Fuenmayor",
      "location": "Medellín, Antioquia, Colombia",
      "status": "",
      "links": [
        {
          "label": "GitHub",
          "text": "github.com/Gibson1987R",
          "href": "https://github.com/Gibson1987R",
          "icon": "github"
        },
        {
          "label": "LinkedIn",
          "text": "linkedin.com/in/gibson-rosales-fuenmayor",
          "href": "https://www.linkedin.com/in/gibson-rosales-fuenmayor",
          "icon": "linkedin"
        },
        {
          "label": "WhatsApp",
          "text": "+57 310 552 8854",
          "href": "https://wa.me/573105528854",
          "icon": "whatsapp"
        },
        {
          "label": "Email",
          "text": "gibsonrosales@gmail.com",
          "href": "mailto:gibsonrosales@gmail.com",
          "icon": "email"
        }
      ],
      "soloImpresion": {
        "mostrar": false,
        "campos": []
      }
    },
    "ui": {
      "lang": "en",
      "langBtn": "ES",
      "langBtnLabel": "Cambiar a español",
      "skipLink": "Skip to content",
      "searchBtn": "Search",
      "printBtn": "PDF",
      "themeBtn": "Theme",
      "scenePause": "Pause background",
      "sceneResume": "Animate background",
      "sceneStatic": "Static background",
      "sceneAlphabet": "A B C",
      "themeToLight": "Switch to light theme",
      "themeToDark": "Switch to dark theme",
      "paletteLabel": "Command palette",
      "paletteInputLabel": "Search a section or an action",
      "palettePlaceholder": "Go to a section or run an action…",
      "paletteListLabel": "Commands",
      "paletteEmpty": "No results.",
      "resultOne": "result",
      "resultMany": "results",
      "hintMove": "move",
      "hintRun": "run",
      "hintClose": "close",
      "goTo": "Go to",
      "open": "Open",
      "cmdTop": "Go to top",
      "cmdTopHint": "header",
      "cmdTopWords": [
        "top",
        "up",
        "start",
        "header"
      ],
      "cmdTheme": "Toggle light / dark theme",
      "cmdThemeHint": "theme",
      "cmdThemeWords": [
        "theme",
        "dark",
        "light",
        "tema"
      ],
      "cmdPrint": "Download / print as PDF",
      "cmdPrintHint": "print",
      "cmdPrintWords": [
        "pdf",
        "print",
        "download"
      ],
      "cmdCopyEmail": "Copy email to clipboard",
      "cmdCopyWords": [
        "copy",
        "email",
        "mail"
      ],
      "cmdLang": "Cambiar a español",
      "cmdLangHint": "language",
      "cmdLangWords": [
        "language",
        "idioma",
        "spanish",
        "español",
        "lang"
      ],
      "emailCopied": "Email copied:",
      "foldOpen": "See what I did",
      "foldClose": "Hide",
      "resultLabel": "Result:",
      "srTo": "to",
      "profilesLabel": "CV versions",
      "profileTechnology": "Technology",
      "profileHR": "Human Resources",
      "profileTeaching": "Teaching",
      "profilePrint": "Save this profile as PDF",
      "profilePrintHelp": "Select PDF and choose Save as PDF in the print dialog."
    },
    "footer": {
      "updated": "Last updated: October 2026"
    }
  }
};

const JOBS = {
  "es": [
    {
      "role": "Coordinador del Estado Amazonas / Coordinador regional",
      "company": "A.C. Construyendo Futuros · organización socia de UNICEF",
      "context": "Amazonas, Venezuela · Por proyectos; programas con periodos solapados",
      "start": "2021-09",
      "end": "2023-12",
      "startLabel": "sep 2021",
      "endLabel": "dic 2023",
      "achievements": [
        "Coordiné AliMentes (sep 2021 - ago 2022), el programa de agua, higiene y saneamiento en escuelas de Atures (jul - oct 2022) y Manos Que Construyen (culminación en dic 2023).",
        "Coordiné a 58 personas en territorio: organicé tareas, cronogramas y seguimiento de entregas, y articulé equipos técnicos, comunidades e instituciones aliadas.",
        {
          "text": "Mantuve la trazabilidad de lo ejecutado mediante reportes y organización documental. Mi vinculación fue con la asociación; los periodos agrupan proyectos y no suponen continuidad contractual.",
          "pdf": "Mantuve la trazabilidad de lo ejecutado mediante reportes y organización documental."
        }
      ]
    },
    {
      "role": "Tecnólogo en caja y facturación",
      "company": "Hospital Departamental San Juan de Dios E.S.E.",
      "context": "Puerto Carreño, Colombia · Contratos con interrupciones",
      "start": "2025-02",
      "end": "2025-10",
      "startLabel": "feb 2025",
      "endLabel": "oct 2025",
      "achievements": [
        "Gestioné facturación en Xenco, revisión y clasificación de soportes, atención al usuario y organización documental para la entrega de cuentas.",
        "Estandaricé la recepción de escaneos y dirigí con apoyo de Copilot un script para dividir y renombrar documentos: una tarea de clasificación pasó de unas 30 horas a una."
      ]
    },
    {
      "role": "Tecnólogo de apoyo a la gestión · Talento Humano",
      "company": "Hospital Departamental San Juan de Dios E.S.E.",
      "context": "Puerto Carreño, Colombia · Contratos con interrupciones",
      "start": "2025-11",
      "end": "2026-03",
      "startLabel": "nov 2025",
      "endLabel": "mar 2026",
      "achievements": [
        "Apoyé la verificación de títulos, hojas de vida en SIGEP II y listas de chequeo de contratación; organicé los soportes requeridos para revisión y validación.",
        "Realicé seguimiento documental a mapas de riesgos y al plan de mejora de Contraloría, dentro de las funciones de apoyo del área.",
        "Modelé en Excel información de más de 500 contratistas de cuatro municipios y la conecté con Word mediante combinación de correspondencia: preparar un documento pasó de 20-30 a 4-5 minutos."
      ]
    },
    {
      "role": "Docente de aula · Enseñanza de matemáticas",
      "company": "Ministerio del Poder Popular para la Educación",
      "context": "Venezuela · C D-Pedro Lucas Urribarri",
      "start": "2012-09",
      "end": "2021-07",
      "startLabel": "sep 2012",
      "endLabel": "jul 2021",
      "achievements": [
        "Enseñé matemáticas durante mi trayectoria docente y adapté las explicaciones para facilitar la comprensión de los estudiantes.",
        "Mantuve comunicación con las familias y la comunidad educativa para acompañar el proceso de aprendizaje."
      ]
    }
  ],
  "en": [
    {
      "role": "State Coordinator / Regional Coordinator",
      "company": "A.C. Construyendo Futuros · UNICEF partner organization",
      "context": "Amazonas, Venezuela · Project-based; some programs overlapped",
      "start": "2021-09",
      "end": "2023-12",
      "startLabel": "Sep 2021",
      "endLabel": "Dec 2023",
      "achievements": [
        "I coordinated AliMentes (Sep 2021 - Aug 2022), the water, hygiene and sanitation program in Atures schools (Jul - Oct 2022), and Manos Que Construyen (completed in Dec 2023).",
        "I coordinated 58 people in the field, organizing tasks, schedules and delivery tracking, and connecting technical teams, communities and partner institutions.",
        {
          "text": "I maintained traceability through reports and document organization. My engagement was with the association; these dates group projects and do not imply continuous employment.",
          "pdf": "I maintained traceability through reports and document organization."
        }
      ]
    },
    {
      "role": "Cashier and Billing Technologist",
      "company": "Hospital Departamental San Juan de Dios E.S.E.",
      "context": "Puerto Carreño, Colombia · Separate contracts with gaps",
      "start": "2025-02",
      "end": "2025-10",
      "startLabel": "Feb 2025",
      "endLabel": "Oct 2025",
      "achievements": [
        "I handled billing in Xenco, reviewed and classified supporting documents, assisted users and organized documentation for account submission.",
        "I standardized document scanning intake and directed a Copilot-assisted script to split and rename documents, reducing a classification task from about 30 hours to one."
      ]
    },
    {
      "role": "Administrative Support Technologist · Human Resources",
      "company": "Hospital Departamental San Juan de Dios E.S.E.",
      "context": "Puerto Carreño, Colombia · Separate contracts with gaps",
      "start": "2025-11",
      "end": "2026-03",
      "startLabel": "Nov 2025",
      "endLabel": "Mar 2026",
      "achievements": [
        "I supported verification of qualifications, CVs in SIGEP II and contracting checklists, organizing documents for review and validation.",
        "I tracked documentation for risk maps and the improvement plan required by Contraloría within the support responsibilities of the department.",
        "I modeled information on over 500 contractors across four municipalities in Excel and connected it to Word through mail merge, reducing document preparation from 20-30 to 4-5 minutes."
      ]
    },
    {
      "role": "Classroom Teacher · Mathematics teaching",
      "company": "Ministry of Popular Power for Education",
      "context": "Venezuela · C D-Pedro Lucas Urribarri",
      "start": "2012-09",
      "end": "2021-07",
      "startLabel": "Sep 2012",
      "endLabel": "Jul 2021",
      "achievements": [
        "I taught mathematics during my teaching career and adapted explanations to help students understand the material.",
        "I maintained communication with families and the school community to support learning."
      ]
    }
  ]
};

const PROJECTS = {
  "es": [
    {
      "name": "directo-ia",
      "role": "Onboarding y presentación del producto",
      "period": "jun 2026 - ago 2026",
      "about": "Producto de venta por WhatsApp para restaurantes · colaboración con desarrollo asistido por IA",
      "work": [
        "Propuse un registro conversacional y dirigí su desarrollo con agentes de IA. Revisé el flujo funcional y solicité ajustes de validación, teclado y adaptación a móvil.",
        "También participé con agentes en ajustes responsive de la landing. El historial del repositorio conserva esas contribuciones bajo mi cuenta."
      ],
      "result": "El onboarding adoptó el enfoque conversacional. Mi aportación combina propuesta, dirección del trabajo asistido y revisión funcional.",
      "href": "https://directo-ia.vercel.app",
      "stack": "Tecnologías del proyecto: Next.js · React · TypeScript · Vercel"
    },
    {
      "name": "chess-lab",
      "role": "Internacionalización y traducción de cursos",
      "period": "2026",
      "about": "PWA educativa de ajedrez · colaboración en un producto de un tercero",
      "work": [
        "Participé mediante agentes en la adaptación multilingüe de la aplicación: traducción local, conservación de imágenes y normalización de términos de ajedrez.",
        "Trabajé sobre la consulta del contenido traducido y su conservación local; la integración fue revisada por el responsable del repositorio."
      ],
      "result": "Contribución integrada en el PR #19: el contenido traducido puede consultarse y conservarse localmente.",
      "href": "https://chesspwa.netlify.app",
      "stack": "Tecnologías del proyecto: React · TypeScript · Dexie/IndexedDB"
    },
    {
      "name": "honest-english",
      "role": "Producto propio desarrollado con IA",
      "period": "may 2026",
      "about": "Herramienta personal para seguir la práctica real de inglés",
      "work": [
        "Definí el producto y dirigí su creación con IA, priorizando la práctica real frente a premiar solo abrir una aplicación.",
        "El producto combina seguimiento de práctica, ejercicios y feedback de escritura."
      ],
      "result": "Producto de portafolio con seguimiento y feedback de escritura; repositorio y aplicación disponibles como muestra de trabajo.",
      "href": "https://gibson1987r.github.io/honest-english/",
      "stack": "Tecnologías del proyecto: HTML · CSS · JavaScript"
    },
    {
      "name": "fiestas-web",
      "role": "Invitaciones web con apoyo de IA",
      "period": "feb 2026",
      "about": "Proyecto propio de invitaciones y confirmación de asistencia",
      "work": [
        "Definí una invitación web que reúne información del evento y confirmación de asistencia, y dirigí su desarrollo con IA."
      ],
      "result": "Una misma página permite compartir el evento y recoger confirmaciones.",
      "href": "https://fiestas-app.vercel.app",
      "stack": "Tecnologías del proyecto: React · Firebase"
    },
    {
      "name": "bancolombia-lunchmoney",
      "role": "Automatización de registro de movimientos",
      "period": "jun 2026",
      "about": "Integración de alertas bancarias, correo y Lunch Money · proyecto de un tercero",
      "work": [
        "Participé con desarrollo asistido por IA en la integración de alertas bancarias y Lunch Money mediante Apps Script y API REST.",
        "Reviso los movimientos registrados y los cambios de formato del correo desde la operación administrativa, y solicito o dirijo ajustes cuando es necesario."
      ],
      "result": "Las alertas pueden convertirse en movimientos registrados; mi aportación une conocimiento del proceso y seguimiento funcional.",
      "stack": "Tecnologías del proyecto: Google Apps Script · JavaScript · API REST"
    }
  ],
  "en": [
    {
      "name": "directo-ia",
      "role": "Onboarding and product presentation",
      "period": "Jun 2026 - Aug 2026",
      "about": "WhatsApp sales product for restaurants · AI-assisted collaboration",
      "work": [
        "I proposed conversational onboarding and directed its development with AI agents. I reviewed the functional flow and requested validation, keyboard and mobile adjustments.",
        "I also worked with agents on responsive landing-page adjustments. The repository history records those contributions under my account."
      ],
      "result": "The onboarding adopted the conversational approach. My contribution combines the proposal, direction of assisted development and functional review.",
      "href": "https://directo-ia.vercel.app",
      "stack": "Project technologies: Next.js · React · TypeScript · Vercel"
    },
    {
      "name": "chess-lab",
      "role": "Internationalization and course translation",
      "period": "2026",
      "about": "Educational chess PWA · contribution to a third-party product",
      "work": [
        "I used agents to contribute to the multilingual adaptation: local translation, image preservation and normalization of chess terminology.",
        "I worked on accessing and keeping translated content locally; the repository owner reviewed the integration."
      ],
      "result": "Contribution merged through PR #19, allowing translated content to be accessed and retained locally.",
      "href": "https://chesspwa.netlify.app",
      "stack": "Project technologies: React · TypeScript · Dexie/IndexedDB"
    },
    {
      "name": "honest-english",
      "role": "Personal product built with AI",
      "period": "May 2026",
      "about": "Personal tool for tracking real English practice",
      "work": [
        "I defined the product and directed its creation with AI, prioritizing actual practice rather than rewarding opening an app.",
        "The product combines practice tracking, exercises and writing feedback."
      ],
      "result": "Portfolio product with practice tracking and writing feedback; repository and application available as work samples.",
      "href": "https://gibson1987r.github.io/honest-english/",
      "stack": "Project technologies: HTML · CSS · JavaScript"
    },
    {
      "name": "fiestas-web",
      "role": "Web invitations with AI assistance",
      "period": "Feb 2026",
      "about": "Personal invitation and attendance confirmation project",
      "work": [
        "I defined an invitation page bringing together event information and attendance confirmation, and directed its development with AI."
      ],
      "result": "One page can share the event and collect confirmations.",
      "href": "https://fiestas-app.vercel.app",
      "stack": "Project technologies: React · Firebase"
    },
    {
      "name": "bancolombia-lunchmoney",
      "role": "Transaction recording automation",
      "period": "Jun 2026",
      "about": "Integration of bank alerts, email and Lunch Money · third-party project",
      "work": [
        "I contributed through AI-assisted development to the integration of bank alerts and Lunch Money using Apps Script and a REST API.",
        "I review recorded transactions and email-format changes from the administrative operation, requesting or directing adjustments when needed."
      ],
      "result": "Alerts can become recorded transactions; my contribution connects process knowledge with functional follow-up.",
      "stack": "Project technologies: Google Apps Script · JavaScript · REST API"
    }
  ]
};

const QA_CASES = {
  "es": [
    {
      "name": "Urban Routes · Sprint 1",
      "role": "Pruebas de regresión",
      "period": "sep 2026 - formación en curso",
      "about": "TripleTen · proyecto académico",
      "work": [
        "Ejecuté los casos proporcionados y registré el comportamiento de la aplicación: el libro conserva 11 casos, nueve aprobados y dos fallidos.",
        "Documenté dos errores: una respuesta HTTP 503 y una pantalla de espera que bloquea la aplicación. Registré pasos, resultado esperado y real, y captura o video."
      ],
      "result": "Dos reportes reproducibles vinculados a los resultados de regresión. Evidencia: libro de pruebas y captura/video del proyecto."
    },
    {
      "name": "Urban Routes · Sprint 2",
      "role": "Comprobación de interfaz y reportes de errores",
      "period": "2026 · práctica académica",
      "about": "TripleTen · reserva de automóviles en Chrome y Firefox",
      "work": [
        "Trabajé una checklist de 63 comprobaciones y registré su ejecución en Chrome y Firefox, comparando la interfaz con requisitos y diseño.",
        "Documenté siete defectos de texto o representación visual, con pasos y evidencias en ambos navegadores. Las propuestas de prioridad quedan sujetas a revisión."
      ],
      "result": "Checklist ejecutada y siete reportes con 14 capturas, dos por defecto. Evidencia: Proyecto-Sprint-2-Urban-Routes.xlsx."
    }
  ],
  "en": [
    {
      "name": "Urban Routes · Sprint 1",
      "role": "Regression testing",
      "period": "Sep 2026 - training in progress",
      "about": "TripleTen · academic project",
      "work": [
        "I executed the provided test cases and recorded application behavior: the workbook contains 11 cases, nine passed and two failed.",
        "I documented two defects: an HTTP 503 response and a waiting screen that blocks the application, recording steps, expected and actual results, and screenshot or video evidence."
      ],
      "result": "Two reproducible reports linked to regression results. Evidence: test workbook and project screenshot/video."
    },
    {
      "name": "Urban Routes · Sprint 2",
      "role": "UI checks and bug reporting",
      "period": "2026 · academic practice",
      "about": "TripleTen · car booking in Chrome and Firefox",
      "work": [
        "I worked on a checklist of 63 checks and recorded execution in Chrome and Firefox, comparing the interface with requirements and design.",
        "I documented seven text or visual defects with steps and evidence in both browsers. Proposed priorities remain subject to review."
      ],
      "result": "Executed checklist and seven reports with 14 screenshots, two per defect. Evidence: Proyecto-Sprint-2-Urban-Routes.xlsx."
    }
  ]
};

const TECH_SKILLS = {
  "es": [
    {
      "category": "Creación de aplicaciones con IA",
      "items": [
        "Definición de requisitos y comportamiento esperado",
        "Instrucciones y seguimiento a agentes",
        "Revisión funcional y solicitud de correcciones",
        "Documentación de entregas"
      ]
    },
    {
      "category": "QA manual",
      "items": [
        "Ejecución de casos de regresión",
        "Checklists de UI",
        "Resultados esperados y obtenidos",
        "Reportes reproducibles con evidencia",
        "Chrome y Firefox"
      ]
    },
    {
      "category": "QA con apoyo de IA",
      "items": [
        "Contraste de criterios de aceptación y diseños",
        "Revisión de propuestas de cobertura",
        "Preguntas sobre requisitos ambiguos"
      ]
    },
    {
      "category": "Práctica académica en curso",
      "items": [
        "Clases de equivalencia",
        "Valores límite",
        "Combinaciones por pares",
        "Fundamentos Agile/Scrum"
      ]
    },
    {
      "category": "Herramientas utilizadas",
      "items": [
        "Codex y Claude",
        "Git/GitHub en el flujo asistido",
        "Hojas de cálculo",
        "DevTools: solicitudes y estados HTTP"
      ]
    }
  ],
  "en": [
    {
      "category": "Building applications with AI",
      "items": [
        "Requirements and expected behavior",
        "Instructions and follow-up for agents",
        "Functional review and correction requests",
        "Delivery documentation"
      ]
    },
    {
      "category": "Manual QA",
      "items": [
        "Regression test execution",
        "UI checklists",
        "Expected and actual results",
        "Reproducible reports with evidence",
        "Chrome and Firefox"
      ]
    },
    {
      "category": "AI-assisted QA",
      "items": [
        "Comparing acceptance criteria and designs",
        "Reviewing coverage suggestions",
        "Questions on ambiguous requirements"
      ]
    },
    {
      "category": "Academic practice in progress",
      "items": [
        "Equivalence classes",
        "Boundary values",
        "Pairwise combinations",
        "Agile/Scrum fundamentals"
      ]
    },
    {
      "category": "Tools used",
      "items": [
        "Codex and Claude",
        "Git/GitHub in the assisted workflow",
        "Spreadsheets",
        "DevTools: requests and HTTP status codes"
      ]
    }
  ]
};

const ADMIN_SKILLS = {
  "es": [
    {
      "category": "Talento Humano y documentación",
      "items": [
        "Apoyo documental a contratación",
        "Verificación de títulos y hojas de vida",
        "SIGEP II",
        "Organización de expedientes y soportes"
      ]
    },
    {
      "category": "Administración y mejora de procesos",
      "items": [
        "Excel y Word",
        "Combinación de correspondencia",
        "Estructuración de información",
        "Seguimiento documental de riesgos y planes de mejora"
      ]
    },
    {
      "category": "Coordinación",
      "items": [
        "Tareas y cronogramas",
        "Seguimiento de entregas",
        "Articulación con equipos y comunidades",
        "Reportes y trazabilidad"
      ]
    }
  ],
  "en": [
    {
      "category": "Human resources and documentation",
      "items": [
        "Document support for contracting",
        "Qualification and CV checks",
        "SIGEP II",
        "Organizing records and supporting documents"
      ]
    },
    {
      "category": "Administration and process improvement",
      "items": [
        "Excel and Word",
        "Mail merge",
        "Structuring information",
        "Documentation follow-up for risks and improvement plans"
      ]
    },
    {
      "category": "Coordination",
      "items": [
        "Tasks and schedules",
        "Delivery tracking",
        "Coordination with teams and communities",
        "Reporting and traceability"
      ]
    }
  ]
};

const TEACHING_SKILLS = {
  "es": [
    {
      "category": "Enseñanza",
      "items": [
        "Explicación de contenidos matemáticos",
        "Adaptación de explicaciones",
        "Acompañamiento al aprendizaje"
      ]
    },
    {
      "category": "Comunidad educativa",
      "items": [
        "Comunicación con estudiantes y familias",
        "Coordinación de actividades escolares y comunitarias",
        "Organización y seguimiento de entregas"
      ]
    },
    {
      "category": "Herramientas digitales",
      "items": [
        "Creación de aplicaciones educativas con IA",
        "Experiencia complementaria de portafolio"
      ]
    }
  ],
  "en": [
    {
      "category": "Teaching",
      "items": [
        "Explaining mathematical concepts",
        "Adapting explanations",
        "Supporting learning"
      ]
    },
    {
      "category": "School community",
      "items": [
        "Communication with students and families",
        "Coordination of school and community activities",
        "Organization and delivery tracking"
      ]
    },
    {
      "category": "Digital tools",
      "items": [
        "Building educational applications with AI",
        "Complementary portfolio experience"
      ]
    }
  ]
};

const DEGREES = {
  "es": [
    {
      "title": "Licenciado en Educación Campesina y Rural",
      "institution": {
        "text": "Universidad Pedagógica Experimental Libertador · Origen: Profesor Especialidad: Educación Rural, 10 jul 2019. Convalidación MEN 007939, 12 may 2023.",
        "pdf": "Universidad Pedagógica Experimental Libertador · 2019. Convalidación MEN 007939, 12 may 2023."
      },
      "year": ""
    },
    {
      "title": "Tecnólogo en Gestión del Talento Humano",
      "institution": {
        "text": "Instituto Universitario de Educación Especializada - IUNE · Origen: T.S.U. en Administración de Recursos Humanos, 30 sep 2009. Convalidación MEN 013034, 24 jun 2025.",
        "pdf": "Instituto Universitario de Educación Especializada - IUNE · 2009. Convalidación MEN 013034, 24 jun 2025."
      },
      "year": ""
    }
  ],
  "en": [
    {
      "title": "Licenciado en Educación Campesina y Rural",
      "institution": {
        "text": "Universidad Pedagógica Experimental Libertador · Original qualification: Profesor Especialidad: Educación Rural, 10 Jul 2019. Colombian recognition: MEN 007939, 12 May 2023.",
        "pdf": "Universidad Pedagógica Experimental Libertador · 2019. Colombian recognition: MEN 007939, 12 May 2023."
      },
      "year": ""
    },
    {
      "title": "Tecnólogo en Gestión del Talento Humano",
      "institution": {
        "text": "Instituto Universitario de Educación Especializada - IUNE · Original qualification: T.S.U. en Administración de Recursos Humanos, 30 Sep 2009. Colombian recognition: MEN 013034, 24 Jun 2025.",
        "pdf": "Instituto Universitario de Educación Especializada - IUNE · 2009. Colombian recognition: MEN 013034, 24 Jun 2025."
      },
      "year": ""
    }
  ]
};

const QA_METHOD = {
  "es": [
    "Delimito el fragmento de requisitos y diseño que se quiere revisar y preparo instrucciones para que la IA señale vacíos o inconsistencias. Contrasto las propuestas con las fuentes: lo que no está especificado se registra como pregunta. La ejecución manual y la evidencia del comportamiento de la aplicación permiten comprobar el resultado real.",
    "En el Sprint 3 de TripleTen practico clases de equivalencia, valores límite y combinaciones por pares. También preparé un prompt de tabla de decisiones basada en requisitos. La IA apoya el análisis; los ejercicios siguen en desarrollo y revisión."
  ],
  "en": [
    "I define the specific requirements and design fragment to review and prepare instructions for AI to identify gaps or inconsistencies. I check suggestions against the sources, turning unspecified behavior into questions. Manual execution and evidence of actual application behavior are used to verify the result.",
    "In TripleTen Sprint 3, I am practicing equivalence classes, boundary values and pairwise combinations. I also prepared a prompt for a requirements-based decision table. AI supports the analysis; these exercises remain in development and review."
  ]
};

const TECH_TRAINING = {
  "es": [
    {
      "title": "QA Engineering · formación en curso",
      "institution": "TripleTen · QA manual y asistido por IA; proyectos académicos de sprints 1 y 2, ejercicios de sprint 3; fundamentos Agile/Scrum.",
      "year": "sep 2026 - en curso"
    },
    {
      "title": "Formación complementaria en programación",
      "institution": "Platzi · Antecedentes formativos, complementados hoy con creación de productos mediante agentes.",
      "year": "2017-2020"
    }
  ],
  "en": [
    {
      "title": "QA Engineering · training in progress",
      "institution": "TripleTen · manual and AI-assisted QA; academic projects from sprints 1 and 2, sprint 3 exercises; Agile/Scrum fundamentals.",
      "year": "Sep 2026 - in progress"
    },
    {
      "title": "Additional programming education",
      "institution": "Platzi · Earlier training, now complemented by product creation using agents.",
      "year": "2017-2020"
    }
  ]
};

const PROFILE_CONTENT = {
  "es": {
    "tecnologia": {
      "meta": {
        "title": "Gibson Rosales · Desarrollo web con IA y QA manual y asistido por IA",
        "description": "Creo aplicaciones web con herramientas y agentes de IA como Codex y Claude: defino el comportamiento esperado, doy instrucciones, reviso el resultado funcional y solicito correcciones. Complemento esta práctica con formación en QA Engineering en TripleTen, donde ejecuto pruebas manuales, documento defectos y utilizo IA como apoyo al análisis y diseño de pruebas. Mi aportación se centra en entender el problema, dirigir el trabajo asistido y comprobar el producto.",
        "pdfName": "GibsonRosalesTecnologiaES"
      },
      "about": [
        "Creo aplicaciones web con herramientas y agentes de IA como Codex y Claude: defino el comportamiento esperado, doy instrucciones, reviso el resultado funcional y solicito correcciones. Complemento esta práctica con formación en QA Engineering en TripleTen, donde ejecuto pruebas manuales, documento defectos y utilizo IA como apoyo al análisis y diseño de pruebas. Mi aportación se centra en entender el problema, dirigir el trabajo asistido y comprobar el producto."
      ],
      "sections": [
        {
          "id": "about",
          "title": "Perfil profesional",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "skills",
          "title": "Habilidades",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "qa",
          "title": "Formación práctica en QA",
          "file": "qa.md",
          "type": "experience"
        },
        {
          "id": "method",
          "title": "Cómo utilizo IA como apoyo a QA",
          "file": "method.md",
          "type": "about"
        },
        {
          "id": "experience",
          "title": "Proyectos de desarrollo web con IA",
          "file": "experience.md",
          "type": "experience",
          "printBreak": true
        },
        {
          "id": "education",
          "title": "Formación",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "otherExperience",
          "title": "Experiencia profesional complementaria",
          "file": "otherExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Otras capacidades",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "Desarrollo web con IA y QA manual y asistido por IA"
    },
    "talento-humano": {
      "meta": {
        "title": "Gibson Rosales · Gestión de Talento Humano y administración",
        "description": "Soy tecnólogo en Gestión del Talento Humano, con experiencia en apoyo a contratación, revisión de hojas de vida, control documental y seguimiento administrativo en el sector salud. Organizo información y documentos para su validación, identifico tareas repetitivas y desarrollo mejoras con Excel, Word y apoyo de IA. Aporto experiencia adicional de coordinación de programas y equipos en territorio.",
        "pdfName": "GibsonRosalesTalentoHumanoES"
      },
      "about": [
        "Soy tecnólogo en Gestión del Talento Humano, con experiencia en apoyo a contratación, revisión de hojas de vida, control documental y seguimiento administrativo en el sector salud. Organizo información y documentos para su validación, identifico tareas repetitivas y desarrollo mejoras con Excel, Word y apoyo de IA. Aporto experiencia adicional de coordinación de programas y equipos en territorio."
      ],
      "improvements": [
        {
          "text": "Generación documental: estructuré información de contratistas y plantillas de Word para producir documentos desde una base de Excel. Clasificación de soportes: organicé el proceso y dirigí el desarrollo asistido de un script para reducir trabajo repetitivo en facturación.",
          "pdf": "Base Excel/Word para generación documental y clasificación asistida de soportes hospitalarios, aplicadas en las experiencias anteriores."
        }
      ],
      "sections": [
        {
          "id": "about",
          "title": "Perfil profesional",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "otherExperience",
          "title": "Experiencia profesional",
          "file": "otherExperience.md",
          "type": "otherExperience"
        },
        {
          "id": "skills",
          "title": "Habilidades",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "improvements",
          "title": "Proyectos de mejora de procesos",
          "file": "improvements.md",
          "type": "about"
        },
        {
          "id": "education",
          "title": "Formación académica",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "supportingExperience",
          "title": "Experiencia docente",
          "file": "supportingExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "experience",
          "title": "Otros proyectos tecnológicos",
          "file": "experience.md",
          "type": "experience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Capacidades tecnológicas y QA",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "Gestión de Talento Humano y administración"
    },
    "docencia": {
      "meta": {
        "title": "Gibson Rosales · Licenciado en Educación · Docencia y enseñanza de matemáticas",
        "description": "Soy licenciado en Educación con título convalidado en Colombia y trayectoria docente de sep 2012 a jul 2021. Mi experiencia incluye enseñanza de matemáticas, adaptación de explicaciones y comunicación con familias. Busco aportar estas capacidades a la educación primaria y al acompañamiento del aprendizaje. Complemento la docencia con experiencia en programas escolares y creación de herramientas web con apoyo de IA.",
        "pdfName": "GibsonRosalesDocenciaES"
      },
      "about": [
        "Soy licenciado en Educación con título convalidado en Colombia y trayectoria docente de sep 2012 a jul 2021. Mi experiencia incluye enseñanza de matemáticas, adaptación de explicaciones y comunicación con familias. Busco aportar estas capacidades a la educación primaria y al acompañamiento del aprendizaje. Complemento la docencia con experiencia en programas escolares y creación de herramientas web con apoyo de IA."
      ],
      "projectsSummary": [
        "honest-english (2026): definí y dirigí con IA una herramienta personal de práctica de inglés. chess-lab (2026): participé mediante agentes en la adaptación multilingüe de una aplicación educativa de ajedrez. Son experiencias complementarias de portafolio."
      ],
      "sections": [
        {
          "id": "about",
          "title": "Perfil profesional",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "otherExperience",
          "title": "Experiencia profesional",
          "file": "otherExperience.md",
          "type": "otherExperience"
        },
        {
          "id": "skills",
          "title": "Habilidades",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "projectsSummary",
          "title": "Proyectos complementarios",
          "file": "projectsSummary.md",
          "type": "about"
        },
        {
          "id": "education",
          "title": "Formación académica",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "experience",
          "title": "Proyectos tecnológicos en detalle",
          "file": "experience.md",
          "type": "experience",
          "soloWeb": true
        },
        {
          "id": "supportingExperience",
          "title": "Experiencia administrativa",
          "file": "supportingExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Otras capacidades",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "Licenciado en Educación · Docencia y enseñanza de matemáticas"
    }
  },
  "en": {
    "tecnologia": {
      "meta": {
        "title": "Gibson Rosales · AI-assisted web development and manual and AI-assisted QA",
        "description": "I create web applications using AI tools and agents such as Codex and Claude: I define expected behavior, give instructions, review functional results and request corrections. I complement this practice with QA Engineering training at TripleTen, where I execute manual tests, document defects and use AI to support test analysis and design. My contribution focuses on understanding the problem, directing assisted work and checking the product.",
        "pdfName": "GibsonRosalesTecnologiaEN"
      },
      "about": [
        "I create web applications using AI tools and agents such as Codex and Claude: I define expected behavior, give instructions, review functional results and request corrections. I complement this practice with QA Engineering training at TripleTen, where I execute manual tests, document defects and use AI to support test analysis and design. My contribution focuses on understanding the problem, directing assisted work and checking the product."
      ],
      "sections": [
        {
          "id": "about",
          "title": "Professional summary",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "skills",
          "title": "Skills",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "qa",
          "title": "Practical QA training",
          "file": "qa.md",
          "type": "experience"
        },
        {
          "id": "method",
          "title": "How I use AI to support QA",
          "file": "method.md",
          "type": "about"
        },
        {
          "id": "experience",
          "title": "AI-assisted web development projects",
          "file": "experience.md",
          "type": "experience",
          "printBreak": true
        },
        {
          "id": "education",
          "title": "Education",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "otherExperience",
          "title": "Additional professional experience",
          "file": "otherExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Additional capabilities",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "AI-assisted web development and manual and AI-assisted QA"
    },
    "talento-humano": {
      "meta": {
        "title": "Gibson Rosales · Human resources management and administration",
        "description": "I am a Human Resources Technologist with experience supporting contracting, reviewing CVs, controlling documents and following up on administrative processes in healthcare. I organize information and documents for validation, identify repetitive tasks and develop improvements using Excel, Word and AI assistance. I also bring experience coordinating programs and field teams.",
        "pdfName": "GibsonRosalesTalentoHumanoEN"
      },
      "about": [
        "I am a Human Resources Technologist with experience supporting contracting, reviewing CVs, controlling documents and following up on administrative processes in healthcare. I organize information and documents for validation, identify repetitive tasks and develop improvements using Excel, Word and AI assistance. I also bring experience coordinating programs and field teams."
      ],
      "improvements": [
        {
          "text": "Document generation: I structured contractor information and Word templates to produce documents from an Excel database. Supporting-document classification: I organized the process and directed an AI-assisted script to reduce repetitive billing work.",
          "pdf": "Excel/Word document generation and assisted classification of hospital records, applied in the roles described above."
        }
      ],
      "sections": [
        {
          "id": "about",
          "title": "Professional summary",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "otherExperience",
          "title": "Professional experience",
          "file": "otherExperience.md",
          "type": "otherExperience"
        },
        {
          "id": "skills",
          "title": "Skills",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "improvements",
          "title": "Process improvement projects",
          "file": "improvements.md",
          "type": "about"
        },
        {
          "id": "education",
          "title": "Education",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "supportingExperience",
          "title": "Teaching experience",
          "file": "supportingExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "experience",
          "title": "Other technology projects",
          "file": "experience.md",
          "type": "experience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Technology and QA capabilities",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "Human resources management and administration"
    },
    "docencia": {
      "meta": {
        "title": "Gibson Rosales · Education graduate · Teaching and mathematics instruction",
        "description": "I hold an Education degree recognized in Colombia and have a teaching career from Sep 2012 to Jul 2021. My experience includes teaching mathematics, adapting explanations and communicating with families. I aim to contribute these capabilities to primary education and learning support, complemented by experience in school programs and building web tools with AI assistance.",
        "pdfName": "GibsonRosalesDocenciaEN"
      },
      "about": [
        "I hold an Education degree recognized in Colombia and have a teaching career from Sep 2012 to Jul 2021. My experience includes teaching mathematics, adapting explanations and communicating with families. I aim to contribute these capabilities to primary education and learning support, complemented by experience in school programs and building web tools with AI assistance."
      ],
      "projectsSummary": [
        "honest-english (2026): I defined and directed an AI-assisted personal English practice tool. chess-lab (2026): I used agents to contribute to the multilingual adaptation of an educational chess app. These are complementary portfolio experiences."
      ],
      "sections": [
        {
          "id": "about",
          "title": "Professional summary",
          "file": "about.md",
          "type": "about"
        },
        {
          "id": "otherExperience",
          "title": "Professional experience",
          "file": "otherExperience.md",
          "type": "otherExperience"
        },
        {
          "id": "skills",
          "title": "Skills",
          "file": "skills.md",
          "type": "skills"
        },
        {
          "id": "projectsSummary",
          "title": "Additional projects",
          "file": "projectsSummary.md",
          "type": "about"
        },
        {
          "id": "education",
          "title": "Education",
          "file": "education.md",
          "type": "education"
        },
        {
          "id": "experience",
          "title": "Technology projects in detail",
          "file": "experience.md",
          "type": "experience",
          "soloWeb": true
        },
        {
          "id": "supportingExperience",
          "title": "Administrative experience",
          "file": "supportingExperience.md",
          "type": "otherExperience",
          "soloWeb": true
        },
        {
          "id": "additionalSkills",
          "title": "Additional capabilities",
          "file": "additionalSkills.md",
          "type": "skills",
          "soloWeb": true
        }
      ],
      "role": "Education graduate · Teaching and mathematics instruction"
    }
  }
};

function makeProfile(lang, key) {
  const content = PROFILE_CONTENT[lang][key];
  const shared = SHARED[lang];
  const tech = key === "tecnologia";
  const hr = key === "talento-humano";
  return {
    ...shared,
    ...content,
    identity: { ...shared.identity, role: content.role, rolePrint: content.role },
    skills: tech ? TECH_SKILLS[lang] : hr ? ADMIN_SKILLS[lang] : TEACHING_SKILLS[lang],
    // Herramientas declaradas por Gibson; complementarias, sin atribuir
    // desarrollo de servidores MCP ni una implementación específica con n8n.
    additionalSkills: [
      ...(tech ? ADMIN_SKILLS[lang] : TECH_SKILLS[lang]),
      lang === "es"
        ? { category: "Configuración de herramientas de IA", items: ["Instalación de skills", "Configuración de conexiones MCP", "n8n para integraciones y automatizaciones"] }
        : { category: "AI tool configuration", items: ["Installing skills", "Configuring MCP connections", "n8n for integrations and automation"] },
    ],
    qa: QA_CASES[lang],
    method: QA_METHOD[lang],
    experience: PROJECTS[lang].map((item, i) => tech && i === 3 ? { ...item, soloWeb: true } : item),
    otherExperience: tech ? JOBS[lang] : (hr ? [2, 1, 0] : [3, 0]).map(i => ({ ...JOBS[lang][i], open: true })),
    supportingExperience: (hr ? [3] : [2, 1]).map(i => JOBS[lang][i]),
    education: tech ? [...TECH_TRAINING[lang], ...DEGREES[lang]] : hr ? [...DEGREES[lang]].reverse() : DEGREES[lang],
  };
}

export const CV_PROFILES = Object.fromEntries(
  ["es", "en"].map(lang => [lang, Object.fromEntries(PROFILES.map(key => [key, makeProfile(lang, key)]))]),
);

// Compatibilidad: el bloque principal ES/EN sigue siendo el perfil tecnológico.
export const CV_DATA = {
  es: CV_PROFILES.es.tecnologia,
  en: CV_PROFILES.en.tecnologia,
};
