"use client";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function CheckboxDoc() {
  const [items, setItems] = React.useState([true, false, true]);
  const all = items.every(Boolean) ? true : items.some(Boolean) ? "indeterminate" : false;
  return (
    <>
      <Section title="Estados">
        <Preview code={`<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked="indeterminate" />
<Checkbox disabled />`}>
          <Checkbox aria-label="Sin marcar" />
          <Checkbox defaultChecked aria-label="Marcado" />
          <Checkbox checked="indeterminate" aria-label="Indeterminado" />
          <Checkbox disabled aria-label="Deshabilitado" />
          <Checkbox disabled checked aria-label="Deshabilitado marcado" />
        </Preview>
      </Section>
      <Section title="Con label y selección múltiple" description="El header de una tabla muestra el estado indeterminado.">
        <Preview align="start" code={`<label><Checkbox checked={all} onCheckedChange={…} /> Seleccionar todo</label>`}>
          <div className="flex flex-col gap-md rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg">
            <label className="flex items-center gap-md border-b border-(--border-secondary) pb-md text-xs font-semibold text-(--text-tertiary)">
              <Checkbox checked={all} onCheckedChange={(v) => setItems(items.map(() => !!v))} /> Seleccionar todo
            </label>
            {["51 - Votación", "50 - Plantilla con variables", "49 - Solicitud proveedor"].map((t, i) => (
              <label key={t} className="flex items-center gap-md text-sm text-(--text-secondary)">
                <Checkbox checked={items[i]} onCheckedChange={(v) => setItems(items.map((x, j) => (j === i ? !!v : x)))} /> {t}
              </label>
            ))}
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Tamaños en Figma", "sm 16 px · md 20 px"], ["Radio", "xs (4)"], ["Marcado", "fondo y borde brand · check blanco"], ["Estados", "Default · Disabled · Selected"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Para elegir varias opciones que se confirman con un botón.", "El label siempre es clicable.", "Para opciones excluyentes usá Radio; para cambios inmediatos, Toggle."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "checked / defaultChecked", type: `boolean | "indeterminate"`, description: "Estado (Radix Checkbox)." },
          { name: "onCheckedChange", type: "(checked) => void", description: "Cambio de estado." },
          { name: "disabled", type: "boolean", description: "Deshabilitado." },
        ]} />
      </Section>
    </>
  );
}
