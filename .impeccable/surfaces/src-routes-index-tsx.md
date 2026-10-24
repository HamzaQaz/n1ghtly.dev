---
version: 1
slug: "src-routes-index-tsx"
primary_target: "src/routes/index.tsx"
related_targets: ["src/routes/projects.tsx","src/routes/bio.tsx","src/routes/people.tsx"]
---

Scope: home page `/` of n1ghtly.dev; visitor mode Experience (the work leads). Sibling routes /projects, /blog, /people, /bio inherit the same world.

Audience and job: recruiters and admissions readers, opened from a résumé or profile link, deciding in under a minute whether Hamza builds real things. Secondary: clients, devs.

Constraints: dark green pinned (system-follow, light theme green-tinted); craft bar Linear / Stripe / Vercel; somewhat minimal; smooth motion, never motion-heavy; no neon glow, no generic dev template; no invented claims; blog empty and shown honestly.

## Direction contract

THESIS: One screen shows every project working, not described: a bento where tile size follows importance and each tile holds the real artifact. Refuses the "Hi, I'm X" hero over a row of equal cards.

OWN-WORLD: Green-black ground (#060f0a), tiles one step up (#0c1a12) with hairline borders, near-white green-tinted text, one leaf green (#5ccf8f) for live/shipped and focus. Mona Sans (GitHub's face) at variable width; real screenshots set flush in tiles with soft inner radius; authored 1.5px line icons.

STORY: The visitor learns who Hamza is in one line, sees Couplet's live radar at once, watches a Minecraft chat line cross into Discord in the dmcl tile, and opens a project or emails him.

FIRST VIEWPORT: Top bar: n1ghtly.dev wordmark left, Projects/Blog/People/Bio + theme toggle right (nav on its own row under 640px). Hero band: "Hamza Qazi" at display scale (max 96px) in 7 cols, role line + GitHub/Email in 5 cols beside it. Below at 12 columns: Couplet 7 cols x 2 rows with its radar screenshot; dmcl 5 cols (chat bridge); Temperature Alarms 5 cols (real dashboard screenshot). Amended after review (2026-10-23): at 1440x900 the bento starts near y=275, the Couplet radar and the whole dmcl exchange are above the fold, Temperature Alarms enters at about y=706, and the third row (MorphicVersions 5 / People 4 / Writing 3) starts just below the fold, about y=1046.

FORM: Bento Showcase, grounded candidate 1 of 3 in the user-steered safer round (steer: smooth modern 2026 SaaS UI); seed key a54c4375. Signature interaction: the Couplet screenshot is revealed by one radar-sweep conic mask on load; motion grammar: exponential ease-out, view-transition route changes with a shared Couplet image, circular theme reveal, everything visible by default.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
