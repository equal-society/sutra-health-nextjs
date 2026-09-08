// data/conditions/womens-health.ts
import type { Condition } from "./types";

export const womensHealth: Condition = {
  slug: "womens-health",
  title: "Women's Health",

  shortDescription:
    "Focused on PCOS and menopause-related symptoms — the two areas where lifestyle and yoga interventions have real, specific clinical evidence.",

  introduction:
    "\"Women's health\" covers a huge range of things, and we'd rather be specific than vague. Our lifestyle medicine approach has real evidence behind it in two areas particularly: PCOS (polycystic ovary syndrome) and menopause-related symptoms. For pregnancy care, gynecological conditions, or anything requiring obstetric or gynecological medical management, please see an OB-GYN — that's outside what a lifestyle medicine clinic should be treating.",

  concerns: [
    "PCOS (polycystic ovary syndrome) and insulin resistance",
    "Irregular cycles connected to PCOS",
    "Menopause-related symptoms (hot flashes, mood, sleep disruption)",
    "Wanting lifestyle support alongside gynecological or endocrine care",
    "Uncertainty about which lifestyle changes are actually evidence-backed for these conditions specifically",
  ],

  lifestyleFactors: [
    {
      title: "Structured yoga practice (for PCOS)",
      description:
        "Specifically studied for its effect on insulin resistance in PCOS — a different mechanism than general fitness.",
    },
    {
      title: "Dietary pattern (for PCOS)",
      description:
        "Insulin resistance in PCOS responds to the same dietary-pattern principles covered on our Nutrition page.",
    },
    {
      title: "Mindfulness-based practice (for menopause)",
      description:
        "Structured mindfulness programs have trial evidence specifically for menopausal symptom reduction.",
    },
    {
      title: "Sleep",
      description:
        "Sleep disruption is common in both PCOS and menopause, and is addressed as part of the broader lifestyle plan.",
    },
  ],

  sections: [
    {
      title: "PCOS: yoga ranked highest among exercise types for insulin resistance",
      content: [
        "A Bayesian network meta-analysis of 19 randomized controlled trials (808 women with PCOS) compared six exercise approaches — yoga, moderate-intensity training, high-intensity interval training, resistance training, combined training, and no-exercise controls — for their effect on insulin resistance (HOMA-IR) and testosterone levels.",
        "Yoga ranked highest of all six approaches for reducing insulin resistance (SUCRA = 90.73%, meaning it outperformed the other approaches most consistently across the pooled trials), ahead of high-intensity interval training, which ranked second. This is a genuinely strong, comparative finding — not just 'yoga helps a little,' but yoga outperforming other studied exercise types specifically for this outcome.",
        "Separately, a randomized controlled trial found regular mindful yoga practice improved androgen levels in women with PCOS, addressing a core hormonal feature of the condition rather than just a downstream symptom.",
      ],
    },
    {
      title: "Why insulin resistance matters so much in PCOS specifically",
      content: [
        "Insulin resistance is considered a hallmark driver of PCOS, independent of body weight, and is linked to the hormonal, reproductive, and metabolic features of the condition. This is exactly why the yoga research here connects directly to our Metabolic Health approach — PCOS and metabolic health share real physiological overlap, not just a coincidental lifestyle connection.",
      ],
    },
    {
      title: "Menopause: mindfulness with measured symptom reduction",
      content: [
        "A randomized controlled trial comparing an 8-week Mindfulness-Based Stress Reduction (MBSR) program against menopause education found both groups improved, but the MBSR group showed a significantly greater reduction specifically in anxiety and depression symptom scores related to menopause by 8 months.",
        "This connects directly to the broader mindfulness evidence on our Breath & Mindfulness page — the same structured approach, applied specifically to menopausal symptoms.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "For PCOS, we build a plan around structured yoga specifically informed by the insulin-resistance research above, combined with dietary pattern guidance. For menopause-related symptoms, we use structured mindfulness practice with a real trial basis.",
        "This is not a substitute for gynecological or endocrine medical care. PCOS diagnosis and hormonal management should involve your treating physician; we coordinate with that care rather than replace it.",
      ],
    },
  ],

  approach: [
    "Structured therapeutic yoga (PCOS-specific)",
    "Dietary pattern guidance",
    "Mindfulness-based practice (menopause-specific)",
    "Sleep support",
  ],

  support: [
    "PCOS-informed yoga practice",
    "Nutrition counselling for insulin resistance",
    "Structured mindfulness practice for menopausal symptoms",
    "Coordination with your gynecologist or endocrinologist",
  ],

  evidence: [
    {
      claim:
        "A Bayesian network meta-analysis of 19 RCTs (808 women with PCOS) found yoga ranked highest among six exercise modalities for reducing insulin resistance (HOMA-IR), ahead of HIIT, moderate training, and resistance training.",
      source: "Network meta-analysis",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12427719/",
    },
    {
      claim:
        "A randomized controlled trial found regular mindful yoga practice improved androgen levels in women with PCOS.",
      source: "RCT, Journal of Osteopathic Medicine",
      url: "https://www.degruyterbrill.com/document/doi/10.7556/jaoa.2020.050/html",
    },
    {
      claim:
        "A randomized controlled trial found an 8-week MBSR program produced significantly greater reductions in anxiety and depression symptoms related to menopause than a menopause-education control group.",
      source: "RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5919973/",
    },
  ],

  faqs: [
    {
      question: "Can yoga help with PCOS?",
      answer:
        "There's genuinely strong comparative evidence for this. A network meta-analysis of 19 randomized trials (808 women with PCOS) found yoga ranked highest among six studied exercise types for reducing insulin resistance — a core driver of PCOS. A separate trial found yoga improved androgen levels specifically. This is one of the stronger evidence bases on our whole site.",
    },
    {
      question: "Can yoga or lifestyle changes help with menopause symptoms?",
      answer:
        "Structured mindfulness practice has trial evidence here specifically. An 8-week MBSR program showed significantly greater reductions in anxiety and depression symptoms related to menopause compared to a menopause-education program.",
    },
    {
      question: "Do you provide pregnancy or gynecological care?",
      answer:
        "No. We're a lifestyle medicine clinic, not an obstetric or gynecological practice. For pregnancy care or gynecological conditions requiring medical management, please see an OB-GYN. We focus specifically on PCOS and menopause-related lifestyle support, alongside your existing medical care.",
    },
  ],

  relatedConditions: ["metabolic-health", "weight-management","high-blood-pressure"],

  internalLinks: [
    { label: "Metabolic Health", href: "/conditions/metabolic-health" },
    { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
    { label: "Nutrition", href: "/approach/nutrition" },
  ],
};