---
id: prompt-cot
title: "Chain of Thought (CoT)"
sidebar_label: "🗒️ Chain of Thought"
description: "Chain of Thought"
---

## **CoT**

La técnica de **Cadena de Pensamiento** (conocida ampliamente por su denominación en inglés: ***Chain-of-Thought* o CoT**) es una de las metodologías más influyentes en la ingeniería de *prompts* y el aprovechamiento de modelos de lenguaje grande (LLM). 

Es una técnica avanzada de prompt engineering que consiste en guiar al modelo para que explique su razonamiento paso a paso antes de llegar a una conclusión. Esta metodología es especialmente útil para tareas complejas que requieren análisis lógico, matemático o de múltiples etapas. 

Introducida formalmente en 2022 por investigadores de Google (Jason Wei et al.), CoT consiste en **instruir explícitamente al modelo de inteligencia artificial para que genere pasos intermedios de razonamiento lógico antes de emitir una respuesta definitiva**, en lugar de forzarlo a saltar de manera directa a una conclusión.

La técnica de Chain of Thought (CoT) o "Cadena de Pensamiento" es una de las estrategias más eficaces del prompt engineering para mitigar las alucinaciones (generación de información falsa pero convincente).

Esta mejora en la veracidad de los modelos se produce a través de los siguientes mecanismos:

#### Descomposición de Tareas Complejas
En lugar de forzar al modelo a predecir una respuesta final compleja de una sola vez, el CoT le instruye explícitamente a **desglosar el problema en pasos intermedios y manejables**. Al abordar cada parte individualmente, se reduce la probabilidad de que el modelo cometa errores de razonamiento que deriven en una alucinación.

#### Detección de Errores de Lógica
El CoT permite que el modelo actúe de manera más sistemática. En escenarios donde una pregunta directa podría inducir a una alucinación (como preguntas con premisas falsas o trucos), obligar al modelo a pensar paso a paso puede ayudarle a "descubrir un error" en su propio proceso lógico antes de entregar la respuesta final.

#### Mejora en la Interpretabilidad (Auditoría)
Dado que el modelo muestra su "proceso de pensamiento" o razonamiento interno, el usuario puede realizar un seguimiento de los pasos seguidos. Esto proporciona un rastro de auditoría que facilita identificar exactamente dónde falló la lógica de la IA, permitiendo al humano depurar el resultado y no aceptar una conclusión falsa como verdadera.

#### Sinergia con la Auto-consistencia
El CoT se vuelve aún más poderoso cuando se combina con la técnica de Auto-consistencia (Self-Consistency). Este método consiste en:

- Generar múltiples cadenas de razonamiento diversas para un mismo problema.
- Evaluar los distintos resultados obtenidos.
- Seleccionar la respuesta más frecuente o consistente mediante una "votación de mayoría".

Esta combinación reduce drásticamente las alucinaciones al ignorar caminos de razonamiento únicos o "defectuosos" que podrían haber surgido en un solo intento.

#### Limitaciones a considerar
A pesar de sus beneficios, el CoT no elimina las alucinaciones por completo. En algunos casos, especialmente en modelos más pequeños, la técnica puede ser contraproducente, ya que el modelo puede llegar a alucinar razonamientos fallidos que parecen lógicos pero son incorrectos. Por ello, se recomienda validar siempre los resultados, especialmente en tareas críticas.

### Fundamentos Teóricos
**¿Por qué funciona Chain-of-Thought?**

Para comprender el impacto de CoT en una audiencia sin conocimientos técnicos previos, conviene analizar cómo opera un modelo fundacional a nivel computacional:

*   **El problema de la respuesta directa (*Greedy Decoding*):** Por defecto, un modelo de lenguaje opera de forma autorregresiva: predice el siguiente fragmento de texto (*token*) en función de las probabilidades estadísticas aprendidas durante su entrenamiento. Si a un modelo se le plantea un problema que requiere varios pasos de deducción y se le pide únicamente el resultado final, el sistema intentará adivinar la solución en un solo cómputo inmediato sin disponer del espacio textual para estructurar la inferencia. Esto suele derivar en errores de cálculo aritmético, fallas en deducciones lógicas o **alucinaciones**.

*   **La computación en tiempo de inferencia (*Test-Time Compute*):** CoT obliga al modelo a generar primero una secuencia de *tokens* que describen su línea de razonamiento interno. Como cada palabra que el modelo escribe se incorpora automáticamente a su contexto de entrada para predecir las palabras siguientes, la respuesta final no se formula en el vacío, sino que se apoya en los argumentos, deducciones y cálculos matemáticos que el propio modelo acaba de redactar. A este principio en la literatura especializada se le denomina **"darle tiempo al modelo para pensar"**.

*   **Habilidad emergente:** Esta capacidad no suele funcionar de forma consistente en modelos de lenguaje diminutos; se manifiesta como una **habilidad emergente** en modelos con suficiente escala de parámetros y entrenamiento avanzado, permitiéndoles equiparar el razonamiento humano deliberado frente al mero emparejamiento estadístico de patrones.



### Modalidades de Implementación

Existen tres formas principales de implementar la técnica de Chain-of-Thought en la práctica:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ MODALIDADES DE CHAIN-OF-THOUGHT                                                        │
├────────────────────────────────┬───────────────────────────────────────────────────────┤
│ 1. Zero-Shot CoT               │ Se añade una directriz inductora universal             │
│    (Sin ejemplos previos)      │ (ej. "Pensemos paso a paso") sin dar muestras.        │
├────────────────────────────────┼───────────────────────────────────────────────────────┤
│ 2. Few-Shot CoT                │ Se proveen 1 o más ejemplos resueltos detallando       │
│    (Con ejemplos de muestra)   │ tanto las premisas como el razonamiento y la solución. │
├────────────────────────────────┼───────────────────────────────────────────────────────┤
│ 3. CoT Guiado / Estructurado   │ Se definen fases o restricciones analíticas            │
│    (Por etapas de control)     │ específicas que el modelo debe agotar obligatoriamente.│
└────────────────────────────────┴───────────────────────────────────────────────────────┘
```



### Ejemplos de Implementación

A continuación se presentan ejemplos representativos que ilustran cómo pasar de instrucciones convencionales fallidas a implementaciones eficaces de CoT.

#### Ejemplo 1: Deducción Lógica y Resolución de Problemas (Zero-Shot CoT)
Es la formulación más sencilla y accesible. Basta con anexar al final de la consulta una instrucción como *"Pensemos paso a paso"* o *"Explica tu razonamiento antes de responder"*.

*   **Enfoque Convencional (Monolítico / Sin CoT):**
    > *Prompt:* *"Cuando yo tenía 6 años, mi hermano tenía la mitad de mi edad. Ahora tengo 70 años. ¿Cuántos años tiene mi hermano?"*
    >
    > *Respuesta habitual del modelo sin razonar:* *"Tu hermano tiene 35 años."* (Error común: el modelo asocia apresuradamente la palabra "mitad" y divide 70 entre 2).

*   **Implementación con Zero-Shot CoT:**
    > *Prompt:* *"Cuando yo tenía 6 años, mi hermano tenía la mitad de mi edad. Ahora tengo 70 años. ¿Cuántos años tiene mi hermano? **Razona paso a paso antes de dar tu respuesta final.**"*
    >
    > *Respuesta estructurada del modelo:*
    > 1. *Paso 1: Cuando yo tenía 6 años, mi hermano tenía la mitad de mi edad, es decir, \\(6 \div 2 = 3\\) años.*
    > 2. *Paso 2: La diferencia de edad entre nosotros es fija: \\(6 - 3 = 3\\) años de diferencia.*
    > 3. *Paso 3: Si ahora tengo 70 años, mi hermano debe tener \\(70 - 3 = 67\\) años.*
    > 
    > ***Respuesta final:*** *Tu hermano tiene 67 años.*


#### Ejemplo 2: Razonamiento Aritmético con Muestras (Few-Shot CoT)
Cuando la tarea involucra un formato numérico o analítico estricto, proporcionar ejemplos resueltos (*Few-Shot*) que incluyan la cadena de pensamiento enseña al modelo la estructura mental esperada.

*   **Plantilla del Prompt con Few-Shot CoT:**
    ```text
    Resuelve los siguientes problemas matemáticos y de inventario detallando el razonamiento:

    Pregunta: En la sala de servidores había 9 computadores. De lunes a jueves se instalaron 5 computadores cada día. ¿Cuántos computadores hay ahora en la sala?
    Razonamiento: De lunes a jueves hay 4 días transcurridos. Si se añadieron 5 computadores por día, el total instalado es 4 * 5 = 20 computadores. Como inicialmente había 9, la cantidad total es 9 + 20 = 29 computadores.
    Respuesta: Hay 29 computadores en la sala.

    Pregunta: Un departamento público dispone de un presupuesto inicial de $50.000 dólares para licitaciones. En la primera ronda aprueba 3 órdenes de compra por $8.000 dólares cada una. En la segunda ronda aprueba un adicional de $12.000 dólares. ¿Cuánto saldo presupuestario queda disponible?
    Razonamiento: 
    ```

*   **Comportamiento del Modelo:** El modelo reproducirá la estructura del razonamiento intermedio:
    1. Calculará el gasto de la primera ronda: \\(3 \times \$8.000 = \$24.000\\).
    2. Sumará el gasto adicional: \\(\$24.000 + \$12.000 = \$36.000\\).
    3. Restará el total acumulado al presupuesto inicial: \\(\$50.000 - \$36.000 = \$14.000\\).
    4. Concluirá de forma exacta: *Quedan disponibles \$14.000 dólares*.

---

#### Ejemplo 3: Aplicación en la Gestión Pública y Auditoría Normativa (CoT Guiado)
En la administración del Estado, el razonamiento paso a paso es una salvaguarda esencial para auditar decisiones, emitir dictámenes y mitigar el sesgo de automatización. En lugar de un vago *"evalúa este caso"*, se guía al modelo a través de etapas metodológicas:

*   **Prompt Maestro en Formato CRTF con CoT Explícito:**
    ```text
    # Contexto:
    Eres un asesor técnico y de probidad encargado de revisar expedientes administrativos de compras públicas bajo el marco de contratación estatal. El expediente a revisar es: """[TEXTO_DEL_EXPEDIENTE]"""

    # Rol:
    Auditor Especialista en Transparencia e Integridad Pública.

    # Tarea:
    Evalúa si la licitación cumple con las directrices de libre concurrencia o si presenta anomalías. Aplica de forma obligatoria la siguiente Cadena de Pensamiento estructurada:
    - Paso 1 (Extracción de Hechos): Enumera los plazos de postulación, los requisitos técnicos exigidos y la cantidad de oferentes presentados.
    - Paso 2 (Contraste Normativo): Compara los hechos del Paso 1 frente al reglamento vigente, señalando si los plazos son inferiores a los mínimos legales o si las bases limitan injustificadamente la competencia.
    - Paso 3 (Ponderación de Riesgo): Evalúa el impacto de las discrepancias halladas y clasifica el riesgo institucional como Bajo, Medio o Alto.
    - Paso 4 (Conclusión y Recomendación): Proporciona la resolución final sugerida para el supervisor humano (HITL).

    # Formato:
    Estructura tu respuesta exactamente bajo los encabezados de los Pasos 1 al 4 en formato Markdown.
    ```



#### Ejemplo 4: Implementación Programática con LangChain y LCEL
En entornos de desarrollo de software, se suele orquestar CoT separando el razonamiento interno de la respuesta final de cara al usuario final mediante cadenas de **LangChain**:

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

# 1. Definir el modelo con temperatura 0 para tareas deterministas
llm = ChatOpenAI(model="gpt-4o", temperature=0)

# 2. Plantilla de razonamiento CoT delimitado
template_cot = """Eres un asistente analítico riguroso.
Ante la consulta del usuario, debes razonar de manera metódica.

Estructura tu respuesta estrictamente en dos bloques:
THINKING:
Desglosa aquí tu análisis lógico paso a paso, evaluando premisas y cálculos intermedios.

ANSWER:
Escribe aquí únicamente la respuesta concisa y definitiva derivada del análisis anterior.

Consulta:
{consulta}
"""

prompt = ChatPromptTemplate.from_template(template_cot)

# 3. Ensamblaje de la cadena ejecutable con LCEL
cadena_cot = prompt | llm | StrOutputParser()

# 4. Invocación
resultado = cadena_cot.invoke({"consulta": "Un servidor procesa 120 transacciones por minuto. Si la demanda sube un 25% y se agrega un segundo servidor con 80% de la capacidad del primero, ¿cuántas transacciones por minuto pueden procesar en conjunto?"})
print(resultado)
```



### Mejores Prácticas
**Extensiones Avanzadas**

1. **La Respuesta Siempre Después del Razonamiento:** En CoT, la conclusión debe posicionarse siempre al final del texto generado. Si se le solicita al modelo colocar la respuesta en la primera línea y luego justificarla, el sistema se verá forzado a predecir la solución sin haberse beneficiado de los *tokens* de pensamiento intermedio.

2. **Control de Temperatura:** Para tareas que involucran matemáticas, lógica formal o cumplimiento de normativas, se recomienda configurar la **temperatura en 0** para maximizar la consistencia probabilística (*greedy decoding*) y evitar desvíos creativos.

3. **Autoconsistencia (*Self-Consistency CoT*):** En problemas altamente complejos, un único camino de CoT puede contener un error sutil. La técnica de *Self-Consistency* muestrea múltiples cadenas de CoT en paralelo (usando una temperatura más alta) y selecciona la respuesta definitiva mediante **votación por mayoría de consenso**.

4. **Evolución hacia Modelos de Razonamiento Nativos (*Reasoning Models*):** En la actualidad, modelos contemporáneos (como las series OpenAI o1/o3 o DeepSeek-R1) integran CoT a nivel arquitectónico y de entrenamiento mediante aprendizaje por refuerzo, generando *tokens de pensamiento privados* de forma nativa sin requerir que el usuario incluya obligatoriamente la frase "piensa paso a paso" en el *prompt*.
