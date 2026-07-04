---
id: conceptos
title: "Conceptos fundamentales en Inteligencia Artificial"
sidebar_label: "💻 Conceptos fundamentales"
sidebar_position: 3
description: "Conceptos fundamentales en Inteligencia Artificial"
---



Para que puedan liderar la implementación de tecnologías avanzadas, es indispensable manejar con precisión la terminología técnica y operativa de la IA. A continuación, los conceptos esenciales que constituyen el lenguaje base de esta disciplina son los siguientes organizados en categorías o ámbitos de acción:

#### La Jerarquía de los Sistemas Inteligentes

*   **Inteligencia Artificial (IA):** Se define como un sistema basado en ingeniería que, a partir de un conjunto de objetivos definidos por humanos, genera salidas (outputs) tales como predicciones, recomendaciones o decisiones que influyen en entornos reales o virtuales. Su propósito fundamental es emular capacidades cognitivas humanas para resolver problemas complejos.
*   **Machine Learning (Aprendizaje Automático):** Es una rama de la IA centrada en el desarrollo de algoritmos que permiten a las computadoras identificar patrones y aprender de los datos de manera autónoma, sin necesidad de instrucciones de programación explícitas para cada tarea.
*   **Deep Learning (Aprendizaje Profundo):** Representa una evolución del aprendizaje automático que utiliza redes neuronales artificiales multicapa para procesar información en niveles crecientes de abstracción. Es la tecnología detrás de los avances más disruptivos en visión por computadora y lenguaje natural.
*   **Redes Neuronales:** Son modelos computacionales inspirados en la estructura biológica del cerebro humano. Consisten en nodos interconectados (neuronas artificiales) que transmiten señales entre sí para procesar datos y aprender relaciones complejas.

#### El Ciclo de la Información y la Lógica Algorítmica

*   **Datos:** Son hechos primarios o elementos crudos que carecen de contexto por sí solos. En el marco de la ISO 42001, la gestión de los recursos de datos es crítica, incluyendo su procedencia y calidad.
*   **Información:** Surge cuando los datos son procesados, organizados y estructurados para que tengan un significado y propósito dentro de un contexto institucional.
*   **Conocimiento:** Es la síntesis de la información aplicada a la toma de decisiones, la resolución de problemas y la planificación estratégica en la gestión pública.
*   **Algoritmos:** Constituyen el conjunto de instrucciones lógicas y reglas matemáticas que guían el procesamiento de los datos para alcanzar un resultado específico.
*   **Modelos:** Es la estructura o "programa" resultante tras someter un algoritmo a un proceso de aprendizaje con datos. El modelo es el artefacto que efectivamente realiza las predicciones o genera contenido.

#### Arquitecturas y Capacidades Modernas

*   **Modelos Fundacionales:** Son modelos de IA entrenados en volúmenes masivos de datos a una escala tan amplia que pueden adaptarse a una vasta gama de tareas posteriores mediante ajustes mínimos.
*   **LLM (Large Language Models):** Son modelos de lenguaje a gran escala, como GPT-4 o Claude, entrenados para comprender, resumir, traducir y generar texto con una coherencia similar a la humana.
*   **IA Generativa:** Es una categoría de IA diseñada para crear contenido nuevo y original, ya sea texto, imágenes, audio o código, basándose en los patrones aprendidos durante su entrenamiento.
*   **IA Agéntica:** Representa sistemas que no solo responden a consultas, sino que actúan como agentes con autonomía para planificar tareas, utilizar herramientas y ejecutar acciones orientadas a objetivos complejos.

#### Mecánica Técnica del Procesamiento

*   **Entrenamiento:** Es el proceso sistemático mediante el cual se exponen algoritmos a grandes conjuntos de datos para que el modelo ajuste sus parámetros internos y aprenda a realizar tareas específicas.
*   **Inferencia:** Es la fase operativa en la que un modelo ya entrenado procesa datos nuevos para generar una respuesta o resultado.
*   **Tokens:** Son las unidades básicas de procesamiento en los modelos de lenguaje. Un token puede ser una palabra, una sílaba o incluso un solo carácter, permitiendo a la IA fragmentar el lenguaje para su análisis.
*   **Embeddings:** Son representaciones numéricas (vectores) de los tokens que capturan su significado semántico. Permiten que la IA "entienda" que palabras como "alcalde" y "municipio" están relacionadas contextualmente aunque se escriban diferente.
*   **Vectorización:** Es el proceso matemático de convertir datos (texto, imágenes) en listas de números (vectores) para que puedan ser procesados por los algoritmos de IA.

#### Estrategias de Optimización Institucional

*   **RAG (Generación Aumentada por Recuperación):** Es una técnica que permite a un modelo de IA consultar bases de datos externas o documentos específicos de una institución antes de generar una respuesta. Esto garantiza que la información entregada sea precisa y esté actualizada, reduciendo el riesgo de alucinaciones.
*   **Fine Tuning (Ajuste Fino):** Es el proceso de re-entrenamiento de un modelo pre-existente con un conjunto de datos más pequeño y especializado para optimizar su desempeño en un dominio específico, como la normativa jurídica o administrativa de un país.

### Diferencias entre RAG y Fine Tuning

La distinción técnica entre **RAG** (Generación Aumentada por Recuperación) y **Fine Tuning** (Ajuste Fino) es fundamental para entender cómo se especializa una Inteligencia Artificial para la gestión pública. Las principales diferencias radican en cómo acceden a la información y cómo se actualizan:

### 1. Mecanismo de Operación
*   **RAG (Retrieval-Augmented Generation):** Funciona como un proceso de "consulta a libro abierto". Antes de generar una respuesta, el sistema busca activamente información en **fuentes de datos externas y fidedignas** (bases de datos, leyes o informes) [4, 1.2, ¿Cómo ayuda la técnica RAG a evitar las alucinaciones?]. Proporciona al modelo un contexto enriquecido para que la respuesta esté fundamentada en documentos específicos y no solo en lo que el modelo "recuerda" de su entrenamiento original [¿Cómo ayuda la técnica RAG a evitar las alucinaciones?].
*   **Fine Tuning (Ajuste Fino):** Es un proceso de **re-entrenamiento** del modelo. Se toman los parámetros de un modelo ya existente y se ajustan utilizando un conjunto de datos específico y más pequeño para que el modelo se especialice en un dominio determinado, como la normativa jurídica o administrativa [4, 1.2]. Es comparable a que el modelo "estudie" profundamente un tema hasta que el conocimiento pase a formar parte de su estructura interna.

### 2. Actualización de Conocimientos
*   **RAG:** Permite una **actualización constante e inmediata**. Si la normativa cambia, solo es necesario actualizar el documento en la base de datos externa que el sistema consulta. El modelo no necesita ser re-entrenado para conocer el cambio [¿Cómo ayuda la técnica RAG a evitar las alucinaciones?].
*   **Fine Tuning:** La actualización es **lenta y costosa**. Para que el modelo aprenda nueva información, debe someterse a un nuevo ciclo de entrenamiento, lo que requiere tiempo, capacidad de cómputo y recursos técnicos [¿Cómo ayuda la técnica RAG a evitar las alucinaciones?].

### 3. Precisión y Alucinaciones
*   **RAG:** Es una de las técnicas más eficaces para **reducir alucinaciones** (respuestas falsas con apariencia de verdad). Al obligar al modelo a basarse en información externa recuperada en el momento, se minimiza el riesgo de que invente datos [4, 1.5, ¿Cómo ayuda la técnica RAG a evitar las alucinaciones?].
*   **Fine Tuning:** Aunque especializa al modelo en un lenguaje o formato, no elimina necesariamente las alucinaciones. El modelo sigue confiando en su capacidad predictiva de palabras basadas en su entrenamiento previo, lo que puede llevar a errores si la información está desactualizada o es insuficiente.

### 4. Verificabilidad
*   **RAG:** Ofrece **trazabilidad**. Permite que el sistema cite las fuentes exactas de donde extrajo la información, facilitando que el funcionario público verifique la veracidad de lo entregado [¿Cómo ayuda la técnica RAG a evitar las alucinaciones?].
*   **Fine Tuning:** El conocimiento queda "embebido" en los pesos numéricos del modelo, por lo que no es posible rastrear o citar una fuente documental específica para una respuesta dada.
 
En resumen, mientras que el **Fine Tuning** es útil para que la IA aprenda a hablar o escribir con un estilo técnico particular, el **RAG** es la solución técnica preferida cuando la prioridad es la **precisión factual y la actualización de los datos** en el Estado.

| Característica | RAG | Fine Tuning |
|----------------|-----|-------------|
| Fuente de conocimiento | Externa y actualizable | Interna y fija tras el entrenamiento |
| Costo de actualización | Bajo | Alto |
| Tiempo de implementación | Corto | Largo |
| Riesgo de alucinaciones | Bajo | Medio |
| Especialización | Alta en dominios específicos | Alta en dominios específicos |

#### RAG y alucinaciones: un enfoque preventivo

La técnica **RAG** (Generación Aumentada por Recuperación) constituye una de las herramientas más eficaces para mitigar el fenómeno de las **alucinaciones** en los modelos de lenguaje. Para comprender cómo lo logra, es necesario definir ambos conceptos y analizar su interacción técnica:

### 1. El problema: Las alucinaciones
Las alucinaciones son una limitación intrínseca de los modelos de inteligencia artificial generativa, donde el sistema produce respuestas que parecen gramaticalmente correctas y convincentes, pero que son **fácticamente falsas o carecen de sustento en la realidad**. Esto ocurre porque los modelos predicen la siguiente palabra más probable basándose únicamente en sus datos de entrenamiento previos, los cuales pueden estar incompletos, sesgados o desactualizados.

### 2. La solución: ¿Cómo funciona RAG?
La técnica RAG introduce un paso intermedio crucial antes de que la IA genere una respuesta. En lugar de confiar exclusivamente en su "memoria" interna, el proceso sigue estos pasos:

*   **Consulta externa:** Ante una pregunta del usuario, el sistema busca activamente información en **fuentes de datos externas, fidedignas y actualizadas** (como bases de datos institucionales, leyes vigentes o informes técnicos).
*   **Contexto enriquecido:** Los datos recuperados se entregan al modelo como contexto adicional junto con la pregunta original.
*   **Generación fundamentada:** La IA utiliza esta información específica para construir su respuesta, actuando más como un "analista que consulta un libro" que como un sistema que intenta "recordar" de memoria.

### 3. Mecanismos específicos para evitar el error
RAG ayuda a evitar alucinaciones de tres formas principales:

*   **Verificabilidad:** Al basar la respuesta en documentos específicos, el sistema puede citar las fuentes utilizadas, permitiendo al funcionario público verificar la veracidad de la información.
*   **Reducción del vacío de información:** Muchas alucinaciones ocurren cuando el modelo no conoce la respuesta pero intenta ser colaborativo; RAG llena ese vacío con datos concretos.
*   **Actualización constante:** Mientras que el entrenamiento de un modelo (o *Fine Tuning*) requiere procesos costosos y lentos, la base de datos de un sistema RAG puede actualizarse al instante, evitando errores por información obsoleta.

En conclusión, el uso de RAG transforma a la IA de un sistema puramente creativo en un asistente de **gestión del conocimiento** mucho más riguroso y confiable para la administración pública.

¿Qué papel juegan los Embeddings en la técnica RAG?
¿Cómo se integra RAG con la norma ISO 42001?
¿Qué diferencias técnicas hay entre RAG y Fine Tuning?