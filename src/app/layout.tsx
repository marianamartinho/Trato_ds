import type { Metadata } from "next";
import "@/styles/globals.css";
import { Shell } from "@/components/docs/shell";

export const metadata: Metadata = {
  title: { default: "Trato Design System", template: "%s · Trato DS" },
  description: "Fuente de verdad del design system de Trato: tokens, componentes y patrones en código.",
};

const themeScript = `try{var t=localStorage.getItem('trato-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
