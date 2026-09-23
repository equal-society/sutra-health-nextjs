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

const SITE_URL = "https://lifequality.org.in";

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
    <main className="min-h-screen bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
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
          ARTICLE
          Clayo-style: one sticky metadata rail spanning the
          hero image and the entire article body.
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[minmax(0,820px)_300px] lg:gap-12 xl:grid-cols-[minmax(0,820px)_300px] xl:gap-16">
            {/* =================================================
                LEFT: HERO + ARTICLE
            ================================================= */}
            <div className="min-w-0">
              <div className="pt-14 sm:pt-18 lg:pt-24">
             

                <div className="mt-12">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--sutra-muted)]">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h1 className="mt-5 font-[var(--font-serif)] text-[46px] font-medium leading-[1.04] tracking-[-0.045em] text-[var(--sutra-ink)] sm:text-[58px] md:text-[66px] lg:text-[74px]">
                    {article.title}
                  </h1>

                  <p className="mt-6 max-w-[820px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-8">
                    {article.excerpt}
                  </p>
                </div>

                {article.image && (
                  <figure className="mt-12 sm:mt-14">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--sutra-pale-sage)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 820px"
                        className="object-cover"
                      />
                    </div>

                    <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-[var(--sutra-muted)]">
                      <span>Published {formattedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </figcaption>
                  </figure>
                )}
              </div>

              {/* Article body */}
              <article className="min-w-0 py-12 sm:py-16 lg:py-20">
                <p className="max-w-[790px] text-[17px] leading-8 text-[var(--sutra-muted)] sm:text-[18px] sm:leading-9">
                  {article.content.introduction}
                </p>

                <div className="mt-12 sm:mt-14">
                  {article.content.sections.map((section, index) => (
                    <section
                      key={section.heading}
                      id={`section-${index}`}
                      className="scroll-mt-28 border-t border-[var(--sutra-border)] py-10 sm:py-12"
                    >
                      <h2 className="font-[var(--font-serif)] text-[27px] font-medium leading-[1.18] tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[32px]">
                        {index + 1}. {section.heading}
                      </h2>

                      <div className="mt-6 max-w-[790px]">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="mb-5 text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {section.bullets && section.bullets.length > 0 && (
                          <ul className="mt-6 space-y-2">
                            {section.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-3 text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[16px]"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-[var(--sutra-teal)]"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  ))}
                </div>

                {article.content.takeaway && (
                  <section className="border-y border-[var(--sutra-border)] py-10 sm:py-12">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      Key takeaway
                    </p>
                    <p className="mt-4 max-w-[720px] font-[var(--font-serif)] text-[24px] font-medium leading-[1.4] tracking-[-0.02em] text-[var(--sutra-teal)] sm:text-[29px]">
                      {article.content.takeaway}
                    </p>
                  </section>
                )}

                {article.content.whenToSeekHelp && (
                  <section className="border-b border-[var(--sutra-border)] py-10 sm:py-12">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      When to seek professional support
                    </p>
                    <p className="mt-4 max-w-[720px] text-[15px] leading-8 text-[var(--sutra-muted)] sm:text-[16px] sm:leading-9">
                      {article.content.whenToSeekHelp}
                    </p>
                  </section>
                )}

                {article.faqs && article.faqs.length > 0 && (
                  <section className="py-12 sm:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      Common questions
                    </p>

                    <h2 className="mt-3 font-[var(--font-serif)] text-[34px] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[42px]">
                      Frequently asked questions
                    </h2>

                    <div className="mt-8 border-y border-[var(--sutra-border)]">
                      {article.faqs.map((faq) => (
                        <details
                          key={faq.question}
                          className="group border-b border-[var(--sutra-border)] last:border-b-0"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[15px] font-medium leading-6 text-[var(--sutra-ink)]">
                            <span>{faq.question}</span>
                            <span
                              aria-hidden="true"
                              className="shrink-0 text-xl font-light text-[var(--sutra-teal)] transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <p className="max-w-[680px] pb-6 pr-8 text-[15px] leading-8 text-[var(--sutra-muted)]">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                {article.sources && article.sources.length > 0 && (
                  <section className="border-t border-[var(--sutra-border)] py-10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      Sources & further reading
                    </p>

                    <ol className="mt-5 space-y-3">
                      {article.sources.map((source, index) => {
                        const [label, url] = source.split("|");
                        const cleanUrl = url?.trim();
                        const isLink =
                          Boolean(cleanUrl) &&
                          (cleanUrl.startsWith("https://") ||
                            cleanUrl.startsWith("http://"));

                        return (
                          <li
                            key={`${source}-${index}`}
                            className="flex gap-3 text-[12px] leading-6 text-[var(--sutra-muted)]"
                          >
                            <span className="shrink-0 font-semibold text-[var(--sutra-teal)]">
                              {index + 1}.
                            </span>

                            {isLink ? (
                              <a
                                href={cleanUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-[var(--sutra-sand)] underline-offset-4 transition-colors hover:text-[var(--sutra-teal)]"
                              >
                                {label.trim()}
                              </a>
                            ) : (
                              <span>{source}</span>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </section>
                )}

                <div className="border-t border-[var(--sutra-border)] pt-6">
                  <p className="max-w-[700px] text-[10px] leading-6 text-[var(--sutra-muted)]">
                    This article is provided for general health education and
                    does not replace individual medical advice, diagnosis or
                    treatment. If you have a specific health concern, consult a
                    qualified healthcare professional.
                  </p>
                </div>
              </article>
            </div>

            {/* =================================================
                RIGHT: ONE STICKY SIDEBAR FOR HERO → FULL ARTICLE
            ================================================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 py-14 sm:py-18 lg:py-24">
                <div>
                  <p className="text-[15px] font-medium text-[var(--sutra-ink)]">
                    Category
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="bg-[var(--sutra-pale-sage)] px-3 py-2 text-[12px] text-[var(--sutra-ink)]">
                      {article.category}
                    </span>
                    <span className="bg-[var(--sutra-pale-sage)] px-3 py-2 text-[12px] text-[var(--sutra-ink)]">
                      {article.type}
                    </span>
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-[15px] font-medium text-[var(--sutra-ink)]">
                    Written by
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <div
                      aria-hidden="true"
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sutra-pale-sage)] font-[var(--font-serif)] text-[24px] text-[var(--sutra-teal)]"
                    >
                      S
                    </div>

                    <div>
                      <p className="text-[17px] font-medium text-[var(--sutra-ink)]">
                        Sutra Health
                      </p>
                      <p className="mt-1 text-[13px] leading-5 text-[var(--sutra-muted)]">
                        Integrative Lifestyle Healthcare
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-[var(--sutra-border)] pt-6">
                  <p className="text-[11px] font-medium text-[var(--sutra-ink)]">
                    Published
                  </p>
                  <p className="mt-2 text-[12px] text-[var(--sutra-muted)]">
                    {formattedDate}
                  </p>

                  <p className="mt-5 text-[11px] font-medium text-[var(--sutra-ink)]">
                    Reading time
                  </p>
                  <p className="mt-2 text-[12px] text-[var(--sutra-muted)]">
                    {article.readTime}
                  </p>

                  <Link
                    href="/resources/articles"
                    className="mt-8 inline-flex items-center gap-2 text-[12px] font-medium text-[var(--sutra-teal)] transition-colors hover:text-[var(--sutra-ink)]"
                  >
                    All health articles
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED ARTICLES
      ===================================================== */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-white)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
            <div className="flex items-end justify-between gap-6 border-b border-[var(--sutra-border)] pb-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  Continue reading
                </p>
                <h2 className="mt-3 font-[var(--font-serif)] text-[36px] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[46px]">
                  More health articles
                </h2>
              </div>

              <Link
                href="/resources/articles"
                className="hidden text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--sutra-teal)] sm:block"
              >
                View all →
              </Link>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/articles/${related.slug}`}
                  className="group block"
                >
                  {related.image && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sutra-pale-sage)]">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="mt-5">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
                      {related.category} · {related.readTime}
                    </div>

                    <h3 className="mt-3 font-[var(--font-serif)] text-[23px] font-medium leading-[1.16] tracking-[-0.025em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)]">
                      {related.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[var(--sutra-muted)]">
                      {related.excerpt}
                    </p>

                    <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--sutra-teal)]">
                      Read article →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="bg-[var(--sutra-teal)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-pale-sage)]">
                Sutra Health
              </p>
              <h2 className="mt-4 font-[var(--font-serif)] text-[38px] font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-[50px]">
                Want practical support for your health?
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                Explore a personalised approach that brings together lifestyle,
                nutrition, movement, breath and mindful behaviour change.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-3 border border-white/30 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                What We Do
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
