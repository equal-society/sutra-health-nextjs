
import type { Metadata } from "next";
import ServicePageTemplate, {
  createServiceMetadata,
  type ServicePageConfig,
} from "@/components/services/ServicePageTemplate";

const behaviourStressMind: ServicePageConfig = {
  name: "Behaviour, Stress & Mind",
  slug: "behaviour-stress-mind",
  title: "Stress Management & Mind-Body Support | Sutra Health",
  description:
    "Explore practical support for stress, daily habits and mind-body wellbeing at Sutra Health in Faridabad, Delhi NCR and online.",

  heroDescription:
    "Understand how stress and daily routines affect your wellbeing, and explore practical ways to make manageable changes with guidance suited to your circumstances.",

  trust: [
    "Practical guidance",
    "Support shaped around your needs",
    "Faridabad, Delhi NCR & online",
  ],

  introEyebrow: "Behaviour, Stress & Mind",
  introTitle: "Make space for healthier everyday patterns.",
  introParagraphs: [
    "Stress, habits and daily demands can influence how you feel, respond to challenges and manage your health.",
    "This service helps you reflect on those patterns and explore realistic strategies for everyday life. The approach is guided by your concerns, routine and priorities, and may complement appropriate medical care.",
  ],

  focusEyebrow: "Areas of Support",
  focusTitle: "Practical skills for everyday challenges.",
  focusIntro:
    "Choose areas to explore based on your current concerns, comfort and goals.",

  focusAreas: [
    {
      number: "01",
      title: "Stress awareness",
      description:
        "Identify common sources of stress and notice how they influence your thoughts, responses and routine.",
    },
    {
      number: "02",
      title: "Breathing and relaxation",
      description:
        "Explore suitable breathing, relaxation or mindfulness practices that can be incorporated into daily life.",
    },
    {
      number: "03",
      title: "Habit patterns",
      description:
        "Understand everyday routines and identify small, realistic adjustments that may be easier to maintain.",
    },
    {
      number: "04",
      title: "Mind-body wellbeing",
      description:
        "Explore how daily experiences, personal wellbeing and health-related behaviours can interact.",
    },
  ],

  processTitle: "How support works",
  processIntro:
    "The process begins with your concerns and focuses on practical steps that fit your circumstances.",

  process: [
    {
      number: "01",
      title: "Share your concerns",
      description:
        "Discuss what has been difficult, your daily routine and what you would like to work on.",
    },
    {
      number: "02",
      title: "Explore patterns",
      description:
        "Identify relevant stressors, responses or habits without trying to change everything at once.",
    },
    {
      number: "03",
      title: "Choose practical strategies",
      description:
        "Consider suitable approaches such as relaxation, breathing exercises, mindfulness or habit adjustments.",
    },
    {
      number: "04",
      title: "Review your next steps",
      description:
        "Reflect on what feels useful and adapt the approach according to your experience and needs.",
    },
  ],

  contextEyebrow: "Supportive Care",
  contextTitle: "Know when additional support may help.",
  contextParagraphs: [
    "Behaviour and stress support may complement Lifestyle Medicine, Therapeutic Yoga or physician consultation, depending on your circumstances.",
    "This service is not a substitute for psychological therapy, mental healthcare or medical treatment. If distress is persistent, severe or interfering with daily functioning, consult a qualified mental health professional or clinician.",
  ],

  related: [
    {
      title: "Lifestyle Medicine",
      description:
        "Explore how stress management fits within broader everyday health habits.",
      href: "/services/lifestyle",
    },
    {
      title: "Therapeutic Yoga",
      description:
        "Learn about guided movement, breathing and body-awareness practices.",
      href: "/services/therapeutic-yoga",
    },
    {
      title: "Physician Consultation",
      description:
        "Discuss health concerns and appropriate clinical next steps.",
      href: "/services/physician-consultation",
    },
  ],

  faq: [
    {
      question: "What can I expect from Behaviour, Stress & Mind support?",
      answer:
        "The service focuses on understanding stress patterns, everyday habits and practical approaches to wellbeing. The areas discussed depend on your concerns and goals.",
    },
    {
      question: "Are breathing and relaxation techniques included?",
      answer:
        "Where appropriate, guidance may include breathing, relaxation or mindfulness practices selected according to your comfort and needs.",
    },
    {
      question: "Do I need to change my entire routine?",
      answer:
        "No. The focus is on identifying manageable areas for change rather than expecting major changes all at once.",
    },
    {
      question: "Can this replace therapy or medical treatment?",
      answer:
        "No. This service does not replace assessment or treatment from a qualified mental health professional or clinician. Seek appropriate professional care when needed.",
    },
  ],

  finalTitle: "Begin with one practical step.",
  finalDescription:
    "Share what you are experiencing and explore a suitable next step with guidance.",

};

export const metadata: Metadata = createServiceMetadata(behaviourStressMind);

export default function BehaviourStressMindPage() {
  return <ServicePageTemplate config={behaviourStressMind} />;
}
