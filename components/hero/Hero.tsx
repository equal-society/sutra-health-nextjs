import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F5EF]">
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
      <div className="relative z-0 block h-[360px] w-full sm:h-[420px] lg:hidden">
        <Image
          src="/images/hero-mobile.webp"
          alt="Doctor-led consultation at Sutra Health"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_16%]"
        />

        {/* Mobile doctor identification */}
        <div className="absolute bottom-5 right-4 z-10 max-w-[230px] rounded-2xl border border-white/50 bg-[#F7F5EF]/30 px-4 py-3 shadow-[0_10px_30px_rgba(32,37,34,0.12)] backdrop-blur-md sm:right-6">
          <p className="text-[11px] font-semibold tracking-[-0.01em] text-[#dbdbdb]">
            Dr. Rakesh Sarwal
          </p>

          <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.12em] text-[#c7c7c7]">
            MBBS, MPH, DrPH (Johns Hopkins)
          </p>
        </div>
      </div>

      {/* Desktop cream-to-image blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(247,245,239,1) 0%, rgba(247,245,239,.99) 20%, rgba(247,245,239,.92) 34%, rgba(247,245,239,.67) 47%, rgba(247,245,239,.28) 60%, rgba(247,245,239,0) 74%)",
        }}
      />

      <Container>
        <div className="relative z-20 flex min-h-0 items-start lg:min-h-[620px] lg:items-center xl:min-h-[650px]">
          <div className="relative z-20 w-full max-w-[650px] px-5 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-0">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 sm:mb-7">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#91A298]"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.21em] text-[#65736D] sm:text-[10px] lg:text-[11px]">
                Doctor-led integrative healthcare
              </p>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[650px] font-serif text-[38px] font-medium leading-[0.99] tracking-[-0.047em] text-[#202522] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[69px]">
              Better health starts with understanding{" "}
              <span className="font-normal italic text-[#17413D]">
                the whole picture.
              </span>
            </h1>

            {/* Short answer */}
            <p className="mt-7 max-w-[570px] border-l border-[#91A298] pl-4 text-[12px] leading-6 text-[#53605B] sm:mt-8 sm:text-[13px] sm:leading-7">
              <strong className="font-semibold text-[#202522]">
                In short:
              </strong>{" "}
              we combine your existing medical care with evidence-informed
              lifestyle changes — coordinated by a doctor, not a replacement
              for one. Best suited if you want practical, doctor-led support
              alongside treatment you&apos;re already receiving.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/book-appointment"
                className="group inline-flex min-h-[49px] w-full items-center justify-center gap-4 rounded-full bg-[#17413D] px-7 py-3 text-[12px] font-semibold text-white shadow-[0_8px_22px_rgba(23,65,61,0.10)] transition-all duration-300 hover:bg-[#12332F] hover:shadow-[0_10px_26px_rgba(23,65,61,0.15)] active:scale-[0.99] sm:w-auto sm:text-[13px]"
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
                href="/approach"
                className="group inline-flex items-center gap-2 py-2 text-[12px] font-semibold text-[#202522] transition-colors duration-300 hover:text-[#17413D] sm:text-[13px]"
              >
                Explore Our Approach

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Medical disclaimer */}
            <div className="mt-8 max-w-[560px] border-t border-[#202522]/10 pt-4 sm:mt-10 sm:pt-5">
              <p className="text-[10px] leading-5 text-[#65736D] sm:text-[11px] sm:leading-6">
                Appropriate medical care remains central. Lifestyle practices
                can complement it.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Desktop floating doctor card */}
      <div className="pointer-events-none absolute bottom-10 right-[5%] z-30 hidden lg:block">
        <div className="rounded-2xl border border-white/50 bg-[#F7F5EF]/30 px-5 py-4 shadow-[0_14px_40px_rgba(32,37,34,0.14)] backdrop-blur-md xl:px-6 xl:py-4">
          <div className="flex items-start gap-3">
            {/* Small accent marker */}
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#17413D]"
            />

            <div>
              <p className="text-[13px] font-semibold tracking-[-0.01em] text-[#dbdbdb] xl:text-[14px]">
                Dr. Rakesh Sarwal
              </p>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#c7c7c7] xl:text-[10px]">
                MBBS, MPH, DrPH (Johns Hopkins)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-8 bg-gradient-to-t from-[#F7F5EF] to-transparent lg:block"
      />
    </section>
  );
}