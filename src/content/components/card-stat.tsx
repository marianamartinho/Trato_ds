"use client";
import { AlertCircle } from "lucide-react";
import { Button, Card, CardHeader, Select, Stat, StatGroup } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function CardStatDoc() {
  return (
    <>
      <Section title="Grupo de KPIs" description="Fila superior del Dashboard. Divisores verticales en desktop, grilla de 2 en mobile.">
        <Preview align="stretch" canvas="canvas" code={`<StatGroup>
  <Stat label="Avg. time to sign" info value="10 days"
        delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
  <Stat label="Signed this month" value="123" />
</StatGroup>`}>
          <StatGroup>
            <Stat label="Avg. time to sign" info value="10 days" delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
            <Stat label="Avg. negotiation time" info value="12 days" delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
            <div className="flex flex-col gap-md">
              <span className="text-sm text-(--text-tertiary)">Expiring soon</span>
              <a href="#" className="inline-flex items-center gap-sm text-lg font-medium text-orange-600 underline underline-offset-4"><AlertCircle className="size-4" /> 5 contracts</a>
            </div>
            <Stat label="Signed this month" value="123" />
          </StatGroup>
        </Preview>
      </Section>
      <Section title="Card">
        <Preview align="stretch" canvas="canvas" code={`<Card>
  <CardHeader title="Contracts by type" action={<Button variant="link" size="sm">View more</Button>} />
  …
</Card>`}>
          <div className="grid gap-xl md:grid-cols-2">
            <Card>
              <CardHeader title="Contracts by type" action={<Button variant="link" size="sm">View more</Button>} />
              {[["Service agreement", 24], ["NDA", 19], ["Employment", 17], ["Licensing", 13]].map(([l, v]) => (
                <div key={l} className="mb-md flex items-center gap-lg">
                  <span className="h-5 rounded-sm bg-gray-blue-100 px-md text-xs leading-5 text-gray-blue-600 dark:bg-gray-blue-900 dark:text-gray-blue-200" style={{ width: `${(v as number) * 3.4}%` }}>{l}</span>
                  <span className="ml-auto text-xs text-(--text-quaternary)">{v}</span>
                </div>
              ))}
            </Card>
            <Card>
              <CardHeader title="Operational Overview" action={<Select size="sm" defaultValue="me" options={[{ value: "me", label: "Me" }, { value: "team", label: "Team" }]} />} />
              <p className="text-sm text-(--text-tertiary)">Pending actions</p>
              <p className="text-display-xs font-semibold text-(--text-primary)">147</p>
            </Card>
          </div>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Valor primero, contexto después: la variación va en 10–12px al lado del valor.", "Flecha hacia abajo puede ser positiva (menos días para firmar): definí positive explícitamente.", "Cards: título text-md medium, acción opcional a la derecha."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "Stat.label / value", type: "string / ReactNode", description: "Nombre y valor." },
          { name: "Stat.delta", type: `{ value; trend: "up"|"down"; positive?; caption? }`, description: "Variación vs. período anterior." },
          { name: "Stat.info", type: "boolean", description: "Ícono de información junto al label." },
          { name: "CardHeader.title / action", type: "ReactNode", description: "Encabezado de tarjeta." },
        ]} />
      </Section>
    </>
  );
}
