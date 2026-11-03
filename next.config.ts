import type { NextConfig } from "next";

// ARTIFACT=1 → página única con rutas por hash y assets relativos (para publicar como un solo link).
const artifact = process.env.ARTIFACT === "1";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(artifact ? { assetPrefix: "." } : {}),
  env: { NEXT_PUBLIC_HASH_ROUTER: artifact ? "1" : "0" },
};

export default nextConfig;
