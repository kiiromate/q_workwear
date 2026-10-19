import type { Metadata } from 'next';
import { WorkPageContent } from '@/components/pages/WorkPageContent';
import { getSiteCopy } from '@/content/i18n';

const frMeta = getSiteCopy('fr').meta;

export const metadata: Metadata = {
  title: frMeta.workTitle,
  description: frMeta.workDescription,
  alternates: {
    canonical: '/fr/work',
    languages: {
      en: '/work',
      fr: '/fr/work',
    },
  },
};

export default function FrenchWorkPage() {
  return <WorkPageContent locale="fr" />;
}
