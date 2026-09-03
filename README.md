# sentinelops-homepage

Cybersecurity portfolio for **Kevin (Tam) Nguyen** — [sentinelops.fyi](https://sentinelops.fyi)

A single-page React site covering SOC operations, DFIR, MCP/AI security tooling, home-lab security
automation, and a detailed WAF hardening case study for [audit.sentinelops.fyi](https://audit.sentinelops.fyi).

## Tech stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/) — dev server & build
- [Tailwind CSS 3](https://tailwindcss.com/) — styling, dark mode via the `class` strategy
- Plain JS (JSX), no UI component library — icons are inline SVG (`src/components/Icon.jsx`)

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
```

### Other scripts

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project structure

```
index.html                 Entry HTML, meta tags, pre-hydration theme script
src/
  main.jsx                 React root
  App.jsx                  Page composition (section order)
  index.css                Tailwind layers + shared component classes
  context/
    ThemeContext.jsx        Dark/light mode provider (persisted to localStorage)
  data/
    content.js              All page copy: profile, projects, skills, WAF case study
  components/
    Navbar.jsx               Sticky nav, theme toggle, mobile menu
    Hero.jsx                  Landing hero
    About.jsx                 Focus areas (SOC, DFIR, MCP, Home-SOC, AI Security)
    FeaturedProjects.jsx      Project cards
    Skills.jsx                 Grouped skill tags
    WAFCaseStudy.jsx           WAF hardening case study for audit.sentinelops.fyi
    Contact.jsx                 Contact form (mailto) + social links
    Footer.jsx
    Icon.jsx                    Inline SVG icon set
public/
  favicon.svg
```

## Content

All copy — profile info, featured projects, skill groups, and the WAF case study — lives in
`src/data/content.js`. Update that file to change page content without touching component markup.

## Dark mode

Theme state is managed by `src/context/ThemeContext.jsx`, toggled from the navbar, and persisted to
`localStorage`. An inline script in `index.html` applies the stored (or system-preferred) theme
before React hydrates, avoiding a flash of the wrong theme on load.

## Deployment

This is a static Vite build — `npm run build` outputs a deployable `dist/` directory suitable for
any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

## License

See [LICENSE](./LICENSE).
