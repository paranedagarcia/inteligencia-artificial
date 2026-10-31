## Diagrama de clases



```mermaid
---
config:
  theme: redux-color
  look: classic
  layout: elk
---
classDiagram
    direction TB

    %% Jerarquía de Usuarios
    class Usuario {
        +UUID id
        +String dni
        +String nombre
        +String apellido
        +String email
        +String telefono
        +String contrasena
        +Boolean activo
        +autenticar() Boolean
    }

    class Medico {
        +String registroColegioMedico
        +String firmaDigital
        +realizarAtencion(Paciente, Formulario) AtencionSalud
        +emitirDiagnostico(AtencionSalud, DiagnosticoCIE) Diagnostico
        +solicitarExamen(Paciente, ExamenLaboratorio) void
    }

    class Investigador {
        +String especialidad
        +String orcid
        +crearProyecto() ProyectoInvestigacion
        +analizarCohorte(ProyectoInvestigacion) DataSet
    }

    class Administrador {
        +crearUsuario(Usuario) void
        +asignarPermisos(Usuario, Rol) void
        +configurarParametro(Parametro) void
    }

    Usuario <|-- Medico
    Usuario <|-- Investigador
    Usuario <|-- Administrador

    %% Institución y Proyectos
    class Institucion {
        +UUID id
        +String alias
        +String paisISO
        +JSONB datosContacto
        +vincularProyecto(ProyectoInvestigacion) void
    }

    class ProyectoInvestigacion {
        +UUID id
        +String nombre
        +String nombreCorto
        +Date fechaInicio
        +Date fechaTermino
        +Boolean esMulticentro
        +Boolean esCienciaAbierta
        +Integer cupoPacientes
        +inscribirPaciente(Paciente, ConsentimientoInformado) void
        +agregarInstitucionParticipante(Institucion) void
    }

    %% Paciente y Consentimiento
    class Paciente {
        +UUID uuidAnonimizado
        +Integer codigoInterno
        +String rutDni
        +String nombres
        +String apellidos
        +Date fechaNacimiento
        +String sexo
        +String etnia
        +JSONB datosDemograficos
        +obtenerHistorialClinico() List~AtencionSalud~
        +firmarConsentimiento(ProyectoInvestigacion) ConsentimientoInformado
    }

    class ConsentimientoInformado {
        +UUID id
        +Date fechaFirma
        +Boolean autorizaContacto
        +Boolean autorizaEstudioFarmaceutico
        +Boolean autorizaCienciaAbierta
        +Boolean revocado
        +Date fechaRevocacion
        +String rutaDocumentoPDF
        +validarVigencia() Boolean
        +revocarConsentimiento() void
    }

    %% Atenciones y Formularios Clínicos
    class AtencionSalud {
        +UUID id
        +Date fecha
        +Integer etapaSeguimiento
        +String tipoAtencion
        +JSONB respuestasClinicas
        +registrarDatos(Formulario) void
        +asociarDiagnostico(Diagnostico) void
    }

    class FormularioClinico {
        +UUID id
        +String nombre
        +Integer version
        +String categoria
        +String tipoRegistro
        +JSONB esquemaPreguntas
        +Boolean estaBloqueado
        +renderizarFormulario() View
        +validarEntradas(JSONB) Boolean
    }

    class ExamenLaboratorio {
        +UUID id
        +Date fechaToma
        +String codigoLOINC
        +String componenteAnalizado
        +JSONB resultados
        +cargarResultado(JSONB) void
    }

    %% Diagnósticos y Catálogos
    class Diagnostico {
        +UUID id
        +Date fechaDiagnostico
        +String tipoCriterio
        +String estado
        +String comentarios
    }

    class CatalogoCIE {
        <<Abstract>>
        +String codigo
        +String descripcion
        +obtenerDetalle() String*
    }

    class CIE10 {
        +String clasificacionGeneral
        +obtenerDetalle() String
    }

    class CIEO {
        +String codigoTopografia
        +String codigoMorfologia
        +obtenerDetalle() String
    }

    CatalogoCIE <|-- CIE10
    CatalogoCIE <|-- CIEO

    %% Relaciones y Cardinalidades
    Institucion "1" -- "0..*" ProyectoInvestigacion : es sede principal de
    Institucion "0..*" -- "0..*" ProyectoInvestigacion : participa en (multicéntrico)
    Institucion "1" -- "0..*" Usuario : afilia a

    Investigador "1" -- "0..*" ProyectoInvestigacion : lidera como IP
    ProyectoInvestigacion "1" *-- "0..*" FormularioClinico : define / contiene

    ProyectoInvestigacion "0..*" -- "0..*" Paciente : recluta mediante Protocolo
    Paciente "1" *-- "1..*" ConsentimientoInformado : otorga
    ProyectoInvestigacion "1" -- "0..*" ConsentimientoInformado : rige bajo

    Paciente "1" *-- "0..*" AtencionSalud : recibe
    Medico "1" -- "0..*" AtencionSalud : ejecuta
    ProyectoInvestigacion "1" -- "0..*" AtencionSalud : enmarca

    AtencionSalud "0..*" --> "1" FormularioClinico : estructurada con
    AtencionSalud "1" *-- "0..*" Diagnostico : establece
    Diagnostico "0..*" --> "1" CatalogoCIE : codificado segun

    Paciente "1" *-- "0..*" ExamenLaboratorio : se realiza
    Medico "0..1" -- "0..*" ExamenLaboratorio : solicita / valida
    ProyectoInvestigacion "1" -- "0..*" ExamenLaboratorio : recopila
    ```

    A partir de la arquitectura y el modelo de datos de la plataforma OpenDataClinica (ODC) documentados en las especificaciones técnicas, se propone el siguiente diseño del diagrama de clases orientado a objetos para la gestión de registros clínicos e investigación biomédica:

```mermaid
classDiagram
    direction TB

    %% Jerarquía de Usuarios
    class Usuario {
        +UUID id
        +String dni
        +String nombre
        +String apellido
        +String email
        +String telefono
        +String contrasena
        +Boolean activo
        +autenticar() Boolean
    }

    class Medico {
        +String registroColegioMedico
        +String firmaDigital
        +realizarAtencion(Paciente, Formulario) AtencionSalud
        +emitirDiagnostico(AtencionSalud, DiagnosticoCIE) Diagnostico
        +solicitarExamen(Paciente, ExamenLaboratorio) void
    }

    class Investigador {
        +String especialidad
        +String orcid
        +crearProyecto() ProyectoInvestigacion
        +analizarCohorte(ProyectoInvestigacion) DataSet
    }

    class Administrador {
        +crearUsuario(Usuario) void
        +asignarPermisos(Usuario, Rol) void
        +configurarParametro(Parametro) void
    }

    Usuario <|-- Medico
    Usuario <|-- Investigador
    Usuario <|-- Administrador

    %% Institución y Proyectos
    class Institucion {
        +UUID id
        +String alias
        +String paisISO
        +JSONB datosContacto
        +vincularProyecto(ProyectoInvestigacion) void
    }

    class ProyectoInvestigacion {
        +UUID id
        +String nombre
        +String nombreCorto
        +Date fechaInicio
        +Date fechaTermino
        +Boolean esMulticentro
        +Boolean esCienciaAbierta
        +Integer cupoPacientes
        +inscribirPaciente(Paciente, ConsentimientoInformado) void
        +agregarInstitucionParticipante(Institucion) void
    }

    %% Paciente y Consentimiento
    class Paciente {
        +UUID uuidAnonimizado
        +Integer codigoInterno
        +String rutDni
        +String nombres
        +String apellidos
        +Date fechaNacimiento
        +String sexo
        +String etnia
        +JSONB datosDemograficos
        +obtenerHistorialClinico() List~AtencionSalud~
        +firmarConsentimiento(ProyectoInvestigacion) ConsentimientoInformado
    }

    class ConsentimientoInformado {
        +UUID id
        +Date fechaFirma
        +Boolean autorizaContacto
        +Boolean autorizaEstudioFarmaceutico
        +Boolean autorizaCienciaAbierta
        +Boolean revocado
        +Date fechaRevocacion
        +String rutaDocumentoPDF
        +validarVigencia() Boolean
        +revocarConsentimiento() void
    }

    %% Atenciones y Formularios Clínicos
    class AtencionSalud {
        +UUID id
        +Date fecha
        +Integer etapaSeguimiento
        +String tipoAtencion
        +JSONB respuestasClinicas
        +registrarDatos(Formulario) void
        +asociarDiagnostico(Diagnostico) void
    }

    class FormularioClinico {
        +UUID id
        +String nombre
        +Integer version
        +String categoria
        +String tipoRegistro
        +JSONB esquemaPreguntas
        +Boolean estaBloqueado
        +renderizarFormulario() View
        +validarEntradas(JSONB) Boolean
    }

    class ExamenLaboratorio {
        +UUID id
        +Date fechaToma
        +String codigoLOINC
        +String componenteAnalizado
        +JSONB resultados
        +cargarResultado(JSONB) void
    }

    %% Diagnósticos y Catálogos
    class Diagnostico {
        +UUID id
        +Date fechaDiagnostico
        +String tipoCriterio
        +String estado
        +String comentarios
    }

    class CatalogoCIE {
        <<Abstract>>
        +String codigo
        +String descripcion
        +obtenerDetalle() String*
    }

    class CIE10 {
        +String clasificacionGeneral
        +obtenerDetalle() String
    }

    class CIEO {
        +String codigoTopografia
        +String codigoMorfologia
        +obtenerDetalle() String
    }

    CatalogoCIE <|-- CIE10
    CatalogoCIE <|-- CIEO

    %% Relaciones y Cardinalidades
    Institucion "1" -- "0..*" ProyectoInvestigacion : es sede principal de
    Institucion "0..*" -- "0..*" ProyectoInvestigacion : participa en (multicéntrico)
    Institucion "1" -- "0..*" Usuario : afilia a

    Investigador "1" -- "0..*" ProyectoInvestigacion : lidera como IP
    ProyectoInvestigacion "1" *-- "0..*" FormularioClinico : define / contiene

    ProyectoInvestigacion "0..*" -- "0..*" Paciente : recluta mediante Protocolo
    Paciente "1" *-- "1..*" ConsentimientoInformado : otorga
    ProyectoInvestigacion "1" -- "0..*" ConsentimientoInformado : rige bajo

    Paciente "1" *-- "0..*" AtencionSalud : recibe
    Medico "1" -- "0..*" AtencionSalud : ejecuta
    ProyectoInvestigacion "1" -- "0..*" AtencionSalud : enmarca

    AtencionSalud "0..*" --> "1" FormularioClinico : estructurada con
    AtencionSalud "1" *-- "0..*" Diagnostico : establece
    Diagnostico "0..*" --> "1" CatalogoCIE : codificado segun

    Paciente "1" *-- "0..*" ExamenLaboratorio : se realiza
    Medico "0..1" -- "0..*" ExamenLaboratorio : solicita / valida
    ProyectoInvestigacion "1" -- "0..*" ExamenLaboratorio : recopila

```

---

### Descripción Detallada de las Clases

#### 1. Módulo de Usuarios y Roles

* **`Usuario`**: Clase base de autenticación y datos de contacto (`id`, `dni`, `email`, `contrasena`, `activo`). Permite el acceso seguro al sistema.


* **`Medico`**: Especialización de `Usuario`. Posee atributos específicos como `firmaDigital` (almacenada en base de datos para validar formularios clínicos) y métodos para registrar atenciones, solicitar pruebas diagnósticas y determinar diagnósticos asociados al paciente.


* **`Investigador`**: Especialización encargada del protocolo científico. Administra proyectos, define cohortes y accede a los datos anonimizados para análisis estadístico y exportación hacia plataformas de ciencia abierta.


* **`Administrador`**: Usuario con privilegios elevados para gestionar usuarios, asignar roles, habilitar proyectos y configurar el catálogo de parámetros del sistema.



#### 2. Módulo Institucional y de Investigación

* **`Institucion`**: Representa centros de salud, hospitales o universidades (como el Hospital Clínico San Borja Arriarán o la Universidad de Chile). Maneja el identificador único (`id`), `alias`, país y metadatos en JSONB.


* **`ProyectoInvestigacion`**: Núcleo del sistema ODC. Gestiona los estudios clínicos, su vigencia temporal (`fechaInicio`, `fechaTermino`), si opera en modalidad multicéntrica o con políticas de *Open Science* (ANID), además del investigador principal responsable.



#### 3. Módulo del Paciente y Ética Biomédica

* **`Paciente`**: Modela al sujeto clínico. Mantiene la disociación entre los datos personales sensibles (identificados por RUT/DNI para el médico tratante) y el `uuidAnonimizado` generado por el sistema para salvaguardar la privacidad en investigación.


* **`ConsentimientoInformado`**: Entidad fundamental para la validez legal y ética. Almacena la fecha de firma, la vigencia, las autorizaciones específicas otorgadas por el paciente (uso académico, estudios farmacéuticos, contacto futuro) y el archivo de respaldo en formato PDF.



#### 4. Módulo de Atenciones Clínicas y Formularios Dinámicos

* **`AtencionSalud`**: Modela cada encuentro o control clínico del paciente. Registra la fecha, la etapa de seguimiento protocolar (ej. 30 días, 90 días, control postquirúrgico) y almacena las variables clínicas en estructura `JSONB` según el formulario aplicado.


* **`FormularioClinico`**: Representa las plantillas dinámicas generadas en ODC (anamnesis, examen físico, encuestas de calidad de vida). Almacena su estructura de campos flexibles (campos numéricos, listas, tablas radio/check), su categoría y versión.


* **`ExamenLaboratorio`**: Registros específicos de pruebas paraclínicas, bacteriología o imagenología vinculadas al paciente y al estudio. Se conecta con estándares como LOINC para la interoperabilidad de magnitudes biológicas.



#### 5. Módulo de Diagnósticos y Terminologías

* **`Diagnostico`**: Instancia diagnóstica asociada a una atención o consulta médica. Describe la fecha de confirmación, gravedad o estado clínico.


* **`CatalogoCIE` (Abstracta), `CIE10` y `CIEO**`: Modelan la estandarización médica. Siguen un patrón de abstracción y herencia orientada a objetos, permitiendo codificar diagnósticos estándar bajo la Clasificación Internacional de Enfermedades (CIE-10) o diagnósticos oncológicos específicos bajo CIE-O (topografía y morfología tumoral).



---

### Justificación de las Relaciones entre Clases

1. **Generalización / Herencia (`<|--`)**:
* `Usuario <|-- Medico`, `Usuario <|-- Investigador`, `Usuario <|-- Administrador`: Permite centralizar la seguridad, credenciales y datos de contacto en `Usuario`, especializando las atribuciones y métodos específicos según el rol operativo.


* `CatalogoCIE <|-- CIE10`, `CatalogoCIE <|-- CIEO`: Provee una clase base abstracta de codificación médica con métodos comunes, extendida por normas nosológicas específicas.




2. **Composición Estricta (`*--`)**:
* `Paciente *-- ConsentimientoInformado`: Un consentimiento no existe de manera independiente sin un paciente que lo suscriba.


* `Paciente *-- AtencionSalud` y `Paciente *-- ExamenLaboratorio`: El historial clínico, consultas y exámenes pertenecen indisolublemente al expediente del paciente; si se elimina el registro del paciente del estudio, sus atenciones clínicas asociadas pierden su entidad.


* `AtencionSalud *-- Diagnostico`: Los diagnósticos emitidos en un encuentro médico forman parte del registro de dicha atención.


* `ProyectoInvestigacion *-- FormularioClinico`: Las plantillas y versiones de instrumentos de recolección son diseñadas y gestionadas dentro del contexto del proyecto.




3. **Agregación y Asociación (`--`, `-->`)**:
* `Institucion -- ProyectoInvestigacion`: Relación de agregación; una institución puede albergar múltiples proyectos de investigación y puede participar como centro asociado en estudios multicéntricos.


* `Investigador -- ProyectoInvestigacion`: Asociación donde el investigador actúa como Investigador Principal (IP) o co-investigador.


* `Medico -- AtencionSalud`: El médico atiende y firma la ficha clínica del paciente.


* `AtencionSalud --> FormularioClinico`: Asociación unidireccional de uso; la atención implementa y llena el esquema definido por el formulario clínico.


* `Diagnostico --> CatalogoCIE`: Asociación de referencia normativa; cada diagnóstico se vincula a un código de clasificación estándar internacional.