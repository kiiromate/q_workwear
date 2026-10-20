import { ProductCategory, Product, CategorySlug } from '@/types';
import type { Locale } from './i18n';

interface LocalizedText {
  en: string;
  fr: string;
}

interface CanonicalCategory {
  id: CategorySlug;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  imageAlt: LocalizedText;
  iconName: 'Building2' | 'UtensilsCrossed' | 'HardHat' | 'Sparkles';
  image: string;
}

interface CanonicalProduct {
  id: string;
  categorySlug: CategorySlug;
  title: LocalizedText;
  summary: LocalizedText;
  popular?: boolean;
}

const canonicalCategories: CanonicalCategory[] = [
  {
    id: 'corporate',
    name: { en: 'Corporate', fr: 'Entreprise' },
    tagline: { en: 'Office and front desk', fr: 'Bureau et accueil' },
    description: {
      en: 'Shirts, blazers and matching separates for office and front-desk teams.',
      fr: 'Chemises, blazers et pièces coordonnées pour les équipes de bureau et d’accueil.',
    },
    imageAlt: {
      en: 'Structured deep-navy blazer, pressed light-blue dress shirt, and charcoal formal trousers on studio hangers with a clean unbranded exterior',
      fr: 'Blazer bleu marine structuré sans logo extérieur, chemise bleu clair repassée et pantalon habillé anthracite sur cintres en studio',
    },
    iconName: 'Building2',
    image: '/images/showcase/cat-corporate-suiting.webp',
  },
  {
    id: 'hospitality',
    name: { en: 'Hospitality', fr: 'Hôtellerie & restauration' },
    tagline: { en: 'Kitchen and service', fr: 'Cuisine et service' },
    description: {
      en: 'Chef jackets, aprons and service uniforms for kitchens, cafés and hotels.',
      fr: 'Vestes de chef, tabliers et tenues de service pour cuisines, cafés et hôtels.',
    },
    imageAlt: {
      en: 'Ivory double-breasted chef jacket beside an olive canvas bib apron with woven straps and a compact embroidered Q emblem on the pocket',
      fr: 'Veste de chef croisée ivoire à côté d’un tablier bavette en toile olive avec sangles tissées et discret emblème Q brodé sur la poche',
    },
    iconName: 'UtensilsCrossed',
    image: '/images/showcase/cat-hospitality-culinary.webp',
  },
  {
    id: 'industrial',
    name: { en: 'Industrial', fr: 'Industrie & chantier' },
    tagline: { en: 'Workshop and site', fr: 'Atelier et terrain' },
    description: {
      en: 'Overalls, work trousers and high-visibility garments for hands-on teams.',
      fr: 'Combinaisons, pantalons de travail et vêtements haute visibilité pour les équipes de terrain.',
    },
    imageAlt: {
      en: 'Deep-navy work jacket with sewn rectangular chest patch, matching work trousers, and yellow high-visibility vest on a studio rail',
      fr: 'Veste de travail bleu marine avec écusson rectangulaire cousu, pantalon utilitaire assorti et gilet haute visibilité jaune sur portant',
    },
    iconName: 'HardHat',
    image: '/images/showcase/cat-industrial-safety.webp',
  },
  {
    id: 'branded',
    name: { en: 'Branded apparel', fr: 'Textile personnalisé' },
    tagline: { en: 'Teams and events', fr: 'Équipes et événements' },
    description: {
      en: 'Polos, T-shirts and caps with space for your organisation’s identity.',
      fr: 'Polos, t-shirts et casquettes personnalisables aux couleurs de votre organisation.',
    },
    imageAlt: {
      en: 'Navy piqué polo with red collar tipping and chest embroidery beside a folded off-white printed T-shirt and clean six-panel navy cap',
      fr: 'Polo piqué bleu marine à liseré rouge et broderie poitrine à côté d’un t-shirt écru plié avec marquage imprimé et d’une casquette unie',
    },
    iconName: 'Sparkles',
    image: '/images/showcase/cat-branded-apparel.webp',
  },
];

const canonicalProducts: CanonicalProduct[] = [
  {
    id: 'corp-exec-shirt',
    categorySlug: 'corporate',
    title: { en: 'Office shirts', fr: 'Chemises de bureau' },
    summary: {
      en: 'Long- or short-sleeved shirts, with colour and fit selected for your team.',
      fr: 'Chemises à manches longues ou courtes, avec couleur et coupe choisies pour votre équipe.',
    },
  },
  {
    id: 'corp-tailored-trousers',
    categorySlug: 'corporate',
    title: { en: 'Trousers & skirts', fr: 'Pantalons & jupes' },
    summary: {
      en: 'Coordinated separates for a consistent office uniform.',
      fr: 'Pièces coordonnées pour une tenue de bureau homogène.',
    },
  },
  {
    id: 'corp-suiting-blazer',
    categorySlug: 'corporate',
    title: { en: 'Blazers', fr: 'Blazers' },
    summary: {
      en: 'A tailored layer for reception, management and customer-facing roles.',
      fr: 'Une veste structurée pour l’accueil, l’encadrement et les fonctions en contact avec la clientèle.',
    },
  },
  {
    id: 'corp-service-waistcoat',
    categorySlug: 'corporate',
    title: { en: 'Waistcoats', fr: 'Gilets de costume' },
    summary: {
      en: 'A formal option to complete a coordinated team outfit.',
      fr: 'Une pièce habillée pour compléter une tenue d’équipe coordonnée.',
    },
  },
  {
    id: 'hosp-chef-jacket',
    categorySlug: 'hospitality',
    title: { en: 'Chef jackets', fr: 'Vestes de chef' },
    summary: {
      en: 'Kitchen uniforms with sleeve length and fastening details to discuss.',
      fr: 'Tenues de cuisine avec longueur de manches et système de fermeture à définir ensemble.',
    },
  },
  {
    id: 'hosp-canvas-apron',
    categorySlug: 'hospitality',
    title: { en: 'Aprons', fr: 'Tabliers' },
    summary: {
      en: 'Bib and waist styles for kitchen, café and service teams.',
      fr: 'Modèles à bavette ou à la taille pour les équipes de cuisine, de café et de salle.',
    },
  },
  {
    id: 'hosp-service-polo',
    categorySlug: 'hospitality',
    title: { en: 'Service polos', fr: 'Polos de service' },
    summary: {
      en: 'Collared team wear for restaurant and hotel service.',
      fr: 'Hauts à col pour le service en restaurant et en hôtellerie.',
    },
  },
  {
    id: 'hosp-housekeeping-tunic',
    categorySlug: 'hospitality',
    title: { en: 'Housekeeping uniforms', fr: 'Tenues d’étage et d’entretien' },
    summary: {
      en: 'Tunic and trouser combinations for housekeeping teams.',
      fr: 'Ensembles tunique et pantalon pour les équipes d’étage et d’entretien.',
    },
  },
  {
    id: 'ind-heavy-overall',
    categorySlug: 'industrial',
    title: { en: 'Work overalls', fr: 'Combinaisons de travail' },
    summary: {
      en: 'One-piece workwear, with pocket layout and fit agreed for your order.',
      fr: 'Combinaison une pièce avec disposition des poches et coupe convenues pour votre commande.',
    },
  },
  {
    id: 'ind-hi-vis-vest',
    categorySlug: 'industrial',
    title: { en: 'High-visibility vests', fr: 'Gilets haute visibilité' },
    summary: {
      en: 'Visibility-focused garments. Discuss your site’s required specifications before ordering.',
      fr: 'Tenues axées sur la visibilité. Précisez les exigences propres à votre site avant de commander.',
    },
  },
  {
    id: 'ind-cargo-pants',
    categorySlug: 'industrial',
    title: { en: 'Work trousers', fr: 'Pantalons de travail' },
    summary: {
      en: 'Practical trousers with pocket and fastening options for the job.',
      fr: 'Pantalons fonctionnels avec options de poches et de fermetures adaptées au poste.',
    },
  },
  {
    id: 'ind-lab-coat',
    categorySlug: 'industrial',
    title: { en: 'Dust coats', fr: 'Blouses d’atelier' },
    summary: {
      en: 'Longer work coats for workshop and inspection roles.',
      fr: 'Blouses longues pour les fonctions d’atelier, de laboratoire et de contrôle.',
    },
  },
  {
    id: 'brand-premium-polo',
    categorySlug: 'branded',
    title: { en: 'Polos', fr: 'Polos' },
    summary: {
      en: 'A collared option for everyday team wear and events.',
      fr: 'Un modèle à col pour les tenues quotidiennes d’équipe et les événements.',
    },
  },
  {
    id: 'brand-crewneck-tshirt',
    categorySlug: 'branded',
    title: { en: 'T-shirts', fr: 'T-shirts' },
    summary: {
      en: 'Crew-neck team and event shirts in your chosen colours.',
      fr: 'T-shirts à col rond pour équipes et événements dans les couleurs de votre choix.',
    },
  },
  {
    id: 'brand-twill-cap',
    categorySlug: 'branded',
    title: { en: 'Caps', fr: 'Casquettes' },
    summary: {
      en: 'Headwear to complete your team’s branded outfit.',
      fr: 'Casquettes personnalisées pour compléter la tenue de votre équipe.',
    },
  },
  {
    id: 'brand-fleece-gilet',
    categorySlug: 'branded',
    title: { en: 'Gilets', fr: 'Gilets sans manches' },
    summary: {
      en: 'A sleeveless outer layer with room for your team’s identity.',
      fr: 'Une couche extérieure sans manches offrant un espace dédié au marquage de votre organisation.',
    },
  },
];

export type LocalizedProductCategory = ProductCategory & { imageAlt: string };

export function getCategoriesForLocale(locale: Locale = 'en'): LocalizedProductCategory[] {
  return canonicalCategories.map((cat) => ({
    id: cat.id,
    name: cat.name[locale],
    tagline: cat.tagline[locale],
    description: cat.description[locale],
    imageAlt: cat.imageAlt[locale],
    iconName: cat.iconName,
    badgeText: '',
    garmentCountEstimate: '',
    image: cat.image,
    fabricBadge: '',
  }));
}

export function getProductsForLocale(locale: Locale = 'en'): Product[] {
  const categoryNameBySlug = new Map(
    canonicalCategories.map((cat) => [cat.id, cat.name[locale]])
  );
  return canonicalProducts.map((prod) => ({
    id: prod.id,
    title: prod.title[locale],
    categorySlug: prod.categorySlug,
    categoryName: categoryNameBySlug.get(prod.categorySlug) || prod.categorySlug,
    summary: prod.summary[locale],
    description: prod.summary[locale],
    features: [],
    fabricOptions: [],
    bestFor: '',
    isDraft: true,
    popular: prod.popular,
  }));
}

/**
 * Translates a known product or category title/ID when switching between EN and FR,
 * while preserving any custom user-entered garment string untouched.
 */
export function translateGarmentLabel(rawGarment: string, targetLocale: Locale): string {
  const trimmed = rawGarment.trim();
  if (!trimmed) return '';
  const lower = trimmed.toLowerCase();

  for (const prod of canonicalProducts) {
    if (
      prod.id.toLowerCase() === lower ||
      prod.title.en.toLowerCase() === lower ||
      prod.title.fr.toLowerCase() === lower
    ) {
      return prod.title[targetLocale];
    }
  }

  for (const cat of canonicalCategories) {
    if (
      cat.id.toLowerCase() === lower ||
      cat.name.en.toLowerCase() === lower ||
      cat.name.fr.toLowerCase() === lower
    ) {
      return cat.name[targetLocale];
    }
  }

  return rawGarment;
}

export const categories: ProductCategory[] = getCategoriesForLocale('en');
export const products: Product[] = getProductsForLocale('en');

export function getAllProducts(locale: Locale = 'en'): Product[] {
  return getProductsForLocale(locale);
}
export function getFeaturedProducts(locale: Locale = 'en'): Product[] {
  return getProductsForLocale(locale).filter((product) => product.popular);
}
export function getProductsByCategory(slug: CategorySlug, locale: Locale = 'en'): Product[] {
  return getProductsForLocale(locale).filter((product) => product.categorySlug === slug);
}
export function getCategoryBySlug(slug: string, locale: Locale = 'en'): LocalizedProductCategory | undefined {
  return getCategoriesForLocale(locale).find((category) => category.id === slug);
}
