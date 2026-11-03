"use client";
import * as React from "react";
import { Checkbox, Switch } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function CheckboxSwitchDoc() {
  const [items, setItems] = React.useState([true, false, true]);
  const all = items.every(Boolean) ? true : items.some(Boolean) ? "indeterminate" : false;
  return (
    <>
      <Section title="Checkbox" description="Selección múltiple en tablas (11.4 Selección múltiple). El header muestra el estado indeterminado.">
        <Preview align="start" code={`<Checkbox checked={all} onCheckedChange={(v) => setAll(!!v)} />`}>
          <div className="flex flex-col gap-md rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg">
            <label className="flex items-center gap-md border-b border-(--border-secondary) pb-md text-xs font-semibold text-(--text-tertiary)">
              <Checkbox checked={all} onCheckedChange={(v) => setItems(items.map(() => !!v))} /> Seleccionar todo
            </label>
            {["51 - Votación", "50 - Plantilla con variables", "49 - Solicitud proveedor"].map((t, i) => (
              <label key={t} className="flex items-center gap-md text-sm text-(--text-primary)">
                <Checkbox checked={items[i]} onCheckedChange={(v) => setItems(items.map((x, j) => (j === i ? !!v : x)))} /> {t}
              </label>
            ))}
          </div>
          <div className="flex items-center gap-lg"><Checkbox disabled /> <Checkbox disabled checked /></div>
        </Preview>
      </Section>
      <Section title="Toggle" description="Opciones que se aplican al instante (“Realizar firma en orden”, “Requerir confirmación de firma”).">
        <Preview align="start" code={`<Switch defaultChecked />`}>
          <div className="flex w-full max-w-[384px] flex-col gap-xl rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
            {[["Realizar firma en orden", true], ["Requerir confirmación de firma", false], ["Notificar a participantes", true]].map(([l, d]) => (
              <label key={l as string} className="flex items-center justify-between gap-lg text-sm font-medium text-(--text-secondary)">
                {l} <Switch defaultChecked={d as boolean} />
              </label>
            ))}
          </div>
          <div className="flex items-center gap-lg"><Switch size="sm" defaultChecked /><Switch size="sm" /><Switch disabled /></div>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Checkbox: elecciones que se confirman con un botón (Guardar).", "Toggle: cambios inmediatos, sin botón de confirmar.", "El label siempre es clicable."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "checked", type: `boolean | "indeterminate"`, description: "Estado del checkbox (Radix)." },
          { name: "onCheckedChange", type: "(checked) => void", description: "Callback de cambio." },
          { name: "Switch.size", type: `"sm" | "md"`, default: `"md"`, description: "16 / 20 px de alto." },
        ]} />
      </Section>
    </>
  );
}
