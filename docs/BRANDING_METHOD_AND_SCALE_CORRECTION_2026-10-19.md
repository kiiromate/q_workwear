# Q Workwear — branding realism correction: method, scale and placement

**Owner follow-up: the scenes may be well detailed while the branding still fails. Reopen branding acceptance across every active image, not only the corporate cover.**

Status: mandatory art-direction/QA addendum to `OWNER_REVIEW_AND_FINALIZATION_DIRECTIVE_2026-10-19.md`. This supersedes generic instructions to embroider or composite a Q onto every frame. It does not authorize production changes or assert that any proposed application is a confirmed Q Workwear service.

## 1. Specific rejection: Bar-Tack Reinforcement & Heavy Zippers

Asset: `public/images/editorial/industrial-seam-detail.webp` (`IND03`), used in the Lookbook entry titled **Bar-Tack Reinforcement & Heavy Zippers**.

**Evidence and confidence: High.** Direct inspection shows a very small white Q on the fabric panel above the zipper. Its clean graphic appearance and detail scale are inconsistent with the surrounding coarse weave, prominent construction stitches and hardware. It reads as an added graphic, not a convincing physical garment application. The owner explicitly rejects its scale and detail.

The compositor confirms that the mark is added as a 34-pixel-wide rotated graphic (`scripts/composite_photoreal_assets.py:353–368`). A pixel width is not a physical embroidery specification. This source is a macro view: the weave, structural thread and hardware are enlarged. A tiny intricate logo must not retain impossibly fine graphic detail relative to those features.

**Required correction: remove the Q from this macro detail using the clean master.** Keep the frame focused on the seam, bar-tack and zipper if those are visually credible. Do not simply enlarge the symbol, add a fuzzy halo, move it to another arbitrary patch of fabric, or relabel the same appearance “print.” Review the construction itself separately; the polished scene does not prove every stitch or hardware arrangement is plausible.

If a branding detail is needed for the story, use a separate dedicated photograph/concept of a suitably sized embroidered mark, sewn label or approved patch. Do not invent custom engraved hardware, rivets or manufacturing capabilities as an automatic workaround.

Do not claim physical dimensions from this uncalibrated image. Relative scale can be judged visually; millimetres require a known scale/reference or an explicit proposed garment specification.

## 2. Decide the physical application before editing the image

For each candidate, write down:

1. What is the subject and buyer question? Whole garment, fit, stitching, material, branding technique or maker label?
2. Is this Q's maker identity or an example of the purchasing organisation's uniform identity?
3. Is a visible mark useful here at all?
4. Which method suits the garment, surface, intended use and proposed design?
5. Where is it attached/applied, at what proposed physical size, and how does that size relate to the garment/hardware?
6. What visual evidence distinguishes the chosen method from a flat overlay?

**Do not select embroidery solely because a shared script is named `composite_embroidered_mark()`. Do not call every logo embroidery.** Print, embroidery, a woven label, a sewn patch and a hangtag have different physical behavior and should look different.

## 3. Application guide — proposals, not a service catalogue

Choose the least intrusive convincing treatment. Confirm actual customer-facing services and limitations with Q before promising them in copy.

| Garment or image role | Suitable direction to explore | What the image must make plausible | Reject |
| --- | --- | --- | --- |
| Formal corporate blazer | Clean exterior; interior maker label or discreet garment tag. An exterior emblem/pin only if specifically approved | Respect the lapel, pocket opening, tailoring and intended uniform style | Printed-looking Q near lapel/pocket, arbitrary chest watermark, brand forced onto suiting |
| Office shirt | Restrained cuff/chest embroidery where approved, or internal label | Plausible size for the shirt; stitch treatment follows fabric plane and light without deforming the official mark | Microscopic full wordmark, overlay crossing buttons/seams, embroidery with no relation to the cloth |
| Polo | Embroidery for a suitable compact emblem; print/transfer only when deliberately selected | Embroidery has plausible thread character at close range; print has appropriate surface character and follows the knit/folds | Flat white graphic called embroidery; overly detailed tiny lettering |
| T-shirt | Appropriate print/transfer direction; embroidery only for a suitable garment/design | Printed graphic follows the fabric plane, lighting and folds; no fake raised thread effect | Embossed/stitched shading on a design labelled print, identical treatment to every polo/cap |
| Chef jacket | Restrained embroidery or a sewn maker label, subject to approved placement | Clear distinction between branding and closures/pockets; plausible textile integration | Mark over a fastening or falsely showing unsupported hygienic/protective performance |
| Apron | Embroidery, fabric patch or seam label; other patch materials only if approved | Visible attachment/edge construction where resolution permits; correct layering over the apron | Floating plaque, hovering patch, impossible stitching through open space |
| Industrial work jacket/coverall | Approved chest embroidery, sewn patch or maker label | Appropriate panel and scale; pockets remain functional; no safety/certification implication | Logo on reflective tape, zipper track or stress seam; decorative miniature mark on every close-up |
| Cap | Approved crown embroidery or suitable patch; print only on a suitable chosen surface | Crown curvature, panel seams and mark scale remain coherent | Logo spanning panel breaks without conformance; unrealistic dense detail; application onto visor merely for visibility |
| Macro seam, zipper or bar-tack study | **Usually no logo** | Construction detail is the subject; any label actually present must have a convincing attachment and scale | Arbitrary Q stamp added to make an otherwise useful close-up “branded” |
| Maker label/hangtag/packaging | Woven or printed label, printed paper tag or suitable packaging print | Distinct textile/paper surface and correct seam, fold, string or attachment | Floating business card, label texture unrelated to material, wordmark too small for its stated manufacture |

Do not add leather, branded hardware or specialty techniques merely to create a premium appearance. If used as an illustrative proposal, classify and approve it as such; do not imply existing availability.

## 4. Scale and detail rules

- Establish a plausible garment-level design before producing the macro crop. A close crop must be consistent with the parent garment, not a different logo size invented for the detail shot.
- Use garment proportions and known/reference hardware or stitch context for relative scale. Record whether the physical size is **proposed**, **reference-derived**, or **verified**. Do not invent precision from pixels.
- Scale must suit the method. Fine full-wordmark lettering that works on a paper tag may not work as a tiny embroidered chest mark.
- When a full lockup is unsuitable, choose an approved official symbol-only variant, a larger appropriate placement, another method or no mark. Do not redraw or simplify the Q into a different logo.
- Match logo and garment focus, lighting, perspective and physical surface. Sharpness should not exceed what the photographic focal plane supports.
- Macro images require macro credibility: thread direction, edge structure and relief for embroidery; appropriate surface behavior for print; woven structure for a woven label; borders and attachment for a patch.
- At normal website size, individual stitches may not be resolvable. Do not manufacture coarse thread ridges or heavy shadows just so a thumbnail reads as embroidery. Assess both the master and rendered crop.
- Do not artificially distress every print. The result must match the intended finish, garment and image, not a generic “textured overlay” recipe.

## 5. Correct the production workflow, not only one file

1. **Reassess every active asset and derivative.** Preserve underlying masters; do not discard good scenes solely because the applied logo failed.
2. Add per-asset fields to the existing registry: `branding_required`, `brand_role`, `application_method`, `placement`, `proposed_physical_size_or_scale_basis`, `logo_variant`, `attachment_or_surface_notes`, `master_parent`, `review_status`, `review_reason`, `reviewer`.
3. Set current branding acceptance to **REVIEW REQUIRED** unless individually re-approved. C01 and IND03 branding are specifically rejected by this review. Do not leave an old `SELECTED_INTERNAL`/“passed 200% QA” statement as current acceptance.
4. Start from the clean master. Use a method-specific edit with the supplied logo; masks and deformation must respect panels, folds, seams, fastenings and occlusion. The current resize/rotate/luminance/shadow routine is not sufficient proof.
5. Work in small review batches. First show: corrected clean corporate cover; IND03 without the overlay; one convincing embroidery example; one appropriate print example; one label/patch example if useful. These examples need not create additional public gallery cards.
6. Show original, proposed application and website crop side by side. Have someone other than the editing agent inspect method, placement, scale and fidelity. Obtain owner approval before bulk propagation.
7. Update every active copy/crop/path and its captions, alt text and metadata. Do not call a printed mark embroidered, a printed label woven, or an illustrative study a completed Q order.
8. Revisit earlier shot prompts too. Instructions such as IND03's “tiny embroidered mark at pocket edge,” H02's “one mark per garment” and the global expectation of a blank branding zone are subordinate to this method/suitability review. A detail shot can intentionally have no mark.

## 6. Acceptance and rejection gate

Each selected asset must answer **yes** to all relevant questions:

- Does the garment scene itself remain credible, independently of the logo?
- Is a mark useful here, and is the maker/customer role clear?
- Does the chosen application suit the garment and approved concept?
- Does the image actually look like that method, rather than merely being captioned that way?
- Are scale and detail plausible relative to fabric, garment, seams and hardware?
- Does it respect the official logo and real panel boundaries?
- Is attachment/surface integration credible at full resolution and at the intended mobile/desktop crop?
- Are the application, rights, illustrative status and approvals accurately recorded?

A detailed environment or an unchanged official logo is not a pass. If believable application cannot be achieved, retain the clean unbranded concept with suitable site-level identity, select a better source or report the blocker. Do not replace a poor embroidered simulation with a poor printed simulation.

## 7. Scope of this addendum

This update directs the implementation/art agents; it does not replace website images, change application code or approve production. Functional tests cannot validate image realism. Future integration must run image-path/crop and site regression checks, plus independent visual and owner review.
