import { HelpCircle } from "lucide-react";
import { Section, DoDont, Guidelines } from "@/components/docs/doc";
import { Button, Field, Input, Tooltip } from "@/components/ui";

export default function Voice() {
  return (
    <>
      <Section title="Tono" description="Basado en la página “Auditoría Ayudas”. Trato habla como un abogado claro: preciso, sin jerga innecesaria y orientado a la acción.">
        <Guidelines
          items={[
            "Cercano y directo: tuteo en español (“Creá”, “Agregá” en AR; “Crea”, “Añade” en ES según mercado).",
            "Verbos de acción en botones: “Crear nuevo”, “Enviar a aprobación”, “Analizar documento con IA”.",
            "Descripciones de una línea debajo de cada título de panel: qué hace y para qué sirve.",
            "Errores: qué pasó + cómo resolverlo. Nunca culpar al usuario.",
          ]}
        />
      </Section>
      <Section title="Ayudas: helper text y tooltips">
        <div className="mb-xl grid gap-xl rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl md:grid-cols-2">
          <Field label="Nombre del workflow" hint="Lo verán los aprobadores en cada solicitud." htmlFor="wf">
            <Input id="wf" placeholder="Ej. Aprobación de NDA" />
          </Field>
          <Field label="Días para vencer" htmlFor="days">
            <Input
              id="days"
              defaultValue="30"
              trailing={
                <Tooltip content="Días hábiles" description="Se envía un recordatorio 5 días antes del vencimiento.">
                  <button aria-label="Ayuda"><HelpCircle /></button>
                </Tooltip>
              }
            />
          </Field>
        </div>
        <DoDont
          items={[
            { do: <Button variant="dark">Analizar documento con IA</Button>, caption: "El botón dice exactamente qué va a pasar." },
            { dont: <Button variant="dark">Continuar</Button>, caption: "Etiquetas genéricas que obligan a leer el contexto." },
            { do: <p className="text-sm text-(--text-tertiary)">No pudimos leer el PDF. Probá con un archivo sin contraseña.</p>, caption: "Error con causa y solución." },
            { dont: <p className="text-sm text-(--text-error)">Error 500: extraction_failed</p>, caption: "Mensajes técnicos sin salida." },
          ]}
        />
      </Section>
    </>
  );
}
