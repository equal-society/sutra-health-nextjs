"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DM_Serif_Display, Manrope } from "next/font/google";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Apple,
  Brain,
  HeartPulse,
  PersonStanding,
  Scale,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

/* =========================================================
   SUTRA HEALTH — TYPOGRAPHY
========================================================= */

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/* =========================================================
   NAVIGATION
========================================================= */

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type DropdownName =
  | "whatWeDo"
  | "conditions"
  | "about"
  | "resources"
  | null;

const whatWeDo: NavItem[] = [
  {
    label: "Physician Consultation",
    href: "/what-we-do/physician-consultation",
    icon: HeartPulse,
  },
  {
    label: "Lifestyle Medicine",
    href: "/what-we-do/lifestyle",
    icon: Activity,
  },
  {
    label: "Nutrition",
    href: "/what-we-do/nutrition",
    icon: Apple,
  },
  {
    label: "Therapeutic Yoga",
    href: "/what-we-do/therapeutic-yoga",
    icon: PersonStanding,
  },
  {
    label: "Behaviour, Stress & Mind",
    href: "/what-we-do/behaviour-stress-mind",
    icon: Brain,
  },
];

const conditions: NavItem[] = [
  {
    label: "Diabetes & Blood Sugar",
    href: "/conditions/diabetes",
    icon: Activity,
  },
  {
    label: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
    icon: HeartPulse,
  },
  {
    label: "Weight Management",
    href: "/conditions/weight-management",
    icon: Scale,
  },
  {
    label: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
    icon: PersonStanding,
  },
  {
    label: "Migraine & Headache",
    href: "/conditions/migraine-headache",
    icon: Brain,
  },
  {
    label: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
    icon: Apple,
  },
  {
    label: "Women's Health",
    href: "/conditions/womens-health",
    icon: Sparkles,
  },
];

const about: NavItem[] = [
  {
    label: "Our Story",
    href: "/about",
    icon: Sparkles,
  },
  {
    label: "Doctors & Experts",
    href: "/doctors",
    icon: UserRound,
  },
  {
    label: "Community & Volunteer",
    href: "/volunteer",
    icon: UsersRound,
  },
];

const resources: NavItem[] = [
  {
    label: "Health Articles",
    href: "/resources/articles",
    icon: Activity,
  },
  {
    label: "21-Point Health Assessment",
    href: "/assessment",
    icon: Scale,
  },
  {
    label: "Research & Evidence",
    href: "/resources/research",
    icon: Sparkles,
  },
  {
    label: "Practice Knowledge System",
    href: "/resources/knowledge-system",
    icon: Brain,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

interface DesktopDropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  items: NavItem[];
  viewAll?: {
    label: string;
    href: string;
  };
  openDropdown: DropdownName;
  setOpenDropdown: (name: DropdownName) => void;
  closeNavigation: () => void;
  pathname: string;
}

function DesktopDropdown({
  name,
  label,
  items,
  viewAll,
  openDropdown,
  setOpenDropdown,
  closeNavigation,
  pathname,
}: DesktopDropdownProps) {
  const isOpen = openDropdown === name;
  const hasActiveItem = items.some((item) =>
    isActivePath(pathname, item.href)
  );

  return (
    <div
      className="navDropdown"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className={`navDropdownButton ${
          isOpen || hasActiveItem ? "navDropdownButtonActive" : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpenDropdown(isOpen ? null : name)}
      >
        <span>{label}</span>
        <span
          className={`navChevron ${isOpen ? "navChevronOpen" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className={`dropdownMenu ${name}Menu`}>
          <div className="dropdownList">
            {items.map((item) => {
              const Icon = item.icon;
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`dropdownItem ${
                    active ? "dropdownItemActive" : ""
                  }`}
                  onClick={closeNavigation}
                >
                  <span className="dropdownItemMain">
                    <span className="dropdownItemIcon" aria-hidden="true">
                      <Icon size={16} strokeWidth={1.7} />
                    </span>
                    <span className="dropdownItemLabel">{item.label}</span>
                  </span>

                  <span className="dropdownArrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              );
            })}
          </div>

          {viewAll && (
            <Link
              href={viewAll.href}
              className="dropdownViewAll"
              onClick={closeNavigation}
            >
              <span>{viewAll.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MOBILE DROPDOWN
========================================================= */

interface MobileDropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  items: NavItem[];
  viewAll?: {
    label: string;
    href: string;
  };
  openDropdown: DropdownName;
  toggleDropdown: (name: DropdownName) => void;
  closeNavigation: () => void;
}

function MobileDropdown({
  name,
  label,
  items,
  viewAll,
  openDropdown,
  toggleDropdown,
  closeNavigation,
}: MobileDropdownProps) {
  const isOpen = openDropdown === name;

  return (
    <div className="mobileDropdown">
      <button
        type="button"
        className="mobileDropdownButton"
        aria-expanded={isOpen}
        onClick={() => toggleDropdown(name)}
      >
        <span>{label}</span>
        <span
          className={`mobileChevron ${
            isOpen ? "mobileChevronOpen" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`mobileDropdownContent ${
          isOpen ? "mobileDropdownContentOpen" : ""
        }`}
      >
        {viewAll && (
          <Link
            href={viewAll.href}
            className="mobileDropdownViewAll"
            onClick={closeNavigation}
          >
            {viewAll.label}
          </Link>
        )}

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeNavigation}
            >
              <span className="mobileDropdownItemIcon" aria-hidden="true">
                <Icon size={15} strokeWidth={1.7} />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DropdownName>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeNavigation = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  const toggleDropdown = (name: DropdownName) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  const approachActive = isActivePath(pathname, "/approach");

  return (
    <header
      ref={headerRef}
      className={`${dmSerif.variable} ${manrope.variable} siteHeader`}
    >
      <div className="navbarContainer">
        {/* BRAND */}
        <Link
          href="/"
          className="brand"
          aria-label="Sutra Health — Home"
          onClick={closeNavigation}
        >
          <span className="brandLogo">
            <img
              src="/logo/sutra-health-logo.webp"
              alt=""
              width={48}
              height={48}
            />
          </span>

          <span className="brandText">
            <span className="brandName">Sutra Health</span>
            <span className="brandTagline">
              Integrative Lifestyle Healthcare
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktopNav" aria-label="Primary navigation">
          <DesktopDropdown
            name="whatWeDo"
            label="What We Do"
            items={whatWeDo}
            viewAll={{
              label: "Explore What We Do",
              href: "/what-we-do",
            }}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            closeNavigation={closeNavigation}
            pathname={pathname}
          />

          <DesktopDropdown
            name="conditions"
            label="Conditions"
            items={conditions}
            viewAll={{
              label: "Explore All Conditions",
              href: "/conditions",
            }}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            closeNavigation={closeNavigation}
            pathname={pathname}
          />

          <Link
            href="/approach"
            className={`navLink ${
              approachActive ? "navLinkActive" : ""
            }`}
            onClick={closeNavigation}
          >
            Our Approach
          </Link>

          <DesktopDropdown
            name="about"
            label="About"
            items={about}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            closeNavigation={closeNavigation}
            pathname={pathname}
          />

          <DesktopDropdown
            name="resources"
            label="Resources"
            items={resources}
            viewAll={{
              label: "Explore Resources",
              href: "/resources",
            }}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            closeNavigation={closeNavigation}
            pathname={pathname}
          />
        </nav>

        {/* DESKTOP CTA */}
        <div className="desktopNavActions">
          <Link
            href="/book-appointment"
            className="desktopBookButton"
            onClick={closeNavigation}
          >
            <span>Book a Consultation</span>
            <span aria-hidden="true" className="buttonArrow">
              →
            </span>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`mobileMenuButton ${
            mobileOpen ? "mobileMenuButtonOpen" : ""
          }`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={
            mobileOpen ? "Close navigation" : "Open navigation"
          }
          onClick={() => {
            setMobileOpen((current) => !current);
            setOpenDropdown(null);
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        id="mobile-navigation"
        className={`mobileNav ${mobileOpen ? "mobileNavOpen" : ""}`}
      >
        <nav className="mobileNavInner" aria-label="Mobile navigation">
          <MobileDropdown
            name="whatWeDo"
            label="What We Do"
            items={whatWeDo}
            viewAll={{
              label: "Explore What We Do",
              href: "/what-we-do",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="conditions"
            label="Conditions"
            items={conditions}
            viewAll={{
              label: "Explore All Conditions",
              href: "/conditions",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <Link
            href="/approach"
            className={`mobileNavLink ${
              approachActive ? "mobileNavLinkActive" : ""
            }`}
            onClick={closeNavigation}
          >
            <span>Our Approach</span>
            <span aria-hidden="true">→</span>
          </Link>

          <MobileDropdown
            name="about"
            label="About"
            items={about}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="resources"
            label="Resources"
            items={resources}
            viewAll={{
              label: "Explore Resources",
              href: "/resources",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <Link
            href="/retreat-programs"
            className={`mobileNavLink ${
              pathname.startsWith("/retreat-programs")
                ? "mobileNavLinkActive"
                : ""
            }`}
            onClick={closeNavigation}
          >
            <span>Retreats</span>
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/contact"
            className={`mobileNavLink ${
              pathname.startsWith("/contact")
                ? "mobileNavLinkActive"
                : ""
            }`}
            onClick={closeNavigation}
          >
            <span>Contact</span>
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/book-appointment"
            className="mobileBookButton"
            onClick={closeNavigation}
          >
            <span>Book a Consultation</span>
            <span aria-hidden="true" className="buttonArrow">
              →
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
