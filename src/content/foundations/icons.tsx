import * as I from "lucide-react";
import { Section, Guidelines, Specs } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";

const top: [string, React.ComponentType<{ className?: string }>, string, number][] = [
  ["close-line", I.X, "X", 340], ["chevron-down", I.ChevronDown, "ChevronDown", 310], ["users-plus", I.UserPlus, "UserPlus", 275],
  ["stars-01 (IA)", I.Sparkles, "Sparkles", 215], ["file-02", I.FileText, "FileText", 200], ["tag-01", I.Tag, "Tag", 190],
  ["edit-05", I.SquarePen, "SquarePen", 190], ["settings-01", I.Settings, "Settings", 170], ["link-01", I.Link, "Link", 170],
  ["brackets", I.Braces, "Braces", 170], ["alarm-clock", I.AlarmClock, "AlarmClock", 170], ["message-dots-circle", I.MessageCircleMore, "MessageCircleMore", 145],
  ["alert-octagon", I.OctagonAlert, "OctagonAlert", 120], ["alert-triangle", I.TriangleAlert, "TriangleAlert", 120], ["info-circle", I.Info, "Info", 120],
  ["eye-line", I.Eye, "Eye", 110], ["scales-02 (legal)", I.Scale, "Scale", 57], ["folder", I.Folder, "Folder", 0],
  ["home", I.House, "House", 0], ["archive", I.Archive, "Archive", 0], ["paperclip", I.Paperclip, "Paperclip", 0],
  ["pie-chart", I.ChartPie, "ChartPie", 0], ["search", I.Search, "Search", 0], ["log-out", I.LogOut, "LogOut", 0],
];

export default function Icons() {
  return (
    <>
      <Section
        title="Set de íconos"
        description="El archivo mezcla Untitled UI Icons y Remix Icons. En código estandarizamos en Lucide (mismo trazo lineal de 2 px, licencia ISC, ya incluido en shadcn/ui)."
      >
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--border-secondary) sm:grid-cols-4 lg:grid-cols-6">
          {top.map(([fig, Icon, code, n]) => (
            <div key={fig} className="group flex flex-col items-center gap-md bg-(--bg-primary) px-md py-xl text-center">
              <Icon className="size-6 text-(--fg-secondary) transition-colors group-hover:text-(--fg-brand)" />
              <code className="font-mono text-xs font-medium text-(--text-primary)">{code}</code>
              <span className="text-[11px] leading-tight text-(--text-quaternary)">
                {fig}
                {n > 0 && ` · ~${n}`}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-md text-xs text-(--text-quaternary)">Nombre en Figma · cantidad aproximada de instancias en el archivo.</p>
      </Section>
      <Section title="Tamaños">
        <Specs rows={[["Botón xs / badge", "14px · size-3.5"], ["Inputs, menús, botón sm", "16px · size-4"], ["Botón md, nav rail", "18–20px · size-5"], ["Íconos destacados (modales, empty states)", "20–24px · size-6"]]} />
      </Section>
      <Section title="Reglas">
        <Guidelines
          items={[
            "El ícono Sparkles (stars-01) significa IA y va siempre en naranja (--fg-ai).",
            "Scale (scales-02) identifica contenido legal / normativa (Clause Pulse, LetsLaw, Lefebvre).",
            "Íconos de acción sin texto llevan aria-label y tooltip.",
            "Color por defecto: --fg-secondary. Decorativos o de ayuda: --fg-quaternary.",
          ]}
        />
        <CodeBlock className="mt-xl" code={`import { Sparkles } from "lucide-react";

<Sparkles className="size-4 text-(--fg-ai)" />`} />
      </Section>
    </>
  );
}
