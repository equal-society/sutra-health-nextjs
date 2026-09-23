import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import {
  conditions,
  getCondition,
  getSubpages,
} from "@/data/conditions";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/*
  ADDED: truncates at the last whole word before the limit, instead of
  cutting mid-word. Same fix already applied to the [slug]/[subslug] page —
  this hub page had the same bug, just with "..." appended after the cut,
  which doesn't fix the underlying mid-word truncation.
*/
function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
}

interface ConditionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    return {};
  }

  const title = `${condition.title} | Sutra Health`;

  const description = truncateAtWord(condition.shortDescription, 152);

  return {
    title,
    description,

    alternates: {
      canonical: `https://lifequality.org.in/conditions/${condition.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://lifequality.org.in/conditions/${condition.slug}`,
      siteName: "Sutra Health",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: `https://lifequality.org.in/images/conditions/${condition.slug}.webp`,
          width: 1200,
          height: 630,
          alt: condition.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `https://lifequality.org.in/images/conditions/${condition.slug}.webp`,
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ConditionPage({
  params,
}: ConditionPageProps) {
  const { slug } = await params;

  const condition = getCondition(slug);

  if (!condition) {
    notFound();
  }

  /* -------------------------------------------------------
     Related conditions
  ------------------------------------------------------- */

  const internalLinks = condition.internalLinks;

  const relatedConditions = condition.relatedConditions
    .map((relatedSlug) => getCondition(relatedSlug))
    .filter(Boolean);

  const questionPages = getSubpages(condition.slug);

  /* -------------------------------------------------------
     FAQ structured data
  ------------------------------------------------------- */

  const faqSchema = condition.faqs?.length
    ? {
        "@type": "FAQPage",
        mainEntity: condition.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  /* -------------------------------------------------------
     Breadcrumb structured data
  ------------------------------------------------------- */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lifequality.org.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Conditions",
        item: "https://lifequality.org.in/conditions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.title,
        item: `https://lifequality.org.in/conditions/${condition.slug}`,
      },
    ],
  };

  /* -------------------------------------------------------
     MedicalWebPage structured data

     CHANGED: added `author` and `reviewedBy` (same E-E-A-T fix as the
     [slug]/[subslug] page — this schema had a publisher but no named,
     credentialed author, which matters specifically for medical content).

     ADDED: `citation` — condition.evidence has real, sourced studies for
     every condition, but nothing on this page previously told Google
     about them. schema.org's MedicalWebPage supports `citation` directly;
     this maps each evidence item to a CreativeWork citation.
  ------------------------------------------------------- */

  const medicalPageSchema = {
    "@type": "MedicalWebPage",
    name: condition.title,
    description: condition.shortDescription,
    url: `https://lifequality.org.in/conditions/${condition.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: condition.title,
    },
    author: {
      "@type": "Person",
      name: "Dr. Rakesh Sarwal",
      honorificSuffix: "MBBS, MPH, DrPH",
      url: "https://academic.lifequality.org.in/",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Rakesh Sarwal",
      honorificSuffix: "MBBS, MPH, DrPH",
    },
    publisher: {
      "@type": "Organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
    ...(condition.evidence && condition.evidence.length > 0
      ? {
          citation: condition.evidence.map((item) => ({
            "@type": "CreativeWork",
            name: item.source,
            ...(item.url ? { url: item.url } : {}),
          })),
        }
      : {}),
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      medicalPageSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
        {/* HERO — premium editorial condition introduction */}
        <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
          <Container>
            <div className="mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:items-center lg:gap-16 xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-20">
                <div className="py-14 sm:py-18 lg:py-24 xl:py-28">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-9 bg-[var(--sutra-sand)]"
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-muted)] sm:text-[11px]">
                      Health condition
                    </p>
                  </div>

                  <h1 className="mt-6 max-w-[820px] font-[var(--font-serif)] text-[50px] font-medium leading-[0.94] tracking-[-0.05em] text-[var(--sutra-ink)] sm:text-[62px] md:text-[70px] lg:text-[76px] xl:text-[88px]">
                    {condition.title}
                  </h1>

                  <div className="mt-8 flex max-w-[700px] items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-12 w-px shrink-0 bg-[var(--sutra-sand)]"
                    />
                    <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                      {condition.shortDescription}
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:text-[10px]">
                    <span>Sutra Health</span>
                    <span aria-hidden="true" className="text-[var(--sutra-sand)]">
                      ·
                    </span>
                    <span>Condition guide</span>
                  </div>
                </div>

                <figure className="pb-10 sm:pb-12 lg:py-14 xl:py-16">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
                    <Image
                      src={`/images/conditions/${condition.slug}.webp`}
                      alt={`${condition.title} - Sutra Health`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                    />
                  </div>

                  <figcaption className="mt-3 flex items-center justify-between gap-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">
                    <span>Understanding {condition.title.toLowerCase()}</span>
                    <span className="hidden sm:inline">Sutra Health</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </Container>
        </section>

        {/* MAIN ARTICLE — follows the new article-page reading system */}
        <section className="bg-[var(--sutra-white)]">
          <Container>
            <div className="mx-auto grid max-w-7xl lg:grid-cols-[220px_minmax(0,820px)] lg:gap-14 xl:grid-cols-[240px_minmax(0,840px)] xl:gap-18">
              {/* Desktop sticky contents */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 py-16">
                  <div className="border-l border-[var(--sutra-border-strong)] pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      In this guide
                    </p>

                    <nav aria-label="Condition page sections" className="mt-5">
                      <a href="#understanding" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                        Understanding
                      </a>

                      <a href="#concerns" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                        Common concerns
                      </a>

                      {condition.lifestyleFactors.length > 0 && (
                        <a href="#lifestyle-factors" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                          Lifestyle factors
                        </a>
                      )}

                      {condition.sections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#section-${index}-${slugify(section.title)}`}
                          className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]"
                        >
                          {section.title}
                        </a>
                      ))}

                      <a href="#approach" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                        Our approach
                      </a>

                      {condition.support?.length > 0 && (
                        <a href="#support" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                          How Sutra can help
                        </a>
                      )}

                      {/*
                        ADDED: TOC entry for the Evidence section below.
                        This was missing entirely — the section itself
                        didn't exist to link to.
                      */}
                      {condition.evidence && condition.evidence.length > 0 && (
                        <a href="#evidence" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                          Evidence & research
                        </a>
                      )}

                      {condition.faqs?.length > 0 && (
                        <a href="#faq" className="block border-b border-[var(--sutra-border)] py-3 text-[12px] leading-5 text-[var(--sutra-muted)] transition-colors hover:text-[var(--sutra-teal)]">
                          FAQs
                        </a>
                      )}
                    </nav>
                  </div>
                </div>
              </aside>

              <article className="min-w-0 max-w-[840px]">
                {/* Mobile contents */}
                <div className="border-b border-[var(--sutra-border)] py-5 lg:hidden">
                  <details>
                    <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)] [&::-webkit-details-marker]:hidden">
                      <span>In this guide</span>
                      <span className="flex h-8 w-8 items-center justify-center border border-[var(--sutra-border)] text-[18px] font-normal">
                        +
                      </span>
                    </summary>

                    <nav className="mt-4 border-l border-[var(--sutra-border)] pl-4">
                      <a href="#understanding" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                        Understanding
                      </a>
                      <a href="#concerns" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                        Common concerns
                      </a>
                      {condition.lifestyleFactors.length > 0 && (
                        <a href="#lifestyle-factors" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                          Lifestyle factors
                        </a>
                      )}
                      {condition.sections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#section-${index}-${slugify(section.title)}`}
                          className="block py-1.5 text-[13px] text-[var(--sutra-muted)]"
                        >
                          {section.title}
                        </a>
                      ))}
                      <a href="#approach" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                        Our approach
                      </a>
                      {condition.support?.length > 0 && (
                        <a href="#support" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                          How Sutra can help
                        </a>
                      )}
                      {condition.evidence && condition.evidence.length > 0 && (
                        <a href="#evidence" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                          Evidence & research
                        </a>
                      )}
                      {condition.faqs?.length > 0 && (
                        <a href="#faq" className="block py-1.5 text-[13px] text-[var(--sutra-muted)]">
                          FAQs
                        </a>
                      )}
                    </nav>
                  </details>
                </div>

                {/* Understanding */}
                <section id="understanding" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                    Understanding
                  </p>
                  <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[48px] lg:text-[56px]">
                    A whole-person perspective
                  </h2>
                  <p className="mt-7 max-w-[780px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                    {condition.introduction}
                  </p>
                </section>

                {/* Concerns */}
                <section id="concerns" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                    Common concerns
                  </p>
                  <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                    What brings people to us
                  </h2>

                  <div className="mt-8 border-t border-[var(--sutra-border)]">
                    {condition.concerns.map((concern, index) => (
                      <div key={concern} className="grid gap-4 border-b border-[var(--sutra-border)] py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7">
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                          {concern}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Lifestyle factors */}
                {condition.lifestyleFactors.length > 0 && (
                  <section id="lifestyle-factors" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                      Lifestyle factors
                    </p>
                    <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                      Everyday factors can matter
                    </h2>

                    <div className="mt-8 border-t border-[var(--sutra-border)]">
                      {condition.lifestyleFactors.map((factor, index) => (
                        <div key={factor.title} className="grid gap-4 border-b border-[var(--sutra-border)] py-7 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-8">
                          <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="font-[var(--font-serif)] text-[25px] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[28px]">
                              {factor.title}
                            </h3>
                            <p className="mt-3 text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Condition-specific sections */}
                <div>
                  {condition.sections.map((section, index) => (
                    <section
                      key={section.title}
                      id={`section-${index}-${slugify(section.title)}`}
                      className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22"
                    >
                      <div className="max-w-[780px]">
                        <div className="flex items-start gap-5 sm:gap-7">
                          <span className="pt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                              Condition guide
                            </p>
                            <h2 className="mt-3 font-[var(--font-serif)] text-[34px] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[44px] lg:text-[50px]">
                              {section.title}
                            </h2>
                            <div className="mt-7 space-y-5">
                              {section.content.map((paragraph) => (
                                <p key={paragraph} className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

                {/* Internal links */}
                {internalLinks.length > 0 && (
                  <section className="border-b border-[var(--sutra-border)] py-12 sm:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      Explore further
                    </p>
                    <div className="mt-5 border-t border-[var(--sutra-border)]">
                      {internalLinks.map((link) => (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          className="group flex items-center justify-between gap-6 border-b border-[var(--sutra-border)] py-5 text-[15px] font-medium text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-muted)]"
                        >
                          <span>{link.label}</span>
                          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Approach */}
                <section id="approach" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                    Our approach
                  </p>
                  <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                    Building healthier everyday habits
                  </h2>
                  <div className="mt-8 border-t border-[var(--sutra-border)]">
                    {condition.approach.map((item, index) => (
                      <div key={item} className="grid gap-4 border-b border-[var(--sutra-border)] py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7">
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Support */}
                {condition.support?.length > 0 && (
                  <section id="support" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                      How Sutra Health can help
                    </p>
                    <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                      Support shaped around you
                    </h2>
                    <div className="mt-8 border-t border-[var(--sutra-border)]">
                      {condition.support.map((item, index) => (
                        <div key={item} className="grid gap-4 border-b border-[var(--sutra-border)] py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7">
                          <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/*
                  ADDED: this entire section was missing. condition.evidence
                  already existed on every condition data file with real,
                  sourced clinical research — this is the fix that actually
                  makes it visible to a visitor, not just present in the data.
                  Styled to match the same pattern already used on the
                  [slug]/[subslug] question pages, for consistency.
                */}
                {condition.evidence && condition.evidence.length > 0 && (
                  <section id="evidence" className="scroll-mt-28 border-b border-[var(--sutra-border)] py-14 sm:py-18 lg:py-22">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                      Evidence
                    </p>
                    <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                      Evidence and further reading
                    </h2>

                    <div className="mt-8 space-y-7">
                      {condition.evidence.map((item) => (
                        <div
                          key={`${item.source}-${item.claim}`}
                          className="border-l border-[var(--sutra-sand)] pl-5"
                        >
                          <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                            {item.claim}
                          </p>
                          <p className="mt-2 text-[13px] leading-6 text-[var(--sutra-muted)]">
                            {item.source}
                            {item.isAuthorPublication && " · Dr. Sarwal's own published research"}
                            {item.url && (
                              <>
                                {" "}
                                <span aria-hidden="true">—</span>{" "}
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[var(--sutra-teal)] underline decoration-[var(--sutra-sand)] underline-offset-4 transition-colors hover:text-[var(--sutra-ink)]"
                                >
                                  Read source
                                </a>
                              </>
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* FAQ */}
                {condition.faqs?.length > 0 && (
                  <section id="faq" className="scroll-mt-28 py-14 sm:py-18 lg:py-22">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                      Frequently asked questions
                    </p>
                    <h2 className="mt-4 max-w-[760px] font-[var(--font-serif)] text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[46px] lg:text-[54px]">
                      Questions about {condition.title.toLowerCase()}?
                    </h2>

                    <div className="mt-8 border-t border-[var(--sutra-border)]">
                      {condition.faqs.map((faq, index) => (
                        <details key={faq.question} className="group border-b border-[var(--sutra-border)]">
                          <summary className="flex cursor-pointer list-none items-start gap-4 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                            <span className="pt-1 text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 text-[16px] font-medium leading-7 text-[var(--sutra-ink)] sm:text-[17px]">
                              {faq.question}
                            </span>
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--sutra-border)] text-[18px] font-normal text-[var(--sutra-teal)] transition-transform duration-200 group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <div className="pb-7 pl-9 sm:pl-10 sm:pr-10">
                            <p className="text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
                              {faq.answer}
                            </p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}
              </article>
            </div>
          </Container>
        </section>

        {/* RELATED QUESTIONS */}
        {questionPages.length > 0 && (
          <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
            <Container>
              <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
                <div className="max-w-[820px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                    Common questions
                  </p>
                  <h2 className="mt-3 font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[48px] lg:text-[54px]">
                    Questions about {condition.title.toLowerCase()}
                  </h2>

                  <div className="mt-8 border-t border-[var(--sutra-border)]">
                    {questionPages.map((subpage, index) => (
                      <Link
                        key={subpage.slug}
                        href={`/conditions/${condition.slug}/${subpage.slug}`}
                        className="group flex items-center gap-5 border-b border-[var(--sutra-border)] py-5 transition-colors hover:bg-white sm:py-6"
                      >
                        <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--sutra-sand)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[16px] leading-7 text-[var(--sutra-ink)] sm:text-[17px]">
                          {subpage.question}
                        </span>
                        <span aria-hidden="true" className="shrink-0 text-[var(--sutra-teal)] transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* RELATED CONDITIONS */}
        {relatedConditions.length > 0 && (
          <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-white)]">
            <Container>
              <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
                <div className="flex flex-col gap-6 border-b border-[var(--sutra-border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)] sm:text-[11px]">
                      Explore more
                    </p>
                    <h2 className="mt-3 font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-teal)] sm:text-[48px] lg:text-[54px]">
                      Related health conditions
                    </h2>
                  </div>

                  <Link
                    href="/conditions"
                    className="group inline-flex shrink-0 items-center gap-2 border-b border-[var(--sutra-teal)]/30 pb-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--sutra-teal)] transition-colors hover:border-[var(--sutra-teal)]"
                  >
                    View all conditions
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedConditions.map((related) => {
                    if (!related) return null;

                    return (
                      <Link
                        key={related.slug}
                        href={`/conditions/${related.slug}`}
                        className="group flex h-full flex-col border border-[var(--sutra-border)] bg-[var(--sutra-white)]"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--sutra-pale-sage)]">
                          <Image
                            src={`/images/conditions/${related.slug}.webp`}
                            alt={`${related.title} - Sutra Health`}
                            fill
                            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--sutra-muted)]">
                            Health condition
                          </p>
                          <h3 className="mt-3 font-[var(--font-serif)] text-[25px] font-medium leading-[1.08] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-[27px]">
                            {related.title}
                          </h3>
                          <p className="mt-3 text-[14px] leading-6 text-[var(--sutra-muted)] sm:text-[15px]">
                            {related.shortDescription}
                          </p>
                          <div className="mt-auto border-t border-[var(--sutra-border)] pt-4 mt-6">
                            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-teal)]">
                              Explore
                              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                                →
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-teal)]">
          <Container>
            <div className="mx-auto max-w-7xl py-14 sm:py-18 lg:py-22">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
                <div className="max-w-[720px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sand)] sm:text-[11px]">
                    Take the next step
                  </p>
                  <h2 className="mt-4 font-[var(--font-serif)] text-[38px] font-medium leading-[1.04] tracking-[-0.03em] text-[var(--sutra-porcelain)] sm:text-[48px] lg:text-[56px]">
                    Let&apos;s talk about your health.
                  </h2>
                  <p className="mt-5 max-w-[620px] text-[16px] leading-8 text-[var(--sutra-pale-sage)] sm:text-[17px]">
                    Book a consultation to discuss your health goals and explore
                    an approach that fits your needs and everyday life.
                  </p>
                </div>

                <Link
                  href="/book-appointment"
                  className="inline-flex h-[52px] w-fit items-center gap-3 bg-[var(--sutra-porcelain)] px-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--sutra-teal)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-porcelain)]"
                >
                  Book an Appointment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}