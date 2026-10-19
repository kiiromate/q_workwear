# Website assets and provenance record

**Last Updated:** 2026-10-19 (`feat/photoreal-showroom-issue-3`)  
**Status:** Photorealistic commercial garment studies integrated (`SELECTED_INTERNAL`), composited post-production with authentic Q Workwear logo assets from `public/images/logo/`. Ready for Kaze design review prior to client preview.

> **2026-10-19 Corrective Update (Issue #3):** All previous 2D geometric Pillow illustrations (`scripts/generate_atelier_visuals.py` and `scripts/generate_lookbook_visuals.py`) that failed visual QA have been retired (`ARCHIVED_ABSTRACT`) and replaced with photorealistic garment photography processed by `scripts/composite_photoreal_assets.py`. See [`docs/VISUAL_ASSET_REGISTRY.md`](VISUAL_ASSET_REGISTRY.md) for the complete asset-by-asset metadata register and [`docs/review-evidence-2026-10-19/contact-sheets/`](review-evidence-2026-10-19/contact-sheets/) for 200%-zoom before/after logo compositing evidence.

## 1. Production Photorealistic Assets & Compositing Register

Every active photograph in `public/images/showcase/`, `public/images/editorial/`, and `public/images/lookbook/` is an illustrative garment study (`image_class: illustrative_concept`) showing realistic textile drape, construction details, and natural Q Workwear branding placements (woven cuff labels, stitched chest patches, breast pocket embroidery, and cap crown embroidery). None of these images are claimed to depict named clients, Q Workwear founders/staff, or a specific factory interior.

| ID | Production WebP Path(s) | Clean Master Path | Official Brand Mark Used | Physical Placement & Blending Technique | Dimensions & Size |
|---|---|---|---|---|---|
| **H01** | `public/images/showcase/hero-atelier-table.webp` (`editorial/hero-atelier-table.webp`) | `docs/review-evidence-2026-10-19/masters/H01_master.jpg` | `public/images/logo/q-workwear-red-transparent.png` | Stitched woven damask cuff label (`40px` width, rotated `+58°`, luminance weave transfer `0.18` at `(738, 347)`) | `1376×768` (`180,410 B`) |
| **H02** | `public/images/editorial/hero-uniform-rail.webp` | `docs/review-evidence-2026-10-19/masters/H02_master.jpg` | `q-mark-red.png` & `q-mark-white.png` | Left-chest embroidery on chef coat (`(652, 345)`), work jacket (`(896, 395)`), and cream polo (`(1115, 360)`) | `1376×768` (`93,892 B`) |
| **H03** | `public/images/editorial/hero-model-detail.webp` | `docs/review-evidence-2026-10-19/masters/H03_master.jpg` | `q-mark-red.png` | Subtle shirt cuff monogram (`15px` width, rotated `-18°`, weave transfer `0.18` at `(624, 407)`) | `1376×768` (`137,184 B`) |
| **C01** | `public/images/showcase/cat-corporate-suiting.webp` (`editorial/cat-corporate-suiting.webp`, `lookbook/lookbook-corporate.webp`) | `docs/review-evidence-2026-10-19/masters/C01_master.jpg` | `q-mark-white.png` | Navy blazer breast pocket crest (`17px` width, rotated `-1.5°`, weave transfer `0.18` at `(672, 355)`) | `896×1200` (`96,096 B`) |
| **C03** | `public/images/editorial/corporate-tailoring-detail.webp` | Optical macro crop of `H03_master.jpg` | `q-mark-red.png` | Close-up suiting sleeve and embroidered light-blue shirt cuff | `1000×750` (`116,618 B`) |
| **HOS01** | `public/images/showcase/cat-hospitality-culinary.webp` (`editorial/cat-hospitality-culinary.webp`, `lookbook/lookbook-chef.webp`) | `docs/review-evidence-2026-10-19/masters/HOS01_master.jpg` | `q-mark-red.png` & `q-workwear-white-transparent.png` | Chef coat left-chest embroidery (`(462, 425)`) + olive canvas apron pocket mark (`(638, 610)`) | `896×1200` (`91,574 B`) |
| **HOS03** | `public/images/editorial/hospitality-apron-detail.webp` (`lookbook/lookbook-apron.webp`) | Optical macro crop of `HOS01_master.jpg` | `q-workwear-white-transparent.png` | Close-up of olive heavy canvas apron pocket, brass corner rivets, and woven straps | `800×1066` (`70,462 B`) |
| **IND01** | `public/images/showcase/cat-industrial-safety.webp` (`editorial/cat-industrial-safety.webp`, `lookbook/lookbook-industrial.webp`) | `docs/review-evidence-2026-10-19/masters/IND01_master.jpg` | `q-workwear-white-transparent.png` & `q-mark-red.png` | Stitched navy rectangular chest patch (`(210, 388)`) + hi-vis vest neck tag (`(678, 285)`) | `896×1200` (`104,040 B`) |
| **IND02** | `public/images/editorial/industrial-coverall.webp` | `docs/review-evidence-2026-10-19/masters/IND02_master.jpg` | `q-workwear-white-transparent.png` | Stitched navy rectangular pocket patch on one-piece coverall (`34px` width at `(368, 336)`) | `896×1200` (`83,560 B`) |
| **IND03** | `public/images/editorial/industrial-seam-detail.webp` | `docs/review-evidence-2026-10-19/masters/IND03_master.jpg` | `q-mark-white.png` | Direct twill embroidery above heavy brass zipper & bar-tack seam (`34px` width, `+20°` at `(420, 285)`) | `1200×896` (`282,392 B`) |
| **BR01** | `public/images/showcase/cat-branded-apparel.webp` (`editorial/cat-branded-apparel.webp`) | `docs/review-evidence-2026-10-19/masters/BR01_master.jpg` | `q-workwear-white-transparent.png` & `q-mark-white.png` | Navy piqué polo left chest (`(448, 395)`) + structured 6-panel twill cap front crown (`(718, 835)`) | `896×1200` (`92,498 B`) |
| **BR02** | `public/images/editorial/branded-polo-fit.webp` | `docs/review-evidence-2026-10-19/masters/BR02_master.jpg` | `q-workwear-white-transparent.png` | Left-chest embroidery on charcoal honeycomb piqué polo (`46px` width at `(618, 345)`) | `896×1200` (`346,746 B`) |
| **BR03** | `public/images/editorial/branded-cap-tee-detail.webp` | Optical macro crop of `BR01_master.jpg` | `q-mark-white.png` | Close-up of structured 6-panel navy cap crown embroidery and folded cotton tee | `1000×750` (`59,468 B`) |
| **CR02** | `public/images/showcase/tailor-craftsmanship.webp` (`editorial/atelier-cuff-detail.webp`, `lookbook/lookbook-hands.webp`) | Optical macro crop of `H01_master.jpg` | `q-workwear-red-transparent.png` | Close-up of artisan hands finishing navy shirt cuff with woven Q Workwear label and swatches | `1000×750` (`118,824 B`) |

## 2. Authentic Brand Identity Assets

The red and white logos in `public/images/logo/` are authentic client-supplied assets:
- `q-workwear-original.png`: Original client mark on red background (color and proportions reference).
- `q-workwear-red-transparent.png` and `q-workwear-white-transparent.png`: Transparent full lockups (emblem + "Q WORKWEAR").
- `q-mark-red.png` and `q-mark-white.png`: Isolated tight-crop emblem marks (`184×235`) for crisp rendering on UI components, navigation, and garment compositing.

Typography: Barlow Regular (400), Medium (500), and SemiBold (600) are self-hosted in `public/fonts/` under the SIL Open Font License (`public/fonts/OFL.txt`). Zero external font or tracking requests occur at runtime.

## 3. Presentation Deck & Lookbook Governance

All 42 slides and 45 embedded media files in `docs/BUSINESS PORTFOLIO.pptx` were privately audited during Wave A (`2026-10-19`):
- Third-party client logos on Slide 40 (`image42.jpg`–`image45.png`) are strictly withheld (`BLOCKED_RIGHTS`).
- Product slide images (Slides 8–39) are unverified supplier/stock catalog cutouts and are withheld (`BLOCKED_RIGHTS`) unless Quddus and Tinah confirm commercial web rights or supply original photography of Q-made commissions.
