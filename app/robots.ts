import type { MetadataRoute } from "next";

const baseUrl = "https://lifequality.org.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/doctor-login",
          "/doctor-dashboard",
        ],
      },

      // AI search / answer engines
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },

      // Search / advertising crawlers
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}