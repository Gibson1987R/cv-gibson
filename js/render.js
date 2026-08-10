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

/* --- Un renderizador por tipo de sección --------------------------------- */

const renderizadores = {
  about: (parrafos) => `
    <div class="prose">
      ${parrafos.map((p) => `<p>${esc(p)}</p>`).join("")}
    </div>`,

  experience: (puestos) => `
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
          <ul class="bullets">
            ${puesto.achievements.map((logro) => `<li>${esc(logro)}</li>`).join("")}
          </ul>
          ${chips(puesto.stack, `${ui().techIn} ${puesto.company}`)}
        </li>`,
        )
        .join("")}
    </ol>`,

  projects: (proyectos) => `
    <ul class="entries entries--cards">
      ${proyectos
        .map(
          (proyecto) => `
        <li class="entry entry--card">
          <h3 class="entry__title">
            <span class="prompt" aria-hidden="true">./</span>${
              // Sin href no se pinta un enlace muerto: solo el nombre
              proyecto.href
                ? `<a href="${esc(proyecto.href)}"${enlaceExterno(proyecto.href)}>${esc(proyecto.name)}</a>`
                : esc(proyecto.name)
            }
          </h3>
          <p class="entry__summary">${esc(proyecto.summary)}</p>
          <p class="entry__result">
            <span class="entry__resultLabel">${esc(ui().resultLabel)}</span> ${esc(proyecto.result)}
          </p>
          ${chips(proyecto.stack, `${ui().stackOf} ${proyecto.name}`)}
        </li>`,
        )
        .join("")}
    </ul>`,

  /* Trabajo en repos que no son míos: lo que importa aquí no es el proyecto,
     es mi papel dentro de él y que el código pasó por revisión ajena. */
  contributions: (repos) => `
    <ul class="entries entries--cards">
      ${repos
        .map(
          (repo) => `
        <li class="entry entry--card entry--contrib">
          <h3 class="entry__title">
            <span class="prompt" aria-hidden="true">~/</span>${esc(repo.name)}
          </h3>
          <p class="entry__meta">
            <span class="entry__contribRole">${esc(repo.role)}</span>
            <span class="entry__dot" aria-hidden="true">·</span>
            ${esc(repo.about)}
          </p>
          <ul class="bullets">
            ${repo.work.map((linea) => `<li>${esc(linea)}</li>`).join("")}
          </ul>
          <p class="entry__merged">${esc(repo.merged)}</p>
          ${chips(repo.stack, `${ui().stackOf} ${repo.name}`)}
        </li>`,
        )
        .join("")}
    </ul>`,

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
              // Sin año no se pinta ni el punto separador ni un <time> vacío
              estudio.year
                ? `<span class="entry__dot" aria-hidden="true">·</span>
                   <time datetime="${esc(estudio.year)}">${esc(estudio.year)}</time>`
                : ""
            }
          </p>
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
