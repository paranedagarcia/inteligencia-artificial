---
id: viaticos
title: ""
sidebar_label: "💻 Control de cometidos"
description: "Automatización de controles de cometidos, pasajes y presupuesto"
---

## Automatización de controles  de cometidos, pasajes y presupuesto

### Evaluación General del Proyecto

Este proyecto destaca por abordar un problema clásico de fragmentación y silos de información interdepartamental. La integración de los departamentos de Finanzas, Gestión de Personas y Administración en torno a un flujo de datos unificado demuestra una alta madurez en el diseño de procesos. La decisión de orquestar la solución mediante PowerShell y la API de Microsoft Graph sobre el ecosistema de SharePoint resulta en una arquitectura robusta, escalable y altamente pertinente para el sector público. Teneidno en cuenta que ya cuentan con el entorno de Microsoft.

---

### Análisis del Prompt (Modelo CRTF)

El diseño del prompt revela un trabajo de ingeniería de instrucciones sobresaliente, estructurando requerimientos lógicos y técnicos de manera impecable:

* **Contexto:** Se delimita el entorno operacional con precisión, definiendo claramente las fuentes de datos (COMETIDOS, PASAJES, PRESUPUESTO) y las dependencias del flujo. Es especialmente destacable la definición estricta de qué constituye un "pasaje adquirido" (exigiendo evidencia como orden de compra o factura) para evitar falsos positivos.


* **Rol:** La exigencia de un perfil especialista en "automatización de procesos, Microsoft 365, PowerShell y Microsoft Graph" fuerza al modelo a generar código nativo y viable para la infraestructura existente.


* **Tarea:** Las reglas de negocio operan como un proceso ETL (Extract, Transform, Load) completo. La instrucción explícita de normalizar los campos clave (como el RUT) antes de ejecutar los cruces de datos (joins) asegura la integridad referencial.


* **Formato:** Exigir que la solución incluya validaciones, lógica, manejo de errores y un modo de simulación demuestra un enfoque preventivo vital para el despliegue de software.





### Acciones, Resultados y Reflexión Crítica

* **Calidad Técnica:** El script generado en PowerShell 7+ incluye un control de duplicados mediante la persistencia en una lista de SharePoint y un bloque sólido de manejo de excepciones (`try/catch`). La inclusión de una variable `$SimulationMode` es una excelente práctica para mitigar riesgos durante las pruebas.


* **Iteración Analítica:** Las interacciones muestran un equipo que no se conformó con la primera respuesta. El debate sobre si cruzar los datos de la Regla 2 utilizando el "ID Registro" en lugar del RUT evidencia un análisis crítico del modelo de datos relacional.


* **Impacto Organizacional:** La reflexión final del equipo subraya que el verdadero valor del proyecto no fue solo generar el código, sino forzar la estandarización de las planillas y propiciar el diseño de flujos transversales.


El ejercicio es técnicamente impecable, metodológicamente profundo y organizacionalmente transformador. Representa un caso de éxito claro de cómo traducir reglas de negocio complejas en arquitecturas de automatización operativas.

Proyeccción:

Para consolidar esta solución, considerando las proyecciones de volumen de datos y concurrencia, ¿tienen contemplado migrar la base operacional desde el entorno Excel actual hacia una estructura de base de datos relacional (como SQL) y contenerizar la ejecución del script (por ejemplo, con Docker) para automatizar el ciclo de tareas en la nube?