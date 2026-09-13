import Link from "next/link";
import Container from "@/components/shared/Container";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sutrahealth/",
    label: "Instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Sutrahealth-Equal/",
    label: "Facebook",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@sutra-health",
    label: "YouTube",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919013103676",
    label: "WhatsApp",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/equal-society-ngo",
    label: "LinkedIn",
  },
];

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Our Approach", href: "/approach" },
      { label: "Conditions", href: "/conditions" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a Consultation", href: "/book-appointment" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#17413D] text-[#F7F5EF]">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Main footer */}
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
            {/* Brand */}
            <div className="max-w-[360px]">
              <Link
                href="/"
                aria-label="Sutra Health home"
                className="inline-block font-serif text-[30px] tracking-[-0.035em] text-[#F7F5EF]"
              >
                Sutra Health
              </Link>

              <p className="mt-4 max-w-[330px] text-[12px] leading-6 text-[#D5E0D9]">
                Doctor-led integrative healthcare that brings medical care,
                lifestyle and everyday wellbeing into a more connected
                picture.
              </p>

              <div className="mt-6 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sutra Health on ${social.label}`}
                    title={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold text-[#D5E0D9] transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white"
                  >
                    {social.name === "Instagram" && <i className="fa-brands fa-instagram" aria-hidden="true" />}
                    {social.name === "Facebook" && <i className="fa-brands fa-facebook-f" aria-hidden="true" />}
                    {social.name === "YouTube" && <i className="fa-brands fa-youtube" aria-hidden="true" />}
                    {social.name === "WhatsApp" && <i className="fa-brands fa-whatsapp" aria-hidden="true" />}
                    {social.name === "LinkedIn" && <i className="fa-brands fa-linkedin-in" aria-hidden="true" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#AFC7B5]">
                  {group.title}
                </p>

                <nav className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="w-fit text-[12px] text-[#D5E0D9] transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Contact */}
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#AFC7B5]">
                Contact
              </p>

              <div className="mt-4 space-y-3 text-[12px] leading-6 text-[#D5E0D9]">
                <a
                  href="mailto:equal.society@gmail.com"
                  className="block transition-colors hover:text-white"
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
          <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">
            <div className="flex flex-col gap-4 text-[9px] leading-5 text-[#AFC0B7] sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Sutra Health. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </div>
            </div>

            <p className="mt-5 max-w-[900px] text-[9px] leading-5 text-[#91AAA0]">
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
