import type { FAQItem } from '@/types';
import { getSiteCopy } from './i18n';

const enAbout = getSiteCopy('en').aboutPage;
const enContact = getSiteCopy('en').contactPage;

export const aboutPageContent = {
  title: enAbout.title,
  introduction: enAbout.introParagraphs[0],
  mission: enAbout.lead,
  values: enAbout.values,
  approach: enAbout.introParagraphs[1],
};

export const contactPageContent = {
  faqs: enContact.faqs.map((faq, idx) => ({
    question: faq.question,
    answer: faq.answer,
    category: (idx === 0 ? 'ordering' : idx === 2 ? 'delivery' : 'customization') as FAQItem['category'],
  })) satisfies FAQItem[],
};

