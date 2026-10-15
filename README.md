# Q Workwear

A photography-led workwear showcase for Quddus and Tinah in Kigali. Next.js App Router, React, TypeScript and Tailwind; static export for Vercel or Cloudflare Pages.

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
