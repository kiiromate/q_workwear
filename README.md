# Q Workwear Web Platform

Official business portfolio, product catalogue, and client quotation website for **Q Workwear** in Kigali, Rwanda, owned and managed by **Quddus (Q)** and **Tinah**.

- 🌐 **Live Website Preview:** [https://qworkwear.vercel.app](https://qworkwear.vercel.app)
- 💻 **GitHub Repository:** [https://github.com/kiiromate/q_workwear](https://github.com/kiiromate/q_workwear)

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, configured for zero-cost static deployment to **Vercel** and **Cloudflare Pages**.

---

## 1. Quickstart & Local Development

### Prerequisites
- Node.js `20.x` or `22.x` / `24.x`
- `pnpm` (v9 or v11+)

### Installation & Run
```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm run dev

# 3. Open in browser
# http://localhost:3000
```

### Verification Commands
```bash
# Typecheck TypeScript codebase
pnpm run typecheck

# Production static export build (generates out/ folder)
pnpm run build
```

---

## 2. Project Architecture & Decisions

- **Static-First Generation (`output: 'export'`):** The entire application pre-renders into static HTML, CSS, JavaScript, and optimized assets in `out/`. No Node.js server or container runtime is required, delivering maximum security, sub-second load times on mobile networks in East Africa, and zero hosting costs on Cloudflare Pages free tier.
- **Single Source of Truth Content:** All site text, categories, product specifications, completed projects, and contact channels reside in `src/content/`. UI components never hardcode copy or business rules.
- **Contextual WhatsApp Conversion:** Built with `src/lib/whatsapp.ts`, enabling visitors to click once to send prefilled product or category inquiry messages. If the client's official business WhatsApp line is not yet verified, the system safely routes to `/contact` rather than sending leads to a dead link.
- **Graceful Asset Fallback:** The `PlaceholderImage` component displays bespoke SVG twill textile patterns and category emblems until real studio and workshop photography arrives from Q and Tinah.

---

## 3. Directory Structure

```
q_workwear/
├── docs/                             # Authoritative documentation suite
│   ├── PRD.md                        # Product requirements document
│   ├── DESIGN_SYSTEM.md              # Visual tokens, palette & components
│   ├── ARCHITECTURE.md               # Technical architecture & deployment
│   ├── CLIENT_CONTENT_INTAKE.md      # Client asset & information checklist
│   ├── CONTENT_STATUS.md             # Content verification register
│   └── DELIVERY_PLAN.md              # Launch milestones & next steps
├── public/                           # Static public assets
│   └── images/
│       ├── logo/                     # Brand logo & transparent assets
│       ├── products/                 # Real product photos (drop-in)
│       └── projects/                 # Real portfolio photos (drop-in)
├── src/
│   ├── app/                          # App Router pages (Home, About, Products, Work, Contact)
│   ├── components/                   # Modular UI components (catalog, portfolio, layout)
│   ├── content/                      # Content files (site.ts, catalog.ts, projects.ts, pages.ts)
│   ├── lib/                          # Utilities (whatsapp.ts, config.ts, utils.ts)
│   └── types/                        # Strict TypeScript interfaces
├── next.config.mjs                   # Static export & unoptimized images config
└── package.json
```

---

## 4. How to Update Content & Photography

### A. Updating Contact Details (Phone & WhatsApp)
When Quddus and Tinah supply their official business numbers:
1. Open `src/content/site.ts`.
2. Update `siteConfig.contact.phone` and `siteConfig.contact.whatsappNumber`.
3. Set `isPhoneVerified: true` and `isWhatsappVerified: true`.
4. Run `pnpm run build` to update the static build.

### B. Adding Real Product Photography
1. Save high-resolution photos in `public/images/products/` (e.g. `executive-shirt.webp`).
2. Open `src/content/catalog.ts`.
3. Locate the corresponding product entry and add the image path: `image: '/images/products/executive-shirt.webp'`.
4. Set `isDraft: false`.

### C. Adding Real Completed Work / Portfolio Case Studies
1. Open `src/content/projects.ts`.
2. Add or update items in `projects` array with confirmed client names and deliverables.
3. Drop photos into `public/images/projects/`.

---

## 5. Cloudflare Pages Deployment Configuration

| Setting | Configuration Value |
|---|---|
| **Build Command** | `pnpm run build` |
| **Build Output Directory** | `out` |
| **Root Directory** | `/` |
| **Node.js Version** | `20` or higher (`NODE_VERSION=20`) |

---

## 6. Project Documentation Index

- [PRD.md](docs/PRD.md): Product vision, user stories, scope, and acceptance criteria.
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md): Color tokens, typography, and component specifications.
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): Technical choices, hosting, and performance.
- [CLIENT_CONTENT_INTAKE.md](docs/CLIENT_CONTENT_INTAKE.md): Checklist for working with Q & Tinah.
- [CONTENT_STATUS.md](docs/CONTENT_STATUS.md): Register of verified, draft, and missing copy.
- [DELIVERY_PLAN.md](docs/DELIVERY_PLAN.md): Launch roadmap and next immediate actions.
