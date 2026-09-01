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
    tagline: "Micro-frontend showcase (Webpack Module Federation)",
    problem:
      "My resume lists architecting a micro frontend system at work, but that code is proprietary and unshowable. DevPulse is a public, working example of the same pattern: a shell app with no compile-time dependency on two independently built, independently deployed React remotes, composed together at runtime.",
    role: "Solo: designed the shell + 2 remotes, wrote each package's Module Federation config, and wired the combined GitHub Pages deployment.",
    tech: [
      "React",
      "TypeScript",
      "Webpack 5",
      "Module Federation",
      "npm workspaces",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/devpulse-mfe",
    liveUrl: "https://anish0714.github.io/devpulse-mfe/",
    Diagram: DevPulseDiagram,
  },
];
