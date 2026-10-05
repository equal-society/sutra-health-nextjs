import type { Metadata } from "next";
import ScoreQuestionnaire from "./ScoreQuestionnaire";

export const metadata: Metadata = {
  title: "21-Point Lifestyle Assessment | Sutra Health",
  description:
    "Use Sutra Health's 21-point questionnaire as a structured self-reflection on selected everyday health habits.",
  alternates: {
    canonical: "https://lifequality.org.in/assessment",
  },
};

export default function ScorePage() {
  return <ScoreQuestionnaire />;
}
