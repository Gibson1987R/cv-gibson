# CV multiperfil

Seguimiento: [issue #3](https://github.com/Gibson1987R/cv-gibson/issues/3).

## Historia de usuario

Como Gibson, quiero entrar a una página central, elegir Tecnología, Talento
Humano o Docencia y guardar el CV del perfil e idioma activos, para presentar
la experiencia pertinente a cada vacante y conservar el resto de mi trayectoria
en la web.

## Perfiles

- Tecnología: **Desarrollo web con IA y QA manual y asistido por IA**. Creación
  de aplicaciones mediante agentes, revisión funcional y pruebas; formación QA
  identificada como práctica académica. Las tecnologías de un proyecto no se
  presentan como dominio personal de programación manual.
- Gestión de Talento Humano y administración: apoyo a contratación, control
  documental, seguimiento, coordinación y mejoras de procesos.
- Docencia: licenciatura en Educación y experiencia enseñando matemáticas,
  con el nombre exacto de la convalidación en formación académica.

La raíz abre Tecnología. Cada página mantiene los enlaces a los tres perfiles:
`/?perfil=tecnologia`, `/?perfil=talento-humano` y `/?perfil=docencia`.
`lang=es` o `lang=en` fija el idioma al compartir un enlace.

## Criterios de aceptación

1. La raíz permite elegir los tres perfiles y cada URL abre el perfil correcto.
2. La página prioriza resumen, experiencia y capacidades del perfil elegido;
   las experiencias y capacidades complementarias siguen disponibles en la web.
3. Cambiar de perfil conserva el idioma; traducir conserva el perfil. Recarga,
   Atrás y Adelante mantienen un estado coherente, incluso desde la raíz sin
   idioma explícito.
4. Parámetros desconocidos, incluidos nombres de propiedades heredadas como
   `constructor` o `__proto__`, regresan al perfil predeterminado sin fallar.
5. Tema, paleta, teclado, enlaces anteriores y almacenamiento bloqueado siguen
   funcionando. No hay desbordamiento horizontal en 320, 768 y 1440 píxeles.
6. PDF abre la impresión del perfil e idioma activos; el nombre identifica ambos.
   El selector y las secciones complementarias no se imprimen. El título y los
   desplegables recuperan su estado al terminar o cancelar la impresión.
7. En la validación de Chromium, Tecnología ocupa dos A4; Talento Humano y
   Docencia, una A4 cada uno. Se mantienen resultados y lectura legible.
8. Las seis combinaciones ES/EN tienen texto seleccionable y extracción correcta.
   El motor ATS local usa claves pertinentes por perfil, sin prometer
   compatibilidad universal.
9. Títulos y fechas permanecen consistentes: docencia sep 2012-jul 2021,
   directo-ia jun-ago 2026 y convalidaciones con su denominación exacta.
10. La revisión técnica, la verificación documental y la publicación quedan
    registradas con sus evidencias y autorizaciones, según AGENTS.md.

## Validación

- `npm test`: estructura bilingüe, hechos compartidos, URLs, parámetros,
  prioridad del idioma explícito y restauración del idioma en el historial.
- `npm run build`: compilación de producción sin dependencias de navegador.
- Comprobación de navegador: seis combinaciones perfil/idioma, impresión,
  teclado, tema, paleta y distintos anchos.
- PDF: seis exportaciones, ocho páginas revisadas, extracción de texto y motor
  ATS histórico con listas explícitas por perfil/idioma.

Los artefactos locales, hashes, informes y capturas de esta entrega se conservan
en `output/pdf/2026-10-27-web-multiperfil/` (excluido de Git). El registro factual
previo está en `output/pdf/2026-10-27-tres-perfiles/`. No se publican soportes
académicos o laborales privados en el repositorio.

## Actualización futura

Editar los hechos compartidos y los textos ES/EN en `data.js`. Incorporar una
capacidad nueva solo con su respaldo, diferenciando declaración y entregable.
Volver a comprobar las combinaciones afectadas, la impresión y la extracción.
Una formación completada o una suite automatizada se añade cuando exista la
evidencia correspondiente, sin inferirla del nombre de un curso o herramienta.
