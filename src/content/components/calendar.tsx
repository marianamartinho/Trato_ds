"use client";
import * as React from "react";
import { Calendar, CalendarEvent, type CalendarEventItem } from "@/components/ui/calendar";
import { Preview } from "@/components/docs/preview";
import { Guidelines, PropsTable, Section, Specs } from "@/components/docs/doc";

// Fechas fijas para que el ejemplo sea estable (julio 2026, hoy = viernes 10).
const HOY = new Date(2026, 6, 10);
const ev = (id: string, date: string, title: string, color: CalendarEventItem["color"]): CalendarEventItem => ({ id, date, title, color });

const eventos: CalendarEventItem[] = [
  ev("1", "2026-06-29", "Revisión NDA Acme", "gray"),
  ev("2", "2026-06-29", "Firma acuerdo marco", "accent"),
  ev("3", "2026-06-30", "Renovación de licencia", "brand"),
  ev("4", "2026-07-02", "Vence plazo de comentarios", "orange"),
  ev("5", "2026-07-02", "Reunión con Legal", "gray"),
  ev("6", "2026-07-03", "Revisión contrato laboral", "gray"),
  ev("7", "2026-07-05", "Envío a firma", "brand"),
  ev("8", "2026-07-06", "Revisión NDA", "gray"),
  ev("9", "2026-07-07", "Vence propuesta", "orange"),
  ev("10", "2026-07-07", "Firma de anexo", "accent"),
  ev("11", "2026-07-08", "Envío a firma", "brand"),
  ev("12", "2026-07-10", "Renovación del acuerdo de servicios", "gray"),
  ev("13", "2026-07-10", "Firma de NDA", "accent"),
  ev("14", "2026-07-10", "Envío de borrador", "brand"),
  ev("15", "2026-07-13", "Revisión de cláusulas", "gray"),
  ev("16", "2026-07-13", "Vence NDA", "orange"),
  ev("17", "2026-07-15", "Vence NDA proveedor", "brand"),
  ev("18", "2026-07-17", "Acuerdo de licencias", "gray"),
  ev("19", "2026-07-17", "Firma de anexo", "accent"),
  ev("20", "2026-07-17", "Envío a firma", "brand"),
  ev("21", "2026-07-17", "Recordatorio a firmantes", "gray"),
  ev("22", "2026-07-18", "Contrato firmado", "success"),
  ev("23", "2026-07-22", "Reunión de negociación", "brand"),
  ev("24", "2026-07-28", "Firma de adenda", "accent"),
];

export default function CalendarDoc() {
  const [month, setMonth] = React.useState(new Date(2026, 6, 1));
  const [selected, setSelected] = React.useState<Date | undefined>(new Date(2026, 6, 22));

  return (
    <>
      <Section
        title="Vista mensual"
        description="Celdas con día actual, días fuera de mes y puntos de eventos (vista 1839:42459). Usá las flechas para cambiar de mes y hacé clic en un día para seleccionarlo."
      >
        <Preview
          align="stretch"
          code={`<Calendar
  month={month}
  onMonthChange={setMonth}
  today={new Date(2026, 6, 10)}
  selected={selected}
  onSelect={setSelected}
  events={[{ id: "1", date: "2026-07-10", title: "Firma de NDA", color: "accent" }]}
/>`}
        >
          <div className="mx-auto w-full max-w-[680px] rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-lg shadow-xs">
            <Calendar
              month={month}
              onMonthChange={setMonth}
              today={HOY}
              selected={selected}
              onSelect={setSelected}
              events={eventos}
            />
          </div>
        </Preview>
      </Section>

      <Section title="Próximos vencimientos" description="“_Calendar event/Month view” en la lista “Upcoming Deadlines”: brand para el evento de hoy, gris para el resto.">
        <Preview
          align="stretch"
          code={`<CalendarEvent color="brand" title="Renovación del acuerdo de servicios" time="Hoy" description="Se renueva hoy" />
<CalendarEvent title="Vencimiento NDA" time="15 jul" description="Vence en 3 días" />`}
        >
          <div className="mx-auto flex w-full max-w-[680px] flex-col gap-xl rounded-md bg-gray-blue-25 px-xl py-2xl dark:bg-gray-900">
            <p className="text-sm font-semibold text-(--text-primary)">Próximos vencimientos</p>
            <div className="flex flex-col gap-lg">
              <CalendarEvent color="brand" title="Renovación del acuerdo de servicios" time="Hoy" description="Se renueva hoy" />
              <CalendarEvent title="Vencimiento NDA" time="15 jul" description="Vence en 3 días" />
              <CalendarEvent title="Acuerdo de licencias" time="17 jul" description="Vence en 5 días" />
            </div>
            <button type="button" className="self-start text-xs font-semibold text-gray-500 hover:underline">
              Ver 2 más…
            </button>
          </div>
        </Preview>
      </Section>

      <Section title="Especificaciones" description="El frame del Figma está escalado ×1,341; estas son las medidas reales.">
        <Specs
          rows={[
            ["Encabezado de columna", "p-md · text-xs medium · text-quaternary"],
            ["Celda", "min-h 54 · p-sm · gap-sm · border-secondary"],
            ["Celda fuera de mes", "bg gray-25 · text-disabled · eventos 60 %"],
            ["Fecha", "24 × 24 · radio full · text-xs semibold"],
            ["Hoy", "bg warning-600 · texto blanco"],
            ["Seleccionado", "bg gray-50 (bg-active)"],
            ["Punto de evento", "8 px · gap-xs · pl-xs"],
            ["Tarjeta de evento", "radio sm · p-lg · gap-xs"],
            ["Título / hora / detalle", "text-sm semibold / text-xs medium / text-sm"],
            ["Panel de vencimientos", "bg gray-blue-25 · radio md · px-xl py-2xl"],
          ]}
        />
      </Section>

      <Section title="Uso">
        <Guidelines
          items={[
            "La semana empieza en lunes, como en el Figma.",
            "Colores de punto: gray (tareas), brand (envíos y firmas pendientes), accent (firmas), orange (vencimientos), success (firmado).",
            "Cada día es un botón con nombre accesible: fecha completa y lista de eventos.",
            "Para el detalle de un día, usá CalendarEvent debajo del calendario, no tooltips sobre los puntos.",
          ]}
        />
      </Section>

      <Section title="Props">
        <h3 className="mb-md text-md font-semibold text-(--text-primary)">Calendar</h3>
        <PropsTable
          props={[
            { name: "events", type: "{ id; date: Date | string; title; color? }[]", default: "[]", description: "Eventos; `date` acepta \"AAAA-MM-DD\"." },
            { name: "month / defaultMonth", type: "Date", default: "hoy", description: "Mes visible (controlado / inicial)." },
            { name: "onMonthChange", type: "(month: Date) => void", description: "Se llama al tocar las flechas." },
            { name: "today", type: "Date", default: "new Date()", description: "Día que se marca como actual." },
            { name: "selected / onSelect", type: "Date / (date: Date) => void", description: "Día seleccionado." },
            { name: "maxDots", type: "number", default: "3", description: "Puntos visibles por celda antes de “+N”." },
            { name: "weekdays", type: "string[]", default: `["L","M","X","J","V","S","D"]`, description: "Iniciales de columna, desde lunes." },
            { name: "locale", type: "string", default: `"es"`, description: "Idioma del título del mes y de las etiquetas accesibles." },
          ]}
        />
        <h3 className="mb-md mt-3xl text-md font-semibold text-(--text-primary)">CalendarEvent</h3>
        <PropsTable
          props={[
            { name: "title", type: "ReactNode", description: "Nombre del evento." },
            { name: "time", type: "ReactNode", description: "Texto corto a la derecha (“Hoy”, “15 jul”)." },
            { name: "description", type: "ReactNode", description: "Detalle (“Vence en 3 días”)." },
            { name: "color", type: `"brand" | "gray"`, default: `"gray"`, description: "brand para el evento de hoy." },
          ]}
        />
      </Section>
    </>
  );
}
