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
    default: "Sutra Health | Integrative Lifestyle Healthcare",
    template: "%s | Sutra Health",
  },

  description:
    "Sutra Health provides integrative lifestyle healthcare through lifestyle medicine, nutrition, therapeutic yoga, breath and mind practices.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sutra Health | Integrative Lifestyle Healthcare",

    description:
      "Personalized healthcare focused on lifestyle, nutrition, therapeutic yoga, breath and mind practices.",

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
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Personalized healthcare focused on lifestyle, nutrition, therapeutic yoga, breath and mind practices.",
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