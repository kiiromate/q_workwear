# Q Workwear | SVG garment interaction specification
Status: design/engineering proposal for the next implementation pass.
Related: CLIENT_FEEDBACK_2026-10-15_INTERACTIVE_SHOWROOM.md

## Why SVG
Garment-shaped interaction meets the client request for memorable movement without requiring videos, 3D rendering, stock art libraries or constant content management. Artwork must feel bespoke and contemporary while remaining readable on phones and consistent with the official Q logo.

## Direction
- Flat, vector outlines with a limited 2–3-tone visual grammar drawn specifically for Q Workwear. Soft off-white fill; ink/navy construction line; official brand red (#E0483A approximate from the source mark) as a controlled active highlight.
- Use coherent seams, collar and pocket geometry. No floating badges, illustrated factory mascots or generic corporate clip art.
- SVG is a stylized *category signifier*, never a technical garment specification, PPE assurance or certified pattern.
- Reference Q brand Q-shaped flow or restrained curved seam logic only as a design principle. Do not modify or imitate the official logo geometry.

## MVP object set
| Key | Visual | Links to | Editorial counterpart |
| --- | --- | --- | --- |
| corporate | blazer over shirt | /products?category=corporate | cat-corporate-suiting.webp |
| hospitality | chef jacket / apron | /products?category=hospitality | cat-hospitality-culinary.webp |
| industrial | work jacket / coverall | /products?category=industrial | cat-industrial-safety.webp |
| branded | polo shirt / cap | /products?category=branded | cat-branded-apparel.webp |

Future objects *only after owner product confirmation*: dust coat, medical tunic, scrub top, cleaning uniform, sports jersey, hi-vis vest, gumboots and PVC apron. Keep the existing 16 text enquiries visible regardless of SVG availability.

## React architecture
Suggested paths (adapt to local conventions, do not create dependency cycles):
- src/components/garments/GarmentArtwork.tsx: one SVG renderer, accepts id and selected state, no fetch or CMS.
- src/components/garments/GarmentExplorer.tsx: small client component that owns selected garment/category state and keyboard navigation.
- src/components/garments/garments.ts: IDs, accessible names, category URL, source image, approved captions and any individual illustration components.
- src/components/garments/artwork/*.tsx: 4 custom lightweight <g>/<path> structures, with a consistent viewBox like 0 0 320 400.
- src/components/garments/garments.css or existing globals.css: transform/opacity only; reduced-motion rules.
- Tests in scripts/verify-ui.mjs and scripts/verify-flows.mjs.

API sketch (not necessarily copy verbatim):
```ts
type GarmentId = "corporate" | "hospitality" | "industrial" | "branded";
type GarmentArtworkProps = {
  id: GarmentId;
  selected?: boolean;
  decorative?: boolean;
  className?: string;
};
```
Prefer state in the explorer and inert SVG children inside **native <button>** or <a> controls. Do not attach separate click handlers to every path; this is a single object click target with a label.

## Event and motion contract
- Pointer hover: garment lifts 3–5px; seam/highlight gains slight opacity; associated image/caption preview can crossfade 150–220ms. No sound, autoplay rotation or continual movement.
- Keyboard focus: equivalent visible highlight and caption; Enter/Space selects; associated link is reachable. Native buttons make this simple.
- Tap: first tap selects with informative text, direct CTA opens /products?category=...; no hover-only critical action. A one-tap direct link variant is acceptable if product selection adds no new information.
- Selection: one active object at a time; announce the caption/update in a restrained aria-live region, not every hover.
- Page enter: optional opacity/translate transition <=350ms; never hide content if JS is delayed.
- Reduced motion: no transforms, animation, parallax or delayed reveal; state/text and focus still update instantly.
- IntersectionObserver only if useful for one-shot reveals, with visible content by default.
- The SVG itself gets aria-hidden when decorative; otherwise provide one correctly associated accessible name and do not duplicate text descriptions in nested shapes.

## Interaction skeleton
Desktop: row/rail of four garment symbols; active symbol has adjacent real photo, title, concise use case and “Explore [category]” link. Preserve the ordinary category grid beneath.
Mobile: four thumb-sized tabs or a compact vertical list of SVG + label; active picture and CTA below. Do not force swipe gestures, horizontal overflow or hover behaviours.
A visitor can bypass the animation and access every category using text links.

## Proposed data contract
```ts
type GarmentVisual = {
  id: GarmentId;
  title: string;
  categorySlug: CategorySlug;
  image: string;  // references existing photo, not a second image inventory
  description: string; // approved editorial copy
  href: string;   // stable /products?category=...
};
```
Reuse src/content/catalog.ts rather than duplicating categories in a second hand-updated array. Treat it as the canonical category record; map SVG IDs to this known data.

## Build acceptance
1. Four valid SVG category objects render without asset network errors or hydration mismatches.
2. Desktop hover/focus and mobile tap provide intelligible states; pointer interaction never becomes the only navigation path.
3. Every object leads to the correct filtered route and the existing quotation flow preserves the chosen garment where applicable.
4. One active selection at a time, state and accessible name reflected reliably.
5. No direct reproduction of Exotiká brand/artwork or other manufacturers' catalog images.
6. Keyboard, focus visibility, reduced motion and high-contrast viewing pass manual review as well as automated smoke tests.
7. No new runtime animation dependency unless demonstrated as necessary after a working CSS/React prototype.
8. SVG illustration is not represented as a guaranteed made-to-order configuration or a safety standard.
