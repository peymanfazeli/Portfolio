# Portfolio — AGENTS.md

Single-page React 19 portfolio (Peyman Fazeli), CRA-un-ejected. Plain JS, no TypeScript.

## Commands

```bash
npm install          # install deps
npm start            # dev server @ localhost:3000
npm test             # jest watch mode
npm run build        # production build → ./build
```

- No standalone lint/format script (lint runs via react-scripts). No Prettier.
- No CI workflows in repo.

## Architecture

- **All content is in `src/config/index.js`** (skills, experience, contact info, resume links, body text). Edit that file, not components.
- **i18n**: Uses `i18next` + `react-i18next`. Translation JSONs in `src/locales/{en,fa,zh}/translation.json`. Language persisted in localStorage. Add new strings to all 3 locale files. RTL (`dir="rtl"`) auto-applied for `fa`.
- **Routing**: `/` → `Home.js`, `/about` → `Aboutme.js` (placeholder). React Router v7.
- **Styling**: Bootstrap 5 classes + styled-components v6 + plain CSS files.
- **Theme**: dark/light toggle stored in localStorage, applied via `theme-dark`/`theme-light` class on `document.body` (styles in `index.css`).
- **Netlify forms**: Contact form uses Netlify's hidden-form pattern (`data-netlify="true"`). Hidden form in `public/index.html`, visible form in `src/components/ContactForm.js`.

## Quirks & Gotchas

- **TextExpander bug**: prop is misspelled `epxandButtonText` (not `expandButtonText`). The `collapseButtonText` prop controls the "show more" (collapsed) state — naming is inverted.
- **Filenames swapped**: `ContactMe.js` renders the resume download button; `Resume.js` renders the contact button/menu. Intent and filename are crossed.
- **No test files exist** yet (Jest + RTL are configured but unused).
- **Current branch**: `AiAugmentedDev` (trunk is `development`).
- **CRA is un-ejected** — no custom webpack/Babel config possible without ejecting or using craco.
