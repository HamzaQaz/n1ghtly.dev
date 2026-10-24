# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

TanStack Start, fully prerendered to static HTML (no SSR at request time, no database). Served as Workers static assets on the existing Cloudflare Worker `n1ghtly-dev` (custom domain n1ghtly.dev). Blog posts are markdown files in the repo; publishing is a git push and deploy. Replaces the previous React + D1 + Access build, whose source was lost.

## Users

Primary: recruiters, internship screeners, and college admissions readers sizing up Hamza in a minute or two, usually from a link on a résumé, application, or GitHub profile. Secondary: prospective clients who might pay him to build a site or bot, and fellow developers / his Discord and Minecraft community. When these conflict, the first screen serves recruiters and admissions.

## Product Purpose

Personal site of Hamza Qazi (handle nightlydevz), a full-stack developer. A place for what he builds (projects), what he writes (blog), and the people who shaped how he works (people). Success: a visitor knows who he is and has opened at least one real project within the first screen or two.

## Positioning

Not a template portfolio: it shows shipped, live, unusual work (an in-browser NEXRAD radar decoder, a near-native Minecraft↔Discord bridge) and keeps a page for people he admires, "for no strategic reason, which is the point."

## Operating Context

Read on laptops and phones, often in a quick tab opened from an application or profile. Links out to live projects and GitHub. RSS feed at /rss.xml and sitemap at /sitemap.xml are existing public URLs.

## Capabilities and Constraints

- Routes to keep: `/`, `/projects`, `/blog` (+ post pages), `/people`, `/bio`, `/rss.xml`, `/sitemap.xml`.
- Per-project status labels: shipped / building / paused (successors of the old shipped / growing / fallow).
- Light/dark mode following the system setting, with a toggle.
- Dropped on purpose: boot sequence, windowed "rooms" chrome, alt-key shortcuts, in-browser admin, D1 storage, Cloudflare Access.
- Deploy: upload a preview version first; promote to production only after the user approves it.

## Brand Commitments

- Name: **Hamza Qazi** leads on the home screen; `n1ghtly.dev` is the wordmark; handle `nightlydevz`; GitHub `HamzaQaz`; email `night@n1ghtly.dev`.
- The user explicitly keeps the **dark, planty aesthetic** (deep greens) from the old site while replacing the retro OS style.
- Standing preference (2026-10-23): a smooth, modern 2026 SaaS-style UI with fluid motion and UX, in the conventional register. Craft bar: Linear, Stripe, Vercel.
- Modern, clean, somewhat minimal, with smooth animation. Must not read as a generic dev template, must not be motion-heavy (no scroll-jacking or everything-flies-in), no neon / cyberpunk glow.
- No portrait or photo. People get drawn marks rather than invented likenesses.
- Copy may be tightened, but every fact stays and no claims are added.

## Evidence on Hand

- Projects (real, user-confirmed list):
  - **Couplet** — free US NEXRAD radar viewer for storm enthusiasts, https://couplet.n1ghtly.dev. Decodes Level II and Level III radar in the browser; mosaic, single-site view, models view (HRRR, NAM, GFS, ECMWF), overlays, tools, saved places and push alerts. Shipped, 2026.
  - **dmcl** — server-side Fabric 1.21.1 mod bridging Minecraft chat with Discord: each player posts as themselves via webhook, two-way pings, replies, edits, attachments, account linking, server events as embeds. Hexagonal architecture, ~85 tests. https://github.com/HamzaQaz/dmcl. Shipped, 2026.
  - **Temperature Alarms** — web interface and SQL database for ESP8266 temperature probes, reworked in React. NodeMCU + DS18B20 sensors report every 30 minutes; manages devices and locations, keeps history, emails an alarm past a threshold. React 18, TypeScript, Vite, Tailwind, Express, MariaDB. https://github.com/HamzaQaz/Temperature-Alarms-React. Shipped, 2026.
  - **MorphicVersions** — extension for Pterodactyl Blueprint, written in PHP. Private. Building, 2026.
- People: **Jeremiah Kroesche**, mentor — "He got me into real-world development."
- Bio line (live): "I build across the stack: the part people click, and the part that answers it."
- Blog: no posts yet. Never fabricate posts; the empty state must be honest.
- No testimonials, clients list, employers, metrics, or photos exist. Do not invent them.

## Product Principles

1. Work first: real, live projects are the proof; show them early and link them.
2. Honest content: empty is shown as empty, nothing invented to fill space.
3. Quiet confidence: minimal and calm, so the projects carry the personality.
4. Fast and light: static pages, little JS, motion that never blocks reading.

## Accessibility & Inclusion

WCAG 2.2 AA contrast in both themes, full keyboard navigation with visible focus, and all motion respects `prefers-reduced-motion`.
