"use client";

import Link from "next/link";

export default function BookingCTA() {
  return (
    <section
      id="book-consultation"
      aria-labelledby="booking-cta-heading"
      className="bg-[var(--sutra-teal)] text-[var(--sutra-white)]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden">
          {/* Subtle editorial accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 hidden h-72 w-72 border border-white/10 lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 hidden h-48 w-48 border border-white/10 lg:block"
          />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-sage)]">
                Ready to get started?
              </p>

              <h2
                id="booking-cta-heading"
                className="mt-5 max-w-3xl font-serif text-4xl leading-[1.04] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
              >
                Start with a conversation about your health.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Share what you are dealing with, what you want to change and
                what support you are looking for. We can then discuss the most
                appropriate next step for you.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:min-w-[280px] lg:items-start">
              <Link
                href="/book-appointment"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[var(--sutra-white)] px-7 text-sm font-semibold text-[var(--sutra-teal)] transition-colors duration-200 hover:bg-[var(--sutra-pale-sage)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sutra-teal)] sm:w-auto"
              >
                Book a Consultation
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              {/* <Link
                href="/assessment"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sutra-teal)]"
              >
                <span className="border-b border-white/70 pb-1">
                  Take the 21-Point Health Assessment
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link> */}

          
            </div>
          </div>

          <div className="relative mt-12 border-t border-white/15 pt-5 sm:mt-16">
            <p className="max-w-2xl text-xs leading-5 text-white/55">
              Online consultations are available for people across India.
              In-person sessions are available in Faridabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}