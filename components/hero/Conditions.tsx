"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const conditions = [
  {
    number: "01",
    title: "High Blood Pressure",
    description:
      "Lifestyle practices that support healthier blood pressure habits.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.webp",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "Practical lifestyle and nutrition support for healthier metabolic habits.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.webp",
  },
  {
    number: "03",
    title: "Weight Management",
    description:
      "Sustainable changes around food, activity, sleep and everyday routines.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.webp",
  },
  {
    number: "04",
    title: "Digestive & Gut Health",
    description:
      "Lifestyle and nutrition support for healthier digestive habits and wellbeing.",
    href: "/conditions/digestive-gut-health",
    image: "/images/conditions/digestive-gut-health.webp",
  },
  {
    number: "05",
    title: "Arthritis & Joint Pain",
    description:
      "Adapted yoga and lifestyle practices to support mobility and everyday comfort.",
    href: "/conditions/arthritis-joint-pain",
    image: "/images/conditions/arthritis-joint-pain.webp",
  },
];

export default function Conditions() {
  const [active, setActive] = useState(0);

  const currentCondition = conditions[active];

  const previous = () => {
    setActive((current) => Math.max(0, current - 1));
  };

  const next = () => {
    setActive((current) =>
      Math.min(conditions.length - 1, current + 1),
    );
  };

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
              Our approach brings together lifestyle, nutrition and
              therapeutic yoga around your health needs, circumstances
              and goals.
            </p>
          </div>
        </div>

        {/* =========================================================
            DESKTOP / TABLET
            ========================================================= */}
        <div className="mt-10 hidden border-t border-[#202522]/12 sm:block sm:mt-12 lg:mt-14">
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
                  lg:grid-cols-[72px_minmax(280px,0.9fr)_minmax(320px,1fr)_44px]
                  lg:items-center lg:gap-10 lg:py-8
                "
              >
                {/* Small horizontal image */}
                <div
                  className="
                    relative h-[44px] w-[64px]
                    overflow-hidden
                    bg-[#E7EDE8]
                  "
                >
                  <img
                    src={condition.image}
                    alt=""
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

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

                {/* Arrow */}
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
              </div>
              
            </Link>
            
          ))}

     
        </div>

        

        {/* =========================================================
            MOBILE — ONE CONDITION AT A TIME
            ========================================================= */}
        <div className="mt-10 sm:hidden">

          {/* Card */}
          <Link
            href={currentCondition.href}
            className="
              group block
              border-t border-[#202522]/12
              border-b border-[#202522]/12
            "
          >
            <div className="py-7">

              {/* Small horizontal image */}
              <div className="relative h-[120px] w-full overflow-hidden bg-[#E7EDE8]">
                <img
                  src={currentCondition.image}
                  alt={currentCondition.title}
                  className="
                    h-full w-full
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* Content */}
              <div className="mt-6">

                <h3
                  className="
                    max-w-[330px]
                    font-sans text-[23px] font-medium
                    leading-[1.25]
                    tracking-[-0.015em]
                    text-[#202522]
                  "
                >
                  {currentCondition.title}
                </h3>

                <p
                  className="
                    mt-3 max-w-[340px]
                    font-sans text-[16px]
                    leading-[1.7]
                    text-[#4F5A54]
                  "
                >
                  {currentCondition.description}
                </p>

                {/* Explore */}
                <div
                  className="
                    mt-5 inline-flex items-center gap-2
                    font-sans text-[14px] font-medium
                    text-[#17413D]
                  "
                >
                  Explore

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Mobile controls */}
          <div className="mt-5 flex items-center justify-between">

            {/* Counter */}
            <p className="font-sans text-[12px] text-[#65736D]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(conditions.length).padStart(2, "0")}
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                disabled={active === 0}
                aria-label="Previous health area"
                className="
                  flex h-10 w-10 items-center justify-center
                  border border-[#202522]/15
                  text-[#17413D]
                  transition-colors duration-300
                  hover:bg-[#E7EDE8]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ArrowLeft
                  size={16}
                  strokeWidth={1.5}
                />
              </button>

              <button
                type="button"
                onClick={next}
                disabled={active === conditions.length - 1}
                aria-label="Next health area"
                className="
                  flex h-10 w-10 items-center justify-center
                  border border-[#202522]/15
                  text-[#17413D]
                  transition-colors duration-300
                  hover:bg-[#E7EDE8]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
              >
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#202522]/10 pt-6 sm:mt-10 sm:pt-7">
          <Link
            href="/conditions"
            className="
              group inline-flex items-center gap-2
              font-sans text-[14px] font-medium
              text-[#17413D]
              transition-colors duration-300
              hover:text-[#12332F]
            "
          >
            Explore all health areas

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>

        
      </div>
    </section>
  );
}