"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const conditions = [
  {
    number: "01",
    title: "Diabetes & Blood Sugar",
    description:
      "Support for blood sugar and healthier everyday habits alongside medical care.",
    href: "/conditions/metabolic-health",
  },
  {
    number: "02",
    title: "High Blood Pressure",
    description:
      "Practical support around food, movement, sleep and stress alongside appropriate care.",
    href: "/conditions/high-blood-pressure",
  },
  {
    number: "03",
    title: "Weight Management",
    description:
      "Support for sustainable changes around food, activity, sleep and daily routines.",
    href: "/conditions/weight-management",
  },
  {
    number: "04",
    title: "Arthritis & Joint Pain",
    description:
      "Support for movement, daily habits and living well with joint pain.",
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
        <div className="max-w-[760px]">
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
            What are you dealing with?
          </p>

          <h2
            id="conditions-title"
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
            Support for the health concerns that affect everyday life.
          </h2>

          <p className="mt-5 max-w-[650px] font-sans text-[16px] leading-[1.7] text-[#65736D] sm:text-[17px]">
            Explore our approach to common long-term and recurring health
            concerns, alongside appropriate medical care.
          </p>
        </div>

        <div className="mt-10 border-t border-[#202522]/10 sm:mt-12">
          <div className="grid sm:grid-cols-2 sm:gap-x-10">
            {conditions.map((condition) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="
                  group flex min-h-[150px] items-start justify-between
                  gap-6 border-b border-[#202522]/10 py-7
                  transition-colors duration-300
                  hover:text-[#17413D]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#17413D]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#F7F5EF]
                "
              >
                <div>
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#91A298]">
                    {condition.number}
                  </p>

                  <h3 className="mt-2 font-sans text-[20px] font-medium leading-[1.3] tracking-[-0.01em] text-[#202522] sm:text-[21px]">
                    {condition.title}
                  </h3>

                  <p className="mt-2 max-w-[390px] font-sans text-[14px] leading-[1.65] text-[#65736D]">
                    {condition.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    mt-1 flex h-8 w-8 shrink-0 items-center justify-center
                    text-[#17413D]
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <Link
            href="/conditions"
            className="
              group inline-flex items-center gap-2
              font-sans text-[14px] font-medium text-[#17413D]
              transition-colors duration-300 hover:text-[#12332F]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#17413D]
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[#F7F5EF]
            "
          >
            Explore all conditions
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
