# Trato Design System — reglas de trabajo

## Fuente de verdad

**Este repo (GitHub) es la fuente de verdad del Design System.** Lo que está acá es lo vigente: el sitio no muestra avisos de "a confirmar", "pendiente de definir" ni diferencias con el Figma. Lo que falta se registra en el repo (issues o la hoja de ruta), no en las páginas del DS.

## Cómo se decide qué entra (en este orden)

1. **Figma de Trato** ("Platform Designs"). Lo que está ahí manda: colores, tamaños, textos, estados y pantallas.
2. **La librería de componentes del Figma**, que completa lo que las pantallas no definen: escalas de color, tokens semánticos, tipografía, sombras, radios, anatomía y variantes de componentes, e íconos.
3. **Nada inventado.** Si algo no está definido en el Figma ni en su librería, no se agrega al DS ni se rellena con valores propios.

Siempre se adapta la librería a lo que muestra el Figma, nunca al revés.
Ejemplo: el color de marca de Trato es gris azulado `#3E4784` (prototipo Documentos · Carpetas).

## Recursos

- Íconos: se importan siempre desde `@/components/icons`, con los mismos nombres que en Figma (`stars-01` → `Stars01`).
- El repo no menciona por nombre la librería base ni sus kits. No copiar código de componentes de pago sin confirmar la licencia.

## Independencia

Este repo es independiente. No agregar dependencias, código, assets ni referencias de otros proyectos o clientes.
