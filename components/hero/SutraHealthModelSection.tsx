import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

const principles = [
  {
    number: "01",
    title: "Integrated Care",
    text: "Medical care, nutrition, Yoga and lifestyle guidance work together.",
  },
  {
    number: "02",
    title: "Sustainable Change",
    text: "Build healthier habits through practical steps that fit your life.",
  },
  {
    number: "03",
    title: "Personalised Support",
    text: "Care is shaped around your health, needs and personal goals.",
  },
];

export default function SutraHealthModelSection() {
  return (
    <section
      className="bg-[#F7F5EF]"
      aria-labelledby="model-heading"
    >
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Heading */}
          <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-7 sm:pb-9 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[850px]">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
                  Our Approach
                </p>

                <span
                  className="h-px w-9 bg-[#C8BDA7]"
                  aria-hidden="true"
                />
              </div>

              <h2
                id="model-heading"
                className="mt-4 font-serif text-[36px] leading-[1.06] tracking-[-0.035em] text-[#202522] sm:text-[48px] lg:text-[60px]"
              >
                A more connected approach to your health.
              </h2>
            </div>

            <Link
              href="/approach"
              className="group inline-flex min-h-10 w-fit items-center gap-2 text-[13px] font-semibold text-[#17413D] transition-colors hover:text-[#12332F]"
            >
              Explore our approach
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#65736D] sm:text-[16px] sm:leading-8">
            We bring medical care and lifestyle support together to help you
            understand your health and make changes that work in everyday life.
          </p>

          {/* Principles */}
          <div className="mt-8 grid gap-4 sm:mt-9 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="group border border-[#202522]/10 bg-white p-5 transition-colors duration-300 hover:border-[#17413D]/25 sm:p-6 lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-[#91A298]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#17413D] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 font-serif text-[25px] leading-tight tracking-[-0.025em] text-[#202522] sm:text-[28px]">
                  {item.title}
                </h3>

                <span
                  className="mt-4 block h-px w-9 bg-[#C8BDA7]"
                  aria-hidden="true"
                />

                <p className="mt-4 max-w-[320px] text-[14px] leading-6 text-[#65736D] sm:text-[15px]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}