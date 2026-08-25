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
      /**
       * El puesto tal y como lo escribe quien publica la vacante, más el
       * stack. Solo sale en el PDF, que es el archivo que analiza el sistema
       * de selección de la empresa: "Desarrollador con IA" describe muy bien
       * cómo trabaja Gibson, pero no es un título que nadie tenga en su lista
       * de búsqueda, y en la criba automática eso se paga.
       *
       * Cámbialo al puesto de la vacante a la que apuntes: si buscas frontend,
       * "Desarrollador Frontend"; si buscas full stack, ese.
       */
      rolePrint: "Desarrollador Web · JavaScript, React, Next.js",
      location: "Medellín, Antioquia, Colombia",
      status: "Disponible · remoto o presencial",
      /**
       * `icon` es el nombre del glifo que va delante del enlace; los dibuja
       * js/icons.js. Si se pone uno que no existe ahí, el enlace se pinta
       * igual, sin icono. El `label` sigue haciendo falta: es lo que anuncia
       * un lector de pantalla, porque el icono no le dice nada.
       */
      links: [
        {
          label: "GitHub",
          text: "github.com/Gibson1987R",
          href: "https://github.com/Gibson1987R",
          icon: "github",
        },
        {
          label: "LinkedIn",
          // URL personalizada, sin el sufijo que LinkedIn pone solo (se quitó
          // el 2026-08-25 desde Editar URL pública). Si la cambias allí,
          // cámbiala en los dos bloques de idioma.
          text: "linkedin.com/in/gibson-rosales-fuenmayor",
          href: "https://www.linkedin.com/in/gibson-rosales-fuenmayor",
          icon: "linkedin",
        },
        /**
         * El número va a WhatsApp, no a `tel:`. Aquí el reclutamiento pasa por
         * ahí, y un enlace wa.me abre la conversación de un toque desde el
         * móvil; un `tel:` obliga a llamar en frío, que casi nadie hace. El
         * número se sigue viendo escrito, así que quien prefiera llamar lo
         * tiene. Ojo con el formato del href: wa.me quiere el número sin `+`
         * ni espacios, con indicativo de país (57 = Colombia).
         */
        {
          label: "WhatsApp",
          text: "+57 310 552 8854",
          href: "https://wa.me/573105528854",
          icon: "whatsapp",
        },
        {
          label: "Email",
          text: "gibsonrosales@gmail.com",
          href: "mailto:gibsonrosales@gmail.com",
          icon: "email",
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

    /**
     * Un elemento por párrafo.
     *
     * Los dos de en medio llevan `soloWeb: true`: cuentan entera la historia
     * del hospital, que en la web es el relato que engancha, pero en el PDF
     * se repite —está otra vez, con más detalle, en «Experiencia profesional
     * previa»— y esa repetición vale media página de papel. El primero (qué
     * hace hoy) y el último (qué aporta) se quedan en los dos.
     */
    about: [
      {
        text: "Construyo producto web dirigiendo agentes de IA: escribo la especificación, reviso el código que sale, lo pruebo y lo pongo en línea. Hoy lo hago para directo-ia, un producto de venta por WhatsApp para restaurantes, donde soy responsable del flujo de onboarding.",
        pdf: "Construyo producto web dirigiendo agentes de IA: escribo la especificación, reviso el código que sale, lo pruebo y lo pongo en línea. Hoy lo hago para directo-ia, un producto de venta por WhatsApp para restaurantes, donde soy responsable del flujo de onboarding. Vengo de coordinar equipos y de administrar procesos: entiendo el problema desde dentro antes de proponer nada.",
      },
      {
        soloWeb: true,
        text: "Llegué aquí porque una necesidad me despertó la curiosidad. Había estudiado programación años antes, pero nunca la había aplicado en un trabajo: ni dando clases ni coordinando proyectos humanitarios se me cruzó el problema que la pidiera. Se me cruzó facturando en un hospital, donde se iban las tardes partiendo a mano los PDF escaneados de cada paciente. Sabía la regla —qué documentos pide cada EPS y cómo cambian según el tipo de atención—, así que la puse por escrito, la trabajé con Copilot hasta que salió un script que se llevaba el trabajo pesado, y treinta horas de clasificación pasaron a una.",
      },
      {
        soloWeb: true,
        text: "Ese fue el primer código mío que resolvió algo de verdad, y ya lo escribí así: dirigiendo una IA con un criterio que era mío. Ahí aprendí lo que sigo haciendo hoy — el cuello de botella no es escribir el código, es entender bien el problema. Lo volví a comprobar en Talento Humano, modelando los datos de más de quinientos contratistas para que cada documento saliera solo.",
      },
      {
        text: "Vengo de coordinar equipos y de administrar procesos, y eso es lo que aporto además del código: entiendo el problema desde dentro antes de proponer nada. Primero me meto en el dolor, luego construyo la solución.",
        soloWeb: true,
      },
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
        /**
         * `period` solo sale en el PDF. Un sistema de selección calcula los
         * años de experiencia leyendo fechas; sin ellas puede puntuar como si
         * no hubiera ninguna. En la web no hace falta: ahí la lista va por
         * impacto y la cronología distraería.
         *
         * Mismo formato que las fechas de `otherExperience`, para que todo el
         * documento tenga un solo patrón que reconocer.
         */
        period: "jun 2026 — actualidad",
        /**
         * La misma fecha en formato AAAA-MM. `period` es para leer; `start` es
         * para ordenar: con este formato, comparar dos fechas es comparar dos
         * textos, sin convertir nada. Las entradas sin `start` se quedan al
         * final del PDF, en el orden en que estén.
         */
        start: "2026-06",
        about: "Venta por WhatsApp con IA para restaurantes · mi trabajo hoy",
        stack: "Next.js · React · TypeScript · Vercel",
        work: [
          {
            text: "El restaurante que se da de alta va a trabajar con una IA todos los días, así que propuse que el registro se pareciera a eso: una conversación, y no un formulario de pasos como el de cualquier otra web. Al dueño del producto le gustó la idea y el onboarding se rehízo con esa forma.",
            pdf: "Propuso que el registro fuera una conversación (no un formulario por pasos), porque el restaurante trabajará con una IA a diario; la propuesta fue aceptada y el onboarding se rehízo así.",
          },
          {
            text: "Construí ese flujo: cada paso pregunta lo que necesita cuando toca, avisa en el punto exacto donde falta algo y no te deja seguir con secciones a medias sin que lo sepas.",
            soloWeb: true,
          },
          {
            soloWeb: true,
            text: "Lo dejé usable solo con teclado y aguantando nombres largos, pantallas bajas y móvil, porque quien da de alta un restaurante lo hace desde el celular y en medio del servicio.",
          },
        ],
        result: {
          soloWeb: true,
          text: "Hoy un restaurante se da de alta conversando con la misma IA que va a usar después, en vez de rellenando un formulario. Ese cambio de forma salió de mi propuesta.",
        },
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
        period: "jun 2026",
        start: "2026-06",
        about:
          "PWA para aprender ajedrez sin conexión: lecciones, tablero y puzzles",
        stack: "React · TypeScript · PWA · Dexie · Supabase",
        work: [
          {
            text: "El contenido estaba en un solo idioma y traducirlo a mano era inviable. Monté una traducción que ocurre en el propio navegador, respeta el vocabulario de ajedrez (una torre no es una «tower»), conserva las imágenes de las lecciones y guarda lo ya traducido para no repetir el trabajo ni gastar conexión.",
            pdf: "Traducción en el propio navegador que respeta vocabulario de ajedrez, conserva imágenes y cachea lo traducido.",
          },
          {
            text: "Dejé la aplicación entera en tres idiomas, de modo que el mismo curso sirve a tres públicos sin duplicar contenido.",
            pdf: "Aplicación entera en 3 idiomas sin duplicar contenido; login opcional; arregló navegación entre puzzles.",
          },
          {
            soloWeb: true,
            text: "Añadí el inicio de sesión opcional: quien quiera conservar su progreso puede, y quien no, sigue jugando sin cuenta. Y arreglé la navegación entre puzzles, que dejaba al usuario atascado.",
          },
        ],
        result: {
          soloWeb: true,
          text: "Un estudiante puede hacer el curso entero en su idioma y sin conexión; antes el contenido existía en uno solo. Todo lo que entregué entró tras la revisión del dueño del repo.",
        },
      },
      {
        name: "honest-english",
        href: "https://gibson1987r.github.io/honest-english/",
        role: "Producto propio, de la idea al despliegue",
        period: "may 2026",
        start: "2026-05",
        about:
          "Rastreador de aprendizaje de inglés que se niega a gamificar",
        stack: "JavaScript · HTML · CSS · sin dependencias",
        work: [
          {
            text: "Decidí el producto en contra de lo obvio: el contador muestra los días que llevo SIN practicar, no la racha. La racha premia no romperla; el hueco te enseña dónde abandonaste.",
            pdf: "Contador de días SIN practicar (anti-racha); feedback de escritura que no adula; cero dependencias autoimpuesto.",
          },
          {
            soloWeb: true,
            text: "Escribí un feedback de escritura que no adula: si el texto está mal, lo dice. Un producto que te felicita por todo no te enseña inglés.",
          },
          {
            soloWeb: true,
            text: "Me impuse una restricción que ningún cliente exigía —cero dependencias— y la sostuve con una lista de revisión propia que la impide.",
          },
        ],
        result: {
          soloWeb: true,
          text: "En línea y en uso: es la herramienta con la que sigo mi propio inglés, sin racha que mantener ni elogios de adorno.",
        },
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
        period: "feb 2026",
        start: "2026-02",
        about:
          "Páginas para fiestas infantiles: la invitación, la confirmación en vivo y la galería",
        stack: "React · Firebase/Firestore · Vite · Vercel",
        work: [
          {
            text: "Nació de un dolor concreto: organizar el cumpleaños de mi hijo sin saber cuánta gente iba a llegar. En vez de resolver esa fiesta, lo convertí en servicio: cada cliente es una entrada de configuración con su propia ruta y su lista de invitados aislada, así que dar de alta una fiesta nueva ya no es volver a programar.",
            pdf: "Multi-cliente por configuración (cada fiesta con su ruta y lista aislada); permisos de administrador; demo pública.",
          },
          {
            soloWeb: true,
            text: "Cerré la edición y el borrado con permisos de administrador: los invitados confirman, y nadie más toca la lista.",
          },
          {
            soloWeb: true,
            text: "Publiqué una demo abierta con una fiesta inventada, porque a un cliente no le vendes una captura: le enseñas la lista actualizándose en su propio teléfono.",
          },
        ],
        result: {
          soloWeb: true,
          text: "Usado en una fiesta real y con demo pública donde cualquiera puede confirmar y ver la lista actualizarse en vivo.",
        },
      },
      {
        name: "bancolombia-lunchmoney",
        // Repo de Sebastián y sobre sus cuentas: no hay nada público que
        // enlazar, y por eso esta entrada va sin `href`.
        role: "Automatización en producción sobre dinero real",
        period: "jun 2026",
        start: "2026-06",
        about:
          "Las alertas del banco se convierten solas en movimientos registrados",
        stack: "JavaScript · Google Apps Script · API REST",
        work: [
          {
            text: "Un cliente perdía el rastro de sus gastos porque nadie apunta cada compra. Automaticé el registro entero: la alerta del banco entra al correo y sale como movimiento clasificado, sin que nadie escriba nada.",
            pdf: "Alertas del banco → correo → movimiento clasificado, sin escribir nada.",
          },
          {
            soloWeb: true,
            text: "Es dinero de otra persona, así que no improviso: cada cambio en la lectura de los correos lo pruebo antes contra correos reales guardados.",
          },
          {
            soloWeb: true,
            text: "La opero y la mantengo yo. Cuando el banco cambia el formato del mensaje, el que lo arregla soy yo.",
          },
        ],
        result: {
          soloWeb: true,
          text: "En producción sobre las cuentas reales de un cliente: sus gastos quedan registrados sin que él apunte nada.",
        },
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
        role: "Coordinador regional — Estado Amazonas",
        company: "A.C. Construyendo Futuros / socio de UNICEF",
        context: "Amazonas, Venezuela · Tres programas: alimentación escolar, agua y saneamiento, y medios de vida",
        start: "2021-09",
        end: "2023-12",
        startLabel: "sep 2021",
        endLabel: "dic 2023",
        achievements: [
          {
            text: "Coordiné tres programas seguidos en el estado Amazonas: «AliMentes», de alimentación escolar (sep 2021 – ago 2022); el de agua, higiene y saneamiento en las escuelas del municipio Atures (jul – oct 2022); y «Manos Que Construyen» (2023), de medios de vida para empoderar a adolescentes y mujeres frente a las desigualdades de género. Los dos primeros los llevé en paralelo durante julio y agosto de 2022.",
            pdf: "Coordinó tres programas en Amazonas: alimentación escolar «AliMentes», agua y saneamiento (WASH) y «Manos Que Construyen» (medios de vida); dos de ellos solapados.",
          },
          {
            text: "Coordiné a 58 personas en territorio: en AliMentes, 21 acompañantes que verificaban el cumplimiento de los menús y 10 operadores logísticos; en el de agua y saneamiento, 6 ingenieros y técnicos con sus promotores asignados y un almacenista; más los proveedores de cada programa. Repartí las tareas, armé los cronogramas y sostuve el seguimiento de lo que cada quien tenía que entregar.",
            pdf: "Coordinó 58 personas en territorio (acompañantes, promotores, operadores logísticos, ingenieros/técnicos de agua, almacenista y proveedores); cronogramas y seguimiento.",
          },
          {
            soloWeb: true,
            text: "Articulé a comunidades indígenas, equipos técnicos e instituciones aliadas para que una actividad pudiera ocurrir. Sin ese acuerdo previo, en terreno no se ejecuta nada.",
          },
          {
            soloWeb: true,
            text: "Mantuve la trazabilidad de todo lo ejecutado con reportes y organización documental: un proyecto humanitario que no puede demostrar lo que hizo, no se renueva.",
          },
        ],
      },
      {
        role: "Tecnólogo en Caja y Facturación",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Aquí escribí mi primer código útil",
        stack: "Python · Xenco · automatización documental",
        start: "2025-02",
        end: "2025-10",
        startLabel: "feb 2025",
        endLabel: "oct 2025",
        achievements: [
          {
            soloWeb: true,
            text: "Facturaba a diario en Xenco, el sistema de información del hospital. Cada EPS pide un juego distinto de documentos y cambia según el tipo de atención: facturar era además partir a mano un PDF escaneado, hoja por hoja. Ordené primero la recepción, para que cada escaneo saliera siempre igual.",
          },
          {
            text: "Sobre ese orden, escribí con Copilot un script que identificaba EPS, factura y tipo de atención y dejaba las carpetas ya divididas y renombradas en todas las combinaciones posibles; yo solo borraba las que no aplicaban. De unas 30 horas a una, y cien casos costaban lo mismo que uno.",
            pdf: "Ordenó la recepción para estandarizar escaneos; script (con Copilot) que identificaba EPS, factura y tipo de atención y dividía/renombraba carpetas: de ~30 horas a 1.",
          },
        ],
      },
      {
        role: "Tecnólogo para el área de Talento Humano",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Contratación y control documental",
        stack: "Excel · modelado de datos",
        start: "2025-11",
        end: "2026-03",
        startLabel: "nov 2025",
        endLabel: "mar 2026",
        achievements: [
          {
            text: "Modelé en Excel la base de más de 500 contratistas de cuatro municipios, contando que una misma persona puede tener varios perfiles si está en más de un programa: datos personales, rol y cargo, fecha de inicio y de cierre.",
            pdf: "Modeló en Excel la base de 500+ contratistas de 4 municipios; combinación de correspondencia con Word: de 20-30 min a 4-5 por documento.",
          },
          {
            soloWeb: true,
            text: "La conecté con Word por combinación de correspondencia, tratando la hoja como una tabla de entidad-relación: cada plantilla consulta los campos que necesita y se rellena sola. Emitir un documento pasó de 20 o 30 minutos a 4 o 5.",
          },
          {
            soloWeb: true,
            text: "Revisé hojas de vida, soportes y expedientes verificando que cada requisito y cada título estuvieran donde debían antes de la validación jurídica, y llevé el seguimiento del plan de mejora y del mapa de riesgos que exige la Contraloría.",
          },
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
        achievements: [
          {
            text: "Enseñé matemáticas nueve años a entre 200 y 300 estudiantes por año, y reformulé la misma explicación tantas veces como hizo falta hasta dar con la que le servía a cada uno.",
            pdf: "9 años, entre 200 y 300 estudiantes por año; comunicación con familias y comunidad educativa.",
          },
          {
            soloWeb: true,
            text: "Sostuve la comunicación con familias y comunidad educativa para que el acompañamiento no terminara en la puerta del aula.",
          },
          {
            soloWeb: true,
            text: "Es la habilidad que más uso programando: leer algo ajeno, entenderlo y poder contarlo.",
          },
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
          { text: "CSS sin frameworks", soloWeb: true },
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
          { text: "Autenticación y roles", soloWeb: true },
        ],
      },
      {
        category: "Flujo de trabajo",
        items: [
          "Git",
          "GitHub",
          { text: "Pull requests", soloWeb: true },
          { text: "Issues", soloWeb: true },
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
          { text: "Delegación y seguimiento", soloWeb: true },
          { text: "Comunicación con cliente", soloWeb: true },
          "Excel y Google Sheets",
          "Modelado de datos en tablas",
          { text: "Combinación de correspondencia", soloWeb: true },
          { text: "Tableros Kanban (Trello, Notion, Asana)", soloWeb: true },
          { text: "Documentación y trazabilidad", soloWeb: true },
        ],
      },
    ],

    /**
     * El orden es el mismo criterio que rige `sections`: lo de programación
     * primero. Quien lee un CV de desarrollador busca formación técnica; las
     * titulaciones formales son de otra carrera y explican de dónde viene,
     * no a qué aspira. Van al final, que es donde se leen como contexto.
     *
     * Ojo con la última: es UN solo título, no dos. Se cursó en Venezuela
     * como "Técnico Superior Universitario en Administración de Recursos
     * Humanos" y en Colombia se convalida como "Tecnólogo en Gestión de
     * Talento Humano". Los CV anteriores lo listaban por separado y parecían
     * dos estudios.
     */
    education: [
      /**
       * Los 44 diplomas de Platzi están descargados en
       * ~/Documents/Currículum/Certificados. Aquí NO se listan uno a uno: nadie
       * lee 44 líneas. Va el titular y el enlace al perfil, que es lo que
       * cualquiera puede comprobar en diez segundos y vale más que los PDF.
       */
      {
        title: "Formación en programación — Platzi",
        institution:
          {
            text: "Carrera de JavaScript · ~35 cursos entre JavaScript, React, Node y maquetación · Curso Práctico de Python: creación de un CRUD (21 h)",
            pdf: "Carrera de JavaScript · ~35 cursos de JS, React y Node · Python: CRUD (21 h)",
          },
        year: "2017–2020",
        link: {
          text: "platzi.com/@GibsonR",
          href: "https://platzi.com/@GibsonR",
          soloWeb: true,
        },
      },
      {
        title: "Formación continua",
        institution:
          "«Think Python» · Visual Studio Code (Udemy) · desarrollo web sobre proyectos reales",
        year: "2026",
      },
      {
        title: "Licenciado en Educación, mención Campesina y Rural",
        institution: "Venezuela",
        year: "",
      },
      {
        title: {
          text: "Técnico Superior Universitario en Administración de Recursos Humanos",
          pdf: "T.S.U. en Administración de Recursos Humanos",
        },
        institution: {
          text: "Convalidado en Colombia como Tecnólogo en Gestión de Talento Humano",
          pdf: "Convalidado como Tecnólogo en Gestión de Talento Humano",
        },
        year: "",
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
    /**
     * `titlePrint` es el nombre de la sección EN EL PDF. Existe porque ese
     * archivo lo lee primero un programa que busca encabezados de su lista:
     * "Otras experiencias" no le dice nada, y justo ahí están los dos únicos
     * empleos con contrato. En pantalla no cambia nada — sigue mandando el
     * comando `$ cat`— y un lector de pantalla sigue oyendo el título corto.
     */
    sections: [
      {
        id: "about",
        title: "Sobre mí",
        titlePrint: "Perfil profesional",
        file: "sobre-mi.md",
        type: "about",
      },
      {
        id: "experience",
        title: "Experiencia",
        titlePrint: "Experiencia en desarrollo de software",
        file: "experiencia.md",
        type: "experience",
      },
      {
        id: "otherExperience",
        title: "Otras experiencias",
        titlePrint: "Experiencia profesional previa",
        file: "otras-experiencias.md",
        type: "otherExperience",
      },
      {
        id: "skills",
        title: "Skills",
        titlePrint: "Habilidades técnicas",
        file: "skills.json",
        type: "skills",
      },
      {
        id: "education",
        title: "Formación",
        titlePrint: "Formación académica",
        file: "formacion.md",
        type: "education",
      },
    ],

    /**
     * `note` es la línea con el `$` del pie. Está desactivada: decía "hecho a
     * mano", y eso contradecía el resto del CV, que dice que Gibson construye
     * dirigiendo agentes de IA. Se guarda por si algún día vuelve a hacer
     * falta — para reactivarla, descomenta la clave aquí y en el bloque `en`.
     * Sin `note`, render.js no pinta el párrafo: no queda un `$` suelto.
     */
    footer: {
      // note: "Hecho a mano con HTML, CSS y JavaScript. Sin frameworks, sin analítica, sin cookies.",
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
      /* Ver la nota del bloque `es`: el título que busca un reclutador. */
      rolePrint: "Web Developer · JavaScript, React, Next.js",
      location: "Medellín, Antioquia, Colombia",
      status: "Available · remote or on-site",
      /* Ver la nota del bloque `es` sobre `icon` y sobre el enlace de WhatsApp. */
      links: [
        {
          label: "GitHub",
          text: "github.com/Gibson1987R",
          href: "https://github.com/Gibson1987R",
          icon: "github",
        },
        {
          label: "LinkedIn",
          text: "linkedin.com/in/gibson-rosales-fuenmayor",
          href: "https://www.linkedin.com/in/gibson-rosales-fuenmayor",
          icon: "linkedin",
        },
        {
          label: "WhatsApp",
          text: "+57 310 552 8854",
          href: "https://wa.me/573105528854",
          icon: "whatsapp",
        },
        {
          label: "Email",
          text: "gibsonrosales@gmail.com",
          href: "mailto:gibsonrosales@gmail.com",
          icon: "email",
        },
      ],

      soloImpresion: {
        mostrar: false,
        campos: [{ label: "ID number", value: "1.127.397.395" }],
      },
    },

    /* Ver la nota del bloque `es`: los dos de en medio no van al PDF. */
    about: [
      {
        text: "I build web products by directing AI agents: I write the spec, review the code that comes out, test it and put it online. Today I do that for directo-ia, a WhatsApp sales product for restaurants, where I own the onboarding flow.",
        pdf: "Web developer: JavaScript, TypeScript, React and Next.js. I build products by directing AI agents: I write the spec, review the code and ship it. Today, the onboarding flow at directo-ia (WhatsApp sales with AI). Before that, nine years teaching and coordinating teams of 58 people.",
      },
      {
        soloWeb: true,
        text: "I got here because a need woke up my curiosity. I had studied programming years earlier but had never applied it at work: neither teaching nor coordinating humanitarian projects ever threw up the problem that called for it. Hospital billing did, where the afternoons went into splitting scanned PDFs by hand, patient by patient. I knew the rule — which documents each insurer asks for and how they change with the type of visit — so I wrote that logic down, worked it through with Copilot until a script came out that took the heavy lifting, and thirty hours of sorting came down to one.",
      },
      {
        soloWeb: true,
        text: "That was the first code of mine that solved something real, and I already wrote it this way: directing an AI with judgement that was mine. It taught me what I still do today — the bottleneck is not writing the code, it is understanding the problem. I saw it again in Human Resources, modelling the records of more than five hundred contractors so each document generated itself.",
      },
      {
        soloWeb: true,
        text: "I come from coordinating teams and running administrative processes, and that is what I bring on top of the code: I understand the problem from the inside before proposing anything. First I get into the pain, then I build the solution.",
      },
    ],

    /* Ver la nota del bloque `es`: una sola lista, ordenada por impacto. */
    experience: [
      {
        name: "directo-ia",
        // Ver la nota del bloque `es`: el enlace es a la landing pública, no al
        // repo (privado y ajeno).
        href: "https://directo-ia.vercel.app",
        role: "Owner of the onboarding flow",
        /* Ver la nota del bloque `es`: `period` se lee, `start` ordena. */
        period: "Jun 2026 — Present",
        start: "2026-06",
        about: "AI sales over WhatsApp for restaurants · my job today",
        stack: "Next.js · React · TypeScript · Vercel",
        work: [
          {
            text: "A restaurant signing up is going to work with an AI every day, so I proposed that the sign-up should feel like that: a conversation, not the step-by-step form every other site uses. The product owner liked the idea and the onboarding was rebuilt around it.",
            pdf: "I proposed and built sign-up as a conversation with the product's own AI; it replaced the form and is in production.",
          },
          {
            soloWeb: true,
            text: "I built that flow: each step asks for what it needs when it needs it, flags the exact point where something is missing, and does not let you carry on with half-finished sections without knowing.",
          },
          {
            soloWeb: true,
            text: "I made it usable with the keyboard alone, and able to hold up with long names, short screens and mobile, because whoever signs up a restaurant does it from a phone in the middle of service.",
          },
        ],
        result: {
          soloWeb: true,
          text: "A restaurant now signs up by talking to the same AI it will use afterwards, instead of filling in a form. That change of shape came from my proposal.",
        },
      },
      {
        name: "chess-lab",
        // Ver la nota del bloque `es` sobre por qué se enlaza Netlify y no GitHub.
        href: "https://chesspwa.netlify.app",
        role: "Internationalization and offline translation",
        period: "Jun 2026",
        start: "2026-06",
        about: "A PWA for learning chess offline: lessons, board and puzzles",
        stack: "React · TypeScript · PWA · Dexie · Supabase",
        work: [
          {
            text: "The content existed in one language only and translating it by hand was not viable. I built a translation that happens in the browser itself, respects chess vocabulary (a «torre» is not a tower), keeps the lesson images, and stores what is already translated so the work is never repeated and no connection is wasted.",
            pdf: "In-browser translation that respects chess vocabulary and caches to IndexedDB; whole app in three languages.",
          },
          {
            soloWeb: true,
            text: "I left the whole application in three languages, so the same course serves three audiences without duplicating content.",
          },
          {
            soloWeb: true,
            text: "I added optional sign-in: those who want to keep their progress can, and those who do not keep playing without an account. And I fixed the navigation between puzzles, which left users stuck.",
          },
        ],
        result: {
          soloWeb: true,
          text: "A student can now take the whole course in their own language and with no connection; before, the content existed in one language only. Everything I delivered went in after review by the repository owner.",
        },
      },
      {
        name: "honest-english",
        href: "https://gibson1987r.github.io/honest-english/",
        role: "My own product, from idea to deploy",
        period: "May 2026",
        start: "2026-05",
        about: "An English learning tracker that refuses to gamify",
        stack: "JavaScript · HTML · CSS · zero dependencies",
        work: [
          {
            text: "I decided the product against the obvious: the counter shows the days I have gone WITHOUT practising, not the streak. A streak rewards not breaking it; the gap shows you where you gave up.",
            pdf: "My own product from idea to deploy, with zero dependencies self-imposed; online and in use.",
          },
          {
            soloWeb: true,
            text: "I wrote writing feedback that does not flatter: if the text is bad, it says so. A product that congratulates you for everything does not teach you English.",
          },
          {
            soloWeb: true,
            text: "I imposed a constraint no client asked for — zero dependencies — and held it with a review checklist of my own that blocks them.",
          },
        ],
        result: {
          soloWeb: true,
          text: "Online and in use: it is the tool I track my own English with, no streak to keep and no praise for decoration.",
        },
      },
      {
        name: "fiestas-web",
        // Ver la nota del bloque `es` sobre por qué el dominio no coincide
        // con el nombre del repo.
        href: "https://fiestas-app.vercel.app",
        role: "A service of my own, end to end",
        period: "Feb 2026",
        start: "2026-02",
        about:
          "Pages for children's parties: the invitation, the live RSVP and the gallery",
        stack: "React · Firebase/Firestore · Vite · Vercel",
        work: [
          {
            text: "It came from a concrete pain: organizing my son's birthday without knowing how many people would show up. Instead of solving that one party, I turned it into a service: each client is one config entry with its own route and its own isolated guest list, so adding a new party is no longer programming again.",
            pdf: "Multi-client service on Firestore, with live RSVP and a public demo; used at a real party.",
          },
          {
            soloWeb: true,
            text: "I locked editing and deleting behind admin permissions: guests confirm, and nobody else touches the list.",
          },
          {
            soloWeb: true,
            text: "I published an open demo with a made-up party, because you do not sell a client a screenshot: you show them the list updating on their own phone.",
          },
        ],
        result: {
          soloWeb: true,
          text: "Used at a real party, with a public demo where anyone can RSVP and watch the list update live.",
        },
      },
      {
        name: "bancolombia-lunchmoney",
        // Ver la nota del bloque `es`: no hay nada público que enlazar.
        role: "An automation in production over real money",
        period: "Jun 2026",
        start: "2026-06",
        about: "Bank alerts turn themselves into recorded transactions",
        stack: "JavaScript · Google Apps Script · REST API",
        work: [
          {
            text: "A client kept losing track of his spending because nobody writes down every purchase. I automated the whole record: the bank alert arrives by email and comes out as a classified transaction, with nobody typing anything.",
            pdf: "The bank alert arrives via Gmail and comes out as a classified transaction through an API; in production for a client.",
          },
          {
            soloWeb: true,
            text: "It is someone else's money, so I do not improvise: every change to how the emails are read is tested first against real saved emails.",
          },
          {
            soloWeb: true,
            text: "I run it and I maintain it. When the bank changes the format of the message, I am the one who fixes it.",
          },
        ],
        result: {
          soloWeb: true,
          text: "In production over a client's real accounts: his spending gets recorded without him writing down a thing.",
        },
      },
    ],

    /* Ver la nota del bloque `es`: también por impacto, y estas sí con fechas. */
    otherExperience: [
      {
        role: "Regional coordinator — Amazonas state",
        company: "A.C. Construyendo Futuros / UNICEF partner",
        context: "Amazonas, Venezuela · Three programmes: school feeding, water and sanitation, and livelihoods",
        start: "2021-09",
        end: "2023-12",
        startLabel: "Sep 2021",
        endLabel: "Dec 2023",
        achievements: [
          {
            text: "I coordinated three consecutive programmes in Amazonas state: «AliMentes», school feeding (Sep 2021 – Aug 2022); the water, hygiene and sanitation (WASH) programme in the schools of Atures municipality (Jul – Oct 2022); and «Manos Que Construyen» (2023), a livelihoods programme empowering adolescent girls and women against gender inequality. I ran the first two in parallel through July and August 2022.",
            pdf: "Coordinated three programmes in Amazonas: school feeding, WASH, and a livelihoods programme; two of them running in parallel.",
          },
          {
            text: "I coordinated 58 people in the field: on AliMentes, 21 monitors checking that the meal plans were met and 10 logistics operators; on WASH, 6 water engineers and technicians with their assigned promoters and a storekeeper; plus the suppliers of each programme. I split the tasks, built the schedules and kept track of what each of them had to deliver.",
            pdf: "I coordinated 58 people in the field: schedules, delegation, follow-up and full document traceability.",
          },
          {
            soloWeb: true,
            text: "I brought together indigenous communities, technical teams and partner institutions so an activity could happen at all. Without that agreement up front, nothing gets done on the ground.",
          },
          {
            soloWeb: true,
            text: "I kept everything delivered traceable through reports and document management: a humanitarian project that cannot prove what it did does not get renewed.",
          },
        ],
      },
      {
        role: "Cash desk and billing officer",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Where I wrote my first useful code",
        stack: "Python · Xenco · document automation",
        start: "2025-02",
        end: "2025-10",
        startLabel: "Feb 2025",
        endLabel: "Oct 2025",
        achievements: [
          {
            soloWeb: true,
            text: "I billed daily in Xenco, the hospital information system. Every insurer asks for a different set of documents, and it changes again with the type of visit: billing also meant splitting a scanned PDF by hand, page by page. I fixed the intake first, so every scan came out the same.",
          },
          {
            text: "On top of that order, I wrote a script with Copilot that identified the insurer, the invoice and the type of visit, and left the folders already split and renamed in every possible combination; all I did was delete the ones that did not apply. From about 30 hours down to one, and a hundred cases cost the same as one.",
            pdf: "A Python script that sorted and split billing PDFs by insurer and type of visit: from ~30 hours down to 1.",
          },
        ],
      },
      {
        role: "Human resources officer",
        company: "Hospital Departamental San Juan de Dios E.S.E.",
        context: "Colombia · Hiring paperwork and document control",
        stack: "Excel · data modelling",
        start: "2025-11",
        end: "2026-03",
        startLabel: "Nov 2025",
        endLabel: "Mar 2026",
        achievements: [
          {
            text: "I modelled in Excel the records of more than 500 contractors across four municipalities, accounting for the fact that one person can hold several profiles if they work in more than one programme: personal data, role and position, start and end dates.",
            pdf: "I modelled the records of 500+ contractors and wired them to Word: issuing a document went from 20-30 min to 4-5.",
          },
          {
            soloWeb: true,
            text: "I connected it to Word through mail merge, treating the sheet as an entity-relationship table: each template pulls the fields it needs and fills itself in. Issuing a document went from 20 or 30 minutes down to 4 or 5.",
          },
          {
            soloWeb: true,
            text: "I reviewed CVs, supporting files and contractor records, checking that every requirement and every qualification was in place before legal validation, and followed up on the improvement plan and the risk map required by the public audit office.",
          },
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
        achievements: [
          {
            text: "I taught maths for nine years to between 200 and 300 students a year, and reworked the same explanation as many times as it took to find the one that worked for each of them.",
            pdf: "Nine years teaching maths to between 200 and 300 students a year.",
          },
          {
            soloWeb: true,
            text: "I kept up the communication with families and the school community so the support did not end at the classroom door.",
          },
          {
            soloWeb: true,
            text: "It is the skill I use most when I program: reading something written by someone else, understanding it and being able to explain it.",
          },
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
          { text: "CSS without frameworks", soloWeb: true },
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
          { text: "Authentication and roles", soloWeb: true },
        ],
      },
      {
        category: "Workflow",
        items: [
          "Git",
          "GitHub",
          { text: "Pull requests", soloWeb: true },
          { text: "Issues", soloWeb: true },
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
          { text: "Delegation and follow-up", soloWeb: true },
          { text: "Client communication", soloWeb: true },
          "Excel and Google Sheets",
          "Data modelling in tables",
          { text: "Mail merge", soloWeb: true },
          { text: "Kanban boards (Trello, Notion, Asana)", soloWeb: true },
          { text: "Documentation and traceability", soloWeb: true },
        ],
      },
    ],

    /* Ver la nota del bloque `es`: programación primero, titulaciones al final. */
    education: [
      /* Ver la nota del bloque `es`: el titular y el enlace, no los 44 diplomas. */
      {
        title: "Programming — Platzi",
        institution:
          {
            text: "JavaScript career path · ~35 courses across JavaScript, React, Node and markup · Practical Python course: building a CRUD (21 h)",
            pdf: "JavaScript career path · ~35 courses in JS, React and Node · Python: CRUD (21 h)",
          },
        year: "2017–2020",
        link: {
          text: "platzi.com/@GibsonR",
          href: "https://platzi.com/@GibsonR",
          soloWeb: true,
        },
      },
      {
        title: "Ongoing self-study",
        institution:
          "«Think Python» · Visual Studio Code (Udemy) · web development on real projects",
        year: "2026",
      },
      {
        title: {
          text: "Bachelor's degree in Education — Rural and Farming Communities",
          pdf: "Bachelor's degree in Education (Rural Communities)",
        },
        institution: "Venezuela",
        year: "",
      },
      {
        title: {
          text: "Higher University Technician in Human Resources Administration",
          pdf: "Higher University Technician in Human Resources",
        },
        institution: "Recognized in Colombia as Tecnólogo en Gestión de Talento Humano",
        year: "",
      },
    ],

    /* Ver la nota del bloque `es`: `titlePrint` es el encabezado del PDF. */
    sections: [
      {
        id: "about",
        title: "About me",
        titlePrint: "Professional summary",
        file: "about-me.md",
        type: "about",
      },
      {
        id: "experience",
        title: "Experience",
        titlePrint: "Software development experience",
        file: "experience.md",
        type: "experience",
      },
      {
        id: "otherExperience",
        title: "Other experience",
        titlePrint: "Previous professional experience",
        file: "other-experience.md",
        type: "otherExperience",
      },
      {
        id: "skills",
        title: "Skills",
        titlePrint: "Technical skills",
        file: "skills.json",
        type: "skills",
      },
      {
        id: "education",
        title: "Education",
        titlePrint: "Education",
        file: "education.md",
        type: "education",
      },
    ],

    footer: {
      /* Ver la nota del bloque `es`: desactivada, se descomentan las dos a la vez. */
      // note: "Hand-written in HTML, CSS and JavaScript. No frameworks, no analytics, no cookies.",
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
