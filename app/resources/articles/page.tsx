"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  articles,
  articleCategories,
  articleTypes,
} from "@/data/articles";

export default function ArticlesPage() {
  /* =========================================================
     STATE
  ========================================================= */

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState<
    "All" | (typeof articleTypes)[number]
  >("All");

  const [visibleCount, setVisibleCount] = useState(6);


  /* =========================================================
     FILTER ARTICLES
  ========================================================= */

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return [...articles]
      .filter((article) => {
        if (
          activeCategory !== "All" &&
          article.category !== activeCategory
        ) {
          return false;
        }

        if (
          activeType !== "All" &&
          article.type !== activeType
        ) {
          return false;
        }

        if (!query) return true;

        return [
          article.title,
          article.excerpt,
          article.category,
          article.type,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);
      })
      .sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      );
  }, [search, activeCategory, activeType]);


  /* =========================================================
     FEATURED + LATEST
  ========================================================= */

  const featured = filteredArticles[0];

  const latest = filteredArticles.slice(
    1,
    visibleCount
  );


  /* =========================================================
     RESET LOAD MORE WHEN FILTER CHANGES
  ========================================================= */

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const handleTypeChange = (
    type: "All" | (typeof articleTypes)[number]
  ) => {
    setActiveType(type);
    setVisibleCount(6);
  };


  /* =========================================================
     QUESTIONS
  ========================================================= */

  const questions = [
    "How can I manage stress?",
    "How can I improve my gut health?",
    "How can I sleep better?",
    "How can I build healthier habits?",
  ];


  /* =========================================================
     NO RESULTS
  ========================================================= */

  const hasResults = filteredArticles.length > 0;


  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden border-b border-[#173F35]/10">

        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#FAF8F1_0%,#F4F2E8_42%,#E7EFE7_100%)]"
        />

        {/* Organic shapes */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#A9C5AC]/35 blur-3xl sm:h-[520px] sm:w-[520px]"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-48 left-[38%] -z-10 h-[420px] w-[420px] rounded-full bg-[#D8C9A9]/25 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 top-[28%] -z-10 h-[260px] w-[260px] rounded-full bg-[#C6D9CA]/25 blur-3xl"
        />

        {/* Fine grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#173F35 1px, transparent 1px), linear-gradient(90deg, #173F35 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Decorative ring */}
        <div
          aria-hidden="true"
          className="absolute right-[7%] top-[18%] -z-10 hidden h-44 w-44 rounded-full border border-[#173F35]/10 lg:block"
        />

        <div
          aria-hidden="true"
          className="absolute right-[10%] top-[23%] -z-10 hidden h-28 w-28 rounded-full border border-[#65966F]/15 lg:block"
        />


        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="py-10 sm:py-14 lg:py-16">

            {/* Breadcrumb */}

            <a
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
            >
              <span aria-hidden="true">←</span>
              Sutra Health
            </a>


            {/* Hero content */}

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-20">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F]">
                  Resources
                </p>

                <h1 className="mt-4 max-w-[760px] font-serif text-[44px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[56px] lg:text-[68px]">
                  Health knowledge
                  <br />
                  <span className="italic text-[#65966F]">
                    for everyday life.
                  </span>
                </h1>

              </div>


              <div className="lg:pb-1">

                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-7">
                  Practical articles on lifestyle, nutrition,
                  movement, mindfulness, sleep and everyday
                  wellbeing — created to help you understand
                  health and make informed next steps.
                </p>

              </div>

            </div>


            {/* Search */}

            <div className="mt-9 max-w-[680px]">

              <label
                htmlFor="article-search"
                className="sr-only"
              >
                Search health articles
              </label>

              <div className="flex h-12 items-center rounded-full border border-[#173F35]/15 bg-white/80 px-5 shadow-[0_8px_30px_rgba(23,63,53,0.04)]">

                <span
                  aria-hidden="true"
                  className="mr-3 text-[18px] text-[#71817A]"
                >
                  ⌕
                </span>

                <input
                  id="article-search"
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setVisibleCount(6);
                  }}
                  placeholder="Search health articles..."
                  className="w-full bg-transparent text-[13px] text-[#173F35] outline-none placeholder:text-[#8A9690]"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="ml-3 shrink-0 text-[12px] text-[#71817A] hover:text-[#173F35]"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="border-b border-[#173F35]/10 bg-[#FAF8F1]">

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">

            <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#71817A]">
              Browse
            </span>

            {articleCategories.map((category) => {

              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={[
                    "shrink-0 rounded-full px-4 py-2 text-[11px] transition-all",
                    active
                      ? "bg-[#173F35] text-white shadow-sm"
                      : "border border-[#173F35]/12 bg-white/50 text-[#536860] hover:bg-white",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}

          </div>

        </div>

      </section>


     

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      {featured && (

        <section>

          <div className="mx-auto max-w-[1200px] px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-13">

            <div className="mb-5 flex items-center justify-between">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Featured
              </p>

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#8A9690]">
                Latest from Sutra Health
              </span>

            </div>


            <article className="group overflow-hidden rounded-[22px] border border-[#173F35]/10 bg-white shadow-[0_10px_40px_rgba(23,63,53,0.04)]">

              <div className="grid md:grid-cols-[0.92fr_1.08fr]">

                {/* Image */}

                <Link
                  href={`/resources/articles/${featured.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#E6EEE6] md:aspect-auto md:min-h-[330px]"
                >

                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                </Link>


                {/* Content */}

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#65966F]">

                    <span>{featured.category}</span>

                    <span className="text-[#B0BBB5]">
                      ·
                    </span>

                    <span>{featured.type}</span>

                    <span className="text-[#B0BBB5]">
                      ·
                    </span>

                    <span>{featured.readTime}</span>

                  </div>


                  <h2 className="mt-4 max-w-[620px] font-serif text-[32px] leading-[1.04] tracking-[-0.035em] text-[#123F35] sm:text-[40px]">

                    <Link
                      href={`/resources/articles/${featured.slug}`}
                      className="transition-colors hover:text-[#65966F]"
                    >
                      {featured.title}
                    </Link>

                  </h2>


                  <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-[#71817A]">
                    {featured.excerpt}
                  </p>


                  <div className="mt-6">

                    <Link
                      href={`/resources/articles/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#173F35]"
                    >
                      Read the article
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </section>

      )}


      {/* =====================================================
          ARTICLE COLLECTION
      ===================================================== */}

      <section className="border-t border-[#173F35]/10">

        <div className="mx-auto max-w-[1200px] px-5 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-13">

          <div className="flex flex-col gap-4 border-b border-[#173F35]/10 pb-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The Collection
              </p>

              <h2 className="mt-1 font-serif text-[32px] tracking-[-0.035em] text-[#123F35] sm:text-[38px]">
                Latest articles
              </h2>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[11px] text-[#71817A]">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1
                  ? "article"
                  : "articles"}
              </span>

              {(activeCategory !== "All" ||
                activeType !== "All" ||
                search) && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                    setActiveType("All");
                    setVisibleCount(6);
                  }}
                  className="text-[10px] font-semibold text-[#65966F] hover:text-[#173F35]"
                >
                  Clear filters
                </button>
              )}

            </div>

          </div>


          {/* No results */}

          {!hasResults && (

            <div className="border-b border-[#173F35]/10 py-16 text-center">

              <p className="font-serif text-[28px] text-[#173F35]">
                No articles found.
              </p>

              <p className="mt-2 text-[13px] text-[#71817A]">
                Try another search or browse a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setActiveType("All");
                }}
                className="mt-5 rounded-full bg-[#173F35] px-5 py-3 text-[11px] font-semibold text-white"
              >
                View all articles
              </button>

            </div>

          )}


          {/* Article rows */}

          {hasResults && (

            <div>

              {latest.map((article) => (

                <article
                  key={article.slug}
                  className="group border-b border-[#173F35]/10 py-5 sm:py-6"
                >

                  <div className="grid gap-5 sm:grid-cols-[190px_1fr] sm:items-center lg:grid-cols-[220px_1fr_auto] lg:gap-8">

                    {/* Image */}

                    <Link
                      href={`/resources/articles/${article.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden rounded-[14px] bg-[#E7EEE7]"
                    >

                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />

                    </Link>


                    {/* Content */}

                    <div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#65966F]">

                        <span>
                          {article.category}
                        </span>

                        <span className="text-[#B0BBB5]">
                          ·
                        </span>

                        <span>
                          {article.type}
                        </span>

                        <span className="text-[#B0BBB5]">
                          ·
                        </span>

                        <span>
                          {article.readTime}
                        </span>

                      </div>


                      <h3 className="mt-2 font-serif text-[25px] leading-[1.08] tracking-[-0.025em] text-[#173F35] sm:text-[29px]">

                        <Link
                          href={`/resources/articles/${article.slug}`}
                          className="transition-colors hover:text-[#65966F]"
                        >
                          {article.title}
                        </Link>

                      </h3>


                      <p className="mt-2 max-w-[650px] text-[12px] leading-5.5 text-[#71817A] sm:text-[13px]">
                        {article.excerpt}
                      </p>

                    </div>


                    {/* Date */}

                    <div className="flex items-center justify-between lg:block lg:text-right">

                      <p className="text-[10px] text-[#8A9690]">
                        {article.date}
                      </p>

                      <Link
                        href={`/resources/articles/${article.slug}`}
                        className="text-[12px] font-semibold text-[#173F35]"
                        aria-label={`Read ${article.title}`}
                      >
                        →
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}


          {/* Load more */}

          {visibleCount < filteredArticles.length && (

            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (current) => current + 6
                  )
                }
                className="rounded-full border border-[#173F35]/15 bg-white px-6 py-3 text-[11px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F3ED]"
              >
                Load more articles
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          EXPLORE BY QUESTION
      ===================================================== */}

      <section className="border-y border-[#173F35]/10 bg-[#EFF3ED]">

        <div className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Explore by Question
              </p>

              <h2 className="mt-3 max-w-[400px] font-serif text-[31px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[38px]">
                Start with what you're asking.
              </h2>

              <p className="mt-4 max-w-[380px] text-[13px] leading-6 text-[#71817A]">
                Find practical health information by starting
                with the question you already have.
              </p>

            </div>


            <div className="border-t border-[#173F35]/10">

              {questions.map((question) => (

                <button
                  key={question}
                  type="button"
                  onClick={() => {
                    setSearch(question.replace(
                      "How can I ",
                      ""
                    ));
                    setActiveCategory("All");
                    setActiveType("All");
                    setVisibleCount(6);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="group flex w-full items-center justify-between border-b border-[#173F35]/10 py-4 text-left"
                >

                  <span className="font-serif text-[19px] tracking-[-0.02em] text-[#173F35] sm:text-[21px]">
                    {question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="ml-5 text-[#65966F] transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUTRA HEALTH LINKS
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Sutra Health
              </p>

              <p className="mt-2 font-serif text-[25px] tracking-[-0.025em] text-[#173F35]">
                Explore how we approach health.
              </p>

            </div>


            <div className="flex flex-wrap gap-2">

              <Link
                href="/what-we-do"
                className="rounded-full bg-[#173F35] px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#12352D]"
              >
                What We Do →
              </Link>

              <Link
                href="/approach"
                className="rounded-full border border-[#173F35]/15 bg-white px-5 py-3 text-[11px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F3ED]"
              >
                Our Approach →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}   