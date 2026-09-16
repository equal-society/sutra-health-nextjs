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
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Main footer */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1fr] lg:gap-14">
            {/* Brand */}
            <div className="max-w-[420px]">
              <Link
                href="/"
                aria-label="Sutra Health home"
                className="font-serif text-[30px] leading-none tracking-[-0.035em] text-[#F7F5EF]"
              >
                Sutra Health
              </Link>

              <p className="mt-5 max-w-[390px] text-[15px] leading-7 text-[#D4DED8] sm:text-[16px] sm:leading-7.5">
                Doctor-led, personalised healthcare that brings medical care,
                lifestyle and everyday wellbeing into one connected approach.
              </p>

              {/* Social links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={`Sutra Health on ${social.name}`}
                    title={social.name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[13px] text-[#C7D5CC] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-[#F7F5EF]"
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8C8BF]">
                Explore
              </p>

              <nav
                aria-label="Explore"
                className="mt-5 flex flex-col gap-3"
              >
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[14px] text-[#D4DED8] transition-colors duration-300 hover:text-[#F7F5EF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8C8BF]">
                Connect
              </p>

              <nav
                aria-label="Connect"
                className="mt-5 flex flex-col gap-3"
              >
                {connectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-[14px] text-[#D4DED8] transition-colors duration-300 hover:text-[#F7F5EF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8C8BF]">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-[14px] leading-6 text-[#D4DED8]">
                <a
                  href="mailto:equal.society@gmail.com"
                  className="w-fit break-words transition-colors duration-300 hover:text-[#F7F5EF]"
                >
                  equal.society@gmail.com
                </a>

                <a
                  href="https://wa.me/919013103676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit transition-colors duration-300 hover:text-[#F7F5EF]"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
            <div className="flex flex-col gap-4 text-[11px] leading-5 text-[#AFC0B7] sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Sutra Health. All rights reserved.
              </p>

              
            </div>

            {/* Small disclaimer */}
            <p className="mt-5 max-w-[920px] text-[10px] leading-5 text-[#91AAA0]">
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
