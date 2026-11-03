"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, BookOpen, Command, Component, LayoutGrid, Menu, Moon, Palette, Search, Sun, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { TooltipProvider } from "@/components/ui/tooltip";
import { components, foundations, patterns, type NavEntry } from "@/content/registry";
import { FigmaIcon } from "./figma-icon";
import { figmaUrl } from "@/content/registry";

type Group = { title: string; icon: React.ReactNode; base: string; items: (NavEntry | { slug: string; title: string; href: string })[] };

const groups: Group[] = [
  {
    title: "Empezar",
    icon: <BookOpen />,
    base: "",
    items: [
      { slug: "home", title: "Introducción", href: "/" },
      { slug: "getting-started", title: "Cómo usarlo", href: "/getting-started/" },
      { slug: "tokens", title: "Tokens", href: "/tokens/" },
    ],
  },
  { title: "Fundamentos", icon: <Palette />, base: "/foundations", items: foundations },
  { title: "Componentes", icon: <Component />, base: "/components", items: components },
  { title: "Patrones", icon: <LayoutGrid />, base: "/patterns", items: patterns },
  {
    title: "Producto",
    icon: <FigmaIcon className="size-4" />,
    base: "",
    items: [{ slug: "screens", title: "Inventario de pantallas", href: "/screens/" }],
  },
];

const hrefOf = (g: Group, it: Group["items"][number]) => ("href" in it ? it.href : `${g.base}/${it.slug}/`);

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-md">
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-lg bg-gray-blue-700 text-white shadow-sm">
        <span className="absolute -right-1.5 -top-1.5 size-4 rounded-full bg-orange-500" />
        <span className="relative text-md font-bold leading-none">t</span>
      </span>
      <span className="flex items-baseline gap-sm">
        <span className="text-md font-semibold tracking-tight text-(--text-primary)">Trato</span>
        <span className="hidden text-sm font-medium text-(--text-quaternary) sm:inline">Design System</span>
      </span>
    </Link>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const norm = (p: string) => (p.endsWith("/") ? p : p + "/");
  return (
    <nav className="flex flex-col gap-3xl">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="mb-md flex items-center gap-md px-md text-xs font-semibold uppercase tracking-[0.06em] text-(--text-quaternary) [&_svg]:size-3.5">
            {g.icon}
            {g.title}
          </p>
          <ul className="flex flex-col gap-px">
            {g.items.map((it) => {
              const href = hrefOf(g, it);
              const active = norm(pathname) === norm(href);
              const status = "status" in it ? it.status : undefined;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    className={cn(
                      "flex h-8 items-center justify-between gap-md rounded-md px-md text-sm transition-colors",
                      active
                        ? "bg-(--bg-brand-subtle) font-semibold text-(--text-brand)"
                        : "text-(--text-tertiary) hover:bg-(--bg-tertiary) hover:text-(--text-primary)",
                      status === "planned" && !active && "text-(--text-quaternary)",
                    )}
                  >
                    <span className="truncate">{it.title}</span>
                    {status === "beta" && <span className="rounded-xs bg-warning-100 px-1 text-[10px] font-semibold text-warning-700 dark:bg-warning-900/50 dark:text-warning-300">BETA</span>}
                    {status === "planned" && <span className="size-1.5 rounded-full border border-(--border-primary)" title="Pendiente" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function useTheme() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("trato-theme", next ? "dark" : "light");
    } catch {}
  };
  return { dark, toggle };
}

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const router = useRouter();
  const [q, setQ] = React.useState("");
  const [idx, setIdx] = React.useState(0);
  const all = React.useMemo(
    () =>
      groups.flatMap((g) =>
        g.items.map((it) => ({
          group: g.title,
          title: it.title,
          href: hrefOf(g, it),
          text: [it.title, "description" in it ? it.description : "", ...("keywords" in it && it.keywords ? it.keywords : [])].join(" ").toLowerCase(),
          description: "description" in it ? it.description : "",
        })),
      ),
    [],
  );
  const results = React.useMemo(() => {
    const t = q.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    if (!t) return all;
    return all.filter((r) => r.text.normalize("NFD").replace(/[̀-ͯ]/g, "").includes(t));
  }, [q, all]);
  React.useEffect(() => setIdx(0), [q]);
  const go = (href: string) => {
    onOpenChange(false);
    setQ("");
    router.push(href);
  };
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm animate-overlay-in" />
        <Dialog.Content className="fixed left-1/2 top-[12vh] z-50 w-[calc(100vw-32px)] max-w-[576px] -translate-x-1/2 overflow-hidden rounded-2xl border border-(--border-secondary) bg-(--bg-primary) shadow-xl animate-fade-up">
          <Dialog.Title className="sr-only">Buscar en el design system</Dialog.Title>
          <div className="flex items-center gap-lg border-b border-(--border-secondary) px-xl">
            <Search className="size-5 text-(--fg-quaternary)" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)); }
                if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
                if (e.key === "Enter" && results[idx]) go(results[idx].href);
              }}
              placeholder="Buscar componentes, tokens, patrones…"
              className="h-14 flex-1 bg-transparent text-md text-(--text-primary) outline-none placeholder:text-(--text-placeholder)"
            />
            <kbd className="rounded-xs border border-(--border-secondary) px-1.5 text-xs text-(--text-quaternary)">esc</kbd>
          </div>
          <ul className="scrollbar-thin max-h-[50vh] overflow-y-auto p-md">
            {results.length === 0 && <li className="px-md py-3xl text-center text-sm text-(--text-quaternary)">Sin resultados para “{q}”.</li>}
            {results.map((r, i) => (
              <li key={r.href}>
                <button
                  onMouseEnter={() => setIdx(i)}
                  onClick={() => go(r.href)}
                  className={cn("flex w-full items-center gap-lg rounded-lg px-lg py-md text-left", i === idx && "bg-(--bg-secondary)")}
                >
                  <span className="w-24 shrink-0 text-xs font-medium text-(--text-quaternary)">{r.group}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-(--text-primary)">{r.title}</span>
                    {r.description && <span className="block truncate text-xs text-(--text-tertiary)">{r.description}</span>}
                  </span>
                  {i === idx && <ArrowRight className="size-4 text-(--fg-brand)" />}
                </button>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const { dark, toggle } = useTheme();
  const [search, setSearch] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-(--bg-primary)">
        <header className="sticky top-0 z-40 border-b border-(--border-secondary) bg-(--bg-primary)/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-xl px-xl lg:px-3xl">
            <button className="grid size-9 place-items-center rounded-md text-(--fg-secondary) hover:bg-(--bg-secondary) lg:hidden" onClick={() => setMobile(true)} aria-label="Abrir menú">
              <Menu className="size-5" />
            </button>
            <Logo />
            <span className="hidden rounded-full border border-(--border-secondary) px-md py-0.5 font-mono text-xs text-(--text-quaternary) sm:inline">v0.1</span>
            <div className="flex-1" />
            <button
              onClick={() => setSearch(true)}
              className="hidden h-9 w-64 items-center gap-md rounded-md border border-(--border-secondary) bg-(--bg-secondary) px-lg text-sm text-(--text-quaternary) transition-colors hover:border-(--border-primary) md:flex"
            >
              <Search className="size-4" />
              <span className="flex-1 text-left">Buscar…</span>
              <kbd className="inline-flex items-center gap-0.5 rounded-xs border border-(--border-secondary) bg-(--bg-primary) px-1 text-xs">
                <Command className="size-3" />K
              </kbd>
            </button>
            <button onClick={() => setSearch(true)} className="grid size-9 place-items-center rounded-md text-(--fg-secondary) hover:bg-(--bg-secondary) md:hidden" aria-label="Buscar">
              <Search className="size-5" />
            </button>
            <a href={figmaUrl()} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-md hover:bg-(--bg-secondary)" aria-label="Abrir Figma">
              <FigmaIcon className="size-4" />
            </a>
            <button onClick={toggle} className="grid size-9 place-items-center rounded-md text-(--fg-secondary) hover:bg-(--bg-secondary)" aria-label="Cambiar tema">
              {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
          </div>
        </header>

        <div className="mx-auto flex max-w-[1440px]">
          <aside className="scrollbar-thin sticky top-16 hidden h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto border-r border-(--border-secondary) px-xl py-3xl lg:block">
            <SidebarNav />
          </aside>
          <main className="min-w-0 flex-1 overflow-x-clip px-xl py-4xl md:px-5xl lg:px-6xl">
            <div className="mx-auto max-w-[1040px]">{children}</div>
            <footer className="mx-auto mt-7xl flex max-w-[1040px] flex-wrap items-center justify-between gap-lg border-t border-(--border-secondary) pt-3xl text-sm text-(--text-quaternary)">
              <span>Trato Design System · fuente de verdad para Diseño y Frontend</span>
              <span>Fuente: Figma “Platform Designs”</span>
            </footer>
          </main>
        </div>

        <Dialog.Root open={mobile} onOpenChange={setMobile}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-950/40 animate-overlay-in lg:hidden" />
            <Dialog.Content className="scrollbar-thin fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-(--bg-primary) p-xl shadow-xl lg:hidden">
              <Dialog.Title className="sr-only">Menú</Dialog.Title>
              <div className="mb-3xl flex items-center justify-between">
                <Logo />
                <Dialog.Close className="grid size-9 place-items-center rounded-md hover:bg-(--bg-secondary)" aria-label="Cerrar">
                  <X className="size-5" />
                </Dialog.Close>
              </div>
              <SidebarNav onNavigate={() => setMobile(false)} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <SearchDialog open={search} onOpenChange={setSearch} />
      </div>
    </TooltipProvider>
  );
}
