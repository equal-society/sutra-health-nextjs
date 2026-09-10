"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Apple,
  Archive,
  Bone,
  Brain,
  ClipboardCheck,
  Database,
  FileText,
  FlaskConical,
  HeartPulse,
  PersonStanding,
  Scale,
  Sparkles,
  UserRound,
  UsersRound,
  Wind,
} from "lucide-react";

const whatWeDo = [
  { label: "Lifestyle Medicine", href: "/what-we-do/lifestyle", icon: HeartPulse },
  { label: "Nutrition Counselling", href: "/what-we-do/nutrition", icon: Apple }, 
  { label: "Therapeutic Yoga", href: "/what-we-do/therapeutic-yoga", icon: PersonStanding },
  { label: "Breath & Mindfulness", href: "/what-we-do/breath-mindfulness", icon: Wind},

];

const conditions = [
  { label: "Weight Management", href: "/conditions/weight-management", icon: Scale },
  { label: "Metabolic Health", href: "/conditions/metabolic-health", icon: Activity },
  { label: "High Blood Pressure", href: "/conditions/high-blood-pressure", icon: HeartPulse },
  { label: "Arthritis & Joint Pain", href: "/conditions/arthritis-joint-pain", icon: Bone },
  { label: "Migraine & Headache", href: "/conditions/migraine-headache", icon: Brain },
  { label: "Digestive & Gut Health", href: "/conditions/digestive-gut-health", icon: Apple },
  { label: "Women's Health", href: "/conditions/womens-health", icon: Sparkles },
];

const about = [
  { label: "About Sutra Health", href: "/about", icon: Sparkles },
  { label: "Doctors & Experts", href: "/doctors", icon: UserRound },
  { label: "Volunteer", href: "/volunteer", icon: UsersRound },
];

const resources = [
  { label: "Health Articles", href: "/resources/articles", icon: FileText },
  { label: "Research & Publications", href: "/resources/research", icon: FlaskConical },
  { label: "Practice Knowledge System", href: "/resources/knowledge-system", icon: Database },
  { label: "21-Question Lifestyle Assessment", href: "/score", icon: ClipboardCheck },
  { label: "Gallery", href: "/archive", icon: Archive },
];

type DropdownName =
  | "whatWeDo"
  | "conditions"
  | "about"
  | "resources"
  | null;

interface DropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  items: { label: string; href: string; icon: LucideIcon }[];
  viewAll?: { label: string; href: string };
  className?: string;
  openDropdown: DropdownName;
  toggleDropdown: (name: DropdownName) => void;
  closeNavigation: () => void;
  setOpenDropdown: (name: DropdownName) => void;
}

function DesktopDropdown({
  name,
  label,
  items,
  viewAll,
  className = "",
  openDropdown,
  toggleDropdown,
  closeNavigation,
  setOpenDropdown,
}: DropdownProps) {
  const isOpen = openDropdown === name;

  return (
    <div
      className="navDropdown"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className={`navDropdownButton ${isOpen ? "navDropdownButtonOpen" : ""}`}
        aria-expanded={isOpen}
        onClick={() => toggleDropdown(name)}
      >
        <span>{label}</span>
        <span className={`chevron ${isOpen ? "chevronOpen" : ""}`} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className={`dropdownMenu ${className}`}>
          <div className="dropdownList">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="dropdownItem" onClick={closeNavigation}>
                <span className="dropdownItemMain">
                  <span className="dropdownItemIcon" aria-hidden="true"><item.icon size={14} strokeWidth={1.7} /></span>
                  <span>{item.label}</span>
                </span>
                <span className="dropdownArrow" aria-hidden="true">→</span>
              </Link>
            ))}
            {viewAll && (
              <Link href={viewAll.href} className="dropdownViewAll" onClick={closeNavigation}>
                {viewAll.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileDropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  items: { label: string; href: string; icon: LucideIcon }[];
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
        onClick={() => toggleDropdown(name)}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <span
          className={`mobileChevron ${isOpen ? "mobileChevronOpen" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`mobileDropdownContent ${
          isOpen ? "mobileDropdownContentOpen" : ""
        }`}
      >
        {viewAll && (
          <Link href={viewAll.href} onClick={closeNavigation}>
            {viewAll.label}
          </Link>
        )}

        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeNavigation}
          >
            <span className="mobileDropdownItemIcon" aria-hidden="true">
              <item.icon size={14} strokeWidth={1.7} />
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DropdownName>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleDropdown(name: DropdownName) {
    setOpenDropdown((current) => (current === name ? null : name));
  }

  function closeNavigation() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header ref={navRef} className="siteHeader">
      <div className="navbarContainer">
        {/* BRAND */}
        <Link
          href="/"
          className="brand"
          onClick={closeNavigation}
          aria-label="Sutra Health Home"
        >
          <div className="brandLogo">
            <img
              src="/logo/sutra-health-logo.webp"
              alt="Sutra Health"
              width="48"
              height="48"
            />
          </div>

          <div className="brandText">
            <span className="brandName">Sutra Health</span>
            <span className="brandTagline">
              Integrative Lifestyle Healthcare
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/" className="navLink" onClick={closeNavigation}>
            Home
          </Link>

          <DesktopDropdown
            name="whatWeDo"
            label="What We Do"
            items={whatWeDo}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="whatWeDoMenu"
          />

          <DesktopDropdown
            name="conditions"
            label="Conditions"
            items={conditions}
            viewAll={{ label: "View all", href: "/conditions" }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="conditionsMenu"
          />

          <Link
            href="/approach"
            className="navLink"
            onClick={closeNavigation}
          >
            Our Approach
          </Link>

          <Link
            href="/retreat-programs"
            className="navLink"
            onClick={closeNavigation}
          >
            Retreats
          </Link>

          <DesktopDropdown
            name="about"
            label="About"
            items={about}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="aboutMenu"
          />

          <DesktopDropdown
            name="resources"
            label="Resources"
            items={resources}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="resourcesMenu"
          />
          <Link href="/contact" className="navLink" onClick={closeNavigation}>
            Contact
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="desktopNavActions">
          <Link href="/book-appointment" className="desktopBookButton">
            <span>Book Consultation</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobileMenuButton ${
            mobileOpen ? "mobileMenuButtonOpen" : ""
          }`}
          onClick={() => {
            setMobileOpen((value) => !value);
            setOpenDropdown(null);
          }}
          aria-expanded={mobileOpen}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span className={mobileOpen ? "line lineOneOpen" : "line"} />
          <span className={mobileOpen ? "line lineTwoOpen" : "line"} />
          <span className={mobileOpen ? "line lineThreeOpen" : "line"} />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div className={`mobileNav ${mobileOpen ? "mobileNavOpen" : ""}`}>
        <div className="mobileNavInner">
          <Link href="/" className="mobileNavLink" onClick={closeNavigation}>
            Home
          </Link>

          <MobileDropdown
            name="whatWeDo"
            label="What We Do"
            items={whatWeDo}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="conditions"
            label="Conditions"
            items={conditions}
            viewAll={{ label: "All Conditions", href: "/conditions" }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <Link
            href="/approach"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Our Approach
          </Link>

          <Link
            href="/retreat-programs"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Retreats
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
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

           <Link href="/contact" className="mobileNavLink" onClick={closeNavigation}>
            Contact
          </Link>

          <Link
            href="/book-appointment"
            className="mobileBookButton"
            onClick={closeNavigation}
          >
            <span>Book Consultation</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
