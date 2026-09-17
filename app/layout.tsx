import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/hero/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { Plus_Jakarta_Sans } from "next/font/google";



const siteUrl = "https://lifequality.org.in";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
      "Personalized healthcare focused on lifestyle, nutrition, movement, breath and mind.",

    url: siteUrl,
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Personalized healthcare focused on lifestyle, nutrition, movement, breath and mind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>

<body className={`${plusJakarta.variable} antialiased`}>
        <Header />

        {children}

        <WhatsAppFloat />
        <Chatbot />

        <Footer />
     </body>
    </html>
  );
}