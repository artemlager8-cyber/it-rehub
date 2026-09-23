import type { Viewport } from "next";
import { Onest, Oswald } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/sections";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

// Web stand-in for Impact: same condensed heavy look, and it covers Kazakh letters Impact lacks.
const oswald = Oswald({
  variable: "--font-oswald",
  weight: "700",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#020A2E",
};

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${onest.variable} ${oswald.variable}`}>
      <body>
        <Header lang={lang} dict={{ nav: dict.nav, common: dict.common }} />
        {children}
        <Footer dict={dict} />
        <Reveal />
      </body>
    </html>
  );
}
