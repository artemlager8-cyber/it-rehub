import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "IT Rehub",
  description: "Диагностика бизнеса и ИИ-агенты · Бизнес диагностикасы және ЖИ-агенттер · Business diagnostics and AI agents",
  alternates: {
    languages: { ru: "/ru/", kk: "/kk/", en: "/en/", "x-default": "/ru/" },
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, background: "#020A2E", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
