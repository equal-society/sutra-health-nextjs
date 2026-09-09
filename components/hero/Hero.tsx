import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF8F1]">
      {/* Desktop hero image */}
      <Image
        src="/images/hero-desktop5.webp"
        alt="Doctor-led consultation at Sutra Health"
        fill
        priority
        sizes="100vw"
        className="z-0 hidden object-cover object-center lg:block"
      />

      {/* Mobile hero image */}
      <div className="relative z-0 block h-[320px] w-full sm:h-[370px] lg:hidden">
        <Image
          src="/images/hero-desktop56.webp"
          alt="Doctor-led consultation at Sutra Health"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_16%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[155px] bg-gradient-to-t from-[#FAF8F1] via-[#FAF8F1]/30 to-transparent"
        />
      </div>

      {/* Desktop cream-to-image blend */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(250,248,241,1) 0%, rgba(250,248,241,0.99) 25%, rgba(250,248,241,0.92) 36%, rgba(250,248,241,0.66) 47%, rgba(250,248,241,0.25) 59%, rgba(250,248,241,0) 71%)",
        }}
      />

      <Container>
        <div className="relative z-20 flex min-h-0 items-start pb-8 lg:min-h-[620px] lg:items-center lg:pb-0 xl:min-h-[650px]">
          <div className="relative z-20 -mt-[32px] w-full max-w-[720px] rounded-t-[18px] bg-[#FAF8F1] px-5 pt-6 pb-4 sm:-mt-[34px] sm:rounded-t-[20px] sm:px-6 sm:pt-7 sm:pb-4 lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-0 lg:pt-0">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F8160] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em] lg:text-[11px]">
              Doctor-led integrative healthcare
            </p>

            <h1 className="max-w-[700px] font-serif text-[35px] font-medium leading-[1.01] tracking-[-0.04em] text-[#123F35] sm:text-[45px] md:text-[56px] lg:text-[62px] xl:text-[68px]">
              Better health starts with{" "}
              understanding{" "}
              <span className="italic text-[#65966F]">the whole picture.</span>
              </h1>

            <p className="mt-4 max-w-[610px] text-[12px] leading-[1.55] text-[#536A62] sm:text-[14px] sm:leading-7 lg:text-[15px] lg:leading-7">
              Sutra Health brings lifestyle medicine, nutrition counselling and therapeutic yoga together in a practical plan shaped around your health, habits and everyday life.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#173F35] px-5 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#12352D] active:scale-[0.99] sm:min-h-0 sm:w-auto sm:px-6 sm:py-3.5 sm:text-[13px]"
              >
                Book a Consultation
                <span aria-hidden="true" className="text-[14px]">→</span>
              </Link>

              <Link
                href="/approach"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-5 py-3 text-[12px] font-semibold text-[#173F35] transition-all duration-300 hover:bg-[#F0F4ED] active:scale-[0.99] sm:min-h-0 sm:w-auto sm:px-6 sm:py-3.5 sm:text-[13px]"
              >
                Explore Our Approach
              </Link>
            </div>

            <p className="mt-4 max-w-[580px] text-[10px] leading-5 text-[#71817B] sm:text-[12px] sm:leading-6">
              Appropriate medical care remains central. Lifestyle practices can complement it.
            </p>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-6 bg-gradient-to-t from-[#FAF8F1] to-transparent lg:block"
      />
    </section>
  );
}
