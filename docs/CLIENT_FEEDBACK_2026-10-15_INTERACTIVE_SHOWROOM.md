# Q Workwear | Interactive showroom revision brief

> **Updated 2026-10-16:** Treat this as source context. The current implementation authority is [Next build agent handoff](NEXT_BUILD_AGENT_HANDOFF_2026-10-16.md) and [Branded imagery/PPT lookbook plan](BRANDED_MEDIA_LOOKBOOK_2026-10-16.md). The client's preferred reference is the **main Afrikanda Holdings homepage**, https://afrikandaholdings.com/, not merely Exotiká. All new illustrative/placeholding photographs must be naturally **Q Workwear-branded using the authentic supplied logo artwork**. The earlier "five unbranded images" limitation does not preclude authorized PPT lookbook imagery.
Status: proposed for client review, not an approved design or deployed site.
Date: 2026-10-15
Reference: https://afrikandaholdings.com/exotika/
Client portfolio: https://docs.google.com/presentation/d/17BBLdYefkHXjSFnhQ_gHiz89_9gNVpeogLKa_iRkV_Y/edit
Preview known in project context: https://qworkwear.vercel.app/

## Decision summary
Keep the existing lightweight, static Next.js showroom and make it feel intentional and interactive. Do not rebuild as e-commerce. Deliver a memorable first 20 seconds, a simple navigation experience, product-led SVG interaction and a clear quotation handoff. Respect the owners' request for animation and navigation inspired by the supplied Afrikanda / Exotiká reference, without copying its branding, assets, code or unverified motion behaviours.

## Source and certainty register

| Input | Supported information | Treatment |
| --- | --- | --- |
| Owner feedback conveyed to Kaze (2026-10-15) | Interactive animations and simple, engaging navigation similar in spirit to their chosen reference are important to Q and Tinah. Explore interactive SVG garments, articles and props. | Must-have experience requirement; exact animation details are a design proposal until owner sign-off. |
| Q Workwear Business Portfolio, slides 2–3 | Locally based uniform/workwear manufacturer across commercial offices, construction, trades, hospitality, events, schools and teams. Mission references quality, safety, comfort, confidence and competitive prices; values include integrity, realistic and efficient responsibility. | Useful positioning and service breadth. Edit for plain English without inventing capacities, certifications or price guarantees. |
| Portfolio slides 5–6 | Uniforms, protective equipment and protective clothing are distinguished; speaks to workmanship and branding. | Describe options; do not imply tested PPE, flame resistance or medical-grade protection without product evidence. |
| Portfolio slides 7–39 | Corporate/front desk; medical and dust coats/tunics/surgeon hats; industrial/factory/agriculture, coveralls and PVC aprons; sport wear; PPE including gloves/eyewear/reflective vests; cleaning uniforms and gumboots. | Broader source taxonomy than existing four marketing collections. Include in content mapping and obtain priority/availability approval before listing as purchasable SKUs. |
| Portfolio slide 40 | “Our clients” exists, but company permissions are not established in this brief. | Do not publish logos, identities or case studies without explicit permission. |
| Portfolio slide 41 | qworkwearsolution@gmail.com and two telephone numbers (+250 782744231; +250 788682940) appear in the deck. | Email already exists in the code. Numbers are candidate channels only; verify which is active, WhatsApp-capable and approved for publication before setting flags. |
| Existing repo / PRODUCT.md / DESIGN.md | Static quote-request site with Home, Collections, Lookbook, About and Contact, four top-level groups, illustrative assets, no verified public-portfolio claims. | Keep routes/backwards compatibility and reuse layout, typography, source data and approved logo. |

Note: the Exotiká public page exposes a collection-led information architecture, but a text-only inspection cannot validate its animation details. Ask for a 10–20-second reference screen recording if the owners expect a specific movement or menu behaviour.

## Experience principles
1. Garment-first, brand-authentic, no decorative motion without a navigational or product purpose.
2. Photograph = editorial mood; vector SVG = inspectable interactive object. Do not trace another manufacturer's garments or imply the SVG is an accurate order specification.
3. A category or garment is never more than one clear click/tap from its quote action.
4. Interactivity must be usable on touch, mouse, keyboard and with motion turned off.
5. Progressive enhancement: text, photos, links and enquiries still work without scripted animation.
6. One maintained data catalogue. No CMS, back office, 3D engine, accounts, checkout or content duplication.

## Proposed navigation
Desktop: official Q mark/wordmark left, **Collections** (compact expandable panel: Corporate, Hospitality, Industrial, Branded), **Our story** (About), **Contact**, persistent **Request a quote**. Keep Lookbook reachable from homepage and footer; retain /work so existing links work. Home is reached by the logo. The panel should close on Escape, click away and route change; keyboard focus must be visible and not hover-dependent. Avoid a multi-level mega-menu.

Mobile: brand mark and accessible Menu button; lightweight full-height or near-full-height native dialog/drawer with clear category links, Our story, Lookbook, Contact and the quotation CTA. Tap targets >=44px; body scroll lock only while open; Escape and focus return must remain reliable. Animation: 180–250ms transition with opacity/translate, and an instantaneous reduced-motion version.

Confirm this hierarchy with Q/Tinah rather than assuming they want to remove any existing destination.

## Page-by-page changes

### Home / hero
- Use the official Q mark and real wordmark asset for brand authenticity. The current Logo.tsx uses a mark plus HTML brand text; compare a full-logo lockup at readable sizes before choosing a permanent header treatment.
- Show one clear offer, one primary Explore collections link and one Request a quote link. No badges or fabricated social proof.
- Replace the atelier placeholder with the generated craft photograph at the exact existing image path, after checking anatomy, crops and subject consent/provenance representation.
- Stage a gentle reveal of heading, image and CTA (one sequence, not repeated scroll theatre). Do not hide core content behind JS.
- Add a restrained interactive **Choose your workwear** section: four SVG garments on desktop / swipeable or stacked tap targets on mobile, each opening a relevant collection and previewing the associated editorial image or garment description.

### Collections / products
- Keep the existing /products?category=... URLs, browser Back/Forward behaviour and 16 enquiry options.
- Upgrade the first screen to an SVG garment selector or rail. Hover/focus previews an object; click/tap selects it; selected name, short explanation and Request this garment CTA update in place.
- Preserve fast browse/filter links and a plain-language list below the interaction. Never require interaction with the art to reach the list.
- Reuse four new photographs in category windows. Avoid inventing SKU numbers, product attributes, prices or stock availability.
- Group missing portfolio products as a **coverage backlog**, not automatically as live inventory.

### Lookbook /work
- Keep as a mood/collection lookbook using the same illustrative images. Do not call these “projects completed”, “our clients” or true factory photos.
- Allow subtle image transitions or a simple keyboard-friendly lightbox only if it clearly adds value and can be maintained without dependencies.
- Genuine commissioned work and testimonials can replace or augment it later only after approval.

### About
- Build narrative from the portfolio's verified manufacturer positioning and short mission, with concise editing. Retain Quddus and Tinah as supplied in project context; do not invent biographies, facilities or production metrics.
- Reuse the atelier image, explicitly as an illustrative image if visitors could otherwise infer it depicts the owners' workshop.

### Contact
- Keep the current URL-preserved enquiry context and mailto draft fallback.
- Show clear “opens your email application” language. Never claim form submission or delivery without a working backend.
- Enable WhatsApp only after confirming the deck telephone numbers with the owners, the actual WhatsApp number and test delivery. Avoid an unapproved live phone link.

## Content coverage decisions needed
Existing collections: Corporate, Hospitality, Industrial, Branded apparel.
Portfolio additionally demonstrates: Medical, Cleaning, Sportswear and discrete PPE items.
Recommendation: keep four prominent navigational groups for simplicity, add *sector/use-case tags* (Healthcare, Cleaning, Field/Agriculture, Sports/Teams) to product data only after checking Q Workwear currently offers them. Do not create a fifth or sixth top-level menu category until buyers would demonstrably benefit. PPE and protective clothing require especially careful product-level review before safety language is published.

## Implementation order, with objective completion gates
**P0: Brand & media handoff.** Review official logo variants; replace five placeholder images; record origin and alt text; test portrait, landscape and retina/mobile readability. Update asset provenance. No new imagery beyond five assets required.

**P1: Navigation & hero.** Simplify header hierarchy, add accessible interactive category drawer, tune hero hierarchy and one purposeful introduction transition. Verify responsive navigation and reduced-motion semantics.

**P2: SVG garment explorer.** Build four category illustrations, shared React SVG renderer, selected preview state, keyboard/touch interactions and deep links to /products and /contact. Use CSS transitions before importing an animation dependency.

**P3: Content alignment.** Edit About and product categories from the business portfolio, triage healthcare/cleaning/sports/PPE taxonomy, verify contact channels, replace illustrative portfolio claims only with permissioned client work.

**P4: Acceptance and release.** Run pnpm typecheck, pnpm build, pnpm test:ui and pnpm test:flows; check 320/375/390/768/1440px and keyboard-only + reduced-motion. Check actual static export and contact drafts on Android as well as desktop. Share preview for Q/Tinah approval before touching production.

## Performance / maintainability guardrails
- Preserve Next.js static export, TS, Tailwind, self-hosted Barlow, single src/content catalogue and zero recurring database/CMS costs.
- CSS transitions/transforms and native browser primitives first; no canvas/WebGL, heavy animation frameworks or animated video as a required background.
- Keep first-screen text and CTA visible before hydration; image width/height or aspect ratio reserved; lazy load below the fold. Aim for <200KB combined interactive SVG source and JS incremental payload, and revisit if measured, not as a claim of current performance.
- Do not ship any tracking, newsletter, search, login, payments or content dashboard without an explicit requirement.
- Edit only what creates noticeable buyer value for the agreed scope; flag paid add-ons instead of silently expanding.

## Approval questions (single owner review, not a long questionnaire)
1. Which exact animated menu/transition from Exotiká matters most? Share a quick screen recording if exact.
2. Should the homepage lead with **workwear products**, **actual finished client orders**, or both? Do they have permissioned photos?
3. Confirm whether Healthcare, Cleaning, Sportswear and PPE are currently available and worth listing.
4. Which of the deck numbers is for public voice and WhatsApp enquiries?
5. Approve the real logo variant and the five generated *illustrative* images.

## Existing repository touchpoints
- Branding: public/images/logo/*, src/components/common/Logo.tsx, src/components/layout/Header.tsx
- Navigation: src/components/layout/MobileNav.tsx, src/content/site.ts
- Hero/collections: src/components/home/Hero.tsx, CategoryShowcase.tsx
- Products/content: src/app/products/page.tsx, src/content/catalog.ts, src/types/index.ts
- Contact: src/app/contact/page.tsx, src/lib/whatsapp.ts
- Styles/tests: src/app/globals.css, scripts/verify-ui.mjs, scripts/verify-flows.mjs
- Source-of-truth principles: PRODUCT.md, DESIGN.md, docs/ASSET_PROVENANCE.md

No production deployment or executable UI changes are included in this documentation-only proposal.
