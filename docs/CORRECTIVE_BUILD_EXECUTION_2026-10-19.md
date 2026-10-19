# Q Workwear | IDE agent execution orders, 2026-10-19
**Read with:** `docs/CLIENT_REFERENCE_VISUAL_ACCEPTANCE_2026-10-19.md` and `docs/PHOTOREAL_Q_WORKWEAR_IMAGE_PRODUCTION_2026-10-19.md`. These supersede the older "five abstract image + overlay" execution approach.

## Mission

Rework the current `feat/interactive-showroom-p0-audit` implementation into a client-review candidate with **Afrikanda-like simple browsing**, materially superior Q workwear product discovery and **truly photorealistic, naturally branded garment images**, using the 42-slide source portfolio without false publication or performance claims. Preserve code that works. Deliver a **review pack**, not a silent merge or deployment. Use iterative design critique; reject mediocre output. Do not return to the user solely for detailed microdecisions a competent designer can resolve.

## Agent start state, branching and outputs

- The current corrections are in a plan PR based on `feat/interactive-showroom-p0-audit`. Read the merged plan (or check out plan branch) before implementation.
- Implement on a **separate follow-up feature branch forked from updated plan**, with reviewable commits grouped by visual asset work, structure/interaction, content, QA.
- Treat `main` as protected from unapproved changes. No force push; no public production deploy.
- First respond internally with a fast baseline audit: which branches, what already exists, tools actually capable of generating photoreal images, local media available, duplicate/conflicting source docs and which reference pages can be rendered.
- Where a capable local image generator is missing, do **not** substitute Pillow illustrations or claim images are photo realistic. Source real permissioned photos or identify precise tool/access needed. Continue with UI refinements against asset-accurate photo placeholders and leave honest blockers.

## Deliverable order and approval gates

### Wave A. Establish visual baseline and reference comparison
1. Run existing feature branch on local static `out/`, capture full-page screenshot and first fold at 390px and 1440px, including menu/explorer and Lookbook.
2. Visit `https://afrikandaholdings.com/` on desktop and mobile, capture same types of screenshots / menu states, observe actual behaviour, avoid unsupported claims of how it animates.
3. Complete `docs/REFERENCE_PARITY_AUDIT.md`, explicitly comparing screenshot targets and principles. Identify what to **match** and what will become measurably **better** for Q buyer goals.
4. Inspect `docs/BUSINESS PORTFOLIO.pptx` and `docs/LOOKBOOK_ASSET_MANIFEST.md`. Stage embedded pictures privately (never publish until permission). Check slide 40 third-party logos; stop unapproved use.
**Gate A:** visual delta and clear page plan exist, not speculative.

### Wave B. Photoreal product visual production (priority one)
1. Before bulk image generation, create an art-direction board consisting of **3 hero candidates + four distinctive collection photos** (C01/HOS01/IND01/BR01), using prompts exactly from photoreal guide with global direction. Reject anything abstract, wrong fabric, implausible, Q logo generated as fake lettering, no garment focus.
2. Produce and inspect photographic **clean masters** then compose original Q logos realistically on actual garment surfaces. Verify before/after for natural embroidery/patch/label. If high-quality photo-editing tooling is unavailable, **do not approximate with floating 2D logo cards**; create a transparent staged placeholder and report gap.
3. Expand in batches, selecting enough distinctive workwear looks, garment details, craftsmanship and appropriate extra sectors to create genuine breadth; recommended 22–30 curated images, more only if each offers value. Can use authorised actual photos in place of concepts.
4. Enter each asset in `docs/VISUAL_ASSET_REGISTRY.md`; retain originals and edited masters. Export named WebP in `public/images/showcase/` / `editorial/` / `lookbook/` and update references and alt text, avoiding repeated random images and false claim captions.
5. Make before/after contact sheets at desktop and mobile crop; personally inspect at true small sizes; compare to source PPT range and original brief.
**Gate B:** no first-screen abstract images; original Q mark preserved; at least hero + 4 collection assets visibly product-realistic; meaningful range available or explicitly blocked by generation rights/tool availability.

### Wave C. Refine navigation / home to reference-friendly simplicity
1. Keep original logo, top links and clear quote CTA. Make Collections disclosure understandable on click, touch, keyboard; keep mobile fast and navigable. Fix ARIA menu semantics if necessary, simplify instead of building large app-style menu.
2. Current sequence has four SVG tiles + very large detail spotlight + four full photo category cards: **reduce duplication**. Prefer one image-first gateway with graceful interactive SVG affordance. SVG still present if it adds genuine visual interest or category discovery; do not force it as a huge separate onboarding step.
3. Hero: product photo and immediately understandable copy, not "interactive showroom" or "vector silhouettes" explainer. One clear CTA to browse, one to quote, restrained animation. No dense paragraphs in first viewport.
4. Fewer visible borders, kicker badges, overlaid provenance labels, redundant cards; increase image scale and whitespace.
5. Use high-quality photos in deliberate editorial sequence and variant aspect ratios. No wall of same-sized cards.
**Gate C:** comparable clarity to Afrikanda's observed navigation + every difference in `REFERENCE_PARITY_AUDIT` adds buyer value. 320/390 mobile and desktop flow simple.

### Wave D. Content truth and image-rich Lookbook
1. Rewrite marketing text with evidence-first language. Remove inflated adjectives / false material specifics not guaranteed per quotation. Source verified range from PPT, but product sectors remain flexible/forward-looking.
2. Curate `/work` as genuine visual product and sector showroom with multiple distinct photos. Show corporate suiting and embroidered finishing in detail; hospitality kitchen and front-of-house; industrial range; branded garment methods; authorized healthcare/cleaning/schools/sports security concept examples if offering is approved.
3. One honest gallery-level illustration disclosure, no repeated technical "provenance badges" on every photo. Real named customer case studies are a separate section only after documented rights.
4. Fix contact conversion from product/sector cards and preserve query context.
**Gate D:** image breadth, clear business category story, no unsupported protection or real-work proof, quote experience intact.

### Wave E. Verify, review, iterate
1. Run `pnpm typecheck`, `pnpm build`; start `python3 -m http.server 3016 --bind 127.0.0.1 --directory out` as required; then `pnpm test:ui` / `pnpm test:flows`. Document outputs accurately. Add browser tests for gallery contents, image loading, 404s, category links and reduced motion.
2. Manual checks: 320 / 360 / 375 / 390 / 768 / 1024 / 1050 / 1051 / 1440px, tall and short mobile, low bandwidth preview; keyboard focus, Escape return, mobile menu, product selection, image crops, alt text, mail app handoff, no fake email submission.
3. Design critique at 390 and 1440: if image feels generic, poorly embroidered, distorts fabric, or page remains significantly more cluttered than reference, **reject and revise**, even if automated tests pass.
4. Deliver `docs/CLIENT_REVIEW_PACK_2026-10-19.md` and a contact sheet with links to evidence and selections. Request Kaze review before sharing with Q/Tinah. Q/Tinah approve selected direction, business info and publication.
**Gate E:** preview quality + QA results + reference parity + actual client signoff. No pre-approval public deployment.

## Required handoff files from each agent/wave

- `docs/REFERENCE_PARITY_AUDIT.md` (completed matrix + evidence references)
- `docs/VISUAL_ASSET_REGISTRY.md` (each photo source, status, logo treatment, truth and rights)
- `docs/CLIENT_REVIEW_PACK_2026-10-19.md` (drafted as real preview pack with contact sheets and client questions)
- `docs/ASSET_PROVENANCE.md` (revised to clearly separate geometric prototype art vs selected photo series)
- Product/category/editorial asset data file(s) in `src/content/` (single source of truth, no new CMS)
- Changelog with commits, tests, screenshots, blockers.

## Examples of bad vs good design decisions

- **Bad:** re-run a PIL geometric visual with an 80px Q mark. **Good:** real photographic chef jacket with plausible 35mm woven Q patch composited along correct cloth curvature.
- **Bad:** boast "micro-prismatic reflective trim" without evidence. **Good:** "Workwear and visibility-focused options. Tell us your site requirements" when certification unverified.
- **Bad:** eight bordered navigation/selector cards before reaching photographs. **Good:** four large garment pictures that immediately show the range and have direct category links; optional small SVG reveal.
- **Bad:** exact Afrikanda layout/code copied or claim "matches" without mobile screenshots. **Good:** documented simple IA parity plus explicit buyer-value improvements.
- **Bad:** 29 nearly identical clothes-on-hanger shots just to reach count. **Good:** editorial diversity: complete product, fitting, visible technique, fabric macro, industry context, sector comparisons.

## Completion response from IDE agent

Write a concise report with:
- implementation branch/PR, files changed;
- actual 390/1440 comparison screenshots/reference notes;
- count of selected / rejected / pending-rights distinct photographic assets and actual used paths;
- 3 most meaningful client outcomes improved;
- tests run and exact results;
- issues requiring owner/client action;
- whether it is ready **for Kaze design review**, not automatically **approved for client release**.
