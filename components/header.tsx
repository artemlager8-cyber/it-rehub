"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { locales, localeLabels, type Dictionary, type Locale } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";
import { ChatIcon } from "./icons";
import { Logo } from "./logo";

type Props = { lang: Locale; dict: Pick<Dictionary, "nav" | "common"> };

const sectionIds = ["product", "process", "about", "faq"] as const;

export function Header({ lang, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the menu item of the section crossing the middle of the screen. A section stays
  // active through the unlisted blocks after it, and scrolling back above it clears it.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          if (entry.isIntersecting) setActive(id);
          else if (entry.boundingClientRect.top > 0) {
            const previous = sectionIds[sectionIds.indexOf(id as (typeof sectionIds)[number]) - 1] ?? null;
            setActive((current) => (current === id ? previous : current));
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const remember = (target: Locale) => {
    try {
      localStorage.setItem("lang", target);
    } catch {}
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="header-logo" aria-label={`IT Rehub - ${dict.common.home}`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="header-nav" id="site-nav" aria-label={dict.common.menu}>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {dict.nav[id]}
            </a>
          ))}
          <a
            className="button button-blue nav-cta"
            href={whatsappLink(dict.common.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <ChatIcon />
            {dict.common.cta}
          </a>
        </nav>

        <div className="header-tools">
          <div className="lang-switch" role="group" aria-label={dict.common.language}>
            {locales.map((code) => (
              <Link
                key={code}
                href={`/${code}/${active ? `#${active}` : ""}`}
                hrefLang={code}
                lang={code}
                aria-current={code === lang ? "true" : undefined}
                onClick={() => remember(code)}
              >
                {localeLabels[code]}
              </Link>
            ))}
          </div>
          <a
            className="button button-light header-cta"
            href={whatsappLink(dict.common.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <ChatIcon />
            <span>{dict.common.ctaShort}</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? dict.common.close : dict.common.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
