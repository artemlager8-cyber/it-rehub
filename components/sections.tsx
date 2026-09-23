import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CheckIcon } from "./icons";
import { Logo, LogoMark } from "./logo";
import { WhatsAppButton } from "./whatsapp-button";

type SectionIndexProps = { children: React.ReactNode; n?: string; light?: boolean };

export function SectionIndex({ children, n, light = false }: SectionIndexProps) {
  return (
    <p className={`section-index${light ? " light" : ""}`} data-reveal>
      {n ? `${n} / ` : null}
      {children}
    </p>
  );
}

export function AgentGrid({ agents }: { agents: Dictionary["agents"] }) {
  return (
    <div className="agent-grid">
      {agents.map((agent, index) => (
        <article
          key={agent.name}
          className="agent-card"
          data-reveal
          style={{ transitionDelay: `${index * 70}ms` }}
        >
          <div className="agent-top">
            <span className="agent-tag">{agent.tag}</span>
            <span className="agent-num">0{index + 1}</span>
          </div>
          <h3>{agent.name}</h3>
          <p>{agent.text}</p>
          <ul>
            {agent.points.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="final-cta">
      <LogoMark className="final-mark" />
      <div className="shell final-inner">
        <p className="section-index light" data-reveal>
          {dict.finalCta.label}
        </p>
        <h2 data-reveal>{dict.finalCta.title}</h2>
        <p className="final-text" data-reveal>
          {dict.finalCta.text}
        </p>
        <div className="final-actions" data-reveal>
          <WhatsAppButton message={dict.common.whatsappMessage} label={dict.common.cta} />
          <div className="final-contacts">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{dict.footer.tagline}</p>
        </div>
        <div>
          <p className="footer-label">{dict.footer.pages}</p>
          <a href="#product">{dict.nav.product}</a>
          <a href="#process">{dict.nav.process}</a>
          <a href="#about">{dict.nav.about}</a>
          <a href="#faq">{dict.nav.faq}</a>
        </div>
        <div>
          <p className="footer-label">{dict.footer.contacts}</p>
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`https://wa.me/${site.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} IT Rehub · {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
