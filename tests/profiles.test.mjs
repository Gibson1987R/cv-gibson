import test from "node:test";
import assert from "node:assert/strict";
import { CV_PROFILES, PROFILES } from "../data.js";
import { perfil, urlPerfil } from "../js/profiles.js";

test("tres perfiles bilingües con secciones completas y encabezado tecnológico acordado", () => {
  assert.equal(PROFILES.length, 3);
  assert.equal(CV_PROFILES.es.tecnologia.identity.role, "Desarrollo web con IA y QA manual y asistido por IA");
  for (const id of PROFILES) {
    const es = CV_PROFILES.es[id];
    const en = CV_PROFILES.en[id];
    assert.deepEqual(es.sections.map(s => s.id), en.sections.map(s => s.id));
    assert.equal(new Set(es.sections.map(s => s.id)).size, es.sections.length);
    for (const cv of [es, en]) {
      assert.equal(cv.identity.rolePrint, cv.identity.role);
      for (const section of cv.sections) assert(cv[section.id]?.length, `${id}: ${section.id}`);
    }
  }
});

test("fechas y convalidaciones se conservan al cambiar de perfil", () => {
  for (const lang of ["es", "en"]) {
    for (const cv of Object.values(CV_PROFILES[lang])) {
      const jobs = [...cv.otherExperience, ...cv.supportingExperience];
      const teacher = jobs.find(j => j.start === "2012-09");
      assert.equal(teacher.end, "2021-07");
      assert(cv.education.some(e => e.title === "Licenciado en Educación Campesina y Rural"));
      assert(cv.education.some(e => e.title === "Tecnólogo en Gestión del Talento Humano"));
      assert.equal(cv.experience.find(e => e.name === "directo-ia").period,
        lang === "es" ? "jun 2026 - ago 2026" : "Jun 2026 - Aug 2026");
    }
  }
});

test("URLs compartibles conservan idioma y resuelven perfiles desconocidos sin fallar", () => {
  globalThis.location = new URL("https://example.test/?perfil=docencia&lang=en#experience");
  assert.equal(perfil(), "docencia");
  const next = new URL(urlPerfil("talento-humano", "en"), location);
  assert.equal(next.searchParams.get("perfil"), "talento-humano");
  assert.equal(next.searchParams.get("lang"), "en");
  assert.equal(next.hash, "");
  location = new URL("https://example.test/?perfil=desconocido");
  assert.equal(perfil(), "tecnologia");
  location = new URL("https://example.test/?perfil=qa");
  assert.equal(perfil(), "tecnologia");
  for (const value of ["constructor", "__proto__", "toString"]) {
    location = new URL(`https://example.test/?perfil=${value}`);
    assert.equal(perfil(), "tecnologia");
  }
});

test("idioma explícito prevalece sobre preferencias; cambiarlo conserva el perfil", async () => {
  location = new URL("https://example.test/?perfil=docencia&lang=en#experience");
  globalThis.localStorage = { getItem: () => "es", setItem() {} };
  globalThis.history = { pushState(_state, _unused, url) { location = new URL(url, location); } };
  const state = await import("../js/i18n.js?test=explicit");
  assert.equal(state.idioma(), "en");
  state.fijarIdioma("es");
  assert.equal(location.searchParams.get("perfil"), "docencia");
  assert.equal(location.searchParams.get("lang"), "es");
  assert.equal(location.hash, "#experience");
  assert.equal(state.datos().identity.role, CV_PROFILES.es.docencia.identity.role);
});

test("almacenamiento bloqueado no impide leer o traducir un enlace explícito", async () => {
  location = new URL("https://example.test/?perfil=talento-humano&lang=en");
  globalThis.localStorage = {
    getItem() { throw new Error("blocked"); },
    setItem() { throw new Error("blocked"); },
  };
  const state = await import("../js/i18n.js?test=blocked");
  assert.equal(state.idioma(), "en");
  assert.doesNotThrow(() => state.fijarIdioma("es"));
  assert.equal(state.datos().identity.role, CV_PROFILES.es["talento-humano"].identity.role);
});

test("Atrás a una URL sin idioma restaura el idioma de esa entrada del historial", async () => {
  location = new URL("https://example.test/");
  globalThis.localStorage = { getItem: () => "en", setItem() {} };
  globalThis.history = { state: { cvLang: "es" } };
  const state = await import("../js/i18n.js?test=history-root");
  assert.equal(state.idioma(), "en");
  state.restaurarIdioma();
  assert.equal(state.idioma(), "es");
});
