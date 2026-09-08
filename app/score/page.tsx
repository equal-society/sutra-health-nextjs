import type { Metadata } from "next";
import ScoreQuestionnaire from "./ScoreQuestionnaire";

export const metadata: Metadata = {
  title: "21 Point Lifestyle Questionnaire | Sutra Health",
  description:
    "Take Sutra Health's 21 Point Lifestyle Questionnaire to review everyday food, movement, sleep, and lifestyle habits.",
  alternates: {
    canonical: "https://lifequality.org.in/score",
  },
};

export default function ScorePage() {
  return <ScoreQuestionnaire />;
}
