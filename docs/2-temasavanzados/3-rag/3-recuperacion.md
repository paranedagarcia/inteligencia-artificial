---
id: rag-dispersa
title: "RAG dispersa"
sidebar_label: "🗒️ Recuperación dispersa"
description: "Recuperación dispersa"
---


***
## **Recuperación**

El **Sparse Retrieval** (o *recuperación dispersa*) es un enfoque de recuperación de información basado en **representaciones vectoriales donde la gran mayoría de los valores son cero**. Cada dimensión de este vector suele corresponder a un término o palabra específica dentro de un vocabulario amplio. 

A diferencia del *Dense Retrieval* (que proyecta textos en vectores densos continuos y captura relaciones semánticas generales), el Sparse Retrieval se apoya en la presencia, frecuencia y peso estadístico de las palabras exactas, siendo el estándar de la industria para búsquedas léxicas, códigos alfanuméricos y nombres propios.

Los métodos y ejemplos representativos de Sparse Retrieval se clasifican en dos grandes familias: **modelos clásicos basados en términos** y **modelos neuronales aprendidos**.



### Modelos Clásicos
**Basados en Términos (*Term-based Lexical Retrieval*)**

#### A. One-Hot Encoding y Bolsa de Palabras (Bag of Words - BoW)
Es la forma más elemental de vector disperso. 
* **Cómo funciona:** Se crea un vocabulario con todas las palabras del corpus. Cada documento se representa como un vector del tamaño del vocabulario, donde se indica con `1` o `0` (o el conteo entero) si la palabra está presente.

* **Ejemplo práctico de vectorización:**
  * Vocabulario: `["australia", "copa", "final", "india", "mundial"]` (tamaño = 5).
  * Documento: *"australia ganó la copa mundial"*.
  * Vector disperso resultante: `` (los valores no coincidentes quedan en 0).



#### B. TF-IDF (*Term Frequency - Inverse Document Frequency*)
Es una técnica estadística que evalúa la importancia de una palabra en un documento en relación con toda la colección de textos.
* **Mecanismo:** Multiplica dos componentes:
  1. **TF (Term Frequency):** La frecuencia con la que aparece un término en un documento específico.

  2. **IDF (Inverse Document Frequency):** Penaliza las palabras muy comunes que aparecen en casi todos los documentos (como artículos o preposiciones) y asigna un peso alto a las palabras raras o distintivas.

* **Ejemplo conceptual:**
  Si un usuario busca `"decreto 12 compras"`, palabras genéricas como `"de"` tendrán un IDF cercano a cero, mientras que `"decreto"`, `"12"` y `"compras"` recibirán un peso numérico elevado en las dimensiones correspondientes de ese documento.


#### C. Okapi BM25 (*Best Matching 25*)
Es el estándar de la industria y la evolución probabilística de TF-IDF. 
* **Mejoras clave respecto a TF-IDF:**
  1. **Saturación de frecuencia de términos:** En TF-IDF, si una palabra aparece 50 veces, su peso crece linealmente. BM25 aplica una curva de saturación asintótica: después de cierto número de repeticiones, las apariciones adicionales apenas incrementan la puntuación.
  2. **Normalización por longitud de documento:** Evita que los documentos más largos obtengan puntuaciones artificialmente altas solo por contener más palabras.
* **Ejemplo en código (LangChain con `rank_bm25`):**
  ```python
  from langchain_community.retrievers import BM25Retriever

  # 1. Corpus de documentos
  corpus = [
      "El Decreto 12 regula el uso de inteligencia artificial en compras publicas.",
      "Las auditorias de contratos de salud exigen analisis de riesgo ex-ante.",
      "El Observatorio de compras publicas fiscaliza licitaciones en tiempo real."
  ]

  # 2. Inicializar el recuperador disperso BM25
  retriever_bm25 = BM25Retriever.from_texts(corpus)
  retriever_bm25.k = 1  # Recuperar el mejor resultado

  # 3. Consulta léxica exacta
  resultado = retriever_bm25.invoke("Decreto 12 compras publicas")
  print(resultado.page_content)
  # Salida: "El Decreto 12 regula el uso de inteligencia artificial en compras publicas."
  ```
  *(El algoritmo calcula los puntajes BM25 sumando los pesos de cada término de la consulta presentes en cada texto y normalizando por longitud).*



### Modelos Neuronales Dispersos 
**(*Learned Sparse Retrieval*)**

#### SPLADE (*Sparse Lexical and Expansion Model*)
Representa la generación moderna de recuperación dispersa que combina lo mejor del aprendizaje profundo con la eficiencia de los índices invertidos.
* **Cómo funciona:** Utiliza una red neuronal basada en Transformer (como BERT) para proyectar el texto en el espacio del vocabulario del modelo (más de 30.000 dimensiones). Mediante regularización matemática, fuerza a que la gran mayoría de las dimensiones sean **cero**, produciendo un vector disperso.

* **Expansión léxica (*Term Expansion*):** A diferencia de BM25, SPLADE es capaz de activar pesos positivos para palabras que **no estaban en el texto original** pero que son sinónimos o conceptos estrechamente vinculados.
  * *Ejemplo:* Si el texto original dice *"paciente con cefalea intensa"*, SPLADE puede activar dimensiones con valor para *"dolor"*, *"cabeza"* o *"migraña"*, resolviendo la limitación de vocabulario sin perder la velocidad de un índice disperso.



### Índice Invertido
**El motor detrás del Sparse Retrieval**

Para que los sistemas puedan buscar entre millones de documentos en milisegundos sin calcular el producto punto de cada vector uno a uno, motores como **Elasticsearch**, **Apache Lucene** o **OpenSearch** almacenan estos vectores en una estructura llamada **Índice Invertido**:

```
  Término      Count      (Doc ID, Frecuencia / Peso)
  ───────────  ─────────  ───────────────────────────
  "decreto"       1       (Doc 1, 1)
  "12"            1       (Doc 1, 1)
  "compras"       2       (Doc 1, 1), (Doc 3, 1)
  "auditorias"    1       (Doc 2, 1)
```
Cuando un usuario consulta `"compras"`, el motor no revisa todos los textos: va directo a la clave `"compras"` y obtiene inmediatamente los documentos relevantes (`Doc 1` y `Doc 3`) de forma casi instantánea.


### Comparación
**Sparse Retrieval frente a Dense Retrieval**

| Criterio | Sparse Retrieval (BM25 / TF-IDF / SPLADE) | Dense Retrieval (Embeddings densos / DPR) |
| :--- | :--- | :--- |
| **Representación** | Vectores de alta dimensionalidad (30.000+) donde el **99% de los valores son 0**. | Vectores de dimensionalidad fija continua (768 a 3.072) donde **todos los valores son distintos de cero**. |
| **Punto fuerte** | Coincidencia exacta de palabras clave, números de leyes, identificadores únicos y siglas técnicas. | Comprensión semántica abstracta, sinónimos y relaciones conceptuales generales. |
| **Punto débil** | Desajuste de vocabulario (*vocabulary mismatch*); si el usuario usa un sinónimo no presente, no lo encuentra. | Puede alucinar relevancia temática pero fallar en números exactos de modelos o códigos normativos. |
| **Infraestructura** | Índices invertidos en disco o memoria (Lucene, Elasticsearch). | Bases de datos vectoriales con grafos de proximidad (HNSW, IVF en Chroma/Pinecone). |

---

### Aplicación en RAG
**Búsqueda Híbrida con Fusión de Rangos**

En sistemas avanzados de producción, el Sparse Retrieval no se usa de forma aislada, sino en paralelo con el Dense Retrieval bajo un esquema de **Búsqueda Híbrida** (*Hybrid Search*). 

```python
from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

# 1. Recuperador disperso (Sparse)
retriever_sparse = BM25Retriever.from_texts(corpus)
retriever_sparse.k = 5

# 2. Recuperador denso (Dense)
vectorstore = FAISS.from_texts(corpus, OpenAIEmbeddings())
retriever_dense = vectorstore.as_retriever(search_kwargs={"k": 5})

# 3. Combinación híbrida ponderada
retriever_hibrido = EnsembleRetriever(
    retrievers=[retriever_dense, retriever_sparse],
    weights=[0.7, 0.3]  # 70% peso semántico, 30% peso léxico exacto
)
```
Ambos resultados se consolidan mediante **Reciprocal Rank Fusion (RRF)**, asegurando que si un documento contiene la palabra clave exacta buscada por el usuario (vía BM25) y además es contextualmente afín (vía embeddings), se posicione en el primer lugar para el LLM.

