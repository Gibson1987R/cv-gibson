/**
 * `base` es el prefijo con el que Vite escribe las rutas del CSS y el JS en
 * el HTML compilado. Tiene que coincidir con la carpeta desde la que se sirve
 * el sitio, o la página carga en blanco: es el fallo número uno al publicar
 * un proyecto de Vite.
 *
 * Netlify sirve en la raíz del dominio → "/".
 * Si algún día se pasa a GitHub Pages como sitio de proyecto, hay que
 * cambiarlo a "/nombre-del-repo/".
 */
export default {
  base: "/",
};
