"use client";
import { Logomark } from "@/components/ui/logomark";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function LogomarkDoc() {
  return (
    <>
      <Section title="Tamaños">
        <Preview code={`<Logomark size="md" />`}>
          <Logomark size="sm" />
          <Logomark size="md" />
          <Logomark size="lg" />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["En la navegación (Figma)", "23 × 23 px"], ["Estilo", "original (único definido)"], ["Colores", "#0B4F78 · #619ED1 · naranja · blanco"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Va arriba en la navegación lateral.", "No se recolorea ni se deforma.", "Pendiente de definir: versiones monocromo y para fondo oscuro."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[{ name: "size", type: `"sm" | "md" | "lg"`, default: `"sm"`, description: "24, 32 o 40 px." }]} />
      </Section>
    </>
  );
}
