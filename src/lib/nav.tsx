"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/**
 * Navegación del sitio de docs.
 * - Modo normal (Next.js / Vercel): rutas reales (/components/button/).
 * - Modo hash (NEXT_PUBLIC_HASH_ROUTER=1): todo vive en index.html y se navega con
 *   #components-button. Se usa para publicar el sitio como un único link estático.
 */
import { HASH } from "./env";
export { HASH };
const PREFIXES = ["foundations", "components", "patterns"];

export function toHash(href: string) {
  const [path, anchor] = href.split("#");
  const p = path.replace(/^\/|\/$/g, "");
  if (!p) return anchor ? `#${anchor}` : "#";
  return "#" + p.replace(/\//g, "-");
}

export function fromHash(hash: string) {
  const s = hash.replace(/^#/, "");
  if (!s) return "/";
  for (const pre of PREFIXES) if (s.startsWith(pre + "-")) return `/${pre}/${s.slice(pre.length + 1)}/`;
  return `/${s}/`;
}

export function usePath() {
  const pathname = usePathname();
  const [hashPath, setHashPath] = React.useState("/");
  React.useEffect(() => {
    if (!HASH) return;
    const sync = () => {
      setHashPath(fromHash(window.location.hash));
      window.scrollTo(0, 0);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  return HASH ? hashPath : pathname;
}

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export const DocLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({ href, ...props }, ref) => {
  if (HASH && href.startsWith("/")) return <a ref={ref} href={toHash(href)} {...props} />;
  return <Link ref={ref} href={href} {...props} />;
});
DocLink.displayName = "DocLink";

export function useNavigate() {
  const router = useRouter();
  return (href: string) => {
    if (HASH) window.location.hash = toHash(href).slice(1);
    else router.push(href);
  };
}
