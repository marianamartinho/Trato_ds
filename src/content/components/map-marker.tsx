"use client";
import { MapMarker } from "@/components/ui/map-marker";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function MapMarkerDoc() {
  return (
    <>
      <Section title="Tonos" description="Naranja para la jurisdicción destacada y gris para el resto, como en el mapa del dashboard.">
        <Preview code={`<MapMarker tone="ai" label="España" />`}>
          <span className="inline-flex items-center gap-sm text-sm text-(--text-secondary)"><MapMarker tone="ai" /> España</span>
          <span className="inline-flex items-center gap-sm text-sm text-(--text-secondary)"><MapMarker tone="gray" /> Argentina</span>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Círculo exterior", "24 px · opacidad 10%"], ["Círculo medio", "14 px · opacidad 20%"], ["Centro", "5 px · sólido"], ["Naranja", "orange-400 halo · orange-500 centro"], ["Gris", "gray-400 / gray-600 · gray-900 centro"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Pendiente de definir: el mapa de jurisdicciones completo (no está en el sistema todavía).", "Cada marcador lleva label con el nombre del país."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "tone", type: `"ai" | "gray"`, default: `"ai"`, description: "Color del marcador." },
          { name: "label", type: "string", description: "Nombre accesible (país o jurisdicción)." },
        ]} />
      </Section>
    </>
  );
}
