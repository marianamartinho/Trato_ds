"use client";
import * as React from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/cn";

/** DropdownMenu — Figma: "Dropdown" (~40), "Menú de documento" / "Menú de carpeta" (11.2, 11.3). */
export const DropdownMenu = Menu.Root;
export const DropdownMenuTrigger = Menu.Trigger;

export function DropdownMenuContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof Menu.Content>) {
  return (
    <Menu.Portal>
      <Menu.Content
        sideOffset={6}
        align="end"
        className={cn(
          "z-50 min-w-52 overflow-hidden rounded-lg border border-(--border-secondary) bg-(--bg-primary) p-xs shadow-lg animate-overlay-in",
          className,
        )}
        {...props}
      />
    </Menu.Portal>
  );
}

export function DropdownMenuItem({
  className,
  icon,
  shortcut,
  destructive,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Menu.Item> & { icon?: React.ReactNode; shortcut?: string; destructive?: boolean }) {
  return (
    <Menu.Item
      className={cn(
        "flex h-9 cursor-pointer select-none items-center gap-md rounded-sm px-2.5 text-sm font-medium text-(--text-secondary) outline-none data-[highlighted]:bg-(--bg-secondary) data-[highlighted]:text-(--text-primary) [&_svg]:size-4 [&_svg]:text-(--fg-quaternary)",
        destructive && "text-(--text-error) data-[highlighted]:text-(--text-error) [&_svg]:text-(--fg-error)",
        className,
      )}
      {...props}
    >
      {icon}
      <span className="flex-1">{children}</span>
      {shortcut && <kbd className="font-sans text-xs text-(--text-quaternary)">{shortcut}</kbd>}
    </Menu.Item>
  );
}

export function DropdownMenuSeparator() {
  return <Menu.Separator className="-mx-xs my-xs h-px bg-(--border-secondary)" />;
}
