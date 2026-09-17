import Image from "next/image";

/**
 * Reusable project image slot. Renders a real screenshot when `coverImage`
 * is set; otherwise falls back to a quiet typographic mark derived from the
 * project title — never a "coming soon" message or a stock gradient.
 */
export default function ProjectVisual({
  title,
  category,
  coverImage,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: {
  title: string;
  category: string;
  coverImage?: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  const monogram = title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  if (coverImage) {
    return (
      <div
        className={`relative overflow-hidden border border-border bg-surface transition-colors duration-300 group-hover:border-accent/40 ${aspect} ${className}`}
      >
        <Image
          src={coverImage}
          alt={title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.015] group-hover:brightness-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-border bg-surface ${aspect} ${className}`}
      aria-hidden
    >
      <span
        className="absolute -bottom-[0.12em] -right-[0.04em] font-bold leading-none text-ink/[0.06] select-none"
        style={{ fontSize: "clamp(4rem, 9vw, 9rem)" }}
      >
        {monogram}
      </span>
      <span className="text-meta text-muted absolute left-5 top-5">{category}</span>
    </div>
  );
}
