import { Mail } from "lucide-react";
import { social, gmailComposeUrl } from "../data/social";
import { GitHubIcon, LinkedInIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";
import profile from "../assets/profile.jpg";

const navItems = [
  { id: "about", number: "01", label: "About" },
  { id: "experience", number: "02", label: "Experience" },
  { id: "projects", number: "03", label: "Projects" },
  { id: "contact", number: "04", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(navItems.map((item) => item.id));

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[26rem] lg:flex-col lg:justify-between lg:px-12 lg:py-16 xl:w-[30rem] xl:px-20">
      <div>
        <a href={`${import.meta.env.BASE_URL}#top`} className="inline-flex items-center gap-3">
          <img
            src={profile}
            alt="Anish Dandekar"
            className="h-12 w-12 rounded-full border-2 border-accent object-cover"
          />
        </a>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-fg">
          Anish Dandekar
        </h1>
        <h2 className="mt-2 text-base font-semibold text-fg-muted">
          Sr. Software Engineer
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
          I build scalable, full-stack products and bring AI-driven
          development into the everyday engineering workflow.
        </p>

        <nav className="mt-12" aria-label="Section navigation">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`${import.meta.env.BASE_URL}#${item.id}`}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === item.id
                        ? "w-10 bg-fg"
                        : "w-5 bg-fg-subtle group-hover:w-10 group-hover:bg-fg-muted"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs tracking-widest transition-colors ${
                      active === item.id ? "text-fg" : "text-fg-subtle"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                      active === item.id
                        ? "text-fg"
                        : "text-fg-muted group-hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5">
        <a
          href={gmailComposeUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="text-fg-muted transition-colors hover:text-accent"
        >
          <Mail size={18} />
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-fg-muted transition-colors hover:text-accent"
        >
          <GitHubIcon size={18} />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-fg-muted transition-colors hover:text-accent"
        >
          <LinkedInIcon size={18} />
        </a>
        <div className="ml-1 border-l border-line pl-5">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
