import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

import { Lora, Manrope } from "next/font/google";

const siteUrl = "https://lifequality.org.in";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/* =========================
   Site Metadata
   ========================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",
    template: "%s | Sutra Health",
  },

  description:
    "Doctor-led lifestyle healthcare in Delhi NCR, India: medical care, nutrition and therapeutic yoga from Dr. Rakesh Sarwal. Book a consultation.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",

    description:
      "Doctor-led lifestyle healthcare in Delhi NCR, India: medical care, nutrition and therapeutic yoga from Dr. Rakesh Sarwal. Book a consultation.",

    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sutra Health",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lifestyle Medicine Doctor in Delhi NCR, India | Sutra Health",
    description:
      "Doctor-led lifestyle healthcare in Delhi NCR, India: medical care, nutrition and therapeutic yoga from Dr. Rakesh Sarwal. Book a consultation.",
    images: ["/images/og-image.webp"],
  },
};

/* =========================
   Root Layout
   ========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >

<body className={`${lora.variable} ${manrope.variable}`}>        <Header />

        {children}

        <WhatsAppFloat />

        <Footer />
      </body>
    </html>
  );
}