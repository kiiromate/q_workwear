import { FAQItem } from '@/types';

export const aboutPageContent = {
  hero: {
    badge: 'Crafted in Kigali, Rwanda',
    title: 'Precision Workwear Tailored for Professional Teams',
    subtitle:
      'Founded by Quddus (Q) and Tinah, Q Workwear delivers dependable, durable, and custom-tailored uniforms to businesses and institutions across Kigali and Rwanda.',
  },
  story: {
    title: 'Closing the Gap Between Cheap Imports and Slow Tailoring',
    paragraphs: [
      'For years, growing businesses in Rwanda faced an unenviable choice when outfitting their teams: either purchase generic, ill-fitting synthetic uniforms imported from overseas that disintegrate after a few washes, or commission slow boutique tailors who struggle with volume and consistency.',
      'Quddus and Tinah established Q Workwear to provide a dependable, modern alternative. Combining dedicated tailoring craftsmanship with disciplined commercial production, Q Workwear delivers uniforms that staff are proud to wear and procurement managers can trust for years.',
      'From our workshop in Kigali, we manage the entire lifecycle of your uniforms: from fabric sourcing and custom sizing to computerized embroidery, reinforced stitching, and prompt delivery directly to your workplace.',
    ],
  },
  founders: {
    title: 'Meet the Founders',
    subtitle: 'Hands-on leadership, dedicated craft, and direct customer care.',
    leaders: [
      {
        name: 'Quddus (Q)',
        role: 'Co-Founder & Head of Production',
        bio: 'Oversees pattern cutting, fabric durability testing, industrial machinery operations, and bulk quality assurance. Dedicated to ensuring every seam withstands daily commercial wear.',
      },
      {
        name: 'Tinah',
        role: 'Co-Founder & Client Operations',
        bio: 'Manages client consultations, bespoke measurement scheduling, branding alignment, and order logistics to deliver a seamless experience from inquiry to final fit.',
      },
    ],
  },
  craftsmanship: [
    {
      title: 'Fabric Sourcing & Testing',
      description:
        'We test every batch of cloth for colorfastness, breathability under tropical conditions, and resistance to shrinkage under standard Rwandan laundering methods.',
    },
    {
      title: 'Reinforced Construction',
      description:
        'All high-stress points—armholes, crotches, pocket corners, and side slits—are triple-stitched or bar-tacked with high-tensile core-spun polyester thread.',
    },
    {
      title: 'Direct Sizing & Fittings',
      description:
        'We visit your corporate office, hotel, or workshop in Kigali to conduct individual fittings, ensuring every staff member receives a uniform that fits comfortably.',
    },
    {
      title: 'Local Rwandan Value Creation',
      description:
        'By tailoring our workwear in Kigali, we support skilled local artisan employment, reduce import delays, and enable fast re-orders whenever you hire new staff.',
    },
  ],
};

export const contactPageContent = {
  hero: {
    badge: 'Let’s Outfit Your Team',
    title: 'Request a Custom Quotation or Schedule a Fitting',
    subtitle:
      'Connect directly with Quddus and Tinah to discuss your workforce requirements, examine fabric swatches, and receive a competitive corporate quotation.',
  },
  consultationNote: {
    title: 'What to Prepare for a Quick, Accurate Quote',
    points: [
      'Estimated quantity of garments per style or department',
      'Preferred colors and your company logo vector file (AI, PDF, or high-res PNG)',
      'Any specific environmental demands (e.g. kitchen heat, outdoor weather, heavy machine grease)',
      'Target delivery deadline for your team',
    ],
  },
  faqs: [
    {
      question: 'What is your typical turnaround time for custom uniform orders in Kigali?',
      answer:
        'Standard batch orders (20 to 150 pieces) are typically cut, tailored, embroidered, and delivered within 14 to 21 business days following fabric approval and measurement confirmation. We also offer expedited turnaround for urgent hotel openings and corporate events.',
      category: 'delivery',
    },
    {
      question: 'What is your Minimum Order Quantity (MOQ)?',
      answer:
        'Our standard minimum order quantity is 15 to 20 pieces per style. However, you can freely divide this quantity across different staff sizes (S, M, L, XL, XXL) or male/female cuts. We also produce single pre-production prototype samples for corporate approval.',
      category: 'ordering',
    },
    {
      question: 'Do you conduct on-site staff measurements at our Kigali office?',
      answer:
        'Yes. For institutional and corporate clients in Kigali, our team conducts on-site sizing sessions to take precise measurements or provide sizing trial garments, ensuring minimal disruption to your workday.',
      category: 'customization',
    },
    {
      question: 'What branding and embroidery techniques do you offer?',
      answer:
        'We offer high-density computerized embroidery (up to 12 thread colors per crest), high-durability screen printing, and heat-seal film transfers for complex multi-color logos and safety numbers.',
      category: 'customization',
    },
    {
      question: 'How do you handle repeat orders when we recruit new team members?',
      answer:
        'We archive your exact pattern specifications, fabric pantones, and digital embroidery files. When you hire new staff, you can request repeat pieces quickly with no minimum setup delays.',
      category: 'ordering',
    },
    {
      question: 'What payment terms and methods do you accept?',
      answer:
        'We accept MTN Mobile Money (MoMo Pay), Bank Transfer (RWF/USD), and certified company cheques. Orders typically proceed with a standard 50% mobilization deposit upon sample approval and the remaining balance upon verified delivery.',
      category: 'ordering',
    },
  ] as FAQItem[],
};
