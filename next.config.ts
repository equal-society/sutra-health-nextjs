
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

      // Organization
      {
        source: "/equal-society",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/equal-society.html",
        destination: "/about",
        permanent: true,
      },

      // Contact - uppercase and lowercase
      {
        source: "/Contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/Contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },

      // Volunteer
      {
        source: "/volunteer",
        destination: "/volunteer",
        permanent: true,
      },
      {
        source: "/volunteer.html",
        destination: "/volunteer",
        permanent: true,
      },

      // Retreat
      {
        source: "/retreat",
        destination: "/retreat-programs",
        permanent: true,
      },
      {
        source: "/retreat.html",
        destination: "/retreat-programs",
        permanent: true,
      },

      // Physician consultation
      {
        source: "/programs/IntegrativeMedicine",
        destination: "/services/physician-consultation",
        permanent: true,
      },
      {
        source: "/programs/IntegrativeMedicine.html",
        destination: "/services/physician-consultation",
        permanent: true,
      },
      {
        source: "/consultation",
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
        source: "/programs/dietary-advice",
        destination: "/services/nutrition",
        permanent: true,
      },
      {
        source: "/programs/dietary-advice.html",
        destination: "/services/nutrition",
        permanent: true,
      },

      // Shirodhara
      {
        source: "/programs/shirodhara",
        destination: "/services/shirodhara",
        permanent: true,
      },
      {
        source: "/programs/shirodhara.html",
        destination: "/services/shirodhara",
        permanent: true,
      },

      // My Buddy
      {
        source: "/programs/my-buddy",
        destination: "/services/my-buddy",
        permanent: true,
      },
      {
        source: "/programs/my-buddy.html",
        destination: "/services/my-buddy",
        permanent: true,
      },

      // Singing, Kirtan and Dance
      {
        source: "/programs/singing-kirtan-dance",
        destination: "/services/behaviour-stress-mind",
        permanent: true,
      },
      {
        source: "/programs/singing-kirtan-dance.html",
        destination: "/services/behaviour-stress-mind",
        permanent: true,
      },

      // Therapeutic Yoga - Yoga Asana
      {
        source: "/Yoga/yoga-asana",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/Yoga/yoga-asana.html",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/Yoga/asana",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/Yoga/asana.html",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/chakrasana-test",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },
      {
        source: "/chakrasana-test.html",
        destination: "/services/therapeutic-yoga/yoga-asana-protocol",
        permanent: true,
      },

      // Therapeutic Yoga - Pranayama
      {
        source: "/Yoga/pranayama",
        destination: "/services/therapeutic-yoga/pranayama",
        permanent: true,
      },
      {
        source: "/Yoga/pranayama.html",
        destination: "/services/therapeutic-yoga/pranayama",
        permanent: true,
      },

      // Therapeutic Yoga - Meditation
      {
        source: "/Yoga/meditation",
        destination: "/services/therapeutic-yoga/meditation",
        permanent: true,
      },
      {
        source: "/Yoga/meditation.html",
        destination: "/services/therapeutic-yoga/meditation",
        permanent: true,
      },

      // Lifestyle Counseling
      {
        source: "/lifestyle",
        destination: "/services/lifestyle",
        permanent: true,
      },
      {
        source: "/lifestyle.html",
        destination: "/services/lifestyle",
        permanent: true,
      },
      {
        source: "/LifeStyle/LifeStyleCounseling",
        destination: "/services/lifestyle/healthy-lifestyle-coaching",
        permanent: true,
      },
      {
        source: "/LifeStyle/LifeStyleCounseling.html",
        destination: "/services/lifestyle/healthy-lifestyle-coaching",
        permanent: true,
      },

      // Lifestyle resources and activities
      {
        source: "/LifeStyle/research",
        destination: "/resources/research",
        permanent: true,
      },
      {
        source: "/LifeStyle/research.html",
        destination: "/resources/research",
        permanent: true,
      },
      {
        source: "/LifeStyle/nature-walks",
        destination: "/services/behaviour-stress-mind/nature-walks",
        permanent: true,
      },
      {
        source: "/LifeStyle/nature-walks.html",
        destination: "/services/behaviour-stress-mind/nature-walks",
        permanent: true,
      },
      {
        source: "/LifeStyle/positive-thinking",
        destination: "/services/behaviour-stress-mind/positive-thinking",
        permanent: true,
      },
      {
        source: "/LifeStyle/positive-thinking.html",
        destination: "/services/behaviour-stress-mind/positive-thinking",
        permanent: true,
      },
      {
        source: "/LifeStyle/soft-sun-rays",
        destination: "/services/behaviour-stress-mind/soft-sun-rays",
        permanent: true,
      },
      {
        source: "/LifeStyle/soft-sun-rays.html",
        destination: "/services/behaviour-stress-mind/soft-sun-rays",
        permanent: true,
      },

      // Gallery
      {
        source: "/Gallery",
        destination: "/archive",
        permanent: true,
      },
      {
        source: "/Gallery.html",
        destination: "/archive",
        permanent: true,
      },

      // Assessment
      {
        source: "/score",
        destination: "/assessment",
        permanent: true,
      },
      {
        source: "/score.html",
        destination: "/assessment",
        permanent: true,
      },

      // Testimonials
      {
        source: "/Components/testimonials",
        destination: "/patient-stories",
        permanent: true,
      },
      {
        source: "/Components/testimonials.html",
        destination: "/patient-stories",
        permanent: true,
      },

      // Newsletter
      {
        source: "/Newsletter",
        destination: "/resources/articles",
        permanent: true,
      },
      {
        source: "/Newsletter.html",
        destination: "/resources/articles",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
