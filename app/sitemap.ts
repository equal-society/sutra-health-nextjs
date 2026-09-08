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

  return [
    // ─────────────────────────────
    // PRIMARY
    // ─────────────────────────────
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // ─────────────────────────────
    // CONDITIONS
    // ─────────────────────────────
    {
      url: `${baseUrl}/conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    ...conditionPages,

    // ─────────────────────────────
    // SERVICES
    // ─────────────────────────────
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────
    // OUR APPROACH
    // ─────────────────────────────
    {
      url: `${baseUrl}/approach`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/approach/lifestyle`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/approach/therapeutic-yoga`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/approach/nutrition`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    {
      url: `${baseUrl}/approach/breath-mindfulness`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────
    // INFORMATION
    // ─────────────────────────────
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/doctors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/patient-stories`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ─────────────────────────────
    // TOOLS / ENGAGEMENT
    // ─────────────────────────────
    {
      url: `${baseUrl}/score`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/archive`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // ─────────────────────────────
    // CONVERSION
    // ─────────────────────────────
    {
      url: `${baseUrl}/book-appointment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}