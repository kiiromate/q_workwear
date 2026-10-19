# Q Workwear | Client review presentation pack

> **OWNER REVIEW RESULT: REVISIONS REQUIRED.** The owner rejected aspects of corporate logo placement, garment illustrations, reference fidelity and About copy. Earlier visual/realism PASS statements below are historical agent assessments, not current acceptance. Follow [the owner finalization directive](OWNER_REVIEW_AND_FINALIZATION_DIRECTIVE_2026-10-19.md) and new evidence before preparing another candidate. No production approval has been granted.

**STATUS: READY FOR KAZE DESIGN REVIEW (`2026-10-19`, branch `feat/photoreal-showroom-issue-3`) — NOT YET APPROVED FOR PUBLIC RELEASE.**  
Do not deploy to production or mark `APPROVED_PUBLIC` until Kaze approves the visual direction and Quddus & Tinah sign off on the client review items in Section 6.

---

## 1. What changed (Before vs. After)

1. **Photorealistic Garments & Authentic Q Workwear Branding:**
   - Replaced all flat 2D geometric posters and floating rectangular brand cards with **14 photorealistic garment and detail photographs** (`public/images/showcase/` and `public/images/editorial/`).
   - Every garment displays realistic fabric texture (suiting wool, cotton twill, washed duck canvas, and honeycomb piqué) with the **official Q Workwear logo assets (`public/images/logo/`)** composited post-production onto natural garment zones—woven damask cuff labels, stitched chest patches, breast pocket crests, and structured cap crowns.
2. **Afrikanda-Aligned Visual Clarity & Homepage Flow:**
   - Promoted **The collections** (4 clean 4:5 photographic category cards: `Corporate`, `Hospitality`, `Industrial`, `Branded apparel`) directly below the Hero so visitors immediately see the full product range, matching the visual directness of `https://afrikandaholdings.com/`.
   - Refactored **Choose your workwear** (`GarmentExplorer`) to use 4 distinct worn/detail photographs (`hero-model-detail.webp`, `hospitality-apron-detail.webp`, `industrial-coverall.webp`, `branded-polo-fit.webp`) so no photograph is repeated on the Homepage, and removed all technical/demo copy (`"Interactive showroom"`, `"interactive vector silhouettes"`, `"Curated uniform study // Kigali Atelier"`, `"3D puff embroidery"`, `"micro-prismatic reflective trim"`).
   - Tightened the `390×844` mobile first fold so mobile visitors immediately see the brand header, headline, both CTAs (`Explore collections` and `Request a quote`), and the full `H01` tailoring table photograph without scrolling.
3. **12-Photo Editorial Lookbook (`/work`):**
   - Expanded `/work` from 6 repeated placeholder cards into a **12-photo editorial showroom** spanning blazers, embroidered shirt cuffs, chef coats, canvas apron hardware, work jackets, one-piece coveralls, macro bar-tack/zipper seams, piqué polos, structured caps, and multi-department uniform rails.
   - Replaced repetitive per-card provenance badges with a single clear gallery disclosure note at the top of the page: *"Illustrative examples of garment styles, fabrics, and branding placements. Final specifications are agreed per order."*
4. **Navigation & Accessibility Refinements:**
   - Simplified the desktop `Collections` dropdown in `Header.tsx` to a semantic `<button aria-expanded>` + `<ul class="dropdown-sectors">` link list that returns focus to the trigger button on `Escape`.
   - Upgraded `GarmentExplorer.tsx` with full WAI-ARIA `tablist` roving `tabIndex` (`ArrowLeft`/`ArrowRight`/`Home`/`End`) and click-only selection so moving the pointer toward the quotation buttons never accidentally switches the active garment tab.

---

## 2. How the reference (`https://afrikandaholdings.com/`) was respected

Full visual parity details and screenshot pairs are recorded in [`docs/REFERENCE_PARITY_AUDIT.md`](REFERENCE_PARITY_AUDIT.md) and compiled on [`docs/review-evidence-2026-10-19/contact-sheets/before-after-and-reference-comparison.png`](review-evidence-2026-10-19/contact-sheets/before-after-and-reference-comparison.png).

- **What we intentionally aligned with Afrikanda:**
  - Uncluttered top navigation (`Collections` disclosure, `Lookbook`, `About`, `Contact`, and one primary `Request a quote` CTA).
  - Generous warm-white negative space (`#fafaf8`), high-contrast editorial typography (`Barlow`), and photographic category cards immediately following the hero.
- **What we tailored specifically for Q Workwear buyers (and why):**
  - **Direct Quotation Handoff (`≤3` interactions):** Every collection card, garment detail tab, and Lookbook study links directly to `/contact?product=<Garment>` so institutional buyers can generate an order-specific email draft to `qworkwearsolution@gmail.com` with their selected garment pre-filled.
  - **Mobile First-Fold Actionability:** Unlike Afrikanda's tall mobile hero text block, Q Workwear's 390px first fold keeps both primary CTAs and the primary garment photograph visible above the fold.

---

## 3. Photography contact sheets & brand provenance

All master files, rejected candidates, and production `.webp` outputs are registered in [`docs/VISUAL_ASSET_REGISTRY.md`](VISUAL_ASSET_REGISTRY.md) and [`docs/ASSET_PROVENANCE.md`](ASSET_PROVENANCE.md):

1. **Hero Candidates & Visual QA Selection Board:** [`docs/review-evidence-2026-10-19/contact-sheets/hero-candidates-comparison.png`](review-evidence-2026-10-19/contact-sheets/hero-candidates-comparison.png)
   - **`H01` (`SELECTED_INTERNAL` — Primary Hero):** Artisan hands finishing a navy office shirt cuff with a woven Q Workwear label beside a folded blazer, dress shirt, fabric swatches, and tailoring shears (`public/images/showcase/hero-atelier-table.webp`).
   - **`H02` (`SELECTED_INTERNAL` — Alternate Hero & Lookbook Rail):** Studio garment rack showing a structured navy blazer, ivory chef jacket, navy work jacket, and cream polo (`public/images/editorial/hero-uniform-rail.webp`).
   - **`H03` (`SELECTED_INTERNAL` — Alternate Hero & Corporate Cuff Study):** Anonymous East African torso adjusting a crisp light-blue shirt cuff with a subtle red Q monogram under a charcoal blazer (`public/images/editorial/hero-model-detail.webp`).
   - **Rejected Candidates Retained for Audit:** `H01_v1` (rejected for partial visible Caucasian face at top-right), `H01_v2a` (rejected for visible third-party "JUKI" machine logo), and `H03_v1` (rejected in favor of `H03_v2` for local cast consistency).
2. **200%-Zoom Before/After Logo Compositing Sheet:** [`docs/review-evidence-2026-10-19/contact-sheets/logo-compositing-before-after.png`](review-evidence-2026-10-19/contact-sheets/logo-compositing-before-after.png)
   - Demonstrates clean unbranded photorealistic masters alongside the post-composited official Q marks (`q-mark-red.png`, `q-mark-white.png`, `q-workwear-red-transparent.png`, `q-workwear-white-transparent.png`) across all 10 masters (`H01`, `H02`, `H03`, `C01`, `HOS01`, `IND01`, `BR01`, `IND02`, `IND03`, `BR02`).
3. **12-Photo Production Gallery Contact Sheet:** [`docs/review-evidence-2026-10-19/contact-sheets/photoreal-gallery-sheet.png`](review-evidence-2026-10-19/contact-sheets/photoreal-gallery-sheet.png)
   - Shows all 12 distinct garment & macro detail studies used across `/`, `/products`, `/work`, and `/about`.
4. **Image Class & Rights Governance:**
   - All 14 production `.webp` assets are designated `image_class: illustrative_concept` (`business_approval: PENDING_CLIENT_SIGNOFF`).
   - Third-party client logos on Slide 40 of `docs/BUSINESS PORTFOLIO.pptx` and unverified supplier/stock cutouts on Slides 8–39 remain strictly withheld (`BLOCKED_RIGHTS`).

---

## 4. Screenshots & buyer journeys (`docs/review-evidence-2026-10-19/`)

- **Side-by-Side Reference vs. Baseline vs. Corrective Build:** [`docs/review-evidence-2026-10-19/contact-sheets/before-after-and-reference-comparison.png`](review-evidence-2026-10-19/contact-sheets/before-after-and-reference-comparison.png)
- **Homepage @ 390px (First Fold & Full Page):** [`after/q-after-home-390-fold.png`](review-evidence-2026-10-19/after/q-after-home-390-fold.png), [`after/q-after-home-390-full.png`](review-evidence-2026-10-19/after/q-after-home-390-full.png)
- **Homepage @ 1440px (First Fold & Full Page):** [`after/q-after-home-1440-fold.png`](review-evidence-2026-10-19/after/q-after-home-1440-fold.png), [`after/q-after-home-1440-full.png`](review-evidence-2026-10-19/after/q-after-home-1440-full.png)
- **Desktop `Collections` Disclosure Open @ 1440px:** [`after/q-after-desktop-nav-1440.png`](review-evidence-2026-10-19/after/q-after-desktop-nav-1440.png)
- **Mobile Navigation `<dialog>` Open @ 390px:** [`after/q-after-mobile-nav-390.png`](review-evidence-2026-10-19/after/q-after-mobile-nav-390.png)
- **Collections (`/products/`) @ 390px & 1440px:** [`after/q-after-products-390-fold.png`](review-evidence-2026-10-19/after/q-after-products-390-fold.png), [`after/q-after-products-1440-full.png`](review-evidence-2026-10-19/after/q-after-products-1440-full.png)
- **Lookbook (`/work/`) @ 390px & 1440px:** [`after/q-after-work-390-fold.png`](review-evidence-2026-10-19/after/q-after-work-390-fold.png), [`after/q-after-work-1440-full.png`](review-evidence-2026-10-19/after/q-after-work-1440-full.png)
- **About (`/about/`) & Pre-filled Quote (`/contact/?product=Work%20overalls`) @ 1440px:** [`after/q-after-about-1440-full.png`](review-evidence-2026-10-19/after/q-after-about-1440-full.png), [`after/q-after-contact-1440-full.png`](review-evidence-2026-10-19/after/q-after-contact-1440-full.png)

---

## 5. Quality verification results

| Check | Evidence / Run Command | Actual Result | Owner Action |
| --- | --- | --- | --- |
| TypeScript | `pnpm typecheck` (`tsc --noEmit`) | **PASS** (0 errors) | Verified |
| Static export | `pnpm build` (`next build` → `out/`) | **PASS** (10/10 static routes exported cleanly) | Verified |
| Layout & WCAG 2.1 A/AA smoke | `pnpm test:ui` (`scripts/verify-ui.mjs`) | **PASS** (`45/45` route×viewport checks across `320, 360, 375, 390, 768, 1024, 1050, 1051, 1440px`, 0 `axe-core` violations, 0 overflow, 0 broken images, 0 banned copy leaks) | Verified |
| Buyer flow tests | `pnpm test:flows` (`scripts/verify-flows.mjs`) | **PASS** (`8/8` E2E checks: header disclosure + `Escape` focus return, `tablist` keyboard roving focus + no hover mutation, category query filters + history, pre-filled `mailto:` draft validation, message fallback + FAQ, invalid category recovery, 12-card Lookbook handoff, 404 status) | Verified |
| Keyboard + focus | Playwright & DOM focus verification | **PASS** (`Escape` restores focus to `Collections` button and mobile menu button; `ArrowRight`/`ArrowLeft`/`Home`/`End` roves focus across garment tabs) | Verified |
| Reduced motion | `verify-ui.mjs` (`reducedMotion: 'reduce'`) | **PASS** (`@media (prefers-reduced-motion: reduce)` disables animations/transitions cleanly) | Verified |
| 390 / 1440 visual critique | `docs/review-evidence-2026-10-19/after/` | **PASS** (Inspected via `view_file`; ready for Kaze design review) | **Kaze Review** |
| Photo / logo realism check | `contact-sheets/logo-compositing-before-after.png` | **PASS** (200% zoom verified across all 10 masters) | **Kaze Review** |
| Image rights | `docs/VISUAL_ASSET_REGISTRY.md` | **VERIFIED INTERNAL** (`illustrative_concept`; all 3P deck logos withheld) | **Client Sign-off** |
| Client email / WhatsApp | `/contact` (`qworkwearsolution@gmail.com`) | **PASS** (Email-only active; unconfirmed phone/WhatsApp withheld) | **Client Sign-off** |

---

## 6. Decisions for Quddus and Tinah

1. **Hero & Brand Photography Selection:** Do you prefer **`H01`** (artisan hands finishing the navy shirt cuff with woven Q Workwear label, currently active on Home), **`H02`** (the 4-sector studio uniform rack), or **`H03`** (the tailored charcoal suit & embroidered shirt cuff) as the opening homepage image?
2. **Garment & Sector Coverage:** Does the 12-photo Lookbook accurately reflect the core uniform styles you want buyers to enquire about first, or would you like additional dedicated cards for Healthcare scrubs, Security uniforms, or School/Sports kits once photographed?
3. **Portfolio Deck & Commission Photos:** Can you share original photographs of Q-made uniforms or written permission from any client on Slide 40 so we can add a verified *"Selected client work"* section?
4. **Contact Channels:** Should the site continue routing enquiries exclusively to `qworkwearsolution@gmail.com`, or would you like a confirmed business phone / WhatsApp number enabled in the header and contact page?
5. **Layout & Navigation Sign-off:** Are you happy with the simplified Afrikanda-aligned navigation and collection flow for public release?

---

## 7. Release decision

- **Preview URL:** Local static export (`out/` served on `http://127.0.0.1:3016`; not deployed to public production per `AGENTS.md`).
- **Build branch:** `feat/photoreal-showroom-issue-3` (forked from `feat/interactive-showroom-p0-audit` at `0db11a1`).
- **Design reviewer:** Pending **Kaze** review.
- **Client decisions recorded:** Pending **Quddus & Tinah** review.
- **Approved for public release:** **NO**
- **Known blockers:**
  1. Awaiting Kaze's internal design sign-off and Quddus & Tinah's client sign-off before merging to `main` or deploying to production.
  2. Secondary extended-sector image prompts (`HC01–BIZ02`) are recorded as `BLOCKED_TOOLS` (`gemini-3.1-flash-image` window quota resets `2026-10-19T13:57:29Z`), while all 14 active website image slots across `/`, `/products`, `/work`, and `/about` are 100% populated with verified photorealistic Q-branded photographs.
