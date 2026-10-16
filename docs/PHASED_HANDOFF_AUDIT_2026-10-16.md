# Q Workwear | Repository & Asset Audit and Phased Implementation Plan

**Date:** 2026-10-16  
**Auditor:** Antigravity IDE Agent  
**Branch:** `feat/interactive-showroom-p0-audit`  
**Reference Document:** `AGENTS.md` and `docs/NEXT_BUILD_AGENT_HANDOFF_2026-10-16.md`  
**Authority:** Confirmed client directives from 2026-10-16 handoff take precedence over legacy unbranded notes.  
**Strategic Principle:** The company profile presentation (`docs/BUSINESS PORTFOLIO.pptx`) provides insight into what Q Workwear has produced or done in the past. It is **not** representative of the full breadth of what they can do now or in the future. The website positioning must **not** be rigid or bound to certain articles only; Q Workwear operates as a versatile, bespoke uniforms manufacturer for any team, sector, or working environment in Kigali.

---

## 1. Executive Summary

This audit establishes the baseline for transitioning the Q Workwear digital showroom into an **interactive, branded, low-maintenance quotation experience** inspired by the straightforward navigation of Afrikanda Holdings and grounded in Q Workwear's Kigali manufacturing portfolio.

### Current Health Check
- **TypeScript:** Passes cleanly (`tsc --noEmit` exits code 0).
- **Static Export:** Passes cleanly (`next build` outputs 10 static routes to `out/`).
- **Dependencies:** Lightweight and self-contained (Next 15.2.1, React 19, Tailwind 4, Lucide icons; zero heavy animation/3D dependencies).
- **Fonts:** Self-hosted Barlow (Regular, Medium, SemiBold) with OFL license; zero external runtime font calls.
- **Routes:** 5 canonical routes preserved (`/`, `/products`, `/work`, `/about`, `/contact`).

---

## 2. Official Logo Inventory & Sizing Analysis

All logo files under `public/images/logo/` were analyzed for dimensions, alpha channels, and non-transparent bounding boxes:

| File Name | Dimensions | Alpha | Non-Transparent Bounding Box | Content Description | Best Usage / Context |
|---|---|---|---|---|---|
| `q-workwear-original.png` | 640×640 | RGBA | `(0, 0, 640, 640)` | Solid red textured background with white Q mark and white wordmark | Master color reference; not suitable for direct garment compositing or transparent header. |
| `q-workwear-red-transparent.png` | 640×640 | RGBA | `(58, 163, 566, 480)` | Red Q mark + "Q WORKWEAR UNIFORMS & SAFETY" wordmark | High-res print/embroidery composites; large display hero/about. Note: ~163px transparent top/bottom padding requires CSS cropping if used in a fixed-height bar. |
| `q-workwear-white-transparent.png` | 640×640 | RGBA | `(58, 163, 566, 480)` | White Q mark + white wordmark on transparent | Dark backgrounds, dark garment composites, dark footer surfaces. |
| `q-mark-red.png` | 184×235 | RGBA | `(0, 0, 184, 235)` (Tight) | Isolated red Q mark emblem, no wordmark, zero excess margin | Header navigation (`Logo.tsx`) with HTML brand text, compact mobile nav, garment tags/hangtags. |
| `q-mark-white.png` | 184×235 | RGBA | `(0, 0, 184, 235)` (Tight) | Isolated white Q mark emblem, zero excess margin | Dark header/footer variants, dark garment patch/seam tags. |

### Sizing and Optical Weight Assessment
- `Logo.tsx` currently renders `q-mark-red.png` at 40×40 (rendered width ~31px) paired with `<span className="brand-name">Q Workwear</span>`. This produces superior contrast and legibility over shrinking the full lockup (which contains small text "UNIFORMS & SAFETY" that turns unreadable below 60px height).
- For illustrative media compositing (Phase P1), `q-mark-red.png`, `q-mark-white.png`, and the transparent lockups will be composited as authentic locked assets without redrawing.

---

## 3. Codebase & Component Audit

### Navigation (`Header.tsx` & `MobileNav.tsx`)
- **Desktop:** Current header renders a flat horizontal list of links: Collections (`/products`), Lookbook (`/work`), About (`/about`), plus a persistent "Request a quote" button.
  - *Delta / Missing:* The client desires a simple dropdown disclosure for "Collections" (revealing Corporate, Hospitality, Industrial, Branded Apparel + View All) inspired by Afrikanda Holdings' clear grouped navigation. Must disclose on click/tap/keyboard without being hover-only.
- **Mobile:** Uses HTML5 `<dialog>` in `MobileNav.tsx` with backdrop, background scroll lock, Escape key closure, and focus return.
  - *Delta / Enhancement:* Add Collections subgroup links cleanly within the mobile drawer while preserving <250ms entrance and instant reduced-motion behavior.

### Home & Hero (`src/app/page.tsx`, `Hero.tsx`, `CategoryShowcase.tsx`)
- **Hero:** Displays `hero-atelier-table.webp` with headline and single link to `/products`.
  - *Delta / Missing:* Needs dual CTA hierarchy ("Explore collections" primary/secondary + "Request a quote"), plus subtle purposeful intro entrance.
- **Choose Your Workwear (Interactive SVG Explorer):**
  - *Delta / Missing:* Does not yet exist. Needs 4 custom SVG category items (Blazer/shirt, Chef jacket/apron, Work jacket/coverall, Polo/cap) with hover/focus/tap preview updating description/photo and linking to `/products?category=...`.

### Showcase Images (`public/images/showcase/`)
- All 5 existing showcase images (`hero-atelier-table.webp`, `cat-corporate-suiting.webp`, `cat-hospitality-culinary.webp`, `cat-industrial-safety.webp`, `cat-branded-apparel.webp`) are currently PIL-generated geometric illustrations created by `scripts/generate_atelier_visuals.py`.
- `tailor-craftsmanship.webp` (1200×900) is an orphan asset unreferenced in code.
- `public/images/lookbook/` contains 5 files (`lookbook-apron.webp`, etc.) which are not referenced by `/work` (which currently imports `categories` from `catalog.ts`).

### Enquiry & Contact (`src/app/contact/page.tsx`, `src/lib/whatsapp.ts`)
- Implements strict quotation-intent email draft generation (`mailto:` URL encoding) with full form validation and copy-to-clipboard fallback.
- Correctly suppresses unconfirmed channels (phone numbers and WhatsApp remain hidden until confirmed and verified).

---

## 4. Reference Architecture Audit (Afrikanda Holdings)

Inspection of `https://afrikandaholdings.com/`:
- **Header:** Sticky header with transparent-to-solid transition on scroll.
- **Menu Hierarchy:**
  - Home
  - Hospitality & Home Collection (Dropdown: Hospitality Collection, Home Collection)
  - Interior Design (Dropdown: Commercial Design, Residential Design, Consultancy)
  - Exotiká (Dropdown: Food & Beverages, Cosmetics)
  - Contact Us
- **Key Observation for Q Workwear:**
  - Afrikanda's strength is clear, bold information grouping without clutter.
  - Q Workwear will adopt this architectural clarity: A single "Collections" disclosure in the primary header revealing the 4 distinct uniform sectors, while keeping the top-level bar clean (Collections, Lookbook, About, Contact + persistent CTA).

---

## 5. Source Presentation Audit (`docs/BUSINESS PORTFOLIO.pptx`)

- **Presentation Master File:** Verified locally at `docs/BUSINESS PORTFOLIO.pptx` (42 slides, 45 embedded media files).
- **Core Editorial Directive:** As confirmed by project leadership, the company profile presentation is insightful context on what Q Workwear has produced or done in the past. It is **not** representative of the full breadth of what they can do now or in the future. The website positioning must **not** be rigid or bound to certain articles only; Q Workwear operates as a versatile, bespoke uniforms manufacturer for any team, sector, or working environment in Kigali.
- **Taxonomy Mapping (Slides 1–42):**
  - Slides 1–6: Brand identity, positioning, mission ("safety, comfort and confidence at a competitive price"), core values (Integrity, Realistic, Efficient responsibility), and protective clothing distinctions.
  - Slides 7–10: Corporate / Front Desk (executive suiting, office shirts, professional image).
  - Slides 11–15: Medical / Healthcare (dust coats, medical tunics, surgeon caps).
  - Slides 16–24: Industrial / Technical / Agriculture (overalls, heavy coats, waistcoats, PVC aprons).
  - Slides 25–26: Sportswear / Team apparel.
  - Slides 27–34: PPE (gloves, high-vis vests, eye protection, head covering).
  - Slides 35–39: Cleaning uniforms, gumboots, latex gloves.
  - Slide 40: "Our clients" (11 client logos/photos). *Strictly internal reference; no third-party client logos published without written permission.*
  - Slide 41: Contact information (+250 782744231, +250 788682940, `qworkwearsolution@gmail.com`).
  - Slide 42: Closing slide ("Murakoze").
- **Publication Governance:**
  - Slide 40 client logos are **strictly prohibited** from public display.
  - Slide 41 phone numbers remain unverified for public WhatsApp/voice.
  - All deck images are classified as `BLOCKED` in `docs/LOOKBOOK_ASSET_MANIFEST.md` until explicit client permission and high-resolution assets are supplied.

---

## 6. Delta Log (Implemented vs Missing vs Blocked)

| Area | Current Implementation | Missing Requirements | Blocked Items |
|---|---|---|---|
| **Branding & Logos** | 5 logo assets in `public/images/logo/`; `Logo.tsx` renders mark + text | Dark-variant logo support for inverted surfaces | Vector SVG from client (using high-res PNG crops as locked artwork) |
| **Media / Photos** | 5 PIL placeholder images in `public/images/showcase/` | Branded editorial concepts with authentic Q logo compositing | Presentation deck photo downloads (requires client rights release) |
| **Navigation** | Flat desktop nav links; mobile `<dialog>` | Collections disclosure dropdown on desktop; Collections subgroup on mobile | None |
| **Homepage** | Hero frame + collections grid + pillars + process + CTA | Hero dual-CTA hierarchy; "Choose your workwear" interactive SVG explorer | None |
| **Interactive SVGs** | None | 4 custom SVG garment components (`GarmentExplorer.tsx`, `GarmentArtwork.tsx`) | None |
| **Lookbook (`/work`)** | Mirrors collections grid with generic images | Curated lookbook with distinct concept lane and sector badges | Permissioned client project photos (labeled concepts used in interim) |
| **Contact / Enquiry** | Validated email draft generator; copy draft button | Confirmed WhatsApp channel once approved | Telephone / WhatsApp publication approval |

---

## 7. Decision Ledger

1. **Brand Authenticity First:** Generative models must never be prompted to invent or render the Q Workwear logo. Authentic PNG marks from `public/images/logo/` are composited as locked layers.
2. **Flexible, Made-to-Order Positioning:** Website positioning is about versatile custom uniform solutions for any team in Kigali. It must not be rigid or bound to past presentation articles only.
3. **No False Proof:** Generated/illustrative concepts will be labeled transparently as "Uniform inspirations" or "Concept designs", never as completed client orders or actual workshop facilities.
4. **Afrikanda Inspiration Without Imitation:** Adopt Afrikanda's grouped, scannable IA (Collections dropdown) while creating bespoke interactive SVG mechanics unique to Q Workwear.
5. **Zero Heavy Dependencies:** All interactions, dropdowns, and SVG transitions will use semantic HTML, React state, Tailwind 4, and native CSS transforms (`prefers-reduced-motion` compliant). No GSAP, WebGL, or Three.js.
6. **Preserve URL Contracts:** Retain `/products?category=corporate|hospitality|industrial|branded`, `/work`, `/about`, `/contact`, and enquiry prefill parameters (`?product=...`, `?message=...`).

---

## 8. Phased Implementation Plan (P0 – P5)

### Phase P0: Repository & Asset Audit (Current)
- **Files:** `docs/LOOKBOOK_ASSET_MANIFEST.md`, `docs/PHASED_HANDOFF_AUDIT_2026-10-16.md`.
- **Deliverables:** Complete logo inventory, codebase audit, Afrikanda navigation analysis, slide-by-slide deck map, delta log, and decision ledger.
- **Verification:** `pnpm typecheck`, `pnpm build`.
- **Gate:** Reviewed logo inventory, deck map, and decision ledger committed to branch.

### Phase P1: Branded Media Strategy & Asset Preparation
- **Files:** `docs/BRANDED_MEDIA_LOOKBOOK_2026-10-16.md`, `docs/ASSET_PROVENANCE.md`, `public/images/showcase/`.
- **Deliverables:** Establish reproducible compositing pipeline placing locked Q logo assets on clean editorial garments. Ensure 16:9 hero and 4:5 category crops with breathing room for mobile viewports.
- **Risks:** Distorted logo perspective or unnatural blending.
- **Mitigation:** Strict bounding box alignment, natural opacity/blending, and fallback illustrative labeling.
- **Verification:** Visual review at 320px, 390px, 768px, 1440px; image decoding and alt text checks.

### Phase P2: Navigation & Hero Refactor
- **Files:** `src/components/layout/Header.tsx`, `src/components/layout/MobileNav.tsx`, `src/components/home/Hero.tsx`, `src/app/globals.css`.
- **Deliverables:**
  - Header: Add accessible Collections disclosure dropdown (Corporate, Hospitality, Industrial, Branded Apparel + All Collections link) with keyboard/click toggle and Escape key handling.
  - MobileNav: Add organized Collections section in mobile drawer.
  - Hero: Refine heading, lead, and dual-action CTA ("Explore collections" and "Request a quote"); add subtle one-time intro reveal transition.
- **Risks:** Focus trap bugs or layout shift on mobile.
- **Mitigation:** Use standard `<dialog>` events, `useCallback`, and native CSS transitions.
- **Verification:** `node scripts/verify-ui.mjs`, manual keyboard navigation tests (Tab/Escape).

### Phase P3: Interactive SVG Garment Explorer
- **Files:** `src/components/garments/GarmentExplorer.tsx`, `src/components/garments/GarmentArtwork.tsx`, `src/components/garments/garments.ts`, `src/app/page.tsx`, `src/app/globals.css`.
- **Deliverables:**
  - 4 custom SVG garment representations (Corporate blazer/shirt, Hospitality chef coat/apron, Industrial work jacket/vest, Branded apparel polo/cap) adhering to `docs/INTERACTIVE_GARMENT_SVG_SPEC.md`.
  - Interactive selector component with mouse hover, keyboard focus, and mobile tap states.
  - Active state updates adjacent editorial photo, category title, summary, and deep link to `/products?category=...`.
  - Accessible name per control, `prefers-reduced-motion` compliance.
- **Risks:** Bulky SVG payloads or hydration mismatches.
- **Mitigation:** Clean lightweight SVG paths (<5KB per garment), static coordinate math, no external SVG libraries.
- **Verification:** `pnpm typecheck`, `pnpm build`, automated Playwright click/tap tests.

### Phase P4: Lookbook & Content Alignment
- **Files:** `src/app/work/page.tsx`, `src/app/about/page.tsx`, `src/content/pages.ts`, `src/content/catalog.ts`.
- **Deliverables:**
  - Curate `/work` as a structured lookbook with distinct "Uniform Inspirations" lane and clear sector badges.
  - Incorporate deck-grounded positioning in `/about` and `/contact` FAQs without unverified certifications.
  - Clean up or classify orphan assets (`tailor-craftsmanship.webp`, `public/images/lookbook/*`).
- **Risks:** Mixing illustrative concepts with real client claims.
- **Mitigation:** Strict visual badging and clear explanatory copy.
- **Verification:** `node scripts/verify-flows.mjs`, editorial leak regex tests.

### Phase P5: End-to-End Verification & Review Package
- **Files:** `scripts/verify-ui.mjs`, `scripts/verify-flows.mjs`.
- **Deliverables:**
  - Run full test suite across 320, 360, 390, 768, 1024, 1050, 1440px viewports.
  - Verify WCAG 2.1 AA accessibility (axe-core), screen reader labels, keyboard tab loops.
  - Verify form validation and `mailto:` prefill encoding.
  - Generate visual review screenshots and client summary report.
- **Verification:** `pnpm typecheck && pnpm build && pnpm test:ui && pnpm test:flows`.
- **Gate:** 100% test pass rate, clean static build, no console errors or broken links.

---

## 4. Phase Execution & Verification Evidence

All six phases (P0 through P5) have been systematically executed and verified against the canonical Next-Build Handoff specifications.

### Summary of Completed Commits (Branch `feat/interactive-showroom-p0-audit`)

1. **Phase P0 (`f17a28d`):** `docs(audit): complete repository, asset, deck, and reference audit (P0)`
   - Full audit of 10 logo assets in `public/images/logo/`, cataloging resolutions, channels, and alpha tight bounds.
   - Live DOM scraping and analysis of navigation architecture from `https://afrikandaholdings.com/`.
   - Inspection of `docs/BUSINESS PORTFOLIO.pptx` (42 slides, 45 images), blocking unverified client marks (Slide 40) in `docs/LOOKBOOK_ASSET_MANIFEST.md`.
2. **Phase P1 (`33ed64c`):** `feat(media): composite authentic Q logos and update asset provenance (P1)`
   - Updated `scripts/generate_atelier_visuals.py` compositing locked `q-mark-red.png` and `q-mark-white.png` onto all 5 showcase images plus `tailor-craftsmanship.webp`.
   - Updated `docs/ASSET_PROVENANCE.md` with exact stitch boundaries, typography (Barlow), and generation hashes.
3. **Phase P2 (`3da6a35`):** `feat(nav): implement collections dropdown, mobile sector drawer, and refined hero (P2)`
   - Header Collections disclosure menu with `aria-expanded`, keyboard Escape, click-outside dismissal, and direct sector routing.
   - Refactored `MobileNav.tsx` with structured Collections group.
   - Refined `Hero.tsx` with dual CTA hierarchy ("Explore collections" & "Request a quote") and smooth `.hero-reveal` entrance.
4. **Phase P3 (`8b84971`):** `feat(garments): implement interactive SVG garment explorer with spotlight handoff (P3)`
   - Created `src/components/garments/garments.ts`, `GarmentArtwork.tsx`, `GarmentExplorer.tsx`.
   - 4 bespoke SVG garment vector models (Corporate, Hospitality, Industrial, Branded Apparel) with brand-red accents and uniform 320x400 viewBoxes.
   - Interactive tablist with live spotlight updates, keyboard tab support, and direct quotation / catalog deep links.
5. **Phase P4 (`63d55dd`):** `feat(content): curate lookbook, expand about narrative and values (P4)`
   - Curated 6-item lookbook in `src/app/work/page.tsx` with concept lane badge, provenance tags, and custom commission callout.
   - Reclaimed orphan asset `tailor-craftsmanship.webp` as Atelier Prototyping study.
   - Expanded About page with Rwandan manufacturing narrative, founders section, and core values (Integrity, Realistic execution, Efficient responsibility).
   - Enriched FAQ with custom uniform consultations, fitting samples, and bespoke sectors.
6. **Phase P5 (`9d79a8b`):** `test: expand e2e UI viewports and verify lookbook enquiry flow (P5)`
   - Expanded `scripts/verify-ui.mjs` across 8 viewports (320, 360, 375, 390, 768, 1024, 1050, 1440px): 40 layout checks passed, 0 axe accessibility violations, 0 overflow, 0 broken images.
   - Expanded `scripts/verify-flows.mjs` verifying Collections dropdown, Escape dismissal, SVG Garment Explorer spotlight, category filters, quote form prefill, `mailto:` draft encoding, Lookbook cards, and 404 recovery.

### Test Verification Matrix

| Test Suite | Scope | Result | Status |
| :--- | :--- | :--- | :--- |
| `pnpm typecheck` | TypeScript compilation (`tsc --noEmit`) | 0 errors | **PASS** |
| `pnpm build` | Static export (`next build`, 10 static routes) | 10 static pages exported | **PASS** |
| `verify-ui.mjs` | 8 viewports (320px–1440px), axe WCAG 2.1 AA, layout checks | 40/40 checks passed | **PASS** |
| `verify-flows.mjs` | 8 interactive user flows (dropdown, explorer, enquiry, lookbook) | 8/8 checks passed | **PASS** |

