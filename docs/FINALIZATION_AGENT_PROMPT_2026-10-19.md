# Q Workwear — prompt for the coordinating IDE agent

Continue the Q Workwear build from the owner-review handoff, not from the earlier assumption that visual QA passed.

## Context and starting point

Repository: `kiiromate/q_workwear`; local workspace: `/home/kaze/Projects/q_workwear`.

The review branch is `docs/owner-finalization-review-2026-10-19`, based on `feat/photoreal-showroom-issue-3` at `f3afbf6`. Fetch the review branch and inspect Git status before switching. Preserve unrelated collaboration documents and any other agent's work; do not stash, reset or overwrite it automatically. Create your implementation branch from the review branch so the full handoff is inherited. Do not start from the older `main` build.

Read first:

1. `AGENTS.md`.
2. `docs/OWNER_REVIEW_AND_FINALIZATION_DIRECTIVE_2026-10-19.md`, including section 15 on EN/FR.
3. `docs/review-evidence-owner-followup-2026-10-19/` and the underlying source files referenced by the directive.
4. Existing canonical client/portfolio instructions, interpreted in light of this owner review.

The older `REFERENCE_PARITY_AUDIT.md` contains incorrect descriptions of Afrikanda's navigation and homepage. Its “better for buyers” and image-realism PASS labels are not owner approval. Use the actual reference captures and browser observations.

## Goal and decision rule

Produce a credible, visibly interactive, visually lively and simple Q Workwear site as close as practical to the client's preferred reference: https://afrikandaholdings.com/ (the main site, not just Exotiká).

This is not permission to substitute a static brochure or a generic editorial template. Preserve useful functionality; improve the art direction and buyer experience. Every meaningful departure from Afrikanda's simplicity, navigation or image-led presentation needs a written reason: reference behavior, proposed change, concrete buyer benefit, evidence/demo, trade-off and owner approval. “More modern” is not a sufficient reason.

Keep responsive navigation as straightforward on mobile as on desktop. Purposeful motion must never obstruct navigation, change a focused action unexpectedly, or make buyers wait for a slide. Provide reduced-motion and keyboard/touch equivalents.

## Work to coordinate

1. Correct the evidence baseline. Compare the real reference at desktop/mobile sizes, including image-led opening, desktop dropdown and mobile drawer. Mark observed, proposed and unverified behavior separately.
2. Fix the corporate collection photograph first. The pasted-looking white Q beside the blazer lapel/breast pocket is rejected. Prefer a clean formal exterior and plausible, restrained maker-branding placement. Inspect all copies/crops and usages. The red Q in the model photograph is on the shirt cuff; do not confuse the two images.
3. Review all primary media for garment anatomy, composition, realistic branding and rights. Never require a Q logo on every object. Distinguish the maker's identity from the buyer's uniform branding. Generated imagery is not evidence of real Q premises, staff or commissions.
4. Present a reference-led, image-dominant first screen with purposeful visible interaction, such as a controlled sector slideshow/photo transition and direct category access. Obtain direction approval before detailed integration. Keep actions stable and slides directly selectable; provide pause/reduced-motion behavior where relevant.
5. Redraw the four garment illustrations accurately and consistently, using approved garment references and the official mark only where appropriate. Compact/integrate the interaction so buyers are not asked to browse the same four categories in two large consecutive modules. Keep meaningful SVG interaction; do not replace it with another static grid. Make copy match what the control actually does.
6. Rewrite About using the proposed source-grounded draft as a starting point. Explain the company, offer, buyers and enquiry process in natural English. Do not invent founder biographies, years, factory capacity, guarantees or exact materials. Use real permissioned company imagery or clearly labelled illustrative material. Obtain content approval, then localise it.
7. Add EN/FR internationalization with a clear language switch on desktop/mobile. Localise the complete journey, metadata and accessibility text, including enquiry drafts. Keep static export and existing English routes working. Language changes must preserve equivalent page/category/product context and not silently discard an enquiry. Use one catalogue and a small typed content/message system; do not add paid translation infrastructure.
8. Fix the reproduced issues: inactive tabs point to missing panels; the desktop dropdown remains open when keyboard focus exits; prepared email drafts retain an old name after a field edit. Cover all relevant form fields and the copy fallback, not just the reported name case.
9. Audit Lookbook, FAQs, alt text and metadata for claims unsupported by the portfolio/current offer. Crops do not prove broader garment coverage. Keep illustrative concepts distinct from completed customer work.

## Workflow and gates

First return a concise gap assessment and work plan with owners/dependencies. Then show corrected corporate media, a small art-direction board, accurate garment drawings and the proposed first screen before bulk image generation or extensive UI changes. Ask for approval where the directive requires it. Record missing permissions or facts; do not fabricate them.

Continue with implementation on a follow-up feature branch after the required direction decisions. Preserve Next.js static export, current routes and query/history behavior, minimal dependencies, original logo assets and precise email-draft wording. No CMS, checkout, 3D stack, animation framework or backend enquiry service without a demonstrated requirement.

Run `pnpm typecheck`, `pnpm build`, and the UI/flow suites against a running revised candidate. Add regression tests for the reproduced gaps. Test English/French at 320, 375, 390, 768, 1050, 1051 and 1440px, with keyboard, touch, zoom, portrait/landscape and reduced motion. Include practical browser coverage and report limitations. Check French text expansion and direct static URL loading.

Deliver the actual implementation branch/commit, tested preview access, reference comparisons, screenshots, photo/provenance decisions, approved English/French copy, test results and unresolved approvals. A fresh browser must be able to access the intended review preview, or its protection requirements must be explicit. Keep technical pass, visual acceptance, owner approval and client publication approval separate.

Do not merge to main, promote production, change commercial documents or claim client readiness without the applicable explicit approval. The review handoff authorizes work toward an improved candidate, not a public release.
