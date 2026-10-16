import type { FAQItem } from '@/types';

export const aboutPageContent = {
  title: 'Tailored for Rwandan teams.',
  introduction: 'Q Workwear is a Kigali-based uniform and workwear manufacturer led by Quddus and Tinah. We craft tailored apparel solutions for commercial offices, hospitality venues, industrial teams, healthcare facilities, schools, and organizations across Rwanda.',
  mission: 'Our focus is providing high-quality equipment and apparel tailored to give your team safety, comfort, and professional confidence at competitive prices.',
  values: [
    { title: 'Integrity', desc: 'Honest communication on fabrics, production schedules, and order feasibility.' },
    { title: 'Realistic execution', desc: 'Practical designs engineered for daily wear, local climate, and real working environments.' },
    { title: 'Efficient responsibility', desc: 'Reliable delivery, personalized branding, and responsive service for teams of all sizes.' },
  ],
  approach: 'An executive office, a fast-paced commercial kitchen, a field engineering crew: each demands different performance from a uniform. We start with your day-to-day requirements, then collaborate on garment silhouettes, fabric durability, colorways, and bespoke embroidery.',
};

export const contactPageContent = {
  faqs: [
    {
      question: 'What should I include in my enquiry?',
      answer: 'Share your organization name, approximate team size or garment quantity, preferred colors, and target timeline. If you have branding files (logo, embroidery mockups) or reference styles, mention them in your message.',
      category: 'ordering',
    },
    {
      question: 'Can we request custom designs or sectors not listed online?',
      answer: 'Yes. Q Workwear produces bespoke uniforms tailored to your specific industry requirements, including healthcare coats, field waistcoats, sports apparel, and specialized protective garments.',
      category: 'customization',
    },
    {
      question: 'How are pricing and production schedules determined?',
      answer: 'Because every order is custom-tailored, pricing reflects fabric selection, garment complexity, branding technique (embroidery or print), and quantity. We prepare a formal quotation and agreed production schedule for your review before production begins.',
      category: 'delivery',
    },
    {
      question: 'Do you offer fitting samples or fabric consultations in Kigali?',
      answer: 'Yes. We discuss fabric swatches, sizing specs, and sample garments during the quotation process to ensure an exact fit for your team.',
      category: 'customization',
    },
  ] satisfies FAQItem[],
};
