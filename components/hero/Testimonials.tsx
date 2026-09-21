import Link from "next/link";

const featuredStory = {
  quote:
    "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face.",
  name: "Puneet Kulshrestha",
};

export default function Testimonials() {
  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-heading"
      className="bg-[var(--sutra-white)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--sutra-muted)]">
              Patient Stories
            </p>

            <h2
              id="patient-stories-heading"
              className="mt-5 max-w-md font-[var(--font-dm-serif)] text-4xl leading-[1.05] tracking-[-0.025em] text-[var(--sutra-ink)] sm:text-5xl lg:text-6xl"
            >
              What people have shared.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[var(--sutra-muted)] sm:text-lg sm:leading-8">
            A real experience shared by someone who has worked with Sutra
            Health and its practitioners.
          </p>
        </div>

        <article className="mt-12 border-y border-[var(--sutra-border-strong)] sm:mt-16">
          <div className="grid gap-10 px-0 py-10 sm:py-14 lg:grid-cols-[80px_minmax(0,1fr)_180px] lg:gap-10 lg:py-16">
            <div
              aria-hidden="true"
              className="font-[var(--font-dm-serif)] text-6xl leading-none text-[var(--sutra-sage)] sm:text-7xl"
            >
              “
            </div>

            <blockquote className="max-w-4xl">
              <p className="font-[var(--font-dm-serif)] text-2xl leading-[1.25] tracking-[-0.015em] text-[var(--sutra-ink)] sm:text-3xl lg:text-4xl">
                {featuredStory.quote}
              </p>

              <footer className="mt-8">
                <cite className="not-italic text-sm font-semibold text-[var(--sutra-teal)]">
                  {featuredStory.name}
                </cite>
              </footer>
            </blockquote>

            <div className="self-end border-t border-[var(--sutra-border)] pt-4 text-xs leading-5 text-[var(--sutra-muted)] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              Patient experience
            </div>
          </div>
        </article>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            href="/patient-stories"
            className="group inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--sutra-teal)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sutra-teal)] focus-visible:ring-offset-4"
          >
            <span className="border-b border-[var(--sutra-teal)] pb-1">
              Explore patient stories
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <p className="text-xs leading-5 text-[var(--sutra-muted)]">
            Individual experiences are personal and do not guarantee outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
