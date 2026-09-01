export interface Project {
  name: string;
  tagline: string;
  problem: string;
  role: string;
  tech: string[];
  githubUrl: string;
  secondaryGithubUrl?: string;
  secondaryLabel?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
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
  },
];
