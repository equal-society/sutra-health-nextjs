import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   SITE
========================================================= */

const SITE_URL = "https://sutrahealth.com";

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested Sutra Health article could not be found.",
    };
  }

  return {
    /*
      IMPORTANT:
      Use only the article title here.

      If your root layout has:
      title: { template: "%s | Sutra Health" }

      Next.js will produce:
      How to Manage Stress Naturally | Sutra Health

      instead of:
      How to Manage Stress Naturally | Sutra Health | Sutra Health
    */
    title: article.title,

    description:
      article.excerpt ||
      `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`,

    alternates: {
      canonical: `/resources/articles/${article.slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: article.title,

      description:
        article.excerpt ||
        `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`,

      type: "article",

      url: `${SITE_URL}/resources/articles/${article.slug}`,

      siteName: "Sutra Health",

      images: article.image
        ? [
            {
              url: article.image,
              alt: article.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title: article.title,

      description:
        article.excerpt ||
        `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`,

      images: article.image ? [article.image] : [],
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = getRelatedArticles(article, 3);

  /* =======================================================
     DATE
  ======================================================= */

  const formattedDate = new Date(
    article.date,
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  /* =======================================================
     FULL URL
  ======================================================= */

  const articleUrl =
    `${SITE_URL}/resources/articles/${article.slug}`;

  /* =======================================================
     ARTICLE SCHEMA
  ======================================================= */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id": `${articleUrl}#article`,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    headline: article.title,

    description: article.excerpt,

    url: articleUrl,

    datePublished: article.date,

    dateModified: article.date,

    inLanguage: "en-IN",

    publisher: {
      "@type": "Organization",

      "@id": `${SITE_URL}/#organization`,

      name: "Sutra Health",

      url: SITE_URL,
    },

    author: {
      "@type": "Organization",

      "@id": `${SITE_URL}/#organization`,

      name: "Sutra Health",

      url: SITE_URL,
    },

    isPartOf: {
      "@type": "WebSite",

      "@id": `${SITE_URL}/#website`,

      name: "Sutra Health",

      url: SITE_URL,
    },

    about: {
      "@type": "Thing",

      name: article.category,
    },

    ...(article.image
      ? {
          image: [
            article.image.startsWith("http")
              ? article.image
              : `${SITE_URL}${article.image}`,
          ],
        }
      : {}),
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: SITE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Resources",

        item: `${SITE_URL}/resources`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: "Health Articles",

        item: `${SITE_URL}/resources/articles`,
      },

      {
        "@type": "ListItem",

        position: 4,

        name: article.title,

        item: articleUrl,
      },
    ],
  };

  /* =======================================================
     ORGANIZATION SCHEMA
  ======================================================= */

  const organizationSchema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${SITE_URL}/#organization`,

    name: "Sutra Health",

    url: SITE_URL,
  };

  /* =======================================================
     FAQ SCHEMA
  ======================================================= */

  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          mainEntity: article.faqs.map((faq) => ({
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
    <main className="bg-[#FAF8F1] text-[#173F35]">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
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


      {/* =====================================================
          ARTICLE HERO

          KEEPING HERO STRUCTURE
      ===================================================== */}

      <section className="border-b border-[#173F35]/10">

        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 lg:px-10">

          <div className="py-8 sm:py-10 lg:py-12">

            {/* Back */}

            <Link
              href="/resources/articles"
              className="inline-flex items-center gap-2 text-[11px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
            >
              <span aria-hidden="true">
                ←
              </span>

              Health Articles
            </Link>


            {/* Article heading */}

            <div className="mt-10 max-w-[850px]">

              {/* Meta */}

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">

                <span>
                  {article.category}
                </span>

                <span className="text-[#173F35]/25">
                  ·
                </span>

                <span>
                  {article.type}
                </span>

                <span className="text-[#173F35]/25">
                  ·
                </span>

                <span>
                  {article.readTime}
                </span>

              </div>


              {/* H1 */}

              <h1 className="mt-5 font-serif text-[44px] leading-[1.02] tracking-[-0.045em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
                {article.title}
              </h1>


              {/* Excerpt */}

              <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
                {article.excerpt}
              </p>


              {/* Date / publisher */}

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-[#7A8882]">

                <span>
                  Published {formattedDate}
                </span>

                <span className="text-[#173F35]/20">
                  ·
                </span>

                <span>
                  Sutra Health
                </span>

              </div>

            </div>


            {/* Feature image */}

            {article.image && (

              <div className="mt-10 overflow-hidden rounded-[20px] sm:mt-12">

                <div className="relative aspect-[16/8] bg-[#E8EEE6]">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1120px"
                    className="object-cover"
                  />

                </div>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ===================================================== */}

      <section>

        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[190px_minmax(0,720px)] lg:gap-14 xl:grid-cols-[210px_minmax(0,720px)] xl:gap-16">


            {/* =================================================
                LEFT ARTICLE NAVIGATION
            ================================================= */}

            <aside className="hidden lg:block">

              <div className="sticky top-28 py-12">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  In this article
                </p>


                <nav className="mt-4">

                  {article.content.sections.map(
                    (section, index) => (

                      <a
                        key={section.heading}
                        href={`#section-${index}`}
                        className="group flex gap-3 border-l border-[#173F35]/10 py-2 pl-3 transition-colors hover:border-[#65966F]"
                      >

                        <span className="text-[9px] font-medium text-[#A0AAA5] transition-colors group-hover:text-[#65966F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[11px] leading-5 text-[#71817A] transition-colors group-hover:text-[#173F35]">
                          {section.heading}
                        </span>

                      </a>

                    ),
                  )}

                </nav>

              </div>

            </aside>


            {/* =================================================
                ARTICLE
            ================================================= */}

            <article className="min-w-0 py-10 sm:py-14 lg:py-16">


              {/* =================================================
                  MOBILE NAVIGATION
              ================================================= */}

              <div className="mb-9 border-y border-[#173F35]/10 py-5 lg:hidden">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  In this article
                </p>

                <div className="mt-3 grid gap-2">

                  {article.content.sections.map(
                    (section, index) => (

                      <a
                        key={section.heading}
                        href={`#section-${index}`}
                        className="flex gap-2 text-[12px] leading-5 text-[#687A73]"
                      >

                        <span className="font-medium text-[#65966F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                          {section.heading}
                        </span>

                      </a>

                    ),
                  )}

                </div>

              </div>


              {/* =================================================
                  SHORT ANSWER
              ================================================= */}

              <section aria-label="Article summary">

                <div className="border-l-2 border-[#65966F] pl-5 sm:pl-7">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    The short answer
                  </p>

                  <p className="mt-3 max-w-[680px] font-serif text-[22px] leading-[1.4] tracking-[-0.02em] text-[#173F35] sm:text-[26px]">
                    {article.content.introduction}
                  </p>

                </div>

              </section>


              {/* =================================================
                  AUDIENCE + USE CASE
              ================================================= */}

              <section className="mt-8 grid gap-3 sm:grid-cols-2">

                <div className="border border-[#173F35]/10 bg-white/30 p-5">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Who this is for
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-[#536962]">
                    This guide is for people looking for practical,
                    everyday approaches to support healthier habits
                    and wellbeing.
                  </p>

                </div>


                <div className="border border-[#173F35]/10 bg-white/30 p-5">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    How to use this guide
                  </p>

                  <p className="mt-3 text-[13px] leading-6 text-[#536962]">
                    Use the ideas that fit your situation and build
                    changes gradually rather than trying to change
                    everything at once.
                  </p>

                </div>

              </section>


              {/* =================================================
                  ARTICLE SECTIONS
              ================================================= */}

              <div className="mt-10 sm:mt-12">

                {article.content.sections.map(
                  (section, index) => (

                    <section
                      key={section.heading}
                      id={`section-${index}`}
                      className="scroll-mt-28 border-b border-[#173F35]/10 py-9 first:pt-0 sm:py-11"
                    >

                      {/* Number */}

                      <div className="flex items-center gap-3">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-7 bg-[#173F35]/15" />

                      </div>


                      {/* Heading */}

                      <h2 className="mt-3 max-w-[680px] font-serif text-[28px] leading-[1.15] tracking-[-0.03em] text-[#123F35] sm:text-[34px]">
                        {section.heading}
                      </h2>


                      {/* Paragraphs */}

                      <div className="mt-5 max-w-[700px]">

                        {section.paragraphs.map(
                          (
                            paragraph,
                            paragraphIndex,
                          ) => (

                            <p
                              key={paragraphIndex}
                              className="mb-5 text-[14px] leading-7 text-[#536962] sm:text-[15px] sm:leading-8"
                            >
                              {paragraph}
                            </p>

                          ),
                        )}


                        {/* Bullets */}

                        {section.bullets &&
                          section.bullets.length > 0 && (

                            <ul className="mt-5 space-y-3">

                              {section.bullets.map(
                                (bullet) => (

                                  <li
                                    key={bullet}
                                    className="flex gap-3 text-[14px] leading-7 text-[#536962] sm:text-[15px]"
                                  >

                                    <span
                                      aria-hidden="true"
                                      className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                                    />

                                    <span>
                                      {bullet}
                                    </span>

                                  </li>

                                ),
                              )}

                            </ul>

                          )}

                      </div>

                    </section>

                  ),
                )}

              </div>


              {/* =================================================
                  QUICK CHECKLIST
              ================================================= */}

              <section className="mt-10 border-y border-[#173F35]/10 py-8">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  A simple starting checklist
                </p>

                <h2 className="mt-2 font-serif text-[28px] leading-[1.15] tracking-[-0.03em] text-[#123F35] sm:text-[32px]">
                  What can you try today?
                </h2>

                <ul className="mt-5 space-y-3">

                  <li className="flex gap-3 text-[14px] leading-7 text-[#536962] sm:text-[15px]">

                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                    />

                    <span>
                      Start with one small change that feels realistic.
                    </span>

                  </li>


                  <li className="flex gap-3 text-[14px] leading-7 text-[#536962] sm:text-[15px]">

                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                    />

                    <span>
                      Build the change into your normal daily routine.
                    </span>

                  </li>


                  <li className="flex gap-3 text-[14px] leading-7 text-[#536962] sm:text-[15px]">

                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                    />

                    <span>
                      Notice what works and adjust when necessary.
                    </span>

                  </li>


                  <li className="flex gap-3 text-[14px] leading-7 text-[#536962] sm:text-[15px]">

                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                    />

                    <span>
                      Focus on consistency rather than perfection.
                    </span>

                  </li>

                </ul>

              </section>


              {/* =================================================
                  KEY TAKEAWAY
              ================================================= */}

              {article.content.takeaway && (

                <section className="mt-10 bg-[#EDF2EA] px-6 py-7 sm:px-8 sm:py-8">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Key takeaway
                  </p>

                  <p className="mt-4 max-w-[680px] font-serif text-[22px] leading-[1.4] tracking-[-0.02em] text-[#173F35] sm:text-[26px]">
                    {article.content.takeaway}
                  </p>

                </section>

              )}


              {/* =================================================
                  WHEN TO SEEK HELP
              ================================================= */}

              {article.content.whenToSeekHelp && (

                <section className="mt-10 border-t border-[#173F35]/10 pt-8">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    When to seek professional support
                  </p>

                  <p className="mt-4 max-w-[700px] text-[14px] leading-7 text-[#536962] sm:text-[15px] sm:leading-8">
                    {article.content.whenToSeekHelp}
                  </p>

                </section>

              )}


              {/* =================================================
                  FAQ
              ================================================= */}

              {article.faqs &&
                article.faqs.length > 0 && (

                  <section className="mt-14 sm:mt-16">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                      Common questions
                    </p>

                    <h2 className="mt-2 font-serif text-[30px] leading-[1.15] tracking-[-0.03em] text-[#123F35] sm:text-[36px]">
                      Frequently asked questions
                    </h2>


                    <div className="mt-6 border-y border-[#173F35]/10">

                      {article.faqs.map(
                        (faq) => (

                          <details
                            key={faq.question}
                            className="group border-b border-[#173F35]/10 last:border-b-0"
                          >

                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[14px] font-medium leading-6 text-[#173F35] sm:text-[15px]">

                              <span>
                                {faq.question}
                              </span>

                              <span
                                aria-hidden="true"
                                className="shrink-0 text-[20px] font-light text-[#65966F] transition-transform group-open:rotate-45"
                              >
                                +
                              </span>

                            </summary>


                            <p className="max-w-[680px] pb-5 pr-8 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                              {faq.answer}
                            </p>

                          </details>

                        ),
                      )}

                    </div>

                  </section>

                )}


              {/* =================================================
                  SOURCES
              ================================================= */}

              {article.sources &&
                article.sources.length > 0 && (

                  <section className="mt-12 border-t border-[#173F35]/10 pt-8">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                      Sources & further reading
                    </p>

                    <ol className="mt-4 space-y-3">

                      {article.sources.map(
                        (source, index) => (

                          <li
                            key={`${source}-${index}`}
                            className="flex gap-3 text-[11px] leading-6 text-[#78857F]"
                          >

                            <span className="shrink-0 text-[#65966F]">
                              {index + 1}.
                            </span>

                            <span>
                              {source}
                            </span>

                          </li>

                        ),
                      )}

                    </ol>

                  </section>

                )}


              {/* =================================================
                  DISCLAIMER
              ================================================= */}

              <div className="mt-10 border-t border-[#173F35]/10 pt-6">

                <p className="text-[10px] leading-6 text-[#89958F]">
                  This article is provided for general health education
                  and does not replace individual medical advice, diagnosis
                  or treatment. If you have a specific health concern,
                  consult a qualified healthcare professional.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}

      {relatedArticles.length > 0 && (

        <section className="border-t border-[#173F35]/10 bg-[#F2F0E7]">

          <div className="mx-auto max-w-[1120px] px-5 py-11 sm:px-8 sm:py-14 lg:px-10">

            {/* Header */}

            <div className="flex items-end justify-between gap-6">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  Continue reading
                </p>

                <h2 className="mt-2 font-serif text-[30px] leading-[1.15] tracking-[-0.03em] text-[#123F35] sm:text-[36px]">
                  Related articles
                </h2>

              </div>


              <Link
                href="/resources/articles"
                className="hidden text-[11px] font-semibold text-[#173F35] sm:block"
              >
                View all articles →
              </Link>

            </div>


            {/* Cards */}

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {relatedArticles.map(
                (related) => (

                  <Link
                    key={related.slug}
                    href={`/resources/articles/${related.slug}`}
                    className="group rounded-[20px] border border-[#173F35]/10 bg-[#FAF8F1] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#173F35]/20"
                  >

                    {/* Meta */}

                    <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#65966F]">

                      <span>
                        {related.category}
                      </span>

                      <span className="text-[#173F35]/25">
                        ·
                      </span>

                      <span>
                        {related.type}
                      </span>

                      <span className="text-[#173F35]/25">
                        ·
                      </span>

                      <span>
                        {related.readTime}
                      </span>

                    </div>


                    {/* Title */}

                    <h3 className="mt-4 font-serif text-[22px] leading-[1.18] tracking-[-0.025em] text-[#173F35] transition-colors group-hover:text-[#65966F]">
                      {related.title}
                    </h3>


                    {/* Excerpt */}

                    <p className="mt-3 line-clamp-3 text-[12px] leading-6 text-[#71817A]">
                      {related.excerpt}
                    </p>


                    {/* Read */}

                    <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#173F35]">
                      Read article →
                    </div>

                  </Link>

                ),
              )}

            </div>


            {/* Mobile */}

            <Link
              href="/resources/articles"
              className="mt-6 inline-flex text-[11px] font-medium text-[#65966F] sm:hidden"
            >
              View all articles →
            </Link>

          </div>

        </section>

      )}


      {/* =====================================================
          FULL WIDTH CTA
      ===================================================== */}

      <section className="border-t border-[#173F35]/10">

        <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-8 sm:py-14 lg:px-10">

          <div className="relative overflow-hidden rounded-[22px] bg-[#173F35] px-6 py-8 sm:px-8 sm:py-9 lg:px-10">

            {/* Decorative shape */}

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-52 w-52 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-[45%] h-52 w-52 rounded-full bg-[#65966F]/15 blur-3xl"
            />


            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Content */}

              <div className="max-w-[650px]">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B8CEB9]">
                  Sutra Health
                </p>

                <h2 className="mt-2 font-serif text-[27px] leading-[1.15] tracking-[-0.025em] text-white sm:text-[34px]">
                  Want practical support for your health?
                </h2>

                <p className="mt-3 max-w-[580px] text-[13px] leading-6 text-white/60">
                  Explore a personalised approach that brings together
                  lifestyle, nutrition, movement, breath and mindful
                  behaviour change.
                </p>

              </div>


              {/* Actions */}

              <div className="flex shrink-0 flex-wrap gap-2">

                <a
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-[#173F35] transition-colors hover:bg-[#F1F3ED]"
                >
                  Book a Consultation

                  <span aria-hidden="true">
                    →
                  </span>

                </a>


                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  What We Do

                  <span aria-hidden="true">
                    →
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}