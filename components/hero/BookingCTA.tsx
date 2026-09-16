import Link from "next/link";
import Container from "@/components/shared/Container";

export default function BookingCTA() {
  return (
<section
  aria-labelledby="booking-cta-title"
  className="bg-[#F7F5EF] py-16 sm:py-20 lg:py-24"
>
  <Container>
    <div className="bg-[#17413D] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-[760px] text-center">
            {/* Eyebrow */}
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C8BF] sm:text-[11px]">
              Take the next step
            </p>

            {/* Heading */}
            <h2
              id="booking-cta-title"
              className="mt-5 font-serif text-[38px] font-medium leading-[1.03] tracking-[-0.04em] text-[#F7F5EF] sm:text-[48px] lg:text-[56px]"
            >
              Start with a conversation
              <br className="hidden sm:block" />
              <span className="font-normal italic text-[#C7D5CC]">
                {" "}about your health.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-7 text-[#D4DED8] sm:text-[17px] sm:leading-8">
              Tell us what you are dealing with, what you have tried, and what
              you would like to change. We can help you find a sensible place
              to begin.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F7F5EF] px-7 text-[12px] font-semibold text-[#17413D] transition-colors duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#F7F5EF]/50 focus:ring-offset-2 focus:ring-offset-[#17413D]"
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
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-[12px] font-semibold text-[#F7F5EF] transition-colors duration-300 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-white/30"
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
