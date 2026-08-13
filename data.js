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
 * datos del mismo bloque (id "experience" → cv.experience), y su `type` con un
 * renderizador de js/render.js. Los `id` son iguales en los dos idiomas a
 * propósito: así un enlace compartido (#experience) funciona en ambos.
 */

export const CV_DATA = {
  /* ══════════════════════════════════════════════════════════════════════
     ESPAÑOL
     ══════════════════════════════════════════════════════════════════════ */
  es: {
    /* Metadatos de la pestaña del navegador y del buscador */
    meta: {
      title: "Gibson Rosales · Desarrollador con IA",
      description:
        "Currículum de Gibson Rosales: construyo producto web dirigiendo agentes de IA. Llegué aquí automatizando mi propio trabajo.",
    },

    identity: {
      name: "Gibson Rosales",
      role: "Desarrollador con IA",
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
      "Construyo producto web dirigiendo agentes de IA: escribo la especificación, reviso el código que sale, lo pruebo y lo pongo en línea. Hoy lo hago para directo-ia, un producto de venta por WhatsApp para restaurantes, donde soy responsable del flujo de onboarding.",
      "Llegué aquí porque una necesidad me despertó la curiosidad. Facturando en un hospital se iban las tardes partiendo a mano los PDF escaneados de cada paciente. Yo no sabía programar, pero sí sabía la regla: qué documentos pide cada EPS y cómo cambian según el tipo de atención. Puse esa lógica por escrito, la trabajé con Copilot hasta que salió un script que se llevaba el trabajo pesado, y treinta horas de clasificación pasaron a una.",
      "Ese fue mi primer código y ya lo escribí así: dirigiendo una IA con un criterio que era mío. Ahí aprendí lo que sigo haciendo hoy — el cuello de botella no es escribir el código, es entender bien el problema. Lo volví a comprobar en Talento Humano, modelando los datos de más de quinientos contratistas para que cada documento saliera solo.",
      "Vengo de coordinar equipos y de administrar procesos, y eso es lo que aporto además del código: entiendo el problema desde dentro antes de proponer nada. Primero me meto en el dolor, luego construyo la solución.",
    ],

    /**
     * Experiencia en programación. Una sola lista, ordenada por IMPACTO y no
     * por cronología ni por quién es dueño del repo: al que contrata le da
     * igual esa distinción, quiere ver qué construiste y qué resolvió.
     *
     * Cada entrada es una historia STAR (ver star.md):
     *   about  → Situación, una línea: qué es el producto
     *   role   → Tarea: el nombre significativo de tu participación
     *   work[] → Acción: el 60% del peso, siempre en primera persona
     *   result → Resultado, con cifra cuando exista
     *
     * Sin `stack`: todo el vocabulario técnico vive en `skills`, para que aquí
     * se lea el producto y no la lista de herramientas.
     */
    experience: [
      {
        name: "directo-ia",
        // El repo es privado y de otra persona; lo que sí es público es el
        // producto. Cuidado: el enlace lleva a la landing comercial, y el
        // onboarding que hice está detrás del registro.
        href: "https://directo-ia.vercel.app",
        role: "Responsable del flujo de onboarding",
        about: "Venta por WhatsApp con IA para restaurantes · mi trabajo hoy",
        work: [
          "El restaurante que se da de alta va a trabajar con una IA todos los días, así que propuse que el registro se pareciera a eso: una conversación, y no un formulario de pasos como el de cualquier otra web. Al dueño del producto le gustó la idea y el onboarding se rehízo con esa forma.",
          "Construí ese flujo: cada paso pregunta lo que necesita cuando toca, avisa en el punto exacto donde falta algo y no te deja seguir con secciones a medias sin que lo sepas.",
          "Lo dejé usable solo con teclado y aguantando nombres largos, pantallas bajas y móvil, porque quien da de alta un restaurante lo hace desde el celular y en medio del servicio.",
        ],
        result:
          "Hoy un restaurante se da de alta conversando con la misma IA que va a usar después, en vez de rellenando un formulario. Ese cambio de forma salió de mi propuesta.",
      },
      {
        name: "chess-lab",
        // El repo es privado y se llama `skool-scraper` por decisión del dueño;
        // lo que sí se puede enseñar es la app desplegada. Por eso aquí va la
        // URL de Netlify y no la de GitHub. El subdominio conserva el nombre
        // viejo de la app (chesspwa) y no se toca: está registrado en Supabase
        // como redirección de login y cambiarlo rompe el acceso.
        href: "https://chesspwa.netlify.app",
        role: "Internacionalización y traducción sin conexión",
        about:
          "PWA para aprender ajedrez sin conexión: lecciones, tablero y puzzles",
        work: [
          "El contenido estaba en un solo idioma y traducirlo a mano era inviable. Monté una traducción que ocurre en el propio navegador, respeta el vocabulario de ajedrez (una torre no es una «tower»), conserva las imágenes de las lecciones y guarda lo ya traducido para no repetir el trabajo ni gastar conexión.",
          "Dejé la aplicación entera en tres idiomas, de modo que el mismo curso sirve a tres públicos sin duplicar contenido.",
          "Añadí el inicio de sesión opcional: quien quiera conservar su progreso puede, y quien no, sigue jugando sin cuenta. Y arreglé la navegación entre puzzles, que dejaba al usuario atascado.",
        ],
        result:
          "Un estudiante puede hacer el curso entero en su idioma y sin conexión; antes el contenido existía en uno solo. Todo lo que entregué entró tras la revisión del dueño del repo.",
      },
      {
        name: "honest-english",
        href: "https://gibson1987r.github.io/honest-english/",
        role: "Producto propio, de la idea al despliegue",
        about:
          "Rastreador de aprendizaje de inglés que se niega a gamificar",
        work: [
          "Decidí el producto en contra de lo obvio: el contador muestra los días que llevo SIN practicar, no la racha. La racha premia no romperla; el hueco te enseña dónde abandonaste.",
          "Escribí un feedback de escritura que no adula: si el texto está mal, lo dice. Un producto que te felicita por todo no te enseña inglés.",
          "Me impuse una restricción que ningún cliente exigía —cero dependencias— y la sostuve con una lista de revisión propia que la impide.",
        ],
        result:
          "En línea y en uso: es la herramienta con la que sigo mi propio inglés, sin racha que mantener ni elogios de adorno.",
      },
      {
        name: "fiestas-web",
        // La raíz es la página que vende; desde ahí se llega a /demo (fiesta
        // inventada, con fecha futura, donde cualquiera puede confirmar) y a
        // /joaquin (la fiesta real, ya celebrada).
        //
        // En Vercel el proyecto se llama `fiestas-app` y no `fiestas-web` como
        // el repo, porque fiestas-web.vercel.app lo tiene ocupado otra persona.
        // El dominio viejo (landing-cumple-joaquin-jeremias.vercel.app) sigue
        // vivo a propósito: es el enlace que se repartió a los invitados.
        href: "https://fiestas-app.vercel.app",
        role: "Servicio propio de punta a punta",
        about:
          "Páginas para fiestas infantiles: la invitación, la confirmación en vivo y la galería",
        work: [
          "Nació de un dolor concreto: organizar el cumpleaños de mi hijo sin saber cuánta gente iba a llegar. En vez de resolver esa fiesta, lo convertí en servicio: cada cliente es una entrada de configuración con su propia ruta y su lista de invitados aislada, así que dar de alta una fiesta nueva ya no es volver a programar.",
          "Cerré la edición y el borrado con permisos de administrador: los invitados confirman, y nadie más toca la lista.",
          "Publiqué una demo abierta con una fiesta inventada, porque a un cliente no le vendes una captura: le enseñas la lista actualizándose en su propio teléfono.",
        ],
        result:
          "Usado en una fiesta real y con demo pública donde cualquiera puede confirmar y ver la lista actualizarse en vivo.",
      },
      {
        name: "bancolombia-lunchmoney",
        // Repo de Sebastián y sobre sus cuentas: no hay nada público que
        // enlazar, y por eso esta entrada va sin `href`.
        role: "Automatización en producción sobre dinero real",
        about:
          "Las alertas del banco se convierten solas en movimientos registrados",
        work: [
          "Un cliente perdía el rastro de sus gastos porque nadie apunta cada compra. Automaticé el registro entero: la alerta del banco entra al correo y sale como movimiento clasificado, sin que nadie escriba nada.",
          "Es dinero de otra persona, así que no improviso: cada cambio en la lectura de los correos lo pruebo antes contra correos reales guardados.",
          "La opero y la mantengo yo. Cuando el banco cambia el formato del mensaje, el que lo arregla soy yo.",
        ],
        result:
          "En producción sobre las cuentas reales de un cliente: sus gastos quedan registrados sin que él apunte nada.",
      },
    ],

    /**
     * Los empleos anteriores a la programación. Van DESPUÉS de `experience` y
     * también ordenados por impacto, no por fecha: primero donde coordiné más
     * gente, al final la docencia.
     *
     * Estas sí llevan fechas (son cargos con contrato) y tampoco llevan
     * `stack`.
     */
    otherExperience: [
      {
        role: "Coordinador de proyecto",
        company: "A.C. Construyendo Futuros / socio de UNICEF",
        context: "Amazonas, Venezuela · Educación, protección, agua y saneamiento",
        start: "2021-09",
        end: "2023-12",
        startLabel: "sep 2021",
        endLabel: "dic 2023",
        /**
         * El "collage": las cifras dibujadas antes de contarlas.
         * `bars` se dibujan proporcionales al valor más alto del grupo, y
         * `display` es lo que se lee (la cifra con su unidad). El número vivo
         * siempre está en el texto: las barras son decoración encima del dato,
         * nunca el único sitio donde está.
         */
        viz: {
          title: "58 personas coordinadas en territorio",
          bars: [
            { label: "acompañantes", value: 21, display: "21" },
            { label: "promotores", value: 16, display: "16" },
            { label: "operadores logísticos", value: 10, display: "10" },
            { label: "ingenieros de agua", value: 6, display: "6" },
            { label: "proveedores", value: 5, display: "5" },
          ],
        },
        achievements: [
          "Coordiné a 58 personas en territorio: 21 acompañantes que verificaban el cumplimiento de los menús, 16 promotores, 10 operadores logísticos, 6 ingenieros y técnicos de agua y 5 proveedores. Repartí las tareas, armé los cronogramas y sostuve el seguimiento de lo que cada quien tenía que entregar.",
          "Articulé a comunidades indígenas, equipos técnicos e instituciones aliadas para que una actividad pudiera ocurrir. Sin ese acuerdo previo, en terreno no se ejecuta nada.",
          "Mantuve la trazabilidad de todo lo ejecutado con reportes y organización documental: un proyecto humanitario que no puede demostrar lo que hizo, no se renueva.",
        ],
      },
      {
        role: "Tecnólogo en Caja y Facturación",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Aquí escribí mi primer código útil",
        start: "2025-02",
        end: "2025-10",
        startLabel: "feb 2025",
        endLabel: "oct 2025",
        viz: {
          title: "Clasificar los soportes de un lote de glosas",
          bars: [
            { label: "a mano", value: 30, display: "30 h" },
            { label: "con el script", value: 1, display: "1 h" },
          ],
          stats: [{ figure: "×100", caption: "casos en el mismo tiempo" }],
        },
        achievements: [
          "Cada EPS pide un juego distinto de documentos y cambia según el tipo de atención: facturar era partir a mano un PDF escaneado, hoja por hoja. Ordené primero la recepción, para que cada escaneo saliera siempre igual.",
          "Sobre ese orden, escribí con Copilot un script que identificaba EPS, factura y tipo de atención y dejaba las carpetas ya divididas y renombradas en todas las combinaciones posibles; yo solo borraba las que no aplicaban. De unas 30 horas a una, y cien casos costaban lo mismo que uno.",
        ],
      },
      {
        role: "Tecnólogo para el área de Talento Humano",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Contratación y control documental",
        start: "2025-11",
        end: "2026-03",
        startLabel: "nov 2025",
        endLabel: "mar 2026",
        viz: {
          title: "Emitir un documento de contratista",
          bars: [
            { label: "a mano", value: 30, display: "30 min" },
            { label: "desde la base", value: 5, display: "5 min" },
          ],
          stats: [
            { figure: "+500", caption: "contratistas" },
            { figure: "4", caption: "municipios" },
          ],
        },
        achievements: [
          "Modelé en Excel la base de más de 500 contratistas de cuatro municipios, contando que una misma persona puede tener varios perfiles si está en más de un programa: datos personales, rol y cargo, fecha de inicio y de cierre.",
          "La conecté con Word por combinación de correspondencia, tratando la hoja como una tabla de entidad-relación: cada plantilla consulta los campos que necesita y se rellena sola. Emitir un documento pasó de 20 o 30 minutos a 4 o 5.",
          "Revisé hojas de vida, soportes y expedientes verificando que cada requisito y cada título estuvieran donde debían antes de la validación jurídica, y llevé el seguimiento del plan de mejora y del mapa de riesgos que exige la Contraloría.",
        ],
      },
      {
        role: "Profesor de matemáticas y educación básica",
        company: "Ministerio de Educación",
        context: "Venezuela",
        start: "2012-09",
        end: "2021-07",
        startLabel: "sep 2012",
        endLabel: "jul 2021",
        /* Sin barras: aquí no hay partes que comparar, solo escala. */
        viz: {
          title: "Cada año, un grupo nuevo",
          stats: [
            { figure: "200–300", caption: "estudiantes por año" },
            { figure: "9", caption: "años en aula" },
          ],
        },
        achievements: [
          "Enseñé matemáticas nueve años a entre 200 y 300 estudiantes por año, y reformulé la misma explicación tantas veces como hizo falta hasta dar con la que le servía a cada uno.",
          "Sostuve la comunicación con familias y comunidad educativa para que el acompañamiento no terminara en la puerta del aula.",
          "Es la habilidad que más uso programando: leer algo ajeno, entenderlo y poder contarlo.",
        ],
      },
    ],

    /**
     * Aquí y solo aquí van las palabras técnicas. Las entradas de experiencia
     * cuentan el producto; los nombres de herramientas se concentran en esta
     * sección para que un filtro automático los encuentre juntos.
     */
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
          "Vite",
          "PWA y offline",
          "Accesibilidad",
          "Internacionalización",
          "CSS sin frameworks",
        ],
      },
      {
        category: "Backend y datos",
        items: [
          "Firebase / Firestore",
          "Supabase",
          "IndexedDB / Dexie",
          "Google Apps Script",
          "APIs REST",
          "Autenticación y roles",
        ],
      },
      {
        category: "Flujo de trabajo",
        items: [
          "Git",
          "GitHub",
          "Pull requests",
          "Issues",
          "Revisión de código",
          "GitHub Actions",
          "Despliegue continuo (Vercel, Netlify)",
        ],
      },
      {
        category: "Trabajo con IA",
        items: [
          "Dirección de agentes",
          "Especificación de tareas",
          "Revisión del código generado",
        ],
      },
      {
        category: "Gestión y equipo",
        items: [
          "Coordinación de equipos",
          "Delegación y seguimiento",
          "Comunicación con cliente",
          "Excel y Google Sheets",
          "Modelado de datos en tablas",
          "Combinación de correspondencia",
          "Tableros Kanban (Trello, Notion, Asana)",
          "Documentación y trazabilidad",
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
      /**
       * Los 44 diplomas de Platzi están descargados en
       * ~/Documents/Currículum/Certificados. Aquí NO se listan uno a uno: nadie
       * lee 44 líneas. Va el titular y el enlace al perfil, que es lo que
       * cualquiera puede comprobar en diez segundos y vale más que los PDF.
       */
      {
        title: "Formación en programación — Platzi",
        institution:
          "Carrera de JavaScript · ~35 cursos entre JavaScript, React, Node y maquetación · Curso Práctico de Python: creación de un CRUD (21 h)",
        year: "2017–2020",
        link: {
          text: "platzi.com/@GibsonR",
          href: "https://platzi.com/@GibsonR",
        },
      },
      {
        title: "Formación continua",
        institution:
          "«Think Python» · Visual Studio Code (Udemy) · desarrollo web sobre proyectos reales",
        year: "2026",
      },
    ],

    /**
     * Orden y títulos de la página.
     * Añadir, quitar o reordenar aquí cambia la página Y la paleta de
     * comandos. Los `id` tienen que ser los mismos en los dos idiomas.
     *
     * El orden NO es casual: la experiencia en programación va antes que
     * cualquier otra cosa. Los cargos anteriores dicen "profesor" y
     * "facturador"; si eso es lo primero que se lee, nadie llega al código.
     */
    sections: [
      { id: "about", title: "Sobre mí", file: "sobre-mi.md", type: "about" },
      {
        id: "experience",
        title: "Experiencia",
        file: "experiencia.md",
        type: "experience",
      },
      {
        id: "otherExperience",
        title: "Otras experiencias",
        file: "otras-experiencias.md",
        type: "otherExperience",
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

      /* Desplegable de «Otras experiencias» */
      foldOpen: "Ver lo que hice",
      foldClose: "Ocultar",

      /* Etiquetas invisibles: las lee un lector de pantalla, no se ven */
      resultLabel: "Resultado:",
      srTo: "a",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════
     ENGLISH — misma estructura, clave por clave
     ══════════════════════════════════════════════════════════════════════ */
  en: {
    meta: {
      title: "Gibson Rosales · Developer building with AI",
      description:
        "CV of Gibson Rosales: I build web products by directing AI agents. I got here by automating my own job.",
    },

    identity: {
      name: "Gibson Rosales",
      role: "Developer building with AI",
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
      "I build web products by directing AI agents: I write the spec, review the code that comes out, test it and put it online. Today I do that for directo-ia, a WhatsApp sales product for restaurants, where I own the onboarding flow.",
      "I got here because a need woke up my curiosity. Billing at a hospital, the afternoons went into splitting scanned PDFs by hand, patient by patient. I could not program, but I did know the rule: which documents each insurer asks for and how they change with the type of visit. I wrote that logic down, worked it through with Copilot until a script came out that took the heavy lifting, and thirty hours of sorting came down to one.",
      "That was my first code and I already wrote it this way: directing an AI with judgement that was mine. It taught me what I still do today — the bottleneck is not writing the code, it is understanding the problem. I saw it again in Human Resources, modelling the records of more than five hundred contractors so each document generated itself.",
      "I come from coordinating teams and running administrative processes, and that is what I bring on top of the code: I understand the problem from the inside before proposing anything. First I get into the pain, then I build the solution.",
    ],

    /* Ver la nota del bloque `es`: una sola lista, ordenada por impacto. */
    experience: [
      {
        name: "directo-ia",
        // Ver la nota del bloque `es`: el enlace es a la landing pública, no al
        // repo (privado y ajeno).
        href: "https://directo-ia.vercel.app",
        role: "Owner of the onboarding flow",
        about: "AI sales over WhatsApp for restaurants · my job today",
        work: [
          "A restaurant signing up is going to work with an AI every day, so I proposed that the sign-up should feel like that: a conversation, not the step-by-step form every other site uses. The product owner liked the idea and the onboarding was rebuilt around it.",
          "I built that flow: each step asks for what it needs when it needs it, flags the exact point where something is missing, and does not let you carry on with half-finished sections without knowing.",
          "I made it usable with the keyboard alone, and able to hold up with long names, short screens and mobile, because whoever signs up a restaurant does it from a phone in the middle of service.",
        ],
        result:
          "A restaurant now signs up by talking to the same AI it will use afterwards, instead of filling in a form. That change of shape came from my proposal.",
      },
      {
        name: "chess-lab",
        // Ver la nota del bloque `es` sobre por qué se enlaza Netlify y no GitHub.
        href: "https://chesspwa.netlify.app",
        role: "Internationalization and offline translation",
        about: "A PWA for learning chess offline: lessons, board and puzzles",
        work: [
          "The content existed in one language only and translating it by hand was not viable. I built a translation that happens in the browser itself, respects chess vocabulary (a «torre» is not a tower), keeps the lesson images, and stores what is already translated so the work is never repeated and no connection is wasted.",
          "I left the whole application in three languages, so the same course serves three audiences without duplicating content.",
          "I added optional sign-in: those who want to keep their progress can, and those who do not keep playing without an account. And I fixed the navigation between puzzles, which left users stuck.",
        ],
        result:
          "A student can now take the whole course in their own language and with no connection; before, the content existed in one language only. Everything I delivered went in after review by the repository owner.",
      },
      {
        name: "honest-english",
        href: "https://gibson1987r.github.io/honest-english/",
        role: "My own product, from idea to deploy",
        about: "An English learning tracker that refuses to gamify",
        work: [
          "I decided the product against the obvious: the counter shows the days I have gone WITHOUT practising, not the streak. A streak rewards not breaking it; the gap shows you where you gave up.",
          "I wrote writing feedback that does not flatter: if the text is bad, it says so. A product that congratulates you for everything does not teach you English.",
          "I imposed a constraint no client asked for — zero dependencies — and held it with a review checklist of my own that blocks them.",
        ],
        result:
          "Online and in use: it is the tool I track my own English with, no streak to keep and no praise for decoration.",
      },
      {
        name: "fiestas-web",
        // Ver la nota del bloque `es` sobre por qué el dominio no coincide
        // con el nombre del repo.
        href: "https://fiestas-app.vercel.app",
        role: "A service of my own, end to end",
        about:
          "Pages for children's parties: the invitation, the live RSVP and the gallery",
        work: [
          "It came from a concrete pain: organizing my son's birthday without knowing how many people would show up. Instead of solving that one party, I turned it into a service: each client is one config entry with its own route and its own isolated guest list, so adding a new party is no longer programming again.",
          "I locked editing and deleting behind admin permissions: guests confirm, and nobody else touches the list.",
          "I published an open demo with a made-up party, because you do not sell a client a screenshot: you show them the list updating on their own phone.",
        ],
        result:
          "Used at a real party, with a public demo where anyone can RSVP and watch the list update live.",
      },
      {
        name: "bancolombia-lunchmoney",
        // Ver la nota del bloque `es`: no hay nada público que enlazar.
        role: "An automation in production over real money",
        about: "Bank alerts turn themselves into recorded transactions",
        work: [
          "A client kept losing track of his spending because nobody writes down every purchase. I automated the whole record: the bank alert arrives by email and comes out as a classified transaction, with nobody typing anything.",
          "It is someone else's money, so I do not improvise: every change to how the emails are read is tested first against real saved emails.",
          "I run it and I maintain it. When the bank changes the format of the message, I am the one who fixes it.",
        ],
        result:
          "In production over a client's real accounts: his spending gets recorded without him writing down a thing.",
      },
    ],

    /* Ver la nota del bloque `es`: también por impacto, y estas sí con fechas. */
    otherExperience: [
      {
        role: "Project coordinator",
        company: "A.C. Construyendo Futuros / UNICEF partner",
        context: "Amazonas, Venezuela · Education, protection, water and sanitation",
        start: "2021-09",
        end: "2023-12",
        startLabel: "Sep 2021",
        endLabel: "Dec 2023",
        /* Ver la nota del bloque `es` sobre cómo se dibuja `viz`. */
        viz: {
          title: "58 people coordinated in the field",
          bars: [
            { label: "meal monitors", value: 21, display: "21" },
            { label: "promoters", value: 16, display: "16" },
            { label: "logistics operators", value: 10, display: "10" },
            { label: "water engineers", value: 6, display: "6" },
            { label: "suppliers", value: 5, display: "5" },
          ],
        },
        achievements: [
          "I coordinated 58 people in the field: 21 monitors checking that the meal plans were met, 16 promoters, 10 logistics operators, 6 water engineers and technicians, and 5 suppliers. I split the tasks, built the schedules and kept track of what each of them had to deliver.",
          "I brought together indigenous communities, technical teams and partner institutions so an activity could happen at all. Without that agreement up front, nothing gets done on the ground.",
          "I kept everything delivered traceable through reports and document management: a humanitarian project that cannot prove what it did does not get renewed.",
        ],
      },
      {
        role: "Cash desk and billing officer",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Where I wrote my first useful code",
        start: "2025-02",
        end: "2025-10",
        startLabel: "Feb 2025",
        endLabel: "Oct 2025",
        viz: {
          title: "Sorting the documents of a batch of claims",
          bars: [
            { label: "by hand", value: 30, display: "30 h" },
            { label: "with the script", value: 1, display: "1 h" },
          ],
          stats: [{ figure: "×100", caption: "cases in the same time" }],
        },
        achievements: [
          "Every insurer asks for a different set of documents, and it changes again with the type of visit: billing meant splitting a scanned PDF by hand, page by page. I fixed the intake first, so every scan came out the same.",
          "On top of that order, I wrote a script with Copilot that identified the insurer, the invoice and the type of visit, and left the folders already split and renamed in every possible combination; all I did was delete the ones that did not apply. From about 30 hours down to one, and a hundred cases cost the same as one.",
        ],
      },
      {
        role: "Human resources officer",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Hiring paperwork and document control",
        start: "2025-11",
        end: "2026-03",
        startLabel: "Nov 2025",
        endLabel: "Mar 2026",
        viz: {
          title: "Issuing one contractor document",
          bars: [
            { label: "by hand", value: 30, display: "30 min" },
            { label: "from the database", value: 5, display: "5 min" },
          ],
          stats: [
            { figure: "+500", caption: "contractors" },
            { figure: "4", caption: "municipalities" },
          ],
        },
        achievements: [
          "I modelled in Excel the records of more than 500 contractors across four municipalities, accounting for the fact that one person can hold several profiles if they work in more than one programme: personal data, role and position, start and end dates.",
          "I connected it to Word through mail merge, treating the sheet as an entity-relationship table: each template pulls the fields it needs and fills itself in. Issuing a document went from 20 or 30 minutes down to 4 or 5.",
          "I reviewed CVs, supporting files and contractor records, checking that every requirement and every qualification was in place before legal validation, and followed up on the improvement plan and the risk map required by the public audit office.",
        ],
      },
      {
        role: "Maths and primary school teacher",
        company: "Ministry of Education",
        context: "Venezuela",
        start: "2012-09",
        end: "2021-07",
        startLabel: "Sep 2012",
        endLabel: "Jul 2021",
        viz: {
          title: "A new group every year",
          stats: [
            { figure: "200–300", caption: "students a year" },
            { figure: "9", caption: "years teaching" },
          ],
        },
        achievements: [
          "I taught maths for nine years to between 200 and 300 students a year, and reworked the same explanation as many times as it took to find the one that worked for each of them.",
          "I kept up the communication with families and the school community so the support did not end at the classroom door.",
          "It is the skill I use most when I program: reading something written by someone else, understanding it and being able to explain it.",
        ],
      },
    ],

    /* Ver la nota del bloque `es`: las palabras técnicas viven solo aquí. */
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
          "Vite",
          "PWA and offline",
          "Accessibility",
          "Internationalization",
          "CSS without frameworks",
        ],
      },
      {
        category: "Backend and data",
        items: [
          "Firebase / Firestore",
          "Supabase",
          "IndexedDB / Dexie",
          "Google Apps Script",
          "REST APIs",
          "Authentication and roles",
        ],
      },
      {
        category: "Workflow",
        items: [
          "Git",
          "GitHub",
          "Pull requests",
          "Issues",
          "Code review",
          "GitHub Actions",
          "Continuous deployment (Vercel, Netlify)",
        ],
      },
      {
        category: "Working with AI",
        items: [
          "Directing agents",
          "Writing task specs",
          "Reviewing generated code",
        ],
      },
      {
        category: "Management and teams",
        items: [
          "Team coordination",
          "Delegation and follow-up",
          "Client communication",
          "Excel and Google Sheets",
          "Data modelling in tables",
          "Mail merge",
          "Kanban boards (Trello, Notion, Asana)",
          "Documentation and traceability",
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
      /* Ver la nota del bloque `es`: el titular y el enlace, no los 44 diplomas. */
      {
        title: "Programming — Platzi",
        institution:
          "JavaScript career path · ~35 courses across JavaScript, React, Node and markup · Practical Python course: building a CRUD (21 h)",
        year: "2017–2020",
        link: {
          text: "platzi.com/@GibsonR",
          href: "https://platzi.com/@GibsonR",
        },
      },
      {
        title: "Ongoing self-study",
        institution:
          "«Think Python» · Visual Studio Code (Udemy) · web development on real projects",
        year: "2026",
      },
    ],

    sections: [
      { id: "about", title: "About me", file: "about-me.md", type: "about" },
      {
        id: "experience",
        title: "Experience",
        file: "experience.md",
        type: "experience",
      },
      {
        id: "otherExperience",
        title: "Other experience",
        file: "other-experience.md",
        type: "otherExperience",
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

      foldOpen: "See what I did",
      foldClose: "Hide",

      resultLabel: "Result:",
      srTo: "to",
    },
  },
};
