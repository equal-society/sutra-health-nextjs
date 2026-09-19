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
      className="bg-[#F7F5EF]"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-6 border-b border-[#202522]/10 pb-7 sm:gap-8 sm:pb-8 lg:grid-cols-[1fr_auto] lg:items-end py-4">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                Health Journal
              </p>
            </div>

            <h2
              id="resources-title"
              className="
                mt-5
                font-serif
                text-[36px]
                font-medium
                leading-[1.1]
                tracking-[-0.025em]
                text-[#202522]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              Better health starts with{" "}
              <span className="italic text-[#17413D]">
                better understanding.
              </span>
            </h2>
          </div>

          {/* Desktop link */}
          <Link
            href="/resources/articles"
            className="
              group
              hidden
              items-center
              gap-2
              font-sans
              text-[14px]
              font-medium
              text-[#17413D]
              transition-colors
              duration-300
              hover:text-[#12332F]
              sm:inline-flex
            "
          >
            View all articles
            <span
              aria-hidden="true"
              className="text-[17px] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Articles */}
        <div className="mt-10 sm:mt-12">
          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2">
            {latestArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/resources/articles/${article.slug}`}
                className={`
                  group
                  ${
                    index === 0
                      ? "border-r border-[#202522]/10 pr-7 lg:pr-10"
                      : "pl-7 lg:pl-10"
                  }
                `}
              >
                <article>
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E7EDE8]">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 1023px) 50vw, 560px"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.025]
                        "
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#E7EDE8]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-5">
                    <div className="flex flex-wrap items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.13em] text-[#65736D]">
                      <span>{article.category}</span>

                      <span aria-hidden="true">·</span>

                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      className="
                        mt-3
                        max-w-[560px]
                        font-serif
                        text-[24px]
                        font-medium
                        leading-[1.15]
                        tracking-[-0.015em]
                        text-[#17413D]
                        transition-colors
                        duration-300
                        group-hover:text-[#202522]
                        sm:text-[26px]
                        lg:text-[29px]
                      "
                    >
                      {article.title}
                    </h3>

                    <span
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        border-b
                        border-[#17413D]/20
                        pb-1
                        font-sans
                        text-[12px]
                        font-medium
                        text-[#202522]
                        transition-colors
                        duration-300
                        group-hover:border-[#17413D]
                      "
                    >
                      Read article

                      <span
                        aria-hidden="true"
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <div className="sm:hidden">
            <div
              className="
                -mx-2
                flex
                snap-x
                snap-mandatory
                gap-4
                overflow-x-auto
                px-6
                pb-2
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
              aria-label="Latest health articles"
            >
              {latestArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/articles/${article.slug}`}
                  className="
                    group
                    w-[84vw]
                    max-w-[350px]
                    shrink-0
                    snap-start
                  "
                >
                  <article>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#E7EDE8]">
                      {article.image ? (
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="84vw"
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.025]
                          "
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#E7EDE8]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-5">
                      <div className="flex flex-wrap items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.13em] text-[#65736D]">
                        <span>{article.category}</span>

                        <span aria-hidden="true">·</span>

                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        className="
                          mt-3
                          font-serif
                          text-[25px]
                          font-medium
                          leading-[1.12]
                          tracking-[-0.015em]
                          text-[#17413D]
                        "
                      >
                        {article.title}
                      </h3>

                      <span
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-2
                          border-b
                          border-[#17413D]/20
                          pb-1
                          font-sans
                          text-[12px]
                          font-medium
                          text-[#202522]
                        "
                      >
                        Read article
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Mobile article link */}
            <Link
              href="/resources/articles"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                font-sans
                text-[14px]
                font-medium
                text-[#17413D]
              "
            >
              View all articles

              <span
                aria-hidden="true"
                className="text-[17px] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}