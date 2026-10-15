import type { Metadata } from "next";

import BookAppointmentClient from "@/components/booking/BookAppointmentClient";

const SITE_URL = "https://lifequality.org.in";

export const metadata: Metadata = {
  title: "Book a Doctor Consultation in Faridabad",
  description:
    "Choose a date and time to book an online or in-person consultation with a Sutra Health doctor in Faridabad. Simple form, confirmation by email.",
  alternates: { canonical: `${SITE_URL}/book-appointment` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Book a Doctor Consultation | Sutra Health",
    description:
      "Book a consultation with a Sutra Health doctor. Pick a date and time that works for you.",
    url: `${SITE_URL}/book-appointment`,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Book a consultation with Sutra Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Doctor Consultation | Sutra Health",
    description:
      "Book a consultation with a Sutra Health doctor. Pick a date and time that works for you.",
    images: [`${SITE_URL}/images/og-image.webp`],
  },
};

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}
