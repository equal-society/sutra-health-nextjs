import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SITE_URL = "https://lifequality.org.in";

type GuideSection = {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type GuideLink = {
  title: string;
  description: string;
  href: string;
};

export type ServiceGuideConfig = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow?: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  sections: GuideSection[];
  related?: GuideLink[];
  faq?: { question: string; answer: string }[];
  finalTitle: string;
  finalDescription: string;
};

export function createServiceGuideMetadata(config: ServiceGuideConfig): Metadata {
  const url = `${SITE_URL}${config.slug}`;
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "Sutra Health",
      type: "article",
      locale: "en_IN",
    },
  };
}

export default function ServiceGuideTemplate({ config }: { config: ServiceGuideConfig }) {
  const url = `${SITE_URL}${config.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: config.name,
        url,
        description: config.description,
        isPartOf: { "@type": "WebSite", name: "Sutra Health", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: config.name, item: url },
        ],
      },
      ...(config.faq?.length
        ? [{
            "@type": "FAQPage",
            mainEntity: config.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }]
        : []),
    ],
  };

  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section
        aria-labelledby="guide-title"
        className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#173B36] sm:min-h-[560px] lg:min-h-[620px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={config.heroImage ? { backgroundImage: `url("${config.heroImage}")` } : undefined}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#101C19]/65" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#101C19]/85 via-[#101C19]/50 to-[#101C19]/15" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/75">
            {config.eyebrow || "Sutra Health guide"}
          </p>
          <h1 id="guide-title" className="mt-4 max-w-4xl font-[var(--font-serif)] text-[2.65rem] leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            {config.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {config.heroDescription}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/book-appointment" className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-white)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)]">
              Book a consultation <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
            </Link>
            <Link href="/services" className="inline-flex min-h-12 items-center justify-center border border-white/65 px-6 py-3 text-sm font-semibold text-white">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="border-b border-[var(--sutra-border)] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-[var(--sutra-muted)] sm:px-8 lg:px-12">
          <Link href="/services" className="hover:text-[var(--sutra-teal)]">Services</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>{config.name}</span>
        </div>
      </nav>

      <div>
        {config.sections.map((section, index) => (
          <section key={`${section.title}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-[var(--sutra-porcelain)]"}>
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
              <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <div>
                  {section.eyebrow && (
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">{section.eyebrow}</p>
                  )}
                  <h2 className="mt-3 max-w-xl font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">
                    {section.title}
                  </h2>
                </div>
                <div className="max-w-3xl">
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-7 text-[var(--sutra-ink)] sm:text-lg sm:leading-8">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="border-t border-[var(--sutra-border-strong)] pt-3 text-base leading-7 sm:text-lg sm:leading-8">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {config.related?.length ? (
        <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]" aria-labelledby="related-title">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Continue exploring</p>
            <h2 id="related-title" className="mt-3 font-[var(--font-serif)] text-3xl leading-tight sm:text-5xl">Where this fits into your care</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.related.map((item) => (
                <Link key={item.href} href={item.href} className="group flex min-h-40 flex-col border border-[var(--sutra-border)] bg-white p-6 hover:border-[var(--sutra-teal)]">
                  <h3 className="font-[var(--font-serif)] text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--sutra-muted)]">{item.description}</p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-[var(--sutra-teal)]">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {config.faq?.length ? (
        <section className="bg-white" aria-labelledby="guide-faq-title">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">Frequently asked questions</p>
            <h2 id="guide-faq-title" className="mt-3 font-[var(--font-serif)] text-3xl leading-tight sm:text-5xl">Questions people often ask</h2>
            <div className="mt-8 border-t border-[var(--sutra-border-strong)]">
              {config.faq.map((item) => (
                <details key={item.question} className="group border-b border-[var(--sutra-border-strong)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-[var(--font-serif)] text-xl leading-snug marker:hidden [&::-webkit-details-marker]:hidden sm:py-7 sm:text-[25px]">
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="relative flex h-7 w-7 shrink-0 items-center justify-center text-[var(--sutra-teal)]">
                      <span className="absolute h-px w-5 bg-current" />
                      <span className="absolute h-5 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-7 pr-8 text-base leading-7 sm:text-lg sm:leading-8">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-serif)] text-3xl leading-tight sm:text-4xl">{config.finalTitle}</h2>
            <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">{config.finalDescription}</p>
          </div>
          <Link href="/book-appointment" className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)]">
            Book a consultation <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 py-5 text-xs leading-5 text-[var(--sutra-muted)] sm:px-8 sm:text-sm sm:leading-6 lg:px-12">
        This page is educational and does not replace individual medical advice, diagnosis or treatment. Confirm current programme availability, practitioner roles and session details directly with Sutra Health.
      </p>
    </main>
  );
}
