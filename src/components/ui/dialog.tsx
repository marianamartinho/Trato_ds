"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XClose } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * Modal — Figma: "Modal" (58 frames), Auditoría Ayudas · Sección 4, "New UI (Oscar) · Modales".
 * Ícono destacado opcional + título + descripción + acciones a la derecha.
 */
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  children,
  icon,
  title,
  description,
  footer,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-gray-950/50 backdrop-blur-[2px] animate-overlay-in" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-(--border-secondary) bg-(--bg-primary) shadow-xl animate-dialog-in",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col gap-xl p-3xl pb-0">
          {icon && (
            <div className="grid size-12 place-items-center rounded-full border-8 border-indigo-50 bg-indigo-100 text-indigo-600 dark:border-indigo-900/40 dark:bg-indigo-900 dark:text-indigo-300 [&_svg]:size-5">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-xs">
            <DialogPrimitive.Title className="text-lg font-semibold text-(--text-primary)">{title}</DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="text-sm text-(--text-tertiary)">{description}</DialogPrimitive.Description>
            )}
          </div>
          {children}
        </div>
        {footer && <div className="flex justify-end gap-lg p-3xl pt-2xl">{footer}</div>}
        <DialogPrimitive.Close
          className="absolute right-xl top-xl grid size-9 place-items-center rounded-md text-(--fg-quaternary) hover:bg-(--bg-secondary) hover:text-(--fg-secondary)"
          aria-label="Cerrar"
        >
          <XClose className="size-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
