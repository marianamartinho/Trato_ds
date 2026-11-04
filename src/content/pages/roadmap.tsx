import { Check, LayersThree01, Tool01 } from "@untitledui/icons";
import { Alert, Badge } from "@/components/ui";
import { DocHeader, Section } from "@/components/docs/doc";
import { DocLink as Link } from "@/lib/nav";
import { components, figmaPages } from "@/content/registry";

const statusOf = (name: string) => figmaPages.find((p) => p.name === name)?.status;
const stLabel = { done: ["Diseño en producción", "success"], wip: ["Diseño en progreso", "warning"], explore: ["Diseño en exploración", "blue"] } as const;

const phases = [
  { k: "A", t: "Base visual común", d: "Tokens, navegación lateral, headers de página y tablas. Es lo que más se repite en la plataforma, así que el cambio se nota en todas las pantallas.", areas: [] as string[] },
  { k: "B", t: "Documentos y carpetas", d: "La lista de documentos con carpetas, selección múltiple y menús. Ya está diseñada y tiene su ejemplo en Table.", areas: ["Expedientes (carpetas)"] },
  { k: "C", t: "Dashboard", d: "KPIs, overview operativo y ciclo de vida de contratos.", areas: ["New Dashboard"] },
  { k: "D", t: "IA: chat y Clause Pulse", d: "Panel del asistente, contexto, créditos y chequeo de cláusulas.", areas: ["NEW AI Chat", "Clause Pulse"] },
  { k: "E", t: "Flujos de contrato", d: "Firma, workflows, solicitudes e integraciones.", areas: ["Vista participante", "Workflows", "Vista de solicitante", "LetsLaw Integration", "Lefebvre Integration"] },
];

export default function Roadmap() {
  return (
    <>
      <DocHeader
        eyebrow="Empezar"
        title="Hoja de ruta"
        description="Qué está hecho, qué falta y una propuesta para llevar el Design System a la plataforma por fases."
        figma={null}
      />

      <Section title="Etapas del Design System">
        <ol className="relative grid gap-xl md:grid-cols-3">
          {[
            {
              icon: <Check />, tone: "success" as const, tag: "Hecho", title: "Etapa 1 · Fundamentos y núcleo",
              items: ["Tokens en código (color, tipografía, espaciado, radios, sombras)", `${components.length} componentes documentados, todos los que usan los diseños`, "Ejemplos de pantallas: dashboard y chat IA", "Inventario de 14 áreas del Figma"],
            },
            {
              icon: <Tool01 />, tone: "warning" as const, tag: "Siguiente", title: "Etapa 2 · Completar el sistema",
              items: ["Revisar con Diseño todo lo marcado como “Pendiente de definir”", "Actualizar en Figma el indigo de las pantallas viejas al gris azulado de marca", "Unificar en Figma las piezas de otros kits con Untitled UI", "Reconstruir con componentes NEW AI Chat y Expedientes"],
            },
            {
              icon: <LayersThree01 />, tone: "blue" as const, tag: "Propuesta", title: "Etapa 3 · Llevarlo a la plataforma",
              items: ["Conectar el DS al repo de la plataforma", "Implementar por fases (abajo)", "Cada mejora publicada vuelve al DS"],
            },
          ].map((s, i) => (
            <li key={s.title} className="animate-fade-up flex flex-col gap-lg rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-(--bg-brand-subtle) text-(--fg-brand) [&_svg]:size-5">{s.icon}</span>
                <Badge color={s.tone} dot>{s.tag}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-(--text-primary)">{s.title}</h3>
              <ul className="flex flex-col gap-md text-sm text-(--text-secondary)">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-md"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--fg-quaternary)" />{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Fases de implementación propuestas"
        description="Un orden posible, pensado desde la experiencia de usuario: primero lo que más se repite, después las áreas con diseño ya avanzado. Lo definimos junto con el equipo según las prioridades del negocio."
      >
        <div className="flex flex-col gap-md">
          {phases.map((p) => (
            <div key={p.k} className="flex flex-col gap-lg rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl sm:flex-row sm:items-start">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gray-blue-600 text-sm font-bold text-white">{p.k}</span>
              <div className="min-w-0 flex-1">
                <p className="text-md font-semibold text-(--text-primary)">{p.t}</p>
                <p className="mt-xs text-sm text-(--text-tertiary)">{p.d}</p>
                {p.areas.length > 0 && (
                  <div className="mt-md flex flex-wrap gap-sm">
                    {p.areas.map((a) => {
                      const st = statusOf(a);
                      return (
                        <Badge key={a} color={st ? stLabel[st][1] : "gray"} shape="tag">
                          {a}{st && <span className="font-normal opacity-80">· {stLabel[st][0]}</span>}
                        </Badge>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Alert className="mt-xl" tone="warning" title="Todos los flujos están pendientes de aplicar">
          Ningún flujo tiene todavía la UI aplicada con el sistema, incluidos los que figuran “en producción” en Figma: lo que está en producción tampoco sigue bien el diseño. Por eso todas las áreas entran en las fases.
        </Alert>
        <Alert className="mt-md" tone="info" title="Es una propuesta">
          El orden y el alcance de cada fase se definen en conjunto. El estado de cada área sale del <Link href="/screens/" className="font-semibold underline">inventario de pantallas</Link>.
        </Alert>
      </Section>

      <Section title="Cómo sería el ciclo de trabajo" description="Diseño e implementación en un mismo paso, con revisión técnica antes de publicar.">
        <ol className="grid gap-md sm:grid-cols-5">
          {["Diseñar la mejora", "Construirla en código con el DS", "Revisión técnica", "Publicar en la plataforma", "Actualizar el DS"].map((s, i) => (
            <li key={s} className="flex flex-col gap-md rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg">
              <span className="grid size-7 place-items-center rounded-full bg-(--bg-brand-subtle) text-xs font-bold text-(--text-brand)">{i + 1}</span>
              <span className="text-sm font-medium text-(--text-primary)">{s}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
