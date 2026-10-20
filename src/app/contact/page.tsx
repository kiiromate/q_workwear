import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/ContactPageContent';
import { getSiteCopy } from '@/content/i18n';

const enMeta = getSiteCopy('en').meta;

export const metadata: Metadata = {
  title: enMeta.contactTitle,
  description: enMeta.contactDescription,
  alternates: {
    canonical: '/contact',
    languages: {
      en: '/contact',
      fr: '/fr/contact',
    },
  },
};

export default function ContactPage() {
  return <ContactPageContent locale="en" />;
}
