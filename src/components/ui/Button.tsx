import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "solid" | "outline" | "text";
/** The background the button sits on — flips the color scheme so it stays
 *  legible on both the light sections and the dark hero. */
type Tone = "light" | "dark";

const base =
  "inline-flex items-center gap-2 text-small font-medium no-underline transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.97]";

const byVariant: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: "rounded-md bg-ink text-bg px-5 py-3 hover:bg-accent",
    outline: "rounded-md border border-ink text-ink px-5 py-3 hover:border-accent hover:text-accent",
    text: "text-ink hover:text-accent",
  },
  dark: {
    solid: "rounded-md bg-bg text-ink px-5 py-3 hover:bg-accent hover:text-bg",
    outline: "rounded-md border border-bg/30 text-bg px-5 py-3 hover:border-accent hover:text-accent",
    text: "text-bg hover:text-accent",
  },
};

export default function Button({
  href,
  children,
  variant = "solid",
  tone = "light",
  showArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`group ${base} ${byVariant[tone][variant]} ${className}`}>
      {children}
      {showArrow && (
        <ArrowRightIcon
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          width={15}
          height={15}
        />
      )}
    </a>
  );
}
