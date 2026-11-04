import { DocLink as Link } from "@/lib/nav";
import { DocHeader, Guidelines, Section } from "@/components/docs/doc";
import { CodeBlock } from "@/components/docs/code-block";
import { Alert } from "@/components/ui";

export default function GettingStarted() {
  return (
    <>
      <DocHeader eyebrow="Empezar" title="Cómo usarlo" description="Qué es este sitio, cómo correrlo y cómo trabajamos Diseño y Frontend sobre él." figma={null} />
      <Section title="Para quién es">
        <div className="grid gap-xl md:grid-cols-2">
          {[
            ["Diseño", ["Revisá que cada componente coincida con Figma.", "Proponé cambios editando tokens.json o abriendo un issue.", "Usá el Inventario de pantallas para ubicar flujos."]],
            ["Frontend", ["Copiá componentes de src/components/ui o importalos desde el paquete.", "Usá solo tokens semánticos en producto.", "Si un componente no existe, está en la hoja de ruta: avisá antes de crear uno propio."]],
          ].map(([t, items]) => (
            <div key={t as string} className="rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl">
              <p className="mb-lg text-lg font-semibold text-(--text-primary)">{t as string}</p>
              <ul className="flex flex-col gap-md text-sm text-(--text-secondary)">{(items as string[]).map((i) => <li key={i} className="flex gap-md"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--fg-brand)" />{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Correr el proyecto">
        <CodeBlock title="Terminal" code={`npm install
npm run dev      # http://localhost:3000
npm run build    # exporta el sitio estático a /out (deploy en Vercel)`} />
      </Section>
      <Section title="Stack" description="Pensado para que los componentes se copien tal cual a la app de Trato.">
        <Guidelines items={["Next.js + React + TypeScript.", "Tailwind CSS v4 con los tokens como @theme.", "Radix UI para accesibilidad (diálogos, menús, selects, tabs).", "class-variance-authority para variantes.", "Íconos: @untitledui/icons, el mismo set que usa el Figma."]} />
      </Section>
      <Section title="Usar un componente">
        <CodeBlock code={`import { Button, Badge } from "@/components/ui";
import { Plus } from "@untitledui/icons";

export function Toolbar() {
  return (
    <div className="flex items-center gap-md">
      <Badge color="error">402</Badge>
      <Button><Plus /> Crear nuevo</Button>
    </div>
  );
}`} />
      </Section>
      <Section title="Estados de los componentes">
        <Guidelines items={["Listo: implementado, documentado y validado contra Figma. Usar en producto.", "Beta: implementado, puede cambiar la API.", "Pendiente: detectado en Figma, todavía no está en código (hoja de ruta)."]} />
        <Alert className="mt-xl" tone="info" title="Etapa 1">
          Fundamentos completos, los componentes que usan los diseños de Trato construidos sobre Untitled UI y ejemplos de pantallas. El detalle está en el <Link href="/inventory/" className="font-semibold underline">inventario</Link>.
        </Alert>
      </Section>
    </>
  );
}
