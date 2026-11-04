import tokens from "@/tokens/tokens.json";
import { Section, Guidelines } from "@/components/docs/doc";

export default function Spacing() {
  const sp = tokens.primitive.spacing as Record<string, number>;
  const rd = tokens.primitive.radius as Record<string, number>;
  return (
    <>
      <Section title="Espaciado" description="Escala con nombre (spacing-xs … spacing-7xl), idéntica a las variables de Figma. En Tailwind: p-md, gap-lg, mt-3xl…">
        <div className="overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary)">
          {Object.entries(sp).filter(([k]) => k !== "none").map(([k, v]) => (
            <div key={k} className="grid grid-cols-[90px_60px_1fr] items-center gap-xl border-b border-(--border-secondary) px-xl py-md last:border-0">
              <code className="font-mono text-13 font-medium text-(--text-brand)">{k}</code>
              <span className="font-mono text-xs text-(--text-quaternary)">{v}px</span>
              <span className="h-4 rounded-xs bg-gradient-to-r from-gray-blue-400 to-gray-blue-500" style={{ width: v * 3 }} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radios" description="Controles pequeños usan sm (6) o md (8); tarjetas xl (12) o 2xl (16); avatares y badges full.">
        <div className="grid grid-cols-2 gap-xl sm:grid-cols-5">
          {Object.entries(rd).filter(([k]) => k !== "none").map(([k, v]) => (
            <div key={k} className="flex flex-col items-center gap-md rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <div className="size-16 border-2 border-gray-blue-400 bg-gray-blue-50 dark:bg-gray-blue-900/40" style={{ borderRadius: Math.min(v, 32) }} />
              <code className="font-mono text-13 font-medium text-(--text-primary)">rounded-{k}</code>
              <span className="font-mono text-xs text-(--text-quaternary)">{v === 9999 ? "9999" : v}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Layout de la plataforma" description="Medidas recurrentes en las pantallas de 1440 px.">
        <div className="mb-xl overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-canvas) p-xl">
          <div className="flex h-56 gap-md">
            <div className="flex w-14 flex-col items-center gap-md rounded-lg border border-dashed border-gray-blue-300 bg-gray-blue-50/60 py-md text-[10px] font-semibold text-gray-blue-700 dark:bg-gray-blue-900/30 dark:text-gray-blue-300">
              72px
            </div>
            <div className="flex flex-1 flex-col gap-md rounded-xl border border-dashed border-(--border-primary) bg-(--bg-primary) p-md">
              <div className="flex h-10 items-center rounded-md border border-dashed border-orange-300 bg-orange-50/60 px-md text-[10px] font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">Header de página · padding 24</div>
              <div className="grid flex-1 grid-cols-3 gap-md">
                {[1, 2, 3].map((i) => <div key={i} className="rounded-lg border border-dashed border-gray-blue-300 bg-gray-blue-50 dark:bg-gray-blue-900/40" />)}
              </div>
            </div>
            <div className="hidden w-40 rounded-xl border border-dashed border-success-300 bg-success-50/60 p-md text-[10px] font-semibold text-success-700 sm:block dark:bg-success-900/30 dark:text-success-300">
              Drawer 360–470px
            </div>
          </div>
        </div>
        <Guidelines
          items={[
            "Nav rail: 72 px de ancho. Ítems de 40×40 con radio md.",
            "Contenido: tarjeta blanca sobre bg-canvas, padding 24 (3xl), separación entre tarjetas 16 (xl).",
            "Paneles laterales (chat IA, configuración): entre 360 y 470 px.",
            "Breakpoint de diseño: 1440 desktop · 393 mobile.",
          ]}
        />
      </Section>
    </>
  );
}
