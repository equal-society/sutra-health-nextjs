import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/Container";

export default function BookingCTA() {
  return (
    <section
      aria-labelledby="booking-cta-title"
      className="bg-[#F7F5EF]"
    >
      <Container>
        <div className="py-10 sm:py-14 lg:py-18">
          <div className="grid overflow-hidden lg:grid-cols-[1.35fr_0.65fr]">
            {/* Main statement */}
            <div className="relative bg-[#17413D] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
              {/* Subtle editorial detail */}
              <div
                aria-hidden="true"
                className="absolute right-8 top-8 h-16 w-16 border-r border-t border-white/10 sm:right-10 sm:top-10 lg:right-12 lg:top-12"
              />

              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-[#C8BDA7]"
                  />

                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/65">
                    Start with Sutra Health
                  </p>
                </div>

                {/* Heading */}
                <h2
                  id="booking-cta-title"
                  className="
                    mt-7
                    max-w-[720px]
                    font-serif
                    text-[40px]
                    font-medium
                    leading-[1.04]
                    tracking-[-0.03em]
                    text-white
                    sm:text-[52px]
                    lg:text-[62px]
                  "
                >
                  Your health is built
                  <br className="hidden sm:block" />
                  <span className="text-[#C8BDA7]">
                    {" "}
                    every day.
                  </span>
                </h2>
              </div>
            </div>

            {/* Action panel */}
            <div className="flex flex-col justify-between bg-[#E7EDE8] px-6 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-[#65736D]">
                  A practical place to begin
                </p>

                <p className="mt-5 max-w-[390px] font-sans text-[16px] leading-[1.7] text-[#4F5A54] sm:text-[17px]">
                  Get practical, evidence-informed support to build
                  healthier habits that fit your life.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/book-appointment"
                  className="
                    group
                    inline-flex
                    h-[52px]
                    w-full
                    items-center
                    justify-between
                    bg-[#17413D]
                    px-5
                    font-sans
                    text-[14px]
                    font-medium
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#12332F]
                    sm:w-auto
                    sm:min-w-[220px]
                  "
                >
                  <span>Book a Consultation</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Link>

                <div className="mt-6 border-t border-[#202522]/10 pt-5">
                  <p className="font-sans text-[11px] leading-[1.6] text-[#65736D]">
                    Doctor-led · Evidence-informed · Whole-person care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}