Sí. Para alumnos de **primer año de Informática**, recomiendo no comenzar directamente con redes neuronales complejas. El curso debe construir progresivamente tres capas de conocimiento: **fundamentos → construcción de redes → aplicaciones de Deep Learning**, introduciendo PyTorch, TensorFlow y Keras cuando el estudiante ya comprende qué está haciendo y no solamente qué código debe ejecutar.

# Curso: Deep Learning desde Cero con PyTorch, TensorFlow y Keras

### Propósito del curso

Desarrollar en el estudiante las competencias necesarias para **comprender, implementar, entrenar, evaluar y utilizar modelos de Deep Learning**, comenzando desde los fundamentos de redes neuronales artificiales y avanzando hacia arquitecturas modernas para problemas de clasificación, regresión, imágenes y texto.

El curso utiliza **Python** como lenguaje principal y aborda progresivamente:

* NumPy y manipulación de tensores.
* Conceptos matemáticos esenciales.
* Redes neuronales artificiales.
* Forward propagation y backpropagation.
* Funciones de activación.
* Funciones de pérdida.
* Optimización y descenso de gradiente.
* Regularización.
* Redes convolucionales.
* Transfer Learning.
* Redes recurrentes y modelos secuenciales.
* Introducción a Transformers.
* PyTorch.
* TensorFlow.
* Keras.
* Evaluación y despliegue de modelos.

---

# 1. Objetivos de aprendizaje

Al finalizar el curso, el estudiante debería ser capaz de:

1. Explicar qué es Machine Learning y cómo Deep Learning se relaciona con él.
2. Comprender conceptualmente una neurona artificial.
3. Explicar cómo una red neuronal aprende a partir de datos.
4. Manipular tensores utilizando Python.
5. Construir redes neuronales desde código.
6. Entrenar modelos utilizando **PyTorch**.
7. Construir modelos utilizando **TensorFlow/Keras**.
8. Comparar las principales características de PyTorch, TensorFlow y Keras.
9. Resolver problemas de clasificación y regresión.
10. Construir redes convolucionales para imágenes.
11. Aplicar técnicas de regularización y optimización.
12. Utilizar modelos preentrenados mediante Transfer Learning.
13. Interpretar métricas de entrenamiento y validación.
14. Detectar problemas como overfitting y underfitting.
15. Diseñar un pequeño proyecto de Deep Learning de principio a fin.

---

# 2. Enfoque pedagógico

Para primer año utilizaría una estructura de aprendizaje **70 % práctica / 30 % conceptual**.

Cada unidad seguiría aproximadamente este ciclo:

**Concepto → ejemplo sencillo → código → experimento → interpretación → desafío**

Por ejemplo:

> ¿Qué es una neurona?

↓

Se presenta una situación sencilla:

> Un sistema debe determinar si un estudiante aprueba o reprueba utilizando horas de estudio y asistencia.

↓

Se construye una función matemática.

↓

Se convierte en una neurona.

↓

Se implementa en Python.

↓

Se implementa nuevamente en PyTorch.

↓

Se implementa nuevamente en TensorFlow/Keras.

Esto permite que el estudiante comprenda que **los frameworks no reemplazan los conceptos**, sino que automatizan gran parte de su implementación.

---

# 3. Temario general: de cero a avanzado

Propongo dividir el curso en **12 módulos progresivos**.

| Módulo | Tema                                      | Nivel      |
| ------ | ----------------------------------------- | ---------- |
| 1      | Introducción a IA, ML y Deep Learning     | Inicial    |
| 2      | Matemáticas y Python para Deep Learning   | Inicial    |
| 3      | Tensores y datos                          | Inicial    |
| 4      | Neuronas artificiales                     | Básico     |
| 5      | Redes neuronales y entrenamiento          | Básico     |
| 6      | PyTorch                                   | Intermedio |
| 7      | TensorFlow y Keras                        | Intermedio |
| 8      | Evaluación, optimización y regularización | Intermedio |
| 9      | Redes convolucionales                     | Intermedio |
| 10     | Transfer Learning y Computer Vision       | Avanzado   |
| 11     | Deep Learning para secuencias y texto     | Avanzado   |
| 12     | Arquitecturas modernas y proyecto final   | Avanzado   |

---

# MÓDULO 1 — Introducción a Inteligencia Artificial y Deep Learning

### 1.1 ¿Qué es Inteligencia Artificial?

* Inteligencia Artificial.
* Machine Learning.
* Deep Learning.
* Relación entre IA, ML y DL.
* Aprendizaje supervisado.
* Aprendizaje no supervisado.
* Aprendizaje por refuerzo.

### 1.2 Machine Learning tradicional vs Deep Learning

Ejemplo:

**Machine Learning tradicional**

```text
Datos
 ↓
Características
 ↓
Modelo ML
 ↓
Predicción
```

**Deep Learning**

```text
Datos
 ↓
Red neuronal
 ↓
Representaciones
 ↓
Predicción
```

### 1.3 Aplicaciones

* Reconocimiento de imágenes.
* Reconocimiento de voz.
* Procesamiento de lenguaje natural.
* Sistemas de recomendación.
* Medicina.
* Finanzas.
* Robótica.
* Vehículos autónomos.
* Generación de contenido.

### Práctica

Primer modelo conceptual:

> Clasificar estudiantes como "aprueba" / "no aprueba".

---

# MÓDULO 2 — Fundamentos matemáticos y Python

No recomiendo convertir este módulo en un curso de cálculo. El objetivo es entregar **las matemáticas mínimas necesarias para entender una red neuronal**.

### 2.1 Vectores

```text
x = [2, 4, 6]
```

### 2.2 Matrices

```text
X =
[1 2]
[3 4]
[5 6]
```

### 2.3 Producto punto

$$
z = w_1x_1+w_2x_2+b
$$

### 2.4 Funciones

* Función lineal.
* Función sigmoide.
* ReLU.
* Softmax.

### 2.5 Derivadas

Conceptualmente:

> La derivada indica cómo cambia una función cuando cambia una variable.

### 2.6 Gradiente

Introducción al concepto:

$$
\nabla f(x)
$$

### 2.7 Python científico

* NumPy.
* Arrays.
* Broadcasting.
* Matrices.
* Operaciones vectorizadas.
* Pandas.
* Matplotlib.

### Práctica

Implementar una regresión lineal utilizando solamente NumPy.

---

# MÓDULO 3 — Tensores y representación de datos

Este módulo es especialmente importante porque **los tres frameworks trabajan fundamentalmente con tensores**.

### 3.1 ¿Qué es un tensor?

Explicación progresiva:

```text
Escalar → 0 dimensiones

Vector → 1 dimensión

Matriz → 2 dimensiones

Imagen → 3 dimensiones

Lote de imágenes → 4 dimensiones
```

Por ejemplo:

```text
(batch, height, width, channels)
```

### 3.2 Operaciones

* Crear tensores.
* Shape.
* Reshape.
* Slicing.
* Broadcasting.
* Multiplicación.
* Suma.
* Media.
* Máximo.
* Mínimo.

### 3.3 CPU vs GPU

Concepto de aceleración mediante GPU.

### Práctica

Crear y manipular imágenes representadas como tensores.

---

# MÓDULO 4 — La neurona artificial

Aquí comienza realmente Deep Learning.

## 4.1 El modelo de una neurona

$$
z = w_1x_1+w_2x_2+\dots+w_nx_n+b
$$

Después:

$$
y=f(z)
$$

### 4.2 Componentes

* Entrada.
* Pesos.
* Bias.
* Función de activación.
* Salida.

### 4.3 Funciones de activación

#### Sigmoid

$$
\sigma(x)=\frac{1}{1+e^{-x}}
$$

#### ReLU

$$
ReLU(x)=max(0,x)
$$

#### Tanh

$$
tanh(x)
$$

#### Softmax

Para clasificación multiclase.

### Práctica

Construir una neurona **manualmente con NumPy**.

Esto es pedagógicamente muy importante antes de utilizar PyTorch.

---

# MÓDULO 5 — Redes neuronales y aprendizaje

### 5.1 De una neurona a una red

```text
Input Layer
     ↓
Hidden Layer
     ↓
Hidden Layer
     ↓
Output Layer
```

### 5.2 Forward propagation

El estudiante debe entender:

```text
Entrada
 ↓
Pesos
 ↓
Activación
 ↓
Salida
```

### 5.3 Funciones de pérdida

* MSE.
* Binary Cross Entropy.
* Categorical Cross Entropy.

### 5.4 Descenso de gradiente

Concepto:

$$
w_{nuevo}=w_{actual}-\eta\nabla L
$$

### 5.5 Backpropagation

Explicación conceptual de:

* Error.
* Gradiente.
* Regla de la cadena.
* Actualización de pesos.

### 5.6 Epoch, batch e iteration

Muy importante para comprender el entrenamiento.

### 5.7 Learning rate

Experimentos con:

```text
learning_rate = 0.1
learning_rate = 0.01
learning_rate = 0.001
```

### Proyecto práctico

Construir una red neuronal **sin framework**, utilizando solamente NumPy.

---

# MÓDULO 6 — Deep Learning con PyTorch

Aquí introduciría formalmente PyTorch.

### 6.1 Introducción a PyTorch

* Tensores.
* `torch.Tensor`.
* CPU/GPU.
* Autograd.
* Dataset.
* DataLoader.
* `nn.Module`.
* Optimizers.

### 6.2 Primera red neuronal

Ejemplo conceptual:

```python
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(2, 8),
    nn.ReLU(),
    nn.Linear(8, 1)
)
```

### 6.3 Función de pérdida

```python
criterion = nn.MSELoss()
```

### 6.4 Optimizador

```python
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)
```

### 6.5 Training loop

El estudiante debe comprender este patrón:

```python
for epoch in range(epochs):

    optimizer.zero_grad()

    prediction = model(X)

    loss = criterion(prediction, y)

    loss.backward()

    optimizer.step()
```

Este código debería ser **analizado línea por línea**.

---

# Proyecto PyTorch 1

### Predicción del precio de una vivienda

Variables:

* superficie;
* número de habitaciones;
* antigüedad.

Objetivo:

> Predecir el precio.

El estudiante debe realizar:

```text
Dataset
 ↓
Preprocesamiento
 ↓
Tensor
 ↓
Modelo
 ↓
Entrenamiento
 ↓
Evaluación
 ↓
Predicción
```

---

# MÓDULO 7 — TensorFlow y Keras

Aquí se introduce el segundo ecosistema.

### 7.1 TensorFlow

Conceptos:

* Tensor.
* Computación numérica.
* GPU.
* Autodiff.
* Modelos.

### 7.2 Keras

Explicar una distinción fundamental:

> TensorFlow es el framework/ecosistema de cálculo y Deep Learning; Keras proporciona una API de alto nivel para construir y entrenar modelos de forma mucho más sencilla.

### 7.3 Sequential API

Ejemplo:

```python
import tensorflow as tf

model = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(1)
])
```

### 7.4 Compilación

```python
model.compile(
    optimizer="adam",
    loss="mse",
    metrics=["mae"]
)
```

### 7.5 Entrenamiento

```python
history = model.fit(
    X_train,
    y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.2
)
```

### 7.6 Evaluación

```python
model.evaluate(X_test, y_test)
```

---

# Proyecto TensorFlow/Keras

Utilizar **el mismo problema de predicción de viviendas** desarrollado anteriormente con PyTorch.

Esto permite que los estudiantes comparen:

| Concepto      | PyTorch        | TensorFlow/Keras   |
| ------------- | -------------- | ------------------ |
| Tensor        | `torch.Tensor` | `tf.Tensor`        |
| Modelo        | `nn.Module`    | `keras.Model`      |
| Capa          | `nn.Linear`    | `Dense`            |
| Optimización  | `torch.optim`  | `keras.optimizers` |
| Entrenamiento | Loop manual    | `fit()`            |
| Dataset       | `Dataset`      | `tf.data`          |

La comparación es pedagógicamente muy potente.

---

# MÓDULO 8 — Evaluación, optimización y regularización

Aquí el estudiante pasa de **"hacer funcionar una red"** a **"hacer que funcione bien"**.

### 8.1 Train / validation / test

```text
Dataset
   │
   ├── Train
   ├── Validation
   └── Test
```

### 8.2 Overfitting

### 8.3 Underfitting

### 8.4 Bias y variance

### 8.5 Regularización

* L1.
* L2.
* Dropout.
* Early stopping.

### 8.6 Batch Normalization

### 8.7 Optimizadores

* SGD.
* Momentum.
* Adam.
* RMSprop.

### 8.8 Learning-rate scheduling

### 8.9 Métricas

Clasificación:

* Accuracy.
* Precision.
* Recall.
* F1.
* Confusion Matrix.

Regresión:

* MAE.
* MSE.
* RMSE.
* \(R^2\).

### Práctica

Realizar experimentos modificando:

```text
número de capas
número de neuronas
learning rate
batch size
dropout
optimizer
```

y analizar el efecto sobre el aprendizaje.

---

# MÓDULO 9 — Redes Neuronales Convolucionales

Aquí comienza Computer Vision.

## 9.1 ¿Por qué una red neuronal tradicional no es suficiente para imágenes?

Introducir:

* píxeles;
* canales;
* filtros;
* kernels;
* características.

### 9.2 Convolución

```text
Imagen
 ↓
Kernel
 ↓
Feature Map
```

### 9.3 CNN

Arquitectura:

```text
Imagen
 ↓
Conv2D
 ↓
ReLU
 ↓
MaxPooling
 ↓
Conv2D
 ↓
ReLU
 ↓
Pooling
 ↓
Flatten
 ↓
Dense
 ↓
Clasificación
```

### 9.4 Implementación con Keras

```python
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(
        32, (3,3),
        activation="relu",
        input_shape=(28,28,1)
    ),
    tf.keras.layers.MaxPooling2D(),

    tf.keras.layers.Conv2D(
        64, (3,3),
        activation="relu"
    ),
    tf.keras.layers.MaxPooling2D(),

    tf.keras.layers.Flatten(),

    tf.keras.layers.Dense(
        128,
        activation="relu"
    ),

    tf.keras.layers.Dense(
        10,
        activation="softmax"
    )
])
```

### Proyecto

**Clasificación de imágenes MNIST/Fashion-MNIST.**

---

# MÓDULO 10 — Computer Vision y Transfer Learning

### 10.1 ¿Qué es Transfer Learning?

Explicar:

> Utilizar el conocimiento aprendido por un modelo entrenado previamente para resolver otro problema.

### 10.2 Modelos preentrenados

Introducción a:

* VGG.
* ResNet.
* MobileNet.
* EfficientNet.

### 10.3 Fine Tuning

```text
Modelo preentrenado
        ↓
Congelar capas
        ↓
Agregar clasificador
        ↓
Entrenar
        ↓
Descongelar algunas capas
        ↓
Fine tuning
```

### Proyecto

Clasificador de imágenes propio.

Por ejemplo:

```text
Perro
Gato
Ave
```

utilizando Transfer Learning.

---

# MÓDULO 11 — Deep Learning para texto y secuencias

Introducción al procesamiento de lenguaje natural.

### 11.1 Representación de texto

* Tokens.
* Vocabulary.
* Embeddings.
* Padding.

### 11.2 Redes recurrentes

* RNN.
* LSTM.
* GRU.

### 11.3 Problema del contexto

Explicar por qué las redes recurrentes tienen dificultades para conservar información a largo plazo.

### 11.4 Embeddings

Concepto:

```text
"perro"
 ↓
[0.23, -0.81, 0.17, ...]
```

### Proyecto

Clasificación de sentimientos:

```text
Texto
 ↓
Tokenización
 ↓
Embedding
 ↓
LSTM
 ↓
Dense
 ↓
Positivo / Negativo
```

---

# MÓDULO 12 — Arquitecturas modernas y proyecto final

Este módulo introduce conceptos avanzados **sin exigir todavía una implementación matemática profunda**.

### 12.1 Attention

Concepto fundamental:

> La red aprende qué partes de la información son más relevantes para resolver una tarea.

### 12.2 Transformers

Arquitectura conceptual:

```text
Texto
 ↓
Tokens
 ↓
Embeddings
 ↓
Positional Encoding
 ↓
Self-Attention
 ↓
Feed Forward
 ↓
Output
```

### 12.3 Large Language Models

Introducción a:

* GPT.
* BERT.
* LLM.
* Generative AI.

### 12.4 Introducción a modelos generativos

* Autoencoders.
* Variational Autoencoders.
* GAN.
* Diffusion Models.

No buscaría una implementación completa de todos ellos en un curso introductorio; bastaría con comprender **qué problema resuelven y cómo se relacionan con Deep Learning**.

---

# 4. Proyecto integrador final

El proyecto final debería integrar todo el ciclo de vida:

```text
Problema
   ↓
Obtención de datos
   ↓
Exploración
   ↓
Preprocesamiento
   ↓
Train / Validation / Test
   ↓
Modelo
   ↓
Entrenamiento
   ↓
Evaluación
   ↓
Optimización
   ↓
Predicción
   ↓
Visualización
   ↓
Conclusiones
```

El alumno debería entregar:

### 1. Notebook

```text
01_exploracion.ipynb
02_preprocesamiento.ipynb
03_modelo.ipynb
04_evaluacion.ipynb
```

### 2. Código

Estructura sugerida:

```text
deep_learning_project/
│
├── data/
├── notebooks/
├── src/
│   ├── data.py
│   ├── model.py
│   ├── train.py
│   └── evaluate.py
│
├── models/
├── requirements.txt
└── README.md
```

### 3. Informe

Debe explicar:

* problema;
* dataset;
* metodología;
* arquitectura;
* hiperparámetros;
* resultados;
* errores;
* conclusiones.

---

# 5. Progresión práctica recomendada

Una característica que considero especialmente importante para alumnos de primer año es **no enseñar los tres frameworks simultáneamente desde el principio**.

La progresión sería:

```text
                 PYTHON
                    │
                    ▼
              NumPy / Matplotlib
                    │
                    ▼
             Matemáticas básicas
                    │
                    ▼
             Neurona artificial
                    │
                    ▼
          Red neuronal con NumPy
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       PyTorch          TensorFlow/Keras
          │                   │
          └─────────┬─────────┘
                    ▼
             Comparación
                    │
                    ▼
                  CNN
                    │
                    ▼
            Transfer Learning
                    │
                    ▼
              RNN / LSTM
                    │
                    ▼
              Transformers
                    │
                    ▼
             Proyecto final
```

Esta secuencia evita un problema frecuente en la enseñanza de Deep Learning: que el estudiante aprenda a escribir:

```python
model.fit(...)
```

sin entender **qué está ocurriendo dentro del modelo**.

---

# 6. Laboratorios prácticos

Propondría al menos **10 laboratorios**:

| Lab | Actividad                     | Framework        |
| --- | ----------------------------- | ---------------- |
| 1   | Manipulación de tensores      | NumPy            |
| 2   | Neurona artificial desde cero | NumPy            |
| 3   | Red neuronal desde cero       | NumPy            |
| 4   | Regresión con red neuronal    | PyTorch          |
| 5   | Clasificación                 | PyTorch          |
| 6   | Regresión con Keras           | TensorFlow/Keras |
| 7   | Clasificación multiclase      | Keras            |
| 8   | CNN para imágenes             | PyTorch/Keras    |
| 9   | Transfer Learning             | Keras            |
| 10  | NLP con LSTM                  | Keras/PyTorch    |
| 11  | Comparación PyTorch vs Keras  | Ambos            |
| 12  | Proyecto final                | Libre            |

---

# 7. Ejemplo de proyecto transversal

Una excelente estrategia pedagógica sería utilizar **un mismo problema progresivamente**.

### Problema

> Clasificar imágenes de prendas de vestir.

### Nivel 1

Analizar datos:

```text
Imagen → matriz de píxeles
```

### Nivel 2

Construir clasificador simple.

### Nivel 3

Red neuronal totalmente conectada.

### Nivel 4

CNN.

### Nivel 5

Optimización.

### Nivel 6

Transfer Learning.

### Nivel 7

Comparar:

```text
MLP vs CNN
```

### Nivel 8

Comparar:

```text
PyTorch vs Keras
```

El alumno observa así cómo **una misma problemática evoluciona desde un modelo simple hasta una solución de Deep Learning**.

---

# 8. Competencias por nivel

### Nivel 1 — Fundamentos

El estudiante:

* comprende qué es Deep Learning;
* manipula datos;
* entiende tensores;
* comprende una neurona.

### Nivel 2 — Implementación

El estudiante:

* construye redes;
* entrena modelos;
* interpreta loss;
* utiliza PyTorch;
* utiliza TensorFlow/Keras.

### Nivel 3 — Modelamiento

El estudiante:

* selecciona arquitecturas;
* ajusta hiperparámetros;
* detecta overfitting;
* utiliza regularización;
* evalúa modelos.

### Nivel 4 — Aplicación

El estudiante:

* trabaja con imágenes;
* utiliza CNN;
* aplica Transfer Learning;
* trabaja con texto;
* utiliza modelos secuenciales.

### Nivel 5 — Avanzado

El estudiante comprende:

* Attention;
* Transformers;
* modelos generativos;
* LLM;
* fine tuning;
* arquitectura de modelos modernos.

---

# 9. Evaluación sugerida

Para un curso universitario online propondría:

| Evaluación                | Ponderación |
| ------------------------- | ----------: |
| Laboratorios prácticos    |        30 % |
| Controles conceptuales    |        10 % |
| Proyecto PyTorch          |        15 % |
| Proyecto TensorFlow/Keras |        15 % |
| Desafíos prácticos        |        10 % |
| Proyecto final            |        20 % |

La evaluación debería privilegiar **código funcional + comprensión**, y no solamente preguntas teóricas.

---

# 10. Estructura de cada clase online

Para clases de aproximadamente 2 horas:

**0–15 min — Activación**

Problema o caso real.

**15–35 min — Conceptos**

Explicación del nuevo contenido.

**35–50 min — Demostración**

El profesor desarrolla el ejemplo.

**50–60 min — Pausa / actividad**

**60–100 min — Laboratorio**

Los estudiantes reproducen y modifican el ejemplo.

**100–115 min — Desafío**

Modificar algún componente del modelo.

**115–120 min — Cierre**

Conclusiones y preguntas.

---

# 11. Resultado esperado del curso

La meta no debería ser que el estudiante memorice APIs como:

```python
torch.nn.Linear()
```

o:

```python
tf.keras.layers.Dense()
```

sino que pueda responder preguntas como:

> **¿Por qué utilizar esta capa?**

> **¿Qué representa este tensor?**

> **¿Por qué el modelo está haciendo overfitting?**

> **¿Qué ocurre cuando modifico el learning rate?**

> **¿Por qué una CNN es más apropiada que una red totalmente conectada para imágenes?**

> **¿Cuándo utilizar PyTorch y cuándo TensorFlow/Keras?**

> **¿Qué significa realmente que una red "aprenda"?**

Ese cambio desde **"programar una red neuronal" hacia "comprender y diseñar modelos"** es, a mi juicio, el principal objetivo formativo del curso.

### Secuencia final de aprendizaje

```text
Python
  ↓
NumPy
  ↓
Matemáticas esenciales
  ↓
Tensores
  ↓
Neurona
  ↓
Red neuronal
  ↓
Backpropagation
  ↓
PyTorch
  ↓
TensorFlow
  ↓
Keras
  ↓
Optimización
  ↓
CNN
  ↓
Computer Vision
  ↓
Transfer Learning
  ↓
RNN / LSTM
  ↓
NLP
  ↓
Attention
  ↓
Transformers
  ↓
Modelos generativos
  ↓
Proyecto Deep Learning
```

**Esta estructura permite partir literalmente desde cero y terminar en un nivel en que el estudiante puede comenzar a desarrollar aplicaciones reales de Deep Learning**, sin convertir el curso en una asignatura excesivamente matemática ni en un simple tutorial de APIs.
