// Prepara out/ (build con ARTIFACT=1) como sitio de una sola página publicable:
// - renombra _next/ a assets/ (hay hosts que reservan nombres con "_")
// - escapa caracteres U+FFFD literales en los bundles
// Resultado: dist-single/index.html + dist-single/assets/**
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "out", dest = "dist-single";
if (!existsSync(join(out, "index.html"))) throw new Error("Falta out/index.html. Corré: ARTIFACT=1 next build");
rmSync(dest, { recursive: true, force: true });
cpSync(join(out, "index.html"), join(dest, "index.html"));
cpSync(join(out, "_next"), join(dest, "assets"), { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
for (const f of [join(dest, "index.html"), ...walk(join(dest, "assets"))]) {
  if (!/\.(js|css|html)$/.test(f)) continue;
  const s = readFileSync(f, "utf8");
  const t = s.replaceAll("./_next/", "./assets/").replaceAll('"�"', '"\\uFFFD"');
  if (t !== s) writeFileSync(f, t);
}
console.log("✓ dist-single listo");
