/**
 * Orquestador. No contiene lógica propia ni un solo texto visible: pinta el
 * CV y arranca las features en el orden en que dependen unas de otras.
 */

import { renderCV } from "./js/render.js";
import { initTheme } from "./js/theme.js";
import { initPalette } from "./js/palette.js";
import { initMotion } from "./js/motion.js";
import { fijarIdioma, otroIdioma } from "./js/i18n.js";

// 1. Primero el contenido: todo lo demás necesita que el DOM ya exista
renderCV();

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
  const visible = [...document.querySelectorAll(".section")].find(
    (s) => s.getBoundingClientRect().bottom > 80,
  )?.id;

  fijarIdioma(otroIdioma());

  renderCV();
  tema.refrescar();
  paleta.refrescar();

  // Sin animación de entrada esta vez: el contenido ya estaba a la vista y
  // hacerlo desaparecer para que reaparezca sería un parpadeo gratuito.
  initMotion({ animar: false });

  if (visible) document.getElementById(visible)?.scrollIntoView({ block: "start" });
}

// 3. Paleta de comandos
const paleta = initPalette({ alternarTema: tema.alternar, alternarIdioma });

// 4. Botones de la barra que no gestiona nadie más
document
  .querySelector('[data-action="print"]')
  ?.addEventListener("click", () => window.print());

document
  .querySelector('[data-action="toggle-lang"]')
  ?.addEventListener("click", alternarIdioma);

// 5. Micro-interacciones al final: son lo prescindible
initMotion();

// Si se entra con un ancla en la URL (#experience), el contenido aún no existía
// cuando el navegador intentó saltar. Lo repetimos ahora.
if (location.hash) {
  const destino = document.querySelector(location.hash);
  destino?.scrollIntoView({ block: "start" });
}
