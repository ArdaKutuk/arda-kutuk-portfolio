/**
 * Shared layout primitives reused across sections — a single content width,
 * one vertical rhythm (`.section-y`, defined in globals.css) and one hairline
 * divider — so spacing and structure stay consistent without one-off values
 * per component.
 */
export const container = "mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10";

/** Wider than `container` — used only where a project image needs to be the
 *  dominant visual element (Selected Work, project detail hero). */
export const containerWide = "mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10";

export const sectionY = "section-y";

export const divider = "border-t border-border";
