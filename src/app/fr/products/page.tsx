import type { Metadata } from 'next';
import { ProductsPageContent } from '@/components/pages/ProductsPageContent';
import { getSiteCopy } from '@/content/i18n';

const frMeta = getSiteCopy('fr').meta;

export const metadata: Metadata = {
  title: frMeta.productsTitle,
  description: frMeta.productsDescription,
  alternates: {
    canonical: '/fr/products',
    languages: {
      en: '/products',
      fr: '/fr/products',
    },
  },
};

export default function FrenchProductsPage() {
  return <ProductsPageContent locale="fr" />;
}
