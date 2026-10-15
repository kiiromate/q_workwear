"use client";

import { Suspense } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { categories, products } from '@/content/catalog';
import type { CategorySlug } from '@/types';
import { CategoryFilter } from '@/components/catalog/CategoryFilter';
import { ProductCard } from '@/components/catalog/ProductCard';
import { CTASection } from '@/components/home/CTASection';

function CollectionBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const queryCategory = params.get('category');
  const activeCategory: CategorySlug | 'all' = categories.find((category) => category.id === queryCategory)?.id || 'all';
  const visible = activeCategory === 'all' ? categories : categories.filter((category) => category.id === activeCategory);
  const selectCategory = (category: CategorySlug | 'all') => {
    const next = new URLSearchParams(params.toString());
    if (category === 'all') next.delete('category'); else next.set('category', category);
    router.push(`${pathname}${next.size ? `?${next.toString()}` : ''}`, { scroll: false });
  };
  return <>
    <CategoryFilter activeCategory={activeCategory} onSelectCategory={selectCategory} />
    <p role="status" className="sr-only">{visible.length} collections shown</p>
    <div className="collection-grid">
      {visible.map((category) => <section key={category.id} aria-labelledby={`collection-${category.id}`}>
        <div className="collection-image catalog-image"><Image src={category.image} alt={`${category.name} garment styles`} fill sizes="(max-width: 640px) 88vw, 44vw" /></div>
        <div className="collection-caption"><h2 id={`collection-${category.id}`}>{category.name}</h2></div>
        <p className="collection-description">{category.description}</p>
        <div className="collection-products">{products.filter((product) => product.categorySlug === category.id).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>)}
    </div>
  </>;
}

export default function ProductsPage() {
  return <>
    <div className="container page-intro"><h1 className="display">The collections.</h1><p className="lead">Find your team’s starting point. Select a garment to enquire.</p></div>
    <div className="container catalog-body"><Suspense fallback={<p className="lead" role="status">Loading collections…</p>}><CollectionBrowser /></Suspense></div>
    <CTASection />
  </>;
}
