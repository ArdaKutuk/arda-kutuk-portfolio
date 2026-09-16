/**
 * Small set of shared layout tokens reused across sections: fluid clamp()
 * paddings, a 1440px content width, and the rounded "card" shape language
 * used throughout the site.
 */
export const container = "mx-auto w-full max-w-[1440px] px-[clamp(20px,5vw,64px)]";

export const sectionPadY = "py-[clamp(60px,8vw,100px)]";

export const cardGrid = "grid gap-5";

export const card = "rounded-3xl border border-border bg-bg";

export const cardTint = "rounded-3xl bg-card";

export const pillTag =
  "rounded-full text-[11px] tracking-[0.04em] border border-border px-3 py-[6px] text-label";
