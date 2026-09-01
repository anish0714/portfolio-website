import { ArrowRight } from "lucide-react";
import { social } from "../data/social";
import { GitHubIcon } from "./icons";
import profile from "../assets/profile.jpg";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="top"
      className={`mx-auto max-w-5xl px-6 pb-20 pt-16 transition-all duration-700 ease-out md:pt-24 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <img
            src={profile}
            alt="Anish Dandekar"
            className="mb-6 h-24 w-24 rounded-full border-2 border-accent object-cover shadow-lg shadow-accent-muted"
          />
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
            Anish Dandekar
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-fg-muted sm:text-2xl">
            Sr. Software Engineer <span className="text-fg-subtle">|</span>{" "}
            Sr. Full Stack Engineer
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
            I build scalable, full-stack products and bring{" "}
            <span className="text-fg">AI-driven development</span> into the
            everyday engineering workflow — from LLM-backed features shipped
            in production to using AI as a daily pair-programmer for review,
            debugging, and delivery velocity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-accent-emphasis px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#388bfd]"
            >
              View Experience
              <ArrowRight size={16} />
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
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-canvas-subtle shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-fg-subtle">
              about.ts
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
            <code>
              <span className="text-[#ff7b72]">const</span>{" "}
              <span className="text-[#d2a8ff]">anish</span> = {"{"}
              {"\n"}
              {"  "}
              <span className="text-[#79c0ff]">role</span>:{" "}
              <span className="text-[#a5d6ff]">
                "Sr. Full Stack Engineer"
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-[#79c0ff]">focus</span>: [{"\n"}
              {"    "}
              <span className="text-[#a5d6ff]">"AI-Driven Development"</span>
              ,{"\n"}
              {"    "}
              <span className="text-[#a5d6ff]">"Scalable Full-Stack Systems"</span>
              ,{"\n"}
              {"    "}
              <span className="text-[#a5d6ff]">"Micro Frontends"</span>
              {"\n"}
              {"  "}],{"\n"}
              {"  "}
              <span className="text-[#79c0ff]">currentlyBuilding</span>:{" "}
              <span className="text-[#a5d6ff]">
                "LLM-powered legal-tech UI"
              </span>
              ,{"\n"}
              {"  "}
              <span className="text-[#79c0ff]">basedIn</span>:{" "}
              <span className="text-[#a5d6ff]">"Greater Toronto Area"</span>
              ,{"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
