---
id: embeddings
title: "Embeddings"
sidebar_label: "🗒️ Embeddings"
description: "Embeddings"
---

![](/img/embeddings-infografia.jpg)

Un **embedding** (a menudo traducido como incrustación o representación vectorial) es una técnica fundamental del aprendizaje automático y del procesamiento del lenguaje natural (NLP) que **transforma datos no numéricos —como palabras, frases, documentos completos, imágenes o audios— en vectores numéricos dentro de un espacio multidimensional**.

En términos sencillos para quienes se inician en la materia: **los computadores y los algoritmos no comprenden el lenguaje humano de forma directa, sino que realizan cálculos matemáticos con números**. Por ello, para que una máquina procese texto, este debe ser traducido a una lista de números (un vector) que no solo funcione como una etiqueta numérica arbitraria, sino que **capture y codifique el significado semántico y el contexto** de la información.


### La intuición geométrica
**¿Cómo captura el significado?**

En los sistemas tradicionales basados en palabras clave (como las búsquedas por concordancia exacta o el código *one-hot*), cada palabra es una entidad aislada que carece de relación con las demás. 

Los modelos de embeddings resuelven esta limitación proyectando los conceptos en un **espacio vectorial continuo**:
* **Cercanía semántica:** Las palabras o documentos que comparten un significado similar o que aparecen en contextos semejantes son mapeados como **vectores muy cercanos entre sí** en dicho espacio geométrico. Por ejemplo, los vectores correspondientes a las palabras *"perro"* y *"ladrido"* o *"gorila"* y *"chimpancé"* se ubican a una distancia corta, mientras que conceptos no relacionados como *"filosofía"* o *"cielo"* quedan espacialmente muy alejados.

* **Relaciones conceptuales y analogías:** Estos espacios aprenden relaciones complejas entre conceptos que pueden traducirse en operaciones matemáticas. El ejemplo clásico ampliamente documentado en la literatura de NLP demuestra que si al vector de *"Rey"* se le resta el vector de *"Hombre"* y se le suma el de *"Mujer"*, el vector resultante se ubica de forma extraordinariamente cercana al vector de *"Reina"*.


```math
(\vec{v}_{Rey} - \vec{v}_{Hombre} + \vec{v}_{Mujer} \approx \vec{v}_{Reina})
```

De igual manera, se preservan relaciones como capitales y países, 

```math
(\vec{v}_{París} - \vec{v}_{Francia} + \vec{v}_{Alemania} \approx \vec{v}_{Berlín})
```



### Estructura y dimensionalidad

En una representación visual simple se suele ilustrar este espacio en 2 o 3 dimensiones. Sin embargo, los modelos de embeddings reales operan en espacios de **alta dimensionalidad** —que habitualmente oscilan entre 100 y varios miles de dimensiones (por ejemplo, 300, 768 o 1.536 números por vector, como en los modelos de OpenAI). 

Cada una de estas dimensiones representa de forma latente un atributo o patrón abstracto aprendido durante el entrenamiento con grandes volúmenes de texto (por ejemplo, género gramatical, tiempo verbal, tono, dominio técnico o nivel de formalidad).

### ¿Cómo se mide la similitud?

Para determinar si dos textos, consultas o fragmentos de documentos dicen lo mismo, los sistemas computacionales calculan la distancia o el ángulo entre sus vectores:

* **Similitud del coseno (Cosine Similarity):** Es la métrica más utilizada en NLP. Mide el coseno del ángulo formado por los dos vectores, sin importar la longitud del texto. Si dos vectores apuntan en la misma dirección (ángulo de $0^\circ$), el valor es **1** (máxima similitud); si son ortogonales o no relacionados (ángulo de $90^\circ$), el valor se acerca a **0**; y si son opuestos (ángulo de $180^\circ$), el valor es **-1**.

* **Distancia euclídea (L2):** Mide la distancia geométrica en línea recta entre los puntos en el espacio multidimensional.


### Aplicación central: Búsqueda semántica y sistemas RAG

En las aplicaciones modernas de inteligencia artificial y gestión de información, los embeddings son la pieza clave de los sistemas **RAG (Retrieval-Augmented Generation)** y de las **bases de datos vectoriales** (como Chroma, FAISS, Pinecone o Qdrant):

1. **Indexación:** Los documentos extensos (leyes, reglamentos, contratos) se dividen en fragmentos (*chunks*), se convierten en vectores mediante un modelo de embeddings y se almacenan en la base de datos vectorial.

2. **Búsqueda (Retrieval):** Cuando un usuario introduce una pregunta en lenguaje natural, esta consulta se convierte en un vector utilizando el mismo modelo.

3. **Recuperación semántica:** En lugar de buscar coincidencias exactas de palabras (búsqueda léxica), el sistema recupera los fragmentos cuyos vectores tengan la mayor similitud semántica con la consulta y se los entrega al modelo de lenguaje como contexto preciso y verificado.

### Modelos estáticos frente a modelos contextuales

Se diferencia dos grandes generaciones de embeddings:

1. **Embeddings estáticos (como Word2Vec, GloVe o FastText):** Asignan una única representación fija a cada palabra. Tienen la desventaja de no resolver la polisemia; por ejemplo, la palabra *"banco"* tendría el mismo vector exacto si se utiliza para referirse a una institución financiera o a la orilla de un río.

2. **Embeddings contextuales (como BERT y modelos basados en Transformers):** Generan la representación numérica evaluando el texto completo que rodea al término (mecanismo de autoatención). Así, el vector resultante de *"banco"* cambia dinámicamente según si el contexto trata sobre dinero o sobre el cauce de un río.

Además, existen los **embeddings multimodales** (como CLIP), capaces de proyectar en un mismo espacio vectorial unificado tanto textos como imágenes o audios, permitiendo comparar, por ejemplo, una fotografía con una descripción escrita.


***
## **Embeddings estáticos**

Los **embeddings estáticos** (o *static word embeddings*) son una técnica de Procesamiento del Lenguaje Natural (NLP) y aprendizaje automático en la que **cada palabra individual del vocabulario se mapea a una única representación vectorial numérica y fija en un espacio multidimensional continuo**.

El término **«estático»** hace referencia directa a que **el vector numérico asignado a la palabra permanece invariable y no se modifica en función del contexto o de la oración en la que aparece**.


### Características

1. **Representación densa en un espacio continuo:**
   * A diferencia de los enfoques tradicionales dispersos como *One-Hot Encoding* o *Bag-of-Words* (donde el vector crece al tamaño de todo el vocabulario con ceros en casi todas sus posiciones), los embeddings estáticos codifican las palabras en **vectores densos** de longitud fija (habitualmente de 50, 100 o 300 dimensiones).

2. **Cercanía semántica por coocurrencia:**
   * Se basan en la hipótesis distribucional lingüística: las palabras que aparecen frecuentemente en contextos similares se ubican geométricamente cerca en el espacio vectorial. Por ejemplo, los vectores de *"perro"* y *"ladrido"* o *"gorila"* y *"chimpancé"* tienen distancias espaciales cortas en comparación con términos no relacionados como *"cielo"*.

3. **Propiedad analógica y álgebra vectorial:**
   * Aprenden regularidades y relaciones conceptuales que permiten resolver analogías mediante sumas y restas vectoriales simples. La relación clásica ampliamente documentada demuestra que:

    ```math
    (\vec{v}_{Rey} - \vec{v}_{Hombre} + \vec{v}_{Mujer} \approx \vec{v}_{Reina})
    ```

    De igual manera, se preservan relaciones como capitales y países, 

    ```math
    (\vec{v}_{París} - \vec{v}_{Francia} + \vec{v}_{Alemania} \approx \vec{v}_{Berlín})
    ```


4. **Almacenamiento como tabla de búsqueda (*Lookup Table*):**
   * Una vez entrenados, los vectores se guardan en una matriz estática en memoria o en disco. Para procesar una palabra, el sistema simplemente consulta el índice de dicha palabra en la tabla, lo que requiere un **costo computacional muy bajo** en inferencia.

5. **Composición de oraciones por agregación:**
   * Para representar una frase o documento completo a partir de embeddings estáticos, la técnica estándar consiste en obtener los vectores de cada una de sus palabras y combinarlos mediante una operación de agregación (generalmente calculando el promedio o la suma de los vectores individuales).

6. **Limitación ante la polisemia:**
   * Al asignar un único vector por palabra, no pueden desambiguar términos con múltiples significados. La palabra *"banco"* tendrá exactamente los mismos números ya sea en *"fui al banco a depositar dinero"* o en *"el banco del río"*, mezclando los dos conceptos en un único punto geométrico.



### Principales modelos

Los algoritmos más representativos de embeddings estáticos incluyen:

#### Word2Vec (Google, 2013)
Desarrollado por Tomas Mikolov y su equipo, utiliza redes neuronales superficiales (*shallow*) de una sola capa oculta para aprender representaciones vectoriales a partir de grandes corpus:

* **Continuous Bag of Words (CBOW):** Predice la palabra objetivo a partir de las palabras que forman su contexto circundante.

* **Skip-Gram:** Realiza el proceso inverso: toma la palabra central como entrada e intenta predecir las palabras de su contexto.

#### GloVe (*Global Vectors for Word Representation*, Stanford, 2014)
Desarrollado por Pennington, Socher y Manning, aprende las representaciones factorizando una matriz global de coocurrencia de palabras en todo el corpus. Al analizar la frecuencia con la que las palabras aparecen juntas en textos masivos (como Wikipedia, Common Crawl o colecciones de Twitter), genera vectores densos de alta calidad con dimensiones predefinidas (por ejemplo, 50, 100, 200 o 300 números).

#### FastText (Facebook AI Research, 2016)
Una extensión de Word2Vec que descompone las palabras en **n-gramas de caracteres** (subpalabras). Esto le permite generar representaciones numéricas incluso para palabras raras, compuestas o con faltas de ortografía que no formaban parte del vocabulario de entrenamiento original (*out-of-vocabulary* o OoV).



### Ejemplo en código (PyTorch)

En bibliotecas de aprendizaje profundo como **PyTorch**, un embedding estático se define a través de una capa de tabla de búsqueda (`nn.Embedding`), donde cada palabra de un vocabulario fijo se asocia a un vector numérico de dimensiones preestablecidas:

```python showLineNumbers
import torch
import torch.nn as nn

# Vocabulario de 2.000 palabras representadas en vectores de 100 dimensiones
vocab_size = 2000
embedding_dim = 100

# Capa de búsqueda estática (lookup table)
embedding_layer = nn.Embedding(num_embeddings=vocab_size, embedding_dim=embedding_dim)

# Índice de la palabra "perro" (por ejemplo, token ID = 45)
word_id = torch.tensor()

# Recupera el vector estático de 100 dimensiones asignado a esa palabra
word_vector = embedding_layer(word_id)
print(word_vector.shape)  # Salida: torch.Size()
```

Una vez entrenada esta matriz o cargados los pesos preentrenados de fuentes como GloVe o Word2Vec, el vector para el índice `45` será siempre idéntico cada vez que se consulte.



***
## **Embeddings contextuales**

Los **embeddings contextuales** (o *contextualized word embeddings*) son representaciones numéricas vectoriales de palabras o secuencias de texto en las que **el vector asignado a un término varía dinámicamente según la oración completa y las palabras que lo rodean**.

A diferencia de los modelos estáticos (como Word2Vec o GloVe), donde una palabra siempre tiene asignada la misma lista de números sin importar dónde aparezca, en los embeddings contextuales **una misma palabra genera representaciones matemáticas completamente distintas según el contexto semántico en el que se utilice**.



### Características

1. **Resolución dinámica de la polisemia y homonimia:**
   * Es su rasgo más distintivo. Si tomamos la palabra **«banco»**:
     * En *"Fui al banco a solicitar un crédito"*, el modelo genera un vector asociado a instituciones financieras y dinero.
     * En *"Nos sentamos a descansar en un banco de la plaza"*, el modelo genera un vector asociado a mobiliario urbano.

2. **Fundamentados en el mecanismo de autoatención (*Self-Attention*):**
   * Se basan principalmente en la arquitectura **Transformer**. El algoritmo no procesa la palabra de manera aislada, sino que calcula pesos de atención entre cada término y todos los demás tokens de la secuencia en paralelo, capturando relacione
   
3. **Representación bidireccional:**
   * Evalúan de forma simultánea el contexto situado a la izquierda (palabras previas) y a la derecha (palabras posteriores) del término analizado. Esto permite determinar el sentido exacto de una palabra apoyándose en lo que viene antes y después en la oración.

4. **Tratamiento de subpalabras (*Subword Tokenization*):**
   * Utilizan algoritmos de segmentación como *WordPiece* o *Byte-Pair Encoding* (BPE). Esto evita el problema de las palabras fuera de vocabulario (*out-of-vocabulary*): si el modelo encuentra una palabra desconocida, la divide en unidades morfológicas menores (prefijos, raíces o sufijos) y calcula su embedding contextual combinando dichas partes.

5. **Generación por inferencia (sin tabla fija):**
   * No se almacenan en una tabla de búsqueda estática (*lookup table*). Cada vez que ingresa un texto, este debe pasar a través de las capas de la red neuronal para que el modelo calcule los vectores correspondientes en tiempo de ejecución.

6. **Alta dimensionalidad y granularidad:**
   * Dependiendo de la arquitectura, los vectores suelen tener dimensiones estándar como **768** (ej. BERT Base), **1.024** (BERT Large) o **1.536 / 3.072** dimensiones en los modelos de embeddings de gran escala contemporáneos.



### Principales modelos

#### 1. ELMo (*Embeddings from Language Models*, AllenNLP, 2018)
Fue uno de los primeros modelos en popularizar los embeddings contextuales profundos. Empleaba redes neuronales recurrentes bidireccionales (**BiLSTM**) entrenadas con una tarea de modelado de lenguaje para asignar vectores a las palabras en función de su contexto oracional.

#### 2. BERT (*Bidirectional Encoder Representations from Transformers*, Google, 2018)
Consolidó el estándar moderno al reemplazar las redes recurrentes por la arquitectura Transformer. Su entrenamiento mediante el modelo de lenguaje enmascarado (*Masked Language Model* o MLM) le permite observar palabras a ambos lados del token de manera verdaderamente simultánea, generando embeddings contextuales muy precisos para tareas de clasificación, extracción de entidades y búsqueda semántica.

#### 3. RoBERTa (Facebook AI / Meta) y DeBERTa (Microsoft)
Optimizaciones de la arquitectura de BERT que mejoran el esquema de entrenamiento (eliminando la predicción de la siguiente oración y empleando máscaras dinámicas o mecanismos de atención desenredada), logrando representaciones contextuales más ricas y robustas.

#### 4. Modelos de Embeddings Densos Modernos para RAG
Modelos específicamente entrenados para transformar oraciones o párrafos completos en vectores densos optimizados para búsqueda por similitud (similitud del coseno):

* **BGE (*BAAI General Embedding*):** Modelos de código abierto de alto rendimiento para recuperación semántica multilingüe.

* **Text-Embedding-3 (OpenAI):** Modelos como `text-embedding-3-small` (1.536 dimensiones) y `text-embedding-3-large` (3.072 dimensiones), ampliamente utilizados en arquitecturas RAG empresariales.

* **Cohere Embed / E5 (*Embeddings from bidirectional Encoder representations*):** Modelos diseñados con funciones de pérdida contrastivas para distinguir con gran precisión fragmentos relevantes en bases de datos vectoriales.



### Ejemplo en código 
**(con Hugging Face Transformers)**

El siguiente ejemplo en Python ilustra cómo **BERT** extrae embeddings contextuales distintos para la misma palabra («banco») en dos oraciones diferentes:

```python showLineNumbers
import torch
from transformers import AutoTokenizer, AutoModel

# 1. Cargar el tokenizador y el modelo preentrenado de BERT
model_name = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModel.from_pretrained(model_name)

# 2. Dos oraciones donde "bank" tiene significados distintos
oracion_1 = "I deposited money in the bank."       # Institución financiera
oracion_2 = "We sat on the river bank to rest."    # Orilla del río

# 3. Tokenización y obtención de tensores
inputs_1 = tokenizer(oracion_1, return_tensors="pt")
inputs_2 = tokenizer(oracion_2, return_tensors="pt")

# 4. Inferencia a través de las capas de BERT (sin calcular gradientes)
with torch.no_grad():
    outputs_1 = model(**inputs_1)
    outputs_2 = model(**inputs_2)

# last_hidden_state contiene los vectores contextuales de cada token (dimensión: 768)
embeddings_1 = outputs_1.last_hidden_state
embeddings_2 = outputs_2.last_hidden_state

# 5. Localizar el índice del token "bank" en cada oración
idx_bank_1 = tokenizer.convert_tokens_to_ids("bank")
pos_1 = (inputs_1["input_ids"] == idx_bank_1).nonzero(as_tuple=True).item()
pos_2 = (inputs_2["input_ids"] == idx_bank_1).nonzero(as_tuple=True).item()

vector_bank_finanzas = embeddings_1[0, pos_1]
vector_bank_rio = embeddings_2[0, pos_2]

# 6. Comparar los dos vectores mediante similitud del coseno
cos = torch.nn.CosineSimilarity(dim=0)
similitud = cos(vector_bank_finanzas, vector_bank_rio)

print(f"Dimensión del vector: {vector_bank_finanzas.shape}")  # 768
print(f"Similitud entre ambos 'bank': {similitud.item():.4f}")    # Notablemente inferior a 1.0
```

En este ejemplo, la similitud del coseno entre ambos vectores arrojará un valor considerablemente menor a 1.0, evidenciando matemáticamente que el sistema entiende que se trata de dos conceptos diferentes.



### Relevancia
**Sistemas RAG y Bases de Datos Vectoriales**

En el ámbito de la **gestión pública y la administración de información compleja**, los embeddings contextuales son indispensables. Permiten que los motores de búsqueda semántica e índices vectoriales identifiquen la intención real de una consulta ciudadana o normativa, incluso cuando las palabras utilizadas sean ambiguas o difieran del texto literal de las leyes o reglamentos indexados.




***
## **Diferencias entre embeddings**

La distinción entre **embeddings estáticos** y **embeddings contextuales** representa uno de los saltos evolutivos más trascendentales en la historia del Procesamiento del Lenguaje Natural (NLP) y de la arquitectura de la Inteligencia Artificial. 

Para comprender su diferencia de manera simple, conviene partir de una premisa básica: **el lenguaje humano es dinámico y una misma palabra puede cambiar radicalmente de significado según las palabras que la acompañan**, mientras que las computadoras operan únicamente mediante operaciones matemáticas sobre vectores numéricos.

A continuación se analizan sus diferencias estructurales, su funcionamiento técnico y sus ventajas operativas:



### Embeddings estáticos 
**Una palabra, un único vector fijo**

Los embeddings estáticos (surgidos con fuerza en la década de 2010 a través de modelos como **Word2Vec**, **GloVe** y **FastText**) asignan a cada término del vocabulario **una única representación vectorial permanente** aprendida durante su entrenamiento previo. 

* **Mecanismo:** El modelo crea una tabla de consulta (*lookup table*). Cada vez que la palabra aparece en un texto, el sistema extrae exactamente la misma lista de números, sin importar la oración en la que se encuentre.

* **Capacidades:** Permiten capturar similitudes semánticas generales y relaciones analógicas notables mediante álgebra lineal.

* **Su gran limitación (El problema de la polisemia):** Carecen de comprensión contextual profunda y fallan al procesar palabras con múltiples significados.
  * *Ejemplo clásico:* Si analizamos la palabra **"banco"** en las frases *"Fui al banco a depositar dinero"* y *"Nos sentamos en un banco de la plaza"*, un modelo estático le asignará **exactamente el mismo vector numérico** a ambas instancias. Mezcla en un único punto matemático el concepto de entidad financiera con el de mobiliario urbano, degradando la precisión de búsqueda y análisis.

  * *Otro ejemplo:* En consultas como *"los beneficios de Apple para la salud"* frente a *"el precio de las acciones de Apple"*, los embeddings estáticos no pueden discernir si se trata de la fruta o de la corporación tecnológica.



### Embeddings contextuales
**Vectores dinámicos calculados al vuelo**

Los embeddings contextuales (impulsados a partir de 2018 con **BERT**, **ELMo** y los modelos basados en la arquitectura **Transformer**) resuelven la limitación anterior generando representaciones vectoriales que **cambian dinámicamente según la oración completa y las palabras circundantes**.

* **Mecanismo:** Se fundamentan en el **mecanismo de autoatención (*self-attention*)**. El modelo no mira la palabra de forma aislada; procesa la secuencia en paralelo y calcula cómo influye cada token sobre todos los demás.

* **Resolución de la polisemia:** Siguiendo el ejemplo anterior, el Transformer conecta "banco" con "dinero" y "depositar" en la primera frase, proyectando un vector asociado a finanzas; en la segunda frase, la autoatención vincula "banco" con "plaza" y "sentamos", generando un vector completamente diferente orientado a mobiliario.

* **Direccionalidad:** Modelos contextuales como BERT emplean un enfoque **bidireccional**, lo que significa que evalúan simultáneamente el contexto que está a la izquierda (palabras previas) y a la derecha (palabras posteriores) del término analizado para construir su representación final.


### Cuadro Comparativo

| Criterio | Embeddings Estáticos | Embeddings Contextuales |
| :--- | :--- | :--- |
| **Modelos de referencia** | Word2Vec, GloVe, FastText. | BERT, RoBERTa, OpenAI embeddings (ada/small/large), Cohere, Mistral. |
| **Comportamiento del vector** | **Fijo e inmutable:** La palabra siempre tiene el mismo vector, independientemente del contexto de entrada. | **Dinámico:** El vector de una palabra varía según los términos que la rodean en la secuencia. |
| **Manejo de polisemia y homonimia** | Deficiente; promedia o confunde múltiples acepciones. | Excelente; desambigua el significado exacto según la frase. |
| **Arquitectura subyacente** | Redes neuronales superficiales (*shallow*), conteo de coocurrencias globales o n-gramas. | Redes profundas basadas en **Transformers** y mecanismos de atención/autoatención. |
| **Costo computacional** | Muy bajo (rápido de consultar mediante tablas de índices). | Alto (intensivo en cómputo, requiere inferencia de redes neuronales). |
| **Uso en sistemas modernos (RAG)** | Secundario; se reservan para tareas ligeras o como filtro léxico inicial. | **Estándar de la industria**; esenciales para la recuperación semántica de alta precisión en bases de datos vectoriales. |

---

### Impacto en la práctica 
**(Sistemas RAG y Sector Público)**

En las arquitecturas modernas de **Generación Aumentada por Recuperación (RAG)** y búsqueda en bases de datos vectoriales, el uso de embeddings contextuales es el estándar absoluto. Si un funcionario formula una consulta compleja con terminología jurídica ambigua, los embeddings contextuales permiten que el sistema recupere con exactitud los fragmentos normativos relevantes sin confundirse por coincidencias superficiales de palabras.

