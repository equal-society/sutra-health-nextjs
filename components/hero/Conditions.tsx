import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const conditions = [
  {
    number: "01",
    title: "High Blood Pressure",
    description:
      "Lifestyle practices that support healthier blood pressure habits.",
    href: "/conditions/high-blood-pressure",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "Practical lifestyle and nutrition support for healthier metabolic habits.",
    href: "/conditions/metabolic-health",
  },
  {
    number: "03",
    title: "Weight Management",
    description:
      "Sustainable changes around food, activity, sleep and everyday routines.",
    href: "/conditions/weight-management",
  },
  {
    number: "04",
    title: "Digestive & Gut Health",
    description:
      "Lifestyle and nutrition support for healthier digestive habits and wellbeing.",
    href: "/conditions/digestive-gut-health",
  },
  {
    number: "05",
    title: "Arthritis & Joint Pain",
    description:
      "Adapted yoga and lifestyle practices to support mobility and everyday comfort.",
    href: "/conditions/arthritis-joint-pain",
  },
  
];

export default function Conditions() {
  return (
    <section
      id="conditions"
      aria-labelledby="conditions-title"
      className="bg-[#F7F5EF]"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-px w-8 bg-[#91A298]"
              />

              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                Health areas
              </span>
            </div>
          </div>

          <div className="max-w-[760px]">
            <h2
              id="conditions-title"
              className="
                font-serif text-[36px] font-medium leading-[1.1]
                tracking-[-0.025em] text-[#202522]
                sm:text-[44px] lg:text-[52px]
              "
            >
              Support for the health
              <br className="hidden sm:block" />
              concerns that matter to you.
            </h2>

            <p className="mt-5 max-w-[650px] font-sans text-[16px] leading-[1.7] text-[#4F5A54] sm:text-[17px]">
              Our approach brings together lifestyle, nutrition and therapeutic
              yoga around your health needs, circumstances and goals.
            </p>
          </div>
        </div>

        {/* Conditions list */}
        <div className="mt-10 border-t border-[#202522]/12 sm:mt-12 lg:mt-14">
          {conditions.map((condition) => (
            <Link
              key={condition.number}
              href={condition.href}
              className="
                group block border-b border-[#202522]/12
                transition-colors duration-300
                hover:bg-white
              "
            >
              <div
                className="
                  grid gap-4 py-7
                  sm:py-8
                  lg:grid-cols-[60px_minmax(280px,0.9fr)_minmax(320px,1fr)_44px]
                  lg:items-center lg:gap-10 lg:py-8
                "
              >
                {/* Number */}
                <span
                  className="
                    font-sans text-[12px] font-medium
                    tracking-[0.08em] text-[#65736D]
                  "
                >
                  {condition.number}
                </span>

                {/* Title */}
                <h3
                  className="
                    font-sans text-[21px] font-medium leading-[1.3]
                    tracking-[-0.01em] text-[#202522]
                    transition-colors duration-300
                    group-hover:text-[#17413D]
                    sm:text-[23px] lg:text-[25px]
                  "
                >
                  {condition.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    max-w-[520px] font-sans text-[16px]
                    leading-[1.65] text-[#4F5A54]
                    sm:text-[17px]
                  "
                >
                  {condition.description}
                </p>

                {/* Desktop arrow */}
                <span
                  aria-hidden
                  className="
                    hidden h-10 w-10 items-center justify-center
                    rounded-full border border-[#202522]/12
                    text-[#17413D]
                    transition-all duration-300
                    group-hover:border-[#17413D]/30
                    group-hover:bg-[#E7EDE8]
                    lg:flex lg:justify-self-end
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>

                {/* Mobile link */}
                <span
                  className="
                    inline-flex items-center gap-2
                    font-sans text-[14px] font-medium
                    text-[#17413D]
                    lg:hidden
                  "
                >
                  Explore
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[620px] font-sans text-[14px] leading-[1.65] text-[#4F5A54] sm:text-[15px]">
            Explore an area of health or start with a broader conversation
            about what you are experiencing.
          </p>

          <Link
            href="/book-appointment"
            className="
              group inline-flex w-fit items-center gap-2
              font-sans text-[14px] font-medium
              text-[#17413D]
              transition-colors duration-300
              hover:text-[#12332F]
            "
          >
            Talk to our team
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