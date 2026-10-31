import type { Metadata } from "next";
import ScoreQuestionnaire from "./ScoreQuestionnaire";

export const metadata: Metadata = {
  title: "21-Point Lifestyle Assessment",
  description:
    "Use Sutra Health's 21-point questionnaire to reflect on everyday habits. You get a simple self-reflection score, not a clinical assessment.",
  alternates: {
    canonical: "https://lifequality.org.in/assessment",
  },
  openGraph: {
    title: "21-Point Lifestyle Assessment | Sutra Health",
    description:
      "Use Sutra Health's 21-point questionnaire to reflect on everyday habits. You get a simple self-reflection score, not a clinical assessment.",
    url: "https://lifequality.org.in/assessment",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://lifequality.org.in/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sutra Health 21-Point Lifestyle Assessment",
      },
    ],
  },
};

export default function ScorePage() {
  return <ScoreQuestionnaire />;
}
