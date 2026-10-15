# Q Workwear — website requirements

## Purpose

Help business buyers discover custom workwear in Kigali, choose a collection or garment direction, and start an order-specific quotation conversation with Q Workwear.

Owners: Quddus and Tinah. Client reference supplied: Afrikanda Holdings / Exotiká. The redesign adopts clear visual browsing without copying unrelated content or claiming additional reference-site features.

## Experience

- Home: concise offer, one wide image, four collections, short introduction, ordering steps and quote action.
- Collections (`/products`): four collection images, sixteen generic garment enquiry options and URL-based category filtering. Back and Forward restore the selection.
- Lookbook (`/work`): four clothing studies, not fabricated customer case studies.
- About: a short introduction grounded in the known business identity.
- Contact: labelled, natively validated form that opens a mail draft; direct business email; concise FAQs. It is not a server-submitted form.

## Design commitments

Cinematic but simple. Photography leads; copy explains only what is useful. No public drafting comments, redundant badges, material-spec decoration or invented proof. See the built design system in `DESIGN.md` and the product boundaries in `PRODUCT.md`.

Five images are sufficient: one craft opening image and one per collection. Assume they will be supplied; do not block layout work on final photography. Generated imagery must not be presented as real clients, founders, premises, certifications or completed orders.

## Technical constraints

Next.js static export, TypeScript and Tailwind. Suitable for static hosting without CMS, database, authentication, cart or checkout. Keep enquiry context in the contact URL. Contact numbers remain hidden until approved and validated; email is the supplied `qworkwearsolution@gmail.com`.

## Verification and launch

Typecheck and production build must pass. Browser checks cover five routes at narrow mobile, mobile, tablet and desktop widths, plus image loading, overflow, accessibility automation, menu focus, filters and mail-draft context. Automated checks are not a complete accessibility certification or proof of delivery.

Final imagery, business contact delivery and public deployment are separate confirmations. Do not claim the new version is live until its exact public URL has been checked. Pricing, minimum orders, certifications and lead times are order-specific unless the owners approve a published policy.
