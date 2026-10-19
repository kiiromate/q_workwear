# Q Workwear | Photorealistic visual identity, image-production brief and asset coverage
Date: 2026-10-19 | Priority: P0/P1 | **Supersedes PIL geometric-image direction**

## 1. The non-negotiable goal

From the buyer's first glance, this must look like **a credible bespoke uniform and workwear maker**, not an abstract graphic studio or a portfolio of invented completed projects. The reviewed screenshots of the feature branch showed triangle/ruler compositions, pseudo garment outlines, logos pasted on graphic tags and small low-credibility textures. Stop treating the old geometric generator as a production source.

### Visual benchmark

- Garments and the human contexts of work come first. Accurate photography must show drape, fit, stitching, buttons, pockets, fabric weave, hardware and real physical construction.
- Style should look **photographed**, not AI-rendered illustration, CGI, 3D fashion mock-up, flat vector, poster, vector texture or a brand board.
- Q Workwear's **authentic locked mark** appears naturally and tastefully via embroidery, a sewn label, cap print, apron patch, hangtag or real-facing packaging. **Branding is a detail on a real-looking object, never a billboard placed over a photo.**
- Corporate: polished contemporary suiting / office uniform; Hospitality: hygienic purposeful culinary / FOH garments; Industrial: practical hardwearing gear; Branded: real textile print/embroidery; extra sectors from deck where supported.
- Preserve a common photographic art direction, not identical staging every time. Avoid stereotypical stock-photo handshakes, glossy fashion advertising, generic luxury mockups or invented named workplaces.
- Q is Kigali-based; visual casts, locations and setting can feel plausible for urban Rwanda without fabricating portraits of the founders, workers, a Q factory or identified clients.

## 2. Stop the broken production route

**DO NOT** re-run `scripts/generate_atelier_visuals.py` or `scripts/generate_lookbook_visuals.py` to fill final production imagery if their output remains PIL geometric illustration. Preserve these as archival scripts or move behind an explicitly archival label; remove them from the production media build. Applying an exact Q image to the existing posters is **not** a sufficient fix.

Use a genuinely photorealistic capable local/connected image generator **if actually available**, or authorized client photography. Local text-only LLM output cannot magically become photographic. Do not fabricate successful image-generation tool execution. Source original images with rights, or document acquisition blockers. If a candidate is compromised, reject it even if it leaves a placeholder temporarily; use a clearly illustrative neutral fallback.

## 3. Source hierarchy and truth

A. **Real Q Workwear photography**, with written permission and any identifiable subject / commercial client permissions: primary authentic finished work.

B. **Portfolio deck asset** `docs/BUSINESS PORTFOLIO.pptx`: identify original per slide and media part via `docs/LOOKBOOK_ASSET_MANIFEST.md`. Deck inclusion is not proof of ownership, commissioning or publishing rights. Slide 40 third-party client logos blocked without explicit release. Deck may guide art direction even when publication is blocked.

C. **New Q-branded photorealistic editorial concepts**: depict garments the company could discuss producing, **not** documentary claims of workshop, stock, production capacity or past customers. One calm on-page/lookbook statement "Illustrative examples of styles and customization options. Final specifications are discussed per order" is preferable to labels on every image. Never mix the concepts with labelled real commissions without provenance.

**Do not edit images of genuine third-party garments or people to falsely insert Q branding and present the result as completed Q Workwear production.**

## 4. How many images? Coverage, not a fixed five

The current "five reused everywhere" strategy is inadequate for a believable lookbook. Plan for **approximately 22–30 distinct selected photographs** across the site, with more where each picture serves a genuinely different garment, use case, macro or sector. This is an **editorial target**, not a fixed count or permission to publish filler. The shot list below defines **29 candidates**; produce more candidates as needed, then **curate rigorously** (1–2 strong hero variants, at least four distinct category feature photographs, multiple secondary details per sector, sufficient selected-sector coverage). The site must show discernible variety and must not force every image onto the homepage.

Suggested deployment:
- Homepage: 1 hero; 4 category feature images; 2–4 distinctive technique/quality/detail photographs; small lookbook teaser 2–3. Avoid repeated near-identical scenes in adjacent sections.
- Collections: 4 category features plus contextual garment details if relevant to actual product options.
- Lookbook: 12–18 distinct photographs where rights/quality support them; editorial sequence of hero / portrait / material detail for representative sectors.
- About: 1–3 anonymous, honestly illustrative craftsmanship images or verified real atelier pictures.
- No need for one distinct image for each of the 16 generic product enquiry rows unless a photo genuinely illustrates the offer. Keep one canonical asset registry, sensible file naming and component data.

## 5. Production style guide and prompt assembly

For EACH shot below create a separate, unique image generation job. **One exact prompt = Global photograph directive + Shot-specific prompt + Negative constraints + crop/branding directions**. Do not just generate an assortment with keyword lists.

### Global photograph directive (prepend to each shot)

> Make a convincingly real, high-resolution commercial editorial photograph for a Kigali-based maker of custom uniforms and professional team apparel. Show physically plausible garments as the primary subject. Camera-real optics and believable focus falloff, realistic material reflectance, accurate textile weave and drape, anatomically sound anonymous adult subjects only if a human is necessary, authentic cut/fit/closures and industrial-stitch detail. Modern understated apparel photography: neutral warm white, graphite, navy, off-white, occasional forest/olive and restrained deep Q Workwear red. Use directional soft window/studio light with believable shadows. Composition must read at 320px wide without explanatory text. Keep an achievable, physically flat/embroiderable zone for authentic Q branding that will be composited later. Genuine textile, never poster art. Do not make a false portrait of Q founders, staff, an actual Q facility or a named client.

### Negative prompt (append to every shot)

> Do not generate text, logos, illegible glyphs, fake watermarks, certification/ISO/CE marks, invented brand marks, overt company signage, slogans, oversized floating cards, graphics or decorative shapes, polygons, rulers used as graphic diagonals, billboard branding, AI art, illustration, CGI, plasticky textiles, impossible apparel cuts, stitched-through buttons, warped hands, wrong numbers of fingers, mutilated faces, bad garment fasteners, floating seams, futuristic PPE, military insignia, fake real client logos or fake documentary production proof. No visible identifiable real person unless documented consent exists.

### Consistency and camera controls
- Prefer one dominant garment/color per photo; introduce subtle sets and props only as supporting evidence.
- Portrait garments: 4:5 or 3:4, preferably ≥1400px on long dimension where generator supports it. Hero: 16:9/2:1 candidate with mobile-safe subject in center 60%; alternate vertically suitable hero from same scenario if important. Details: 3:2/4:3 with close weave clarity.
- Vary shooting grammar deliberately: hanger lineup, mannequin, editorial worn garment without claiming employee identity, neatly arranged flat-lay, studio close-up, functional workplace context, hands and details. **Do not generate only garments on grey hangers or all dark-blue shirts.**
- Avoid false technical claims: "hi-vis visual styling" is permitted; "certified EN ISO 20471" requires actual verified product evidence. Avoid protective goggles/gloves depicted as verified PPE without specs.
- Clean fabric, realistic pressing/creases, no uniform logos from actual customers.
- Keep raw prompt, generator/provider/model, settings, seed if supported, rights, original asset and QA/rejection reason in `docs/VISUAL_ASSET_REGISTRY.md`.

## 6. Logo integration as authentic, verifiable fabrication detail

Only use source files in `public/images/logo/`:
- `q-mark-red.png`, `q-mark-white.png`: isolated official Q emblem, appropriate to small chest/cap uses.
- `q-workwear-red-transparent.png`, `q-workwear-white-transparent.png`: full wordmark when actually readable on tag, fabric label or packaging.
- `q-workwear-original.png`: reference image; do not cut a blurry crop for garment branding.

**Workflow:** generate a clean base with blank realistic stitching/patch zone; verify actual geometry and light; apply source logo in high-quality **postproduction compositing**, not via text generation. For embroidery: mask to fabric and actual curve/perspective, add fabric/shadow interplay, edge stitch/textured ink only while preserving the exact logo geometry; standard chest patch/embroidery should appear small relative to garment (approx 25–60 mm). On caps use front crown only, not warped over visor. Match source colors and contrast; do not redraw a "similar" Q. Never layer a floating full-size business card over the subject.

**Double validation:** compare the source mark and finished overlay at 100% and final website rendered size. Reject stretching, cut-off letters, accidental faked letters, sharp flat rectangle pasted over curves, excessive saturation or mark legibility loss. Retain layered master + masks if used. **This project is permitted to illustrate Q garment branding, but not to claim garments have been made.**

## 7. Prioritized candidate shot list and exact creative briefs (29)

Every line below is a **shot-specific generation prompt** that must be combined with global/negative directives. Avoid adding spurious logo text. Paths are *proposed* for newly added pictures and should be kept data-driven; existing six showcase paths remain stable.

| ID | Website destination / proposed output | Frame | Shot-specific prompt and exact product direction | Authentic Q placement |
| --- | --- | --- | --- | --- |
| H01 | Hero `showcase/hero-atelier-table.webp` | 16:9 | Tailoring table with hands precisely working on a finished navy office-shirt cuff beside a realistically folded blazer, off-white shirt, swatches and one plausible pair of shears; clothing occupies at least 60% of image, craftsmanship action obvious; warm daylight, product-first, no arbitrary geometric ruler design | Tiny cloth sample label or sewn cuff/garment label |
| H02 | Alternate hero `editorial/hero-uniform-rail.webp` | 16:9 | Intentional professional rack with a navy blazer, ivory chef jacket, navy/hi-vis work jacket and neutral embroidered polo in the same studio; varied height and fabric, beautiful coherent hang, clear workwear range instantly readable, uncluttered pale environment | One small Q mark per real garment label/embroidery |
| H03 | Alternate hero `editorial/hero-model-detail.webp` | 16:9 | Anonymous adult torso-only subject adjusting the cuff of crisp tailored office shirt and charcoal blazer, shallow focus on stitch/embroidered sleeve, additional jacket rail soft in background, respectful candid product photography | Small authentic stitch on shirt chest/cuff |
| C01 | Corporate feature `showcase/cat-corporate-suiting.webp` | 4:5 | Two coordinated executive office uniforms: structured navy blazer with clean notch lapels and light-blue pressed button shirt, formal trousers visible, styled on elegant mannequins/rail; polished Kigali front-desk aesthetic without any invented hotel/office | Tiny woven inside blazer neck label; subtle shirt chest monogram |
| C02 | Corporate secondary `editorial/corporate-frontdesk.webp` | 3:4 | Tastefully photographed anonymous adult receptionist outfit: charcoal tailored waistcoat over long sleeve office shirt with straight formal trousers; torso-first, smart silhouette and tailoring, clean neutral entry backdrop not identifiable as real customer premises | One realistic restrained chest embroidery |
| C03 | Corporate detail `editorial/corporate-embroidery-close.webp` | 3:2 | Macro editorial view of believable thread embroidery on premium office-shirt fabric next to lapel and buttonhole, individual stitches, realistic cotton fibers and folds, no text overlays | Exact Q mark embroidery on fabric |
| HOS01 | Hospitality feature `showcase/cat-hospitality-culinary.webp` | 4:5 | Ivory chef double-breasted jacket with believable closures beside dark olive/brown structured bib apron on two clean hangers in subtly lit kitchen-adjacent studio, garments fully recognizable | Chef jacket breast embroidery, modest apron leather/fabric patch |
| HOS02 | Hospitality service `editorial/hospitality-service.webp` | 3:4 | Anonymous adult in coordinated dark collared hotel/server uniform and crossback apron, photographed torso to knee in a bright simple service area without restaurant logos; correct pocket and strap positioning | Tiny Q sleeve or apron patch |
| HOS03 | Apron macro `editorial/hospitality-apron-stitch.webp` | 3:2 | Close-up real canvas apron pocket, bar-tack, woven strap and precise embroidery; natural light rakes over material, garment fills image; no food props | Embroidered Q mark near pocket/label |
| IND01 | Industrial feature `showcase/cat-industrial-safety.webp` | 4:5 | Structured navy work jacket and matching trousers beside one safety-yellow reflective vest on workshop hanger rail, fully visible utility pockets, seams and accurate believable reflective tape; no danger dramatization | Small Q chest patch on jacket, subtle vest hem label |
| IND02 | Coverall secondary `editorial/industrial-coverall.webp` | 3:4 | Clean deep-navy coverall on adult mannequin with chest pockets, robust closure, workable sleeve cuffs and knee shaping, simple workshop-neutral background; gear looks made not computer-rendered | Small woven Q name patch on chest |
| IND03 | Workwear detail `editorial/industrial-pocket-detail.webp` | 3:2 | Macro stitched industrial cotton twill seam/pocket with reinforced bar tack, real zipper tape, durable hardware and legible fabric weave; no fake flame/safety badge | Tiny embroidered mark at pocket edge |
| BR01 | Branded feature `showcase/cat-branded-apparel.webp` | 4:5 | Navy textured polo, off-white crewneck tee and structured red/navy cap, carefully stacked/rail-styled on simple matte background, complete garment shapes; premium team apparel not graphic poster | Official Q small embroidered chest mark and cap front mark; natural tee print |
| BR02 | Polo on form `editorial/branded-polo-fit.webp` | 3:4 | Anonymous adult torso in well-fitted charcoal piqué work polo showing clean collar and sleeve rib, natural daylight and relaxed business stance, no fake customer setting | Embroidered true Q mark on left chest |
| BR03 | Cap embroidery detail `editorial/branded-cap-stitches.webp` | 3:2 | Studio macro of six-panel cap crown, stitching, eyelets and curved brim with visible woven thread for a small mark; rich textile detail, crisp focal plane | Official Q symbol stitched on cap front panel |
| CR01 | Process detail `showcase/tailor-craftsmanship.webp` | 4:3 | Close photographic view of hands checking cut edge and button stitching on a real office shirt laid on cutting table, folded navy cloth and fabric swatches; more garment than tools | Small sewn hangtag within cloth folds |
| CR02 | Garment finish `editorial/craft-label-close.webp` | 3:2 | Macro woven neck label being sewn into a premium uniform collar, human hands only if mechanically correct, thread details and collar finish obvious; no invented business room | Authentic Q mark/wordmark integrated into woven label |
| CR03 | Branding method `editorial/craft-embroidery-process.webp` | 3:2 | Highly believable close-up embroidery machine hoop holding navy polo chest as thread work is applied, physically realistic presser foot and thread path, no identifiable workers/claimed factory | Q logo source placed on embroidered work area |
| CR04 | Cut patterns `editorial/craft-fabric-selection.webp` | 4:3 | Ordered set of four true fabric swatches, matching buttons and finished shirt collar, simple tailor table in directional daylight; restrained composition, visually meaningful | Branded sample tag small |
| HC01 | Healthcare concept `editorial/healthcare-scrubs.webp` | 3:4 | Medical tunic and scrub trouser set in teal-blue/soft grey on mannequin, clean V-neck, correct patch pockets, collar geometry, simple non-hospital studio | Tiny sewn Q care label; no medical protection claim |
| HC02 | Healthcare dust coat `editorial/healthcare-labcoat.webp` | 3:4 | Crisp white medical/dust coat on neutral rail beside matching scrub top, precise buttons, sleeves, pocket architecture, no stethoscope branding | Small authentic Q chest embroidery |
| SEC01 | Security / front-of-house `editorial/security-uniform.webp` | 3:4 | Professional neutral security-service shirt and trousers on mannequin, clean structured shoulder seam and shirt front with appropriate utility pocket, civilian service aesthetic, no badges/ranks/police insignia | Q sleeve label only |
| SCH01 | Schools `editorial/school-uniform-set.webp` | 3:4 | Neatly staged school-uniform jumper/cardigan, shirt, skirt/trouser pieces on hangers, clean cotton materials, no children, school crest or specific school identifiers | Small internal Q manufacturer label |
| SPORT01 | Team sportswear `editorial/sports-teamkit.webp` | 3:4 | Studio mannequin with technical sports jersey and shorts in restrained colorway with real knit mesh construction and authentic garment fit; no actual team logos | Small Q maker label / tasteful chest mark |
| CL01 | Cleaning / facility `editorial/cleaning-servicewear.webp` | 3:4 | Practical cleaner's tunic and trousers with fitted utility apron laid neatly on rail, blue/slate cotton blend textures, pocket details, neat professional presentation | Small Q sleeve embroidery |
| PPE01 | Protective-wear concept `editorial/ppe-hi-vis.webp` | 3:4 | Non-certified conceptual visibility garment: yellow vest over navy coverall with plausible reflective bands and closure, high-quality product photograph on mannequin, no standards iconography | Q woven label only; explicit no certification representation |
| BIZ01 | Packaging / delivery `editorial/brand-packaging.webp` | 4:3 | Clean stack of freshly folded generic team polos and matching hangtags in tissue sleeve / simple shipment preparation scene, beautiful fibers and precise folds, no claim of real Q dispatch | Actual Q logo on folded garment neck tags |
| BIZ02 | Material personalization `editorial/brand-application-variants.webp` | 4:3 | One garment trio of an apron pocket, polo chest and cap crown in a consistent macro-triptych-style *photographic composition*, physically separated garments on tabletop; each shows different realistic finish, no poster graphics | Official Q mark applied by patch, embroidery and print respectively |

**29 total candidate shots.** This is not an obligation to ship 29. Choose enough to make every page and promised sector visually self-explanatory. If 29 images still look repetitive, generate or source additional **distinct** scenes; if fewer tell the story better, curate fewer. Prioritize quality and diversity over count.

## 8. Iterative art direction / rejection process

1. **First produce contact sheet:** 3 distinct hero candidates + C01/HOS01/IND01/BR01 in high enough quality to inspect. Do not update production site with them yet.
2. Owner/design review: compare at desktop hero, portrait cards, mobile crop. Select photographic grammar, lighting, garment realism and Q logo method. Reject all poster-like compositions.
3. Produce lookbook in **clusters**: (Corporate/Hospitality), (Industrial/Branded), (Healthcare/Cleaning/School/Sports), (Craft/Brand methods). Sample 3–5 shots per batch, reject/retry low quality immediately, don't run all 29 blindly.
4. Perform compositing using original logo, perspective/texture mask, not graphic overlay gimmick.
5. Produce a contact sheet showing **source photo + branded final crop** for any important asset; reviewer verifies fabric and embroidery plausibility.
6. Register each production image: source, image generator/real photo, permission, prompt ID, alt text, dimensions, file size, composition notes, Q mark source, review result, usage paths and QA sign-off.
7. Integrate only approved assets; swap code references or asset manifest data without changing routes or image names unnecessarily. Update `docs/ASSET_PROVENANCE.md` to identify older assets as **archived abstracts**, not current photographic work.
8. Keep an explicit `PENDING` list of client photographs/rights not yet available; don't make them disappear under fabricated scenes.

## 9. Performance without sacrificing image credibility

Static site remains cheap to host and maintain:
- Master images stored/source tracked; publish derivative `webp`/`avif` only as optimized needed. Do not add a paid DAM/CMS.
- Hero: ideally 200–450KB at display breakpoint (large desktop derivative can legitimately be higher when detailed); editorial cards often 100–250KB; detailed macros require enough detail. **Quality QA overrides rigid arbitrary compression limits**.
- Implement `srcset`/responsive `sizes` or static-size derivatives when needed under Next.js static export with `unoptimized`; ensure truly responsive bytes and no 4MB hero downloaded on mobile.
- Lazy-load below-fold gallery; maintain intrinsic aspect ratios and avoid shift. No infinite autoplay media.
- Each photo should answer a buying question or enhance trust; never pad the page only to reach image count.
- Keep photo IDs/captions/rights in one source; avoid individually hardcoding every picture in React templates.

## 10. Acceptance checklist

- [ ] Every first-screen and category key image is visibly photographic and garment-first, without abstract triangles/cards.
- [ ] Brand mark comes from exact Q Workwear asset and looks genuinely printed/embroidered/sewn in context.
- [ ] At least four distinct garment categories immediately recognizable without reading labels.
- [ ] Multiple photos show fit, drape and fine workmanship rather than repeated cropped poster art.
- [ ] Lookbook adds meaningful garment sectors and techniques with distinct frames and honest disclosure.
- [ ] Actual-deck pictures checked for source rights; slide 40 client logos unpublished without explicit permission.
- [ ] No unsupported protective standards or falsely identified premises/workers/real orders.
- [ ] Display tested on 390px and 1440px plus other breakpoints, with legible red/white source mark.
- [ ] Selected/rejected contact sheet and photo/source ledger delivered for owner and Q/Tinah review.

**Never equate "logo embedded" with "Q Workwear branded product photography". Fabric/garment realism is the harder requirement.**
