import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import {
  getAllSubpageParams,
  getCondition,
  getSubpage,
} from "@/data/conditions";

type PageProps = {
  params: Promise<{
    slug: string;
    subslug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllSubpageParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, subslug } = await params;

  const condition = getCondition(slug);
  const subpage = getSubpage(slug, subslug);

  if (!condition || !subpage) {
    return {};
  }

  const canonicalUrl = `https://lifequality.org.in/conditions/${slug}/${subslug}`;

  return {
    title: subpage.question,
    description: subpage.shortAnswer.slice(0, 155),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: subpage.question,
      description: subpage.shortAnswer.slice(0, 155),
      type: "article",
      url: canonicalUrl,
    },
  };
}

export default async function ConditionSubpage({ params }: PageProps) {
  const { slug, subslug } = await params;

  const condition = getCondition(slug);
  const subpage = getSubpage(slug, subslug);

  if (!condition || !subpage) {
    notFound();
  }

  const canonicalUrl =
    `https://lifequality.org.in/conditions/${slug}/${subslug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Conditions",
        item: "https://lifequality.org.in/conditions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.title,
        item: `https://lifequality.org.in/conditions/${slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: subpage.question,
        item: canonicalUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: subpage.question,
    description: subpage.shortAnswer,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
  };

  const faqSchema =
    subpage.faqs && subpage.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: subpage.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="bg-[#F7F5EF] text-[#202522]">
        {/* Breadcrumb */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]">
          <Container>
            <nav
              aria-label="Breadcrumb"
              className="overflow-x-auto whitespace-nowrap py-4 font-sans text-[12px] leading-5 text-[#65736D] sm:py-5 sm:text-[13px]"
            >
              <Link
                href="/conditions"
                className="transition-colors hover:text-[#17413D]"
              >
                Conditions
              </Link>
              <span className="mx-2 text-[#C8BDA7]">/</span>
              <Link
                href={`/conditions/${condition.slug}`}
                className="transition-colors hover:text-[#17413D]"
              >
                {condition.title}
              </Link>
              <span className="mx-2 text-[#C8BDA7]">/</span>
              <span className="text-[#202522]">{subpage.question}</span>
            </nav>
          </Container>
        </section>

        {/* Direct-answer header */}
        <section className="border-b border-[#202522]/10 bg-[#F7F5EF]">
          <Container>
            <div className="mx-auto max-w-[980px] px-0 py-14 sm:py-16 md:py-20 lg:py-24">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#91A298] sm:w-10"
                />
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D] sm:text-[12px]">
                  {condition.title}
                </p>
              </div>

              <h1 className="mt-5 max-w-[900px] font-serif text-[40px] font-medium leading-[1.07] tracking-[-0.03em] text-[#202522] sm:mt-6 sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px]">
                {subpage.question}
              </h1>

              <div className="mt-7 max-w-[780px] border-l border-[#17413D] pl-5 sm:mt-8 sm:pl-7">
                <p className="font-sans text-[17px] leading-[1.75] text-[#65736D] sm:text-[18px] md:text-[20px] md:leading-[1.7]">
                  {subpage.shortAnswer}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Article */}
        <section className="bg-white">
          <Container>
            <div className="grid grid-cols-1 gap-12 py-14 sm:py-16 md:py-20 lg:grid-cols-[190px_minmax(0,720px)] lg:gap-16 lg:py-24">
              {/* Contents rail */}
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                    Contents
                  </p>
                  <div className="mt-4 h-px w-8 bg-[#C8BDA7]" />
                  <ol className="mt-5 space-y-3">
                    {subpage.detail?.map((section, index) => (
                      <li key={section.title}>
                        <a
                          href={`#section-${index + 1}`}
                          className="group flex gap-2 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          <span className="shrink-0 text-[#91A298]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                    {subpage.evidence && subpage.evidence.length > 0 && (
                      <li>
                        <a
                          href="#evidence"
                          className="group flex gap-2 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          <span className="shrink-0 text-[#91A298]">—</span>
                          <span>Evidence & reading</span>
                        </a>
                      </li>
                    )}
                    {subpage.faqs && subpage.faqs.length > 0 && (
                      <li>
                        <a
                          href="#faqs"
                          className="group flex gap-2 font-sans text-[13px] leading-5 text-[#65736D] transition-colors hover:text-[#17413D]"
                        >
                          <span className="shrink-0 text-[#91A298]">—</span>
                          <span>FAQs</span>
                        </a>
                      </li>
                    )}
                  </ol>
                </div>
              </aside>

              <article className="min-w-0 max-w-[720px]">
                {/* Mobile contents */}
                <details className="mb-12 border-y border-[#202522]/10 lg:hidden">
                  <summary className="cursor-pointer list-none py-4 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                    <span className="flex items-center justify-between">
                      <span>Contents</span>
                      <span aria-hidden="true" className="text-[#17413D]">
                        +
                      </span>
                    </span>
                  </summary>
                  <ol className="space-y-3 pb-5 pt-1">
                    {subpage.detail?.map((section, index) => (
                      <li key={section.title}>
                        <a
                          href={`#section-${index + 1}`}
                          className="flex gap-3 py-1 font-sans text-[14px] leading-5 text-[#65736D]"
                        >
                          <span className="text-[#91A298]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>

                {/* Opening marker */}
                <div className="mb-10 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C8BDA7]" />
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#65736D]">
                    Health guide
                  </span>
                </div>

                {subpage.detail?.map((section, index) => (
                  <section
                    id={`section-${index + 1}`}
                    key={section.title}
                    className="scroll-mt-28 border-b border-[#202522]/10 pb-12 pt-12 first:pt-0 sm:pb-14 sm:pt-14"
                  >
                    <div className="grid gap-5 md:grid-cols-[58px_minmax(0,1fr)] md:gap-7">
                      <div className="font-serif text-[22px] leading-none text-[#91A298] md:pt-2">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h2 className="max-w-[650px] font-serif text-[30px] font-medium leading-[1.12] tracking-[-0.02em] text-[#202522] sm:text-[34px] md:text-[38px]">
                          {section.title}
                        </h2>

                        <div className="mt-6 space-y-5">
                          {section.content.map((paragraph, paragraphIndex) => (
                            <p
                              key={`${section.title}-${paragraphIndex}`}
                              className="font-sans text-[16px] leading-[1.85] text-[#65736D] sm:text-[17px] md:text-[18px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}

                {/* Evidence */}
                {subpage.evidence && subpage.evidence.length > 0 && (
                  <section
                    id="evidence"
                    className="scroll-mt-28 border-b border-[#202522]/10 py-12 sm:py-14"
                  >
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                      Evidence
                    </p>
                    <h2 className="mt-4 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[36px]">
                      Evidence and Further Reading
                    </h2>

                    <div className="mt-7 space-y-7">
                      {subpage.evidence.map((item) => (
                        <div
                          key={`${item.source}-${item.claim}`}
                          className="border-l border-[#C8BDA7] pl-5"
                        >
                          <p className="font-sans text-[16px] leading-[1.8] text-[#65736D]">
                            {item.claim}
                          </p>
                          <p className="mt-2 font-sans text-[13px] leading-6 text-[#65736D]">
                            {item.source}
                            {item.url && (
                              <>
                                {" "}
                                <span aria-hidden="true">—</span>{" "}
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#17413D] underline decoration-[#91A298] underline-offset-4 transition-colors hover:text-[#12332F]"
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

                {/* FAQs */}
                {subpage.faqs && subpage.faqs.length > 0 && (
                  <section
                    id="faqs"
                    className="scroll-mt-28 border-b border-[#202522]/10 py-12 sm:py-14"
                  >
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                      Common questions
                    </p>
                    <h2 className="mt-4 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#202522] sm:text-[36px]">
                      Frequently Asked Questions
                    </h2>

                    <div className="mt-7 divide-y divide-[#202522]/10">
                      {subpage.faqs.map((faq) => (
                        <details key={faq.question} className="group py-5">
                          <summary className="cursor-pointer list-none pr-8 font-sans text-[16px] font-medium leading-7 text-[#202522] marker:hidden">
                            <span className="flex items-start justify-between gap-6">
                              <span>{faq.question}</span>
                              <span
                                aria-hidden="true"
                                className="shrink-0 font-serif text-xl font-normal text-[#17413D] transition-transform group-open:rotate-45"
                              >
                                +
                              </span>
                            </span>
                          </summary>
                          <p className="mt-4 max-w-[650px] font-sans text-[16px] leading-[1.8] text-[#65736D]">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {/* Parent navigation */}
                <div className="pt-10 sm:pt-12">
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="inline-flex items-center border-b border-[#17413D]/40 pb-1 font-sans text-[13px] font-medium text-[#17413D] transition-colors hover:border-[#17413D] hover:text-[#12332F]"
                  >
                    ← Back to {condition.title}
                  </Link>
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="bg-[#17413D] text-white">
          <Container>
            <div className="flex flex-col gap-8 py-14 sm:py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:py-20">
              <div className="max-w-[700px]">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#C8BDA7]">
                  Sutra Health
                </p>
                <h2 className="mt-4 font-serif text-[32px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[38px] md:text-[44px]">
                  Explore a personalised approach to healthier habits
                </h2>
                <p className="mt-5 max-w-[650px] font-sans text-[15px] leading-7 text-white/70 sm:text-[16px]">
                  Learn how Sutra Health combines lifestyle-focused guidance,
                  nutrition counselling, yoga therapy and related practices
                  within a whole-person approach.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-12 items-center justify-center border border-white bg-white px-6 py-3 font-sans text-[13px] font-medium text-[#17413D] transition-colors hover:bg-[#F7F5EF]"
                >
                  Book an Appointment
                </Link>

                <Link
                  href={`/conditions/${condition.slug}`}
                  className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 py-3 font-sans text-[13px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Explore {condition.title}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
