import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/behaviour-stress-mind/positive-thinking`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Positive Thinking: Practical Ways to Build a Healthier Mindset | Sutra Health";
const DESCRIPTION = "Practical positive thinking: what it is and is not, five practices including gratitude and acceptance, a simple daily routine and when to get professional support.";

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
  "eyebrow": "Mindset",
  "h1": "Positive thinking: practical ways to build a healthier mindset",
  "lead": "Positive thinking is not about ignoring difficult experiences. It is noticing your thoughts and choosing more constructive responses.",
  "primary": {
    "label": "Book a consultation",
    "href": "/book-appointment"
  },
  "secondaryLabel": "Back to Behaviour, Stress & Mind",
  "sections": [
    {
      "h2": "What positive thinking is, and is not",
      "items": [
        {
          "title": "In everyday life",
          "text": "It can mean seeing a situation from more than one angle, noticing what you can control and not assuming the worst.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Not forced positivity",
          "text": "Healthy thinking leaves room for disappointment, fear, anger or grief, while still allowing reflection, acceptance and action.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Linked to self-awareness",
          "text": "Noticing recurring thoughts and reactions lets you pause and choose a response that fits your values.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        }
      ],
      "paras": [],
      "bullets": [],
      "links": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    },
    {
      "h2": "Five practices",
      "paras": [
        "Use these as points for reflection, not as a promise of any mental-health outcome."
      ],
      "items": [
        {
          "title": "Do not judge others",
          "text": "People face different challenges. Compassion and understanding make for kinder interactions.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Accept things as they are",
          "text": "Practise seeing a situation as it is instead of constantly wishing it were different. Acceptance can lead to calmer, more constructive responses.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Practise gratitude",
          "text": "Notice and name things you value in everyday life. Gratitude helps attention settle on what is good in your relationships and day.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Move towards self-empowerment",
          "text": "Take responsibility for your choices and reflect on emotions such as desire, anger, pride, fear and grief. Some people find David Hawkins's Levels of Consciousness a useful framework for reflection. It is a personal and spiritual model, not a scientific one.",
          "link": {
            "href": "https://thejoywithin.org/spirituality/the-levels-of-consciousness-with-david-r-hawkins",
            "label": "Read an overview of the framework"
          },
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": ""
        },
        {
          "title": "Live quietly in the moment",
          "text": "Slow down, breathe comfortably and pay attention to what you are doing right now.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        }
      ],
      "bullets": [],
      "links": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    },
    {
      "h2": "A daily routine you can keep",
      "items": [
        {
          "title": "Notice the thought",
          "text": "Pause and name what you are thinking before reacting.",
          "tryThis": "Ask, 'What am I telling myself right now?'",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Ask what is in your control",
          "text": "Separate what you can influence from what you cannot change directly.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Write one thing you appreciate",
          "text": "A short gratitude note helps you notice something useful or good in your day.",
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": "",
          "link": {
            "href": "",
            "label": ""
          }
        },
        {
          "title": "Take a present-moment pause",
          "text": "Slow down, breathe comfortably and bring your attention back to now.",
          "link": {
            "href": "/services/therapeutic-yoga/meditation",
            "label": "Learn a simple meditation"
          },
          "image": "",
          "imageAlt": "",
          "sub": "",
          "tryThis": ""
        }
      ],
      "paras": [],
      "bullets": [],
      "links": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    },
    {
      "h2": "When to get professional support",
      "paras": [
        "Positive thinking is not a replacement for professional care. If low mood, anxiety or distress is lasting, severe or affecting daily life, speak to a doctor or qualified mental-health professional."
      ],
      "links": [
        {
          "label": "Book a physician consultation",
          "href": "/services/physician-consultation"
        }
      ],
      "bullets": [],
      "items": [],
      "image": {
        "src": "",
        "alt": "",
        "caption": ""
      }
    }
  ],
  "faqTitle": "Positive thinking: common questions",
  "faqs": [
    {
      "q": "Is positive thinking the same as being happy all the time?",
      "a": "No. A constructive mindset can hold difficult emotions and still look for useful responses. It is not about forcing yourself to feel happy or denying problems."
    },
    {
      "q": "What are the benefits?",
      "a": "It can encourage reflection, gratitude and a constructive outlook. Experiences vary, and it is not a guaranteed treatment for any health condition."
    },
    {
      "q": "How do I start?",
      "a": "Pick one habit, such as noticing a thought, asking what is in your control, or writing one thing you appreciate, and repeat it daily."
    },
    {
      "q": "How long does it take?",
      "a": "There is no set timeline. It depends on you, your circumstances and how consistently you practise."
    },
    {
      "q": "Can it replace professional mental-health support?",
      "a": "No. If difficulties are lasting, severe or affecting daily life, speak to a qualified healthcare professional."
    }
  ],
  "related": [
    {
      "label": "Nature walks",
      "href": "/services/behaviour-stress-mind/nature-walks"
    },
    {
      "label": "Meditation",
      "href": "/services/therapeutic-yoga/meditation"
    },
    {
      "label": "My Buddy",
      "href": "/services/my-buddy"
    }
  ],
  "cta": {
    "title": "Want to talk it through?",
    "text": "Book an appointment to discuss stress and mindset.",
    "label": "Book an appointment",
    "href": "/book-appointment"
  },
  "disclaimer": "This page is general information. It is not a substitute for medical assessment or diagnosis and treatment from a qualified mental-health professional. If you or someone else is in immediate danger, contact local emergency services.",
  "parent": {
    "name": "Behaviour, Stress & Mind",
    "href": "/services/behaviour-stress-mind"
  },
  "crumbLabel": "Positive Thinking"
};

const crumbs = [{"name": "Home", "href": "/"}, {"name": "Services", "href": "/services"}, {"name": "Behaviour, Stress & Mind", "href": "/services/behaviour-stress-mind"}, {"name": "Positive Thinking", "href": "/services/behaviour-stress-mind/positive-thinking"}];

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
