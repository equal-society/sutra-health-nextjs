import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type StaticServicePageConfig = {
  h1: string;
  title: string;
  description: string;
  heroDescription: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  eyebrow?: string;
  related: { label: string; href: string }[];
};

export default function StaticServicePage({
  config,
}: {
  config: StaticServicePageConfig;
}) {
  return (
    <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <section
        aria-labelledby="service-static-title"
        className="relative isolate flex min-h-[min(780px,calc(100svh-72px))] items-end overflow-hidden bg-[#18332F] sm:min-h-[min(820px,calc(100svh-80px))]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/service-hero.webp")' }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10211E]/45" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#10211E]/90 via-[#10211E]/60 to-[#10211E]/25" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20">
          <div className="max-w-[780px]">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/75">
              {config.eyebrow || "Sutra Health services"}
            </p>
            <h1
              id="service-static-title"
              className="mt-4 font-[var(--font-serif)] text-[2.65rem] leading-[1.04] tracking-[-0.035em] text-white sm:mt-5 sm:text-6xl lg:text-7xl"
            >
              {config.h1}
            </h1>
            <p className="mt-5 max-w-[640px] text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
              {config.heroDescription}
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="/book-appointment"
                className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-white)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)]"
              >
                {config.primaryCta}
                <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
              </Link>
              <Link
                href={config.secondaryHref}
                className="inline-flex min-h-12 items-center border border-white/60 px-6 py-3 text-sm font-semibold text-white"
              >
                {config.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-white)]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sutra-teal)]">
            Start here
          </p>
          <h2 className="mt-3 max-w-3xl font-[var(--font-serif)] text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">
            Find the information that answers your next question.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {config.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-24 items-center justify-between border border-[var(--sutra-border)] bg-[var(--sutra-porcelain)] px-5 py-4 font-semibold"
              >
                <span>{item.label}</span>
                <span aria-hidden="true" className="text-[var(--sutra-teal)]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sutra-teal)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-serif)] text-3xl leading-tight sm:text-4xl">
              Ready to take the next step?
            </h2>
            <p className="mt-3 text-base leading-7 text-white/80 sm:text-lg">
              If you are unsure where to begin, a consultation can help you discuss your concern and identify an appropriate next step.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[var(--sutra-white)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)]"
          >
            {config.primaryCta}
            <ArrowUpRight size={17} className="ml-3" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
