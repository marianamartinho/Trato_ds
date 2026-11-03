import { Hammer } from "lucide-react";
import { EmptyState } from "@/components/ui";
import type { NavEntry } from "@/content/registry";

export default function Planned({ entry }: { entry: NavEntry }) {
  return (
    <div className="rounded-2xl border border-dashed border-(--border-primary) bg-(--bg-secondary)">
      <EmptyState
        icon={<Hammer />}
        title="En la hoja de ruta"
        description={`${entry.title} está identificado en Figma${entry.usage ? ` (~${entry.usage} instancias)` : ""} pero todavía no está implementado en código. Entra en la etapa 2.`}
      />
    </div>
  );
}
