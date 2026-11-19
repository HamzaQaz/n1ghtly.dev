---
name: n1ghtly.dev
description: Hamza Qazi's portfolio. A green-black bento where every tile holds the real, working artifact.
colors:
  ground: "#060f0a"
  ground-light: "#f2f6f3"
  tile: "#0c1a12"
  tile-light: "#ffffff"
  tile-2: "#11241a"
  tile-2-light: "#e8f0ea"
  line: "rgb(200 235 214 / 0.08)"
  line-light: "rgb(12 40 26 / 0.1)"
  line-strong: "rgb(200 235 214 / 0.18)"
  line-strong-light: "rgb(12 40 26 / 0.2)"
  ink: "#e9f1eb"
  ink-light: "#0b1a12"
  muted: "#93ad9e"
  muted-light: "#4b6356"
  leaf: "#5ccf8f"
  leaf-light: "#17804a"
  bud: "#d9b85c"
  bud-light: "#86640c"
  selection: "#1f5236"
  selection-light: "#bfe6cf"
  shot-ground: "#0c0d0c"
typography:
  display:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(48px, 8vw, 96px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontVariation: "font-stretch 115%"
  headline:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 6vw, 64px)"
    fontWeight: 680
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch 112%"
  title-lg:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.025em"
    fontVariation: "font-stretch 110%"
  title:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 108%"
  body:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-lead:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Mona Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 560
    lineHeight: 1.4
    fontFeature: "tnum"
  mono:
    fontFamily: "ui-monospace, SF Mono, Cascadia Mono, Menlo, monospace"
    fontSize: "0.9em"
    fontWeight: 400
rounded:
  code: "6px"
  shot: "12px"
  tile: "20px"
  full: "9999px"
spacing:
  gutter: "12px"
  tile-pad: "24px"
  tile-pad-sm: "28px"
  page-x: "16px"
  page-x-sm: "24px"
  container: "1200px"
components:
  tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "28px"
  shot-frame:
    backgroundColor: "{colors.shot-ground}"
    rounded: "{rounded.shot}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.full}"
    height: "40px"
    padding: "0 16px"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "40px"
    padding: "0 16px"
  link-pill:
    backgroundColor: "{colors.tile-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "36px"
    padding: "0 14px"
  link-pill-hover:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ground}"
  nav-item-active:
    backgroundColor: "{colors.tile-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  note-badge:
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: n1ghtly.dev

## Overview

**Creative North Star: "The Working Canopy"**

A green-black ground with tiles set one step up, each tile holding a real thing that works: the Couplet radar, the Temperature Alarms dashboard, a labelled illustration of the dmcl chat bridge. Tile size follows importance, never equality. The page shows; it does not describe. Copy is short, set in Mona Sans at a slightly widened stretch for headings, and the only chromatic voice is one leaf green that means "live, shipped, focused".

Density is calm and confident: a 1200px container, 12px gutters between tiles, generous 24 to 28px inner padding, hairline borders instead of heavy shadows. Motion is fluid but never in the way: a once-per-session intro (the name, then the radar sweep and the bridge exchange), scroll-linked fades, springy hover and press, and blurred page transitions, with everything visible by default. The world follows the system theme; light mode is a green-tinted paper version of the same structure, not a different design.

Confirmed rejections: the "Hi, I'm X" hero over a row of equal cards, neon glow, stack pills, invented claims, and stock or mocked-up imagery standing in for real work.

**Key Characteristics:**
- Bento grid at 12 columns; the flagship spans 7 columns by 2 rows.
- Real screenshots set flush into the tile's bottom-right corner.
- One accent (leaf) plus one status companion (bud); everything else is green-tinted neutral.
- Mona Sans Variable for everything; width (font-stretch) and weight carry the hierarchy.
- Hairline borders and tonal steps for depth; shadows barely exist.
- A once-per-session intro, fluid hover and page motion, all of it off under reduced motion.

## Colors

Every color is a single `light-dark()` pair in `src/styles.css`; the dark value is the world, the light value is its green-tinted daylight twin. Frontmatter lists both halves (`*-light` keys are the light half of the same token).

### Primary
- **Leaf Green** (leaf / leaf-light): live and shipped status dots, focus rings (2px, 3px offset), link underline hover, the sprout mark, the bridge packets, the active-state fill on link pills (hover turns the pill leaf with ground-colored text), and the Initials monogram text. It is also `accent-color` and `caret-color`.

### Secondary
- **Bud Ochre** (bud / bud-light): the "Building" status dot only. It never appears as a fill or text color elsewhere.

### Neutral
- **Canopy Black** (ground / ground-light): page background; also the `theme-color` meta values.
- **Tile Green** (tile / tile-light): every tile and code block surface, one tonal step above the ground.
- **Raised Moss** (tile-2 / tile-2-light): the second step, used for link pills, active nav item, icon-button hover, Initials discs, inline code.
- **Hairline** (line / line-light): tile borders, footer rule, note badge border.
- **Hairline Strong** (line-strong / line-strong-light): shot frame borders, outline buttons, hovered tile borders, link underlines at rest, scrollbar thumb, blockquote rule.
- **Pale Leaf Ink** (ink / ink-light): primary text; the primary button fill.
- **Lichen Muted** (muted / muted-light): secondary text, summaries, status lines, inactive nav.
- **Selection** (selection / selection-light): text selection background.
- **Shot Ground** (shot-ground): fixed near-black behind screenshots in both themes, because the screenshots themselves are dark UIs.

### Named Rules
**The One Leaf Rule.** Leaf green is the only accent. It means live, shipped, or focused; it is never used as decoration, a gradient fill, or a heading color.

**The Paired Token Rule.** Every color is defined once as a `light-dark()` pair on `:root`. Never add a theme-specific override block; `data-theme` only pins `color-scheme`.

**The Third-Party Palette Rule.** Hard-coded Minecraft and Discord colors live only inside the Bridge illustration, where they mimic those products. They are not part of this palette.

## Typography

**Display Font:** Mona Sans Variable (self-hosted via `@fontsource-variable/mona-sans`, standard width axis, latin woff2 preloaded), falling back to ui-sans-serif, system-ui
**Body Font:** Mona Sans Variable
**Label/Mono Font:** ui-monospace stack, used only for inline code, code blocks, and the Minecraft chat pane

**Character:** One family doing all the work. Headings widen (font-stretch 108 to 115%) and tighten their tracking as they grow, so scale reads as presence, not just size. Weights sit at precise variable stops (560, 600, 620, 650, 680, 700) rather than the 400/700 binary.

### Hierarchy
- **Display** (700, clamp(48px, 8vw, 96px), 0.95, -0.04em, stretch 115%): the name on the home hero only.
- **Headline** (680, clamp(40px, 6vw, 64px), 1.02, -0.035em, stretch 112%): page titles on inner routes; blog post titles use a smaller clamp(34px, 5vw, 52px) at stretch 110%.
- **Title Large** (650, 30px, -0.025em, stretch 110%): project names on /projects.
- **Title** (650, 22px, -0.02em, stretch 108%): tile headings and the footer line (footer at 600). List titles on /blog and /people step down to 620, 20px, -0.015em, no stretch.
- **Body** (400, 16px): tile summaries in muted, max 46ch. Lead paragraphs are 17px at 1.55 to 1.6. Long-form prose is 17px (1.0625rem), line-height 1.7, max 68ch.
- **Label** (13 to 14px; 560 for interactive pills and buttons, 400 for status and meta): status lines, dates, nav, RSS links. Dates and years use tabular numerals. Never uppercase, never letter-spaced wide.

### Named Rules
**The Stretch-Not-Shout Rule.** Hierarchy comes from width, weight, and negative tracking within Mona Sans. Do not introduce a second display face.

**The No-Eyebrow Rule.** No small uppercase kicker above headings. A heading stands on its own; context goes in the status line beneath it.

## Layout

A centered 1200px container with 16px side padding (24px from 640px). The home page uses a 12-column grid with 12px gaps: hero name in 7 columns and the role line plus actions in 5 beside it (stacked below 1024px). The bento below collapses to one column on mobile, a 6/6 and 12 pattern at md, and the full 7x2 / 5 / 5, then 5 / 4 / 3 at lg. Inner routes stack full-width tiles with 12px between them; /projects splits each tile 5/7 (text/visual) at lg, 8 columns of text when there is no visual.

Tile padding is 24px, 28px from 640px (32px on /projects). Inner rhythm uses small steps (4, 10, 12, 16, 20, 24px). Page titles sit in 40 to 64px of top padding and 40 to 56px of bottom. The header is not sticky; nav wraps to its own row under 640px. The footer sits 96px below content behind a hairline rule.

**The Importance-Sized Rule.** A tile's span follows the project's weight. Never lay out a row of equal cards for unequal work.

## Elevation & Depth

Depth is tonal and hairline, not shadowed. Tiles sit one tonal step above the ground with a 1px hairline border, a near-invisible contact shadow, and in dark mode a faint inner top highlight. Hover raises a tile by 3px and strengthens its border; the only light is the faint pointer spotlight inside the tile, and nothing gains a halo.

### Shadow Vocabulary
- **Tile contact** (`box-shadow: 0 1px 2px var(--shadow-c), inset 0 1px 0 var(--edge-hi)`): every tile. `--shadow-c` is rgb(12 40 26 / 0.06) light, rgb(0 0 0 / 0.4) dark; `--edge-hi` is transparent light, rgb(220 255 235 / 0.05) dark.

### Named Rules
**The No-Glow Rule.** No colored box-shadows, text glows, or neon halos. The only light effects are the static, low-alpha canopy wash behind the home hero (home only, masked out by 720px) and the transient radar beam during the one-time sweep. Two exceptions the user asked for by name: the ambient fireflies (a background layer, never on a UI element) and the earned titles on People.

## Shapes

Soft, nested rounding. Tiles are 20px; anything framed inside a tile (screenshots, code blocks, Bridge panes, prose images) is 12px, so inner corners read as concentric. Every interactive control that is not a text link is a full pill or circle: buttons, link pills, nav items, icon buttons, note badges, Initials discs, status dots. Inline code and the focus ring are 6px.

**The Flush Bleed Rule.** A screenshot that bleeds to a tile's edge cancels the tile's padding on those sides and drops its own radius on the bleeding corners, so the tile's 20px corner clips it. It keeps its 12px top-left corner and strong hairline where it sits inside the tile.

## Components

### Buttons
- **Shape:** full pill, 40px tall in the hero, 36px for link pills.
- **Primary:** ink fill, ground text, 560 weight, 16px horizontal padding; hover drops to 85% opacity.
- **Outline:** strong hairline border, transparent fill; hover fills Raised Moss.
- **Link pill (project links, "Open Couplet", RSS on empty blog):** Raised Moss fill, 560 weight, trailing up-right arrow; hover turns leaf with ground-colored text.
- **Icon button:** 32 to 36px circle, muted icon; hover fills Raised Moss and inks the icon.
- **Focus:** global 2px leaf outline, 3px offset.

### Chips
- **Note badge:** 11px muted text in a hairline pill, used only to label non-literal content (for example "Illustration"). It is a disclosure, not a tag.

### Cards / Containers
- **Bento tile:** 20px radius, Tile Green, hairline border, tile contact shadow, 24/28px padding, flex column. Hover (via its stretched link) lifts 3px on the spring easing, strengthens the border, scales an inner shot to 1.02 from its top-left corner, and nudges the tile arrow 4px. A soft leaf light (`--spot`, 420px radial) follows the pointer inside the tile on home.
- **Stretched-link tile:** the heading's link carries a full-tile `::after` so the whole tile is one target; real secondary links inside sit above it on a higher layer. Focus draws the leaf ring around the whole tile, not the heading.
- **Shot frame (`Shot` component):** 12px radius, strong hairline, Shot Ground behind the image, `object-cover`, responsive `srcset` (1200w and 2400w). The image stays hidden behind a slow shimmer until it has fully loaded (the boot script sets `data-loaded`), then fades in from 14px blur and 1.04 scale. Shots never carry view-transition names: images do not morph between routes.

### Navigation
- **Header:** sprout mark in leaf (tilts -6deg on hover) plus the domain wordmark at 15px/620; nav at 14px muted pills, active item inked on Raised Moss with `aria-current`; the theme toggle shows the theme you would switch to. Under 640px the nav takes its own row. The header sits in a full-width sticky bar (`.site-bar`) that frosts over (76% ground, 16px backdrop blur, hairline) across the first 80px of scroll, driven by `animation-timeline: scroll()`; without scroll timelines or under reduced motion it is simply always frosted. A hover pill glides between nav links on the spring, under the active pill. The bar has its own view-transition name so it holds still across routes.
- **Footer:** hairline rule, a 22px/600 widened invitation line, the email as an underlined link, muted icon buttons, and the copyright at 13px.

### Status Line
A 6px colored dot (leaf shipped, bud building, muted paused) followed by "Status · Year" in 13px muted tabular text. Sits directly under every project heading. This is the only status vocabulary.

### Page Title
Headline-scale h1 and an optional 17px muted lead (max 56ch), both entering with the `rise` animation (14px up, 800ms, 80ms stagger).

### Bridge Illustration (signature)
A labelled `figure` showing a Minecraft chat pane and a Discord channel pane joined by a 1px strong-hairline stem, with leaf packets crossing it. It uses the products' own colors inside its panes and carries an "Illustration" note badge in its tile. On the home page's first visit it plays one exchange (messages rise out of a 4px blur in 600ms each, packets travel 650ms), starting 1.1s after the Couplet screenshot has loaded. Elsewhere it is static.

### Motion grammar
- **Easing:** `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`) for reveals and fades; `--ease-spring` (a `linear()` spring with about 2% overshoot) for anything the hand touches: tile lift, button press (scale 0.96), arrow nudges, the nav pill.
- **First visit (once per session):** the name rises word by word out of a 12px blur, the role line and buttons follow, and tiles fade up in a 70ms stagger. When the Couplet screenshot has loaded, one conic-mask radar sweep reveals it (1.9s) with a fading leaf beam, then the Bridge exchange plays. Gated by `:root:not([data-swept])`; `data-swept` is set when the last Bridge line lands or on the first navigation, and remembered in sessionStorage.
- **Ambient:** fireflies (`Fireflies`, one fixed canvas behind everything): 10 to 34 depending on viewport, drifting slowly, mostly dim with a short bright pulse each cycle, scattering from the pointer and sliding with scroll by depth. Light mode draws pale leaf pollen instead, without glow. Under reduced motion it is one still frame.
- **Earned titles:** a People entry may carry a `title`, drawn as a pill in one of six `tag` styles, each with its own authored SVG icon: `aura` (spinning leaf, violet and bud ring, pulsing glow, text shine, twinkling sparkle), `gold` (metallic fill, a glint sweeping across), `glitch` (dashed pill; every 2.6s the words stutter and split red and cyan while the signal bars drop), `radiant` (dark pill with a gold rim, light rays turning behind it) `chill` (pastel gradient drifting, the pill lazily tilting) and `tuff` (wide uppercase on brushed steel; every 3.4s it lifts, slams down with a shake and sends out a ring). All static under reduced motion.
- **Skills page:** sections (Skills, Experience, Education, Certifications, What's next) separated by hairlines, the section name in a left column on wide screens. Skills are hairline chips on Moss; entries are rows with the title left and muted meta right. What's next is a vertical timeline. Each step has a 14px dot on a 2px line: Now is solid leaf with a slow ping, Next is half bud, Later is a hollow muted ring, and the closing "And more" step is dashed and faded. A leaf fill draws down each segment as its step scrolls in (`view-timeline`); without scroll timelines or under reduced motion the line is simply full.
- **Scroll:** project sections and people cards fade up as they enter, driven by `animation-timeline: view()` (no JS; browsers without it show them static).
- **Routes:** view transitions on `main` (`page`): the old page fades up and blurs out in 160ms, the new page rises 18px out of an 8px blur over 480ms. The header holds still; the active nav pill (`nav-pill`) slides between links on the spring.
- **Theme:** a circular clip-path reveal from the toggle (550ms ease-out-expo). During the switch, every other transition and view-transition name is suspended so only the circle moves; the toggle icon spins in on the spring.
- **Reduced motion:** nothing moves: animations, view-transition animations and transform transitions are off, the sweep and its beam are not drawn, hover lifts are dropped, and the theme switches instantly. Colour and opacity transitions stay, so hover, focus and image loading still read. Content is visible by default with or without motion.

## Do's and Don'ts

### Do:
- **Do** define every color once as a `light-dark()` pair and let the system theme decide; `data-theme` only pins it.
- **Do** put the real artifact in the tile: an actual screenshot of the shipped product, framed at 12px and bled flush to the tile edge.
- **Do** label anything that is not a literal screenshot with a note badge and an `aria-label` that says it is an illustration.
- **Do** size tiles by importance on the 12-column grid with 12px gaps.
- **Do** use the status line (dot plus "Status · Year") under every project name.
- **Do** keep the first-visit intro to once per session, gated by `data-swept`, and switch all motion off under `prefers-reduced-motion`.
- **Do** wait for an image to finish loading before revealing or animating it.

### Don't (motion):
- **Don't** give screenshots view-transition names; differently cropped images morphing between routes stretch and fly across the page.

### Don't:
- **Don't** add eyebrows or uppercase kickers above headings.
- **Don't** render tech stacks as pills or badges; the stack is one muted line of names joined by " · ".
- **Don't** use glow on UI: no colored shadows, neon halos, or text glow (the fireflies and earned titles are the named exceptions).
- **Don't** use stock imagery, mockups, or fabricated screenshots; if there is no real visual, the tile stays text-only.
- **Don't** introduce a second accent; bud is a status color only.
- **Don't** add a second display face or system display fallback as a design choice; Mona Sans carries every role.
- **Don't** lay out equal cards for unequal work.
