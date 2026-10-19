"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  minWidth?: number;
  priority?: boolean;
};

export default function HeroVideo({
  src,
  poster,
  minWidth,
  priority = false,
}: HeroVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setShowVideo(!reducedMotion.matches);
    };

    update();

    reducedMotion.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <>
      {poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}