---
id: prompt-tecnicas
title: "Técnicas Básicas de Prompt"
sidebar_label: "🗒️ Técnicas básicas"
description: "Técnicas básicas de Prompt Engineering"
---


* Zero Shot
* Few Shot
* Chain of Thought
* Tree of Thoughts
* Prompt Templates
* Prompt Iterativo

## **Técnicas principales**
Existen diversos enfoques según la complejidad del requerimiento:
*   **Zero-Shot:** Se da una instrucción directa sin ejemplos previos.
*   **Few-Shot:** Se proporcionan algunos ejemplos para que la IA imite un patrón específico.
*   **Chain of Thought (CoT):** Se le pide explícitamente al modelo que "piense paso a paso", lo que mejora drásticamente su capacidad de razonamiento lógico y matemático.

### Zero-Shot vs Few-Shot

En el ámbito de la ingeniería de instrucciones (*prompt engineering*), la diferencia fundamental entre las técnicas de **Zero-Shot** y **Few-Shot** reside en la cantidad de ejemplos que se proporcionan al modelo de lenguaje para guiar su respuesta. Mientras que la técnica Zero-Shot no incluye ninguna referencia previa, la técnica Few-Shot utiliza una pequeña serie de ejemplos para establecer patrones de comportamiento.

A continuación se detallan las características y diferencias principales entre ambos enfoques:

### Zero-Shot Prompting
*   **Definición:** Consiste en describir una tarea directamente al modelo sin proporcionarle ningún ejemplo de cómo realizarla.

*   **Funcionamiento:** El modelo confía exclusivamente en su conocimiento previo adquirido durante su entrenamiento masivo para interpretar y ejecutar la orden.

*   **Uso ideal:** Es la forma más común y sencilla de interactuar con una IA, resultando ideal para tareas cotidianas, preguntas de hechos rápidos, resúmenes simples o traducciones básicas.

*   **Limitaciones:** Al no tener guías, el modelo tiene mayor libertad de interpretación, lo que puede llevar a resultados inconsistentes o imprecisos en tareas complejas o con formatos muy específicos.

### Few-Shot Prompting
*   **Definición:** Se proporcionan al modelo dos o más ejemplos (denominados "shots") del tipo de respuesta o formato que se desea obtener antes de presentar la consulta final.

*   **Funcionamiento:** Aprovecha la capacidad de **aprendizaje en contexto** (*in-context learning*) de los modelos extensos de lenguaje (LLM), permitiéndoles reconocer patrones y replicar el estilo, la terminología o la estructura lógica de los ejemplos suministrados.

*   **Uso ideal:** Se recomienda para tareas que requieren un formato de salida estricto (como archivos JSON), reconocimiento de patrones, uso de jerga especializada o cuando la precisión es crítica.

*   **Limitaciones:** Genera instrucciones más largas y complejas, lo que consume más recursos computacionales (tokens) y puede ralentizar el tiempo de procesamiento.

### Diferencias Clave

| Característica | Zero-Shot | Few-Shot |
| :--- | :--- | :--- |
| **Cantidad de ejemplos** | Cero ejemplos. | Dos o más ejemplos (típicamente entre 3 y 5). |
| **Dependencia** | Depende totalmente del entrenamiento previo del modelo. | Depende de la calidad y relevancia de los ejemplos proporcionados en el chat. |
| **Predictibilidad** | Menor; el modelo "adivina" el formato deseado. | Mayor; el modelo imita el patrón de los ejemplos. |
| **Complejidad del Prompt** | Simple, rápido y eficiente. | Extenso y requiere más tiempo de elaboración por parte del usuario. |
| **Consumo de recursos** | Bajo uso de tokens. | Alto uso de tokens debido a la longitud de los ejemplos. |

En resumen, se debe utilizar **Zero-Shot** para peticiones directas y sencillas donde se confía en la capacidad general del modelo. Por el contrario, se debe optar por **Few-Shot** cuando se requiere un control preciso sobre el estilo o la estructura del resultado final, o cuando el modelo falla al intentar realizar la tarea sin ejemplos previos.

### Matriz de aprendizaje en contexto

| Estrategia | Definición | Nivel de esfuerzo | Precisión | Mejor caso de uso |
| :--- | :--- | :--- | :--- | :--- |
| **Zero-Shot** | Sin ejemplos | Bajo | Impredecible | Tareas de conocimiento general |
| **One-Shot** | Un ejemplo de entrada/salida | Medio | Alta | Definir un formato o estilo específico |
| **Few-Shot** | Sin ejemplos | Alto | Máxima | Tareas compejas, reducción de sesgos |