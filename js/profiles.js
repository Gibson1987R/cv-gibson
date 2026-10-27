import { PROFILES } from "../data.js";

const ALIASES = {
  ia: "tecnologia",
  qa: "tecnologia",
  talento: "talento-humano",
  educacion: "docencia",
};

/** Cada perfil tiene URL propia; los enlaces normales conservan el historial. */
export function perfil() {
  const valor = new URL(location.href).searchParams.get("perfil");
  return PROFILES.includes(valor)
    ? valor
    : Object.hasOwn(ALIASES, valor) ? ALIASES[valor] : PROFILES[0];
}

export function urlPerfil(id, lang) {
  const url = new URL(location.href);
  url.searchParams.set("perfil", id);
  url.searchParams.set("lang", lang);
  url.hash = "";
  return `${url.pathname}${url.search}`;
}

export const perfiles = () => PROFILES;
