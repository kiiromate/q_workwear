# Q Workwear — architecture

## Runtime

Next.js App Router, React, TypeScript and Tailwind. `next.config.mjs` uses `output: 'export'`, unoptimised images and trailing-slash routes. `pnpm build` produces `out/` for a static host such as Vercel or Cloudflare Pages. There is no application database, server-side form handler or mail service.

The known public site is `https://qworkwear.vercel.app`. Local redesign work does not change that deployment. `NEXT_PUBLIC_SITE_URL` can override the metadata origin in `src/lib/config.ts` before a build.

## Content and UI

- `src/content/site.ts`: identity, navigation and contact configuration.
- `src/content/catalog.ts`: four collections and sixteen generic enquiry options.
- `src/content/pages.ts`: About copy and FAQs.
- `src/app/globals.css`: visual tokens, layout, breakpoints and reduced motion.
- Shared Header, Footer, Logo and mobile navigation support all five routes.
- `/work` is an image-led Lookbook, not a database of completed orders.

Collections and Contact use Next search parameters under Suspense so the static export remains valid. Filters push the selected category into browser history; query changes and Back/Forward update the selection.

## Enquiry flow

A garment link opens `/contact?product=...`. A fallback message can be passed as `message` (legacy `draft` is also accepted). The form validates required name, email and garment plus a positive integer quantity when supplied. It URL-encodes the enquiry into a `mailto:` draft. The visitor must send it using a configured email application. Preparing a draft neither sends an enquiry nor proves delivery.

`src/lib/whatsapp.ts` creates a `wa.me` link only when the number passes validation and the approval flag is true. Otherwise it returns a contact link with the original message preserved. Unknown numbers are empty and the contact page omits those channels.

The native mobile `<dialog>` supplies modal focus containment and Escape handling. Opening it locks background scroll; closing restores focus. Moving to the desktop navigation width also closes the dialog.

## Assets

Five image paths are reused across the site; see `IMAGE_GENERATION_PROMPTS.md`. Images reserve their aspect ratio to reduce layout shift. Barlow fonts are self-hosted with the included SIL license. No external font request is needed at runtime. The client’s logo is used through small-size emblem crops, not a speculative redraw.

## Verification

`pnpm typecheck`, `pnpm build`, `pnpm test:ui` and `pnpm test:flows`. Browser checks use local Playwright and axe-core; install Chromium with `pnpm exec playwright install chromium`. Set `TEST_URL` to the server under test; default is `http://localhost:3016`. Static export can be served with `python -m http.server 3016 --bind 127.0.0.1 --directory out`.

Check real delivery and live deployment separately. No performance score, hosting guarantee, universal security claim or domain price is implied by this architecture.
