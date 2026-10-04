import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

// Concise page copy; the shared template keeps the existing UI unchanged.
const nutrition: ServicePageConfig = {
  heroImage: "/images/diet.webp",
  name: "Nutrition",
  shortName: "Nutrition",
  slug: "nutrition",
  title: "Nutrition Support in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Practical nutrition guidance for everyday food choices, meal routines and individual health needs.",
  heroDescription:
    "Build realistic food habits with nutrition guidance shaped around your health, preferences and daily routine.",
  trust: ["Personalised guidance", "Faridabad, Delhi NCR & online"],
  introEyebrow: "Nutrition Support",
  introTitle: "Food choices that work in everyday life.",
  introParagraphs: [
    "Nutrition support starts with your current meals, preferences, routine and health concerns.",
    "Together, we identify manageable ways to improve balance and consistency, without relying on a generic diet plan.",
  ],
  focusEyebrow: "Areas of Support",
  focusTitle: "Practical, personal guidance.",
  focusIntro:
    "The focus depends on your needs, food preferences and any relevant medical advice.",
  focusAreas: [
    {
      number: "01",
      title: "Balanced meals",
      description:
        "Build variety with suitable vegetables, fruits, pulses, grains and protein sources.",
    },
    {
      number: "02",
      title: "Everyday food choices",
      description:
        "Consider portions, food quality and realistic changes to your usual meals.",
    },
    {
      number: "03",
      title: "Meal routine",
      description:
        "Review meal timing and frequency in the context of your schedule and needs.",
    },
    {
      number: "04",
      title: "Sustainable habits",
      description:
        "Find practical eating and hydration habits that fit your day.",
    },
  ],
  processTitle: "How nutrition support works",
  processIntro:
    "We start with your current routine and focus on a few useful, achievable changes.",
  process: [
    {
      number: "01",
      title: "Understand",
      description:
        "Discuss your meals, preferences, routine and health concerns.",
    },
    {
      number: "02",
      title: "Identify priorities",
      description:
        "Consider what may be useful in light of your needs and existing medical advice.",
    },
    {
      number: "03",
      title: "Make practical changes",
      description:
        "Explore realistic food choices and adjustments for daily life.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "Revisit what is manageable and adjust when circumstances change.",
    },
  ],
  contextEyebrow: "Everyday Nutrition",
  contextTitle: "No one-size-fits-all diet.",
  contextParagraphs: [
    "Food choices are shaped by culture, budget, family and work routines, activity and personal preferences.",
    "Advice can be adapted to familiar foods and individual needs. For diagnosed conditions or prescribed diets, coordinate changes with your healthcare professional.",
  ],
  related: [
    {
      title: "Physician Consultation",
      description: "Discuss health concerns and medical history with a physician.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description: "Explore nutrition alongside other lifestyle factors.",
      href: "/services/lifestyle",
    },
  ],
  faq: [
    {
      question: "Is nutrition support only for weight management?",
      answer:
        "No. The focus may include everyday eating habits or other nutrition concerns, depending on your needs.",
    },
    {
      question: "Will I receive a fixed diet plan?",
      answer:
        "Guidance is personalised where possible; a fixed plan is not suitable for everyone.",
    },
    {
      question: "Which foods should I eat?",
      answer:
        "A varied pattern may include vegetables, fruits, pulses, grains and suitable protein sources. Choices depend on your needs and preferences.",
    },
    {
      question: "Can this work alongside medical care?",
      answer:
        "Yes. If you have a diagnosed condition or prescribed diet, coordinate nutrition changes with your treating clinician.",
    },
  ],
  finalTitle: "Take a practical first step.",
  finalDescription:
    "Discuss your current eating habits and identify realistic nutrition changes.",
};

export const metadata: Metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
