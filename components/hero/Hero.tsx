import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#F7F5EF]"
    >
      {/* Desktop hero image */}
      <Image
        src="/images/hero-desktop.webp"
        alt="Doctor-led consultation at Sutra Health"
        fill
        priority
        sizes="100vw"
        className="z-0 hidden object-cover object-center lg:block"
      />

      {/* Mobile hero image */}
      <div className="relative z-0 block h-[350px] w-full sm:h-[410px] lg:hidden">
        <Image
          src="/images/hero-mobile.webp"
          alt="Doctor-led consultation at Sutra Health"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_16%]"
        />
      </div>

      {/* Desktop image blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(247,245,239,1) 0%, rgba(247,245,239,.985) 22%, rgba(247,245,239,.91) 38%, rgba(247,245,239,.62) 52%, rgba(247,245,239,.24) 67%, rgba(247,245,239,0) 78%)",
        }}
      />

      <Container>
        <div className="relative z-20 lg:flex lg:min-h-[680px] lg:items-center">
          <div className="w-full max-w-[690px] px-5 py-12 sm:px-8 sm:py-16 lg:px-0 lg:py-20">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65736D] sm:text-[11px]">
                Doctor-led integrative healthcare
              </p>
            </div>

            {/* Main heading */}
            <h1
              id="hero-title"
              className="mt-6 max-w-[670px] font-serif text-[43px] font-medium leading-[0.98] tracking-[-0.047em] text-[#202522] sm:text-[55px] md:text-[63px] lg:text-[69px] xl:text-[73px]"
            >
              Better health starts
              <br className="hidden sm:block" />
              with understanding{" "}
              <span className="font-normal italic text-[#17413D]">
                you.
              </span>
            </h1>

            {/* Direct answer */}
            <p className="mt-7 max-w-[590px] text-[15px] leading-7 text-[#4E5B56] sm:mt-8 sm:text-[17px] sm:leading-8">
              Sutra Health provides doctor-led integrative healthcare for
              people seeking practical support with lifestyle, nutrition,
              therapeutic yoga and sustainable health changes.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/book-appointment"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white transition-colors duration-300 hover:bg-[#12332F] sm:min-h-[52px] sm:px-8 sm:text-[13px]"
              >
                Book a Consultation

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/what-we-do"
                className="group inline-flex min-h-[44px] items-center justify-center gap-2 px-2 text-[12px] font-semibold text-[#202522] transition-colors duration-300 hover:text-[#17413D] sm:justify-start sm:text-[13px]"
              >
                See how we can help

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-9 border-t border-[#202522]/10 pt-5 sm:mt-11">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#65736D] sm:text-[10px]">
                <span>Doctor-led</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>Personalised</span>

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#91A298]"
                />

                <span>Whole-person care</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile image-to-content transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[320px] z-10 h-16 bg-gradient-to-t from-[#F7F5EF] to-transparent lg:hidden"
      />

      {/* Desktop bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-12 bg-gradient-to-t from-[#F7F5EF] to-transparent lg:block"
      />
    </section>
  );
}
