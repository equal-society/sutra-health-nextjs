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
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState<
    "All" | (typeof articleTypes)[number]
  >("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles = useMemo(() => {
    const query = submittedSearch.trim().toLowerCase();

    return [...articles]
      .filter((article) => {
        if (
          activeCategory !== "All" &&
          article.category !== activeCategory
        ) {
          return false;
        }

        if (activeType !== "All" && article.type !== activeType) {
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
          new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
  }, [submittedSearch, activeCategory, activeType]);

  const featuredArticles = filteredArticles.slice(0, 3);
  const latestArticles = filteredArticles.slice(3, visibleCount + 3);
  const hasResults = filteredArticles.length > 0;

  const runSearch = () => {
    setSubmittedSearch(search.trim());
    setVisibleCount(9);

    window.setTimeout(() => {
      document
        .getElementById("article-results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const clearSearch = () => {
    setSearch("");
    setSubmittedSearch("");
    setVisibleCount(9);
  };

  const resetFilters = () => {
    clearSearch();
    setActiveCategory("All");
    setActiveType("All");
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(9);
  };

  const questions = [
    "How can I manage stress?",
    "How can I improve my gut health?",
    "How can I sleep better?",
    "How can I build healthier habits?",
  ];

  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      {/* =====================================================
          HERO
          Clayo-inspired centered publication introduction,
          adapted to Sutra Health.
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-porcelain)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[820px] py-16 text-center sm:py-20 lg:py-24 xl:py-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-muted)] sm:text-[11px]">
              Sutra Health Journal
            </p>

            <h1 className="mt-5 font-[var(--font-serif)] text-[48px] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--sutra-ink)] sm:text-[62px] md:text-[72px] lg:text-[82px]">
              Health knowledge
              <br />
              <span className="text-[var(--sutra-teal)]">
                for everyday life.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[650px] text-[16px] leading-8 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-9">
              Practical health information on lifestyle, nutrition, movement,
              mindfulness, sleep and everyday wellbeing — created to help you
              understand health and make informed next steps.
            </p>

            {/* Search — retained as a useful function, visually quieter */}
            <form
              className="mx-auto mt-9 max-w-[650px] text-left"
              onSubmit={(event) => {
                event.preventDefault();
                runSearch();
              }}
            >
              <label
                htmlFor="article-search"
                className="sr-only"
              >
                Search health articles
              </label>

              <div className="flex min-h-14 flex-col border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)] sm:flex-row">
                <div className="flex min-w-0 flex-1 items-center px-4">
                  <span
                    aria-hidden="true"
                    className="mr-3 text-[18px] text-[var(--sutra-muted)]"
                  >
                    ⌕
                  </span>

                  <input
                    id="article-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") clearSearch();
                    }}
                    placeholder="Search a health question or topic..."
                    className="w-full bg-transparent py-4 text-[14px] text-[var(--sutra-ink)] outline-none placeholder:text-[var(--sutra-muted)]"
                    autoComplete="off"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      aria-label="Clear search"
                      className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--sutra-border)] text-[15px] text-[var(--sutra-muted)] hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="min-h-12 border-t border-[var(--sutra-border-strong)] bg-[var(--sutra-teal)] px-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--sutra-teal-hover)] sm:border-l sm:border-t-0"
                >
                  Search
                </button>
              </div>

              {submittedSearch && (
                <p
                  className="mt-3 text-center text-[11px] font-semibold text-[var(--sutra-teal)]"
                  role="status"
                  aria-live="polite"
                >
                  {filteredArticles.length}{" "}
                  {filteredArticles.length === 1 ? "article" : "articles"}{" "}
                  for “{submittedSearch}”
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOPIC NAVIGATION
      ===================================================== */}
      <section className="border-b border-[var(--sutra-border)] bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center gap-7 overflow-x-auto py-5 scrollbar-hide">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
              Topics
            </span>

            {articleCategories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={active}
                  className={[
                    "relative shrink-0 pb-1 text-[12px] font-medium transition-colors",
                    "after:absolute after:bottom-0 after:left-0 after:h-px",
                    "after:bg-[var(--sutra-teal)] after:transition-all",
                    active
                      ? "text-[var(--sutra-teal)] after:w-full"
                      : "text-[var(--sutra-muted)] after:w-0 hover:text-[var(--sutra-ink)] hover:after:w-full",
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
          FEATURED / LATEST THREE
          This follows the visual rhythm of the supplied Clayo
          Blogs screenshot: three equal editorial cards.
      ===================================================== */}
      {hasResults && (
        <section className="border-b border-[var(--sutra-border)]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                  {submittedSearch ? "Search results" : "Latest from Sutra Health"}
                </p>

                <h2 className="mt-3 font-[var(--font-serif)] text-[34px] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[42px]">
                  {submittedSearch
                    ? `Articles matching “${submittedSearch}”`
                    : "Ideas for better everyday health."}
                </h2>
              </div>

              <span className="hidden text-[10px] uppercase tracking-[0.16em] text-[var(--sutra-muted)] sm:block">
                {filteredArticles.length} articles
              </span>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
  {featuredArticles.map((article) => (
    <article key={article.slug} className="group flex min-w-0 flex-col">
      <Link
        href={`/resources/articles/${article.slug}`}
        className="flex h-full flex-col"
      >
        {/* Same image size for every card */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="mt-5 flex min-h-[18px] flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--sutra-muted)]">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.type}</span>
          </div>

          {/* Same title area height */}
          <h3 className="mt-3 min-h-[60px] font-[var(--font-serif)] text-[24px] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[26px]">
            {article.title}
          </h3>

          {/* Same excerpt area height */}
          <p className="mt-3 min-h-[72px] line-clamp-3 text-[13px] leading-6 text-[var(--sutra-muted)]">
            {article.excerpt}
          </p>

          {/* Always aligned at bottom */}
          <div className="mt-auto flex items-center justify-between border-t border-[var(--sutra-border)] pt-4">
            <span className="text-[10px] text-[var(--sutra-muted)]">
              {article.readTime}
            </span>

            <span className="text-[12px] font-medium text-[var(--sutra-teal)] transition-transform group-hover:translate-x-1">
              Read article →
            </span>
          </div>
        </div>
      </Link>
    </article>
  ))}
</div>
          </div>
        </section>
      )}

      {/* =====================================================
          ALL ARTICLES
      ===================================================== */}
      <section id="article-results">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22">
          <div className="flex flex-col gap-4 border-b border-[var(--sutra-border-strong)] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                The Journal
              </p>

              <h2 className="mt-2 font-[var(--font-serif)] text-[34px] font-medium leading-tight tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[42px]">
                {submittedSearch ? "More search results" : "Explore all articles"}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] text-[var(--sutra-muted)]">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "article" : "articles"}
              </span>

              {(activeCategory !== "All" ||
                activeType !== "All" ||
                search ||
                submittedSearch) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="border-b border-[var(--sutra-teal)] pb-0.5 text-[10px] font-semibold text-[var(--sutra-teal)]"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {!hasResults && (
            <div className="border-b border-[var(--sutra-border-strong)] py-20 text-center">
              <p className="font-[var(--font-serif)] text-[30px] text-[var(--sutra-ink)]">
                No articles found.
              </p>

              <p className="mt-2 text-[13px] text-[var(--sutra-muted)]">
                Try another health question or browse a different topic.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-5 py-3 text-[11px] font-semibold text-white hover:bg-[var(--sutra-teal-hover)]"
              >
                View all articles
              </button>
            </div>
          )}

          {hasResults && (
            <div>
              {latestArticles.map((article) => (
                <article
                  key={article.slug}
                  className="group border-b border-[var(--sutra-border)] py-7 sm:py-8"
                >
                  <Link
                    href={`/resources/articles/${article.slug}`}
                    className="grid gap-6 sm:grid-cols-[190px_1fr] sm:items-center lg:grid-cols-[230px_1fr_auto] lg:gap-9"
                  >
                    <div className="relative aspect-[16/10] min-w-0 overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 230px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[var(--sutra-muted)]">
                        <span>{article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.type}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="mt-3 font-[var(--font-serif)] text-[25px] font-medium leading-[1.08] tracking-[-0.025em] text-[var(--sutra-ink)] transition-colors group-hover:text-[var(--sutra-teal)] sm:text-[29px]">
                        {article.title}
                      </h3>

                      <p className="mt-3 max-w-[680px] text-[13px] leading-6 text-[var(--sutra-muted)] sm:text-[14px] sm:leading-7">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-5 lg:block lg:text-right">
                      <p className="text-[10px] text-[var(--sutra-muted)]">
                        {article.date}
                      </p>

                      <span className="mt-3 inline-flex h-9 w-9 items-center justify-center border border-[var(--sutra-border-strong)] text-[13px] text-[var(--sutra-teal)] transition-colors group-hover:border-[var(--sutra-teal)]">
                        →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {visibleCount < filteredArticles.length - 3 && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((current) => current + 9)}
                className="border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)] px-7 py-3 text-[11px] font-semibold text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
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
      <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Explore by question
              </p>

              <h2 className="mt-4 max-w-[430px] font-[var(--font-serif)] text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[42px]">
                Start with what you're asking.
              </h2>

              <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                Find practical health information by starting with the question
                you already have.
              </p>
            </div>

            <div className="border-t border-[var(--sutra-border-strong)]">
              {questions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => {
                    const questionQuery = question.replace("How can I ", "");
                    setSearch(questionQuery);
                    setSubmittedSearch(questionQuery);
                    setActiveCategory("All");
                    setActiveType("All");
                    setVisibleCount(9);

                    window.setTimeout(() => {
                      document
                        .getElementById("article-results")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 50);
                  }}
                  className="group flex w-full items-center justify-between border-b border-[var(--sutra-border-strong)] py-5 text-left"
                >
                  <span className="font-[var(--font-serif)] text-[20px] leading-tight tracking-[-0.02em] text-[var(--sutra-ink)] sm:text-[23px]">
                    {question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="ml-6 text-[var(--sutra-teal)] transition-transform group-hover:translate-x-1"
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
          SUTRA CROSS-LINKS
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
                Sutra Health
              </p>

              <p className="mt-2 font-[var(--font-serif)] text-[27px] tracking-[-0.025em] text-[var(--sutra-ink)]">
                Explore how we approach health.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/what-we-do"
                className="border border-[var(--sutra-teal)] bg-[var(--sutra-teal)] px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)]"
              >
                What We Do →
              </Link>

              <Link
                href="/approach"
                className="border border-[var(--sutra-border-strong)] bg-[var(--sutra-white)] px-5 py-3 text-[11px] font-semibold text-[var(--sutra-ink)] transition-colors hover:border-[var(--sutra-teal)] hover:text-[var(--sutra-teal)]"
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
