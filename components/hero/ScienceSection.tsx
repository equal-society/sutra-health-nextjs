import Link from "next/link";

export default function ScienceSection() {
  return (
    <section className="border-b border-[#202522]/10 bg-[#F7F5EF]" aria-labelledby="science-heading">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="border-b border-[#202522]/10 pb-8 sm:pb-10 lg:pb-11">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D] sm:text-[12px]">
            02 · The science
          </p>
          <h2
            id="science-heading"
            className="mt-5 max-w-[1000px] font-serif text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-[#202522] sm:text-[44px] md:text-[50px] lg:text-[54px] xl:text-[58px]"
          >
            Why does Lifestyle Medicine matter?
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:max-w-[1180px]">
          <div className="border-b border-[#202522]/10 py-9 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12 xl:pr-16">
            <p className="max-w-[650px] font-sans text-[17px] leading-[1.8] text-[#202522] sm:text-[19px]">
              Lifestyle Medicine uses evidence-informed changes in everyday
              behaviour as part of healthcare, alongside appropriate medical
              care.
            </p>
          </div>

          <div className="py-9 lg:py-12 lg:pl-12 xl:pl-16">
            <p className="max-w-[700px] font-sans text-[16px] leading-[1.7] text-[#65736D] sm:text-[17px] sm:leading-9">
              The approach recognises that knowing what to do is only part of
              the challenge. Good care also helps people understand their
              options, adapt them to their circumstances and build changes they
              can realistically maintain.
            </p>

            <div className="mt-8 border-t border-[#202522]/10 pt-5">
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <Link
                  href="/resources/research"
                  className="font-sans text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4 transition-colors hover:text-[#12332F]"
                >
                  Explore research and evidence →
                </Link>
                <Link
                  href="/approach"
                  className="font-sans text-[13px] font-semibold text-[#17413D] underline decoration-[#C8BDA7] underline-offset-4 transition-colors hover:text-[#12332F]"
                >
                  How Sutra Health approaches care →
                </Link>
              </div>
            </div>

            <p className="mt-5 max-w-[650px] font-sans text-[12px] leading-5 text-[#65736D]">
              Evidence and recommendations vary by condition and by person.
              Health information on this website is intended to support
              informed conversations with qualified healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
