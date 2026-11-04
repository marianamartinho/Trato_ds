"use client";
import { DocLink as Link } from "@/lib/nav";
import { ArrowRight, Cube01, DotsVertical, File02, Folder, LayersThree01, LayoutGrid01, Palette, Plus, Stars01 } from "@/components/icons";
import { Alert, Avatar, AvatarGroup, Badge, Button, Chip, DocIcon, Progress, QuickAction, SearchInput, SegmentedBar, Stat } from "@/components/ui";
import { components, figmaPages, foundations, patterns } from "@/content/registry";
import tokens from "@/tokens/tokens.json";

const countColors = Object.values(tokens.primitive.color).reduce((n, v) => n + (typeof v === "string" ? 1 : Object.keys(v).length), 0);

export default function Home() {
  const ready = components.filter((c) => c.status === "ready").length;
  return (
    <div>
      {/* Hero */}
      <section className="relative -mx-xl -mt-4xl mb-6xl overflow-hidden border-b border-(--border-secondary) px-xl pb-6xl pt-6xl md:-mx-5xl md:px-5xl lg:-mx-6xl lg:px-6xl">
        <div aria-hidden className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div aria-hidden className="animate-drift absolute -right-24 -top-24 size-96 rounded-full bg-gray-blue-400/25 blur-3xl" />
        <div aria-hidden className="animate-drift absolute -left-16 top-40 size-72 rounded-full bg-orange-400/20 blur-3xl [animation-delay:-6s]" />
        <div className="relative mx-auto max-w-[1040px]">
          <Badge color="brand" size="md" className="animate-fade-up mb-2xl">
            <Stars01 /> Propuesta · Etapa 1
          </Badge>
          <h1 className="animate-fade-up max-w-[768px] text-[44px] font-semibold leading-[1.08] tracking-[-0.03em] text-(--text-primary) md:text-[56px] [animation-delay:60ms]">
            Un Design System para <span className="bg-gradient-to-r from-gray-blue-600 via-gray-blue-400 to-orange-500 bg-clip-text text-transparent">Trato</span>, construido en código.
          </h1>
          <p className="animate-fade-up mt-2xl max-w-[672px] text-lg text-(--text-tertiary) [animation-delay:120ms]">
            Tokens, componentes y patrones extraídos de los diseños de la plataforma en Figma, construidos en código y listos para usarse en producto. Un mismo lugar de referencia para Diseño y Desarrollo.
          </p>
          <div className="animate-fade-up mt-4xl flex flex-wrap gap-lg [animation-delay:180ms]">
            <Button asChild size="lg">
              <Link href="/roadmap/">
                Ver la hoja de ruta <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/components/button/">Ver componentes</Link>
            </Button>
          </div>

          <div className="animate-fade-up mt-6xl grid grid-cols-2 gap-xl md:grid-cols-4 [animation-delay:240ms]">
            {[
              { k: `${ready}`, v: "componentes listos" },
              { k: `${countColors}`, v: "colores primitivos" },
              { k: `${Object.keys(tokens.semantic.light).length}`, v: "tokens semánticos" },
              { k: `${figmaPages.length}`, v: "áreas de producto relevadas" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-(--border-secondary) bg-(--bg-primary)/70 p-xl backdrop-blur">
                <p className="text-display-xs font-semibold text-(--text-primary)">{s.k}</p>
                <p className="text-sm text-(--text-tertiary)">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Alert tone="info" title="Trabajo en curso" className="mb-6xl">
        Hace un mes que construimos este Design System en el repo. Todavía faltan piezas: lo que ven acá es un adelanto para que tengan una idea del rumbo.
      </Alert>

      {/* Showcase vivo */}
      <section className="mb-6xl">
        <div className="mb-2xl flex items-end justify-between gap-xl">
          <div>
            <h2 className="text-xl font-semibold text-(--text-primary)">Componentes reales, vivos</h2>
            <p className="text-md text-(--text-tertiary)">Fragmentos de Documentos, Dashboard y Chat IA armados solo con componentes del DS.</p>
          </div>
        </div>
        <div className="grid gap-xl lg:grid-cols-5">
          <div className="flex min-w-0 flex-col gap-xl rounded-3xl border border-(--border-secondary) bg-(--bg-canvas) p-xl lg:col-span-3">
            <div className="flex flex-wrap items-center gap-md">
              <h3 className="mr-auto text-lg font-semibold text-(--text-primary)">Documentos</h3>
              <SearchInput scopes={["Nombre", "ID"]} placeholder="Buscar documentos" className="w-full sm:w-72" />
              <Button><Plus /> Crear nuevo</Button>
            </div>
            <div className="divide-y divide-(--border-secondary) overflow-hidden rounded-xl border border-(--border-secondary) bg-(--bg-primary)">
              {[
                { t: "51 - Votación (Convertida)", m: "Otro · Actualizado 11/08/2025", p: ["F", "FL"], d: 402, s: "Borrador" },
                { t: "49 - Solicitud de contrato proveedor", m: "Otro · Actualizado 11/08/2025", p: ["P1"], d: 12, s: "En firma", tag: "Test" },
                { t: "42 - contrato277", m: "Otro · Actualizado 09/06/2025", p: ["P1", "P2"], d: 0, s: "Firmado", pdf: true },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-lg px-xl py-lg">
                  <DocIcon type={r.pdf ? "pdf" : "doc"} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-(--text-primary)">{r.t}</p>
                    <p className="flex items-center gap-sm text-xs text-(--text-quaternary)">
                      {r.m}
                      {r.tag && (
                        <Badge color="brand" shape="tag" className="h-[18px] px-1.5">
                          <Folder /> {r.tag}
                        </Badge>
                      )}
                    </p>
                  </div>
                  <AvatarGroup>{r.p.map((p) => <Avatar key={p} initials={p} />)}</AvatarGroup>
                  <span className="hidden w-14 sm:block">
                    {r.d > 0 ? <Badge color={r.d > 100 ? "error" : "warning"}>{r.d}</Badge> : <Badge color="success">0</Badge>}
                  </span>
                  <span className="hidden w-20 text-13 text-(--text-secondary) md:block">{r.s}</span>
                  <Button variant="tertiary" size="sm" iconOnly aria-label="Acciones"><DotsVertical /></Button>
                </div>
              ))}
            </div>
            <div className="grid gap-xl rounded-xl border border-(--border-secondary) bg-(--bg-primary) p-xl sm:grid-cols-2">
              <Stat label="Avg. time to sign" info value="10 days" delta={{ value: "12%", trend: "down", positive: true, caption: "vs last month" }} />
              <Stat label="Request-to-contract rate" info value="74%" delta={{ value: "4%", trend: "up", caption: "vs last month" }} />
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-xl lg:col-span-2">
            <div className="rounded-3xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <p className="mb-xl text-md font-medium text-(--text-primary)">Lifecycle</p>
              <SegmentedBar
                segments={[
                  { label: "Draft", value: 31, color: "var(--color-gray-400)" },
                  { label: "Negotiation", value: 12, color: "var(--color-yellow-300)" },
                  { label: "Approval", value: 24, color: "var(--color-blue-light-400)" },
                  { label: "Signing", value: 8, color: "var(--color-success-500)" },
                ]}
              />
            </div>
            <div className="flex flex-1 flex-col gap-lg rounded-3xl border border-(--border-secondary) bg-(--bg-primary) p-xl">
              <div className="flex items-center gap-md">
                <Stars01 className="size-4 text-(--fg-ai)" />
                <p className="text-md font-semibold text-(--text-primary)">AI chat</p>
                <Badge color="gray" className="ml-auto">Privacy mode on</Badge>
              </div>
              <p className="ml-auto max-w-[80%] rounded-xl bg-(--bg-tertiary) px-lg py-md text-sm text-(--text-primary)">What are the payment terms?</p>
              <p className="text-sm text-(--text-secondary)">Invoices are issued monthly in arrears and payable within 30 days of receipt.</p>
              <div className="mt-auto rounded-xl border border-(--border-primary) p-md">
                <Chip icon={<File02 />} onRemove={() => {}}>Master services agreement · TR-2024-0387</Chip>
                <p className="px-xs pb-xs pt-md text-sm text-(--text-placeholder)">Ask about this contract</p>
              </div>
              <div className="flex items-center gap-md text-xs text-(--text-quaternary)">
                AI usage: 19% <Progress value={19} className="flex-1" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <QuickAction label="Assigned approval" count={13} />
              <QuickAction label="Contract signature" count={5} />
            </div>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section className="grid gap-xl md:grid-cols-3">
        {[
          { href: "/foundations/colors/", icon: <Palette />, t: "Fundamentos", d: `${foundations.length} guías: color, tipografía, espaciado, elevación, íconos y voz.` },
          { href: "/components/button/", icon: <Cube01 />, t: "Componentes", d: `${ready} listos y ${components.length - ready} en la hoja de ruta, con props y código.` },
          { href: "/patterns/dashboard/", icon: <LayoutGrid01 />, t: "Ejemplos", d: `${patterns.length} pantallas armadas solo con componentes del sistema: dashboard y chat IA.` },
        ].map((c) => (
          <Link
            key={c.t}
            href={c.href}
            className="group flex flex-col gap-lg rounded-2xl border border-(--border-secondary) bg-(--bg-primary) p-3xl transition-all hover:-translate-y-0.5 hover:border-(--border-brand) hover:shadow-lg"
          >
            <span className="grid size-10 place-items-center rounded-lg bg-(--bg-brand-subtle) text-(--fg-brand) [&_svg]:size-5">{c.icon}</span>
            <span className="text-lg font-semibold text-(--text-primary)">{c.t}</span>
            <span className="text-sm text-(--text-tertiary)">{c.d}</span>
            <span className="mt-auto inline-flex items-center gap-sm text-sm font-semibold text-(--text-brand)">
              Explorar <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-6xl rounded-3xl border border-(--border-secondary) bg-gradient-to-br from-gray-blue-700 to-gray-blue-900 p-4xl text-white">
        <div className="flex flex-col gap-xl md:flex-row md:items-center">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10"><LayersThree01 className="size-6" /></span>
          <div className="flex-1">
            <p className="text-lg font-semibold">Del Figma a la plataforma</p>
            <p className="text-sm text-gray-blue-200">Relevamos las 14 áreas del archivo de Figma y propusimos un orden para llevarlas a la plataforma, empezando por lo que más se repite.</p>
          </div>
          <Button asChild variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white">
            <Link href="/roadmap/">Ver fases propuestas</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
