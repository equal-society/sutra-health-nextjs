import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ServicePageConfig = {
  name: string;
  shortName?: string;
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  eyebrow?: string;
  heroImage?: string;
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
  resources?: { title: string; description: string; href: string }[];
  related: { title: string; description: string; href: string }[];
  faq: { question: string; answer: string }[];
  finalTitle: string;
  finalDescription: string;
  serviceType?: string;
  medicalAbout?: string;
  ctaLabel?: string;
};

export function createServiceMetadata(config: ServicePageConfig): Metadata {
  const canonical = `https://lifequality.org.in/services/${config.slug}`;
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
  const url = `${baseUrl}/services/${config.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: config.name,
        url,
        description: config.description,
        isPartOf: { "@type": "WebSite", name: "Sutra Health", url: baseUrl },
        about: { "@type": "Thing", name: config.medicalAbout || config.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
          { "@type": "ListItem", position: 3, name: config.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: config.name,
        description: config.description,
        provider: { "@type": "MedicalOrganization", name: "Sutra Health", url: baseUrl },
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
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export default function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  const schema = getSchema(config);
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Full-view image hero */}
      <section
        aria-labelledby="service-hero-title"
        className="relative isolate flex items-end overflow-hidden bg-[#18332F]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-[center_58%] sm:bg-center"
          style={config.heroImage ? { backgroundImage: `url("${config.heroImage}")` } : undefined}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/45" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#10211E]/90 via-[#10211E]/60 to-[#10211E]/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20">
          <div className="max-w-[780px]">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/75">{config.eyebrow || "Sutra Health services"}</p>
            <h1 id="service-hero-title" className="mt-4 font-[var(--font-serif)] text-[2.65rem] leading-[1.04] tracking-[-0.035em] text-white sm:mt-5 sm:text-6xl lg:text-7xl">
              {config.name}
            </h1>
            <p className="mt-5 max-w-[640px] text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
              {config.heroDescription}
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-white)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white">
                {config.ctaLabel || "Book a consultation"} <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
              </Link>
              <span className="max-w-full text-sm leading-6 text-white/80 sm:max-w-[420px]">{config.trust.join(" · ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* What this service means for the patient */}
      <section className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{config.introEyebrow}</p>
              <h2 className="mt-3 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">{config.introTitle}</h2>
            </div>
            <div className="max-w-3xl space-y-4">
              {config.introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-7 text-[var(--sutra-ink)] sm:text-lg sm:leading-8">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{config.focusEyebrow}</p>
            <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">{config.focusTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{config.focusIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {config.focusAreas.map((item) => (
              <article key={item.number} className="border border-[var(--sutra-border)] bg-[var(--sutra-white)] p-5 sm:p-7 lg:p-8">
                <span className="text-xs font-semibold tracking-wider text-[var(--sutra-sage)]">{item.number}</span>
                <h3 className="mt-4 font-[var(--font-serif)] text-2xl leading-tight sm:text-[27px]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--sutra-ink)] sm:text-lg sm:leading-8">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">What to expect</p>
            <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">{config.processTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{config.processIntro}</p>
          </div>
          <div className="mt-8 max-w-4xl border-t border-[var(--sutra-border-strong)]">
            {config.process.map((item) => (
              <article key={item.number} className="grid grid-cols-[40px_1fr] gap-x-4 gap-y-2 border-b border-[var(--sutra-border-strong)] py-6 sm:grid-cols-[64px_1fr] sm:gap-x-6 sm:py-7">
                <span className="pt-1 text-xs font-semibold tracking-wider text-[var(--sutra-sage)]">{item.number}</span>
                <div>
                  <h3 className="font-[var(--font-serif)] text-2xl leading-tight sm:text-[27px]">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant context, only when supplied in page config */}
      {config.contextParagraphs.length > 0 && (
        <section className="bg-[var(--sutra-white)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{config.contextEyebrow}</p>
                <h2 className="mt-3 max-w-3xl font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">{config.contextTitle}</h2>
              </div>
              <div className="max-w-3xl space-y-4">
                {config.contextParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7 sm:text-lg sm:leading-8">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {config.resources && config.resources.length > 0 && (
        <section aria-labelledby="service-resources" className="bg-[var(--sutra-porcelain)]">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Further reading</p>
              <h2 id="service-resources" className="mt-3 font-[var(--font-serif)] text-3xl leading-tight sm:text-4xl">Resources from Life Quality</h2>
              <p className="mt-3 text-base leading-7 sm:text-lg">Explore the original educational resources referenced in the dietary guidance.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {config.resources.map((resource) => (
                <a key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-32 flex-col items-start border border-[var(--sutra-border)] bg-[var(--sutra-white)] p-5 transition-colors hover:border-[var(--sutra-teal)] sm:p-6">
                  <span className="font-semibold leading-6 text-[var(--sutra-ink)]">{resource.title}</span>
                  <span className="mt-2 text-sm leading-6 text-[var(--sutra-muted)]">{resource.description}</span>
                  <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--sutra-teal)]">Open resource <ArrowUpRight size={16} aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.related.length > 0 && (
        <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Related care</p>
              <h2 className="mt-3 font-[var(--font-serif)] text-3xl leading-tight sm:text-5xl">Other services you may want to explore</h2>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {config.related.map((item) => (
                <Link key={item.href} href={item.href} className="group flex min-h-36 flex-col items-start border border-[var(--sutra-border)] bg-[var(--sutra-white)] p-5 transition-colors hover:border-[var(--sutra-teal)] sm:p-6">
                  <h3 className="font-[var(--font-serif)] text-xl leading-tight sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 sm:text-base sm:leading-7">{item.description}</p>
                  <span aria-hidden="true" className="mt-auto pt-4 text-lg text-[var(--sutra-teal)] transition-transform group-hover:translate-x-1">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Readable FAQ */}
      <section className="bg-[var(--sutra-white)]" aria-labelledby="service-faq-title">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Frequently asked questions</p>
            <h2 id="service-faq-title" className="mt-3 font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">Questions about {config.shortName || config.name}</h2>
          </div>
          <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
            {config.faq.map((item, index) => (
              <details key={item.question} open={index === 0 ? undefined : false} className="group border-b border-[var(--sutra-border-strong)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-[var(--font-serif)] text-xl leading-snug marker:hidden [&::-webkit-details-marker]:hidden sm:py-7 sm:text-[25px] sm:leading-8">
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="relative flex h-7 w-7 shrink-0 items-center justify-center text-[var(--sutra-teal)]">
                    <span className="absolute h-px w-5 bg-current" />
                    <span className="absolute h-5 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                  </span>
                </summary>
                <div className="max-w-3xl pb-7 pr-8 text-base leading-7 text-[var(--sutra-ink)] sm:text-lg sm:leading-8">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-serif)] text-3xl leading-tight sm:text-4xl">{config.finalTitle}</h2>
            <p className="mt-3 text-base leading-7 text-white/80 sm:text-lg">{config.finalDescription}</p>
          </div>
          <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[var(--sutra-white)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] hover:bg-white">
            {config.ctaLabel || "Book a consultation"} <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
          <p className="max-w-5xl text-xs leading-5 text-[var(--sutra-muted)] sm:text-sm sm:leading-6">
            This page is for general information and does not replace individual medical advice, diagnosis or treatment. Do not change prescribed care without speaking with your healthcare professional.
          </p>
        </div>
      </section>
    </main>
  );
}
