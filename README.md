# Anish Dandekar — Portfolio

My personal portfolio site: experience, tech stack, projects, and a way to get in touch.

**Live:** https://anish0714.github.io/portfolio-website/

## Features

- **Projects as case studies** — each project renders as a tile on the home page; clicking one opens a dedicated `/projects/:slug` page with the problem, my role, tech, an architecture diagram, and links to the repo and live demo
- **Light/dark theme toggle** — persisted to `localStorage`, defaults to the system preference, applied before first paint to avoid a flash of the wrong theme
- **Scroll-reveal animations** — sections fade/slide in on entry via a small `IntersectionObserver` hook, skipped entirely under `prefers-reduced-motion`
- **Downloadable resume** — a one-page PDF, linked from the hero
- **Open Graph/Twitter preview card** — sharing the link shows a proper image, not a bare URL
- **Contact form** — opens a pre-filled Gmail compose window with no backend required

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS, React Router (client-side routing for project pages), Vitest + React Testing Library, deployed via GitHub Actions to GitHub Pages.

## Running locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run test`.

## Deployment

Pushing to `main` runs lint, tests, and a build, then deploys to GitHub Pages. `public/404.html` handles the GitHub Pages SPA-routing fallback, so a direct link or refresh on a project page (e.g. `/projects/devpulse-mfe`) works correctly instead of 404ing.
