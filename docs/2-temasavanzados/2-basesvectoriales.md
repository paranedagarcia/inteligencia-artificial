---
id: vectoriales
title: "Bases vectoriales"
sidebar_label: "🗒️ Bases vectoriales"
description: "Bases vectoriales"
---

## Base vectorial

Una **base de datos vectorial** (*vector database*) es un sistema de almacenamiento especializado, diseñado y optimizado específicamente para indexar, gestionar y buscar datos en forma de **vectores de alta dimensionalidad** (embeddings) de manera rápida y eficiente.

Mientras que una base de datos relacional tradicional (como MySQL o PostgreSQL clásico) organiza información estructurada en tablas con filas y columnas, y las bases NoSQL (como MongoDB) almacenan documentos semiestructurados, las bases de datos vectoriales están construidas para operar con las representaciones matemáticas del significado.

---

### 1. La diferencia clave: Búsqueda exacta vs. Búsqueda por similitud

Para entender su función, es fundamental compararlas con las bases de datos tradicionales:

*   **Bases de datos tradicionales (Búsqueda exacta):** Realizan consultas deterministas o basadas en palabras clave exactas (`WHERE id = 10` o `WHERE texto CONTAINS "ratón"`). Si buscas `"ratón"`, el sistema únicamente recuperará registros que contengan esa palabra exacta; ignorará términos semánticamente vinculados como *"queso"*, *"trampa"* o *"roedor"* si la palabra literal no está presente.
*   **Bases de datos vectoriales (Búsqueda por similitud o semántica):** No buscan una coincidencia textual idéntica, sino los vectores más cercanos en el espacio multidimensional respecto al vector de consulta. Siguiendo el ejemplo anterior, el sistema podrá recuperar documentos sobre *"queso"* o *"trampas"* porque sus embeddings se encuentran geométricamente cerca de *"ratón"*.

---

### 2. Arquitectura interna: Componentes esenciales

Una base de datos vectorial completa no solo almacena números; combina dos capas estructurales críticas:

1.  **Almacenamiento de vectores y metadatos (*Vector Storage*):** Persiste los vectores densos junto con el contenido original en texto plano y sus **metadatos** asociados (tales como título, autor, fecha, identificador o etiquetas temáticas).
2.  **Índice vectorial (*Vector Index*):** Es la estructura de datos que permite acelerar la búsqueda y evitar la *"maldición de la dimensionalidad"*. Comparar una consulta con cada uno de los millones de vectores uno por uno (búsqueda por fuerza bruta o *k-Nearest Neighbors exacto*) requeriría un costo computacional prohibitivo de orden \\(O(dN)\\). El índice vectorial organiza el espacio para reducir este tiempo drásticamente (a menudo cercano a \\(O(\log N)\\)).

#### Principales algoritmos de indexación (Búsqueda de Vecinos Más Cercanos Aproximados - ANN):
*   **HNSW (*Hierarchical Navigable Small World*):** Construye un grafo multicapa donde los nodos representan vectores y los enlaces conectan vectores similares. Permite "navegar" de forma ultrarrápida por el grafo hasta encontrar los vecinos más cercanos con un alto nivel de precisión. Es el estándar de facto en entornos de producción.
*   **IVF (*Inverted File Index*):** Utiliza agrupamiento (*clustering*, como K-means) para dividir el espacio de vectores en regiones o centroides. Al consultar, solo revisa los grupos más cercanos a la consulta, descartando el resto del espacio.
*   **Cuantización de producto (*Product Quantization - PQ*):** Comprime los vectores reduciendo su precisión numérica y dividiéndolos en subvectores más pequeños. Permite reducir el consumo de memoria física (RAM) entre 10 y 20 veces a costa de una pequeña pérdida de exactitud.
*   **LSH (*Locality-Sensitive Hashing*):** Utiliza funciones de dispersión (hash) que asignan vectores similares al mismo "cubo" (*bucket*), ideal para datos que se actualizan de manera continua.

---

### 3. Métricas de distancia utilizadas en la búsqueda

Para determinar qué tan "cerca" está un documento respecto a la pregunta del usuario, la base de datos vectorial aplica una función matemática de distancia o similitud:

*   **Similitud del coseno (*Cosine Similarity*):** Evalúa el coseno del ángulo formado por dos vectores. Es la métrica estándar para texto y procesamiento del lenguaje natural, ya que evalúa la orientación del vector e ignora la longitud del documento.
*   **Distancia Euclídea / \\(L_2\\) (*Squared Euclidean*):** Calcula la distancia geométrica en línea recta entre los dos puntos. Es común en visión artificial o cuando la magnitud de los datos es relevante.
*   **Producto escalar (*Dot Product / Inner Product*):** Multiplica las magnitudes de los vectores por el coseno del ángulo. Cuando los vectores están previamente normalizados a longitud 1 (como en los modelos de OpenAI), el producto escalar es matemáticamente equivalente a la similitud del coseno y se calcula de forma más rápida.

---

### 4. Categorías de bases de datos vectoriales en el mercado

Las soluciones disponibles se clasifican en varias familias tecnológicas:

| Tipo | Descripción | Ejemplos representativos |
| :--- | :--- | :--- |
| **Bases de datos vectoriales especializadas** | Diseñadas desde cero para vectores; ofrecen escalabilidad, seguridad empresarial, APIs de consulta y soporte de metadatos. | **Pinecone** (totalmente administrada en la nube), **ChromaDB** (ligera y de código abierto para desarrollo local), **Milvus**, **Qdrant**, **Weaviate**. |
| **Librerías / Índices vectoriales puros** | Bibliotecas de código abierto que implementan algoritmos de indexación y búsqueda en memoria, pero no gestionan metadatos complejos ni interfaces de usuario por sí solas. | **FAISS** (*Facebook AI Similarity Search*), **Annoy** (de Spotify), **ScaNN** (de Google). |
| **Bases de datos tradicionales con soporte vectorial** | Motores relacionales, NoSQL o de búsqueda textual tradicionales que han añadido extensiones para almacenar y buscar vectores. | **pgvector** (extensión de PostgreSQL), **Redis** (módulo Redis Search), **Azure AI Search**, **OpenSearch**, **MongoDB Atlas**, **Neo4j** (enfoque de grafos). |

---

### 5. Su rol como "Memoria Externa" en Sistemas RAG

En las arquitecturas de **Generación Aumentada por Recuperación (RAG)**, las bases de datos vectoriales actúan como la **memoria no paramétrica persistente** del modelo de lenguaje. 

Dado que los LLMs tienen una fecha de corte de conocimiento (*knowledge cutoff*) y no conocen la documentación interna o confidencial de una organización, la base de datos vectorial permite almacenar millones de fragmentos normativos o técnicos indexados. Cuando un usuario formula una pregunta, el sistema extrae en milisegundos los 3 o 5 fragmentos más afines semánticamente y se los entrega al LLM como contexto de referencia para que elabore una respuesta precisa, verídica y verificable.

---
