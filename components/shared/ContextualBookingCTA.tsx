import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ContextualBookingCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  label?: string;
};

export default function ContextualBookingCTA({
  eyebrow = "Next step",
  title,
  description,
  label = "See appointment options",
}: ContextualBookingCTAProps) {
  return (
    <section className="border-y border-[var(--sutra-border)] bg-[var(--sutra-teal)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-pale-sage)] sm:text-[11px]">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-[var(--font-serif)] text-[34px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[46px]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
              {description}
            </p>
          </div>

          <Link
            href="/book-appointment"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-white px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-[var(--sutra-pale-sage)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {label}
            <ArrowUpRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
