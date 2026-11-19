# portfilo

Hamza Qazi's personal site n1ghtly.dev: TanStack Start, fully prerendered to static HTML, served by the Cloudflare Worker `n1ghtly-dev`.

- Stack: React 19, TanStack Router/Start, Tailwind 4, Vite, vitest, wrangler; markdown posts.
- Run: `npm install`, `npm run dev` (http://localhost:3000), `npm test`, `npm run build`.
- Deploy: `npm run deploy:preview` uploads a version with its own preview URL; `npm run deploy` goes live on n1ghtly.dev. Never run `deploy` without the user's approval; preview first. Rollback: `npx wrangler rollback`.
- Content is data: `src/content/{site,projects,people,skills}.ts`; posts are `src/content/posts/<slug>.md` (copy `post-template.md`, `draft: true` hides). Screenshots in `public/work/`.
- `src/routeTree.gen.ts` is generated; do not hand-edit.
- Design rules in `DESIGN.md`: dark green-black SaaS look, no glow (except the deliberate People title tags); screenshots never get view-transition names; motion must degrade under reduced motion.
- Cookie consent is Google Consent Mode v2, denied by default; do not add trackers that bypass it.
- `public/.well-known/security.txt` Expires 2027-11-01: renew before then.
- Working tree usually has uncommitted work; do not commit unless asked.

Notes: vault project note at C:\Users\night\vault\projects\portfilo.md (if it exists)
