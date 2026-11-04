"use client";
import { Mail01 } from "@/components/icons";
import { Contact } from "@/components/ui/contact";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function ContactDoc() {
  return (
    <>
      <Section title="Personas para compartir" description="Como en Vista participante · Compartir: una persona o dos.">
        <Preview code={`<Contact people={[{ name: "Ana Rodríguez", initials: "AR" }]} />`}>
          <Contact people={[{ name: "Ana Rodríguez", initials: "AR" }]} />
          <Contact people={[{ name: "Felipe López", initials: "FL" }]} badge={<Mail01 className="text-gray-blue-600" />} />
          <Contact people={[{ name: "Legal", initials: "LG" }, { name: "Compras", initials: "CO" }]} />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Avatar", "62 px"], ["Nombre", "11 px · 2 líneas máx."], ["Ícono de app", "20 px · radio xs"], ["Variantes", "People 1 · 2"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["En hojas para compartir y listas de destinatarios recientes.", "El ícono indica por dónde se comparte; es opcional."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "people", type: "[persona] | [persona, persona]", description: "{ name; initials?; src? }." },
          { name: "badge", type: "ReactNode", description: "Ícono de la app abajo a la derecha." },
        ]} />
      </Section>
    </>
  );
}
