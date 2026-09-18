import type { Dictionary } from "@/i18n/types";
import { container } from "@/lib/styles";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className={`${container} py-10 flex flex-wrap items-center justify-between gap-4`}>
        <div>
          <div className="text-h3 font-bold tracking-[-0.01em] text-ink">Arda Kütük</div>
          <div className="text-small text-muted mt-1">{dict.footer.tagline}</div>
        </div>

        <span className="text-small text-muted">
          {dict.footer.copyright.replace("{year}", String(year))}
        </span>
      </div>
    </footer>
  );
}
