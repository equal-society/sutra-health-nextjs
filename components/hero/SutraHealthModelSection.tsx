import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
      {children}
    </p>
  );
}

const principles = [
  {
    number: "01",
    title: "Integration",
    text: "Relevant clinical, lifestyle, nutrition, Yoga and behaviour support can be brought together around the person's needs.",
  },
  {
    number: "02",
    title: "Motivation",
    text: "Understanding why a change matters can make it easier to turn information into action.",
  },
  {
    number: "03",
    title: "Personalisation",
    text: "Support is shaped around health, circumstances, preferences and goals rather than a fixed formula.",
  },
];

export default function SutraHealthModelSection() {
  return (
    <section
      className="overflow-hidden bg-[#F7F5EF]"
      aria-labelledby="model-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-15 lg:px-12 lg:py-15">

        {/* Heading */}
        <div className="flex flex-col gap-5 border-b border-[#202522]/10 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[780px]">
            <div className="flex items-center gap-3">
              <Eyebrow>05 · The Sutra Health model</Eyebrow>
              <span
                className="h-px w-8 bg-[#C8BDA7] sm:w-10"
                aria-hidden="true"
              />
            </div>

            <h2
              id="model-heading"
              className="mt-4 font-serif text-[38px] leading-[1.03] tracking-[-0.035em] text-[#202522] sm:mt-5 sm:text-[52px] lg:text-[62px]"
            >
              What makes the Sutra Health model different?
            </h2>
          </div>

          <Link
            href="/approach"
            className="group inline-flex min-h-11 w-fit items-center border border-[#17413D]/20 px-5 py-2.5 text-[13px] font-semibold text-[#17413D] transition-colors hover:border-[#17413D] hover:bg-[#17413D] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17413D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5EF]"
          >
            Explore the full approach
            <ArrowUpRight
              size={15}
              className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <p className="mt-6 max-w-[760px] text-[15px] leading-7 text-[#65736D] sm:mt-7 sm:text-[17px] sm:leading-8">
          Sutra Health brings relevant support together, helps people find
          motivation for change and adapts the work to the person rather than
          relying on a one-size-fits-all plan.
        </p>

        {/* Three horizontal cards */}
        <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-3 md:gap-4">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-[1.5rem] border border-[#202522]/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:p-8"
            >
              {/* Top line */}
              <div className="flex items-start justify-between">
                <span className="font-serif text-[30px] leading-none text-[#17413D] sm:text-[36px]">
                  {item.number}
                </span>

                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17413D]/15 text-[#17413D] transition-all duration-300 group-hover:bg-[#17413D] group-hover:text-white"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={15} />
                </span>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-[29px] leading-none tracking-[-0.025em] text-[#202522] sm:text-[34px]">
                  {item.title}
                </h3>

                <span
                  className="mt-5 block h-px w-10 bg-[#C8BDA7] transition-all duration-300 group-hover:w-16"
                  aria-hidden="true"
                />

                <p className="mt-5 text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}