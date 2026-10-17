"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type HeroVideoProps = {
  src: string;
  poster: string;
  alt?: string;
  minWidth?: number; // video only loads at this screen width or wider
  priority?: boolean; // true only for the first thing on the page
};

export default function HeroVideo({
  src,
  poster,
  alt = "",
  minWidth = 768,
  priority = true,
}: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(`(min-width: ${minWidth}px)`);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShowVideo(wide.matches && !calm.matches);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, [minWidth]);

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
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