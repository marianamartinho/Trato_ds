"use client";
import { usePath } from "@/lib/nav";
import Home from "./pages/home";
import Screens from "./pages/screens";
import TokensPage from "./pages/tokens";
import GettingStarted from "./pages/getting-started";
import Roadmap from "./pages/roadmap";
import Implementation from "./pages/implementation";
import { ComponentView, FoundationView, PatternView } from "./views";

/** Router por hash: renderiza la vista según location.hash (modo página única). */
export function HashApp() {
  const path = usePath();
  const [, kind, slug] = path.split("/");
  const view = (() => {
    if (kind === "foundations" && slug) return <FoundationView slug={slug} />;
    if (kind === "components" && slug) return <ComponentView slug={slug} />;
    if (kind === "patterns" && slug) return <PatternView slug={slug} />;
    if (kind === "screens") return <Screens />;
    if (kind === "tokens") return <TokensPage />;
    if (kind === "getting-started") return <GettingStarted />;
    if (kind === "roadmap") return <Roadmap />;
    if (kind === "implementation") return <Implementation />;
    return null;
  })();
  return <div key={path}>{view ?? <Home />}</div>;
}
