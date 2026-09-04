import waypointHome from "../assets/screenshots/waypoint-home.jpg";
import waypointFlights from "../assets/screenshots/waypoint-flights.jpg";
import waypointHotels from "../assets/screenshots/waypoint-hotels.jpg";
import waypointHotelDetail from "../assets/screenshots/waypoint-hotel-detail.jpg";
import devpulseShellIntro from "../assets/screenshots/devpulse-shell-intro.jpg";
import devpulsePdfConversion from "../assets/screenshots/devpulse-pdf-conversion.jpg";
import devpulsePdfManipulation from "../assets/screenshots/devpulse-pdf-manipulation.jpg";
import type { CarouselImage } from "../components/Carousel";

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
  screenshots: CarouselImage[];
}

export const projects: Project[] = [
  {
    slug: "waypoint",
    name: "Waypoint",
    tagline: "Full-stack travel booking platform (flights, hotels, insurance, loyalty)",
    problem:
      "Wanted a portfolio project that goes beyond CRUD: a real booking flow with actual inventory holds (not just a form that writes a row), seeded with real data rather than Lorem Ipsum placeholders - 15 real Canadian airports, 4 real airlines with a modeled 61-route domestic network, 41 real hotels across 10 cities and 3 rating tiers, and 3 real insurance providers (TuGo, Manulife, Allianz), so search and booking behave like a real travel site. Layered on real business logic too: trip insurance priced against the booking's own subtotal, and a loyalty program that earns points per dollar spent and auto-upgrades tiers for real discounts on future bookings.",
    role: "Solo full-stack: designed the Prisma schema (17 tables), the Express API, the seat/room-inventory booking logic, the insurance pricing and tiered loyalty program (discounts applied and recorded inside the booking transaction), JWT auth with guest checkout, the Next.js/TypeScript frontend, and the CI pipeline.",
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
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/travel-app",
    screenshots: [
      {
        src: waypointHome,
        alt: "Waypoint home page with a flight/hotel search widget over a hero photo",
        caption: "Home — real Canadian route search, popular-city hotel shortcuts",
      },
      {
        src: waypointFlights,
        alt: "Waypoint flight search results for Toronto to Vancouver with real fares",
        caption: "Flight search — real airline fares, cabin classes, and seat availability",
      },
      {
        src: waypointHotels,
        alt: "Waypoint hotel search results grid for Toronto",
        caption: "Hotel search — real hotels across rating tiers, filterable by city",
      },
      {
        src: waypointHotelDetail,
        alt: "Waypoint hotel detail page for the Fairmont Royal York with room rate plans",
        caption: "Hotel detail — real room types with flexible and non-refundable rate plans",
      },
    ],
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
    screenshots: [
      {
        src: devpulseShellIntro,
        alt: "DevPulse shell landing page listing the available micro-frontend tools",
        caption: "Shell — lists every independently deployed tool, loaded on demand",
      },
      {
        src: devpulsePdfConversion,
        alt: "DevPulse PDF Conversion Tool remote, loaded into the shell",
        caption: "PDF Conversion Tool — a separately deployed remote, loaded at runtime",
      },
      {
        src: devpulsePdfManipulation,
        alt: "DevPulse PDF Manipulation Tool remote, loaded into the shell",
        caption: "PDF Manipulation Tool — another remote, built and deployed on its own schedule",
      },
    ],
  },
];
