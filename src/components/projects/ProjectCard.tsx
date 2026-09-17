import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import ProjectVisual from "./ProjectVisual";
import Reveal from "@/components/ui/Reveal";

type Variant = "featured" | "left" | "right";

const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_1px] transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px]";

export default function ProjectCard({
  project,
  locale,
  dict,
  variant = "left",
  index,
  priority = false,
}: {
  project: Project;
  locale: string;
  dict: Dictionary;
  variant?: Variant;
  index: number;
  priority?: boolean;
}) {
  const indexLabel = String(index).padStart(2, "0");

  const eyebrow = (
    <div className="flex items-baseline gap-3">
      <span className="text-meta text-accent">{indexLabel}</span>
      <span className="text-meta text-muted">{project.category}</span>
    </div>
  );

  const cta = (
    <span className="text-small font-medium text-ink mt-5 inline-flex items-center gap-2 group-hover:text-accent">
      {dict.work.viewProject}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  );

  const visual = (
    <ProjectVisual
      title={project.title}
      category={project.category}
      coverImage={project.coverImage}
      aspect="aspect-[4/3]"
      priority={priority}
    />
  );

  if (variant === "featured") {
    return (
      <Reveal>
        <Link href={`/${locale}/projects/${project.slug}`} className="group block no-underline">
          {visual}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 md:gap-16">
            <div>
              {eyebrow}
              <h3 className={`text-h1 text-ink mt-3 inline-block pb-1 ${underline}`}>{project.title}</h3>
            </div>
            <div>
              <p className="text-body text-body max-w-[56ch]">{project.shortDescription}</p>
              {project.technologies.length > 0 && (
                <p className="text-small text-muted mt-4">{project.technologies.join(" · ")}</p>
              )}
              {cta}
            </div>
          </div>
        </Link>
      </Reveal>
    );
  }

  const imageFirst = variant === "left";

  return (
    <Reveal>
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className={`group grid grid-cols-1 gap-8 md:gap-14 items-center no-underline ${
          imageFirst ? "md:grid-cols-[1fr_340px]" : "md:grid-cols-[340px_1fr]"
        }`}
      >
        <div className={imageFirst ? "order-first" : "order-first md:order-last"}>{visual}</div>
        <div className={imageFirst ? "order-last" : "order-last md:order-first"}>
          {eyebrow}
          <h3 className={`text-h1 text-ink mt-3 inline-block pb-1 ${underline}`}>{project.title}</h3>
          <p className="text-body text-body mt-4 max-w-[48ch]">{project.shortDescription}</p>
          {project.technologies.length > 0 && (
            <p className="text-small text-muted mt-4">{project.technologies.join(" · ")}</p>
          )}
          {cta}
        </div>
      </Link>
    </Reveal>
  );
}
