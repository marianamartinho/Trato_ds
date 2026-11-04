"use client";
import { Alert, Button } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function AlertDoc() {
  return (
    <>
      <Section title="Banner" description="Barra a todo el ancho sobre el documento o la página (Auditoría Ayudas · Sección 5).">
        <Preview align="stretch" canvas="plain" className="gap-md p-0 md:p-0" code={`<Alert layout="banner" tone="warning" action={<Button size="xs" variant="secondary">Revisar</Button>}>
  Para enviar a firmar, revisá la configuración de participantes.
</Alert>`}>
          <Alert layout="banner" tone="warning" action={<Button size="xs" variant="secondary">Revisar</Button>}>
            Para enviar a firmar, revisá la configuración de participantes.
          </Alert>
          <Alert layout="banner" tone="ai" onDismiss={() => {}}>
            Clause Pulse detectó 2 cláusulas en conflicto con la normativa vigente.
          </Alert>
        </Preview>
      </Section>
      <Section title="Inline">
        <Preview align="stretch" code={`<Alert tone="error" title="No pudimos leer el PDF">
  Probá con un archivo sin contraseña o de menos de 20 MB.
</Alert>`}>
          <Alert tone="info" title="Documento en espera">El documento está esperando la aprobación de 2 participantes.</Alert>
          <Alert tone="success" title="Documento firmado" onDismiss={() => {}}>Todas las partes firmaron el 11/08/2025.</Alert>
          <Alert tone="error" title="No pudimos leer el PDF" action={<><Button size="sm" variant="secondary">Subir otro archivo</Button><Button size="sm" variant="link">Más información</Button></>}>
            Probá con un archivo sin contraseña o de menos de 20 MB.
          </Alert>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Banner: estado que bloquea o condiciona toda la vista.", "Inline: información de una sección; puede tener acciones.", "Tono ai solo para hallazgos generados por IA.", "Siempre con texto accionable: qué pasa y qué hacer."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "tone", type: `"info" | "warning" | "error" | "success" | "ai"`, default: `"info"`, description: "Significado e ícono." },
          { name: "layout", type: `"inline" | "banner"`, default: `"inline"`, description: "Tarjeta o barra a todo el ancho." },
          { name: "title / action", type: "ReactNode", description: "Título y acciones." },
          { name: "onDismiss", type: "() => void", description: "Muestra botón de cerrar." },
        ]} />
      </Section>
    </>
  );
}
