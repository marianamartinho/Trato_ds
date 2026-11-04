# Trato Design System — reglas de trabajo

## Fuente de verdad

**Este repo (GitHub) es la fuente de verdad del Design System.** Lo que está acá es lo vigente: el sitio no muestra avisos de "a confirmar", "pendiente de definir" ni diferencias con el Figma. Lo que falta se registra en el repo (issues o la hoja de ruta), no en las páginas del DS.

## Cómo se decide qué entra (en este orden)

1. **Figma de Trato** ("Platform Designs"). Lo que está ahí manda: colores, tamaños, textos, estados y pantallas.
2. **Untitled UI**, el sistema sobre el que está construido ese Figma. Se usa para completar lo que el Figma no define: escalas de color, tokens semánticos, tipografía, sombras, radios, anatomía y variantes de componentes, e íconos.
3. **Nada inventado.** Si algo no está ni en el Figma ni en Untitled UI, no se agrega al DS ni se rellena con valores propios.

Siempre se adapta Untitled UI a lo que muestra el Figma, nunca al revés.
Ejemplo: el color de marca de Trato es gris azulado `#3E4784` (prototipo Documentos · Carpetas), aunque Untitled UI use otro valor por defecto.

## Recursos de Untitled UI

- Íconos: paquete `@untitledui/icons` (MIT). Usar los mismos nombres que en Figma (`stars-01`, `file-02`, `scales-02`…).
- Tokens: `theme.css` de Untitled UI (incluido en el paquete `untitledui` de npm) como referencia de escalas y nombres.
- Componentes Pro de Untitled UI: requieren licencia comercial. No copiar su código sin confirmar la licencia.

## Independencia

Este repo es independiente. No agregar dependencias, código, assets ni referencias de otros proyectos o clientes.
