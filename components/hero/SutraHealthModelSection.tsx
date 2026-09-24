import Link from "next/link";

const model = [
  [
    "01",
    "Integration",
    "Your health rarely fits into one category. We bring relevant forms of support together rather than treating each area in isolation.",
  ],
  [
    "02",
    "Motivation",
    "We help you understand why a change matters and find realistic ways to make it part of everyday life.",
  ],
  [
    "03",
    "Personalisation",
    "Support is shaped around each person's health, circumstances, preferences and goals rather than following a one-size-fits-all plan.",
  ],
] as const;

export default function SutraHealthModelSection() {
  return (
    <section className="border-b border-[#202522]/10 bg-white" aria-labelledby="model-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
            05 · The Sutra Health approach
          </p>
          <h2
            id="model-heading"
            className="mt-5 max-w-[1100px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
          >
            How the Sutra Health approach works
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
          <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            <p className="max-w-[650px] font-sans text-[16px] leading-[1.7] text-[#65736D] sm:text-[17px]">
              Our approach is built around three principles: bringing relevant
              support together, helping people make changes they can sustain,
              and adapting care to the person.
            </p>

            <Link
              href="/approach"
              className="mt-7 inline-block font-sans text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4 transition-colors hover:text-[#12332F]"
            >
              Explore the Sutra Health approach →
            </Link>
          </div>

          <div className="lg:pl-12 xl:pl-16">
            {model.map(([number, title, description]) => (
              <div key={number} className="border-b border-[#202522]/10 py-6">
                <div className="flex items-start gap-5">
                  <span className="pt-1 font-sans text-[9px] font-semibold tracking-[0.15em] text-[#91A298]">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-serif text-[22px] font-medium leading-[1.08] tracking-[-0.02em] text-[#202522] sm:text-[24px]">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-[650px] font-sans text-[13px] leading-6 text-[#65736D] sm:text-[14px] sm:leading-7">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
