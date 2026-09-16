import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "solid" | "outline" | "text";

const base = "inline-flex items-center gap-2 text-small font-medium no-underline transition-colors";

const byVariant: Record<Variant, string> = {
  solid: "rounded-md bg-ink text-bg px-5 py-3 hover:bg-accent",
  outline: "rounded-md border border-ink text-ink px-5 py-3 hover:border-accent hover:text-accent",
  text: "text-ink hover:text-accent",
};

export default function Button({
  href,
  children,
  variant = "solid",
  showArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${byVariant[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRightIcon className="shrink-0" width={15} height={15} />}
    </a>
  );
}
