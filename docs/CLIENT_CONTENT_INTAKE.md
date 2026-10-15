# Client Content & Asset Intake Checklist

**Client:** Q Workwear (Quddus & Tinah)  
**Location:** Kigali, Rwanda  
**Purpose:** Practical checklist and asset collection guide for finalizing production content.  
**Last Updated:** October 2026  

---

## How to Use This Checklist

This document is designed to guide meetings and WhatsApp exchanges with Quddus (Q) and Tinah. For every item collected, update the corresponding file in `src/content/` and change the verification status in `docs/CONTENT_STATUS.md`.

---

## 1. Brand Identity & Legal Details

| Asset / Information | Current Demo Status | Target File in Codebase | Priority |
|---|---|---|---|
| **Official Business Name** | `Q Workwear` (Verified) | `src/content/site.ts` | Complete |
| **High-Resolution Logo Files** | Provided photo card converted to vector / transparent PNG | `public/images/logo/` | High (Vector master file needed) |
| **Brand Colors** | Red (`#E0483A`), Dark Slate (`#18181B`), White | `docs/DESIGN_SYSTEM.md` | Complete |
| **Business Registration / TIN (Optional)** | Pending client confirmation | `src/content/site.ts` | Low |
| **Physical Workshop / Studio Location** | Listed provisionally as *"Kigali, Rwanda (In-person consultations by appointment)"* | `src/content/site.ts` | High (Need neighborhood/street or landmark) |

---

## 2. Contact Channels & Commercial Operations

| Channel | Current Demo Status | Client Question / Input Needed | Target File |
|---|---|---|---|
| **WhatsApp Number** | Configured with pending safety flag | What is the exact primary WhatsApp phone number for quotation requests? (e.g., `+250 788 123 456`) | `src/content/site.ts` |
| **Phone Number (Voice Calls)** | Configured with pending safety flag | Is there a separate voice line, or is it the same as WhatsApp? | `src/content/site.ts` |
| **Business Email Address** | Placeholder `info@qworkwear.rw` | What email address should receive official corporate quotation requests? | `src/content/site.ts` |
| **Social Media Links** | Instagram / LinkedIn placeholders | Do you currently run an Instagram or Facebook page showcasing your tailoring? | `src/content/site.ts` |
| **Operating Hours** | Mon–Sat: 8:00 AM – 6:00 PM | Confirm standard workshop opening hours and weekend availability. | `src/content/site.ts` |

---

## 3. Product Offerings & Capabilities

| Product Category | Hypothesized Items in Demo | Question for Q & Tinah |
|---|---|---|
| **Corporate Uniforms** | Executive Shirts, Tailored Trousers & Skirts, Formal Blazers, Reception Dresses | Do you offer bespoke fitting sessions at the client's office? What is your typical corporate turnaround time? |
| **Hospitality & Culinary** | Chef Double-Breasted Jackets, Bib Aprons, Service Waistcoats, Barista Shirts | What fabrics do you recommend for stain resistance and breathability? |
| **Industrial & Safety** | Heavy-Duty Overalls, High-Visibility Vests, Cargo Workwear Pants, Safety Lab Coats | Do your coveralls use reflective tape that meets standard Rwandan industrial requirements? |
| **Branded Apparel** | Cotton Pique Polo Shirts, Promotional Round-Neck T-shirts, Custom Embroidered Caps | What branding techniques do you offer (Direct Embroidery, Screen Print, Heat Press)? |
| **Minimum Order Quantity (MOQ)** | Set provisionally to 10–20 pieces for bespoke orders | What is your preferred minimum order quantity for custom branded uniforms? Do you accept smaller sample orders? |

---

## 4. Photography & Visual Asset Guidelines

Quality visual assets are the single most influential driver of corporate quotation inquiries.

### 4.1 Required Photo Shots
1. **Product Stills (Flat-lay or Mannequin):** Clean front and back views of uniforms against a neutral background.
2. **On-Model / Fitted Shots:** Natural photography of real staff wearing completed uniforms in real environments (office, kitchen, workshop).
3. **Detail & Craftsmanship Close-ups:** Macro shots of neat seam stitching, reinforced pocket bars, custom embroidery, and buttons.
4. **Workshop & Craft in Action:** Candid photos of Q, Tinah, or tailors cutting fabric, operating sewing machines, or taking customer measurements in Kigali.

### 4.2 Photo Naming Convention
To ensure rapid integration into the website without code changes, save incoming client photos using these exact conventions:
- `corporate-executive-shirt-01.jpg`
- `hospitality-chef-jacket-01.jpg`
- `industrial-coverall-navy-01.jpg`
- `branded-polo-black-01.jpg`
- `workshop-cutting-table.jpg`
- `workshop-embroidery-detail.jpg`

### 4.3 Image Format & Sizing Recommendations
- **Recommended File Format:** Modern WebP or high-quality JPG.
- **Aspect Ratio:** 4:3 for product catalogue cards (`1200x900px`), 16:9 for project banners (`1920x1080px`).
- **File Size Target:** Under 400KB per image (we run automated lossy compression before production commit).

---

## 5. Client Approvals & Testimonials

Before publishing real client names or project images on the public website:
- [ ] Confirm permission to display the client company's logo in the "Trusted By" or "Recent Projects" section.
- [ ] Verify if the client allows quoting their name or job title in a testimonial.
- [ ] Confirm that project photos do not disclose confidential client facilities or unauthorized staff members.
