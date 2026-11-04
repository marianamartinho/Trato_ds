"use client";
import { Switch } from "@/components/ui/switch";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function ToggleDoc() {
  return (
    <>
      <Section title="Opciones de configuración" description="Cambios que se aplican al instante.">
        <Preview align="start" code={`<label>Realizar firma en orden <Switch defaultChecked /></label>`}>
          <div className="flex w-full max-w-[384px] flex-col gap-xl rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
            {[["Realizar firma en orden", true], ["Requerir confirmación de firma", false], ["Notificar a participantes", true]].map(([l, d]) => (
              <label key={l as string} className="flex items-center justify-between gap-lg text-sm font-medium text-(--text-secondary)">
                {l} <Switch defaultChecked={d as boolean} />
              </label>
            ))}
          </div>
        </Preview>
      </Section>
      <Section title="Tamaños y estados">
        <Preview code={`<Switch size="sm" />`}>
          <Switch size="sm" defaultChecked aria-label="Small activo" />
          <Switch size="sm" aria-label="Small" />
          <Switch defaultChecked aria-label="Medium activo" />
          <Switch disabled aria-label="Deshabilitado" />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["En Figma", "Toggle · Size sm · Pressed True/False"], ["sm", "16 × 28 px · thumb 12"], ["md", "20 × 36 px · thumb 16"], ["Activo", "bg-brand-solid"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Solo para cambios inmediatos, sin botón Guardar.", "El label describe el estado activado."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "checked / defaultChecked / onCheckedChange", type: "boolean / (v) => void", description: "Estado (Radix Switch)." },
          { name: "size", type: `"sm" | "md"`, default: `"md"`, description: "Tamaño." },
        ]} />
      </Section>
    </>
  );
}
