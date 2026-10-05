
import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const nutrition: ServicePageConfig = {
  heroImage: "/images/diet.webp",
  name: "Nutrition Support",
  shortName: "Nutrition",
  slug: "nutrition",

  title: "Nutrition Support in Faridabad & Delhi NCR | Sutra Health",
  description:
    "Explore nutrition support in Faridabad for familiar Indian foods, dietary choices, meal routines and individual health needs.",

  heroDescription:
    "Start with the meals you already eat and identify the nutrition question worth reviewing.",

  trust: [
    "Individual dietary guidance",
    "Faridabad, Delhi NCR & online",
  ],

  introEyebrow: "For Your Everyday Meals",
  introTitle: "Start with what is already on your plate.",
  introParagraphs: [
    "A usual day of meals gives useful context: what you eat, when you eat, how food is prepared and what constraints shape your choices. You do not need to change your diet before the discussion.",
  ],

  focusEyebrow: "Dietary Considerations",
  focusTitle: "What is already part of your diet",
  focusIntro:
    "Life Quality’s earlier guidance highlights these food and drink categories for discussion. They are reference points, not a universal meal plan or individual prescription.",

  focusAreas: [
    {
      number: "01",
      title: "Seasonal produce and pulses",
      description:
        "The earlier guidance mentions seasonal fruits and vegetables, salads, dals and other pulses.",
    },
    {
      number: "02",
      title: "Grains and protein sources",
      description:
        "Jowar, ragi, eggs and fish are included in the earlier material; choices depend on personal preference and suitability.",
    },
    {
      number: "03",
      title: "Cooking fats and sweeteners",
      description:
        "The earlier material names desi ghee, olive oil, gur and khandsari. Consider their type and quantity as part of the overall eating pattern.",
    },
    {
      number: "04",
      title: "Highly processed and fried foods",
      description:
        "The earlier page advises limiting excess salt and refined sugar, along with fried foods, highly processed snacks, commercial bread and heavily sweetened tea.",
    },
    {
      number: "05",
      title: "Drinks and fluids",
      description:
        "Water and appropriate fluids contribute to hydration. Green tea, buttermilk and kaada also appear in the earlier guidance; suitability can vary.",
    },
  ],

  processTitle: "What to expect from the discussion",
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
        "Consider documented dietary requirements and, where relevant to the earlier programme, the concept of Prakriti. Its use should be clarified with the clinician.",
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
    "The resources below were linked from Life Quality’s earlier dietary page. They offer general context, not personalised nutrition advice.",
    "If you have a prescribed diet or a condition that affects food or fluid intake, speak with your treating healthcare professional before making significant changes.",
  ],

  resources: [
    {
      title: "Research on ultra-processed diets",
      description:
        "Research article linked in the earlier dietary guidance.",
      href:
        "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7",
    },
    {
      title: "Gut health talk",
      description:
        "TED Talk linked from the earlier dietary page.",
      href: "https://www.youtube.com/watch?v=1sISguPDlhY",
    },
    {
      title: "21-point healthy lifestyle framework",
      description:
        "Framework referenced in Life Quality’s earlier material.",
      href: "https://zenodo.org/records/15814357",
    },
    {
      title: "Healthy Lifestyle Guide",
      description:
        "Educational video linked in the earlier dietary guidance.",
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
        "Yes. The earlier material includes dals, seasonal produce, jowar and ragi. Whether a food is suitable depends on your health needs and circumstances.",
    },
    {
      question: "Can I get advice for a medical condition?",
      answer:
        "You can raise nutrition questions related to your health. Any specific guidance depends on clinical assessment, current treatment and prescribed dietary needs.",
    },
  ],

  finalTitle: "Bring your usual meals into the conversation.",
  finalDescription:
    "Use your current food routine to identify nutrition questions for an individual review.",
};

export const metadata: Metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
