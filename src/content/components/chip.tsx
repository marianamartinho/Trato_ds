"use client";
import * as React from "react";
import { File02, Scales02 } from "@/components/icons";
import { Chip, QuickAction } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function ChipDoc() {
  const [chips, setChips] = React.useState(["Master services agreement · TR-2024-0387", "NDA · Grupo Invex"]);
  return (
    <>
      <Section title="Context chip" description="Documentos adjuntos al composer del chat IA. Se pueden quitar.">
        <Preview code={`<Chip icon={<File02 />} onRemove={() => remove(id)}>
  Master services agreement · TR-2024-0387
</Chip>`}>
          {chips.map((c) => <Chip key={c} icon={<File02 />} onRemove={() => setChips(chips.filter((x) => x !== c))}>{c}</Chip>)}
          <Chip icon={<Scales02 />}>Ley 34/2002 (LSSI)</Chip>
          {chips.length < 2 && <button className="text-xs font-semibold text-(--text-brand)" onClick={() => setChips(["Master services agreement · TR-2024-0387", "NDA · Grupo Invex"])}>Restablecer</button>}
        </Preview>
      </Section>
      <Section title="Quick action" description="Accesos con contador del Operational Overview.">
        <Preview code={`<QuickAction label="Assigned approval" count={13} />
<QuickAction label="Signatures" count={13} dotColor="var(--color-orange-600)" />`}>
          <div className="grid w-full max-w-[448px] grid-cols-2 gap-md">
            <QuickAction label="Assigned approval" count={13} />
            <QuickAction label="Grabbed requests" count={34} />
            <QuickAction label="Signatures" count={13} dotColor="var(--color-orange-600)" />
            <QuickAction label="Reviews" count={42} dotColor="var(--color-orange-300)" />
          </div>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Chip: objeto seleccionado como contexto, no una acción.", "Quick action: navega a la lista filtrada; el contador es el total pendiente."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "Chip.icon / onRemove", type: "ReactNode / () => void", description: "Ícono y botón de quitar." },
          { name: "QuickAction.label / count / dotColor", type: "string / number / string", description: "Texto, contador y color de categoría." },
        ]} />
      </Section>
    </>
  );
}
