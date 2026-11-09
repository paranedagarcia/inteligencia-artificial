La evaluación de un sistema **RAG (Retrieval-Augmented Generation)** requiere un enfoque integral y multidimensional. Dado que un RAG opera combinando dos procesos centrales —la **recuperación** de información externa y la **generación** textual del modelo de lenguaje—, su rendimiento debe medirse tanto de manera desacoplada en cada componente como de forma unificada de extremo a extremo.

Las métricas e indicadores de evaluación se agrupan en las siguientes categorías principales:

---

### 1. La Tríada RAG (*RAG Triad*) y Métricas Específicas
Popularizada por marcos como **TruEra/TruLens** y formalizada en herramientas como **RAGAS** y **ARES**, esta tríada analiza las interacciones cruzadas entre la **consulta del usuario (*query*)**, el **contexto recuperado (*context*)** y la **respuesta generada (*answer*)**:

```
                     [ Consulta del Usuario (Query) ]
                               /         \
                              /           \
           Relevancia del Contexto     Relevancia de la Respuesta
               (Context Relevance)         (Answer Relevance)
                            /               \
                           /                 \
       [ Contexto Recuperado ] ────────── [ Respuesta Generada ]
                               Fidelidad
                            (Faithfulness /
                             Groundedness)
```

1. **Relevancia del Contexto (*Context Relevance* / *Context Precision*):**
   * **¿Qué mide?:** Si la información buscada y extraída por el recuperador es pertinente y necesaria para la consulta, o si introduce ruido irrelevante.
   * **Cálculo:** Evalúa la proporción de fragmentos u oraciones útiles dentro del total del contexto recuperado. En marcos como RAGAS se estima calculando la razón entre las oraciones relevantes identificadas y el número total de oraciones en el contexto inyectado.
2. **Fidelidad o Fundamentación (*Faithfulness* / *Groundedness*):**
   * **¿Qué mide?:** Si la respuesta generada se adhiere de forma estricta a los hechos del contexto recuperado sin incurrir en alucinaciones o inventar información externa.
   * **Cálculo:** Se extraen las afirmaciones factuales que componen la respuesta y se divide la cantidad de afirmaciones respaldadas por el contexto entre el total de afirmaciones emitidas.
3. **Relevancia de la Respuesta (*Answer Relevance*):**
   * **¿Qué mide?:** Si la respuesta final atiende de forma directa, completa y concisa a la pregunta formulada por el usuario.
   * **Cálculo:** En marcos como RAGAS, se le solicita a un modelo evaluador generar múltiples preguntas sintéticas a partir de la respuesta final y se calcula la **similitud del coseno media** entre los embeddings de esas preguntas generadas y la consulta original.
4. **Cobertura (*Context Recall / Coverage*):**
   * **¿Qué mide?:** Mide en qué grado la respuesta integra todas las declaraciones relevantes presentes en el contexto recuperado (o frente a una respuesta de referencia/verdad fundamental), asegurando que no se omitan datos clave.

---

### 2. Métricas del Componente de Recuperación (*Retrieval Metrics*)
Evalúan de forma independiente qué tan efectivo es el motor de búsqueda (ya sea léxico como BM25, semántico por embeddings o híbrido):

* **Precision@k:** Proporción de documentos pertinentes entre los primeros \\(k\\) resultados recuperados. Es crítica para RAG porque solo los primeros \\(k\\) fragmentos se inyectan en el prompt para la fase de aumentación.
* **Recall / Recall@k:** Fracción de todos los documentos relevantes del corpus que el sistema logró recuperar exitosamente.
* **F1-Score:** Media armónica entre la precisión y la exhaustividad (\\(2 \times \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}\\)), que balancea la calidad de la recuperación con la cobertura.
* **Mean Reciprocal Rank (MRR):** Evalúa la posición o rango en el que aparece el **primer** documento relevante dentro de la lista de candidatos (\\(MRR = \frac{1}{N}\sum \frac{1}{\text{rango}_i}\\)). Es útil cuando encontrar una sola respuesta correcta de inmediato es suficiente.
* **Mean Average Precision (MAP):** Calcula el promedio de precisiones en diferentes niveles de corte de relevancia, premiando a los sistemas que posicionan los documentos pertinentes en los puestos más altos de la lista.
* **Normalized Discounted Cumulative Gain (nDCG / nDCG@k):** Evalúa la calidad del ranking considerando grados de relevancia no binarios (documentos muy relevantes vs. parcialmente relevantes) y aplicando una penalización logarítmica decreciente a medida que los documentos útiles descienden en el ranking.

---

### 3. Métricas del Componente de Generación Textual
Cuando se cuenta con un conjunto de datos con respuestas de referencia humana (*ground truth*), se aplican métricas analíticas sobre el texto final:

* **Métricas Léxicas y de Coincidencia:**
  * **Exact Match (EM):** Coincidencia binaria idéntica entre la salida generada y la respuesta esperada.
  * **ROUGE (ROUGE-1, ROUGE-2, ROUGE-L):** Mide la superposición de secuencias de palabras (\\(n\\)-gramas) y subsecuencias comunes más largas entre la respuesta y la referencia, evaluando la retención de contenido.
  * **BLEU:** Métrica de precisión basada en el conteo de \\(n\\)-gramas coincidentes, penalizando textos excesivamente cortos mediante el factor *brevity penalty*.
* **Métricas Semánticas Basadas en Embeddings:**
  * **BERTScore:** Evalúa la similitud semántica calculando la distancia coseno entre las representaciones vectoriales densas de los tokens de la respuesta y de la referencia, tolerando paráfrasis y sinónimos.
* **Propiedades Lingüísticas Cualitativas:**
  * **Coherencia y Fluidez:** Evalúan la estructura gramatical, la legibilidad y la progresión lógica entre párrafos.
  * **Concisión:** Verifica que la respuesta sea directa y evite redundancias innecesarias que encarezcan los costos de tokens.

---

### 4. Evaluación de Capacidades Críticas del Sistema (Robustez)
En evaluaciones de frontera (como el benchmark **RGB** de RAG), el sistema se somete a pruebas de estrés para medir cuatro habilidades avanzadas:

1. **Robustez ante el Ruido (*Noise Robustness*):** La capacidad del modelo para separar documentos distractores o sin valor informativo y responder correctamente sin distraerse con información espuria.
2. **Rechazo Negativo (*Negative Rejection*):** La capacidad del sistema de declarar honestamente *"No tengo información suficiente en los documentos para responder"* cuando la base de conocimiento carece de los datos, evitando alucinar.
3. **Integración de Información (*Information Integration*):** La habilidad de recopilar, contrastar y sintetizar evidencia fragmentada proveniente de múltiples documentos distintos para componer una sola respuesta.
4. **Robustez Contrafactual (*Counterfactual Robustness*):** La capacidad de detectar imprecisiones o contradicciones manifiestas en los textos recuperados y advertir el error en lugar de propagarlo acríticamente.

---

### 5. Métricas Operativas, de Costo y Gobernanza
Para el despliegue en entornos de producción e instituciones públicas, el rendimiento se complementa con indicadores no funcionales:

* **Latencia y Tiempos de Respuesta:** Medición del tiempo total desde que ingresa la consulta hasta la emisión de la respuesta, desglosado en:
  * *Time to First Token (TTFT):* Tiempo requerido para que el LLM comience a emitir la primera palabra tras procesar la búsqueda y el prompt aumentado.
  * *Time Per Output Token (TPOT) y Throughput:* Velocidad de procesamiento y generación de tokens por segundo.
* **Costo Computacional por Consulta (*Cost per Query*):** Monitoreo del volumen de tokens consumidos (tanto en la entrada por la inyección de contexto como en la salida del modelo) y uso de memoria en las bases de datos vectoriales.
* **Seguridad y Mitigación de Sesgos:** Supervisión del contenido generado para garantizar la ausencia de sesgo, lenguaje tóxico o fuga de datos personales sensibles (PII).

---

### Resumen: Marcos y Herramientas Populares
Para calcular estas métricas de forma automatizada, los equipos utilizan herramientas como:
* **RAGAS** y **TruLens:** Especializados en evaluar de forma automatizada la tríada RAG (relevancia del contexto, fidelidad y relevancia de respuesta) mediante el enfoque *LLM-as-a-judge*.
* **ARES (*Automated RAG Evaluation System*):** Utiliza clasificadores calibrados mediante inferencia estadística (*Prediction-Powered Inference*) con intervalos de confianza.
* **Benchmarks Estandarizados:** Colecciones de prueba como **HotpotQA** (razonamiento multi-documento), **BEIR** (evaluación de motores de recuperación con nDCG@10), **RGB** y **CRAG** (evaluación exhaustiva con clasificación de respuestas en perfectas, aceptables, ausentes o incorrectas).

---

🎯 Si lo deseas, podemos preparar un script práctico en Python utilizando la biblioteca **Ragas** para calcular de manera automática la *Fidelidad* y la *Relevancia del Contexto* sobre un conjunto de prueba de tu documentación.

****
***

A continuación se presenta una guía práctica y ejecutable en **Python** para implementar una evaluación cuantitativa y automatizada de un sistema **RAG** utilizando la biblioteca especializada **Ragas** (*Retrieval Augmented Generation Assessment*). 

Este ejercicio permite calcular matemáticamente dos de los pilares más críticos de la Tríada RAG:
1. **Fidelidad (*Faithfulness*):** Verifica si la respuesta generada por el modelo se basa exclusivamente en el contexto recuperado (ausencia de alucinaciones).
2. **Relevancia del Contexto (*Context Relevance* o *Context Precision*):** Evalúa si los fragmentos extraídos por el motor de búsqueda son pertinentes para la pregunta del usuario o si contienen ruido informativo innecesario.

---

### 1. Preparación del Entorno

En tu terminal o entorno de desarrollo local, instala las dependencias necesarias:

```bash
pip install ragas datasets langchain-openai
```

---

### 2. Estructura de Datos para la Evaluación

El marco Ragas opera sobre un conjunto de datos (*Dataset*) compuesto habitualmente por cuatro elementos:
*   `question`: La consulta introducida por el usuario o funcionario.
*   `contexts`: Una lista con los fragmentos de texto específicos que el sistema RAG recuperó de la base de conocimiento para esa pregunta.
*   `answer`: La respuesta final que redactó el modelo generativo.
*   `ground_truth` (opcional): La respuesta humana ideal o canónica para medir exhaustividad (*Context Recall*).

---

### 3. Script Completo de Evaluación

El siguiente código simula dos interacciones típicas en una institución pública:
*   **Caso 1 (Interacción de Alta Fidelidad):** El sistema responde con rigor utilizando únicamente la norma recuperada.
*   **Caso 2 (Interacción con Alucinación/Ruido):** El sistema añade afirmaciones que no están presentes en los documentos recuperados.

```python
import os
from datasets import Dataset
from ragas import evaluate
from ragas.metrics import faithfulness, context_precision, answer_relevance

# 1. Configurar las credenciales para el modelo evaluador (LLM-as-a-judge)
# Ragas utiliza por defecto un modelo de OpenAI para descomponer y calificar los enunciados
os.environ["OPENAI_API_KEY"] = "tu-clave-api-aqui"

# 2. Definición del conjunto de datos de prueba
datos_prueba = {
    "question": [
        # Caso 1: Consulta sobre requisitos de seguridad de IA en el sector público
        "¿Qué condiciones de seguridad técnica exige la normativa para experimentar con agentes de IA?",
        # Caso 2: Consulta sobre presupuestos de compras públicas
        "¿Cuál es el plazo mínimo de publicación para licitaciones públicas de tecnología?"
    ],
    "contexts": [
        # Contexto recuperado para el Caso 1
        [
            "Política de Ciberseguridad Institucional: La experimentación con agentes autónomos "
            "debe realizarse obligatoriamente dentro de contenedores Docker aislados (sandboxing). "
            "Asimismo, se debe desactivar el acceso abierto configurando GATEWAY_ALLOW_ALL_USERS=false "
            "y validar el ingreso mediante emparejamiento interactivo de códigos de un solo uso."
        ],
        # Contexto recuperado para el Caso 2
        [
            "Decreto de Contratación Pública: Las licitaciones de servicios tecnológicos de alta "
            "complejidad requieren un análisis de proporcionalidad técnica previo a la publicación "
            "de las bases administrativas en el portal de compras."
        ]
    ],
    "answer": [
        # Respuesta del Caso 1: Alineada al 100% con el contexto (Sin alucinaciones)
        "La normativa exige que las pruebas de agentes se ejecuten en contenedores Docker aislados, "
        "manteniendo bloqueado el acceso abierto global y autorizando a los funcionarios mediante "
        "códigos de emparejamiento de un solo uso.",
        
        # Respuesta del Caso 2: Contiene una alucinación (menciona un plazo de 30 días que NO está en el texto)
        "El plazo mínimo de publicación es de 30 días hábiles en el portal de compras, "
        "requiriendo además un análisis de proporcionalidad técnica previo."
    ],
    "ground_truth": [
        "Se requiere ejecución aislada en Docker, bloqueo del gateway abierto y emparejamiento por códigos únicos.",
        "El documento recuperado no especifica un plazo en días, solo exige un análisis de proporcionalidad técnica."
    ]
}

# 3. Conversión al formato Dataset de Hugging Face requerido por Ragas
dataset_evaluacion = Dataset.from_dict(datos_prueba)

# 4. Ejecución del pipeline de evaluación
print("Iniciando evaluación de métricas con Ragas...")
resultados = evaluate(
    dataset=dataset_evaluacion,
    metrics=[
        faithfulness,         # Mide fidelidad y alucinaciones (0.0 a 1.0)
        context_precision,    # Mide precisión del contexto recuperado (0.0 a 1.0)
        answer_relevance      # Mide si la respuesta atiende la pregunta (0.0 a 1.0)
    ]
)

# 5. Visualización de los resultados
df_resultados = resultados.to_pandas()
print("\n=== RESULTADOS DETALLADOS POR FILA ===")
print(df_resultados[["question", "faithfulness", "context_precision", "answer_relevance"]])

print("\n=== PROMEDIO GLOBAL DEL SISTEMA RAG ===")
print(resultados)
```

---

### 4. Interpretación de las Salidas Obtenidas

| Métrica | Comportamiento en Caso 1 | Comportamiento en Caso 2 | Significado Técnico |
| :--- | :---: | :---: | :--- |
| **Fidelidad (*Faithfulness*)** | **1.00** | **~0.50** | En el Caso 1, todas las afirmaciones provienen del texto. En el Caso 2, el evaluador descompone la respuesta en dos oraciones: valida el análisis de proporcionalidad, pero marca como no respaldada la afirmación de los *"30 días hábiles"*, reduciendo el puntaje a la mitad. |
| **Precisión del Contexto (*Context Precision*)** | **1.00** | **0.00 / Bajo** | En el Caso 1, el contexto aportado resolvía la pregunta. En el Caso 2, el fragmento no contenía la respuesta al plazo exacto, identificando que el motor de búsqueda recuperó información insuficiente. |
| **Relevancia de Respuesta (*Answer Relevance*)** | **Alto (>0.90)** | **Alto (>0.85)** | Ambos textos responden formalmente a lo preguntado, evidenciando que una respuesta puede parecer perfectamente relevante al usuario aun cuando contenga una alucinación fáctica. |

---

### 5. Recomendaciones de Integración en Procesos de Calidad

1. **Automatización en Integración Continua (CI/CD):** Este script se puede ejecutar cada vez que se modifique el tamaño de los fragmentos (*chunk size*), se cambie el modelo de *embeddings* o se ajuste el *prompt* maestro, impidiendo el despliegue a producción si la fidelidad cae por debajo de **0.95**.
2. **Evaluación Desacoplada sin Costo de API:** Si la institución requiere mantener todos los datos en infraestructura local por motivos de privacidad y soberanía de datos, es posible configurar Ragas para que utilice un modelo evaluador local (como Qwen o Llama desplegados en **vLLM** u **Ollama**) a través de las integraciones de LangChain.

---

📊 ¿Deseas que adaptemos este script para conectarlo directamente a una colección existente de ChromaDB o FAISS y automatizar las pruebas sobre tus documentos?

***
## RAG avanzado

El concepto de **RAG Avanzado** (*Advanced Retrieval-Augmented Generation*) surge como una respuesta técnica y arquitectónica para superar los cuellos de botella del **RAG tradicional o ingenuo (*Naïve RAG*)**.

En un flujo básico de RAG —el esquema lineal de *recuperar y generar*—, los sistemas suelen presentar tres fallas críticas en entornos reales:
1. **Baja precisión en la recuperación:** Se extraen fragmentos que contienen ruido o información tangencial que confunde al modelo de lenguaje (LLM).
2. **Bajo recuerdo o cobertura (*Low Recall*):** Se omiten fragmentos normativos o técnicos esenciales porque la consulta del usuario utilizó palabras distintas a las del documento fuente.
3. **Saturación del contexto y pérdida de información intermedia (*Lost-in-the-Middle*):** Al concatenar bloques de texto sin procesar, el LLM tiende a priorizar la información ubicada al principio o al final de la ventana de contexto, ignorando la evidencia situada en el centro.

Para resolver estos problemas, el RAG Avanzado transforma el pipeline lineal en un flujo modular basado en el paradigma **«Reescribir \\(\rightarrow\\) Recuperar \\(\rightarrow\\) Reordenar \\(\rightarrow\\) Leer»**, incorporando técnicas estructuradas en tres momentos clave del ciclo de vida de la información:

---

### 1. Fase de Pre-Recuperación (*Pre-Retrieval*)

Esta fase optimiza tanto los documentos antes de ser indexados como la consulta del usuario antes de consultar las bases de datos:

*   **Fragmentación Jerárquica (*Parent-Document Retrieval*):** 
    *   *El problema:* Fragmentos muy pequeños capturan la similitud matemática precisa de una frase, pero carecen del contexto amplio para que el LLM redacte una respuesta completa; por el contrario, fragmentos muy extensos diluyen la precisión del vector de *embedding*.
    *   *La solución:* Se divide el texto en dos niveles: fragmentos hijos pequeños (de 100 a 200 tokens) para la búsqueda vectorial rápida, vinculados a fragmentos padres más grandes (de 800 a 1.500 tokens). Al encontrar coincidencias en los fragmentos hijos, el sistema inyecta en el prompt el fragmento padre completo, preservando la coherencia global.
*   **Enriquecimiento Contextual del Fragmento (*Contextual Retrieval*):** 
    *   Antes de vectorizar un fragmento, un modelo de lenguaje le antepone una breve descripción (50 a 100 tokens) que explicita a qué sección, capítulo o norma pertenece ese bloque específico, evitando que párrafos aislados pierdan su sentido original.
*   **Transformación y Expansión de Consultas:**
    *   **Multi-Query:** Un LLM genera de 3 a 5 formulaciones alternativas con sinónimos y enfoques distintos de la pregunta del usuario, ejecutando búsquedas paralelas para maximizar la cobertura léxica y semántica.
    *   **Descomposición de Subconsultas (*Sub-Query Decomposition*):** Ante una pregunta compuesta (por ejemplo, comparar dos normativas distintas), el sistema la divide en dos preguntas simples, busca las respuestas de forma independiente y luego las sintetiza.
    *   **HyDE (*Hypothetical Document Embeddings*):** El LLM redacta primero un borrador de respuesta hipotética. Luego, se calcula el vector de ese documento hipotético para buscar en la base de datos vectorial, aprovechando que dos textos formales comparten mayor cercanía matemática en el espacio de *embeddings* que una pregunta corta frente a un párrafo extenso.
    *   **Enrutamiento Inteligente (*Query Routing*):** Un clasificador semántico determina si la consulta requiere una búsqueda vectorial densa, una consulta estructurada sobre una base de datos tabular (Text-to-SQL), una búsqueda en grafos o una consulta a una API externa.

---

### 2. Fase de Recuperación Avanzada (*Retrieval*)

Supera la dependencia exclusiva de la similitud del coseno sobre vectores densos mediante arquitecturas híbridas:

*   **Búsqueda Híbrida con Fusión Recíproca de Rangos (*Hybrid Search + RRF*):**
    *   Ejecuta en paralelo un motor de **recuperación densa** (mediante *embeddings* contextuales para capturar intenciones y conceptos abstractos) y un motor de **recuperación dispersa** (mediante algoritmos léxicos como **BM25** o *SPLADE*).
    *   BM25 rescata con precisión milimétrica términos exactos, códigos alfanuméricos, artículos normativos y nombres propios que los vectores densos tienden a diluir.
    *   Ambas listas de resultados se combinan de forma agnóstica mediante el algoritmo **Reciprocal Rank Fusion (RRF)**:
        \\[\text{RRF}(d) = \sum_{m \in M} \frac{1}{k + r_m(d)}\\]
        donde \\(r_m(d)\\) representa la posición o rango del documento en cada lista y \\(k\\) es una constante de suavizado (habitualmente fijada en 60), premiando a los documentos que se ubican en los primeros lugares de ambos rankings.
*   **Recuperación Recursiva e Iterativa:**
    *   El sistema no se detiene en una única búsqueda: evalúa si la información recuperada es suficiente y, de encontrar vacíos o referencias cruzadas a otros artículos o normativas, realiza búsquedas adicionales para completar la evidencia requerida (*multi-hop reasoning*).

---

### 3. Fase de Post-Recuperación (*Post-Retrieval*)

Trata el material recuperado antes de entregárselo al modelo de lenguaje generativo para evitar saturar la ventana de contexto con datos innecesarios:

*   **Reordenamiento con Modelos Cruzados (*Re-ranking / Cross-Encoders*):**
    *   Los modelos de *embeddings* comparan vectores de forma independiente (*Bi-Encoders*). Un *Re-ranker* (como *Cohere Rerank* o un *Cross-Encoder* especializado) procesa conjuntamente la consulta y cada fragmento en paralelo, calculando un puntaje de relevancia semántica profundo.
    *   *Flujo habitual:* El recuperador híbrido extrae un conjunto amplio de 20 a 30 candidatos iniciales; el *Re-ranker* los evalúa y selecciona estrictamente los 3 o 5 más relevantes.
*   **Compresión de Contexto (*Contextual Compression*):**
    *   Filtra los fragmentos para eliminar oraciones accesorias, extrayendo únicamente los enunciados y cifras indispensables para responder la pregunta, optimizando el consumo de tokens.
*   **Relevancia Marginal Máxima (*Maximal Marginal Relevance - MMR*):**
    *   Algoritmo que penaliza la redundancia semántica: si dos fragmentos dicen prácticamente lo mismo con distintas palabras, MMR selecciona el primero y descarta el segundo para dar espacio a información complementaria.

---

### 4. Nuevos Paradigmas: RAG Modular, Correctivo y GraphRAG

La evolución del RAG ha dado lugar a arquitecturas de mayor autonomía y especialización:

```
  Naïve RAG                RAG Avanzado                RAG Modular / Agéntico
┌──────────────┐         ┌──────────────────────┐    ┌───────────────────────────┐
│ Recuperar    │         │ Pre-Recuperación     │    │ Agente Orquestador        │
│      ▼       │  ───>   │ (HyDE, Multi-Query)  │───>│ (Routing, Subagentes,     │
│ Generar      │         │         ▼            │    │  Herramientas SQL/Vector) │
└──────────────┘         │ Búsqueda Híbrida     │    │         ▼                 │
                         │ (BM25 + Embeddings)  │    │ Corrective RAG (CRAG)     │
                         │         ▼            │    │ (Verificación externa)    │
                         │ Re-ranking           │    │         ▼                 │
                         │         ▼            │    │ GraphRAG                  │
                         │ Generación           │    │ (Razonamiento de grafos)  │
                         └──────────────────────┘    └───────────────────────────┘
```

*   **Corrective RAG (CRAG):** Incorpora un evaluador intermedio que clasifica los documentos recuperados como *correctos*, *ambiguos* o *incorrectos*. Si determina que los documentos internos son deficientes o insuficientes, activa de manera automatizada una búsqueda en la web para complementar el contexto y evitar que el LLM alucine.
*   **Self-RAG:** Entrena al modelo para emitir "tokens de reflexión" especiales que evalúan de forma autónoma cuándo necesita recuperar información externa, si el texto recuperado es relevante y si su propia respuesta está respaldada por la evidencia (*grounded*).
*   **GraphRAG (Knowledge Graph RAG):** Estructura los documentos en un **grafo de conocimiento** extrayendo entidades (personas, leyes, instituciones) y sus relaciones. Mientras que los vectores tradicionales solo encuentran fragmentos específicos, GraphRAG permite responder preguntas globales y transversales sobre un corpus completo (por ejemplo: *«¿Cuáles son las principales tendencias de riesgo identificadas en todos los informes de auditoría del último año?»*).
*   **Agentic RAG:** El sistema se comporta como un agente autónomo dotado de herramientas (bases vectoriales, terminales de código, APIs normativas) que planifica los pasos, formula hipótesis, verifica sus resultados y ejecuta múltiples iteraciones hasta dar por cumplido el objetivo de forma verificable.

---

### 5. Comparativa Técnica de los Enfoques

| Característica | Naïve RAG | RAG Avanzado | RAG Agéntico / Modular |
| :--- | :--- | :--- | :--- |
| **Mecanismo de búsqueda** | Vectorial denso simple (\\(k\\)-NN / HNSW). | Búsqueda Híbrida (BM25 + *Embeddings*) con RRF. | Enrutamiento dinámico (Vectores, Grafos, SQL, Web). |
| **Tratamiento de la consulta** | Consulta literal directa del usuario. | Expansión (Multi-Query), descomposición y HyDE. | Descomposición en submetas y planificación por pasos. |
| **Calidad del contexto** | Fragmentos fijos concatenados en el prompt. | Fragmentación jerárquica y *Re-ranking* con *Cross-Encoders*. | Selección iterativa, compresión contextual y evaluación activa. |
| **Manejo de consultas complejas** | Deficiente; alta tasa de alucinación y pérdida de datos. | Bueno; captura sinónimos, términos exactos y contexto padre. | Sobresaliente; resuelve problemas de razonamiento en múltiples saltos (*multi-hop*). |
| **Costo y latencia** | Mínimos (una sola llamada a la base y al LLM). | Moderados (múltiples búsquedas y llamada al *Re-ranker*). | Elevados (múltiples llamadas a modelos y bucles de razonamiento). |

---

💡 Si te interesa explorar la implementación de alguno de estos componentes, podemos desarrollar un ejemplo en Python mostrando cómo integrar un **Re-ranker** (con un *Cross-Encoder*) sobre los resultados de una búsqueda para optimizar los fragmentos que recibe el modelo de lenguaje.
