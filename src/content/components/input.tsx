"use client";
import { HelpCircle, Mail01 } from "@/components/icons";
import * as React from "react";
import { Field, Input, SearchInput, Tooltip } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { PropsTable, Section, Specs } from "@/components/docs/doc";

export default function InputDoc() {
  return (
    <>
      <Section title="Campo con label y ayuda">
        <Preview align="start" code={`<Field label="Email del firmante" hint="Le enviaremos el enlace de firma." required>
  <Input leadingIcon={<Mail01 />} placeholder="nombre@empresa.com" />
</Field>`}>
          <Field label="Email del firmante" hint="Le enviaremos el enlace de firma." required className="w-full max-w-[384px]">
            <Input leadingIcon={<Mail01 />} placeholder="nombre@empresa.com" />
          </Field>
          <Field label="Referencia interna" className="w-full max-w-[384px]">
            <Input placeholder="TR-2024-0387" trailing={<Tooltip content="Código que aparece en el PDF"><button aria-label="Ayuda"><HelpCircle /></button></Tooltip>} />
          </Field>
        </Preview>
      </Section>
      <Section title="Estados">
        <Preview align="start" code={`<Field label="CUIT" error="El CUIT debe tener 11 dígitos.">
  <Input invalid defaultValue="20-1234" />
</Field>`}>
          <Field label="Default" className="w-56"><Input placeholder="Placeholder" /></Field>
          <Field label="Con error" error="El CUIT debe tener 11 dígitos." className="w-56"><Input invalid defaultValue="20-1234" /></Field>
          <Field label="Deshabilitado" className="w-56"><Input disabled defaultValue="ABOGADO TRATO" /></Field>
        </Preview>
      </Section>
      <Section title="Búsqueda" description="Input con ícono de búsqueda y, opcional, selector de alcance (leading dropdown).">
        <Preview code={`<SearchInput scopes={["Nombre", "ID"]} placeholder="Buscar documentos" />`}>
          <SearchInput scopes={["Nombre", "ID", "Participante"]} placeholder="Buscar documentos" className="w-full max-w-[448px]" />
          <SearchInput placeholder="Buscar workflows" className="w-72" />
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Alto", "40px"], ["Padding", "0 12px"], ["Radio", "md · 8px"], ["Borde", "--border-primary"], ["Foco", "borde brand + ring 4 px gray-blue-100"], ["Texto", "14/20 · placeholder --text-placeholder"]]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "leadingIcon", type: "ReactNode", description: "Ícono a la izquierda." },
          { name: "trailing", type: "ReactNode", description: "Elemento a la derecha (ayuda, unidad)." },
          { name: "invalid", type: "boolean", default: "false", description: "Estilo de error y aria-invalid." },
          { name: "Field.label / hint / error", type: "string", description: "Label, texto de ayuda y mensaje de error." },
        ]} />
      </Section>
    </>
  );
}
