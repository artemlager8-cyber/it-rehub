import type { Metadata } from "next";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { AgentGrid, FinalCta, SectionIndex } from "@/components/sections";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getDictionary, hasLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return pageMetadata(lang, meta.title, meta.description);
}

// The whole site is one page; the header menu scrolls to the sections by id.
export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const { hero, scan, strip, leaks, product, demo, channels, included, process, about, mission, values, compare, faq } =
    dict;

  // Section numbers follow page order, so reordering sections never breaks the numbering.
  let counter = 0;
  const n = () => String(++counter).padStart(2, "0");

  return (
    <main id="top">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <LogoMark className="hero-mark" />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>
              {hero.title} <span>{hero.titleAccent}</span>
            </h1>
            <p className="hero-lead">{hero.lead}</p>
            <div className="hero-actions">
              <WhatsAppButton message={dict.common.whatsappMessage} label={hero.cta} />
              <a className="text-link light" href="#process">
                {hero.secondary} <ArrowIcon />
              </a>
            </div>
            <p className="hero-note">{hero.ctaNote}</p>
          </div>

          <div className="scan-card" aria-label={scan.title}>
            <div className="scan-head">
              <span>{scan.title}</span>
              <span className="scan-live">
                <i /> {scan.status}
              </span>
            </div>
            <svg className="scan-pulse" viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 62h70l12-20 14 36 16-58 14 42h60l14-12 12 12h40l148-58" />
            </svg>
            <ul className="scan-rows">
              {scan.rows.map((row) => (
                <li key={row.label} className={`scan-row is-${row.state}`}>
                  <span className="scan-dot" />
                  <span className="scan-label">{row.label}</span>
                  <span className="scan-value">{row.value}</span>
                </li>
              ))}
            </ul>
            <div className="scan-foot">
              <b>{scan.found}</b>
              <small>{scan.note}</small>
            </div>
          </div>
        </div>

        <ul className="shell strip">
          {strip.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section light-section">
        <div className="shell">
          <SectionIndex n={n()}>{leaks.label}</SectionIndex>
          <div className="split-heading" data-reveal>
            <h2>{leaks.title}</h2>
            <p>{leaks.text}</p>
          </div>
          <div className="leak-grid">
            {leaks.items.map((item, index) => (
              <article key={item.title} className="leak-card" data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <span className="leak-num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="leak-bar" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="product">
        <div className="shell">
          <SectionIndex n={n()} light>
            {product.label}
          </SectionIndex>
          <div className="split-heading" data-reveal>
            <h2>{product.title}</h2>
            <p>{product.text}</p>
          </div>
          <AgentGrid agents={dict.agents} />
        </div>
      </section>

      <section className="section paper-section">
        <div className="shell demo-grid">
          <figure className="chat-card" data-reveal>
            <div className="chat-head">
              <span className="chat-avatar">
                <LogoMark />
              </span>
              <div>
                <b>{demo.chat.agentName}</b>
                <small>
                  <i /> {demo.chat.online}
                </small>
              </div>
              <span className="chat-label">{demo.chat.label}</span>
            </div>
            <div className="chat-body">
              {demo.chat.messages.map((message, index) => (
                <p key={index} className={`bubble from-${message.from}`}>
                  {message.text}
                  <time>{message.time}</time>
                </p>
              ))}
              <p className="chat-system">
                <CheckIcon /> {demo.chat.system}
              </p>
            </div>
            <figcaption>{demo.chat.caption}</figcaption>
          </figure>

          <div>
            <SectionIndex n={n()}>{demo.label}</SectionIndex>
            <h2 className="section-title" data-reveal>
              {demo.title}
            </h2>
            <div className="compare-table" data-reveal>
              {demo.rows.map(([before, after]) => (
                <div className="compare-row" key={before}>
                  <span className="compare-before">
                    <small>{demo.before}</small>
                    {before}
                  </span>
                  <span className="compare-after">
                    <small>{demo.after}</small>
                    {after}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell two-col">
          <div data-reveal>
            <SectionIndex n={n()}>{channels.label}</SectionIndex>
            <h2 className="section-title">{channels.title}</h2>
            <p className="section-text">{channels.text}</p>
            <ul className="chips">
              {channels.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <SectionIndex n={n()}>{included.label}</SectionIndex>
            <h2 className="section-title">{included.title}</h2>
            <ol className="included">
              {included.items.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section paper-section" id="process">
        <div className="shell">
          <SectionIndex n={n()}>{process.label}</SectionIndex>
          <h2 className="section-title" data-reveal>
            {process.title}
          </h2>
          <ol className="steps">
            {process.steps.map((step, index) => (
              <li key={step.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="step-marker" style={{ ["--h" as string]: `${38 + index * 18}%` }}>
                  <span>0{index + 1}</span>
                </div>
                <small>{step.meta}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section light-section" id="about">
        <div className="shell name-grid">
          <div data-reveal>
            <SectionIndex n={n()}>{about.label}</SectionIndex>
            <h2 className="section-title">{about.title}</h2>
            <p className="section-text large">{about.lead}</p>
            <h3 className="about-subtitle">{about.nameTitle}</h3>
            <p className="section-text">{about.nameText}</p>
          </div>
          <figure className="logo-figure" data-reveal>
            <div className="logo-tile">
              <LogoMark />
            </div>
            <figcaption>{about.logoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <SectionIndex n={n()} light>
            {mission.label}
          </SectionIndex>
          <p className="mission" data-reveal>
            {mission.text}
          </p>
        </div>
      </section>

      <section className="section light-section">
        <div className="shell">
          <SectionIndex n={n()}>{values.label}</SectionIndex>
          <h2 className="section-title" data-reveal>
            {values.title}
          </h2>
          <div className="value-grid">
            {values.items.map((item, index) => (
              <article key={item.title} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper-section">
        <div className="shell">
          <SectionIndex n={n()}>{compare.label}</SectionIndex>
          <h2 className="section-title" data-reveal>
            {compare.title}
          </h2>
          <div className="versus" data-reveal>
            <div className="versus-usual">
              <small>{compare.usualLabel}</small>
              <p>{compare.usual}</p>
            </div>
            <div className="versus-ours">
              <small>{compare.oursLabel}</small>
              <p>{compare.ours}</p>
              <LogoMark className="versus-mark" />
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section" id="faq">
        <div className="shell faq-layout">
          <div>
            <SectionIndex n={n()}>{faq.label}</SectionIndex>
            <h2 className="section-title" data-reveal>
              {faq.title}
            </h2>
          </div>
          <div className="faq-list">
            {faq.items.map((item, index) => (
              <details key={item.q} open={index === 0 ? true : undefined} data-reveal>
                <summary>
                  <span className="faq-num">0{index + 1}</span>
                  <span className="faq-q">{item.q}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta dict={dict} />
    </main>
  );
}
