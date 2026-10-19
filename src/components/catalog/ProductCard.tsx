import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/types';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

export function ProductCard({
  product,
  locale = 'en',
  className = '',
}: {
  product: Product;
  locale?: Locale;
  className?: string;
}) {
  const copy = getSiteCopy(locale).productsPage;
  const contactHref = `${localizeHref('/contact', locale)}?product=${encodeURIComponent(product.title)}`;
  return (
    <article className={`product-row ${className}`}>
      <h3>
        <Link
          className="product-enquiry"
          href={contactHref}
          aria-label={`${copy.enquireAboutPrefix} ${product.title}`}
        >
          {product.title}
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </h3>
      <p>{product.summary}</p>
    </article>
  );
}

