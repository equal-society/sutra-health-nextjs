// data/conditions/weight-management.ts
import type { Condition } from "./types";

export const weightManagement: Condition = {
  slug: "weight-management",
  title: "Weight Management",

  shortDescription:
    "An honest look at what actually helps with weight — nutrition and behavioral change more than yoga alone — grounded in real research.",

  introduction:
    "We want to be direct about something most wellness sites aren't: yoga alone has not been shown, in the largest available research, to significantly reduce weight, body fat, or waist circumference. What does have real evidence behind it — dietary pattern, sleep, stress, and behavioral support around eating — is what we actually build a plan around, informed by Dr. Rakesh Sarwal, MBBS, MPH, DrPH.",

  concerns: [
    "Difficulty maintaining a healthy weight",
    "Repeated weight-loss and weight-gain cycles",
    "Stress eating or emotional eating patterns",
    "Wanting an honest picture, not a miracle claim",
    "Difficulty sustaining nutrition and activity changes long-term",
    "Weight goals connected to a broader health concern (blood pressure, blood sugar)",
  ],

  lifestyleFactors: [
    {
      title: "Dietary pattern",
      description:
        "The strongest evidence for weight-related outcomes comes from sustained dietary pattern change, not any single practice — see our Nutrition approach.",
    },
    {
      title: "Sleep and stress",
      description:
        "Sleep and stress affect eating behavior and hunger regulation, independent of diet and exercise.",
    },
    {
      title: "Eating behavior and self-regulation",
      description:
        "Reducing dietary lapses — stress eating, overeating, loss of control around food — has real supporting evidence, distinct from weight loss itself.",
    },
    {
      title: "Movement, including but not limited to yoga",
      description:
        "Physical activity matters for weight management broadly; yoga specifically plays a more limited, behavioral-support role than a direct metabolic one.",
    },
  ],

  sections: [
    {
      title: "Being honest: what the largest research actually shows about yoga and weight",
      content: [
        "A systematic review and meta-analysis of 30 randomized controlled trials (2,173 participants) found yoga did not significantly affect weight, body fat percentage, or waist circumference across the general population studied. Some effect on BMI was found specifically in overweight or obese participants compared to usual care, but this finding wasn't robust against risk of bias in the underlying studies.",
        "We're saying this plainly because a lot of wellness marketing implies yoga is a weight-loss tool, and the strongest available evidence doesn't support that claim as stated. This doesn't mean yoga has no role — it means the role is different from what's often implied.",
      ],
    },
    {
      title: "Where yoga's real value shows up: eating behavior, not the scale directly",
      content: [
        "A randomized trial studying yoga alongside behavioral weight-loss treatment found yoga participants reported fewer lapses from their dietary plan — less overeating, less stress eating, less difficulty resisting food temptations — compared to a contact-matched control group.",
        "In that same research, among participants who had already lost a meaningful amount of weight (5% or more) in the first three months, those also practicing yoga went on to lose significantly more weight by 6 months, alongside greater improvements in distress tolerance, mindfulness, and self-compassion. This suggests yoga's role may be supporting the psychological and behavioral side of weight management, for people already engaged in a structured plan — not acting as a standalone weight-loss method.",
      ],
    },
    {
      title: "What actually has stronger evidence: nutrition and sustained habits",
      content: [
        "The dietary pattern evidence — particularly DASH and Mediterranean-style eating — has a considerably stronger and more consistent research base for weight-related outcomes than yoga does specifically. See our Nutrition approach page for the actual trial evidence behind these patterns.",
        "Sleep and stress management also have real, separate evidence connecting them to eating behavior and weight regulation, covered on our Lifestyle Medicine page.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We build weight-related plans around dietary pattern, sleep, stress, and behavioral support — with yoga included specifically for its role in reducing dietary lapses and supporting self-regulation, not marketed as a direct weight-loss method it hasn't been shown to be.",
        "This is not a replacement for medical evaluation where weight is connected to another diagnosed condition; we coordinate with your physician where relevant.",
      ],
    },
  ],

  approach: [
    "Dietary pattern (DASH / Mediterranean-style)",
    "Sleep and stress management",
    "Eating-behavior and self-regulation support",
    "Movement, including yoga for its behavioral role",
  ],

  support: [
    "Personalized nutrition counselling",
    "Sleep and stress-management guidance",
    "Yoga and mindfulness practices supporting eating behavior",
    "Coordination with medical care where weight connects to another condition",
  ],

  evidence: [
    {
      claim:
        "A systematic review and meta-analysis of 30 RCTs (2,173 participants) found yoga did not significantly affect weight, body fat percentage, or waist circumference in general populations studied.",
      source: "Systematic review and meta-analysis",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0091743516300366",
    },
    {
      claim:
        "In a randomized trial, participants combining yoga with behavioral weight-loss treatment reported fewer dietary lapses (less overeating, stress eating, and difficulty resisting temptation) than a contact-matched control group.",
      source: "PATH Trial protocol and preliminary findings, RCT",
      url: "https://www.researchgate.net/publication/401230703",
    },
    {
      claim:
        "Among participants with high initial weight loss (5%+ in the first 3 months), those also practicing yoga lost significantly more weight by 6 months (-9.0kg vs -6.7kg) than a non-yoga control group.",
      source: "Randomized trial on long-term weight loss",
      url: "https://pubmed.ncbi.nlm.nih.gov/35120162/",
    },
  ],

  faqs: [
    {
      question: "Does yoga help with weight loss?",
      answer:
        "The largest available evidence — a meta-analysis of 30 RCTs with over 2,000 participants — found yoga alone did not significantly reduce weight, body fat, or waist circumference. Where yoga does show a real, evidence-backed role is in supporting eating behavior: reducing dietary lapses and stress eating, particularly when combined with a structured nutrition plan. We won't claim yoga drives weight loss on its own, because the research doesn't support that.",
    },
    {
      question: "What actually works for weight management, if not yoga alone?",
      answer:
        "Sustained dietary pattern change (see our Nutrition approach, particularly DASH and Mediterranean-style evidence), sleep and stress management, and behavioral support around eating have stronger, more consistent evidence than yoga specifically for weight-related outcomes.",
    },
    {
      question: "Is there any role for yoga in a weight management plan?",
      answer:
        "Yes, but a specific one: supporting self-regulation and reducing dietary lapses like stress eating and overeating, rather than acting as a direct weight-loss method. One trial found this effect was strongest for people who had already started losing weight through a structured plan.",
    },
  ],

  relatedConditions: ["metabolic-health", "high-blood-pressure", "digestive-gut-health"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
    { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
    { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  ],
};