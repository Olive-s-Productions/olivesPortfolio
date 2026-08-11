# Ogunsakin Olive Tomilola — Portfolio

A production-ready personal portfolio built with **Next.js 14 (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js 14 (App Router, Server Components where appropriate)
- TypeScript
- Tailwind CSS (custom design tokens — see `tailwind.config.ts`)
- Framer Motion (page/scroll/hover animations)
- `next-themes` (dark/light mode)
- `lucide-react` (icons)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, interests, featured projects, current experience |
| `/about` | Biography, skills overview, tech stack, timeline, fun facts |
| `/projects` | Filterable project grid |
| `/experience` | Full experience timeline |
| `/skills` | Grouped, animated skill bars |
| `/contact` | Contact form + direct contact details + resume download |
| `/privacy-policy` | Google Play–ready privacy policy |

Plus `sitemap.xml`, `robots.txt`, and a custom `404` page.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before You Deploy — Replace Placeholder Content

This project ships fully functional with placeholder content so it builds and
runs immediately. **Read `/content/REPLACE_ME.md`** for the full list of
placeholders (email, socials, resume, screenshots, company/university names,
etc.) before publishing.

Most personal details live in one file: **`lib/data.ts`**. Start there.

## Contact Form

The contact form at `/contact` posts to `/app/api/contact/route.ts`, which
currently validates the submission and logs it server-side — it does **not**
send an email yet. Before going live, wire it to a provider such as
[Resend](https://resend.com), SendGrid, Postmark, or a webhook (Airtable,
Google Sheets), and store the provider's API key as an environment variable
in your Vercel project settings (**never** commit it to the repo).

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Click **Deploy**.
5. Once live, update `site.url` in `lib/data.ts` to your real production
   domain (used for metadata, Open Graph tags, and the sitemap), then redeploy.

## Project Structure

```
app/
  layout.tsx            Root layout, fonts, metadata, JSON-LD
  page.tsx               Home
  about/page.tsx
  projects/page.tsx
  experience/page.tsx
  skills/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  api/contact/route.ts   Contact form submission handler
  sitemap.ts
  robots.ts
  not-found.tsx
  globals.css
components/               Reusable UI components
lib/data.ts                Single source of truth for all site content
content/REPLACE_ME.md      Full placeholder checklist
public/images/              Placeholder images (profile, OG image, project shots)
public/resume-placeholder.pdf
```

## Editing Content

Nearly everything — name, bio, projects, skills, experience, socials — is
defined as data in `lib/data.ts`, so most updates don't require touching
component or page files at all.

## Accessibility & Performance Notes

- Respects `prefers-reduced-motion`.
- Visible keyboard focus states throughout.
- Semantic headings, landmark elements, and a skip-to-content link.
- Images are served through `next/image` where practical for automatic
  optimization and lazy loading.
- Static generation is used for every page except the contact API route.

## License