# Website assets

The current five showcase images are existing project illustrations, not photographs or proof of completed Q Workwear orders. They remain in place solely to preserve the image slots during development. Replace them using `IMAGE_GENERATION_PROMPTS.md`; the layout needs no additional imagery.

| Slot | Existing source | Replacement path |
|---|---|---|
| Opening image; reused for craft/about | `scripts/generate_atelier_visuals.py`, `create_hero_atelier` | `public/images/showcase/hero-atelier-table.webp` |
| Corporate collection | Same script, `create_corporate_showcase` | `public/images/showcase/cat-corporate-suiting.webp` |
| Hospitality collection | Same script, `create_hospitality_showcase` | `public/images/showcase/cat-hospitality-culinary.webp` |
| Industrial collection | Same script, `create_industrial_showcase` | `public/images/showcase/cat-industrial-safety.webp` |
| Branded collection | Same script, `create_branded_showcase` | `public/images/showcase/cat-branded-apparel.webp` |

The red and white transparent logos are pre-existing client-logo derivatives. The site uses emblem-only crops (`q-mark-red.png`, `q-mark-white.png`) to avoid unreadable miniature wordmarks. These are lossless crops of the original transparent assets, source rows 163–397, trimmed to the non-transparent bounding box; no geometry is redrawn. Source and transformation are embedded in each PNG’s metadata.

Barlow Regular, Medium and SemiBold are self-hosted from Google Fonts; the SIL Open Font License is included in `public/fonts/OFL.txt`. Source: `https://github.com/google/fonts/tree/main/ofl/barlow`.

For each replacement, retain the exact prompt, generation service and export filename in the project records. Use only imagery you are entitled to publish. Generated garment imagery is illustrative: it must not imply a certified safety rating, identify a fabricated founder, or stand in for a real client commission. Genuine portfolio photographs require the business’s and any identifiable subject’s permission.
