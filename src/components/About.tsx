import { ArrowRight, Download } from "lucide-react";
import { techStack } from "../data/techStack";
import { social } from "../data/social";
import { GitHubIcon } from "./icons";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`scroll-mt-24 px-6 pt-16 transition-all duration-700 ease-out lg:pt-24 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div id="top" className="scroll-mt-24" />
      <SectionHeading number="01" title="About" />

      <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-fg-muted">
        <p>
          I build scalable, full-stack products and bring{" "}
          <span className="text-fg">AI-driven development</span> into the
          everyday engineering workflow — from LLM-backed features shipped in
          production to using AI as a daily pair-programmer for review,
          debugging, and delivery velocity.
        </p>
        <p>
          Currently a Senior Software Engineer at Appfabs, working on a
          micro-frontend legal-tech platform. Outside of that, I build
          full-stack side projects end to end — schema to UI — usually to
          solve a problem I actually have.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {techStack.map((group) => (
          <div key={group.label} className="text-sm">
            <span className="font-mono text-xs text-fg-subtle">
              {group.label}
            </span>
            <p className="mt-1 text-fg-muted">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-accent-emphasis px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#388bfd]"
        >
          <Download size={16} />
          Resume
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas-subtle"
        >
          <GitHubIcon size={16} />
          GitHub Profile
        </a>
        <a
          href={`${import.meta.env.BASE_URL}#projects`}
          className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-fg-muted transition-colors hover:text-accent"
        >
          View projects
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
