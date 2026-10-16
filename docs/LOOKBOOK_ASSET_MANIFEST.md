# Q Workwear | PPT lookbook asset manifest

**Status:** authoritative asset registry & intake tracking ledger.  
**Last Audit Date:** 2026-10-16  
**Source Presentation:** Local master at `docs/BUSINESS PORTFOLIO.pptx` (42 slides, 45 embedded media files).  
**Core Editorial Directive:** As confirmed by project leadership, the company profile presentation is insightful context on what Q Workwear has produced or done in the past. It is **not** representative of the full breadth of what they can do now or in the future. The website positioning must **not** be rigid or bound to certain articles only; Q Workwear operates as a versatile, bespoke uniforms manufacturer for any team, sector, or working environment in Kigali.  
**Operational Policy:** Do not infer public publication consent merely from inclusion in the deck. All unpermissioned third-party client logos (Slide 40) and third-party stock/reference images remain strictly BLOCKED from public display.

---

## 1. Tracking scheme

Required fields:
- `Asset ID`: Unique reference code (e.g., `PPT-SL08-01`, `SHO-HERO-01`).
- `Source / Slide`: Deck slide number or generation prompt reference.
- `Sector`: Product category or business domain.
- `Visible Subject / Description`: Factual visual contents.
- `Source File / Location`: Staging path or original URL.
- `Q-Produced?`: Yes / No / Unknown / Illustrative concept.
- `Publication Consent`: Granted / Pending / Blocked / Internal only.
- `Visual Class`: `APPROVED_REAL_WORK` | `APPROVED_CONCEPT` | `PENDING_PERMISSION` | `INVENTORIED` | `REJECTED` | `BLOCKED`.
- `Approved Caption`: Factual visitor-facing caption.
- `Destination`: Public website route / component.
- `Status`: Current operational gate status.

---

## 2. Source presentation slide-by-slide audit register

| Asset ID | Deck Slide | Sector | Visible Subject / Topic | Original File / Source | Q-produced? | Publication Consent | Visual Class | Approved Caption | Destination | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PPT-SL01 | Slide 1 | Brand | Title / cover: Q Workwear Kigali | `ppt/media/image1.jpg` | Q Brand | Approved for identity | Identity | Q Workwear | Internal ref | INVENTORIED |
| PPT-SL02-06 | Slides 2–6 | Corporate / Positioning | Mission, values, uniform & protective vocabulary | Deck slide text | N/A (Text) | Client approved copy | Copy | Positioning & values | About / Home | INVENTORIED |
| PPT-SL07-10 | Slides 7–10 | Corporate | Front desk, executive suits, office shirts | `image12.jpg`, `image10.jpg`, `image3.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (Corporate) | BLOCKED |
| PPT-SL11-15 | Slides 11–15 | Healthcare / Medical | Dust coats, medical tunics, surgeon caps | `image7.jpg`, `image48.jpg`, `image5.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (Medical) | BLOCKED |
| PPT-SL16-24 | Slides 16–24 | Industrial / Technical | Overalls, heavy jackets, waistcoats, PVC aprons | `image20.jpg`, `image2.jpg`, `image9.jpg`, `image11.jpg`, `image45.jpg`, `image18.jpg`, `image8.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (Industrial) | BLOCKED |
| PPT-SL25-26 | Slides 25–26 | Sportswear | Team jerseys, track apparel, athletic polos | `image4.jpg`, `image25.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (Sports) | BLOCKED |
| PPT-SL27-34 | Slides 27–34 | PPE / Protective | Reflective vests, work gloves, head covering, eyewear | `image14.jpg`, `image21.jpg`, `image16.jpg`, `image22.jpg`, `image19.jpg`, `image17.jpg`, `image15.jpg`, `image30.jpg`, `image26.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (PPE) | BLOCKED |
| PPT-SL35-39 | Slides 35–39 | Cleaning / Facility | Cleaning uniforms, gumboots, latex gloves | `image23.jpg`, `image27.jpg`, `image31.png`, `image33.jpg` | Unknown / Portfolio ref | Pending review | PENDING_PERMISSION | TBD | Lookbook (Cleaning) | BLOCKED |
| PPT-SL40 | Slide 40 | Clients | Client list / logos ("Our clients") | `image42.jpg`, `image34.jpg`, `image43.png`, `image37.jpg`, `image29.jpg`, `image38.png`, `image32.jpg`, `image35.png`, `image39.jpg`, `image36.jpg` | Third-party logos | STRICTLY PROHIBITED without written client release | REJECTED | None | None | BLOCKED |
| PPT-SL41 | Slide 41 | Contact | Phone numbers (+250 782744231, +250 788682940), email | Deck text | Business data | Email approved; phones unverified | Contact info | Contact info | Contact page | PENDING_PERMISSION |
| PPT-SL42 | Slide 42 | Closing | Presentation closing slide ("Murakoze") | Deck text / `image1.jpg` | N/A | Internal only | Internal | None | None | INVENTORIED |

---

## 3. Website showcase image slots (Current vs Target)

| Asset ID | Slot Path | Dimensions | Current State | Target Class | Required Action | Status |
| --- | --- | --- | --- | --- | --- | --- |
| SHO-HERO-01 | `public/images/showcase/hero-atelier-table.webp` | 1920×1080 | PIL geometric illustration (shears, cloth, chalk) | Illustrative Concept | Brand composite with official Q mark on tag/card | INVENTORIED (Awaiting branded composite) |
| SHO-CAT-01 | `public/images/showcase/cat-corporate-suiting.webp` | 1200×900 | PIL geometric illustration (blazer, shirt, hanger) | Illustrative Concept | Brand composite with discreet Q embroidery/tag | INVENTORIED (Awaiting branded composite) |
| SHO-CAT-02 | `public/images/showcase/cat-hospitality-culinary.webp` | 1200×900 | PIL geometric illustration (chef coat, apron) | Illustrative Concept | Brand composite with Q patch/embroidery on jacket | INVENTORIED (Awaiting branded composite) |
| SHO-CAT-03 | `public/images/showcase/cat-industrial-safety.webp` | 1200×900 | PIL geometric illustration (work jacket, hi-vis) | Illustrative Concept | Brand composite with Q patch (no fake PPE certs) | INVENTORIED (Awaiting branded composite) |
| SHO-CAT-04 | `public/images/showcase/cat-branded-apparel.webp` | 1200×900 | PIL geometric illustration (polo, tee, cap) | Illustrative Concept | Brand composite with authentic Q logo print/embroidery | INVENTORIED (Awaiting branded composite) |
| SHO-CRAFT-01 | `public/images/showcase/tailor-craftsmanship.webp` | 1200×900 | PIL geometric illustration | Orphan Asset | Unreferenced in code; retain or clean up safely | INVENTORIED (Orphan) |

---

## 4. Unused Lookbook Assets on Disk

The following files exist in `public/images/lookbook/` from legacy generation passes, but are currently **unreferenced** in `src/app/work/page.tsx` (which renders `categories` from `catalog.ts`):
- `lookbook-apron.webp` (1200×900, 74.4 KB)
- `lookbook-chef.webp` (1200×900, 32.1 KB)
- `lookbook-corporate.webp` (1200×900, 9.6 KB)
- `lookbook-hands.webp` (1200×900, 354.2 KB)
- `lookbook-industrial.webp` (1200×900, 95.5 KB)

These will be evaluated in Phase P4 for either inclusion in the curated lookbook or phased retirement.

---

## 5. Website display guardrails

Show **Uniform inspirations** or **Product range** for approved illustrative examples. A separate **Selected work** area requires verified Q-produced assets and publication permission. Each card has an accessible title, short relevant factual caption and link into a category/quote. Never mix actual client projects and generated Q-branded concepts without a clear visual label.

Coordinate source files and rights decisions using [Branded media plan](BRANDED_MEDIA_LOOKBOOK_2026-10-16.md).
