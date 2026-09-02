import type { ComponentType } from "react";
import WaypointDiagram from "../components/diagrams/WaypointDiagram";
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
    slug: "waypoint",
    name: "Waypoint",
    tagline: "Full-stack travel booking platform (flights + hotels)",
    problem:
      "Wanted a portfolio project that goes beyond CRUD: a real booking flow with actual inventory holds (not just a form that writes a row), seeded with real data rather than Lorem Ipsum placeholders - 15 real Canadian airports, 4 real airlines with a modeled 61-route domestic network, and 41 real hotels across 10 cities and 3 rating tiers, so search and booking behave like a real travel site.",
    role: "Solo full-stack: designed the Prisma schema (16 tables), the Express API, the seat/room-inventory booking logic, JWT auth with guest checkout, and the Next.js frontend.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/anish0714/travel-app",
    Diagram: WaypointDiagram,
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
