import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const therapeuticYoga: ServicePageConfig = {
  heroImage: "/images/yoga2.webp",
  name: "Therapeutic Yoga in Faridabad",
  slug: "therapeutic-yoga",

  title: "Therapeutic Yoga in Faridabad",
  description:
    "Explore guided therapeutic Yoga in Faridabad, including movement, breathing practices and sensible participation guidance.",

  heroDescription:
    "A guided way to explore selected Yoga practices, with the starting level and activities considered in relation to the participant.",

  trust: [
    "Traditional Yoga practices",
    "Guidance on modifications",
    "Faridabad, Delhi NCR & online — confirm current format",
  ],

  introEyebrow: "Traditional Practice, Considered Individually",
  introTitle: "Choose the practice that is appropriate for your starting point.",
  introParagraphs: [
    "Therapeutic Yoga may include familiar practices such as Tadasana, Vriksha Asana, Surya Namaskar, Shavasana and Pranayama, alongside other postures. The practices selected should reflect the participant’s experience, mobility and relevant health considerations rather than follow one routine for everyone.",
    "In a therapeutic setting, the choice to include, adapt or omit a practice should take account of experience, mobility and relevant health advice. Yoga is complementary to appropriate medical care, not a substitute for it.",
  ],

  focusEyebrow: "Practice Elements",
  focusTitle: "Selected practices, from movement to rest.",
  focusIntro:
    "A guided session may use selected elements according to suitability. There is no requirement to complete every traditional practice or sequence.",

  focusAreas: [
    {
      number: "01",
      title: "Foundational asana",
      description:
        "Standing and supported positions, including examples such as Tadasana, can introduce posture, alignment and balance. The range or position may be changed when needed.",
    },
    {
      number: "02",
      title: "Sequenced movement",
      description:
        "Surya Namaskar combines movement and breath. It is not suitable for everyone in its standard form and may be omitted or adapted.",
    },
    {
      number: "03",
      title: "Rest and recovery",
      description:
        "Shavasana is a resting posture that may be used for relaxation. A comfortable resting position can be selected according to the participant’s needs.",
    },
    {
      number: "04",
      title: "Pranayama",
      description:
        "Breathing practices can be adapted to the participant. Forceful breathwork or breath retention should not be assumed to be appropriate for everyone.",
    },
  ],

  processTitle: "Before you begin",
  processIntro:
    "Preparation and a gentle warm-up can help you begin comfortably. Confirm the current session format and any specific preparation instructions with the team.",

  process: [
    {
      number: "01",
      title: "Share relevant health context",
      description:
        "Mention injuries, symptoms, movement restrictions, balance concerns and any clinical advice that may affect participation.",
    },
    {
      number: "02",
      title: "Arrive ready to move comfortably",
      description:
        "Choose comfortable clothing and avoid beginning immediately after a heavy meal. Ask the instructor about any specific preparation guidance for your session.",
    },
    {
      number: "03",
      title: "Begin with a gentle warm-up",
      description:
        "Allow time to settle into the practice. Start with low-demand movements and follow the instructor’s directions rather than attempting advanced poses independently.",
    },
    {
      number: "04",
      title: "Review what was manageable",
      description:
        "Share which activities felt comfortable or difficult so the next practice can be discussed and adjusted where appropriate.",
    },
  ],

  contextEyebrow: "Safety and Suitability",
  contextTitle: "Some traditional postures need particular caution.",
  contextParagraphs: [
    "Inversions and advanced positions such as Sarvangasana, Halasana, Shirshasana and Mayurasana require particular caution. They are not suitable for everyone and should not be attempted without qualified instruction. Seek clinical advice first if you have a medical condition, recent injury, pain, balance difficulty or movement restriction.",
    "Stop an activity if it causes pain, dizziness, breathlessness or other concerning symptoms. Therapeutic Yoga does not diagnose or treat disease and must not replace prescribed care.",
  ],

  related: [
    {
      title: "Physician Consultation",
      description:
        "Discuss a health concern or restriction that could affect participation.",
      href: "/services/physician-consultation",
    },
    {
      title: "Lifestyle Medicine",
      description:
        "Explore the wider health programme beyond a Yoga practice session.",
      href: "/services/lifestyle",
    },
    {
      title: "Behaviour, Stress & Mind",
      description:
        "See the separate service for behavioural and stress-related support.",
      href: "/services/behaviour-stress-mind",
    },
  ],

  faq: [
    {
      question: "Does Therapeutic Yoga follow the full 20-pose sequence?",
      answer:
        "Not necessarily. A therapeutic session should select practices according to suitability rather than require every participant to complete an entire traditional sequence.",
    },
    {
      question: "Are advanced poses such as headstand or shoulder stand required?",
      answer:
        "No. Shirshasana, Sarvangasana and other demanding postures are not prerequisites. They may be inappropriate for some people; do not attempt them without qualified instruction and suitable clinical guidance where needed.",
    },
    {
      question: "What should I do before practice?",
      answer:
        "Wear comfortable clothing, allow time for a gentle warm-up and avoid starting immediately after a heavy meal. Confirm any additional preparation instructions with the team.",
    },
    {
      question: "Can beginners participate?",
      answer:
        "Previous Yoga experience is not automatically required. Tell the instructor that you are new so the starting level and terminology can be explained clearly.",
    },
    {
      question: "Where and when are sessions held?",
      answer:
        "Session location, schedule, group format and online availability should be confirmed with Sutra Health before planning a visit.",
    },
  ],

  ctaLabel: "Ask about suitable sessions",
  finalTitle: "Confirm the current practice format before choosing a session.",
  finalDescription:
    "Confirm session timing, location and suitability, particularly if you have a health concern or movement restriction.",
};

export const metadata: Metadata =
  createServiceMetadata(therapeuticYoga);

export default function TherapeuticYogaPage() {
  return <ServicePageTemplate config={therapeuticYoga} />;
}
