# Q Workwear | Five-image integration handoff
Date: 2026-10-15
Status: generated and converted locally; **not committed to GitHub in this documentation PR**.

## Existing official brand files
- public/images/logo/q-workwear-original.png: client's original white logo on red textured backdrop.
- public/images/logo/q-workwear-red-transparent.png: full red lockup on transparent background.
- public/images/logo/q-workwear-white-transparent.png: full white lockup on transparent background.
- public/images/logo/q-mark-red.png and q-mark-white.png: existing small icon crops.
- src/components/common/Logo.tsx currently displays a mark image + literal text "Q Workwear". Review full lockup visibility at header size and consider full official lockup in About/footer before changing the shared logo component. Never create a new approximate Q or discard supplied originals.

## Generated replacement inventory
The following *new* images were generated in the project conversation and converted to WebP at quality 86. They are provided as a separate downloadable ZIP for the implementer; this GitHub branch does **not** contain these binary replacements. Copy to the exact paths after owner/visual review.

| Target path in repo | Native dimensions | Compressed size | Content | Suggested alt |
| --- | --- | --- | --- | --- |
| public/images/showcase/hero-atelier-table.webp | 1672×941 | 202406 B | Anonymous hands using shears on charcoal fabric | Hands cutting charcoal fabric with tailoring shears |
| public/images/showcase/cat-corporate-suiting.webp | 1122×1402 | 132350 B | Navy blazer and pale blue shirt | Navy blazer and pale blue office shirt on hangers |
| public/images/showcase/cat-hospitality-culinary.webp | 1122×1402 | 91258 B | Chef jacket and olive apron | White chef jacket and olive apron on a rail |
| public/images/showcase/cat-industrial-safety.webp | 1122×1402 | 143348 B | Navy work jacket/trousers and hi-vis vest | Navy industrial workwear and high-visibility vest |
| public/images/showcase/cat-branded-apparel.webp | 1122×1402 | 165318 B | Navy polo, muted-red T-shirt and cap | Plain polo, T-shirt and cap for custom branding |

Source: generated with OpenAI image-generation tool in the Q Workwear ChatGPT discussion on 2026-10-15, from IMAGE_GENERATION_PROMPTS.md, then converted without upscaling. Retain originals with the client delivery assets. These are **illustrative editorial concepts** and are not photographs of Q Workwear products, customers, completed client jobs, workplace or PPE certification. Client review and applicable terms/rights verification remain required.

### Quality checks
- Source images are below aspirational resolutions stated in IMAGE_GENERATION_PROMPTS.md (hero 2000px-wide and categories 1400px-wide). They may still be useful at current website placements. Check 2x mobile and desktop crops before accepting; do not invent detail by blind upscaling.
- Hero: confirm realistic hand and shears geometry, no unsupported workshop identification.
- Corporate: correct garment spacing and visible separate shirt.
- Hospitality: readable jacket fastening and apron pocket.
- Industrial: realistic trim, no certification claim.
- Branded: no fake logo printed on polo/cap.
- Confirm alt text with final crop; do not repeat “Q Workwear made this” in accessibility labels.

## Website integration
- Existing references already use these file names in src/components/home/Hero.tsx and src/content/catalog.ts.
- Replacing at exactly these paths requires no catalogue refactor and updates Home, Collections, Lookbook and About.
- Keep public/images/showcase/tailor-craftsmanship.webp only if actively referenced; remove orphan media after a code search.
- Review docs/ASSET_PROVENANCE.md and docs/CONTENT_STATUS.md as part of the **asset implementation commit**, not before binaries arrive.
- Do not repurpose the deck's “Our clients” slide or product pictures as completed jobs without permission; deck material is scope context.

## Remaining client approvals
1. Explicit approval to use generated editorial images in the public website.
2. Which real garment/process/client photos they are authorised to supply.
3. Whether two numbers from Business Portfolio slide 41 are approved for publication and which receives WhatsApp.
4. Prioritise whether Medical / Cleaning / Sports / PPE warrant visitor-visible catalogue categories.
