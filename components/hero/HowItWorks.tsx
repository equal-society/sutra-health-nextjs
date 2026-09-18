import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with your health, concerns, goals and everyday routine.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Look at lifestyle factors that may be relevant to your health.",
  },
  {
    number: "03",
    title: "Personalise",
    description:
      "Build practical recommendations around your needs and ability.",
  },
  {
    number: "04",
    title: "Practise",
    description:
      "Introduce changes through nutrition, yoga and lifestyle practices.",
  },
  {
    number: "05",
    title: "Sustain",
    description:
      "Focus on habits that can work in everyday life over time.",
  },
  {
    number: "06",
    title: "Adapt",
    description:
      "Adjust the approach as your needs and circumstances change.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="our-approach"
      aria-labelledby="our-approach-title"
      className="bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-18 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* =====================================================
            INTRO
        ====================================================== */}
        <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          {/* Eyebrow */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Our approach
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-[720px]">
            <h2
              id="our-approach-title"
              className="font-serif text-[36px] font-medium leading-[1.1] tracking-[-0.025em] text-[#202522] sm:text-[44px] lg:text-[52px]"
            >
              Understanding your health
              <br className="hidden sm:block" />
              comes before changing it.
            </h2>

            <p className="mt-5 max-w-[620px] font-sans text-[17px] leading-[1.7] text-[#4F5A54] sm:mt-6 sm:text-[18px]">
              We look at the everyday factors that influence health and build
              practical changes around your needs, circumstances and goals.
            </p>

            <Link
              href="/approach"
              className="group mt-5 inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#17413D] transition-colors duration-300 hover:text-[#12332F]"
            >
              Explore our approach

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            SIX STEPS
        ====================================================== */}
        <div className="mt-10 border-t border-[#202522]/12 sm:mt-12 lg:mt-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-3 border-b border-[#202522]/12 py-6 sm:py-7 lg:grid-cols-[60px_0.65fr_1fr] lg:items-center lg:gap-10 lg:py-7"
            >
              {/* Number */}
              <span className="font-sans text-[12px] font-medium tracking-[0.08em] text-[#65736D]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-sans text-[21px] font-medium leading-[1.3] tracking-[-0.01em] text-[#202522] sm:text-[22px] lg:text-[24px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-[560px] font-sans text-[16px] leading-[1.65] text-[#4F5A54] sm:text-[17px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}