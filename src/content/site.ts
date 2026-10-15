import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Q Workwear',
  tagline: 'Custom workwear, tailored in Kigali',
  description: 'Custom uniforms and branded apparel in Kigali, Rwanda. Explore corporate, hospitality and industrial workwear, and discuss your team’s order with Q Workwear.',
  location: { city: 'Kigali', country: 'Rwanda', addressNote: 'Contact us to discuss your order.', workshopArea: 'Kigali, Rwanda' },
  contact: {
    phone: '',
    whatsappNumber: '',
    email: 'qworkwearsolution@gmail.com',
    isPhoneVerified: false,
    isWhatsappVerified: false,
  },
  socials: {},
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/products' },
    { label: 'Lookbook', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
