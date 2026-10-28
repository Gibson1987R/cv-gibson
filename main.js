/**
 * Orquestador. No contiene lógica propia ni un solo texto visible: pinta el
 * CV y arranca las features en el orden en que dependen unas de otras.
 */

import { renderCV } from "./js/render.js";
import { initTheme } from "./js/theme.js";
import { initPalette } from "./js/palette.js";
import { initMotion } from "./js/motion.js";
import { initTeachingScene } from "./js/teaching-scene.js";
import { fijarIdioma, otroIdioma, restaurarIdioma, idioma } from "./js/i18n.js";

// 1. Primero el contenido: todo lo demás necesita que el DOM ya exista
renderCV();

// Atrás debe recuperar el idioma original incluso si la entrada era la raíz
// sin ?lang y desde entonces cambió la preferencia de localStorage.
history.replaceState({ ...history.state, cvLang: idioma() }, "", location.href);

// 2. Tema (devuelve `alternar`, que la paleta ofrece como comando)
const tema = initTheme();

/**
 * Cambiar de idioma = cambiar qué bloque de data.js se lee y volver a pintar.
 * No hay traducción en vivo de nodos sueltos: se repinta entero, que es más
 * simple y no deja trozos a medio traducir.
 */
function alternarIdioma() {
  // Qué sección se está mirando, para volver a ella tras repintar. Guardamos
  // el id (que es el mismo en los dos idiomas) porque el nodo va a morir.
  const lineaLectura = document.documentElement.dataset.profile === "docencia"
    ? parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 4
    : 80;
  const visible = [...document.querySelectorAll(".section")].find(
    (s) => s.getBoundingClientRect().bottom > lineaLectura,
  )?.id;

  fijarIdioma(otroIdioma());

  renderCV();
  tema.refrescar();
  paleta.refrescar();

  // Sin animación de entrada esta vez: el contenido ya estaba a la vista y
  // hacerlo desaparecer para que reaparezca sería un parpadeo gratuito.
  initMotion({ animar: false });
  escena.refrescar();

  if (visible) document.getElementById(visible)?.scrollIntoView({ block: "start" });
}

// 3. Paleta de comandos
const paleta = initPalette({ alternarTema: tema.alternar, alternarIdioma });

addEventListener("popstate", () => {
  restaurarIdioma();
  renderCV();
  tema.refrescar();
  paleta.refrescar();
  initMotion({ animar: false });
  escena.refrescar();
});

// 4. Botones de la barra que no gestiona nadie más
document
  .querySelector('[data-action="print"]')
  ?.addEventListener("click", () => window.print());

document
  .querySelector('[data-action="toggle-lang"]')
  ?.addEventListener("click", alternarIdioma);

/**
 * Antes de imprimir, abrir todos los desplegables. Un <details> cerrado no se
 * abre con CSS —el navegador oculta su contenido él mismo—, así que hay que
 * poner el atributo. Se vuelven a cerrar al terminar para que la pantalla quede
 * como estaba, salvo los que el usuario hubiera abierto a mano.
 */
let abiertosAlImprimir = [];
addEventListener("beforeprint", () => {
  abiertosAlImprimir = [...document.querySelectorAll("details:not([open])")];
  abiertosAlImprimir.forEach((d) => (d.open = true));
});
addEventListener("afterprint", () => {
  abiertosAlImprimir.forEach((d) => (d.open = false));
  abiertosAlImprimir = [];
});

// 5. Micro-interacciones al final: son lo prescindible
const escena = initTeachingScene();
initMotion();

// Si se entra con un ancla en la URL (#experience), el contenido aún no existía
// cuando el navegador intentó saltar. Lo repetimos ahora.
if (location.hash) {
  const destino = document.getElementById(location.hash.slice(1));
  destino?.scrollIntoView({ block: "start" });
}
