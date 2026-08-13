/**
 * data.js → DOM.
 * Ningún otro fichero escribe texto visible: si algo no aparece en la página,
 * o falta en data.js o falta su renderizador aquí abajo.
 *
 * Nada de esto guarda el contenido en una variable de módulo: cada función
 * pide `datos()` / `ui()` al ejecutarse. Por eso, para cambiar de idioma
 * basta con volver a llamar a renderCV().
 */

import { datos, ui, otroIdioma } from "./i18n.js";

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
    ${items.map((item) => `<li class="chip">${esc(item)}</li>`).join("")}
  </ul>`;

const enlaceExterno = (href) =>
  href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"';

/**
 * El "collage" de cifras de una experiencia. Dos piezas, ambas opcionales:
 *   stats → cifras sueltas, sin comparación posible (200-300 estudiantes)
 *   bars  → valores comparables entre sí, dibujados proporcionales al mayor
 *
 * Las barras son `aria-hidden` a propósito: el número ya está escrito al lado
 * en texto, así que repetirlo en el lector de pantalla solo estorba. La barra
 * nunca es el único sitio donde vive el dato.
 */
const viz = (v) => {
  if (!v) return "";
  const mayor = v.bars?.length ? Math.max(...v.bars.map((b) => b.value)) : 0;
  return `
  <figure class="viz">
    ${v.title ? `<figcaption class="viz__title">${esc(v.title)}</figcaption>` : ""}
    ${
      v.stats?.length
        ? `<ul class="viz__stats">
      ${v.stats
        .map(
          (s) => `<li class="viz__stat">
        <span class="viz__figure">${esc(s.figure)}</span>
        <span class="viz__caption">${esc(s.caption)}</span>
      </li>`,
        )
        .join("")}
    </ul>`
        : ""
    }
    ${
      v.bars?.length
        ? `<ul class="viz__bars">
      ${v.bars
        .map(
          (b) => `<li class="viz__row">
        <span class="viz__label">${esc(b.label)}</span>
        <span class="viz__track" aria-hidden="true"><span class="viz__fill" style="width:${Math.round((b.value / mayor) * 100)}%"></span></span>
        <span class="viz__value">${esc(b.display)}</span>
      </li>`,
        )
        .join("")}
    </ul>`
        : ""
    }
  </figure>`;
};

/* --- Un renderizador por tipo de sección --------------------------------- */

const renderizadores = {
  about: (parrafos) => `
    <div class="prose">
      ${parrafos.map((p) => `<p>${esc(p)}</p>`).join("")}
    </div>`,

  /* Experiencia en programación. Da igual si el repo es mío o ajeno: lo que
     importa es el producto, mi papel dentro de él y qué resolvió. Cada tarjeta
     es una historia STAR (about → role → work[] → result). Ver star.md. */
  experience: (entradas) => `
    <ul class="entries entries--cards">
      ${entradas
        .map(
          (entrada) => `
        <li class="entry entry--card">
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
              }
            </span>
          </h3>
          <p class="entry__meta">${esc(entrada.about)}</p>
          ${
            entrada.work?.length
              ? `<ul class="bullets">
            ${entrada.work.map((linea) => `<li>${esc(linea)}</li>`).join("")}
          </ul>`
              : ""
          }
          ${
            entrada.result
              ? `<p class="entry__result">
            <span class="entry__resultLabel">${esc(ui().resultLabel)}</span> ${esc(entrada.result)}
          </p>`
              : ""
          }
        </li>`,
        )
        .join("")}
    </ul>`,

  /* Los empleos anteriores a la programación. Estos sí llevan fechas. */
  otherExperience: (puestos) => `
    <ol class="entries">
      ${puestos
        .map(
          (puesto) => `
        <li class="entry">
          <h3 class="entry__title">
            <span class="entry__role">${esc(puesto.role)}</span>
            <span class="entry__at" aria-hidden="true">@</span>
            <span class="entry__company">${esc(puesto.company)}</span>
          </h3>
          <p class="entry__meta">
            <!-- datetime lleva la fecha legible por máquina (2025-11); el texto,
                 la legible por personas (nov 2025) -->
            <time datetime="${esc(puesto.start)}">${esc(puesto.startLabel)}</time>
            <span aria-hidden="true">—</span>
            <span class="sr-only">${esc(ui().srTo)}</span>
            <time datetime="${esc(puesto.end)}">${esc(puesto.endLabel)}</time>
            <span class="entry__dot" aria-hidden="true">·</span>
            ${esc(puesto.context)}
          </p>
          ${viz(puesto.viz)}
          <!-- Plegado por defecto: la cabecera y las cifras se ven siempre, el
               relato se abre al tocarlo. Es un details nativo, sin JS: funciona
               con teclado y con lector de pantalla. Ojo, summary solo admite
               texto y titulos, por eso el collage se queda fuera. -->
          <details class="fold">
            <summary class="fold__toggle">
              <span class="fold__open">${esc(ui().foldOpen)}</span>
              <span class="fold__close">${esc(ui().foldClose)}</span>
            </summary>
            <ul class="bullets">
              ${puesto.achievements.map((logro) => `<li>${esc(logro)}</li>`).join("")}
            </ul>
          </details>
        </li>`,
        )
        .join("")}
    </ol>`,

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
          <h3 class="entry__title">${esc(estudio.title)}</h3>
          <p class="entry__meta">
            ${esc(estudio.institution)}
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
              ? `<p class="entry__verify"><a href="${esc(estudio.link.href)}"${enlaceExterno(estudio.link.href)}>${esc(estudio.link.text)}</a></p>`
              : ""
          }
        </li>`,
        )
        .join("")}
    </ul>`,
};

/* --- Bloques de la página ------------------------------------------------ */

function renderCabecera() {
  const { name, role, tagline, location, status, links, soloImpresion } =
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
      <span class="typing" style="--ch: ${role.length}">${esc(role)}</span>
    </p>
    <p class="hero__tagline">${esc(tagline)}</p>
    <p class="hero__meta">
      ${esc(location)}
      <span class="entry__dot" aria-hidden="true">·</span>
      <span class="hero__status">${esc(status)}</span>
    </p>
    <ul class="hero__links">
      ${links
        .map(
          (enlace) => `
        <li>
          <span class="hero__linkLabel" aria-hidden="true">${esc(enlace.label)}:</span>
          <a href="${esc(enlace.href)}"${enlaceExterno(enlace.href)}>
            <span class="sr-only">${esc(enlace.label)}: </span>${esc(enlace.text)}
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
                 leen el título de verdad. -->
            <span class="section__cmd" aria-hidden="true">
              <span class="prompt">$</span> cat <span class="section__file">${esc(seccion.file)}</span>
            </span>
            <span class="section__plain">${esc(seccion.title)}</span>
          </h2>
          ${renderizar(cv[seccion.id])}
        </section>`;
    })
    .join("");
}

function renderPie() {
  const { footer } = datos();

  document.querySelector(".site-footer").innerHTML = `
    <p class="site-footer__note">
      <span class="prompt" aria-hidden="true">$</span> ${esc(footer.note)}
    </p>
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
