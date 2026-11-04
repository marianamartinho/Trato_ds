"use client";
import { Download02, PlayCircle, XClose } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { HeaderBar } from "@/components/ui/header-bar";
import { Tooltip } from "@/components/ui/tooltip";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function HeaderBarDoc() {
  return (
    <>
      <Section title="Editor de documentos" description="Título del documento a la izquierda y acciones a la derecha.">
        <Preview align="stretch" code={`<HeaderBar title="5121 - Contrato de Prueba" actions={<><Button variant="soft" iconOnly …/><Button>Guardar</Button></>} />`}>
          <div className="overflow-hidden rounded-xl border border-(--border-secondary)">
            <HeaderBar
              title="5121 - Contrato de Prueba"
              actions={<>
                <Tooltip content="Vista previa"><Button variant="tertiary" iconOnly aria-label="Vista previa"><PlayCircle /></Button></Tooltip>
                <Tooltip content="Descargar"><Button variant="soft" iconOnly aria-label="Descargar"><Download02 /></Button></Tooltip>
                <Button>Guardar</Button>
                <Button variant="tertiary" iconOnly aria-label="Cerrar"><XClose /></Button>
              </>}
            />
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Alto", "64 px"], ["Título", "16 medium · text-primary"], ["Acciones", "botones 40 px · gap 12"], ["Primaria", "Guardar · primary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Una sola acción primaria.", "Íconos sin texto con tooltip y aria-label."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title", type: "ReactNode", description: "Nombre del documento." },
          { name: "leading", type: "ReactNode", description: "Elemento antes del título (volver, ícono)." },
          { name: "actions", type: "ReactNode", description: "Botones a la derecha." },
        ]} />
      </Section>
    </>
  );
}
