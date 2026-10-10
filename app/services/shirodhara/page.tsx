import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

const SITE_URL = "https://lifequality.org.in";
const PAGE_URL = `${SITE_URL}/services/shirodhara`;
const BOOKING_URL = "/book-appointment";
const TITLE = "Shirodhara & Abhyanga Massage in Faridabad | Sutra Health";
const DESCRIPTION = "Shirodhara (warm liquid poured over the forehead) and Abhyanga oil massage in Faridabad, offered as relaxing traditional wellness therapies. Learn what each involves before you book.";

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

type Item = { title: string; text: string };
type Img = { src: string; alt: string; caption: string };
type PageData = {
  heroImage: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primary: { label: string; href: string };
  secondaryLabel: string;
  overview: { eyebrow: string; title: string; paras: string[] };
  points: { eyebrow: string; title: string; intro: string; items: Item[] };
  process: { eyebrow: string; title: string; note: string; steps: Item[] };
  gallery: { eyebrow: string; title: string; images: Img[] };
  links: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string; href: string; label: string }[];
    related: { label: string; href: string }[];
  };
  safety: { eyebrow: string; title: string; paras: string[] };
  faqTitle: string;
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string; label: string; href: string };
  disclaimer: string;
};

const page: PageData = {
  "heroImage": "/images/services/shirodhara.webp",
  "eyebrow": "Traditional wellness therapies · Faridabad",
  "h1": "Shirodhara and Abhyanga: traditional oil therapies for relaxation.",
  "lead": "Two Ayurvedic oil therapies offered as relaxing wellness experiences. Find out what each involves before you book.",
  "primary": {
    "label": "Book a consultation",
    "href": "/book-appointment"
  },
  "secondaryLabel": "Compare the two therapies",
  "overview": {
    "eyebrow": "The therapies",
    "title": "Two traditional practices, two different approaches.",
    "paras": [
      "Abhyanga is a full-body massage with warm herbal oil. Shirodhara is a slow, steady pour of warm liquid over the forehead while you lie down. Both come from Ayurveda, the traditional system of medicine in India.",
      "At Sutra Health they are offered as wellness therapies for relaxation. They are not treatments for a medical condition, and they do not replace medical care."
    ]
  },
  "points": {
    "eyebrow": "At a glance",
    "title": "Which one is which?",
    "intro": "",
    "items": [
      {
        "title": "Abhyanga",
        "text": "Warm herbal oil is massaged over the body. Traditional practice pays particular attention to the forehead, temples, ears, palms and soles."
      },
      {
        "title": "Shirodhara",
        "text": "Warm oil, milk, buttermilk or water is poured in a rhythmic stream over the forehead while you rest."
      },
      {
        "title": "What they are offered for",
        "text": "Relaxation and general wellbeing, including as part of a calming bedtime routine."
      },
      {
        "title": "What they are not",
        "text": "A cure or proven treatment for sleep problems, anxiety, high blood pressure or any other condition."
      }
    ]
  },
  "gallery": {
    "eyebrow": "In practice",
    "title": "Therapy sessions at Life Quality.",
    "images": [
      {
        "src": "/images/services/shirodhara/shirodhara-therapy.webp",
        "alt": "Shirodhara therapy session in progress at Life Quality Faridabad",
        "caption": "A Shirodhara session."
      },
      {
        "src": "/images/services/shirodhara/abhyanga-oil.webp",
        "alt": "Abhyanga oil massage treatment",
        "caption": "Abhyanga oil massage."
      },
      {
        "src": "/images/services/shirodhara/leg-oil-massage.webp",
        "alt": "Leg and foot oil massage",
        "caption": "Leg and foot massage."
      }
    ]
  },
  "links": {
    "eyebrow": "Read more",
    "title": "Find the detail you need.",
    "items": [
      {
        "title": "Shirodhara therapy",
        "text": "What the word means, what is poured, how a session works and who should check first.",
        "href": "/services/shirodhara/shirodhara-therapy",
        "label": "Read about Shirodhara"
      },
      {
        "title": "Abhyanga oil massage",
        "text": "What the massage involves, why the forehead, ears, palms and soles get attention, and what to know first.",
        "href": "/services/shirodhara/abhyanga-massage",
        "label": "Read about Abhyanga"
      },
      {
        "title": "Before you book",
        "text": "Questions to ask, health information to share and what to confirm.",
        "href": "/services/shirodhara/what-to-expect",
        "label": "Read before booking"
      }
    ],
    "related": [
      {
        "label": "Physician Consultation",
        "href": "/services/physician-consultation"
      },
      {
        "label": "Behaviour, Stress & Mind",
        "href": "/services/behaviour-stress-mind"
      }
    ]
  },
  "faqTitle": "Before you book",
  "faqs": [
    {
      "q": "Is Shirodhara a medical treatment?",
      "a": "No. It is a traditional wellness therapy offered for relaxation. It does not diagnose or treat any condition and does not replace medical care."
    },
    {
      "q": "Is it suitable for everyone?",
      "a": "Not always. Skin or scalp problems, allergies to oils, pregnancy and some health conditions can make a session unsuitable. Share your health information before you book."
    },
    {
      "q": "How do I book, and what does it cost?",
      "a": "Use the appointment page. Session length, fees and availability are confirmed when you book."
    }
  ],
  "cta": {
    "title": "Not sure whether a session suits you?",
    "text": "Book an appointment and ask about the therapies and any health concerns first.",
    "label": "Book an appointment",
    "href": "/book-appointment"
  },
  "disclaimer": "This page is general information about traditional wellness therapies. It is not medical advice, and the therapies do not diagnose or treat any condition or replace medical care.",
  "process": {
    "eyebrow": "",
    "title": "",
    "note": "",
    "steps": []
  },
  "safety": {
    "eyebrow": "",
    "title": "",
    "paras": []
  }
};

const crumbs = [{"name": "Home", "href": "/"}, {"name": "Services", "href": "/services"}, {"name": "Shirodhara & Abhyanga", "href": "/services/shirodhara"}];

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
      "@type": "Service",
      name: "Shirodhara & Abhyanga",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Faridabad" },
      provider: { "@type": "Organization", name: "Sutra Health", url: `${SITE_URL}/` },
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
    <main className="overflow-hidden bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero: same layout as the Lifestyle Medicine main page */}
      <section aria-labelledby="page-title" className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${page.heroImage}')` }} />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/65" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/80 via-[#101C19]/45 to-[#101C19]/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/85">{page.eyebrow}</p>
          <h1 id="page-title" className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-white">{page.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{page.lead}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={page.primary.href} className="inline-flex min-h-12 w-full items-center justify-center bg-[#F7F5EF] px-6 text-base font-semibold text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
              {page.primary.label} →
            </Link>
            <a href="#explore" className="inline-flex min-h-12 w-full items-center justify-center border border-white/70 px-6 text-base font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
              {page.secondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <section id="explore" aria-labelledby="overview-title" className="scroll-mt-20 bg-white">
        <Container>
          <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
            <div>
              <p className={eyebrow}>{page.overview.eyebrow}</p>
              <h2 id="overview-title" className={h2Class + " max-w-lg"}>{page.overview.title}</h2>
            </div>
            <div className="max-w-3xl space-y-4">
              {page.overview.paras.map((p) => (
                <p key={p} className={bodyText}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {page.points.items.length > 0 && (
        <section aria-labelledby="points-title" className="bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="py-14 sm:py-18 lg:py-20">
              <div className="max-w-3xl">
                <p className={eyebrow}>{page.points.eyebrow}</p>
                <h2 id="points-title" className={h2Class}>{page.points.title}</h2>
                {page.points.intro && <p className="mt-4 text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{page.points.intro}</p>}
              </div>
              <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
                {page.points.items.map((item) => (
                  <article key={item.title} className="border-t border-[var(--sutra-border-strong)] py-5">
                    <h3 className="font-serif text-xl sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {page.process.steps.length > 0 && (
        <section aria-labelledby="process-title" className="bg-white">
          <Container>
            <div className="py-14 sm:py-18 lg:py-20">
              <div className="max-w-2xl">
                <p className={eyebrow}>{page.process.eyebrow}</p>
                <h2 id="process-title" className={h2Class}>{page.process.title}</h2>
              </div>
              <ol className="mt-8 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
                {page.process.steps.map((s, i) => (
                  <li key={s.title} className="grid gap-2 py-6 md:grid-cols-[auto_1fr] md:gap-8">
                    <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight sm:text-2xl">{s.title}</h3>
                      <p className="mt-2 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {page.process.note && <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--sutra-muted)]">{page.process.note}</p>}
            </div>
          </Container>
        </section>
      )}

      {page.gallery.images.length > 0 && (
        <section aria-labelledby="gallery-title" className="bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="py-14 sm:py-18 lg:py-20">
              <div className="max-w-2xl">
                <p className={eyebrow}>{page.gallery.eyebrow}</p>
                <h2 id="gallery-title" className={h2Class}>{page.gallery.title}</h2>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {page.gallery.images.map((img) => (
                  <figure key={img.src} className="overflow-hidden border border-[var(--sutra-border)] bg-white">
                    <img src={img.src} alt={img.alt} width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="px-4 py-3 text-sm leading-6 text-[var(--sutra-muted)]">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section aria-labelledby="links-title" className="bg-[var(--sutra-pale-sage)]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-24">
            <div className="max-w-2xl">
              <p className={eyebrow}>{page.links.eyebrow}</p>
              <h2 id="links-title" className={h2Class}>{page.links.title}</h2>
            </div>
            <div className="mt-8 divide-y divide-[var(--sutra-border-strong)] border-y border-[var(--sutra-border-strong)]">
              {page.links.items.map((item, i) => (
                <article key={item.href} className="grid gap-4 py-7 sm:py-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--sutra-teal)]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">{item.text}</p>
                  </div>
                  <Link href={item.href} className="inline-flex min-h-11 items-center self-start font-semibold text-[var(--sutra-teal)] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                    {item.label} <span className="ml-2" aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
            {page.links.related.length > 0 && (
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--sutra-muted)]">
                Related services:{" "}
                {page.links.related.map((r, i) => (
                  <span key={r.href}>
                    {i > 0 && (i === page.links.related.length - 1 ? " and " : ", ")}
                    <Link href={r.href} className={textLink}>{r.label}</Link>
                  </span>
                ))}
                .
              </p>
            )}
          </div>
        </Container>
      </section>

      {page.safety.title && (
        <section aria-labelledby="safety-title" className="bg-white">
          <Container>
            <div className="grid gap-6 py-14 sm:py-18 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
              <div>
                <p className={eyebrow}>{page.safety.eyebrow}</p>
                <h2 id="safety-title" className={h2Class + " max-w-lg"}>{page.safety.title}</h2>
              </div>
              <div className="max-w-3xl space-y-4">
                {page.safety.paras.map((p) => (
                  <p key={p} className={bodyText}>{p}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

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
