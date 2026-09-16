import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

type Variant = "primary" | "secondary" | "onDark" | "onDarkOutline";

const chipByVariant: Record<Variant, string> = {
  primary: "bg-accent text-bg",
  secondary: "bg-ink text-bg",
  onDark: "bg-accent text-bg",
  onDarkOutline: "bg-bg text-ink",
};

const pillByVariant: Record<Variant, string> = {
  primary: "bg-ink text-bg",
  secondary: "border border-ink text-ink bg-transparent",
  onDark: "bg-bg text-ink",
  onDarkOutline: "border border-white/25 text-bg bg-white/5",
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-sm tracking-[0.02em] no-underline transition-colors ${pillByVariant[variant]}`}
    >
      <span>{children}</span>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:rotate-45 ${chipByVariant[variant]}`}
      >
        <ArrowUpRightIcon />
      </span>
    </a>
  );
}
