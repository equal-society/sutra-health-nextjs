/**
 * One shared definition of the organisation behind Sutra Health.
 * Every page that needs the organisation (home, about, volunteer, doctors)
 * must point to this same "@id", so Google reads it as one entity.
 */
export const SITE_URL = "https://lifequality.org.in";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Only real profiles of the organisation. No chat links, papers or personal sites.
export const ORGANIZATION_SAME_AS = [
  "https://www.instagram.com/sutrahealth/",
  "https://www.facebook.com/people/Sutrahealth-Equal/",
  "https://www.youtube.com/@sutra-health",
  "https://www.linkedin.com/in/equal-society-ngo",
  "https://in.pinterest.com/equal_society/",
];

export const organizationSchema = {
  "@type": "NGO",
  "@id": ORGANIZATION_ID,
  name: "Life Quality",
  alternateName: ["Sutra Health", "EQUAL Society - Effort For Quality of Life"],
  legalName: "Effort For Quality of Life (EQUAL) Society",
  url: `${SITE_URL}/`,
  description:
    "Life Quality (Sutra Health) is a Delhi NCR, India-based not-for-profit society promoting health awareness, wellness, education, family welfare and quality of life through an integrative and community-focused approach.",
  slogan: "Promoting Healthier Living and Quality of Life",
  foundingDate: "1997-05-28",
  email: "equal.society@gmail.com",
  telephone: "+91-9013103676",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 229, Roof-Top, Sector 46",
    addressLocality: "Delhi NCR, India",
    addressRegion: "Haryana",
    postalCode: "121010",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Health Awareness",
    "Yoga",
    "Pranayama",
    "Wellness Education",
    "Nutrition Education",
    "Community Health",
    "Healthy Living",
  ],
  sameAs: ORGANIZATION_SAME_AS,
};
