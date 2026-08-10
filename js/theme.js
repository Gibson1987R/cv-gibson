/**
 * Conmutador de tema claro/oscuro.
 *
 * Por defecto manda el sistema (prefers-color-scheme, resuelto en CSS).
 * En cuanto el usuario pulsa el botón, su elección se guarda y gana sobre
 * el sistema: el atributo data-theme del <html> es lo que decide.
 */

import { ui } from "./i18n.js";

const CLAVE = "cv-theme";
const raiz = document.documentElement;
const consultaOscuro = window.matchMedia("(prefers-color-scheme: dark)");

const preferenciaSistema = () => (consultaOscuro.matches ? "dark" : "light");

/** El tema que se está viendo ahora mismo, venga de donde venga. */
const temaEfectivo = () => raiz.dataset.theme || preferenciaSistema();

function actualizarBoton(boton) {
  if (!boton) return;
  const oscuro = temaEfectivo() === "dark";
  // El texto sale de data.js: si no, el botón se quedaría en español
  boton.setAttribute(
    "aria-label",
    oscuro ? ui().themeToLight : ui().themeToDark,
  );
  const icono = boton.querySelector(".toolbar__icon");
  if (icono) icono.textContent = oscuro ? "☀" : "☾";
}

export function initTheme() {
  const boton = document.querySelector('[data-action="toggle-theme"]');

  function aplicar(tema) {
    raiz.dataset.theme = tema;
    try {
      localStorage.setItem(CLAVE, tema);
    } catch (_) {
      /* modo privado o almacenamiento bloqueado: el tema dura la sesión */
    }
    actualizarBoton(boton);
  }

  function alternar() {
    aplicar(temaEfectivo() === "dark" ? "light" : "dark");
  }

  // Si el usuario no ha elegido nada, seguimos al sistema cuando cambie
  consultaOscuro.addEventListener("change", () => {
    if (!raiz.dataset.theme) actualizarBoton(boton);
  });

  boton?.addEventListener("click", alternar);
  actualizarBoton(boton);

  // `refrescar` se llama al cambiar de idioma: el aria-label está traducido
  return { alternar, temaEfectivo, refrescar: () => actualizarBoton(boton) };
}
