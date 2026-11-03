"use client";
import * as React from "react";
import { SearchInput } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function SearchDoc() {
  const [scope, setScope] = React.useState("Nombre");
  return (
    <>
      <Section title="Con alcance" description="Patrón del header de Documentos: el usuario elige en qué campo buscar.">
        <Preview code={`const [scope, setScope] = useState("Nombre");

<SearchInput
  scopes={["Nombre", "ID", "Participante"]}
  scope={scope}
  onScopeChange={setScope}
  placeholder="Buscar documentos"
/>`}>
          <SearchInput scopes={["Nombre", "ID", "Participante"]} scope={scope} onScopeChange={setScope} placeholder="Buscar documentos" className="w-full max-w-[448px]" />
        </Preview>
      </Section>
      <Section title="Simple">
        <Preview code={`<SearchInput placeholder="Buscar workflows" />`}>
          <SearchInput placeholder="Buscar workflows" className="w-72" />
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Ubicación: header de la página, a la izquierda de las acciones.", "Ancho mínimo 280px en desktop.", "Buscar mientras se escribe con debounce de 250ms; Enter no es obligatorio."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "scopes", type: "string[]", description: "Opciones del selector de alcance. Si se omite, no se muestra." },
          { name: "scope / onScopeChange", type: "string / (s) => void", description: "Alcance controlado." },
          { name: "...input", type: "InputHTMLAttributes", description: "value, onChange, placeholder…" },
        ]} />
      </Section>
    </>
  );
}
