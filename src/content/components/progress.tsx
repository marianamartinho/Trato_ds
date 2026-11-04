"use client";
import { Zap } from "@untitledui/icons";
import { Progress, SegmentedBar } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { PropsTable, Section } from "@/components/docs/doc";

export default function ProgressDoc() {
  return (
    <>
      <Section title="Uso de IA" description="Créditos de IA del mes (NEW AI Chat · 8.x).">
        <Preview align="stretch" code={`<Progress value={19} />`}>
          {[19, 82, 100].map((v) => (
            <div key={v} className="flex items-center gap-lg text-xs text-(--text-quaternary)">
              <Zap className="size-3.5" /> AI usage: {v}% of this month’s allowance
              <Progress value={v} tone={v >= 100 ? "error" : v > 80 ? "ai" : "accent"} className="w-32" />
            </div>
          ))}
        </Preview>
      </Section>
      <Section title="Ciclo de vida" description="Barra segmentada del Dashboard: un color por etapa.">
        <Preview align="stretch" code={`<SegmentedBar segments={[
  { label: "Draft", value: 31, color: "var(--color-gray-400)" },
  { label: "Negotiation", value: 12, color: "var(--color-yellow-300)" },
  { label: "Approval", value: 24, color: "var(--color-blue-light-400)" },
  { label: "Signing", value: 8, color: "var(--color-success-500)" },
]} />`}>
          <SegmentedBar segments={[
            { label: "Draft", value: 31, color: "var(--color-gray-400)" },
            { label: "Negotiation", value: 12, color: "var(--color-yellow-300)" },
            { label: "Approval", value: 24, color: "var(--color-blue-light-400)" },
            { label: "Signing", value: 8, color: "var(--color-success-500)" },
          ]} />
        </Preview>
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "Progress.value", type: "number (0–100)", description: "Porcentaje." },
          { name: "Progress.tone", type: `"accent" | "brand" | "ai" | "error"`, default: `"accent"`, description: "Color de la barra." },
          { name: "SegmentedBar.segments", type: "{ label; value; color }[]", description: "Etapas." },
        ]} />
      </Section>
    </>
  );
}
