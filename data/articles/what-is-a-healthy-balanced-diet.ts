import type { Article } from "./types";

export const whatIsAHealthyBalancedDiet: Article = {
  slug: "what-is-a-healthy-balanced-diet",
  title: "What Is a Healthy Balanced Diet?",
  category: "Nutrition",
  type: "Nutrition Guide",
  readTime: "7 min read",
  date: "2026-09-14",
  excerpt:
    "A practical guide to dietary variety, balance, moderation and the everyday foods that form a healthy eating pattern.",
  image: "/images/articles/healthly-food.png",
  content: {
    introduction:
      "There is no single perfect menu for everyone. A healthy diet is better understood as a pattern built around adequacy, balance, moderation and diversity, adapted to individual needs, culture and locally available foods.",
    sections: [
      {
        heading: "What makes a diet balanced?",
        paragraphs: [
          "WHO describes healthy diets using four broad principles: adequacy, balance, moderation and diversity. These principles can be applied to many different cultural and dietary patterns.",
        ],
      },
      {
        heading: "Build meals around a variety of foods",
        paragraphs: [
          "A varied diet can include vegetables, fruits, pulses, whole grains, nuts and appropriate sources of protein. The balance between foods depends on individual needs, activity, age, health and cultural context.",
        ],
        bullets: [
          "Include a variety of vegetables and fruits.",
          "Choose pulses and whole grains regularly.",
          "Include appropriate protein sources.",
          "Prefer minimally processed foods more often.",
          "Limit excess free sugars, sodium and unhealthy fats.",
        ],
      },
      {
        heading: "Does healthy eating mean avoiding carbohydrates?",
        paragraphs: [
          "No. WHO guidance identifies whole grains, vegetables, fruits and pulses as important sources of carbohydrates. The quality and overall pattern of the diet matter more than eliminating an entire food group for most people.",
        ],
      },
      {
        heading: "How can you make healthy eating practical?",
        paragraphs: [
          "Start with changes that fit your normal meals. Adding vegetables or pulses to familiar dishes, choosing whole grains more often and reducing highly processed snacks can be more sustainable than following a rigid short-term diet.",
        ],
      },
    ],
    takeaway:
      "A balanced diet is a pattern, not a single meal. Variety, adequacy, moderation and balance provide a useful framework for everyday eating.",
    whenToSeekHelp:
      "If you have diabetes, kidney disease, digestive conditions, food allergies or another condition requiring a specific diet, seek individual guidance from a qualified healthcare professional or dietitian.",
  },
  faqs: [
    {
      question: "What are the main parts of a healthy diet?",
      answer:
        "A healthy diet can include a variety of vegetables, fruits, pulses, whole grains, nuts and appropriate protein foods, while limiting excess sodium, free sugars and unhealthy fats.",
    },
    {
      question: "Do I need to avoid rice or roti?",
      answer:
        "Not necessarily. Staple foods such as rice and wheat can be part of a healthy eating pattern. Overall dietary variety, portions and food quality matter.",
    },
    {
      question: "Is there one ideal diet for everyone?",
      answer:
        "No. Healthy diets vary with individual needs, culture, food availability, preferences and health circumstances.",
    },
  ],
  sources: [
    "WHO — Healthy diet|https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    "WHO — Healthy diet: India|https://www.who.int/india/health-topics/healthy-diet-1",
    "WHO & FAO — What are healthy diets?|https://www.who.int/publications/i/item/9789240101876",
  ],
};
