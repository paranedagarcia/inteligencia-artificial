
{
  "position": 2.5,
  "label": "Tutorial",
  "collapsible": true,
  "collapsed": false,
  "className": "red",
  "link": {
    "type": "generated-index",
    "title": "Tutorial overview"
  },
  "customProps": {
    "description": "This description can be used in the swizzled DocCard"
  }
}

📁 📦 📚 

# Notas

import YouTubeVideo from '@site/src/components/YouTubeVideo';

<YouTubeVideo id="iNoOj41oRYY" title="Etica y regulación en la IA" />

:::info[🖥️ Código:]
[![](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1ZTL7UKsr7hzdVyqjgRQqiYWqeWjm5J4Z)
:::

--- columnas
<div class="container">
  <div class="row">
    <div class="col col--7">
    </div>
    <div class="col col--5">
    </div>
  </div>
</div>
----
<center>
<figure>
![](img)
<figcaption></figcaption>
</figure>
</center>

<details>
<summary>🖥️ Código</summary>

</details>

<br />
#### 🖥️ Código:
<Tabs>
<TabItem value="ph" label="Antecedentes" default>
<div class="alert alert--primary">
**Modelado básico:** 

</div>
</TabItem>
<TabItem value="ph-python" label="Pyhton" >
```python showLineNumbers
# Implementación en Python
```
</TabItem>
<TabItem value="ph-python" label="Pyhton" >
```python showLineNumbers
# Implementación en Python
```
</TabItem>
</Tabs>

<br />
<Tabs>
<TabItem value="abs1" label="Ejercicio" default>
<div class="alert alert--primary">

</div>
</TabItem>
<TabItem value="abs1-python" label="🖥️ Código" >

```python showLineNumbers

```
</TabItem>
</Tabs>


---
<br />
<Tabs>
<TabItem value="ej1" label="Ejercicio" default>
<div class="alert alert--primary">

</div>
</TabItem>
<TabItem value="ej1-python" label="🖥️ Código" >

```python showLineNumbers

```
</TabItem>
<TabItem value="ej1-text" label="📄 Detalle" >


</TabItem>
</Tabs>



¿Cómo ayuda el Prompt Engineering a evitar alucinaciones?

¿Cuáles son los pasos para crear un prompt maestro?
Dame un ejemplo de prompt con la estructura CRTF

¿Cómo ayuda el Chain of Thought a reducir alucinaciones?

¿Cómo se estructuran las plantillas maestras según el ejercicio?

¿Qué criterios se usan para evaluar el desempeño del prompt?

¿Cuáles son las fases para optimizar prompts en marketing?

¿Qué elementos obligatorios debe tener un prompt según el manual?

## CRTF

¿Cómo se integra el esquema CRTF en el ciclo de vida de la IA?
Dame un ejemplo de prompt Few-Shot usando el esquema CRTF
¿Qué desafíos de personalización enfrentó María en su caso de estudio?

¿Cómo se define y Qué importancia tiene el Formato en una instrucción CRTF?

¿Cómo se vincula el CRTF con la ISO 42001?

¿Cómo mejora el CRTF la productividad según el ejercicio?

¿Cómo se aplica el CRTF en blogs y emails?
¿Qué dice la ISO 42001 sobre roles y responsabilidades?


##
¿Qué restricciones se deben incluir en un prompt maestro?
¹Cómo se mide la precisión en la mejora continua?
¿Qué es la biblioteca de prompts segùn el ejercicio?
¿Qué restricciones puedo añadir a una plantilla maestra?

¿Qué elementos incluye una plantilla maestra de prompt?
¿Cómo se define el Apetito de Riesgo según ISO 42001?
¿En qué consiste el sistema de versionado de prompts?

¿Qué es la ventana de contexto y por qué importa?
¿Cómo se calcula el costo de un prompt en tokens?
Dame un ejemplo de cómo se tokeniza una palabra compleja

¿Cómo se tokeniza una palabra en otro idioma?
¿Cuál es el límite de tokens en GPT-4?
¿Cómo afectan los tokens al costo de la IA?

¿Cómo se aplica el esquema CRTF en blogs corporativos?
¿Qué controles establece la ISO 42001 para recursos humanos?

Embeddings

¿Cómo se calcula la similitud del coseno entre embeddings?
Explícame más sobre las bases de datos vectoriales
¿Qué diferencias hay entre embeddings estáticos y contextuales?

vectoriales

¿Cómo se combinan las bases de datos vectoriales con los modelos de lenguaje?
¿Cuál es la diferencia entre los embeddings estáticos y los contextuales?
Explícame cómo funciona el proceso de chunking en RAG

💡 Si te interesa la parte práctica, podemos ver un ejemplo de código en Python utilizando **ChromaDB** o **FAISS** con LangChain para indexar una colección de textos y ejecutar una búsqueda semántica filtrada por metadatos.

### RAG

 Si deseas profundizar, podemos agregar una capa de búsqueda híbrida con BM25 o estructurar una rutina de evaluación cuantitativa con el framework Ragas para medir la exactitud (faithfulness) y relevancia del contexto de este pipeline.

¿Cómo funciona la búsqueda híbrida en RAG?
¿Cuáles son las diferencias entre BM25 y la recuperación densa?

Cuéntame más sobre RAG avanzado
¿Cómo funciona la evaluación RAG?
Explícame el stack de RAGOps

avanzado

Háblame más sobre Dense Retrieval
¿Cómo funciona la búsqueda híbrida?
Muéstrame ejemplos de Sparse Retrieval
Cuéntame más sobre BM25
¿Qué es la búsqueda densa?

💡 Si te parece útil, podemos desarrollar una función en Python para implementar **Reciprocal Rank Fusion (RRF)** desde cero y ver matemáticamente cómo se combinan las listas ordenadas de una búsqueda BM25 y una búsqueda vectorial.

💡 Si deseas profundizar, podemos revisar la fórmula de **Reciprocal Rank Fusion (RRF)** con un ejemplo numérico concreto o ver cómo implementarlo en Python usando la clase `EnsembleRetriever` de LangChain.