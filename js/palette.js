/**
 * Paleta de comandos (⌘K / Ctrl+K), al estilo de un editor.
 *
 * Dos ideas la sostienen:
 *  1. Los comandos se generan desde data.js. Añadir una sección al array
 *     `sections` la añade a la paleta sin tocar este fichero.
 *  2. El diálogo es un <dialog> nativo: trampa de foco, cierre con Esc,
 *     fondo inerte y ::backdrop salen gratis, sin dependencias.
 */

import { datos, ui } from "./i18n.js";
import { esc } from "./render.js";

/** Quita tildes y mayúsculas para que "sobre mi" encuentre "Sobre mí". */
const normalizar = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // rango Unicode de los acentos combinantes
    .toLowerCase();

/**
 * Puntúa cuánto casa una consulta con un comando. Menos es mejor; -1 = no casa.
 *
 * Dos niveles, y el orden importa:
 *  1. Coincidencia literal ("lang" dentro de "language"): siempre gana.
 *  2. Subsecuencia ("exp" encuentra "Ir a Experiencia"): útil, pero es fácil
 *     que dé casualidades — "lang" también está, letra a letra, en
 *     "Abrir Emai**l** gibsonros**a**les@gmail.com". Por eso van después de
 *     cualquier coincidencia literal, no mezcladas con ellas.
 */
const PENALIZACION_SUBSECUENCIA = 1000;

function puntuar(consulta, texto) {
  if (!consulta) return 0;

  const literal = texto.indexOf(consulta);
  if (literal !== -1) return literal;

  let buscada = 0;
  let primera = -1;

  for (let i = 0; i < texto.length && buscada < consulta.length; i++) {
    if (texto[i] === consulta[buscada]) {
      if (primera === -1) primera = i;
      buscada++;
    }
  }

  return buscada === consulta.length
    ? PENALIZACION_SUBSECUENCIA + primera
    : -1;
}

/** Lleva el foco y el scroll a una sección. Las dos cosas, no solo el scroll. */
function irASeccion(id) {
  const seccion = document.getElementById(id);
  const titulo = document.getElementById(`${id}-title`);
  if (!seccion) return;

  seccion.scrollIntoView({ block: "start" });
  // Sin esto un lector de pantalla se queda donde estaba y el salto es mentira
  titulo?.focus({ preventScroll: true });
  history.replaceState(null, "", `#${id}`);
}

/**
 * Se llama otra vez al cambiar de idioma: las etiquetas y las palabras de
 * búsqueda salen de data.js, así que la paleta se traduce sola.
 */
function construirComandos({ alternarTema, alternarIdioma }) {
  const cv = datos();
  const t = ui();

  const navegacion = cv.sections.map((seccion) => ({
    label: `${t.goTo} ${seccion.title}`,
    hint: seccion.file,
    palabras: [seccion.id, seccion.title, seccion.file],
    ejecutar: () => irASeccion(seccion.id),
  }));

  const enlaces = cv.identity.links.map((enlace) => ({
    label: `${t.open} ${enlace.label}`,
    hint: enlace.text,
    palabras: [enlace.label, enlace.text],
    ejecutar: () => window.open(enlace.href, "_blank", "noopener"),
  }));

  const email = cv.identity.links.find((e) => e.href.startsWith("mailto:"));

  const acciones = [
    {
      label: t.cmdTop,
      hint: t.cmdTopHint,
      palabras: t.cmdTopWords,
      ejecutar: () => {
        window.scrollTo({ top: 0 });
        document.querySelector(".hero__name")?.focus?.();
      },
    },
    {
      label: t.cmdLang,
      hint: t.cmdLangHint,
      palabras: t.cmdLangWords,
      ejecutar: alternarIdioma,
    },
    {
      label: t.cmdTheme,
      hint: t.cmdThemeHint,
      palabras: t.cmdThemeWords,
      ejecutar: alternarTema,
    },
    {
      label: t.cmdPrint,
      hint: t.cmdPrintHint,
      palabras: t.cmdPrintWords,
      ejecutar: () => window.print(),
    },
  ];

  if (email) {
    acciones.push({
      label: t.cmdCopyEmail,
      hint: email.text,
      palabras: t.cmdCopyWords,
      ejecutar: () => copiarEmail(email),
    });
  }

  return [...navegacion, ...acciones, ...enlaces].map((comando) => ({
    ...comando,
    // Índice de búsqueda precalculado: se normaliza una vez, no en cada tecla
    indice: normalizar([comando.label, ...comando.palabras].join(" ")),
  }));
}

async function copiarEmail(email) {
  const direccion = email.href.replace("mailto:", "");
  try {
    await navigator.clipboard.writeText(direccion);
    avisar(`${ui().emailCopied} ${direccion}`);
  } catch (_) {
    // Sin permiso de portapapeles: al menos abrimos el cliente de correo
    window.location.href = email.href;
  }
}

/** Mensaje efímero para lectores de pantalla y vista. */
function avisar(mensaje) {
  let aviso = document.querySelector("#aviso");
  if (!aviso) {
    aviso = document.createElement("p");
    aviso.id = "aviso";
    aviso.className = "toast";
    aviso.setAttribute("role", "status");
    aviso.setAttribute("aria-live", "polite");
    document.body.append(aviso);
  }
  aviso.textContent = mensaje;
  clearTimeout(avisar.temporizador);
  avisar.temporizador = setTimeout(() => (aviso.textContent = ""), 3000);
}

export function initPalette({ alternarTema, alternarIdioma }) {
  const dialogo = document.querySelector("#palette");
  const input = document.querySelector("#palette-input");
  const lista = document.querySelector("#palette-list");
  const vacio = document.querySelector("#palette-empty");
  const estado = document.querySelector("#palette-status");
  const disparador = document.querySelector('[data-action="open-palette"]');

  if (!dialogo || !input || !lista) return;

  let comandos = construirComandos({ alternarTema, alternarIdioma });
  let visibles = comandos;
  let activo = 0;
  // El comando se ejecuta DESPUÉS de cerrar: así el diálogo devuelve el foco
  // primero y luego nosotros lo colocamos donde toca.
  let pendiente = null;

  function pintar() {
    lista.innerHTML = visibles
      .map(
        (comando, i) => `
        <li class="palette__option" role="option" id="palette-opt-${i}"
            aria-selected="${i === activo}" data-index="${i}">
          <span class="palette__optionLabel">${esc(comando.label)}</span>
          ${comando.hint ? `<span class="palette__optionHint">${esc(comando.hint)}</span>` : ""}
        </li>`,
      )
      .join("");

    vacio.hidden = visibles.length > 0;
    input.setAttribute(
      "aria-activedescendant",
      visibles.length ? `palette-opt-${activo}` : "",
    );
    const t = ui();
    estado.textContent = `${visibles.length} ${visibles.length === 1 ? t.resultOne : t.resultMany}`;

    lista
      .querySelector('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }

  function filtrar(consulta) {
    const q = normalizar(consulta.trim());

    visibles = comandos
      .map((comando) => ({ comando, puntos: puntuar(q, comando.indice) }))
      .filter(({ puntos }) => puntos !== -1)
      .sort((a, b) => a.puntos - b.puntos)
      .map(({ comando }) => comando);

    activo = 0;
    pintar();
  }

  function mover(delta) {
    if (!visibles.length) return;
    activo = (activo + delta + visibles.length) % visibles.length;
    pintar();
  }

  function ejecutar(indice) {
    const comando = visibles[indice];
    if (!comando) return;
    pendiente = comando.ejecutar;
    dialogo.close();
  }

  function abrir() {
    if (dialogo.open) return;
    input.value = "";
    filtrar("");
    dialogo.showModal();
    input.focus();
  }

  /* --- Eventos --- */

  input.addEventListener("input", () => filtrar(input.value));

  input.addEventListener("keydown", (evento) => {
    switch (evento.key) {
      case "ArrowDown":
        evento.preventDefault();
        mover(1);
        break;
      case "ArrowUp":
        evento.preventDefault();
        mover(-1);
        break;
      case "Home":
        evento.preventDefault();
        activo = 0;
        pintar();
        break;
      case "End":
        evento.preventDefault();
        activo = Math.max(0, visibles.length - 1);
        pintar();
        break;
      case "Enter":
        evento.preventDefault();
        ejecutar(activo);
        break;
    }
  });

  lista.addEventListener("click", (evento) => {
    const opcion = evento.target.closest(".palette__option");
    if (opcion) ejecutar(Number(opcion.dataset.index));
  });

  // Clic en el fondo oscuro (::backdrop): el evento llega al propio <dialog>
  dialogo.addEventListener("click", (evento) => {
    if (evento.target === dialogo) dialogo.close();
  });

  dialogo.addEventListener("close", () => {
    const accion = pendiente;
    pendiente = null;
    accion?.();
  });

  disparador?.addEventListener("click", abrir);

  // En Windows y Linux el símbolo ⌘ no significa nada
  const esMac = /Mac|iPhone|iPad/.test(navigator.userAgent);
  const teclas = disparador?.querySelector(".toolbar__kbd");
  if (teclas && !esMac) teclas.textContent = "Ctrl K";

  document.addEventListener("keydown", (evento) => {
    const esAtajo = (evento.metaKey || evento.ctrlKey) && evento.key === "k";
    const escribiendo =
      evento.target.matches?.("input, textarea, [contenteditable]");

    if (esAtajo || (evento.key === "/" && !escribiendo && !dialogo.open)) {
      evento.preventDefault();
      abrir();
    }
  });

  /** Al cambiar de idioma hay que rehacer los comandos: cambian sus textos. */
  function refrescar() {
    comandos = construirComandos({ alternarTema, alternarIdioma });
    filtrar(dialogo.open ? input.value : "");
  }

  return { abrir, refrescar };
}
