import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { social, gmailComposeUrl } from "../data/social";
import { GitHubIcon, LinkedInIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";
import profile from "../assets/profile.jpg";

const navLinks = [
  { label: "About", href: `${import.meta.env.BASE_URL}#about` },
  { label: "Experience", href: `${import.meta.env.BASE_URL}#experience` },
  { label: "Projects", href: `${import.meta.env.BASE_URL}#projects` },
  { label: "Contact", href: `${import.meta.env.BASE_URL}#contact` },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors lg:hidden ${
        scrolled
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas/0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-sm font-semibold text-fg transition-colors hover:text-accent"
        >
          <img
            src={profile}
            alt=""
            className="h-7 w-7 rounded-full border border-accent object-cover"
          />
          Anish Dandekar
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="rounded-md p-2 text-fg transition-colors hover:bg-canvas-subtle hover:text-accent"
          >
            <Mail size={19} />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-fg transition-colors hover:bg-canvas-subtle hover:text-accent"
          >
            <GitHubIcon size={19} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-fg transition-colors hover:bg-canvas-subtle hover:text-accent"
          >
            <LinkedInIcon size={19} />
          </a>
          <ThemeToggle />
        </div>

        <button
          className="text-fg md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-canvas px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 pt-2">
              <a href={gmailComposeUrl()} target="_blank" rel="noreferrer" aria-label="Email" className="rounded-md p-2 text-fg hover:bg-canvas-subtle hover:text-accent">
                <Mail size={19} />
              </a>
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-fg hover:bg-canvas-subtle hover:text-accent">
                <GitHubIcon size={19} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-fg hover:bg-canvas-subtle hover:text-accent">
                <LinkedInIcon size={19} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
