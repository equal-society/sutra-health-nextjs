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

const articleContextLinks: Record<string, { label: string; href: string }[]> = {
  "can-walking-help-lower-blood-pressure": [
    { label: "High blood pressure lifestyle support", href: "/conditions/high-blood-pressure" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
  ],
  "how-to-lower-blood-pressure-naturally": [
    { label: "High blood pressure lifestyle support", href: "/conditions/high-blood-pressure" },
    { label: "Nutrition support", href: "/services/nutrition" },
  ],
  "what-is-prediabetes-and-can-it-be-reversed": [
    { label: "Diabetes and blood sugar support", href: "/conditions/diabetes-blood-sugar" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
  ],
  "how-does-sleep-affect-weight-loss": [
    { label: "Weight management support", href: "/conditions/weight-management" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
  ],
  "how-to-improve-gut-health-naturally": [
    { label: "Digestive and gut health support", href: "/conditions/digestive-gut-health" },
    { label: "Nutrition support", href: "/services/nutrition" },
  ],
  "what-is-a-healthy-balanced-diet": [
    { label: "Nutrition support", href: "/services/nutrition" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
  ],
  "how-to-manage-stress": [
    { label: "Stress and behaviour support", href: "/services/behaviour-stress-mind" },
    { label: "Lifestyle Medicine", href: "/services/lifestyle" },
  ],
  "yoga-for-stress-relief": [
    { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
    { label: "Stress and behaviour support", href: "/services/behaviour-stress-mind" },
  ],
};


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

    description: `${(article.excerpt || `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`).slice(0, 112)} Read the guide.`,

    alternates: {
      canonical: `/resources/articles/${article.slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: article.title,

      description: `${(article.excerpt || `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`).slice(0, 125)} Read the practical guide.`,

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

      description: `${(article.excerpt || `Practical health guidance from Sutra Health about ${article.title.toLowerCase()}.`).slice(0, 125)} Read the practical guide.`,

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

  const relatedCare = (() => {
    const slug = article.slug;
    if (slug.includes("blood-pressure")) {
      return [
        { href: "/conditions/high-blood-pressure", label: "High Blood Pressure", type: "Health condition" },
        { href: "/services/lifestyle", label: "Lifestyle Medicine", type: "Service" },
        { href: "/services/physician-consultation", label: "Physician Consultation", type: "Service" },
      ];
    }
    if (slug.includes("prediabetes")) {
      return [
        { href: "/conditions/diabetes-blood-sugar", label: "Diabetes & Blood Sugar", type: "Health condition" },
        { href: "/services/lifestyle", label: "Lifestyle Medicine", type: "Service" },
        { href: "/services/nutrition", label: "Nutrition Counselling", type: "Service" },
      ];
    }
    if (slug.includes("gut-health")) {
      return [
        { href: "/conditions/digestive-gut-health", label: "Digestive & Gut Health", type: "Health condition" },
        { href: "/services/nutrition", label: "Nutrition Counselling", type: "Service" },
      ];
    }
    if (slug.includes("yoga")) {
      return [
        { href: "/services/therapeutic-yoga", label: "Therapeutic Yoga", type: "Service" },
        { href: "/services/behaviour-stress-mind", label: "Behaviour & Stress Support", type: "Service" },
      ];
    }
    if (slug.includes("stress")) {
      return [
        { href: "/services/behaviour-stress-mind", label: "Behaviour & Stress Support", type: "Service" },
        { href: "/services/lifestyle", label: "Lifestyle Medicine", type: "Service" },
      ];
    }
    if (slug.includes("diet")) {
      return [
        { href: "/services/nutrition", label: "Nutrition Counselling", type: "Service" },
        { href: "/services/lifestyle", label: "Lifestyle Medicine", type: "Service" },
      ];
    }
    if (slug.includes("sleep")) {
      return [
        { href: "/services/lifestyle", label: "Lifestyle Medicine", type: "Service" },
      ];
    }
    return [
      { href: "/services", label: "Health Services", type: "Services" },
      { href: "/conditions", label: "Health Conditions", type: "Health concerns" },
    ];
  })();
  const contextLinks = articleContextLinks[article.slug] ?? [
    { label: "Explore all health conditions", href: "/conditions" },
    { label: "Explore health services", href: "/services" },
  ];
  const wordCount = [
    article.content.introduction,
    ...article.content.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    article.content.takeaway ?? "",
    article.content.whenToSeekHelp ?? "",
    ...(article.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ").trim().split(/\s+/).filter(Boolean).length;

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

  const formattedUpdatedDate = article.updatedDate
    ? new Date(article.updatedDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

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

    dateModified: article.updatedDate ?? article.date,

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
      name: "Sutra Health Editorial Team",
      url: SITE_URL,
    },

    wordCount,

    ...(article.sources?.length
      ? {
          citation: article.sources
            .map((source) => source.split("|")[1]?.trim())
            .filter((url): url is string => Boolean(url)),
        }
      : {}),

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
                      {formattedUpdatedDate && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Updated {formattedUpdatedDate}</span>
                        </>
                      )}
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </figcaption>
                  </figure>
                )}
              </div>

              {/* Article body */}
              <article className="min-w-0 py-12 sm:py-16 lg:py-20">
                <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)]">Quick answer</div>
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

                <section className="border-y border-[var(--sutra-border)] py-9 sm:py-10" aria-labelledby="related-care-title">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">Related Sutra Health resources</p>
                  <h2 id="related-care-title" className="mt-3 font-[var(--font-serif)] text-[28px] font-medium leading-tight tracking-[-0.025em] sm:text-[34px]">Continue with a related topic</h2>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                    {contextLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-[15px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sand)] underline-offset-4 hover:text-[var(--sutra-ink)]">
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                </section>

                {article.faqs && article.faqs.length > 0 && (
                  <section className="py-12 sm:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                      Common questions
                    </p>

                    <h2 className="mt-3 font-[var(--font-serif)] text-[34px] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[42px]">
                      Common questions about this topic
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
                    Editorial team
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
                        Sutra Health Editorial Team
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
                  {formattedUpdatedDate && (
                    <>
                      <p className="mt-5 text-[11px] font-medium text-[var(--sutra-ink)]">Updated</p>
                      <p className="mt-2 text-[12px] text-[var(--sutra-muted)]">{formattedUpdatedDate}</p>
                    </>
                  )}

                  <p className="mt-5 text-[11px] font-medium text-[var(--sutra-ink)]">
                    Approx. word count
                  </p>
                  <p className="mt-2 text-[12px] text-[var(--sutra-muted)]">
                    {wordCount.toLocaleString("en-IN")} words
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
          RELATED CARE
      ===================================================== */}
      <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
              Related care
            </p>
            <h2 className="mt-3 font-[var(--font-serif)] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[40px]">
              Explore the relevant health topic or service
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-[var(--sutra-muted)] sm:text-[15px] sm:leading-8">
              If you want to take the next step, these pages provide more specific information about the health concern or support discussed in this article.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCare.map((item) => (
              <Link key={item.href} href={item.href} className="border border-[var(--sutra-border)] bg-[var(--sutra-white)] p-5 transition-colors hover:border-[var(--sutra-teal)]">
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">{item.type}</span>
                <span className="mt-3 block font-[var(--font-serif)] text-[21px] font-medium leading-tight text-[var(--sutra-ink)]">{item.label}</span>
                <span className="mt-4 block text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--sutra-teal)]">Explore →</span>
              </Link>
            ))}
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
                Want to discuss what this means for you?
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                General information is a useful starting point. If your question is specific to your health, discuss the relevant details with a qualified professional.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-3 bg-white px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)]"
              >
                See appointment options
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 border border-white/30 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                Services
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
