/**
 * data.js → DOM.
 * Ningún otro fichero escribe texto visible: si algo no aparece en la página,
 * o falta en data.js o falta su renderizador aquí abajo.
 *
 * Nada de esto guarda el contenido en una variable de módulo: cada función
 * pide `datos()` / `ui()` al ejecutarse. Por eso, para cambiar de idioma
 * basta con volver a llamar a renderCV().
 */

import { datos, ui, otroIdioma, idioma } from "./i18n.js";
import { icono } from "./icons.js";

/** Escapa el texto antes de meterlo en HTML. Datos y marcado no se mezclan. */
export const esc = (valor) =>
  String(valor).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );

const chips = (items, etiqueta) => `
  <ul class="chips" aria-label="${esc(etiqueta)}">
    ${items
      .flatMap((item) => trozo(item))
      .map(({ texto, clases }) => `<li${attrClase("chip", clases)}>${texto}</li>`)
      .join("")}
  </ul>`;

const enlaceExterno = (href) =>
  href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"';

/**
 * Un párrafo o una viñeta puede escribirse de tres formas en data.js:
 *
 *   "texto"                            → sale en la web y en el PDF
 *   { text: "texto", soloWeb: true }   → solo en la web
 *   { text: "largo", pdf: "corto" }    → la web lee el largo, el PDF el corto
 *
 * Las dos últimas existen por el PDF: ahí manda la brevedad, porque lo lee un
 * programa de selección y luego alguien con prisa. Lo que en la web es
 * narrativa, en una hoja de papel es lo que impide que quepa.
 *
 * `pdf` no es un segundo CV: es el mismo hecho dicho en una línea. Se pintan
 * las dos redacciones y cada medio esconde la que no le toca, igual que hacen
 * `rolePrint` y `titlePrint`.
 *
 * Devuelve SIEMPRE una lista —una pieza, o dos cuando hay versión de papel—
 * con el texto ya escapado y el nombre de la clase que le toca, si le toca.
 */
const trozo = (valor) => {
  if (typeof valor === "string") return [{ texto: esc(valor), clases: "" }];
  if (valor.soloWeb) return [{ texto: esc(valor.text), clases: "webOnly" }];
  if (valor.pdf)
    return [
      { texto: esc(valor.text), clases: "webOnly" },
      { texto: esc(valor.pdf), clases: "printOnly" },
    ];
  return [{ texto: esc(valor.text), clases: "" }];
};

/**
 * Une las clases propias del elemento con la que decide en qué medio sale, y
 * devuelve el atributo entero o nada. Sin esto, un elemento que ya tiene clase
 * (`entry__result`) no podría además llevar la del medio.
 */
const attrClase = (...nombres) => {
  const lista = nombres.filter(Boolean).join(" ");
  return lista ? ` class="${lista}"` : "";
};

/**
 * El stack de una entrada, solo en el PDF. Un sistema de selección busca
 * "React" o "Python" dentro del puesto donde se usaron: un término que solo
 * aparece en la lista de habilidades del final no cuenta como experiencia con
 * esa tecnología. En la web sobra —ahí se lee el producto, no la herramienta—,
 * y por eso vive en la misma línea del `about` y no en una propia.
 */
const stackPrint = (valor) =>
  valor ? `<span class="printOnly"> · ${esc(valor)}</span>` : "";

/** El periodo de una entrada, solo para el PDF. Sin `period`, no pinta nada. */
const periodo = (valor) =>
  valor ? `<span class="printOnly"> · ${esc(valor)}</span>` : "";

/**
 * Calcula en qué posición va cada entrada CUANDO SE IMPRIME: de la más
 * reciente a la más antigua, que es como un sistema de selección espera leer
 * una trayectoria y como la lee cualquier reclutador.
 *
 * En pantalla el orden no cambia — ahí manda el impacto, no el calendario —,
 * así que no se toca el array: se devuelve una lista de posiciones que el CSS
 * de impresión aplica con `order`. El HTML sale igual para los dos medios y
 * cada uno lo coloca a su manera.
 *
 * Ordena por `start` ("2025-11"), que al ser AAAA-MM se compara como texto sin
 * convertir nada a fecha. Las entradas sin `start` se quedan al final en el
 * orden en que están: sin fecha no hay nada que ordenar, y `sort` en JavaScript
 * respeta el orden original cuando se le dice que dos elementos empatan.
 */
const ordenCronologico = (entradas) => {
  const posiciones = [];
  entradas
    .map((entrada, indice) => ({ indice, start: entrada.start ?? "" }))
    .sort((a, b) => {
      if (!a.start && !b.start) return 0;
      if (!a.start) return 1;
      if (!b.start) return -1;
      return b.start.localeCompare(a.start);
    })
    .forEach((entrada, posicion) => {
      posiciones[entrada.indice] = posicion;
    });
  return posiciones;
};

/* --- Un renderizador por tipo de sección --------------------------------- */

const renderizadores = {
  about: (parrafos) => `
    <div class="prose">
      ${parrafos
        .flatMap((p) => trozo(p))
        .map(({ texto, clases }) => `<p${attrClase(clases)}>${texto}</p>`)
        .join("")}
    </div>`,

  /* Experiencia en programación. Da igual si el repo es mío o ajeno: lo que
     importa es el producto, mi papel dentro de él y qué resolvió. Cada tarjeta
     es una historia STAR (about → role → work[] → result). Ver star.md. */
  experience: (entradas) => {
    const orden = ordenCronologico(entradas);
    return `
    <ul class="entries entries--cards">
      ${entradas
        .map(
          (entrada, indice) => `
        <li class="entry entry--card" style="--print-order: ${orden[indice]}">
          <!-- El rol va ENCIMA del nombre: primero qué fui, después dónde. -->
          <h3 class="entry__title">
            <span class="entry__roleTag">${esc(entrada.role)}</span>
            <span class="entry__name">
              <span class="prompt" aria-hidden="true">./</span>${
                // Sin href no se pinta un enlace muerto: solo el nombre. Varios
                // de estos repos son privados o ajenos y no hay nada que enlazar.
                entrada.href
                  ? `<a href="${esc(entrada.href)}"${enlaceExterno(entrada.href)}>${esc(entrada.name)}</a>`
                  : esc(entrada.name)
              }<!-- El periodo va aquí, en la primera línea del bloque: un
                   lector automático asocia puesto, sitio y fechas cuando van
                   juntos. Al final, después de las viñetas, ya no las liga. -->${periodo(entrada.period)}
            </span>
          </h3>
          <p class="entry__meta">${esc(entrada.about)}${stackPrint(entrada.stack)}</p>
          ${
            entrada.work?.length
              ? `<ul class="bullets">
            ${entrada.work
              .flatMap((linea) => trozo(linea))
              .map(({ texto, clases }) => `<li${attrClase(clases)}>${texto}</li>`)
              .join("")}
          </ul>`
              : ""
          }
          ${
            entrada.result
              ? trozo(entrada.result)
                  .map(
                    ({ texto, clases }) => `<p${attrClase("entry__result", clases)}>
            <span class="entry__resultLabel">${esc(ui().resultLabel)}</span> ${texto}
          </p>`,
                  )
                  .join("")
              : ""
          }
        </li>`,
        )
        .join("")}
    </ul>`;
  },

  /* Los empleos anteriores a la programación. Estos sí llevan fechas. */
  otherExperience: (puestos) => {
    const orden = ordenCronologico(puestos);
    return `
    <ol class="entries">
      ${puestos
        .map(
          (puesto, indice) => `
        <li class="entry" style="--print-order: ${orden[indice]}">
          <h3 class="entry__title">
            <span class="entry__role">${esc(puesto.role)}</span>
            <span class="entry__at" aria-hidden="true">@</span>
            <span class="entry__company">${esc(puesto.company)}</span>
          </h3>
          <p class="entry__meta">
            <!-- datetime lleva la fecha legible por máquina (2025-11); el texto,
                 la legible por personas (nov 2025) -->
            <time datetime="${esc(puesto.start)}">${esc(puesto.startLabel)}</time>
            <!-- Guion normal, NO raya larga (—). Un ATS busca el patron
                 "mmm AAAA - mmm AAAA" para calcular los anos de experiencia;
                 con raya larga el patron no casa y puede puntuar como si no
                 hubiera experiencia. Verificado el 2026-08-27 con
                 verificar-ats.py, que fallaba las seis fechas por esto. -->
            <span aria-hidden="true">-</span>
            <span class="sr-only">${esc(ui().srTo)}</span>
            <time datetime="${esc(puesto.end)}">${esc(puesto.endLabel)}</time>
            <span class="entry__dot" aria-hidden="true">·</span>
            ${esc(puesto.context)}${stackPrint(puesto.stack)}
          </p>
          <!-- Plegado por defecto: solo se ve el cargo y las fechas; el relato
               se abre al tocarlo. Es un details nativo, sin JS: funciona con
               teclado y con lector de pantalla. -->
          <details class="fold">
            <summary class="fold__toggle">
              <span class="fold__open">${esc(ui().foldOpen)}</span>
              <span class="fold__close">${esc(ui().foldClose)}</span>
            </summary>
            <ul class="bullets">
              ${puesto.achievements
                .flatMap((logro) => trozo(logro))
                .map(({ texto, clases }) => `<li${attrClase(clases)}>${texto}</li>`)
                .join("")}
            </ul>
          </details>
        </li>`,
        )
        .join("")}
    </ol>`;
  },

  skills: (grupos) => `
    <ul class="skills">
      ${grupos
        .map(
          (grupo) => `
        <li class="skills__group">
          <h3 class="skills__category">${esc(grupo.category)}</h3>
          ${chips(grupo.items, grupo.category)}
        </li>`,
        )
        .join("")}
    </ul>`,

  education: (estudios) => `
    <ul class="entries">
      ${estudios
        .map(
          (estudio) => `
        <li class="entry entry--compact">
          <!-- El título y el centro admiten versión de papel, igual que una
               viñeta: los nombres oficiales completos son correctos en la web
               y en el PDF ocupan dos líneas cada uno. -->
          ${trozo(estudio.title)
            .map(({ texto, clases }) => `<h3${attrClase("entry__title", clases)}>${texto}</h3>`)
            .join("")}
          <p class="entry__meta">
            ${trozo(estudio.institution)
              .map(({ texto, clases }) => `<span${attrClase(clases)}>${texto}</span>`)
              .join("")}
            ${
              // Sin año no se pinta ni el punto separador ni un <time> vacío.
              // Y solo es <time> si es un año suelto: "2017-2020" es un rango y
              // como fecha legible por máquina no vale, así que va como texto.
              estudio.year
                ? `<span class="entry__dot" aria-hidden="true">·</span>
                   ${
                     /^\d{4}$/.test(estudio.year)
                       ? `<time datetime="${esc(estudio.year)}">${esc(estudio.year)}</time>`
                       : `<span>${esc(estudio.year)}</span>`
                   }`
                : ""
            }
          </p>
          ${
            // El enlace de verificación: sin él, "35 cursos" es una afirmación;
            // con él, es algo que el lector puede comprobar en diez segundos.
            estudio.link
              ? `<p${attrClase("entry__verify", estudio.link.soloWeb ? "webOnly" : "")}><a href="${esc(estudio.link.href)}"${enlaceExterno(estudio.link.href)}>${esc(estudio.link.text)}</a></p>`
              : ""
          }
        </li>`,
        )
        .join("")}
    </ul>`,
};

/* --- Bloques de la página ------------------------------------------------ */

function renderCabecera() {
  const { name, role, rolePrint, location, status, links, soloImpresion } =
    datos().identity;

  // Datos que solo deben salir en el PDF (documento, etc.). Si `mostrar` es
  // false ni siquiera llegan al HTML: en una web pública, "oculto con CSS"
  // no es oculto — está en el código fuente y lo indexa cualquiera.
  const bloqueImpresion =
    soloImpresion?.mostrar && soloImpresion.campos?.length
      ? `<p class="hero__printOnly">
           ${soloImpresion.campos
             .map(
               (campo) =>
                 `<span><span class="hero__linkLabel">${esc(campo.label)}:</span> ${esc(campo.value)}</span>`,
             )
             .join('<span class="entry__dot" aria-hidden="true">·</span>')}
         </p>`
      : "";

  document.querySelector("#cabecera").innerHTML = `
    <p class="hero__cmd"><span class="prompt" aria-hidden="true">$</span> whoami</p>
    <!-- tabindex="-1": no entra en el orden de tabulación, pero la paleta
         puede llevarle el foco al saltar al inicio -->
    <h1 class="hero__name" tabindex="-1">${esc(name)}</h1>
    <p class="hero__role">
      <!-- --ch = número de caracteres: la animación de tecleo lo necesita
           para saber cuánto ancho recorrer (funciona porque la fuente es monoespaciada) -->
      <span class="typing${rolePrint ? " webOnly" : ""}" style="--ch: ${role.length}">${esc(role)}</span>${
        // El PDF lleva el puesto con el nombre que se busca en un portal de
        // empleo, más el stack. Va en la segunda línea del documento porque es
        // lo primero que mira tanto un filtro como una persona.
        rolePrint ? `<span class="printOnly">${esc(rolePrint)}</span>` : ""
      }
    </p>
    <p class="hero__meta">
      ${esc(location)}
      <span class="entry__dot" aria-hidden="true">·</span>
      <span class="hero__status">${esc(status)}</span>
    </p>
    <ul class="hero__links">
      ${links
        .map(
          // El icono va DENTRO del enlace: así también es zona clicable, que en
          // un móvil son unos milímetros más de blanco al que apuntar. Y sustituye
          // a la etiqueta escrita ("GitHub:"), que decía lo mismo ocupando más.
          // El `sr-only` la mantiene para quien no ve el icono.
          // El texto va envuelto en su propio span porque en pantallas
          // estrechas se esconde y solo queda el icono. Un trozo de texto
          // suelto dentro del enlace no se puede ocultar con CSS: hay que
          // poder apuntarle con un selector.
          (enlace) => `
        <li>
          <a href="${esc(enlace.href)}"${enlaceExterno(enlace.href)}>
            ${icono(enlace.icon)}<span class="sr-only">${esc(enlace.label)}: </span><span class="hero__linkText">${esc(enlace.text)}</span>
          </a>
        </li>`,
        )
        .join("")}
    </ul>
    ${bloqueImpresion}`;
}

function renderSecciones() {
  const cv = datos();

  document.querySelector("#contenido").innerHTML = cv.sections
    .map((seccion) => {
      const renderizar = renderizadores[seccion.type];
      if (!renderizar) {
        console.warn(`data.js: no existe un renderizador para "${seccion.type}"`);
        return "";
      }

      return `
        <section class="section" id="${esc(seccion.id)}"
                 aria-labelledby="${esc(seccion.id)}-title" data-reveal>
          <h2 class="section__title" id="${esc(seccion.id)}-title" tabindex="-1">
            <!-- En pantalla se ve el comando; el lector de pantalla y el PDF
                 leen el título de verdad. titlePrint existe para el PDF: un
                 filtro de selección busca encabezados que conoce, y "Otras
                 experiencias" no le dice nada. Sin titlePrint se usa el
                 título normal y no cambia nada. -->
            <span class="section__cmd" aria-hidden="true">
              <span class="prompt">$</span> cat <span class="section__file">${esc(seccion.file)}</span>
            </span>
            ${
              // Con `titlePrint` se pintan los dos y cada medio esconde el que
              // no le toca. No vale con sustituir uno por otro: este mismo
              // elemento es el que oye un lector de pantalla en la web, y ahí
              // el título bueno es el corto.
              seccion.titlePrint
                ? `<span class="section__plain webOnly">${esc(seccion.title)}</span>
                   <span class="section__plain printOnly">${esc(seccion.titlePrint)}</span>`
                : `<span class="section__plain">${esc(seccion.title)}</span>`
            }
          </h2>
          ${renderizar(cv[seccion.id])}
        </section>`;
    })
    .join("");
}

function renderPie() {
  const { footer, identity } = datos();

  /**
   * Los mismos enlaces de la cabecera, otra vez al final y solo como iconos.
   * No es duplicar por duplicar: esta página se lee de arriba abajo, y quien
   * termina abajo tendría que volver a subir para encontrarte. Aquí no hay
   * texto porque no hace falta leer la URL — solo tocarla.
   *
   * `aria-label` es obligatorio: sin él, un enlace cuyo único contenido es un
   * SVG decorativo se anuncia como "enlace" y nada más. `title` da lo mismo
   * en forma de globito al pasar el ratón.
   */
  const contacto = `
    <ul class="site-footer__contact">
      ${identity.links
        .map(
          (enlace) => `
        <li>
          <a class="site-footer__icon" href="${esc(enlace.href)}"${enlaceExterno(enlace.href)}
             aria-label="${esc(enlace.label)}" title="${esc(enlace.label)}">
            ${icono(enlace.icon)}
          </a>
        </li>`,
        )
        .join("")}
    </ul>`;

  // `note` es opcional: si no está en data.js no se pinta el párrafo, porque
  // un `$` sin comando detrás parece un fallo de render, no una decisión.
  document.querySelector(".site-footer").innerHTML = `
    ${contacto}
    ${
      footer.note
        ? `<p class="site-footer__note">
      <span class="prompt" aria-hidden="true">$</span> ${esc(footer.note)}
    </p>`
        : ""
    }
    <p class="site-footer__updated">${esc(footer.updated)}</p>`;
}

/**
 * El "cromo": lo que está escrito a mano en index.html y no sale de las
 * secciones del CV. Sin esto, el contenido se traduciría y los botones no.
 */
function renderInterfaz() {
  const t = ui();

  const poner = (selector, texto) => {
    const nodo = document.querySelector(selector);
    if (nodo) nodo.textContent = texto;
  };
  const atributo = (selector, nombre, valor) =>
    document.querySelector(selector)?.setAttribute(nombre, valor);

  // El idioma del documento. No es cosmético: es lo que hace que un lector
  // de pantalla cambie de voz y no lea el inglés con fonética española.
  document.documentElement.lang = t.lang;

  poner(".skip-link", t.skipLink);
  poner('[data-action="open-palette"] .toolbar__label', t.searchBtn);
  poner('[data-action="print"] .toolbar__label', t.printBtn);
  poner('[data-action="toggle-theme"] .toolbar__label', t.themeBtn);

  // El botón de idioma anuncia el idioma AL QUE lleva, y lo anuncia en ese
  // idioma: quien no entiende el actual tiene que poder leer el botón.
  poner('[data-action="toggle-lang"] .toolbar__label', t.langBtn);
  atributo('[data-action="toggle-lang"]', "aria-label", t.langBtnLabel);
  atributo('[data-action="toggle-lang"]', "lang", otroIdioma());

  atributo("#palette", "aria-label", t.paletteLabel);
  atributo("#palette-input", "aria-label", t.paletteInputLabel);
  atributo("#palette-input", "placeholder", t.palettePlaceholder);
  atributo("#palette-list", "aria-label", t.paletteListLabel);
  poner("#palette-empty", t.paletteEmpty);

  const pistas = document.querySelector(".palette__hints");
  if (pistas) {
    pistas.innerHTML = `
      <kbd>↑</kbd><kbd>↓</kbd> ${esc(t.hintMove)} ·
      <kbd>⏎</kbd> ${esc(t.hintRun)} ·
      <kbd>esc</kbd> ${esc(t.hintClose)}`;
  }
}

/**
 * Chrome bautiza el PDF con el `document.title`, así que el archivo salía como
 * «Gibson Rosales · Desarrollador con IA.pdf»: con espacios, con acentos y con
 * un punto medio. elempleo rechaza de plano cualquier nombre que no sea letras
 * y números, y el punto medio es el mismo carácter que Computrabajo no admite
 * en sus formularios. Subir el CV obligaba a renombrarlo a mano cada vez.
 *
 * Se cambia el título justo antes de imprimir y se devuelve al terminar, que es
 * el único momento en que Chrome lo lee para nombrar el archivo. Así el PDF sale
 * ya con un nombre que pasa en los tres portales y la pestaña del navegador
 * sigue diciendo lo que tiene que decir.
 *
 * `afterprint` dispara también cuando se cancela el diálogo, de modo que el
 * título vuelve tanto si se guarda como si no.
 */
const NOMBRE_PDF = { es: "GibsonRosalesDesarrolladorWeb", en: "GibsonRosalesWebDeveloper" };

function nombrarElPDF() {
  let titulo = "";
  addEventListener("beforeprint", () => {
    titulo = document.title;
    document.title = NOMBRE_PDF[idioma()] || NOMBRE_PDF.es;
  });
  addEventListener("afterprint", () => {
    if (titulo) document.title = titulo;
  });
}

nombrarElPDF();

/** Pinta el CV entero en el idioma activo. */
export function renderCV() {
  const cv = datos();

  document.title = cv.meta.title;

  let descripcion = document.querySelector('meta[name="description"]');
  if (!descripcion) {
    descripcion = document.createElement("meta");
    descripcion.name = "description";
    document.head.append(descripcion);
  }
  descripcion.content = cv.meta.description;

  renderInterfaz();
  renderCabecera();
  renderSecciones();
  renderPie();
}
