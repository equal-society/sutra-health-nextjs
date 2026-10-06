import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sutra Health Faridabad",
  description:
    "Contact Sutra Health and EQUAL Society in Sector 46, Faridabad for health, wellness, yoga therapy and community-focused activities.",
  alternates: {
    canonical: "https://lifequality.org.in/contact",
  },
  openGraph: {
    title: "Contact Sutra Health | EQUAL Society, Faridabad",
    description:
      "Reach Sutra Health and EQUAL Society in Sector 46, Faridabad by phone, WhatsApp or email.",
    url: "https://lifequality.org.in/contact",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://lifequality.org.in/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },
};



const contactPoints = [
  {
    label: "Call / WhatsApp",
    value: "+91 90131 03676",
    href: "tel:+919013103676",
    note: "Speak with the Sutra Health team",
  },
  {
    label: "Email",
    value: "equal.society@gmail.com",
    href: "mailto:equal.society@gmail.com",
    note: "For general enquiries and information",
  },
  {
    label: "Studio",
    value: "House No. 229, Roof-Top, Sector 46, Faridabad",
    href: "https://maps.app.goo.gl/Bso3TJCkvqDSLWKP9",
    note: "Visit the Sutra Health community space",
  },
  {
    label: "Hours of presence",
    value: "Mon – Sat: 7–8 AM & 4–6 PM",
    note: "Community presence hours",
  },
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/sutrahealth/"],
  ["Facebook", "https://www.facebook.com/people/Sutrahealth-Equal/"],
  ["YouTube", "https://www.youtube.com/@sutra-health"],
  ["LinkedIn", "https://www.linkedin.com/in/equal-society-ngo"],
  ["Medium", "https://sutra-health.medium.com/"],
  ["Pinterest", "https://in.pinterest.com/equal_society/"],
];

export default function ContactPage() {
  return (
    <>
      <main className="bg-[var(--sutra-porcelain)] text-[var(--sutra-ink)]">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative isolate overflow-hidden border-b border-[var(--sutra-border)] bg-[var(--sutra-ink)]">

          {/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/nature.webp')",
            }}
          />

          {/* Sutra Health overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[var(--sutra-ink)]/60"
          />

          {/* Bottom gradient for depth/readability */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--sutra-ink)]/70 via-transparent to-[var(--sutra-ink)]/20"
          />

          <Container>
            <div className="relative z-10 grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 text-white lg:py-24">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em]  sm:text-[11px]">
                  Contact Sutra Health
                </p>

                <h1 className="mt-5 max-w-[760px] font-[var(--font-serif)] text-[46px] leading-[0.98] tracking-[-0.045em] text-[var(--sutra-white)] sm:text-[60px] lg:text-[72px]">
                  Contact Sutra Health
                  <br />
                  <span>
                    about your health needs.
                  </span>
                </h1>

                <p className="mt-7 max-w-[650px] text-[15px] leading-7  sm:text-[17px] sm:leading-8">
                  A contact point for Sutra Health and EQUAL Society in Sector
                  46, Faridabad. Get in touch for enquiries, appointments and
                  other practical questions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919013103676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[var(--sutra-white)] px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-teal)] transition hover:bg-[var(--sutra-porcelain)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--sutra-ink)]"
                  >
                    WhatsApp us
                    <span aria-hidden>↗</span>
                  </a>

                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 border border-[var(--sutra-white)]/45 px-6 py-3.5 text-[13px] font-semibold text-[var(--sutra-white)] transition hover:border-[var(--sutra-white)] hover:bg-[var(--sutra-white)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--sutra-ink)]"
                  >
                    Book a consultation
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              <div className="self-end lg:pb-2">
                <div className="border-l border-[var(--sutra-white)]/30 pl-6 sm:pl-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] ">
                    A direct line
                  </p>

                  <p className="mt-4 max-w-[430px] font-[var(--font-serif)] text-[27px] leading-tight tracking-[-0.025em]  sm:text-[34px]">
                    Sometimes the simplest way to begin is simply to ask.
                  </p>

                  <p className="mt-5 max-w-[430px] text-[14px] leading-7 ">
                    Call, WhatsApp, email or send a message. We can help you
                    find the right contact or appointment route.
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* =====================================================
            DIRECT CONTACT
        ===================================================== */}
        <section className="border-b border-[var(--sutra-border)]">
          <Container>
            <div className="grid divide-y divide-[var(--sutra-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {contactPoints.map((item) => {
                const content = (
                  <>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
                      {item.label}
                    </p>

                    <p className="mt-3 font-[var(--font-serif)] text-[20px] leading-snug tracking-[-0.015em] text-[var(--sutra-ink)]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-[12px] leading-5 text-[var(--sutra-muted)]">
                      {item.note}
                    </p>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="px-1 py-7 transition hover:bg-[var(--sutra-pale-sage)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-inset sm:px-6 lg:px-7"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="px-1 py-7 sm:px-6 lg:px-7"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* =====================================================
            FORM + MAP
        ===================================================== */}
        <section>
          <Container>
            <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  Send a message
                </p>

                <h2 className="mt-4 max-w-[560px] font-[var(--font-serif)] text-[38px] leading-[1.02] tracking-[-0.035em] text-[var(--sutra-ink)] sm:text-[48px]">
                  Tell us how we can help
                </h2>

                <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[var(--sutra-muted)]">
                  Use the form to start a conversation. Your message will open
                  in WhatsApp so you can send it directly to the Sutra Health
                  team.
                </p>

                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>

              <div>
                <div className="overflow-hidden border border-[var(--sutra-border)] bg-[var(--sutra-white)]">
                  <iframe
                    title="Sutra Health location in Sector 46, Faridabad"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.488925408195!2d77.29599867601114!3d28.43467429303718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fe57a810dd1%3A0x75e55aae4d53097b!2sSutra%20Health!5e0!3m2!1sen!2sin!4v1781511407911!5m2!1sen!2sin"
                    className="h-[380px] w-full border-0 sm:h-[470px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--sutra-border)] pt-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sutra-sage)]">
                      Sector 46 · Faridabad
                    </p>

                    <p className="mt-1 text-[13px] text-[var(--sutra-muted)]">
                      House No. 229, Roof-Top
                    </p>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/Bso3TJCkvqDSLWKP9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)] underline-offset-4"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =====================================================
            SOCIAL + NEXT STEP
        ===================================================== */}
        <section className="border-t border-[var(--sutra-border)] bg-[var(--sutra-pale-sage)]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--sutra-sage)]">
                  Stay connected
                </p>

                <h2 className="mt-3 font-[var(--font-serif)] text-[32px] tracking-[-0.03em] text-[var(--sutra-ink)] sm:text-[40px]">
                  Stay connected with Sutra Health
                </h2>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  {socialLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-[var(--sutra-teal)] underline decoration-[var(--sutra-sage)]/60 underline-offset-4"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/conditions"
                  className="border bg-[var(--sutra-porcelain)] px-5 py-3 text-[13px] font-semibold text-[var(--sutra-teal)] transition hover:bg-[var(--sutra-white)]"
                >
                  Health information
                </Link>

                <Link
                  href="/retreat-programs"
                  className="bg-[var(--sutra-teal)] px-5 py-3 text-[13px] font-semibold text-[var(--sutra-white)] transition hover:bg-[var(--sutra-teal-hover)]"
                >
                  Retreat information
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}