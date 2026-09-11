import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GitHubIcon } from "./icons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="projects"
      className={`scroll-mt-24 px-6 py-16 transition-all duration-700 ease-out lg:py-24 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <SectionHeading number="03" title="Projects" />

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => {
          const imageFirst = i % 2 === 0;
          const cover = project.screenshots[0];

          return (
            <article
              key={project.slug}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
            >
              <Link
                to={`/projects/${project.slug}`}
                className={`group block overflow-hidden rounded-lg border border-line ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                {cover && (
                  <img
                    src={cover.src}
                    alt={cover.alt}
                    className="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </Link>

              <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {project.tagline}
                </p>
                <h3 className="mt-2 text-xl font-bold text-fg">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line-muted bg-canvas-subtle px-2.5 py-0.5 font-mono text-[11px] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors hover:text-accent"
                  >
                    Case study
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    <GitHubIcon size={14} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      Live
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
