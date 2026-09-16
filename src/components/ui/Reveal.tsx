import type { ReactNode } from "react";

/**
 * Fades + lifts children into place via a pure CSS animation (see `.reveal`
 * in globals.css) — no JavaScript, no IntersectionObserver. Content is
 * guaranteed to render even if hydration is slow or fails, which a
 * JS-driven "hidden until observed" reveal cannot guarantee on real mobile
 * devices/networks.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
