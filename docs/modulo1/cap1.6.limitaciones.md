---
id: limitaciones
title: "Limitaciones y riesgos"
sidebar_label: "💻 Limitaciones"
sidebar_position: 6
description: "Las limitaciones y riesgos de la Inteligencia Artificial"
---

* Alucinaciones
* Sesgos
* Sobreajuste
* Seguridad
* Información desactualizada
* Privacidad
* Dependencia tecnológica
* Uso responsable

## Riesgos de los agentes autonomos

La implementación de **agentes autónomos (IA Agéntica)** en la administración pública conlleva desafíos y riesgos significativos que van más allá de los asociados a la IA tradicional. Debido a su capacidad para planificar y ejecutar acciones sin supervisión humana constante, estos sistemas pueden amplificar vulnerabilidades existentes o crear nuevas contingencias operativas y éticas [4, 1.1, 1.2].

A continuación, se detallan los principales riesgos de implementar agentes autónomos en el Estado, basados en las fuentes y los estándares internacionales como la **ISO 42001**:

### 1. Desafíos en la Rendición de Cuentas (Accountability)
Uno de los mayores riesgos es el cambio en los marcos de responsabilidad. Cuando un sistema actúa de forma autónoma, se diluye la cadena de mando tradicional. Si un agente toma una decisión administrativa errónea o ejecuta una acción perjudicial, surge la dificultad de determinar quién es el responsable: si el desarrollador, el funcionario que definió el objetivo o la institución en su conjunto.

### 2. Pérdida de Supervisión Humana Significativa
La IA agéntica está diseñada para resolver problemas intermedios de forma independiente [1.2]. Esto genera el riesgo de que el sistema opere fuera de los márgenes previstos si no se integran mecanismos de **supervisión humana significativa** (Meaningful Human Oversight). La falta de intervención humana en pasos críticos puede llevar a la ejecución de tareas que, aunque técnicamente cumplen el "objetivo", violan principios éticos o normativas administrativas no explicitadas [1.1, 227].

### 3. Opacidad y Falta de Explicabilidad
La complejidad de los agentes autónomos puede dificultar que los funcionarios o la ciudadanía comprendan cómo y por qué se tomó una decisión o se ejecutó un plan de acción. La falta de transparencia en el razonamiento del agente es una fuente de riesgo para la **confianza pública** y la legitimidad del Estado.

### 4. Ejecución de "Alucinaciones" y Errores Factuáles
Los agentes autónomos heredan el riesgo de las **alucinaciones** (generar información falsa con apariencia de verdad) [4, 1.5]. El riesgo se agrava en un agente porque este no solo "dice" algo falso, sino que puede **actuar** basándose en esa información falsa, como iniciar un proceso de cobro erróneo o denegar un beneficio social fundamentado en una interpretación incorrecta de los datos [1.1, 1.5].

### 5. Sesgos Algorítmicos y Discriminación
Si los datos de entrenamiento contienen prejuicios, los agentes autónomos pueden replicarlos y amplificarlos a gran escala [4, 1.5]. En el Estado, esto puede traducirse en una distribución desigual de recursos, sesgos en la fiscalización o discriminación involuntaria contra grupos vulnerables en la asignación de servicios públicos.

### 6. Riesgos de Ciberseguridad Específicos
Los sistemas agénticos son vulnerables a ataques diseñados para engañar su lógica de razonamiento:
*   **Inyección de Prompts:** Manipulación de las instrucciones para que el agente ejecute acciones maliciosas.
*   **Envenenamiento de Datos (Data Poisoning):** Corrupción de la información que el agente consulta para actuar.
*   **Ataques de Inversión de Modelo:** Intentos de extraer información sensible o privada que el agente maneja durante su operación.

### 7. Impacto Social y Desinformación
El uso de agentes autónomos para la comunicación institucional o la gestión de redes sociales estatales conlleva el riesgo de generar involuntariamente desinformación o "deepfakes" que puedan afectar la estabilidad política o social.

### Gestión del Riesgo: La Norma ISO 42001
Para mitigar estos peligros, las instituciones deben adoptar sistemas de gestión robustos. La norma **ISO 42001** proporciona un marco para:
*   Establecer **políticas de IA** claras y objetivos de uso responsable.
*   Realizar **evaluaciones de impacto** (AI system impact assessment) para identificar consecuencias en individuos y sociedades.
*   Implementar controles de **monitoreo constante** y planes de respuesta ante fallos.


¿Qué controles recomienda la norma ISO 42001 para mitigar riesgos?
¿Cómo se integra la supervisión humana en los agentes autónomos?
¿Cuál es la diferencia entre el riesgo y el impacto en IA?