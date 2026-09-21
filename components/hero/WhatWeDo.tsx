import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Physician Consultation",
    description:
      "Doctor-led consultation to understand your health and discuss appropriate next steps.",
    href: "/book-appointment",
  },
  {
    number: "02",
    title: "Lifestyle Medicine",
    description:
      "Practical support around nutrition, sleep, stress and everyday habits.",
    href: "/what-we-do/lifestyle",
  },
  {
    number: "03",
    title: "Nutrition",
    description:
      "Personalised guidance around food and healthier eating habits.",
    href: "/what-we-do/nutrition",
  },
  {
    number: "04",
    title: "Therapeutic Yoga",
    description:
      "Adapted yoga practices shaped around your health and ability.",
    href: "/what-we-do/therapeutic-yoga",
  },
  {
    number: "05",
    title: "Behaviour, Stress & Mind",
    description:
      "Practical support for habits, stress and sustainable behaviour change.",
    href: "/what-we-do/behaviour-stress-mind",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
        {/* Introduction */}
        <div className="max-w-[760px]">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
            What we do
          </p>

          <h2
            id="what-we-do-title"
            className="
              mt-4
              font-serif
              text-[36px]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-[#202522]
              sm:text-[44px]
              lg:text-[52px]
            "
          >
            Care that brings different parts of your health together.
          </h2>

          <p className="mt-5 max-w-[650px] font-sans text-[16px] leading-[1.65] text-[#65736D] sm:text-[17px]">
            Our care combines medical guidance with practical support for the
            everyday factors that influence your health.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 border-t border-[#202522]/10">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="
                group block
                border-b border-[#202522]/10
                transition-colors duration-300
                hover:bg-[#F7F5EF]
                focus-visible:bg-[#F7F5EF]
                focus-visible:outline-none
              "
            >
              <div
                className="
                  grid gap-3 py-6
                  sm:grid-cols-[52px_minmax(220px,0.9fr)_minmax(300px,1fr)]
                  sm:items-center
                  sm:gap-6
                  lg:grid-cols-[60px_minmax(240px,0.9fr)_minmax(320px,1fr)_40px]
                  lg:gap-8
                "
              >
                <span className="font-sans text-[11px] font-medium tracking-[0.08em] text-[#91A298]">
                  {service.number}
                </span>

                <h3
                  className="
                    font-sans
                    text-[20px]
                    font-medium
                    leading-[1.3]
                    tracking-[-0.01em]
                    text-[#202522]
                    transition-colors duration-300
                    group-hover:text-[#17413D]
                    sm:text-[21px]
                  "
                >
                  {service.title}
                </h3>

                <p className="max-w-[500px] font-sans text-[14px] leading-[1.55] text-[#65736D] sm:text-[15px]">
                  {service.description}
                </p>

                <span
                  aria-hidden="true"
                  className="
                    hidden h-9 w-9 items-center justify-center
                    text-[#17413D]
                    transition-transform duration-300
                    group-hover:translate-x-1
                    lg:flex lg:justify-self-end
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </span>

                <span
                  className="
                    inline-flex items-center gap-2
                    font-sans text-[13px] font-medium text-[#17413D]
                    sm:hidden
                  "
                >
                  Explore
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All services */}
        <div className="mt-6">
          <Link
            href="/what-we-do"
            className="
              group inline-flex items-center gap-2
              font-sans text-[14px] font-medium text-[#17413D]
              transition-colors duration-300 hover:text-[#12332F]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#17413D]
              focus-visible:ring-offset-4
            "
          >
            Explore all services
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
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
