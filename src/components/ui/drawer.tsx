"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XClose } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * Drawer — Figma: panel lateral derecho "Sidebar" armado (Document Editor "Análisis con IA", 267:14867).
 * 360 px en el editor (hasta ~470 en chat IA). Header 56 px con título 18 medium y acciones,
 * cuerpo con scroll y footer opcional. Dos formas:
 * - <Drawer> modal (Radix Dialog) que entra desde la derecha.
 * - <SidePanel> fijo al costado, como en el editor.
 */
function PanelBody({ title, description, actions, footer, children, onClose }: PanelProps & { onClose?: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-14 items-center gap-md border-b border-(--border-secondary) px-xl">
        <div className="mr-auto min-w-0 py-md">
          {typeof title === "string" ? <h2 className="truncate text-lg font-medium text-(--text-primary)">{title}</h2> : title}
          {description && <p className="text-sm text-(--text-tertiary)">{description}</p>}
        </div>
        {actions}
        {onClose}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-xl">{children}</div>
      {footer && <div className="flex justify-end gap-lg border-t border-(--border-secondary) px-xl py-lg">{footer}</div>}
    </>
  );
}

interface PanelProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;

export function DrawerContent({ width = 360, className, ...props }: PanelProps & { width?: number; className?: string }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-gray-950/30 animate-overlay-in" />
      <DialogPrimitive.Content
        aria-describedby={undefined}
        className={cn("fixed inset-y-0 right-0 z-50 flex w-full flex-col border-l border-(--border-secondary) bg-(--bg-primary) shadow-xl animate-fade-up", className)}
        style={{ maxWidth: width }}
      >
        <DialogPrimitive.Title asChild><div className="sr-only">{typeof props.title === "string" ? props.title : "Panel"}</div></DialogPrimitive.Title>
        <PanelBody
          {...props}
          onClose={
            <DialogPrimitive.Close aria-label="Cerrar" className="grid size-9 place-items-center rounded-md text-(--fg-quaternary) hover:bg-(--bg-secondary) hover:text-(--fg-secondary)">
              <XClose className="size-5" />
            </DialogPrimitive.Close>
          }
        />
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function SidePanel({ width = 360, className, onClose, ...props }: PanelProps & { width?: number; className?: string; onClose?: () => void }) {
  return (
    <aside className={cn("flex h-full w-full flex-col border-l border-(--border-secondary) bg-(--bg-primary)", className)} style={{ maxWidth: width }}>
      <PanelBody
        {...props}
        onClose={onClose && (
          <button onClick={onClose} aria-label="Cerrar" className="grid size-9 place-items-center rounded-md text-(--fg-quaternary) hover:bg-(--bg-secondary) hover:text-(--fg-secondary)">
            <XClose className="size-5" />
          </button>
        )}
      />
    </aside>
  );
}
