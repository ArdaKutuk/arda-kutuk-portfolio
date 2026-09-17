"use client";

import { useEffect, useRef } from "react";

/**
 * A very soft light that follows the pointer inside the hero. Desktop
 * (pointer: fine) only, disabled under prefers-reduced-motion, and updates
 * the DOM directly via a ref + rAF — never through React state — so it
 * can't cause re-renders on every mousemove. Purely decorative: it paints
 * behind content that is already visible, so it can never hide anything.
 */
export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let frame = 0;
    let nextX = 50;
    let nextY = 15;

    const apply = () => {
      el.style.setProperty("--spot-x", `${nextX}%`);
      el.style.setProperty("--spot-y", `${nextY}%`);
      frame = 0;
    };

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      nextX = ((e.clientX - rect.left) / rect.width) * 100;
      nextY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    parent.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      parent.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden className="hero-spotlight pointer-events-none absolute inset-0" />;
}
