import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="h-[calc(100svh-74px)] min-h-[620px] overflow-hidden bg-[var(--sutra-porcelain)] lg:h-[calc(100svh-75px)] lg:min-h-0"
    >
      <Container className="h-full">
        <div className="grid h-full items-center gap-5 py-5 sm:gap-7 sm:py-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8 lg:py-8 xl:gap-14 xl:px-10">

          {/* Content */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[var(--sutra-sage)] sm:w-9"
              />

              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--sutra-muted)] sm:text-[11px]">
                Doctor-led integrative healthcare
              </p>
            </div>

            <h1
              id="hero-title"
              className="mt-4 max-w-[700px] font-serif text-[39px] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:mt-5 sm:text-[48px] md:text-[56px] lg:mt-6 lg:text-[62px] xl:text-[68px]"
            >
              Integrative healthcare,
              <br />
              built around{" "}
              <span className="text-[var(--sutra-teal)]">your life.</span>
            </h1>

            <p className="mt-5 max-w-[590px] font-sans text-[14px] leading-[1.55] text-[var(--sutra-muted)] sm:mt-6 sm:text-[16px] lg:text-[17px] lg:leading-[1.6]">
             Doctor-led care bringing medical care, lifestyle medicine,
              nutrition, therapeutic Yoga and behaviour support together
              around your health and everyday life.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/book-appointment"
                className="group inline-flex h-11 items-center justify-center bg-[var(--sutra-teal)] px-5 font-sans text-[13px] font-medium text-[var(--sutra-white)] transition-colors duration-300 hover:bg-[var(--sutra-teal-hover)] sm:h-12 sm:px-6 sm:text-[14px]"
              >
                Book a Consultation

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/assessment"
                className="group inline-flex h-11 items-center justify-center border border-[var(--sutra-border-strong)] px-5 font-sans text-[13px] font-medium text-[var(--sutra-ink)] transition-colors duration-300 hover:border-[var(--sutra-sage)] hover:text-[var(--sutra-teal)] sm:h-12 sm:px-5 sm:text-[14px]"
              >
                Take the 21-Question Assessment

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Hero Video */}
        <div className="relative min-w-0 lg:h-full lg:flex lg:items-center">
          <div className="relative mx-auto h-[220px] w-full max-w-[680px] overflow-hidden sm:h-[280px] md:h-[330px] lg:h-[min(68vh,650px)] lg:w-full lg:max-w-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Sutra Health"
              className="absolute inset-0 h-full w-full object-cover object-center"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        </div>
      </Container>
    </section>
  );
}