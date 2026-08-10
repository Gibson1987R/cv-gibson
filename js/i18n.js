/**
 * Qué idioma se está viendo.
 *
 * Este fichero NO contiene ni un texto traducible: solo decide cuál de los
 * dos bloques de data.js está activo. Todo el texto vive en data.js.
 *
 * El resto del código nunca importa `CV_DATA` directamente: pide `datos()` o
 * `ui()` en el momento de pintar. Así, cambiar el idioma y volver a pintar es
 * suficiente para que toda la página cambie.
 */

import { CV_DATA } from "../data.js";

const CLAVE = "cv-lang";
const IDIOMAS = Object.keys(CV_DATA); // ["es", "en"]

/**
 * Orden de decisión: lo que el usuario eligió antes > el idioma del
 * navegador > español. Nunca se le impone un idioma que ya rechazó.
 */
function inicial() {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (IDIOMAS.includes(guardado)) return guardado;
  } catch (_) {
    /* almacenamiento bloqueado: seguimos con el navegador */
  }

  // "en-US", "en-GB"… todos empiezan por "en"
  const navegador = (navigator.language || "es").slice(0, 2).toLowerCase();
  return IDIOMAS.includes(navegador) ? navegador : "es";
}

let actual = inicial();

/** El idioma activo ahora mismo: "es" o "en". */
export const idioma = () => actual;

/** El bloque de contenido del idioma activo (CV_DATA.es o CV_DATA.en). */
export const datos = () => CV_DATA[actual];

/** Atajo a los textos de interfaz del idioma activo. */
export const ui = () => CV_DATA[actual].ui;

/** El idioma al que llevaría el botón: con dos idiomas, siempre el otro. */
export const otroIdioma = () =>
  IDIOMAS[(IDIOMAS.indexOf(actual) + 1) % IDIOMAS.length];

/** Cambia el idioma y lo recuerda. No repinta: de eso se encarga main.js. */
export function fijarIdioma(nuevo) {
  if (!IDIOMAS.includes(nuevo)) return actual;
  actual = nuevo;
  try {
    localStorage.setItem(CLAVE, actual);
  } catch (_) {
    /* modo privado: el idioma dura lo que dure la pestaña */
  }
  return actual;
}
