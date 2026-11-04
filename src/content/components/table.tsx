"use client";
import * as React from "react";
import { ChevronSelectorVertical, DotsVertical, Edit05, Plus, Trash01 } from "@/components/icons";
import { Avatar, AvatarGroup, Badge, Button, CellStack, Checkbox, DocIcon, FiltersBar, Pagination, SearchInput, Select, TBody, TD, TH, THead, TR, Table } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";
import { DocumentsTableExample } from "./table-examples";

function SortTH({ children }: { children: React.ReactNode }) {
  return (
    <TH>
      <button className="inline-flex items-center gap-xs hover:text-(--text-secondary)">{children}<ChevronSelectorVertical className="size-3.5" /></button>
    </TH>
  );
}

const workflows = [
  { name: "Aprobación de NDA", group: "Legal", steps: 2, owner: "AR", active: true },
  { name: "Contratos de proveedores", group: "Compras", steps: 4, owner: "FL", active: true },
  { name: "Contratos laborales", group: "RR. HH.", steps: 3, owner: "MM", active: false },
];

export default function TableDoc() {
  const [page, setPage] = React.useState(1);
  return (
    <>
      <Section title="Anatomía" description="Header con título de columna (opcionalmente ordenable), filas con divisor y celdas de texto. Es la base de todas las tablas.">
        <Preview align="stretch" canvas="canvas" code={`<Table>
  <THead><TR><TH>Nombre</TH><TH>Grupo</TH></TR></THead>
  <TBody><TR><TD>Aprobación de NDA</TD><TD>Legal</TD></TR></TBody>
</Table>`}>
          <Table>
            <THead><TR className="hover:bg-transparent"><SortTH>Nombre</SortTH><TH>Grupo</TH><SortTH>Pasos</SortTH></TR></THead>
            <TBody>{workflows.map((w) => <TR key={w.name}><TD className="font-medium text-(--text-primary)">{w.name}</TD><TD>{w.group}</TD><TD>{w.steps}</TD></TR>)}</TBody>
          </Table>
        </Preview>
      </Section>

      <Section title="Tipos de celda" description="Los estilos de “Table cell” que usan los diseños.">
        <Preview align="stretch" canvas="canvas" code={`<TD><Checkbox /></TD>                       {/* Lead checkbox */}
<TD><CellStack top="…" bottom="…" /></TD>   {/* Lead text */}
<TD><Badge dot color="success">Activo</Badge></TD>
<TD><Avatar initials="AR" /></TD>
<TD><AvatarGroup>…</AvatarGroup></TD>
<TD><Button variant="tertiary" iconOnly … /></TD>  {/* Action icons */}`}>
          <Table>
            <THead><TR className="hover:bg-transparent"><TH className="w-12"><Checkbox aria-label="Seleccionar todo" /></TH><TH>Lead text</TH><TH>Badge</TH><TH>Avatar</TH><TH>Avatar group</TH><TH>Text</TH><TH className="w-24">Action icons</TH></TR></THead>
            <TBody>
              <TR>
                <TD><Checkbox aria-label="Seleccionar" /></TD>
                <TD><div className="flex items-center gap-lg"><DocIcon /><CellStack top="Contrato de servicios" bottom="Otro · Actualizado 11/08/2025" /></div></TD>
                <TD><Badge dot color="success">Firmado</Badge></TD>
                <TD><Avatar initials="AR" /></TD>
                <TD><AvatarGroup><Avatar initials="P1" /><Avatar initials="P2" /><Avatar initials="FL" /><Avatar initials="MM" /></AvatarGroup></TD>
                <TD>11/08/2025</TD>
                <TD><div className="flex"><Button variant="tertiary" size="sm" iconOnly aria-label="Editar"><Edit05 /></Button><Button variant="tertiary" size="sm" iconOnly aria-label="Eliminar"><Trash01 /></Button></div></TD>
              </TR>
            </TBody>
          </Table>
        </Preview>
      </Section>

      <Section title="Con filtros y paginación" description="Composición estándar: barra de filtros arriba, tabla y paginación abajo.">
        <Preview align="stretch" canvas="canvas" code={`<FiltersBar search={…} filters={…} actions={…} />
<Table>…</Table>
<Pagination page={page} pageCount={3} onPageChange={setPage} />`}>
          <div className="flex flex-col gap-lg">
            <FiltersBar
              search={<SearchInput placeholder="Buscar workflows" />}
              filters={<Select prefix="Estado:" defaultValue="todos" options={[{ value: "todos", label: "Todos" }, { value: "activos", label: "Activos" }]} />}
              actions={<Button><Plus /> Crear workflow</Button>}
            />
            <div className="overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              <table className="w-full border-collapse text-left text-13">
                <THead><TR className="hover:bg-transparent"><SortTH>Workflow</SortTH><TH>Grupo</TH><TH>Responsable</TH><TH>Estado</TH><TH className="w-12" /></TR></THead>
                <TBody>
                  {workflows.map((w) => (
                    <TR key={w.name}>
                      <TD><CellStack top={w.name} bottom={`${w.steps} pasos de aprobación`} /></TD>
                      <TD>{w.group}</TD>
                      <TD><Avatar initials={w.owner} /></TD>
                      <TD>{w.active ? <Badge dot color="success">Activo</Badge> : <Badge dot>Inactivo</Badge>}</TD>
                      <TD><Button variant="tertiary" size="sm" iconOnly aria-label="Acciones"><DotsVertical /></Button></TD>
                    </TR>
                  ))}
                </TBody>
              </table>
              <div className="border-t border-(--border-secondary)"><Pagination page={page} pageCount={3} onPageChange={setPage} /></div>
            </div>
          </div>
        </Preview>
      </Section>

      <Section title="Ejemplo: documentos con carpetas" description="Tabla de Expedientes con carpetas arriba, selección múltiple y barra de acciones masivas. Seleccioná filas para verla.">
        <Preview align="stretch" canvas="canvas" className="p-xl md:p-3xl">
          <DocumentsTableExample />
        </Preview>
      </Section>

      <Section title="Especificaciones">
        <Specs rows={[["Header", "44 px · 12 semibold · bg-secondary"], ["Orden", "chevron-selector-vertical"], ["Fila", "58 px · divisor border-secondary"], ["Padding de celda", "0 16"], ["Fila seleccionada", "bg gray-blue-50"], ["Contenedor", "radio xl · borde border-secondary"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["La primera columna identifica la fila: Lead text con ícono o avatar.", "Acciones de fila al final: íconos visibles o menú ⋮.", "Con selección múltiple, la barra de acciones masivas reemplaza a los filtros.", "Las columnas secundarias se ocultan primero en pantallas angostas."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "Table · THead · TBody · TR · TH · TD", type: "elementos de tabla", description: "Mismas props que los elementos HTML." },
          { name: "TR.selected", type: "boolean", description: "Resalta la fila seleccionada." },
          { name: "CellStack", type: "{ top; bottom; invert? }", description: "Celda de dos líneas (Lead text). invert pone el label arriba en gris." },
        ]} />
      </Section>
    </>
  );
}
