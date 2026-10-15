import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/types';

export function ProductCard({ product, className = '' }: { product: Product; className?: string }) {
  return (
    <article className={`product-row ${className}`}>
      <h3><Link className="product-enquiry" href={`/contact?product=${encodeURIComponent(product.title)}`} aria-label={`Enquire about ${product.title}`}>{product.title}<ArrowUpRight aria-hidden="true" size={18} /></Link></h3>
      <p>{product.summary}</p>
    </article>
  );
}
