import { CategorySlug } from '@/types';
import { Locale, localizeHref } from '@/content/i18n';

export type GarmentId = 'corporate' | 'hospitality' | 'industrial' | 'branded';

export interface GarmentItem {
  id: GarmentId;
  categorySlug: CategorySlug;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  brandingMethodNote: string;
  highlights: string[];
  href: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  detailImage: string;
  detailImageAlt: string;
  detailImageCaption: string;
}

const garmentItemsByLocale: Record<Locale, GarmentItem[]> = {
  en: [
    {
      id: 'corporate',
      categorySlug: 'corporate',
      title: 'Corporate Suiting & Office',
      subtitle: 'Blazers, shirts & separates',
      tagline: 'Front desk and office teams',
      description:
        'Tailored blazers, long- and short-sleeved office shirts, and coordinated trousers or skirts for reception, management, and client-facing teams.',
      brandingMethodNote:
        'Clean exterior suiting with woven interior neck labels, or discreet monogram embroidery on shirt cuffs and collars.',
      highlights: [
        'Structured blazers & breathable shirting',
        'Woven interior neck labels or discreet cuff embroidery',
        'Coordinated trousers, skirts & waistcoats',
      ],
      href: '/products?category=corporate',
      image: '/images/showcase/cat-corporate-suiting.webp',
      imageAlt: 'Structured deep-navy corporate blazer, crisp light-blue button-down shirt and charcoal formal trousers on studio forms',
      imageCaption: 'Clean exterior corporate blazer and shirt set with unbranded lapels.',
      detailImage: '/images/editorial/corporate-tailoring-detail.webp',
      detailImageAlt: 'Close-up of a tailored charcoal blazer sleeve and light-blue shirt cuff with a discreet embroidered Q emblem',
      detailImageCaption: 'Optional discreet shirt-cuff monogram embroidery and woven interior maker label.',
    },
    {
      id: 'hospitality',
      categorySlug: 'hospitality',
      title: 'Hospitality & Culinary',
      subtitle: 'Chef jackets, aprons & service wear',
      tagline: 'Kitchens, cafés and hotels',
      description:
        'Double-breasted chef jackets, heavy cotton canvas bib and waist aprons, and coordinated service uniforms built for daily kitchen and dining room work.',
      brandingMethodNote:
        'Direct chest embroidery on chef coats or symbol-only stitched marks and woven tabs on heavy canvas bib aprons.',
      highlights: [
        'Durable cotton twill & heavy canvas',
        'Reinforced pocket seams & brass hardware',
        'Apron pocket embroidery & woven hem labels',
      ],
      href: '/products?category=hospitality',
      image: '/images/showcase/cat-hospitality-culinary.webp',
      imageAlt: 'Ivory double-breasted cotton twill chef jacket beside an olive heavy canvas bib apron with stitched Q mark on the pocket',
      imageCaption: 'Ivory double-breasted chef coat paired with a heavy olive canvas bib apron.',
      detailImage: '/images/editorial/hospitality-apron-detail.webp',
      detailImageAlt: 'Macro detail of an olive canvas bib apron pocket with brass corner rivets and stitched off-white Q symbol',
      detailImageCaption: 'Reinforced canvas pocket corner rivets and symbol-only thread embroidery.',
    },
    {
      id: 'industrial',
      categorySlug: 'industrial',
      title: 'Industrial & Workshop',
      subtitle: 'Overalls, jackets & high-vis vests',
      tagline: 'Workshops, engineering and site crews',
      description:
        'Heavy-duty cotton twill coveralls, utility work jackets, cargo trousers, dust coats, and high-visibility vests tailored to your site requirements.',
      brandingMethodNote:
        'Sewn twill chest patches and durable woven labels above utility pockets, keeping reflective tape and seam stress points unobstructed.',
      highlights: [
        'Heavyweight cotton twill & reinforced bar-tacks',
        'High-visibility reflective tape options',
        'Sewn twill chest patches & utility pocket layouts',
      ],
      href: '/products?category=industrial',
      image: '/images/editorial/industrial-coverall.webp',
      imageAlt: 'Deep-navy heavy cotton twill one-piece work coverall with a stitched Q emblem inside the chest patch',
      imageCaption: 'Heavy cotton twill one-piece coverall with sewn rectangular chest patch.',
      detailImage: '/images/editorial/industrial-seam-detail.webp',
      detailImageAlt: 'Macro construction detail of heavy navy workwear twill, twin-needle felled seams, red bar-tack stitching and brass zipper',
      detailImageCaption: 'Unbranded macro construction detail showing twin-needle seams, red bar-tacks, and brass hardware.',
    },
    {
      id: 'branded',
      categorySlug: 'branded',
      title: 'Branded Apparel & Teams',
      subtitle: 'Polos, T-shirts, caps & gilets',
      tagline: 'Everyday team identity and events',
      description:
        'Honeycomb piqué polos, combed cotton crew-neck T-shirts, structured six-panel twill caps, and gilets customized with your organization’s colors and mark.',
      brandingMethodNote:
        'Left-chest embroidery on piqué polos and matte screen print or heat transfer on flat cotton T-shirts, avoiding center cap seams.',
      highlights: [
        'Breathable piqué & heavyweight cotton jersey',
        'Left-chest polo embroidery & flat jersey screen print',
        'Contrast collar tipping & custom colorways',
      ],
      href: '/products?category=branded',
      image: '/images/editorial/branded-polo-fit.webp',
      imageAlt: 'Charcoal honeycomb piqué polo shirt with symbol-only off-white Q embroidery on the left chest',
      imageCaption: 'Charcoal honeycomb piqué polo with restrained left-chest embroidery.',
      detailImage: '/images/editorial/branded-cap-tee-detail.webp',
      detailImageAlt: 'Folded off-white cotton crewneck T-shirt with matte red screen-printed Q mark beside a clean structured six-panel navy cap',
      detailImageCaption: 'Matte screen print on folded cotton jersey beside a clean six-panel twill cap.',
    },
  ],
  fr: [
    {
      id: 'corporate',
      categorySlug: 'corporate',
      title: 'Costumes & Tenues de Bureau',
      subtitle: 'Blazers, chemises & pièces coordonnées',
      tagline: 'Accueil, direction et équipes de bureau',
      description:
        'Blazers structurés, chemises de bureau à manches longues ou courtes, et pantalons ou jupes coordonnés pour la réception, la direction et les équipes en contact avec la clientèle.',
      brandingMethodNote:
        'Extérieur sobre sans logo forcé sur le revers, avec étiquette tissée au col intérieur ou broderie discrète au poignet de chemise.',
      highlights: [
        'Blazers structurés et chemises respirantes',
        'Étiquette intérieure tissée ou broderie discrète au poignet',
        'Pantalons, jupes et gilets coordonnés',
      ],
      href: '/fr/products?category=corporate',
      image: '/images/showcase/cat-corporate-suiting.webp',
      imageAlt: 'Blazer bleu marine structuré, chemise bleu clair repassée et pantalon habillé anthracite sur bustes d’atelier',
      imageCaption: 'Ensemble blazer et chemise à l’extérieur épuré — sans logo forcé sur le revers.',
      detailImage: '/images/editorial/corporate-tailoring-detail.webp',
      detailImageAlt: 'Gros plan sur une manche de blazer anthracite et un poignet de chemise bleu clair avec emblème Q brodé discret',
      detailImageCaption: 'Broderie monogramme discrète en option sur le poignet et étiquette tissée intérieure.',
    },
    {
      id: 'hospitality',
      categorySlug: 'hospitality',
      title: 'Hôtellerie & Restauration',
      subtitle: 'Vestes de chef, tabliers & service',
      tagline: 'Cuisines, cafés et hôtels',
      description:
        'Vestes de chef croisées, tabliers à bavette et de taille en toile de coton épaisse, et tenues de service coordonnées conçues pour le travail quotidien en cuisine et en salle.',
      brandingMethodNote:
        'Broderie directe sur la poitrine des vestes de cuisine ou symbole brodé et étiquette tissée sur la poche des tabliers en toile épaisse.',
      highlights: [
        'Sergé de coton résistant et toile épaisse',
        'Coutures de poche renforcées et rivets en laiton',
        'Broderie sur poche de tablier et étiquettes tissées',
      ],
      href: '/fr/products?category=hospitality',
      image: '/images/showcase/cat-hospitality-culinary.webp',
      imageAlt: 'Veste de chef croisée ivoire en sergé de coton à côté d’un tablier à bavette en toile olive avec symbole Q brodé sur la poche',
      imageCaption: 'Veste de chef croisée ivoire associée à un tablier à bavette en toile olive.',
      detailImage: '/images/editorial/hospitality-apron-detail.webp',
      detailImageAlt: 'Détail macro d’une poche de tablier en toile olive avec rivets d’angle en laiton et symbole Q blanc cassé brodé',
      detailImageCaption: 'Rivets en laiton aux angles de poche et broderie du symbole seul sur toile épaisse.',
    },
    {
      id: 'industrial',
      categorySlug: 'industrial',
      title: 'Industrie & Atelier',
      subtitle: 'Combinaisons, vestes & gilets haute visibilité',
      tagline: 'Ateliers, ingénierie et équipes de chantier',
      description:
        'Combinaisons intégrales en sergé de coton épais, vestes de travail utilitaires, pantalons cargo, blouses et gilets haute visibilité adaptés aux exigences de votre site.',
      brandingMethodNote:
        'Écussons tissés cousus sur la poitrine au-dessus des poches utilitaires, laissant les bandes réfléchissantes et coutures de tension libres.',
      highlights: [
        'Sergé de coton épais et points d’arrêt renforcés',
        'Options de bandes réfléchissantes haute visibilité',
        'Écussons poitrine cousus et poches utilitaires à rabat',
      ],
      href: '/fr/products?category=industrial',
      image: '/images/editorial/industrial-coverall.webp',
      imageAlt: 'Combinaison de travail une pièce en sergé de coton bleu marine avec écusson poitrine cousu portant le symbole Q',
      imageCaption: 'Combinaison une pièce en sergé de coton épais avec écusson rectangulaire cousu.',
      detailImage: '/images/editorial/industrial-seam-detail.webp',
      detailImageAlt: 'Détail macro de construction montrant le sergé bleu marine, les coutures rabattues double aiguille, les points d’arrêt rouges et la fermeture en laiton',
      detailImageCaption: 'Détail macro de construction sans logo : coutures double aiguille, points d’arrêt rouges et zip laiton.',
    },
    {
      id: 'branded',
      categorySlug: 'branded',
      title: 'Tenues Personnalisées & Équipes',
      subtitle: 'Polos, t-shirts, casquettes & gilets',
      tagline: 'Identité d’équipe au quotidien et événements',
      description:
        'Polos en piqué nid d’abeille, t-shirts à col rond en coton peigné, casquettes structurées à six panneaux et gilets personnalisés aux couleurs et au logo de votre organisation.',
      brandingMethodNote:
        'Broderie côté cœur sur les polos en piqué et sérigraphie mate ou transfert sur les t-shirts en coton plat, en évitant la couture centrale des casquettes.',
      highlights: [
        'Maille piquée respirante et jersey de coton épais',
        'Broderie poitrine sur polo et sérigraphie sur jersey plat',
        'Liseré de col contrasté et coloris sur mesure',
      ],
      href: '/fr/products?category=branded',
      image: '/images/editorial/branded-polo-fit.webp',
      imageAlt: 'Polo en maille piquée anthracite avec symbole Q blanc cassé brodé sur la poitrine gauche',
      imageCaption: 'Polo en maille piquée anthracite avec broderie discrète côté cœur.',
      detailImage: '/images/editorial/branded-cap-tee-detail.webp',
      detailImageAlt: 'T-shirt col rond en coton blanc cassé plié avec symbole Q rouge sérigraphié à côté d’une casquette bleu marine à six panneaux sans logo',
      detailImageCaption: 'Sérigraphie mate sur jersey de coton plié à côté d’une casquette six panneaux épurée.',
    },
  ],
};

export const garmentItems: GarmentItem[] = garmentItemsByLocale.en;

export function getGarmentsForLocale(locale: Locale = 'en'): GarmentItem[] {
  return garmentItemsByLocale[locale] || garmentItemsByLocale.en;
}

export function getGarmentById(id: GarmentId, locale: Locale = 'en'): GarmentItem {
  const list = getGarmentsForLocale(locale);
  return list.find((item) => item.id === id) || list[0];
}

