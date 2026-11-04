"use client";
import { DotsVertical, Sliders04 } from "@untitledui/icons";
import { Avatar, AvatarGroup, Badge, Button, CellStack, Checkbox, DocIcon, TBody, TD, TH, THead, TR, Table } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

const rows = [
  { id: 51, name: "51 - Votación (Convertida)", meta: "Otro · Actualizado 11/08/2025", p: ["F", "FL"], created: "11/08/2025", days: 402, status: "Borrador", sub: "Enviado para Vo.Bo." },
  { id: 50, name: "50 - Plantilla con variables física y moral", meta: "Otro · Actualizado 11/08/2025", p: ["P1", "P2"], created: "11/08/2025", days: 402, status: "Borrador" },
  { id: 25, name: "25 - Lemus 2", meta: "Otro · Actualizado 04/08/2025", p: ["L"], created: "10/12/2021", days: 1742, status: "Recibido" },
];

export default function TableDoc() {
  return (
    <>
      <Section title="Tabla de documentos" description="El componente más usado del archivo (~4.900 celdas). Celdas de dos líneas, selección y acciones por fila.">
        <Preview align="stretch" canvas="canvas" code={`<Table>
  <THead><TR><TH><Checkbox /></TH><TH>Nombre de documento</TH>…</TR></THead>
  <TBody>
    <TR>
      <TD><Checkbox /></TD>
      <TD><div className="flex items-center gap-lg"><DocIcon /><CellStack top="51 - Votación" bottom="Otro · Actualizado 11/08/2025" /></div></TD>
      <TD><Badge color="error">402</Badge></TD>
    </TR>
  </TBody>
</Table>`}>
          <Table>
            <THead>
              <TR className="hover:bg-transparent">
                <TH className="w-12"><Checkbox aria-label="Seleccionar todo" /></TH>
                <TH>Nombre de documento</TH>
                <TH>Participantes</TH>
                <TH>Creado</TH>
                <TH>Días</TH>
                <TH>Estatus</TH>
                <TH className="w-12"><Sliders04 className="size-4" /></TH>
              </TR>
            </THead>
            <TBody>
              {rows.map((r, i) => (
                <TR key={r.id} selected={i === 0}>
                  <TD><Checkbox defaultChecked={i === 0} aria-label={`Seleccionar ${r.name}`} /></TD>
                  <TD className="min-w-72"><div className="flex items-center gap-lg"><DocIcon /><CellStack top={r.name} bottom={r.meta} /></div></TD>
                  <TD><AvatarGroup>{r.p.map((p) => <Avatar key={p} initials={p} />)}</AvatarGroup></TD>
                  <TD><CellStack invert top="Creado" bottom={r.created} /></TD>
                  <TD><Badge color="error">{r.days}</Badge></TD>
                  <TD>{r.sub ? <CellStack top={r.status} bottom={r.sub} /> : <span className="text-(--text-primary)">{r.status}</span>}</TD>
                  <TD><Button variant="tertiary" size="sm" iconOnly aria-label="Acciones"><DotsVertical /></Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Header", "44px · text-xs semibold · bg-secondary"], ["Fila", "58px · divisor border-secondary"], ["Padding de celda", "0 16px"], ["Fila seleccionada", "bg gray-blue-50"], ["Texto principal", "13–14px semibold --text-primary"], ["Meta", "12px --text-quaternary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["La primera columna identifica el objeto: ícono + nombre + meta.", "Fechas: label “Creado” arriba y valor abajo.", "Acciones de fila: ⋮ al final, siempre visible.", "Con selección múltiple, mostrar barra de acciones masivas sobre la tabla."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "TR.selected", type: "boolean", description: "Resalta la fila seleccionada." },
          { name: "CellStack", type: "{ top, bottom, invert? }", description: "Celda de dos líneas; invert pone el label arriba en gris." },
        ]} />
      </Section>
    </>
  );
}
