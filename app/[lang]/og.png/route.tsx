import { ImageResponse } from "next/og";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { Mark, brandGradient, loadOswald, ogFontFamily } from "@/lib/og";
import { site } from "@/lib/site";

const size = { width: 1200, height: 630 };

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Link preview for WhatsApp, Telegram and social networks.
// Served as /{lang}/og.png so static hosts send it with an image/png content type.
export async function GET(_request: Request, { params }: RouteContext<"/[lang]/og.png">) {
  const lang = (await params).lang as Locale;
  const { hero } = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          padding: "64px 72px",
          background: brandGradient,
          color: "#fff",
          fontFamily: ogFontFamily,
        }}
      >
        <div style={{ position: "absolute", right: 70, bottom: 60, display: "flex", opacity: 0.16 }}>
          <Mark width={330} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, letterSpacing: 1 }}>
            <Mark width={36} />
            <span>IT</span>
            <span style={{ color: "#7aaeff" }}>REHUB</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
            <span style={{ fontSize: 72, lineHeight: 1.08 }}>{hero.title}</span>
            <span style={{ fontSize: 72, lineHeight: 1.08, color: "#7aaeff" }}>{hero.titleAccent}</span>
          </div>
          <div style={{ display: "flex", gap: 36, fontSize: 28, color: "rgba(226,235,255,0.75)" }}>
            <span>{site.url.replace("https://", "")}</span>
            <span>WhatsApp {site.phoneDisplay}</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadOswald() },
  );
}
