// Genera src/styles/tokens.css a partir de src/tokens/tokens.json.
// Uso: npm run tokens
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const tokens = JSON.parse(readFileSync(new URL("../src/tokens/tokens.json", import.meta.url)));
const { color, spacing, radius, font, shadow } = tokens.primitive;

const kebab = (s) => s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
const lines = [];
const prim = [];

for (const [name, val] of Object.entries(color)) {
  if (typeof val === "string") prim.push(`  --color-${name}: ${val};`);
  else for (const [step, hex] of Object.entries(val)) prim.push(`  --color-${kebab(name)}-${step}: ${hex};`);
}
for (const [k, v] of Object.entries(spacing)) prim.push(`  --spacing-${k}: ${v}px;`);
for (const [k, v] of Object.entries(radius)) prim.push(`  --radius-${k}: ${v}px;`);
for (const [k, v] of Object.entries(shadow)) prim.push(`  --shadow-${k}: ${v};`);
for (const [k, [size, lh]] of Object.entries(font.size)) {
  prim.push(`  --text-${k}: ${size}px;`);
  prim.push(`  --text-${k}--line-height: ${lh}px;`);
}

const resolve = (ref) => {
  const m = /^\{([^}]+)\}$/.exec(ref);
  if (!m) return ref;
  const [group, step] = m[1].split(".");
  return step ? `var(--color-${kebab(group)}-${step})` : `var(--color-${group})`;
};
const semantic = (mode) =>
  Object.entries(tokens.semantic[mode]).map(([k, v]) => `  --${k}: ${resolve(v)};`).join("\n");

lines.push("/* ⚠️ Archivo generado por scripts/build-tokens.mjs — no editar a mano. */");
lines.push("/* Fuente de verdad: src/tokens/tokens.json */\n");
lines.push("/* Primitivos → expuestos como utilidades Tailwind (bg-indigo-500, p-md, rounded-sm, text-sm, shadow-xs…) */");
lines.push("@theme {\n" + prim.join("\n") + "\n}\n");
lines.push(":root, .light, :root[data-theme=\"light\"] {\n  /* Semánticos — modo claro. Uso: bg-(--bg-primary), text-(--text-secondary) */\n" + semantic("light") + "\n}\n");
lines.push(".dark, :root[data-theme=\"dark\"] {\n  /* Semánticos — modo oscuro */\n" + semantic("dark") + "\n}\n");

mkdirSync(new URL("../src/styles/", import.meta.url), { recursive: true });
writeFileSync(new URL("../src/styles/tokens.css", import.meta.url), lines.join("\n"));
console.log("✓ tokens.css generado");
