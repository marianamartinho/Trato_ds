"use client";
import * as React from "react";
import { ChevronDown, SearchLg } from "@untitledui/icons";
import { cn } from "@/lib/cn";

/**
 * SearchInput — Figma: header de "Documentos" (Expedientes · 11.1).
 * Selector de alcance ("Nombre") + campo de búsqueda en un mismo contenedor.
 */
export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  scopes?: string[];
  scope?: string;
  onScopeChange?: (scope: string) => void;
}

export function SearchInput({ scopes, scope, onScopeChange, className, ...props }: SearchInputProps) {
  return (
    <div
      className={cn(
        "flex h-10 items-stretch overflow-hidden rounded-md border border-(--border-primary) bg-(--bg-primary) shadow-xs focus-within:border-(--border-brand) focus-within:ring-4 focus-within:ring-gray-blue-100 dark:focus-within:ring-gray-blue-900/50",
        className,
      )}
    >
      {scopes && scopes.length > 0 && (
        <label className="relative flex items-center gap-sm border-r border-(--border-primary) pl-lg pr-2.5 text-13 font-medium text-(--text-secondary)">
          <span>{scope ?? scopes[0]}</span>
          <ChevronDown className="size-3.5 text-(--fg-quaternary)" />
          <select
            aria-label="Buscar por"
            className="absolute inset-0 cursor-pointer opacity-0"
            value={scope ?? scopes[0]}
            onChange={(e) => onScopeChange?.(e.target.value)}
          >
            {scopes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      )}
      <div className="flex flex-1 items-center gap-md px-lg">
        <SearchLg className="size-4 text-(--fg-quaternary)" />
        <input
          type="search"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-(--text-primary) outline-none placeholder:text-(--text-placeholder)"
          {...props}
        />
      </div>
    </div>
  );
}
