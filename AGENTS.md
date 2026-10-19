# Q Workwear | IDE agent instructions

> **BRANDING REALISM FOLLOW-UP — 2026-10-19:** Read [Branding method and scale correction](docs/BRANDING_METHOD_AND_SCALE_CORRECTION_2026-10-19.md) with the finalization directive. Reassess branding on every active image. C01 corporate and IND03 zipper-detail branding are rejected; use a clean, unbranded IND03 detail as the preferred correction. Choose embroidery, print, sewn/woven label, patch or no logo per garment and purpose. Correct physical scale and method-specific appearance are mandatory; a detailed scene plus an official logo overlay is not acceptance. Do not bulk-apply the same embroidery simulation or force marks onto every photograph.

> **LATEST OWNER REVIEW — FINALIZATION, 2026-10-19:** Read [Owner review and finalization directive](docs/OWNER_REVIEW_AND_FINALIZATION_DIRECTIVE_2026-10-19.md) before finalizing this build. The owner has reopened visual acceptance: correct the corporate blazer branding, improve garment illustrations, simplify duplicate browsing and rewrite About. The previous reference audit misdescribes the actual Afrikanda navigation/layout; its visual PASS/parity claims are not approval. Use the new live reference evidence and acceptance gates. Owner clarification: visibly interactive, non-static presentation and simple Afrikanda-like navigation are priorities; departures require demonstrated buyer value and owner approval. Include the EN/FR localization work package in section 15, with static export and existing URLs preserved. This is a review directive, not permission to merge or change production.

> **CURRENT VISUAL CORRECTION, 2026-10-19:** The previous build passes many functional tests but FAILED owner visual review because the "branded" images are geometric PIL posters rather than photorealistic garments. **Read these documents FIRST** before any more code or asset changes:
> 1. [Client/reference acceptance contract](docs/CLIENT_REFERENCE_VISUAL_ACCEPTANCE_2026-10-19.md): the clients strongly prefer https://afrikandaholdings.com/ and significant deviations need documented customer value.
> 2. [Photoreal brand photography plan + 29 shot-specific prompts](docs/PHOTOREAL_Q_WORKWEAR_IMAGE_PRODUCTION_2026-10-19.md): actual garments, natural authentic embroidery, source rights and visual QA.
> 3. [Corrective agent execution plan](docs/CORRECTIVE_BUILD_EXECUTION_2026-10-19.md): ordered waves, gates, screenshots, manual review and handoff.
> 4. [Reference parity template](docs/REFERENCE_PARITY_AUDIT.md), [image registry](docs/VISUAL_ASSET_REGISTRY.md), [client review pack](docs/CLIENT_REVIEW_PACK_2026-10-19.md): fill with verifiable evidence, don't assert completion prematurely.
>
> **Precedence:** These 2026-10-19 correction directives override older directions that reused five geometric illustrations or considered logo compositing alone sufficient. **Do not merge/deploy unapproved work.** Implement on a separate branch from the updated plan; do not change production. Existing functionality is a baseline to preserve, not a reason to maintain the wrong visual system.


You are implementing an **interactive, branded, low-maintenance quotation showroom** for Q Workwear, Kigali. Read this file **before changing code**.

## Required reading, in order

1. [Next-build handoff](docs/NEXT_BUILD_AGENT_HANDOFF_2026-10-16.md): canonical client feedback, architecture, implementation phases and acceptance tests.
2. [Branded-media / lookbook plan](docs/BRANDED_MEDIA_LOOKBOOK_2026-10-16.md): source hierarchy, original Q logo, photographic placeholders and presentation-deck reuse.
3. [Interactive SVG spec](docs/INTERACTIVE_GARMENT_SVG_SPEC.md): custom React/SVG object interaction.
4. [Earlier client feedback](docs/CLIENT_FEEDBACK_2026-10-15_INTERACTIVE_SHOWROOM.md): decisions and source notes, subordinate to the newer handoff.
5. `PRODUCT.md`, `DESIGN.md`, `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT_STATUS.md`, `docs/ASSET_PROVENANCE.md`, `IMAGE_GENERATION_PROMPTS.md`.

**Precedence:** confirmed client direction in the 2026-10-16 handoff > older proposal documents. Do not treat earlier "no logos" image prompts as final: their *composition* is reusable; imagery now requires authentic Q Workwear brand treatment.

## Client's non-negotiable direction

- **Reference: https://afrikandaholdings.com/** (homepage), not just the Exotiká subpage. Aim for its simple, direct navigation and clear visual sections; produce Q Workwear's *own* interaction design, without copying code, media or brand.
- First impression should be elegant, lively and obviously about Q Workwear uniforms. Add purposeful motion and interacting garment/article illustrations, **not** flashy animations in every section.
- Branded placeholders: use the **actual Q Workwear logo assets from `public/images/logo/`** in natural placements on illustrative apparel, fabric tags, aprons, hats, packaging or props. Never let a generative model invent or distort the logo. Composite the original mark post-generation where needed.
- Use the shared [Q Workwear Business Portfolio](https://docs.google.com/presentation/d/17BBLdYefkHXjSFnhQ_gHiz89_9gNVpeogLKa_iRkV_Y/edit) for accurate wording, sector/product coverage and *potential* lookbook images. Before exporting/reusing a photo, inspect the deck visually, track its slide/source and confirm permission.
- No fake commissions, unapproved client logos, misleading PPE/certification claims, invented commercial terms, unidentified third-party images passed off as Q-made products, or claims that an enquiry has been submitted.
- Preserve static export, minimal dependencies, quotation intent, deep links, mobile/keyboard access and low recurring cost.

## Engineering workflow

1. Audit code and project docs first. Record present state, duplicate instructions, unused assets and constraints. Do not blindly rewrite a functional page.
2. Write a short implementation plan mapping **P0 through P5** in the handoff to files, risks and verification commands. Commit in small coherent slices. Prefer a feature branch and PR; avoid direct live deployment.
3. Implement brand/media strategy, navigation/hero, SVG explorer, content/lookbook and polished enquiry flow in that order. An approved media replacement may remain pending while the UI works with placeholders.
4. Run: `pnpm typecheck`, `pnpm build`, `pnpm test:ui` and `pnpm test:flows`. Existing UI scripts require a running local/static server; inspect their instructions before concluding a failure is an app bug.
5. Verify mobile widths including 320, 375, 390, 768 and desktop 1440px; keyboard and screen reader semantics; focus return; reduced motion; click/tap behaviours; image crop, alt text, loading; original enquiry URL and mail draft behaviour.
6. Report what changed, files/assets touched, before/after screenshots or preview, tests with actual results, unresolved permissions, and the next decision the owner must make.

## Scope and safety

- Current stack: Next.js App Router, React, TypeScript, Tailwind, local fonts, static export. Keep it unless actual requirements prove insufficient.
- Keep `src/content/catalog.ts` and `src/content/site.ts` as the canonical business/content data sources; do not create a second manually maintained catalogue.
- Keep routes `/`, `/products`, `/work`, `/about`, `/contact` and existing category/search query behaviour. Reshape nav visually if needed but preserve URLs.
- Prefer SVG + CSS transforms / transitions and semantic React controls. No WebGL, large animation libraries, CMS, database, checkout, authentication or unnecessary subscription.
- **Do not claim deployment or client approval without evidence**. Nothing in this planning document grants permission to display third-party portfolio assets as completed Q Workwear commissions.

## Completion standard

A buyer can understand the offer, browse or interact with real-looking branded uniform examples, select a category or garment, and launch an order-specific quote in ≤3 purposeful interactions from Home. The experience remains clear on mobile and works with animation disabled. Visual appeal matters, but no invented claims or persistent maintenance burden are accepted.
