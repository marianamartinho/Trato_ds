import { HASH } from "@/lib/env";
import Home from "@/content/pages/home";
import { HashApp } from "@/content/hash-app";

export default function Page() {
  return HASH ? <HashApp /> : <Home />;
}
