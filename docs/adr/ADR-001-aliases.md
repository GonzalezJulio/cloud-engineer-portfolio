ADR-001: Uso de Alias (@) para la resolución de módulos
1. Contexto

Mi objetivo es construir un portfolio profesional aplicando prácticas utilizadas en proyectos reales. Mientras desarrollaba la estructura inicial del proyecto, comencé a utilizar rutas relativas para importar componentes.

En ese momento surgió una pregunta:

¿Qué pasaría si el día de mañana reorganizo las carpetas del proyecto? ¿Cómo afectaría eso a todo el código?

A partir de esa inquietud investigué distintas alternativas y descubrí el uso de alias de módulos, una práctica ampliamente utilizada en proyectos profesionales desarrollados con React, TypeScript y Vite.

2. Alternativas consideradas
Opción A: Utilizar rutas relativas

Ejemplo:

import Button from "../../../components/ui/Button";

Ventajas

No requiere configuración adicional.
Es suficiente para proyectos pequeños.

Desventajas

Los imports se vuelven largos y difíciles de leer.
Si cambia la estructura de carpetas, es necesario modificar múltiples imports.
A medida que el proyecto crece, el mantenimiento se vuelve más complejo.
Opción B: Utilizar alias (@)

Ejemplo:

import Button from "@/components/ui/Button";

Esta opción requiere una configuración inicial en TypeScript y Vite, pero simplifica considerablemente la organización del proyecto.

3. Decisión

Se decidió utilizar la Opción B, configurando el alias @ para que represente la carpeta src.

La configuración se realizó tanto en TypeScript como en Vite, ya que ambas herramientas necesitan conocer cómo resolver el alias, aunque cada una lo utiliza con una responsabilidad diferente.

4. Justificación

La utilización de alias mejora la organización y el mantenimiento del proyecto.

Los principales beneficios son:

Código más limpio y fácil de leer.
Imports más cortos y consistentes.
Mayor facilidad para reorganizar la estructura del proyecto sin modificar gran cantidad de archivos.
Mejor experiencia de desarrollo gracias al autocompletado y navegación entre archivos.
Una práctica ampliamente utilizada en proyectos profesionales y alineada con los estándares actuales de desarrollo.
5. Consecuencias
Beneficios
Mayor mantenibilidad del proyecto.
Mejor legibilidad para otros desarrolladores.
Menor dependencia de rutas relativas largas.
Facilita el crecimiento de la aplicación sin afectar la mayoría de los imports.
Favorece el trabajo colaborativo al mantener una estructura uniforme.
Costos
Requiere una configuración inicial en TypeScript y Vite.
Es necesario comprender cómo funciona la resolución de módulos para poder configurarlo correctamente.
6. Aprendizajes

Durante esta decisión comprendí que:

El navegador únicamente ejecuta JavaScript.
TypeScript analiza el código y necesita conocer el alias para resolver correctamente los imports durante el desarrollo.
Vite también necesita conocer el alias para resolver los módulos cuando ejecuta la aplicación.
import.meta.url permite obtener la ubicación del módulo actual.
new URL() construye una nueva URL a partir de esa ubicación.
fileURLToPath() convierte esa URL en una ruta del sistema de archivos que Node.js puede utilizar.
Una buena decisión técnica no consiste únicamente en hacer que algo funcione, sino en elegir una solución que facilite el mantenimiento y la evolución del proyecto.