"use client";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function BreadcrumbsDoc() {
  return (
    <>
      <Section title="Dentro de una carpeta" description="Ruta desde Documentos hasta la carpeta actual.">
        <Preview code={`<Breadcrumbs
  home={{ label: "Inicio", href: "#" }}
  items={[{ label: "Documentos", href: "#" }, { label: "Archivero", href: "#" }, { label: "Contratos 2025" }]}
/>`}>
          <Breadcrumbs home={{ label: "Inicio", href: "#" }} items={[{ label: "Documentos", href: "#" }, { label: "Archivero", href: "#" }, { label: "Contratos 2025" }]} />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Divisor", "chevron-right 16 px"], ["Ítem", "14/20 semibold · padding 4 8 · radio sm"], ["Actual", "bg-secondary · text-secondary"], ["Anteriores", "text-quaternary · hover bg-secondary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["La instancia del Figma de Trato está oculta: la anatomía es la de Untitled UI (Divider Chevron, Type Button).", "El último ítem es la página actual y no es un link.", "Pendiente de definir: truncado con “…” para rutas largas."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "items", type: "{ label; href?; onClick? }[]", description: "Ruta. El último es la página actual." },
          { name: "home", type: "{ label; href? }", description: "Primer ítem con ícono de inicio." },
        ]} />
      </Section>
    </>
  );
}
