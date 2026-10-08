
import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const nutrition: ServicePageConfig = {
  heroImage: "/images/service-hero.webp",
  name: "Want practical guidance for what you eat every day?",
  shortName: "Nutrition",
  slug: "nutrition",

  title: "Nutrition Counselling in Faridabad | Sutra Health",
  description:
    "Practical nutrition counselling in Faridabad focused on your usual meals, food routines, dietary needs and realistic changes for everyday life.",

  heroDescription:
    "Nutrition counselling helps you make food choices that fit your health and everyday routine.",

  trust: [
    "Individual dietary guidance",
    "Faridabad, Delhi NCR & online",
  ],

  introEyebrow: "For Your Everyday Meals",
  introTitle: "Start with the food you already eat.",
  introParagraphs: [
    "A usual day of meals gives useful context: what you eat, when you eat, how food is prepared and what constraints shape your choices. You do not need to change your diet before the discussion.",
  ],

  focusEyebrow: "Dietary Considerations",
  focusTitle: "Look at the pattern, not one food in isolation",
  focusIntro:
    "These food and drink categories can help structure a discussion about your overall eating pattern. They are not a universal meal plan or individual prescription.",

  focusAreas: [
    {
      number: "01",
      title: "Seasonal produce and pulses",
      description:
        "Seasonal fruits and vegetables, salads, dals and other pulses can be considered as part of a varied eating pattern.",
    },
    {
      number: "02",
      title: "Grains and protein sources",
      description:
        "Jowar, ragi, eggs and fish are examples of foods that may fit into a varied diet, depending on personal preference and suitability.",
    },
    {
      number: "03",
      title: "Cooking fats and sweeteners",
      description:
        "Cooking fats and sweeteners can be considered by type and quantity as part of the overall eating pattern.",
    },
    {
      number: "04",
      title: "Highly processed and fried foods",
      description:
        "Excess salt, refined sugar, fried foods and heavily processed snacks can be considered in the context of your overall eating pattern.",
    },
    {
      number: "05",
      title: "Drinks and fluids",
      description:
        "Water and appropriate fluids contribute to hydration. Other drinks may be considered according to your preferences and health needs.",
    },
  ],

  processTitle: "Turn a food question into a practical next step",
  processIntro:
    "The discussion stays close to your actual meals and routines rather than starting with a generic menu.",

  process: [
    {
      number: "01",
      title: "Map a typical day of eating",
      description:
        "Note meal timing, commonly eaten dishes, cooking methods and any access, budget or schedule constraints that shape your choices.",
    },
    {
      number: "02",
      title: "Account for dietary requirements",
      description:
        "Consider documented dietary requirements and, where relevant, traditional concepts such as Prakriti. Discuss their use with the clinician when they are part of your care.",
    },
    {
      number: "03",
      title: "Choose a food-related priority",
      description:
        "Select a manageable topic—such as meal composition, food variety or a routine barrier—or identify when specialist dietary input is needed.",
    },
  ],

  contextEyebrow: "Learning Resources",
  contextTitle: "Read and explore beyond the consultation.",
  contextParagraphs: [
    "These resources offer general context for further reading. They are not personalised nutrition advice.",
    "If you have a prescribed diet or a condition that affects food or fluid intake, speak with your treating healthcare professional before making significant changes.",
  ],

  resources: [
    {
      title: "Research on ultra-processed diets",
      description:
        "Research exploring dietary patterns and metabolic health.",
      href:
        "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7",
    },
    {
      title: "Gut health talk",
      description:
        "A public talk exploring the connection between food and gut health.",
      href: "https://www.youtube.com/watch?v=1sISguPDlhY",
    },
    {
      title: "21-point healthy lifestyle framework",
      description:
        "A practical framework for discussing everyday food choices.",
      href: "https://zenodo.org/records/15814357",
    },
    {
      title: "Healthy Lifestyle Guide",
      description:
        "An educational video for general nutrition and lifestyle context.",
      href:
        "https://www.youtube.com/watch?si=JWlazmTyPDvG7fkG&v=FOGY2HSo2eY&feature=youtu.be",
    },
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "For clinical questions involving symptoms, medical history or nutrition concerns.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "For broader habit support, including movement and sleep.",
      href: "/services/lifestyle",
    },
  ],

  faq: [
    {
      question: "Do I need to change my diet before the consultation?",
      answer:
        "No. Your usual meals and schedule are enough to begin the conversation.",
    },
    {
      question: "Does the guidance include Indian foods?",
      answer:
        "Yes. Dals, seasonal produce, jowar and ragi can all be part of a varied diet when they suit your health needs, preferences and routine.",
    },
    {
      question: "Can I get advice for a medical condition?",
      answer:
        "You can raise nutrition questions related to your health. Any specific guidance depends on clinical assessment, current treatment and prescribed dietary needs.",
    },
  ],

  ctaLabel: "Book a Consultation",
  finalTitle: "Bring your usual meals into the conversation.",
  finalDescription:
    "Use your current food routine to identify nutrition questions for an individual review.",
};

export const metadata: Metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
