# Q Workwear | Branded photography and PPT lookbook sourcing
**Date:** 2026-10-16  
**Status:** agent instructions; no claim that branded final photos or PPT extracts have already been published.  
**Sources:** official logo files under `public/images/logo/`; current `IMAGE_GENERATION_PROMPTS.md` for photographic compositions; Business Portfolio deck at https://docs.google.com/presentation/d/17BBLdYefkHXjSFnhQ_gHiz89_9gNVpeogLKa_iRkV_Y/edit.

## A. Core directive

All **new placeholder or illustrative photographs made for the site** should look convincingly branded as Q Workwear, without creating misleading evidence. The goal is an identifiable uniform manufacturer, not stock-looking anonymous apparel. Exact brand graphic must come from an existing logo file; do not ask a generative model to type the Q logo or wordmark from memory.

**Brand placement examples**
- Atelier hero: original Q mark on a sewn-in label, tailoring pattern card, hangtag or tasteful folded cloth label; keep shears/hands and fabric central.
- Corporate: discreet tonal embroidery/patch on shirt chest or interior blazer label, respecting true optical size and fabric folds.
- Hospitality: realistic chest embroidery on chef jacket and/or woven/printed patch on apron.
- Industrial: robust Q patch on jacket or hi-vis vest; **do not add certification emblems** or claim regulatory compliance.
- Branded apparel: most explicit application; Q mark/wordmark on polo, plain crewneck, cap front, perhaps a consistent brand hangtag.
Branded visuals should share neutral daylight, navy/charcoal/off-white fabric, tasteful red accents and consistent studio photo direction. No fake factory, invented employees or unapproved recognizable third-party uniforms.

## B. Exact asset placement table

| File to replace | Brand treatment | Required check |
| --- | --- | --- |
| `public/images/showcase/hero-atelier-table.webp` | branded tailor's card/tag visible but unobtrusive | 16:9 hero; important cutting action survives square crop |
| `public/images/showcase/cat-corporate-suiting.webp` | accurate chest/label embroidery | 4:5; separate blazer and shirt visible |
| `public/images/showcase/cat-hospitality-culinary.webp` | jacket/apron embroidery or patch | 4:5; coat fastening and apron readable |
| `public/images/showcase/cat-industrial-safety.webp` | Q patch on jacket/vest, no claims of PPE testing | 4:5; hi-vis trim and garment shape plausible |
| `public/images/showcase/cat-branded-apparel.webp` | official Q embroidery/print on polo/cap/T-shirt | 4:5; printed logo legible at rendered size |

Current repo brand sources:
- `public/images/logo/q-workwear-original.png`: original colored background reference, not generally directly suitable for garment compositing.
- `public/images/logo/q-workwear-red-transparent.png` and `q-workwear-white-transparent.png`: full lockups.
- `public/images/logo/q-mark-red.png` and `q-mark-white.png`: clear small emblem assets.
Use vector source from client if provided later, but do **not** infer that one currently exists. Scale, perspective warp and masked texture may help place the authentic PNG without redrawing it. Check the result at native scale; reject floating, distorted or gibberish marks.

## C. Production pipeline (reproducible)

1. Retrieve candidate source photo or regenerate clean compositions from legacy prompts. `IMAGE_GENERATION_PROMPTS.md` was written for **unbranded** bases and is **superseded by this document for branding**. Preserve source composition/art direction, replace "no logos" with a controlled compositing plan.
2. Inspect visual realism, sewing geometry, lighting and crop; no logos yet.
3. Add Q branded patch, embroidery, tag or realistic printing using existing graphic artwork, with perspective/cloth texture and appropriate lighting; keep editable layered master outside public optimized assets.
4. Export production WebP at actual required resolution, retaining originals. Avoid fake upscaling. Review at phone and desktop breakpoints, including central mobile crop, dark/light surroundings and product legibility.
5. Update `docs/ASSET_PROVENANCE.md` and image manifest with exact source photo, generated-vs-real designation, source prompt, official logo used, compositing method, editor, rights/consent status, WebP dimensions/bytes and public placement. No image should publish before this review.
6. Only modify alt text to describe the image's visual contents; do not imply an actual completed commission or real factory.

## D. PPT asset extraction, lookbook integration

Slides 1–42 contain an existing company presentation, including photographic examples. **Extract photos only if their origin, permission and suitability are established.** A picture inside the deck is not automatically an original Q Workwear job.

Required agent steps:
1. Inspect deck content and actual rendered slides, including background photos embedded as layout/slide images. Do not rely solely on text outline: some slides have zero explicit page elements but can still have meaningful imagery.
2. Export original media from deck if technically feasible using authorised Google access, preserving originals, source slide no., title and source metadata. Avoid cropped screenshots when the original embedded image is available. Keep raw extracts in a private intake/staging folder until approved.
3. Make `docs/LOOKBOOK_ASSET_MANIFEST.md` as a maintained Markdown table with `asset_id | slide | sector | what visibly appears | original file/source | owner/permission | Q-produced? | approved_for_web? | real_or_illustrative | caption | public_path | state`. Start "permission unknown" and "blocked" rather than inferring rights. Do not invent image content on visually uninspected slides.
4. Produce a priority shortlist for client review: corporate (7–10), medical (11–15), industrial (16–24), sports (25–26), PPE (27–34), cleaning (35–39), subject to actual visual inspection.
5. Verify publishing permissions for any identifiable people/client logos/third-party photography. If owner confirms photo of a real Q delivery, place in "Selected work" with factual caption. If not, it may at most be an approved illustrative "uniform example", never proof.
6. Maintain a distinct "Q-branded illustrative concepts" lane and a "Q Workwear completed work" lane. If no real-work rights exist, publish only "Uniform inspirations"/"Product range" with transparent wording.
7. Add lookbook cards to `/work` using content mapped to canonical category IDs; deep link to `/products?category=...` or `/contact?product=...`. Keep them simple, responsive, lightweight, keyboard accessible.
8. Never append external copyrighted logos, generate false uniforms for identifiable clients, or pretend clients supplied permission.

## E. Notes from source deck (requires agent visual verification)

- Slides 2–6: business introduction, mission/values, product breadth and protection vocabulary.
- Slides 7–10: corporate/front desk; slides 11–15: medical.
- Slides 16–24: factory/technical/agriculture workwear; slides 25–26: sportswear.
- Slides 27–34: PPE; slides 35–39: cleaning and boots/gloves.
- Slide 40 mentions clients but is **not** proof of permission for public client logos.
- Slide 41 contains business contact email and phone-number candidates; confirm with client first.

## F. QA and publication gates

- Branding is legible yet not visually intrusive or falsely applied to an unapproved third-party work image.
- No invented logo, distorted typography, bad anatomy, illogical closures/buttons or incorrect safety markings.
- Every photo on Home, Collection, Lookbook and About has asset provenance and an honest visual category.
- Mobile images crop well and load efficiently; no blank/404 assets or major layout shift.
- Image reuse across pages is intentional; category images are still understandable independently.
- Client sign-off remains pending until recorded in the asset manifest, not assumed from providing the PPT.

**Handoff dependencies:** request original high-resolution Q logo (prefer SVG/AI/PDF if available), permissioned high-res photos from deck or separate media, and explicit guidance on real-vs-concept lookbook labeling. Do not block a functional site while waiting for client assets; keep placeholders with truthful captions.
