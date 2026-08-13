# Agent instructions for cv-gibson

## Purpose
This repository is a personal CV website built with plain HTML, CSS and vanilla JavaScript.
The site uses Vite only for development and production build, not as a frontend framework.

## Key points for AI coding agents

- `index.html` is the page shell. Visible text is not stored here.
- `data.js` contains all CV content in two language blocks: `es` and `en`.
  - Edit `data.js` for any visible text changes.
  - Keep content consistent in both language blocks.
  - Section `id` values must match the keys in `CV_DATA.es` and `CV_DATA.en`.
  - Section ids are identical across languages so fragment links like `#experience` work in both.
  - `experience` is the programming track (cards, no dates, ordered by impact); `otherExperience` is the earlier non-programming jobs (with dates). Both are written following [star.md](./star.md).
- `main.js` orchestrates page initialization, rendering, theme, motion and palette behavior.
- `js/i18n.js` decides the active language.
- `js/render.js` maps `data.js` into DOM structure.
- `js/palette.js` implements the keyboard command palette using a native `<dialog>`.
- `js/theme.js` handles light/dark theme and prefers `prefers-color-scheme`.
- `js/motion.js` handles scroll reveal behavior.
- CSS is modular: `css/tokens.css`, `css/base.css`, `css/layout.css`, `css/sections.css`, `css/palette.css`, `css/print.css`.

## Scripts and local development

- `npm install`
- `npm run dev` — local development server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the built site

## Deployment

- Netlify deploys the site from `main` using `netlify.toml`.
- `vite.config.js` sets `base: "/"` for root deployment.

## Behavior and constraints

- No browser dependencies or external analytics. Keep the runtime as plain JS/CSS/HTML.
- New visible UI strings must be added to both language blocks in `data.js`.
- The page is single-page, keyboard-first, and accessible.

## References

- README: [README.md](./README.md)
- Netlify config: [netlify.toml](./netlify.toml)
- Vite config: [vite.config.js](./vite.config.js)
