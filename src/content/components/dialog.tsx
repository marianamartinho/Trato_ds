"use client";
import { Send, Trash2 } from "lucide-react";
import { Button, Dialog, DialogClose, DialogContent, DialogTrigger, Field, Textarea } from "@/components/ui";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section } from "@/components/docs/doc";

export default function DialogDoc() {
  return (
    <>
      <Section title="Confirmación" description="Abrilo para ver la animación y el foco atrapado.">
        <Preview code={`<Dialog>
  <DialogTrigger asChild><Button>Enviar a aprobación</Button></DialogTrigger>
  <DialogContent
    icon={<Send />}
    title="Enviar a aprobación"
    description="Los aprobadores del workflow recibirán una notificación."
    footer={<>
      <DialogClose asChild><Button variant="secondary">Cancelar</Button></DialogClose>
      <Button>Enviar</Button>
    </>}
  />
</Dialog>`}>
          <Dialog>
            <DialogTrigger asChild><Button>Enviar a aprobación</Button></DialogTrigger>
            <DialogContent
              icon={<Send />}
              title="Enviar a aprobación"
              description="Los aprobadores del workflow “Contratos de proveedores” recibirán una notificación."
              footer={<><DialogClose asChild><Button variant="secondary">Cancelar</Button></DialogClose><DialogClose asChild><Button>Enviar</Button></DialogClose></>}
            >
              <Field label="Mensaje (opcional)"><Textarea placeholder="Agregá contexto para los aprobadores" /></Field>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild><Button variant="secondary"><Trash2 /> Eliminar carpeta</Button></DialogTrigger>
            <DialogContent
              icon={<Trash2 />}
              className="[&>div>div:first-child]:border-error-50 [&>div>div:first-child]:bg-error-100 [&>div>div:first-child]:text-error-600"
              title="¿Eliminar “Archivero”?"
              description="Los 2 documentos se moverán a Mis documentos. Esta acción no se puede deshacer."
              footer={<><DialogClose asChild><Button variant="secondary">Cancelar</Button></DialogClose><DialogClose asChild><Button variant="destructive">Eliminar</Button></DialogClose></>}
            />
          </Dialog>
        </Preview>
      </Section>
      <Section title="Uso">
        <Guidelines items={["Título como pregunta o acción concreta.", "Acciones a la derecha: secundaria primero, principal al final.", "Para formularios largos o contenido que el usuario consulta mientras trabaja, usá un drawer.", "Esc y clic afuera cierran, salvo en flujos con cambios sin guardar."]} />
      </Section>
      <Section title="Props">
        <PropsTable props={[
          { name: "title", type: "ReactNode", description: "Título (requerido, accesible)." },
          { name: "description", type: "ReactNode", description: "Texto bajo el título." },
          { name: "icon", type: "ReactNode", description: "Ícono destacado con halo." },
          { name: "footer", type: "ReactNode", description: "Acciones." },
        ]} />
      </Section>
    </>
  );
}
