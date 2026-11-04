import * as I from "@/components/icons";
import { Guidelines, Section, Specs } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";

type IconC = React.ComponentType<{ className?: string }>;

/** Íconos más usados en los diseños de Trato (nombre en Figma · componente · instancias aprox.). */
const top: [string, IconC, string, number][] = [
  ["dots-vertical", I.DotsVertical, "DotsVertical", 627], ["chevron-down", I.ChevronDown, "ChevronDown", 607], ["settings-01", I.Settings01, "Settings01", 311],
  ["users-plus", I.UsersPlus, "UsersPlus", 274], ["alert-triangle", I.AlertTriangle, "AlertTriangle", 256], ["chevron-up", I.ChevronUp, "ChevronUp", 238],
  ["stars-01", I.Stars01, "Stars01", 219], ["link-01", I.Link01, "Link01", 206], ["tag-01", I.Tag01, "Tag01", 189],
  ["edit-05", I.Edit05, "Edit05", 187], ["file-02", I.File02, "File02", 186], ["brackets", I.Brackets, "Brackets", 166],
  ["alarm-clock", I.AlarmClock, "AlarmClock", 166], ["chevron-right", I.ChevronRight, "ChevronRight", 148], ["users-01", I.Users01, "Users01", 142],
  ["message-dots-circle", I.MessageDotsCircle, "MessageDotsCircle", 140], ["check", I.Check, "Check", 138], ["help-circle", I.HelpCircle, "HelpCircle", 132],
  ["message-text-square-01", I.MessageTextSquare01, "MessageTextSquare01", 132], ["file-06", I.File06, "File06", 131], ["x", I.X, "X", 129],
  ["glasses-01", I.Glasses01, "Glasses01", 127], ["home-line", I.HomeLine, "HomeLine", 125], ["search-lg", I.SearchLg, "SearchLg", 124],
  ["archive", I.Archive, "Archive", 123], ["paperclip", I.Paperclip, "Paperclip", 123], ["pie-chart-01", I.PieChart01, "PieChart01", 123],
  ["rows-03", I.Rows03, "Rows03", 123], ["clipboard", I.Clipboard, "Clipboard", 123], ["log-out-01", I.LogOut01, "LogOut01", 123],
  ["alert-octagon", I.AlertOctagon, "AlertOctagon", 122], ["chevron-selector-vertical", I.ChevronSelectorVertical, "ChevronSelectorVertical", 116], ["info-circle", I.InfoCircle, "InfoCircle", 115],
  ["calendar", I.Calendar, "Calendar", 114], ["plus", I.Plus, "Plus", 109], ["share-07", I.Share07, "Share07", 107],
  ["clock-rewind", I.ClockRewind, "ClockRewind", 91], ["puzzle-piece-02", I.PuzzlePiece02, "PuzzlePiece02", 84], ["file-question-03", I.FileQuestion03, "FileQuestion03", 75],
  ["dots-horizontal", I.DotsHorizontal, "DotsHorizontal", 69], ["check-circle", I.CheckCircle, "CheckCircle", 67], ["alert-circle", I.AlertCircle, "AlertCircle", 65],
  ["file-check-03", I.FileCheck03, "FileCheck03", 57], ["send-01", I.Send01, "Send01", 55], ["scales-02", I.Scales02, "Scales02", 53],
  ["download-02", I.Download02, "Download02", 53], ["copy-03", I.Copy03, "Copy03", 48], ["dataflow-03", I.Dataflow03, "Dataflow03", 42],
];

const editor: [string, IconC, string][] = [
  ["bold-01", I.Bold01, "Bold01"], ["italic-01", I.Italic01, "Italic01"], ["underline-01", I.Underline01, "Underline01"],
  ["align-left", I.AlignLeft, "AlignLeft"], ["align-center", I.AlignCenter, "AlignCenter"], ["align-right", I.AlignRight, "AlignRight"], ["align-justify", I.AlignJustify, "AlignJustify"],
];

function Grid({ items }: { items: [string, IconC, string, number?][] }) {
  return (
    <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--border-secondary) sm:grid-cols-4 lg:grid-cols-6">
      {items.map(([fig, Icon, code, n]) => (
        <div key={fig} className="group flex flex-col items-center gap-md bg-(--bg-primary) px-md py-xl text-center">
          <Icon className="size-6 text-(--fg-secondary) transition-colors group-hover:text-(--fg-brand)" />
          <code className="font-mono text-xs font-medium text-(--text-primary)">{code}</code>
          <span className="text-[11px] leading-tight text-(--text-quaternary)">{fig}{n ? ` · ~${n}` : ""}</span>
        </div>
      ))}
    </div>
  );
}

export default function Icons() {
  return (
    <>
      <Section
        title="Set de íconos"
        description="El mismo set de íconos que usa el Figma de Trato. En código se importan desde @/components/icons con el nombre en PascalCase: stars-01 en Figma es Stars01 en código."
      >
        <Grid items={top} />
        <p className="mt-md text-xs text-(--text-quaternary)">Nombre en Figma · cantidad aproximada de usos en los diseños de Trato.</p>
      </Section>
      <Section title="Editor de documentos" description="Íconos del toolbar de formato del Document Editor.">
        <Grid items={editor} />
      </Section>
      <Section title="Tamaños">
        <Specs rows={[["Botón xs, badges", "14px · size-3.5"], ["Inputs, menús, botón sm", "16px · size-4"], ["Botón md, nav", "20px · size-5"], ["Featured icon, estados vacíos", "24px · size-6"]]} />
      </Section>
      <Section title="Reglas">
        <Guidelines
          items={[
            "Stars01 (stars-01) significa IA y va en naranja (--fg-ai). Dentro de un botón toma el color del texto del botón.",
            "Scales02 (scales-02) identifica contenido legal: Clause Pulse, LetsLaw, Lefebvre.",
            "En el Figma hay íconos de Remix Icon (close-line, file-2-line, eye-line…). En código se reemplazan por su equivalente del set del sistema: XClose, File02, Eye.",
            "Íconos de acción sin texto llevan aria-label y tooltip.",
          ]}
        />
        <CodeBlock className="mt-xl" code={`import { Stars01 } from "@/components/icons";

<Stars01 className="size-4 text-(--fg-ai)" />`} />
      </Section>
    </>
  );
}
