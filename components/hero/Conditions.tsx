
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  {
    number: "01",
    title: "Weight Management",
    description:
      "A practical approach built around food and everyday habits you can realistically keep.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.webp",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "A closer look at food, movement and daily routines that may support metabolic health.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.webp",
  },
  {
    number: "03",
    title: "High Blood Pressure",
    description:
      "Explore lifestyle changes that may support healthier everyday routines.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.webp",
  },
  {
    number: "04",
    title: "Arthritis & Joint Pain",
    description:
      "Movement-based practices adapted around your body and everyday mobility.",
    href: "/conditions/arthritis-joint-pain",
    image: "/images/conditions/arthritis-joint-pain.webp",
  },
];

export default function Conditions() {
  return (
    <section
      aria-labelledby="conditions-heading"
      className="bg-[#F7F5EF] py-20 sm:py-24 lg:py-32"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[11px]">
                Health concerns
              </p>
            </div>

            <h2
              id="conditions-heading"
              className="mt-5 max-w-[650px] font-serif text-[42px] font-medium leading-[1.02] tracking-[-0.045em] text-[#202522] sm:text-[52px] lg:text-[62px]"
            >
              Health concerns where lifestyle can{" "}
              <span className="font-normal italic text-[#17413D]">
                play a role.
              </span>
            </h2>
          </div>

          <p className="max-w-[560px] text-[16px] leading-7 text-[#65736D] sm:text-[18px] sm:leading-8 lg:pb-1">
            Explore some of the health concerns people come to Sutra with, and
            learn how lifestyle-focused support may fit into their care.
          </p>
        </div>

        {/* Desktop editorial list */}
        <div className="mt-14 hidden border-t border-[#202522]/10 sm:block lg:mt-20">
          {conditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="group grid gap-6 border-b border-[#202522]/10 py-7 transition-colors duration-300 hover:bg-[#E7EDE8]/35 sm:grid-cols-[48px_170px_1fr_auto] sm:items-center sm:gap-8 sm:px-3 lg:grid-cols-[58px_220px_1fr_auto] lg:gap-10 lg:py-8"
            >
              <span className="font-serif text-[19px] text-[#91A298]">
                {condition.number}
              </span>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[#E7EDE8]">
                <Image
                  src={condition.image}
                  alt={`${condition.title} at Sutra Health`}
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="max-w-[620px]">
                <h3 className="font-serif text-[28px] leading-tight tracking-[-0.025em] text-[#17413D] sm:text-[30px] lg:text-[34px]">
                  {condition.title}
                </h3>

                <p className="mt-3 max-w-[570px] text-[15px] leading-7 text-[#65736D] sm:text-[16px]">
                  {condition.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden text-[21px] text-[#17413D] transition-transform duration-300 group-hover:translate-x-1 sm:block"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile premium swipe */}
        <div className="mt-10 sm:hidden">
          <div
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Health concerns supported by Sutra Health"
          >
            {conditions.map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="group w-[86vw] max-w-[360px] shrink-0 snap-center"
              >
                <article className="overflow-hidden border border-[#202522]/10 bg-[#FFFFFF]">
                  {/* Large visual */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E7EDE8]">
                    <Image
                      src={condition.image}
                      alt={`${condition.title} at Sutra Health`}
                      fill
                      sizes="86vw"
                      className="object-cover transition-transform duration-700 ease-out group-active:scale-[1.02]"
                    />
                  </div>

                  {/* Editorial content */}
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-[15px] text-[#91A298]">
                        {condition.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/15 text-[16px] text-[#17413D]"
                      >
                        →
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-[300px] font-serif text-[31px] leading-[1.02] tracking-[-0.03em] text-[#17413D]">
                      {condition.title}
                    </h3>

                    <p className="mt-3 max-w-[310px] text-[15px] leading-7 text-[#65736D]">
                      {condition.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {conditions.map((condition, index) => (
                <span
                  key={condition.number}
                  className={`h-1.5 rounded-full ${
                    index === 0
                      ? "w-6 bg-[#17413D]"
                      : "w-1.5 bg-[#91A298]/60"
                  }`}
                />
              ))}
            </div>

            <Link
              href="/conditions"
              className="group inline-flex items-center gap-2 border-b border-[#17413D]/20 pb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#17413D]"
            >
              All conditions
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop all conditions */}
        <div className="mt-9 hidden justify-end sm:flex">
          <Link
            href="/conditions"
            className="group inline-flex items-center gap-3 border-b border-[#17413D]/25 pb-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#17413D] transition-colors duration-300 hover:border-[#17413D] sm:text-[13px]"
          >
            Explore all conditions
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
