import type { Metadata } from 'next';
import { getSiteCopy } from '@/content/i18n';
import { config } from '@/lib/config';

const frMeta = getSiteCopy('fr').meta;

export const metadata: Metadata = {
  title: {
    default: frMeta.homeTitle,
    template: '%s | Q Workwear Kigali',
  },
  description: frMeta.siteDescription,
  alternates: {
    canonical: '/fr',
    languages: {
      en: '/',
      fr: '/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_RW',
    alternateLocale: ['en_RW'],
    url: `${config.siteUrl}/fr`,
    title: frMeta.homeTitle,
    description: frMeta.siteDescription,
    siteName: 'Q Workwear',
  },
};

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
