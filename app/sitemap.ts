import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// One page per language.
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${site.url}/${lang}/`,
    alternates: {
      languages: Object.fromEntries(locales.map((code) => [code, `${site.url}/${code}/`])),
    },
  }));
}
