import type { ComponentType } from "react";
import GustoServicesDiagram from "../components/diagrams/GustoServicesDiagram";
import DevPulseDiagram from "../components/diagrams/DevPulseDiagram";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  tech: string[];
  githubUrl: string;
  secondaryGithubUrl?: string;
  secondaryLabel?: string;
  liveUrl?: string;
  Diagram: ComponentType;
}

export const projects: Project[] = [
  {
    slug: "gustoservices",
    name: "GustoServices",
    tagline: "Two-sided service marketplace mobile app",
    problem:
      "Local service vendors (home services, personal care, etc.) had no easy way to list availability and get discovered, while customers had no single app to search, compare, book, and pay for those services. GustoServices connects the two sides in one React Native app.",
    role: "Solo full-stack: designed and built both the mobile app and its backend API from scratch.",
    tech: [
      "React Native",
      "React Navigation",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
    ],
    githubUrl: "https://github.com/anish0714/GustoServices",
    secondaryGithubUrl: "https://github.com/anish0714/GustoServices-Backend",
    secondaryLabel: "Backend repo",
    Diagram: GustoServicesDiagram,
  },
  {
    slug: "devpulse-mfe",
    name: "DevPulse",
    tagline: "Micro-frontend toolbox: real PDF tools, independently deployed",
    problem:
      "My resume lists architecting a micro frontend system at work, but that code is proprietary and unshowable. DevPulse is a public, working example of the same pattern - but rather than a toy demo, each micro-frontend is a genuinely useful, 100%-client-side tool: converting images/Word docs to PDF, merging PDFs, and editing PDFs (text, highlight, redact, delete pages). The shell has zero compile-time dependency on either tool; it only knows a URL and an exposed module name, so each one builds, tests, and deploys on its own schedule.",
    role: "Solo: designed the shell + 2 tool remotes (PDF conversion, PDF manipulation), wired per-package CI (each lints/builds as its own GitHub Actions check) and the combined GitHub Pages deployment.",
    tech: [
      "React",
      "TypeScript",
      "Webpack 5",
      "Module Federation",
      "pdf-lib",
      "pdfjs-dist",
      "mammoth",
      "npm workspaces",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/devpulse-mfe",
    liveUrl: "https://anish0714.github.io/devpulse-mfe/",
    Diagram: DevPulseDiagram,
  },
];
