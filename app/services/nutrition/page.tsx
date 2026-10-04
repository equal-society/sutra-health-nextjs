
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
    "Understand your food choices with guidance that considers your health, preferences and everyday circumstances.",

  trust: [
    "Individual dietary guidance",
    "Faridabad, Delhi NCR & online",
  ],

  introEyebrow: "For Your Everyday Meals",
  introTitle: "Your food habits are a useful place to begin.",
  introParagraphs: [
    "A nutrition discussion can start with what you eat at home, your meal schedule and the questions you have about your diet. There is no need to arrive with a completely changed eating pattern.",
  ],

  focusEyebrow: "Dietary Considerations",
  focusTitle: "What is on your plate?",
  focusIntro:
    "The earlier Life Quality guidance identifies these areas for consideration. They are reference points, not a fixed meal plan or a prescription for every person.",

  focusAreas: [
    {
      number: "01",
      title: "Seasonal produce and pulses",
      description:
        "The original guidance includes seasonal fruits, vegetables, salads, dals and other pulses.",
    },
    {
      number: "02",
      title: "Grains and protein sources",
      description:
        "Jowar, ragi, eggs and fish appear in the legacy guidance, with choices depending on suitability and preference.",
    },
    {
      number: "03",
      title: "Cooking fats and sweeteners",
      description:
        "Desi ghee, olive oil, gur and khandsari are mentioned in the original material. Their role and quantity should be considered within the overall diet.",
    },
    {
      number: "04",
      title: "Highly processed and fried foods",
      description:
        "The legacy page advises limiting excess salt, refined sugar, samosa, pakoda, highly processed snacks, commercial bread and heavily sweetened tea.",
    },
    {
      number: "05",
      title: "Drinks and fluids",
      description:
        "Water and suitable fluids are relevant to hydration. Green tea, buttermilk and kaada are also mentioned in the earlier guidance, subject to individual suitability.",
    },
  ],

  processTitle: "What to expect from the discussion",
  processIntro:
    "The consultation helps put your dietary questions into context before you decide what, if anything, to change.",

  process: [
    {
      number: "01",
      title: "Share your current eating pattern",
      description:
        "Talk about a usual day's meals, food preferences and any difficulties with your routine.",
    },
    {
      number: "02",
      title: "Discuss relevant health factors",
      description:
        "Consider medical history, dietary requirements and Prakriti, which is referenced in the earlier programme.",
    },
    {
      number: "03",
      title: "Identify the next practical step",
      description:
        "Discuss suitable adjustments or whether further clinical advice is needed.",
    },
  ],

  contextEyebrow: "Learning Resources",
  contextTitle: "Read and explore beyond the consultation.",
  contextParagraphs: [
    "These are the educational resources linked by the original Life Quality dietary page. They provide additional context and should not be treated as personalised nutrition advice.",
    "If you follow a prescribed diet or have a medical condition affecting food or fluid intake, consult your treating healthcare professional before making significant changes.",
  ],

  resources: [
    {
      title: "Research on ultra-processed diets",
      description:
        "The Cell Metabolism research article referenced in the original guidance.",
      href:
        "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7",
    },
    {
      title: "Gut health talk",
      description:
        "The TED Talk linked from the legacy dietary page.",
      href: "https://www.youtube.com/watch?v=1sISguPDlhY",
    },
    {
      title: "21-point healthy lifestyle framework",
      description:
        "The healthy lifestyle framework referenced by Life Quality.",
      href: "https://zenodo.org/records/15814357",
    },
    {
      title: "Healthy Lifestyle Guide",
      description:
        "The educational video included in the original dietary advice.",
      href:
        "https://www.youtube.com/watch?si=JWlazmTyPDvG7fkG&v=FOGY2HSo2eY&feature=youtu.be",
    },
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "For a clinical discussion of symptoms, medical history or dietary concerns.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "For guidance on other health-related habits, including movement and sleep.",
      href: "/services/lifestyle",
    },
  ],

  faq: [
    {
      question: "Do I need to change my diet before the consultation?",
      answer:
        "No. Your current meals and routine provide a useful starting point for the discussion.",
    },
    {
      question: "Does the guidance include Indian foods?",
      answer:
        "The original material mentions dals, seasonal produce, jowar, ragi and other familiar foods. Their suitability depends on your individual circumstances.",
    },
    {
      question: "Can I get advice for a medical condition?",
      answer:
        "You can discuss relevant health concerns and dietary questions. Specific recommendations depend on clinical assessment and any existing treatment or prescribed diet.",
    },
  ],

  finalTitle: "Bring your nutrition questions to the conversation.",
  finalDescription:
    "Discuss your current eating pattern and health-related concerns through a physician consultation.",
};

export const metadata: Metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
