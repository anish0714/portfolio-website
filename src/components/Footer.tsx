import { Mail } from "lucide-react";
import { social, gmailComposeUrl } from "../data/social";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center">
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
        </div>
        <p className="font-mono text-xs text-fg-subtle">
          Built with React &amp; Tailwind CSS · &copy; {new Date().getFullYear()} Anish Dandekar
        </p>
      </div>
    </footer>
  );
}
