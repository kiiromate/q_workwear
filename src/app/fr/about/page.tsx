import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';
import { getSiteCopy } from '@/content/i18n';

const frMeta = getSiteCopy('fr').meta;

export const metadata: Metadata = {
  title: frMeta.aboutTitle,
  description: frMeta.aboutDescription,
  alternates: {
    canonical: '/fr/about',
    languages: {
      en: '/about',
      fr: '/fr/about',
    },
  },
};

export default function FrenchAboutPage() {
  return <AboutPageContent locale="fr" />;
}
