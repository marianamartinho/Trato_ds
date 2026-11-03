"use client";
import { Select } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

const estados = [
  { value: "activos", label: "Activos" },
  { value: "borradores", label: "Borradores" },
  { value: "firmados", label: "Firmados" },
  { value: "archivados", label: "Archivados" },
];

export default function SelectDoc() {
  return (
    <>
      <Section title="Filtro con prefijo" description="Figma: “Dropdown / filter” (~90). Arriba a la derecha de las tablas.">
        <Preview code={`<Select prefix="Filtrar:" defaultValue="activos" options={estados} />`}>
          <Select prefix="Filtrar:" defaultValue="activos" options={estados} />
          <Select prefix="Jurisdicción:" defaultValue="es" size="sm" options={[{ value: "es", label: "España" }, { value: "mx", label: "México" }, { value: "ar", label: "Argentina" }]} />
        </Preview>
      </Section>
      <Section title="Select de formulario">
        <Preview code={`<Select placeholder="Elegí un tipo" options={tipos} className="w-72" />`}>
          <Select placeholder="Elegí un tipo de contrato" className="w-72" options={[{ value: "nda", label: "NDA" }, { value: "service", label: "Service agreement" }, { value: "employment", label: "Employment" }]} />
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Hasta ~10 opciones. Con más, usá un combobox con búsqueda (pendiente).", "El valor seleccionado va en semibold; el prefijo en regular gris."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "options", type: "{ value: string; label: string }[]", description: "Opciones." },
          { name: "value / defaultValue / onValueChange", type: "string", description: "Controlado o no controlado." },
          { name: "prefix", type: "string", description: "Texto antes del valor (“Filtrar:”)." },
          { name: "size", type: `"sm" | "md"`, default: `"md"`, description: "32 / 40 px." },
        ]} />
      </Section>
    </>
  );
}
