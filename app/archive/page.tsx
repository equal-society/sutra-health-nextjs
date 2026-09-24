import type { Metadata } from "next";
import styles from "./archive.module.css";

export const metadata: Metadata = {
  title: "Sutra Health Archive | Wellness, Lifestyle & Clinic Resources",
  description:
    "Explore Sutra Health's archive of wellness, lifestyle, clinic, publication, yoga and practitioner resources.",
  alternates: {
    canonical: "https://lifequality.org.in/archive",
  },
  openGraph: {
    title: "Sutra Health Archive",
    description:
      "Explore wellness, lifestyle, clinic and publication resources from Sutra Health.",
    url: "https://lifequality.org.in/archive",
    type: "website",
  },
};

type ArchiveCategory = {
  title: string;
  subtitle: string;
  id: string;
  url: string;
};

const CATEGORIES: ArchiveCategory[] = [
  {
    title: "Nature",
    subtitle: "Nature and wellness",
    id: "sutra-health-nature",
    url: "https://archive.org/details/sutra-health-nature",
  },
  {
    title: "Lifestyle Pearls",
    subtitle: "Lifestyle and health guidance",
    id: "Lifestyle-pearls",
    url: "https://archive.org/details/Lifestyle-pearls",
  },
  {
    title: "Lifestyle Doctor",
    subtitle: "Doctor and lifestyle content",
    id: "Lifestyle-doctor",
    url: "https://archive.org/details/Lifestyle-doctor",
  },
  {
    title: "Principal Crude Herbal Drugs of India",
    subtitle: "Yoga books and academic resources",
    id: "yoga-books",
    url: "https://archive.org/details/yoga-books/Academic/Principal_Crude_Herbal_Drugs_of_Indi/",
  },
  {
    title: "Sutra Health Brochure",
    subtitle: "Brochures and publications",
    id: "sutra_health",
    url: "https://archive.org/details/sutra_health/Sutra-Health/brochure/",
  },
  {
    title: "Clinic",
    subtitle: "Clinic resources",
    id: "lifestyle_clinic",
    url: "https://archive.org/details/lifestyle_clinic",
  },
  {
    title: "Practitioner Experiences",
    subtitle: "Practitioner and follower experiences",
    id: "lifestyle-practitioners-experience",
    url: "https://archive.org/details/lifestyle-practitioners-experience",
  },
  {
    title: "Lifestyle Food",
    subtitle: "Food and healthy lifestyle",
    id: "sutra_health_lifestyle_food",
    url: "https://archive.org/details/sutra_health_lifestyle_food",
  },
  {
    title: "Surya Yoga Sequence",
    subtitle: "Yoga Asana Content",
    id: "surya-yoga-sequence",
    url: "  https://archive.org/details/surya-yoga-sequence",
  },
];

function archiveThumbUrl(identifier: string) {
  return `https://archive.org/services/img/${encodeURIComponent(identifier)}`;
}

export default function ArchivePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="archive-title">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Sutra Health · Archive</p>
              <h1 id="archive-title">
                A collection of our
                <span> health and wellbeing resources.</span>
              </h1>
              <p className={styles.heroText}>
                Explore wellness, lifestyle, clinic and publication resources
                collected by Sutra Health.
              </p>
              <a
                className={styles.primaryLink}
                href="https://archive.org/details/@sutra_health"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the complete archive <span aria-hidden="true">↗</span>
              </a>
            </div>

           
          </div>
        </div>
      </section>

      <section className={styles.collection} aria-labelledby="resources-title">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>Explore</p>
              <h2 id="resources-title">Browse the collection</h2>
            </div>
            <p>
              Eight collections covering lifestyle guidance, clinic material,
              publications, food, nature and practitioner experiences.
            </p>
          </div>

          <div className={styles.grid}>
            {CATEGORIES.map((category, index) => (
              <article className={styles.card} key={category.id}>
                <a
                  className={styles.cardLink}
                  href={category.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${category.title} on Internet Archive`}
                >
                  <div className={styles.thumbnail}>
                    <img
                      src={archiveThumbUrl(category.id)}
                      alt=""
                      loading="lazy"
                    />
                    <div className={styles.fallback} aria-hidden="true">
                      Sutra Health
                    </div>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span>Collection</span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <h3>{category.title}</h3>
                    <p>{category.subtitle}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className={styles.bottomCta}>
            <div>
              <p className={styles.eyebrow}>Internet Archive</p>
              <h2>See the complete collection.</h2>
              <p>
                Open the Sutra Health archive to browse everything currently
                available.
              </p>
            </div>

            <a
              className={styles.secondaryLink}
              href="https://archive.org/details/@sutra_health"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open archive <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
