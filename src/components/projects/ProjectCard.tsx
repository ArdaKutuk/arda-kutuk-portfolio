import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { pillTag } from "@/lib/styles";

const THUMBNAIL_GRADIENTS = [
  "bg-[linear-gradient(135deg,oklch(46%_0.09_45)_0%,oklch(70%_0.05_60)_100%)]",
  "bg-[linear-gradient(135deg,oklch(15%_0.004_75)_0%,oklch(38%_0.02_60)_100%)]",
  "bg-[linear-gradient(135deg,oklch(94%_0.008_60)_0%,oklch(80%_0.03_50)_100%)]",
];

export default function ProjectCard({
  project,
  index,
  locale,
  dict,
}: {
  project: Project;
  index: number;
  locale: string;
  dict: Dictionary;
}) {
  const hasLinks = project.githubUrl || project.liveUrl;
  const gradient = THUMBNAIL_GRADIENTS[index % THUMBNAIL_GRADIENTS.length];

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group rounded-3xl border border-border bg-bg overflow-hidden no-underline flex flex-col transition-shadow hover:shadow-xl hover:shadow-ink/10"
    >
      <div className={`relative h-40 ${gradient}`}>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-bg/90 text-ink transition-transform group-hover:rotate-45">
          <ArrowUpRightIcon />
        </span>
      </div>

      <div className="p-7 flex flex-1 flex-col justify-between">
        <div>
          <div className="text-[12px] tracking-[0.06em] text-accent">
            {project.category}
          </div>
          <h3 className="text-[1.3rem] font-bold tracking-[-0.01em] mt-2.5 mb-3 text-ink">
            {project.title}
          </h3>
          <p className="text-[0.95rem] leading-[1.6] text-body m-0">
            {project.description}
          </p>
        </div>
        <div className="mt-5">
          {project.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className={pillTag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="font-mono text-[11px] text-footer-muted mt-4">
            {hasLinks
              ? [
                  project.githubUrl && dict.projectsSection.githubLabel,
                  project.liveUrl && dict.projectsSection.liveDemoLabel,
                  dict.projectsSection.caseStudyLabel,
                ]
                  .filter(Boolean)
                  .join(" · ")
              : dict.projectsSection.comingSoon}
          </div>
        </div>
      </div>
    </Link>
  );
}
