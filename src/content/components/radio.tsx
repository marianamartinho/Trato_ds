"use client";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function RadioDoc() {
  return (
    <>
      <Section title="Grupo de opciones" description="Una sola opción posible.">
        <Preview align="start" code={`<RadioGroup name="orden" defaultValue="secuencial" label="Orden de firma">
  <Radio value="secuencial" label="En orden" hint="Cada participante firma después del anterior." />
  <Radio value="paralelo" label="Todos a la vez" />
</RadioGroup>`}>
          <RadioGroup name="orden" defaultValue="secuencial" label="Orden de firma">
            <Radio value="secuencial" label="En orden" hint="Cada participante firma después del anterior." />
            <Radio value="paralelo" label="Todos a la vez" hint="Todos reciben el enlace al mismo tiempo." />
            <Radio value="manual" label="Definir más tarde" disabled />
          </RadioGroup>
        </Preview>
      </Section>
      <Section title="Tamaños">
        <Preview align="start" code={`<RadioGroup name="t" size="md">…</RadioGroup>`}>
          <RadioGroup name="sm" defaultValue="a" size="sm"><Radio value="a" label="Small" /><Radio value="b" label="Opción" /></RadioGroup>
          <RadioGroup name="md" defaultValue="a" size="md"><Radio value="a" label="Medium" /><Radio value="b" label="Opción" /></RadioGroup>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Origen en Figma", "Checkbox · Type Radio"], ["Tamaños", "sm 16 px · md 20 px"], ["Seleccionado", "fondo brand · punto blanco"], ["Label · hint", "14 medium · 14 text-tertiary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Para 2 a 5 opciones excluyentes y visibles. Con más, usá Select.", "Siempre con una opción seleccionada por defecto si hay una recomendada."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "RadioGroup.name", type: "string", description: "Nombre del grupo (formulario)." },
          { name: "RadioGroup.value / defaultValue / onValueChange", type: "string", description: "Opción elegida." },
          { name: "RadioGroup.size", type: `"sm" | "md"`, default: `"sm"`, description: "Tamaño." },
          { name: "Radio.value / label / hint / disabled", type: "string / ReactNode / ReactNode / boolean", description: "Cada opción." },
        ]} />
      </Section>
    </>
  );
}
