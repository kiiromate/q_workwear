import { ProductCategory, Product, CategorySlug } from '@/types';

export const categories: ProductCategory[] = [
  {
    "id": "corporate",
    "name": "Corporate",
    "tagline": "Office and front desk",
    "description": "Shirts, blazers and matching separates for office and front-desk teams.",
    "iconName": "Building2",
    "badgeText": "",
    "garmentCountEstimate": "",
    "image": "/images/showcase/cat-corporate-suiting.webp",
    "fabricBadge": ""
  },
  {
    "id": "hospitality",
    "name": "Hospitality",
    "tagline": "Kitchen and service",
    "description": "Chef jackets, aprons and service uniforms for kitchens, caf\u00e9s and hotels.",
    "iconName": "UtensilsCrossed",
    "badgeText": "",
    "garmentCountEstimate": "",
    "image": "/images/showcase/cat-hospitality-culinary.webp",
    "fabricBadge": ""
  },
  {
    "id": "industrial",
    "name": "Industrial",
    "tagline": "Workshop and site",
    "description": "Overalls, work trousers and high-visibility garments for hands-on teams.",
    "iconName": "HardHat",
    "badgeText": "",
    "garmentCountEstimate": "",
    "image": "/images/showcase/cat-industrial-safety.webp",
    "fabricBadge": ""
  },
  {
    "id": "branded",
    "name": "Branded apparel",
    "tagline": "Teams and events",
    "description": "Polos, T-shirts and caps with space for your organisation\u2019s identity.",
    "iconName": "Sparkles",
    "badgeText": "",
    "garmentCountEstimate": "",
    "image": "/images/showcase/cat-branded-apparel.webp",
    "fabricBadge": ""
  }
];

export const products: Product[] = [
  {
    "id": "corp-exec-shirt",
    "title": "Office shirts",
    "categorySlug": "corporate",
    "categoryName": "Corporate",
    "summary": "Long- or short-sleeved shirts, with colour and fit selected for your team.",
    "description": "Long- or short-sleeved shirts, with colour and fit selected for your team.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "corp-tailored-trousers",
    "title": "Trousers & skirts",
    "categorySlug": "corporate",
    "categoryName": "Corporate",
    "summary": "Coordinated separates for a consistent office uniform.",
    "description": "Coordinated separates for a consistent office uniform.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "corp-suiting-blazer",
    "title": "Blazers",
    "categorySlug": "corporate",
    "categoryName": "Corporate",
    "summary": "A tailored layer for reception, management and customer-facing roles.",
    "description": "A tailored layer for reception, management and customer-facing roles.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "corp-service-waistcoat",
    "title": "Waistcoats",
    "categorySlug": "corporate",
    "categoryName": "Corporate",
    "summary": "A formal option to complete a coordinated team outfit.",
    "description": "A formal option to complete a coordinated team outfit.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "hosp-chef-jacket",
    "title": "Chef jackets",
    "categorySlug": "hospitality",
    "categoryName": "Hospitality",
    "summary": "Kitchen uniforms with sleeve length and fastening details to discuss.",
    "description": "Kitchen uniforms with sleeve length and fastening details to discuss.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "hosp-canvas-apron",
    "title": "Aprons",
    "categorySlug": "hospitality",
    "categoryName": "Hospitality",
    "summary": "Bib and waist styles for kitchen, caf\u00e9 and service teams.",
    "description": "Bib and waist styles for kitchen, caf\u00e9 and service teams.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "hosp-service-polo",
    "title": "Service polos",
    "categorySlug": "hospitality",
    "categoryName": "Hospitality",
    "summary": "Collared team wear for restaurant and hotel service.",
    "description": "Collared team wear for restaurant and hotel service.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "hosp-housekeeping-tunic",
    "title": "Housekeeping uniforms",
    "categorySlug": "hospitality",
    "categoryName": "Hospitality",
    "summary": "Tunic and trouser combinations for housekeeping teams.",
    "description": "Tunic and trouser combinations for housekeeping teams.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "ind-heavy-overall",
    "title": "Work overalls",
    "categorySlug": "industrial",
    "categoryName": "Industrial",
    "summary": "One-piece workwear, with pocket layout and fit agreed for your order.",
    "description": "One-piece workwear, with pocket layout and fit agreed for your order.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "ind-hi-vis-vest",
    "title": "High-visibility vests",
    "categorySlug": "industrial",
    "categoryName": "Industrial",
    "summary": "Visibility-focused garments. Discuss your site\u2019s required specifications before ordering.",
    "description": "Visibility-focused garments. Discuss your site\u2019s required specifications before ordering.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "ind-cargo-pants",
    "title": "Work trousers",
    "categorySlug": "industrial",
    "categoryName": "Industrial",
    "summary": "Practical trousers with pocket and fastening options for the job.",
    "description": "Practical trousers with pocket and fastening options for the job.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "ind-lab-coat",
    "title": "Dust coats",
    "categorySlug": "industrial",
    "categoryName": "Industrial",
    "summary": "Longer work coats for workshop and inspection roles.",
    "description": "Longer work coats for workshop and inspection roles.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "brand-premium-polo",
    "title": "Polos",
    "categorySlug": "branded",
    "categoryName": "Branded apparel",
    "summary": "A collared option for everyday team wear and events.",
    "description": "A collared option for everyday team wear and events.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "brand-crewneck-tshirt",
    "title": "T-shirts",
    "categorySlug": "branded",
    "categoryName": "Branded apparel",
    "summary": "Crew-neck team and event shirts in your chosen colours.",
    "description": "Crew-neck team and event shirts in your chosen colours.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "brand-twill-cap",
    "title": "Caps",
    "categorySlug": "branded",
    "categoryName": "Branded apparel",
    "summary": "Headwear to complete your team\u2019s branded outfit.",
    "description": "Headwear to complete your team\u2019s branded outfit.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  },
  {
    "id": "brand-fleece-gilet",
    "title": "Gilets",
    "categorySlug": "branded",
    "categoryName": "Branded apparel",
    "summary": "A sleeveless outer layer with room for your team\u2019s identity.",
    "description": "A sleeveless outer layer with room for your team\u2019s identity.",
    "features": [],
    "fabricOptions": [],
    "bestFor": "",
    "isDraft": true
  }
];

export function getAllProducts(): Product[] { return products; }
export function getFeaturedProducts(): Product[] { return products.filter((product) => product.popular); }
export function getProductsByCategory(slug: CategorySlug): Product[] { return products.filter((product) => product.categorySlug === slug); }
export function getCategoryBySlug(slug: string): ProductCategory | undefined { return categories.find((category) => category.id === slug); }
