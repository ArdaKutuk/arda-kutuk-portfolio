"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

// Avoids the SSR warning for useLayoutEffect while still applying the
// hidden state before first paint on the client (no visible flash).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Fades + lifts children into place the first time they enter the viewport,
 * via IntersectionObserver + a CSS transition. Renders fully visible by
 * default (SSR and pre-hydration) so content is never stuck invisible if JS
 * is slow, blocked, or fails — the hidden/reveal states only ever apply
 * once the observer is confirmed to be running.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 800,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"initial" | "hidden" | "visible">("initial");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("visible");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = state === "hidden";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: state === "initial" ? 1 : hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : "translateY(0)",
        transition:
          state === "initial"
            ? "none"
            : `opacity ${duration}ms ${EASING} ${delay}ms, transform ${duration}ms ${EASING} ${delay}ms`,
        willChange: state === "initial" ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
