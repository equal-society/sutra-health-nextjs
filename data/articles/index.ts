import type { Article } from "./types";

import { howToManageStress } from "./how-to-manage-stress";
import { yogaForStressRelief } from "./yoga-for-stress-relief";
import { whatIsPrediabetesAndCanItBeReversed } from "./what-is-prediabetes-and-can-it-be-reversed";
import { howToLowerBloodPressureNaturally } from "./how-to-lower-blood-pressure-naturally";
import { whatIsAHealthyBalancedDiet } from "./what-is-a-healthy-balanced-diet";
import { howToImproveGutHealthNaturally } from "./how-to-improve-gut-health-naturally";
import { howDoesSleepAffectWeightLoss } from "./how-does-sleep-affect-weight-loss";
import { canWalkingHelpLowerBloodPressure } from "./can-walking-help-lower-blood-pressure";



/* =========================================================
   ALL ARTICLES
========================================================= */

export const articles: Article[] = [
  howToManageStress,
  yogaForStressRelief,
  whatIsPrediabetesAndCanItBeReversed,
  howToLowerBloodPressureNaturally,
  whatIsAHealthyBalancedDiet,
  howToImproveGutHealthNaturally,
  howDoesSleepAffectWeightLoss,
  canWalkingHelpLowerBloodPressure,
];


/* =========================================================
   GET ALL ARTICLES
========================================================= */

export function getArticles(): Article[] {
  return articles;
}


/* =========================================================
   GET ARTICLE BY SLUG
========================================================= */

export function getArticle(
  slug: string,
): Article | undefined {
  return articles.find(
    (article) => article.slug === slug,
  );
}


/* =========================================================
   GET ARTICLE BY SLUG
   Alias for dynamic [slug] page
========================================================= */

export function getArticleBySlug(
  slug: string,
): Article | undefined {
  return getArticle(slug);
}


/* =========================================================
   GET ARTICLES BY CATEGORY
========================================================= */

export function getArticlesByCategory(
  category: string,
): Article[] {
  return articles.filter(
    (article) =>
      article.category.toLowerCase() ===
      category.toLowerCase(),
  );
}


/* =========================================================
   GET ARTICLES BY TYPE
========================================================= */

export function getArticlesByType(
  type: string,
): Article[] {
  return articles.filter(
    (article) => article.type === type,
  );
}


/* =========================================================
   GET RELATED ARTICLES

   Relevance is calculated automatically so newly published
   articles get useful internal links without editing the page
   component. Same-category articles are preferred, followed
   by shared tags/type and finally other recent articles.
========================================================= */

export function getRelatedArticles(
  article: Article,
  limit = 3,
): Article[] {
  const articleTags = new Set(
    (article.tags ?? []).map((tag) => tag.toLowerCase()),
  );

  return articles
    .filter((item) => item.slug !== article.slug)
    .map((item) => {
      const itemTags = new Set(
        (item.tags ?? []).map((tag) => tag.toLowerCase()),
      );

      const sharedTags = [...articleTags].filter((tag) =>
        itemTags.has(tag),
      ).length;

      const sameCategory =
        item.category.toLowerCase() === article.category.toLowerCase()
          ? 4
          : 0;

      const sameType = item.type === article.type ? 2 : 0;

      const score = sameCategory + sameType + sharedTags;

      return { item, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;

      return (
        new Date(b.item.updatedDate ?? b.item.date).getTime() -
        new Date(a.item.updatedDate ?? a.item.date).getTime()
      );
    })
    .slice(0, limit)
    .map(({ item }) => item);
}

/* =========================================================
   AUTOMATIC ARTICLE INTERNAL LINKS

   These are derived from article topic/category/slug. A new
   article therefore gets contextual links automatically.
========================================================= */

export type ArticleInternalLink = {
  label: string;
  href: string;
  type: "Health condition" | "Service" | "Resource";
};

export function getArticleContextLinks(
  article: Article,
): ArticleInternalLink[] {
  const slug = article.slug.toLowerCase();
  const title = article.title.toLowerCase();
  const haystack = `${slug} ${title}`;

  if (haystack.includes("blood-pressure") || haystack.includes("blood pressure")) {
    return [
      {
        label: "High Blood Pressure",
        href: "/conditions/high-blood-pressure",
        type: "Health condition",
      },
      {
        label: "Lifestyle Medicine",
        href: "/services/lifestyle",
        type: "Service",
      },
    ];
  }

  if (haystack.includes("prediabetes") || haystack.includes("diabetes")) {
    return [
      {
        label: "Diabetes & Blood Sugar",
        href: "/conditions/diabetes-blood-sugar",
        type: "Health condition",
      },
      {
        label: "Nutrition Counselling",
        href: "/services/nutrition",
        type: "Service",
      },
    ];
  }

  if (haystack.includes("gut-health") || haystack.includes("gut health") || haystack.includes("digestion")) {
    return [
      {
        label: "Digestive & Gut Health",
        href: "/conditions/digestive-gut-health",
        type: "Health condition",
      },
      {
        label: "Nutrition Counselling",
        href: "/services/nutrition",
        type: "Service",
      },
    ];
  }

  if (haystack.includes("weight") || haystack.includes("sleep")) {
    return [
      {
        label: "Weight & Obesity",
        href: "/conditions/weight-management",
        type: "Health condition",
      },
      {
        label: "Lifestyle Medicine",
        href: "/services/lifestyle",
        type: "Service",
      },
    ];
  }

  if (haystack.includes("yoga") || haystack.includes("pranayama") || article.category === "Yoga & Movement") {
    return [
      {
        label: "Therapeutic Yoga",
        href: "/services/therapeutic-yoga",
        type: "Service",
      },
      {
        label: "Behaviour & Stress Support",
        href: "/services/behaviour-stress-mind",
        type: "Service",
      },
    ];
  }

  if (haystack.includes("stress") || haystack.includes("mindfulness") || article.category === "Stress & Mindfulness") {
    return [
      {
        label: "Behaviour & Stress Support",
        href: "/services/behaviour-stress-mind",
        type: "Service",
      },
      {
        label: "Lifestyle Medicine",
        href: "/services/lifestyle",
        type: "Service",
      },
    ];
  }

  if (article.category === "Nutrition" || article.type === "Nutrition Guide") {
    return [
      {
        label: "Nutrition Counselling",
        href: "/services/nutrition",
        type: "Service",
      },
      {
        label: "Lifestyle Medicine",
        href: "/services/lifestyle",
        type: "Service",
      },
    ];
  }

  return [
    {
      label: "Health Conditions",
      href: "/conditions",
      type: "Health condition",
    },
    {
      label: "Health Services",
      href: "/services",
      type: "Service",
    },
  ];
}

export function getArticleRelatedCare(
  article: Article,
): ArticleInternalLink[] {
  const contextLinks = getArticleContextLinks(article);

  const physicianLink: ArticleInternalLink = {
    label: "Physician Consultation",
    href: "/services/physician-consultation",
    type: "Service",
  };

  return [...contextLinks, physicianLink].slice(0, 3);
}


/* =========================================================
   ARTICLE CATEGORIES
========================================================= */

export const articleCategories = [
  "All",
  "Stress & Mindfulness",
  "Gut Health & Digestion",
  "Nutrition",
  "Yoga & Movement",
  "Sleep & Recovery",
  "Healthy Habits",
  "Women's Health",
  "Men's Health",
  "Health Conditions",
  "Preventive Health",
  "Ayurveda & Indian Wellness",
  "Retreat & Wellbeing",
];


/* =========================================================
   ARTICLE TYPES
========================================================= */

export const articleTypes = [
  "All",
  "Guide",
  "Explainer",
  "How-to",
  "Yoga Practice",
  "Nutrition Guide",
  "Condition Guide",
  "Research & Evidence",
];


/* =========================================================
   RE-EXPORT TYPES
========================================================= */

export type {
  Article,
  ArticleFAQ,
  ArticleSection,
} from "./types";