"use client";
import { Download02 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function SectionHeaderDoc() {
  return (
    <>
      <Section title="Con acciones">
        <Preview align="stretch" code={`<SectionHeader title="Cuellos de botella" actions={<Button variant="secondary" size="sm">Exportar</Button>} />`}>
          <SectionHeader title="Cuellos de botella" description="Pasos del workflow con más tiempo de espera." actions={<><Button variant="secondary" size="sm"><Download02 /> Exportar</Button><Button size="sm">Ver detalle</Button></>} />
        </Preview>
      </Section>
      <Section title="Con divisor">
        <Preview align="stretch" code={`<SectionHeader title="Reportes" divider />`}>
          <SectionHeader title="Reportes" divider />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Título", "18/28 semibold · text-primary"], ["Texto de apoyo", "14/20 · text-tertiary"], ["Separación", "16 entre título y acciones"], ["Tabs", "False (único usado)"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Titula secciones dentro de una página, debajo del Page header.", "Máximo dos acciones; la principal a la derecha."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title / description", type: "ReactNode", description: "Título y texto de apoyo." },
          { name: "actions", type: "ReactNode", description: "Botones o button group." },
          { name: "divider", type: "boolean", default: "false", description: "Línea debajo." },
        ]} />
      </Section>
    </>
  );
}
