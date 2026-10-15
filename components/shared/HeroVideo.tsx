"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroVideoProps = {
  src: string;
  poster: string;
  alt?: string;
};

/**
 * Background hero media.
 * - The poster image always renders first (fast, good for LCP).
 * - The video only loads on screens 768px and wider, and only when the
 *   visitor has not asked for reduced motion. Phones never download it.
 */
export default function HeroVideo({ src, poster, alt = "" }: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShowVideo(wide.matches && !calm.matches);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
