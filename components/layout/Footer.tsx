import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faPinterestP,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/shared/Container";

const exploreLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
];

const connectLinks = [
  { label: "Book a Consultation", href: "/book-appointment" },
  { label: "Meet Our Doctors", href: "/doctors" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks: { name: string; href: string; icon: IconDefinition }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sutrahealth/",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Sutrahealth-Equal/",
    icon: faFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@sutra-health",
    icon: faYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/equal-society-ngo",
    icon: faLinkedinIn,
  },
  {
    name: "Medium",
    href: "https://sutra-health.medium.com/",
    icon: faMediumM,
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/equal_society/",
    icon: faPinterestP,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--sutra-teal)] text-[var(--sutra-porcelain)]">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.7fr_0.75fr_0.9fr_1fr] lg:gap-14">
            {/* Brand */}
            <div className="max-w-[440px]">
              <Link
                href="/"
                aria-label="Sutra Health home"
                className="inline-block font-[var(--font-manrope)] text-[26px] font-bold leading-none tracking-[-0.035em] text-[var(--sutra-porcelain)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--sutra-teal)]"
              >
                Sutra Health
              </Link>

              <p className="mt-5 max-w-[400px] text-[15px] leading-7 text-white/70 sm:text-base sm:leading-7">
                Health information, services and practical support to help you understand
                your options and decide where to begin.
              </p>

            <div
  aria-label="Sutra Health social links"
  className="mt-7 flex items-center gap-4"
>
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={
        social.href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
      aria-label={
        social.name === "Email"
          ? "Email Sutra Health"
          : `Sutra Health on ${social.name}`
      }
      className="inline-flex items-center justify-center text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <FontAwesomeIcon
        icon={social.icon}
        aria-hidden="true"
        className="h-5 w-5"
      />
    </a>
  ))}
</div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Explore
              </p>

              <nav aria-label="Explore" className="mt-5 flex flex-col gap-3">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sutra-teal)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Connect
              </p>

              <nav aria-label="Connect" className="mt-5 flex flex-col gap-3">
                {connectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm text-white/70 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sutra-teal)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm leading-6 text-white/70">
                {/* ADDED: click-to-call link. Number matches the one already
                    declared in the Organization schema in page.tsx. */}
                <a
                  href="tel:+919013103676"
                  className="w-fit transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sutra-teal)]"
                >
                  +91 90131 03676
                </a>

                <a
                  href="mailto:equal.society@gmail.com"
                  className="w-fit break-words transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sutra-teal)]"
                >
                  equal.society@gmail.com
                </a>

                <a
                  href="https://wa.me/919013103676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sutra-teal)]"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
            <div className="flex flex-col gap-3 text-xs leading-5 text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Sutra Health. All rights reserved.
              </p>

              <p>
                Rooted in the work of EQUAL Society since 1997.
              </p>
            </div>

            <p className="mt-5 max-w-[920px] text-xs leading-5 text-white/40">
              Information on this website is for general education and does not replace
              diagnosis, treatment or advice from your doctor.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}