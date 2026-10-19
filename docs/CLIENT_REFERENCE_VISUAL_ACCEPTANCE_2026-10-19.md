# Q Workwear | Client-reference design contract and corrective review
Date: 2026-10-19 | Status: **canonical implementation brief for client-review candidate** | Scope: feature branch `feat/interactive-showroom-p0-audit`

## Objective

Quddus and Tinah expressly favour the **main** Afrikanda Holdings website, https://afrikandaholdings.com/ : simple navigation, straightforward sections and approachable presentation. Deliver a Q Workwear website recognisably aligned with **those experience principles**, with any purposeful departures offering demonstrably better product discovery, quotation conversion, accessibility or performance. "Better" cannot mean more boxes, more words or more effects. No verbatim copying of the reference's assets, code or identity.

**Critical screenshot-informed diagnosis (owner feedback, 19 Oct):** The current desktop/mobile build is structurally serviceable but has PIL-generated abstract geometric posters with floating Q-brand cards, not realistic uniform photography. An elaborate four-card SVG selector plus an information-dense second spotlight panel duplicates the subsequent four-category photo grid. Repeated "Interactive showroom", "Curated uniform study // Kigali Atelier" labels, check lists, badges and highly technical garment copy make the site resemble a software demo. Navigation works but is not sufficient evidence of reference fidelity. **Do not release that art direction to the client.**

## Source truth and boundaries

- Verified owner direction: approximate Afrikanda's *simplicity of navigation and presentation*, add tasteful interactivity, genuinely garment-focused Q Workwear-branded photography, use Business Portfolio deck to represent range, retain economical maintenance.
- Proposed: exact layout, imagery, animation and category structure. Must be shown to owner in preview.
- Existing site route/technology inventory must be read from code; source deck is `docs/BUSINESS PORTFOLIO.pptx` (42 slides). Slides support sector/product context, not blanket publication rights.
- Reference page DOM alone cannot establish exact animation or mobile look. **IDE agent must capture and inspect desktop and mobile screenshots and interactions from reference** using permitted browser tooling. If the site cannot be accessed, record "reference visual verification blocked" and ask for owner-captured screenshots/video; do not claim a pixel match.

## A. Reference fidelity audit, BEFORE designing

Capture at least at 390px and 1440px for both **reference** and **Q Workwear**:
- initial fold; header, menu closed/open, first content section, item-to-destination navigation, footer;
- scroll flow, mobile navigation, hover/focus and click/tap behaviours, typography scale, media/crop proportions, content density and CTA positioning;
- any animation: whether actually observable, duration if measurable and reduced-motion treatment.

Write `docs/REFERENCE_PARITY_AUDIT.md` using the comparison matrix below. For each row choose **Match principle / Better for Q buyers / Unresolved** and attach annotated screenshots. Do not claim reference features you have not observed.

| Experience area | Principle to match | Allowed higher-value Q Workwear alternative | Failure |
| --- | --- | --- | --- |
| Header | Logo, immediate understandable destinations, restrained number of options | One expandable Collections group backed by direct sector deep links | Clutter, navigation nested more than needed |
| Menu | Clear click/tap disclosure, unambiguous next steps | Accessible mobile sheet and keyboard-safe desktop menu | Hover-only / excessive animation |
| First screen | Simple immediate business promise with strong media | Product-first real-looking uniform photo and direct quote CTA | Geometry/abstract posters, multiple competing sentences |
| Visual browse | Large readable visuals and clear category hierarchy | 4 high-quality photo-led gateways + lightweight optional SVG selector | Two near-duplicate grids and tech-demo labels |
| Page rhythm | High contrast, breathing room, not excessive information | Well-chosen product micro-details and short captions | Six repeated card/box/badge systems |
| Detail / conversion | Clear contact/navigation opportunities | Pre-filled category/product quote or verified WhatsApp | Dead-end galleries or unverifiable enquiry sent state |
| Mobile | Straightforward navigation and legible layout | Touch-optimised garment gallery and image-led category list | 4 tiny cards competing on one narrow screen |
| Motion | Functional state transitions, not decoration | One purposeful interaction that shortens discovery | Scroll theatre / long page delays |
| Brand | Cohesive recognisable business | Realistic embroidered Q marks, garment details | Floating/pasted logo cards and fake production imagery |

Minimum: **no row marked Failure** on client preview. Any "Better for Q buyers" must explain actual buyer value and be demonstrated live, not self-awarded.

## B. Required design direction

- Keep a **visually quiet** framework: genuine white/off-white canvas, charcoal, brand-red accents, readable Barlow; authentic Q logo, no speculative rebrand.
- Make **premium garment photography** primary. Hero should display obvious apparel / maker detail in first glance, not an abstract ruler/triangle. Short memorable proposition and Explore Collections + Request a Quote.
- Four top-level areas remain Corporate, Hospitality, Industrial, Branded Apparel for familiar wayfinding. The deck's Healthcare, Security, School, Cleaning, Sports, PPE are **lookbook/use-case expansions**, not necessarily six new permanent nav items.
- Navigation reference: simple desktop destinations and uncomplicated mobile menu; no mega-menu. Keep `/products?category=...`, `/work`, `/about`, `/contact` and contact context working.
- **Reduce duplicate modules:** The current homepage has two separate four-category presentations. Redesign as one **photo-led four-category selector** with a discreet interactive SVG garnish/overlay or compact selectors, OR make SVG a low-footprint navigation strip that adds a genuinely distinct use case. Do not keep two full grids plus large spotlight without clear incremental value.
- Prefer main menu labels "Collections", "Lookbook", "About", "Contact", "Request a quote". Logo takes Home. Make typography and photo proportions do most of the visual work.
- Product photos should show **what can be ordered**, not technical construction jargon. Approved illustrative concepts remain explicitly concepts; do not oversell them as actual orders, factory facilities or proof of Q production.
- Cut "interactive vector silhouettes tailored for Rwandan businesses", "Curated Uniform Inspirations // Representative Atelier Concepts", permanent provenance badges and unverifiable craft anecdotes from visitor copy. Authentic editorial titles and one short **quiet** disclosure for illustrative galleries are sufficient.
- Short copy: garment noun, relevant teams/use, customization offer, CTA. Remove fabric hardware or certification detail without verified supporting evidence.
- No default huge bordered cards/shadow stacks; no decorative labels or overlay gradients on every image. Camera/garments have visual authority.

## C. Page-by-page contract

### Home
Sequence: credible photo hero with offer/CTAs; one short image-led sector selector with subtle interaction; selected real-like product details/proof of customization (embroidery, fabric, labels) with few words; small lookbook teaser into `/work`; simple order enquiry; final CTA. Retain useful existing components only when they contribute. Reuse editorial images intelligently but avoid three consecutive repeats of the same frame. Verify viewport: visitor sees garment, brand and first action without scrolling at 390px.

### Collections `/products`
Category images must immediately distinguish the sector. Use well-cropped vertical editorial product photos, fast filters/deep links and a small plain-language garment menu; a card links to inquiry. Avoid unverified SKU, minimum order, price or performance promise.

### Lookbook `/work`
A persuasive photographic **range**. At least one meaningful close-up/detail per displayed main sector and broader sectors where approved, not six cards repeating the homepage. Give visual hierarchy: editorial wide panels, varied but deliberate portrait/detail crop, minimal captions. Optional selected-work section only with permissioned actual commissions; generated images classed "Illustrative uniform concepts" without claiming actual production.

### About
Grounded company story from PPT and only approved origin/craft claims. Illustrative craftsmanship images must not imply an actual Q Workwear workshop, staff or facility unless proved. No inflated list of corporate values styled as KPI cards.

### Contact
Plain direct channel with stable email-draft fallback; approve/test WhatsApp before enabling. Preserve product/category context, clear instruction to click send in mail app. Make it reachable in <=3 purposeful clicks/taps from the homepage.

## D. Functional details agents should correct while improving visual UX

- `src/components/layout/Header.tsx` uses `role="menu"` and `menuitem` on ordinary page links; if retaining ARIA menu semantics implement expected keyboard navigation and focus management. **Simpler preferred**: normal `nav` list and disclosed panel, no ARIA menu roles, focus control + Escape return.
- `src/components/garments/GarmentExplorer.tsx` currently declares a `tablist` with dynamic `aria-controls` pointing at only the active, conditionally rendered tab panel, and no evident arrow-key focus management. Either implement **complete APG tab pattern** with roving focus, correct labels and panel IDs or switch to simple labelled buttons/links. Never claim WCAG success solely from axe tests.
- Hover currently changes selected garment. Ensure keyboard focus/tap produce equivalent predictable behaviour, and selection does not mutate unexpectedly while moving pointer to CTAs.
- `src/content/garments` and `src/app/work/page.tsx` use claims such as micro-prismatic reflective trim, Oxford shirts, 3D puff embroidery, heat-tolerant materials and a Kigali cutting table. Flag unsupported claims; use neutral source-supported copy.
- Keep menu, content and forms usable with reduced motion; focus outlines visible and links tappable.
- Existing automated tests passing do **not** equal visual acceptance.

## E. Client-review presentation gate (must be delivered, not optional)

Prepare `docs/CLIENT_REVIEW_PACK_2026-10-19.md` with:
1. **Reference comparison:** cropped desktop and mobile reference screenshots, Q version screenshots, annotated differences; label what exactly was verified vs inferred. No inaccessible reference falsely marked verified.
2. **Design rationale:** short plain-language why same-like sections preserve simplicity and why any alternative is demonstrably better for Q buyers.
3. **Visual contact sheet:** all final candidates with item ID, context, visual classification/rights and selected vs rejected; show hero variants and 4 category candidates at realistic website scale.
4. **Full-page previews:** Home 390px + 1440px, open desktop/mobile navigation, Collections, Lookbook, Contact. Show a real interactive flow from hero to an item-specific quotation.
5. **One-page client-facing decisions:** choose hero, photo/branding style, categories/lookbook priorities, publishable phone/WhatsApp, permission to show actual commissions. No jargon or a large questionnaire.
6. **Proof:** `pnpm typecheck`, `pnpm build`, `pnpm test:ui`, `pnpm test:flows` logs, QA at 320/375/390/768/1050/1051/1440 widths, quick/manual keyboard screen-reader/reduced motion, mobile network/image loading.
7. **Delivery status:** branch, PR and preview URL if genuinely deployed, unresolved rights, exact release approval needed. Do not modify production until owner approves.

## F. Definition of ready for Quddus and Tinah

**Pass all gates**:
- Recognisably as navigable and straightforward as reference; every intentional difference justified by buyer value.
- Hero and all four sectors visually communicate **realistically photographed garments**, not abstract art.
- Authentic brand naturally visible on enough clothing (stitch/patch/print) to establish Q Workwear without fake logos.
- Lookbook demonstrates **breadth** with distinct subjects, not repetition of four images.
- Four critical flow tasks (identify service, select sector, inspect product example, open specific quote) are frictionless and responsive.
- No fabricated case studies, employees, customer logos, certified PPE, guaranteed materials/lead times or fake workshop claims.
- Owner-facing review pack exists with side-by-side references and genuine screenshots and plain language.

**No agent may declare "client-ready" based only on unit tests or its own evaluation.** Reviewer signs off the preview; final clients approve publication.
