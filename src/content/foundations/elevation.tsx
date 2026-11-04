import tokens from "@/tokens/tokens.json";
import { Section, Guidelines } from "@/components/docs/doc";

const use: Record<string, string> = {
  xs: "Botones, inputs, controles",
  sm: "Tab activo, thumb de toggle",
  md: "Tarjetas en hover",
  lg: "Menús, selects, tooltips",
  xl: "Modales, command palette",
};

export default function Elevation() {
  return (
    <>
      <Section title="Sombras" description="Sombras suaves con base #0A0D12. La plataforma se apoya más en bordes que en sombras.">
        <div className="grid gap-3xl rounded-2xl bg-(--bg-canvas) p-4xl sm:grid-cols-3 lg:grid-cols-5">
          {Object.keys(tokens.primitive.shadow).map((k) => (
            <div key={k} className="flex flex-col items-center gap-lg">
              <div className="grid size-24 place-items-center rounded-xl bg-(--bg-primary)" style={{ boxShadow: `var(--shadow-${k})` }}>
                <code className="font-mono text-13 font-medium text-(--text-primary)">shadow-{k}</code>
              </div>
              <p className="text-center text-xs text-(--text-tertiary)">{use[k]}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Superficies" description="Tres niveles: canvas (fondo de la app), primary (tarjetas) y secondary (headers de tabla, hover).">
        <div className="rounded-2xl border border-(--border-secondary) bg-(--bg-canvas) p-3xl">
          <p className="mb-md font-mono text-xs text-(--text-quaternary)">--bg-canvas</p>
          <div className="rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
            <p className="mb-md font-mono text-xs text-(--text-quaternary)">--bg-primary · border-secondary · rounded-2xl</p>
            <div className="rounded-lg bg-(--bg-secondary) p-lg font-mono text-xs text-(--text-quaternary)">--bg-secondary</div>
          </div>
        </div>
      </Section>
      <Section title="Reglas">
        <Guidelines
          items={[
            "Tarjetas: borde border-secondary, sin sombra. La sombra aparece solo en hover si la tarjeta es clicable.",
            "Todo lo que flota (menú, select, tooltip, modal) lleva sombra lg o xl.",
            "No combines sombra fuerte con borde oscuro: elegí uno de los dos.",
          ]}
        />
      </Section>
    </>
  );
}
