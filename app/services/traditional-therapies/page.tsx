import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

// Concise service copy; the shared Sutra Health page UI is unchanged.
const behaviourStressMind: ServicePageConfig = {
  name: "Behaviour, Stress & Mind",
  slug: "behaviour-stress-mind",
  title: "Behaviour, Stress & Mind Support | Sutra Health",
  description:
    "Practical support for stress, everyday habits and mind-body wellbeing at Sutra Health.",
  heroDescription:
    "Explore practical ways to work with stress and everyday habits, with support shaped around your needs and routine.",
  trust: ["Practical guidance", "Individual needs", "Faridabad, Delhi NCR & online"],
  introEyebrow: "Behaviour, Stress & Mind",
  introTitle: "Small, realistic steps for everyday wellbeing.",
  introParagraphs: [
    "Stress and daily habits can influence how we feel and how we manage everyday life.",
    "Sutra Health offers practical guidance to help you understand patterns and consider manageable changes. Support is adapted to your circumstances and may complement appropriate medical care.",
  ],
  focusEyebrow: "Areas of Support",
  focusTitle: "Understand patterns. Practise useful skills.",
  focusIntro:
    "The focus is based on what you are experiencing and what feels practical to work on.",
  focusAreas: [
    {
      number: "01",
      title: "Stress awareness",
      description: "Recognise common stressors and how they affect your daily routine.",
    },
    {
      number: "02",
      title: "Breathing and relaxation",
      description: "Explore suitable breathing, relaxation or mindfulness practices.",
    },
    {
      number: "03",
      title: "Everyday habits",
      description: "Notice routines and identify small changes that may be easier to sustain.",
    },
    {
      number: "04",
      title: "Mind-body wellbeing",
      description: "Consider the relationship between daily experiences, wellbeing and health habits.",
    },
  ],
  processTitle: "How support works",
  processIntro:
    "Begin with your current concerns and agree on realistic areas to explore.",
  process: [
    {
      number: "01",
      title: "Understand",
      description: "Discuss your concerns, routine and goals.",
    },
    {
      number: "02",
      title: "Identify priorities",
      description: "Explore stressors or habits you would like to address.",
    },
    {
      number: "03",
      title: "Practise practical techniques",
      description: "Consider suitable strategies such as relaxation, breathing or habit adjustments.",
    },
    {
      number: "04",
      title: "Review",
      description: "Reflect on what is useful and adapt next steps as needed.",
    },
  ],
  contextEyebrow: "Supportive Care",
  contextTitle: "A practical part of your wider health plan.",
  contextParagraphs: [
    "This support may sit alongside Lifestyle Medicine, Therapeutic Yoga or physician consultation, depending on your needs.",
    "It is not a substitute for mental healthcare or medical treatment. If distress is persistent, severe or affecting daily functioning, seek support from a qualified mental health professional or clinician.",
  ],
  related: [
    {
      title: "Lifestyle Medicine",
      description: "Consider stress alongside other everyday health factors.",
      href: "/services/lifestyle",
    },
    {
      title: "Therapeutic Yoga",
      description: "Explore guided movement, breathing and awareness practices.",
      href: "/services/therapeutic-yoga",
    },
    {
      title: "Physician Consultation",
      description: "Discuss health concerns and appropriate clinical next steps.",
      href: "/services/physician-consultation",
    },
  ],
  faq: [
    {
      question: "What does this service focus on?",
      answer:
        "It focuses on practical support for stress awareness, everyday habits and mind-body wellbeing, based on your needs.",
    },
    {
      question: "Will I learn relaxation or breathing techniques?",
      answer:
        "Where suitable, guidance may include breathing, relaxation or mindfulness practices.",
    },
    {
      question: "Is this a replacement for therapy or medical care?",
      answer:
        "No. It does not replace assessment or treatment by a qualified mental health professional or clinician.",
    },
  ],
  finalTitle: "Start with what feels manageable.",
  finalDescription:
    "Discuss your concerns and identify a practical next step.",
};

export const metadata: Metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
