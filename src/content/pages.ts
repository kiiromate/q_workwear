import type { FAQItem } from '@/types';

export const aboutPageContent = {
  title: 'Made for the working day.',
  introduction: 'Q Workwear is a Kigali-based workwear and uniform business led by Quddus and Tinah.',
  approach: 'An office team, a busy kitchen, a workshop crew: each needs something different from a uniform. We start with the work, then discuss the garment, colour, fit and branding with you.',
};

export const contactPageContent = {
  faqs: [
    { question: 'What should I include in my enquiry?', answer: 'Tell us the type of garment, approximate quantity, preferred colours and target date. Reference images and your logo can help explain what you have in mind.', category: 'ordering' },
    { question: 'Can we discuss a design of our own?', answer: 'Yes. Include your reference, sketch or existing uniform in the conversation so we can discuss the details of your order.', category: 'customization' },
    { question: 'How are price and timing agreed?', answer: 'The quotation depends on the garment, fabric, branding and quantity. Ask for the price and production schedule for your specific order before confirming it.', category: 'delivery' },
  ] satisfies FAQItem[],
};
