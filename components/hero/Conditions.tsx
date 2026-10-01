import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

export default function Conditions() {
  const conditions = getAllConditions();

  return (
    <section
      id="conditions"
      aria-labelledby="conditions-title"
      className="bg-[var(--sutra-white)]"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* SECTION INTRO */}
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[12px]">
                Health concerns
              </p>
            </div>

            <div className="max-w-[760px]">
              <h2
                id="conditions-title"
                className="
                  font-serif
                  text-[34px]
                  font-medium
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-[var(--sutra-ink)]
                  sm:text-[42px]
                  lg:text-[50px]
                "
              >
                Could Sutra Health help with what you&apos;re experiencing?
              </h2>

              <p className="mt-5 max-w-[680px] font-sans text-[15px] leading-7 text-[var(--sutra-muted)] sm:text-[17px] sm:leading-8">
                Explore the health concerns we cover and see how lifestyle,
                nutrition, movement and other supportive practices may fit
                alongside appropriate medical care.
              </p>
            </div>
          </div>

          {/* CONDITION LIST */}
          <div className="mt-10 border-t border-[var(--sutra-border)] sm:mt-12">
            <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-2">
              {conditions.map((condition, index) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="
                    group
                    flex
                    min-h-[116px]
                    items-start
                    justify-between
                    gap-6
                    border-b
                    border-[var(--sutra-border)]
                    py-6
                    transition-colors
                    duration-300
                    hover:text-[var(--sutra-teal)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--sutra-teal)]
                    focus-visible:ring-offset-4
                  "
                >
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-sans text-[10px] font-medium tracking-[0.12em] text-[var(--sutra-sage)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-sans text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[var(--sutra-ink)] transition-colors duration-300 group-hover:text-[var(--sutra-teal)] sm:text-[19px]">
                        {condition.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-[500px] pl-[30px] font-sans text-[13px] leading-6 text-[var(--sutra-muted)] sm:text-[14px]">
                      {condition.shortDescription}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      mt-0.5
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      text-[var(--sutra-teal)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-0.5
                    "
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* HUB LINK */}
          <div className="mt-7">
            <Link
              href="/conditions"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-sans
                text-[14px]
                font-medium
                text-[var(--sutra-teal)]
                transition-colors
                duration-300
                hover:text-[var(--sutra-teal-hover)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--sutra-teal)]
                focus-visible:ring-offset-4
              "
            >
              Explore all health conditions

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
