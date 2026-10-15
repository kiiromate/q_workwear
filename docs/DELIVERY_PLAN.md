# Delivery Plan & Launch Roadmap

**Project:** Q Workwear Website Foundation & Production Launch  
**Total Development Budget:** 180,000 RWF  
**Estimated Domain Budget:** 15,000 RWF (Annual)  
**Target Delivery Window:** 5–7 days following client asset delivery  
**Document Status:** Foundation Build Complete — Awaiting Client Review  
**Last Updated:** October 2026  

---

## 1. Project Phase Breakdown

```
[ Phase 1: Foundation Build ]  -->  [ Phase 2: Client Demo & Feedback ]  -->  [ Phase 3: Asset Intake ]  -->  [ Phase 4: Production Launch ]
           (COMPLETE)                            (CURRENT)                           (PENDING)                        (PENDING)
- PRD & Architecture                - Walkthrough with Q & Tinah         - Collect WhatsApp & phone         - Connect custom domain
- Design System & Logo Integration  - Collect feedback on categories    - Receive initial photos           - Configure Cloudflare Pages
- 5 Core Responsive Pages           - Align on pricing / MOQ rules       - Refine draft editorial copy      - Verify live SSL & SEO
- Local Testing & Export Build      - Approve visual identity            - Replace image placeholders       - Final client handover
```

---

## 2. Milestone Tracking

### Milestone 1: Technical & Design Foundation (Status: COMPLETE ✅)
- [x] Initialized Next.js 15+ App Router project with TypeScript and Tailwind CSS v4.
- [x] Configured static export (`output: 'export'`) for Cloudflare Pages.
- [x] Extracted official color palette (`#E0483A` brand red, `#18181B` dark slate, `#FBF9F8` warm canvas) from client logo.
- [x] Created transparent PNG and scalable vector SVG logo assets in `public/images/logo/`.
- [x] Built core responsive components (Header, Footer, MobileNav, Button, Badge, ProductCard, ProjectCard, PlaceholderImage, WhatsApp CTA).
- [x] Implemented all 5 core MVP pages (`Home`, `About`, `Products`, `Our Work`, `Contact`).
- [x] Implemented single-source-of-truth content architecture in `src/content/`.
- [x] Completed comprehensive documentation: `PRD.md`, `DESIGN_SYSTEM.md`, `ARCHITECTURE.md`, `CLIENT_CONTENT_INTAKE.md`, `CONTENT_STATUS.md`.

### Milestone 2: Client Demonstration & Review (Status: CURRENT 🎯)
- [ ] Present running local website to Quddus and Tinah.
- [ ] Review category breakdown (Corporate, Hospitality, Industrial, Branded) and adjust based on actual factory capabilities.
- [ ] Walk through the contextual WhatsApp quotation funnel.
- [ ] Review and adjust draft editorial story on the About page.

### Milestone 3: Client Asset & Content Population (Status: UPCOMING ⏳)
- [ ] Receive verified WhatsApp phone number and voice calling contact.
- [ ] Receive physical workshop address / neighborhood in Kigali.
- [ ] Receive initial batch of product and workshop photos (following `CLIENT_CONTENT_INTAKE.md`).
- [ ] Drop photography into `public/images/products/` and `public/images/projects/`.
- [ ] Update `src/content/site.ts`, `catalog.ts`, and `projects.ts` with confirmed data.

### Milestone 4: Production Deployment & Handover (Status: UPCOMING ⏳)
- [ ] Register domain name (`qworkwear.rw` or alternative) within the 15,000 RWF budget.
- [ ] Connect GitHub repository to Cloudflare Pages (Build: `pnpm run build`, Output: `out`).
- [ ] Configure custom domain and automated Cloudflare SSL certificate.
- [ ] Run production Lighthouse audit verifying >90 on performance and accessibility.
- [ ] Hand over website maintenance instructions and operational documentation to Q & Tinah.

---

## 3. Immediate Action Items for Delivery Lead

1. **Host Client Demo:** Run `pnpm run dev` and walk Quddus and Tinah through the site on both laptop and mobile viewport.
2. **Issue Intake Checklist:** Share the 1-page asset request from `CLIENT_CONTENT_INTAKE.md` via WhatsApp.
3. **Confirm Domain Choice:** Check availability of `.rw` vs `.com` domains and secure client approval before purchase.
