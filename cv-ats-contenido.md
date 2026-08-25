# CV ATS — redacción de una página

Contenido exacto del PDF que se sube a Computrabajo, Magneto, elempleo.com y LinkedIn
(Easy Apply). No se escribe a mano: sale de `data.js` del repo
[`Gibson1987R/cv-gibson`](https://github.com/Gibson1987R/cv-gibson), que es la fuente de
verdad de fechas, cargos y logros. Este archivo es la copia legible de lo que imprime.

**Para regenerar el PDF:** `npm run build` en ese repo, servir `dist/` y

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --lang=es-CO --accept-lang=es-CO,es \
  --virtual-time-budget=8000 --no-pdf-header-footer \
  --print-to-pdf=cv-ats.pdf http://localhost:PUERTO/
```

Verificado el 2026-08-22: 1 página A4, texto extraíble, sin palabras partidas, y las
nueve palabras clave presentes. El idioma lo decide el navegador: `--lang=en-US` produce
la misma hoja en inglés.

---

## Gibson Rosales

**Desarrollador Web · JavaScript, React, Next.js**

Medellín, Antioquia, Colombia · Disponible · remoto o presencial
github.com/Gibson1987R · linkedin.com/in/gibson-rosales-fuenmayor
+57 310 552 8854 · gibsonrosales@gmail.com

## Perfil profesional

Desarrollador web: JavaScript, TypeScript, React y Next.js. Construyo producto dirigiendo
agentes de IA: escribo la especificación, reviso el código y lo despliego. Hoy, el
onboarding de directo-ia (venta por WhatsApp con IA). Antes, nueve años de docencia y
coordinación de equipos de 58 personas.

## Experiencia en desarrollo de software

**Responsable del flujo de onboarding · directo-ia · jun 2026 — actualidad**
Venta por WhatsApp con IA para restaurantes · mi trabajo hoy · Next.js · React · TypeScript · Vercel
- Propuse y construí el alta como conversación con la IA del producto; sustituyó al formulario y está en producción.

**Internacionalización y traducción sin conexión · chess-lab · jun 2026**
PWA para aprender ajedrez sin conexión: lecciones, tablero y puzzles · React · TypeScript · PWA · Dexie · Supabase
- Traducción en el navegador con vocabulario de ajedrez y caché en IndexedDB; app entera en tres idiomas.

**Automatización en producción sobre dinero real · bancolombia-lunchmoney · jun 2026**
Las alertas del banco se convierten solas en movimientos registrados · JavaScript · Google Apps Script · API REST
- La alerta del banco entra por Gmail y sale como movimiento clasificado vía API; en producción para un cliente.

**Producto propio, de la idea al despliegue · honest-english · may 2026**
Rastreador de aprendizaje de inglés que se niega a gamificar · JavaScript · HTML · CSS · sin dependencias
- Producto propio de la idea al despliegue, con cero dependencias autoimpuestas; en línea y en uso.

**Servicio propio de punta a punta · fiestas-web · feb 2026**
Páginas para fiestas infantiles: la invitación, la confirmación en vivo y la galería · React · Firebase/Firestore · Vite · Vercel
- Servicio multi-cliente en Firestore, con confirmación en vivo y demo pública; usado en una fiesta real.

## Experiencia profesional previa

**Tecnólogo para el área de Talento Humano @ Hospital Departamental San Juan de Dios E.S.E.**
nov 2025 — mar 2026 · Colombia · Contratación y control documental · Excel · modelado de datos
- Modelé la base de 500+ contratistas y la conecté con Word: emitir un documento pasó de 20-30 min a 4-5.

**Tecnólogo en Caja y Facturación @ Hospital Departamental San Juan de Dios E.S.E.**
feb 2025 — oct 2025 · Colombia · Aquí escribí mi primer código útil · Python · Xenco · automatización documental
- Script en Python que clasificaba y dividía los PDF de facturación por EPS y tipo de atención: de ~30 horas a 1.

**Coordinador regional (Estado Amazonas) @ A.C. Construyendo Futuros / socio de UNICEF**
sep 2021 — dic 2023 · Amazonas, Venezuela · Alimentación escolar, agua y saneamiento, medios de vida
- Coordiné tres programas: «AliMentes» de alimentación escolar (sep 2021 – ago 2022), agua, higiene y saneamiento (WASH) en las escuelas de Atures (jul – oct 2022) y «Manos Que Construyen» (2023), de medios de vida para adolescentes y mujeres; los dos primeros en paralelo.
- Coordiné 58 personas en territorio: cronogramas, delegación, seguimiento y trazabilidad documental.

**Profesor de matemáticas y educación básica @ Ministerio de Educación**
sep 2012 — jul 2021 · Venezuela
- Nueve años enseñando matemáticas a entre 200 y 300 estudiantes por año.

## Habilidades técnicas

- **Lenguajes:** JavaScript · TypeScript · Python · SQL · HTML y CSS
- **Frontend:** React · Next.js · Vite · PWA y offline · Accesibilidad · Internacionalización
- **Backend y datos:** Firebase / Firestore · Supabase · IndexedDB / Dexie · Google Apps Script · APIs REST
- **Flujo de trabajo:** Git · GitHub · Revisión de código · GitHub Actions · Despliegue continuo (Vercel, Netlify)
- **Trabajo con IA:** Dirección de agentes · Especificación de tareas · Revisión del código generado
- **Gestión y equipo:** Coordinación de equipos · Excel y Google Sheets · Modelado de datos en tablas

## Formación académica

- **Formación en programación — Platzi** · Carrera de JavaScript · ~35 cursos de JS, React y Node · Python: CRUD (21 h) · 2017–2020
- **Formación continua** · «Think Python» · Visual Studio Code (Udemy) · desarrollo web sobre proyectos reales · 2026
- **Licenciado en Educación, mención Campesina y Rural** · Venezuela
- **T.S.U. en Administración de Recursos Humanos** · Convalidado como Tecnólogo en Gestión de Talento Humano

---

## Qué se recortó, y por qué

El CV web no cambió: la misma entrada de `data.js` guarda las dos redacciones y cada medio
enseña la suya (`{ text: "largo para la web", pdf: "corto para el papel" }`, o
`soloWeb: true` para lo que no llega al papel).

Del PDF salieron: los párrafos narrativos del perfil, la segunda y tercera viñeta de cada
proyecto, la línea de «Resultado» —su cifra se metió dentro de la viñeta— y las
habilidades que un filtro de vacante técnica no busca. En la web siguen todas.

**Palabras clave verificadas en el texto extraído:** React, Next.js, TypeScript,
JavaScript, Firebase, Supabase, Git, automatización, IA. Y ahora dentro de cada
experiencia, no solo en la lista de habilidades: un filtro no cuenta como experiencia una
tecnología que solo aparece al final del documento.
