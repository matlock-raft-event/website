# Site Audit — Matlock Raft Event

Audit of UX, copy, SEO, accessibility, navigation, colour, and information architecture for `matlockraftevent.co.uk`. Static read of the codebase on `main` as of 2026-05-13. Anything that depends on rendered pixels (perceived speed, true contrast in context, tap target spacing on a device) needs a human or browser to confirm.

Update the **Resolved** column as you work — `✅` when shipped, `🚧` in progress, leave blank when not started.

---

## Scorecard

| Area | Grade | Headline finding |
|---|---|---|
| Information architecture | C | Take Part and Volunteer aren't in the header nav. |
| Copy | C+ | Tone is on-brand; a paragraph is duplicated and a placeholder email is in production. |
| Navigation | C | Header has 5 items; the two highest-intent CTAs aren't among them. |
| SEO — metadata | C | Site-wide meta is solid; homepage and dynamic pages are weak. |
| SEO — structured data | F | Zero JSON-LD. Largest organic-discoverability gap on the site. |
| Accessibility — colour | D | Green palette fails WCAG AA (3.66:1). Several outline buttons fail too. |
| Accessibility — keyboard | D | `ImageCard` click handler is unreachable by keyboard. |
| Accessibility — touch targets | C | Default button height is 36px; WCAG AAA wants 44px. |
| Performance | C | Hero image unoptimised; bundle size worth a review. |

---

## Critical — Fix today

| # | Area | Finding | Location | Fix | Resolved |
|---|---|---|---|---|---|
| 1 | Copy | Volunteer page links to placeholder email `a@a.com` (twice) | `src/page-content/volunteer-page.tsx:55, :80` | Replace with the real volunteer email. Consider sourcing from the same Sanity doc as the contact page. | |
| 2 | Copy | Duplicate paragraph; second paragraph has a grammatical artefact | `src/sections/take-part-section.tsx:91-101` | Delete the second paragraph or merge them. | |
| 3 | SEO | Homepage passes no `description` prop, falls back to "Raft Event" | `src/pages/index.astro:25` | Add a keyword-rich description prop — see Appendix B. | |
| 4 | a11y / SEO | Hero `<img>` has no `alt` | `src/sections/hero-section.tsx:129` | Add `alt="Rafts on the River Derwent during the Matlock Raft Event"`. | |
| 5 | SEO | No `<h1>` on any inner page — `Heading` renders `<h2>` | `src/components/heading.tsx:41` | Have `InnerHeroSection` render the page name as `<h1>`; keep `Heading` as `<h2>` for sections. One h1 per page. | |

## High — Fix this month

| # | Area | Finding | Location | Fix | Resolved |
|---|---|---|---|---|---|
| 6 | Nav / IA | Take Part and Volunteer are not in header nav — only on the homepage's Get Involved cards | `src/components/header.tsx:13-19` | Add Take Part to the header. Consider demoting Gallery to footer-only to make room. Volunteer at minimum in the footer. | |
| 7 | SEO | Zero JSON-LD structured data anywhere | site-wide | Add Organization to `BaseLayout`, Event to `index.astro`, Article to `/updates/[slug]`. Templates in Appendix A. | |
| 8 | SEO | No `og:image` / `twitter:image` — bare-link social previews | `src/layouts/BaseLayout.astro` | Add `public/og-image.jpg` (1200×630). Set `og:image` site-wide; override per update page using the update's hero image. Upgrade `twitter:card` to `summary_large_image`. | |
| 9 | a11y | Green palette `#0b9059` on cream `#f4f4df` measures 3.66:1 — fails WCAG AA (4.5:1) | `src/styles/global.css:36-39` | Pick one: darken bg to `#086e44`, or force `--color-green-contrast: #ffffff`. | |
| 10 | a11y | `ImageCard` click is keyboard-inaccessible when no `href` — `<div onClick>` with no role/tabindex; `onKeyDown` set to onClick function (not a real handler) | `src/components/image-card.tsx:47-56` | Render `<button>` when no href, or add `role="button"`, `tabIndex={0}`, real keydown handler. | |
| 11 | SEO | Sitemap includes `/studio/` admin route | `astro.config.mjs` | `sitemap({ filter: (page) => !page.includes('/studio') })` | |

## Medium — Fix this quarter

| # | Area | Finding | Location | Fix | Resolved |
|---|---|---|---|---|---|
| 12 | IA | No spectator-targeted page; spectators are a huge audience with no entry point | new page | Add `/spectate`, or rebrand `/info` as "For Spectators" (it already has the route map and timings). | |
| 13 | IA | No past-winners / results archive — homepage podium only shows latest year | new page | `/results` with year-by-year archive. | |
| 14 | IA / Legal | No privacy policy | new page | Add `/privacy`. Mandatory for any UK site with analytics. | |
| 15 | IA | 404 page offers only "Go home" | `src/page-content/not-found-page.tsx` | Add links to Take Part, Donate, Info, Contact. Consider including the Header for full recovery. | |
| 16 | IA | Detail pages don't link back to their list at the top | `/updates/[slug]`, `/sponsors/[slug]` | Add "← Back to all updates" / "← Back to all sponsors" near the heading. | |
| 17 | Copy | CTA "Learn more" is vague | `src/sections/summary-section.tsx:54` | Change to "Event details". | |
| 18 | Copy | Sponsor CTA "Contact Us" is generic | `src/sections/become-sponsor-section.tsx:18` | Change to "Become a sponsor". | |
| 19 | Copy | Hero CTA "Get Involved" duplicates the on-page section name and tells the user nothing about action | `src/sections/hero-section.tsx` | Change to "Take part" or "Enter the race". | |
| 20 | Copy | Tonal whiplash — sober environmental paragraph straight into "spectators throw flour and eggs" | volunteer page | Rewrite the bridge so the pivot is intentional. | |
| 21 | Copy | Inconsistent Title Case vs sentence case across section headings | various | Pick one convention. Title Case for headings + sentence case for body and CTAs is the modern default. | |
| 22 | SEO | Every sponsor page meta description is the same placeholder | `src/pages/sponsors/[slug].astro:22` | Use `sponsor.description` from Sanity, fall back to a more specific generic. | |
| 23 | SEO | Every update page meta description is the same placeholder | `src/pages/updates/[slug].astro:22` | Truncate `update.content` plain text to ~160 chars, or add a `summary` field to the Sanity schema. | |
| 24 | SEO | No `public/robots.txt` | `public/` | Create one: `User-agent: *\nDisallow: /studio/\nSitemap: https://www.matlockraftevent.co.uk/sitemap-index.xml` | |
| 25 | SEO / a11y | `<html lang="en">` should be `en-GB` for a UK site | `src/layouts/BaseLayout.astro:19` | Change to `lang="en-GB"`. Add `og:locale` `en_GB`. | |
| 26 | a11y | Outline button variants (yellow, mint, cream) fail contrast on white — e.g. yellow outline 1.72:1 | `src/components/ui/button/button-variants.ts:79-94` | Either don't use outline variant for these palettes, or override text to `text-dark` in the outline branch. | |
| 27 | a11y | Animations ignore `prefers-reduced-motion` | `src/styles/global.css` | Add `@media (prefers-reduced-motion: reduce)` block — see Appendix C. | |
| 28 | a11y | No "Skip to content" link | `src/layouts/BaseLayout.astro` | Add `<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>` as the first child of `<body>`. Add `id="main"` to `<main>` in `PageShell`. | |
| 29 | a11y | Decorative SVGs (e.g. waves) are announced by screen readers | `src/components/waves.tsx` | Add `aria-hidden="true"` to the `<svg>`. | |
| 30 | a11y | Default button height is 36px (`h-9`) — WCAG AAA wants 44px for touch | `src/components/ui/button/button-variants.ts:22-29` | Bump default to `h-11` and small to `h-9`. `lg` already meets 44px. | |

## Low — Backlog

| # | Area | Finding | Location | Fix | Resolved |
|---|---|---|---|---|---|
| 31 | Perf | Hero image is a static JPEG, not responsive/optimised | `src/sections/hero-section.tsx:129` | Use `astro:assets` `<Image>` for automatic WebP + srcset. Likely biggest LCP win. | |
| 32 | Perf | Bundle has large JS chunks worth investigating | `dist/_astro/` | Run `npx vite-bundle-visualizer` after a build; confirm no duplicate React copies. | |
| 33 | SEO | No breadcrumbs on detail pages | `/updates/[slug]`, `/sponsors/[slug]` | Add visual breadcrumbs and `BreadcrumbList` JSON-LD. | |
| 34 | IA | Pages end without prompting the next step (`/info` → no link to Take Part, `/donate` → no link to Sponsors, `/about` → no CTA) | various | Add a closing CTA / cross-link at the bottom of each section. | |
| 35 | Analytics / Privacy | GA needs a UK GDPR consent banner; Cloudflare Web Analytics doesn't | `src/layouts/BaseLayout.astro:43-57` | Switch to Cloudflare Web Analytics — enable in dashboard, remove GA snippet, no consent banner needed. | |
| 36 | IA | No "Plan your visit" content for spectators (parking, directions, facilities, what to bring) | `/info` | Add a section or downloadable PDF. | |
| 37 | IA | FAQ is one undifferentiated list for participants / spectators / volunteers / sponsors | `/info` | Tabs or filters per audience. | |
| 38 | a11y | `useResponsive` returns `false` on SSR — can cause a brief flash of desktop layout on mobile | `src/hooks/use-responsive.ts` | Prefer CSS-only media queries for layout-critical toggles; reserve the hook for behaviour-only branches. | |

---

## What's already working well

Worth keeping in mind alongside the criticism:

- Server-side data fetching means real content ships in the HTML, not a loading flash. SEO + perceived speed both benefit.
- `<link rel="canonical">` is correctly set on every page with `www.matlockraftevent.co.uk` as the consistent canonical.
- Sitemap is generated and live.
- Most images have alt text (gallery, sponsors, updates, RNLI badge, logo).
- Focus rings are present on buttons and the accordion via `focus-visible` styles.
- Mobile drawer (Vaul) handles focus trapping natively.
- The Sanity Studio embed is clean.
- Colour palette outside of green is well-balanced and passes contrast comfortably.

---

## Appendix A — JSON-LD templates

For finding 7. Drop these into the relevant files.

**Site-wide Organization** — `src/layouts/BaseLayout.astro`:
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Matlock Raft Event",
  url: "https://www.matlockraftevent.co.uk",
  logo: "https://www.matlockraftevent.co.uk/icon-512.png",
  sameAs: ["https://www.facebook.com/matlockraftevent/"]
})}/>
```

**Event on homepage** — `src/pages/index.astro`:
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Event",
  name: "The Matlock Raft Event 2026",
  startDate: "2026-12-26T11:00:00+00:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "River Derwent, Matlock",
    address: { "@type": "PostalAddress", addressLocality: "Matlock", addressRegion: "Derbyshire", addressCountry: "GB" }
  },
  image: "https://www.matlockraftevent.co.uk/og-image.jpg",
  description: "Annual Boxing Day charity raft race…",
  organizer: { "@type": "Organization", name: "The Matlock Raft Event", url: "https://www.matlockraftevent.co.uk" }
})}/>
```

**Article per update** — `src/pages/updates/[slug].astro`:
```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: update.title,
  datePublished: update.date,
  image: update.img ? urlFor(update.img).width(1200).height(630).url() : undefined,
  author: { "@type": "Organization", name: "The Matlock Raft Event" }
})}/>
```

## Appendix B — Homepage meta description

For finding 3.

```astro
<BaseLayout
  title="The Matlock Raft Event — Boxing Day charity raft race"
  description="Join Matlock's annual charity raft race on the River Derwent every Boxing Day. Raise money for the RNLI. Enter a raft, donate, sponsor, or come and watch."
>
```

## Appendix C — Reduced-motion CSS

For finding 27.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Appendix D — Colour palette contrast

Source: `src/styles/global.css:21-49`

| Base | Contrast text | Ratio | WCAG AA body (4.5:1) | WCAG AA large (3:1) |
|---|---|---|---|---|
| Red `#cb2a33` | White `#ffffff` | 5.36:1 | ✅ | ✅ |
| **Green `#0b9059`** | Cream `#f4f4df` | **3.66:1** | ❌ | ✅ |
| Yellow `#fbba47` | Dark `#4b2f00` | 7.16:1 | ✅ | ✅ |
| Mint `#bbf1df` | Dark teal `#1c5053` | 7.22:1 | ✅ | ✅ |
| Cream `#f3f3e5` | Dark `#353a3c` | 10.30:1 | ✅ | ✅ |
| Dark `#353a3c` | White `#ffffff` | 11.53:1 | ✅ | ✅ |

## Appendix E — Per-page metadata

| Page | Title | Description | Verdict |
|---|---|---|---|
| `/` | "The Matlock Raft Event" | (missing — falls back to "Raft Event") | ❌ Finding 3 |
| `/about` | "About The Event - Matlock Raft Event" | Good, 134 chars | ✅ |
| `/contact` | "Contact Us - Matlock Raft Event" | Good, 123 chars | ✅ |
| `/info` | "Event Information - Matlock Raft Event" | Good, 85 chars | ✅ |
| `/take-part` | "Take Part - Matlock Raft Event" | Good, 130 chars | ✅ |
| `/sponsors` | "Our Event Sponsors - Matlock Raft Event" | Good, 127 chars | ✅ |
| `/sponsors/[slug]` | Dynamic name | "A single sponsor of the event." | ❌ Finding 22 |
| `/updates` | "Event Updates - Matlock Raft Event" | Good, 120 chars | ✅ |
| `/updates/[slug]` | Dynamic title | "A single update about the event." | ❌ Finding 23 |
| `/donate` | "Donate - Matlock Raft Event" | Good, 80 chars | ✅ |
| `/gallery` | "Gallery - Matlock Raft Event" | Good, 118 chars | ✅ |
| `/volunteer` | "Volunteer - Matlock Raft Event" | Good, 99 chars | ✅ |
| `/cookies` | "Cookies Policy - Matlock Raft Event" | Good, 128 chars | ✅ |
| `/vote` | "Vote - Matlock Raft Event" | Good, 126 chars | ✅ |

## Appendix F — Navigation inventory

| Link | Where | Status |
|---|---|---|
| About | Header + Footer | ✅ Keep |
| Info | Header + Footer | ✅ Keep — consider renaming to "Spectator Info" |
| Sponsors | Header + Footer | ✅ Keep |
| Gallery | Header + Footer | ✅ Demote to footer-only if header gets crowded (see finding 6) |
| Contact | Header + Footer | ✅ Keep |
| Donate | Header (CTA button) | ✅ Keep — most prominent CTA. Consider duplicating in footer. |
| Take Part | Homepage card only | ❌ Finding 6 |
| Volunteer | Homepage card only | ❌ Finding 6 |
| Updates / News | Homepage section + direct URL | ⚠️ Consider adding to footer |
| Spectate | Nowhere | ❌ Finding 12 |
| Privacy | Nowhere | ❌ Finding 14 |
| Results | Nowhere | ⚠️ Finding 13 |

## Appendix G — Persona journey check

| Persona | Best path from home | Verdict |
|---|---|---|
| Wants to enter the race | Scroll past hero → Get Involved → Take Part card | ⚠️ Finding 6 |
| Wants to donate | Header → Donate button | ✅ Optimal |
| Wants to volunteer | Scroll → Get Involved → Help Out card → broken email | ❌ Findings 1, 6 |
| Wants to sponsor | Scroll → Get Involved → Sponsor Us → /sponsors → become-sponsor → "Contact Us" CTA | ⚠️ Finding 18 |
| Wants to spectate | Footer → Info → digs through page | ⚠️ Finding 12 |
| Returning visitor | Homepage shows latest updates | ✅ |
| Press / media | Footer → Contact → press section | ✅ |
| Lost their tickets | Footer → Contact | ✅ |

---

## Suggested order of attack

1. **One afternoon**: ship findings 1–5 (placeholder email, duplicate paragraph, homepage meta, hero alt, h1 hierarchy). Find-and-replace work; removes the worst things shipping in production.
2. **A focused day**: finding 6 (Take Part / Volunteer surfacing). Biggest single impact on actual conversion.
3. **A second day**: findings 7, 8, 11, 22, 23 (SEO scaffolding). Largest organic-search uplift.
4. **A half-day**: findings 9, 10, 26, 27, 28 (WCAG-blocker accessibility). Brings the site to WCAG AA.
5. **Polish window**: everything else when next available.
