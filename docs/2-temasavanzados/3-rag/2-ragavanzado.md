---
id: rag-avanzado
title: "RAG Avanzado"
sidebar_label: "🗒️ RAG Avanzado"
description: "RAG Avanzado"
---




El concepto de **RAG Avanzado** (*Advanced Retrieval-Augmented Generation*) surge para superar las limitaciones estructurales del **RAG tradicional o "ingenuo" (*Naïve RAG*)**. 

En una implementación básica (el clásico patrón lineal *"recuperar y leer"*), el sistema a menudo sufre de **baja precisión** (recupera fragmentos irrelevantes que generan ruido), **bajo recuerdo o exhaustividad** (pasa por alto información crucial dispersa) y **redundancia o desarticulación del contexto** al concatenar trozos inconexos. En consecuencia, el modelo de lenguaje (LLM) puede alucinar, omitir la evidencia o verse desbordado.

El RAG Avanzado evoluciona hacia un flujo multidimensional estructurado en el paradigma 

**«Reescribir $\rightarrow$ Recuperar $\rightarrow$ Reordenar $\rightarrow$ Leer»** (*Rewrite-Retrieve-Re-rank-Read*), 

incorporando optimizaciones en tres fases estratégicas: 

**Pre-Recuperación**, **Recuperación Avanzada** y **Post-Recuperación**.

---

### Fase de Pre-Recuperación
**Preparar el Terreno**

Esta etapa busca asegurar que tanto el repositorio de información como la consulta del usuario estén en las mejores condiciones antes de consultar el índice.

*   **Optimización del Índice y Fragmentación Jerárquica:**
    *   *Ventana deslizante y Chunking contextual:* Para evitar que una idea se corte por la mitad, se utilizan solapamientos (*overlaps*) calculados. Métodos más avanzados como el de *Anthropic Contextual Retrieval* sitúan cada fragmento anteponiendo un breve resumen contextual (50–100 tokens) generado por un LLM sobre la posición del fragmento respecto al documento completo.

    *   *Parent-Document Retriever (Fragmentos pequeños para buscar, documentos padres para responder):* Almacena fragmentos muy pequeños para maximizar la similitud matemática en la búsqueda, pero al momento de la generación recupera el párrafo o documento padre más amplio para brindar contexto completo al LLM.

    *   *Enriquecimiento con metadatos y generación de preguntas sintéticas:* Cada fragmento se indexa con metadatos técnicos (fechas, autores, taxonomías) o con preguntas hipotéticas que el fragmento puede responder (usando técnicas de tipo HyDE inverso), permitiendo que la búsqueda compare preguntas de usuarios contra preguntas indexadas.

*   **Transformación y Expansión de Consultas (*Query Optimization*):**
    *   *Multi-Query Expansion:* Un LLM genera entre 3 y 5 variaciones o reformulaciones de la pregunta del usuario con sinónimos y ángulos alternativos, ejecutando búsquedas paralelas para ampliar la cobertura.

    *   *Sub-Query Decomposition:* Divide una consulta multifacética o compleja en subpreguntas más sencillas que se resuelven de forma secuencial o modular.

    *   *HyDE (Hypothetical Document Embeddings):* Ante una pregunta abstracta, un LLM redacta primero una respuesta hipotética tentativa. El embedding de este documento hipotético se utiliza para buscar en el índice vectorial, dado que dos documentos formales suelen compartir mayor cercanía semántica que una pregunta corta frente a un párrafo técnico.

    *   *Query Routing:* Clasifica la intención del usuario para redirigir la consulta hacia la fuente adecuada (un índice vectorial, una base de datos tabular SQL vía Text-to-SQL, una base de grafos o una búsqueda en la web).



### Fase de Recuperación
**Estrategias Híbridas y Multi-Ronda**

En lugar de depender exclusivamente de la similitud del coseno sobre vectores densos, el RAG Avanzado combina múltiples paradigmas de búsqueda:

*   **Búsqueda Híbrida (*Hybrid Search* con RRF):**
    Combina la **búsqueda densa** (embeddings semánticos profundos) con la **búsqueda dispersa o léxica** (algoritmos probabilísticos como **BM25** o TF-IDF). La búsqueda semántica comprende la intención y los sinónimos, mientras que BM25 rescata con precisión palabras clave exactas, códigos normativos, números de decreto o identificadores técnicos que los embeddings tienden a diluir. Ambos listados se fusionan mediante algoritmos como **Reciprocal Rank Fusion (RRF)**.

*   **Recuperación Iterativa y Recursiva:**
    *   *Iterativa:* El sistema realiza ciclos repetidos de búsqueda y generación preliminar, utilizando el borrador para buscar información adicional que resuelva lagunas detectadas.
    *   *Recursiva (IRCoT):* Modifica la consulta sucesivamente basándose en los documentos obtenidos en la ronda previa, enlazando múltiples saltos conceptuales (*multi-hop reasoning*).

*   **Recuperación Adaptativa (Self-RAG y FLARE):**
    El modelo evalúa dinámicamente si es realmente necesario recuperar información mediante "tokens de reflexión" o predicciones activas (*Forward-Looking Active REtrieval*), evitando búsquedas innecesarias cuando su conocimiento paramétrico interno es suficiente.



### Fase de Post-Recuperación
**Curación y Refinamiento del Contexto**

Tener muchos documentos relevantes no garantiza una buena respuesta; de hecho, saturar la ventana de contexto introduce ruido y propicia el fenómeno *lost-in-the-middle* (el LLM tiende a olvidar la información ubicada en el centro del bloque).

*   **Re-ranking (Reclasificación con Cross-Encoders):**
    Un recuperador rápido (híbrido) selecciona una cantidad amplia de candidatos iniciales (por ejemplo, los 20 mejores fragmentos). Luego, un modelo de reordenamiento más profundo y costoso (como *Cohere Rerank* o un *Cross-Encoder* de BERT) evalúa conjuntamente el par consulta-documento, asignando un puntaje de relevancia directo y seleccionando únicamente los 3 a 5 fragmentos de mayor calidad.

*   **Compresión de Contexto (*Contextual Compression*):**
    Filtra los fragmentos recuperados para extraer únicamente las oraciones o datos estrictamente pertinentes a la pregunta, descartando el texto secundario antes de inyectarlo en el prompt final.

*   **Maximal Marginal Relevance (MMR):**
    Algoritmo que busca un equilibrio entre la relevancia frente a la consulta y la diversidad entre los fragmentos seleccionados, eliminando duplicados o párrafos que dicen exactamente lo mismo con distintas palabras.



### Extensiones Modernas
**Modular, Correctivo y GraphRAG**

El avance del RAG ha derivado en arquitecturas especializadas de alto impacto:

```
      RAG Ingenuo (Naïve)        RAG Avanzado              RAG Modular / Agéntico
    ┌─────────────────────┐   ┌──────────────────────┐   ┌────────────────────────┐
    │ Recuperar ──> Leer  │──>│ Reescribir ──>       │──>│ Orquestación dinámica: │
    │ (Búsqueda vectorial │   │ Recuperar Híbrido ──>│   │ Router, Grafos,        │
    │ lineal estática)    │   │ Reordenar ──> Leer   │   │ Evaluación y Subagentes│
    └─────────────────────┘   └──────────────────────┘   └────────────────────────┘
```


*   **Corrective RAG (CRAG):** Incorpora un evaluador que califica los fragmentos recuperados en *Correctos*, *Ambiguos* o *Incorrectos*. Si la información interna es incorrecta o insuficiente, el sistema activa de forma automatizada un motor de búsqueda web externo para complementar los vacíos.

*   **GraphRAG (Knowledge Graph RAG):** Construye un grafo de conocimiento extrayendo entidades y relaciones a partir de los documentos. Es fundamental para responder preguntas transversales o globales (por ejemplo: *"¿Cuáles son los temas centrales de todo este informe?"*), donde un vector denso tradicional no encuentra un fragmento único que contenga la síntesis.

*   **Agentic RAG:** Otorga autonomía al modelo para que funcione como un planificador. El agente descompone la meta, decide qué herramientas o bases de datos consultar, reflexiona sobre los resultados intermedios y ejecuta múltiples iteraciones hasta verificar que la respuesta satisface los criterios de completitud y veracidad.



### Métricas de Evaluación
**Cuantitativa (RAG Triad)**

A diferencia de un chatbot estándar, el RAG Avanzado se mide mediante marcos formales como **RAGAS** o **TruLens**, evaluando tres ejes fundamentales:

1.  **Relevancia del Contexto (*Context Relevance*):** Evalúa si los fragmentos recuperados corresponden estrictamente a la necesidad del usuario sin aportar ruido innecesario.

2.  **Fidelidad (*Faithfulness / Groundedness*):** Verifica matemáticamente que cada afirmación generada en la respuesta final provenga de los fragmentos recuperados, garantizando la eliminación de alucinaciones.

3.  **Relevancia de la Respuesta (*Answer Relevance*):** Mide que la salida generada responda con exactitud y concisión a la consulta original planteada.

