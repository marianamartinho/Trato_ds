"use client";
import { BarList } from "@/components/ui/charts";
import { ContractsFilter } from "@/components/ui/contracts-filter";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

const byJuris = [{ label: "Estados Unidos", value: 42 }, { label: "México", value: 18 }, { label: "España", value: 12 }, { label: "Argentina", value: 10 }];
const byType = [{ label: "Acuerdo de servicios", value: 24 }, { label: "NDA", value: 19 }, { label: "Laboral", value: 17 }, { label: "Licencias", value: 13 }];

export default function ContractsFilterDoc() {
  return (
    <>
      <Section title="Por jurisdicción o por tipo" description="Cambiá el filtro para ver el otro desglose.">
        <Preview code={`<ContractsFilter title="Contratos">
  {(v) => <BarList items={v === "juris" ? byJuris : byType} />}
</ContractsFilter>`}>
          <ContractsFilter title="Contratos" className="w-full max-w-[442px]">
            {(v) => <BarList items={v === "juris" ? byJuris : byType} />}
          </ContractsFilter>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho en Figma", "442 px"], ["Fondo", "gray-blue-25 al 40%"], ["Borde · radio", "gray-blue-50 · xl (12)"], ["Padding · gap", "16 20 · 40"], ["Filtros", "Juris · Type"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Para desgloses del dashboard que cambian de dimensión sin salir de la tarjeta."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title", type: "ReactNode", default: `"Contratos"`, description: "Título de la tarjeta." },
          { name: "value / defaultValue / onValueChange", type: `"juris" | "type"`, default: `"juris"`, description: "Filtro activo." },
          { name: "children", type: "(v) => ReactNode", description: "Contenido según el filtro." },
        ]} />
      </Section>
    </>
  );
}
