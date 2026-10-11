---
id: lobby
title: "Lobby"
sidebar_label: "💻 Análisis datos de Lobby"
description: "Análisis de datos de Lobby y evaluación de CDC"
---

## Análisis de datos de Lobby y evaluación de CDC

### Evaluación General del Proyecto

El proyecto es un caso de uso muy adecuado para la aplicación de IA en la gestión pública. Automatizar la consolidación y análisis de datos provenientes de la Plataforma de la Ley de Lobby para cumplir con los Compromisos de Desempeño Colectivo (CDC) aborda un problema real de carga administrativa y riesgo de error humano.

### Presentación y Análisis del Prompt (Modelo CRTF)

El equipo estructuró el prompt inicial de manera sobresaliente, aplicando rigurosamente la metodología CRTF.

**Prompt Utilizado:**

> **Rol:** Eres un Analista Senior de Políticas Públicas, Transparencia e Integridad Pública con alta especialización en la Ley de Lobby (Chile / Sector Público)....
> **Contexto:** El trabajo se enmarca institucionalmente en la Ley de Lobby y en el sistema de gestión por desempeño asociado a los Compromisos de Desempeño Colectivo (CDC). Actualmente, su alcance considera una fase piloto....
> **Tarea:** Procesar y consolidar las bases de datos del servicio público analizado... Extraer hallazgos no evidentes... Interpretar los datos en clave de gestión pública....
> **Formato:** Genera un informe estructurado bajo el siguiente esquema técnico: RESUMEN EJECUTIVO... METODOLOGÍA Y CRUCE DE BASES DE DATOS... HALLAZGOS... EVALUACIÓN....
> 
> 

**Evaluación del Diseño:**

* **Rol:** La asignación de un perfil altamente especializado y la exigencia de un tono "técnico, riguroso, analítico, neutral y propositivo" calibran perfectamente la salida de la IA para un documento oficial.


* **Tarea:** Es ambiciosa y secuencial. Pedirle a la IA que no solo cruce datos, sino que extraiga "hallazgos no evidentes" y proponga nuevos indicadores, eleva el uso de la herramienta de un simple procesador a un analista estratégico.


* **Contexto y Formato:** Están muy bien delimitados, acotando el trabajo a una fase piloto utilizable (SEGPRES) y exigiendo una estructura de reporte ejecutivo clara.



### Acciones, Resultados y Reflexión Crítica

* **Uso de RAG y Contextualización:** Proveer bases de datos reales en Excel (audiencias, viajes, donativos) junto con un informe histórico como modelo de referencia es una excelente práctica técnica.


* **Iteración Inteligente:** La instrucción adicional para adaptar el resultado al estándar de diseño del documento "2026. I Informe Semestral CIPYT a Presidente", solicitándolo en un formato Word editable, demuestra un enfoque pragmático orientado a la productividad.


* **Evaluación Crítica de los Resultados:** El equipo demostró madurez analítica al no aceptar el resultado de la IA ciegamente. Identificaron correctamente que el modelo generó cuadros vacíos donde debía existir información, reconociendo que la IA entrega una "estructura base" que requiere validación humana exhaustiva.


* **Escalabilidad:** Proponer una arquitectura de tres niveles (Pipeline ETL, NLP para auditoría y Cuadro de Mando) para escalar la solución a más de 800 instituciones demuestra una visión estratégica de alto nivel.



El ejercicio es técnicamente robusto, metodológicamente impecable en el uso del prompt y realista en su evaluación final. El descuento menor se debe a los fallos técnicos que presentó la IA al no poblar ciertas tablas, lo cual en futuras iteraciones podría mitigarse pidiendo a la IA en el prompt que utilice ejemplos específicos de formato (Few-Shot Prompting) para el volcado de datos tabulares.
