# El método STAR aplicado a este CV

Este fichero no es contenido del currículum: es la regla con la que se escribe.
Cuando haya que redactar una viñeta, un resumen de proyecto o un logro, se
consulta aquí antes de escribir.

Fuente: [MIT CAPD — The STAR Method for Behavioral
Interviews](https://capd.mit.edu/resources/the-star-method-for-behavioral-interviews/)

## 1. El método

| Letra | Qué es | Peso |
|---|---|---|
| **S** — Situación | El contexto, lo justo para entender el ejemplo. No hace falta cada detalle | 20% |
| **T** — Tarea | La responsabilidad concreta que se asumió, o el objetivo | 10% |
| **A** — Acción | Lo que hizo **uno mismo** para lograrlo | **60%** |
| **R** — Resultado | El desenlace, con cifras. También qué se aprendió | 10% |

Los porcentajes son de énfasis, no de precisión. Lo que importa es que la mayor
parte del espacio se la lleve **lo que hiciste tú**.

### Reglas duras

- **Primera persona.** «Automaticé», no «se automatizó». La forma impersonal
  esconde quién hizo el trabajo, y el trabajo es lo único que se está vendiendo.
- **Resultados con número.** «Redujo el tiempo» no dice nada; «pasó de dos días
  a veinte minutos» sí.
- **Concreto antes que general.** Un ejemplo real por encima de una cualidad
  declarada. «Sé trabajar en equipo» no es evidencia; «28 PRs mergeadas tras
  revisión ajena» sí.
- **Verdad comprobable.** Solo lo que se sostiene si alguien pregunta por ello
  en una entrevista.

## 2. Cómo se traduce a las estructuras de `data.js`

Hay dos formas de entrada, y la estructura de cada una está pensada para que
sea difícil escribirla sin STAR:

| STAR | `experience` (programación) | `otherExperience` (empleos previos) |
|---|---|---|
| Situación | `about` | `context` + fechas |
| Tarea | `role` | `role` + `company` |
| **Acción** | **`work[]`** | **`achievements[]`** |
| Resultado | `result` | disuelto dentro de `achievements[]` |

`experience` es la buena: tiene un campo por letra, así que si una entrada no
dice qué hiciste, el hueco se ve. En `otherExperience` la Acción y el Resultado
comparten array, y ahí sí hay que tener cuidado: cada viñeta debe empezar por
un verbo tuyo y al menos una debe cerrar con la cifra.

## 3. Lo que NO se traslada

STAR está pensado para respuestas **habladas** en una entrevista. Copiarlo
literalmente a un CV lo empeora. En concreto:

- **No** se escriben etiquetas «Situación:», «Acción:» en la página.
- **No** se gasta el 60% de las palabras de una tarjeta de tres líneas en la
  Acción: en papel, la proporción se aplica al *peso*, no al recuento.
- **No** se alarga el contexto. En una entrevista la Situación se cuenta; en un
  CV el lector ya tiene el nombre del proyecto y el stack delante.

Lo que sí se traslada: verbo en primera persona, el peso en lo que uno hizo,
resultados con número, y contexto mínimo.

## 4. Estado del CV a día de hoy

Reescrito por completo en agosto de 2026 contra estas reglas:

- **Ya no hay entradas sin Acción.** `projects` y `contributions` se fusionaron
  en `experience`, con `work[]` obligatorio en las cinco.
- **Las viñetas empiezan por verbo en primera persona**, también en
  `otherExperience`, que antes listaba deberes del cargo («Revisión documental
  de hojas de vida…») en vez de acciones.
- **Las cifras que existen son estas**, y ninguna estaba escrita en el material
  previo: 30 horas → 1 hora (script de glosas), +500 contratistas en 4
  municipios y 30 min → 5 min por documento (Talento Humano), 58 personas
  coordinadas (UNICEF), 200-300 estudiantes al año (docencia), y los commits y
  PRs de directo-ia y chess-lab, verificables en los repos.
- **Sigue sin cifra** fiestas-web: cuántos invitados confirmaron en la fiesta
  real.
- **Los números que falten los tiene que dar Gibson.** La regla del repo es no
  afirmar lo que no se puede verificar; inventar una cifra se cae en la primera
  entrevista que pregunte por ella. Lo mismo vale para el nombre de las cosas:
  la base de contratistas se conectaba a Word por combinación de
  correspondencia, no con SQL, y así está redactada.

## 5. Antes de escribir una viñeta, comprobar

1. ¿Empieza con un verbo en primera persona?
2. ¿Se entiende qué hice **yo**, y no solo qué pasó?
3. ¿Hay un número, o puedo conseguirlo?
4. ¿Lo puedo sostener quince minutos si me preguntan?
