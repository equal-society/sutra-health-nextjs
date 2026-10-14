import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { conditions, getAllSubpageParams } from "@/data/conditions";

const baseUrl = "https://lifequality.org.in";

const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/conditions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/doctors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources/articles", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources/research", changeFrequency: "monthly", priority: 0.7 },
  { path: "/patient-stories", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/retreat-programs", changeFrequency: "monthly", priority: 0.7 },
  { path: "/volunteer", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/assessment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-appointment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/archive", changeFrequency: "monthly", priority: 0.4 },
];

const servicePaths = [
  "/services/physician-consultation",
  "/services/physician-consultation/abha",
  "/services/physician-consultation/appointment-options",
  "/services/physician-consultation/health-awareness-tools",
  "/services/physician-consultation/what-to-expect",
  "/services/lifestyle",
  "/services/lifestyle/daily-habits",
  "/services/lifestyle/healthy-lifestyle-coaching",
  "/services/lifestyle/six-pillar",
  "/services/nutrition",
  "/services/nutrition/what-to-eat",
  "/services/nutrition/what-to-avoid",
  "/services/nutrition/meal-routine-hydration",
  "/services/therapeutic-yoga",
  "/services/therapeutic-yoga/meditation",
  "/services/therapeutic-yoga/pranayama",
  "/services/therapeutic-yoga/yoga-asana-protocol",
  "/services/behaviour-stress-mind",
  "/services/behaviour-stress-mind/positive-thinking",
  "/services/behaviour-stress-mind/soft-sun-rays",
  "/services/behaviour-stress-mind/nature-walks",
  "/services/shirodhara",
  "/services/shirodhara/abhyanga-massage",
  "/services/shirodhara/shirodhara-therapy",
  "/services/shirodhara/what-to-expect",
  "/services/my-buddy",
  "/services/my-buddy/join",
  "/services/my-buddy/wellbeing-lessons",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteContentLastModified = new Date("2026-10-14");

  const page = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path}`,
    lastModified: siteContentLastModified,
    changeFrequency,
    priority,
  });

  const conditionPages = conditions.map((condition) =>
    page(`/conditions/${condition.slug}`, "monthly", 0.8),
  );

  const conditionSubpages = getAllSubpageParams().map(({ slug, subslug }) =>
    page(`/conditions/${slug}/${subslug}`, "monthly", 0.7),
  );

  const servicePages = servicePaths.map((path) =>
    page(path, "monthly", path.split("/").length > 3 ? 0.7 : 0.8),
  );

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/resources/articles/${article.slug}`,
    lastModified: new Date(article.updatedDate ?? article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) =>
      page(path, changeFrequency, priority),
    ),
    ...conditionPages,
    ...conditionSubpages,
    ...servicePages,
    ...articlePages,
  ];
}
