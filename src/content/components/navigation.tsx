"use client";
import * as React from "react";
import { Archive, ChartPie, CircleHelp, ClipboardList, FileText, House, Infinity as InfinityIcon, LogOut, MessageSquareText, Paperclip, Search, Settings, TriangleAlert, Users, Rows3 } from "lucide-react";
import { Avatar, NavItem, NavRail, Tooltip } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

const items = [
  ["Inicio", House], ["Archivo", Archive], ["Anexos", Paperclip], ["Documentos", FileText], ["Reportes", ChartPie], ["Contactos", Users],
  ["Workflows", InfinityIcon], ["Plantillas", Rows3], ["Solicitudes", ClipboardList], ["Clause Pulse", TriangleAlert], ["Buscar", Search], ["Ayuda", CircleHelp], ["Salir", LogOut],
] as const;

export default function NavigationDoc() {
  const [active, setActive] = React.useState("Documentos");
  return (
    <>
      <Section title="Nav rail" description="Barra lateral de la plataforma (~1.840 instancias de “_Nav item button”). Clic para cambiar el activo.">
        <Preview canvas="canvas" code={`<NavRail logo={<Logo />} footer={<><NavItem icon={<Settings />} label="Configuración" /><Avatar /></>}>
  <NavItem icon={<House />} label="Inicio" />
  <NavItem icon={<FileText />} label="Documentos" active />
</NavRail>`}>
          <div className="flex h-[640px] overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-secondary)">
            <NavRail
              logo={<span className="grid size-9 place-items-center rounded-full bg-gray-blue-700 text-sm font-bold text-white">t</span>}
              footer={<><NavItem icon={<MessageSquareText />} label="Chat" className="bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/30" /><NavItem icon={<Settings />} label="Configuración" /><Avatar initials="AT" size="md" /></>}
            >
              {items.map(([label, Icon]) => (
                <Tooltip key={label} content={label} side="right">
                  <NavItem icon={<Icon />} label={label} active={active === label} onClick={() => setActive(label)} />
                </Tooltip>
              ))}
            </NavRail>
            <div className="hidden w-80 flex-col gap-md rounded-l-2xl border-l border-(--border-secondary) bg-(--bg-primary) p-3xl sm:flex">
              <p className="text-display-xs font-semibold text-(--text-primary)">{active}</p>
              <div className="h-3 w-40 rounded-full bg-(--bg-tertiary)" />
              <div className="h-3 w-56 rounded-full bg-(--bg-tertiary)" />
            </div>
          </div>
        </Preview>
      </Section>
      <Section title="Especificaciones">
        <Specs rows={[["Ancho del rail", "72px"], ["Ítem", "40×40 · radio md"], ["Ícono", "20px · stroke 1.75"], ["Activo", "--bg-brand-subtle + --fg-brand"], ["Separación", "4px"], ["Chat (IA)", "fondo orange-50 · ícono orange-600"]]} />
      </Section>
      <Section title="Uso">
        <Guidelines items={["Cada ítem lleva tooltip a la derecha con el nombre de la sección.", "Configuración, chat y avatar van anclados abajo.", "El rail no se colapsa: en mobile pasa a tab bar (pendiente)."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "NavRail.logo / footer", type: "ReactNode", description: "Zonas superior e inferior." },
          { name: "NavItem.icon / label / active", type: "ReactNode / string / boolean", description: "Ícono, nombre accesible y estado." },
        ]} />
      </Section>
    </>
  );
}
