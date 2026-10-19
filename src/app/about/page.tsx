import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/AboutPageContent';
import { getSiteCopy } from '@/content/i18n';

const enMeta = getSiteCopy('en').meta;

export const metadata: Metadata = {
  title: enMeta.aboutTitle,
  description: enMeta.aboutDescription,
  alternates: {
    canonical: '/about',
    languages: {
      en: '/about',
      fr: '/fr/about',
    },
  },
};

export default function AboutPage() {
  return <AboutPageContent locale="en" />;
}
