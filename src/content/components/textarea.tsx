"use client";
import { Field, Textarea } from "@/components/ui/input";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function TextareaDoc() {
  return (
    <>
      <Section title="Texto largo" description="Mensajes, descripciones y comentarios.">
        <Preview align="stretch" code={`<Field label="Mensaje para los aprobadores" hint="Opcional.">
  <Textarea placeholder="Agregá contexto…" />
</Field>`}>
          <div className="grid gap-xl md:grid-cols-2">
            <Field label="Mensaje para los aprobadores" hint="Opcional." htmlFor="ta1"><Textarea id="ta1" placeholder="Agregá contexto para los aprobadores" /></Field>
            <Field label="Descripción de la solicitud" error="Mínimo 20 caracteres." htmlFor="ta2"><Textarea id="ta2" defaultValue="Contrato NDA" aria-invalid /></Field>
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Alto mínimo", "96 px"], ["Padding", "10 14"], ["Radio · borde", "md (8) · border-primary"], ["Foco", "borde brand + ring 4 px indigo-100"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Usá Field para label, ayuda y error.", "Pendiente de definir: contador de caracteres (no aparece en los diseños)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[{ name: "...textarea", type: "TextareaHTMLAttributes", description: "value, onChange, placeholder, rows…" }]} />
      </Section>
    </>
  );
}
