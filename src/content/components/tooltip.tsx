"use client";
import { HelpCircle, InfoCircle, Link01 as LinkIcon } from "@/components/icons";
import { Button, Tooltip } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function TooltipDoc() {
  return (
    <>
      <Section title="Ejemplos" description="Pasá el mouse o enfocá con teclado.">
        <Preview code={`<Tooltip content="Copiar enlace">
  <Button variant="secondary" iconOnly aria-label="Copiar enlace"><Link /></Button>
</Tooltip>`}>
          <Tooltip content="Copiar enlace"><Button variant="secondary" iconOnly aria-label="Copiar enlace"><LinkIcon /></Button></Tooltip>
          <Tooltip content="Avg. time to sign" description="Días promedio entre el envío y la última firma." side="bottom">
            <button className="inline-flex items-center gap-sm text-sm text-(--text-tertiary)">Avg. time to sign <InfoCircle className="size-3.5" /></button>
          </Tooltip>
          <Tooltip content="El editor está bloqueado" description="Hay una propuesta de cambio pendiente de aceptar." side="right">
            <span className="text-(--fg-quaternary)"><HelpCircle className="size-5" /></span>
          </Tooltip>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Obligatorio en botones de solo ícono.", "Máximo 2 líneas. Si necesitás más, usá un popover o un helper text.", "Nunca pongas acciones dentro de un tooltip."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "content", type: "ReactNode", description: "Título del tooltip." },
          { name: "description", type: "ReactNode", description: "Texto secundario opcional." },
          { name: "side", type: `"top" | "right" | "bottom" | "left"`, default: `"top"`, description: "Posición." },
        ]} />
      </Section>
    </>
  );
}
