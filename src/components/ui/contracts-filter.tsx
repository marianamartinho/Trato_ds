"use client";
import * as React from "react";
import { cn } from "@/lib/cn";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

/**
 * ContractsFilter — Figma: "Contracts" local (New Dashboard, Filter Juris / Type, 1957:17786).
 * Tarjeta bg gray-blue-25 al 40%, borde gray-blue-50, radio xl (12), padding 16 20, gap 40.
 * Cabecera con título y selector Jurisdicción / Tipo; el contenido cambia según el filtro.
 */
export type ContractsFilterValue = "juris" | "type";

export function ContractsFilter({
  title = "Contratos",
  value,
  defaultValue = "juris",
  onValueChange,
  children,
  className,
}: {
  title?: React.ReactNode;
  value?: ContractsFilterValue;
  defaultValue?: ContractsFilterValue;
  onValueChange?: (v: ContractsFilterValue) => void;
  /** Contenido para el filtro activo. Recibe el valor actual. */
  children: (v: ContractsFilterValue) => React.ReactNode;
  className?: string;
}) {
  const [inner, setInner] = React.useState<ContractsFilterValue>(defaultValue);
  const current = value ?? inner;
  const set = (v: string) => {
    setInner(v as ContractsFilterValue);
    onValueChange?.(v as ContractsFilterValue);
  };
  return (
    <section className={cn("flex flex-col gap-5xl rounded-xl border border-gray-blue-50 bg-gray-blue-25/40 px-2xl py-xl dark:border-gray-blue-800 dark:bg-gray-blue-900/30", className)}>
      <div className="flex flex-wrap items-center justify-between gap-md">
        <h3 className="text-md font-medium text-(--text-primary)">{title}</h3>
        <Tabs value={current} onValueChange={set}>
          <TabsList>
            <TabsTrigger value="juris" className="h-7 text-xs">Jurisdicción</TabsTrigger>
            <TabsTrigger value="type" className="h-7 text-xs">Tipo</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>{children(current)}</div>
    </section>
  );
}
