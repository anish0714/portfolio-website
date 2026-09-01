export interface TechGroup {
  label: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    label: "AI & LLMs",
    items: ["Claude", "ChatGPT", "Gemini", "AI-Driven Development"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node", "Python"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Azure DevOps", "Office JS", "GitHub"],
  },
];
