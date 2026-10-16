import { CategorySlug } from '@/types';

export type GarmentId = 'corporate' | 'hospitality' | 'industrial' | 'branded';

export interface GarmentItem {
  id: GarmentId;
  categorySlug: CategorySlug;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  href: string;
  image: string;
}

export const garmentItems: GarmentItem[] = [
  {
    id: 'corporate',
    categorySlug: 'corporate',
    title: 'Corporate Suiting & Office',
    subtitle: 'Blazers, shirts & separates',
    tagline: 'Tailored for front desk and executive presence',
    description: 'Precision-tailored blazers, crisp long- and short-sleeved shirts, and coordinated trousers crafted for Rwandan corporate teams and front-desk environments.',
    highlights: ['Tailored lapel rolls & breathable linings', 'Custom embroidery & chest monogramming', 'Coordinated executive trousers & skirts'],
    href: '/products?category=corporate',
    image: '/images/showcase/cat-corporate-suiting.webp',
  },
  {
    id: 'hospitality',
    categorySlug: 'hospitality',
    title: 'Hospitality & Culinary',
    subtitle: 'Chef jackets, aprons & service wear',
    tagline: 'Kitchen durability with dining room presentation',
    description: 'Double-breasted chef coats, reinforced duck canvas aprons, and sleek service uniforms designed for restaurant kitchens, hotels, and cafes in Kigali.',
    highlights: ['Heat-tolerant cotton drills & canvas', 'Reinforced stress points & bar-tacks', 'Cross-back leather & webbing apron straps'],
    href: '/products?category=hospitality',
    image: '/images/showcase/cat-hospitality-culinary.webp',
  },
  {
    id: 'industrial',
    categorySlug: 'industrial',
    title: 'Industrial & Technical',
    subtitle: 'Overalls, jackets & safety vests',
    tagline: 'Practical protection for workshops and job sites',
    description: 'Heavy-duty cotton drill overalls, utility work trousers, dust coats, and high-visibility apparel engineered for trades, workshops, and agriculture.',
    highlights: ['Heavyweight tear-resistant twill', 'Reflective micro-prismatic trim details', 'Multi-pocket utility and tool loops'],
    href: '/products?category=industrial',
    image: '/images/showcase/cat-industrial-safety.webp',
  },
  {
    id: 'branded',
    categorySlug: 'branded',
    title: 'Branded Apparel & Teams',
    subtitle: 'Polos, tees, caps & outerwear',
    tagline: 'Your organization’s identity on everyday essentials',
    description: 'Piqué polos, combed cotton tees, structured 6-panel caps, and lightweight fleece vests customized with clean embroidery or print for your team.',
    highlights: ['Honeycomb micro-piqué cotton', 'High-density 3D puff embroidery', 'Custom color tipping & branded patches'],
    href: '/products?category=branded',
    image: '/images/showcase/cat-branded-apparel.webp',
  },
];

export function getGarmentById(id: GarmentId): GarmentItem {
  return garmentItems.find((item) => item.id === id) || garmentItems[0];
}
