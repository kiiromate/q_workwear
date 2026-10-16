# Website assets and provenance record

**Last Updated:** 2026-10-16  
**Status:** Branded illustrative placeholders actively composited with authentic Q Workwear logo assets.

The five showcase images are bespoke illustrative studies designed to demonstrate garment styles and atelier craft. They incorporate the **authentic Q Workwear logo files from `public/images/logo/`** in natural positions (tailor specification cards, woven garment labels, chef crests, heavy industrial patches, and 3D puff embroidery). They illustrate capability and aesthetic direction; they are **not** documentary evidence of specific workshop premises, staff portraits, or completed client orders.

## Showcase Assets & Compositing Register

| Slot | Source Pipeline | Official Brand Mark Used | Placement & Technique | Production WebP Path |
|---|---|---|---|---|
| **Opening Hero** (Table) | `scripts/generate_atelier_visuals.py`, `create_hero_atelier` | `public/images/logo/q-mark-red.png` (80px height, Lanczos) | Centered tailor's specification card with topstitch border & brass pin | `public/images/showcase/hero-atelier-table.webp` (1920×1080) |
| **Corporate Suiting** | Same script, `create_corporate_showcase` | `public/images/logo/q-mark-red.png` (72px height, Lanczos) | Woven brand label pinned on chest placket with red accent stripe | `public/images/showcase/cat-corporate-suiting.webp` (1200×900) |
| **Hospitality & Culinary** | Same script, `create_hospitality_showcase` | `public/images/logo/q-mark-white.png` (64px height, Lanczos) | Chef jacket chest crest with red border topstitch | `public/images/showcase/cat-hospitality-culinary.webp` (1200×900) |
| **Industrial & Safety** | Same script, `create_industrial_showcase` | `public/images/logo/q-mark-white.png` (70px height, Lanczos) | Heavy-duty Cordura patch on navy drill chest with safety-red border | `public/images/showcase/cat-industrial-safety.webp` (1200×900) |
| **Branded Apparel** | Same script, `create_branded_showcase` | `public/images/logo/q-mark-white.png` (76px & 52px, Lanczos) | 3D puff embroidery badge on polo left chest and twill cap front panel | `public/images/showcase/cat-branded-apparel.webp` (1200×900) |
| **Craftsmanship** (Archive) | Same script, `create_craftsmanship_showcase` | `public/images/logo/q-mark-red.png` (64px height, Lanczos) | Kraft paper pattern maker's stamp | `public/images/showcase/tailor-craftsmanship.webp` (1200×900) |

## Authentic Brand Identity Assets

The red and white logos in `public/images/logo/` are authentic client-supplied assets:
- `q-workwear-original.png`: Original client mark on red background (color and proportions reference).
- `q-workwear-red-transparent.png` and `q-workwear-white-transparent.png`: Transparent full lockups (emblem + "Q WORKWEAR UNIFORMS & SAFETY").
- `q-mark-red.png` and `q-mark-white.png`: Isolated tight-crop emblem marks (184×235) for crisp rendering on UI components, navigation, and garment compositing.

Typography: Barlow Regular (400), Medium (500), and SemiBold (600) are self-hosted in `public/fonts/` under the SIL Open Font License (`public/fonts/OFL.txt`). Zero external font or tracking requests occur at runtime.

## Presentation Deck & Lookbook Governance

Images extracted from `docs/BUSINESS PORTFOLIO.pptx` are cataloged in `docs/LOOKBOOK_ASSET_MANIFEST.md`. All unpermissioned client logos (slide 40) are strictly withheld. Client-supplied photos of real commissions will be introduced under a distinctly labeled "Selected work" section once formal permission is documented. Illustrative concepts remain clearly tagged as inspirations.
