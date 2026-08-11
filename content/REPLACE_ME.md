# REPLACE_ME — Placeholder Checklist

This file lists every placeholder in the project. The site builds and runs
fully with these placeholders in place — nothing is broken or empty — but
replace them before publishing or sharing this portfolio.

Most text placeholders live in a single file: **`lib/data.ts`**. Start there
for the fastest pass through this list.

---

## 1. Profile Photo

- **File:** `public/images/profile-placeholder.jpg`
- **Used in:** `app/about/page.tsx` (via `site.avatar` in `lib/data.ts`)
- **Replace with:** A square (1:1) professional headshot, ideally 800×800px
  or larger. Keep the same filename, or update `site.avatar` in `lib/data.ts`
  if you rename it.

## 2. Professional Headshot / Open Graph Image

- **File:** `public/images/og-image-placeholder.jpg`
- **Used in:** `app/layout.tsx` metadata (Open Graph + Twitter card image)
- **Replace with:** A 1200×630px image representing you or your portfolio —
  shown when the site is shared on social media, Slack, iMessage, etc.

## 3. Email Address

- **Exact text:** `your-email@example.com`
- **Found in:** `site.email` in `lib/data.ts` (used across Navbar resume link
  context, Footer, Contact page, Privacy Policy, and JSON-LD metadata)
- **Replace with:** Your real, monitored email address.

## 4. Phone Number

- **Exact text:** `+234 000 000 0000`
- **Found in:** `site.phone` in `lib/data.ts` (currently defined but not
  displayed anywhere by default — add it to the Contact page if you want it
  public)
- **Replace with:** Your real phone number, or delete the field if you'd
  rather not publish it.

## 5. GitHub URL

- **Exact text:** `https://github.com/yourusername`
- **Found in:** `site.github` in `lib/data.ts` (Footer, Contact page, JSON-LD)
- **Replace with:** Your real GitHub profile URL.

## 6. LinkedIn URL

- **Exact text:** `https://linkedin.com/in/yourusername`
- **Found in:** `site.linkedin` in `lib/data.ts` (Footer, Contact page, JSON-LD)
- **Replace with:** Your real LinkedIn profile URL.

## 7. X (Twitter) URL

- **Exact text:** `https://x.com/yourusername`
- **Found in:** `site.twitter` in `lib/data.ts` (Footer, JSON-LD)
- **Replace with:** Your real X/Twitter profile URL, or remove the social
  entry from `socials` in `lib/data.ts` if you don't use X.

## 8. Portfolio Domain

- **Exact text:** `https://your-domain-here.com`
- **Found in:** `site.url` in `lib/data.ts` — drives `metadataBase`, Open
  Graph URLs, `sitemap.ts`, and `robots.ts`
- **Replace with:** Your real deployed domain (e.g. your Vercel URL or custom
  domain) **after** your first deploy, then redeploy so metadata is correct.

## 9. Resume / CV

- **File:** `public/resume-placeholder.pdf`
- **Used in:** `site.resumeUrl` in `lib/data.ts` — linked from the Navbar
  ("Resume"), mobile menu, and the Contact page ("Download CV" button)
- **Replace with:** Your actual resume/CV as a PDF. Keep the same filename,
  or update `site.resumeUrl` if you rename it.

## 10. Project Screenshots

- **Files:**
  - `public/images/project-daily-grace-placeholder.jpg`
  - `public/images/project-church-cms-placeholder.jpg`
  - `public/images/project-cctv-platform-placeholder.jpg`
  - `public/images/project-traffic-system-placeholder.jpg`
- **Used in:** `image` field on each project object in `lib/data.ts`, rendered
  by `components/ProjectCard.tsx` (each card currently shows a generated
  placeholder graphic labeled "Replace screenshot")
- **Replace with:** Real screenshots or mockups of each project, ~800×500px.
  Keep the same filenames, or update the `image` field per project in
  `lib/data.ts` if you rename them.

## 11. Live Demo URLs

- **Field:** `liveUrl: null` on each project in `lib/data.ts`
- **Used in:** `components/ProjectCard.tsx` — while `null`, the card shows a
  disabled "Demo pending" state instead of a broken link
- **Replace with:** The live URL for any project that has one deployed. Leave
  as `null` for projects without a public demo (e.g. the CCTV backend).

## 12. Repository URLs

- **Field:** `githubUrl: null` on each project in `lib/data.ts`
- **Used in:** `components/ProjectCard.tsx` — while `null`, the card shows a
  disabled "Repo link needed" state instead of a broken link
- **Replace with:** The GitHub URL for each project's repository (or leave
  `null` for private/unpublished repos).

## 13. Company Name (Internship)

- **Exact text:** `Company Name Placeholder`
- **Found in:** `timeline[0].organization` in `lib/data.ts` (Experience page,
  About page timeline, Home page "Currently" card)
- **Replace with:** The real company name from your Software Developer
  Internship, plus the real dates (see next item).

## 14. Internship Dates

- **Exact text:** `REPLACE_ME: e.g. Jun 2024 — Aug 2024`
- **Found in:** `timeline[0].period` in `lib/data.ts`
- **Replace with:** Your actual internship start and end dates.

## 15. University / Institution Name

- **Exact text:** `University / Institution Name Placeholder`
- **Found in:** `timeline[1].organization` in `lib/data.ts`
- **Replace with:** The real name of your university or institution.

## 16. Graduation Year

- **Exact text:** `REPLACE_ME: expected graduation year`
- **Found in:** `timeline[1].period` in `lib/data.ts`
- **Replace with:** Your actual (or expected) graduation year.

## 17. Favicon

- **File:** `app/favicon.ico`
- **Used in:** Browser tab icon (Next.js picks this up automatically from
  `app/favicon.ico`)
- **Replace with:** A real favicon based on your personal brand/logo.

## 18. Privacy Policy — Last Updated Date

- **Exact text:** `REPLACE_ME: e.g. July 9, 2026`
- **Found in:** `app/privacy-policy/page.tsx` (`lastUpdated` constant)
- **Replace with:** The actual date you last edited/published the policy.

## 19. Contact Form Email Delivery

- **File:** `app/api/contact/route.ts`
- **Current behavior:** Validates the submission and logs it server-side.
  It does **not** send an email yet.
- **Replace with:** A real integration — e.g. [Resend](https://resend.com),
  SendGrid, Postmark, or a webhook to Airtable/Google Sheets. Store the
  provider's API key as an environment variable in your hosting platform
  (e.g. Vercel → Project Settings → Environment Variables), never hardcoded
  in the repo.

## 20. Company Logos, Testimonials, Certifications, Awards, Blog Posts

None of these sections exist yet in the current site, since no source
material for them was provided. If you'd like to add any of the following,
they can be added as new sections/pages using the same `lib/data.ts`
pattern used throughout the project:

- Company/client logos strip
- Testimonials/recommendations
- Certifications (e.g. AWS, Google, Meta)
- Awards or hackathon placements
- A blog or written-post section

---

### Quick-reference: everything driven by `lib/data.ts`

Opening `lib/data.ts` and filling in the `site` object plus reviewing
`projects`, `timeline`, and `socials` covers the majority of items above in
one pass.
