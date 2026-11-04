"use client";
import { LineChart, BarList, type ChartDatum } from "@/components/ui/charts";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

const firmas: ChartDatum[] = [
  { label: "Ene", value: 62, detail: "Enero, 2026" },
  { label: "Feb", value: 71, detail: "Febrero, 2026" },
  { label: "Mar", value: 78, detail: "Marzo, 2026" },
  { label: "Abr", value: 86, detail: "Abril, 2026" },
  { label: "May", value: 104, detail: "Mayo, 2026" },
  { label: "Jun", value: 108, detail: "Junio, 2026" },
  { label: "Jul", value: 121, detail: "Julio, 2026" },
  { label: "Ago", value: 112, detail: "Agosto, 2026" },
  { label: "Sep", value: 128, detail: "Septiembre, 2026" },
  { label: "Oct", value: 124, detail: "Octubre, 2026" },
  { label: "Nov", value: 131, detail: "Noviembre, 2026" },
  { label: "Dic", value: 138, detail: "Diciembre, 2026" },
];

const tipos = [
  { label: "Acuerdo de servicios", value: 24 },
  { label: "NDA", value: 19 },
  { label: "Laboral", value: 17 },
  { label: "Licencias", value: 13 },
  { label: "Otros", value: 13 },
];

/** Superficie de las tarjetas del dashboard (Figma: bg gray-blue-50/40, borde, radio 2xl, px 20 py 16). */
function ChartCard({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-xl rounded-2xl border border-(--border-secondary) bg-(--bg-primary) px-2xl py-xl">
      <div className="flex items-center justify-between gap-md">
        <h3 className="text-sm font-medium text-(--text-primary)">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

export default function ChartsDoc() {
  return (
    <>
      <Section
        title="Línea con área"
        description="“Signatures over time” del New Dashboard: 12 meses, línea suave con área degradada, marcador y tooltip. Pasá el mouse o enfocá el gráfico y usá las flechas."
      >
        <Preview
          align="stretch"
          code={`<LineChart
  aria-label="Firmas por mes en 2026"
  data={[{ label: "Ene", value: 62, detail: "Enero, 2026" }, /* … */]}
  formatValue={(v) => \`\${v} firmas\`}
  defaultActiveIndex={8}
/>`}
        >
          <ChartCard title="Firmas en el tiempo">
            <LineChart aria-label="Firmas por mes en 2026" data={firmas} formatValue={(v) => `${v} firmas`} defaultActiveIndex={8} />
          </ChartCard>
        </Preview>
      </Section>

      <Section title="Sin datos" description="Ejemplo 1839:52379: sólo las líneas guía punteadas. Acompañalo con un texto que explique por qué está vacío.">
        <Preview align="stretch" code={`<LineChart aria-label="Firmas por mes" data={[]} />`}>
          <ChartCard title="Firmas en el tiempo">
            <LineChart aria-label="Firmas por mes, sin datos" data={[]} />
          </ChartCard>
        </Preview>
      </Section>

      <Section title="Barras horizontales" description="“Contracts by type”: barras proporcionales al valor, con la etiqueta adentro y el número a la derecha.">
        <Preview
          align="stretch"
          code={`<BarList
  aria-label="Contratos por tipo"
  items={[
    { label: "Acuerdo de servicios", value: 24 },
    { label: "NDA", value: 19 },
    { label: "Laboral", value: 17 },
  ]}
/>`}
        >
          <div className="w-full max-w-[426px]">
            <ChartCard
              title="Contratos por tipo"
              action={<a href="#" className="text-xs font-medium text-(--text-quaternary) underline">Ver más</a>}
            >
              <BarList aria-label="Contratos por tipo" items={tipos} />
            </ChartCard>
          </div>
        </Preview>
      </Section>

      <Section title="Especificaciones">
        <Specs
          rows={[
            ["Alto del área de trazado", "134 px"],
            ["Líneas guía (_Y-axis)", "5 · punteadas · border-secondary"],
            ["Línea / marcador", "gray-blue-400 · 2 px / 12 px"],
            ["Área", "gray-blue-400 16 % → 0 %"],
            ["Eje X", "text-xs · text-tertiary · px-3xl"],
            ["Tooltip", "gray-600 · radio md · px-xl py-md"],
            ["Barra", "22 px · radio md · gray-blue-100"],
            ["Texto de barra / valor", "10 px · gray-blue-500 / gray-500"],
            ["Separación entre barras", "4 px (xs)"],
            ["Tarjeta", "radio 2xl · px-2xl py-xl · gap-xl"],
          ]}
        />
      </Section>

      <Section title="Uso">
        <Guidelines
          items={[
            "La escala Y siempre arranca en 0. El máximo se redondea a un número cerrado.",
            "En BarList el ancho de cada barra es proporcional al mayor valor. Ordená de mayor a menor.",
            "El tooltip muestra el valor con unidad (“128 firmas”) y el período completo (“Abril, 2026”).",
            "Usá `defaultActiveIndex` sólo para destacar un punto (por ejemplo, el mes actual).",
            "Pendiente de definir: “Contracts by jurisdiction” (mapa mundial en 2213:30565) no se implementa como componente.",
            "Pendiente de definir: etiquetas del eje Y, leyenda y gráficos con varias series (Series 2 y 3 están ocultas en el Figma).",
          ]}
        />
      </Section>

      <Section title="Props">
        <h3 className="mb-md text-md font-semibold text-(--text-primary)">LineChart</h3>
        <PropsTable
          props={[
            { name: "data", type: "{ label: string; value: number; detail?: string }[]", description: "Un punto por período. `label` va al eje X; `detail` al tooltip." },
            { name: "aria-label", type: "string", description: "Descripción del gráfico para lectores de pantalla (obligatoria)." },
            { name: "height", type: "number", default: "134", description: "Alto del área de trazado en px." },
            { name: "gridLines", type: "number", default: "5", description: "Cantidad de líneas guía horizontales." },
            { name: "formatValue", type: "(v: number) => string", default: "String", description: "Texto del valor en el tooltip." },
            { name: "defaultActiveIndex", type: "number", description: "Punto destacado cuando no hay hover ni foco." },
          ]}
        />
        <h3 className="mb-md mt-3xl text-md font-semibold text-(--text-primary)">BarList</h3>
        <PropsTable
          props={[
            { name: "items", type: "{ label: string; value: number }[]", description: "Filas a mostrar, en el orden dado." },
            { name: "formatValue", type: "(v: number) => string", default: "String", description: "Formato del número de la derecha." },
          ]}
        />
      </Section>
    </>
  );
}
