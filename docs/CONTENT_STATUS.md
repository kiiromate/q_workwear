# Content Verification & Placeholder Register

**Project:** Q Workwear Website  
**Document Status:** Live Content Audit  
**Classification System:**
- 🟢 **Verified:** Confirmed directly by client or provided in primary brief.
- 🟡 **Draft Editorial:** Professional copy written for demo purposes, awaiting client sign-off.
- 🔵 **Demo / Hypothesis:** Example catalogue structure and items representing anticipated offerings.
- 🔴 **Missing / Required:** Critical operational details needed prior to production launch.

---

## 1. Global & Contact Content Register

| Field / Asset | Current State in Demo | Verification Status | Source / Notes | Action Required Before Launch |
|---|---|---|---|---|
| Business Name | "Q Workwear" | 🟢 Verified | Initial client brief | None |
| Brand Ownership | Quddus (Q) & Tinah | 🟢 Verified | Initial client brief | None |
| Geographical City | Kigali, Rwanda | 🟢 Verified | Initial client brief | None |
| Workshop Address | "Kigali, Rwanda (Consultations by appointment)" | 🟡 Draft Editorial | Initial brief | Collect specific neighborhood (e.g. Nyarugenge, Kicukiro, Gasabo) |
| WhatsApp Number | Safe Fallback Mode (Route to Contact) | 🔴 Missing | Security guard in `siteConfig` | Collect primary WhatsApp contact number |
| Phone Number | Displayed as Pending Verification | 🔴 Missing | Placeholder in `src/content/site.ts` | Collect voice calling number |
| Primary Email | `info@qworkwear.rw` | 🟡 Draft Editorial | Domain placeholder | Verify email routing or G Suite/Zoho setup |
| Social Handles | Instagram / LinkedIn links | 🔵 Demo Hypothesis | Pending client links | Connect or hide until created |
| Brand Logo Mark | Stylized "Q" with tailoring curve | 🟢 Verified | Uploaded photo converted to vector/PNG | Source original Adobe Illustrator vector if available |

---

## 2. Page Content Status

### 2.1 Home Page (`/`)
- 🟢 **Brand Positioning:** "Custom Workwear & Uniform Tailoring in Kigali, Rwanda."
- 🟡 **Hero Copy:** Explains bespoke uniforms, durable fabrics, and institutional reliability.
- 🟡 **4 Core Value Pillars:** Precision Fit, Industrial Durability, Custom Branding, Reliable Delivery.
- 🔵 **4 Featured Categories:** Corporate, Hospitality, Industrial & Safety, Branded Apparel.
- 🟡 **Production Workflow:** 4-step process from consultation to Kigali delivery.

### 2.2 About Us Page (`/about`)
- 🟢 **Founders:** Quddus and Tinah identified as founders and master tailors/directors.
- 🟡 **Founding Narrative:** Focuses on closing the gap between low-quality imported fast-fashion uniforms and unaffordable boutique tailoring.
- 🟡 **Workshop Philosophy:** Quality control, local job creation, and personalized fittings in Kigali.
- 🔴 **Founder Photographs:** Missing; replaced with tasteful geometric workshop illustrations until Q and Tinah take headshots.

### 2.3 Product Catalogue (`/products`)
- 🔵 **Corporate Uniforms:** 4 demo garments (Executive Tailored Shirts, Corporate Trousers & Pencil Skirts, Custom Suiting Blazers, Front-Desk Waistcoats).
- 🔵 **Hospitality & Culinary:** 4 demo garments (Executive Chef Jackets, Heavy-Duty Canvas Bib Aprons, Service Staff Polos, Waitstaff Vests).
- 🔵 **Industrial & Safety:** 4 demo garments (Heavy-Duty Cotton Work Coveralls, High-Visibility Two-Tone Vests, Reinforced Cargo Work Pants, Industrial Lab & Dust Coats).
- 🔵 **Branded Apparel:** 4 demo garments (Premium 220gsm Pique Polo Shirts, Heavyweight Cotton Crewneck T-Shirts, Structured Embroidered Twill Caps, Fleece Zipped Corporate Gilets).
- 🔴 **Real Garment Photography:** All catalogue items currently utilize the custom SVG `PlaceholderImage` system.

### 2.4 Our Work Page (`/work`)
- 🔵 **Sample Case Studies:**
  - *Project 01: Kigali Boutique Hotel Service Uniforms* (Hospitality)
  - *Project 02: Regional Logistics Fleet Safety Overalls* (Industrial)
  - *Project 03: Tech & Financial Advisory Executive Shirts* (Corporate)
  - *Project 04: Annual Tech Conference Staff Branded Polos* (Promotional)
- 🔴 **Client Authorization:** Do not convert demo case studies to live client names without explicit written sign-off from Q and Tinah.

### 2.5 Contact Page (`/contact`)
- 🟡 **Contact Guidance:** Clear advice on minimum order consultation, quotes, and fabric swatches.
- 🟡 **FAQ Section:** 6 standard industry questions regarding MOQs, turnaround times, fabric durability, and sizing.
- 🔴 **Production Contact Form / CRM:** Omitted by design (Static architecture uses direct WhatsApp & phone).
