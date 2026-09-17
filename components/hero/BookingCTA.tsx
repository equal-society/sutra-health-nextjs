import Link from "next/link";
import Container from "@/components/shared/Container";

export default function BookingCTA() {
  return (
    <section className="bg-[#F7F5EF] py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] bg-[#17413D] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Very subtle editorial detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/[0.08]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/[0.06]"
          />

          <div className="relative z-10 mx-auto max-w-[760px] text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B7CDBB] sm:text-[10px]">
              Take the next step
            </p>

            <h2 className="mt-4 font-serif text-[35px] font-medium leading-[1.02] tracking-[-0.04em] text-[#F7F5EF] sm:text-[43px] lg:text-[50px]">
              Start with a conversation
              <br className="hidden sm:block" /> about your health.
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-[12px] leading-6 text-[#D5E0D9] sm:text-[13px] sm:leading-7">
              Tell us what you are dealing with, what you have tried, and what
              you would like to change. We can help you understand a sensible
              place to begin.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row sm:gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#F7F5EF] px-6 text-[11px] font-semibold text-[#17413D] transition-colors duration-300 hover:bg-white sm:h-12 sm:px-7 sm:text-[12px]"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-white/[0.08] sm:h-12 sm:px-7 sm:text-[12px]"
              >
                Contact Sutra Health
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
