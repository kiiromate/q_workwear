# Product Requirements Document (PRD)

**Project:** Q Workwear Business Portfolio & Product Catalogue  
**Client:** Q Workwear (Kigali, Rwanda)  
**Owners / Management:** Quddus (Q) & Tinah  
**Project Lead & Technical Partner:** Client Technical Delivery Partner  
**Target Hosting:** Cloudflare Pages (Free tier, static export)  
**Initial Build Budget:** 180,000 RWF  
**Document Status:** Approved Foundation Specification  
**Last Updated:** October 2026  

---

## 1. Business Overview & Problem Statement

### 1.1 Business Context
Q Workwear is a Kigali-based workwear and uniform tailoring enterprise co-owned and managed by Quddus (Q) and Tinah. The business supplies custom-fitted, durable, and branded apparel to corporate institutions, hospitality venues, industrial organizations, medical facilities, and promotional teams in Rwanda.

### 1.2 The Problem
Currently, Q Workwear relies primarily on informal word-of-mouth recommendations, direct messaging, and personal phone calls. This presents several commercial challenges:
1. **Lack of Verified Online Authority:** Prospective corporate procurement officers and hotel managers searching for reliable uniform vendors in Kigali find no professional digital presence to vet quality or credibility.
2. **Repetitive Product Inquiries:** Sales conversations waste hours explaining standard garment options, fabric selections, and production steps because there is no unified visual catalogue.
3. **Inconsistent Quote Request Funneling:** Inquiries arrive through fragmented personal channels without structured requirements (such as order quantity, required turnaround, or embroidery needs).
4. **Content & Asset Readiness Gap:** As a small, growing business, Q and Tinah possess high craftsmanship but currently lack formal studio photography, brand style guides, or structured marketing copy.

### 1.3 Reference Website Benchmarking
The client identified [Afrikandaholdings.com/exotika](https://afrikandaholdings.com/exotika/) as an inspiration reference for product showcase hierarchy.
- **Principles Adopted:**
  - Category-led product organization with clear visual focus.
  - Transparent product attribute highlights (materials, durability, customization options).
  - Uncluttered, confidence-inspiring presentation.
  - Direct, single-click inquiry actions.
- **Improvements Made for Q Workwear:**
  - **Eliminating E-commerce Overhead:** Removing unnecessary cart/checkout layers since bespoke uniforms require custom measurements, bulk tiering, and quote generation.
  - **Mobile-First UX:** Streamlining navigation and touch targets for mobile buyers (predominant in East Africa).
  - **Contextual WhatsApp Integration:** Generating pre-filled, product-specific message payloads so prospective clients can tap once to start a structured WhatsApp conversation.
  - **Transparent Placeholder & Verification States:** Explicitly segregating provisional catalogue concepts from verified client offerings so no false marketing claims are published.

---

## 2. Product Vision & Objectives

### 2.1 Product Vision
To establish Q Workwear as Kigali's most dependable, high-quality, and approachable provider of bespoke workwear and corporate uniforms through a fast, beautifully designed, mobile-first web portfolio.

### 2.2 Core Product Objectives
1. **Credibility & Professionalism:** Instill immediate trust with Kigali procurement teams, business owners, and corporate decision-makers through disciplined design, strong typography, and clear capability demonstration.
2. **Structured Discovery:** Enable visitors to browse workwear categories (Corporate, Hospitality, Industrial & Safety, Branded Merchandise) effortlessly on mobile and desktop.
3. **Frictionless Conversion:** Funnel interested visitors directly to Q and Tinah via direct WhatsApp quote requests and telephone contact.
4. **Asset-Independent Coherence:** Present a complete, polished aesthetic immediately, utilizing structured placeholders that can be replaced with client photos without layout adjustments or code refactoring.
5. **Zero Infrastructure Cost:** Run reliably on Cloudflare Pages static hosting within free-tier allowances, eliminating server maintenance expenses.

---

## 3. Target Audiences & Visitor Personas

| Audience Segment | Primary Need | Browsing Behavior | Key Conversion Trigger |
|---|---|---|---|
| **Corporate & Office Managers** | High-end staff uniforms, executive shirts, branded blazers, neat embroidery | Desktop & Mobile during business hours; evaluates fabric quality and stitching durability | Clear corporate gallery, fabric specs, easy quote request |
| **Hospitality & Restaurant Owners** | Chef jackets, aprons, waitstaff waistcoats, stain-resistant breathable fabrics | Rapid mobile browsing; urgent turnaround during venue openings or rebrands | Visual category showcases, durability notes, direct WhatsApp chat |
| **Industrial, Construction & Logistics** | Safety coveralls, high-visibility vests, durable cargo work trousers | Practical assessment of safety standards, heavy-duty stitching, bulk capacity | Bulk order quotes, clear safety gear specs, fast response |
| **Schools, Sports Clubs & Events** | Polos, t-shirts, caps, sports kits, screen-printed or embroidered event gear | Event-driven timelines; budget sensitivity | Transparent ordering workflow, quick inquiries |

---

## 4. Primary Conversion Goal & Funnel

### 4.1 Primary Conversion Metric
- **Initiated WhatsApp Quote Inquiries (`wa.me` clicks with prefilled context).**
- Secondary: Direct phone call taps and email inquiries.

### 4.2 Visitor Journey Funnel
```
1. Discovery (Search / Social / Direct Referral)
   ↓
2. Landing on Home Page (Instant value prop: Kigali-based custom workwear)
   ↓
3. Catalogue Browsing (Filtering by Corporate, Hospitality, Industrial, Branded)
   ↓
4. Product / Project Inspection (Reviewing features, embroidery options, sample photos)
   ↓
5. Direct Quotation Action ("Enquire on WhatsApp for [Category/Product]")
   ↓
6. Direct WhatsApp Chat with Quddus & Tinah (Receiving exact customer specifications)
```

---

## 5. Scope & Non-Goals

### 5.1 In-Scope (MVP Phase 1)
- Complete static 5-page responsive website:
  1. `Home` (`/`)
  2. `About` (`/about`)
  3. `Products` (`/products`)
  4. `Our Work` (`/work`)
  5. `Contact` (`/contact`)
- Centralized content architecture (`src/content/`) with strict typing.
- Contextual WhatsApp URL builder with phone fallback and safety safeguards.
- Custom brand identity system based on Q Workwear's official logo and terracotta/crimson palette (`#E0483A`).
- Fully accessible mobile navigation with keyboard escape handling and focus management.
- Static metadata, dynamic OpenGraph placeholders, robots.txt, and sitemap generation.
- Production build targeting Cloudflare Pages (`output: 'export'`).

### 5.2 Out-of-Scope (Non-Goals)
- No e-commerce shopping cart, checkout, or online payment gateways (Stripe, MTN Mobile Money API, Airtel Money API).
- No backend database, user authentication, or client login portal.
- No headless CMS integrations (Sanity, Strapi, Contentful) during the initial build to avoid recurring infrastructure complexity.
- No heavy dynamic client-side forms or CRM webhooks.
- No automated inventory tracking or multi-language localization routers.

---

## 6. Information Architecture & Navigation

```
[ Header Navigation ]
  ├── Home (/)
  ├── Products (/products)
  ├── Our Work (/work)
  ├── About Us (/about)
  ├── Contact (/contact)
  └── CTA Button: "Request a Quote" (Triggers contextual WhatsApp / Contact)

[ Footer Navigation ]
  ├── Brand Wordmark & Location (Kigali, Rwanda)
  ├── Quick Links (Home, Products, Our Work, About, Contact)
  ├── Workwear Categories (Corporate, Hospitality, Industrial, Branded Apparel)
  ├── Direct Contact (Phone, WhatsApp, Kigali location notice)
  └── Editorial Notice: "Proudly Crafted in Kigali, Rwanda"
```

---

## 7. Page-by-Page Specifications

### 7.1 Home Page (`/`)
- **Hero Section:** Clear headline emphasizing precision Kigali tailoring, subhead explaining custom workwear for institutions, primary CTA ("Browse Catalogue") and secondary CTA ("Request Quote via WhatsApp").
- **Brand Value Pillars:** 4 trust anchors (Tailored Fit, Industrial Durability, Custom Branding/Embroidery, Reliable Kigali Delivery).
- **Category Showcase:** Visual cards previewing the 4 core product categories with direct links into filtered catalogue views.
- **Featured Work:** Preview of recent completed projects with clean badges and client confidentiality awareness.
- **Production Workflow:** 4-step clear process (1. Consultation & Fabrics, 2. Sizing & Sampling, 3. Tailoring & Branding, 4. Kigali Delivery).
- **Bottom Call-to-Action:** Bold brand banner driving quotation requests.

### 7.2 About Us (`/about`)
- **Our Story:** Introduction to Q Workwear, founded by Quddus and Tinah, addressing the need for durable, professional, and well-tailored uniforms in Rwanda.
- **Our Approach & Craftsmanship:** Emphasis on hand-inspected seams, premium fabric sourcing, reinforced stress points, and modern embroidery techniques.
- **Why Choose Us:** Contrast against cheap imports—local accountability, direct fittings, fast re-orders, and personalized service.
- **Leadership & Vision:** Approachable founder summary highlighting local manufacturing pride and dedication to customer satisfaction.

### 7.3 Products / Catalogue (`/products`)
- **Interactive Category Filter:** Filter buttons for All, Corporate Uniforms, Hospitality & Culinary, Industrial & Safety, and Branded Apparel.
- **Category Summary Header:** Contextual explanation of the selected category.
- **Product Cards:** High-fidelity cards featuring:
  - Responsive imagery with graceful fallback placeholder.
  - Category tag and provisional status badge.
  - Garment title, subtitle, and detailed description.
  - Feature highlights (e.g., fabric weight, embroidery compatibility, pocket configurations).
  - Minimum order quantity (MOQ) note (provisional).
  - Contextual "Enquire on WhatsApp" action with custom message parameter.

### 7.4 Our Work (`/work`)
- **Project Gallery:** Showcase of completed uniform projects.
- **Project Structure:** Project title, sector/category tag, location (Kigali / Regional), project summary, key deliverables produced, and fabric specifications.
- **Client Confidentiality Handling:** Clearly distinguishing authorized public portfolio projects from illustrative capability samples.

### 7.5 Contact (`/contact`)
- **Contact Channels:** Prominent WhatsApp card, direct telephone call card, email enquiry card, and workshop/consultation appointment card.
- **Operating Hours:** Typical Kigali business operating schedule (Monday – Saturday).
- **Consultation Guidance:** Practical advice on what details to bring to a consultation (estimated quantities, logo files, deadline).
- **Interactive FAQ Accordion:** Common questions regarding minimum orders, sample creation, delivery timelines, and payment terms.

---

## 8. Technical & Performance Requirements

- **Framework:** Next.js 15+ App Router, React 19, TypeScript (Strict).
- **Styling:** Tailwind CSS v4.
- **Output:** Static HTML/CSS/JS export (`output: 'export'`) to `out/`.
- **Target Performance:**
  - Lighthouse Desktop: >= 95 in Performance, Accessibility, Best Practices, SEO.
  - Lighthouse Mobile: >= 90.
  - Zero layout shifts (CLS < 0.05).
  - Fast asset rendering with responsive picture elements and WebP/AVIF support.
- **Accessibility:** WCAG 2.1 AA compliant colors, 48px minimum touch targets, proper ARIA attributes on mobile toggles, keyboard focus rings, and screen-reader navigable headings.

---

## 9. Content Verification & Risk Management

| Risk | Impact | Mitigation Strategy |
|---|---|---|
| Unverified Phone / WhatsApp number | High (Failed leads) | Single configuration point in `src/content/site.ts`. Contextual check routes to safe fallback if phone is unverified. |
| Incomplete Client Photography | Medium (Aesthetic) | Purpose-built typographic SVG and CSS placeholders with consistent 4:3 and 16:9 aspect ratios. |
| Unconfirmed Commercial Claims | High (Reputation) | All provisional copy is documented in `docs/CONTENT_STATUS.md` and tagged in the code model. |
| Domain & DNS Delays | Low (Deployment) | Built with relative routing and configurable origin; can be reviewed on Cloudflare `.pages.dev` subdomain immediately. |

---

## 10. Future Roadmap (Post-MVP Phase 2)

- **Sanity / Decap CMS Integration:** Enabling non-technical staff (Q & Tinah) to upload photos and update descriptions from a mobile-friendly dashboard.
- **Interactive Uniform Customizer / Quote Estimator:** Allowing buyers to select garment counts, colors, and embroidery locations for instantaneous ballpark pricing.
- **Kinyarwanda & French Translations:** Full multi-lingual localization for government tenders and francophone regional clients.
- **Direct Client Portal:** Re-ordering portal for established corporate clients to submit repeat sizes.
