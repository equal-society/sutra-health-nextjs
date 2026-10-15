import type { MetadataRoute } from "next";

const baseUrl = "https://lifequality.org.in";

const privatePaths = ["/api/", "/doctor-login", "/doctor-dashboard"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },

      // AI search / answer engines
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: privatePaths,
      },

      // Search / advertising crawlers
      {
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: privatePaths,
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}