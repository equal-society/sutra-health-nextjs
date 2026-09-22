import type { Metadata } from "next";
import Link from "next/link";

export type ServicePageConfig = {
  name: string;
  shortName?: string;
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  eyebrow?: string;
  trust: string[];
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  focusEyebrow: string;
  focusTitle: string;
  focusIntro: string;
  focusAreas: { number: string; title: string; description: string }[];
  processTitle: string;
  processIntro: string;
  process: { number: string; title: string; description: string }[];
  contextEyebrow: string;
  contextTitle: string;
  contextParagraphs: string[];
  related: { title: string; description: string; href: string }[];
  faq: { question: string; answer: string }[];
  finalTitle: string;
  finalDescription: string;
  serviceType?: string;
  medicalAbout?: string;
  ctaLabel?: string;
};

export function createServiceMetadata(config: ServicePageConfig): Metadata {
  const canonical = `https://lifequality.org.in/what-we-do/${config.slug}`;

  return {
    title: config.title,
    description: config.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonical,
      siteName: "Sutra Health",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
  };
}

function getSchema(config: ServicePageConfig) {
  const baseUrl = "https://lifequality.org.in";
  const url = `${baseUrl}/what-we-do/${config.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: config.name,
        url,
        description: config.description,
        isPartOf: {
          "@type": "WebSite",
          name: "Sutra Health",
          url: baseUrl,
        },
        about: {
          "@type": config.serviceType || "MedicalTherapy",
          name: config.medicalAbout || config.name,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "What We Do",
            item: `${baseUrl}/what-we-do`,
          },
          { "@type": "ListItem", position: 3, name: config.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: config.name,
        description: config.description,
        provider: {
          "@type": "MedicalOrganization",
          name: "Sutra Health",
          url: baseUrl,
        },
        areaServed: [
          { "@type": "City", name: "Faridabad" },
          { "@type": "AdministrativeArea", name: "Delhi NCR" },
        ],
        url,
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  const schema = getSchema(config);

  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      
      <section className="border-b border-[var(--sutra-border)]">
        
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          
          <div className="max-w-4xl">
            
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              {config.eyebrow || "What We Do"}
            </p>

            <h1 className="mt-5 max-w-4xl font-[var(--font-serif)] text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {config.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--sutra-muted)] sm:text-xl sm:leading-9">
              {config.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-none bg-[var(--sutra-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
              >
                {config.ctaLabel || "Book a Consultation"}
              </Link>

              <Link
                href="/what-we-do"
                className="inline-flex items-center justify-center rounded-none border border-[var(--sutra-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
              >
                Explore What We Do
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--sutra-muted)]">
              {config.trust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                {config.introEyebrow}
              </p>
              <h2 className="mt-4 max-w-xl font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
                {config.introTitle}
              </h2>
            </div>

            <div className="max-w-2xl">
              {config.introParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-lg leading-8 text-[var(--sutra-muted)]" : "mt-5 text-lg leading-8 text-[var(--sutra-muted)]"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              {config.focusEyebrow}
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              {config.focusTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
              {config.focusIntro}
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {config.focusAreas.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[72px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-7"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-[var(--sutra-sage)]">
                  {item.number}
                </span>
                <h3 className="font-[var(--font-serif)] text-2xl leading-tight tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              How It Works
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              {config.processTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {config.processIntro}
            </p>
          </div>

          <div className="mt-8 border-t border-white/20">
            {config.process.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[72px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-7"
              >
                <span className="text-sm font-semibold tracking-[0.12em] text-white/50">
                  {item.number}
                </span>
                <h3 className="font-[var(--font-serif)] text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-none bg-white px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-porcelain)]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                {config.contextEyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl font-[var(--font-serif)] text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                {config.contextTitle}
              </h2>
            </div>

            <div className="max-w-2xl">
              {config.contextParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? "text-lg leading-8 text-[var(--sutra-muted)]" : "mt-5 text-lg leading-8 text-[var(--sutra-muted)]"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Continue Your Care
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              Related services
            </h2>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {config.related.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group grid gap-3 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[0.8fr_1.2fr_auto] sm:items-center sm:gap-8 sm:py-7"
              >
                <h3 className="font-[var(--font-serif)] text-2xl leading-tight tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="max-w-xl text-base leading-7 text-[var(--sutra-muted)]">
                  {service.description}
                </p>
                <span
                  className="text-lg text-[var(--sutra-teal)] transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-4xl">
              About {config.shortName || config.name}
            </h2>
          </div>

          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {config.faq.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[var(--sutra-border-strong)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-[var(--font-serif)] text-xl leading-tight marker:hidden">
                  <span>{item.question}</span>
                  <span
                    className="relative flex h-5 w-5 shrink-0 items-center justify-center text-[var(--sutra-teal)]"
                    aria-hidden="true"
                  >
                    <span className="absolute h-px w-4 bg-current" />
                    <span className="absolute h-4 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                  </span>
                </summary>
                <div className="max-w-3xl pb-5 pr-8 text-base leading-7 text-[var(--sutra-muted)]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Your Next Step
              </p>
              <h2 className="mt-4 max-w-3xl font-[var(--font-serif)] text-4xl leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                {config.finalTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                {config.finalDescription}
              </p>
            </div>

            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center rounded-none bg-white px-7 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-porcelain)]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
          <p className="max-w-5xl text-xs leading-6 text-[var(--sutra-muted)]">
            Medical information on this page is provided for general information
            and does not replace individual medical advice, diagnosis or
            treatment. Please consult an appropriately qualified healthcare
            professional for advice about your individual health needs.
          </p>
        </div>
      </section>
    </main>
  );
}
