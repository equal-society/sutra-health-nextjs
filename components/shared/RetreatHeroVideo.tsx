"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  src: string;
  alt?: string;
  priority?: boolean;
};

export default function HeroVideo({
  src,
  alt = "",
  priority = false,
}: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateVideoState = () => {
      setShowVideo(!reducedMotion.matches);
    };

    updateVideoState();

    reducedMotion.addEventListener("change", updateVideoState);

    return () => {
      reducedMotion.removeEventListener("change", updateVideoState);
    };
  }, []);

  if (!showVideo) {
    return null;
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "auto" : "metadata"}
      aria-label={alt}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}