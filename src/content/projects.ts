import { Project } from '@/types';

/**
 * Project Portfolio & Capability Demonstrations
 *
 * NOTE FOR CLIENT REVIEW:
 * The projects listed below represent structured capability prototypes to demonstrate
 * how Q Workwear's completed uniforms will be presented to corporate prospects.
 *
 * As real photography and client authorization are provided by Quddus and Tinah,
 * replace these items with confirmed client case studies in this file.
 */
export const projects: Project[] = [
  {
    id: 'proj-boutique-hotel',
    title: 'Boutique Hotel Front-of-House & Service Attire',
    clientSector: 'Hospitality & Luxury Tourism',
    categorySlug: 'hospitality',
    location: 'Kigali, Rwanda',
    summary:
      'Demonstration of a full 3-department uniform suite: tailored reception waistcoats, breathable chef jackets with cooling mesh, and heavy-duty canvas aprons for the espresso lounge.',
    deliverables: [
      '12 Bespoke Tailored Front-Desk Waistcoats',
      '25 Executive Breathable Double-Breasted Chef Coats',
      '30 Washed Canvas Bib Aprons with Brass Hardware',
      'Precision Dual-Color Logo Chest Embroidery',
    ],
    fabricsUsed: 'Poly-Viscose suiting blend (240gsm), Cotton-Poly drill with back-mesh, 12oz Duck Canvas',
    turnaroundTime: '18 Days from sizing approval to delivery',
    isDemonstrationOnly: true,
  },
  {
    id: 'proj-logistics-fleet',
    title: 'Fleet Logistics & Warehouse Heavy-Duty Workwear',
    clientSector: 'Transport & Industrial Logistics',
    categorySlug: 'industrial',
    location: 'Kigali Free Zone & Regional Routes',
    summary:
      'Demonstration of an industrial safety wardrobe designed for heavy lifting, grease resistance, and roadside nighttime visibility.',
    deliverables: [
      '85 Flame-Retardant Heavy-Duty Cotton Work Overalls',
      '120 Two-Tone High-Visibility Safety Vests with EN ISO 20471 tape',
      '85 Reinforced Utility Cargo Pants with knee-pad compartments',
    ],
    fabricsUsed: '100% Cotton drill (300gsm), High-Density fluorescent polyester (130gsm)',
    turnaroundTime: '24 Days for complete batch run',
    isDemonstrationOnly: true,
  },
  {
    id: 'proj-corporate-finance',
    title: 'Financial Services Executive Team Shirts & Suiting',
    clientSector: 'Banking & Financial Advisory',
    categorySlug: 'corporate',
    location: 'Kigali CBD',
    summary:
      'Demonstration of standardized corporate branch attire balancing sharp elegance with all-day comfort for teller and loan advisory personnel.',
    deliverables: [
      '150 Custom Monogrammed Oxford Button-Down Shirts',
      '60 Tailored Trousers & Pencil Skirts with expandable comfort waistbands',
      '40 Custom Lined Blazers for Branch Managers',
    ],
    fabricsUsed: 'Wrinkle-resistant 60/40 Oxford cotton twill, Poly-Viscose stretch suiting',
    turnaroundTime: '21 Days with on-site measurement fittings',
    isDemonstrationOnly: true,
  },
  {
    id: 'proj-tech-summit',
    title: 'Pan-African Tech Summit Delegate & Staff Branded Apparel',
    clientSector: 'Technology & International Events',
    categorySlug: 'branded',
    location: 'Kigali Convention Centre',
    summary:
      'Demonstration of a high-volume branded apparel run for event organizers, technical stage crew, and VIP delegates.',
    deliverables: [
      '300 Combed Cotton Piqué Embroidered Polo Shirts',
      '500 Ring-Spun Cotton Screen-Printed Crewneck T-Shirts',
      '150 Structured 6-Panel Twill Caps with 3D Embroidery',
    ],
    fabricsUsed: '220gsm Combed cotton piqué, 180gsm Ring-spun cotton jersey',
    turnaroundTime: '12 Days accelerated event production',
    isDemonstrationOnly: true,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter((p) => p.categorySlug === categorySlug);
}
