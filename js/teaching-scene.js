import { ui } from "./i18n.js";

// Geometría decorativa: órbitas → vectores → mecanismos → lenguaje → matemáticas.
// El scroll dirige el relato; no añade información ni interfiere con enlaces.
const NS = "http://www.w3.org/2000/svg";
function engranaje(cx, cy, radio, dientes) {
  const puntos = Array.from({ length: dientes * 4 }, (_, i) => {
    const a = i * Math.PI * 2 / (dientes * 4);
    const r = radio * (i % 4 < 2 ? 1 : 0.83);
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
  }).join(" ");
  return `<polygon points="${puntos}"/><circle cx="${cx}" cy="${cy}" r="${radio * 0.32}"/>`;
}

export function initTeachingScene() {
  const contenedor = document.createElement("div");
  contenedor.className = "teaching-scene";
  contenedor.setAttribute("aria-hidden", "true");
  contenedor.innerHTML = `<svg viewBox="0 0 420 620" fill="none" xmlns="${NS}">
    <g class="teaching-scene__chapter" data-chapter="orbits">
      <g class="teaching-scene__orbit">
        <ellipse cx="220" cy="290" rx="155" ry="215"/>
        <ellipse cx="220" cy="290" rx="155" ry="215" transform="rotate(60 220 290)"/>
        <ellipse cx="220" cy="290" rx="155" ry="215" transform="rotate(120 220 290)"/>
        <circle class="teaching-scene__point" cx="220" cy="75" r="8"/>
        <circle class="teaching-scene__point" cx="220" cy="505" r="5"/>
      </g>
      <circle cx="220" cy="290" r="24"/>
      <circle class="teaching-scene__point" cx="220" cy="290" r="5"/>
    </g>
    <g class="teaching-scene__chapter" data-chapter="vectors">
      <path d="M65 450H355M95 480V140M95 450L315 210M315 210L291 219M315 210L308 238"/>
      <path class="teaching-scene__construction" d="M95 210H315V450M95 450Q175 280 315 210"/>
      <g class="teaching-scene__vector"><path d="M95 450L275 310M275 310L253 313M275 310L266 331"/><circle class="teaching-scene__point" cx="275" cy="310" r="6"/></g>
      <circle cx="95" cy="450" r="45"/>
    </g>
    <g class="teaching-scene__chapter" data-chapter="gears">
      <g class="teaching-scene__gear teaching-scene__gear--one">${engranaje(162, 260, 100, 16)}</g>
      <g class="teaching-scene__gear teaching-scene__gear--two">${engranaje(296, 370, 73, 12)}</g>
      <path class="teaching-scene__construction" d="M162 130V390M32 260H292M296 270V470M196 370H396"/>
    </g>
    <g class="teaching-scene__chapter" data-chapter="letters">
      <path class="teaching-scene__construction" d="M55 230H390M55 330H390M55 430H390"/>
      <text class="teaching-scene__letter" x="72" y="230"></text>
      <text class="teaching-scene__letter" x="195" y="330"></text>
      <text class="teaching-scene__letter" x="275" y="430"></text>
      <path d="M90 470Q185 540 320 470M307 466L320 470L315 483"/>
    </g>
    <g class="teaching-scene__chapter" data-chapter="math">
      <path d="M45 435H385M65 465V155"/>
      <path class="teaching-scene__wave" d="M65 330C105 200 145 200 185 330S265 460 305 330S365 200 385 260"/>
      <circle cx="220" cy="260" r="105"/>
      <path d="M115 260H325M220 155V365M220 260L294 186L294 260Z"/>
      <g class="teaching-scene__math-orbit"><circle class="teaching-scene__point" cx="294" cy="186" r="7"/><path d="M220 260L294 186"/></g>
      <path class="teaching-scene__construction" d="M294 186V435M65 186H294"/>
    </g>
  </svg>`;
  // Segunda zona del fondo: doble hélice proyectada en 3D, no una imagen plana
  // que gira. Las hebras y los peldaños cambian de profundidad durante el giro.
  const adn = document.createElementNS(NS, "svg");
  adn.classList.add("teaching-scene__dna");
  adn.setAttribute("viewBox", "0 0 200 440");
  adn.setAttribute("fill", "none");
  adn.innerHTML = `<path class="teaching-scene__strand"/><path class="teaching-scene__strand"/>${Array.from({ length: 19 }, () => '<line class="teaching-scene__rung"/>').join("")}`;
  contenedor.append(adn);
  const hebras = [...adn.querySelectorAll("path")];
  const peldaños = [...adn.querySelectorAll("line")];
  let fase = 0;
  let giro = 0;
  let ultimoGiro = 0;

  function dibujarADN() {
    for (let lado = 0; lado < 2; lado++) {
      const puntos = Array.from({ length: 81 }, (_, i) => {
        const y = 20 + i * 5;
        const a = i * Math.PI / 20 + fase + lado * Math.PI;
        return `${i ? "L" : "M"}${100 + Math.sin(a) * 62},${y}`;
      });
      hebras[lado].setAttribute("d", puntos.join(" "));
    }
    peldaños.forEach((linea, i) => {
      const y = 30 + i * 21;
      const a = (y - 20) * Math.PI / 100 + fase;
      const x = Math.sin(a) * 62;
      linea.setAttribute("x1", 100 + x);
      linea.setAttribute("x2", 100 - x);
      linea.setAttribute("y1", y);
      linea.setAttribute("y2", y);
      linea.setAttribute("opacity", 0.25 + (Math.cos(a) + 1) * 0.3);
    });
  }
  document.querySelector(".window").prepend(contenedor);

  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "toolbar__btn teaching-scene__toggle";
  document.querySelector(".toolbar").append(boton);
  const reducir = matchMedia("(prefers-reduced-motion: reduce)");
  const imprimir = matchMedia("print");
  const barra = document.querySelector(".window__bar");

  // El margen de salto debe seguir el alto real, también con texto ampliado,
  // traducciones y reflujo de controles. Las barras altas dejan de ser fijas.
  function ajustarSalto() {
    const raiz = document.documentElement;
    if (raiz.dataset.profile !== "docencia" || imprimir.matches) {
      raiz.style.removeProperty("--teaching-scroll-offset");
      delete barra.dataset.tall;
      return;
    }
    const alto = barra.getBoundingClientRect().height;
    barra.dataset.tall = String(alto > innerHeight * 0.3);
    const fijo = getComputedStyle(barra).position === "sticky";
    raiz.style.setProperty("--teaching-scroll-offset", `${fijo ? alto + 12 : 12}px`);
  }
  if ("ResizeObserver" in window) new ResizeObserver(ajustarSalto).observe(barra);
  let pausado = false; // Elección del usuario, independiente de la del sistema.
  let cuadro = 0;
  let capitulo = "orbits";

  function animarADN(tiempo) {
    giro = 0;
    if (contenedor.dataset.paused === "true" || document.documentElement.dataset.profile !== "docencia") {
      ultimoGiro = 0;
      return;
    }
    if (!ultimoGiro) ultimoGiro = tiempo;
    const delta = tiempo - ultimoGiro;
    if (delta >= 33) {
      fase += Math.min(delta, 100) * 0.00055;
      ultimoGiro = tiempo;
      dibujarADN();
    }
    giro = requestAnimationFrame(animarADN);
  }

  function estado() {
    contenedor.dataset.paused = String(pausado || document.hidden || imprimir.matches || reducir.matches);
    boton.textContent = reducir.matches ? ui().sceneStatic : pausado ? ui().sceneResume : ui().scenePause;
    boton.disabled = reducir.matches;
    boton.setAttribute("aria-pressed", String(pausado || reducir.matches));
    if (giro) cancelAnimationFrame(giro);
    giro = 0;
    ultimoGiro = 0;
    if (contenedor.dataset.paused !== "true" && document.documentElement.dataset.profile === "docencia") giro = requestAnimationFrame(animarADN);
  }
  function relato() {
    cuadro = 0;
    if (document.documentElement.dataset.profile !== "docencia" || pausado || reducir.matches) return;
    const umbral = innerHeight * 0.55;
    const pasos = [["about", "vectors"], ["otherExperience", "gears"], ["skills", "letters"], ["projectsSummary", "math"]];
    capitulo = "orbits";
    for (const [id, escena] of pasos) {
      if (document.getElementById(id)?.getBoundingClientRect().top < umbral) capitulo = escena;
    }
    contenedor.dataset.chapter = capitulo;
  }
  function programar() {
    if (!cuadro && !document.hidden) cuadro = requestAnimationFrame(relato);
  }
  function refrescar() {
    [...contenedor.querySelectorAll("text")].forEach((nodo, i) => {
      nodo.textContent = ui().sceneAlphabet.split(" ")[i];
    });
    estado();
    ajustarSalto();
    programar();
  }
  boton.addEventListener("click", () => {
    pausado = !pausado;
    estado();
    programar();
  });
  reducir.addEventListener("change", () => {
    contenedor.style.removeProperty("--scene-x");
    contenedor.style.removeProperty("--scene-y");
    refrescar();
  });
  imprimir.addEventListener("change", () => { estado(); ajustarSalto(); });
  document.addEventListener("visibilitychange", () => { estado(); programar(); });
  addEventListener("scroll", programar, { passive: true });
  addEventListener("resize", () => { programar(); ajustarSalto(); }, { passive: true });
  // Pequeña respuesta espacial, sin capturar el puntero ni bloquear controles.
  addEventListener("pointermove", (e) => {
    if (pausado || reducir.matches || document.hidden || e.pointerType !== "mouse" || document.documentElement.dataset.profile !== "docencia") return;
    contenedor.style.setProperty("--scene-x", `${(e.clientX / innerWidth - 0.5) * 14}px`);
    contenedor.style.setProperty("--scene-y", `${(e.clientY / innerHeight - 0.5) * 10}px`);
  }, { passive: true });
  contenedor.dataset.chapter = capitulo;
  dibujarADN();
  refrescar();
  return { refrescar };
}
