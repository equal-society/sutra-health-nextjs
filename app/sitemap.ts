import type { MetadataRoute } from "next";
import { conditions } from "@/data/conditions";

const baseUrl = "https://lifequality.org.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const conditionPages: MetadataRoute.Sitemap = conditions.map(
    (condition) => ({
      url: `${baseUrl}/conditions/${condition.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const healthGuidePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resources/health-guides/positive-thinking`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/health-guides/soft-sun-rays`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/health-guides/nature-walks`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "/services/physician-consultation",
    "/services/lifestyle",
    "/services/nutrition",
    "/services/therapeutic-yoga",
    "/services/behaviour-stress-mind",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    // PRIMARY
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // CONDITIONS
    {
      url: `${baseUrl}/conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...conditionPages,

    // SERVICES
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,

    // APPROACH
    {
      url: `${baseUrl}/approach`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // INFORMATION
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // HEALTH GUIDES
    {
      url: `${baseUrl}/resources/health-guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...healthGuidePages,

    // OTHER INDEXABLE PAGES
    {
      url: `${baseUrl}/archive`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/retreat-programs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/volunteer`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ASSESSMENT
    {
      url: `${baseUrl}/assessment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // CONVERSION
    {
      url: `${baseUrl}/book-appointment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}