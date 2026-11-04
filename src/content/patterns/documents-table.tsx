"use client";
import * as React from "react";
import { Archive, Copy, Download, Folder, FolderInput, MoreVertical, Pencil, Share2, SlidersHorizontal, Trash2, Users, X } from "lucide-react";
import {
  Avatar, AvatarGroup, Badge, Button, CellStack, Checkbox, DocIcon, DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger, Select, TBody, TD, TH, THead, TR, Table,
} from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, Section } from "@/components/docs/doc";

type Row = { id: number; name: string; meta: string; tag?: string; creator: string; p: string[]; created: string; days: number; status: string; sub?: string; pdf?: boolean };
const data: Row[] = [
  { id: 51, name: "51 - Votación (Convertida)", meta: "Otro · Actualizado 11/08/2025", creator: "ABOGADO TRATO", p: ["F", "FL"], created: "11/08/2025", days: 402, status: "Borrador", sub: "Enviado para Vo.Bo." },
  { id: 50, name: "50 - Plantilla con variables física y moral", meta: "Otro · Actualizado 11/08/2025", creator: "ABOGADO TRATO", p: ["P1", "P2"], created: "11/08/2025", days: 402, status: "Borrador" },
  { id: 49, name: "49 - Solicitud de contrato proveedor", meta: "Otro · Actualizado 11/08/2025", tag: "Test", creator: "ABOGADO TRATO", p: ["P1"], created: "11/08/2025", days: 402, status: "Borrador" },
  { id: 25, name: "25 - Lemus 2", meta: "Otro · Actualizado 04/08/2025", tag: "Archivero", creator: "Solicitante TRATO", p: ["L"], created: "10/12/2021", days: 1742, status: "Recibido" },
  { id: 42, name: "42 - contrato277", meta: "Otro · Actualizado 09/06/2025", creator: "—", p: ["P1", "P2"], created: "27/05/2022", days: 1574, status: "Borrador", pdf: true },
];

export default function DocumentsTablePattern() {
  const [sel, setSel] = React.useState<number[]>([]);
  const all = sel.length === data.length ? true : sel.length ? "indeterminate" : false;
  const toggle = (id: number) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  return (
    <>
      <Section title="Lista de documentos con carpetas" description="Composición de Expedientes 11.1 + 11.4. Seleccioná filas para ver la barra de acciones masivas.">
        <Preview align="stretch" canvas="canvas" className="p-xl md:p-3xl">
          <div className="flex flex-col gap-lg">
            <div className="flex items-center justify-between gap-md">
              <h2 className="text-lg font-medium text-(--text-primary)">Mis documentos</h2>
              <Select prefix="Filtrar:" defaultValue="activos" options={[{ value: "activos", label: "Activos" }, { value: "todos", label: "Todos" }]} />
            </div>
            {sel.length > 0 && (
              <div className="flex animate-fade-up items-center gap-md rounded-xl bg-gray-900 px-xl py-md text-sm text-white dark:bg-gray-100 dark:text-gray-900">
                <span className="font-semibold">{sel.length} seleccionado{sel.length > 1 ? "s" : ""}</span>
                <span className="mx-xs h-4 w-px bg-white/20 dark:bg-black/20" />
                {[[FolderInput, "Mover"], [Share2, "Compartir"], [Archive, "Archivar"]].map(([I, l]) => {
                  const Icon = I as typeof FolderInput;
                  return <button key={l as string} className="inline-flex items-center gap-sm rounded-sm px-md py-xs font-medium hover:bg-white/10 dark:hover:bg-black/10"><Icon className="size-4" />{l as string}</button>;
                })}
                <button onClick={() => setSel([])} className="ml-auto grid size-7 place-items-center rounded-sm hover:bg-white/10" aria-label="Limpiar selección"><X className="size-4" /></button>
              </div>
            )}
            <Table>
              <THead>
                <TR className="hover:bg-transparent">
                  <TH className="w-12"><Checkbox checked={all} onCheckedChange={(v) => setSel(v ? data.map((d) => d.id) : [])} aria-label="Seleccionar todo" /></TH>
                  <TH>Nombre de documento</TH><TH className="hidden lg:table-cell">Creador</TH><TH>Participantes</TH><TH className="hidden md:table-cell">Creado</TH><TH>Días</TH><TH>Estatus</TH>
                  <TH className="w-12"><SlidersHorizontal className="size-4" /></TH>
                </TR>
              </THead>
              <TBody>
                <TR className="bg-(--bg-secondary)/50">
                  <TD />
                  <TD colSpan={7}>
                    <div className="flex items-center gap-lg">
                      <span className="grid size-8 place-items-center rounded-full bg-gray-blue-50 text-gray-blue-600 dark:bg-gray-blue-900 dark:text-gray-blue-200"><Folder className="size-4" /></span>
                      <CellStack top="Archivero" bottom="2 documentos" />
                      <span className="ml-auto mr-3xl hidden items-center gap-sm sm:inline-flex"><Users className="size-4 text-(--fg-quaternary)" /><Avatar initials="AR" /></span>
                    </div>
                  </TD>
                </TR>
                {data.map((r) => (
                  <TR key={r.id} selected={sel.includes(r.id)}>
                    <TD><Checkbox checked={sel.includes(r.id)} onCheckedChange={() => toggle(r.id)} aria-label={`Seleccionar ${r.name}`} /></TD>
                    <TD className="min-w-72">
                      <div className="flex items-center gap-lg">
                        <DocIcon type={r.pdf ? "pdf" : "doc"} />
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-(--text-primary)">{r.name}</p>
                          <p className="flex items-center gap-sm text-xs text-(--text-quaternary)">{r.meta}{r.tag && <Badge color="brand" shape="tag" className="h-[18px] px-1.5"><Folder />{r.tag}</Badge>}</p>
                        </div>
                      </div>
                    </TD>
                    <TD className="hidden whitespace-nowrap lg:table-cell">{r.creator}</TD>
                    <TD><AvatarGroup>{r.p.map((p) => <Avatar key={p} initials={p} />)}</AvatarGroup></TD>
                    <TD className="hidden md:table-cell"><CellStack invert top="Creado" bottom={r.created} /></TD>
                    <TD><Badge color="error">{r.days}</Badge></TD>
                    <TD>{r.sub ? <CellStack top={<span className="font-normal">{r.status}</span>} bottom={r.sub} /> : <span className="text-(--text-primary)">{r.status}</span>}</TD>
                    <TD>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="tertiary" size="sm" iconOnly aria-label="Acciones"><MoreVertical /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem icon={<Pencil />}>Renombrar</DropdownMenuItem>
                          <DropdownMenuItem icon={<FolderInput />}>Mover a carpeta</DropdownMenuItem>
                          <DropdownMenuItem icon={<Copy />}>Duplicar</DropdownMenuItem>
                          <DropdownMenuItem icon={<Download />}>Descargar</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem icon={<Trash2 />} destructive>Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
        </Preview>
      </Section>
      <Section title="Reglas">
        <Guidelines items={["Carpetas siempre arriba, separadas de los documentos.", "La barra de acciones masivas reemplaza a los filtros mientras hay selección.", "Los días se muestran como badge: error cuando exceden el SLA del workflow.", "Las columnas secundarias (Creador, Creado) se ocultan primero en pantallas angostas."]} />
      </Section>
    </>
  );
}
