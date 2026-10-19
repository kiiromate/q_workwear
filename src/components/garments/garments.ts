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
  imageAlt: string;
}

export const garmentItems: GarmentItem[] = [
  {
    id: 'corporate',
    categorySlug: 'corporate',
    title: 'Corporate Suiting & Office',
    subtitle: 'Blazers, shirts & separates',
    tagline: 'Front desk and office teams',
    description: 'Tailored blazers, long- and short-sleeved office shirts, and coordinated trousers or skirts for reception, management, and client-facing teams.',
    highlights: [
      'Structured blazers & breathable shirting',
      'Subtle chest, cuff, or collar embroidery',
      'Coordinated trousers, skirts & waistcoats',
    ],
    href: '/products?category=corporate',
    image: '/images/editorial/hero-model-detail.webp',
    imageAlt: 'Tailored charcoal blazer and crisp light-blue office shirt cuff with embroidered Q mark',
  },
  {
    id: 'hospitality',
    categorySlug: 'hospitality',
    title: 'Hospitality & Culinary',
    subtitle: 'Chef jackets, aprons & service wear',
    tagline: 'Kitchens, cafés and hotels',
    description: 'Double-breasted chef jackets, heavy cotton canvas bib and waist aprons, and coordinated service uniforms built for daily kitchen and dining room work.',
    highlights: [
      'Durable cotton twill & heavy canvas',
      'Reinforced pocket seams & brass hardware',
      'Embroidered chest marks & woven apron labels',
    ],
    href: '/products?category=hospitality',
    image: '/images/editorial/hospitality-apron-detail.webp',
    imageAlt: 'Heavy olive canvas bib apron detail with brass rivets, woven cotton straps and stitched Q Workwear mark',
  },
  {
    id: 'industrial',
    categorySlug: 'industrial',
    title: 'Industrial & Workshop',
    subtitle: 'Overalls, jackets & high-vis vests',
    tagline: 'Workshops, engineering and site crews',
    description: 'Heavy-duty cotton twill coveralls, utility work jackets, cargo trousers, dust coats, and high-visibility vests tailored to your site requirements.',
    highlights: [
      'Heavyweight cotton twill & reinforced bar-tacks',
      'High-visibility reflective tape options',
      'Stitched chest patches & utility pocket layouts',
    ],
    href: '/products?category=industrial',
    image: '/images/editorial/industrial-coverall.webp',
    imageAlt: 'Deep-navy heavy cotton twill one-piece work coverall with stitched Q Workwear chest patch',
  },
  {
    id: 'branded',
    categorySlug: 'branded',
    title: 'Branded Apparel & Teams',
    subtitle: 'Polos, T-shirts, caps & gilets',
    tagline: 'Everyday team identity and events',
    description: 'Honeycomb piqué polos, combed cotton crew-neck T-shirts, structured six-panel twill caps, and gilets customized with your organization’s colors and mark.',
    highlights: [
      'Breathable piqué & heavyweight cotton jersey',
      'Clean chest & cap crown embroidery',
      'Contrast collar tipping & custom colorways',
    ],
    href: '/products?category=branded',
    image: '/images/editorial/branded-polo-fit.webp',
    imageAlt: 'Charcoal honeycomb piqué polo shirt with embroidered Q Workwear mark on the left chest',
  },
];

export function getGarmentById(id: GarmentId): GarmentItem {
  return garmentItems.find((item) => item.id === id) || garmentItems[0];
}
