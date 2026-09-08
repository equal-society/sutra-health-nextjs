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
];

function archiveThumbUrl(identifier: string) {
  return `https://archive.org/services/img/${encodeURIComponent(identifier)}`;
}

export default function ArchivePage() {
  return (
    <main className={styles.gallery}>
      <section className={styles.hero} aria-labelledby="archive-title">
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Sutra Health</span>
          <h1 id="archive-title">Sutra Health Archive</h1>
          <p>
            Explore our wellness, lifestyle, clinic and publication resources
            in one place.
          </p>
          <a
            className={styles.archiveLink}
            href="https://archive.org/details/@sutra_health"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Our Archive <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className={styles.content} aria-labelledby="resources-title">
        <div className={styles.statusBar}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>Archive resources</span>
        </div>

        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Explore</p>
            <h2 id="resources-title">Sutra Health Archive</h2>
            <p>
              Explore our folders, publications, videos and wellness
              resources.
            </p>
          </div>
          <a
            className={styles.textLink}
            href="https://archive.org/details/@sutra_health"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Internet Archive ↗
          </a>
        </div>

        <div className={styles.grid}>
          {CATEGORIES.map((category) => (
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
                  <span className={styles.openBadge}>Open Archive ↗</span>
                </div>

                <div className={styles.cardBody}>
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <div>
            <strong>Looking for the complete collection?</strong>
            <span>
              Visit Sutra Health&apos;s Internet Archive profile for all
              available resources.
            </span>
          </div>
          <a
            href="https://archive.org/details/@sutra_health"
            target="_blank"
            rel="noopener noreferrer"
          >
            View complete archive ↗
          </a>
        </div>
      </section>
    </main>
  );
}
