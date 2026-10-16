# Q Workwear | Next build directive, 2026-10-16

**Status:** authoritative IDE implementation brief for next build; a plan, not an implemented or client-approved website.  
**Client:** Quddus and Tinah, Q Workwear, Kigali.  
**Site:** https://qworkwear.vercel.app/  
**Repository:** https://github.com/kiiromate/q_workwear  
**Primary inspiration:** https://afrikandaholdings.com/  
**Secondary inspiration:** https://afrikandaholdings.com/exotika/  
**Source presentation:** https://docs.google.com/presentation/d/17BBLdYefkHXjSFnhQ_gHiz89_9gNVpeogLKa_iRkV_Y/edit

## 0. Outcome and decision framework

Create a polished, distinctively Q Workwear **interactive product portfolio and enquiry experience** using the existing Next.js build. The site should be premium enough to show Q/Tinah proudly but frictionless for local B2B buyers. Main goals are: immediate business clarity; simple familiar navigation; tasteful product-led movement; recognizable brand in illustrative photos; real product-sector breadth sourced from the supplied presentation; clear quotation conversion; almost zero operating overhead.

### Confirmed from user-delivered client feedback
- The clients **strongly favor the simplicity, navigation and presentation of Afrikanda Holdings' main site**, not only its Exotiká page. Priority: straightforward information architecture plus visibly interactive experience.
- They want motion and clever navigation, with SVG garments/articles/props that react to hover, focus or click/tap.
- The site's illustrative and placeholder photographs need **Q Workwear branding** on garments or scene props.
- The Business Portfolio deck must inform the copy, products and categories. Its image material may support a categorized lookbook, once reviewed for rights and visual suitability.

### Proposed by design team, therefore subject to client preview
Exact header structure, whether the collection menu expands inline/dropdown, the order of homepage modules, timing/easing of transitions, particular garment outlines, and the number of visible lookbook sectors. Do not falsely present proposals as verbatim client instructions.

### Observations vs unverified assumptions
The Afrikanda homepage publicly exposes a flat-ish main navigation with grouped services/submenus. This supports the desire for plain, scannable navigation. **We have not verified its exact animation source or behavior**; do not invent hover animations as if measured. Browser-review it from the IDE, if possible, and record observed interaction, mobile menu, and responsive states. Recreate the experience principles, not another company's implementation.

## 1. Existing baseline to preserve

- Next.js 15 App Router, React 19, TypeScript, Tailwind 4, `output: 'export'`.
- `src/components/layout/Header.tsx`, `MobileNav.tsx`, `common/Logo.tsx`: currently accessible navigation based on link/menu/dialog primitives; improve, do not regress focus.
- `src/app/page.tsx`, `src/components/home/{Hero,CategoryShowcase,...}.tsx`: photographic homepage and four existing category highlights.
- `src/app/products/page.tsx` with `?category=corporate|hospitality|industrial|branded`, URL/back-forward filter behavior and 16 generic enquiries.
- `src/app/work/page.tsx`: Lookbook, **not** fabricated case studies.
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`: company introduction and `mailto:` quotation fallback with product context.
- `src/content/{site,catalog,pages}.ts`: canonical business and product copy.
- `public/images/logo/`: actual logo variants; never redesign from memory.
- `public/images/showcase/`: five legacy visual slots; replace only after new assets pass QA.
- `scripts/verify-ui.mjs` and `scripts/verify-flows.mjs`: existing smoke checks; update to reflect new behaviour.

## 2. Information architecture: make it simple first

### Primary desktop navigation
- Logo → Home (do **not** require a separate Home item if it creates clutter).
- **Collections** → simple dropdown, disclosed on click/tap and keyboard, not hover-only. Include Corporate, Hospitality, Industrial, Branded Apparel; link to full collection index.
- **Lookbook** → proof-oriented visual browse, but with correctly labeled example imagery; keep `/work` URL.
- **About** → clear locally grounded business story and capabilities from deck.
- **Contact** → business details and email quote.
- Primary persistent CTA **Request a quote**.
Avoid complicated double menus, excessive icons, search/login/cart, unrequested newsletter, scrolling text, or social-proof blocks without evidence.

### Mobile
One obvious Menu affordance and one quote path. Native dialog or comparable focus-safe lightweight pattern. Clear short labels and >44px tap areas, Escape, tab loop/focus return, lock background only while open, close on link navigation. Give the menu a quick 180–250ms entrance; respect `prefers-reduced-motion`. Offer the Collections subgroup as simple links rather than a multi-step accordion if space allows.

### Route preservation
Retain `/products?category=...`, `/work`, `/about`, `/contact`. Never break existing QR/bookmarks or deep-linked quotation context merely for animation.

## 3. Homepage, proposed sections

1. **First fold:** official logo in header; plain-language offer ("Workwear made for your team" or refined deck-grounded version), attractive **branded** atelier/garment image, one obvious Explore collections action and quotation CTA. First paint should work without JS.
2. **Choose your workwear:** four custom SVG garment/article selectors, meaningful selected/highlight state; selection updates description/photo and a route into relevant collection. Desktop mouse hover plus keyboard focus; mobile tap.
3. **Collection photography:** branded editorial images representing corporate, hospitality, industrial, branded apparel. Elegant restrained cropping; category names outside image where legible.
4. **What we make / who we serve:** very concise deck-grounded category/use-case copy; show sector breadth without bloated marketing claims.
5. **Lookbook teaser:** curated 3–6 examples from client-authorized photographs or visibly illustrative brand concepts. Avoid a carousel if simple grid performs better.
6. **How to order + CTA:** identify need → confirm requirements → request quote. Do not imply unverified timelines, MOQs, fixed prices or backend submission.

Motion rules: staggered one-time hero entrance optional; mild 3–5px lift or 1.02–1.04 image zoom; 150–350ms state transitions; one hero moment, not perpetual moving décor. All content accessible and visible if animations do not run. Use native anchors/buttons and CSS first.

## 4. Interactive garments and articles

Follow `docs/INTERACTIVE_GARMENT_SVG_SPEC.md` for detailed contracts. MVP four original vector category representations:
- Blazer/shirt (corporate);
- Chef jacket/apron (hospitality);
- Jacket/overall/high-visibility vest (industrial);
- Polo/cap (branded apparel).

SVG designs must be coherent, ownable, efficient and visually consistent with actual Q logo/colors. Use semantic enclosing button or link and one accessible name per control; preserve visible text navigation. Selection is meaningful only if it surfaces a description/photo/action, otherwise use a direct link. Do not attach a handler to every SVG path, and do not pretend line art is a final garment manufacturing pattern or certified PPE.

For branded apparel, a Q workwear mark may be displayed inside the SVG as a properly sourced/logo-preserving graphic **only if legible**; do not degrade vector performance by embedding full raster images unnecessarily. Simpler schematic garments with brand-red seam accent are acceptable; accurate **photo branding is separately required**.

## 5. Imagery and visual identity

**New requirement:** replacement images and illustrations should communicate Q Workwear at a glance. The previous generic photos are mood-board inputs, not acceptable final visual placeholders unless deliberately branded. Read `docs/BRANDED_MEDIA_LOOKBOOK_2026-10-16.md` before generating, compositing or committing any image.

Logo assets currently in repository:
- `public/images/logo/q-workwear-original.png` (red-image original),
- `q-workwear-red-transparent.png`, `q-workwear-white-transparent.png` (transparent lockups),
- `q-mark-red.png`, `q-mark-white.png` (mark-only crops).

Use brand **red** only as an accent: do not overprint every textile or apply a fake gradient overlay. Logo on appropriate physical surfaces such as embroidery, garment patch, cap front, hang-tag, tote, box or atelier pattern card. Use supplied artwork **as a locked asset**; preserve letterforms, proportions and Q shape.

A clearly branded concept photo is still **illustrative**. It does not become proof of an actual Q-made product, client order or workshop. Avoid or label ambiguous contexts. Do not alter real customer work/third-party photos to falsely insert the Q logo.

Existing image filenames must remain stable while replacing:
`hero-atelier-table.webp`, `cat-corporate-suiting.webp`, `cat-hospitality-culinary.webp`, `cat-industrial-safety.webp`, `cat-branded-apparel.webp` within `public/images/showcase/`.

## 6. Source portfolio content + proposed lookbook

The Business Portfolio deck supplies copy/product examples, **not blanket permission to publish every image**. Read all 42 slides and inspect photographs/background elements visually, not just slide text. Extract into a staging directory or asset manifest, not directly into public site. Create an approval/rights field for each photo. Suggested taxonomy:

| Deck slides | Sector/use | Proposed site destination | Publication gate |
| --- | --- | --- | --- |
| 2–6 | Company positioning/mission/values, uniform/protective clothes vocabulary | About and concise feature copy | edit for clarity; avoid unverified quality/safety certification |
| 7–10 | Front desk / Corporate | Corporate gallery | source, cropping and consent |
| 11–15 | Medical dust coats, tunics, hats | Lookbook's Healthcare subsection (provisional) | availability, photos and medical/safety wording |
| 16–24 | Factory / Technical / Agriculture: overalls, coats, waistcoats, PVC apron | Industrial gallery | availability, photo rights and specs |
| 25–26 | Sports wear | Teams/Sports subsection (provisional) | current offering + rights |
| 27–34 | Protective equipment: head covering, gloves, reflective vests, eyewear | PPE subsection (provisional) | product-specific requirements, no unsupported certifications |
| 35–39 | Cleaning uniforms, gumboots, latex gloves | Cleaning subsection (provisional) | rights, current stock/offer |
| 40 | Our clients | *Internal validation only* | explicit permission for each named logo and commission |
| 41 | Contact | Contact | confirm which phone is public/WhatsApp |
| 42 | Closing | No need to reproduce | none |

Where slide numbers have no text, do not assume there is no image. Inspect slide renders and native images. If source deck is inaccessible in IDE, log the blocker, keep placeholders, and do not fabricate extracted photos or pretend inspection occurred.

Keep four top-level categories initially. Richer sector filters can become a separate lookbook tagging dimension **after** owner approval. No product SKU, price, minimum order, production time or safety standard without evidence.

### Two distinct visual lanes
- **Illustrative studio/concept work:** generated or art-directed Q-branded images, explicitly introduced as examples of possible styles and not as finished Q commissions.
- **Actual Q Workwear work:** original, permissioned client-owned photos with provenance; label category and item accurately, including client identity only if approved.

Do not merge those lanes into a single undifferentiated "Our Work" grid. A mixed Lookbook is acceptable if each group is clearly labelled, e.g. "Product inspirations" versus "Selected work" after genuine examples exist.

## 7. Content and commercial accuracy

The deck describes a Kigali local uniforms manufacturer across office, construction, trades, hospitality, schools and more. Refine the English for visitor comprehension, but preserve the material reality without promises not made by the client. Email `qworkwearsolution@gmail.com` appears in source and code. Deck slide 41 also shows two phone numbers but neither is confirmed for public publication/WhatsApp. Obtain owner sign-off and test; only then enable call/WhatsApp links.

Enquiry form currently opens email-client draft and does not send automatically. Keep precise wording and fallback (copy draft, direct email). Never mislabel an email draft as submitted. Clear CTA from every product and lookbook item; destination should preserve selected sector/product where practical.

## 8. Sequenced build directives for IDE agents

### P0 | Audit and source inventory (first commit)
- Inspect codebase, current nav and all image slots; compare repo `DESIGN.md` and actual UI.
- Verify official logo variants against header sizes and color backgrounds.
- Audit reference homepage navigation visually in IDE, record precisely observed interactions; do not copy.
- Create `docs/LOOKBOOK_ASSET_MANIFEST.md` from source deck audit with source slide, thumbnail/asset, classification, rights, location, approval, and expected public path.
- Write a short delta log: existing implemented vs missing vs blocked. No product rebuild until audit completed.

**Gate:** reviewed logo inventory, deck map and decision ledger exist.

### P1 | Branded media production and QA
- Use supplied source photos/concepts. Replace existing placeholder files only after logo-integrity, realism, crop and rights review.
- Generate a clean unbranded base if needed, then realistically **composite exact Q logo files** as a separate reproducible design step. Prefer hand/graphics editing over model-drawn wordmarks; keep master + WebP export. Keep source/prompts and attribution.
- Use a temporary tagged concept placeholder if actual branded assets are not yet ready. Never claim a generated image is actual output.
- Ensure all 5 existing placements and 2× mobile/desktop crops work.

**Gate:** visual review and provenance update; no distorted wordmark or fake Q premises.

### P2 | Navigation + hero refactor
- Preserve shared header, enhance grouped Collections menu, compact desktop hierarchy and mobile drawer.
- Add one purposeful intro animation and better CTA hierarchy; no layout shift.
- Keep focus/keyboard/mobile, visibility with reduced-motion/JS delayed.

**Gate:** all routes accessible, navigation works at all widths, no hidden CTA.

### P3 | SVG category explorer
- Four custom SVG category objects and shared data-driven selector bound to `src/content/catalog.ts`.
- Hover/focus/tap responds, accessible state and clear selected description + CTA; touch usable.
- Avoid new dependencies unless a measured need justifies them.

**Gate:** four working deep links, semantic focus, reduced-motion fallback, no runtime overhead surprise.

### P4 | Lookbook + product/context alignment
- Transform `/work` into curated sector/product lookbook with real approved imagery and labelled concepts; preserve URL.
- Use deck sections only after visual review, rights, product availability and credible item names are checked.
- Revise About/sector copy, product enquiry wording and product tags without inventing stock or certification.
- If no approved PPT pictures, ship a well-designed concept-only lookbook with transparent labels; record missing assets and ask for approval.

**Gate:** every public visual has manifest entry and proper designation; all copy supported.

### P5 | End-to-end verification + client preview
- `pnpm typecheck`, `pnpm build` and browser UI/flow tests. Add tests for nav submenu (desktop, mobile, keyboard), SVG focus/tap, selected context, reduced motion, image 404s, incorrect contact number and quote draft.
- Check 320, 375, 390, 768, 1050/1051, 1440 widths; assess color contrast and focus ring on red/dark surfaces. Watch asset bytes, LCP and unnecessary hydration.
- Demonstrate before/after mobile and desktop screenshots, preview deployment if explicitly authorized, QA log and open approvals. Request Q/Tinah review before shipping production.

**Gate:** working and tested static build; no assertion of public launch without URL check.

## 9. Non-goals

Not a store, no cart, checkout, sign-in, back office, inventory sync, CMS, video background, WebGL, Three.js, heavy GSAP/Framer stack without need, automatic email submission, unsupported client testimonials or social accounts. Design polish and reduced-click browsing over quantity of features. No changes to commercial agreement/invoice as part of this brief.

## 10. Definition of done

- Main-site Afrikanda reference translated into Q-original, readable, responsive navigation.
- Purposeful visible interactive SVGs and animations; device- and keyboard-friendly.
- Branded, authentic-logo illustrative media in approved placement; all provenance recorded.
- PPT-covered sectors analyzed and approved usable photos incorporated into labelled lookbook, or explicitly blocked with traceable asset requests.
- All existing pages, category URLs and email-draft flows still work.
- Typecheck, static build, automated checks and hands-on responsive review passed or failures documented.
- No fabricated evidence, certification or performance claims; owner reviews preview.

**Agent final report:** commits, files, screenshots, tested commands/results, what is awaiting approval, preview URL (if one was actually produced), and next prioritized work.
