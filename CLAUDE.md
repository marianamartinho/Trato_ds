# Trato Design System — reglas de trabajo

## Fuentes de verdad (en este orden)

1. **Figma de Trato** ("Platform Designs"). Lo que está ahí manda: colores, tamaños, textos, estados y pantallas.
2. **Untitled UI**, el sistema sobre el que está construido ese Figma. Se usa para completar lo que el Figma no define: escalas de color, tokens semánticos, tipografía, sombras, radios, anatomía y variantes de componentes, e íconos.
3. **Nada inventado.** Si algo no está ni en el Figma ni en Untitled UI, se marca como "Pendiente de definir" y no se rellena con valores propios.

Siempre se adapta Untitled UI a lo que muestra el Figma, nunca al revés.
Ejemplo: el color de marca de Trato es gris azulado `#3E4784` (prototipo Documentos · Carpetas), aunque Untitled UI use otro valor por defecto. El indigo `#6875F5` de las pantallas anteriores queda solo como referencia.

## Recursos de Untitled UI

- Íconos: paquete `@untitledui/icons` (MIT). Usar los mismos nombres que en Figma (`stars-01`, `file-02`, `scales-02`…).
- Tokens: `theme.css` de Untitled UI (incluido en el paquete `untitledui` de npm) como referencia de escalas y nombres.
- Componentes Pro de Untitled UI: requieren licencia comercial. No copiar su código sin confirmar la licencia.

## Independencia

Este repo es independiente. No agregar dependencias, código, assets ni referencias de otros proyectos o clientes.
