import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { articles } from "@/data/articles";

export default function Resources() {
  const latestArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 2);

  return (
    <section
      aria-labelledby="resources-title"
      className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-6 border-b border-[#202522]/12 pb-7 sm:gap-8 sm:pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Health Journal
              </p>
            </div>

            <h2
              id="resources-title"
              className="mt-5 max-w-[700px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[50px] lg:text-[58px]"
            >
              Better health starts with{" "}
              <span className="font-normal italic text-[#17413D]">
                better understanding.
              </span>
            </h2>
          </div>

          <Link
            href="/resources/articles"
            className="group hidden items-center gap-3 border-b border-[#17413D]/20 pb-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#17413D] transition-colors duration-300 hover:border-[#17413D] sm:inline-flex"
          >
            View all articles
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Desktop articles */}
        <div className="mt-10 hidden sm:grid sm:grid-cols-2 sm:divide-x sm:divide-[#202522]/12 lg:mt-12">
          {latestArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/resources/articles/${article.slug}`}
              className={`group block ${
                index === 0
                  ? "sm:pr-7 lg:pr-10"
                  : "sm:pl-7 lg:pl-10"
              }`}
            >
              <article>
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E7EDE8]">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 1023px) 50vw, 600px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#E7EDE8]" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-5">
                  <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#71817B]">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-3 max-w-[540px] font-serif text-[25px] leading-[1.1] tracking-[-0.025em] text-[#17413D] transition-colors duration-300 group-hover:text-[#202522] sm:text-[27px] lg:text-[30px]">
                    {article.title}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-2 border-b border-[#17413D]/20 pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#202522]">
                    Read article
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile swipe */}
        <div className="mt-9 sm:hidden">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Latest health articles"
          >
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/articles/${article.slug}`}
                className="group w-[86vw] max-w-[360px] shrink-0 snap-center"
              >
                <article>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EDE8]">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="86vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#E7EDE8]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-5">
                    <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#71817B]">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-3 font-serif text-[25px] leading-[1.1] tracking-[-0.025em] text-[#17413D]">
                      {article.title}
                    </h3>

                    <span className="mt-4 inline-flex items-center gap-2 border-b border-[#17413D]/20 pb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#202522]">
                      Read article
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile navigation hint */}
          <div className="mt-4 flex items-center justify-between">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[#202522]/10"
            />

            <span className="px-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#65736D]">
              Swipe
            </span>

            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[#202522]/10"
            />
          </div>

          <Link
            href="/resources/articles"
            className="group mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#17413D]"
          >
            View all articles
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
