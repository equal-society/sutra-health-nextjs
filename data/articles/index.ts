import type { Article } from "./types";

import { howToManageStress } from "./how-to-manage-stress";
import { yogaForStressRelief } from "./yoga-for-stress-relief";


/* =========================================================
   ALL ARTICLES
========================================================= */

export const articles: Article[] = [
  howToManageStress,
  yogaForStressRelief,
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
========================================================= */

export function getRelatedArticles(
  article: Article,
  limit = 3,
): Article[] {
  return articles
    .filter(
      (item) => item.slug !== article.slug,
    )
    .sort((a, b) => {
      const aSameCategory =
        a.category === article.category ? 1 : 0;

      const bSameCategory =
        b.category === article.category ? 1 : 0;

      return bSameCategory - aSameCategory;
    })
    .slice(0, limit);
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