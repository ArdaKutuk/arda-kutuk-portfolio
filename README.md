# Arda Kütük Portfolio

Personal portfolio of Arda Kütük — a Management Information Systems student
focused on software development, data and artificial intelligence.

Implemented from a Claude Design handoff (see [`project/`](project)) as a
production Next.js site. Available in Turkish (default) and English.

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
    [locale]/            # Routes for /tr and /en: home, /projects/[slug]
    sitemap.ts, robots.ts, icon.svg
  proxy.ts                # Locale detection/redirect (Next's middleware convention)
  i18n/
    config.ts             # locales, defaultLocale
    types.ts              # Dictionary shape (one source of truth for all UI copy)
    tr.ts / en.ts          # Translated copy
    dictionaries.ts        # getDictionary(locale)
  components/
    layout/                # Header (with language switcher), Footer
    sections/               # Page sections (Hero, About, Projects, Contact, ...)
    projects/               # Project card
    ui/                     # Reusable UI (Container, CtaButton, ContactForm, ...)
  data/                     # Locale-aware content: projects, experience
  lib/                      # Site config and shared style tokens
project/                    # Original Claude Design handoff bundle (reference only)
```

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` once a
domain is attached (used for metadata, Open Graph tags and the sitemap).

## Adding a Project

Add an entry to [`src/data/projects.ts`](src/data/projects.ts) with `tr` and
`en` content blocks. Each project automatically gets a detail page at
`/tr/projects/[slug]` and `/en/projects/[slug]`; leave `githubUrl` / `liveUrl`
as `null` until they exist.

**Known placeholder:** the "IT Servis Masası" / "IT Service Desk" project has
no confirmed description or tags yet — see the `it-servis-masasi` entry in
`projects.ts`.

## Editing Copy

All UI text and page copy lives in [`src/i18n/tr.ts`](src/i18n/tr.ts) and
[`src/i18n/en.ts`](src/i18n/en.ts), typed against a shared
[`Dictionary`](src/i18n/types.ts) shape so both languages stay in sync.

## Deployment

Ready for GitHub → Vercel. `npm run build` must succeed before deploying.
