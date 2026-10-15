import { siteConfig } from '@/content/site';

export const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://q-workwear.pages.dev',
  isProduction: process.env.NODE_ENV === 'production',
  defaultOgImage: '/images/logo/q-workwear-original.png',
  keywords: [
    'Q Workwear',
    'workwear Kigali',
    'uniforms Rwanda',
    'corporate uniforms Kigali',
    'hospitality uniforms Rwanda',
    'chef jackets Kigali',
    'industrial safety wear Rwanda',
    'custom overalls Kigali',
    'branded t-shirts Kigali',
    'embroidery Kigali',
    'uniform tailoring Rwanda',
  ],
  author: 'Quddus & Tinah',
  copyrightYear: new Date().getFullYear(),
};
