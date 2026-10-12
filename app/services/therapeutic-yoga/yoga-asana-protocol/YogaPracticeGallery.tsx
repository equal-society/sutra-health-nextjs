"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Practice = { name: string; icon: string; url?: string; source: "archive" | "youtube" | "pinterest" | "missing" };

const practices: Practice[] = [
  { name: "Warm-up", icon: "/images/thumbnails/01-warm-up.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/tadasana-2026-07-29.mp4", source: "archive" },
  { name: "Tadasana", icon: "/images/thumbnails/01-tadasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/tadasana-2026-07-13.mp4", source: "archive" },
  { name: "Vriksha Asana", icon: "/images/thumbnails/02-vriksha-asana.webp", source: "missing" },
  { name: "Surya Namaskar", icon: "/images/thumbnails/03-surya-namaskar.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/surya-namaskar-2026-06-14.mp4", source: "archive" },
  { name: "Shavasana", icon: "/images/thumbnails/04-shavasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-11-2026-08-17.mp4", source: "archive" },
  { name: "Pawanmukt Asana", icon: "/images/thumbnails/05-pawan-mukt-asana.webp", url: "https://www.youtube.com/watch?v=b4unFpb4HW8", source: "youtube" },
  { name: "Sarvangasana", icon: "/images/thumbnails/06-sarvangasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/sarvangasana-2026-07-28.mp4", source: "archive" },
  { name: "Matsyasana", icon: "/images/thumbnails/07-matsyasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/matsyasana-2026-08-19.mp4", source: "archive" },
  { name: "Halasana", icon: "/images/thumbnails/08-halasana.webp", url: "https://www.youtube.com/watch?v=hvFsZCy5gWg", source: "youtube" },
  { name: "Pashchimottanasana", icon: "/images/thumbnails/09-paschimottanasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/pashchimottanasana-2026-07-16.mp4", source: "archive" },
  { name: "Shirshasana", icon: "/images/thumbnails/10-shirshasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-17-2026-08-17.mp4", source: "archive" },
  { name: "Sheshank Asana", icon: "/images/thumbnails/11-sheshank-asana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/shashankasana-2026-06-13.mp4", source: "archive" },
  { name: "Bhujang / Sarpasana", icon: "/images/thumbnails/12-bhujang-asana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_unclassed/unclassed-40-2026-08-17.mp4", source: "archive" },
  { name: "Shalabhasana", icon: "/images/thumbnails/13-shalabhasana.webp", url: "https://www.youtube.com/watch?v=5Z76Y85KZCk", source: "youtube" },
  { name: "Dhanurasana", icon: "/images/thumbnails/14-dhanurasana.webp", url: "https://www.youtube.com/watch?v=xOQMTnV6ZUM", source: "youtube" },
  { name: "Chakrasana", icon: "/images/thumbnails/15-chakrasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/chakrasana-2026-07-16.mp4", source: "archive" },
  { name: "Ardha Matsyendrasana", icon: "/images/thumbnails/16-ardha-matsyendrasana.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_asana/ardha-matsyendrasana-2026-08-17.mp4", source: "archive" },
  { name: "Ustrasana", icon: "/images/thumbnails/17-ustrasana.webp", url: "https://in.pinterest.com/pin/1137158974682061121/", source: "pinterest" },
  { name: "Simhasana", icon: "/images/thumbnails/18-simhasana.webp", url: "https://www.youtube.com/watch?v=RkvdfKefcDU", source: "youtube" },
  { name: "Mayurasana", icon: "/images/thumbnails/19-mayurasana.webp", url: "https://www.youtube.com/watch?v=aKdpdQyx-f4", source: "youtube" },
  { name: "Pranayama", icon: "/images/thumbnails/20-pranayama.webp", url: "https://archive.org/details/surya-yoga-sequence/Yoga/yoga_pranayam/pranayam-16-2026-08-17.mp4", source: "archive" },
];

function archiveDirectUrl(url: string) {
  return url.replace("https://archive.org/details/", "https://archive.org/download/");
}
function youtubeEmbedUrl(url: string) {
  const id = new URL(url).searchParams.get("v");
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}

export default function YogaPracticeGallery() {
  const [active, setActive] = useState<Practice | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  function openPractice(practice: Practice) {
    setVideoLoading(practice.source === "archive");
    setVideoError(false);
    setActive(practice);
  }

  function closePlayer() {
    setActive(null);
    setVideoLoading(false);
    setVideoError(false);
  }
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closePlayer(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return <>
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 2xl:grid-cols-7">
      {practices.map((practice, index) => <button key={practice.name} type="button" disabled={!practice.url} onClick={() => openPractice(practice)} aria-label={practice.url ? `Play ${practice.name}` : `${practice.name} video not available yet`} className="group flex min-w-0 flex-col overflow-hidden border border-[#D7E2D4] bg-[#FCFCF8] text-center transition duration-200 hover:-translate-y-0.5 hover:border-[#73977F] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14564C] disabled:cursor-not-allowed disabled:opacity-70">
        <div className="relative flex aspect-[1.5/1] w-full items-center justify-center overflow-hidden bg-[#EDF2E9]">
          <Image src={practice.icon} alt={practice.name} fill sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        <span className="absolute left-1.5 top-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-[#47685A]">{index === 0 ? "START" : String(index).padStart(2, "0")}</span>
        </div>
        
        <span className="flex min-h-[38px] flex-1 items-center justify-center px-1.5 py-1.5 font-serif text-[11px] font-semibold leading-tight text-[#173B36] sm:min-h-[42px] sm:text-xs">{practice.name}</span>
        <span className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full ${practice.url ? "bg-[#14564C] text-white group-hover:bg-[#267464]" : "bg-[#DCE4D9] text-[#66776B]"}`} aria-hidden="true">
          {practice.url ? <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M8 5.8c0-.7.8-1.1 1.4-.7l9 6.2a.85.85 0 0 1 0 1.4l-9 6.2c-.6.4-1.4 0-1.4-.7V5.8Z"/></svg> : <span className="text-sm">–</span>}
        </span>
        
      </button>)}
    </div>

    {active && <div role="presentation" className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C211D]/55 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) closePlayer(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="yoga-video-title" className="relative w-full max-w-4xl overflow-hidden bg-[#FCFCF8] shadow-2xl">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"><div><h2 id="yoga-video-title" className="font-serif text-xl font-semibold text-[#173B36] sm:text-2xl">{active.name}</h2><p className="mt-0.5 text-xs text-[#65736C]">Video demonstration</p></div><button type="button" onClick={closePlayer} aria-label="Close video" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7E2D4] text-2xl leading-none text-[#173B36] hover:bg-[#EDF2E9]">×</button></div>
        <div className="relative aspect-video w-full bg-black">
          {active.source === "archive" && active.url && (
            <>
              {videoLoading && !videoError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 text-sm text-white" aria-live="polite">
                  Loading video…
                </div>
              )}
              {videoError ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#F4F4EF] p-6 text-center">
                  <p className="text-sm text-[#34463E]">This video could not load from Archive.org. It may be a temporary network or source issue.</p>
                  <a href={archiveDirectUrl(active.url)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#14564C] px-5 py-3 text-sm font-semibold text-white">Open video directly ↗</a>
                  <button type="button" onClick={() => { setVideoError(false); setVideoLoading(true); setRetryCount((count) => count + 1); }} className="text-sm font-semibold text-[#14564C] underline">Retry in player</button>
                </div>
              ) : (
                <video
                  key={`${active.url}-${retryCount}`}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="h-full w-full"
                  src={archiveDirectUrl(active.url)}
                  onLoadStart={() => { setVideoLoading(true); setVideoError(false); }}
                  onCanPlay={() => setVideoLoading(false)}
                  onPlaying={() => setVideoLoading(false)}
                  onWaiting={() => setVideoLoading(true)}
                  onError={() => { setVideoLoading(false); setVideoError(true); }}
                >
                  Your browser does not support HTML video.
                </video>
              )}
            </>
          )}
          {active.source === "youtube" && active.url && <iframe key={active.url} title={`${active.name} video`} src={youtubeEmbedUrl(active.url)} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}
          {active.source === "pinterest" && active.url && <div className="flex h-full flex-col items-center justify-center gap-4 bg-[#F4F4EF] p-6 text-center"><p className="max-w-md text-sm text-[#34463E]">This Pinterest pin may not support direct playback in an embedded player.</p><a href={active.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#14564C] px-5 py-3 text-sm font-semibold text-white">Open video reference ↗</a></div>}
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3 text-xs text-[#65736C] sm:px-6"><span>{active.source === "pinterest" ? "External reference" : active.source === "youtube" ? "YouTube video" : "Archive.org video"}</span><button type="button" onClick={closePlayer} className="font-semibold text-[#14564C] hover:underline">Close and return to poses</button></div>
      </section>
    </div>}
  </>;
}
