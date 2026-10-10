import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/my-buddy/join`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Become a Buddy or Find a Buddy | My Buddy | Sutra Health";
const DESCRIPTION = "How to take part in My Buddy: register to become a peer-support buddy, or contact Sutra Health to find one.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [{ url: `${SITE_URL}/images/og-image.webp`, width: 1200, height: 630, alt: "Sutra Health" }],
  },
};

type Img = { src: string; alt: string; caption: string };
type SubItem = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  sub: string;
  tryThis: string;
  link: { href: string; label: string };
};
type Section = {
  h2: string;
  paras: string[];
  bullets: string[];
  image: Img;
  items: SubItem[];
  links: { label: string; href: string; external?: boolean }[];
};
type PageData = {
  parent: { name: string; href: string };
  crumbLabel: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primary: { label: string; href: string };
  secondaryLabel: string;
  sections: Section[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  cta: { title: string; text: string; label: string; href: string };
  disclaimer: string;
};

const page: PageData = {
  "eyebrow": "My Buddy",
  "h1": "How to become a buddy or find one",
  "lead": "Choose the option that fits you. Both start with a simple registration or enquiry.",
  "primary": {
    "label": "Register to become a buddy",
    "href": "https://docs.google.com/forms/d/e/1FAIpQLSdtgQtU1eIuwNpmgpOVOrIi_fZzHv5rOxiJe-sH_SG3NUTRiQ/viewform"
  },
  "secondaryLabel": "Back to My Buddy",
  "sections": [
    {
      "h2": "Become a buddy",
      "paras": [
        "Support others as they work towards positive habits, confidence and healthier routines by being a caring and supportive companion.",
        "Register using the form. The team will share the next steps with you."
      ],
      "links": [
        {
          "label": "Open the buddy registration form",
          "href": "https://docs.google.com/forms/d/e/1FAIpQLSdtgQtU1eIuwNpmgpOVOrIi_fZzHv5rOxiJe-sH_SG3NUTRiQ/viewform",
          "external": true
        }
      ],
      "bullets": [],
      "items": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    },
    {
      "h2": "Find a buddy",
      "paras": [
        "Connect with someone who can offer encouragement as you work towards healthy living, emotional wellbeing and a positive mindset.",
        "Contact Sutra Health to say you would like a buddy."
      ],
      "links": [
        {
          "label": "Contact Sutra Health",
          "href": "/contact"
        }
      ],
      "bullets": [],
      "items": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    },
    {
      "h2": "Before you join",
      "paras": [
        "My Buddy is peer support, not professional care. If you need medical or mental-health support, speak to a qualified professional as well. If you or someone else is in immediate danger, contact local emergency services."
      ],
      "bullets": [],
      "items": [],
      "links": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    }
  ],
  "faqs": [
    {
      "q": "Do I need any experience to become a buddy?",
      "a": "Requirements and any training are shared when you register. Ask the team if you are unsure."
    },
    {
      "q": "Is there a fee?",
      "a": "Details are confirmed when you register or get in touch."
    }
  ],
  "related": [
    {
      "label": "Six wellbeing lessons",
      "href": "/services/my-buddy/wellbeing-lessons"
    },
    {
      "label": "Behaviour, Stress & Mind",
      "href": "/services/behaviour-stress-mind"
    }
  ],
  "cta": {
    "title": "Questions before you join?",
    "text": "Get in touch and ask the team.",
    "label": "Contact Sutra Health",
    "href": "/contact"
  },
  "disclaimer": "My Buddy is a peer-support initiative. It is not a substitute for professional medical or mental-health care. If you or someone else is in immediate danger, contact local emergency services.",
  "faqTitle": "Common questions",
  "parent": {
    "name": "My Buddy",
    "href": "/services/my-buddy"
  },
  "crumbLabel": "How to Join"
};

const crumbs = [{"name": "Home", "href": "/"}, {"name": "Services", "href": "/services"}, {"name": "My Buddy", "href": "/services/my-buddy"}, {"name": "How to Join", "href": "/services/my-buddy/join"}];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Sutra Health", url: `${SITE_URL}/` },
    },
    
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] sm:text-xs";
const h2Class = "mt-4 font-serif text-3xl leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-5xl";
const bodyText = "text-base leading-8 text-[var(--sutra-muted)] sm:text-lg sm:leading-9";
const textLink = "font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";


export default function Page() {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero: same layout as the Lifestyle Medicine sub-pages */}
      <section className="border-b border-[var(--sutra-border)] bg-white">
        <Container>
          <div className="max-w-4xl py-10 sm:py-14 lg:py-16">
           
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-[var(--sutra-teal)]">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">{page.h1}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">{page.lead}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={page.primary.href} className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-base font-semibold text-white hover:opacity-90">{page.primary.label} ↗</Link>
              <Link href={page.parent.href} className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] hover:bg-[var(--sutra-porcelain)]">{page.secondaryLabel}</Link>
            </div>
          </div>
        </Container>
      </section>

      {page.sections.map((s, idx) => (
        <section key={s.h2} aria-labelledby={`s-${idx}`} className={idx % 2 === 0 ? "bg-[var(--sutra-porcelain)]" : "bg-white"}>
          <Container>
            <div className="py-10 sm:py-14 lg:py-16">
              <div className="max-w-3xl">
                <h2 id={`s-${idx}`} className="font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">{s.h2}</h2>
                {s.paras.map((p) => (
                  <p key={p} className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{p}</p>
                ))}
                {s.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              {s.image.src && (
                <figure className="mt-8 max-w-3xl overflow-hidden border border-[var(--sutra-border)] bg-white">
                  <img src={s.image.src} alt={s.image.alt} width={1200} height={800} loading="lazy" className="max-h-[460px] w-full object-cover" />
                  {s.image.caption && <figcaption className="px-4 py-3 text-sm leading-6 text-[var(--sutra-muted)]">{s.image.caption}</figcaption>}
                </figure>
              )}

              {s.items.length > 0 && (
                <div className="mt-7 border-t border-[var(--sutra-border-strong)]">
                  {s.items.map((it) => (
                    <article key={it.title} className="grid gap-4 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-8 sm:py-7">
                      {it.image ? (
                        <img src={it.image} alt={it.imageAlt} width={440} height={440} loading="lazy" className="aspect-square w-full max-w-[220px] object-cover" />
                      ) : (
                        <h3 className="font-serif text-xl leading-snug sm:text-2xl">{it.title}</h3>
                      )}
                      <div>
                        {it.image && <h3 className="font-serif text-xl leading-snug sm:text-2xl">{it.title}</h3>}
                        {it.sub && <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--sutra-teal)]">{it.sub}</p>}
                        <p className="mt-2 max-w-3xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{it.text}</p>
                        {it.tryThis && (
                          <p className="mt-3 text-base leading-7 sm:text-lg"><span className="font-semibold">Try this: </span><span className="text-[var(--sutra-muted)]">{it.tryThis}</span></p>
                        )}
                        {it.link.href && (
                          <Link href={it.link.href} className={"mt-3 inline-flex min-h-11 items-center " + textLink}>{it.link.label} →</Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {s.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {s.links.map((l) =>
                    l.external ? (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={textLink}>{l.label} ↗</a>
                    ) : (
                      <Link key={l.href} href={l.href} className={textLink}>{l.label} →</Link>
                    )
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      <section aria-labelledby="faq-title" className="bg-white">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-2xl">
              <p className={eyebrow}>Common questions</p>
              <h2 id="faq-title" className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{page.faqTitle}</h2>
            </div>
            <div className="mt-7 max-w-4xl divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {page.faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold leading-7 marker:content-none sm:text-lg">
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="text-xl text-[var(--sutra-teal)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-3 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-porcelain)] py-8 sm:py-10">
        <Container>
          <p className="text-sm font-semibold text-[var(--sutra-muted)]">Keep reading</p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[var(--sutra-teal)]">
            <Link href={page.parent.href} className="underline-offset-4 hover:underline">← {page.parent.name}</Link>
            {page.related.map((r) => (
              <Link key={r.href} href={r.href} className="underline-offset-4 hover:underline">{r.label} →</Link>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="cta-title" className="bg-[var(--sutra-teal)] text-white">
        <Container>
          <div className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14">
            <div className="max-w-2xl">
              <h2 id="cta-title" className="font-serif text-3xl leading-tight sm:text-4xl">{page.cta.title}</h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">{page.cta.text}</p>
            </div>
            <Link href={page.cta.href} className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-base font-semibold text-[var(--sutra-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {page.cta.label} ↗
            </Link>
          </div>
        </Container>
      </section>

      <p className="mx-auto max-w-7xl px-4 py-5 text-sm leading-6 text-[var(--sutra-muted)] sm:px-6 md:px-8 lg:px-12">{page.disclaimer}</p>
    </main>
  );
}
