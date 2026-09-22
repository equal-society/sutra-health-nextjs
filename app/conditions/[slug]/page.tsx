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

  const description =
    condition.shortDescription.length > 155
      ? condition.shortDescription.slice(0, 152) + "..."
      : condition.shortDescription;

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
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    publisher: {
      "@type": "Organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
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
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-white text-[#202522]">
        {/* ===================================================
            EDITORIAL CONDITION HEADER
            Text is dominant; image is secondary.
        ================================================== */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]">
        
          <Container>
            <div className="mx-auto max-w-[1180px]">


              {/* Dominant text */}
              <div className="mx-auto max-w-[980px] px-2 py-14 text-center sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <div className="flex items-center justify-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-[#91A298]" />
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65736D] sm:text-[11px]">
                    Health condition
                  </p>
                  <span aria-hidden="true" className="h-px w-8 bg-[#91A298]" />
                </div>

                <h1 className="mx-auto mt-5 max-w-[920px] font-serif text-[48px] font-medium leading-[1.01] tracking-[-0.045em] text-[#202522] sm:text-[60px] md:text-[68px] lg:text-[78px] xl:text-[84px]">
                  {condition.title}
                </h1>

                <p className="mx-auto mt-7 max-w-[760px] font-sans text-[18px] leading-[1.85] text-[#65736D] sm:text-[19px] sm:leading-[1.9] lg:text-[20px]">
                  {condition.shortDescription}
                </p>
              </div>

              {/* Smaller horizontal image */}
              <figure className="mx-auto w-full max-w-[860px] min-w-0 overflow-hidden pb-11 sm:pb-13 lg:pb-16">
                <div className="relative isolate block w-full max-w-full min-w-0 overflow-hidden border border-[#202522]/10 bg-[#E7EDE8] aspect-[16/8] sm:aspect-[16/7] sm:min-h-[210px] lg:min-h-[270px]">
                  <Image
                    src={`/images/conditions/${condition.slug}.webp`}
                    alt={`${condition.title} - Sutra Health`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 860px"
                    className="object-cover"
                  />
                </div>

                <figcaption className="mt-3 flex w-full min-w-0 items-center justify-between gap-4 overflow-hidden px-1 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-[#91A298]">
                  <span>Sutra Health</span>
                  <span>Condition guide</span>
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        {/* ===================================================
            PREMIUM EDITORIAL ARTICLE
            Contents rail + magazine-style reading experience.
        ================================================== */}
        <section className="bg-white">
          <Container>
            <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[205px_minmax(0,780px)] lg:gap-14 xl:grid-cols-[220px_minmax(0,800px)] xl:gap-16">
              {/* CONTENTS */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 py-16">
                  <div className="border-l-2 border-[#E7EDE8] pl-5">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298]">
                      Contents
                    </p>

                    <nav
                      aria-label="Condition page sections"
                      className="mt-5"
                    >
                      <a
                        href="#understanding"
                        className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                      >
                        Understanding
                      </a>

                      <a
                        href="#concerns"
                        className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                      >
                        Common concerns
                      </a>

                      {condition.lifestyleFactors.length > 0 && (
                        <a
                          href="#lifestyle-factors"
                          className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          Lifestyle factors
                        </a>
                      )}

                      {condition.sections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#section-${index}-${slugify(section.title)}`}
                          className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          {section.title}
                        </a>
                      ))}

                      <a
                        href="#approach"
                        className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                      >
                        Our approach
                      </a>

                      {condition.support?.length > 0 && (
                        <a
                          href="#support"
                          className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          How Sutra can help
                        </a>
                      )}

                      {condition.faqs?.length > 0 && (
                        <a
                          href="#faq"
                          className="block border-b border-[#202522]/10 py-3 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          FAQs
                        </a>
                      )}
                    </nav>
                  </div>
                </div>
              </aside>

              {/* ARTICLE */}
              <article className="min-w-0 max-w-[800px]">
                {/* Mobile contents */}
                <div className="border-b border-[#202522]/10 py-5 lg:hidden">
                  <details>
                    <summary className="flex cursor-pointer list-none items-center justify-between font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#17413D] [&::-webkit-details-marker]:hidden">
                      <span>Contents</span>
                      <span className="flex h-8 w-8 items-center justify-center border border-[#202522]/10 text-[18px] font-normal">
                        +
                      </span>
                    </summary>

                    <nav className="mt-4 border-l border-[#202522]/10 pl-4">
                      <a
                        href="#understanding"
                        className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                      >
                        Understanding
                      </a>

                      <a
                        href="#concerns"
                        className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                      >
                        Common concerns
                      </a>

                      {condition.lifestyleFactors.length > 0 && (
                        <a
                          href="#lifestyle-factors"
                          className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                        >
                          Lifestyle factors
                        </a>
                      )}

                      {condition.sections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#section-${index}-${slugify(section.title)}`}
                          className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                        >
                          {section.title}
                        </a>
                      ))}

                      <a
                        href="#approach"
                        className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                      >
                        Our approach
                      </a>

                      {condition.support?.length > 0 && (
                        <a
                          href="#support"
                          className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                        >
                          How Sutra can help
                        </a>
                      )}

                      {condition.faqs?.length > 0 && (
                        <a
                          href="#faq"
                          className="block py-1.5 font-sans text-[13px] text-[#65736D]"
                        >
                          FAQs
                        </a>
                      )}
                    </nav>
                  </details>
                </div>

                {/* =================================================
                    UNDERSTANDING — spacious editorial opening
                ================================================== */}
                <section
                  id="understanding"
                  className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                >
                  <div className="max-w-[760px]">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                      Understanding
                    </p>

                    <h2 className="mt-4 max-w-[720px] font-serif text-[38px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[48px] lg:text-[54px]">
                      A whole-person perspective
                    </h2>

                    <p className="mt-7 max-w-[720px] font-sans text-[18px] leading-[1.9] text-[#65736D] sm:text-[19px]">
                      {condition.introduction}
                    </p>
                  </div>
                </section>

                {/* =================================================
                    COMMON CONCERNS — editorial numbered list
                ================================================== */}
                <section
                  id="concerns"
                  className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                >
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                    Common concerns
                  </p>

                  <h2 className="mt-4 max-w-[720px] font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[46px] lg:text-[52px]">
                    What brings people to us
                  </h2>

                  <div className="mt-8 border-t border-[#202522]/10">
                    {condition.concerns.map((concern, index) => (
                      <div
                        key={concern}
                        className="grid gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7"
                      >
                        <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]">
                          {concern}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* =================================================
                    LIFESTYLE FACTORS — editorial numbered list
                ================================================== */}
                {condition.lifestyleFactors.length > 0 && (
                  <section
                    id="lifestyle-factors"
                    className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                  >
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                      Lifestyle factors
                    </p>

                    <h2 className="mt-4 max-w-[720px] font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[46px] lg:text-[52px]">
                      Everyday factors can matter
                    </h2>

                    <div className="mt-8 border-t border-[#202522]/10">
                      {condition.lifestyleFactors.map((factor, index) => (
                        <div
                          key={factor.title}
                          className="grid gap-4 border-b border-[#202522]/10 py-7 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-8"
                        >
                          <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className="font-serif text-[25px] leading-[1.1] tracking-[-0.025em] text-[#202522] sm:text-[28px]">
                              {factor.title}
                            </h3>

                            <p className="mt-3 font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]">
                              {factor.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* =================================================
                    CONDITION-SPECIFIC SECTIONS — magazine rhythm
                ================================================== */}
                <div>
                  {condition.sections.map((section, index) => (
                    <section
                      key={section.title}
                      id={`section-${index}-${slugify(section.title)}`}
                      className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                    >
                      <div className="max-w-[760px]">
                        <div className="flex items-start gap-5">
                          <span className="pt-1 font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#91A298]">
                              Condition guide
                            </p>

                            <h2 className="mt-3 font-serif text-[34px] leading-[1.08] tracking-[-0.035em] text-[#17413D] sm:text-[44px] lg:text-[50px]">
                              {section.title}
                            </h2>

                            <div className="mt-7 space-y-5">
                              {section.content.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]"
                                >
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

                {/* =================================================
                    INTERNAL LINKS
                ================================================== */}
                {internalLinks.length > 0 && (
                  <section className="border-b border-[#202522]/10 py-12 sm:py-14">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298]">
                      Explore further
                    </p>

                    <div className="mt-5 border-t border-[#202522]/10">
                      {internalLinks.map((link) => (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={link.href}
                          className="group flex items-center justify-between gap-6 border-b border-[#202522]/10 py-5 font-sans text-[15px] font-medium text-[#17413D] transition-colors hover:text-[#91A298]"
                        >
                          <span>{link.label}</span>
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* =================================================
                    APPROACH
                ================================================== */}
                <section
                  id="approach"
                  className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                >
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                    Our approach
                  </p>

                  <h2 className="mt-4 max-w-[720px] font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[46px] lg:text-[52px]">
                    Building healthier everyday habits
                  </h2>

                  <div className="mt-8 border-t border-[#202522]/10">
                    {condition.approach.map((item, index) => (
                      <div
                        key={item}
                        className="grid gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7"
                      >
                        <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* =================================================
                    SUPPORT
                ================================================== */}
                {condition.support?.length > 0 && (
                  <section
                    id="support"
                    className="scroll-mt-28 border-b border-[#202522]/10 py-14 sm:py-16 lg:py-20"
                  >
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                      How Sutra Health can help
                    </p>

                    <h2 className="mt-4 max-w-[720px] font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[46px] lg:text-[52px]">
                      Support shaped around you
                    </h2>

                    <div className="mt-8 border-t border-[#202522]/10">
                      {condition.support.map((item, index) => (
                        <div
                          key={item}
                          className="grid gap-4 border-b border-[#202522]/10 py-6 sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-7"
                        >
                          <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* =================================================
                    FAQ — clean accordion
                ================================================== */}
                {condition.faqs?.length > 0 && (
                  <section
                    id="faq"
                    className="scroll-mt-28 py-14 sm:py-16 lg:py-20"
                  >
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                      Frequently asked questions
                    </p>

                    <h2 className="mt-4 max-w-[720px] font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#17413D] sm:text-[46px] lg:text-[52px]">
                      Questions about {condition.title.toLowerCase()}?
                    </h2>

                    <div className="mt-8 border-t border-[#202522]/10">
                      {condition.faqs.map((faq, index) => (
                        <details
                          key={faq.question}
                          className="group border-b border-[#202522]/10"
                        >
                          <summary className="flex cursor-pointer list-none items-start gap-4 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                            <span className="pt-1 font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="flex-1 font-sans text-[16px] font-medium leading-7 text-[#202522] sm:text-[17px]">
                              {faq.question}
                            </span>

                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#202522]/10 font-sans text-[18px] font-normal text-[#17413D] transition-transform duration-200 group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>

                          <div className="pb-7 pl-9 sm:pl-10 sm:pr-10">
                            <p className="font-sans text-[17px] leading-[1.85] text-[#65736D] sm:text-[18px] sm:leading-[1.9]">
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

        {/* ===================================================
            RELATED QUESTIONS
        ================================================== */}
        {questionPages.length > 0 && (
          <section className="border-t border-[#202522]/10 bg-[#F7F5EF]">
            <Container>
              <div className="mx-auto max-w-[1180px] py-14 sm:py-16 lg:py-20">
                <div className="max-w-[780px]">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                    Common questions
                  </p>

                  <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.03em] text-[#17413D] sm:text-[46px]">
                    Questions about {condition.title.toLowerCase()}
                  </h2>

                  <div className="mt-8 border-t border-[#202522]/10">
                    {questionPages.map((subpage, index) => (
                      <Link
                        key={subpage.slug}
                        href={`/conditions/${condition.slug}/${subpage.slug}`}
                        className="group flex items-center gap-5 border-b border-[#202522]/10 py-5 transition-colors hover:border-[#17413D]/25 sm:py-6"
                      >
                        <span className="font-sans text-[10px] font-semibold tracking-[0.12em] text-[#91A298]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="flex-1 font-sans text-[16px] leading-7 text-[#202522] sm:text-[17px]">
                          {subpage.question}
                        </span>

                        <span
                          aria-hidden="true"
                          className="shrink-0 text-[#17413D] transition-transform duration-200 group-hover:translate-x-1"
                        >
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

        {/* ===================================================
            RELATED CONDITIONS
            Text-led cards: small image, strong title.
        ================================================== */}
        {relatedConditions.length > 0 && (
          <section className="border-t border-[#202522]/10 bg-white">
            <Container>
              <div className="mx-auto max-w-[1180px] py-14 sm:py-16 lg:py-20">
                <div className="flex flex-col gap-6 border-b border-[#202522]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#91A298] sm:text-[11px]">
                      Explore more
                    </p>

                    <h2 className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.04] tracking-[-0.035em] text-[#17413D] sm:text-[48px] lg:text-[52px]">
                      Related health conditions
                    </h2>
                  </div>

                  <Link
                    href="/conditions"
                    className="group inline-flex shrink-0 items-center gap-2 border-b border-[#17413D]/30 pb-1 font-sans text-[13px] font-semibold text-[#17413D] transition-colors hover:border-[#17413D] hover:text-[#91A298]"
                  >
                    View all conditions
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {relatedConditions.map((related) => {
                    if (!related) return null;

                    return (
                      <Link
                        key={related.slug}
                        href={`/conditions/${related.slug}`}
                        className="group border border-[#202522]/10 bg-white transition-colors duration-300 hover:border-[#17413D]/30"
                      >
                        <div className="relative aspect-[16/8] w-full max-w-full min-w-0 overflow-hidden bg-[#E7EDE8]">
                          <Image
                            src={`/images/conditions/${related.slug}.webp`}
                            alt={`${related.title} - Sutra Health`}
                            fill
                            sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        </div>

                        <div className="flex min-h-[175px] flex-col p-5 sm:p-6">
                          <h3 className="max-w-[90%] font-serif text-[25px] leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[27px]">
                            {related.title}
                          </h3>

                          <p className="mt-3 max-w-[34rem] font-sans text-[14px] leading-6 text-[#65736D] sm:text-[15px] sm:leading-6">
                            {related.shortDescription}
                          </p>

                          <div className="mt-auto pt-5">
                            <span className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17413D]">
                              Explore
                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                              >
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

        {/* ===================================================
            FINAL CTA
            Kept calm and editorial, not homepage-like.
        ================================================== */}
        <section className="border-t border-[#202522]/10 bg-[#17413D]">
          <Container>
            <div className="mx-auto max-w-[1180px] px-2 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                <div className="max-w-[720px]">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8BDA7] sm:text-[11px]">
                    Take the next step
                  </p>

                  <h2 className="mt-4 font-serif text-[38px] leading-[1.05] tracking-[-0.03em] text-[#F7F5EF] sm:text-[48px] lg:text-[56px]">
                    Let's talk about your health.
                  </h2>

                  <p className="mt-5 max-w-[620px] font-sans text-[16px] leading-8 text-[#E7EDE8] sm:text-[17px]">
                    Book a consultation to discuss your health goals and explore
                    an approach that fits your needs and everyday life.
                  </p>
                </div>

                <Link
                  href="/book-appointment"
                  className="inline-flex h-[52px] w-fit items-center gap-3 bg-[#F7F5EF] px-6 font-sans text-[14px] font-semibold text-[#17413D] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F5EF]"
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
