import type { CategorySlug } from '@/types';

export type Locale = 'en' | 'fr';

export const LOCALES: readonly Locale[] = ['en', 'fr'] as const;
export const DEFAULT_LOCALE: Locale = 'en';

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return 'en';
  const normalized = pathname.replace(/\/$/, '') || '/';
  return normalized === '/fr' || normalized.startsWith('/fr/') ? 'fr' : 'en';
}

export function stripLocalePrefix(pathname: string | null | undefined): string {
  if (!pathname) return '/';
  const normalized = pathname.replace(/\/$/, '') || '/';
  if (normalized === '/fr') return '/';
  if (normalized.startsWith('/fr/')) {
    return normalized.slice(3) || '/';
  }
  return normalized;
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
    return href;
  }
  const [pathAndQuery, hash = ''] = href.split('#');
  const [rawPath, query = ''] = pathAndQuery.split('?');
  const basePath = stripLocalePrefix(rawPath || '/');
  const localizedPath =
    locale === 'fr'
      ? basePath === '/'
        ? '/fr'
        : `/fr${basePath}`
      : basePath;

  const withQuery = query ? `${localizedPath}?${query}` : localizedPath;
  return hash ? `${withQuery}#${hash}` : withQuery;
}

export interface HeroSlideContent {
  id: CategorySlug;
  countLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface LookbookCardContent {
  id: string;
  sectorTag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  aspect: 'portrait' | 'landscape';
  categoryLink: string;
  enquiryProduct: string;
}

export interface UIStrings {
  locale: Locale;
  htmlLang: 'en' | 'fr';
  ogLocale: 'en_RW' | 'fr_RW';
  skipToContent: string;
  brandTagline: string;
  nav: {
    mainAriaLabel: string;
    mobileAriaLabel: string;
    mobileDialogAriaLabel: string;
    openMenuAriaLabel: string;
    closeMenuAriaLabel: string;
    collections: string;
    collectionsAriaLabel: string;
    allCollections: string;
    lookbook: string;
    about: string;
    contact: string;
    requestQuote: string;
    languageSwitcherAriaLabel: string;
    switchToEnglishAriaLabel: string;
    switchToFrenchAriaLabel: string;
  };
  footer: {
    ariaLabel: string;
    tagline: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    lead: string;
    slideshowAriaLabel: string;
    secondaryCta: string;
    chooseVisualAriaLabel: string;
    prevAriaLabel: string;
    nextAriaLabel: string;
    slideAriaLabel: (index: number, title: string) => string;
    pauseLabel: string;
    playLabel: string;
    pauseAriaLabel: string;
    playAriaLabel: string;
    directLinksAriaLabel: string;
    disclosureNote: string;
    slides: HeroSlideContent[];
  };
  garmentExplorer: {
    eyebrow: string;
    title: string;
    lead: string;
    tablistAriaLabel: string;
    viewToggleAriaLabel: string;
    primaryViewLabel: string;
    detailViewLabel: string;
    brandingMethodPrefix: string;
    highlightsAriaLabel: string;
    exploreCollectionCta: string;
    requestStyleCta: string;
  };
  valuePillars: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    lead: string;
    cta: string;
  };
  process: {
    titleLine1: string;
    titleLine2: string;
    steps: Array<{ title: string; copy: string }>;
  };
  ctaSection: {
    title: string;
    button: string;
  };
  productsPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    disclosureNote: string;
    loadingStatus: string;
    filterAriaLabel: string;
    allFilterLabel: string;
    collectionsShownStatus: (count: number) => string;
    enquireProductAriaLabel: (productTitle: string) => string;
  };
  workPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    disclosureNote: string;
    viewCollectionCta: string;
    enquireCta: string;
    calloutTitle: string;
    calloutBody: string;
    calloutCta: string;
    items: LookbookCardContent[];
  };
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    introduction: string;
    needsHeading: string;
    needsBody: string;
    planHeading: string;
    planBody: string;
    leadershipNote: string;
    imageAlt: string;
    imageCaption: string;
    principlesTitle: string;
    principlesLead: string;
    principles: Array<{ title: string; desc: string }>;
    ctaLabel: string;
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    sectionAriaLabel: string;
    summaryTitle: string;
    summaryLead: string;
    locationLabel: string;
    whatsappLabel: string;
    loadingFormStatus: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      garmentLabel: string;
      quantityLabel: string;
      optionalLabel: string;
      detailsLabel: string;
      detailsPlaceholder: string;
      submitButton: string;
      submitNote: string;
      draftPreparedStatus: string;
      openDraftAgain: string;
      copyEnquiry: string;
      copiedSuccess: string;
      copyFallbackError: string;
      copyTextareaAriaLabel: string;
      emailSubjectPrefix: string;
      emailGreeting: string;
      emailIntro: string;
      emailNameField: string;
      emailReplyField: string;
      emailGarmentField: string;
      emailQuantityField: string;
      emailQuantityDefault: string;
    };
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  notFound: {
    title: string;
    lead: string;
    cta: string;
  };
}

export const uiStrings: Record<Locale, UIStrings> = {
  en: {
    locale: 'en',
    htmlLang: 'en',
    ogLocale: 'en_RW',
    skipToContent: 'Skip to content',
    brandTagline: 'Custom workwear, tailored in Kigali',
    nav: {
      mainAriaLabel: 'Main navigation',
      mobileAriaLabel: 'Mobile navigation',
      mobileDialogAriaLabel: 'Navigation',
      openMenuAriaLabel: 'Open navigation',
      closeMenuAriaLabel: 'Close navigation',
      collections: 'Collections',
      collectionsAriaLabel: 'Workwear collections',
      allCollections: 'All collections →',
      lookbook: 'Lookbook',
      about: 'About',
      contact: 'Contact',
      requestQuote: 'Request a quote',
      languageSwitcherAriaLabel: 'Language selector',
      switchToEnglishAriaLabel: 'English (current language)',
      switchToFrenchAriaLabel: 'Passer le site en français',
    },
    footer: {
      ariaLabel: 'Footer navigation',
      tagline: 'Custom workwear. Kigali, Rwanda.',
    },
    hero: {
      headlineLine1: 'Workwear, made',
      headlineLine2: 'for your team.',
      lead: 'Uniforms designed around your team, your work and your identity. Made to order in Kigali.',
      slideshowAriaLabel: 'Uniform collections',
      secondaryCta: 'Discuss an order',
      chooseVisualAriaLabel: 'Choose a collection slide',
      prevAriaLabel: 'Previous collection',
      nextAriaLabel: 'Next collection',
      slideAriaLabel: (index, title) => `Slide ${String(index + 1).padStart(2, '0')}: ${title}`,
      pauseLabel: 'Pause',
      playLabel: 'Play',
      pauseAriaLabel: 'Pause automatic slide changes',
      playAriaLabel: 'Play automatic slide changes',
      directLinksAriaLabel: 'Direct collection links',
      disclosureNote: 'Illustrative uniform concepts shown for style and branding discussion. Final specifications are agreed for each order.',
      slides: [
        {
          id: 'corporate',
          countLabel: '01 / 04',
          title: 'Corporate uniforms',
          description: 'Tailored officewear, shirts and front-of-house uniforms.',
          ctaLabel: 'Explore corporate',
          href: '/products?category=corporate',
          image: '/images/showcase/cat-corporate-suiting.webp',
          imageAlt: 'Structured deep-navy blazer, pressed light-blue dress shirt, and charcoal formal trousers on studio hangers with clean unbranded exterior',
        },
        {
          id: 'hospitality',
          countLabel: '02 / 04',
          title: 'Hospitality uniforms',
          description: 'Chef jackets, aprons and servicewear for your team.',
          ctaLabel: 'Explore hospitality',
          href: '/products?category=hospitality',
          image: '/images/showcase/cat-hospitality-culinary.webp',
          imageAlt: 'Ivory double-breasted chef jacket beside an olive canvas bib apron with woven straps and a compact embroidered Q emblem on the pocket',
        },
        {
          id: 'industrial',
          countLabel: '03 / 04',
          title: 'Industrial workwear',
          description: 'Practical work jackets, overalls and visibility-focused options.',
          ctaLabel: 'Explore industrial',
          href: '/products?category=industrial',
          image: '/images/showcase/cat-industrial-safety.webp',
          imageAlt: 'Deep-navy work jacket with sewn chest patch, matching work trousers, and yellow high-visibility vest on a studio rail',
        },
        {
          id: 'branded',
          countLabel: '04 / 04',
          title: 'Branded apparel',
          description: 'Polos, T-shirts and caps personalized for your organisation.',
          ctaLabel: 'Explore branded apparel',
          href: '/products?category=branded',
          image: '/images/showcase/cat-branded-apparel.webp',
          imageAlt: 'Navy piqué polo with red collar tipping and chest embroidery beside a folded off-white printed T-shirt and clean six-panel navy cap',
        },
      ],
    },
    garmentExplorer: {
      eyebrow: 'Uniform styles & branding methods',
      title: 'Explore uniform styles.',
      lead: 'Choose a category to see an example garment, compare branding methods, and discuss your team’s requirements.',
      tablistAriaLabel: 'Workwear category selector',
      viewToggleAriaLabel: 'Choose example view',
      primaryViewLabel: 'Garment example',
      detailViewLabel: 'Construction & branding detail',
      brandingMethodPrefix: 'Shown treatment:',
      highlightsAriaLabel: 'Category options to discuss',
      exploreCollectionCta: 'Explore collection',
      requestStyleCta: 'Request this style',
    },
    valuePillars: {
      titleLine1: 'Your people.',
      titleLine2: 'Your colours.',
      titleLine3: 'A considered fit.',
      lead: 'From the office to the workshop, workwear should suit the role. Start with your team, your working environment and the way you want your organisation presented.',
      cta: 'About Q Workwear',
    },
    process: {
      titleLine1: 'From first idea',
      titleLine2: 'to team uniform.',
      steps: [
        {
          title: 'Tell us what you need',
          copy: 'Share your garment ideas, approximate team size and target timeframe.',
        },
        {
          title: 'Work through the details',
          copy: 'Discuss colours, garment cuts, fabric options and appropriate branding placement.',
        },
        {
          title: 'Review your quotation',
          copy: 'Confirm the agreed garment specification, branding method and quotation before production.',
        },
      ],
    },
    ctaSection: {
      title: 'Let’s dress your team.',
      button: 'Request a quote',
    },
    productsPage: {
      metaTitle: 'Collections',
      metaDescription: 'Explore corporate, hospitality, industrial and branded uniform options with Q Workwear in Kigali.',
      title: 'The collections.',
      lead: 'Find your team’s starting point. Select a garment style to prepare an enquiry.',
      disclosureNote: 'Illustrative uniform concepts. Final garment design, fabric and branding are agreed for each order.',
      loadingStatus: 'Loading collections…',
      filterAriaLabel: 'Filter collections',
      allFilterLabel: 'All',
      collectionsShownStatus: (count) => `${count} collections shown`,
      enquireProductAriaLabel: (productTitle) => `Enquire about ${productTitle}`,
    },
    workPage: {
      metaTitle: 'Lookbook',
      metaDescription: 'Explore illustrative corporate, hospitality, industrial and branded uniform concepts from Q Workwear in Kigali.',
      eyebrow: 'Lookbook',
      title: 'Workwear in focus.',
      lead: 'Browse illustrative garment concepts, construction details and branding methods across corporate, hospitality, industrial and team apparel.',
      disclosureNote: 'Illustrative uniform concepts, not photographs of completed customer orders. Final design and specifications are agreed for each order.',
      viewCollectionCta: 'View collection',
      enquireCta: 'Enquire',
      calloutTitle: 'Need a uniform style not shown here?',
      calloutBody: 'Q Workwear makes uniforms for offices, hospitality venues, workshops, schools, clinics and other teams in Kigali. Share your colours, role requirements or reference garments to start a conversation.',
      calloutCta: 'Discuss your order',
      items: [
        {
          id: 'corp-suiting',
          sectorTag: 'Corporate',
          title: 'Executive Blazers & Office Shirts',
          description: 'Structured navy blazer, pressed button-down shirt and coordinated formal trousers with a clean, unbranded suiting exterior.',
          image: '/images/showcase/cat-corporate-suiting.webp',
          imageAlt: 'Structured deep-navy blazer with clean exterior lapels, light-blue dress shirt, and charcoal formal trousers on studio hangers',
          aspect: 'portrait',
          categoryLink: '/products?category=corporate',
          enquiryProduct: 'Blazers',
        },
        {
          id: 'corp-cuff-fit',
          sectorTag: 'Corporate · Detail',
          title: 'Tailored Shirt Cuff & Monogram Option',
          description: 'Long-sleeved office shirt paired with a charcoal jacket, showing a restrained cuff embroidery placement option.',
          image: '/images/editorial/hero-model-detail.webp',
          imageAlt: 'Close-up of a tailored charcoal suit sleeve and light-blue shirt cuff with a small embroidered red Q symbol',
          aspect: 'landscape',
          categoryLink: '/products?category=corporate',
          enquiryProduct: 'Office shirts',
        },
        {
          id: 'hosp-culinary',
          sectorTag: 'Hospitality',
          title: 'Chef Jackets & Canvas Bib Aprons',
          description: 'Double-breasted chef jacket with a clean exterior alongside an olive bib apron with a compact embroidered pocket mark.',
          image: '/images/showcase/cat-hospitality-culinary.webp',
          imageAlt: 'Ivory double-breasted chef jacket beside an olive canvas bib apron with woven straps and compact pocket embroidery',
          aspect: 'portrait',
          categoryLink: '/products?category=hospitality',
          enquiryProduct: 'Chef jackets',
        },
        {
          id: 'hosp-apron-detail',
          sectorTag: 'Hospitality · Detail',
          title: 'Bib Apron Pocket & Strap Detail',
          description: 'Close-up crop of the bib apron study showing corner rivets, adjustable webbing straps and compact pocket embroidery.',
          image: '/images/editorial/hospitality-apron-detail.webp',
          imageAlt: 'Close-up crop of an olive canvas apron chest pocket with corner rivets and compact white Q symbol embroidery',
          aspect: 'portrait',
          categoryLink: '/products?category=hospitality',
          enquiryProduct: 'Aprons',
        },
        {
          id: 'ind-work-set',
          sectorTag: 'Industrial',
          title: 'Work Jackets, Trousers & High-Vis Vests',
          description: 'Navy twill work jacket with a sewn chest patch, matching work trousers and a high-visibility vest for site and workshop teams.',
          image: '/images/showcase/cat-industrial-safety.webp',
          imageAlt: 'Deep-navy work jacket with sewn rectangular chest patch, utility trousers, and unbranded yellow high-visibility vest',
          aspect: 'portrait',
          categoryLink: '/products?category=industrial',
          enquiryProduct: 'Work trousers',
        },
        {
          id: 'ind-coverall',
          sectorTag: 'Industrial',
          title: 'One-Piece Work Coveralls',
          description: 'Full-length workshop coverall with chest flap pockets and a sewn rectangular patch for team or company identification.',
          image: '/images/editorial/industrial-coverall.webp',
          imageAlt: 'Deep-navy one-piece coverall on a tailor form with a sewn rectangular chest patch above the pocket',
          aspect: 'portrait',
          categoryLink: '/products?category=industrial',
          enquiryProduct: 'Work overalls',
        },
        {
          id: 'ind-seam-detail',
          sectorTag: 'Industrial · Detail',
          title: 'Bar-Tack Reinforcement & Zipper Detail',
          description: 'Unbranded macro construction study showing pocket bar-tack reinforcement, double topstitching and metal zipper teeth.',
          image: '/images/editorial/industrial-seam-detail.webp',
          imageAlt: 'Clean unbranded macro photograph of navy twill workwear seam with double topstitching, bar-tack reinforcement, and metal zipper',
          aspect: 'landscape',
          categoryLink: '/products?category=industrial',
          enquiryProduct: 'Work overalls',
        },
        {
          id: 'brand-collection',
          sectorTag: 'Branded apparel',
          title: 'Polos, Printed Tees & Team Caps',
          description: 'Coordinated team set showing a tipped polo with chest embroidery, a folded T-shirt with soft print, and a clean six-panel cap.',
          image: '/images/showcase/cat-branded-apparel.webp',
          imageAlt: 'Navy piqué polo with chest embroidery beside a folded off-white T-shirt with matte red print and a clean navy cap',
          aspect: 'portrait',
          categoryLink: '/products?category=branded',
          enquiryProduct: 'Polos',
        },
        {
          id: 'brand-polo-fit',
          sectorTag: 'Branded apparel',
          title: 'Embroidered Piqué Polo Fit',
          description: 'Short-sleeved charcoal piqué polo showing compact left-chest emblem embroidery for everyday staff and event wear.',
          image: '/images/editorial/branded-polo-fit.webp',
          imageAlt: 'Charcoal honeycomb piqué polo shirt worn on torso with compact embroidered white Q emblem on the left chest',
          aspect: 'portrait',
          categoryLink: '/products?category=branded',
          enquiryProduct: 'Polos',
        },
        {
          id: 'brand-cap-detail',
          sectorTag: 'Branded apparel · Detail',
          title: 'Printed Cotton Tee & Structured Cap Study',
          description: 'Detail crop contrasting a soft matte textile print on a folded cotton T-shirt with a clean six-panel twill cap.',
          image: '/images/editorial/branded-cap-tee-detail.webp',
          imageAlt: 'Close-up crop of a folded off-white cotton T-shirt with a matte red printed Q mark beside a clean navy six-panel cap',
          aspect: 'landscape',
          categoryLink: '/products?category=branded',
          enquiryProduct: 'T-shirts',
        },
        {
          id: 'atelier-rail',
          sectorTag: 'Cross-sector range',
          title: 'Coordinated Multi-Department Uniforms',
          description: 'Clean studio rail comparing office suiting, kitchen chefwear, workshop jackets and staff polos side by side.',
          image: '/images/editorial/hero-uniform-rail.webp',
          imageAlt: 'Clean unbranded studio garment rack displaying a navy blazer, white chef jacket, navy work jacket, and cream polo shirt',
          aspect: 'landscape',
          categoryLink: '/products',
          enquiryProduct: 'Office shirts',
        },
        {
          id: 'atelier-cuff-label',
          sectorTag: 'Maker label · Detail',
          title: 'Woven Garment Label & Fabric Swatches',
          description: 'Illustrative close-up of a sewn woven maker label on a shirt cuff alongside fabric colour swatches.',
          image: '/images/editorial/atelier-cuff-detail.webp',
          imageAlt: 'Illustrative study of hands holding a navy shirt cuff with a sewn cream woven Q label beside fabric swatches and shears',
          aspect: 'landscape',
          categoryLink: '/products',
          enquiryProduct: 'Office shirts',
        },
      ],
    },
    aboutPage: {
      metaTitle: 'About',
      metaDescription: 'Learn about Q Workwear, a Kigali-based uniform manufacturer serving offices, hospitality, industrial teams and organisations.',
      eyebrow: 'Kigali, Rwanda',
      title: 'Uniforms for the way your team works.',
      introduction: 'Q Workwear is a Kigali-based uniform manufacturer serving offices, hospitality businesses, industrial teams, schools and other organisations. We make uniforms and team apparel to suit different roles, working environments and brand identities.',
      needsHeading: 'Start with your team’s needs',
      needsBody: 'A reception team, a kitchen crew and a workshop need different clothing. Tell us who the uniforms are for, the garments you have in mind and your branding requirements. We can then discuss the options for your order.',
      planHeading: 'Plan your uniform order',
      planBody: 'Share your approximate quantity, preferred colours and target date. Reference photos or an existing uniform can help explain what you need. Contact Q Workwear to discuss the details and request a quotation.',
      leadershipNote: 'Q Workwear is led by Quddus and Tinah in Kigali.',
      imageAlt: 'Clean studio garment rack showing corporate blazer, chef jacket, industrial work jacket and team polo shirt',
      imageCaption: 'Illustrative studio study showing corporate, hospitality, industrial and branded uniform styles.',
      principlesTitle: 'How we work with you.',
      principlesLead: 'A straightforward process focused on practical uniform choices for your organisation.',
      principles: [
        {
          title: 'Clear communication',
          desc: 'Discuss what your team needs and what is feasible for your order.',
        },
        {
          title: 'Practical choices',
          desc: 'Choose garments suited to the roles and daily working environment.',
        },
        {
          title: 'Agreed details',
          desc: 'Clarify the design, branding method and order requirements before proceeding.',
        },
      ],
      ctaLabel: 'Discuss your team’s uniforms',
    },
    contactPage: {
      metaTitle: 'Contact',
      metaDescription: 'Discuss a custom workwear order with Q Workwear in Kigali. Prepare an email enquiry with your garment and team requirements.',
      title: 'Let’s dress your team.',
      lead: 'A few details are all we need to start the conversation.',
      sectionAriaLabel: 'Request a quotation',
      summaryTitle: 'Talk to Q Workwear.',
      summaryLead: 'Share what your team needs, and discuss the garment style, fabric and branding options with us.',
      locationLabel: 'Kigali, Rwanda',
      whatsappLabel: 'Enquire on WhatsApp',
      loadingFormStatus: 'Loading enquiry form…',
      form: {
        nameLabel: 'Your name',
        emailLabel: 'Email',
        garmentLabel: 'Garment',
        quantityLabel: 'Quantity',
        optionalLabel: '(optional)',
        detailsLabel: 'Tell us about your team',
        detailsPlaceholder: 'Colours, branding, preferred date or a design you have in mind.',
        submitButton: 'Open email draft',
        submitNote: 'Review and send the enquiry from your email app.',
        draftPreparedStatus: 'Draft prepared. Send it from your email app.',
        openDraftAgain: 'Open draft again',
        copyEnquiry: 'Copy enquiry',
        copiedSuccess: 'Enquiry copied. Paste it into your email.',
        copyFallbackError: 'Copy is unavailable. Use the email draft link or select the text below.',
        copyTextareaAriaLabel: 'Enquiry text to copy',
        emailSubjectPrefix: 'Uniform enquiry — ',
        emailGreeting: 'Hello Q Workwear,',
        emailIntro: 'I would like to discuss a uniform order.',
        emailNameField: 'Name',
        emailReplyField: 'Reply email',
        emailGarmentField: 'Garment',
        emailQuantityField: 'Approximate quantity',
        emailQuantityDefault: 'To discuss',
      },
      faqTitle: 'Before you order.',
      faqs: [
        {
          question: 'What should I include in my enquiry?',
          answer: 'Share your organisation name, approximate garment quantity, preferred colours and target date. If you have a logo file or reference uniform photos, mention them in your message.',
        },
        {
          question: 'Can we request uniform styles or sectors not listed here?',
          answer: 'Yes. Alongside corporate, hospitality, industrial and branded team wear, you can contact us to discuss requirements for schools, clinics, security or other workplace roles. Specify any site-specific requirements when requesting a quote.',
        },
        {
          question: 'How are pricing and timelines arranged?',
          answer: 'Pricing and schedules depend on garment style, fabric choice, branding method (such as embroidery, print or sewn patches) and order quantity. We review your requirements and prepare an order-specific quotation.',
        },
        {
          question: 'Can we discuss fabric options, sizing and sample requirements?',
          answer: 'Yes. Let us know your sizing range, preferred fabric weight and whether you would like to discuss fabric options or sample requirements before confirming an order.',
        },
      ],
    },
    notFound: {
      title: 'Page not found.',
      lead: 'This page may have moved. Explore the collections or return home.',
      cta: 'Explore collections',
    },
  },
  fr: {
    locale: 'fr',
    htmlLang: 'fr',
    ogLocale: 'fr_RW',
    skipToContent: 'Aller au contenu principal',
    brandTagline: 'Vêtements professionnels sur commande à Kigali',
    nav: {
      mainAriaLabel: 'Navigation principale',
      mobileAriaLabel: 'Navigation mobile',
      mobileDialogAriaLabel: 'Navigation',
      openMenuAriaLabel: 'Ouvrir le menu de navigation',
      closeMenuAriaLabel: 'Fermer le menu de navigation',
      collections: 'Collections',
      collectionsAriaLabel: 'Collections de tenues professionnelles',
      allCollections: 'Toutes les collections →',
      lookbook: 'Lookbook',
      about: 'À propos',
      contact: 'Contact',
      requestQuote: 'Demander un devis',
      languageSwitcherAriaLabel: 'Sélecteur de langue',
      switchToEnglishAriaLabel: 'Switch site language to English',
      switchToFrenchAriaLabel: 'Français (langue actuelle)',
    },
    footer: {
      ariaLabel: 'Navigation de pied de page',
      tagline: 'Vêtements professionnels sur mesure. Kigali, Rwanda.',
    },
    hero: {
      headlineLine1: 'Des tenues conçues',
      headlineLine2: 'pour votre équipe.',
      lead: 'Des uniformes pensés autour de votre équipe, de votre métier et de votre identité. Fabriqués sur commande à Kigali.',
      slideshowAriaLabel: 'Collections d’uniformes',
      secondaryCta: 'Discuter d’une commande',
      chooseVisualAriaLabel: 'Choisir une diapositive de collection',
      prevAriaLabel: 'Collection précédente',
      nextAriaLabel: 'Collection suivante',
      slideAriaLabel: (index, title) => `Diapositive ${String(index + 1).padStart(2, '0')} : ${title}`,
      pauseLabel: 'Pause',
      playLabel: 'Lecture',
      pauseAriaLabel: 'Mettre en pause le défilement automatique',
      playAriaLabel: 'Activer le défilement automatique',
      directLinksAriaLabel: 'Accès direct aux collections',
      disclosureNote: 'Concepts d’uniformes présentés à titre d’illustration pour discuter des coupes et du marquage. Les spécifications finales sont convenues pour chaque commande.',
      slides: [
        {
          id: 'corporate',
          countLabel: '01 / 04',
          title: 'Uniformes d’entreprise',
          description: 'Vestes de costume, chemises de bureau et tenues d’accueil.',
          ctaLabel: 'Voir Entreprise',
          href: '/fr/products?category=corporate',
          image: '/images/showcase/cat-corporate-suiting.webp',
          imageAlt: 'Blazer bleu marine structuré sans logo extérieur, chemise bleu clair repassée et pantalon habillé anthracite sur cintres en studio',
        },
        {
          id: 'hospitality',
          countLabel: '02 / 04',
          title: 'Hôtellerie & restauration',
          description: 'Vestes de chef, tabliers et tenues de salle pour votre équipe.',
          ctaLabel: 'Voir Hôtellerie',
          href: '/fr/products?category=hospitality',
          image: '/images/showcase/cat-hospitality-culinary.webp',
          imageAlt: 'Veste de chef croisée ivoire à côté d’un tablier bavette en toile olive avec sangles tissées et discret emblème Q brodé sur la poche',
        },
        {
          id: 'industrial',
          countLabel: '03 / 04',
          title: 'Tenues industrielles',
          description: 'Vestes de travail, combinaisons et gilets haute visibilité.',
          ctaLabel: 'Voir Industrie',
          href: '/fr/products?category=industrial',
          image: '/images/showcase/cat-industrial-safety.webp',
          imageAlt: 'Veste de travail bleu marine avec écusson cousu sur la poitrine, pantalon utilitaire assorti et gilet haute visibilité jaune sur portant',
        },
        {
          id: 'branded',
          countLabel: '04 / 04',
          title: 'Textile personnalisé',
          description: 'Polos, t-shirts et casquettes personnalisés aux couleurs de votre organisation.',
          ctaLabel: 'Voir Textile personnalisé',
          href: '/fr/products?category=branded',
          image: '/images/showcase/cat-branded-apparel.webp',
          imageAlt: 'Polo piqué bleu marine à liseré rouge et broderie poitrine à côté d’un t-shirt écru plié avec marquage imprimé et d’une casquette unie',
        },
      ],
    },
    garmentExplorer: {
      eyebrow: 'Styles d’uniformes & méthodes de marquage',
      title: 'Explorer les styles d’uniformes.',
      lead: 'Choisissez une catégorie pour voir un exemple de tenue, comparer les méthodes de marquage et discuter des besoins de votre équipe.',
      tablistAriaLabel: 'Sélecteur de catégorie de vêtements professionnels',
      viewToggleAriaLabel: 'Choisir la vue de l’exemple',
      primaryViewLabel: 'Exemple de tenue',
      detailViewLabel: 'Détail de confection & marquage',
      brandingMethodPrefix: 'Finition illustrée :',
      highlightsAriaLabel: 'Options à discuter par secteur',
      exploreCollectionCta: 'Voir la collection',
      requestStyleCta: 'Demander ce style',
    },
    valuePillars: {
      titleLine1: 'Votre équipe.',
      titleLine2: 'Vos couleurs.',
      titleLine3: 'Une coupe adaptée.',
      lead: 'Du bureau à l’atelier, une tenue professionnelle doit correspondre au poste occupé. Partez de votre équipe, de votre cadre de travail et de l’image souhaitée pour votre organisation.',
      cta: 'Découvrir Q Workwear',
    },
    process: {
      titleLine1: 'De la première idée',
      titleLine2: 'à la tenue d’équipe.',
      steps: [
        {
          title: 'Présentez votre besoin',
          copy: 'Indiquez les pièces souhaitées, la taille approximative de votre équipe et votre échéance.',
        },
        {
          title: 'Définissez les détails',
          copy: 'Échangez sur les couleurs, les coupes, le choix des tissus et l’emplacement du marquage.',
        },
        {
          title: 'Validez votre devis',
          copy: 'Confirmez les spécifications retenues, la méthode de personnalisation et le devis avant la confection.',
        },
      ],
    },
    ctaSection: {
      title: 'Habillons votre équipe.',
      button: 'Demander un devis',
    },
    productsPage: {
      metaTitle: 'Collections',
      metaDescription: 'Découvrez les options d’uniformes d’entreprise, d’hôtellerie, d’industrie et de textile personnalisé avec Q Workwear à Kigali.',
      title: 'Les collections.',
      lead: 'Trouvez le point de départ de votre équipe. Sélectionnez un article pour préparer une demande de devis.',
      disclosureNote: 'Concepts d’uniformes à titre d’illustration. La coupe, le tissu et le marquage définitifs sont convenus pour chaque commande.',
      loadingStatus: 'Chargement des collections…',
      filterAriaLabel: 'Filtrer les collections',
      allFilterLabel: 'Tout',
      collectionsShownStatus: (count) => `${count} collections affichées`,
      enquireProductAriaLabel: (productTitle) => `Demander un devis pour ${productTitle}`,
    },
    workPage: {
      metaTitle: 'Lookbook',
      metaDescription: 'Découvrez des concepts illustratifs d’uniformes d’entreprise, d’hôtellerie, d’industrie et d’équipe par Q Workwear à Kigali.',
      eyebrow: 'Lookbook',
      title: 'Nos tenues en détail.',
      lead: 'Parcourez des concepts illustratifs de vêtements, des détails de confection et des méthodes de marquage pour le bureau, l’hôtellerie, l’industrie et les équipes.',
      disclosureNote: 'Concepts d’uniformes à titre d’illustration, et non photographies de commandes clients réalisées. Le modèle et les spécifications définitives sont convenus pour chaque commande.',
      viewCollectionCta: 'Voir la collection',
      enquireCta: 'Demander un devis',
      calloutTitle: 'Vous cherchez un modèle qui ne figure pas ici ?',
      calloutBody: 'Q Workwear confectionne des uniformes pour les bureaux, établissements hôteliers, ateliers, écoles, cliniques et autres organisations à Kigali. Partagez vos couleurs, vos besoins métiers ou vos modèles de référence.',
      calloutCta: 'Discuter de votre commande',
      items: [
        {
          id: 'corp-suiting',
          sectorTag: 'Entreprise',
          title: 'Blazers & chemises de bureau',
          description: 'Blazer bleu marine structuré, chemise repassée et pantalon habillé coordonné, présentés sans logo extérieur sur la veste.',
          image: '/images/showcase/cat-corporate-suiting.webp',
          imageAlt: 'Blazer bleu marine structuré sans logo extérieur, chemise bleu clair et pantalon habillé anthracite sur cintres en studio',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=corporate',
          enquiryProduct: 'Blazers',
        },
        {
          id: 'corp-cuff-fit',
          sectorTag: 'Entreprise · Détail',
          title: 'Poignet de chemise & option monogramme',
          description: 'Chemise de bureau à manches longues portée sous une veste anthracite, illustrant une broderie discrète sur le poignet.',
          image: '/images/editorial/hero-model-detail.webp',
          imageAlt: 'Gros plan sur une manche de costume anthracite et un poignet de chemise bleu clair avec un discret symbole Q rouge brodé',
          aspect: 'landscape',
          categoryLink: '/fr/products?category=corporate',
          enquiryProduct: 'Chemises de bureau',
        },
        {
          id: 'hosp-culinary',
          sectorTag: 'Hôtellerie & restauration',
          title: 'Vestes de chef & tabliers bavette',
          description: 'Veste de chef croisée ivoire sans marquage extérieur accompagnée d’un tablier bavette olive avec emblème brodé sur la poche.',
          image: '/images/showcase/cat-hospitality-culinary.webp',
          imageAlt: 'Veste de chef croisée ivoire à côté d’un tablier bavette en toile olive avec sangles tissées et broderie discrète sur la poche',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=hospitality',
          enquiryProduct: 'Vestes de chef',
        },
        {
          id: 'hosp-apron-detail',
          sectorTag: 'Hôtellerie · Détail',
          title: 'Détail de poche de tablier & sangles',
          description: 'Recadrage détaillé du tablier bavette montrant les rivets d’angle, les sangles réglables et la broderie sur la poche.',
          image: '/images/editorial/hospitality-apron-detail.webp',
          imageAlt: 'Gros plan sur la poche poitrine d’un tablier en toile olive avec rivets métalliques et symbole Q blanc brodé',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=hospitality',
          enquiryProduct: 'Tabliers',
        },
        {
          id: 'ind-work-set',
          sectorTag: 'Industrie',
          title: 'Vestes de travail, pantalons & gilets haute visibilité',
          description: 'Veste de travail en sergé marine avec écusson cousu, pantalon assorti et gilet haute visibilité pour équipes de terrain.',
          image: '/images/showcase/cat-industrial-safety.webp',
          imageAlt: 'Veste de travail bleu marine avec écusson rectangulaire cousu, pantalon utilitaire et gilet haute visibilité jaune sans logo',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=industrial',
          enquiryProduct: 'Pantalons de travail',
        },
        {
          id: 'ind-coverall',
          sectorTag: 'Industrie',
          title: 'Combinaisons de travail une pièce',
          description: 'Combinaison d’atelier intégrale avec poches poitrine à rabat et écusson rectangulaire cousu pour l’identification.',
          image: '/images/editorial/industrial-coverall.webp',
          imageAlt: 'Combinaison une pièce bleu marine sur mannequin avec écusson rectangulaire cousu au-dessus de la poche poitrine',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=industrial',
          enquiryProduct: 'Combinaisons de travail',
        },
        {
          id: 'ind-seam-detail',
          sectorTag: 'Industrie · Détail',
          title: 'Points d’arrêt renforcés & fermeture éclair',
          description: 'Étude macroscopique sans logo montrant le point d’arrêt d’une poche, la double surpiqûre et la fermeture métallique.',
          image: '/images/editorial/industrial-seam-detail.webp',
          imageAlt: 'Photographie macroscopique sans logo d’une couture en sergé marine avec double surpiqûre, point d’arrêt et fermeture éclair métallique',
          aspect: 'landscape',
          categoryLink: '/fr/products?category=industrial',
          enquiryProduct: 'Combinaisons de travail',
        },
        {
          id: 'brand-collection',
          sectorTag: 'Textile personnalisé',
          title: 'Polos brodés, t-shirts imprimés & casquettes',
          description: 'Ensemble d’équipe réunissant un polo à col liseré brodé, un t-shirt plié avec marquage imprimé et une casquette unie.',
          image: '/images/showcase/cat-branded-apparel.webp',
          imageAlt: 'Polo piqué bleu marine brodé à côté d’un t-shirt écru plié avec impression mate rouge et d’une casquette six panneaux unie',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=branded',
          enquiryProduct: 'Polos',
        },
        {
          id: 'brand-polo-fit',
          sectorTag: 'Textile personnalisé',
          title: 'Coupe de polo piqué brodé',
          description: 'Polo manches courtes en maille piquée anthracite illustrant une broderie poitrine compacte pour les équipes et événements.',
          image: '/images/editorial/branded-polo-fit.webp',
          imageAlt: 'Polo en maille piquée anthracite porté sur buste avec symbole Q blanc brodé sur la poitrine gauche',
          aspect: 'portrait',
          categoryLink: '/fr/products?category=branded',
          enquiryProduct: 'Polos',
        },
        {
          id: 'brand-cap-detail',
          sectorTag: 'Textile personnalisé · Détail',
          title: 'Impression sur t-shirt en coton & casquette',
          description: 'Recadrage détaillé comparant un marquage imprimé mat sur t-shirt plié avec une casquette six panneaux sans couture traversée.',
          image: '/images/editorial/branded-cap-tee-detail.webp',
          imageAlt: 'Gros plan sur un t-shirt en coton écru plié avec marquage Q rouge imprimé à côté d’une casquette bleu marine unie',
          aspect: 'landscape',
          categoryLink: '/fr/products?category=branded',
          enquiryProduct: 'T-shirts',
        },
        {
          id: 'atelier-rail',
          sectorTag: 'Gamme multi-secteurs',
          title: 'Tenues coordonnées multi-services',
          description: 'Portant de studio sans logo comparant veste de bureau, veste de cuisine, veste d’atelier et polo d’équipe.',
          image: '/images/editorial/hero-uniform-rail.webp',
          imageAlt: 'Portant en studio sans logo présentant un blazer bleu marine, une veste de chef blanche, une veste de travail marine et un polo crème',
          aspect: 'landscape',
          categoryLink: '/fr/products',
          enquiryProduct: 'Chemises de bureau',
        },
        {
          id: 'atelier-cuff-label',
          sectorTag: 'Étiquette tissée · Détail',
          title: 'Étiquette tissée & nuancier de tissus',
          description: 'Gros plan illustratif d’une étiquette de marque tissée cousue sur un poignet de chemise à côté d’échantillons de tissus.',
          image: '/images/editorial/atelier-cuff-detail.webp',
          imageAlt: 'Étude illustrative de mains tenant un poignet de chemise marine avec étiquette tissée crème Q à côté de nuanciers et ciseaux',
          aspect: 'landscape',
          categoryLink: '/fr/products',
          enquiryProduct: 'Chemises de bureau',
        },
      ],
    },
    aboutPage: {
      metaTitle: 'À propos',
      metaDescription: 'Découvrez Q Workwear, fabricant d’uniformes basé à Kigali au service des bureaux, de l’hôtellerie, des équipes industrielles et des organisations.',
      eyebrow: 'Kigali, Rwanda',
      title: 'Des uniformes pensés pour le travail de votre équipe.',
      introduction: 'Q Workwear est un fabricant d’uniformes basé à Kigali au service des bureaux, des établissements hôteliers et de restauration, des équipes industrielles, des écoles et d’autres organisations. Nous confectionnons des uniformes et des tenues d’équipe adaptés aux différents rôles, environnements de travail et identités de marque.',
      needsHeading: 'Partir des besoins de votre équipe',
      needsBody: 'Une équipe d’accueil, une brigade de cuisine et un atelier n’ont pas les mêmes besoins vestimentaires. Indiquez-nous à qui s’adressent les tenues, les pièces envisagées et vos souhaits de personnalisation. Nous pourrons alors étudier ensemble les options adaptées à votre commande.',
      planHeading: 'Préparer votre commande d’uniformes',
      planBody: 'Communiquez vos quantités approximatives, vos couleurs souhaitées et votre échéance. Des photos de référence ou un uniforme existant peuvent également préciser votre besoin. Contactez Q Workwear pour convenir des détails et demander un devis.',
      leadershipNote: 'Q Workwear est dirigé par Quddus et Tinah à Kigali.',
      imageAlt: 'Portant en studio présentant un blazer d’entreprise, une veste de chef, une veste de travail industrielle et un polo d’équipe',
      imageCaption: 'Étude illustrative en studio présentant des styles d’uniformes d’entreprise, d’hôtellerie, d’industrie et d’équipe.',
      principlesTitle: 'Notre façon de travailler avec vous.',
      principlesLead: 'Une démarche simple, centrée sur des choix pratiques pour habiller votre organisation.',
      principles: [
        {
          title: 'Communication claire',
          desc: 'Échanger sur ce dont votre équipe a besoin et sur ce qui est réalisable pour votre commande.',
        },
        {
          title: 'Choix pratiques',
          desc: 'Sélectionner des vêtements adaptés aux fonctions et à l’environnement de travail.',
        },
        {
          title: 'Détails convenus',
          desc: 'Clarifier le modèle, la méthode de marquage et les modalités de commande avant de lancer la confection.',
        },
      ],
      ctaLabel: 'Discuter des uniformes de votre équipe',
    },
    contactPage: {
      metaTitle: 'Contact',
      metaDescription: 'Discutez d’une commande de vêtements professionnels avec Q Workwear à Kigali. Préparez une demande par e-mail avec vos besoins.',
      title: 'Habillons votre équipe.',
      lead: 'Quelques informations suffisent pour engager la discussion.',
      sectionAriaLabel: 'Demander un devis',
      summaryTitle: 'Parler à Q Workwear.',
      summaryLead: 'Indiquez-nous les besoins de votre équipe et discutons ensemble de la coupe, du tissu et des finitions.',
      locationLabel: 'Kigali, Rwanda',
      whatsappLabel: 'Écrire sur WhatsApp',
      loadingFormStatus: 'Chargement du formulaire…',
      form: {
        nameLabel: 'Votre nom',
        emailLabel: 'E-mail',
        garmentLabel: 'Tenue ou article',
        quantityLabel: 'Quantité',
        optionalLabel: '(facultatif)',
        detailsLabel: 'Parlez-nous de votre équipe',
        detailsPlaceholder: 'Couleurs, personnalisation, date souhaitée ou modèle envisagé.',
        submitButton: 'Ouvrir le brouillon d’e-mail',
        submitNote: 'Vérifiez et envoyez votre demande depuis votre application de messagerie.',
        draftPreparedStatus: 'Brouillon préparé. Envoyez-le depuis votre application de messagerie.',
        openDraftAgain: 'Ouvrir à nouveau le brouillon',
        copyEnquiry: 'Copier la demande',
        copiedSuccess: 'Demande copiée. Collez-la dans votre e-mail.',
        copyFallbackError: 'La copie automatique n’est pas disponible. Utilisez le lien ci-dessus ou sélectionnez le texte ci-dessous.',
        copyTextareaAriaLabel: 'Texte de la demande à copier',
        emailSubjectPrefix: 'Demande de devis uniforme — ',
        emailGreeting: 'Bonjour Q Workwear,',
        emailIntro: 'Je souhaite discuter d’une commande d’uniformes.',
        emailNameField: 'Nom',
        emailReplyField: 'E-mail de réponse',
        emailGarmentField: 'Tenue / article',
        emailQuantityField: 'Quantité approximative',
        emailQuantityDefault: 'À discuter',
      },
      faqTitle: 'Avant de commander.',
      faqs: [
        {
          question: 'Que dois-je indiquer dans ma demande ?',
          answer: 'Précisez le nom de votre organisation, la quantité approximative souhaitée, vos couleurs de préférence et votre échéance. Si vous disposez d’un fichier logo ou de photos de référence, mentionnez-les dans votre message.',
        },
        {
          question: 'Pouvons-nous demander des modèles ou secteurs non présentés ici ?',
          answer: 'Oui. En plus des tenues de bureau, d’hôtellerie, d’industrie et d’équipe, vous pouvez nous contacter pour discuter de besoins destinés aux écoles, cliniques, équipes de sécurité ou autres métiers. Précisez toute exigence particulière lors de votre demande.',
        },
        {
          question: 'Comment les tarifs et les délais sont-ils définis ?',
          answer: 'Le tarif et le délai dépendent du modèle choisi, du tissu, de la méthode de personnalisation (broderie, impression ou écusson cousu) et de la quantité commandée. Nous étudions votre besoin afin de préparer un devis adapté.',
        },
        {
          question: 'Pouvons-nous discuter des options de tissus, des tailles et des échantillons ?',
          answer: 'Oui. Indiquez-nous votre grille de tailles, le type de tissu recherché et si vous souhaitez discuter d’options de matières ou d’échantillons avant de confirmer votre commande.',
        },
      ],
    },
    notFound: {
      title: 'Page introuvable.',
      lead: 'Cette page a peut-être été déplacée. Explorez nos collections ou revenez à l’accueil.',
      cta: 'Voir les collections',
    },
  },
};

export function getUIStrings(locale: Locale = 'en'): UIStrings {
  return uiStrings[locale] || uiStrings.en;
}

function resolveCategorySlugFromLink(categoryLink: string): CategorySlug | 'all' {
  if (categoryLink.includes('category=corporate')) return 'corporate';
  if (categoryLink.includes('category=hospitality')) return 'hospitality';
  if (categoryLink.includes('category=industrial')) return 'industrial';
  if (categoryLink.includes('category=branded')) return 'branded';
  return 'all';
}

export function getSiteCopy(locale: Locale = 'en') {
  const s = getUIStrings(locale);
  const isFr = locale === 'fr';
  return {
    locale: s.locale,
    htmlLang: s.htmlLang,
    ogLocale: s.ogLocale,
    meta: {
      homeTitle: isFr
        ? 'Q Workwear | Uniformes et vêtements professionnels sur commande à Kigali'
        : 'Q Workwear | Custom Uniforms & Team Apparel in Kigali',
      siteDescription: isFr
        ? 'Uniformes d’entreprise, tenues d’hôtellerie, vêtements de travail industriels et textile personnalisé fabriqués sur commande à Kigali, Rwanda.'
        : 'Corporate uniforms, hospitality wear, industrial workwear and branded team apparel made to order in Kigali, Rwanda.',
      productsTitle: s.productsPage.metaTitle,
      productsDescription: s.productsPage.metaDescription,
      workTitle: s.workPage.metaTitle,
      workDescription: s.workPage.metaDescription,
      aboutTitle: s.aboutPage.metaTitle,
      aboutDescription: s.aboutPage.metaDescription,
      contactTitle: s.contactPage.metaTitle,
      contactDescription: s.contactPage.metaDescription,
    },
    nav: {
      skipToContent: s.skipToContent,
      homeAria: isFr ? 'Q Workwear — Accueil' : 'Q Workwear — Home',
      mainNavAria: s.nav.mainAriaLabel,
      mobileNavAria: s.nav.mobileAriaLabel,
      openNavigation: s.nav.openMenuAriaLabel,
      closeNavigation: s.nav.closeMenuAriaLabel,
      collections: s.nav.collections,
      collectionsDropdownAria: s.nav.collectionsAriaLabel,
      allCollections: s.nav.allCollections.replace(/\s*→$/, ''),
      lookbook: s.nav.lookbook,
      about: s.nav.about,
      contact: s.nav.contact,
      requestQuote: s.nav.requestQuote,
      languageSwitcherAria: s.nav.languageSwitcherAriaLabel,
      switchToEnglishAria: s.nav.switchToEnglishAriaLabel,
      switchToFrenchAria: s.nav.switchToFrenchAriaLabel,
      footerNavAria: s.footer.ariaLabel,
    },
    footer: {
      tagline: s.footer.tagline,
    },
    hero: {
      headlineLine1: s.hero.headlineLine1,
      headlineLine2: s.hero.headlineLine2,
      lead: s.hero.lead,
      slideshowAriaRoleDescription: isFr ? 'carrousel' : 'carousel',
      slideshowAriaLabel: s.hero.slideshowAriaLabel,
      discussOrderCta: s.hero.secondaryCta,
      chooseVisualAria: s.hero.chooseVisualAriaLabel,
      prevAria: s.hero.prevAriaLabel,
      nextAria: s.hero.nextAriaLabel,
      slideButtonAriaPrefix: isFr ? 'Diapositive' : 'Slide',
      pauseLabel: s.hero.pauseLabel,
      playLabel: s.hero.playLabel,
      directLinksAria: s.hero.directLinksAriaLabel,
      illustrativeNote: s.hero.disclosureNote,
      slides: s.hero.slides.map((slide, idx) => ({
        slug: slide.id,
        number: String(idx + 1).padStart(2, '0'),
        title: slide.title,
        description: slide.description,
        ctaLabel: slide.ctaLabel,
        image: slide.image,
        imageAlt: slide.imageAlt,
      })),
    },
    explorer: {
      eyebrow: s.garmentExplorer.eyebrow,
      title: s.garmentExplorer.title,
      lead: s.garmentExplorer.lead,
      tablistAria: s.garmentExplorer.tablistAriaLabel,
      brandingMethodLabel: s.garmentExplorer.brandingMethodPrefix.replace(/:$/, ''),
      highlightsAria: s.garmentExplorer.highlightsAriaLabel,
      exploreCollectionCta: s.garmentExplorer.exploreCollectionCta,
      requestStyleCta: s.garmentExplorer.requestStyleCta,
      viewToggleGarment: s.garmentExplorer.primaryViewLabel,
      viewToggleDetail: s.garmentExplorer.detailViewLabel,
    },
    valuePillars: s.valuePillars,
    process: s.process,
    ctaSection: s.ctaSection,
    productsPage: {
      title: s.productsPage.title,
      lead: s.productsPage.lead,
      disclosureNote: s.productsPage.disclosureNote,
      loading: s.productsPage.loadingStatus,
      allFilter: s.productsPage.allFilterLabel,
      filterAria: s.productsPage.filterAriaLabel,
      collectionsShownSuffix: isFr ? 'collections affichées' : 'collections shown',
      garmentStylesAltSuffix: isFr
        ? 'styles de vêtements professionnels'
        : 'workwear garment styles',
      enquireAboutPrefix: isFr ? 'Demander un devis pour' : 'Enquire about',
    },
    lookbookPage: {
      eyebrow: s.workPage.eyebrow,
      title: s.workPage.title,
      lead: s.workPage.lead,
      disclosure: s.workPage.disclosureNote,
      viewCollectionCta: s.workPage.viewCollectionCta,
      enquireCta: s.workPage.enquireCta,
      calloutTitle: s.workPage.calloutTitle,
      calloutBody: s.workPage.calloutBody,
      calloutCta: s.workPage.calloutCta,
      items: s.workPage.items.map((item) => ({
        ...item,
        categorySlug: resolveCategorySlugFromLink(item.categoryLink),
      })),
    },
    aboutPage: {
      eyebrow: s.aboutPage.eyebrow,
      title: s.aboutPage.title,
      lead: s.aboutPage.introduction,
      needsHeading: s.aboutPage.needsHeading,
      needsBody: s.aboutPage.needsBody,
      planHeading: s.aboutPage.planHeading,
      planBody: s.aboutPage.planBody,
      leadershipNote: s.aboutPage.leadershipNote,
      foundersHeading: s.aboutPage.needsHeading,
      introParagraphs: [
        s.aboutPage.needsBody,
        s.aboutPage.planBody,
        s.aboutPage.leadershipNote,
      ],
      imageAlt: s.aboutPage.imageAlt,
      imageCaption: s.aboutPage.imageCaption,
      valuesTitle: s.aboutPage.principlesTitle,
      valuesLead: s.aboutPage.principlesLead,
      values: s.aboutPage.principles,
      ctaLabel: s.aboutPage.ctaLabel,
    },
    contactPage: {
      title: s.contactPage.title,
      lead: s.contactPage.lead,
      sectionAria: s.contactPage.sectionAriaLabel,
      summaryTitle: s.contactPage.summaryTitle,
      summaryLead: s.contactPage.summaryLead,
      location: s.contactPage.locationLabel,
      whatsappLabel: s.contactPage.whatsappLabel,
      loadingForm: s.contactPage.loadingFormStatus,
      faqTitle: s.contactPage.faqTitle,
      faqs: s.contactPage.faqs,
      form: {
        nameLabel: s.contactPage.form.nameLabel,
        emailLabel: s.contactPage.form.emailLabel,
        garmentLabel: s.contactPage.form.garmentLabel,
        quantityLabel: s.contactPage.form.quantityLabel,
        optionalSuffix: s.contactPage.form.optionalLabel,
        detailsLabel: s.contactPage.form.detailsLabel,
        detailsPlaceholder: s.contactPage.form.detailsPlaceholder,
        submitButton: s.contactPage.form.submitButton,
        submitNote: s.contactPage.form.submitNote,
        draftPreparedStatus: s.contactPage.form.draftPreparedStatus,
        openDraftAgain: s.contactPage.form.openDraftAgain,
        copyEnquiry: s.contactPage.form.copyEnquiry,
        copiedStatus: s.contactPage.form.copiedSuccess,
        copyUnavailableStatus: s.contactPage.form.copyFallbackError,
        copyTextareaAria: s.contactPage.form.copyTextareaAriaLabel,
        emailSubjectPrefix: s.contactPage.form.emailSubjectPrefix.replace(/\s*—\s*$/, ''),
        emailGreeting: s.contactPage.form.emailGreeting,
        emailIntro: s.contactPage.form.emailIntro,
        emailNameLine: s.contactPage.form.emailNameField,
        emailReplyLine: s.contactPage.form.emailReplyField,
        emailGarmentLine: s.contactPage.form.emailGarmentField,
        emailQuantityLine: s.contactPage.form.emailQuantityField,
        quantityToDiscuss: s.contactPage.form.emailQuantityDefault,
      },
    },
    notFound: s.notFound,
  };
}

