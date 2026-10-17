"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  src: string;
  alt?: string;
  minWidth?: number;
  priority?: boolean;
};

export default function HeroVideo({
  src,
  alt = "",
  minWidth = 768,
}: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia(`(min-width: ${minWidth}px)`);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setShowVideo(wide.matches && !calm.matches);
    };

    update();

    wide.addEventListener("change", update);
    calm.addEventListener("change", update);

    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, [minWidth]);

  if (!showVideo) {
    return null;
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}