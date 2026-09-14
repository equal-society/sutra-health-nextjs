import Link from "next/link";
import Container from "@/components/shared/Container";

const exploreLinks = [
  { label: "Our Approach", href: "/approach" },
  { label: "Conditions", href: "/conditions" },
  { label: "Resources", href: "/resources" },
];

const connectLinks = [
  { label: "Book a Consultation", href: "/book-appointment" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sutrahealth/",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Sutrahealth-Equal/",
    icon: "fa-brands fa-facebook-f",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@sutra-health",
    icon: "fa-brands fa-youtube",
  },
  {
    name: "Email",
    href: "mailto:equal.society@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919013103676",
    icon: "fa-brands fa-whatsapp",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/equal-society-ngo",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "Medium",
    href: "https://sutra-health.medium.com/",
    icon: "fa-brands fa-medium",
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/equal_society/",
    icon: "fa-brands fa-pinterest",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#17413D] text-[#F7F5EF]">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">
          {/* Main footer */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.7fr_1fr_1fr_1.15fr] lg:gap-10">
            {/* Brand */}
            <div className="col-span-2 max-w-[390px] sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="Sutra Health home"
                className="inline-block font-serif text-[29px] leading-none tracking-[-0.035em]"
              >
                Sutra Health
              </Link>

              <p className="mt-4 max-w-[350px] text-[11px] leading-5.5 text-[#D5E0D9] sm:text-[12px] sm:leading-6">
                Doctor-led integrative healthcare that brings medical care,
                lifestyle and everyday wellbeing into a more connected
                picture.
              </p>

              {/* Social icons */}
              <div className="mt-5 flex flex-wrap gap-2">
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
                    aria-label={`Sutra Health on ${social.name}`}
                    title={social.name}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[13px] text-[#D5E0D9] transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-9 sm:w-9"
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#AFC7B5] sm:text-[9px]">
                Explore
              </p>

              <nav className="mt-4 flex flex-col gap-2.5">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[11px] text-[#D5E0D9] transition-colors hover:text-white sm:text-[12px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#AFC7B5] sm:text-[9px]">
                Connect
              </p>

              <nav className="mt-4 flex flex-col gap-2.5">
                {connectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[11px] text-[#D5E0D9] transition-colors hover:text-white sm:text-[12px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#AFC7B5] sm:text-[9px]">
                Contact
              </p>

              <div className="mt-4 space-y-2.5 text-[11px] leading-5.5 text-[#D5E0D9] sm:text-[12px] sm:leading-6">
                <a
                  href="mailto:equal.society@gmail.com"
                  className="block break-words transition-colors hover:text-white"
                >
                  equal.society@gmail.com
                </a>

                <a
                  href="https://wa.me/919013103676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-white"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
            <div className="flex flex-col gap-3 text-[8px] leading-5 text-[#AFC0B7] sm:flex-row sm:items-center sm:justify-between sm:text-[9px]">
              <p>
                © {new Date().getFullYear()} Sutra Health. All rights reserved.
              </p>

              <div className="flex gap-5">
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </div>
            </div>

            <p className="mt-4 max-w-[900px] text-[8px] leading-4.5 text-[#91AAA0] sm:text-[9px] sm:leading-5">
              Sutra Health provides integrative and lifestyle-focused support
              alongside appropriate medical care. It does not replace
              diagnosis, treatment or advice from your doctor.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
