# Q Workwear

A photography-led workwear showcase for Quddus and Tinah in Kigali. Next.js App Router, React, TypeScript and Tailwind; static export for Vercel or Cloudflare Pages.

## Current design correction / agent start (2026-10-19)

**The existing branch passed technical smoke tests but failed owner visual review.** Start with [AGENTS.md](AGENTS.md), then read the [Afrikanda-reference design contract](docs/CLIENT_REFERENCE_VISUAL_ACCEPTANCE_2026-10-19.md), [photoreal Q garment image prompts](docs/PHOTOREAL_Q_WORKWEAR_IMAGE_PRODUCTION_2026-10-19.md), and [agent execution checklist](docs/CORRECTIVE_BUILD_EXECUTION_2026-10-19.md). Work with [visual asset registry](docs/VISUAL_ASSET_REGISTRY.md), [reference comparison evidence](docs/REFERENCE_PARITY_AUDIT.md) and [client review pack template](docs/CLIENT_REVIEW_PACK_2026-10-19.md). Do not publish 2D geometric posters with a pasted logo as finished garment photography. Do not declare reference parity without actual browser captures. More photographs may be used if each adds real product value and rights permit.

## Earlier next build handoff (2026-10-16)

**Agents: start with [AGENTS.md](AGENTS.md).** The current canonical implementation brief is [Next build agent handoff](docs/NEXT_BUILD_AGENT_HANDOFF_2026-10-16.md), with [branded photo and PPT lookbook sourcing](docs/BRANDED_MEDIA_LOOKBOOK_2026-10-16.md) and [interactive SVG specification](docs/INTERACTIVE_GARMENT_SVG_SPEC.md).

The clients prioritize simple, direct navigation inspired by the **main [Afrikanda Holdings site](https://afrikandaholdings.com/)**, distinctive but low-maintenance garment interactions, **authentic Q Workwear branded** illustrative photography, and considered reuse of the [Business Portfolio slide deck](https://docs.google.com/presentation/d/17BBLdYefkHXjSFnhQ_gHiz89_9gNVpeogLKa_iRkV_Y/edit) where publishing rights are confirmed. Current images are staging concepts, not documentary client work. These directives govern the **next build**, not the current live deployment.

## Develop

```sh
pnpm install
pnpm dev --port 3016
```

Open `http://localhost:3016`. The revised site is local until separately deployed; the existing public site is `https://qworkwear.vercel.app`.

## Verify

```sh
pnpm typecheck
pnpm build
pnpm exec playwright install chromium
# With the local server running:
pnpm test:ui
pnpm test:flows
```

The browser check uses Playwright and axe-core across five routes and five viewport widths. Screenshots and results go into `.impeccable/review/` (ignored). Override `TEST_URL` to check a different local or preview server. This is automated coverage, not a claim of universal accessibility or performance certification.

## Content and contact

- `src/content/site.ts`: business identity, navigation and approved contact channels.
- `src/content/catalog.ts`: four collections and generic garment enquiry options.
- `src/content/pages.ts`: concise About copy and FAQs.
- `/work` is a Lookbook, not a record of invented client commissions.
- The quote form opens a mail draft addressed to `qworkwearsolution@gmail.com`, the email supplied in the project context. It does not send mail or store submissions. Actual delivery remains a separate verification step.
- Phone and WhatsApp numbers are empty and verification flags are false. Configure an approved international number and test it before enabling a channel.

## Five image replacements

Generate or supply one opening image and four collection images using [IMAGE_GENERATION_PROMPTS.md](IMAGE_GENERATION_PROMPTS.md). Replace these files:

- `public/images/showcase/hero-atelier-table.webp`
- `public/images/showcase/cat-corporate-suiting.webp`
- `public/images/showcase/cat-hospitality-culinary.webp`
- `public/images/showcase/cat-industrial-safety.webp`
- `public/images/showcase/cat-branded-apparel.webp`

The same images are reused on Home, Collections, Lookbook and About. Catalogue rows do not require separate photographs. Images must survive the documented portrait and landscape crops. The existing illustrations stay in place during development; see [asset provenance](docs/ASSET_PROVENANCE.md).

## Handoff

- [Product brief](PRODUCT.md)
- [Design system](DESIGN.md)
- [Content verification](docs/CONTENT_STATUS.md)
- [Delivery plan](docs/DELIVERY_PLAN.md)
- [Client message](docs/CLIENT_MESSAGE_DRAFT.md)

The invoice and financial agreement are not changed by this redesign. Do not claim public deployment, shared Drive access, verified contact delivery or client approval without checking those exact outcomes.
