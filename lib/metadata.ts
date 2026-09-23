import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";
import { site } from "./site";

const ogLocale: Record<Locale, string> = { ru: "ru_RU", kk: "kk_KZ", en: "en_US" };

export function pageMetadata(lang: Locale, title: string, description: string): Metadata {
  const languages = Object.fromEntries(locales.map((code) => [code, `/${code}/`]));
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: `/${lang}/`,
      languages: { ...languages, "x-default": `/ru/` },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: `/${lang}/`,
      locale: ogLocale[lang],
      images: [{ url: `/${lang}/og.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", images: [`/${lang}/og.png`] },
    icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  };
}
