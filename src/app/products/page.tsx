import type { Metadata } from 'next';
import { ProductsPageContent } from '@/components/pages/ProductsPageContent';
import { getSiteCopy } from '@/content/i18n';

const enMeta = getSiteCopy('en').meta;

export const metadata: Metadata = {
  title: enMeta.productsTitle,
  description: enMeta.productsDescription,
  alternates: {
    canonical: '/products',
    languages: {
      en: '/products',
      fr: '/fr/products',
    },
  },
};

export default function ProductsPage() {
  return <ProductsPageContent locale="en" />;
}
