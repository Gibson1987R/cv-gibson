/**
 * Aparición de las secciones al hacer scroll.
 *
 * Dos garantías:
 *  - si el usuario pide menos movimiento, esto no se activa;
 *  - el estado "oculto" lo pone el JS, no el CSS de entrada. Si el JS falla,
 *    el contenido se ve igual. Nunca escondemos texto y esperamos que algo
 *    lo devuelva.
 */

export function initMotion({ animar = true } = {}) {
  const objetivos = document.querySelectorAll("[data-reveal]");

  // `animar: false` es para el repintado al cambiar de idioma: el contenido
  // ya estaba visible, esconderlo para reaparecer sería un parpadeo gratuito.
  if (!animar) {
    for (const objetivo of objetivos) objetivo.dataset.reveal = "shown";
    return;
  }

  const quiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (quiereMenosMovimiento || !("IntersectionObserver" in window)) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        entrada.target.dataset.reveal = "shown";
        observador.unobserve(entrada.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
  );

  for (const objetivo of objetivos) {
    objetivo.dataset.reveal = "hidden";
    observador.observe(objetivo);
  }
}
