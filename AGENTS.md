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
  - Any paragraph, bullet, skill, education title or institution can carry a print-only rewrite: `{ text: "long, for the web", pdf: "one line, for the PDF" }`, or `{ text: "…", soloWeb: true }` to keep it off the page entirely. Both versions are rendered and CSS hides the wrong one. The PDF is **two A4 pages** and both must stay full. It used to be one, and the shrinking that rule forced was cutting the wrong things: every `result` — the outcome of each job and project, the part a recruiter reads first — lived only on the web. Changed on 2026-08-27, after checking that an ATS does not count pages: it extracts text and indexes it, so length costs nothing there. What a second page does cost is a reader's patience, so it has to be earned: a page with four lines on it reads as careless. If content ever shrinks back to one full page, go back to one — the failure mode to avoid is a page and a half.
  - `stack` on an entry is print-only too: the technologies used in that job. It exists because an applicant tracking system does not credit a technology that only shows up in the skills list at the end.
- `main.js` orchestrates page initialization, rendering, theme, motion and palette behavior.
- `js/i18n.js` decides the active language.
- `js/render.js` maps `data.js` into DOM structure.
- `js/icons.js` holds the inline SVG glyphs for the contact links. It is not
  content: it does not change with language. `data.js` only names the icon each
  link uses (`icon: "github"`); an unknown name renders the link without a glyph.
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
