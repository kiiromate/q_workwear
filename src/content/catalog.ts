import { ProductCategory, Product, CategorySlug } from '@/types';

export const categories: ProductCategory[] = [
  {
    id: 'corporate',
    name: 'Corporate & Office Uniforms',
    tagline: 'Tailored elegance for executive, administrative and front-desk teams',
    description:
      'Sharp, comfortable, and durable office attire crafted from premium wrinkle-resistant blends. Designed to project executive confidence across Kigali banking, corporate, and agency environments.',
    iconName: 'Building2',
    badgeText: 'Executive & Front Desk',
    garmentCountEstimate: '4 Demo Styles',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Culinary Wear',
    tagline: 'Breathable, stain-resistant apparel for chefs, baristas, and hotel staff',
    description:
      'Engineered for the demands of fast-paced kitchens, luxury boutique hotels, and bustling Kigali cafes. Featuring breathable back panels, reinforced aprons, and polished front-of-house attire.',
    iconName: 'UtensilsCrossed',
    badgeText: 'Kitchen & Service',
    garmentCountEstimate: '4 Demo Styles',
  },
  {
    id: 'industrial',
    name: 'Industrial & Safety Workwear',
    tagline: 'Heavy-duty protection for construction, engineering, and logistics crews',
    description:
      'Rugged workwear built to endure demanding industrial environments. Constructed with double-needle flat-felled seams, bar-tacked stress points, high-visibility reflective tape, and durable hardware.',
    iconName: 'HardHat',
    badgeText: 'Heavy-Duty & PPE',
    garmentCountEstimate: '4 Demo Styles',
  },
  {
    id: 'branded',
    name: 'Branded Apparel & Promotional',
    tagline: 'Custom embroidered polos, crewnecks, and promotional team wear',
    description:
      'High-impact branded apparel designed for team cohesion, company events, trade shows, and brand activations across Rwanda. Available with high-density embroidery or vibrant screen printing.',
    iconName: 'Sparkles',
    badgeText: 'Events & Everyday',
    garmentCountEstimate: '4 Demo Styles',
  },
];

export const products: Product[] = [
  // Corporate Uniforms
  {
    id: 'corp-exec-shirt',
    title: 'Executive Tailored Oxford Shirt',
    categorySlug: 'corporate',
    categoryName: 'Corporate Uniforms',
    summary: 'Long and short-sleeve corporate shirts with custom collar styles and discrete logo embroidery.',
    description:
      'A staple for modern Kigali offices. Woven from breathable cotton-rich twill that holds its crisp press throughout long business days. Tailored with reinforced plackets and mother-of-pearl style buttons.',
    features: [
      'Wrinkle-resistant 60/40 cotton-poly blend',
      'Reinforced collar stays and double-needle armholes',
      'Left chest or cuff monogram embroidery option',
      'Available in classic white, sky blue, charcoal, and custom brand pantones',
    ],
    fabricOptions: ['Oxford Cotton Blend (140gsm)', 'Fine Pinpoint Poplin (120gsm)', 'Chambray Cotton'],
    bestFor: 'Executive staff, banking officers, front-office reception, corporate consultants',
    moqNotice: 'Standard batch MOQ: 15 pieces per style (sizing split flexible)',
    isDraft: true,
    popular: true,
  },
  {
    id: 'corp-tailored-trousers',
    title: 'Precision-Fit Office Trousers & Skirts',
    categorySlug: 'corporate',
    categoryName: 'Corporate Uniforms',
    summary: 'Bespoke-cut trousers and matching skirts engineered for all-day comfort and mobility.',
    description:
      'Structured yet comfortable office bottoms tailored to individual staff measurements or standardized corporate sizing matrices. Features expandable comfort waistbands and deep pockets.',
    features: [
      'Heavy-drape poly-viscose blend with slight mechanical stretch',
      'Reinforced crotch and hem tape for extended garment longevity',
      'YKK brass zippers and interior anchor buttons',
      'Custom pencil skirt or straight-leg trouser cuts',
    ],
    fabricOptions: ['Poly-Viscose Twill (240gsm)', 'Wool-Touch Polyester (220gsm)'],
    bestFor: 'Corporate teams, reception staff, customer service representatives',
    moqNotice: 'Standard batch MOQ: 15 pieces',
    isDraft: true,
  },
  {
    id: 'corp-suiting-blazer',
    title: 'Corporate Tailored Blazer',
    categorySlug: 'corporate',
    categoryName: 'Corporate Uniforms',
    summary: 'Single or double-breasted structured blazers with breathable inner lining.',
    description:
      'Elevate institutional authority with custom blazers designed specifically for managerial and executive hospitality roles. Features hand-finished lapels and concealed internal document pockets.',
    features: [
      'Structured canvas chest piece for tailored silhouette',
      'Full breathable satin lining in matching or accent brand color',
      'Discrete chest pocket designed for pocket squares or ID badges',
      'Custom gold, brass, or tonal matte buttons',
    ],
    fabricOptions: ['Premium Poly-Wool Blend (280gsm)', 'Wrinkle-Free Heavy Suiting Twill'],
    bestFor: 'Management teams, hotel front managers, security supervisors, event leads',
    moqNotice: 'Standard batch MOQ: 10 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'corp-service-waistcoat',
    title: 'Structured Front-Desk Waistcoat',
    categorySlug: 'corporate',
    categoryName: 'Corporate Uniforms',
    summary: 'Versatile formal vests providing polished uniform consistency across seasons.',
    description:
      'A refined uniform layer that looks pristine over button-downs. Features an adjustable back buckle cinch for tailored torso shaping and neat dual welt pockets.',
    features: [
      'Adjustable satin back strap with antique silver slider',
      'Four-button front placket with reinforced buttonholes',
      'Dual functioning front welt pockets',
      'Fade-resistant fabric that withstands frequent commercial cleaning',
    ],
    fabricOptions: ['Poly-Viscose Suiting (220gsm)', 'Matte Black Twill'],
    bestFor: 'Hotel reception, VIP transport drivers, concierge services, event hosts',
    moqNotice: 'Standard batch MOQ: 15 pieces',
    isDraft: true,
  },

  // Hospitality & Culinary Wear
  {
    id: 'hosp-chef-jacket',
    title: 'Executive Breathable Chef Jacket',
    categorySlug: 'hospitality',
    categoryName: 'Hospitality & Culinary',
    summary: 'Double-breasted professional chef coat with ventilated back mesh for kitchen heat relief.',
    description:
      'Designed in collaboration with kitchen professionals to provide heat relief and durability during demanding kitchen shifts. Features durable contrast piping and thermometer sleeve slots.',
    features: [
      'Cool-vent breathable mesh panel across upper back',
      'Reversible double-breasted front with cloth-covered or snap buttons',
      'Dual-section left sleeve thermometer and tasting spoon pocket',
      'Stain-release fabric finish that sheds hot oil and sauces',
    ],
    fabricOptions: ['Heavy Poly-Cotton Drill (210gsm)', 'Egyptian Cotton Kitchen Blend (180gsm)'],
    bestFor: 'Executive chefs, sous chefs, bakery culinary teams, kitchen brigade',
    moqNotice: 'Standard batch MOQ: 10 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'hosp-canvas-apron',
    title: 'Heavyweight Canvas Cross-Back Bib Apron',
    categorySlug: 'hospitality',
    categoryName: 'Hospitality & Culinary',
    summary: 'Rugged canvas aprons with genuine leather or cotton webbing cross-back straps.',
    description:
      'The modern standard for contemporary Kigali cafes, cocktail lounges, and artisan restaurants. The cross-back harness transfers weight off the neck to ensure all-day comfort.',
    features: [
      'Heavy 100% cotton washed canvas with water-resistant wax finish option',
      'Solid antique brass grommets and detachable clip-on straps',
      'Large split kangaroo pocket with separate pen and towel loop',
      'Direct embroidery or debossed leather logo patch placement',
    ],
    fabricOptions: ['12oz Washed Cotton Duck Canvas', 'Heavyweight Indigo Denim (11oz)'],
    bestFor: 'Baristas, bartenders, grill masters, service floor staff, florists',
    moqNotice: 'Standard batch MOQ: 20 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'hosp-service-polo',
    title: 'Hospitality Quick-Dry Service Polo',
    categorySlug: 'hospitality',
    categoryName: 'Hospitality & Culinary',
    summary: 'Moisture-wicking, antimicrobial collared shirts for active restaurant floor staff.',
    description:
      'Keeps service waitstaff fresh and presentable across busy lunch and dinner shifts. The anti-curl knitted collar maintains its structure wash after wash.',
    features: [
      'Moisture-wicking micro-piqué polyester-cotton blend',
      'Reinforced side vents for freedom of movement',
      'Anti-curl flat knit rib collar with 3-button placket',
      'High colorfastness tested against repeated commercial washing',
    ],
    fabricOptions: ['Performance Pique (190gsm)', 'Poly-Cotton Cool-Tek (180gsm)'],
    bestFor: 'Waitstaff, room service attendants, pool bar crews, housekeeping supervisors',
    moqNotice: 'Standard batch MOQ: 25 pieces',
    isDraft: true,
  },
  {
    id: 'hosp-housekeeping-tunic',
    title: 'Ergonomic Housekeeping Tunic Set',
    categorySlug: 'hospitality',
    categoryName: 'Hospitality & Culinary',
    summary: 'Comfortable tunic top and pull-on pants with generous deep pockets for housekeeping duties.',
    description:
      'Tailored with side pleats and generous ease to allow effortless bending, stretching, and lifting. Features concealed asymmetrical zip closure to protect hotel furniture from scratches.',
    features: [
      'Concealed asymmetrical zipper prevents scratching guest surfaces',
      'Two hip pockets sized for cleaning sprays, keycards, and cloths',
      'Side movement slits for unrestricted walking and stair climbing',
      'Matching elasticated drawstring trousers included',
    ],
    fabricOptions: ['Poly-Cotton Lightweight Twill (160gsm)', 'Stretch Poplin'],
    bestFor: 'Hotel housekeeping staff, residential estate managers, laundry attendants',
    moqNotice: 'Standard batch MOQ: 20 sets',
    isDraft: true,
  },

  // Industrial & Safety Workwear
  {
    id: 'ind-heavy-overall',
    title: 'Heavy-Duty 100% Cotton Workwear Overall',
    categorySlug: 'industrial',
    categoryName: 'Industrial & Safety',
    summary: 'One-piece boiler suit with reinforced knees, tool loops, and two-way heavy brass zipper.',
    description:
      'Built for extreme workshop and construction conditions in Rwanda. All major seams are stitched with heavy-gauge thread and triple-needle reinforcement to prevent tearing.',
    features: [
      '100% flame-retardant treated cotton drill or heavy poly-cotton canvas',
      'Heavy-duty two-way front brass zipper with protective storm flap',
      'Dual chest pockets with brass snap flaps, rule pocket, and hammer loop',
      'Elasticated back waistband for flexible mobility while crouching',
    ],
    fabricOptions: ['Heavy Cotton Drill (300gsm)', 'Industrial Poly-Cotton (260gsm)'],
    bestFor: 'Mechanics, electrical technicians, construction engineers, factory operators',
    moqNotice: 'Standard batch MOQ: 20 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'ind-hi-vis-vest',
    title: 'High-Visibility Two-Tone Reflective Safety Vest',
    categorySlug: 'industrial',
    categoryName: 'Industrial & Safety',
    summary: 'EN ISO 20471 compliant safety vest with certified 50mm reflective glass bead tape.',
    description:
      'Crucial for roadside logistics, warehousing operations, and construction sites. Contrasting navy or black bottom prevents visible grease accumulation while keeping neon visibility high.',
    features: [
      '50mm high-grade micro-prismatic silver reflective tape (360-degree visibility)',
      'Heavy-duty front zipper closure (avoids flimsy hook-and-loop velcro failure)',
      'Transparent plastic ID card chest holder and pen division',
      'Durable woven polyester binding along all outer edges',
    ],
    fabricOptions: ['100% High-Density Fluorescent Polyester (130gsm)', 'Breathable Open-Weave Mesh'],
    bestFor: 'Logistics drivers, traffic wardens, site surveyors, airport ground crew',
    moqNotice: 'Standard batch MOQ: 30 pieces',
    isDraft: true,
  },
  {
    id: 'ind-cargo-pants',
    title: 'Reinforced Multi-Pocket Work Cargo Pants',
    categorySlug: 'industrial',
    categoryName: 'Industrial & Safety',
    summary: 'Industrial utility trousers featuring reinforced Cordura knee patches and expandable holsters.',
    description:
      'Engineered for tradespeople who carry tools, fasteners, and measurement devices daily. The knee areas feature internal pockets for optional neoprene knee-pad inserts.',
    features: [
      'Internal knee-pad pockets with velcro closure for ergonomic cushioning',
      'Seven multi-function pockets including velcro cargo flap and phone slot',
      'Triple-needle stitching along the inseam and outer leg seams',
      'Wide belt loops accommodating heavy tool belts up to 50mm',
    ],
    fabricOptions: ['Ripstop Poly-Cotton Canvas (260gsm)', 'Heavy Duty Twill (290gsm)'],
    bestFor: 'Maintenance technicians, civil engineers, telecommunications climbers, carpenters',
    moqNotice: 'Standard batch MOQ: 20 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'ind-lab-coat',
    title: 'Industrial Laboratory & Inspection Dust Coat',
    categorySlug: 'industrial',
    categoryName: 'Industrial & Safety',
    summary: 'Full-length protective coat for laboratory technicians, pharmacists, and food processing.',
    description:
      'Provides full upper-body and upper-leg barrier protection in sanitary, educational, and medical manufacturing environments. Designed with snap-closure front and back walking vent.',
    features: [
      'Anti-static treated poly-cotton blend resistant to light chemical splashes',
      'Front snap stud closure for rapid emergency removal',
      'Two deep hip pockets and left chest pocket with divider pen slot',
      'Rear back vent to promote comfortable airflow and stride mobility',
    ],
    fabricOptions: ['White / Sky Blue Poly-Cotton Poplin (175gsm)', 'Sanitary Twill (195gsm)'],
    bestFor: 'Food processing inspectors, pharmacy technicians, clinic staff, research labs',
    moqNotice: 'Standard batch MOQ: 20 pieces',
    isDraft: true,
  },

  // Branded Apparel & Promotional
  {
    id: 'brand-premium-polo',
    title: 'Custom Branded Piqué Cotton Polo Shirt',
    categorySlug: 'branded',
    categoryName: 'Branded Apparel',
    summary: 'High-density combed cotton piqué polo with precision corporate logo embroidery.',
    description:
      'The gold standard for corporate casual Fridays, brand ambassadors, and Kigali tech conferences. Cut for a modern, professional silhouette that resists shrinking and color fading.',
    features: [
      '220gsm 100% combed cotton piqué or 65/35 poly-cotton blend',
      'Taped neck and reinforced shoulders for shape retention',
      'Laser-engraved buttons matching garment color',
      'Precision chest embroidery up to 12,000 stitches included in quote tier',
    ],
    fabricOptions: ['100% Combed Cotton Piqué (220gsm)', 'Poly-Cotton Piqué (200gsm)'],
    bestFor: 'Corporate casual wear, sales teams, conference delegates, bank branch staff',
    moqNotice: 'Standard batch MOQ: 30 pieces',
    isDraft: true,
    popular: true,
  },
  {
    id: 'brand-crewneck-tshirt',
    title: 'Heavyweight Screen-Printed Event T-Shirt',
    categorySlug: 'branded',
    categoryName: 'Branded Apparel',
    summary: 'Durable 180gsm ring-spun cotton t-shirt built for promotional campaigns and staff events.',
    description:
      'Unlike flimsy single-use promotional shirts, our crewnecks are tailored with heavy ring-spun cotton that staff continue to wear with pride for months after your campaign.',
    features: [
      '180gsm 100% ring-spun combed cotton jersey',
      'Seamless ribbed crewneck collar with spandex for shape retention',
      'Silkscreen printing with water-based or plastisol inks that won’t crack',
      'Double-stitched sleeve cuffs and bottom hemline',
    ],
    fabricOptions: ['100% Ring-Spun Cotton (180gsm)', 'Organic Cotton Single Jersey (160gsm)'],
    bestFor: 'Product launches, sports tournaments, youth campaigns, volunteer teams',
    moqNotice: 'Standard batch MOQ: 50 pieces',
    isDraft: true,
  },
  {
    id: 'brand-twill-cap',
    title: 'Structured 6-Panel Embroidered Cotton Cap',
    categorySlug: 'branded',
    categoryName: 'Branded Apparel',
    summary: 'Structured baseball cap featuring 3D puff embroidery and adjustable metal buckle.',
    description:
      'Completes any team uniform. Built with a structured front buckram that maintains its crisp dome shape, an internal sweatband, and embroidered ventilation eyelets.',
    features: [
      '100% heavy washed cotton twill with reinforced buckram front',
      'Optional 3D raised puff embroidery or flat embroidery',
      'Pre-curved sandwich peak with contrast color insert option',
      'Antique brass buckle and grommet strap closure at rear',
    ],
    fabricOptions: ['Heavy Brushed Cotton Twill', 'Ripstop Cotton (Outdoor)'],
    bestFor: 'Outdoor promo teams, drivers, construction managers, sports squads',
    moqNotice: 'Standard batch MOQ: 50 pieces',
    isDraft: true,
  },
  {
    id: 'brand-fleece-gilet',
    title: 'Corporate Insulated Uniform Gilet / Bodywarmer',
    categorySlug: 'branded',
    categoryName: 'Branded Apparel',
    summary: 'Sleeveless padded vest with windproof exterior, fleece lining, and chest branding space.',
    description:
      'A stylish, practical layering piece for cool Kigali mornings and air-conditioned conference halls. Allows complete arm freedom while keeping the torso comfortably warm.',
    features: [
      'Water-repellent micro-ripstop polyester outer shell',
      'Soft anti-pill polar fleece interior lining',
      'Zipped side hand pockets and interior smartphone chest pocket',
      'Drop-tail hemline for added coverage when seated',
    ],
    fabricOptions: ['Ripstop Poly Shell with Micro-Fleece Lining', 'Softshell 3-Layer Laminate'],
    bestFor: 'Field supervisors, tech founders, logistics managers, event coordinators',
    moqNotice: 'Standard batch MOQ: 20 pieces',
    isDraft: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.popular);
}

export function getProductsByCategory(categorySlug: CategorySlug): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.id === slug);
}
