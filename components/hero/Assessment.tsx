import Link from "next/link";

export default function Assessment() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-[var(--sutra-porcelain)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Intro */}
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              21-Point Health Assessment
            </p>

            <h2
              id="assessment-heading"
              className="max-w-xl font-[var(--font-dm-serif)] text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              Understand where your health needs attention.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg">
              The 21-Point Health Assessment helps you look at key areas of
              lifestyle and health behaviour. A simple Traffic Light System
              shows where things are going well and where changes may need
              attention.
            </p>

            <Link
              href="/assessment"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
            >
              <span className="border-b border-[var(--sutra-teal)] pb-1">
                Take the 21-Point Health Assessment
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          {/* Traffic Light System */}
          <div
            className="border-y border-[var(--sutra-border-strong)]"
            aria-label="Traffic Light System for the health assessment"
          >
            <div className="grid grid-cols-3">
              <div className="border-r border-[var(--sutra-border)] px-4 py-8 sm:px-8 sm:py-10">
                <div
                  aria-hidden="true"
                  className="mb-7 h-3 w-3 rounded-full bg-[#557A5B]"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  Green
                </p>
                <p className="mt-2 font-[var(--font-dm-serif)] text-2xl text-[var(--sutra-ink)] sm:text-3xl">
                  Optimal
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--sutra-muted)]">
                  Areas that are going well.
                </p>
              </div>

              <div className="border-r border-[var(--sutra-border)] px-4 py-8 sm:px-8 sm:py-10">
                <div
                  aria-hidden="true"
                  className="mb-7 h-3 w-3 rounded-full bg-[#B39A54]"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  Yellow
                </p>
                <p className="mt-2 font-[var(--font-dm-serif)] text-2xl text-[var(--sutra-ink)] sm:text-3xl">
                  Adjust
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--sutra-muted)]">
                  Areas where adjustment may help.
                </p>
              </div>

              <div className="px-4 py-8 sm:px-8 sm:py-10">
                <div
                  aria-hidden="true"
                  className="mb-7 h-3 w-3 rounded-full bg-[#A85B55]"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-muted)]">
                  Red
                </p>
                <p className="mt-2 font-[var(--font-dm-serif)] text-2xl text-[var(--sutra-ink)] sm:text-3xl">
                  Attention
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--sutra-muted)]">
                  Areas that need attention.
                </p>
              </div>
            </div>

            <div className="border-t border-[var(--sutra-border-strong)] px-4 py-5 sm:px-8">
              <p className="text-xs leading-5 text-[var(--sutra-muted)]">
                The assessment uses a Traffic Light System for Health
                Behaviour Change to help identify areas for attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
