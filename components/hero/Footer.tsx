import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const services = [
  { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
  { label: "Nutrition Counselling", href: "/approach/nutrition" },
  { label: "Therapeutic Yoga", href: "/approach/therapeutic-yoga" },
  { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
];

const conditions = [
  { label: "Weight Management", href: "/conditions/weight-management" },
  { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  { label: "High Blood Pressure", href: "/conditions/high-blood-pressure" },
  { label: "Arthritis & Joint Pain", href: "/conditions/arthritis-joint-pain" },
];

const resources = [
  { label: "Health Resources", href: "/resources" },
  { label: "21 Point Questionnaire", href: "/score" },
  { label: "Retreats", href: "/retreat-programs" },
  { label: "Archive", href: "/archive" },
];

function FooterColumn({
  title,
  items,
  footerLink,
}: {
  title: string;
  items: { label: string; href: string }[];
  footerLink?: { label: string; href: string };
}) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
        {title}
      </h2>

      <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex min-h-9 items-center text-[12px] text-[#D0DDD5] transition-colors hover:text-white sm:min-h-0 sm:text-[13px]"
          >
            {item.label}
          </Link>
        ))}

        {footerLink && (
          <Link
            href={footerLink.href}
            className="mt-1 inline-flex min-h-9 items-center text-[12px] font-semibold text-white sm:min-h-0 sm:text-[13px]"
          >
            {footerLink.label} →
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#123F35] text-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-x-8 sm:gap-y-12 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="col-span-2 max-w-[360px] lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Sutra Health home"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-12 sm:w-12">
                <Image
                  src="/logo/sutra-health-logo.webp"
                  alt="Sutra Health"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-serif text-[23px] leading-none sm:text-[25px]">
                  Sutra Health
                </p>
                <p className="mt-1 text-[9px] text-[#B7CFC0] sm:text-[10px]">
                  Integrative Lifestyle Healthcare
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[340px] text-[12px] leading-6 text-[#C1D1C8] sm:mt-7 sm:text-[13px]">
              Helping you build healthier everyday habits through an
              integrative approach to lifestyle, nutrition, movement, breath
              and mind.
            </p>

            <Link
              href="/book-appointment"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FAF8F1] px-5 py-2.5 text-[12px] font-semibold text-[#123F35] transition hover:bg-white sm:mt-7 sm:px-6 sm:py-3 sm:text-[13px]"
            >
              Book Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* What We Do */}
          <FooterColumn
            title="What We Do"
            items={services}
          />

          {/* Conditions */}
          <FooterColumn
            title="Conditions"
            items={conditions}
            footerLink={{ label: "View all conditions", href: "/conditions" }}
          />

          {/* Resources */}
          <FooterColumn title="Resources" items={resources} />
        </div>

        {/* Contact CTA */}
        <div className="border-t border-white/10 py-8 sm:py-10 lg:py-12">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.035] px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-[540px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B7CFC0] sm:text-[11px]">
                  Get in touch
                </p>

                <h2 className="mt-2 font-serif text-[25px] leading-tight tracking-[-0.02em] text-white sm:text-[29px]">
                  Have a question about where to start?
                </h2>

                <p className="mt-2 max-w-[500px] text-[12px] leading-6 text-[#C1D1C8] sm:text-[13px] sm:leading-6">
                  We&apos;re here to help you find the right next step for your
                  health.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:shrink-0">
                <div className="space-y-1.5 text-[12px] leading-5 sm:text-[13px]">
                  <a
                    href="tel:+919013103676"
                    className="block text-[#D0DDD5] transition-colors hover:text-white"
                  >
                    +91 90131 03676
                  </a>

                  <a
                    href="mailto:info@lifequality.org.in"
                    className="block break-all text-[#D0DDD5] transition-colors hover:text-white sm:break-normal"
                  >
                    info@lifequality.org.in
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex min-h-10 w-fit items-center justify-center rounded-full border border-white/20 px-5 py-2 text-[11px] font-semibold text-white transition hover:border-white/40 hover:bg-white/5 sm:min-h-11 sm:px-6 sm:text-[12px]"
                >
                  Contact us <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-[10px] text-[#AFC4B8] sm:py-6 sm:text-[11px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sutra Health. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
