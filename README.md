# Arda Kütük Portfolio

Personal portfolio of Arda Kütük — software engineering, data and AI.
An editorial, content-first site: large typography, a single accent color,
no card-grid template patterns. Available in Turkish (default) and English.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, locale-prefixed routing)
- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/tr` by
default (or `/en` if that was previously selected; the choice is remembered
via a `NEXT_LOCALE` cookie).

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    [locale]/            # Routes for /tr and /en: home, /projects/[slug], not-found
    sitemap.ts, robots.ts, icon.svg
  proxy.ts                # Locale detection/redirect (Next's middleware convention)
  i18n/
    config.ts             # locales, defaultLocale
    types.ts              # Dictionary shape (one source of truth for all UI copy)
    tr.ts / en.ts          # Translated copy
    dictionaries.ts        # getDictionary(locale)
  components/
    layout/                 # Header (visible nav + language switcher), Footer
    sections/                # Hero, Projects (Selected Work), Expertise, Experience,
                              #   About, Currently, Contact
    projects/                # ProjectCard (variant: featured/horizontal/standard),
                              #   ProjectVisual (image slot with typographic fallback)
    ui/                      # Container, Button, LanguageSwitcher, icons
  data/                      # Locale-aware content: projects, experience
  lib/                       # Site config, design tokens (spacing/container), locale cookie
project/                     # Original Claude Design handoff bundle (reference only)
```

## Design System

- **Typography scale** — `.text-display / .text-h1 / .text-h2 / .text-h3 /
  .text-body-lg / .text-body / .text-small / .text-meta` utility classes
  defined once in `globals.css`, used everywhere instead of one-off sizes.
- **Color** — one background, one surface tint, a three-step text hierarchy
  (ink/body/muted), one hairline border color, one accent. No secondary
  accent colors.
- **Spacing** — a single `.section-y` vertical rhythm and one `container`
  width (`src/lib/styles.ts`), rather than per-component arbitrary values.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` once a
domain is attached (used for metadata, Open Graph tags and the sitemap).

## Adding a Project

Add an entry to [`src/data/projects.ts`](src/data/projects.ts) with `tr` and
`en` content blocks. Set `status: "published"` once the content is real —
`"draft"` entries are excluded from every listing, the sitemap and static
generation (no broken links, no placeholder text ever ships). Fields:

- `shortDescription` / `description` — required
- `problem`, `solution`, `features[]`, `architecture`, `challenges`,
  `learnings` — all optional; the case-study page only renders sections that
  have content
- `coverImage` / `gallery[]` — optional; when unset, `ProjectVisual` renders a
  quiet typographic mark instead of a "coming soon" placeholder

## Editing Copy

All UI text and page copy lives in [`src/i18n/tr.ts`](src/i18n/tr.ts) and
[`src/i18n/en.ts`](src/i18n/en.ts), typed against a shared
[`Dictionary`](src/i18n/types.ts) shape so both languages stay in sync.

## Deployment

Ready for GitHub → Vercel. `npm run build` must succeed before deploying.
