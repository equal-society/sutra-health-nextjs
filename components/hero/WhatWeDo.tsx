import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Evidence-informed support around nutrition, sleep, stress and everyday habits to help build healthier routines.",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "02",
    title: "Nutrition Counselling",
    description:
      "Personalised guidance on food and eating habits shaped around your health, needs and daily life.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga practices including asana, pranayama and relaxation, shaped around your health and ability.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "04",
    title: "Behaviour & Mind Practices",
    description:
      "Practical support for habits, stress, routines and behaviour changes that are easier to sustain over time.",
    href: "/what-we-do/breath-mindfulness",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          {/* Eyebrow */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298]"
              />

              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#4F5A54]">
                What we do
              </span>
            </div>
          </div>

          {/* Heading + Intro */}
          <div className="max-w-[720px]">
            <h2
              id="what-we-do-title"
              className="font-serif text-[36px] font-medium leading-[1.12] tracking-[-0.02em] text-[#202522] sm:text-[44px] lg:text-[54px]"
            >
              A practical approach
              <br className="hidden sm:block" />
              to better health.
            </h2>

            <p className="mt-6 max-w-[640px] font-sans text-[17px] leading-[1.72] text-[#4F5A54] sm:mt-7 sm:text-[18px]">
              Sutra Health brings together different areas of lifestyle care
              to help you make healthier choices that fit your health, needs
              and everyday life.
            </p>
          </div>
        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <div className="mt-12 border-t border-[#202522]/12 sm:mt-14 lg:mt-16">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group block border-b border-[#202522]/12 transition-colors duration-300 hover:bg-[#F7F5EF]"
            >
              <div className="grid gap-5 py-8 sm:py-9 lg:grid-cols-[60px_minmax(240px,0.9fr)_minmax(300px,1fr)_44px] lg:items-center lg:gap-10 lg:py-10">
                {/* Number */}
                <span className="font-sans text-[12px] font-medium tracking-[0.08em] text-[#65736D]">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="font-sans text-[22px] font-medium leading-[1.3] tracking-[-0.01em] text-[#202522] transition-colors duration-300 group-hover:text-[#17413D] sm:text-[24px] lg:text-[27px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="max-w-[500px] font-sans text-[16px] leading-[1.72] text-[#4F5A54] sm:text-[17px]">
                  {service.description}
                </p>

                {/* Desktop Arrow */}
                <span
                  aria-hidden="true"
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#202522]/12 text-[#17413D] transition-all duration-300 group-hover:border-[#17413D]/30 group-hover:bg-[#E7EDE8] lg:flex lg:justify-self-end"
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

                {/* Mobile Explore */}
                <span className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#17413D] lg:hidden">
                  Explore
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            SUPPORTING COPY
        ====================================================== */}
        <div className="mt-10 sm:mt-12">
          <p className="max-w-[640px] font-sans text-[16px] leading-[1.72] text-[#4F5A54]">
            Our approach is personalised to your health, circumstances and
            everyday life.
          </p>
        </div>
      </div>
    </section>
  );
}