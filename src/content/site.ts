import { SiteConfig, ValuePillar, ProcessStep } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Q Workwear',
  tagline: 'Custom Workwear & Uniform Tailoring in Kigali',
  description:
    'Kigali-based uniform tailors and workwear manufacturers. We design, cut, stitch and brand durable uniforms for corporate teams, hospitality venues, industrial operations, and promotional events across Rwanda.',
  location: {
    city: 'Kigali',
    country: 'Rwanda',
    addressNote: 'In-person consultations, fabric sample reviews and fittings available across Kigali by appointment.',
    workshopArea: 'Kigali, Rwanda',
  },
  contact: {
    // Contact verification safety flags:
    // Once Q & Tinah supply their official business line, set these flags to true
    phone: '+250 788 000 000',
    whatsappNumber: '+250788000000',
    email: 'info@qworkwear.rw',
    isPhoneVerified: false,
    isWhatsappVerified: false,
  },
  socials: {
    instagram: 'https://instagram.com/qworkwear_rw',
    linkedin: 'https://linkedin.com/company/q-workwear-rwanda',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products', description: 'Browse uniform categories and specs' },
    { label: 'Our Work', href: '/work', description: 'Explore completed projects and capabilities' },
    { label: 'About Us', href: '/about', description: 'Meet founders Q & Tinah and our approach' },
    { label: 'Contact', href: '/contact', description: 'Request quotes and schedule fittings' },
  ],
};

export const valuePillars: ValuePillar[] = [
  {
    title: 'Precision Kigali Tailoring',
    description:
      'Every garment is measured, cut, and assembled locally in Kigali with reinforced seam construction, comfortable ergonomic fits, and meticulous quality checks.',
    iconName: 'Scissors',
  },
  {
    title: 'Industrial Durability',
    description:
      'We select high-tensile poly-cotton, twill, canvas, and breathable blends engineered to withstand rigorous daily wear and commercial laundering.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Custom Brand Embroidery',
    description:
      'Sharp, high-density computerized embroidery, durable heat-press transfers, and precision screen-printing that elevate your institutional identity.',
    iconName: 'Sparkles',
  },
  {
    title: 'Reliable Local Turnaround',
    description:
      'Direct communication with founders Quddus and Tinah, guaranteed production schedules, and doorstep delivery across Kigali and regional Rwanda.',
    iconName: 'Truck',
  },
];

export const productionWorkflow: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation & Fabric Selection',
    description:
      'We discuss your workforce requirements, examine fabric swatches (breathability, weight, colorfastness), and evaluate your brand branding style.',
  },
  {
    step: '02',
    title: 'Measurements & Prototype Sample',
    description:
      'For batch orders, we provide sample sizing garments or conduct on-site staff measurements in Kigali to confirm fit before bulk production begins.',
  },
  {
    step: '03',
    title: 'Precision Cutting, Tailoring & Branding',
    description:
      'Our tailors cut, stitch, and embroider your uniforms with reinforced stress points, heavy-duty zippers, and exact logo reproduction.',
  },
  {
    step: '04',
    title: 'Quality Inspection & Delivery',
    description:
      'Every piece is hand-inspected, steam-pressed, individually packaged by size or department, and delivered directly to your premises in Kigali.',
  },
];
