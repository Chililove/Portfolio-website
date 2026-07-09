# My Portfolio Website

A personal portfolio site built with Next.js and TypeScript — home page, projects page, and a contact form.

## Features

- Home, projects, and contact pages
- Contact form that sends email via Resend
- All editable text kept in one place (`data/siteContent.ts`)

## Tech stack

- Next.js (App Router) + TypeScript
- Resend (contact form emails)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file:

   ```bash
   RESEND_API_KEY="re_..."
   ```

   Get a free key at https://resend.com (API Keys → Create API Key).

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000.

## Editing content

- Text (name, bio, projects, contact info): edit `data/siteContent.ts`
- Colors: edit the `:root` block in `app/globals.css`
- New page: add `app/your-page-name/page.tsx`

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run linter |

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) — it auto-detects Next.js and redeploys on every push. Add `RESEND_API_KEY` under Vercel's Environment Variables so the contact form works live.
