"use client";
import { Folder, Stars01 } from "@untitledui/icons";
import { Badge } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

const colors = ["gray", "brand", "accent", "success", "warning", "error", "ai", "blue"] as const;

export default function BadgeDoc() {
  return (
    <>
      <Section title="Colores" description="Cada color tiene un significado. No los uses como decoración.">
        <Preview code={`<Badge color="error">402</Badge>
<Badge color="success" dot>Firmado</Badge>`}>
          {colors.map((c) => <Badge key={c} color={c}>{c}</Badge>)}
        </Preview>
      </Section>
      <Section title="Con punto de estado" description="Estados de documento y workflow (Figma: “Dot” + “Badge”).">
        <Preview code={`<Badge color="warning" dot>En negociación</Badge>`}>
          <Badge dot>Borrador</Badge>
          <Badge color="blue" dot>En aprobación</Badge>
          <Badge color="warning" dot>En negociación</Badge>
          <Badge color="success" dot>Firmado</Badge>
          <Badge color="error" dot>Vencido</Badge>
        </Preview>
      </Section>
      <Section title="Casos de producto">
        <Preview code={`<Badge color="error">402</Badge>            {/* días desde creación */}
<Badge color="brand" shape="tag"><Folder /> Archivero</Badge>
<Badge color="ai"><Stars01 /> IA</Badge>`}>
          <Badge color="error">402</Badge>
          <Badge color="brand" shape="tag"><Folder /> Archivero</Badge>
          <Badge color="ai"><Stars01 /> IA</Badge>
          <Badge color="gray" size="md">Privacy mode on</Badge>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Días en la tabla de documentos: error si supera el SLA, warning si se acerca, success si está en tiempo.", "shape=\"tag\" para carpetas y etiquetas que el usuario creó.", "Texto de 1–2 palabras. Si necesitás una frase, usá un Alert."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "color", type: colors.map((c) => `"${c}"`).join(" | "), default: `"gray"`, description: "Significado del badge." },
          { name: "size", type: `"sm" | "md"`, default: `"sm"`, description: "22 / 24 px de alto." },
          { name: "shape", type: `"pill" | "tag"`, default: `"pill"`, description: "Pill para estados, tag para etiquetas." },
          { name: "dot", type: "boolean", default: "false", description: "Agrega un punto de estado." },
        ]} />
      </Section>
    </>
  );
}
