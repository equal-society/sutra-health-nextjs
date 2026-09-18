import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/hero/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
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

  alternates: {
    canonical: "/",
  },

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
  },

  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Personalized healthcare focused on lifestyle, nutrition, therapeutic yoga, breath and mind practices.",
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
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

<body className={`${lora.variable} ${manrope.variable}`}>        <Header />

        {children}

        <WhatsAppFloat />
        <Chatbot />

        <Footer />
      </body>
    </html>
  );
}