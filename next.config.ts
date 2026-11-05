import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      // Homepage
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },

      // Organization and information
      {
        source: "/equal-society.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/Contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/volunteer.html",
        destination: "/volunteer",
        permanent: true,
      },
      {
        source: "/retreat.html",
        destination: "/retreat-programs",
        permanent: true,
      },

      // Physician consultation
      {
        source: "/programs/IntegrativeMedicine.html",
        destination: "/services/physician-consultation",
        permanent: true,
      },
      {
        source: "/consultation.html",
        destination: "/services/physician-consultation",
        permanent: true,
      },

      // Nutrition
      {
        source: "/programs/dietary-advice.html",
        destination: "/services/nutrition",
        permanent: true,
      },

      // Shirodhara
      {
        source: "/programs/shirodhara.html",
        destination: "/services/shirodhara",
        permanent: true,
      },

      // My Buddy
      {
        source: "/programs/my-buddy.html",
        destination: "/services/my-buddy",
        permanent: true,
      },

      // Therapeutic yoga
      {
        source: "/Yoga/yoga-asana.html",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/Yoga/pranayama.html",
        destination: "/services/therapeutic-yoga/pranayama",
        permanent: true,
      },
      {
        source: "/Yoga/meditation.html",
        destination: "/services/therapeutic-yoga/meditation",
        permanent: true,
      },
      {
        source: "/chakrasana-test.html",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },

      // Lifestyle
      {
        source: "/lifestyle.html",
        destination: "/services/lifestyle",
        permanent: true,
      },
      {
        source: "/LifeStyle/LifeStyleCounseling.html",
        destination: "/services/lifestyle/healthy-lifestyle-coaching",
        permanent: true,
      },
      {
        source: "/LifeStyle/research.html",
        destination: "/resources/research",
        permanent: true,
      },
      {
        source: "/LifeStyle/nature-walks.html",
        destination: "/services/behaviour-stress-mind/nature-walks",
        permanent: true,
      },
      {
        source: "/LifeStyle/positive-thinking.html",
        destination: "/services/behaviour-stress-mind/positive-thinking",
        permanent: true,
      },
      {
        source: "/LifeStyle/soft-sun-rays.html",
        destination: "/services/behaviour-stress-mind/soft-sun-rays",
        permanent: true,
      },

      // Gallery and archive
      {
        source: "/Gallery.html",
        destination: "/archive",
        permanent: true,
      },

      // Assessment
      {
        source: "/score.html",
        destination: "/assessment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
