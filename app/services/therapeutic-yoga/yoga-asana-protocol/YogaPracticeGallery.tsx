import Image from "next/image";

type Practice = {
  name: string;
  image: string;
  url?: string;
  externalImage?: boolean;
};

const warmup: Practice = {
  name: "Warm-up",
  image: "/images/thumbnails/01-warm-up.webp",
  url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/tadasana-2026-07-29.mp4",
};

const poses: Practice[] = [
  { name: "Tadasana", image: "/images/thumbnails/01-tadasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/tadasana-2026-07-13.mp4" },
  { name: "Vriksha Asana", image: "/images/thumbnails/02-vriksha-asana.webp" },
  { name: "Surya Namaskar", image: "/images/thumbnails/03-surya-namaskar.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/surya-namaskar-2026-06-14.mp4" },
  { name: "Shavasana", image: "/images/thumbnails/04-shavasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-11-2026-08-17.mp4" },
  { name: "Pawanmukt Asana", image: "https://img.youtube.com/vi/b4unFpb4HW8/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=b4unFpb4HW8" },
  { name: "Sarvangasana", image: "/images/thumbnails/06-sarvangasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/sarvangasana-2026-07-28.mp4" },
  { name: "Matsyasana", image: "/images/thumbnails/07-matsyasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/matsyasana-2026-08-19.mp4" },
  { name: "Halasana", image: "https://img.youtube.com/vi/hvFsZCy5gWg/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=hvFsZCy5gWg" },
  { name: "Pashchimottanasana", image: "/images/thumbnails/09-paschimottanasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/pashchimottanasana-2026-07-16.mp4" },
  { name: "Shirshasana", image: "/images/thumbnails/10-shirshasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-17-2026-08-17.mp4" },
  { name: "Sheshank Asana", image: "/images/thumbnails/11-sheshank-asana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/shashankasana-2026-06-13.mp4" },
  { name: "Bhujang / Sarpasana", image: "/images/thumbnails/12-bhujang-asana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-40-2026-08-17.mp4" },
  { name: "Shalabhasana", image: "https://img.youtube.com/vi/5Z76Y85KZCk/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=5Z76Y85KZCk" },
  { name: "Dhanurasana", image: "https://img.youtube.com/vi/xOQMTnV6ZUM/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=xOQMTnV6ZUM" },
  { name: "Chakrasana", image: "/images/thumbnails/15-chakrasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/chakrasana-2026-07-16.mp4" },
  { name: "Ardha Matsyendrasana", image: "/images/thumbnails/16-ardha-matsyendrasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/ardha-matsyendrasana-2026-08-17.mp4" },
  { name: "Ustrasana", image: "/images/thumbnails/17-ustrasana.webp", url: "https://in.pinterest.com/pin/1137158974682061121/" },
  { name: "Simhasana", image: "https://img.youtube.com/vi/RkvdfKefcDU/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=RkvdfKefcDU" },
  { name: "Mayurasana", image: "https://img.youtube.com/vi/aKdpdQyx-f4/hqdefault.jpg", externalImage: true, url: "https://www.youtube.com/watch?v=aKdpdQyx-f4" },
  { name: "Pranayama", image: "/images/thumbnails/20-pranayama.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_pranayam/pranayam-16-2026-08-17.mp4" },
];

function ThumbnailCard({ practice, number, isWarmup = false }: { practice: Practice; number?: string; isWarmup?: boolean }) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E9EDE5]">
        {practice.externalImage ? (
          // YouTube-hosted thumbnails are served directly from YouTube.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={practice.image} alt={`${practice.name} thumbnail`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        ) : (
          <Image src={practice.image} alt={`${practice.name} thumbnail`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        )}
        {number && <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 font-serif text-sm text-[#173B36]">{number}</span>}
      </div>
      <div className="flex min-h-16 items-center justify-between gap-3 p-4">
        <h3 className="font-serif text-lg leading-snug text-[#173B36] sm:text-xl">{practice.name}</h3>
        {practice.url && <span aria-hidden="true" className="shrink-0 text-sm font-bold text-[#14564C]">Open link ↗</span>}
      </div>
    </>
  );

  return practice.url ? (
    <a href={practice.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${practice.name} video or reference in a new tab`} className="group block overflow-hidden border border-[var(--sutra-border)] bg-white transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14564C]">
      {content}
    </a>
  ) : (
    <article className="group block overflow-hidden border border-[var(--sutra-border)] bg-white">
      {content}
    </article>
  );
}

export default function YogaPracticeGallery() {
  return (
    <div>
      <div className="mb-8 max-w-[360px]">
        <ThumbnailCard practice={warmup} isWarmup />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {poses.map((pose, index) => <ThumbnailCard key={pose.name} practice={pose} number={String(index + 1).padStart(2, "0")} />)}
      </div>
    </div>
  );
}
