import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Integrative care",
    description:
      "Lifestyle, nutrition and yoga brought together around your health and everyday life.",
  },
  {
    number: "02",
    title: "Personalised support",
    description:
      "Practices and recommendations shaped around your needs, circumstances and ability.",
  },
  {
    number: "03",
    title: "Evidence-informed",
    description:
      "An approach grounded in health science while keeping care practical and understandable.",
  },
];

export default function WhySutra() {
  return (
    <section
      aria-labelledby="why-sutra-title"
      className="bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

          {/* Label */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 bg-[#91A298]"
              />

              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Why Sutra
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="max-w-[760px]">
            <h2
              id="why-sutra-title"
              className="
                font-serif text-[36px] font-medium leading-[1.1]
                tracking-[-0.025em] text-[#202522]
                sm:text-[44px]
                lg:text-[52px]
              "
            >
              A whole-person approach
              <br className="hidden sm:block" />
              to everyday health.
            </h2>

            <p className="mt-5 max-w-[640px] font-sans text-[16px] leading-[1.72] text-[#4F5A54] sm:text-[17px]">
              We bring together evidence-informed lifestyle practices,
              nutrition and yoga therapy to support healthier habits and
              long-term wellbeing.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-12 border-t border-[#202522]/10 sm:mt-14">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="
                grid gap-4
                border-b border-[#202522]/10
                py-7
                sm:py-8
                lg:grid-cols-[60px_0.8fr_1.2fr]
                lg:items-center
                lg:gap-10
                lg:py-9
              "
            >
              <span className="font-sans text-[12px] font-medium tracking-[0.08em] text-[#65736D]">
                {reason.number}
              </span>

              <h3 className="font-sans text-[21px] font-medium leading-[1.3] tracking-[-0.01em] text-[#202522] sm:text-[23px] lg:text-[25px]">
                {reason.title}
              </h3>

              <p className="max-w-[560px] font-sans text-[16px] leading-[1.7] text-[#4F5A54] sm:text-[17px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Approach link */}
        <div className="mt-8">
          <Link
            href="/approach"
            className="
              group inline-flex items-center gap-2
              font-sans text-[14px] font-medium
              text-[#17413D]
              transition-colors duration-300
              hover:text-[#12332F]
            "
          >
            Explore our approach

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>

      </div>
    </section>
  );
}