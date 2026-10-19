# Q Workwear | Client review presentation pack
**STATUS: TEMPLATE, NOT READY TO SHARE.** Do not mark complete or send to Quddus and Tinah until the actual screenshots/assets/QA have been produced and reviewed by Kaze.

## 1. What changed
Write a concise client-friendly before/after account of Q Workwear's appearance, photography, collections browsing, mobile navigation and quotation journey. No implementation jargon.

## 2. How the reference was respected
Screenshot pairs: Afrikanda desktop/mobile vs Q Workwear desktop/mobile, nav open and first scroll. Cite `docs/REFERENCE_PARITY_AUDIT.md` with verified details.
- The parts we intentionally aligned:
- The few things we did differently and why customers benefit:

## 3. Photography contact sheet and brand
Show photographic candidate board, not abstract visuals.
- 3 hero alternatives, selected/rejected reasons:
- 4 main category final covers with exact Q embroidery/labels:
- 12–18 curated lookbook images (where obtained/approved) spanning garment styles:
- Five macro details proving fabrics/branding/render accuracy:
- Q original logo comparison before/after compositing:
- Illustrative/actual work designation, and image rights/approval:

Do not claim these images exist until files are confirmed. Link `docs/VISUAL_ASSET_REGISTRY.md` for exact evidence.

## 4. Screenshots and buyer journeys
- Homepage @390 and @1440 (full-page + first fold)
- Collections + hover/click/tap interactive garment selector, if retained
- Lookbook overview and one expanded sector
- Mobile nav opened and keyboard focus
- Contact after clicking one category/product and mail draft shown
- Side-by-side with baseline captured before corrective build

## 5. Quality verification
| Check | Evidence/run command | Actual result | Owner action |
| --- | --- | --- | --- |
| TypeScript | `pnpm typecheck` | Not run | Wait |
| Static export | `pnpm build` | Not run | Wait |
| Layout/a11y smoke | `pnpm test:ui` | Not run | Wait |
| Flow tests | `pnpm test:flows` | Not run | Wait |
| Keyboard + focus manually | Browser check | Not done | Wait |
| Reduced motion | Browser check | Not done | Wait |
| 390/1440 visual critique | Screenshots | Not done | Wait |
| Photo/logo realism check | Source vs composited contact sheet | Not done | Wait |
| Image rights | Media registry | Unknown | Wait |
| Client email/WhatsApp | Controlled real test | Not done | Wait |

## 6. Decisions for Q and Tinah
Ask for concise approvals on:
1. Preferred hero & brand photography style (show 2–3 real finalists).
2. Whether the sample gallery reflects what Q can actually offer; sectors to add/remove.
3. Which deck or real client photos they explicitly authorize for public display, if any.
4. Contact phone/WhatsApp channel(s), or email-only if pending.
5. Overall layout and navigation satisfaction relative to Afrikanda and permission to publish.

## 7. Release decision
- Preview URL (if genuinely deployed):
- Build branch / commit:
- Design reviewer:
- Client decisions recorded:
- Approved for public release: **NO**
- Known blockers:

No production changes without recorded sign-off.
