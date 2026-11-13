import friendsJobOverview from "../assets/screenshots/friendsjob-overview.jpg";
import friendsJobJobs from "../assets/screenshots/friendsjob-jobs.jpg";
import friendsJobAddJob from "../assets/screenshots/friendsjob-add-job.jpg";
import fc27Cards from "../assets/screenshots/fc27-cards.jpg";
import fc27Squad from "../assets/screenshots/fc27-squad.jpg";
import fc27Meta from "../assets/screenshots/fc27-meta.jpg";
import algonquinOverview from "../assets/screenshots/algonquin-overview.jpg";
import algonquinSchedule from "../assets/screenshots/algonquin-schedule.jpg";
import algonquinSpots from "../assets/screenshots/algonquin-spots.jpg";
import algonquinSpotDetail from "../assets/screenshots/algonquin-spot-detail.jpg";
import fitFuelOverview from "../assets/screenshots/fitfuel-overview.jpg";
import fitFuelRecipes from "../assets/screenshots/fitfuel-recipes.jpg";
import fitFuelMealPlan from "../assets/screenshots/fitfuel-mealplan.jpg";
import fitFuelShopping from "../assets/screenshots/fitfuel-shopping.jpg";
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
  summary: string;
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
    slug: "friends-job-portal",
    name: "Friends Job Help",
    tagline: "Job-search tracker for helping friends land their next role",
    summary:
      "A board per friend: postings rated Strong / Good / Stretch with why they fit and what the gaps are, a Saved → Applied → Interview → Offer pipeline, source tags, search and filters, and JSON/CSV import and export — all stored in the browser.",
    problem:
      "Helping a few friends job hunt turned into a mess of LinkedIn tabs, chat messages and half-remembered reasons why a role did or didn't fit. I wanted one board per friend: the postings actually worth applying to, an honest Strong / Good / Stretch rating with the fit and the gaps written down, and where each application stands. It started as a single-file prototype and became a typed React app seeded with real data - 61 postings from LinkedIn, Indeed and Eluta.ca across Toronto, the GTA and Kitchener-Waterloo. There's no backend: everything stays in the browser, and a versioned seed merges newly found postings into a returning visitor's saved data without touching their statuses.",
    role: "Solo: turned the prototype into a Vite + React + TypeScript app with a useReducer/context store persisted to localStorage, the application-status pipeline, LinkedIn URL normalisation, source detection and filtering, JSON/CSV import and export, accessible modals (Esc to close, focus trap, WCAG AA colours in both themes), Vitest + React Testing Library tests, and the CI and GitHub Pages deploy workflows.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Vitest",
      "React Testing Library",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/friends-job-portal",
    liveUrl: "https://anish0714.github.io/friends-job-portal/",
    screenshots: [
      {
        src: friendsJobOverview,
        alt: "Friends Job Help board for Friend #1 with skill chips, match and status counts, filters and job cards",
        caption: "Board — profile, match and pipeline counts, and every saved posting",
      },
      {
        src: friendsJobJobs,
        alt: "Job list filtered to Indeed postings, each card showing fit, gaps, status and a source tag",
        caption: "Filters — search, match chips and source combine; each card shows fit, gaps and status",
      },
      {
        src: friendsJobAddJob,
        alt: "Add-job dialog with a pasted LinkedIn URL tidied to its job id and the source detected as LinkedIn",
        caption: "Add a job — paste a LinkedIn link and the id and source are worked out for you",
      },
    ],
  },
  {
    slug: "fc27-collection",
    name: "FC 27 Collection",
    tagline: "Ultimate Team collection tracker, squad builder and SBC planner",
    summary:
      "All ~19,800 FC 27 cards in one fast, filterable grid — owned in colour, missing greyed out — plus a squad builder with live rating and chemistry, one-click auto-build, an SBC cost planner and a meta-card watchlist.",
    problem:
      "The in-game Web App is slow for the questions I actually ask: which cards do I own, what's the best squad I can field from my club right now, and what will an SBC really cost if I use my own fodder first? FC 27 Collection loads the full card database into a fast grid, imports snapshots of my club and the SBC hub, and plans each open SBC by covering its requirements with club players before pricing the rest at transfer-market rates - while never touching players I've marked to keep. My own data is git-ignored; the public site starts empty and saves to the browser, with export and import to move data between machines.",
    role: "Solo: built the card grid and filters, the squad builder and its chemistry rules (club, league and nation thresholds, Icons and Heroes, out-of-position players), auto-build for rating, balance or chemistry, the SBC planner and cost estimates, Node scripts that fetch the card database and import club and SBC snapshots, and the GitHub Pages deploy.",
    tech: ["React", "Vite", "JavaScript", "Node.js", "GitHub Actions"],
    githubUrl: "https://github.com/anish0714/fc27-collection",
    liveUrl: "https://anish0714.github.io/fc27-collection/",
    screenshots: [
      {
        src: fc27Cards,
        alt: "FC 27 Collection card grid with owned cards in gold and missing cards greyed out",
        caption: "Cards — every FC 27 card, owned in colour and missing greyed out",
      },
      {
        src: fc27Squad,
        alt: "Squad builder showing an auto-built 4-3-3 with team rating 90 and chemistry 32 of 33",
        caption: "Squad builder — auto-build from your club with live rating and chemistry",
      },
      {
        src: fc27Meta,
        alt: "Meta cards tab with S and A tier cards, sources and Add to targets buttons",
        caption: "Meta cards — tiered picks with sources, one click to add to targets",
      },
    ],
  },
  {
    slug: "algonquin-colour-day",
    name: "Algonquin Fall Colour Day",
    tagline: "Mobile-first trip planner for a fall colour day in Algonquin Park",
    summary:
      "An hour-by-hour schedule, seven stops along Highway 60 with photo galleries, parking maps and directions, food picks and park tips — a phone tab bar on the trail, a multi-column layout at home.",
    problem:
      "Planning a fall colour day trip for a group meant juggling trail pages, parking rules, sunset times and restaurant lists. I wanted one link everyone could open on their phone in the car: the plan in order, how long each trail takes, where to park and how to get there, with backup stops if a lot is full. All the trip content lives in a single JSON file, so changing the plan is a data edit rather than a code change. Photos are Creative Commons images from Wikimedia Commons, credited as their licences require, with painted canvas scenes for any stop without one.",
    role: "Solo: built the React + Vite app with HashRouter routing for GitHub Pages, the trip data model and the tests that validate it, OpenStreetMap parking maps and Google Maps directions links, canvas-painted scenes and a falling-leaves animation that respects reduced motion, Jest + React Testing Library tests with enforced coverage thresholds, and a CI/CD pipeline that deploys, smoke-tests the live site and has a one-switch maintenance mode.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Jest",
      "React Testing Library",
      "Canvas API",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/algonquin-colour-day",
    liveUrl: "https://anish0714.github.io/algonquin-colour-day/",
    screenshots: [
      {
        src: algonquinOverview,
        alt: "Algonquin Fall Colour Day overview with trip facts, a fall forest photo and the Highway 60 route",
        caption: "Overview — key facts and the route through the park (photo: LBM1948, CC BY-SA 4.0)",
      },
      {
        src: algonquinSchedule,
        alt: "Hour-by-hour schedule from leaving Toronto to the first trail stops, with parking notes",
        caption: "Schedule — the day hour by hour, with parking and map links for each stop (photos: Wikimedia Commons)",
      },
      {
        src: algonquinSpots,
        alt: "Spots page with cards for each stop, showing time, distance and difficulty",
        caption: "Spots — every stop in order, with a painted scene where no photo exists (photos: Wikimedia Commons)",
      },
      {
        src: algonquinSpotDetail,
        alt: "Lookout Trail page with a photo gallery, trail facts and an About section",
        caption: "Spot page — gallery, trail facts and highlights (photo: LBM1948, CC BY-SA 4.0)",
      },
    ],
  },
  {
    slug: "fit-fuel",
    name: "Fit Fuel",
    tagline: "High-protein, lactose-free meal planner for a 12–8 fasting window",
    summary:
      "A filterable recipe library, a weekly meal-plan calendar with live macro totals, a checkable shopping list, and a macro calculator — all persisted client-side, with nothing to run server-side.",
    problem:
      "My own meal plan is real constraints, not a hypothetical: lactose intolerance, no beef or pork, a 12-8 intermittent fasting window, and a 4-7 PM gym block, with an air fryer as the main tool. Most meal-plan tools are either a static PDF or a full backend nobody needs for a personal routine - I wanted the middle ground: recipes I can actually filter and favorite, a week I can assign and see the real macro impact of, and a shopping list I check off on my phone at the store, with nothing to persist server-side because a single-user planner doesn't need one.",
    role: "Solo: built the filterable recipe library, the weekly meal-plan calendar with live per-day protein/calorie totals, the checkable shopping list (grouped by category with real store notes), the macro calculator, and the localStorage-backed persistence hook every page builds on, plus the CI/CD pipeline.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/anish0714/fit-fuel",
    liveUrl: "https://anish0714.github.io/fit-fuel/",
    screenshots: [
      {
        src: fitFuelOverview,
        alt: "Fit Fuel overview page showing the daily rhythm timeline and current staples",
        caption: "Overview — the daily rhythm from first meal to fasting window close",
      },
      {
        src: fitFuelRecipes,
        alt: "Fit Fuel recipes page with filterable tofu, fish, and chicken air-fryer recipes",
        caption: "Recipes — filterable by protein type and tag, favoritable and persisted",
      },
      {
        src: fitFuelMealPlan,
        alt: "Fit Fuel weekly meal plan with a breakfast and dinner dropdown per day",
        caption: "Meal plan — assign each day's meals and see live protein/calorie totals",
      },
      {
        src: fitFuelShopping,
        alt: "Fit Fuel shopping list grouped by category with real store notes",
        caption: "Shopping list — checkable, grouped by category, with real store picks",
      },
    ],
  },
  {
    slug: "waypoint",
    name: "Waypoint",
    tagline: "Full-stack travel booking platform (flights, hotels, insurance, loyalty)",
    summary:
      "A real booking flow with actual seat/room inventory holds, seeded with real Canadian airports, airlines, and hotels — plus insurance pricing and a tiered loyalty program layered on top.",
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
    tagline: "Micro-frontend toolbox: 5 real client-side tools, independently deployed",
    summary:
      "A public, working example of the micro-frontend pattern from my day job: 5 independently useful, 100%-client-side tools — PDF conversion, PDF editing, dev utilities, a PDF form filler, and OCR — each built, tested, and deployed on its own schedule via real Webpack Module Federation.",
    problem:
      "My resume lists architecting a micro frontend system at work, but that code is proprietary and unshowable. DevPulse is a public, working example of the same pattern - but rather than a toy demo, each micro-frontend is a genuinely useful, 100%-client-side tool: converting images/Word docs to PDF and merging PDFs, editing PDFs (text, highlight, redact, delete pages), everyday dev utilities (JSON formatting, Base64/URL encoding, UUID/hash generation, a regex tester), filling real interactive PDF form fields, and OCR text extraction from images or scanned PDFs. The shell has zero compile-time dependency on any tool; it only knows a URL and an exposed module name, so each one builds, tests, and deploys on its own schedule.",
    role: "Solo: designed the shell + 5 tool remotes (PDF conversion, PDF manipulation, dev utils, PDF form filler, OCR), wired per-package CI (each lints/builds as its own GitHub Actions check) and the combined GitHub Pages deployment.",
    tech: [
      "React",
      "TypeScript",
      "Webpack 5",
      "Module Federation",
      "pdf-lib",
      "pdfjs-dist",
      "mammoth",
      "Tesseract.js",
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
