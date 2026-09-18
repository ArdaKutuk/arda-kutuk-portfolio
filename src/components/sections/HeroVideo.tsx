"use client";

import { useEffect, useRef } from "react";

const PLAYBACK_RATE = 0.8;

/**
 * Pauses the hero video once it scrolls out of view and resumes it once
 * it's back on screen, so it never keeps decoding/playing off-screen.
 * Playback speed is fixed at 0.8x — the native speed option is hidden from
 * the controls menu, and a `ratechange` listener snaps any change back so
 * it can't be adjusted through other means (e.g. keyboard shortcuts).
 */
export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.setAttribute("controlsList", "noplaybackrate");

    const lockRate = () => {
      if (el.playbackRate !== PLAYBACK_RATE) el.playbackRate = PLAYBACK_RATE;
    };
    lockRate();
    el.addEventListener("loadedmetadata", lockRate);
    el.addEventListener("ratechange", lockRate);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);

    return () => {
      el.removeEventListener("loadedmetadata", lockRate);
      el.removeEventListener("ratechange", lockRate);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls
      preload="auto"
    />
  );
}
