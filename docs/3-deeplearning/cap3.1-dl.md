---
id: rag
title: "Bases de Deep Learning"
sidebar_label: "💻 Bases de deep learning"
sidebar_position: 2
description: "Bases de deep learning"
---

La Generación Aumentada por Recuperación, conocida como **RAG** (por sus siglas en inglés, *Retrieval-Augmented Generation*), es una técnica arquitectónica que permite a los Modelos de Lenguaje Extensos (LLM) acceder a datos externos y actualizados que no formaban parte de su entrenamiento original. En términos sencillos, el RAG actúa como una "memoria externa" o un sistema de consulta a libro abierto para la IA, permitiéndole responder preguntas sobre documentos específicos, normativas internas o información de tiempo real. Su propósito fundamental es reducir las "alucinaciones" (respuestas falsas pero convincentes) y proporcionar respuestas factualmente precisas que el usuario pueda verificar mediante la citación de fuentes.

Para implementar un sistema RAG de manera efectiva, es necesario construir dos procesos o flujos de trabajo principales: la **etapa de indexación** y la **etapa de generación**.

### 1. Etapa de Indexación (Preparación del Conocimiento)
Este es un proceso previo (generalmente fuera de línea) donde se prepara la base de conocimientos para que pueda ser consultada rápidamente. Consta de los siguientes componentes técnicos:
*   **Carga de datos (*Loading*):** Se conectan las fuentes originales de información, como archivos PDF, sitios web institucionales, bases de datos SQL o nubes de almacenamiento.
*   **División de texto (*Chunking*):** Los documentos largos se fragmentan en piezas más pequeñas y manejables llamadas "chunks", asegurando que la información importante no se pierda en contextos demasiado extensos.
*   **Conversión a vectores (*Embeddings*):** Cada fragmento de texto se transforma en una representación numérica llamada "embedding", la cual captura el significado semántico del contenido en un espacio de múltiples dimensiones.
*   **Almacenamiento (*Storage*):** Estos vectores se guardan en una **base de datos vectorial**, diseñada específicamente para realizar búsquedas por similitud de significado en lugar de simples palabras clave.

### 2. Etapa de Generación (Interacción en Tiempo Real)
Este flujo ocurre cada vez que un usuario interactúa con el sistema para realizar una consulta:
*   **Recuperación (*Retrieval*):** Cuando el usuario hace una pregunta, el sistema convierte esa consulta en un vector y busca en la base de datos vectorial los fragmentos de información más parecidos o relevantes.
*   **Aumentación (*Augmentation*):** Los fragmentos recuperados se combinan con la pregunta original del usuario para crear un "promp extendido" que incluye el contexto necesario para responder.
*   **Generación (*Generation*):** Finalmente, el LLM recibe este paquete de información (pregunta + contexto real) y genera una respuesta que está "anclada" a los datos proporcionados, citando las fuentes si así se le instruye.

En resumen, la implementación de RAG transforma a la IA de ser un sistema que solo confía en lo que "aprendió" en el pasado a uno capaz de investigar activamente en bases de datos confiables para entregar valor público con mayor seguridad y precisión.

## RAG y alucinaciones: un enfoque preventivo

La técnica **RAG** constituye una de las herramientas más eficaces para mitigar el fenómeno de las **alucinaciones** en los modelos de lenguaje. Para comprender cómo lo logra, es necesario definir ambos conceptos y analizar su interacción técnica:

### 1. El problema: Las alucinaciones
Las alucinaciones son una limitación intrínseca de los modelos de inteligencia artificial generativa, donde el sistema produce respuestas que parecen gramaticalmente correctas y convincentes, pero que son **fácticamente falsas o carecen de sustento en la realidad**. Esto ocurre porque los modelos predicen la siguiente palabra más probable basándose únicamente en sus datos de entrenamiento previos, los cuales pueden estar incompletos, sesgados o desactualizados.

### 2. La solución: 
La técnica RAG introduce un paso intermedio crucial antes de que la IA genere una respuesta. En lugar de confiar exclusivamente en su "memoria" interna, el proceso sigue estos pasos (ya descritos previamente):

*   **Consulta externa:** Ante una pregunta del usuario, el sistema busca activamente información en **fuentes de datos externas, fidedignas y actualizadas** (como bases de datos institucionales, leyes vigentes o informes técnicos).
*   **Contexto enriquecido:** Los datos recuperados se entregan al modelo como contexto adicional junto con la pregunta original.
*   **Generación fundamentada:** La IA utiliza esta información específica para construir su respuesta, actuando más como un "analista que consulta un libro" que como un sistema que intenta "recordar" de memoria.

### 3. Mecanismos específicos para evitar el error
RAG ayuda a evitar alucinaciones de tres formas principales:

*   **Verificabilidad:** Al basar la respuesta en documentos específicos, el sistema puede citar las fuentes utilizadas, permitiendo al funcionario público verificar la veracidad de la información.
*   **Reducción del vacío de información:** Muchas alucinaciones ocurren cuando el modelo no conoce la respuesta pero intenta ser colaborativo; RAG llena ese vacío con datos concretos.
*   **Actualización constante:** Mientras que el entrenamiento de un modelo (o *Fine Tuning*) requiere procesos costosos y lentos, la base de datos de un sistema RAG puede actualizarse al instante, evitando errores por información obsoleta.

En conclusión, el uso de RAG transforma a la IA de un sistema puramente creativo en un asistente de **gestión del conocimiento** mucho más riguroso y confiable para la administración pública.

