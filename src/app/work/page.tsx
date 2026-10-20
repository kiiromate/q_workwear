import type { Metadata } from 'next';
import { WorkPageContent } from '@/components/pages/WorkPageContent';
import { getSiteCopy } from '@/content/i18n';

const enMeta = getSiteCopy('en').meta;

export const metadata: Metadata = {
  title: enMeta.workTitle,
  description: enMeta.workDescription,
  alternates: {
    canonical: '/work',
    languages: {
      en: '/work',
      fr: '/fr/work',
    },
  },
};

export default function WorkPage() {
  return <WorkPageContent locale="en" />;
}
