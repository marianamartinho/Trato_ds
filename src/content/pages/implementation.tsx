import { BookOpen01, Cube01, Grid01, HelpCircle, Palette } from "@/components/icons";
import { Alert, Badge } from "@/components/ui";
import { DocHeader, Guidelines, Section } from "@/components/docs/doc";
import { DocLink as Link } from "@/lib/nav";

const deliverables = [
  { icon: <Palette />, t: "Tokens", d: "Variables CSS generadas desde tokens.json. Funcionan con cualquier framework." },
  { icon: <Cube01 />, t: "Componentes", d: "Componentes React accesibles, construidos solo con tokens." },
  { icon: <Grid01 />, t: "Íconos", d: "Set de íconos del sistema, con los mismos nombres que en Figma." },
  { icon: <BookOpen01 />, t: "Documentación", d: "Este sitio: uso, variantes, código y vínculo a cada pantalla de Figma." },
];

const options = [
  {
    t: "A · Paquete compartido",
    d: "El Design System se publica como un paquete que la plataforma instala y actualiza por versión.",
    pros: ["Una sola fuente para todos los repos", "Actualizaciones controladas por versión"],
    cons: ["Necesita un lugar donde publicar el paquete", "Más configuración al inicio"],
  },
  {
    t: "B · Componentes dentro del repo de la plataforma",
    d: "Los tokens y los componentes se copian al repo de la plataforma y se mantienen ahí.",
    pros: ["Arranque inmediato, sin infraestructura nueva", "Cada componente se puede ajustar al código existente"],
    cons: ["Hay que mantener sincronizado este sitio con el repo", "Si hay más de un repo, se duplica"],
  },
];

const steps = [
  ["Instalar los tokens", "Se suman las variables CSS a la plataforma sin cambiar nada visible. Los estilos actuales siguen funcionando."],
  ["Mapear lo existente", "Se relevan los colores y tamaños que usa hoy la plataforma y se reemplazan por tokens equivalentes."],
  ["Componentes base", "Botón, inputs, badge, tabla y navegación: lo que más se repite, así el cambio se nota en todas las pantallas."],
  ["Área por área", "Se migran las pantallas siguiendo las fases de la hoja de ruta, cada una con revisión técnica."],
  ["Retirar lo viejo", "Cuando un área queda migrada, se eliminan sus estilos anteriores."],
];

const questions = [
  "¿Qué framework y versión usa el frontend de la plataforma?",
  "¿Cómo se manejan hoy los estilos (CSS, Sass, Tailwind, CSS-in-JS)?",
  "¿Es un repo o varios? ¿Conviene la opción A o la B?",
  "¿Cómo se publica hoy (CI, entornos de prueba, revisión de código)?",
  "¿Se necesita modo oscuro en la plataforma?",
  "¿Qué navegadores y dispositivos hay que soportar?",
];

export default function Implementation() {
  return (
    <>
      <DocHeader
        eyebrow="Empezar"
        title="Propuesta de implementación"
        description="Cómo llevar los tokens y los componentes a la plataforma de Trato sin frenar la operación. Las decisiones técnicas quedan marcadas para definir con Rubén."
        figma={null}
        meta={<Badge color="blue" dot>Propuesta</Badge>}
      />

      <Section title="Qué se entrega">
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((x) => (
            <div key={x.t} className="flex flex-col gap-md rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <span className="grid size-10 place-items-center rounded-lg bg-(--bg-brand-subtle) text-(--fg-brand) [&_svg]:size-5">{x.icon}</span>
              <p className="text-md font-semibold text-(--text-primary)">{x.t}</p>
              <p className="text-sm text-(--text-tertiary)">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Cómo llega a la plataforma"
        description={<>Dos caminos posibles. <strong className="font-semibold text-(--text-secondary)">A definir con Rubén</strong> según cómo está armada la plataforma.</>}
      >
        <div className="grid gap-md md:grid-cols-2">
          {options.map((o) => (
            <div key={o.t} className="flex flex-col gap-lg rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl">
              <p className="text-lg font-semibold text-(--text-primary)">{o.t}</p>
              <p className="text-sm text-(--text-tertiary)">{o.d}</p>
              <div className="grid gap-md sm:grid-cols-2">
                <div>
                  <p className="mb-sm text-xs font-semibold uppercase tracking-[0.06em] text-(--text-success)">A favor</p>
                  <ul className="flex flex-col gap-xs text-sm text-(--text-secondary)">{o.pros.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div>
                  <p className="mb-sm text-xs font-semibold uppercase tracking-[0.06em] text-(--text-warning)">A tener en cuenta</p>
                  <ul className="flex flex-col gap-xs text-sm text-(--text-secondary)">{o.cons.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Plan por pasos" description="Cada paso deja la plataforma funcionando. Se puede frenar en cualquier punto sin romper nada.">
        <ol className="flex flex-col gap-md">
          {steps.map(([t, d], i) => (
            <li key={t} className="flex gap-lg rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gray-blue-600 text-sm font-bold text-white">{i + 1}</span>
              <div className="min-w-0">
                <p className="text-md font-semibold text-(--text-primary)">{t}</p>
                <p className="mt-xs text-sm text-(--text-tertiary)">{d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-md text-sm text-(--text-tertiary)">
          El orden de las áreas está en la <Link href="/roadmap/" className="font-semibold text-(--text-brand) underline">hoja de ruta</Link>.
        </p>
      </Section>

      <Section title="Cómo se mantiene">
        <Guidelines
          items={[
            "Los cambios entran por pull request, con revisión de Diseño y revisión técnica.",
            "Cada cambio queda registrado con su versión, para saber qué cambió y cuándo.",
            "Nada nuevo de interfaz se construye fuera del Design System: si falta algo, primero se suma acá.",
            "Lo que no está definido en Figma no se inventa.",
          ]}
        />
      </Section>

      <Section title="Para definir con Rubén" description="Sin estas respuestas no conviene elegir camino. Son la base de la propuesta técnica.">
        <ul className="grid gap-md md:grid-cols-2">
          {questions.map((q) => (
            <li key={q} className="flex gap-md rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg text-sm text-(--text-secondary)">
              <HelpCircle className="mt-px size-4 shrink-0 text-(--fg-brand)" />
              {q}
            </li>
          ))}
        </ul>
        <Alert className="mt-xl" tone="info" title="Es una propuesta">
          El camino técnico y los tiempos se ajustan cuando estén respondidas estas preguntas.
        </Alert>
      </Section>
    </>
  );
}
