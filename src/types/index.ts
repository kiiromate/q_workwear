export type CategorySlug = 'corporate' | 'hospitality' | 'industrial' | 'branded';

export interface ProductCategory {
  id: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  iconName: 'Building2' | 'UtensilsCrossed' | 'HardHat' | 'Sparkles';
  badgeText: string;
  garmentCountEstimate: string;
}

export interface Product {
  id: string;
  title: string;
  categorySlug: CategorySlug;
  categoryName: string;
  summary: string;
  description: string;
  image?: string;
  features: string[];
  fabricOptions: string[];
  bestFor: string;
  moqNotice?: string;
  isDraft: boolean;
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  clientSector: string;
  categorySlug: CategorySlug;
  location: string;
  summary: string;
  image?: string;
  deliverables: string[];
  fabricsUsed: string;
  turnaroundTime?: string;
  isDemonstrationOnly: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: 'Scissors' | 'ShieldCheck' | 'Sparkles' | 'Truck';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'ordering' | 'customization' | 'delivery' | 'fabrics';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: {
    city: string;
    country: string;
    addressNote: string;
    workshopArea: string;
  };
  contact: {
    phone: string;
    whatsappNumber: string;
    email: string;
    isPhoneVerified: boolean;
    isWhatsappVerified: boolean;
  };
  socials: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  navigation: NavItem[];
}
