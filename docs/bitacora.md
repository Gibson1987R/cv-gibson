# Bitácora

## 2026-10-21 · QA en curso y entrega a Aplicaciones

- Revisados AGENTS, README, neurona local, STAR, propuesta bilingüe y registro de Colektia. Árbol inicial limpio.
- Incorporada formación QA Engineering en curso en TripleTen desde septiembre de 2026, habilidades QA y fundamentos Agile/Scrum; Claude y Codex en dirección de agentes. Sin certificación concluida ni experiencia laboral QA atribuida.
- Impresión canónica: cuerpo de 9.3 pt e interlineado 1.2 para aprovechar las dos páginas A4 en ES/EN. Contenido y resultados conservados.
- Build Vite, sintaxis y diff comprobados. PDF canónicos generados con Chrome vía impresión de la build local. Revisión visual de las cuatro páginas y ATS con claves de cada idioma: aptos.
- Exportación de los HTML específicos Colektia mediante WeasyPrint, sin navegador ni cambios en originales. CV de una página con CSS local de exportación; carta de una página. Todos los bloques de texto originales conservados según extracción Poppler; fuentes incrustadas y mapas Unicode presentes.
- El verificador ATS histórico no interpreta los mapas Unicode de WeasyPrint; su REVISAR es una limitación del parser, comprobada contra Poppler. Sus seis fechas históricas tampoco representan las cuatro experiencias del CV específico. No se añadieron fechas ni empleos. Informe detallado y hashes en `output/pdf/validacion-ats.json`.
- Entregables locales en `output/pdf/` (excluidos de Git). Relevo operativo: `/tmp/cv-gibson-entrega-coordinador.json`. Aplicaciones conserva la responsabilidad de copiar al expediente, salario, revisión de candidatura y envío; no se enviaron correos ni se modificó LinkedIn.
