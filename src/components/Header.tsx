import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { social, gmailComposeUrl } from "../data/social";
import { GitHubIcon, LinkedInIcon } from "./icons";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: `${import.meta.env.BASE_URL}#top` },
  { label: "Stack", href: `${import.meta.env.BASE_URL}#stack` },
  { label: "Projects", href: `${import.meta.env.BASE_URL}#projects` },
  { label: "Experience", href: `${import.meta.env.BASE_URL}#experience` },
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
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-canvas/0"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-mono text-sm font-semibold text-fg transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>anish-dandekar
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

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <Mail size={18} />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <LinkedInIcon size={18} />
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
            <div className="flex items-center gap-5 pt-2">
              <a href={gmailComposeUrl()} target="_blank" rel="noreferrer" aria-label="Email" className="text-fg-muted hover:text-fg">
                <Mail size={18} />
              </a>
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-fg-muted hover:text-fg">
                <GitHubIcon size={18} />
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-fg-muted hover:text-fg">
                <LinkedInIcon size={18} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
