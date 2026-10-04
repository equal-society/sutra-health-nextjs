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
    "Practical dietary guidance in Faridabad for familiar foods, meal routines, hydration and individual nutrition needs.",
  heroDescription:
    "Get practical guidance on food choices, meal timing and hydration that fits your health needs and everyday routine.",
  trust: ["Personalised dietary guidance", "Faridabad, Delhi NCR & online"],
  introEyebrow: "Dietary Guidance",
  introTitle: "Make everyday food choices more thoughtfully.",
  introParagraphs: [
    "Guidance considers your usual meals, preferences, health needs and Prakriti, as described in the legacy programme.",
  ],
  focusEyebrow: "Food Choices",
  focusTitle: "Familiar foods, balanced choices.",
  focusIntro:
    "The legacy dietary guidance highlights the following food groups and habits. Individual suitability and portions may vary.",
  focusAreas: [
    {
      number: "01",
      title: "Fruit, vegetables and pulses",
      description:
        "Seasonal fruit and vegetables, salads, dals and other pulses.",
    },
    {
      number: "02",
      title: "Grains and protein",
      description:
        "Millets such as jowar and ragi, with eggs or fish where suitable and preferred.",
    },
    {
      number: "03",
      title: "Fats and traditional foods",
      description:
        "Desi ghee, olive oil, gur and khandsari, considered within your overall eating pattern.",
    },
    {
      number: "04",
      title: "Foods to limit",
      description:
        "Excess salt, refined sugar, deep-fried snacks such as samosa and pakoda, highly processed snacks, commercial bread and heavily sweetened tea.",
    },
    {
      number: "05",
      title: "Drinks and hydration",
      description:
        "Water and suitable fluids; the legacy page also mentions green tea, buttermilk and kaada according to individual suitability.",
    },
  ],
  processTitle: "Guidance shaped around your routine",
  processIntro:
    "Discuss your current meals, schedule and health context to identify manageable adjustments.",
  process: [
    {
      number: "01",
      title: "Review meals and timing",
      description: "Consider your usual food choices, meal frequency and daily schedule.",
    },
    {
      number: "02",
      title: "Discuss individual needs",
      description: "Factor in preferences, Prakriti and relevant health circumstances.",
    },
    {
      number: "03",
      title: "Choose practical changes",
      description: "Explore food variety, hydration and realistic meal adjustments.",
    },
  ],
  contextEyebrow: "Further Reading",
  contextTitle: "Explore the ideas behind the guidance.",
  contextParagraphs: [
    "The legacy page links to a Cell Metabolism study on ultra-processed diets, a TED Talk about gut health, and the 21-point healthy lifestyle framework. These resources offer further reading; they are not individual dietary prescriptions.",
    "Meal frequency and fluid needs vary. If you have a medical condition or prescribed diet, discuss changes with your treating healthcare professional.",
  ],
  resources: [
    {
      title: "Cell Metabolism study on ultra-processed foods",
      description: "The research article linked from the original dietary guidance.",
      href: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7",
    },
    {
      title: "TED Talk: Gut health",
      description: "The gut-health talk referenced by the legacy page.",
      href: "https://www.youtube.com/watch?v=1sISguPDlhY",
    },
    {
      title: "21-point healthy lifestyle framework",
      description: "The framework published on Zenodo and referenced in the original content.",
      href: "https://zenodo.org/records/15814357",
    },
    {
      title: "Healthy Lifestyle Guide",
      description: "The educational video linked from the original dietary advice page.",
      href: "https://www.youtube.com/watch?si=JWlazmTyPDvG7fkG&v=FOGY2HSo2eY&feature=youtu.be",
    },
  ],
  related: [
    {
      title: "Physician Consultation",
      description: "Discuss health history and nutrition-related concerns.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description: "Explore nutrition alongside other daily health habits.",
      href: "/services/lifestyle",
    },
  ],
  faq: [
    {
      question: "Will I need to follow a strict diet?",
      answer:
        "Guidance can begin with your existing meals and focus on practical changes suited to your circumstances.",
    },
    {
      question: "Which foods does the legacy guidance suggest limiting?",
      answer:
        "It highlights excess salt, refined sugar, fried snacks, highly processed foods, commercial bread and heavily sweetened tea. Individual advice may differ.",
    },
    {
      question: "Can I continue eating familiar Indian foods?",
      answer:
        "The legacy guidance includes seasonal produce, dals, millets and other familiar foods. Choices can be considered according to your needs and preferences.",
    },
  ],
  finalTitle: "Discuss your everyday food choices.",
  finalDescription:
    "Bring your usual meal pattern and nutrition questions to a physician consultation.",
};

export const metadata: Metadata = createServiceMetadata(nutrition);

export default function NutritionPage() {
  return <ServicePageTemplate config={nutrition} />;
}
