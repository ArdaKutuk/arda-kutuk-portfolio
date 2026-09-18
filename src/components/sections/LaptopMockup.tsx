import type { ReactNode } from "react";

/**
 * Front-on laptop silhouette (screen bezel + hinge + tapered base), tilted
 * slightly in 3D so it reads clearly as an object rather than a flat
 * rectangle. Metallic bezel gradients, a soft screen glare and a layered
 * contact shadow sell the depth. `children` renders as the screen content,
 * so whatever's passed (the hero video) plays directly inside the bezel.
 */
export default function LaptopMockup({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        transform: "perspective(1400px) rotateX(9deg) rotateY(-3deg)",
        transformOrigin: "center bottom",
        filter:
          "drop-shadow(0 34px 44px rgba(0,0,0,0.5)) drop-shadow(0 10px 14px rgba(0,0,0,0.4))",
      }}
    >
      {/* Screen unit */}
      <div className="relative rounded-t-xl bg-gradient-to-b from-[#333333] via-[#1c1c1c] to-[#161616] p-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(0,0,0,0.6)]">
        <div className="relative aspect-video overflow-hidden rounded-[2px] bg-black">
          {children}
          {/* Glass glare overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 16%, transparent 32%)",
            }}
          />
          {/* Subtle inner screen vignette for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>

      {/* Hinge / chin */}
      <div className="relative h-[8px] rounded-b-[3px] bg-gradient-to-b from-[#2e2e2e] via-[#181818] to-[#0a0a0a]">
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ring-1 ring-white/10"
        />
      </div>

      {/* Base / keyboard deck */}
      <div
        className="relative mx-[-18px] mt-[2px] h-[15px] bg-gradient-to-b from-[#3c3c3c] via-[#232323] to-[#0d0d0d]"
        style={{ clipPath: "polygon(2.5% 0%, 97.5% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute left-1/2 bottom-[2px] h-[3px] w-14 -translate-x-1/2 rounded-full bg-black/30" />
      </div>
    </div>
  );
}
