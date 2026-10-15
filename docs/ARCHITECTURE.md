# Technical Architecture & Deployment Guide

**Application:** Q Workwear Business Web Platform  
**Target Platform:** Cloudflare Pages (Free Tier Static Export)  
**Architecture Style:** Jamstack / Static Site Generation (SSG)  
**Document Status:** Production Reference  
**Last Updated:** October 2026  

---

## 1. Architectural Overview & Rationale

```
+-------------------------------------------------------------+
|                     Next.js 15 App Router                   |
|                   (TypeScript + Tailwind v4)                |
+-------------------------------------------------------------+
                               |
                   pnpm run build (SSG Export)
                               |
                               v
+-------------------------------------------------------------+
|                      Static Output (out/)                   |
|             (Pre-rendered HTML, CSS, JS, Assets)            |
+-------------------------------------------------------------+
                               |
                  Git Push (GitHub Repository)
                               |
                               v
+-------------------------------------------------------------+
|                   Cloudflare Pages Global CDN               |
|      (Ultra-fast edge delivery, Zero server runtime cost)   |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|            End User in Kigali / Rwanda / Global             |
|           (Sub-second mobile loading, Instant TTFB)          |
+-------------------------------------------------------------+
```

### 1.1 Why Static Export?
1. **Zero Recurring Infrastructure Cost:** Running a dynamic Node.js server incurs monthly container or VPS costs. Static export on Cloudflare Pages has no hosting fee under typical traffic limits (unlimited requests, generous bandwidth).
2. **Maximum Reliability & Security:** No database, no backend server processes, no server injection vulnerabilities, and zero downtime from application crashes.
3. **Exceptional Speed on Mobile Networks:** Static assets cached on Cloudflare's regional edge nodes (including African and global data centers) ensure near-instant page delivery even on 3G/4G connections in Kigali.
4. **Maintenance Simplicity:** Non-technical owners (Quddus and Tinah) are protected from unexpected cloud bills or database maintenance outages.

---

## 2. Directory & Application Structure

```
q_workwear/
├── docs/                             # Project documentation & client intake
│   ├── PRD.md                        # Product requirements
│   ├── DESIGN_SYSTEM.md              # Visual tokens and styling guide
│   ├── ARCHITECTURE.md               # Technical architecture & deployment
│   ├── CLIENT_CONTENT_INTAKE.md      # Client information checklist
│   ├── CONTENT_STATUS.md             # Content verification register
│   └── DELIVERY_PLAN.md              # Milestone tracking & launch steps
├── public/                           # Static assets served at root
│   ├── images/
│   │   ├── logo/                     # Brand logo assets & icons
│   │   ├── products/                 # Product photography (drop-in)
│   │   └── projects/                 # Portfolio photography (drop-in)
│   ├── favicon.ico
│   └── robots.txt (generated)
├── src/
│   ├── app/                          # Next.js App Router routes
│   │   ├── layout.tsx                # Root layout (Header, Footer, Metadata)
│   │   ├── page.tsx                  # Home page
│   │   ├── about/page.tsx            # About Us page
│   │   ├── products/page.tsx         # Product Catalogue page
│   │   ├── work/page.tsx             # Portfolio / Projects page
│   │   ├── contact/page.tsx          # Contact & Inquiry page
│   │   ├── not-found.tsx             # 404 handler
│   │   ├── sitemap.ts                # Static sitemap generator
│   │   ├── robots.ts                 # Static robots generator
│   │   └── globals.css               # Tailwind CSS v4 root stylesheet
│   ├── components/                   # Modular UI components
│   │   ├── common/                   # Buttons, Badges, Logos, Headings
│   │   ├── layout/                   # Header, Footer, MobileNav
│   │   ├── catalog/                  # CategoryFilter, ProductCard, Specs
│   │   ├── portfolio/                # ProjectCard, ProjectGallery
│   │   └── home/                     # Hero, ValuePillars, ProcessSection
│   ├── content/                      # Single Source of Truth for text/data
│   │   ├── site.ts                   # Global brand info, contacts, links
│   │   ├── pages.ts                  # Page-specific editorial copy
│   │   ├── catalog.ts                # Categories and product items
│   │   └── projects.ts               # Portfolio case studies
│   ├── lib/                          # Utility functions
│   │   ├── config.ts                 # Environment and base URL resolver
│   │   ├── whatsapp.ts               # Contextual WhatsApp URL builder
│   │   └── utils.ts                  # ClassName mergers and helpers
│   └── types/                        # Strict TypeScript interfaces
│       └── index.ts                  # Content, Product, and Project types
├── next.config.mjs                   # Next.js export & image config
├── postcss.config.mjs                # PostCSS Tailwind plugin config
├── tsconfig.json                     # Strict TypeScript compiler options
├── package.json                      # Dependencies and scripts
└── README.md                         # Quickstart and operational guide
```

---

## 3. Content Architecture & Type Safety

All site text, product categories, completed work items, and contact channels are decoupled from rendering components and stored in `src/content/`.

### 3.1 Strict TypeScript Model
```typescript
export interface Product {
  id: string;
  title: string;
  categorySlug: 'corporate' | 'hospitality' | 'industrial' | 'branded';
  description: string;
  image: string;
  features: string[];
  fabricOptions: string[];
  moq?: string;
  isDraft?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  location: {
    city: string;
    country: string;
    addressNotice: string;
  };
  contact: {
    phone: string;
    whatsappNumber: string;
    email: string;
    isPhoneVerified: boolean;
    isWhatsappVerified: boolean;
  };
}
```

### 3.2 WhatsApp URL Builder with Fallback Safety
The utility `src/lib/whatsapp.ts` builds URLs following the official `wa.me` standard:
```typescript
export function buildWhatsAppUrl(message: string, overrideNumber?: string): string {
  const number = overrideNumber || siteConfig.contact.whatsappNumber;
  if (!siteConfig.contact.isWhatsappVerified || !number) {
    // Gracefully route to the contact page if unverified
    return '/contact';
  }
  const cleanNumber = number.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
```

---

## 4. Hosting & Deployment Configuration (Cloudflare Pages)

### 4.1 Cloudflare Pages Build Settings

| Setting | Value |
|---|---|
| **Framework Preset** | None / Next.js (Static) |
| **Build Command** | `pnpm run build` |
| **Build Output Directory** | `out` |
| **Root Directory** | `/` |
| **Node.js Version** | `20` or higher (`NODE_VERSION=20`) |

### 4.2 Next.js Static Export Configuration
In `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export without Node image optimizer
  },
  trailingSlash: true,
};
export default nextConfig;
```

---

## 5. Security & Environment Configuration

- **Zero Secret Exposure:** The website is a public static presentation. No database passwords or sensitive API keys are bundled into client bundles.
- **Environment Variables (`.env.example`):**
  - `NEXT_PUBLIC_SITE_URL`: Base domain URL (e.g., `https://qworkwear.rw` or `https://q-workwear.pages.dev`).
  - `NEXT_PUBLIC_WHATSAPP_PHONE`: Primary business WhatsApp contact (E.164 format without `+`).
- **Headers & Cloudflare Security:** Cloudflare automatically provides free SSL/TLS encryption, DDoS protection, and HTTP/2 + HTTP/3 support.

---

## 6. SEO & Social Sharing

1. **Semantic HTML5:** Native `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` markup with structured heading hierarchy (`H1` to `H3`).
2. **Metadata API:** Clean canonical tags, Open Graph images (`og:image`), Twitter cards, and regional meta tags targeting Kigali and Rwanda.
3. **Structured Data (Schema.org):** LocalBusiness and Product schemas pre-structured for Google Search and Google Maps rich snippets.
4. **Sitemap & Robots:** Dynamically generated via Next.js metadata routes (`/sitemap.xml` and `/robots.txt`).

---

## 7. Operational Costs & Sustainability

| Item | Estimated Annual Cost | Provider | Notes |
|---|---|---|---|
| **Static Hosting & CDN** | 0 RWF | Cloudflare Pages | Included on free tier |
| **SSL / HTTPS Certificate** | 0 RWF | Cloudflare | Universal automated SSL |
| **Domain Name (`.rw` or `.com`)** | ~15,000 – 25,000 RWF | RICTA / Namecheap | Subject to final client verification |
| **Total Annual Overhead** | **~15,000 RWF** | — | Exceptionally cost-effective for client |
