import Link from "next/link";
import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
      <Container>
        <section className="flex min-h-[70vh] items-center py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sutra-teal)]">
              404 / Page not found
            </p>

            <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              This page has moved, or it never existed.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--sutra-muted)] sm:text-lg">
              The page you are looking for could not be found. You can return
              to Sutra Health and continue exploring our services, conditions,
              resources and wellness programmes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center bg-[var(--sutra-teal)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--sutra-teal-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]"
              >
                Back to Home →
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--sutra-border-strong)] px-6 py-3 text-sm font-semibold text-[var(--sutra-teal)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--sutra-teal)]"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}