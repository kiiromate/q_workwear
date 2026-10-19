# Q Workwear | Owner approval batch A — source corrections and design options
Date: 2026-10-19 | Status: **DIRECTION PROTOTYPES ONLY; AWAITING OWNER APPROVAL**
Branch: `feat/qww-finalization-approval-batch-20261019`, based exactly on handoff `4b6a128`.
Do not merge to `main`, deploy or replace final public/ images until the owner approves the methods and first-screen approach.

## Verification of the handoff (not blanket endorsement)

- PR #4 targets `feat/photoreal-showroom-issue-3` and adds documentation/evidence, not UI implementation.
- The older reference audit mischaracterized Afrikanda; the owner-review evidence establishes an image-led slideshow, shallow nav/disclosure and mobile drawer as the comparison standard. A fresh external browser capture is needed for final signed reference-parity claims.
- Current page has `CategoryShowcase` immediately followed by `GarmentExplorer`, duplicate category browsing. Garment descriptions promise construction-detail inspection while interaction changes a family/description/photo, not actual garment-detail anatomy.
- `GarmentExplorer.tsx` only renders one panel `id=garment-panel-{selected}`, but all four tabs reference unique panel IDs simultaneously. Needs one stable panel or four actual panels.
- `Header.tsx` closes on outside mouse down and Escape, not when keyboard focus leaves disclosure.
- `Contact` handoff reports cached email payload after in-form edits. Must inspect handler code, fix at source, add test for all fields and copied draft.
- EN/FR is absent; root document hard-codes English. Do not add a superficial switch or duplicate catalogues.
- The production images are still the previously owner-rejected composites. Candidate clean files staged here are **not** automatically substituted into every active route.

## Proof candidates staged in this batch

### B1 — Corporate C01: clean full garment
**Candidate:** [C01 clean](C01-clean-corporate.jpg), unchanged byte-for-byte from `docs/review-evidence-2026-10-19/masters/C01_master.jpg` (original Git blob reference). **No exterior logo**. This is intentional: a formal blazer should not have a random Q embroidered over its lapel or pocket; maker identity is legible on the website. Optional maker-label version requires a genuine physical internal label, not a tiny symbol placed on the blazer exterior. **Recommendation: accept clean C01 as corporate collection cover.** It remains an illustrative concept, not an actual Q customer order.

### B2 — IND03: clean fabric detail
**Candidate:** [IND03 clean](IND03-clean-seam.jpg), unchanged byte-for-byte from `docs/review-evidence-2026-10-19/masters/IND03_master.jpg`. Pocket bar-tack/zipper construction is its visual subject. **Recommendation: accept no-logo version as industrial macro**, then independently check whether photographed hardware construction is physically coherent. Do not enlarge/reposition original tiny Q.

### B3 — Embroidery method study (not final Q logo application)
A compact embroidered mark on piqué or shirt textile, respecting thread/material relief, with contrast and stitch scale visible at macro distance. Proposed Q maker symbol may be used on a branded polo after reviewer checks that the **actual q-mark asset** survives at plausible thread scale; do not convert a generic embroidered shape into false "official" Q artwork. The accompanying generated **material-method triptych** is a texture reference only and contains no official Q branding or authorized customer identity. It is *not ready for use on the public site*.

### B4 — Print/transfer method study
Soft, thin print on a white cotton T-shirt following the drape and knit, not a raised-thread embroidery shader. For Q-specific demonstration, composite one exact official Q symbol at a viable panel size and verify soft-fabric conformance in a separate candidate. Distinguish **manufacturer showcase branding** from a customer's final corporate logo.

### B5 — Woven label / patch method study
A small cream woven collar maker label with genuinely attached edges, readable at close-up. Suitable for maker identity on formal attire or inner uniform neck. A sewn patch on a work jacket requires its own seam/attachment geometry; don't use the same treatment for every garment. Clean and print/embroidery alternatives should be compared at 390px and 1440px.

### B6 — First-screen prototype
[Interactive slideshow concept](first-screen-concept.html), self-contained HTML/CSS/JS review prototype referencing local **clean masters**. **Not integrated into Next.js / not production.** Implementers can serve repository root (e.g. `python3 -m http.server 8000`), then open `/docs/approval-batch-2026-10-19/first-screen-concept.html` to see the clickable visual study. The prototype uses *illustrative clean garments* and the official Q symbol in the header only.

**Design hypothesis:** keep an uncomplicated header and large photographic first screen; a clear primary category action; a user-controllable four-sector slideshow with visible previous/next, directly selectable numbered slides and pause/play. Every category also has an **independent stable link**, not only an autoplay panel. Default auto-advance is ~6.5 s in the prototype, disabled for reduced motion and stopped while focusing the hero. Target actual React implementation would further improve pause behavior on touch, screenreader announcements, offscreen photo loading and visibility.

**Reference departure matrix**
| Afrikanda observed pattern (handoff) | Proposed Q option | Buyer benefit | Trade-off/approval |
| --- | --- | --- | --- |
| Image-led opening slideshow | Realistic Q-sector uniform slides | Instantly visualise 4 Q lines from one entry point | May feel overanimated; pause, manual controls, reduced motion; ask owner |
| Straightforward main destinations | Collections / Lookbook / About / Contact / Quote | Shallow menu and category-specific action | Details of desktop dropdown need real review |
| Mobile drawer | Plain large touch menu | Sector access without hover | Needs actual browser focus and screen-width tests |
| Slides change over time | Stop when reduced-motion and during interaction | Accessibility and stable click targets | Slideshow still requires review of timing and navigation |
| Sector entry via obvious links | Independent static sector link row alongside slideshow | Buyer can go directly without watching a slide | Slight extra control row; test against reference density |

### B7 — Four redrawn technical-flat studies
[Garment illustration study](garment-flat-studies.svg). Replaces overly abstract original paths with distinct jacket/shirt, chef jacket/apron, coverall and polo/cap proportions, coherent stroke widths and fewer cosmetic Q shapes. **These are visual proposals**, not sewing/pattern templates or claims of actual exact product cuts. Viewer should specifically judge layering, pocket placement, collar/cap anatomy and leg/sleeve proportions before porting into React.

## Approval gate (stop here)

Request owner to select:
1. **Accept the clean corporate cover** (recommended), or require a well-made actual interior-maker-label crop.
2. **Accept IND03 clean macro** (recommended).
3. **Accept the physical method direction** of restrained polo embroidery, suitable T-shirt print and inner maker label, conditional on true Q mark fidelity and real textile scale; do *not* approve the generic material study as final logo asset.
4. **Approve / revise** the image-first interactive slideshow layout: direct category access, one unambiguous CTA, photo dominance, Play/Pause, mobile drawer and reduced motion.
5. **Approve / revise** garment anatomy direction before integrating into `GarmentArtwork.tsx`.

### After gate approval (not part of this batch)
- Replace all copies/derivatives of accepted C01 and IND03 (never one path only).
- Produce one genuinely Q-branded embroidery, print and label/patch photo variant each with method-specific QA using official artwork. Do not bulk brand.
- Implement reference-led homepage/Nav/garment interaction and three functional regressions as individually reversible commits.
- Implement complete EN/FR using a typed shared data catalogue, URL/state compatibility and translated metadata/email drafts.
- Run `pnpm typecheck`, `pnpm build` and browser suites for all specified widths and both languages; capture real comparisons/screenshots and a browser-accessible Vercel review preview before asking for client publication approval.

**Current outcomes:** two clean master candidates and one HTML/SVG approach prototype are committed. No Q-branded photo revisions or app code changes have been made. Prior reported suite passes do not validate these unimplemented changes.
