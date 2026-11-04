"use client";
import * as React from "react";
import { EditorToolbar, ToolbarMenuButton, type Align } from "@/components/ui/editor-toolbar";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

export default function EditorToolbarDoc() {
  const [marks, setMarks] = React.useState({ bold: true, italic: false, underline: false });
  const [align, setAlign] = React.useState<Align>("left");
  return (
    <>
      <Section title="Toolbar del Document Editor" description="Probá activar negrita, cursiva y la alineación.">
        <Preview align="stretch" code={`<EditorToolbar marks={marks} onToggleMark={toggle} align={align} onAlign={setAlign}
  trailing={<><ToolbarMenuButton>Insertar firma</ToolbarMenuButton><ToolbarMenuButton>Acciones</ToolbarMenuButton></>} />`}>
          <div className="overflow-hidden rounded-xl border border-(--border-secondary)">
            <EditorToolbar
              marks={marks}
              onToggleMark={(m) => setMarks({ ...marks, [m]: !marks[m] })}
              align={align}
              onAlign={setAlign}
              trailing={<><ToolbarMenuButton>Insertar firma</ToolbarMenuButton><ToolbarMenuButton>Acciones</ToolbarMenuButton></>}
            />
            <p className="p-3xl text-sm text-(--text-secondary)" style={{ fontWeight: marks.bold ? 600 : 400, fontStyle: marks.italic ? "italic" : "normal", textDecoration: marks.underline ? "underline" : "none", textAlign: align }}>
              Cualquiera de las partes podrá dar por terminado el contrato con al menos quince (15) días de antelación.
            </p>
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Alto", "52 px"], ["Íconos", "20 px · gap 12"], ["Divisores", "1 × 22 px"], ["Tamaño de texto", "“30” con chevron"], ["Menús", "Insertar firma · Acciones"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Los botones de formato muestran su estado con aria-pressed.", "Pendiente de definir: contenido de los menús de bloque, tamaño, color, “Insertar firma” y “Acciones”."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "marks / onToggleMark", type: "{ bold?; italic?; underline? } / (m) => void", description: "Formato activo." },
          { name: "align / onAlign", type: `"left" | "center" | "right" | "justify"`, description: "Alineación." },
          { name: "size / color", type: "number / string", default: "30", description: "Valores mostrados." },
          { name: "trailing", type: "ReactNode", description: "Menús a la derecha (ToolbarMenuButton)." },
        ]} />
      </Section>
    </>
  );
}
