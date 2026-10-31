---
id: minutascongreso
title: "Minutas"
sidebar_label: "💻 Minutas congreso"
description: "Automatización de minutas del congreso"
---
## Automatización de las Respuestas a los Oficios Estándares del Congreso Nacional

### Evaluación General del Proyecto

El proyecto aborda un excelente caso de uso para la automatización: la optimización del traspaso de datos desde planillas Excel hacia respuestas institucionales estandarizadas. Enfocar los esfuerzos en reducir el tiempo de tareas repetitivas para priorizar el análisis de alto valor es una estrategia sumamente eficiente en la gestión de procesos administrativos.

### Análisis del Prompt (Modelo CRTF)

El diseño del prompt demuestra una comprensión madura de la estructuración de instrucciones bajo el marco CRTF:

* **Contexto:** Es directo y delimita bien el entorno al vincular la acción con los documentos de entrada y el modelo de respuesta.

* **Rol:** La asignación del rol de "abogado de la División Jurídico-Legislativa de la SEGPRES" es un acierto destacable. Define con precisión el nivel de formalidad, jerga y rigurosidad esperada.

* **Formato:** Solicitar que se mantenga el estilo y la redacción del modelo funciona bien para el flujo de texto, aunque depender de un LLM para replicar aspectos visuales finos (como tipos y tamaños de letra) suele ser ineficiente, tal como se comprobó en los resultados.

* **Tarea:** Destaca el uso de instrucciones defensivas, como la directriz de usar "exclusivamente los antecedentes proporcionados" y la prohibición explícita de inventar información. Esta restricción es crítica para mitigar riesgos y mantener la integridad de los datos en documentos oficiales.


### Acciones, Resultados y Reflexión Crítica

* El proceso de iteración, donde se utilizó a la propia IA para refinar y sintetizar el prompt inicial, demuestra una metodología de desarrollo adecuada y adaptativa.

* El resultado cumple con el objetivo central del ejercicio: lograr un avance funcional que optimiza los tiempos de respuesta frente a requerimientos del Congreso.

* La evaluación final refleja una excelente comprensión de la tecnología, identificando correctamente la necesidad de validación humana frente a la posibilidad de alucinaciones o errores.

* Reconocer que ciertos antecedentes faltantes deben completarse de forma manual es una muestra de responsabilidad y rigor profesional sobre el proceso.


Es un trabajo robusto, bien planteado y ejecutado con un enfoque muy pragmático. Como ejercicio de adopción de IA en flujos de trabajo reales, está excelentemente logrado. Para alcanzar la perfección técnica, el prompt podría ajustarse entregando directrices de formato utilizando marcadores de texto (por ejemplo, exigir la salida en Markdown estricto) para minimizar las discrepancias de estilo en el documento final.
