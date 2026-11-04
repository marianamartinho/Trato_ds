"use client";
import * as React from "react";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold01, ChevronDown, File02, Italic01, Underline01 } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * EditorToolbar — Figma: "Tools" del Document Editor (267:15195), dentro de un header de 52 px.
 * Selector de bloque (file-02 + chevron), divisores 1×22, B/I/U, color (square-fill), tamaño ("30" + chevron),
 * alineación izquierda/centro/derecha/justificado (íconos 20 px, separación 12) y menús de texto
 * "Insertar firma" y "Acciones" con chevron.
 */
export type Align = "left" | "center" | "right" | "justify";

const tool = "grid size-8 place-items-center rounded-sm text-(--fg-secondary) transition-colors hover:bg-(--bg-secondary) aria-pressed:bg-(--bg-brand-subtle) aria-pressed:text-(--fg-brand) [&_svg]:size-5";
const menuTool = "inline-flex h-8 items-center gap-xs rounded-sm px-sm text-(--fg-secondary) transition-colors hover:bg-(--bg-secondary) [&_svg]:size-5";
const sep = <span aria-hidden className="mx-xs h-[22px] w-px bg-(--border-secondary)" />;

export function EditorToolbar({
  marks,
  onToggleMark,
  align,
  onAlign,
  size = 30,
  color = "currentColor",
  trailing,
  className,
}: {
  marks: { bold?: boolean; italic?: boolean; underline?: boolean };
  onToggleMark: (m: "bold" | "italic" | "underline") => void;
  align: Align;
  onAlign: (a: Align) => void;
  size?: number;
  color?: string;
  /** Menús a la derecha ("Insertar firma", "Acciones"). */
  trailing?: React.ReactNode;
  className?: string;
}) {
  const alignIcons: [Align, React.ReactNode, string][] = [
    ["left", <AlignLeft key="l" />, "Alinear a la izquierda"],
    ["center", <AlignCenter key="c" />, "Centrar"],
    ["right", <AlignRight key="r" />, "Alinear a la derecha"],
    ["justify", <AlignJustify key="j" />, "Justificar"],
  ];
  return (
    <div role="toolbar" aria-label="Formato de texto" className={cn("flex min-h-[52px] flex-wrap items-center gap-xs border-b border-(--border-secondary) bg-(--bg-primary) px-xl", className)}>
      <button className={menuTool} aria-label="Tipo de bloque"><File02 /><ChevronDown className="size-4!" /></button>
      {sep}
      <button className={tool} aria-pressed={!!marks.bold} aria-label="Negrita" onClick={() => onToggleMark("bold")}><Bold01 /></button>
      <button className={tool} aria-pressed={!!marks.italic} aria-label="Cursiva" onClick={() => onToggleMark("italic")}><Italic01 /></button>
      <button className={tool} aria-pressed={!!marks.underline} aria-label="Subrayado" onClick={() => onToggleMark("underline")}><Underline01 /></button>
      <button className={tool} aria-label="Color de texto"><span className="size-4 rounded-xxs" style={{ background: color === "currentColor" ? "var(--text-primary)" : color }} /></button>
      {sep}
      <button className={cn(menuTool, "text-sm font-medium text-(--text-secondary)")} aria-label="Tamaño de texto">{size}<ChevronDown className="size-4!" /></button>
      {sep}
      {alignIcons.map(([a, icon, label]) => (
        <button key={a} className={tool} aria-pressed={align === a} aria-label={label} onClick={() => onAlign(a)}>{icon}</button>
      ))}
      {sep}
      {trailing && <div className="ml-xs flex flex-1 items-center justify-between gap-lg">{trailing}</div>}
    </div>
  );
}

/** Menú de texto del toolbar ("Insertar firma", "Acciones"). */
export function ToolbarMenuButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="inline-flex h-8 items-center gap-sm rounded-sm px-md text-sm font-medium text-(--text-secondary) hover:bg-(--bg-secondary)" {...props}>
      {children}<ChevronDown className="size-4 text-(--fg-quaternary)" />
    </button>
  );
}
