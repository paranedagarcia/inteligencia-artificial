---
id: seguimiento_vehicular
title: "Seguimiento"
sidebar_label: "💻 Seguimiento vehicular"
description: "Seguimiento y control vehicular"
---

## Plataforma web de seguimiento y control vehicular

### Evaluación General del Proyecto

El proyecto es técnicamente ambicioso y demuestra un uso avanzado de herramientas de inteligencia artificial para la generación de código y estructuración de datos. Lo que denota un alto conocimiento de las herramientas. El transformar planillas Excel operativas en una plataforma web funcional con dashboards y control de acceso representa un salto cualitativo excelente en la automatización de procesos. Sin embargo, el informe presenta una falencia metodológica crítica respecto a las instrucciones de la evaluación.

### Análisis del Prompt (Modelo CRTF)

El mayor problema de esta entrega es que **no presenta explícitamente el prompt utilizado**, lo cual fue definido como un requisito excluyente. La sección "Solicitud consolidada" funciona como una lista de requerimientos de software, pero no como un prompt estructurado para un LLM. Si analizamos esa sección adaptándola forzosamente al modelo CRTF, observamos lo siguiente:

* **Contexto:** Se establece de forma implícita mediante la mención de los archivos de entrada (planilla de datos y nómina de 26 sujetos pasivos) y un texto inicial descriptivo.

* **Rol:** Totalmente ausente. No se evidencia que se le haya asignado a la IA una experticia específica (por ejemplo, "Actúa como desarrollador Full-Stack experto en JavaScript y análisis de datos").

* **Tarea:** Las instrucciones técnicas están exhaustivamente detalladas, abarcando desde la carga protegida de archivos hasta la normalización de variables escritas y la lógica de clasificación en tres categorías (Congreso, Domicilio, Traslado).

* **Formato:** Se define de manera muy clara que el entregable debe ser una plataforma web publicada y una versión HTML portátil.


### Acciones, Resultados y Reflexión Crítica

* **Acciones:** La complejidad del desarrollo abordado es sobresaliente. Las tareas de consolidación para evitar duplicidades, junto con la normalización de strings (tildes, mayúsculas, abreviaciones) para cruzar datos, demuestran que supieron guiar a la IA en procesos de limpieza de datos complejos.

* **Resultados:** El producto final supera las expectativas de una simple automatización administrativa, logrando módulos independientes, filtros globales, descargas en CSV e informes en PDF. La incorporación de una clave administrativa para actualizaciones es un gran acierto operativo.

* Como ejercicio de desarrollo asistido por IA, es sumamente exitoso. No obstante, el informe carece de la reflexión sobre la interacción humana-IA (iteraciones, correcciones de errores, ajuste del prompt), lo cual es el núcleo formativo del curso.


El resultado técnico de la plataforma web es de excelencia, pero la omisión del prompt original y de las interacciones con la IA penaliza significativamente el componente metodológico del encargo. En este tipo de ejercicios, documentar la "ingeniería del prompt" es tan importante como el software resultante.
