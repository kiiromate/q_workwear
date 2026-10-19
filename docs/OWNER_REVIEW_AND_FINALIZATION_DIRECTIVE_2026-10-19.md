# Q Workwear — owner review and finalization directive

**Decision: keep the functional build, but reopen visual acceptance. The current candidate is not ready for client approval or production.**

- Review date: 19 October 2026.
- Reviewed source: `feat/photoreal-showroom-issue-3`, commit `f3afbf6`.
- Reference: <https://afrikandaholdings.com/> — the main site, not only Exotiká.
- Scope: analysis and instructions for finalizing agents. This review does not authorize a production deployment, merge, paid service, or new commercial promise.
- Authority: current owner feedback and direct evidence supersede earlier self-awarded visual PASS/parity statements. Retain the underlying accessibility, route, rights and static-export constraints in `AGENTS.md`.
- Status: **REVISIONS REQUIRED**. Proposed design choices and replacement copy below still require owner approval; they are not quotations from the clients.

## 1. Summary and recommendation

The work has improved substantially. It has coherent typography, real-looking garment concepts, understandable routes and a useful quotation handoff. Preserve that progress. The remaining problem is not a missing animation library or a lack of features. It is the credibility of the imagery, fidelity to the actual reference, duplicated browsing, and language that promises more specificity than the page provides.

Priorities, in order:

1. Correct the corporate collection photograph and inspect branding across every active image. An official logo in the wrong place is still wrong.
2. Correct the reference audit before using it to justify another layout. Its existing description contradicts its own screenshots and the live site.
3. Make the opening experience more photographic and direct, with familiar navigation. Do not confuse clean styling with reference fidelity.
4. Retain purposeful garment interaction, but redraw the illustrations accurately and reduce the duplicate category-selection footprint.
5. Rewrite About as a clear company introduction. Remove awkward values language, inflated claims and implied proof from generated workshop imagery.
6. Resolve the smaller quotation, navigation and accessibility gaps found in this review.

**Recommended direction:** a more image-dominant first screen; one primary collection-browsing module; a compact, carefully drawn garment interaction that provides distinct value; short, factual company copy; a direct quotation path. Do not rebuild the application or add a second catalogue.

## 2. Evidence, limits and confidence

### What was examined

- Read the current instructions, design contract, handoff, SVG specification, reference audit, image register and client review pack.
- Read Home, About, Collections, Lookbook, contact, header/mobile navigation, garment data/artwork/explorer, catalogue and the logo-compositing script.
- Read the Business Portfolio presentation's extracted text. Its text supports business positioning and broad product coverage, not image-publication rights or every claimed material specification.
- Opened the live Afrikanda homepage in Chromium at desktop and mobile sizes; opened the mobile navigation and hovered a desktop parent destination.
- Observed the reference's active slide change without input between two timed observations. Autoplay is observed; an exact cycle duration was not measured.
- Inspected existing review screenshots and current corporate/model assets visually, then captured the local static export on desktop and mobile.
- Matched the exported corporate collection and corporate model files to `public/` using SHA-256. This validates those reviewed assets, not the freshness of every exported source module.
- Reproduced missing tab-panel targets, an open dropdown after focus leaves it, and stale prepared-email data after changing a buyer name.

### Access limitation

The Vercel preview redirects a fresh unauthenticated browser to Vercel login. This review did **not** authenticate, bypass protection, or claim a public end-to-end preview check. Current page observations use the existing local `out/` export, corroborating source and saved evidence. The live reference was directly accessible. A future client handoff must test preview access in a fresh browser, not only in the owner's signed-in session.

### Evidence folder

`docs/review-evidence-owner-followup-2026-10-19/`

| Evidence | Files |
| --- | --- |
| Live reference, desktop and later slide | `reference-1440.png`, `reference-1440-later.png` |
| Reference desktop dropdown | `reference-desktop-disclosure.png` |
| Reference mobile and menu | `reference-390.png`, `reference-390-menu.png` |
| Current local Home and mobile menu | `q-local-home-1440.png`, `q-local-home-390.png`, `q-local-menu-390.png` |
| Current Collections, Lookbook, About | `q-local-products-1440.png`, `q-local-work-1440.png`, `q-local-about-1440.png` |
| Current garment module | `q-local-explorer.png` |
| Route results and observed slide change | `local-and-interaction-evidence.json` |

Full-page captures can place a sticky header or focused skip link at the capture scroll position. Do not classify that screenshot artifact as a production overlap defect without reproducing it in an ordinary viewport. Capture future review images from the top, with focus state recorded.

Confidence labels used below:

- **High:** owner feedback, direct source, visual observation or reproduced behavior.
- **Medium:** design recommendation supported by that evidence, but buyer/client preference is not yet validated.
- **Low/unverified:** business or material claim requiring confirmation. Do not publish it as established fact.

## 3. The reference baseline is materially wrong in the existing audit

**Priority P0. Confidence: High.**

`docs/REFERENCE_PARITY_AUDIT.md:16–18,30–36` describes an About Us / Subsidiaries / CSR navigation and a Hero → Who We Are → three-subsidiary-card sequence. That is not what the current reference or the stored `reference/afrikanda-1440-full.png` shows.

Observed live desktop navigation:

**Home · Hospitality & Home Collection · Interior Design · Consultancy · Exotiká · Contact Us**

The page is dominated by a full-viewport image-led slider beneath a compact header, with a short overlaid category heading, supporting sentence and Learn More action. The active banner changed from Hospitality & Home Collection to Consultancy during timed observation. A desktop hover over Hospitality & Home Collection revealed a simple two-link dropdown: Hospitality Collection and Home Collection. The mobile view has a left-side navigation drawer with grouped categories and disclosure controls.

### What to transfer to Q Workwear

- Immediate visual emphasis on what the business offers.
- Short, recognisable destination labels and shallow navigation.
- A clear relation between a large visual, a category name and a next step.
- Simple, predictable category discovery on desktop and mobile.
- Fewer competing explanations before the visitor can choose a destination.

### What not to copy

Do not copy reference images, code, identity or wording. Do not import its newsletter, login/search utilities or every visual/accessibility weakness. Do not infer keyboard support, hidden link destinations or reduced-motion behavior from screenshots. Matching navigation principles does not require reproducing hover-only interaction.

### Required correction to the evidence trail

Rewrite the reference matrix against actual captures. Replace unsupported “BETTER FOR BUYERS” awards with **proposed advantage — awaiting owner validation** unless a real task demonstration supports the claim. An accessible menu is valuable, but does not prove a preferred visual direction. “No repeated photograph” is not evidence of “no duplicated browsing task.”

The prior review pack's photographic-realism PASS is reopened by this owner review. Do not use `SELECTED_INTERNAL` or a script's successful output as substitute visual approval.

## 4. Corporate photograph: fix placement and branding logic

**Priority P0. Confidence: High for the observed defect; Medium for the preferred replacement.**

### Observed issue

In `public/images/showcase/cat-corporate-suiting.webp` (`C01`), a white Q mark sits on the blazer's chest body panel immediately beside the lapel and around the breast-pocket area. It is not convincingly integrated as embroidery or a physical badge. It reads as a pasted or printed mark. The owner describes the result as lapel/coat printing and rejects it. The exact panel boundary does not change the correction needed.

The source pipeline places this mark at a fixed pixel coordinate in `scripts/composite_photoreal_assets.py:236–252`. The same output is copied into showcase, editorial and lookbook paths. Fixing only the homepage would leave the same visual defect in Collections and Lookbook.

Do **not** condemn every corporate image indiscriminately: the small red mark in `hero-model-detail.webp` (`H03`) is visibly on the light-blue shirt cuff, not the grey jacket lapel. It still needs normal realism review, but its location is materially different from C01.

### Required correction

1. Return C01 to candidate/rejected status for visual purposes. Start from its clean master or replace the photograph; do not paint a second mark over the bad one.
2. Remove the exterior Q mark from the formal blazer unless a specific, plausible branded-uniform treatment is approved.
3. Preferred corporate presentation: clean tailored blazer and shirt, with Q identity carried by an interior maker label, a plausible garment tag or other appropriate secondary surface. The website itself already establishes the brand.
4. If an exterior emblem is wanted for a particular uniform, use an explicitly approved placement and physical application. A lapel pin is an optional proposal, not permission to add one everywhere.
5. Show a clean version and one restrained branding alternative at actual collection-card size. Choose on credibility and client preference, not logo count.
6. Update all affected copies, crops, captions, alt text and registry entries together.

### Two identities must remain distinct

**Q Workwear is the maker. The purchasing organisation has its own uniform identity.** Showing Q on every chest can accidentally suggest that buyers must wear the supplier's logo. Maker labels/tags and buyer-facing embroidery examples have different purposes. Explain custom branding as an option; never invent a customer logo or imply an unapproved commission.

### Acceptance

No visible printed-looking mark on the formal blazer lapel/chest in the approved corporate cover. Any retained branding has an obvious, plausible application and scale. Owner approves the actual rendered crop, not merely a full-resolution master. All usages of C01 are checked.

## 5. Image quality needs an editorial standard, not blanket logo compositing

**Owner follow-up: branding realism is reopened across all active images.** Read the mandatory [branding method and scale correction](BRANDING_METHOD_AND_SCALE_CORRECTION_2026-10-19.md). It adds a method-by-garment matrix, explicit rejection of IND03's miniature Q overlay, scale/detail checks and a small-batch review workflow. Embroidery, print, labels and patches must not receive an identical generic treatment; no logo is preferable where appropriate. The scenes may remain useful while their branding is rejected.

**Priority P0 for defective primary imagery; P1 for wider refinements. Confidence: High on pipeline limitations; Medium on art direction.**

The change from polygon posters to photographic concepts is useful. It does not establish that every image is convincing, suitable or client-approved.

### Pipeline limitation

`composite_embroidered_mark()` (`scripts/composite_photoreal_assets.py:46–115`) resizes and rotates a graphic, modulates its colour with local luminance, blurs edges and adds a small shadow. It does not implement garment-surface displacement, true perspective warping or seam/occlusion masks. Therefore the script's output and comments do not prove a physical embroidery effect. No universal opacity or rotation fixes inappropriate placement.

### Image review requirements

Review each active image for:

- Correct garment identity, proportions, collar/lapel construction, sleeves, fastenings, pockets and seams.
- Plausible material appearance without treating appearance as proof of fibre composition.
- Natural hands, tools, mannequin supports and garment staging.
- Appropriate logo surface, orientation, scale, attachment and relationship to folds/seams.
- Consistent exposure, colour, camera treatment and subject scale across the collection set.
- Enough usable resolution for the intended crop; no weak source rescued only by upscaling.
- Accurate alt text and caption: describe what is visible, not a factory capability inferred from it.
- Appropriate illustrative disclosure and documented rights/approval.

### Shot direction

| Placement | Recommended subject | Avoid |
| --- | --- | --- |
| Corporate cover | Clear, credible blazer/shirt ensemble; clean exterior tailoring | Floating chest/lapel logo, ambiguous pocket construction |
| Hospitality cover | Recognisable chef/service garments with a plausible apron and restrained branding | Unattached straps, decorative hardware presented as a guaranteed option |
| Industrial cover | Clear workwear silhouette and practical garment details | Suggesting certified protection from reflective-looking material alone |
| Branded apparel | Readable polo/T-shirt/cap and realistic embroidery or print treatment | Distorted marks, generic fake logos, supplier logo confused with customer branding |
| Home detail | A genuinely informative garment or branding close-up | Random Q stamp near a zipper merely to brand another frame |
| About | Permissioned real business/team/product image where available | A generated workstation presented as Q's actual facility or staff |

Use local/client-relevant casting where people appear, without implying generated people are employees. Do not fabricate workshop capacity, production history, customers or manufacturing proof.

### Brand restraint

The client wants a recognisably branded website, not a logo on every object. A macro seam or material photo can remain unbranded if that is more credible. Use the supplied artwork exactly where needed. Do not redraw a roughly Q-shaped symbol and describe it as the official mark.

### Selection and sequencing

Produce a small, useful candidate set before replacing the full gallery. Prioritise the corporate cover, the opening image and the four collection gateways. Reuse crops deliberately, but record parent masters: a crop is not a new garment or wider sector coverage. C03 derives from H03, HOS03 from HOS01, and BR03 from BR01. The review must not count these as independent production evidence.

Photo acceptance requires side-by-side original/edited crops, the website-scale desktop/mobile view, and owner sign-off. Reject poor integration even when the official asset is mathematically unchanged.

## 6. First impression and navigation: become closer to the actual reference

**Priority P1, direction approval required before detailed implementation. Confidence: Medium.**

The current Q homepage is a long, warm-white editorial page. Its headline sits above a wide craft-table photograph, followed by multiple distinct modules. The reference is much more immediately image-dominant. The current approach is valid as a design, but is not automatically what the client asked for.

### Recommended opening treatment

Present one dominant, credible uniform photograph with a short business promise, an obvious collection action and a quieter quotation action. Show garments as the offer, not only anonymous hands as manufacturing theatre. Keep the logo and navigation legible. Use a contrast-safe text position; avoid making every image a dark gradient card.

Before building the final treatment, show two still compositions using approved media:

- **Recommended: reference-led opening.** Large image-led first screen, concise message, direct sector access, restrained lower-page content.
- **Alternative: improved current editorial opening.** Keep the split typography, increase meaningful garment prominence and compact the repeated browsing below. This is a deliberate departure and needs owner approval.

**Owner clarification: the final experience must be visibly interactive, visually lively and simple like Afrikanda — not a static brochure.** A static image may be a fallback or part of a composition, but is not a reason to omit purposeful visible interaction. Show a reference-led opening with a controlled sector slideshow/photo transition alongside direct category access, and retain polished garment interaction. The exact slideshow behavior remains a proposal for approval, not a license for endless decorative movement.

Every category must also be reachable directly. Supply clearly labelled keyboard-accessible slide controls, a pause control if auto-advancing, and a reduced-motion alternative that stops automatic motion. Do not force users to wait for a slide. Keep actions and focus stable while the image changes. Do not preload a gallery of large images into the first screen.

Any departure from the reference-led direction must include: the observed reference pattern; proposed change; concrete buyer benefit; evidence or demonstration; accessibility/performance trade-off; and owner approval. “More modern,” “cleaner,” or an implementer's preference is not a solid reason. Do not present a static-only direction as an equivalent substitute without this approval.

### Navigation requirements

Preserve `/`, `/products`, `/work`, `/about`, `/contact` and `?category=` behavior. Retain the current shallow information architecture. Keep Corporate, Hospitality, Industrial and Branded apparel named consistently across menus, filters, image captions and the garment control.

The current Collections disclosure is functional and should not be replaced merely for novelty. If closer reference behavior is requested, a parent destination plus a separate accessible disclosure is one option. Do not make one control unpredictably both navigate and expand. Hover may supplement, but never replace click/tap/keyboard access.

Mobile must offer direct category links, a clear close action, contained focus, Escape handling, focus return and readable touch targets. A flat list may feel closer to the reference than the current two-by-two submenu; preview that choice rather than assuming a redesign is necessary.

### Small reproduced navigation gap

After opening the desktop Collections menu and tabbing past it to About, the menu remains visible. `Header.tsx:19–45` closes on outside mousedown, Escape or pathname change, not focus leaving. This is not automatically a WCAG failure, but it leaves a stale panel over the page. Close it when keyboard focus exits the disclosure region, without breaking movement between trigger and child links. Test both pointer and keyboard paths.

## 7. Garment details and branding: redraw and reduce duplication

**Priority P1. Confidence: High for defects and duplication; Medium for final composition.**

### Current problem

`HomePage` renders `CategoryShowcase` immediately followed by `GarmentExplorer` (`src/app/page.tsx:11–13`). Both ask the buyer to choose the same four families. Different photos do not eliminate that duplicated task.

The second module adds four large illustration cards and a large detail panel. Its copy promises users can “inspect construction details, branding placements, and tailoring options” (`GarmentExplorer.tsx:41–45`), but the interaction only swaps a sector paragraph, checklist and photograph. There are no corresponding detail-selection controls or inspection views.

The illustrations are visibly less resolved than the photography. Specific source issues include:

- Corporate shirt/collar elements render before an opaque blazer body and lapel shape, obscuring much of the intended inner construction (`GarmentArtwork.tsx:26–74`). The combined geometry looks rigid rather than like a believable garment flat.
- The hospitality strap arch sits above the bib without a convincingly continuous attachment (`:107–132`). Separate garments are combined without clear layering.
- The industrial drawing emphasises high-visibility bands while the associated selected photograph shows a plain navy coverall (`:166–225`; `garments.ts:51–65`). They should represent the same example or clearly identify the distinction.
- Polo and cap use inconsistent perspectives. The polo emblem is a hand-drawn approximation, while the cap has a generic circle/patch rather than the supplied mark (`:265–298`).

These are category illustrations, not manufacturing patterns. Accuracy means recognisable garment anatomy and coherent styling, not adding every stitch at thumbnail scale.

### Recommended resolution

Keep the requested garment interaction, but give it a distinct and smaller role:

1. Make the photo-led collections the main category navigation.
2. Reduce the second module to a compact icon-and-label control with one concise selected preview, or integrate the accurate garment control into the primary collection module.
3. Use garment flats drawn from approved reference garments. Match silhouette, neckline/collar, lapel, sleeve, placket, pocket and closures to the chosen photographic counterpart.
4. Use consistent viewBox, visual scale, perspective and line-weight hierarchy. Remove detail that becomes noise at phone size.
5. Make selected, hover and keyboard-focus states equally clear. Hover must not change a user's selected item unexpectedly.
6. If the module only selects categories, call it **“Explore uniform styles”** and say **“Choose a category to see an example and discuss your team's requirements.”** Do not promise an inspection tool it is not.
7. If a genuine branding-detail interaction is retained, limit it to useful, evidenced detail choices, such as a cuff-label photo versus an approved chest-embroidery example. Use semantic labelled controls, not dozens of independently interactive SVG paths. Do not turn this into a configurator.

Avoid adding hotspots, zoom, 3D rotation or extra state merely to justify keeping the oversized module. Better artwork and clearer purpose matter more than more interaction.

### Accessibility issue requiring correction

`GarmentExplorer.tsx:64,83–88` gives each tab a different `aria-controls` target, but only mounts the active panel. Direct DOM inspection found the Corporate target present and the other three absent. If tabs remain, every relationship must resolve appropriately in every state, with complete focus and panel semantics. Alternatively use simpler controls whose semantics match the actual behavior. Preserve the existing arrow/Home/End support if retaining tabs; test announcements manually as well as with automated checks.

### Acceptance

A buyer sees one obvious category-browsing task, not two large consecutive versions. Each illustration is recognisable without its label and anatomically credible beside its photo. Selection, image, caption and destination stay aligned. The module remains useful with motion disabled. Owner approves both desktop and mobile rendering.

## 8. Page-by-page refinements

### Home

**Priority P1. Confidence: Medium.**

- Keep the understandable proposition, but bring actual uniforms into the opening emphasis.
- Give Explore collections and Request a quote distinct hierarchy rather than repeating equally weighted choices throughout adjacent modules.
- Remove the large duplicate browsing footprint; retain only useful garment interaction.
- Keep the short ordering explanation if it accurately reflects the business workflow.
- Make any generated craft imagery clearly illustrative where it could otherwise be mistaken for operational proof. The only current illustrative disclosure is on Lookbook, while concepts appear elsewhere too.
- Do not add testimonials, client counters, years of operation or capacity statistics to compensate for missing real evidence.

### Collections (`/products`)

**Priority P0 corporate image; P1 other refinements. Confidence: High/Medium respectively.**

- Correct the corporate image everywhere it is used.
- Keep fast category filtering, stable URLs and browser Back/Forward behavior.
- Show a recognisable category image, a short offer description and clear garment-enquiry actions. Specific garment photos should only be added when useful and approved.
- The broad sector photograph does not prove every textual garment style is pictured. Avoid that implication.
- Do not show faux stock, prices, availability or specifications. Current catalogue items are enquiry starters, not verified SKUs.
- Replace generic alt text such as “Corporate garment styles” with a concise visible description where it adds meaning (`products/page.tsx:29`).
- Include an unobtrusive concept disclosure on this page while its imagery is illustrative.

### Lookbook (`/work`)

**Priority P1. Confidence: High for copy/metadata observations; Medium for composition.**

- Curate the strongest images; do not treat a fixed number of cards as a quality target. Preserve meaningful main-sector detail coverage required by the design contract.
- Group garment examples and detail studies intelligibly. A crop can enrich a story without pretending it broadens the product range.
- Shorten technical captions: fibre composition, heavy-duty performance, brass hardware, exact stitch construction and breathability require support beyond image appearance.
- Keep category and specific-enquiry links consistent. Prefer an identifiable garment over a material detail as the enquiry subject.
- Preserve the disclosure and consider plainer wording: **“Illustrative uniform concepts, not photographs of completed customer orders. Final design and specifications are agreed for each order.”** Obtain approval for the exact wording.
- Amend metadata claiming styles are “crafted by Q Workwear in Kigali” (`work/page.tsx:8`) where it could imply this generated gallery documents actual production.
- Do not add Healthcare/Security/Schools imagery solely for numerical breadth. Confirm the offer and rights first.

### Contact (`/contact`)

**Priority P1 for correctness; P2 for presentation. Confidence: High.**

- Preserve “Open email draft” and the instruction to send in the email app. This is not backend submission.
- Keep the direct email and copy fallback; do not invent a WhatsApp number or promise response times.
- Keep the chosen garment and relevant context in the form and prepared message.
- **Fix stale drafts:** after preparing a draft, changing the name leaves “Open draft again” and “Copy enquiry” using the old name. Reproduced with an initial Review Buyer name followed by Changed Name. `contact/page.tsx:17,24–35,46–55` invalidates the draft on garment/details edits, but not name/email/quantity edits. Invalidate or regenerate on every relevant field change. Test name, email and quantity separately, plus the copy fallback.
- FAQ claims about fitting samples and consultations (`content/pages.ts:33–34`) require confirmation. Asking for requirements is safe; saying samples are always available or ensure an exact fit is a stronger commitment.
- Keep PPE language conditional on product-specific requirements. Do not turn the portfolio's broad safety aspirations into a certified-protection promise.

## 9. About: replace awkward corporate language with a credible company story

**Priority P1. Confidence: High on source/copy observations; Medium on proposed wording.**

### What is not working

`src/content/pages.ts:3–12` largely polishes the deck's wording without resolving its problems:

- “high-quality equipment,” “safety, comfort, and professional confidence” and “competitive prices” are broad claims, not a useful account of the business.
- “Realistic execution” and “Efficient responsibility” remain awkward literal values labels. They do not tell a buyer what will happen.
- The section heading “Quddus & Tinah.” (`about/page.tsx:30`) implies a personal introduction, but the text describes sectors and garments, not their individual roles or story.
- A generated artisan image can appear to be proof of the company's actual workshop or staff. It is not.
- Three prominent values cards consume space without answering the buyer's core questions: what do you make, who is it for, and how do we start?

The presentation supports Q Workwear as a local uniform manufacturer and its broad sector range. It does not supply a founding date, individual biographies, workshop capacity, guaranteed turnaround or exact fabric capabilities. Do not invent these to make About sound established. Leadership by Quddus and Tinah is in the project handoff, but roles, founder status and publishable bios still need confirmation.

### Proposed page structure

1. One clear company introduction.
2. A short description of the teams and garment needs served.
3. A practical explanation of what a buyer should discuss.
4. Optional real leadership introduction, only with approved roles/copy/photo.
5. A direct quotation CTA.

Prefer a brief editorial paragraph or simple list over another dashboard of values. If the client specifically wants the values retained, translate the intention into plain buyer-facing language and obtain approval before renaming them.

### Suggested replacement copy — draft for owner/client approval

**Heading**

> Uniforms for the way your team works.

**Introduction**

> Q Workwear is a Kigali-based uniform manufacturer serving offices, hospitality businesses, industrial teams, schools and other organisations. We make uniforms and team apparel to suit different roles, working environments and brand identities.

**Section: Start with your team's needs**

> A reception team, a kitchen crew and a workshop need different clothing. Tell us who the uniforms are for, the garments you have in mind and your branding requirements. We can then discuss the options for your order.

**Section: Plan your uniform order**

> Share your approximate quantity, preferred colours and target date. Reference photos or an existing uniform can help explain what you need. Contact Q Workwear to discuss the details and request a quotation.

**CTA**

> Discuss your team's uniforms.

Optional leadership sentence, only after approval:

> Q Workwear is led by Quddus and Tinah in Kigali.

Do not label that sentence a founder story. If a real founder story is wanted, obtain their roles, origin and approved account first. The proposed draft avoids claiming a particular fitting service, exact material, price advantage or delivery guarantee. Confirm its descriptions of manufacturing and customisation against the current offer before publication.

### Optional values translation

These are proposed expressions, not new promises or established company policy:

- **Clear communication:** discuss what the team needs and what is feasible.
- **Practical choices:** choose garments for the roles and working environment.
- **Agreed details:** clarify the design, branding and order requirements before proceeding.

### About image decision

Preferred: permissioned actual company, team or product photography. If unavailable, use a neutral illustrative garment image with a clear caption, or omit the image. Do not invent a Kigali factory scene. Never caption generated people as Quddus, Tinah or employees.

## 10. Claims and consistency audit across the whole site

**Priority P1. Confidence: High that claims exist; verification status varies.**

Audit visible text, metadata and alt text together. The neutral catalogue and the more elaborate garment/Lookbook descriptions currently use different levels of certainty.

Examples requiring evidence or softer wording:

- Cotton twill, heavy canvas, combed cotton, honeycomb piqué, brass components, wool, exact stitch types and breathability (`garments.ts:27–77`; `work/page.tsx:23–154`). These may describe concepts, but should not become promises of supplied construction without approval.
- “Engineered,” “reliable delivery,” teams “of all sizes,” and “ensure an exact fit” (`content/pages.ts:9–10,34`). Do not publish as established operational guarantees without confirmation.
- “Every detail is agreed before production” and a formal production schedule are workflow claims. Confirm the actual process rather than adding reassuring copy automatically.

Use one small claims ledger: claim, source, approval status, published locations, approved wording. Treat source-deck marketing statements as source material, not proof of certifications or safety performance.

Keep category IDs and business facts in the existing canonical sources. `src/components/garments/garments.ts` and the inline Lookbook records should reference shared category names and approved content where appropriate, rather than drifting into a second independent catalogue. Avoid refactoring unrelated systems during this correction.

## 11. Agent work packages and dependencies

Work on a new follow-up feature branch from the reviewed work after checking the current Git state. Preserve unrelated client-collaboration files. Do not commit, push, merge or deploy without the applicable owner authorization. Preview review is distinct from production approval.

| Work package | Owner role | Required output | Acceptance/dependency |
| --- | --- | --- | --- |
| A. Correct reference/evidence baseline | UX reviewer | Actual desktop/mobile navigation, hero, disclosure and route comparison; explicit unknowns | First. No more design justification from the false Subsidiaries audit |
| B. Image corrections | Art/asset agent | Clean C01 plus approved alternate; primary image review; masters, crops, rights and placement log | Corporate correction and art-direction board reviewed before bulk exports |
| C. First screen and navigation | UI/design agent, then frontend agent | Two still compositions; approved direction; restrained implementation preserving routes/focus | Depends on A and selected primary media. Owner chooses the direction |
| D. Garment interaction | Illustrator/design agent, then frontend agent | Four accurate flats; compact integration; copy matching actual behavior | Approve drawings at rendered scale before motion work. Align with B/C |
| E. About and claims | Content agent | Source-grounded About draft, claims ledger, metadata/alt/FAQ consistency | Confirm facts with owner; do not fabricate missing bios or specs |
| F. Correctness fixes | Frontend agent | Current tab-panel relationships, stale-draft fix, disclosure focus-exit behavior | Can proceed in parallel without expanding design scope |
| G. Independent review | QA + reviewer other than implementer | Repeatable tests, reference pairs, photo realism decisions and buyer-task recording | Only after integrated candidate exists; owner review still required |

### Sequence and stop points

1. Correct the baseline and assemble the issue/claims list.
2. Show the corrected corporate image, primary-photo choices, improved garment drawings and two opening compositions.
3. Obtain owner agreement on the visual direction before detailed integration or mass image generation.
4. Integrate in small coherent slices; preserve currently working routes and quoting behavior.
5. Run functional checks and independent visual review against this directive.
6. Deliver a real branch/commit/preview identity and an updated review pack.
7. Obtain owner review, then client publication approval. Only then discuss production.

Escalate when rights, real business facts or approved imagery are missing. A tool quota is a blocker to document, not permission to substitute geometric posters or declare existing weak images approved.

## 12. Acceptance gates for the finalizing build

### Gate A — reference and direction

- Side-by-side captures show the actual live reference and candidate at 390 and 1440 pixels.
- Navigation is at least as easy to understand, while keyboard/touch access is preserved.
- Deviations from the reference are named as proposals with demonstrated purpose, not awarded “better” by their implementer.
- Owner approves the opening composition before release preparation.

### Gate B — image credibility

- Corporate cover has no rejected lapel/chest overlay in any route or duplicate path.
- Every primary collection image passes garment-anatomy, crop, brand-placement and rights review.
- No fabricated maker/customer identity, premises, actual commission or safety proof.
- Illustrative concepts are disclosed where displayed, not only on a different page.
- Logo fidelity and plausible application both pass. One does not excuse failure of the other.

### Gate C — garments and page structure

- Four recognisable, coherent garment flats; no invented substitute Q emblem.
- Drawings, selected photos, captions, routes and product context agree.
- One primary category-browsing system; any second interaction has a clearly distinct task and compact footprint.
- The module's wording describes what it actually does.

### Gate D — buyer tasks and functional regressions

Demonstrate, on desktop and mobile:

1. Identify Q Workwear's offer without reading a long page.
2. Reach a chosen sector directly through navigation or a photo gateway.
3. Choose an example garment and reach an enquiry with that garment preserved.
4. Prepare, revise and reopen/copy an enquiry containing current field values.
5. Return to the previous collection/filter using browser history.

Define the click target carefully: **Home → sector → garment enquiry → contact context** must take no more than three purposeful navigation actions. This does not mean the buyer has filled the form or sent an email in three clicks. Do not claim “quotation sent” when only a draft was opened.

Manual checks: Tab/Shift+Tab, Enter/Space, arrows/Home/End if tabs remain, Escape, focus return, focus leaving a desktop disclosure, mobile dialog, browser zoom, a screen-reader pass, reduced motion, delayed loading and no image 404s. Check at 320, 375, 390, 768, 1050, 1051 and 1440 pixels, plus the existing smoke-suite widths.

### Gate E — build, tests and performance

Run the repository commands against the actual revised candidate:

- `pnpm typecheck`
- `pnpm build`
- `TEST_URL=<running-candidate-url> pnpm test:ui`
- `TEST_URL=<running-candidate-url> pnpm test:flows`

Inspect scripts before use. The UI and flow tests need a running server. Retain static export and minimal dependencies. Record actual results and logs, not only a checklist.

Add regressions for the issues found here. Existing tests count four SVGs and twelve Lookbook cards; those counts do not establish drawing quality, image realism or breadth. Rework count assertions if the approved composition changes; never preserve poor content solely to satisfy a test count.

Measure initial image transfer, layout shifts and first-screen loading on a mobile/throttled profile. Do not preload every illustration/photo. A static image-led hero may be preferable to an unmeasured autoplay gallery.

### Gate F — real review delivery

Review pack must include:

- Branch and commit actually reviewed; new deployed preview identity if one exists.
- Fresh-browser preview access result. If protected, say who can access it or use an owner-authorized sharing mechanism; do not quietly disable protection.
- Actual mobile/desktop reference comparisons and unaltered candidate screenshots.
- Image contact sheet showing accepted/rejected candidates, parent crops and provenance.
- About copy and any outstanding business approvals.
- Functional/performance results and known limitations.
- Separate statuses for technical pass, internal visual acceptance, owner approval and client publication approval.

**No production change is authorized by this review. Automated green checks cannot override the owner's rejected visual direction.**

## 13. Review-session verification status

- `pnpm typecheck`: **PASS** in this review session.
- `TEST_URL=http://127.0.0.1:3027 pnpm test:flows`: **PASS**, all eight existing check groups.
- `pnpm test:ui`: initial run timed out at the 240-second execution limit with a browser-closed error. A separate background rerun completed successfully: **PASS**, 45 route×viewport checks plus the mobile navigation/focus/Escape/route-change check. Its `ui-results.json` and console result are included in the evidence directory. This is functional smoke coverage, not visual acceptance.
- `pnpm build`: **not rerun** for this analysis-only/documents change. Visual captures use the existing static export, with the two corporate assets hash-matched to source.
- Targeted probes independently reproduced the missing inactive tab targets, desktop disclosure remaining open after focus exits, and stale prepared name in the reopened mail draft. Existing flow checks passing does not negate these gaps.

## 14. Decisions the owner must make

Keep the choices small and visual:

1. Approve the corrected corporate cover and restrained maker-branding policy.
2. Choose the reference-led opening or a consciously retained editorial alternative.
3. Approve accurate, compact garment interaction rather than the current duplicate large selector.
4. Approve revised About wording and confirm any leadership story, sample service or material claims to retain.

Until these decisions and the acceptance gates are satisfied, describe the site as an improved working candidate under revision — not final, approved or client-ready.

## 15. Owner addendum — EN/FR localization and across-device behavior

**New scope requested by the owner: add English/French internationalization as a finalization work package.** It is not implemented by this review. Final French wording needs linguistic review; do not label machine translation client-approved.

### Current readiness

The root layout hard-codes `lang="en"` and English metadata (`src/app/layout.tsx:20,52–54`). Strings are spread between JSX and `src/content/`; the current package manifest has no i18n dependency. The build uses `output: "export"` (`next.config.mjs:3`). Treat this as a deliberate engineering task, not an automatic browser-translation button.

### Requirements

- Offer an unobtrusive **EN / FR** switch on desktop and mobile. Use language names or abbreviations, not national flags. Show the selected language and an accessible switch label.
- Keep the existing unprefixed English URLs valid, including `/products?category=...` and `/contact?product=...`. Define the French URL mapping before coding; `/fr/...` is a reasonable proposal, not a reason to break current bookmarks. Generate all required pages at build time and test direct URL refresh on static hosting. Do not rely on a runtime middleware/server locale detector that static export cannot supply.
- Switching language preserves the equivalent page, category and garment context. Do not silently erase an in-progress enquiry; preserve draft inputs or provide a clear, tested handoff. Stable category/product IDs remain language-independent. User-entered names and text are not machine-translated.
- Translate navigation, Home, About, collections, Lookbook captions and disclosures, contact/FAQ, form labels, validation/help/result messages, copy fallback, accessibility labels, skip link, image descriptions where meaningful, and the generated email subject/body. Keep the actual recipient email and official brand unchanged.
- Localise document language, page titles/descriptions, canonical/hreflang relationships, sitemap entries and social metadata consistently. Do not point canonical URLs at a temporary preview domain.
- Use shared typed content/message keys and one catalogue, not a separate manually maintained French product inventory. The engineering agent should choose the smallest static-compatible approach after inspecting existing conventions. No paid translation platform, CMS, runtime translation API or new large dependency without a justified need.
- French should be clear for the intended Rwandan business audience. Prefer **Collections**, **À propos**, **Contact**, and **Demander un devis** where context supports them; have a fluent reviewer approve garment terminology and register. **Lookbook** versus **Galerie** is a naming choice to validate, not a literal translation requirement.
- No new commercial claims may appear in either language. Approve the revised English About first, then localise its meaning rather than reproducing awkward source phrases.

### EN/FR acceptance

Run the core buyer tasks in both languages. Test accented names and free text, URL encoding, email drafts, equivalent-page switching, category history, current active labels, correct `html lang` and no missing message keys. Verify French text expansion in header, mobile menu, buttons, SVG labels, cards and forms at 320/375/390/768/1050/1051/1440px. Labels may wrap naturally; do not shrink type or clip buttons to force English dimensions.

Test touch and keyboard, portrait and landscape, browser zoom, and reduced motion in both languages. Check representative Chromium and WebKit/mobile browser behavior where tooling permits; record what was actually exercised. Accessibility and clear navigation must hold when all visual motion is disabled.

### Work-package addition

Add **H. EN/FR localisation**: content agent drafts both languages; frontend agent implements a static-compatible locale/content route plan; QA runs both-language journeys. Start content key inventory early, but settle approved English copy before final French review. Translation must not become an excuse to postpone image or reference corrections.

### Clarified acceptance hierarchy

The client's reference-led simplicity, visible purposeful interaction, garment credibility, responsive navigation and clear copy are the goal. EN/FR extends that goal. All meaningful deviations require the explicit evidence-and-approval record in section 6; no agent may trade these wishes away merely because a different template is easier to build.
