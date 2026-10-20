import type { Metadata } from 'next';
import { ContactPageContent } from '@/components/pages/ContactPageContent';
import { getSiteCopy } from '@/content/i18n';

const frMeta = getSiteCopy('fr').meta;

export const metadata: Metadata = {
  title: frMeta.contactTitle,
  description: frMeta.contactDescription,
  alternates: {
    canonical: '/fr/contact',
    languages: {
      en: '/contact',
      fr: '/fr/contact',
    },
  },
};

export default function FrenchContactPage() {
  return <ContactPageContent locale="fr" />;
}
