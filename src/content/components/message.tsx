"use client";
import { Message } from "@/components/ui/message";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function MessageDoc() {
  return (
    <>
      <Section title="Conversación con un abogado" description="Mensaje recibido (con avatar) y enviado, como en LetsLaw.">
        <Preview align="stretch" code={`<Message name="Carmen Milano" time="Hoy 2:36pm">…</Message>
<Message sent name="Tú" time="Hoy 2:39pm">…</Message>`}>
          <div className="mx-auto flex w-full max-w-[520px] flex-col gap-2xl">
            <Message name="Carmen Milano" time="Hoy 2:36pm" avatar={{ initials: "CM" }}>Hola, soy Carmen, abogada de LetsLaw. ¿En qué te puedo ayudar con tu contrato?</Message>
            <Message sent name="Tú" time="Hoy 2:39pm">Quisiera hacer una pregunta sobre la cláusula de rescisión.</Message>
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho", "320 px"], ["Nombre · hora", "14 medium · 12 text-tertiary"], ["Burbuja", "padding 8 12 · texto 16 · radio md"], ["Enviado", "gray-blue-25 · borde gray-blue-200 · texto gray-blue-500"], ["Recibido", "gray-50 · borde gray-200 · avatar 40"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["La esquina sin redondear apunta a quien habla.", "Pendiente de definir: panel de acciones del mensaje (Actions panel True no se usa en los diseños)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "sent", type: "boolean", default: "false", description: "Mensaje propio, alineado a la derecha." },
          { name: "name / time", type: "string", description: "Quién y cuándo." },
          { name: "avatar", type: "{ src?; initials? }", description: "Solo en recibidos." },
        ]} />
      </Section>
    </>
  );
}
