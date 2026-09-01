export interface Role {
  role: string;
  date: string;
  location: string;
  technologies?: string[];
  details: string[];
  impact?: string[];
}

export interface Company {
  name: string;
  totalDuration?: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    name: "Appfabs Incorporation",
    totalDuration: "4 years total",
    roles: [
      {
        role: "Software Engineer",
        date: "June 2026 - Present (3 months)",
        location: "Greater Toronto Area, Canada",
        technologies: [
          "React",
          "TypeScript",
          "Redux",
          "Redux-Saga",
          "Node.js",
          "Next.js",
          "Office.js",
          "Micro Frontends",
          "Module Federation",
          "Azure DevOps",
          "Webpack",
          "REST APIs",
          "AI-Assisted Development (Claude)",
        ],
        details: [
          "Integrated AI/LLM-backed services into the playbook analysis flow, building responsive UI states for streaming results, loading, and error handling.",
          "Contributing to Compliance Checker UI for automated review that flags nonconforming clauses against firm and regulatory standards, reducing manual review effort.",
          "Supporting clause-analysis and AI-assisted search features (Henchman MFEs) that let users compare clause language across precedent documents.",
          "Architected and maintained a micro frontend system (Module Federation), enabling modular, independent deployments and faster feature delivery.",
          "Optimized Webpack configurations, reducing bundle size and improving application performance by ~20%.",
          "Integrated Office.js for seamless document handling within the Microsoft Office ecosystem.",
          "Use Claude daily for code review, debugging, and workflow/task management, improving development velocity while maintaining code quality standards.",
        ],
        impact: [
          "Improved search performance ~30% through optimized React rendering and API integration.",
          "Reduced document delivery time ~25% with an efficient Delivery API implementation.",
          "Contributed to a successful migration to micro frontend architecture, enabling independent deployments across litigation and transactional product lines.",
        ],
      },
      {
        role: "Software Developer",
        date: "December 2025 - June 2026 (7 months)",
        location: "Kerala, India",
        details: [
          "Continued core contributions to the LexisNexis litigation and transactional MFE platform.",
          "Built responsive, accessible (WCAG-aware) UI components in ReactJS and TypeScript for complex legal workflows.",
          "Engineered the Document MFE rendering module with an integrated Delivery API for secure print, email, and multi-format download/export.",
          "Collaborated with cross-functional, distributed teams to deliver cloud-based solutions on Azure DevOps, streamlining CI/CD pipelines.",
        ],
      },
      {
        role: "Software Engineer",
        date: "September 2022 - December 2025 (3 years 4 months)",
        location: "North York, ON",
        details: [
          "Joined AppFabs to work on the LexisNexis legal-tech platform, building foundational litigation and transactional features.",
          "Delivered early citation validation and legal search features later expanded into dedicated litigation MFEs.",
          "Built core React/TypeScript UI components used across the litigation product line.",
          "Worked with Redux for state management across asynchronous, data-heavy legal research workflows.",
          "Established front-end patterns and component structure that supported the later migration to micro frontend (Module Federation) architecture.",
        ],
      },
    ],
  },
  {
    name: "LTI - Larsen & Toubro Infotech",
    roles: [
      {
        role: "Software Developer",
        date: "February 2018 - September 2020 (2 years 8 months)",
        location: "Mumbai",
        technologies: [
          "React",
          "React Native",
          "JavaScript",
          "Node.js",
          "PostgreSQL",
          "Amazon Lex",
          "REST APIs",
        ],
        details: [
          "Built a conversational HR chatbot using Amazon Lex, delivered through a React-based chat widget, enabling employees to self-serve HR queries and reducing manual support load.",
          "Developed a cross-platform attendance application with a React web client and React Native mobile app, backed by a Node.js/PostgreSQL service layer.",
          "Built a web portal analytics dashboard, providing actionable insights through an interactive React front end.",
          "Designed and consumed REST APIs across projects, collaborating with cross-functional teams to deliver releases on schedule.",
          "Mentored junior developers and supported the team in meeting project milestones.",
        ],
        impact: [
          "Reduced HR query resolution time via a scalable Amazon Lex chatbot integrated into a React chat widget.",
          "Improved employee productivity through a unified web-and-mobile attendance experience on a shared React/React Native stack.",
        ],
      },
    ],
  },
];
