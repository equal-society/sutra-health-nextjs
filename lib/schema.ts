/**
 * One shared definition of the Sutra Health organisation.
 * Every page that needs the organisation (home, about, volunteer, doctors)
 * must point to this same "@id", so Google reads it as one entity.
 */
export const SITE_URL = "https://lifequality.org.in";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Only real profiles of the organisation. No chat links, papers or personal sites.
export const ORGANIZATION_SAME_AS = [
  "https://www.instagram.com/sutrahealth/",
  "https://www.facebook.com/people/Sutrahealth-Equal/pfbid0vBjcwG9sT32EgK9d9XF7uxA2dz3dbf2KmNRXNPjw1a1Q4gVaT3fhe5maz5Q8wXHUl/",
  "https://www.youtube.com/@sutra-health",
  "https://www.linkedin.com/in/equal-society-ngo",
  "https://in.pinterest.com/equal_society/",
];

export const EQUAL_SOCIETY_ID = `${SITE_URL}/#equal-society`;

/**
 * EQUAL Society: the organisation Sutra Health is associated with.
 * Deliberately a plain "Organization" with no legalName, registration number
 * or NGO type until the legal identity is verified with the client.
 */
export const equalSocietySchema = {
  "@type": "Organization",
  "@id": EQUAL_SOCIETY_ID,
  name: "EQUAL Society",
  alternateName: "Effort For Quality of Life (EQUAL) Society",
  foundingDate: "1997",
};

/**
 * Sutra Health: the public-facing brand. "Life Quality" is only the domain
 * name (lifequality.org.in) and is not used as a brand or organisation name.
 * Not typed as MedicalClinic until clinic status and address are confirmed.
 */
export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Sutra Health",
  url: `${SITE_URL}/`,
  description:
    "Sutra Health is doctor-led lifestyle healthcare in Delhi NCR, India, connected with EQUAL Society.",
  slogan: "Promoting Healthier Living and Quality of Life",
  parentOrganization: equalSocietySchema,
  email: "equal.society@gmail.com",
  telephone: "+91-9013103676",

  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 229, Roof-Top, Sector 46",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121010",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Delhi NCR",
  },

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