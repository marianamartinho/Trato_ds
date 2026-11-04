"use client";
import * as React from "react";
import { AlertTriangle, Archive, Clipboard, Dataflow03 as InfinityIcon, File02, HelpCircle, HomeLine, LogOut01, MessageTextSquare01, Paperclip, PieChart01, Rows03, SearchLg, Settings01, Users01 } from "@untitledui/icons";
import { Avatar, NavItem, NavRail, Tooltip } from "@/components/ui";
import { TRATO_OWL } from "@/lib/brand";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

const items = [
  ["Inicio", HomeLine], ["Archivo", Archive], ["Anexos", Paperclip], ["Documentos", File02], ["Reportes", PieChart01], ["Contactos", Users01],
  ["Workflows", InfinityIcon], ["Plantillas", Rows03], ["Solicitudes", Clipboard], ["Clause Pulse", AlertTriangle], ["Buscar", SearchLg], ["Ayuda", HelpCircle], ["Salir", LogOut01],
] as const;

export default function NavigationDoc() {
  const [active, setActive] = React.useState("Documentos");
  return (
    <>
      <Section title="Nav rail" description="Barra lateral de la plataforma (~1.840 instancias de “_Nav item button”). Clic para cambiar el activo.">
        <Preview canvas="canvas" code={`<NavRail logo={<Logo />} footer={<><NavItem icon={<Settings01 />} label="Configuración" /><Avatar /></>}>
  <NavItem icon={<HomeLine />} label="Inicio" />
  <NavItem icon={<File02 />} label="Documentos" active />
</NavRail>`}>
          <div className="flex h-[640px] overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-secondary)">
            <NavRail
              logo={<img src={TRATO_OWL} alt="Trato" width={36} height={34} className="h-[34px] w-9 object-contain" />}
              footer={<><NavItem icon={<MessageTextSquare01 />} label="Chat" className="bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/30" /><NavItem icon={<Settings01 />} label="Configuración" /><Avatar initials="AT" size="md" /></>}
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
