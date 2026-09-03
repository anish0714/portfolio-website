import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { social, gmailComposeUrl } from "../data/social";
import { techStack } from "../data/techStack";
import { projects } from "../data/projects";
import { GitHubIcon, LinkedInIcon } from "./icons";
import profile from "../assets/profile.jpg";
import { useReveal } from "../hooks/useReveal";

interface BentoCardProps {
  index: number;
  visible: boolean;
  className?: string;
  id?: string;
  to?: string;
  children: ReactNode;
}

function BentoCard({ index, visible, className, id, to, children }: BentoCardProps) {
  const sharedClassName = `rounded-2xl border border-line bg-canvas-subtle p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent-muted ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  } ${className ?? ""}`;
  const sharedStyle = { transitionDelay: `${index * 70}ms` };

  if (to) {
    return (
      <Link to={to} id={id} style={sharedStyle} className={`group flex flex-col ${sharedClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <div id={id} style={sharedStyle} className={sharedClassName}>
      {children}
    </div>
  );
}

export default function BentoDashboard() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="top"
      className="mx-auto max-w-5xl px-6 pb-14 pt-16 md:pt-24"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Intro */}
        <BentoCard
          index={0}
          visible={visible}
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <img
            src={profile}
            alt="Anish Dandekar"
            className="mb-5 h-20 w-20 rounded-full border-2 border-accent object-cover shadow-lg shadow-accent-muted"
          />
          <p className="mb-3 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            Anish Dandekar
          </h1>
          <h2 className="mt-2 text-lg font-semibold text-fg-muted sm:text-xl">
            Sr. Software Engineer <span className="text-fg-subtle">|</span>{" "}
            Sr. Full Stack Engineer
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted">
            I build scalable, full-stack products and bring{" "}
            <span className="text-fg">AI-driven development</span> into the
            everyday engineering workflow — from LLM-backed features shipped
            in production to using AI as a daily pair-programmer for review,
            debugging, and delivery velocity.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}#experience`}
              className="inline-flex items-center gap-2 rounded-md bg-accent-emphasis px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#388bfd]"
            >
              View Experience
              <ArrowRight size={16} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas"
            >
              <GitHubIcon size={16} />
              GitHub Profile
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </BentoCard>

        {/* Tech stack */}
        <BentoCard
          index={1}
          visible={visible}
          id="stack"
          className="flex flex-col justify-center sm:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            <Sparkles size={14} className="text-accent" />
            Tech Stack
          </h3>
          <div className="flex flex-col gap-4">
            {techStack.map((group) => (
              <div key={group.label}>
                <span className="mb-1.5 block font-mono text-xs text-fg-subtle">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-canvas px-2.5 py-0.5 font-mono text-[11px] text-fg-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Projects */}
        <div
          id="projects"
          style={{ transitionDelay: "140ms" }}
          className={`col-span-1 mt-2 flex items-center gap-3 transition-opacity duration-700 ease-out sm:col-span-2 lg:col-span-4 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            Projects
          </h3>
          <div className="h-px flex-1 bg-line" />
        </div>

        <div className="contents">
          {projects.map((project, i) => {
            const shownTech = project.tech.slice(0, 5);
            const hiddenCount = project.tech.length - shownTech.length;
            return (
              <BentoCard
                key={project.slug}
                index={2 + i}
                visible={visible}
                to={`/projects/${project.slug}`}
                className="lg:col-span-2"
              >
                <h3 className="text-base font-bold text-fg">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {shownTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-canvas px-2.5 py-0.5 font-mono text-[11px] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {hiddenCount > 0 && (
                    <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 font-mono text-[11px] text-fg-subtle">
                      +{hiddenCount}
                    </span>
                  )}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-fg-muted transition-colors group-hover:text-accent">
                  View case study
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </BentoCard>
            );
          })}
        </div>

        {/* Connect */}
        <BentoCard
          index={2 + projects.length}
          visible={visible}
          className="lg:col-span-2"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            Connect
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            Have a role, project, or idea in mind? I'd love to hear from you.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href={gmailComposeUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </BentoCard>

        {/* Quick facts */}
        <BentoCard
          index={3 + projects.length}
          visible={visible}
          className="lg:col-span-2"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
            Quick Facts
          </h3>
          <dl className="mt-4 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-fg-subtle">Based in</dt>
                <dd className="text-fg-muted">Greater Toronto Area, Canada</dd>
              </div>
            </div>
            <div>
              <dt className="text-fg-subtle">Currently</dt>
              <dd className="mt-0.5 text-fg-muted">
                Sr. Software Engineer @ Appfabs
              </dd>
            </div>
            <div>
              <dt className="text-fg-subtle">Focus</dt>
              <dd className="mt-0.5 text-fg-muted">
                AI-driven development, micro frontends
              </dd>
            </div>
          </dl>
        </BentoCard>
      </div>
    </section>
  );
}
