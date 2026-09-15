import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { articles } from "@/data/articles";

export default function Resources() {
  const latestArticles = [...articles]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 2);

  return (
    <section
      aria-labelledby="resources-title"
      className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="flex items-end justify-between border-b border-[#202522]/10 pb-6 sm:pb-7">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[10px]">
                Health Journal
              </p>
            </div>

            <h2
              id="resources-title"
              className="mt-4 max-w-[760px] font-serif text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#202522] sm:text-[46px] lg:text-[54px]"
            >
              Better health,{" "}
              <span className="italic font-normal text-[#17413D]">
                better understanding.
              </span>
            </h2>
          </div>

          <Link
            href="/resources/articles"
            className="group hidden shrink-0 items-center gap-2 pb-1 text-[11px] font-semibold text-[#17413D] sm:inline-flex"
          >
            View all
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Latest articles */}
        <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-[#202522]/10">
          {latestArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/resources/articles/${article.slug}`}
              className={`group py-6 sm:py-7 ${
                index === 0 ? "sm:pr-7 lg:pr-9" : "sm:pl-7 lg:pl-9"
              }`}
            >
              <article>
                <div className="grid grid-cols-[120px_1fr] gap-5 sm:grid-cols-[135px_1fr] lg:grid-cols-[155px_1fr] lg:gap-6">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-[#E2E8E0]">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 639px) 120px, (max-width: 1023px) 135px, 155px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#DDE5DD]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 self-center">
                    <div className="flex flex-wrap items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#71817B]">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-[21px] leading-[1.08] tracking-[-0.025em] text-[#17413D] sm:text-[22px] lg:text-[24px]">
                      {article.title}
                    </h3>

                    <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold text-[#202522]">
                      Read article
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile link */}
        <div className="border-t border-[#202522]/10 pt-5 sm:hidden">
          <Link
            href="/resources/articles"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold text-[#17413D]"
          >
            View all resources
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