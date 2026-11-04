"use client";
import { Dot } from "@/components/ui/dot";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function DotDoc() {
  return (
    <>
      <Section title="Colores" description="El mismo significado que los badges.">
        <Preview code={`<Dot color="success" label="Firmado" />`}>
          {(["gray", "brand", "accent", "success", "warning", "error", "ai", "blue"] as const).map((c) => (
            <span key={c} className="inline-flex items-center gap-sm text-sm text-(--text-secondary)"><Dot color={c} />{c}</span>
          ))}
        </Preview>
      </Section>
      <Section title="En una lista de estados">
        <Preview align="start" code={`<li className="flex items-center gap-sm"><Dot color="warning" /> En negociación</li>`}>
          <ul className="flex flex-col gap-md text-sm text-(--text-secondary)">
            <li className="flex items-center gap-sm"><Dot color="gray" /> Borrador</li>
            <li className="flex items-center gap-sm"><Dot color="warning" /> En negociación</li>
            <li className="flex items-center gap-sm"><Dot color="success" /> Firmado</li>
          </ul>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Contenedor", "8 × 8 px"], ["Punto", "6 px · radio full"], ["Tamaño en Figma", "sm (único usado)"], ["Outline", "False (único usado)"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Siempre acompañado de texto: el color solo no comunica el estado.", "Si el punto es la única señal, pasá label para lectores de pantalla."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "color", type: `"gray" | "brand" | "accent" | "success" | "warning" | "error" | "ai" | "blue"`, default: `"gray"`, description: "Significado del estado." },
          { name: "label", type: "string", description: "Texto accesible cuando no hay texto visible." },
        ]} />
      </Section>
    </>
  );
}
