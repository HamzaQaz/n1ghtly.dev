# n1ghtly.dev

Hamza Qazi's personal site. TanStack Start, fully prerendered to static HTML, served as static assets by the Cloudflare Worker `n1ghtly-dev`.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
npm test
```

## Write a post

Copy `src/content/post-template.md` (it shows every supported format) to `src/content/posts/<slug>.md`. The short version:

```md
---
title: My post
date: 2026-10-24
summary: One line for the list and the RSS feed.
---

Markdown body.
```

Add `draft: true` to keep it out of the build. The post appears at `/blog/<slug>`, in `/rss.xml`, and in `/sitemap.xml`.

## Edit content

- Name, links: `src/content/site.ts`
- Projects: `src/content/projects.ts` (screenshots live in `public/work/`)
- People: `src/content/people.ts`. Optional `title` adds a badge; `tag` picks its style: `aura`, `gold`, `glitch`, `radiant`, `chill` or `tuff` (default `aura`)
- Skills page: `src/content/skills.ts` (skills, experience, education, certifications, and the What's next timeline, where each step has a `stage`: `now`, `next` or `later`)

## Deploy

```sh
npm run deploy:preview   # uploads a version with its own preview URL
npm run deploy           # deploys to n1ghtly.dev
```
