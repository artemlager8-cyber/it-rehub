import type { Metadata } from "next";
import Link from "next/link";
import { Onest, Oswald } from "next/font/google";
import { locales, localeLabels } from "@/lib/i18n";
import { LogoMark } from "@/components/logo";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin", "cyrillic", "cyrillic-ext"] });
const oswald = Oswald({ variable: "--font-oswald", weight: "700", subsets: ["latin", "cyrillic", "cyrillic-ext"] });

export const metadata: Metadata = {
  title: "404 - IT Rehub",
  robots: { index: false },
  icons: { icon: "/favicon.svg" },
};

const lines = [
  { lang: "ru", text: "Такой страницы нет." },
  { lang: "kk", text: "Мұндай бет жоқ." },
  { lang: "en", text: "This page doesn't exist." },
] as const;

// Served for any unknown URL. Kept language-neutral: the visitor's language isn't known here.
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={`${onest.variable} ${oswald.variable}`}>
      <body>
        <main className="hero not-found">
          <div className="hero-bg" aria-hidden="true">
            <LogoMark className="hero-mark" />
          </div>
          <div className="shell not-found-inner">
            <p className="not-found-code">404</p>
            <ul className="not-found-lines">
              {lines.map((line) => (
                <li key={line.lang} lang={line.lang}>
                  {line.text}
                </li>
              ))}
            </ul>
            <nav className="not-found-links">
              {locales.map((code) => (
                <Link key={code} className="button button-light" href={`/${code}/`} hrefLang={code}>
                  {localeLabels[code]}
                </Link>
              ))}
            </nav>
          </div>
        </main>
      </body>
    </html>
  );
}
