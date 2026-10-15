# Design System & Visual Specification

**Brand:** Q Workwear  
**Location:** Kigali, Rwanda  
**Design Status:** Provisional Foundation based on Client Logo Asset  
**Last Updated:** October 2026  

---

## 1. Visual Philosophy & Identity

The Q Workwear design system balances the rugged dependability of heavy-duty industrial workwear with the refined precision of executive corporate uniform tailoring. 

Rooted in the official client logo provided by Quddus and Tinah, the palette pairs a vibrant, confident terracotta/crimson red with deep architectural charcoals, warm studio neutrals, and clean white accents.

### Core Principles
1. **Utility & Clarity:** Every element serves the visitor's goal—discovering uniform options and initiating quotation discussions.
2. **Material Authenticity:** Visual textures, cards, and borders echo heavy twill fabrics, tailored seams, and precision stitching.
3. **Restrained Color Hierarchy:** The bold brand red is reserved for brand signatures, primary CTAs, and key accents, preventing visual fatigue.
4. **Mobile Prioritization:** 48px minimum touch targets, generous line heights, thumb-zone CTAs, and frictionless one-tap WhatsApp engagement.

---

## 2. Color Palette & Design Tokens

### 2.1 Brand Colors

| Token Name | Hex Code | RGB | Role / Usage |
|---|---|---|---|
| `--color-brand-primary` | `#E0483A` | `rgb(224, 72, 58)` | Core logo color, primary buttons, active category pills, brand emblems |
| `--color-brand-hover` | `#C5372B` | `rgb(197, 55, 43)` | Button hover & active states |
| `--color-brand-light` | `#FDF2F0` | `rgb(253, 242, 240)` | Soft tinted badge backgrounds, highlight containers |
| `--color-brand-accent` | `#FF6B57` | `rgb(255, 107, 87)` | Fine borders, interactive focus rings, energetic accents |

### 2.2 Neutral & Surface Hierarchy

| Token Name | Hex Code | Role / Usage |
|---|---|---|
| `--color-surface-canvas` | `#FFFFFF` | Default page background |
| `--color-surface-subtle` | `#FBF9F8` | Warm off-white alternating section backgrounds |
| `--color-surface-card` | `#F4EFEA` | Card backgrounds, badge containers |
| `--color-surface-dark` | `#18181B` | High-contrast footer, dark hero banners, contrast cards |
| `--color-surface-dark-card` | `#27272A` | Elevated containers in dark mode sections |
| `--color-border-subtle` | `#EAE6E1` | Standard divider and card outline |
| `--color-border-strong` | `#D1C7BD` | Active inputs, hovered card outlines |

### 2.3 Typography & Text Colors

| Token Name | Hex Code | Role / Usage |
|---|---|---|
| `--color-text-main` | `#18181B` | Headings, primary body copy (WCAG AAA contrast on light) |
| `--color-text-muted` | `#52525B` | Supporting descriptions, metadata, secondary notes |
| `--color-text-subtle` | `#71717A` | Timestamps, placeholder labels, captions |
| `--color-text-inverse` | `#FFFFFF` | Text on brand red and dark slate surfaces |

### 2.4 Functional Colors

| Purpose | Hex Code | Usage |
|---|---|---|
| **WhatsApp Green** | `#25D366` | Dedicated WhatsApp CTA icon & badge accents |
| **WhatsApp Dark** | `#128C7E` | WhatsApp button hover and deep contrast |
| **Notice Yellow** | `#FEF3C7` / `#92400E` | Provisional content indicators and draft warnings |
| **Success Green** | `#DCFCE7` / `#166534` | Confirmed availability and delivery status |

---

## 3. Typography Scale

The type system relies on a clean, modern geometric sans-serif (Inter / system-ui fallback) with deliberate optical letter-spacing for uppercase badges and headings.

```
Display Large:   text-4xl sm:text-5xl lg:text-6xl  font-extrabold  tracking-tight (Hero Titles)
Display Medium:  text-3xl sm:text-4xl              font-bold        tracking-tight (Section Titles)
Heading Large:   text-2xl sm:text-3xl              font-bold        tracking-tight (Card Titles)
Heading Medium:  text-xl sm:text-2xl               font-semibold    tracking-normal (Feature Subtitles)
Body Lead:       text-lg sm:text-xl                font-normal      leading-relaxed (Intros)
Body Regular:    text-base                         font-normal      leading-relaxed (Standard Body)
Body Small:      text-sm                          font-medium      leading-normal (Metadata, Specs)
Caption / Badge: text-xs                          font-semibold    tracking-wider uppercase (Pills)
```

---

## 4. Spacing, Radii & Shadows

### 4.1 Border Radii
- **Tag / Badge:** `rounded-full` (9999px)
- **Buttons:** `rounded-xl` (12px)
- **Cards & Images:** `rounded-2xl` (16px)
- **Containers / Modals:** `rounded-3xl` (24px)

### 4.2 Elevation / Shadows
- `shadow-sm`: Subtle separation for sticky headers and badges.
- `shadow-md`: Default card resting state (`0 4px 12px -2px rgba(24, 24, 27, 0.06)`).
- `shadow-xl`: Hovered cards and modal dialogs (`0 20px 25px -5px rgba(24, 24, 27, 0.1)`).

---

## 5. Component Library Specifications

### 5.1 Primary Button (`Button`)
- **Variant `primary`:** Solid Brand Red (`#E0483A`), white text, subtle shadow, scale transition on hover.
- **Variant `secondary`:** Dark Charcoal (`#18181B`), white text, for high-contrast alternative actions.
- **Variant `outline`:** White surface with subtle border (`#E4E0DC`) and dark text.
- **Variant `whatsapp`:** Dedicated WhatsApp branding (`bg-[#25D366]` hover `bg-[#128C7E]`) with Lucide WhatsApp / MessageCircle icon.

### 5.2 Category Filter (`CategoryFilter`)
- Horizontal scrolling on mobile (`overflow-x-auto scrollbar-none`).
- Active state uses Brand Red fill with crisp white text.
- Inactive state uses Warm Off-white fill with subtle border.

### 5.3 Product Card (`ProductCard`)
- 4:3 aspect ratio image container with overflow hidden.
- Category tag pill at top-left.
- Status badge ("Provisional Demo Item" / "Verified Stock") at top-right.
- Title in Heading Medium.
- Concise 2-line description.
- Key features bulleted or tagged.
- Direct "Enquire on WhatsApp" action with product title context.

### 5.4 Placeholder Graphic System (`PlaceholderImage`)
When client photos are not yet supplied:
- Uses subtle geometric twill SVG patterns and warm neutral gradient fills (`from-stone-100 to-stone-200`).
- Displays a dedicated category icon (Shirt, ShieldCheck, Sparkles, Scissors).
- Includes the text: *"Client Photograph Pending"* in muted typography.
- Never breaks layout or introduces layout shifts.

### 5.5 Mobile Navigation (`MobileNav`)
- Full-height slide-over drawer with backdrop blur.
- Focus trap and keyboard Esc handler.
- Clean navigation link list with icons and active route indicators.
- Quick contact actions (Call Now, WhatsApp Now) pinned at drawer bottom.

---

## 6. Accessibility & Responsiveness Checklist

1. **Color Contrast:** All text meets or exceeds WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
2. **Reduced Motion:** All transitions use `motion-reduce:transition-none`.
3. **Tap Targets:** Interactive elements have a minimum clickable area of 48x48px on mobile viewports.
4. **Visual Focus:** Visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none`) on all interactive buttons, links, and filters.
