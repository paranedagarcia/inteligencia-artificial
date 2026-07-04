Manual de Estudio: Inteligencia Artificial para la Gestión Pública

Análisis de Datos, Estratégia, Gobernanza y Automatización

Módulo 1: Fundamentos de Inteligencia Artificial

Capítulo 1: Introducción a la Inteligencia Artificial

La administración pública contemporánea se enfrenta al desafío de gestionar volúmenes de información sin precedentes bajo crecientes demandas de eficiencia, transparencia y adaptabilidad. En este escenario, la Inteligencia Artificial (IA) deja de ser una mera herramienta tecnológica y se constituye como un catalizador estratégico para la creación de Valor Público. El objetivo de este capítulo es desmitificar la IA, estructurando sus pilares teóricos e históricos, y dotar al funcionario del marco técnico inicial indispensable para interactuar críticamente con estas tecnologías.

1.1 Evolución Histórica de la IA

La búsqueda por replicar los procesos cognitivos humanos mediante dispositivos artificiales no es un fenómeno reciente. Su trayectoria combina periodos de optimismo desmedido con fases de escepticismo y desfinanciamiento técnico conocidos como los "Inviernos de la IA".

   [1956] Conferencia de Dartmouth (Origen del concepto)
      │
      ▼
   [1950s-1970s] IA Simbólica / Sistemas Basados en Reglas (Lógica formal)
      │
      ▼
   [1970s & 1980s] Inviernos de la IA (Falta de poder de cómputo y datos)
      │
      ▼
   [1990s-2010s] Auge de Machine Learning (Enfoque probabilístico y estadístico)
      │
      ▼
   [2012-Pres.] Revolución de Deep Learning (Redes Neuronales Profundas y GPUs)
      │
      ▼
   [2020-Pres.] IA Generativa y Agéntica (LLMs, Multimodalidad y Autonomía)


La Conferencia de Dartmouth (1956): Es catalogada unánimemente como el nacimiento formal de la disciplina. John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon acuñaron el término "Inteligencia Artificial" bajo la premisa de que "cada aspecto del aprendizaje o cualquier otra característica de la inteligencia puede ser descrito con tanta precisión que se puede construir una máquina para simularlo".

La IA Simbólica o Basada en Reglas: Dominante entre los años 50 y 80, este paradigma operaba bajo lógica formal e instrucciones estructuradas ("Si ocurre $A$ y se cumple la condición $B$, entonces ejecute $C$"). Aunque fue exitosa para resolver problemas matemáticos y configurar los primeros "sistemas expertos", demostró ser inflexible frente a la ambigüedad, el lenguaje natural y el ruido de los entornos reales.

El surgimiento de Machine Learning (ML): Frente a las limitaciones de la programación simbólica, a finales del siglo XX el enfoque mutó de "darle instrucciones explícitas a la máquina" a "alimentar a la máquina con datos para que aprenda los patrones por sí misma". Este cambio estadístico permitió avances significativos en visión computacional y traducción de textos.

La Revolución de Deep Learning (DL) (2012): Con el hito de ImageNet en 2012, las redes neuronales artificiales de múltiples capas ocultas (profundas) demostraron una superioridad incontestable gracias al procesamiento masivo mediante tarjetas gráficas (GPUs) y la disponibilidad a gran escala de datos en Internet.

IA Generativa, Multimodalidad y Sistemas Agénticos: En la década de 2020, la arquitectura Transformer (propuesta por Google en 2017) propulsó la capacidad de los modelos para no solo clasificar datos, sino generar contenido original (texto, código, imágenes) con coherencia semántica. La evolución actual transita de la IA puramente conversacional hacia la IA Agéntica (sistemas capaces de planificar tareas, ejecutar flujos de trabajo autónomos interactuando con herramientas de software y corregir sus propios errores) y la Multimodalidad (procesamiento e interconexión simultánea de texto, audio, video y datos tabulares).

1.2 Conceptos Fundamentales

Para desenvolverse en el ámbito de la ciencia de datos aplicada, es imperativo precisar la jerarquía y significado de los términos técnicos elementales, evitando imprecisiones semánticas comunes en la literatura no técnica.

Jerarquía de la Tecnología

┌─────────────────────────────────────────────────────────────┐
│ Inteligencia Artificial (IA)                                │
│   ┌───────────────────────────────────────────────────────┐ │
│   │ Machine Learning (ML)                                 │ │
│   │   ┌─────────────────────────────────────────────────┐ │ │
│   │   │ Deep Learning (DL)                              │ │ │
│   │   │   ┌───────────────────────────────────────────┐ │ │ │
│   │   │   │ Modelos Fundacionales / LLMs / Generativa │ │ │ │
│   │   │   └───────────────────────────────────────────┘ │ │ │
│   │   └─────────────────────────────────────────────────┘ │ │
│   └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘


Inteligencia Artificial (IA): Campo general de las ciencias de la computación dedicado al desarrollo de sistemas que realizan tareas que habitualmente requieren inteligencia humana (razonamiento, percepción, toma de decisiones).

Machine Learning (ML - Aprendizaje Automático): Subcampo de la IA enfocado en algoritmos que permiten a las computadoras aprender y realizar predicciones o clasificaciones basadas en datos históricos, sin ser programados explícitamente para ello.

Deep Learning (DL - Aprendizaje Profundo): Subconjunto de ML basado en estructuras jerárquicas denominadas Redes Neuronales Artificiales, que emulan vagamente la interconexión de las neuronas biológicas para resolver tareas de alta complejidad.

Redes Neuronales Artificiales: Modelos matemáticos compuestos por una capa de entrada, una o más capas ocultas y una capa de salida. Cada nodo (neurona artificial) posee un peso asignado $w$ y un sesgo $b$. La salida de una neurona se calcula aplicando una función de activación no lineal $\sigma$ a la suma ponderada de sus entradas $x_i$:


$$y = \sigma \left( \sum_{i=1}^{n} w_i x_i + b \right)$$

Modelos Fundacionales y LLMs: Grandes redes neuronales entrenadas en gigantescos corpus de datos capaces de adaptarse a una amplia variedad de tareas mediante sintonización. Los LLMs (Large Language Models) son modelos fundacionales especializados en el procesamiento probabilístico del lenguaje natural.

La Tríada de la Información

Datos: Valores cuantitativos o cualitativos mínimos, desprovistos de contexto (ej. el número $39.5$).

Información: Datos estructurados y contextualizados para adquirir sentido (ej. "La temperatura registrada en el servidor de base de datos es de $39.5\ ^\circ\text{C}$").

Conocimiento: Información analizada, interpretada y asimilada para guiar la toma de decisiones (ej. "Dado que la temperatura del servidor es de $39.5\ ^\circ\text{C}$ e históricamente el rango seguro es inferior a $35\ ^\circ\text{C}$, se requiere activar el protocolo de refrigeración secundaria de inmediato").

Flujo Operativo de la IA

Algoritmo: Conjunto finito de reglas e instrucciones matemáticas bien definidas que describen un procedimiento secuencial.

Modelo: La estructura resultante de someter a un algoritmo a un proceso de aprendizaje con un conjunto de datos. Representa las relaciones matemáticas aprendidas.

Entrenamiento: Fase computacional intensiva en la que el modelo ajusta repetidamente sus parámetros internos (pesos y sesgos) para minimizar el error entre sus predicciones y los datos reales.

Inferencia: Fase en la que el modelo ya entrenado se utiliza para realizar predicciones o generar respuestas ante nuevos datos no vistos previamente.

Conceptos Avanzados de Procesamiento de Lenguaje Natural (NLP)

Tokens: Las unidades básicas de procesamiento en un modelo de lenguaje. No equivalen exactamente a palabras; pueden ser caracteres, sílabas o partes de palabras (en promedio, una palabra en español equivale a $1.3$ o $1.5$ tokens). Por ejemplo, la palabra "gubernamental" puede ser dividida por el modelo en los tokens guber, na y mental.

Embeddings (Incrustaciones Numéricas): Es la representación matemática de palabras o conceptos dentro de un espacio vectorial continuo multidimensional. Los embeddings capturan el significado semántico de un elemento de modo que palabras con significados similares o contextos compartidos se sitúen geométricamente cerca en dicho espacio.

Si representamos palabras mediante vectores $\vec{v}$, la distancia matemática o la métrica de similitud del coseno:


$$\text{sim}(\vec{v}_{\text{justicia}}, \vec{v}_{\text{ley}}) > \text{sim}(\vec{v}_{\text{justicia}}, \vec{v}_{\text{manzana}})$$

Vectorización: El proceso técnico de transformar datos no estructurados (textos, imágenes, audios) en vectores numéricos legibles por los algoritmos de IA.

RAG (Retrieval-Augmented Generation / Generación Aumentada por Recuperación): Técnica de arquitectura de sistemas que permite "conectar" un LLM a una base de datos o repositorio documental externo (por ejemplo, el reglamento interno de una subsecretaría chilena). El sistema busca documentos relevantes a la consulta del usuario y los adjunta temporalmente al contexto del LLM para que este responda basándose estrictamente en fuentes fidedignas y actualizadas, reduciendo drásticamente las alucinaciones.

Fine Tuning (Ajuste Fino): Proceso de re-entrenar un modelo previamente entrenado en un conjunto de datos más específico y delimitado (por ejemplo, textos jurídicos de la Contraloría General de la República) para especializar su tono, estilo o adaptarlo a tareas altamente especializadas.

1.3 Tipos de IA

La inteligencia artificial puede categorizarse según su alcance cognitivo y su funcionalidad técnica:

                  ┌───────────────────────┐
                  │    Sistemas de IA     │
                  └───────────┬───────────┘
            ┌─────────────────┴─────────────────┐
    (Por Nivel Cognitivo)               (Por Aplicación Técnica)
    ┌───────┴───────┐                   ┌───────┴───────┐
 ┌──┴──┐         ┌──┴──┐             ┌──┴──┐         ┌──┴──┐
 │Débil│         │Gen. │             │Pred.│         │Gen. │
 │(ANI)│         │(AGI)│             └─────┘         └─────┘
 └─────┘         └─────┘


Clasificación por Nivel Cognitivo (Capacidad)

IA Débil o Estrecha (ANI - Artificial Narrow Intelligence): Sistemas diseñados, entrenados y optimizados para ejecutar una tarea o un conjunto muy restringido de tareas de forma excelente (ej. clasificar licitaciones públicas en ChileCompra, transcribir un audio ministerial, o predecir la demanda de vacunas en la central de abastecimiento CENABAST). Toda la IA existente en la actualidad es IA Débil.

IA General (AGI - Artificial General Intelligence): Nivel hipotético de inteligencia artificial en el cual la máquina es capaz de comprender, aprender, aplicar el razonamiento y resolver cualquier tarea cognitiva humana de manera autónoma, transversal y adaptándose a contextos completamente nuevos. No existe aún consenso científico sobre cuándo o si es posible alcanzar este hito.

Clasificación por Aplicación Técnica (Funcionalidad)

IA Especializada: Sistemas dedicados a procesar nichos técnicos muy específicos (por ejemplo, algoritmos de detección de anomalías transaccionales en el Servicio de Impuestos Internos).

IA Predictiva: Utiliza modelos estadísticos y de Machine Learning tradicionales para analizar datos históricos e identificar la probabilidad de eventos futuros (ej. estimación de deserción escolar basándose en el historial de asistencia y calificaciones).

IA Generativa: Diseñada para crear nuevos artefactos de datos originales que imitan los patrones de los datos con los que fue entrenada (ej. redactar un borrador de oficio conductor basándose en una minuta previa).

1.4 Cómo Aprende una IA

El proceso de entrenamiento de un modelo de inteligencia artificial se asemeja metodológicamente a los sistemas de aprendizaje estadístico estructurados bajo tres paradigmas fundamentales:

                                  ┌─────────────────────────────┐
                                  │   Paradigmas de Aprendizaje │
                                  └──────────────┬──────────────┘
            ┌────────────────────────────────────┼────────────────────────────────────┐
  [Supervisado]                        [No Supervisado]                       [Por Refuerzo]
  - Datos etiquetados                  - Datos no etiquetados                 - Agente en entorno
  - Entrada (X) -> Salida (Y)          - Busca agrupaciones/patrones          - Acciones -> Recompensas
  - Ej: Clasificar oficios             - Ej: Segmentar usuarios               - Ej: Optimizar rutas


1. Paradigmas de Aprendizaje Clásicos

Aprendizaje Supervisado: El modelo recibe un conjunto de entrenamiento donde cada dato de entrada está emparejado con su etiqueta o respuesta correcta correspondiente (por ejemplo: miles de correos de reclamos ciudadanos previamente clasificados de forma manual como "Urgente" o "No Urgente"). El algoritmo aprende la función matemática de mapeo para clasificar nuevos ingresos.

Aprendizaje No Supervisado: El modelo es provisto de datos sin ningún tipo de etiqueta. El objetivo es identificar estructuras, patrones inherentes o agrupaciones ocultas por sí mismo (por ejemplo: analizar el padrón de contribuyentes para segmentar perfiles de evasión fiscal de manera autónoma).

Aprendizaje por Refuerzo: Un agente inteligente interactúa con un entorno dinámico y aprende a tomar decisiones secuenciales mediante un sistema de retroalimentación de "premios" (recompensas numéricas positivas) y "castigos" (penalizaciones). Se utiliza principalmente en optimización de rutas logísticas y control de sistemas complejos.

2. Mecanismos Modernos de Integración y Adaptación en Lenguaje Natural

Para contextualizar un modelo generativo e incorporarle conocimientos actualizados o específicos de una repartición pública, se despliegan las siguientes alternativas técnicas:

Criterio / Método

RAG (Retrieval-Augmented Generation)

Fine-Tuning (Ajuste Fino)

In-Context Learning (Prompting)

Definición

Conecta el modelo a un buscador documental externo para inyectar información precisa en la consulta.

Modifica permanentemente los pesos neuronales del modelo usando un conjunto de datos especializado.

Diseña instrucciones detalladas y ejemplos directamente dentro de la ventana de chat del modelo.

Requiere Cómputo

Muy bajo (solo el costo de indexación y búsqueda vectorial rápida).

Alto (requiere procesamiento GPU para re-entrenamiento).

Ninguno (costo directo de tokens procesados).

Actualización de Datos

Inmediata (basta con añadir o editar archivos en la base de datos).

Lenta (demanda volver a correr un proceso de entrenamiento).

Inmediata (dentro del mismo prompt enviado).

Prevención de Alucinación

Muy alta (el modelo se restringe al texto recuperado).

Moderada (puede seguir mezclando conceptos del entrenamiento original).

Media (depende de la longitud y claridad del prompt).

Casos de Uso Comunes

Consulta de circulares internas, manuales de procedimiento, bases de licitación vigentes.

Adaptación de un LLM para dominar jerga médica nacional o generar sentencias con sintaxis jurídica formal.

Redactar un correo electrónico diario institucional con un tono formal preestablecido.

1.5 Limitaciones y Riesgos de la IA

La adopción de tecnologías de IA en el sector público requiere una profunda comprensión de sus limitaciones técnicas intrínsecas para evitar delegar decisiones críticas de forma ciega y mitigar impactos negativos en la ciudadanía.

Alucinaciones: Los modelos generativos son probabilísticos, no bases de datos deterministas. Están optimizados para predecir la secuencia de palabras más coherente según su entrenamiento, lo que significa que pueden generar información fácticamente incorrecta, inventar leyes, citar decretos inexistentes o falsificar datos estadísticos con absoluta apariencia de veracidad técnica y seguridad gramatical.

Sesgos Algorítmicos (Bias): Los modelos reflejan los sesgos históricos y sistemáticos presentes en los datos con los que fueron entrenados. Si una IA es entrenada con resoluciones que históricamente desfavorecen de forma sistemática a un determinado grupo socioeconómico o geográfico, el modelo perpetuará y amplificará estas injusticias en sus clasificaciones automatizadas.

Sobreajuste (Overfitting): Ocurre cuando un algoritmo de Machine Learning se entrena de forma tan exhaustiva con sus datos de prueba que "memoriza" el ruido y las particularidades de ese conjunto específico, perdiendo su capacidad de generalizar correctamente frente a datos nuevos en producción.

Seguridad y Filtración de Datos (Data Leakage): Ingresar información reservada, datos personales sensibles de ciudadanos chilenos (rut, diagnósticos médicos, remuneraciones) o borradores de políticas de Estado no publicadas en plataformas de IA comerciales abiertas de terceros (ej. versiones gratuitas de ChatGPT de acceso general) puede constituir una vulneración flagrante a la Ley de Protección de la Vida Privada (Ley N° 19.628). Estos datos pueden ser almacenados en servidores extranjeros y reutilizados para entrenar futuros modelos comerciales de estas empresas.

Información Desactualizada: Los modelos comerciales tradicionales tienen un límite de conocimiento fijo (knowledge cutoff) correspondiente a la fecha en que finalizó su fase de entrenamiento primario, lo que les impide conocer eventos, leyes o normativas decretadas de forma posterior, a menos que utilicen herramientas de búsqueda web o sistemas RAG complementarios.

Dependencia Tecnológica (Vendor Lock-in): Depender exclusivamente de APIs comerciales privadas extranjeras para procesos críticos de la administración del Estado plantea vulnerabilidades en la continuidad del servicio frente a cambios unilaterales en los términos de uso, alzas de precios o tensiones geopolíticas globales.

El Marco Ético e Institucional Chileno

Para regular y orientar estos riesgos, el Estado chileno ha estructurado directrices que los funcionarios deben aplicar activamente:

Circular de Uso Responsable de IA en el Estado (Ministerio de Ciencia, Tecnología, Conocimiento e Innovación): Establece directrices estrictas que prohíben la delegación absoluta del discernimiento administrativo en sistemas de IA. Toda decisión pública que afecte directamente los derechos o deberes de los ciudadanos debe contar con un "humano en el bucle" (Human-in-the-loop), garantizando que la IA actúe únicamente como un asistente técnico de apoyo a la toma de decisiones, asumiendo el funcionario la responsabilidad legal y ética del acto administrativo final.

Transparencia Algorítmica: Los ciudadanos tienen derecho a saber cuándo interactúan con un sistema automatizado (por ejemplo, un chatbot de atención municipal) y a recibir explicaciones inteligibles sobre los criterios y variables que un algoritmo consideró al emitir una recomendación o priorización de un beneficio social.

1.6 Grandes Modelos de Lenguaje (LLMs)

El ecosistema tecnológico actual provee una amplia gama de Large Language Models (LLMs). Comprender la oferta disponible permite seleccionar la herramienta adecuada según los requerimientos de la tarea, los costos asociados y el tratamiento ético de los datos públicos.

Clasificación por Arquitectura de Distribución

Modelos Propietarios (Comerciales): Desarrollados por corporaciones privadas que resguardan el código y los pesos neuronales del modelo bajo secreto comercial. Se accede a ellos mediante interfaces web de pago o llamadas API facturadas por volumen de tokens (ej. OpenAI, Anthropic, Google Cloud).

Modelos Open Source (Código Abierto / Pesos Abiertos): Modelos cuyas estructuras matemáticas y pesos neuronales son liberados públicamente de forma gratuita o bajo licencias comerciales permisivas. Permiten a las organizaciones públicas chilenas descargarlos, auditarlos, modificarlos y ejecutarlos en servidores propios o nubes privadas locales de manera soberana y con absoluto control de la privacidad de los datos (ej. Llama de Meta, Mistral de Mistral AI, Qwen de Alibaba).

Matriz Comparativa de Modelos Destacados

La siguiente tabla sistematiza los principales proveedores de LLMs existentes, evaluados bajo la óptica de la gestión pública chilena:

Proveedor / Modelo

Fortalezas Principales

Debilidades Principales

Consideraciones de Privacidad

Costo Sugerido

Aplicación Óptima en Gestión Pública

OpenAI



(ChatGPT, GPT-4o)

• Máxima versatilidad y rendimiento en tareas complejas.



• Excelente capacidad de razonamiento lógico y generación de código informático.

• Dependencia absoluta de servidores en el extranjero (principalmente EE. UU.).



• Costo de API variable.

• Las versiones corporativas pagas garantizan no usar los datos para entrenamiento.



• Las versiones gratuitas públicas sí consumen los datos ingresados para reentrenamiento de forma predeterminada.

Planes corporativos o pago por uso de API (aprox. $2.50$ a $5.00$ dólares por millón de tokens).

• Redacción de borradores jurídicos complejos.



• Creación de prototipos rápidos.



• Análisis avanzado de datos de bases de licitación extensas.

Anthropic



(Claude 3.5 Sonnet / Haiku)

• Excepcional redacción en español con tono natural e institucional.



• Extraordinaria capacidad de análisis lógico de documentos extensos y archivos PDF complejos.

• Menor ecosistema de integraciones directas que OpenAI en ciertas áreas.

• Política sumamente estricta de seguridad y alineación ética corporativa.



• Compromiso de no entrenar modelos con inputs de sus clientes.

Similar a OpenAI, adaptado para uso en APIs comerciales.

• Análisis de textos legales concurrentes.



• Redacción de oficios, minutas ejecutivas de alta fidelidad gramatical.



• Extracción precisa de información técnica estructurada.

Google



(Gemini 1.5 Pro / Flash)

• Capacidad nativa de procesar ventanas de contexto extremadamente gigantescas (hasta 2 millones de tokens).



• Procesamiento excelente de video y audio directo sin transcribir previamente.

• Puede presentar alucinaciones de formato en tareas excesivamente estructuradas.

• Los datos se procesan en la infraestructura global de Google Cloud.



• Requiere configuración de cuentas empresariales (Google Workspace / GCP) para asegurar estricta confidencialidad.

Incluido en suscripciones empresariales de Workspace o bajo costo por volumen en Google Cloud Platform.

• Resumir y consultar audios grabados de actas de concejo municipal extensas.



• Análisis cruzado de múltiples tomos de auditorías públicas.

Meta



(Llama 3 / 3.1 / 3.2)

• Modelo open-source líder mundial.



• Rendimiento equiparable a modelos propietarios en sus versiones más grandes.



• Absoluta flexibilidad de modificación.

• Requiere contar con infraestructura de cómputo local propia (servidores con GPUs) para su ejecución autónoma eficiente.

• Máxima Privacidad: Al ejecutarse de forma local e interna en los servidores propios del servicio público, ningún dato sale de la institución pública.

Gratuito en términos de licencias de software.



• Requiere inversión inicial en hardware o infraestructura de servidores en nube local.

• Chatbots internos de consulta institucional confidencial.



• Automatización y clasificación de solicitudes ciudadanas masivas sin externalizar datos sensibles.

DeepSeek



(DeepSeek-V3 / R1)

• Extraordinaria eficiencia computacional.



• Bajísimo costo de API.



• Altas capacidades de razonamiento matemático, lógico y de programación.

• Infraestructura y control de servidores concentrados en territorio asiático.



• Puede presentar latencias variables debido a la alta demanda global.

• Ofrece políticas estándar de privacidad, pero su jurisdicción puede plantear restricciones éticas o de ciberseguridad adicionales según los estándares de riesgo de cada institución.

Extremadamente bajo (hasta 10 veces más económico que competidores directos en llamadas API).

• Tareas masivas de procesamiento de datos tabulares y estructurados.



• Desarrollo y testeo de código informático para modernización de sistemas del Estado.

Ejercicios Prácticos y Autoevaluación

Preguntas de Autoevaluación

Un funcionario público ingresa el borrador de un decreto de ley no promulgado que contiene datos personales de ciudadanos en la versión pública y gratuita de un chatbot comercial de IA para que este corrija la ortografía. ¿Qué principio ético o normativo chileno se está transgrediendo prioritariamente?

Respuesta sugerida: Se vulnera la Ley N° 19.628 de Protección de la Vida Privada y la Directiva de Ciberseguridad del Estado. La información sensible y reservada no debe procesarse en plataformas comerciales abiertas donde los datos pueden almacenarse fuera del territorio nacional y ser utilizados por terceros para el reentrenamiento de modelos comerciales sin el consentimiento expreso del titular.

Explique la diferencia práctica en la gestión de un hospital público entre utilizar un sistema de IA Predictiva y un sistema de IA Generativa.

Respuesta sugerida: La IA Predictiva se utilizaría, por ejemplo, para predecir probabilísticamente la afluencia de pacientes a la Unidad de Urgencias el próximo fin de semana analizando factores meteorológicos, demográficos e históricos, permitiendo al hospital programar los turnos del personal médico de manera eficiente. En cambio, la IA Generativa se aplicaría para que, una vez finalizada la atención, un modelo redacte automáticamente el borrador del informe de alta del paciente a partir de las notas de voz estructuradas que grabó el médico tratante.

¿Por qué un sistema basado en RAG (Retrieval-Augmented Generation) es sumamente valorado en una municipalidad chilena en comparación con el uso estándar de un LLM comercial para responder consultas ciudadanas sobre subsidios sociales?

Respuesta sugerida: Los LLMs estándar carecen de acceso en tiempo real a las ordenanzas municipales específicas y vigentes, y tienden a alucinar requisitos de subsidios basándose en legislaciones de otros países con los que fueron entrenados. Un sistema RAG permite conectar el LLM directamente a la base de datos de decretos y requisitos oficiales vigentes de la municipalidad. De este modo, la respuesta generada al ciudadano se basa exclusivamente en la documentación oficial local, citando explícitamente el artículo y decreto correspondiente de forma precisa y verídica.

Ejercicio Práctico Sugerido

Objetivo: Desarrollar criterio técnico para discriminar qué herramientas y enfoques de aprendizaje de IA son pertinentes para problemáticas administrativas comunes de los organismos del Estado de Chile.

Instrucciones: Analice los siguientes tres escenarios de gestión y complete la ficha de diseño correspondiente para cada uno de ellos, fundamentando técnicamente su propuesta:

Escenario A: El Servicio Nacional de Capacitación y Empleo (SENCE) desea clasificar las miles de solicitudes de becas de formación en áreas de alta tecnología recibidas en su portal web para priorizar automáticamente aquellas postulaciones provenientes de comunas rurales de Chile con alto índice de vulnerabilidad socioeconómica.

Escenario B: Una Subsecretaría de Estado desea disponer de un sistema computacional interno para que sus asesores jurídicos puedan consultar de forma rápida, conversacional y 100% verídica la jurisprudencia administrativa contenida en los dictámenes que ha emitido la Contraloría General de la República durante la última década.

Escenario C: El Servicio Nacional del Consumidor (SERNAC) necesita una herramienta capaz de agrupar y segmentar de manera automática y sin categorías previas el contenido libre de los miles de reclamos textuales ingresados diariamente por los usuarios, con el fin de detectar nuevos patrones de malas prácticas comerciales en el mercado chileno de telecomunicaciones que aún no han sido tipificados legalmente.

                    FICHA DE DISEÑO METODOLÓGICO DE IA

   Institución / Caso: [Indique el Escenario]
   ──────────────────────────────────────────────────────────────────────────
   1. Tipo de IA Recomendado (Predictiva o Generativa):
      [Escriba su respuesta aquí]

   2. Paradigma de Aprendizaje (Supervisado, No Supervisado, o RAG):
      [Escriba su respuesta aquí y justifique la elección]

   3. Selección de Modelo (Propietario o Open-Source / Local):
      [Indique si se requiere resguardar datos confidenciales y qué tipo de
       modelo resguarda mejor esa confidencialidad en el escenario específico]

   4. Medidas para Mitigar Riesgos (Sesgo, Alucinaciones, Privacidad):
      [Señale cómo aplicaría las directrices de la Circular de IA de Chile
       para este proyecto]


Bibliografía Académica y Técnica

Ministerio de Ciencia, Tecnología, Conocimiento e Innovación de Chile (2024). Circular sobre el uso responsable de Inteligencia Artificial en los órganos de la Administración del Estado. Santiago, Chile. https://www.minciencia.gob.cl

ISO/IEC 42001:2023. Information technology — Artificial intelligence — Management system. International Organization for Standardization. https://www.iso.org/standard/42001.html

National Institute of Standards and Technology (NIST) (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0). U.S. Department of Commerce. https://www.nist.gov/itl/ai-risk-management-framework

Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30.

Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) (2021). Recomendación sobre la Ética de la Inteligencia Artificial. París, Francia.

Biblioteca del Congreso Nacional de Chile (BCN) (2023). Uso de la Inteligencia Artificial en el Estado chileno. Serie Informes de Asesoría Parlamentaria. https://www.bcn.cl