import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="overflow-hidden bg-[#F7F5EF]"
    >
      <Container>
        <div className="grid items-center gap-10 py-12 sm:px-6 sm:py-15 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14 lg:px-10 lg:py-15 xl:gap-20">

          {/* Content */}
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#91A298] sm:w-10"
              />
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17413D] sm:text-[11px]">
                Sutra Health
              </p>
            </div>

            <h1
              id="hero-title"
              className="mt-5 max-w-[650px] font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-[#202522] sm:mt-7 sm:text-[52px] md:text-[58px] lg:text-[64px] xl:text-[70px]"
            >
              Integrative healthcare,
              <br />
              <span className="text-[#17413D]">
                built around your life.
              </span>
            </h1>

            {/*
              TIGHTENED: previously this ran three back-to-back statements
              that all said the same thing — the byline, then a paragraph
              restating it ("brings medical care and everyday health
              practices together"), then a "trust strip" restating it a
              third time ("designed around your needs, circumstances and
              goals"). Cut to the byline alone. Per instruction, the byline
              text itself is kept verbatim — do not reword it.
            */}
            <p className="mt-5 max-w-[590px] font-sans text-[16px] leading-7 text-[#202522] sm:mt-7 sm:text-[19px] sm:leading-8">
              Your partner in recovery and wellness through science-based
              traditional wisdom.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/book-appointment"
                className="group inline-flex min-h-12 items-center justify-center bg-[#17413D] px-6 font-sans text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#12332F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#17413D] sm:min-h-[52px] sm:px-7 sm:text-[14px]"
              >
                Book a Consultation
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/assessment"
                className="group inline-flex min-h-11 items-center justify-center border border-[#17413D]/20 px-5 font-sans text-[13px] font-semibold text-[#202522] transition-colors duration-300 hover:border-[#17413D] hover:text-[#17413D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#17413D] sm:border-0 sm:px-0"
              >
                Take the Free 21-Point Assessment
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative lg:ml-auto lg:w-full">
            <div className="relative overflow-hidden border border-[#202522]/10 bg-[#E7EDE8]">
              <div className="relative aspect-[4/4.15] sm:aspect-[4/3.7] lg:aspect-[4/4.25]">
                <Image
                  src="/images/yoga.png"
                  alt="Doctor-guided yoga therapy consultation at Sutra Health"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#F7F5EF]/95 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#17413D] shadow-sm backdrop-blur-sm sm:left-6 sm:top-6 sm:px-4 sm:text-[10px]">
                  Care shaped around you
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}